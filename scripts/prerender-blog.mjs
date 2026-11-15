import fs from 'node:fs/promises';
import path from 'node:path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const origin = 'https://www.ourtripafrica.com';

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const safeJson = (value) => JSON.stringify(value).replace(/</g, '\\u003c');

const vite = await createServer({
  configFile: path.join(root, 'vite.config.ts'),
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

try {
  const [{ BLOG_POSTS }, { BlogView }] = await Promise.all([
    vite.ssrLoadModule('/src/data/safariData.ts'),
    vite.ssrLoadModule('/src/views/BlogView.tsx'),
  ]);

  const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');

  const writePage = async ({ slug, title, description, image, markup, schema }) => {
    const canonical = slug ? `${origin}/blog/${slug}` : `${origin}/blog`;
    let html = template
      .replace(/<title>.*?<\\/title>/s, `<title>${escapeHtml(title)}</title>`)
      .replace(/<meta name="description" content="[^"]*"\\s*\\/>/, `<meta name="description" content="${escapeHtml(description)}" />`)
      .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);

    const headTags = [
      `<link rel="canonical" href="${canonical}" />`,
      `<meta property="og:type" content="${slug ? 'article' : 'website'}" />`,
      `<meta property="og:url" content="${canonical}" />`,
      `<meta property="og:title" content="${escapeHtml(title)}" />`,
      `<meta property="og:description" content="${escapeHtml(description)}" />`,
      image ? `<meta property="og:image" content="${new URL(image, origin).href}" />` : '',
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
      `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
      schema ? `<script type="application/ld+json">${safeJson(schema)}</script>` : '',
    ].filter(Boolean).join('\\n    ');

    html = html.replace('</head>', `    ${headTags}\\n  </head>`);
    const outputDir = slug ? path.join(distDir, 'blog', slug) : path.join(distDir, 'blog');
    await fs.mkdir(outputDir, { recursive: true });
    await fs.writeFile(path.join(outputDir, 'index.html'), html, 'utf8');
  };

  const blogIndexMarkup = renderToStaticMarkup(
    React.createElement(BlogView, { onOpenBooking: () => {} }),
  );
  await writePage({
    title: 'African Safari Stories, Wildlife, Travel Guides & News | Our Trip Africa',
    description: 'Read practical Tanzania, Kenya, Uganda and Zanzibar safari guides, wildlife stories and travel advice from the Our Trip Africa team.',
    markup: blogIndexMarkup,
  });

  for (const post of BLOG_POSTS) {
    const markup = renderToStaticMarkup(
      React.createElement(BlogView, { onOpenBooking: () => {}, initialSlug: post.slug }),
    );
    const canonical = `${origin}/blog/${post.slug}`;
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.seoDescription || post.excerpt,
      image: post.image ? new URL(post.image, origin).href : undefined,
      datePublished: Number.isNaN(Date.parse(post.publishedDate)) ? undefined : new Date(post.publishedDate).toISOString(),
      author: { '@type': 'Organization', name: post.author?.name || 'Our Trip Africa Team' },
      publisher: {
        '@type': 'Organization',
        name: 'Our Trip Africa',
        logo: { '@type': 'ImageObject', url: `${origin}/assets/aistudio/1793428227163_297558c5.jpg` },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    };

    await writePage({
      slug: post.slug,
      title: `${post.title} | Our Trip Africa`,
      description: post.seoDescription || post.excerpt,
      image: post.image,
      markup,
      schema,
    });
  }

  console.log(`Prerendered the blog index and ${BLOG_POSTS.length} article pages.`);
} finally {
  await vite.close();
}
