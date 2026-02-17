({
  // onWillParseMarkdown: async function (markdown) {
  //    return markdown;
  // },

  // Enable GitHub syntax for admonitions
  // https://github.com/shd101wyy/vscode-markdown-preview-enhanced/issues/1911
  onWillParseMarkdown: async function (markdown) {
    return new Promise((resolve, reject) => {
      const calloutRegex = /^> ?\[!(?<type>\w+)\](?<title>.*)?\r?\n(?<content>(?:>.*\r?\n?)*)/gm;
      const newMarkdown = markdown.replace(calloutRegex, (match, type, title, content) => {
        const admonitionType = type.toLowerCase();
        const admonitionTitle = title && title.trim() ? `${title.trim()}` : "";

        const admonitionContent = content
          .replace(/^> ?/gm, "")
          .split(/\r?\n/)
          .map((line) => `    ${line}`)
          .join("\n");
        return `!!! ${admonitionType} ${admonitionTitle}\n${admonitionContent}\n\n`;
      });
      return resolve(newMarkdown);
    });
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
