import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_CsBaaMGY.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"7 Key Factors of UX (The UX Honeycomb)","pubDate":"2024-01-09T00:00:00.000Z","isDraft":true,"description":"Astro is a web framework that allows you to create content-rich web experiences.","author":"Jackie Ho","category":"UX Design","thumbnail":"../../images/blogs/astro-as-a-front-end-framework/astro.png","alt":"goodbye"};
				const file = "/Users/jackieho/portfolio2024-final-1/src/content/blogs/progressive-web-applications.md";
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
