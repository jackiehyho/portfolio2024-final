import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_49uZQKwN.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"project-summary\">Project Summary</h2>\n<p>3D interaction adds a very novel experience that is not available currently in a lot of websites. This novelty makes the web experience more memorible, which can lead to better user retention and shareability.</p>\n<h1 id=\"exploring-3d-case-study\">Exploring 3D Case Study</h1>\n<script type=\"module\" src=\"https://unpkg.com/@splinetool/viewer@1.0.54/build/spline-viewer.js\"></script>\n<p><spline-viewer url=\"https://prod.spline.design/4RTRFFhgCxiilGVL/scene.splinecode\"></spline-viewer></p>\n<p>After the 3D Canvas has loaded, you can use 2 fingers or a mouse to orbit the 3D Space horizontally.</p>\n<h2 id=\"performance\">Performance</h2>\n<p>I originally wanted to have 3D interactive elements as a homepage hero but opted against it as it severaly affected the performance load of the website. This defeated the purpose of building this in Astro to begin with.</p>\n<p>Loading up reduced the performance of the page up to 30 points in Lighthouse. The more objects that you have within the 3D Canvas, the harder it is on performance.</p>\n<h2 id=\"creating-the-scene\">Creating the scene</h2>\n<p>Using the pre-built objects to populate the scene with tents, fires, trees and etc.</p>\n<h2 id=\"lighting\">Lighting</h2>\n<p>I wanted to create a night environment so I removed all ambient light from the scene. I created the fire light by using a coloured spotlight to light up the space by the fire. I added a point light to the moon to ensure that it’s bright enough to illuminate the scene.</p>\n<h2 id=\"smoke-effects\">Smoke effects</h2>\n<p>Using a particle system to generate smoke effects by tweaking the speed, size, colour  and other particle attributes.</p>\n<h2 id=\"animation\">Animation</h2>\n<p>Spline also has a lot of event-based triggers for animation. For this example, I just used an on start event and rotated the fire object.</p>";

				const frontmatter = {"title":"3D Campsite Experience","pubDate":"2024-01-09T00:00:00.000Z","projectDuration":"1 Week","isDraft":false,"description":"Exploring 3D interaction on the web.","role":"Jackie Ho","category":"3D Interaction","thumbnail":"../../images/portfolio/campsite/campsite.jpg","alt":"campsite","technology":"Spline, Lighthouse, Astro","isLocked":false,"cta":"Learn more","deliverables":["3D Demo"]};
				const file = "/Users/jackieho/portfolio2024-final-1/src/content/portfolio/campsite.md";
				const url = undefined;
				function rawContent() {
					return "## Project Summary\n3D interaction adds a very novel experience that is not available currently in a lot of websites. This novelty makes the web experience more memorible, which can lead to better user retention and shareability. \n\n\n# Exploring 3D Case Study\n<script type=\"module\" src=\"https://unpkg.com/@splinetool/viewer@1.0.54/build/spline-viewer.js\"></script>\n<spline-viewer  url=\"https://prod.spline.design/4RTRFFhgCxiilGVL/scene.splinecode\"></spline-viewer>\n\nAfter the 3D Canvas has loaded, you can use 2 fingers or a mouse to orbit the 3D Space horizontally.\n\n\n\n## Performance\nI originally wanted to have 3D interactive elements as a homepage hero but opted against it as it severaly affected the performance load of the website. This defeated the purpose of building this in Astro to begin with. \n\nLoading up reduced the performance of the page up to 30 points in Lighthouse. The more objects that you have within the 3D Canvas, the harder it is on performance.\n\n## Creating the scene\nUsing the pre-built objects to populate the scene with tents, fires, trees and etc.\n\n## Lighting\nI wanted to create a night environment so I removed all ambient light from the scene. I created the fire light by using a coloured spotlight to light up the space by the fire. I added a point light to the moon to ensure that it's bright enough to illuminate the scene.\n\n## Smoke effects\nUsing a particle system to generate smoke effects by tweaking the speed, size, colour  and other particle attributes.\n\n## Animation\nSpline also has a lot of event-based triggers for animation. For this example, I just used an on start event and rotated the fire object.\n\n \n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"project-summary","text":"Project Summary"},{"depth":1,"slug":"exploring-3d-case-study","text":"Exploring 3D Case Study"},{"depth":2,"slug":"performance","text":"Performance"},{"depth":2,"slug":"creating-the-scene","text":"Creating the scene"},{"depth":2,"slug":"lighting","text":"Lighting"},{"depth":2,"slug":"smoke-effects","text":"Smoke effects"},{"depth":2,"slug":"animation","text":"Animation"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
