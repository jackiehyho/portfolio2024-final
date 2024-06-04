import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BZInOUoW.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BvFp6GoD.mjs');
const _page1 = () => import('./chunks/404_7xlqS68r.mjs');
const _page2 = () => import('./chunks/blog_BGDDhvix.mjs');
const _page3 = () => import('./chunks/_.._C8EPspJB.mjs');
const _page4 = () => import('./chunks/contact_BE79c1az.mjs');
const _page5 = () => import('./chunks/fraserway_6yg_QCVl.mjs');
const _page6 = () => import('./chunks/my-experiences_9hR-QRDg.mjs');
const _page7 = () => import('./chunks/password_DEnPur4l.mjs');
const _page8 = () => import('./chunks/_.._BGIdSUjw.mjs');
const _page9 = () => import('./chunks/services_ChnX_MRC.mjs');
const _page10 = () => import('./chunks/_.._BTop67yt.mjs');
const _page11 = () => import('./chunks/index_D616f9SA.mjs');
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
    "middlewareSecret": "e7e568b0-9caa-4c6f-b86e-298364d61ae5"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
