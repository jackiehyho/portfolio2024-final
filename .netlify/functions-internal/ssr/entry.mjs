import { renderers } from './renderers.mjs';
import { manifest } from './manifest_SKPZn8ja.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CZOmGRGg.mjs');
const _page1 = () => import('./chunks/404_CO8BN-or.mjs');
const _page2 = () => import('./chunks/about_BD86Hfy1.mjs');
const _page3 = () => import('./chunks/blog_D0EbRqzN.mjs');
const _page4 = () => import('./chunks/_.._CBIEVi7y.mjs');
const _page5 = () => import('./chunks/contact_BV6heS_t.mjs');
const _page6 = () => import('./chunks/fraserway_dD4yVzvp.mjs');
const _page7 = () => import('./chunks/my-experiences_DUtkKMjo.mjs');
const _page8 = () => import('./chunks/password_D_1UlKHb.mjs');
const _page9 = () => import('./chunks/_.._Dsg5qK23.mjs');
const _page10 = () => import('./chunks/services_BJk6a4j-.mjs');
const _page11 = () => import('./chunks/_.._DjDjrTxl.mjs');
const _page12 = () => import('./chunks/index_3bvyDOJ7.mjs');
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
    "middlewareSecret": "cc869947-c0e8-42a4-bbe9-4f05bae18889"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };