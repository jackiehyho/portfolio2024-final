import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_CsBaaMGY.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"key-takeaways\">KEY TAKEAWAYS</h1>";

				const frontmatter = {"title":"Why AWS is important for Product Management?","pubDate":"2024-01-09T00:00:00.000Z","isDraft":true,"description":"Why amazon web services for Product Management","author":"Jackie Ho","category":"Front-End Frameworks","thumbnail":"../../images/blogs/astro-as-a-front-end-framework/astro.png","alt":"goodbye"};
				const file = "/Users/jackieho/portfolio2024-final-1/src/content/blogs/ux-kpi copy.md";
				const url = undefined;
				function rawContent() {
					return "\n# KEY TAKEAWAYS\n\n\n\n\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"key-takeaways","text":"KEY TAKEAWAYS"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
