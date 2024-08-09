import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, A as AstroError, n as UnknownContentCollectionError, o as renderUniqueStylesheet, p as renderScriptElement, q as createHeadAndContent, u as unescapeHTML, g as addAttribute, s as spreadAttributes, e as createAstro, t as Fragment } from './astro_xL2yxiN_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './pages/fraserway_CaAEPt_x.mjs';
/* empty css                        */
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_CQAz1NQ6.mjs';
/* empty css                          */
import 'clsx';
/* empty css                                  */
/* empty css                            */
/* empty css                          */
/* empty css                          */
/* empty css                        */
/* empty css                         */
import pLimit from 'p-limit';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Digital Portfolio of Jackie Ho", "description": "A digital product designer Based in Vancouver, BC" }, { "main": ($$result2) => renderTemplate`${maybeRenderHead()}<main> <h1>PAGE NOT FOUND</h1> </main>` })}`;
}, "/Users/jackieho/portfolio2024-final-1/src/pages/404.astro", void 0);

const $$file$a = "/Users/jackieho/portfolio2024-final-1/src/pages/404.astro";
const $$url$a = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file$a,
  url: $$url$a
}, Symbol.toStringTag, { value: 'Module' }));

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Digital Services Jackie Ho", "description": "A digital product designer from Vancouver, BC" }, { "main": ($$result2) => renderTemplate`${maybeRenderHead()}<main> <h2 class="timeline-header">My Story</h2> <p>Growing up, I was always a little bit different than everyone else, more on that later. My curiosity and obession with learning started off with an expensive set of encyclopedias that my mother had purchased for the family to use. I would flip through these pages in my spare time learning about the world. My father had owned a bag factory that I hope to inherit along with my brother but our lives had dramatically changed when he was forced to close down due to the economic conditions at the time.</p> <p>Feeling a bit lost during high school, I took food studies at school perhaps out of necessity, as my mother was not good at cooking. The background music of my room would often be playing shows from the food network, while I play flash games and spend time on the internet.</p> <p>I was later introduced to Anime, which led to learn about Japanese media, music and pop culture. I learned photoshop by taking pencil sketches from online sources like Deviant Art, where I spend hours outlining them and colouring them in for fun. During my final year, I took a course in InfoTech, we built websites with HTML, CSS and JavaScript and made animations in Flash. At home, I would build webpages on Xanga and GeoCities. During one of the university visiting advisor sessions, I had expressed interests perhaps going into game design, which led me to choosing to go to SFU.</p> <p>My time at SFU, started off a bit rocky, my parents wanted me to get into business like the classic asian stereotype but it wasn't for me. I decided to go all in with my original intentions of making games. It was through one very passionate lecturer that inspired me to pursue design as a career path. All of our classes were project and group-based work, where we learned design thinking, photography, videogrpahy, interaction design, 3D modeling, animation with a sprinkle of game design.</p> <p>After SFU, I invited to be a part of a video production team learning about the film industry from a film veteran. in hopes of perhaps being as popular as YouTube creators like Wong Fu. Who knew that a couple months later, I would meet them. </p> <p>I decided to work for a small business </p> <p>It was only recently that I've learned that I was neuro-divergent and why I was able to predict </p> </main>` })} `;
}, "/Users/jackieho/portfolio2024-final-1/src/pages/about.astro", void 0);

const $$file$9 = "/Users/jackieho/portfolio2024-final-1/src/pages/about.astro";
const $$url$9 = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file$9,
  url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/Archive/604nomnom.md": () => import('./604nomnom_CQBHJKTL.mjs'),"/src/content/Archive/bar-perry.md": () => import('./bar-perry_CpJrOIHq.mjs'),"/src/content/Archive/boogaloo-academy.md": () => import('./boogaloo-academy_CLlsDAh8.mjs'),"/src/content/Archive/booking-app.md": () => import('./booking-app_C3rpLb9_.mjs'),"/src/content/Archive/bredy-landscaping.md": () => import('./bredy-landscaping_DaX-_4aH.mjs'),"/src/content/Archive/campfyre.md": () => import('./campfyre_DVIID8bs.mjs'),"/src/content/Archive/campsite.md": () => import('./campsite_D7M6REYT.mjs'),"/src/content/Archive/fannypax.md": () => import('./fannypax_DLIZsu8O.mjs'),"/src/content/Archive/fraserway-campaign.md": () => import('./fraserway-campaign_BMGeow24.mjs'),"/src/content/Archive/fraserway-rv-dealership.md": () => import('./fraserway-rv-dealership_CUU2KKJ-.mjs'),"/src/content/Archive/fraserway-rv-rentals.md": () => import('./fraserway-rv-rentals_wautNEsR.mjs'),"/src/content/Archive/memorme.md": () => import('./memorme_Bmnc0vKI.mjs'),"/src/content/Archive/nyevan.md": () => import('./nyevan_CzGlv24r.mjs'),"/src/content/Archive/richard-jeha-hair-company.md": () => import('./richard-jeha-hair-company_Cuw7PHgb.mjs'),"/src/content/Archive/wong-fu-yuri-tag-vancouver.md": () => import('./wong-fu-yuri-tag-vancouver_BHCyN5v0.mjs'),"/src/content/blogs/5-elements-of-ux-design.md": () => import('./5-elements-of-ux-design_CgPtG-WH.mjs'),"/src/content/blogs/7-key-factors-of-ux.md": () => import('./7-key-factors-of-ux_Ck8IXtLd.mjs'),"/src/content/blogs/astro-as-a-front-end-framework.md": () => import('./astro-as-a-front-end-framework_C0RApFg7.mjs'),"/src/content/blogs/differences-between-brand-customer-and-user-experience.md": () => import('./differences-between-brand-customer-and-user-experience_CCmArwu-.mjs'),"/src/content/blogs/digital-marketing.md": () => import('./digital-marketing_ySUBNaL6.mjs'),"/src/content/blogs/progressive-web-applications.md": () => import('./progressive-web-applications_Bv9PC74z.mjs'),"/src/content/blogs/ux-kpi copy.md": () => import('./ux-kpi copy_BdzotWZn.mjs'),"/src/content/blogs/ux-kpi.md": () => import('./ux-kpi_QWoK4qIT.mjs'),"/src/content/blogs/what-is-marketing.md": () => import('./what-is-marketing_BdVBDVst.mjs'),"/src/content/portfolio/four-seasons-rv-rental.md": () => import('./four-seasons-rv-rental_S43p5liT.mjs'),"/src/content/portfolio/venues-for-meetup.md": () => import('./venues-for-meetup_DwEajDuh.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"Archive":{"type":"content","entries":{"604nomnom":"/src/content/Archive/604nomnom.md","bar-perry":"/src/content/Archive/bar-perry.md","booking-app":"/src/content/Archive/booking-app.md","boogaloo-academy":"/src/content/Archive/boogaloo-academy.md","bredy-landscaping":"/src/content/Archive/bredy-landscaping.md","campfyre":"/src/content/Archive/campfyre.md","campsite":"/src/content/Archive/campsite.md","fannypax":"/src/content/Archive/fannypax.md","fraserway-campaign":"/src/content/Archive/fraserway-campaign.md","fraserway-rv-dealership":"/src/content/Archive/fraserway-rv-dealership.md","fraserway-rv-rentals":"/src/content/Archive/fraserway-rv-rentals.md","memorme":"/src/content/Archive/memorme.md","nyevan":"/src/content/Archive/nyevan.md","richard-jeha-hair-company":"/src/content/Archive/richard-jeha-hair-company.md","wong-fu-yuri-tag-vancouver":"/src/content/Archive/wong-fu-yuri-tag-vancouver.md"}},"blogs":{"type":"content","entries":{"5-elements-of-ux-design":"/src/content/blogs/5-elements-of-ux-design.md","7-key-factors-of-ux":"/src/content/blogs/7-key-factors-of-ux.md","astro-as-a-front-end-framework":"/src/content/blogs/astro-as-a-front-end-framework.md","differences-between-brand-customer-and-user-experience":"/src/content/blogs/differences-between-brand-customer-and-user-experience.md","digital-marketing":"/src/content/blogs/digital-marketing.md","progressive-web-applications":"/src/content/blogs/progressive-web-applications.md","ux-kpi-copy":"/src/content/blogs/ux-kpi copy.md","ux-kpi":"/src/content/blogs/ux-kpi.md","what-is-marketing":"/src/content/blogs/what-is-marketing.md"}},"portfolio":{"type":"content","entries":{"four-seasons-rv-rental":"/src/content/portfolio/four-seasons-rv-rental.md","venues-for-meetup":"/src/content/portfolio/venues-for-meetup.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/Archive/604nomnom.md": () => import('./604nomnom_BmpkhCR8.mjs'),"/src/content/Archive/bar-perry.md": () => import('./bar-perry_NZnbUUyl.mjs'),"/src/content/Archive/boogaloo-academy.md": () => import('./boogaloo-academy_da5bZo5V.mjs'),"/src/content/Archive/booking-app.md": () => import('./booking-app_MZRkB5-i.mjs'),"/src/content/Archive/bredy-landscaping.md": () => import('./bredy-landscaping_CQmT7sfc.mjs'),"/src/content/Archive/campfyre.md": () => import('./campfyre_DswRr6ML.mjs'),"/src/content/Archive/campsite.md": () => import('./campsite_cQHcwgXE.mjs'),"/src/content/Archive/fannypax.md": () => import('./fannypax_BBhvNPm_.mjs'),"/src/content/Archive/fraserway-campaign.md": () => import('./fraserway-campaign_BbIyVgBF.mjs'),"/src/content/Archive/fraserway-rv-dealership.md": () => import('./fraserway-rv-dealership_DDtUmDSS.mjs'),"/src/content/Archive/fraserway-rv-rentals.md": () => import('./fraserway-rv-rentals_CoFAUxXt.mjs'),"/src/content/Archive/memorme.md": () => import('./memorme_V-cqoFzB.mjs'),"/src/content/Archive/nyevan.md": () => import('./nyevan_1ca10F28.mjs'),"/src/content/Archive/richard-jeha-hair-company.md": () => import('./richard-jeha-hair-company_DHa-4tbs.mjs'),"/src/content/Archive/wong-fu-yuri-tag-vancouver.md": () => import('./wong-fu-yuri-tag-vancouver_CQ7iKimK.mjs'),"/src/content/blogs/5-elements-of-ux-design.md": () => import('./5-elements-of-ux-design_DnXCAZpi.mjs'),"/src/content/blogs/7-key-factors-of-ux.md": () => import('./7-key-factors-of-ux_Dmc-W7jB.mjs'),"/src/content/blogs/astro-as-a-front-end-framework.md": () => import('./astro-as-a-front-end-framework_BdhMcYnG.mjs'),"/src/content/blogs/differences-between-brand-customer-and-user-experience.md": () => import('./differences-between-brand-customer-and-user-experience_B9c0j8FN.mjs'),"/src/content/blogs/digital-marketing.md": () => import('./digital-marketing_ChbNdjR4.mjs'),"/src/content/blogs/progressive-web-applications.md": () => import('./progressive-web-applications_DqF58AeF.mjs'),"/src/content/blogs/ux-kpi copy.md": () => import('./ux-kpi copy_My9O8ju1.mjs'),"/src/content/blogs/ux-kpi.md": () => import('./ux-kpi_CqRv7Jzo.mjs'),"/src/content/blogs/what-is-marketing.md": () => import('./what-is-marketing_BHDRl06p.mjs'),"/src/content/portfolio/four-seasons-rv-rental.md": () => import('./four-seasons-rv-rental_Dp4WVYUg.mjs'),"/src/content/portfolio/venues-for-meetup.md": () => import('./venues-for-meetup_CDzEXQ6T.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const $$Astro$8 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Button;
  Astro2.props;
  const { buttonCTA, buttonLink, className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(["button", className], "class:list")}${spreadAttributes(rest)}${addAttribute(buttonLink, "href")}>${buttonCTA}</a> `;
}, "/Users/jackieho/portfolio2024-final-1/src/components/Button.astro", void 0);

const $$Astro$7 = createAstro();
const $$BlogItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$BlogItem;
  const { url, title, category, description, image, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="blog-list-item" data-astro-cid-2il7dcjc> <article class="blog-container" ) data-astro-cid-2il7dcjc> <img${addAttribute(image.src, "src")}${addAttribute(alt, "alt")} data-astro-cid-2il7dcjc> <span class="blog-category" data-astro-cid-2il7dcjc>${category}</span> <div class="blog-text-container" data-astro-cid-2il7dcjc> <h1 class="blog-list-title" data-astro-cid-2il7dcjc>${title}</h1> <p data-astro-cid-2il7dcjc>${description}</p> ${renderComponent($$result, "Button", $$Button, { "className": "secondary-button", "buttonLink": url, "buttonCTA": "Read More", "data-astro-cid-2il7dcjc": true })} </div> </article> </li>  `;
}, "/Users/jackieho/portfolio2024-final-1/src/components/BlogItem.astro", void 0);

