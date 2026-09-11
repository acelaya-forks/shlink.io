import { readFileSync } from 'node:fs';
import Fuse from 'fuse.js';

export async function GET() {
  const currentDir = process.cwd();
  const documentationFiles = Object.keys(import.meta.glob('./documentation/**/*.mdx'));
  const docsPages = documentationFiles.map((file) => ({
    content: readFileSync(`${currentDir}/src/pages/${file}`)
      .toString()
      // Remove everything before the page title, which includes imports, exports and the frontmatter
      .replace(/^[\s\S]*?(?=^##\s)/m, ''),
  }));

  const fuseIndex = Fuse.createIndex(['content'], docsPages);

  return new Response(JSON.stringify({ docsPages, fuseIndex }), {
    headers: { 'content-type': 'application/json' },
  });
}
