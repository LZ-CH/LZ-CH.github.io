if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const t=e=>c(e,r),d={module:{uri:r},exports:o,require:t};s[r]=Promise.all(i.map((e=>d[e]||t(e)))).then((e=>(n(...e),o)))}}define(["./workbox-71d0c0b2"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/page.css",revision:"2d2615009892a6a9738b0237f3415ade"},{url:"css/style.min.css",revision:"16a4cc20ac2ecce2dfd8bc11dcf43592"},{url:"css/vue-pdf.css",revision:"87a92787efb89f95f9907fa30774f86a"},{url:"index_copy.html",revision:"64be4c19cf40061f36822f66a4fe3a37"},{url:"index.html",revision:"cd8d289b84b3aac7a51375f72b3ce065"},{url:"js/common.js",revision:"748b78854064e842c09d1b9605209bba"},{url:"js/css.escape.js",revision:"a2185e4074b2acf55b190d49300dc626"},{url:"js/smooth-scroll.min.js",revision:"53a7fcc785e987d5ed08302f36de6653"},{url:"zh-cn/index.html",revision:"172435fc8175f65643b61bcc6d8ab408"}],{}),e.registerRoute(/^https:\/\/cdnjs\.cloudflare\.com\/.*/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
