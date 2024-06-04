import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_49uZQKwN.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"New Years Eve Vancouver","pubDate":"2015-10-21T00:00:00.000Z","projectDuration":"1 Month","isDraft":false,"description":"Celebrating a new event at the year end.","role":"Graphic Designer","category":"Brand Identity","thumbnail":"../../images/portfolio/fannypax/placeholder.png","alt":"Graphic","technology":"Illustrator","isLocked":false,"cta":"Learn more","deliverables":["Logo Design"]};
				const file = "/Users/jackieho/portfolio2024-final-1/src/content/portfolio/nyevan.md";
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