const Lightbulb = new Proxy({"src":"/_astro/lightbulb.B4rAyAUP.svg","width":465,"height":465,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jackieho/portfolio2024-final-1/src/images/lightbulb.svg";
							}
							
							return target[name];
						}
					});

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const allBlogs = await getCollection("blogs", ({ data }) => {
    return data.isDraft !== true;
  });
  allBlogs.sort((a, b) => Date.parse(b.data.pubDate) - Date.parse(a.data.pubDate));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog", "description": "This is the description of the page", "data-astro-cid-ijnerlr2": true }, { "main": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-ijnerlr2> <div class="icon-container" data-astro-cid-ijnerlr2> ${renderComponent($$result2, "Image", $$Image, { "class": "icon-lightbulb", "src": Lightbulb, "alt": "lightbulb", "data-astro-cid-ijnerlr2": true })}<h1 data-astro-cid-ijnerlr2>THOUGHTS AROUND THE WEB</h1> </div> <ul class="blog-list" data-astro-cid-ijnerlr2> ${allBlogs.map((blog) => renderTemplate`${renderComponent($$result2, "BlogItem", $$BlogItem, { "url": `/blogs/${blog.slug}/`, "title": blog.data.title, "category": blog.data.category, "description": blog.data.description, "image": blog.data.thumbnail, "alt": blog.data.alt, "data-astro-cid-ijnerlr2": true })}`)} </ul> </main>` })} `;
}, "/Users/jackieho/portfolio2024-final-1/src/pages/blog.astro", void 0);

const $$file$8 = "/Users/jackieho/portfolio2024-final-1/src/pages/blog.astro";
const $$url$8 = "/blog";

const blog = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file$8,
  url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro();
async function getStaticPaths$2() {
  const blogEntries = await getCollection("blogs");
  return blogEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$$2;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title, "description": entry.data.description }, { "main": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="main blog-main"> ${renderComponent($$result2, "Image", $$Image, { "class": "main-image", "src": entry.data.thumbnail, "alt": entry.data.alt })} <ul class="blog-metadata-list"> <li class="blog-metadata-item"><p class="blog-metadata"><strong>Last Updated:</strong><br>${entry.data.pubDate}</p></li> <li class="blog-metadata-item"><p class="blog-metadata"><strong>Written By:</strong><br>${entry.data.author}</p></li> </ul> <div class="container"> ${renderComponent($$result2, "Content", Content, {})} </div> </main>` })} `;
}, "/Users/jackieho/portfolio2024-final-1/src/pages/blogs/[...slug].astro", void 0);

const $$file$7 = "/Users/jackieho/portfolio2024-final-1/src/pages/blogs/[...slug].astro";
const $$url$7 = "/blogs/[...slug]";

const ____slug_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$2,
  file: $$file$7,
  getStaticPaths: getStaticPaths$2,
  url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/jackieho/portfolio2024-final-1/src/pages/contact.astro", void 0);

const $$file$6 = "/Users/jackieho/portfolio2024-final-1/src/pages/contact.astro";
const $$url$6 = "/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file$6,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const HikingImage = new Proxy({"src":"/_astro/hiking.BWcTjkRg.svg","width":512,"height":512,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jackieho/portfolio2024-final-1/src/images/hiking.svg";
							}
							
							return target[name];
						}
					});

