export { renderers } from '../renderers.mjs';

const page = () => import('./prerender_CzeEDSAV.mjs').then(n => n.m);

export { page };