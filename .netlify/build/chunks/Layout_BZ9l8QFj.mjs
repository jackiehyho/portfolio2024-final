import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as createAstro, h as defineStyleVars, b as addAttribute, i as renderSlot, j as renderHead } from './astro/server_Cznnwn2Q.mjs';
/* empty css                         */
import 'kleur/colors';
import 'clsx';

const $$SocialMedia = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul id="footer-social" class="social-media-list" data-astro-cid-d7jpscbk> <li class="social-media-container" data-astro-cid-d7jpscbk><a href="https://www.linkedin.com/in/jackiehyho/" aria-label="Link to my LinkedIn" data-astro-cid-d7jpscbk><svg class="social-media-icons" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" data-astro-cid-d7jpscbk><g fill="none" fill-rule="evenodd" data-astro-cid-d7jpscbk><path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" class="linkedin-background" fill="#007EBB" data-astro-cid-d7jpscbk></path><path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" class="linkedin-letters" fill="#FFF" data-astro-cid-d7jpscbk></path></g></svg></a></li> <li class="social-media-container" data-astro-cid-d7jpscbk> <a href="https://www.instagram.com/jackiehyho/" aria-label="Link to my Instagram" data-astro-cid-d7jpscbk><svg class="social-media-icons" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-astro-cid-d7jpscbk> <g id="Edges" data-astro-cid-d7jpscbk></g> <g id="Symbol" data-astro-cid-d7jpscbk> <g data-astro-cid-d7jpscbk> <radialGradient cx="56.3501" cy="19.2179" gradientTransform="matrix(0.9986 -5.233596e-02 4.448556e-02 0.8488 -36.9742 443.8014)" gradientUnits="userSpaceOnUse" id="SVGID_1_" r="711.335" data-astro-cid-d7jpscbk><stop offset="0" style="stop-color:#FED576" class="instagram-out" data-astro-cid-d7jpscbk></stop> <stop offset="0.2634" style="stop-color:#F47133" data-astro-cid-d7jpscbk></stop> <stop offset="0.6091" style="stop-color:#BC3081" data-astro-cid-d7jpscbk></stop> <stop offset="1" style="stop-color:#4C63D2" data-astro-cid-d7jpscbk></stop> </radialGradient> <path class="st0 instagram-outer" d="M96.1,23.2c-16.2,6.3-29.9,14.7-43.6,28.4C38.8,65.2,30.4,79,24.1,95.1c-6.1,15.6-10.2,33.5-11.4,59.7    c-1.2,26.2-1.5,34.6-1.5,101.4s0.3,75.2,1.5,101.4c1.2,26.2,5.4,44.1,11.4,59.7c6.3,16.2,14.7,29.9,28.4,43.6    c13.7,13.7,27.4,22.1,43.6,28.4c15.6,6.1,33.5,10.2,59.7,11.4c26.2,1.2,34.6,1.5,101.4,1.5c66.8,0,75.2-0.3,101.4-1.5    c26.2-1.2,44.1-5.4,59.7-11.4c16.2-6.3,29.9-14.7,43.6-28.4c13.7-13.7,22.1-27.4,28.4-43.6c6.1-15.6,10.2-33.5,11.4-59.7    c1.2-26.2,1.5-34.6,1.5-101.4s-0.3-75.2-1.5-101.4c-1.2-26.2-5.4-44.1-11.4-59.7C484,79,475.6,65.2,462,51.6    c-13.7-13.7-27.4-22.1-43.6-28.4c-15.6-6.1-33.5-10.2-59.7-11.4c-26.2-1.2-34.6-1.5-101.4-1.5s-75.2,0.3-101.4,1.5    C129.6,12.9,111.7,17.1,96.1,23.2z M356.6,56c24,1.1,37,5.1,45.7,8.5c11.5,4.5,19.7,9.8,28.3,18.4c8.6,8.6,13.9,16.8,18.4,28.3    c3.4,8.7,7.4,21.7,8.5,45.7c1.2,25.9,1.4,33.7,1.4,99.4s-0.3,73.5-1.4,99.4c-1.1,24-5.1,37-8.5,45.7c-4.5,11.5-9.8,19.7-18.4,28.3    c-8.6,8.6-16.8,13.9-28.3,18.4c-8.7,3.4-21.7,7.4-45.7,8.5c-25.9,1.2-33.7,1.4-99.4,1.4s-73.5-0.3-99.4-1.4    c-24-1.1-37-5.1-45.7-8.5c-11.5-4.5-19.7-9.8-28.3-18.4c-8.6-8.6-13.9-16.8-18.4-28.3c-3.4-8.7-7.4-21.7-8.5-45.7    c-1.2-25.9-1.4-33.7-1.4-99.4s0.3-73.5,1.4-99.4c1.1-24,5.1-37,8.5-45.7c4.5-11.5,9.8-19.7,18.4-28.3c8.6-8.6,16.8-13.9,28.3-18.4    c8.7-3.4,21.7-7.4,45.7-8.5c25.9-1.2,33.7-1.4,99.4-1.4S330.7,54.8,356.6,56z" data-astro-cid-d7jpscbk></path> <radialGradient cx="154.0732" cy="134.5501" gradientTransform="matrix(0.9986 -5.233596e-02 4.448556e-02 0.8488 -24.3617 253.2946)" gradientUnits="userSpaceOnUse" id="SVGID_2_" r="365.2801" data-astro-cid-d7jpscbk> <stop offset="0" style="stop-color:#FED576" data-astro-cid-d7jpscbk></stop> <stop offset="0.2634" style="stop-color:#F47133" data-astro-cid-d7jpscbk></stop> <stop offset="0.6091" style="stop-color:#BC3081" data-astro-cid-d7jpscbk></stop> <stop offset="1" style="stop-color:#4C63D2" data-astro-cid-d7jpscbk></stop> </radialGradient> <path class="st1 instagram-inner" d="M130.9,256.3c0,69.8,56.6,126.3,126.3,126.3s126.3-56.6,126.3-126.3S327,130,257.2,130    S130.9,186.5,130.9,256.3z M339.2,256.3c0,45.3-36.7,82-82,82s-82-36.7-82-82c0-45.3,36.7-82,82-82S339.2,211,339.2,256.3z" data-astro-cid-d7jpscbk></path> <circle class="st2 instagram-dot" cx="388.6" cy="125" r="29.5" data-astro-cid-d7jpscbk></circle> </g> </g> </svg> </a> </li> </ul> `;
}, "C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/components/SocialMedia.astro", void 0);

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="contact-section" data-astro-cid-svshx33u> <div class="contact-intro" data-astro-cid-svshx33u> <h2 id="contact" class="contact-title" data-astro-cid-svshx33u>Got a project or idea? Let's connect!</h2> <p class="contact-description" data-astro-cid-svshx33u>
Fill out the form below & I'll get back to you as soon as possible.
</p> </div> <form class="contact-form" action="https://api.web3forms.com/submit" method="POST" data-astro-cid-svshx33u> <input type="hidden" name="access_key" value="c9b8e3fe-39ce-4afa-9000-7bda3b721d42" data-astro-cid-svshx33u> <input type="hidden" name="subject" value="New Contact Form Submission from Web3Forms" data-astro-cid-svshx33u> <input type="hidden" name="from_name" value="My Website" data-astro-cid-svshx33u> <div class="form-group-container" data-astro-cid-svshx33u> <div class="form-group" data-astro-cid-svshx33u> <label for="name" class="form-label" data-astro-cid-svshx33u>Name</label> <input id="name" name="name" placeholder="First & Last Name" class="form-input" type="text" data-astro-cid-svshx33u> </div> <div class="form-group" data-astro-cid-svshx33u> <label for="email" class="form-label" data-astro-cid-svshx33u>Email</label> <input id="email" name="email" class="form-input" placeholder="Email@Domain.com" type="email" data-astro-cid-svshx33u> </div> <div class="form-group" data-astro-cid-svshx33u> <label for="phone" class="form-label" data-astro-cid-svshx33u>Phone</label> <input id="phone" name="phone" class="form-input" placeholder="+1 (123)456-7890" type="tel" data-astro-cid-svshx33u> </div> <div class="form-group" data-astro-cid-svshx33u> <label for="message" class="form-label" data-astro-cid-svshx33u>Message</label> <textarea class="form-textarea" id="message" name="message" placeholder="Your Message" data-astro-cid-svshx33u></textarea> </div> </div> <button class="primary-button" type="submit" data-astro-cid-svshx33u>Send Message</button> </form> </section> `;
}, "C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/components/ContactForm.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const { footerText, copyrightText } = Astro2.props;
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", '<footer class="container-footer" data-astro-cid-sz7xmlte> ', " ", ' <p id="footer-copyright" data-astro-cid-sz7xmlte><small data-astro-cid-sz7xmlte> ', '<br data-astro-cid-sz7xmlte> <!-- Follow <a href="https://jackiehyho.notion.site/Portfolio-Website-78a0cd74dea54b8db0e42f8444e030a2?pvs=4">my progress</a> on Notion!<br />--> ', ` &copy; <span id="currentYear" data-astro-cid-sz7xmlte></span></small> </p> </footer>  <script>
let yearDisplay = document.getElementById('currentYear');