const $$MyExperiences = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Digital Portfolio of Jackie Ho", "description": "A digital product designer from Vancouver, BC", "data-astro-cid-jlqgyn42": true }, { "main": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-jlqgyn42> <div class="timeline" data-astro-cid-jlqgyn42> <div class="image-container" data-astro-cid-jlqgyn42> ${renderComponent($$result2, "Image", $$Image, { "class": "hiking", "src": HikingImage, "alt": "hiking", "data-astro-cid-jlqgyn42": true })}</div> <h2 class="timeline-header" data-astro-cid-jlqgyn42>My Digital Adventure So Far</h2> <h3 class="timeline-story" data-astro-cid-jlqgyn42>With over 10 years of experience in design, marketing, and web development, I excel at untangling complex problems and creating cohesive digital solutions with my diverse skill set and can-do attitude.</h3> <div class="top-container-arrow" data-astro-cid-jlqgyn42></div> <div class="line" data-astro-cid-jlqgyn42></div> <div class="experience-container left-side" data-astro-cid-jlqgyn42> <img class="logo" src="" data-astro-cid-jlqgyn42> <div class="experience-text-container" data-astro-cid-jlqgyn42> <h2 class="company-name" data-astro-cid-jlqgyn42>Looking for my next adventure in Product!</h2> <h3 class="job-title" data-astro-cid-jlqgyn42>Product Designer, Product Manager or Product Marketing Manager</h3> <span class="right-container-arrow" data-astro-cid-jlqgyn42></span> </div> </div> <div class="experience-container right-side" data-astro-cid-jlqgyn42> <img class="logo" src="" data-astro-cid-jlqgyn42> <div class="experience-text-container" data-astro-cid-jlqgyn42> <small class="industry" data-astro-cid-jlqgyn42>Automotive Retail, Tourism, RV Manufacturing & B2B Wholesale </small> <h2 class="company-name" data-astro-cid-jlqgyn42>Fraserway RV LP</h2> <p data-astro-cid-jlqgyn42>A Canadian RV Dealer Group with divisons in B2B Parts Wholesale, RV Manufacturing, Retail Dealerships and RV Rentals </p> <small class="job-period" data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Dec 2022 to Dec 2023 </strong></small> <h3 class="job-title" data-astro-cid-jlqgyn42>Digital Marketing Specialist, Full-Time</h3> <h3 data-astro-cid-jlqgyn42>Job Summary</h3> <ul data-astro-cid-jlqgyn42> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Providing a cohesive digital experience and strategy on all digital channels and platforms including emails, social media channels, digital advertising and more.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Served as a technical interface and project manager for the marketing department.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Served as co-lead and customer advocate for the Digital Experience Committee, facilitating centralized digital discussions, contributing expertise in ux design, digital marketing, and web development.</p></li> </ul> <h3 data-astro-cid-jlqgyn42>Achievements</h3> <ul data-astro-cid-jlqgyn42> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Contributed to the development of a new sales microsite and the creation of innovative features, including schema tags, product matchmaking quiz and alternative user interface, not presently available on the main website</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Prevented a business critical failure by investigation, updating the deprecated PHP server and implementing a new replacement Astra WordPress theme, ensuring continued functionality and performance.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Managed an external UX audit project, facilitating vendor collaboration, overcoming barriers, and coordinating recruitment email distribution, resulting in a successful completion under budget and providing actionable insights prioritized by effort and importance.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Resolved email delivery issues from a website migration by implementing email authentication measures (SPF, DKIM, DMARC) for IT, resulting in a 20% increase in email open rates.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Initiated and enabled automated QR code price sheets through a data export via commerce cloud, which saved hundred of hours of operational labour.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Managed an external UX audit project, facilitating vendor collaboration, overcoming barriers, and coordinating recruitment email for moderated user testing, resulting in a successful completion under budget and providing actionable insights prioritized by effort and importance.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Successfully project managed the deployment of digital signage across all retail locations by coordinating with IT to ensure equipment availability and remotely setting up each display with their respective content, This resulted in the establishment of a new in-store touchpoint and experience for customers and an additional advertising channel for the business.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Utilized Looker Studio to design and implement a custom dashboard and report, consolidating real-time web data and presenting key performance indicators (KPIs) to stakeholders including senior management, general managers, and department managers.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Produced a comprehensive training video series on photography, including developing the lesson plan, defining learning outcomes, procuring a standardized digital content kit, scriptwriting, and video production independently. Pilot group was a success and ready to deploy for the rest of the company.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Co-led the development of the company’s inaugural customer journey map and service blueprint, aimed at comprehensively understanding the current state of the customer experience and interactions with the business. </p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Successfully project managed the deployment of digital signage across all retail locations by coordinating with IT to ensure equipment availability and remotely setting up each display with their respective content, This resulted in the establishment of a new in-store touchpoint and experience for customers and an additional advertising channel for the business.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Contributed to the development of a new sales MVP microsite and the creation of innovative features, including schema tags, a match maker tool and alternative user interface, not presently available on the main website.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>As the product owner of the Salesforce Commerce Cloud website, I assisted in prioritizing sprints, writing user stories and feature requirements, and reporting bugs in JIRA in collaboration with our internal Salesforce developer.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>As co-lead of the Digital Experience Committee, I facilitated prioritization, meeting minutes, discussions, and alignment with cross-departmental stakeholders.</p></li> </ul> <small class="job-period" data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Jan 2018 to Nov 2023</strong></small> <h3 class="job-title" data-astro-cid-jlqgyn42>Digital Product Designer, Full-Time</h3> <h3 data-astro-cid-jlqgyn42>Job Summary</h3> <ul data-astro-cid-jlqgyn42> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Providing end-to-end solutions for digital products and experiences.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Managed and liasoned with digital advertising vendors to </p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Active member of the Digital Transformation Commitee helping the business migrate off legacy platforms, contributing expertise in ux design, digital marketing, and web development.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Supported the training and development of marketing coordinators and designers</p></li> </ul> <h3 data-astro-cid-jlqgyn42>Achievements</h3> <ul data-astro-cid-jlqgyn42> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Collaborated with the corporate training specialist and human resources department to produce a comprehensive textbook and workbook for all general managers, facilitating standardized training and development across the organization.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Managed digital advertising initiatives in Google Ads & Meta Ads</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Set up all catalogues and pages during Salesforce Commerce Cloud website.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Offered in-house UX and front-end development expertise User Acceptance Testing and reported Commerce Cloudbugs on JIRA.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Produced videos that gained over 100,000 video plays for Sales & Rentals department.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Managed a 3-day video and photography production, resulting in the creation of over 2,000 assets for business use while adhering to budget constraints.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Rebranded Country RV and Roadmaster RV to Fraserway RV Kelowna & Leduc.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Mobile responsive emails with MJML and Litmus.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Assisted content migration from Sitefinity to Drupal.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Initiated and developed the company's only Brand Guidelines.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Removed manual lottery check for customers by developing a query application using C# for Open House.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Help steer the company's tech stack as an active member of the digital transformation committee.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Introduced and set up all the event tracking codes for KPIs using Google Tag Manager.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Unified all the sales and service forms, including sales contracts and quotes.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Developed an easy to deploy tradeshow kit for trade show staff.</p></li> </ul> <small class="job-period" data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>May 2016 to Dec 2018</strong> </small> <h3 class="job-title" data-astro-cid-jlqgyn42>Web & Graphic Designer, Full-Time</h3> <h3 data-astro-cid-jlqgyn42>Achievements</h3> <ul data-astro-cid-jlqgyn42> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Rebranded Travelhome RV that led to highest revenue year of all time.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Removed operational slow down caused by phone calls and enabled online catalogues for B2B Division.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Increase marketing's operational efficiency by developing design templates.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Rebranded Roadmaster RV to Fraserway RV Leduc.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Resolved broken emails and enabled mobile responsive and Outlook-friendly emails with MJML and Litmus</p></li> </ul> <small class="job-period" data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Sept 2015 to Apr 2016</strong> </small> <h3 class="job-title" data-astro-cid-jlqgyn42>Contract Digital Consultant, Part-Time Contract</h3> <h3 data-astro-cid-jlqgyn42>Achievements</h3> <ul data-astro-cid-jlqgyn42> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Resolved slow response time from an agency by developing 2 RV Show website internal.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Enabled retail staff to produce their own branded signs through a fillable template.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Developed automated merging process for large signs at RV Shows.</p></li> </ul> <p data-astro-cid-jlqgyn42><small data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Services Provided:</strong> Web Development, Web Migration, Graphic Production Design, Digital Advertising, Digital Ad Management, Market Reports, Digital Signage, SEO Consultation, UX Consultation</small></p> <p data-astro-cid-jlqgyn42><small data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Software Used:</strong> Adobe Illustrator, Adobe Photoshop, Adobe InDesign, Adobe Audition, Adobe Premiere, Adobe After Effects, Figma, Sketch, Miro, Visual Studio Code, WordPress, WooCommerce, Salesforce Commerce Cloud, Sitefinity, Drupal Acquia, MJML, Yodeck, Google Ads, HotJar, Google Analytics 4, Looker Studio, Supermetrics, Litmus, Notion, Wrike, Basecamp, JIRA, DrawIO, Google Tag Manager, Meta Ads</small></p> </div> <span class="left-container-arrow" data-astro-cid-jlqgyn42></span> </div> <div class="experience-container left-side" data-astro-cid-jlqgyn42> <img class="logo" src="" data-astro-cid-jlqgyn42> <div class="experience-text-container" data-astro-cid-jlqgyn42> <small class="industry" data-astro-cid-jlqgyn42>Non-Profit Society</small> <h2 class="company-name" data-astro-cid-jlqgyn42>Nanaimo Homeless Coalition</h2> <p data-astro-cid-jlqgyn42>The Nanaimo Homelessness Coalition is made up of non-profit societies, representatives from the three levels of government, faith groups and community members who have an interest in developing and carrying out solutions to homelessness. </p> <small class="job-period" data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Mar 2021 to Aug 2021 </strong></small> <h3 class="job-title" data-astro-cid-jlqgyn42>Wordpress Developer, Freelance</h3> <h3 data-astro-cid-jlqgyn42>Achievements</h3> <ul data-astro-cid-jlqgyn42> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Diagnosed and resolved website bugs left by the previous agency, enhancing the website's user experience by prescribing effective solutions to rectify existing issues.</p></li> </ul> <p data-astro-cid-jlqgyn42><small data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Services Provided:</strong> Web Development</small></p> <p data-astro-cid-jlqgyn42><small data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Software Used:</strong> Wordpress, CPanel</small></p> <span class="right-container-arrow" data-astro-cid-jlqgyn42></span> </div> </div> <div class="experience-container right-side" data-astro-cid-jlqgyn42> <img class="logo" src="" data-astro-cid-jlqgyn42> <div class="experience-text-container" data-astro-cid-jlqgyn42> <small class="industry" data-astro-cid-jlqgyn42>Apparel Manufacturing Services</small> <h2 class="company-name" data-astro-cid-jlqgyn42>Oddball Workshop</h2> <p data-astro-cid-jlqgyn42>A local manufacturer producing sublimated performance apparel and custom teamwear.</p> <small class="job-period" data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Oct 2020 to Jun 2021</strong></small> <h3 class="job-title" data-astro-cid-jlqgyn42>Digital Marketer, Freelance</h3> <h3 data-astro-cid-jlqgyn42>Achievements</h3> <ul data-astro-cid-jlqgyn42> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Piloted digital ad</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Provided Google Ad management services</p></li> </ul> <p data-astro-cid-jlqgyn42><small data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Services Provided:</strong> Google Ads, Marketing Reports, Google Analytics</small></p> <p data-astro-cid-jlqgyn42><small data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Software Used:</strong> Looker Studio, Google Ads, Google Tag Manager</small></p> </div> <span class="left-container-arrow" data-astro-cid-jlqgyn42></span> </div> <div class="experience-container left-side" data-astro-cid-jlqgyn42> <img class="logo" src="" data-astro-cid-jlqgyn42> <div class="experience-text-container" data-astro-cid-jlqgyn42> <small class="industry" data-astro-cid-jlqgyn42>Landscaping Services</small> <h2 class="company-name" data-astro-cid-jlqgyn42>Bredy Landscaping</h2> <p data-astro-cid-jlqgyn42>A local company providing landscaping & horticulture services for residential and commercial properties.</p> <small class="job-period" data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Oct 2020 to Jun 2021</strong></small> <h3 class="job-title" data-astro-cid-jlqgyn42>Digital Consultant, Freelance</h3> <h3 data-astro-cid-jlqgyn42>Achievements</h3> <ul data-astro-cid-jlqgyn42> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Provided an visual identity package logos and social media</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Provided Google Ad management services</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Assisted with apparel design and vehicle decals</p></li> </ul> <p data-astro-cid-jlqgyn42><small data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Services Provided:</strong> Web Development, Visual Identity</small></p> <p data-astro-cid-jlqgyn42><small data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Software Used:</strong> WordPress, CPanel, Adobe Illustrator, Adobe InDesign, Adobe Photoshop</small></p> </div> <span class="right-container-arrow" data-astro-cid-jlqgyn42></span> </div> <div class="experience-container right-side" data-astro-cid-jlqgyn42> <img class="logo" src="" data-astro-cid-jlqgyn42> <div class="experience-text-container" data-astro-cid-jlqgyn42> <small class="industry" data-astro-cid-jlqgyn42>Home Construction Services</small> <h2 class="company-name" data-astro-cid-jlqgyn42>GSH Development Ltd.</h2> <p data-astro-cid-jlqgyn42>A local company providing home construction services for residential properties.</p> <small class="job-period" data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Sept 2015 to Sept 2015</strong></small> <h3 class="job-title" data-astro-cid-jlqgyn42>Graphic Designer, Freelance</h3> <h3 data-astro-cid-jlqgyn42>Achievements</h3> <ul data-astro-cid-jlqgyn42> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Provided a visual identity pack which included business cards, logos and stationary</p></li> </ul> <p data-astro-cid-jlqgyn42><small data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Services Provided:</strong> Visual Identity</small></p> <p data-astro-cid-jlqgyn42><small data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Software Used:</strong> Adobe Illustrator, Adobe InDesign, Adobe Photoshop</small></p> </div> <span class="left-container-arrow" data-astro-cid-jlqgyn42></span> </div> <div class="experience-container left-side" data-astro-cid-jlqgyn42> <img class="logo" src="" data-astro-cid-jlqgyn42> <div class="experience-text-container" data-astro-cid-jlqgyn42> <small class="industry" data-astro-cid-jlqgyn42>B2B Software Company</small> <h2 class="company-name" data-astro-cid-jlqgyn42>PNI Media Inc</h2> <p data-astro-cid-jlqgyn42>A SaaS platform provideing on-demand world class printing and shipping solutions.</p> <small class="job-period" data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Jun 2015 to Sept 2015</strong></small> <h3 class="job-title" data-astro-cid-jlqgyn42>Production Designer, Full-Time Contract</h3> <h3 data-astro-cid-jlqgyn42>Achievements</h3> <ul data-astro-cid-jlqgyn42> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Produced web assets for Staples and Walmart.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Designed magazine ads for Costco.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Designed email blasts for Tesco.</p></li> </ul> <small data-astro-cid-jlqgyn42>Services Received: Production Design, Email Design, Magazine Design</small> </div> <span class="right-container-arrow" data-astro-cid-jlqgyn42></span> </div> <div class="experience-container right-side" data-astro-cid-jlqgyn42> <img class="logo" src="" data-astro-cid-jlqgyn42> <div class="experience-text-container" data-astro-cid-jlqgyn42> <small class="industry" data-astro-cid-jlqgyn42>Conference</small> <h2 class="company-name" data-astro-cid-jlqgyn42>TEDxKids@BC Conference</h2> <p data-astro-cid-jlqgyn42>TEDx is a program of local, self-organized events that bring people together to share a TED-like experience.</p> <small class="job-period" data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Feb 2014 to Nov 2014</strong></small> <h3 class="job-title" data-astro-cid-jlqgyn42>Web Developer, Volunteer</h3> <h3 data-astro-cid-jlqgyn42>Achievements</h3> <p data-astro-cid-jlqgyn42><small data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Services Provided:</strong> Web Development</small></p> <p data-astro-cid-jlqgyn42><small data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Software Used:</strong> WordPress</small></p> </div> <span class="left-container-arrow" data-astro-cid-jlqgyn42></span> </div> <div class="experience-container left-side" data-astro-cid-jlqgyn42> <img class="logo" src="" data-astro-cid-jlqgyn42> <div class="experience-text-container" data-astro-cid-jlqgyn42> <small class="industry" data-astro-cid-jlqgyn42>Non-Profit Organization</small> <h2 class="company-name" data-astro-cid-jlqgyn42>Vancouver New Year's Eve Celebration Society</h2> <p data-astro-cid-jlqgyn42>Designed the logo for the first Vancouver New Year's Eve fireworks event.</p> <small class="job-period" data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Oct 2015 to Oct 2015</strong></small> <h3 class="job-title" data-astro-cid-jlqgyn42>Graphic Designer, Freelance</h3> <h3 data-astro-cid-jlqgyn42>Achievements</h3> <p data-astro-cid-jlqgyn42>Designed the logo for the first Vancouver New Year's Eve fireworks event.</p> <small data-astro-cid-jlqgyn42>Services Provided: Logo Design</small> </div> <span class="right-container-arrow" data-astro-cid-jlqgyn42></span> </div> <div class="experience-container right-side" data-astro-cid-jlqgyn42> <img class="logo" src="" data-astro-cid-jlqgyn42> <div class="experience-text-container" data-astro-cid-jlqgyn42> <small class="industry" data-astro-cid-jlqgyn42>Photography Services</small> <h2 class="company-name" data-astro-cid-jlqgyn42>Bar Perry Photography</h2> <p data-astro-cid-jlqgyn42>A local photographer focused on concert events</p> <small class="job-period" data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>May 2015 to Aug 2015</strong></small> <h3 class="job-title" data-astro-cid-jlqgyn42>Digital Consultant, Contract</h3> <h3 data-astro-cid-jlqgyn42>Achievements</h3> <ul data-astro-cid-jlqgyn42> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Designed a visual identity package which included a logo and business cards</p></li> </ul> <p data-astro-cid-jlqgyn42><small data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Services Provided:</strong> Logo Design</small></p> <p data-astro-cid-jlqgyn42><small data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Software Used:</strong> Adobe Illustrator</small></p> </div> <span class="left-container-arrow" data-astro-cid-jlqgyn42></span> </div> <div class="experience-container left-side" data-astro-cid-jlqgyn42> <img class="logo" src="" data-astro-cid-jlqgyn42> <div class="experience-text-container" data-astro-cid-jlqgyn42> <small class="industry" data-astro-cid-jlqgyn42>Hair & Beauty Services</small> <h2 class="company-name" data-astro-cid-jlqgyn42>Richard Jeha Hair Company</h2> <p data-astro-cid-jlqgyn42>A local company providing home construction services for residential properties.</p> <small class="job-period" data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Sept 2015 to Oct 2015</strong></small> <h3 class="job-title" data-astro-cid-jlqgyn42>Graphic Designer, Freelance</h3> <h3 data-astro-cid-jlqgyn42>Achievements</h3> <p data-astro-cid-jlqgyn42></p> <small data-astro-cid-jlqgyn42>Services Received: Logo Design, Stationary, Website</small> </div> <span class="right-container-arrow" data-astro-cid-jlqgyn42></span> </div> <div class="experience-container right-side" data-astro-cid-jlqgyn42> <img class="logo" src="" data-astro-cid-jlqgyn42> <div class="experience-text-container" data-astro-cid-jlqgyn42> <small class="industry" data-astro-cid-jlqgyn42>Dental Services</small> <h2 class="company-name" data-astro-cid-jlqgyn42>Dr.Perel-Panar</h2> <p data-astro-cid-jlqgyn42>A local company providing home construction services for residential properties.</p> <small class="job-period" data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>May 2014 to Jun 2014</strong></small> <h3 class="job-title" data-astro-cid-jlqgyn42>Graphic Designer, Freelance</h3> <h3 data-astro-cid-jlqgyn42>Achievements</h3> <p data-astro-cid-jlqgyn42></p> <small data-astro-cid-jlqgyn42>Services Provided: Logo Design, Business Cards & Brochures</small> </div> <span class="left-container-arrow" data-astro-cid-jlqgyn42></span> </div> <div class="experience-container left-side" data-astro-cid-jlqgyn42> <img class="logo" src="" data-astro-cid-jlqgyn42> <div class="experience-text-container" data-astro-cid-jlqgyn42> <small class="industry" data-astro-cid-jlqgyn42>Dance Education Services</small> <h2 class="company-name" data-astro-cid-jlqgyn42>Boogaloo Academy Ltd.</h2> <p data-astro-cid-jlqgyn42>A multi-disciplinary dance studio that offers dance education for all ages and studio rental services.</p> <small class="job-period" data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>May 2013 to Sept 2015</strong></small> <h3 class="job-title" data-astro-cid-jlqgyn42>Digital Consultant, Contract</h3> <h3 data-astro-cid-jlqgyn42>Job Summary</h3> <ul data-astro-cid-jlqgyn42> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Produce elementary school performances video for the society.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Produce marketing videos of programs for the society.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Assist in planning provincial dance competition at the River Rock Casino</p></li> </ul> <h3 data-astro-cid-jlqgyn42>Achievements</h3> <ul data-astro-cid-jlqgyn42> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Launched a singing and dance program for kids.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Generated leads for rental space bookings, which resulted in bookings.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Increase enrollment for the studio.</p></li> </ul> <p data-astro-cid-jlqgyn42><small data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Services Provided:</strong> DVD Production, Video Production, Graphic Design, Web Development, Content Strategy, Social Media Management, Booklet Design</small></p> <p data-astro-cid-jlqgyn42><small data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Software Used:</strong> Adobe Illustrator, Adobe Premiere, Adobe After Effects, Adobe InDesign, WordPress, Adobe Photoshop</small></p> </div> <span class="right-container-arrow" data-astro-cid-jlqgyn42></span> </div> <div class="experience-container right-side" data-astro-cid-jlqgyn42> <img class="logo" src="" data-astro-cid-jlqgyn42> <div class="experience-text-container" data-astro-cid-jlqgyn42> <small class="industry" data-astro-cid-jlqgyn42>Non-Profit Organization</small> <h2 class="company-name" data-astro-cid-jlqgyn42>A Star Society</h2> <p data-astro-cid-jlqgyn42>A non-profit society focused on providing dance education for kids in need.</p> <small class="job-period" data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>May 2013 to Sept 2015</strong></small> <h3 class="job-title" data-astro-cid-jlqgyn42>Digital Consultant, Contract</h3> <h3 data-astro-cid-jlqgyn42>Job Summary</h3> <ul data-astro-cid-jlqgyn42> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Produce elementary school performances video for the society.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Produce marketing videos of programs for the society.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Assist in planning provincial dance competition at the River Rock Casino</p></li> </ul> <h3 data-astro-cid-jlqgyn42>Achievements</h3> <ul data-astro-cid-jlqgyn42> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Organized, designed, and produced an investor package for fundraising, leading to a successful grant of $2,500 from Scotiabank for the society.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Revised the BC Gaming Grant application package, which resulted in over $90,000 in grant money to help support the programs from the non-profit</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Produced videos for YouTube that generated over 60,000 views for the non-profit.</p></li> </ul> <p data-astro-cid-jlqgyn42><small data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Services Provided:</strong> DVD Production, Video Production, Graphic Design, Web Development, Content Strategy, Social Media Management, Booklet Design</small></p> <p data-astro-cid-jlqgyn42><small data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Software Used:</strong> Adobe Illustrator, Adobe Premiere, Adobe After Effects, Adobe InDesign, WordPress, Adobe Photoshop</small></p> </div> <span class="left-container-arrow" data-astro-cid-jlqgyn42></span> </div> <div class="experience-container left-side" data-astro-cid-jlqgyn42> <img class="logo" src="" data-astro-cid-jlqgyn42> <div class="experience-text-container" data-astro-cid-jlqgyn42> <small class="industry" data-astro-cid-jlqgyn42>Motion Picture & Video Production</small> <h2 class="company-name" data-astro-cid-jlqgyn42>604NomNom</h2> <p data-astro-cid-jlqgyn42>A YouTube channel telling the stories of restaurants in Metro Vancouver. Featured on Vancity Buzz & Shaw Multicultural Network.</p> <small data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Mar 2013 to July 2013</strong></small> <h3 class="job-title" data-astro-cid-jlqgyn42>Co-Founder & Video Editor</h3> <h3 data-astro-cid-jlqgyn42>Job Summary</h3> <ul data-astro-cid-jlqgyn42> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Ensure team had the resources for video production.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Making final decisions and quality checking videos before they are published.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Setting up the video structure and editing episodes.</p></li> </ul> <h3 data-astro-cid-jlqgyn42>Achievements</h3> <ul data-astro-cid-jlqgyn42> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Channel subscribers grew to 15,000 in 3 months</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Episodes were featured on network television on the Shaw Multicultural Channel.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Episodes were featured on Vancity Buzz, now Daily Hive.</p></li> </ul> <p data-astro-cid-jlqgyn42><small data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Services Provided:</strong> Video Production, Graphic Design, Web Development, Content Strategy, Social Media Management</small></p> <p data-astro-cid-jlqgyn42><small data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Software Used:</strong> Adobe Illustrator, Adobe Premiere, Adobe After Effects, Adobe InDesign, WordPress, Adobe Photoshop</small></p> </div> <span class="right-container-arrow" data-astro-cid-jlqgyn42></span> </div> <div class="experience-container right-side" data-astro-cid-jlqgyn42> <img class="logo" src="" data-astro-cid-jlqgyn42> <div class="experience-text-container" data-astro-cid-jlqgyn42> <small class="industry" data-astro-cid-jlqgyn42>Motion Picture & Video Production</small> <h2 class="company-name" data-astro-cid-jlqgyn42>Hype Life Films</h2> <p data-astro-cid-jlqgyn42>A video production company providing commercial video services</p> <small class="job-period" data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Aug 2012 to July 2013</strong></small> <h3 class="job-title" data-astro-cid-jlqgyn42>Videographer, Video Editor & Digital Imaging Technician, Freelance</h3> <h3 data-astro-cid-jlqgyn42>Job Summary</h3> <ul data-astro-cid-jlqgyn42> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Assisted with the production of commercials and music videos.</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Ensure video data is successfully transferred onto hard drive</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Ensure all data storage is ready for production.</p></li> </ul> <h3 data-astro-cid-jlqgyn42>Achievements</h3> <ul data-astro-cid-jlqgyn42> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Assisted in producing a music video that gained 100,000 views and placed 2nd on Ryan Seacrest Cover Contest</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>Event videographer for Wong Fu productions x Yuri LIVE at UBC</p></li> </ul> <p data-astro-cid-jlqgyn42><small data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Services Provided:</strong> Video Production, Commercial Production, Music Video Production</small></p> <p data-astro-cid-jlqgyn42><small data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Software Used:</strong> Adobe Premiere, Adobe After Effects</small></p> </div> <span class="left-container-arrow" data-astro-cid-jlqgyn42></span> </div> <div class="experience-container left-side" data-astro-cid-jlqgyn42> <img class="logo" src="" data-astro-cid-jlqgyn42> <div class="experience-text-container" data-astro-cid-jlqgyn42> <small class="industry" data-astro-cid-jlqgyn42>Post-Secondary Education</small> <h2 class="company-name" data-astro-cid-jlqgyn42>Simon Fraser University</h2> <p data-astro-cid-jlqgyn42>An education combines the science of human experience, the analysis of media and culture, the creation of original and experimental works of art, and the implementation of new technologies. </p> <small data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Sept 2006 to Apr 2012</strong></small> <h3 class="job-title" data-astro-cid-jlqgyn42>BA: Design & New Media, <br data-astro-cid-jlqgyn42>School of Interactive Arts & Technology</h3> <h3 data-astro-cid-jlqgyn42>Achievements</h3> <h4 data-astro-cid-jlqgyn42>In[A]Moment</h4> <p data-astro-cid-jlqgyn42>In[a]moment is an interactive and collaborative performance combining dynamic movements, motion tracking and social media. The performance explores the gestalt or “[!]” moments that occur at the intersections where the audience, performer, and space interact. </p> <ul data-astro-cid-jlqgyn42> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>1st Place: 2013 SFU SIAT Showcase</p></li> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>3rd Place: BCNET Student Showcase</p></li> </ul> <h4 data-astro-cid-jlqgyn42>Other Experiences</h4> <ul data-astro-cid-jlqgyn42> <li data-astro-cid-jlqgyn42><p data-astro-cid-jlqgyn42>UPhoto: Photography Club Executive teaching Photography </p></li> </ul> <small data-astro-cid-jlqgyn42>Focus: <br data-astro-cid-jlqgyn42>User Experience & Interaction Design Methodologies | Body Interface Design | Interactive Performance | Japanese Design & Aesthetics 
                    | Game Design</small> </div> <span class="right-container-arrow" data-astro-cid-jlqgyn42></span> </div> <div class="experience-container right-side" data-astro-cid-jlqgyn42> <img class="logo" src="" data-astro-cid-jlqgyn42> <div class="experience-text-container" data-astro-cid-jlqgyn42> <small class="industry" data-astro-cid-jlqgyn42>High School Education</small> <h2 class="company-name" data-astro-cid-jlqgyn42>Burnaby North Secondary</h2> <p data-astro-cid-jlqgyn42>Graduated with honours.</p> <small data-astro-cid-jlqgyn42><strong data-astro-cid-jlqgyn42>Sept 2001 to June 2006</strong></small> <h3 class="job-title" data-astro-cid-jlqgyn42>High School Diploma</h3> <p data-astro-cid-jlqgyn42></p> <small data-astro-cid-jlqgyn42>Interests: 3D Ceramic Arts & Sculpture, Web Development, Food Studies</small> </div> <span class="left-container-arrow" data-astro-cid-jlqgyn42></span> </div> </div> </main>` })} `;
}, "/Users/jackieho/portfolio2024-final-1/src/pages/my-experiences.astro", void 0);

