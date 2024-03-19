import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Dt-RJx1C.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"project-summary\">Project Summary</h1>\n<p>A visual identity package was created for Bar Perry that included logos, fonts, colours and stationary. The project was a success and the client is happy with what he had received.</p>";

				const frontmatter = {"title":"Bar Perry Photography","pubDate":"2015-06-30T00:00:00.000Z","projectDuration":"1 Week","isDraft":false,"description":"Creating a brand identity for a local photographer.","author":"Jackie Ho","category":"Brand Identity","thumbnail":"../../images/portfolio/bar-perry/BarPerry.png","alt":"Bar Perry Photography","technology":"Illustrator","isLocked":true,"cta":"PASSWORD LOCKED","deliverables":["Logo"]};
				const file = "C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/barperry.md";
				const url = undefined;
				function rawContent() {
					return " \r\n# Project Summary\r\nA visual identity package was created for Bar Perry that included logos, fonts, colours and stationary. The project was a success and the client is happy with what he had received.\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
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
