import { readFile, writeFile } from "node:fs/promises";

const source = await readFile(new URL("./privacy.js", import.meta.url), "utf8");
const match = source.match(/const data = (\{[\s\S]*?\n  \});\n  const locale/);
if (!match) throw new Error("Unable to read privacy translations.");
const translations = Function(`"use strict"; return (${match[1]});`)();
const locales = ["en", "it", "es", "pt-br", "de", "fr", "ja", "ko", "hi", "id"];
const base = "https://aferende.github.io/mobile-app-privacy-policies/notifydoctor";
const escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

for (const locale of locales) {
  const t = translations[locale];
  const languageLinks = locales.map((code) => {
    const current = code === locale ? ' aria-current="page"' : "";
    return `<a${current} hreflang="${code}" lang="${code}" href="${base}/${code}/privacy/">${escapeHtml(translations[code].name)}</a>`;
  }).join("");
  const sections = t.headings.map((heading, index) => `<section><h2>${escapeHtml(heading)}</h2><p>${escapeHtml(t.paragraphs[index])}</p></section>`).join("\n");
  const alternates = locales.map((code) => `<link rel="alternate" hreflang="${code}" href="${base}/${code}/privacy/">`).join("");
  const html = `<!doctype html>
<html lang="${locale}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${escapeHtml(t.title)}</title>
  <link rel="stylesheet" href="../../../privacy.css">
  <link rel="canonical" href="${base}/${locale}/privacy/">
  ${alternates}
  <link rel="alternate" hreflang="x-default" href="${base}/en/privacy/">
</head>
<body>
  <header><h1>${escapeHtml(t.title)}</h1><p class="meta">${escapeHtml(t.updated)}</p><nav class="languages" aria-label="Languages">${languageLinks}</nav></header>
  <main><p class="intro">${escapeHtml(t.intro)}</p>${sections}<p class="notice"><a href="https://policies.google.com/privacy">Google Privacy Policy</a></p></main>
  <footer><a href="${base}/">Notify Doctor privacy</a></footer>
</body>
</html>
`;
  await writeFile(new URL(`./${locale}/privacy/index.html`, import.meta.url), html);
}