const $$file$5 = "/Users/jackieho/portfolio2024-final-1/src/pages/my-experiences.astro";
const $$url$5 = "/my-experiences";

const myExperiences = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MyExperiences,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const Padlock = new Proxy({"src":"/_astro/padlock.BEaTCMMA.svg","width":492,"height":492,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jackieho/portfolio2024-final-1/src/images/padlock.svg";
							}
							
							return target[name];
						}
					});

const $$Password = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Digital Portfolio of Jackie Ho", "description": "A digital product designer Based in Vancouver, BC", "data-astro-cid-mrwaqy26": true }, { "main": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-mrwaqy26> ${renderComponent($$result2, "Image", $$Image, { "src": Padlock, "alt": "padlock", "class": "padlock", "data-astro-cid-mrwaqy26": true })} <h1 data-astro-cid-mrwaqy26>THIS PAGE HAS BEEN PASSWORD PROTECTED. PLEASE MESSAGE ME DIRECTLY FOR ACCESS</h1> </main>` })} `;
}, "/Users/jackieho/portfolio2024-final-1/src/pages/password.astro", void 0);

const $$file$4 = "/Users/jackieho/portfolio2024-final-1/src/pages/password.astro";
const $$url$4 = "/password";

const password = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Password,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro();
const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Carousel;
  const { images, header } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="container" data-astro-cid-wfe7xcno> <h2 class="carousel-header portfolio-subheaders" data-astro-cid-wfe7xcno>${header}</h2> <div class="portfolio-gallery" data-astro-cid-wfe7xcno> <button class="button-left arrow" data-astro-cid-wfe7xcno>&leftarrow;</button> <div class="portfolio-image-list" data-astro-cid-wfe7xcno> ${images.map((image) => renderTemplate`<div class="portfolio-image-item" data-astro-cid-wfe7xcno> <div class="portfolio-content" data-astro-cid-wfe7xcno> <div class="image-container" data-astro-cid-wfe7xcno> <img class="portfolio-image"${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} data-astro-cid-wfe7xcno> </div> <div class="text-container hide-caption" data-astro-cid-wfe7xcno>  </div> </div> </div>`)} </div> <button class="button-right arrow" data-astro-cid-wfe7xcno>&rightarrow;</button> </div> </section>  `;
}, "/Users/jackieho/portfolio2024-final-1/src/components/Carousel.astro", void 0);

const $$Astro$4 = createAstro();
const $$ProcessOverview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ProcessOverview;
  const { processes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="container" data-astro-cid-cmhkrgwp> <h2 class="container-header" data-astro-cid-cmhkrgwp>Process Overview</h2> <div class="container process-container" data-astro-cid-cmhkrgwp> ${processes.map((process) => renderTemplate`<div class="process" data-astro-cid-cmhkrgwp> <img class="process-icon"${addAttribute(process.src, "src")}${addAttribute(process.header, "alt")} data-astro-cid-cmhkrgwp> <h4 class="process-header" data-astro-cid-cmhkrgwp>${process.header}</h4> <ul class="process-activity-list" data-astro-cid-cmhkrgwp> ${process.activities.map((activity) => renderTemplate`<li class="process-activity-item" data-astro-cid-cmhkrgwp> <small class="process-activity-text" data-astro-cid-cmhkrgwp>${activity}</small> </li>`)} </ul> </div>
        <div class="process-arrow-container" data-astro-cid-cmhkrgwp> <p class="process-arrow" data-astro-cid-cmhkrgwp>&#8635;</p> </div>`)} </div> </section>  `;
}, "/Users/jackieho/portfolio2024-final-1/src/components/ProcessOverview.astro", void 0);

