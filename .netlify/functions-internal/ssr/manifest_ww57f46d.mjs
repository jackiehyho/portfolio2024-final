import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import './chunks/astro_Dt-RJx1C.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"my-experiences/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/my-experiences","isIndex":false,"type":"page","pattern":"^\\/my-experiences\\/?$","segments":[[{"content":"my-experiences","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/my-experiences.astro","pathname":"/my-experiences","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"password/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/password","isIndex":false,"type":"page","pattern":"^\\/password\\/?$","segments":[[{"content":"password","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/password.astro","pathname":"/password","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"services/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DqR2iBSn.js"}],"styles":[{"type":"external","src":"/_astro/blog.Dvfp0_Vz.css"}],"routeData":{"route":"/fraserway","isIndex":false,"type":"page","pattern":"^\\/fraserway\\/?$","segments":[[{"content":"fraserway","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fraserway.astro","pathname":"/fraserway","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/pages/blog.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/pages/blogs/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/pages/fraserway.astro",{"propagation":"none","containsHead":true}],["C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/pages/my-experiences.astro",{"propagation":"none","containsHead":true}],["C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/pages/password.astro",{"propagation":"none","containsHead":true}],["C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/pages/portfolio/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/pages/services.astro",{"propagation":"none","containsHead":true}],["C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/pages/tutorials/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blogs/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/portfolio/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tutorials/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-manifest":"manifest_ww57f46d.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_CIlwSr7f.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_zVxwR1e1.mjs","\u0000@astro-page:src/pages/blog@_@astro":"chunks/blog_DKA9TiZV.mjs","\u0000@astro-page:src/pages/blogs/[...slug]@_@astro":"chunks/_.._CVFMqtkV.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_BxAP6KDK.mjs","\u0000@astro-page:src/pages/fraserway@_@astro":"chunks/fraserway_B2zrqJxY.mjs","\u0000@astro-page:src/pages/my-experiences@_@astro":"chunks/my-experiences_B8Dcw4YP.mjs","\u0000@astro-page:src/pages/password@_@astro":"chunks/password_BDKtAkSB.mjs","\u0000@astro-page:src/pages/portfolio/[...slug]@_@astro":"chunks/_.._CGWeHRN-.mjs","\u0000@astro-page:src/pages/services@_@astro":"chunks/services_BUQW5wvJ.mjs","\u0000@astro-page:src/pages/tutorials/[...slug]@_@astro":"chunks/_.._DOQOtxTA.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_DcjLJo-N.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/blogs/astro-as-a-front-end-framework.md?astroContentCollectionEntry=true":"chunks/astro-as-a-front-end-framework_BI9Cfxrw.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/blogs/buttons.md?astroContentCollectionEntry=true":"chunks/buttons_B_eLiqDT.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/blogs/differences-between-brand-customer-and-user-experience.md?astroContentCollectionEntry=true":"chunks/differences-between-brand-customer-and-user-experience_Ct0gY4KB.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/blogs/digital-marketing.md?astroContentCollectionEntry=true":"chunks/digital-marketing_CeGZ18d3.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/blogs/ux-kpi copy.md?astroContentCollectionEntry=true":"chunks/ux-kpi copy_C3HBSWYe.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/blogs/ux-kpi.md?astroContentCollectionEntry=true":"chunks/ux-kpi_ikXmLjLP.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/blogs/what-is-marketing.md?astroContentCollectionEntry=true":"chunks/what-is-marketing_RrloQvT1.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/bar-perry.md?astroContentCollectionEntry=true":"chunks/bar-perry_CKQCh8d-.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/boogaloo-academy.md?astroContentCollectionEntry=true":"chunks/boogaloo-academy_CZh2Si5C.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/booking-app.md?astroContentCollectionEntry=true":"chunks/booking-app_cxKmvafF.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/bredy-landscaping.md?astroContentCollectionEntry=true":"chunks/bredy-landscaping_BPZQW9LB.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/campfyre.md?astroContentCollectionEntry=true":"chunks/campfyre_Y3rcbmWt.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/campsite.md?astroContentCollectionEntry=true":"chunks/campsite_C2o4KJ0n.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/four-seasons-rv-rental.md?astroContentCollectionEntry=true":"chunks/four-seasons-rv-rental_B872OQF5.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/fraserway-campaign.md?astroContentCollectionEntry=true":"chunks/fraserway-campaign_JHn-ZSmA.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/fraserway-marketing.md?astroContentCollectionEntry=true":"chunks/fraserway-marketing_JYpMNW6A.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/memorme.md?astroContentCollectionEntry=true":"chunks/memorme_DsFnJ6gR.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/richard-jeha-hair-company.md?astroContentCollectionEntry=true":"chunks/richard-jeha-hair-company_DppuLyeF.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/blogs/astro-as-a-front-end-framework.md?astroPropagatedAssets":"chunks/astro-as-a-front-end-framework_B2JzhGA8.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/blogs/buttons.md?astroPropagatedAssets":"chunks/buttons_B_ZLvuFs.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/blogs/differences-between-brand-customer-and-user-experience.md?astroPropagatedAssets":"chunks/differences-between-brand-customer-and-user-experience_CjNO19ZL.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/blogs/digital-marketing.md?astroPropagatedAssets":"chunks/digital-marketing_DAMq0BHc.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/blogs/ux-kpi copy.md?astroPropagatedAssets":"chunks/ux-kpi copy_CLmef6ja.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/blogs/ux-kpi.md?astroPropagatedAssets":"chunks/ux-kpi_CEampc_q.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/blogs/what-is-marketing.md?astroPropagatedAssets":"chunks/what-is-marketing_D7JanRzA.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/bar-perry.md?astroPropagatedAssets":"chunks/bar-perry_C_0RmpfZ.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/boogaloo-academy.md?astroPropagatedAssets":"chunks/boogaloo-academy_D-_l7HqD.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/booking-app.md?astroPropagatedAssets":"chunks/booking-app_DuSotwYJ.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/bredy-landscaping.md?astroPropagatedAssets":"chunks/bredy-landscaping_DVHUgxNp.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/campfyre.md?astroPropagatedAssets":"chunks/campfyre_Damesuhv.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/campsite.md?astroPropagatedAssets":"chunks/campsite_CTD_pl9_.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/four-seasons-rv-rental.md?astroPropagatedAssets":"chunks/four-seasons-rv-rental_DPqwrxtf.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/fraserway-campaign.md?astroPropagatedAssets":"chunks/fraserway-campaign_DbLyFiTN.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/fraserway-marketing.md?astroPropagatedAssets":"chunks/fraserway-marketing_BxNYYCXh.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/memorme.md?astroPropagatedAssets":"chunks/memorme_CTPGhwdc.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/richard-jeha-hair-company.md?astroPropagatedAssets":"chunks/richard-jeha-hair-company_FCbZTUSz.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/blogs/astro-as-a-front-end-framework.md":"chunks/astro-as-a-front-end-framework_BHBWsA4u.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/blogs/buttons.md":"chunks/buttons_CGEr-4Mw.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/blogs/differences-between-brand-customer-and-user-experience.md":"chunks/differences-between-brand-customer-and-user-experience_BKA0EzeJ.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/blogs/digital-marketing.md":"chunks/digital-marketing_uy75PfUy.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/blogs/ux-kpi copy.md":"chunks/ux-kpi copy_BnoUxu1N.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/blogs/ux-kpi.md":"chunks/ux-kpi_ClmOXzgX.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/blogs/what-is-marketing.md":"chunks/what-is-marketing_DapUrozL.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/bar-perry.md":"chunks/bar-perry_BBZ67FX9.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/boogaloo-academy.md":"chunks/boogaloo-academy_BikueMqX.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/booking-app.md":"chunks/booking-app_CmMgnPjM.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/bredy-landscaping.md":"chunks/bredy-landscaping_CY8dBa9y.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/campfyre.md":"chunks/campfyre_CBNZtG2C.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/campsite.md":"chunks/campsite_Dt5jG5rg.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/four-seasons-rv-rental.md":"chunks/four-seasons-rv-rental_C3vL24uM.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/fraserway-campaign.md":"chunks/fraserway-campaign_-a4QO_AC.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/fraserway-marketing.md":"chunks/fraserway-marketing_DzKssQY3.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/memorme.md":"chunks/memorme_ffQFB-Sa.mjs","C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/content/portfolio/richard-jeha-hair-company.md":"chunks/richard-jeha-hair-company_CGysFfFn.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DqR2iBSn.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/lightbulb.LNYFpb6c.svg","/_astro/padlock.CbaoSZkM.svg","/_astro/hiking.BWcTjkRg.svg","/_astro/Hero.Ckd-nSp4.png","/_astro/arrow-with-scribble.D5TmQYjJ.svg","/_astro/astro.l5Dewhzk.png","/_astro/bredyLandscaping.C221WK95.png","/_astro/campsite.Ha0wBtQb.jpg","/_astro/fraserway-logo.BhQ8lmJ_.png","/_astro/BarPerry.BFPhA3jR.png","/_astro/FourSeasonsRVRentals.DzvThvDz.png","/_astro/Memorme.Bgnra4J3.png","/_astro/blog.Dvfp0_Vz.css","/_astro/index.C6QYH9v1.css","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/browserconfig.xml","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/favicon.svg","/mstile-144x144.png","/mstile-150x150.png","/mstile-310x150.png","/mstile-310x310.png","/mstile-70x70.png","/safari-pinned-tab.svg","/site.webmanifest","/images/arrow-with-scribble.svg","/images/arrow.svg","/images/Hero-Small.png","/images/Hero.png","/images/hiking.svg","/images/iconmonstr-cv-1.png","/images/Instagram.svg","/images/Instagram_logo_2016.svg.png","/images/lightbulb.svg","/images/LinkedIn.svg","/images/LinkedIn_icon.svg.png","/images/logo.svg","/_astro/hoisted.DqR2iBSn.js","/images/blogs/astro-as-a-front-end-framework/astro.png","/images/blogs/astro-as-a-front-end-framework/placeholder.png","/images/portfolio/astro-as-a-front-end-framework/astro.png","/images/portfolio/astro-as-a-front-end-framework/placeholder.png","/images/portfolio/bar-perry/BarPerry.png","/images/portfolio/bredy-landscaping/BredyLandscaping-Concepts.jpg","/images/portfolio/bredy-landscaping/BredyLandscaping-Pinterest.png","/images/portfolio/bredy-landscaping/bredyLandscaping.png","/images/portfolio/four-seasons-rv-rental/FourSeasonsRVRental-Homepage.png","/images/portfolio/four-seasons-rv-rental/FourSeasonsRVRentals-Hero.webp","/images/portfolio/four-seasons-rv-rental/FourSeasonsRVRentals.png","/images/portfolio/campsite/campsite.jpg","/images/portfolio/fraserway/chair-mat.jpg","/images/portfolio/fraserway/newsprint.png","/images/portfolio/fraserway/trade-show-entrance.JPG","/images/portfolio/memorme/memorme-answers.jpg","/images/portfolio/memorme/memorme-brainstorm.jpg","/images/portfolio/memorme/memorme-consent.jpg","/images/portfolio/memorme/memorme-discussion.jpeg","/images/portfolio/memorme/Memorme-DoubleDiamond.jpeg","/images/portfolio/memorme/memorme-final.jpeg","/images/portfolio/memorme/memorme-organizing.jpg","/images/portfolio/memorme/memorme-organizing.png","/images/portfolio/memorme/memorme-presentation.mp4","/images/portfolio/memorme/memorme-team.jpeg","/images/portfolio/memorme/Memorme.png","/404.html","/blog/index.html","/contact/index.html","/my-experiences/index.html","/password/index.html","/services/index.html","/index.html"],"buildFormat":"directory"});

export { manifest };