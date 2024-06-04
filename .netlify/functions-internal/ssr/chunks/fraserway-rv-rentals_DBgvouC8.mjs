import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_49uZQKwN.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"project-summary\">Project Summary</h1>\n<p>Fraserway RV’s Rental Division requested a series of short 3 minute videos to help them advertise their RV Rental fleet to both dmoestic and international customers.</p>\n<details open>\n<summary><strong>Marketing Video</strong></summary>\n<p></p><div class=\"video-container\" align=\"center\">\n<iframe style=\"aspect-ratio: 16/9\" width=\"100%\" src=\"https://www.youtube.com/embed/4zpVCo7t_xM?si=73lB1-qhlHISVdaO\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>\n</div>\n<p></p>\n<h3 id=\"project-goal\">Project Goal</h3>\n<p>Create a series of short RV rental promotional video and establish new standards for video production.</p> \n<h3 id=\"project-role\">Project Role</h3>\n<p>Producer &#x26; Scriptwriter</p> \n<h3 id=\"key-learnings\">Key Learnings</h3>\n<ul><li>Creating a base script template first that allows you to quickly swap out keywords and re-use scenes.</li></ul>\n<ul><li>The base script will help formulate and generate a shot list</li></ul>\n</details>";

				const frontmatter = {"title":"Fraserway RV Rentals","pubDate":"2019-10-01T00:00:00.000Z","projectDuration":"1 Month","isDraft":false,"description":"Providing an RV Rental Fleet series for customers.","role":"Producer & Scriptwriter","category":"Video Production","thumbnail":"../../images/portfolio/fraserway-rentals/FraserwayRVRentals.jpg","alt":"Fraserway RV Branded Items","technology":"Adobe Premiere, Microsoft Word","isLocked":false,"cta":"Learn More","deliverables":["YouTube","Videos"]};
				const file = "/Users/jackieho/portfolio2024-final-1/src/content/portfolio/fraserway-rv-rentals.md";
				const url = undefined;
				function rawContent() {
					return "# Project Summary\nFraserway RV's Rental Division requested a series of short 3 minute videos to help them advertise their RV Rental fleet to both dmoestic and international customers.\n\n<details open>\n<summary><strong>Marketing Video</strong></summary>\n<p><div class=\"video-container\" align=\"center\">\n<iframe style=\"aspect-ratio: 16/9\" width=\"100%\" src=\"https://www.youtube.com/embed/4zpVCo7t_xM?si=73lB1-qhlHISVdaO\" title=\"YouTube video player\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>\n</div>\n</p>\n\n### Project Goal\n<p>Create a series of short RV rental promotional video and establish new standards for video production.</p> \n\n### Project Role\n<p>Producer & Scriptwriter</p> \n\n### Key Learnings\n<ul><li>Creating a base script template first that allows you to quickly swap out keywords and re-use scenes.</li></ul>\n<ul><li>The base script will help formulate and generate a shot list</li></ul>\n</details>";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"project-summary","text":"Project Summary"},{"depth":3,"slug":"project-goal","text":"Project Goal"},{"depth":3,"slug":"project-role","text":"Project Role"},{"depth":3,"slug":"key-learnings","text":"Key Learnings"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