const $$Astro$3 = createAstro();
const $$ColumnTextBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ColumnTextBlock;
  const { content, header } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="container" data-astro-cid-lqidj75n> ${content && renderTemplate`<h2 class="container-header" data-astro-cid-lqidj75n>${header}</h2>

      ${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-lqidj75n": true }, { "default": ($$result2) => renderTemplate` <div class="container-content" data-astro-cid-lqidj75n> ${content?.map((block) => renderTemplate`<div class="container-item" data-astro-cid-lqidj75n> <h3 class="container-item-header" data-astro-cid-lqidj75n>${block.header}</h3> <p data-astro-cid-lqidj75n>${block.description}</p> ${block.list && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-lqidj75n": true }, { "default": ($$result3) => renderTemplate` <ul class="container-item-list" data-astro-cid-lqidj75n> ${block.list.map((item) => renderTemplate`<li class="container-item-list-item" data-astro-cid-lqidj75n>${item}</li>`)} </ul> ` })}`} </div>`)} </div> ` })}`} </section> `;
}, "/Users/jackieho/portfolio2024-final-1/src/components/ColumnTextBlock.astro", void 0);

const $$Astro$2 = createAstro();
async function getStaticPaths$1() {
  const portfolioEntries = await getCollection("portfolio");
  return portfolioEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$$1;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title, "description": entry.data.description }, { "main": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="main portfolio-main"> <section> <!-- <Image class="main-image" src={entry.data.hero} alt={entry.data.alt} /> --> <div class="portfolio-content"> <div class="portfolio-intro-content"> <div class="portfolio-intro"> <div class="portfolio-category-container"> ${entry.data.category.map((item) => renderTemplate`<span class="portfolio-category">${item}</span>`)} </div> <h1 class="portfolio-title">${entry.data.title}</h1> <h2 class="portfolio-subheaders">Introduction</h2> <p class="portfolio-intro-text">${entry.data.introduction}</p> <h2 class="portfolio-subheaders">Timeline</h2> <p>${entry.data.projectDuration}</p> <h2 class="portfolio-subheaders">My Role</h2> ${entry.data.roles.map((role) => renderTemplate`<p>${role}</p>`)} ${entry.data.team && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <h2 class="portfolio-subheaders">Team Members</h2> <ol> ${entry.data.team.map((member) => renderTemplate`<li><strong>${member.name}</strong><br><em>${member.position}</em></li><br>`)} </ol> ` })}`} </div> <div class="portfolio-objectives"> <div class="portfolio-deliverables"> <div class="portfolio-image-section"> <div class="portfolio-image-container"> ${renderComponent($$result2, "Image", $$Image, { "src": entry.data.thumbnail, "alt": entry.data.alt })} </div> </div> <div class="portfolio-deliverables"> <div class="portfolio-text-content"> ${entry.data.productVision && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <h2 class="portfolio-subheaders">Product Vision</h2> <p>${entry.data.productVision}</p> ` })}`} <h2 class="portfolio-subheaders">Product Goals & Objectives</h2> <ul> ${entry.data.projectGoal.map((goal) => renderTemplate`<li>${goal}</li>`)} </ul> </div> </div> </div> </div> </div></div></section> ${renderComponent($$result2, "ProcessOverview", $$ProcessOverview, { "processes": entry.data.processes.map((process) => ({
    src: process.src.src,
    header: process.header,
    activities: process.activities.map((activity) => ({
      src: activity,
      alt: ""
    }))
  })) })} ${renderComponent($$result2, "Carousel", $$Carousel, { "images": entry.data.carousel.map((image) => ({ src: image.src.src, alt: image.alt })), "header": "Screenshots", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/jackieho/portfolio2024-final-1/src/components/Carousel.astro", "client:component-export": "default" })} ${entry.data.impact && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ColumnTextBlock", $$ColumnTextBlock, { "header": "Product Impact", "content": entry.data.impact.map((item) => ({ header: item.header, description: item.description, list: item.list || [] })) })} ` })}`} ${renderComponent($$result2, "Content", Content, {})} </main>` })}  `;
}, "/Users/jackieho/portfolio2024-final-1/src/pages/portfolio/[...slug].astro", void 0);

