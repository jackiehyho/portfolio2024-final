import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_xL2yxiN_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"project-summary\">Project Summary</h1>\n<p>Providing behind the scenes and live coverage of the event at UBC as a member of Hype Life Films.</p>\n<p></p><div class=\"video-container\" align=\"center\">\n<iframe style=\"aspect-ratio: 16/9\" width=\"100%\" src=\"https://www.youtube.com/embed/qlFWh9TmLNw?si=8LzTN0-SceloF4QI\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>\n</div><p></p>";

				const frontmatter = {"title":"Wong Fu & Yuri Tag Live in Vancity","pubDate":"2015-06-30T00:00:00.000Z","projectDuration":"1 Week","isDraft":true,"description":"Covering one of the original YouTubers during their tour.","role":"Videographer","category":"Video Production","thumbnail":"../../images/portfolio/wong-fu/wong-fu.jpeg","alt":"Hype Life Films","technology":"None","isLocked":false,"cta":"Learn more","deliverables":["Video"],"carousel":[],"hero":"../../images/portfolio/wong-fu/wong-fu.jpeg"};
				const file = "/Users/jackieho/portfolio2024-final-1/src/content/Archive/wong-fu-yuri-tag-vancouver.md";
				const url = undefined;
				function rawContent() {
					return " \n# Project Summary\nProviding behind the scenes and live coverage of the event at UBC as a member of Hype Life Films.\n\n<p><div class=\"video-container\" align=\"center\">\n<iframe style=\"aspect-ratio: 16/9\" width=\"100%\" src=\"https://www.youtube.com/embed/qlFWh9TmLNw?si=8LzTN0-SceloF4QI\" title=\"YouTube video player\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>\n</div></p>\n\n\n\n\n\n\n\n";
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
