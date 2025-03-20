import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import rehypePrettyCode from 'rehype-pretty-code';
import { siteConfig } from './src/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: siteConfig.site,
    integrations: [tailwind(), mdx(), sitemap()],
    markdown: {
        rehypePlugins: [
            [
                rehypePrettyCode,
                {
                    theme: 'github-dark',
                    onVisitLine(node) {
                        if (node.children.length === 0) {
                            node.children = [{ type: 'text', value: ' ' }];
                        }
                    },
                },
            ],
        ],
    },
});
