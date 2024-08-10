import { renderers } from './renderers.mjs';
import { manifest } from './manifest_eftSlTyx.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CZOmGRGg.mjs');
const _page1 = () => import('./chunks/404_iCDamsOE.mjs');
const _page2 = () => import('./chunks/about_gv9iaeQs.mjs');
const _page3 = () => import('./chunks/blog_cC4hJnJe.mjs');
const _page4 = () => import('./chunks/_.._B3MyaGfM.mjs');
const _page5 = () => import('./chunks/contact_CMFtvOpX.mjs');
const _page6 = () => import('./chunks/fraserway_C8Yyl-bN.mjs');
const _page7 = () => import('./chunks/my-experiences_C2OYgEz1.mjs');
const _page8 = () => import('./chunks/password_CwU8AXVg.mjs');
const _page9 = () => import('./chunks/_.._B752EFvA.mjs');
const _page10 = () => import('./chunks/services_CU-Kd-ms.mjs');
const _page11 = () => import('./chunks/_.._4mA4zSTA.mjs');
const _page12 = () => import('./chunks/index_BD_zNMfc.mjs');
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
    "middlewareSecret": "088d7070-edae-464f-b7ec-5c59ab38f065"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
