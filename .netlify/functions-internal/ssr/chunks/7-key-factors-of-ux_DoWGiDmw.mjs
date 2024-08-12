import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro_xL2yxiN_.mjs';
import { g as getImage } from './pages/generic_CQAz1NQ6.mjs';
import 'clsx';

const Astro__Z12uPms = new Proxy({"src":"/_astro/image.S6EhVJL3.png","width":440,"height":440,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jackieho/portfolio2024-final-1/src/content/blogs/image.png";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "image\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "image.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z12uPms, ...props});
													occurrenceCounter++;
											}
									}
					return imageSources;
			};

			async function updateImageReferences(html) {
				return images(html).then((imageSources) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
								const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));
		
								// Use the 'index' property for each image occurrence
								const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;
		
								if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
										imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
								}
		
								const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;
		
								return spreadAttributes({
										src: imageSources[srcKey].src,
										...attributesWithoutIndex,
								});
						});
				});
		}
		

		// NOTE: This causes a top-level await to appear in the user's code, which can break very easily due to a Rollup
	  // bug and certain adapters not supporting it correctly. See: https://github.com/rollup/rollup/issues/4708
	  // Tread carefully!
			const html = await updateImageReferences("<h1 id=\"key-takeaways\">KEY TAKEAWAYS</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;image.png&#x22;,&#x22;alt&#x22;:&#x22;alt text&#x22;,&#x22;index&#x22;:0}\"></p>\n<details>\n<summary><strong>Useful</strong></summary>\n<p>\nLet’s say you have a piece of land and would like to construct a building. The first few decisions of the project include: Why are you constructing a building; is it to live in or for commercial purposes? Who might want to rent the building? Is the location favorable for potential buyers or renters? You consult appraisers and attorneys to help you with these decisions. Through these questions, you identify the business objectives and the user needs.\n</p><ul>\n<li>What types of products &#x26; services do you provide?</li>\n</ul>\nInsights gathered from these questions, he wanted his clients to know that by working with him, the possibilities are endless or infinite.  \n<p></p>\n</details>\n<details>\n<summary><strong>Usable</strong></summary>\n<p>\nThe decisions taken on the Strategy plane influence the scope. In the case of the building, you consult a professional, who inspects the land to assess what is possible to construct on it — a detached house, an apartment building, an office space or maybe a shopping mall. The scope of the project defines what the value proposition, the product and the features that meet the business objectives and user needs are.\n</p><ul>\n<li>What types of products &#x26; services do you provide?</li>\n</ul>\nInsights gathered from these questions, he wanted his clients to know that by working with him, the possibilities are endless or infinite.  \n<p></p>\n</details>\n<details>\n<summary><strong>Findable</strong></summary>\n<p>\nOnce the scope is decided, your architect creates some blueprints, showing the entrance and exits to different rooms, hallways, restrooms, elevators and staircases. This is the structure — how the user interacts with and navigates around the product’s features.\n</p><ul>\n<li>What types of products &#x26; services do you provide?</li>\n</ul>\nInsights gathered from these questions, he wanted his clients to know that by working with him, the possibilities are endless or infinite.  \n<p></p>\n</details>\n<details>\n<summary><strong>Credible</strong></summary>\n<p>\nThe architect creates sketches or 3D models based on the blueprint and includes details of the interiors. The architect also enlists the help of a builder to create a full-scale sample of a portion of the building, complete with furniture and fittings, to give you a more realistic feel of the space. Here — on the Skeleton plane — the interface of the product becomes visible.\n</p><ul>\n<li>What types of products &#x26; services do you provide?</li>\n</ul>\nInsights gathered from these questions, he wanted his clients to know that by working with him, the possibilities are endless or infinite.  \n<p></p>\n</details>\n<details>\n<summary><strong>Desirable</strong></summary>\n<p>\nFinally, an interior designer helps you decide the color of the walls, the flooring, the furniture and accessories in individual rooms. The Surface plane is where the layer of presentation is put in place.\n</p><ul>\n<li>What types of products &#x26; services do you provide?</li>\n</ul>\nInsights gathered from these questions, he wanted his clients to know that by working with him, the possibilities are endless or infinite.  \n<p></p>\n</details>\n<details>\n<summary><strong>Accessible</strong></summary>\n<p>\nFinally, an interior designer helps you decide the color of the walls, the flooring, the furniture and accessories in individual rooms. The Surface plane is where the layer of presentation is put in place.\n</p><ul>\n<li>What types of products &#x26; services do you provide?</li>\n</ul>\nInsights gathered from these questions, he wanted his clients to know that by working with him, the possibilities are endless or infinite.  \n<p></p>\n</details>\n<details>\n<summary><strong>Valuable</strong></summary>\n<p>\nFinally, an interior designer helps you decide the color of the walls, the flooring, the furniture and accessories in individual rooms. The Surface plane is where the layer of presentation is put in place.\n</p><ul>\n<li>What types of products &#x26; services do you provide?</li>\n</ul>\nInsights gathered from these questions, he wanted his clients to know that by working with him, the possibilities are endless or infinite.  \n<p></p>\n</details>");
	

				const frontmatter = {"title":"7 Key Factors of UX (The UX Honeycomb)","pubDate":"2024-01-09T00:00:00.000Z","isDraft":true,"description":"Astro is a web framework that allows you to create content-rich web experiences.","author":"Jackie Ho","category":"UX Design","thumbnail":"../../images/blogs/astro-as-a-front-end-framework/astro.png","alt":"goodbye"};
				const file = "/Users/jackieho/portfolio2024-final-1/src/content/blogs/7-key-factors-of-ux.md";
				const url = undefined;
				function rawContent() {
					return "\n\n\n# KEY TAKEAWAYS\n\n![alt text](image.png)\n\n<details>\n<summary><strong>Useful</strong></summary>\n<p>\nLet’s say you have a piece of land and would like to construct a building. The first few decisions of the project include: Why are you constructing a building; is it to live in or for commercial purposes? Who might want to rent the building? Is the location favorable for potential buyers or renters? You consult appraisers and attorneys to help you with these decisions. Through these questions, you identify the business objectives and the user needs.\n<ul>\n<li>What types of products & services do you provide?</li>\n\n</ul>\nInsights gathered from these questions, he wanted his clients to know that by working with him, the possibilities are endless or infinite.  \n</p>\n</details>\n\n<details>\n<summary><strong>Usable</strong></summary>\n<p>\nThe decisions taken on the Strategy plane influence the scope. In the case of the building, you consult a professional, who inspects the land to assess what is possible to construct on it — a detached house, an apartment building, an office space or maybe a shopping mall. The scope of the project defines what the value proposition, the product and the features that meet the business objectives and user needs are.\n<ul>\n<li>What types of products & services do you provide?</li>\n\n</ul>\nInsights gathered from these questions, he wanted his clients to know that by working with him, the possibilities are endless or infinite.  \n</p>\n</details>\n\n<details>\n<summary><strong>Findable</strong></summary>\n<p>\nOnce the scope is decided, your architect creates some blueprints, showing the entrance and exits to different rooms, hallways, restrooms, elevators and staircases. This is the structure — how the user interacts with and navigates around the product’s features.\n<ul>\n<li>What types of products & services do you provide?</li>\n\n</ul>\nInsights gathered from these questions, he wanted his clients to know that by working with him, the possibilities are endless or infinite.  \n</p>\n</details>\n\n<details>\n<summary><strong>Credible</strong></summary>\n<p>\nThe architect creates sketches or 3D models based on the blueprint and includes details of the interiors. The architect also enlists the help of a builder to create a full-scale sample of a portion of the building, complete with furniture and fittings, to give you a more realistic feel of the space. Here — on the Skeleton plane — the interface of the product becomes visible.\n<ul>\n<li>What types of products & services do you provide?</li>\n\n</ul>\nInsights gathered from these questions, he wanted his clients to know that by working with him, the possibilities are endless or infinite.  \n</p>\n</details>\n\n<details>\n<summary><strong>Desirable</strong></summary>\n<p>\nFinally, an interior designer helps you decide the color of the walls, the flooring, the furniture and accessories in individual rooms. The Surface plane is where the layer of presentation is put in place.\n<ul>\n<li>What types of products & services do you provide?</li>\n\n</ul>\nInsights gathered from these questions, he wanted his clients to know that by working with him, the possibilities are endless or infinite.  \n</p>\n</details>\n\n<details>\n<summary><strong>Accessible</strong></summary>\n<p>\nFinally, an interior designer helps you decide the color of the walls, the flooring, the furniture and accessories in individual rooms. The Surface plane is where the layer of presentation is put in place.\n<ul>\n<li>What types of products & services do you provide?</li>\n\n</ul>\nInsights gathered from these questions, he wanted his clients to know that by working with him, the possibilities are endless or infinite.  \n</p>\n</details>\n\n<details>\n<summary><strong>Valuable</strong></summary>\n<p>\nFinally, an interior designer helps you decide the color of the walls, the flooring, the furniture and accessories in individual rooms. The Surface plane is where the layer of presentation is put in place.\n<ul>\n<li>What types of products & services do you provide?</li>\n\n</ul>\nInsights gathered from these questions, he wanted his clients to know that by working with him, the possibilities are endless or infinite.  \n</p>\n</details>\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"key-takeaways","text":"KEY TAKEAWAYS"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
