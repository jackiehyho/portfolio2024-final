import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Dt-RJx1C.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"project-summary\">Project Summary</h2>\n<p>Bar Perry is a Vancouver-based pet photographer that needed a professional logo, business card and consultation to help him grow his pet photography business.</p>\n<p>I help craft an identity package for a Bar’s pet photography business, communicating the concept of infinite possibilities and aligning with the client’s vision to convey creativity and pet specialization in their field.</p>\n<details>\n<summary><strong>Understanding the Business &#x26; Current Brand</strong></summary>\n<p>\nThe following questions were asked to get an idea of the maturity of the business.\n</p><ul>\n<li>What types of products &#x26; services do you provide?</li>\n<li>If you had to describe your business in one word, what would it be and why?</li>\n<li>Who are your main competitors?</li>\n<li>What is the current logo?</li>\n<li>What do you like and dislike about the current logo?</li>\n<li>What do you want the new logo to accomplish?</li>\n</ul>\nInsights gathered from these questions, he wanted his clients to know that by working with him, the possibilities are endless or infinite.  \n<p></p>\n</details>\n<details>\n<summary><strong>Logo Design Process</strong></summary>\n<p>Generally, when I do logo designs, I'd like to give 3 separate directions to gauge the client's reaction on what they liked about each logo and iterate.</p>\n<p>Using the information gathered during the interviews, I created a Logo mark by leveraging Bar's Initials B &#x26; P to create an infinity symbol.</p>\n</details>\n<details>\n<summary><strong>Business Card Design Process</strong></summary>\n<p>\nI asked for the printer that they are planning to use to see if they have business card templates available for use.\n</p>\n</details>\n<details>\n<summary><strong>Finalizing files for print</strong></summary>\n<p>Finalizing the file Ensure that the business card has been vectorized before it gets sent to the printer. This is to ensure that there are no issues with the font when the print technician opens up the file.</p>\n</details>";

				const frontmatter = {"title":"Bar Perry Photography","pubDate":"2015-06-30T00:00:00.000Z","projectDuration":"1 Week","isDraft":false,"description":"Creating a brand identity for a local pet photographer.","role":"Graphic Designer","category":"Brand Identity","thumbnail":"../../images/portfolio/bar-perry/BarPerry.png","alt":"Bar Perry Photography","technology":"Illustrator","isLocked":false,"cta":"Learn More","deliverables":["Logo"]};
				const file = "C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/bar-perry.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## Project Summary\r\nBar Perry is a Vancouver-based pet photographer that needed a professional logo, business card and consultation to help him grow his pet photography business. \r\n\r\nI help craft an identity package for a Bar's pet photography business, communicating the concept of infinite possibilities and aligning with the client's vision to convey creativity and pet specialization in their field.\r\n\r\n<details>\r\n<summary><strong>Understanding the Business & Current Brand</strong></summary>\r\n<p>\r\nThe following questions were asked to get an idea of the maturity of the business.\r\n<ul>\r\n<li>What types of products & services do you provide?</li>\r\n<li>If you had to describe your business in one word, what would it be and why?</li>\r\n<li>Who are your main competitors?</li>\r\n<li>What is the current logo?</li>\r\n<li>What do you like and dislike about the current logo?</li>\r\n<li>What do you want the new logo to accomplish?</li>\r\n</ul>\r\nInsights gathered from these questions, he wanted his clients to know that by working with him, the possibilities are endless or infinite.  \r\n</p>\r\n</details>\r\n\r\n<details>\r\n<summary><strong>Logo Design Process</strong></summary>\r\n<p>Generally, when I do logo designs, I'd like to give 3 separate directions to gauge the client's reaction on what they liked about each logo and iterate.</p>\r\n<p>Using the information gathered during the interviews, I created a Logo mark by leveraging Bar's Initials B & P to create an infinity symbol.</p>\r\n</details>\r\n\r\n\r\n<details>\r\n<summary><strong>Business Card Design Process</strong></summary>\r\n<p>\r\nI asked for the printer that they are planning to use to see if they have business card templates available for use.\r\n</p>\r\n</details>\r\n\r\n<details>\r\n<summary><strong>Finalizing files for print</strong></summary>\r\n<p>Finalizing the file Ensure that the business card has been vectorized before it gets sent to the printer. This is to ensure that there are no issues with the font when the print technician opens up the file.</p>\r\n\r\n</details>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"project-summary","text":"Project Summary"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
