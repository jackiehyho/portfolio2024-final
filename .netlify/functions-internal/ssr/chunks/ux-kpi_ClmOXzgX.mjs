import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Dt-RJx1C.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"key-takeaways\">KEY TAKEAWAYS</h1>\n<h2 id=\"behavioural\">Behavioural</h2>\n<ul>\n<li>Task Success Rate</li>\n<li>Time on Task</li>\n<li>Search vs Navigation</li>\n<li>User Error Rate</li>\n</ul>\n<h2 id=\"attitude\">Attitude</h2>\n<ul>\n<li>System Usability Scale (SUS)</li>\n<li>Net Promoter Score (NPS)</li>\n<li>Customer Satisfaction (CSAT)</li>\n</ul>";

				const frontmatter = {"title":"UX KPIs","pubDate":"2024-01-09T00:00:00.000Z","isDraft":true,"description":"Astro is a web framework that allows you to create content-rich web experiences.","author":"Jackie Ho","category":"Front-End Frameworks","thumbnail":"../../images/blogs/astro-as-a-front-end-framework/astro.png","alt":"goodbye"};
				const file = "C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/blogs/ux-kpi.md";
				const url = undefined;
				function rawContent() {
					return "\r\n# KEY TAKEAWAYS\r\n\r\n## Behavioural\r\n- Task Success Rate\r\n- Time on Task\r\n- Search vs Navigation\r\n- User Error Rate\r\n\r\n## Attitude\r\n- System Usability Scale (SUS)\r\n- Net Promoter Score (NPS)\r\n- Customer Satisfaction (CSAT)\r\n\r\n\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"key-takeaways","text":"KEY TAKEAWAYS"},{"depth":2,"slug":"behavioural","text":"Behavioural"},{"depth":2,"slug":"attitude","text":"Attitude"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
