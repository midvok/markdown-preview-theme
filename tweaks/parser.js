({
  onWillParseMarkdown: async function (markdown) {
    // Print date, e.g. "2026-10-14". Built from parts, since MPE's sandbox has
    // no locale support (toLocaleDateString() ignores its locale argument).
    const d = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    const today = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

    // Default Puppeteer PDF options
    const defaults =
      "puppeteer: {format: A4, scale: 0.85, printBackground: true, " +
      "margin: {top: 23mm, bottom: 15mm, left: 20mm, right: 20mm}, " +
      "displayHeaderFooter: true, " +
      `headerTemplate: '<div style="width:100%;font-size:3mm;border-bottom:1pt solid black;margin:8mm 20mm 0;display:flex;justify-content:space-between;"><span class="title"></span><span>${today}</span></div>', ` +
      `footerTemplate: '<div style="width:100%;font-size:3mm;text-align:center;"><span class="pageNumber"></span>/<span class="totalPages"></span></div>'}`;

    const fm = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!fm) return `---\n${defaults}\n---\n${markdown}`;
    if (/^puppeteer:/m.test(fm[1])) return markdown;
    return markdown.replace(/^---\r?\n/, `---\n${defaults}\n`);
  },

  onDidParseMarkdown: async function (html) {
    return html;
  },

  onWillTransformMarkdown: async function (markdown) {
    return markdown;
  },

  onDidTransformMarkdown: async function (markdown) {
    return markdown;
  },

  processWikiLink: function ({ text, link }) {
    return {
      text,
      link: link ? link : text.endsWith(".md") ? text : `${text}.md`,
    };
  },
});
