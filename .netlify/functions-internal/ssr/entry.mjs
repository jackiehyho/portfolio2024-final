import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CtR7eICU.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CZOmGRGg.mjs');
const _page1 = () => import('./chunks/404_BXtrdjeH.mjs');
const _page2 = () => import('./chunks/about_nXqpcIcX.mjs');
const _page3 = () => import('./chunks/blog_B0AylUgM.mjs');
const _page4 = () => import('./chunks/_.._C2CfRn9M.mjs');
const _page5 = () => import('./chunks/contact_r_blZiM7.mjs');
const _page6 = () => import('./chunks/fraserway_C5_aYpDB.mjs');
const _page7 = () => import('./chunks/my-experiences_Bepb_gEa.mjs');
const _page8 = () => import('./chunks/password_CV5e3hWL.mjs');
const _page9 = () => import('./chunks/_.._BGdcYVqx.mjs');
const _page10 = () => import('./chunks/services_Bva4Z4eE.mjs');
const _page11 = () => import('./chunks/_.._D6002i1g.mjs');
const _page12 = () => import('./chunks/index_EiMUXpWk.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/blog.astro", _page3],
    ["src/pages/blogs/[...slug].astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/fraserway.astro", _page6],
    ["src/pages/my-experiences.astro", _page7],
    ["src/pages/password.astro", _page8],
    ["src/pages/portfolio/[...slug].astro", _page9],
    ["src/pages/services.astro", _page10],
    ["src/pages/tutorials/[...slug].astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "42e87d66-598d-44ce-91da-437c77fc9c03"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
