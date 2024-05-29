import { renderers } from './renderers.mjs';
import { manifest } from './manifest_ww57f46d.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CIlwSr7f.mjs');
const _page1 = () => import('./chunks/404_zVxwR1e1.mjs');
const _page2 = () => import('./chunks/blog_DKA9TiZV.mjs');
const _page3 = () => import('./chunks/_.._CVFMqtkV.mjs');
const _page4 = () => import('./chunks/contact_BxAP6KDK.mjs');
const _page5 = () => import('./chunks/fraserway_B2zrqJxY.mjs');
const _page6 = () => import('./chunks/my-experiences_B8Dcw4YP.mjs');
const _page7 = () => import('./chunks/password_BDKtAkSB.mjs');
const _page8 = () => import('./chunks/_.._CGWeHRN-.mjs');
const _page9 = () => import('./chunks/services_BUQW5wvJ.mjs');
const _page10 = () => import('./chunks/_.._DOQOtxTA.mjs');
const _page11 = () => import('./chunks/index_DcjLJo-N.mjs');
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
    "middlewareSecret": "fdeea0de-092f-498f-99ad-1d210fd4fdf2"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
