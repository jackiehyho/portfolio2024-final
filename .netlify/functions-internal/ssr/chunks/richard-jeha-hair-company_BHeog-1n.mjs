import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_xL2yxiN_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"project-summary\">Project Summary</h1>";

				const frontmatter = {"title":"Richard Jeha Hair Company","pubDate":"2015-12-01T00:00:00.000Z","projectDuration":"1 Week","isDraft":true,"description":"Creating a logo, website and business cards..","role":"Jackie Ho","category":"Website & Brand Identity","thumbnail":"../../images/portfolio/richard-jeha/richard-jeha.jpg","alt":"Richard Jeha Hair Company","technology":"Illustrator","isLocked":false,"cta":"Learn more","deliverables":["Logo","Website"],"carousel":[],"hero":"../../images/portfolio/richard-jeha/richard-jeha.jpg"};
				const file = "/Users/jackieho/portfolio2024-final-1/src/content/Archive/richard-jeha-hair-company.md";
				const url = undefined;
				function rawContent() {
					return "# Project Summary\n\n\n\n\n\n\n\n\n\n\n\n\n";
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
