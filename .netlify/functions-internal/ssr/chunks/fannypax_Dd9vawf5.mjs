import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_xL2yxiN_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"project-summary\">Project Summary</h1>\n<p>Coordinating a group trip sucks. Think about how difficult it is to plan your own trips. Now multiply that by 5, or 10 people.</p>\n<p>This is where FannyPax comes in. Our goal is to make group travel planning pain-free so friends can have more fun, less fuss!</p>\n<p><strong>Team Members:</strong> Jackie Ho, Grace Lau, Lansi Chu &#x26; Jason Yang.</p>\n<h2 id=\"market-validations-from-interviews\">Market Validations from Interviews</h2>\n<ul>\n<li>“Letting a complete stranger tag along in your group because you assumed someone in your group knew him/her”</li>\n<li>“That people don’t want to make decisions, so someone else makes it for them and then they are unhappy that it’s not like they thought it would be”</li>\n<li>“Getting everyone to meet up at the specified time”</li>\n<li>“I’ve never travelled with a big group before but I can imagine it would be frustrating if everyone wanted to do different things at the destination place.”</li>\n</ul>\n<h2 id=\"features\">Features</h2>\n<ul>\n<li>Event Voting\n<ul>\n<li>Upvote system</li>\n<li>Timer Expiry</li>\n</ul>\n</li>\n<li>Calendar Syncing</li>\n<li>Groups &#x26; Subgroups</li>\n</ul>\n<h2 id=\"business-model\">Business Model</h2>\n<ol>\n<li>Our business model is to monetize through advertising. Once the group has agree upon there trip itinerary our app would suggest activities that they can go do on their free time.  While there on their trip, our app will be suggesting things for them to do.  “Hey, we notice that you have 4 hours free would you like to check this festival thats 5 minutes away?”.</li>\n</ol>";

				const frontmatter = {"title":"FannyPax","pubDate":"2015-07-01T00:00:00.000Z","projectDuration":"3 days","isDraft":true,"description":"More fun & less fuss with FannyPAX!","role":"Product Manager","category":"Product","thumbnail":"../../images/portfolio/fannypax/placeholder.png","alt":"FannyPAX","technology":"Adobe Illustrator, Adobe InDesign, Adobe Photoshop","isLocked":false,"cta":"COMING SOON","deliverables":["Product Concept","UX/UI"],"carousel":[],"hero":"../../images/portfolio/fannypax/placeholder.png"};
				const file = "/Users/jackieho/portfolio2024-final-1/src/content/Archive/fannypax.md";
				const url = undefined;
				function rawContent() {
					return " \n# Project Summary\nCoordinating a group trip sucks. Think about how difficult it is to plan your own trips. Now multiply that by 5, or 10 people. \n\nThis is where FannyPax comes in. Our goal is to make group travel planning pain-free so friends can have more fun, less fuss!  \n\n<strong>Team Members:</strong> Jackie Ho, Grace Lau, Lansi Chu & Jason Yang.\n\n\n## Market Validations from Interviews\n- “Letting a complete stranger tag along in your group because you assumed someone in your group knew him/her”\n- “That people don't want to make decisions, so someone else makes it for them and then they are unhappy that it's not like they thought it would be”\n- “Getting everyone to meet up at the specified time”\n- \"I've never travelled with a big group before but I can imagine it would be frustrating if everyone wanted to do different things at the destination place.\"\n\n## Features\n- Event Voting\n    - Upvote system\n    - Timer Expiry\n- Calendar Syncing\n- Groups & Subgroups\n\n## Business Model\n1) Our business model is to monetize through advertising. Once the group has agree upon there trip itinerary our app would suggest activities that they can go do on their free time.  While there on their trip, our app will be suggesting things for them to do.  “Hey, we notice that you have 4 hours free would you like to check this festival thats 5 minutes away?”.\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"project-summary","text":"Project Summary"},{"depth":2,"slug":"market-validations-from-interviews","text":"Market Validations from Interviews"},{"depth":2,"slug":"features","text":"Features"},{"depth":2,"slug":"business-model","text":"Business Model"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