const $$file$3 = "/Users/jackieho/portfolio2024-final-1/src/pages/portfolio/[...slug].astro";
const $$url$3 = "/portfolio/[...slug]";

const ____slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$1,
  file: $$file$3,
  getStaticPaths: getStaticPaths$1,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Digital Services Jackie Ho", "description": "A digital product designer from Vancouver, BC" }, { "main": ($$result2) => renderTemplate`${maybeRenderHead()}<main> <h1>Services Offered</h1> <h2>Website Services</h2> <h3>Website Audit</h3> <ul> <li> <p>Performance Audit</p> </li> <li> <p>UX Audit</p> </li> <li> <p>Custom Development</p> </li> </ul> <h3>Development</h3> <ul> <li> <p>Performance Audit</p> </li> <li> <p>UX Audit</p> </li> <li> <p>Custom Development</p> </li> </ul> <h2>Digital Marketing Services</h2> <h3>Social Media Audit</h3> <ul> <li> <p>Social Media Audit</p> </li> <li> <p>Social Media Advertising</p> </li> <li> <p>Social Media Audit</p> </li> </ul> <h3>Design Services</h3> <ul> <li> <p>Social Media Audit</p> </li> <li> <p>Social Media Advertising</p> </li> <li> <p>Social Media Audit</p> </li> </ul> </main>` })} `;
}, "/Users/jackieho/portfolio2024-final-1/src/pages/services.astro", void 0);

