import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Dt-RJx1C.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"key-takeaways\">KEY TAKEAWAYS</h1>\n<ul>\n<li>JavaScript is removed by default</li>\n<li>Static HTML Generator</li>\n<li>Server-side Rendering</li>\n<li>Higher chance of visibility and ranking for Search Engines</li>\n<li>Island Architecture design pattern</li>\n<li>Builds on the technique of Partial or Selective Hydration</li>\n</ul>\n<h2 id=\"what-is-astro\">What is Astro?</h2>\n<p>Astro is a web framework that allows you to create content-rich web experiences. It pioneered and popularized a front-end architecture called islands. Islands architecture organizes application code into small self-contained modules based on features or parts of the application. It also by default strips away all the initial JavaScript that may slow a page load and reintroduces it later to allow the web experience to be lightning fast and search engine friendly.</p>";

				const frontmatter = {"title":"Why Choose Astro?","pubDate":"2024-01-09T00:00:00.000Z","isDraft":true,"description":"Astro is a web framework that allows you to create content-rich web experiences.","author":"Jackie Ho","category":"Front-End Frameworks","thumbnail":"../../images/blogs/astro-as-a-front-end-framework/astro.png","alt":"goodbye"};
				const file = "C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/blogs/differences-between-brand-customer-and-user-experience.md";
				const url = undefined;
				function rawContent() {
					return "\r\n# KEY TAKEAWAYS\r\n\r\n- JavaScript is removed by default \r\n- Static HTML Generator\r\n- Server-side Rendering\r\n- Higher chance of visibility and ranking for Search Engines\r\n- Island Architecture design pattern\r\n- Builds on the technique of Partial or Selective Hydration \r\n\r\n## What is Astro?\r\nAstro is a web framework that allows you to create content-rich web experiences. It pioneered and popularized a front-end architecture called islands. Islands architecture organizes application code into small self-contained modules based on features or parts of the application. It also by default strips away all the initial JavaScript that may slow a page load and reintroduces it later to allow the web experience to be lightning fast and search engine friendly.\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"key-takeaways","text":"KEY TAKEAWAYS"},{"depth":2,"slug":"what-is-astro","text":"What is Astro?"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
