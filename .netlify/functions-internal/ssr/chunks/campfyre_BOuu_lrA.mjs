import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_49uZQKwN.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"CampFyre App","pubDate":"2024-01-09T00:00:00.000Z","projectDuration":"1 Week","isDraft":true,"description":"A Rental Website","role":"Jackie Ho","category":"UX/UI","thumbnail":"../../images/portfolio/campsite/campsite.jpg","alt":"campsite","technology":"hello","isLocked":false,"cta":"Learn more","deliverables":["Logo","Website"]};
				const file = "/Users/jackieho/portfolio2024-final-1/src/content/portfolio/campfyre.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
