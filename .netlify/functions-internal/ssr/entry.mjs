import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DSpTSq84.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CIlwSr7f.mjs');
const _page1 = () => import('./chunks/404_BMagkBs9.mjs');
const _page2 = () => import('./chunks/blog_Ilyyp6AJ.mjs');
const _page3 = () => import('./chunks/_.._Dy8vAU_9.mjs');
const _page4 = () => import('./chunks/contact_D2XGYA1A.mjs');
const _page5 = () => import('./chunks/fraserway_e8usAYCe.mjs');
const _page6 = () => import('./chunks/my-experiences_cZramUea.mjs');
const _page7 = () => import('./chunks/password_BYr8wgak.mjs');
const _page8 = () => import('./chunks/_.._wqnaBJot.mjs');
const _page9 = () => import('./chunks/services_CtROg4Ri.mjs');
const _page10 = () => import('./chunks/_.._CNuVN-Cl.mjs');
const _page11 = () => import('./chunks/index_u9op7HZ5.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/blog.astro", _page2],
    ["src/pages/blogs/[...slug].astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/fraserway.astro", _page5],
    ["src/pages/my-experiences.astro", _page6],
    ["src/pages/password.astro", _page7],
    ["src/pages/portfolio/[...slug].astro", _page8],
    ["src/pages/services.astro", _page9],
    ["src/pages/tutorials/[...slug].astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "65b35e35-01d5-4f16-9fbd-dc118fa155ea"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
