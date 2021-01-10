# Notes

Webpages to record learning notes.

## Build using:

- [11ty](https://www.11ty.dev/) for generating static site
- [Nunjucks](https://mozilla.github.io/nunjucks/) for templates & Markdown for page contents
- [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/) for styles

## Commands

- Run code locally with hot-reload
  `npm run start` or `npx eleventy --serve`

- Build code
  `npm run build` or `npx eleventy`

## Folder Structure

| Folder            | Contents                                                  |
| ----------------- | --------------------------------------------------------- |
| 11ty-scripts      | 11ty configuration scripts                                |
| src/\_data        | Global data files                                         |
| src/\_includes    | Include files, Extends files, Partials, or Macros         |
| src/\_layouts     | Templates of the site page layouts                        |
| src/assets/libs   | External or Third-party libraries                         |
| src/pages         | Site Pages, segregated into folders based on the category |

### References

1. [11ty Tutorials](https://www.11ty.dev/docs/tutorials/)
2. [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