const $$file$2 = "/Users/jackieho/portfolio2024-final-1/src/pages/services.astro";
const $$url$2 = "/services";

const services = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
async function getStaticPaths() {
  const blogEntries = await getCollection("blogs");
  return blogEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title, "description": entry.data.description, "data-astro-cid-5mk7rcd7": true }, { "main": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="main blog-main" data-astro-cid-5mk7rcd7> ${renderComponent($$result2, "Image", $$Image, { "class": "main-image", "src": entry.data.thumbnail, "alt": entry.data.alt, "data-astro-cid-5mk7rcd7": true })} <ul class="blog-metadata-list" data-astro-cid-5mk7rcd7> <li class="blog-metadata-item" data-astro-cid-5mk7rcd7><p class="blog-metadata" data-astro-cid-5mk7rcd7><strong data-astro-cid-5mk7rcd7>Last Updated:</strong><br data-astro-cid-5mk7rcd7>${entry.data.pubDate}</p></li> <li class="blog-metadata-item" data-astro-cid-5mk7rcd7><p class="blog-metadata" data-astro-cid-5mk7rcd7><strong data-astro-cid-5mk7rcd7>Written By:</strong><br data-astro-cid-5mk7rcd7>${entry.data.author}</p></li> </ul> <div class="container" data-astro-cid-5mk7rcd7> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-5mk7rcd7": true })} </div> </main>` })} `;
}, "/Users/jackieho/portfolio2024-final-1/src/pages/tutorials/[...slug].astro", void 0);

