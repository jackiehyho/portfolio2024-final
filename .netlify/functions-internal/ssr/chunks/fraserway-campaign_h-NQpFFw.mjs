import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_xL2yxiN_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"job-summary\">Job Summary</h1>\n<p>A visual identity package was created for Bar Perry that included logos, fonts, colours and stationary. The project was a success and the client is happy with what he had received.</p>\n<h2 id=\"example-work\">Example Work</h2>\n<details>\n<summary><strong>PPC</strong></summary>\n<p><img class=\"portfolio-images\" src=\"/images/portfolio/fraserway/newsprint.png\" alt=\"Newsprint Ad\" width=\"100%\" height=\"100%\"></p>\n<h3 id=\"project-goal\">Project Goal</h3>\n<p>Designing a newsprint ad that will support driving traffic to the dealership.</p> \n<h3 id=\"project-role\">Project Role</h3>\n<p>Graphic Designer</p> \n<h3 id=\"key-learnings\">Key Learnings</h3>\n<ul><li>Double check that the blacks are are set to pure black. Rich black may oversaturate the newsprint medium with ink causing it to smear all over the ad.</li></ul>\n</details>\n<details>\n<details>\n<summary><strong>Newsprint</strong></summary>\n<p><img class=\"portfolio-images\" src=\"/images/portfolio/fraserway/newsprint.png\" alt=\"Newsprint Ad\" width=\"100%\" height=\"100%\"></p>\n<h3 id=\"project-goal-1\">Project Goal</h3>\n<p>Designing a newsprint ad that will support driving traffic to the dealership.</p> \n<h3 id=\"project-role-1\">Project Role</h3>\n<p>Graphic Designer</p> \n<h3 id=\"key-learnings-1\">Key Learnings</h3>\n<ul><li>Double check that the blacks are are set to pure black. Rich black may oversaturate the newsprint medium with ink causing it to smear all over the ad.</li></ul>\n</details>\n<summary><strong>Email</strong></summary>\n<p></p><div class=\"video-container\" align=\"center\">\n<iframe style=\"aspect-ratio: 16/9\" width=\"100%\" src=\"https://www.youtube.com/embed/4zpVCo7t_xM?si=73lB1-qhlHISVdaO\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>\n</div>\n<p></p>\n<h3 id=\"project-goal-2\">Project Goal</h3>\n<p>Create a series of short RV rental promotional video and establish new standards for video production.</p> \n<h3 id=\"project-role-2\">Project Role</h3>\n<p>Producer &#x26; Scriptwriter</p> \n<h3 id=\"key-learnings-2\">Key Learnings</h3>\n<ul><li>Creating a base script template first that allows you to quickly swap out keywords and re-use scenes.</li></ul>\n<ul><li>The base script will help formulate and generate a shot list</li></ul>\n</details>";

				const frontmatter = {"title":"Fraserway RV Branded Items","pubDate":"2015-07-01T00:00:00.000Z","projectDuration":"2-4 Week Window","isDraft":true,"description":"Marketing Campaign Design","role":"Various Roles","category":"Marketing Design","thumbnail":"../../images/portfolio/fraserway/fraserway-logo.png","alt":"Fraserway RV Branded Items","technology":"Adobe Illustrator, MJML & Adobe Photoshop","isLocked":false,"cta":"Learn More","deliverables":["Emails","PPC","Signage","Posters"],"carousel":[],"hero":"../../images/portfolio/fraserway/fraserway-logo.png"};
				const file = "/Users/jackieho/portfolio2024-final-1/src/content/Archive/fraserway-campaign.md";
				const url = undefined;
				function rawContent() {
					return " \n# Job Summary\nA visual identity package was created for Bar Perry that included logos, fonts, colours and stationary. The project was a success and the client is happy with what he had received.\n\n## Example Work\n<details>\n<summary><strong>PPC</strong></summary>\n<p><img class=\"portfolio-images\" src=\"/images/portfolio/fraserway/newsprint.png\"  alt=\"Newsprint Ad\" width=\"100%\" height=\"100%\"></p>\n\n### Project Goal\n<p>Designing a newsprint ad that will support driving traffic to the dealership.</p> \n\n### Project Role\n<p>Graphic Designer</p> \n\n### Key Learnings\n<ul><li>Double check that the blacks are are set to pure black. Rich black may oversaturate the newsprint medium with ink causing it to smear all over the ad.</li></ul>\n</details>\n\n<details>\n\n<details>\n<summary><strong>Newsprint</strong></summary>\n<p><img class=\"portfolio-images\" src=\"/images/portfolio/fraserway/newsprint.png\"  alt=\"Newsprint Ad\" width=\"100%\" height=\"100%\"></p>\n\n### Project Goal\n<p>Designing a newsprint ad that will support driving traffic to the dealership.</p> \n\n### Project Role\n<p>Graphic Designer</p> \n\n### Key Learnings\n<ul><li>Double check that the blacks are are set to pure black. Rich black may oversaturate the newsprint medium with ink causing it to smear all over the ad.</li></ul>\n</details>\n\n<summary><strong>Email</strong></summary>\n\n<p><div class=\"video-container\" align=\"center\">\n<iframe style=\"aspect-ratio: 16/9\" width=\"100%\" src=\"https://www.youtube.com/embed/4zpVCo7t_xM?si=73lB1-qhlHISVdaO\" title=\"YouTube video player\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>\n</div>\n</p>\n\n### Project Goal\n<p>Create a series of short RV rental promotional video and establish new standards for video production.</p> \n\n### Project Role\n<p>Producer & Scriptwriter</p> \n\n### Key Learnings\n<ul><li>Creating a base script template first that allows you to quickly swap out keywords and re-use scenes.</li></ul>\n<ul><li>The base script will help formulate and generate a shot list</li></ul>\n</details>\n\n\n\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"job-summary","text":"Job Summary"},{"depth":2,"slug":"example-work","text":"Example Work"},{"depth":3,"slug":"project-goal","text":"Project Goal"},{"depth":3,"slug":"project-role","text":"Project Role"},{"depth":3,"slug":"key-learnings","text":"Key Learnings"},{"depth":3,"slug":"project-goal-1","text":"Project Goal"},{"depth":3,"slug":"project-role-1","text":"Project Role"},{"depth":3,"slug":"key-learnings-1","text":"Key Learnings"},{"depth":3,"slug":"project-goal-2","text":"Project Goal"},{"depth":3,"slug":"project-role-2","text":"Project Role"},{"depth":3,"slug":"key-learnings-2","text":"Key Learnings"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };