import { FC } from 'react';
import dynamic from 'next/dynamic';

const DocSearchReact = dynamic(() => import('@docsearch/react').then(({ DocSearch }) => DocSearch), { ssr: false });

const DocsSearch: FC = () =>
  <DocSearchReact apiKey="0dd162447ab255a125917745c912176b" appId="9SA2I2A9Q8" indexName="shlink" />;

export default DocsSearch;
