import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Dt-RJx1C.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"project-summary\">Project Summary</h1>\n<p>A visual identity package was created for Bar Perry that included logos, fonts, colours and stationary. The project was a success and the client is happy with what he had received.</p>";

				const frontmatter = {"title":"Fraserway RV","pubDate":"2023-04-01T00:00:00.000Z","projectDuration":"1 Week","isDraft":false,"description":"Building a Customer Journey Map for Sales.","author":"Jackie Ho","category":"Service Design","thumbnail":"../../images/portfolio/fraserway/fraserway-logo.png","alt":"Bar Perry Photography","technology":"Illustrator","isLocked":true,"cta":"Password locked","deliverables":["Customer Journey Map","Service Blueprint"]};
				const file = "C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/fraserway-campaign.md";
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
