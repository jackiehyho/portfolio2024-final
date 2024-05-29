const id = "campsite.md";
						const collection = "portfolio";
						const slug = "campsite";
						const body = "## Project Summary\r\n3D interaction adds a very novel experience that is not available currently in a lot of websites. This novelty makes the web experience more memorible, which can lead to better user retention and shareability. \r\n\r\n\r\n# Exploring 3D Case Study\r\n<script type=\"module\" src=\"https://unpkg.com/@splinetool/viewer@1.0.54/build/spline-viewer.js\"></script>\r\n<spline-viewer  url=\"https://prod.spline.design/4RTRFFhgCxiilGVL/scene.splinecode\"></spline-viewer>\r\n\r\nAfter the 3D Canvas has loaded, you can use 2 fingers or a mouse to orbit the 3D Space horizontally.\r\n\r\n\r\n\r\n## Performance\r\nI originally wanted to have 3D interactive elements as a homepage hero but opted against it as it severaly affected the performance load of the website. This defeated the purpose of building this in Astro to begin with. \r\n\r\nLoading up reduced the performance of the page up to 30 points in Lighthouse. The more objects that you have within the 3D Canvas, the harder it is on performance.\r\n\r\n## Creating the scene\r\nUsing the pre-built objects to populate the scene with tents, fires, trees and etc.\r\n\r\n## Lighting\r\nI wanted to create a night environment so I removed all ambient light from the scene. I created the fire light by using a coloured spotlight to light up the space by the fire. I added a point light to the moon to ensure that it's bright enough to illuminate the scene.\r\n\r\n## Smoke effects\r\nUsing a particle system to generate smoke effects by tweaking the speed, size, colour  and other particle attributes.\r\n\r\n## Animation\r\nSpline also has a lot of event-based triggers for animation. For this example, I just used an on start event and rotated the fire object.\r\n\r\n \r\n";
						const data = {title:"Campsite",isDraft:false,pubDate:"Mon Jan 08 2024",projectDuration:"1 Week",description:"Exploring 3D interaction on the web.",role:"Jackie Ho",thumbnail:
						new Proxy({"src":"/_astro/campsite.Ha0wBtQb.jpg","width":600,"height":400,"format":"jpg","orientation":1,"fsPath":"C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/images/portfolio/campsite/campsite.jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/images/portfolio/campsite/campsite.jpg";
							}
							
							return target[name];
						}
					})
					,alt:"campsite",category:"Web Development",technology:"Spline, Lighthouse, Astro",isLocked:false,cta:"Learn more",deliverables:["Demo"]};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/campsite.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
