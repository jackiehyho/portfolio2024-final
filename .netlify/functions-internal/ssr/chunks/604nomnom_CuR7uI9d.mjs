import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_xL2yxiN_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"product-summary\">Product Summary</h1>\n<p>A YouTube series that I co-founded and produced featuring Vancouver restaurants. At the peak of the channel, it grew from 0 to 15,000 within 3 months. The series was also featured on Vancity Buzz (Daily Hive) with episodes airing on Shaw Multicultural channel.</p>\n<p></p><div class=\"video-container\" align=\"center\">\n<iframe style=\"aspect-ratio: 16/9\" width=\"100%\" src=\"https://www.youtube.com/embed/cJZsrQMKuNs?si=lEwH4Vr6TcgMaNDD\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>\n</div><p></p>\n<h2 id=\"product-vision\">Product Vision</h2>\n<p>The vision of this YouTube series was to document and highlight local restaurants that produce great food do not have the budget to be advertised by the Marketing arm of a restaurant group or chain. the ecletic and diverse food.</p>\n<h2 id=\"target-audience\">Target Audience</h2>\n<h3 id=\"the-local-foodie\">The Local Foodie</h3>\n<h3 id=\"restaurant-owner\">Restaurant Owner</h3>\n<h2 id=\"episode-format\">Episode Format</h2>\n<p>Introduction</p>\n<h2 id=\"product-marketing\">Product Marketing</h2>\n<p>• We collaborated with the Daily Hive (Formerly Vancity Buzz) as a contributor to help get our which has</p>\n<h2 id=\"key-learnings--takeaways\">Key learnings &#x26; takeaways</h2>\n<p>• Restaurants are service-based establishments that require staff to produce and deliver food to their customers.</p>\n<p>• Advertising creates an increase demand on the establishment which may disrupt the quality of product being produced by the restaurant.</p>\n<p>• Restaurants tend to have low profit-margins due to competitive pricing and high operational costs.</p>\n<h3 id=\"\"></h3>";

				const frontmatter = {"title":"604NomNom","pubDate":"2012-03-01T00:00:00.000Z","projectDuration":"3 Months","isDraft":true,"description":"A YouTube series featuring Vancouver Restaurants.","role":"Co-Founder, Producer & Video Editor","category":"Video Production","thumbnail":"../../images/portfolio/604nomnom/604nomnom.jpg","alt":"604NomNom","technology":"Adobe Premiere, Adobe After Effcts, Adobe Illustrator, Adobe Photoshop","isLocked":false,"cta":"Learn More","deliverables":["Video","YouTube"],"carousel":[],"hero":"../../images/portfolio/604nomnom/604nomnom.jpg"};
				const file = "/Users/jackieho/portfolio2024-final-1/src/content/Archive/604nomnom.md";
				const url = undefined;
				function rawContent() {
					return "# Product Summary\nA YouTube series that I co-founded and produced featuring Vancouver restaurants. At the peak of the channel, it grew from 0 to 15,000 within 3 months. The series was also featured on Vancity Buzz (Daily Hive) with episodes airing on Shaw Multicultural channel.\n\n\n<p><div class=\"video-container\" align=\"center\">\n<iframe style=\"aspect-ratio: 16/9\" width=\"100%\" src=\"https://www.youtube.com/embed/cJZsrQMKuNs?si=lEwH4Vr6TcgMaNDD\" title=\"YouTube video player\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>\n</div></p>\n\n## Product Vision\nThe vision of this YouTube series was to document and highlight local restaurants that produce great food do not have the budget to be advertised by the Marketing arm of a restaurant group or chain. the ecletic and diverse food.\n\n\n\n\n\n## Target Audience\n### The Local Foodie\n\n\n\n### Restaurant Owner\n\n## Episode Format\nIntroduction\n\n\n## Product Marketing\n• We collaborated with the Daily Hive (Formerly Vancity Buzz) as a contributor to help get our which has \n\n## Key learnings & takeaways\n• Restaurants are service-based establishments that require staff to produce and deliver food to their customers. \n\n• Advertising creates an increase demand on the establishment which may disrupt the quality of product being produced by the restaurant. \n\n• Restaurants tend to have low profit-margins due to competitive pricing and high operational costs.\n\n### \n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"product-summary","text":"Product Summary"},{"depth":2,"slug":"product-vision","text":"Product Vision"},{"depth":2,"slug":"target-audience","text":"Target Audience"},{"depth":3,"slug":"the-local-foodie","text":"The Local Foodie"},{"depth":3,"slug":"restaurant-owner","text":"Restaurant Owner"},{"depth":2,"slug":"episode-format","text":"Episode Format"},{"depth":2,"slug":"product-marketing","text":"Product Marketing"},{"depth":2,"slug":"key-learnings--takeaways","text":"Key learnings & takeaways"},{"depth":3,"slug":"","text":""}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