let currentYear = new Date().getFullYear();
if (yearDisplay) {
    yearDisplay.textContent = currentYear.toString();
}


<\/script>`])), maybeRenderHead(), renderComponent($$result, "ContactForm", $$ContactForm, { "data-astro-cid-sz7xmlte": true }), renderComponent($$result, "SocialMedia", $$SocialMedia, { "data-astro-cid-sz7xmlte": true }), footerText, copyrightText);
}, "C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/components/Footer.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<button id="menuToggle" class="mobile-button" data-astro-cid-pux6a34n>Menu</button> <nav id="mobileMenu" class="mobile-menu" role="navigation" data-astro-cid-pux6a34n> <ul class="nav-list" data-astro-cid-pux6a34n> <li class="nav-list-item" data-astro-cid-pux6a34n> <a id="nav-home-URL" class="nav-list-link" href="/" aria-label="Link to Homepage & Portfolio" data-astro-cid-pux6a34n>Work</a> </li> <li class="nav-list-item" data-astro-cid-pux6a34n> <a id="nav-blog-url" class="nav-list-link" href="/my-experiences" aria-label="Link to Blog" data-astro-cid-pux6a34n>My Experiences</a> </li> <!-- <li class="nav-list-item">\n      <a id="nav-blog-url" class="nav-list-link" href="/blog" aria-label="Link to Blog">Blog</a>\n    </li> --> <!-- <li class="nav-list-item">\n      <a id="nav-blog-url" class="nav-list-link" href="/services" aria-label="Link to Blog">Services</a>\n    </li> --> <li class="nav-list-item" data-astro-cid-pux6a34n> <a id="nav-contact-url" class="nav-list-link" href="#contact" data-astro-cid-pux6a34n>Open for Opportunities</a> </li> </ul> </nav> <script>\n  var menuToggle = document.getElementById("menuToggle");\n  if (menuToggle) {\n    menuToggle.onclick = function () {\n      var nav = document.getElementById("mobileMenu");\n      var button = document.getElementById("menuToggle");\n      var logo = document.getElementById("logo");\n      if (nav && !nav.classList.contains("mobile-nav-active")) {\n        nav.classList.add("mobile-nav-active");\n        if (button) {\n          button.classList.add("mobile-button-active");\n          button.textContent = "X";\n        }\n      } else {\n          if (nav) {\n            nav.classList.remove("mobile-nav-active");\n          }\n          if (button) {\n            button.classList.remove("mobile-button-active");\n            button.textContent = "Menu";\n          }\n          if (logo) {\n            logo.classList.remove("logo-colour-alt");\n          }\n\n      }\n    };\n  }\n\n<\/script> '])), maybeRenderHead());
}, "C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/components/Navigation.astro", void 0);

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a class="logo-link" href="/" aria-label="Link to my homepage & portfolio" data-astro-cid-tvrurpns> <div id="logo" class="logo" data-astro-cid-tvrurpns> <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 128 128" data-astro-cid-tvrurpns> <defs data-astro-cid-tvrurpns> <style lang="scss">
            .cls-1 {
              fill: none;
            }
      
            .cls-1, .cls-2, .cls-3 {
              stroke-width: 0px;
            }
      
            .cls-4 {
              clip-path: url(#clippath-1);
            }
      
            .cls-2 {
              fill: #fff;
            }
      
            .cls-3 {
              fill: var(--primaryTextColour);
              transition: all .5s ease-in;
    
          
            }
      
            .cls-5 {
              clip-path: url(#clippath);
            }
          </style> <clipPath id="clippath" data-astro-cid-tvrurpns> <rect class="cls-1" width="128" height="128" data-astro-cid-tvrurpns></rect> </clipPath> <clipPath id="clippath-1" data-astro-cid-tvrurpns> <rect class="cls-1" width="128" height="128" data-astro-cid-tvrurpns></rect> </clipPath> </defs> <g id="Layer_1-2" data-name="Layer 1" data-astro-cid-tvrurpns> <g id="Artwork_5" data-name="Artwork 5" data-astro-cid-tvrurpns> <g class="cls-5" data-astro-cid-tvrurpns> <g class="cls-4" data-astro-cid-tvrurpns> <path class="cls-3" d="M64,128C28.65,128,0,99.35,0,64S28.65,0,64,0s64,28.65,64,64-28.65,64-64,64" data-astro-cid-tvrurpns></path> <g data-astro-cid-tvrurpns> <path class="cls-2" d="M36.21,37.14c.92,1.64.66,3.69-.66,5.03-1.77,1.77-3.56,4.07-5.37,6.86-.66,1.04-1.07,1.58-1.11,1.62-1.28.94-3.09.47-5.39-1.51-.21-.19-.36-.47-.38-.75-.02-.26.04-.51.19-.7,3.88-5.5,7.76-9.65,11.59-12.51l1.13,1.96Z" data-astro-cid-tvrurpns></path> <path class="cls-2" d="M91.67,60.12c1.68-3.46,2.46-5.86,2.77-7.52.22-1.16-1.36-1.72-1.93-.69l-4.24,7.64-2.26-.38c-1.94-.32-3.91-.36-5.86-.11l-4.48.58c-.66-1.73-1.34-3.28-2.02-4.69-.62-1.34-7.11-13.87-7.36-14.47-.06-.11-.13-.53-.36-1.3-.15-.53-.3-.98-.45-1.19-.38-.53-1.11-.81-2.22-.81-1.02.09-2.05.43-2.94,1.04-1.15.81-1.34,1.66-.68,2.6,1.26,1.79,8.68,16.13,10.34,19.84-4.05,1.04-8.03,2.51-12.02,4.43-2.96-7.8-5.75-13.57-8.48-17.47-1.07-1.51-2.47-2.41-4.18-2.71-1.7-.21-3.35.23-4.88,1.3-3.98,2.79-8.03,6.97-12.14,12.51l.04.83c2.41,2.3,4.33,2.92,5.69,1.96.04-.04.47-.58,1.15-1.6,2.71-3.94,5.35-6.88,7.93-8.69.72-.51,1.51-.19,2.28.92,1.88,2.68,4.26,7.99,7.2,15.87-1.15.72-2.34,1.49-3.6,2.37-3.79,2.66-6.37,5.56-7.78,8.59-1.73,3.81-1.36,7.46,1.07,10.93,1.6,2.26,3.73,3.52,6.41,3.66,2.54.26,4.9-.47,7.22-2.09,5.77-4.07,7.05-11.06,3.9-21.16,3.79-1.73,7.9-3.45,12.32-4.2.87,2.83,1.38,6.12,1.58,8.95.26,4.75-.04,8.25-.85,10.55-.4,1-.96,2-1.68,2.98,2.73,1.68,4.73,2.17,5.88,1.36.75-.51,1.38-2.07,2.11-4.6,1.36-5.35.92-12.85-1.32-20.52,2.23-.14,4.77-.18,6.98-.09-.18.85-.36,1.72-.53,2.64-.8,4.56-.57,8.44.57,11.57,1.48,3.92,4.31,6.24,8.48,6.98,2.73.47,5.12-.15,7.13-1.94,1.97-1.61,3.13-3.8,3.63-6.58,1.21-6.96-3.05-12.38-12.42-17.29M53.17,86.85c-1.04.75-2.11,1.11-3.26,1.04-1.13-.06-2.05-.6-2.79-1.64-2.51-3.56-.77-7.46,5.33-11.72.64-.45,1.26-.79,1.87-1.26,1.9,7.2,1.53,11.7-1.15,13.57M98.89,76.07c-.21,1.27-.71,2.28-1.57,3.04-.84.75-1.87,1.02-3.13.81-4.29-.74-5.82-4.73-4.52-12.05.14-.77.33-1.45.44-2.21,6.43,3.75,9.36,7.19,8.78,10.41" data-astro-cid-tvrurpns></path> </g> </g> </g> </g> </g> </svg> </div> </a> `;
}, "C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/components/Logo.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const HeaderHeight = "80px";
  const $$definedVars = defineStyleVars([
    {
      HeaderHeight
    }
  ]);
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<header id="header"', "> ", "", ' </header> <script>\n\nlet prevScrollpos = window.scrollY;\nwindow.onscroll = function() {\n  let currentScrollPos = window.scrollY;    \n\n  //check if this is a mobile device\n  if (this.navigator.maxTouchPoints > 0) {\n    if (prevScrollpos > currentScrollPos) {\n    document.getElementById("header").style.top = "0";\n    } \n    else {\n        document.getElementById("header").style.top = "-112px";\n    }\n    prevScrollpos = currentScrollPos;\n    // Add background to scroll effect\n    if (window.scrollY > 80) {\n        document.getElementById("header").style.background = "rgba(255, 255, 255, 0.9)";\n    } else {\n        document.getElementById("header").style.background = "none";\n    }\n  }\n}\n<\/script> '])), maybeRenderHead(), addAttribute($$definedVars, "style"), renderComponent($$result, "Logo", $$Logo, {}), renderComponent($$result, "Navigation", $$Navigation, {}));
}, "C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  const headerHeight = "80px";
  const desktopBreakPoint = "1440px";
  const tabletBreakPoint = "768px";
  const primaryTextColour = "#555";
  const primaryBackgroundColour = "#eee";
  const primaryButtonColour = "linear-gradient(to right, #02AAB0 0%, #00CDAC  51%, #02AAB0  100%);";
  const $$definedVars = defineStyleVars([
    {
      headerHeight,
      desktopBreakPoint,
      tabletBreakPoint,
      primaryBackgroundColour,
      primaryTextColour,
      primaryButtonColour
    }
  ]);
  return renderTemplate(_a || (_a = __template(['<html lang="en"', '> <head><meta charset="UTF-8"><meta name="description"', `><meta name="viewport" content="width=device-width" initial-scale="1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Google Tag Manager --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','GTM-53X4K6H');
		<\/script><!-- End Google Tag Manager --><meta name="generator"`, "><title>", "</title><!-- <ViewTransitions /> -->", "</head> <body", '> <!-- Google Tag Manager (noscript) --> <noscript> <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-53X4K6H" height="0" width="0"', ">\n			</iframe> </noscript> <!-- End Google Tag Manager (noscript) --> ", " ", " ", " </body></html>"])), addAttribute($$definedVars, "style"), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), title, renderHead(), addAttribute($$definedVars, "style"), addAttribute(`${"display:none;visibility:hidden"}; ${$$definedVars}`, "style"), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["main"]), renderComponent($$result, "Footer", $$Footer, { "name": "footer", "footerText": "Hand-coded by Jackie Ho for speed and performance", "copyrightText": "All Rights Reserved" }));
}, "C:/Users/jacki/OneDrive/Documents/GitHub/portfolio2024-final/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
