import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_xL2yxiN_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"New Year's Eve Vancouver","pubDate":"2015-10-21T00:00:00.000Z","projectDuration":"1 Month","isDraft":true,"description":"Celebrating a new event at the year end.","role":"Graphic Designer","category":"Brand Identity","thumbnail":"../../images/portfolio/nyevan/nyevan.jpg","alt":"Graphic","technology":"Illustrator","isLocked":false,"cta":"Coming Soon","deliverables":["Logo"],"carousel":[],"hero":"../../images/portfolio/nyevan/nyevan.jpg"};
				const file = "/Users/jackieho/portfolio2024-final-1/src/content/Archive/nyevan.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };