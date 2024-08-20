import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CNsnCHVQ.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CZOmGRGg.mjs');
const _page1 = () => import('./chunks/404_BTDJc31K.mjs');
const _page2 = () => import('./chunks/about_DwQG4us2.mjs');
const _page3 = () => import('./chunks/blog_BmzicRHE.mjs');
const _page4 = () => import('./chunks/_.._CuDjNlVq.mjs');
const _page5 = () => import('./chunks/contact_CEkAx0co.mjs');
const _page6 = () => import('./chunks/fraserway_ZMsaCYbQ.mjs');
const _page7 = () => import('./chunks/my-experiences_DHp-AVxq.mjs');
const _page8 = () => import('./chunks/password_D9OUN-e7.mjs');
const _page9 = () => import('./chunks/_.._DThAL-lj.mjs');
const _page10 = () => import('./chunks/services_D5tkMhVn.mjs');
const _page11 = () => import('./chunks/_.._BH4OqTCq.mjs');
const _page12 = () => import('./chunks/index_CaGtSi4d.mjs');
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
    "middlewareSecret": "2fff539e-b03d-4be4-9003-232fc8e96c69"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
