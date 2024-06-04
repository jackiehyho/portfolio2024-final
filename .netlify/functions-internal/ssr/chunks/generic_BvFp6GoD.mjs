export { renderers } from '../renderers.mjs';

const page = () => import('./pages/generic_B-RE2-Jr.mjs').then(n => n.g);

export { page };
