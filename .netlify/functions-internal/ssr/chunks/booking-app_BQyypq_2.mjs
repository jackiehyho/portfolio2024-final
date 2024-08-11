import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_CsBaaMGY.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"campsite-project-summary\">Campsite Project Summary</h1>\n<h2 id=\"project-discovery\">Project Discovery</h2>\n<h3 id=\"symptoms\">Symptoms</h3>\n<ul>\n<li>Rental are down in revenue.</li>\n<li>Rental systems are not working.</li>\n<li>Rental systems are difficult to use.</li>\n<li>Rental systems have a disjointed experience.</li>\n</ul>\n<h2 id=\"project-proposal\">Project Proposal</h2>\n<p>Redesign the booking system for a vehicle rental company.</p>\n<h2 id=\"understanding-the-customers-needs\">Understanding the customers needs</h2>\n<p>Creating the components</p>\n<h2 id=\"understanding-the-current-systems-in-place\">Understanding the current systems in place</h2>\n<p>Creating the components</p>\n<h2 id=\"creating-the-background\">Creating the background</h2>\n<h2 id=\"adding-motion-or-animation-to\">Adding Motion or Animation to</h2>\n<h3 id=\"creating-the-background-1\">Creating the background</h3>";

				const frontmatter = {"title":"CampFyre","pubDate":"2024-01-09T00:00:00.000Z","projectDuration":"1 Week","isDraft":true,"description":"Exploring 3D interaction on the web.","role":"Developer","category":"3D Interaction","thumbnail":"../../images/portfolio/campsite/campsite.jpg","alt":"campsite","technology":"Spline","isLocked":false,"cta":"Learn more","deliverables":["Logo","Website"],"carousel":[],"hero":"../../images/portfolio/campsite/campsite.jpg"};
				const file = "/Users/jackieho/portfolio2024-final-1/src/content/Archive/booking-app.md";
				const url = undefined;
				function rawContent() {
					return "\n# Campsite Project Summary\n## Project Discovery\n\n### Symptoms \n- Rental are down in revenue.\n- Rental systems are not working.\n- Rental systems are difficult to use.\n- Rental systems have a disjointed experience.\n\n## Project Proposal\nRedesign the booking system for a vehicle rental company.\n\n## Understanding the customers needs\nCreating the components\n\n## Understanding the current systems in place\nCreating the components\n\n\n\n## Creating the background\n\n\n## Adding Motion or Animation to\n\n### Creating the background\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"campsite-project-summary","text":"Campsite Project Summary"},{"depth":2,"slug":"project-discovery","text":"Project Discovery"},{"depth":3,"slug":"symptoms","text":"Symptoms"},{"depth":2,"slug":"project-proposal","text":"Project Proposal"},{"depth":2,"slug":"understanding-the-customers-needs","text":"Understanding the customers needs"},{"depth":2,"slug":"understanding-the-current-systems-in-place","text":"Understanding the current systems in place"},{"depth":2,"slug":"creating-the-background","text":"Creating the background"},{"depth":2,"slug":"adding-motion-or-animation-to","text":"Adding Motion or Animation to"},{"depth":3,"slug":"creating-the-background-1","text":"Creating the background"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
