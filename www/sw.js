if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(i[l])return;let c={};const o=e=>s(e,l),d={module:{uri:l},exports:c,require:o};i[l]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"app-config.js",revision:"1a3e4651c20f5c0e562711c18ebd174b"},{url:"assets/index-C0iGayaj.js",revision:null},{url:"assets/index-legacy-CErze49i.js",revision:null},{url:"assets/polyfills-legacy-zzItI1i-.js",revision:null},{url:"assets/style-yrqIZhy6.css",revision:null},{url:"index.html",revision:"0560ea5894ef5324decc8bc615e813f5"},{url:"plausible.js",revision:"9ad727779a21fd7fc39cfced5da85c3a"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon-16x16.png",revision:"cd030c5aaecf546967eb91b63e0ed91d"},{url:"favicon-32x32.png",revision:"8e9da67fbf32965bfd9e0415cb5b5620"},{url:"pwa-192x192.png",revision:"b897a6bf44cc87e192fde8f5b7877996"},{url:"pwa-512x512.png",revision:"aa7d1ac799dc91e643004b43fd3727e0"},{url:"manifest.webmanifest",revision:"120b4bddb3ab4bcd6c843de342096261"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
