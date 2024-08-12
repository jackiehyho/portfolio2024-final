import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_xL2yxiN_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"key-takeaways\">KEY TAKEAWAYS</h1>\n<h2 id=\"what-is-marketing\">What is Marketing?</h2>\n<p>According to American Marketing Association (AMA), marketing is the activity, institutions, and processes for creating, communicating, delivering, and exchanging offerings that have value.</p>\n<p>Marketing is</p>";

				const frontmatter = {"title":"What is Marketing?","pubDate":"2024-01-09T00:00:00.000Z","isDraft":true,"description":"Astro is a web framework that allows you to create content-rich web experiences.","author":"Jackie Ho","category":"Front-End Frameworks","thumbnail":"../../images/blogs/astro-as-a-front-end-framework/astro.png","alt":"goodbye"};
				const file = "/Users/jackieho/portfolio2024-final-1/src/content/blogs/what-is-marketing.md";
				const url = undefined;
				function rawContent() {
					return "\n# KEY TAKEAWAYS\n\n\n\n## What is Marketing?\nAccording to American Marketing Association (AMA), marketing is the activity, institutions, and processes for creating, communicating, delivering, and exchanging offerings that have value.\n\nMarketing is \n\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"key-takeaways","text":"KEY TAKEAWAYS"},{"depth":2,"slug":"what-is-marketing","text":"What is Marketing?"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
