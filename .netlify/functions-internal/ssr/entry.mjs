import { renderers } from './renderers.mjs';
import { manifest } from './manifest_jsHFb608.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CZOmGRGg.mjs');
const _page1 = () => import('./chunks/404_PkOmoVPH.mjs');
const _page2 = () => import('./chunks/about_CY6IA0Of.mjs');
const _page3 = () => import('./chunks/blog_C8--lB1v.mjs');
const _page4 = () => import('./chunks/_.._EBreaWSU.mjs');
const _page5 = () => import('./chunks/contact_Cthok4Q3.mjs');
const _page6 = () => import('./chunks/fraserway_C5_aYpDB.mjs');
const _page7 = () => import('./chunks/my-experiences_3Rh3k_6g.mjs');
const _page8 = () => import('./chunks/password_BtUi8Mgk.mjs');
const _page9 = () => import('./chunks/_.._C06kpEWA.mjs');
const _page10 = () => import('./chunks/services_OZiXuiVX.mjs');
const _page11 = () => import('./chunks/_.._5YxUpghn.mjs');
const _page12 = () => import('./chunks/index_x1aPeLCh.mjs');
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
    "middlewareSecret": "93af58e5-0783-4cc8-8725-b8930a57e8d2"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
