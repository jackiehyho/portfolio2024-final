import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_49uZQKwN.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"project-summary\">Project Summary</h1>\n<p>A visual identity package was created for Bar Perry that included logos, fonts, colours and stationary. The project was a success and the client is happy with what he had received.</p>";

				const frontmatter = {"title":"Boogaloo Academy","pubDate":"2015-06-30T00:00:00.000Z","projectDuration":"1 Week","isDraft":true,"description":"Marketing Campaign Design","role":"Designer","category":"Campaign Design","thumbnail":"../../images/portfolio/fraserway/fraserway-logo.png","alt":"Boogaloo Academy","technology":"Illustrator","isLocked":false,"cta":"Learn more","deliverables":["Website"]};
				const file = "/Users/jackieho/portfolio2024-final-1/src/content/portfolio/boogaloo-academy.md";
				const url = undefined;
				function rawContent() {
					return " \n# Project Summary\nA visual identity package was created for Bar Perry that included logos, fonts, colours and stationary. The project was a success and the client is happy with what he had received.\n\n\n\n\n\n\n\n\n\n";
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