const $$file$1 = "/Users/jackieho/portfolio2024-final-1/src/pages/tutorials/[...slug].astro";
const $$url$1 = "/tutorials/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file$1,
  getStaticPaths,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const myImage = new Proxy({"src":"/_astro/Hero.Ckd-nSp4.png","width":600,"height":570,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jackieho/portfolio2024-final-1/src/images/Hero.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { primaryCTA, primaryLink, header, subtext, title, location } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="container-fullscreen" data-astro-cid-bbe6dxrz> <div class="container-content" data-astro-cid-bbe6dxrz> <div class="container-text" data-astro-cid-bbe6dxrz> <h1 class="content-title" data-astro-cid-bbe6dxrz>${header}</h1> <h2 class="content-header" data-astro-cid-bbe6dxrz> ${subtext} </h2> <div class="container-CTA" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Button", $$Button, { "className": "primary-button", "buttonCTA": primaryCTA, "buttonLink": primaryLink, "data-astro-cid-bbe6dxrz": true })} </div> </div> <div class="hero-container" data-astro-cid-bbe6dxrz> <picture data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Image", $$Image, { "class": "hero-image", "src": myImage, "alt": "Jackie Ho", "loading": "eager", "data-astro-cid-bbe6dxrz": true })} </picture> </div> <!-- <div class="arrow-container">
      <Image class="arrow-image" src={Arrow} alt="arrow" />
    </div> --> <h2 class="content-jobTitle" data-astro-cid-bbe6dxrz> ${title} <br data-astro-cid-bbe6dxrz> <span class="location" data-astro-cid-bbe6dxrz>${location}</span> </h2> </div> </section> `;
}, "/Users/jackieho/portfolio2024-final-1/src/components/Hero.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Bento = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<section id="work" class="container work-section" data-astro-cid-fbuedaya> <div class="bento-container" data-astro-cid-fbuedaya> <div class="bento-item bento-1" data-astro-cid-fbuedaya> <a class="bento-link" href="../portfolio/four-seasons-rv-rental/" data-astro-cid-fbuedaya> <div class="bento-text" data-astro-cid-fbuedaya> <h3 class="bento-header" data-astro-cid-fbuedaya>FOUR SEASONS RV RENTALS</h3> <small data-astro-cid-fbuedaya>Live Website</small> </div> </a> </div> <div class="bento-item bento-2" data-astro-cid-fbuedaya> <div class="bento-text" data-astro-cid-fbuedaya> <h3 class="bento-header" data-astro-cid-fbuedaya>Clients I've Worked On</h3> </div> <div class="bento-icons" data-astro-cid-fbuedaya> <img src="src/images/companies/staples.svg" data-astro-cid-fbuedaya> <img src="src/images/companies/walmart.svg" data-astro-cid-fbuedaya> <img src="src/images/companies/costco.svg" data-astro-cid-fbuedaya> <img src="src/images/companies/tesco.svg" data-astro-cid-fbuedaya> <img src="src/images/companies/fraserway.svg" data-astro-cid-fbuedaya> </div> </div> <div class="bento-item bento-3" data-astro-cid-fbuedaya> <div class="bento-text" data-astro-cid-fbuedaya> <div class="bento-text" data-astro-cid-fbuedaya> <h3 class="bento-header" data-astro-cid-fbuedaya>Services Offered</h3> </div> <div class="bento-icons" data-astro-cid-fbuedaya> <ul class="ux-list" data-astro-cid-fbuedaya> <li class="ux-list-item" data-astro-cid-fbuedaya>Wireframes</li> <li class="ux-list-item" data-astro-cid-fbuedaya>UX Research</li> <li class="ux-list-item" data-astro-cid-fbuedaya>UI Design</li> <li class="ux-list-item" data-astro-cid-fbuedaya>User Testing</li> <li class="ux-list-item" data-astro-cid-fbuedaya>KPI Tracking & Analysis</li> <li class="ux-list-item" data-astro-cid-fbuedaya>Prototyping</li> <li class="ux-list-item" data-astro-cid-fbuedaya>Custom Web Development</li> <li class="ux-list-item" data-astro-cid-fbuedaya>Video Marketing</li> <li class="ux-list-item" data-astro-cid-fbuedaya>Email Strategy</li> <li class="ux-list-item" data-astro-cid-fbuedaya>Digital Strategy</li> <li class="ux-list-item" data-astro-cid-fbuedaya>Branding</li> </ul> </div> </div> </div> <div class="bento-item bento-4" data-astro-cid-fbuedaya> <div class="bento-text" data-astro-cid-fbuedaya> <h3 class="bento-header" data-astro-cid-fbuedaya><span class="webprojects" data-astro-cid-fbuedaya>0</span>+<br data-astro-cid-fbuedaya>Web Projects Launched</h3> </div> </div> <div class="bento-item bento-5 " data-astro-cid-fbuedaya> <div class="bento-text" data-astro-cid-fbuedaya> <h3 class="bento-header" data-astro-cid-fbuedaya><span class="marketing-campaigns" data-astro-cid-fbuedaya>0</span>+<br data-astro-cid-fbuedaya> Marketing Campaigns & Projects Delivered</h3> </div> </div> <div class="bento-item bento-6 " data-astro-cid-fbuedaya> <a class="bento-link" href="../portfolio/venues-for-meetup/" data-astro-cid-fbuedaya> <div class="bento-text" data-astro-cid-fbuedaya> <h3 class="bento-header" data-astro-cid-fbuedaya>Venues by Meetup</h3> <small data-astro-cid-fbuedaya>Concept App</small> </div> </a> </div> <div class="bento-item bento-7 archived" data-astro-cid-fbuedaya> <div class="bento-text" data-astro-cid-fbuedaya> <h3 class="bento-header" data-astro-cid-fbuedaya>PAST PROJECTS</h3> <input type="checkbox" id="bar" class="archive-projects" data-astro-cid-fbuedaya> <label for="bar" class="labels" style="opacity: 1;" data-astro-cid-fbuedaya>Bar Perry Pet Photography</label> <input type="checkbox" id="bredy" class="archive-projects" data-astro-cid-fbuedaya> <label for="bredy" class="labels" data-astro-cid-fbuedaya>Bredy Landscaping</label> <input type="checkbox" id="nom" class="archive-projects" data-astro-cid-fbuedaya> <label for="nom" class="labels" data-astro-cid-fbuedaya>604NomNom</label> <input type="checkbox" id="boogaloo" class="archive-projects" data-astro-cid-fbuedaya> <label for="boogaloo" class="labels" data-astro-cid-fbuedaya>Boogaloo Academy</label> <input type="checkbox" id="logos" class="archive-projects" data-astro-cid-fbuedaya> <label for="logos" class="labels" data-astro-cid-fbuedaya>Logos</label> </div> </div> <div class="bento-item archived bento-8" data-astro-cid-fbuedaya></div> </div> </section>  <script>
    let imageDisplay = document.querySelector('.bento-8');
    let logos = document.querySelector('#logos');
    let bar = document.querySelector('#bar');
    let bredy = document.querySelector('#bredy');
    let boogaloo = document.querySelector('#boogaloo');
    let nom = document.querySelector('#nom');
    let labels = document.querySelectorAll('label');
    let inputs = document.querySelectorAll('input');
    let previousCheckedItem = null;
    let finalCampaigns = 100;
    let finalWebProjects = 10;

    const marketingCampaigns = document.querySelector('.marketing-campaigns');
    const webProjects = document.querySelector('.webprojects');
    let isAnimated = false;

 
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    window.addEventListener('scroll', () => {
        const bentoSectionRect = marketingCampaigns.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (bentoSectionRect.top <= windowHeight && !isAnimated) {
            isAnimated = true;
            animateValue(marketingCampaigns, 0, finalCampaigns, 1000);
            animateValue(webProjects, 0, finalWebProjects, 1000);
        }
    });

    labels.forEach(label => {
        label.addEventListener('click', function() {
            labels.forEach(l => {
                l.style.opacity = '0.5';
            });
            this.style.opacity = '1';
        });
    });


    inputs.forEach(input => {
        input.addEventListener('change', function() {
            if (previousCheckedItem) {
                previousCheckedItem.checked = false;
            }
            previousCheckedItem = this;
        });
    });


    logos.addEventListener('change', function(){
        if(logos.checked){
            imageDisplay.style.transition = "background-image 0.5s";
            imageDisplay.style.background = 'black center center';

            imageDisplay.style.background = 'url("/images/portfolio/Logos.gif") center center no-repeat';
            imageDisplay.style.backgroundSize = 'cover';

        } 
    });

    bar.addEventListener('change', function(){

        if(bar.checked){
            imageDisplay.style.transition = "background-image 0.5s";
            imageDisplay.style.background = 'black center center';

            imageDisplay.style.background = 'url("/images/portfolio/bar-perry/BarPerry.png") center center no-repeat';
            imageDisplay.style.backgroundSize = 'cover';
            
        } 
    });

  

   

    boogaloo.addEventListener('change', function(){

        if(boogaloo.checked){
            imageDisplay.style.transition = "background-image 0.5s";
            imageDisplay.style.background = 'black center center';
            imageDisplay.style.background = 'url("/images/portfolio/boogaloo/Boogaloo.jpg") center center no-repeat';
            imageDisplay.style.backgroundSize = 'cover';
        }
    });

    bredy.addEventListener('change', function(){

        if(bredy.checked){
            imageDisplay.style.transition = "background-image 0.5s";
            imageDisplay.style.background = 'black center center';
            imageDisplay.style.background = 'url("/images/portfolio/bredy-landscaping/BredyLandscaping.jpg") center center no-repeat';

            imageDisplay.style.backgroundSize = 'cover';
        }
    });

    nom.addEventListener('change', function(){

        if(nom.checked){
            imageDisplay.style.transition = "background-image 0.5s";
            imageDisplay.style.background = 'black center center';
            imageDisplay.style.background = 'url("/images/portfolio/604nomnom/604nomnom.jpg") center center no-repeat';
            imageDisplay.style.backgroundSize = 'cover';
        }
    });


<\/script>`])), maybeRenderHead());
}, "/Users/jackieho/portfolio2024-final-1/src/components/Bento.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let allWork = await getCollection("portfolio", ({ data }) => {
    return data.isDraft !== true;
  });
  allWork.sort((a, b) => Date.parse(b.data.pubDate) - Date.parse(a.data.pubDate));
  return renderTemplate(_a || (_a = __template(["", ` <script>
  window.addEventListener("scroll", () => {
    const aboutSection = document.querySelector(".about-section");
    const aboutSectionTop = aboutSection?.offsetTop;
    const workSection = document.querySelector(".work-section");
    const bentoSectionTop = workSection?.offsetTop;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition > aboutSectionTop - windowHeight) {
      aboutSection?.classList.add("animate");
    }

    if (scrollPosition > bentoSectionTop - windowHeight) {
      aboutSection?.classList.add("animate");
    }
  });
  
<\/script> <!-- <script is:inline>
      function filterPortfolio(category) {
        // Logic to filter portfolio based on category
        let portfolioItems = document.querySelectorAll('.portfolio-list-item'); 
        let portfolioCategory = document.querySelectorAll('.portfolio-category'); 
        reset();
        for (let i = 0; i < portfolioItems.length; i++) {
          let item = portfolioItems[i];
          let cat = portfolioCategory[i];
          console.log(cat);

          if (category === cat.textContent)  {
            console.log(category)
            console.log(cat.textContent);
          }

          else if (category === "All") {
            item.style.display = "block";
          } 

          else {
            item.style.display = "none";
          }
        }
      }

      function reset() {
        let portfolioItems = document.querySelectorAll('.portfolio-list-item'); 
        for (let i = 0; i < portfolioItems.length; i++) {
          let item = portfolioItems[i];
          item.style.display = "block";
        }
      }



   // Get the container element
var btnContainer = document.getElementById("button-list");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("filter-button");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
<\/script> --> `])), renderComponent($$result, "Layout", $$Layout, { "title": "Digital Portfolio of Jackie Ho", "description": "A digital product designer Based in Vancouver, BC", "data-astro-cid-j7pv25f6": true }, { "main": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "header": "Digital Portfolio of Jackie Ho", "subtext": "I deliver user-centered solutions for business success.", "title": "Product Designer", "location": "Based in Vancouver, BC", "primaryCTA": "View Work", "primaryLink": "#work", "data-astro-cid-j7pv25f6": true })} <section class="about-section" data-astro-cid-j7pv25f6> <div class="about-content" data-astro-cid-j7pv25f6> <div class="about-header-container" data-astro-cid-j7pv25f6> <h3 class="section-header" data-astro-cid-j7pv25f6>About Jackie Ho</h3> </div> <div class="about-description-container" data-astro-cid-j7pv25f6> <p class="about-description" data-astro-cid-j7pv25f6>
Product designer with over 8 years of experiences delivering variety of digital products and experiences from end-to-end. I have a wide range of skills that can help you deliver your next product and service.
</p> <p class="about-description" data-astro-cid-j7pv25f6>
Recently certified Product Manager and AWS Cloud Practitioner with a Bachelor of Arts in Design & New Media from SFU's SIAT program. I love learning and staying up-to-date with the latest trends in web technologies and design to provide pragmatic applications for your business.
</p> <p class="about-description" data-astro-cid-j7pv25f6>
Outside of work, I'm a serial hobbiest. I read books, fly a drone, make music, make 3D animation, sew clothes, practice yoga and play video games.
</p> </div> </div> </section> ${renderComponent($$result2, "Bento", $$Bento, { "data-astro-cid-j7pv25f6": true })} <!-- <section id="work" class="feature-section">
      <h2 class="feature-work-header">FEATURED WORK</h2>
      </section> --> <!-- <section id="work" class="work-section">
        <h2>OTHER WORK</h2>
        <ul id="button-list" class="filter-buttons">
          <button  class="filter-button active" onclick="filterPortfolio('All')">All</button>
          {
    
            allWork
              .map((blog) => blog.data.category)
              .filter((category, index, self) => self.indexOf(category) === index)
              .sort()
              .map((category) => (
                <button class="filter-button" onclick={\`filterPortfolio('\${category}')\`}>{category}</button>
              ))
          }
        </ul>

        
        <div class="work-container">
          <ul class="portfolio-list">
            {
                allWork.map((blog) => (
                  <Portfolio
                    url={\`/portfolio/\${blog.slug}/\`}
                    title={blog.data.title}
                    image={blog.data.thumbnail}                   
                    alt={blog.data.alt}
                    category={blog.data.category}
                    description={blog.data.description}
                    technology={blog.data.technology}
                    cta = {blog.data.cta}
                    deliverables = {blog.data.deliverables}
                  />
                ))
            }
          </ul>
        </div>
      </section> --> </main>` }));
}, "/Users/jackieho/portfolio2024-final-1/src/pages/index.astro", void 0);

const $$file = "/Users/jackieho/portfolio2024-final-1/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _404 as _, about as a, blog as b, ____slug_$2 as c, contact as d, ____slug_$1 as e, ____slug_ as f, index as i, myExperiences as m, password as p, services as s };
