import { c as createComponent, r as renderTemplate, a as renderComponent, d as createAstro, m as maybeRenderHead } from '../chunks/astro/server_Cznnwn2Q.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BZ9l8QFj.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Fraserway = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Fraserway;
  const PAGE_PASSWORD = "since1969";
  const password = Astro2.url.searchParams.get("password");
  const authenticated = password == PAGE_PASSWORD;
  if (!authenticated)
    return Astro2.redirect("/password");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Digital Portfolio of Jackie Ho", "description": "A digital product designer Based in Vancouver, BC" }, { "main": ($$result2) => renderTemplate`${maybeRenderHead()}<main>
Test
</main>` })}`;
}, "C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/pages/fraserway.astro", void 0);

const $$file = "C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/pages/fraserway.astro";
const $$url = "/fraserway";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Fraserway,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
