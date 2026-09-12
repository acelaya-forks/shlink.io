import { readFileSync } from 'node:fs';
import Fuse from 'fuse.js';
import GithubSlugger from 'github-slugger'

const slugger = new GithubSlugger()

export async function GET() {
  const currentDir = process.cwd();
  const documentationFiles = Object.keys(import.meta.glob('./documentation/**/*.mdx'));
  const docsPages = documentationFiles.flatMap((file) => {
    const fileContent = readFileSync(`${currentDir}/src/pages/${file}`)
      .toString()
      // Remove everything before the page title, which includes imports, exports and the frontmatter
      .replace(/^[\s\S]*?(?=^##\s)/m, '')

    const documentTitle = fileContent.match(/^##(?!#)\s+(.+)$/m)?.[1];
    // Split all sections in the document as individual searchable blocks, so that we can show results by block and
    // deeplink there directly
    const blocks = fileContent.match(/^#{1,6}\s+.*[\s\S]*?(?=^#{1,6}\s+|\z)/gm);

    return blocks?.map((block) => {
      const blockTitle = block.match(/^#{1,6}\s+(.+)$/m)?.[1] ?? '';
      const blockSlug = slugger.slug(blockTitle);

      return {
        documentTitle,
        blockTitle,
        blockSlug,
        content: block,
      };
    }) ?? [];
  });

  const fuseIndex = Fuse.createIndex(['content', 'blockTitle', 'documentTitle'], docsPages);

  return new Response(JSON.stringify({ docsPages, fuseIndex }), {
    headers: { 'content-type': 'application/json' },
  });
}
