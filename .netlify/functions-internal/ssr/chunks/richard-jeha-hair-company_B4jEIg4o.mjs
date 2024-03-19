import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Dt-RJx1C.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"project-summary\">Project Summary</h1>\n<ol>\n<li></li>\n</ol>";

				const frontmatter = {"title":"How to create an e-book?","pubDate":"2015-06-30T00:00:00.000Z","projectDuration":"1 Week","isDraft":true,"description":"Creating a logo, website and business cards..","author":"Jackie Ho","category":"Website & Brand Identity","thumbnail":"../../images/portfolio/bar-perry/BarPerry.png","alt":"Richard Jeha Hair Company","technology":"Illustrator","isLocked":false,"cta":"Learn more","deliverables":["Logo","Website"]};
				const file = "C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/richard-jeha-hair-company.md";
				const url = undefined;
				function rawContent() {
					return " \r\n# Project Summary\r\n1. \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"project-summary","text":"Project Summary"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
