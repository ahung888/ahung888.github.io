(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[23],{4920:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/intro",function(){return r(5656)}])},6009:function(e,n,r){"use strict";var t=r(5893),a=(r(7294),r(1163));function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}n.Z=function(e){var n=(0,a.useRouter)();return(0,t.jsx)("img",function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){c(e,n,r[n])}))}return e}({},e,{src:"".concat(n.basePath).concat(null===e||void 0===e?void 0:e.src)}))}},8418:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,a=!1,c=void 0;try{for(var s,i=e[Symbol.iterator]();!(t=(s=i.next()).done)&&(r.push(s.value),!n||r.length!==n);t=!0);}catch(o){a=!0,c=o}finally{try{t||null==i.return||i.return()}finally{if(a)throw c}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var a,c=(a=r(7294))&&a.__esModule?a:{default:a},s=r(6273),i=r(387),o=r(7190);var l={};function u(e,n,r,t){if(e&&s.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[n+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var n,r=!1!==e.prefetch,a=i.useRouter(),d=c.default.useMemo((function(){var n=t(s.resolveHref(a,e.href,!0),2),r=n[0],c=n[1];return{href:r,as:e.as?s.resolveHref(a,e.as):c||r}}),[a,e.href,e.as]),f=d.href,h=d.as,v=e.children,p=e.replace,j=e.shallow,x=e.scroll,m=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var g=(n=c.default.Children.only(v))&&"object"===typeof n&&n.ref,y=t(o.useIntersection({rootMargin:"200px"}),2),w=y[0],_=y[1],b=c.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);c.default.useEffect((function(){var e=_&&r&&s.isLocalURL(f),n="undefined"!==typeof m?m:a&&a.locale,t=l[f+"%"+h+(n?"%"+n:"")];e&&!t&&u(a,f,h,{locale:n})}),[h,f,_,m,r,a]);var N={ref:b,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,a,c,i,o){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(r))&&(e.preventDefault(),null==i&&t.indexOf("#")>=0&&(i=!1),n[a?"replace":"push"](r,t,{shallow:c,locale:o,scroll:i}))}(e,a,f,h,p,j,x,m)},onMouseEnter:function(e){s.isLocalURL(f)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(a,f,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var C="undefined"!==typeof m?m:a&&a.locale,P=a&&a.isLocaleDomain&&s.getDomainLocale(h,C,a&&a.locales,a&&a.domainLocales);N.href=P||s.addBasePath(s.addLocale(h,C,a&&a.defaultLocale))}return c.default.cloneElement(n,N)};n.default=d},7190:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,a=!1,c=void 0;try{for(var s,i=e[Symbol.iterator]();!(t=(s=i.next()).done)&&(r.push(s.value),!n||r.length!==n);t=!0);}catch(o){a=!0,c=o}finally{try{t||null==i.return||i.return()}finally{if(a)throw c}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!s,o=a.useRef(),l=t(a.useState(!1),2),u=l[0],d=l[1],f=a.useCallback((function(e){o.current&&(o.current(),o.current=void 0),r||u||e&&e.tagName&&(o.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=i.get(n);if(r)return r;var t=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return i.set(n,r={id:n,observer:a,elements:t}),r}(r),a=t.id,c=t.observer,s=t.elements;return s.set(e,n),c.observe(e),function(){s.delete(e),c.unobserve(e),0===s.size&&(c.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,u]);return a.useEffect((function(){if(!s&&!u){var e=c.requestIdleCallback((function(){return d(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[u]),[f,u]};var a=r(7294),c=r(9311),s="undefined"!==typeof IntersectionObserver;var i=new Map},5656:function(e,n,r){"use strict";r.r(n);var t=r(5893),a=r(7294),c=r(1163),s=r(9008),i=(r(1664),r(6009)),o=r(3224),l=r.n(o),u=r(8114);n.default=function(){var e=(0,c.useRouter)(),n=(0,a.useState)("\u7acb\u5373\u4f7f\u7528"),r=n[0],o=n[1],d=function(){o("\u555f\u52d5\u4e2d..."),e.push("/")};return(0,t.jsxs)("div",{className:l().w,children:[(0,t.jsxs)(s.default,{children:[(0,t.jsx)("title",{children:"\u53f0\u7063\u65c5\u904a\u666f\u9ede\u5c0e\u89bd\u5730\u5716"}),(0,t.jsx)("meta",{name:"description",content:"\u53f0\u7063\u65c5\u904a\u666f\u9ede\u5c0e\u89bd\u5730\u5716"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,t.jsx)("script",{children:u.$})]}),(0,t.jsx)("nav",{children:(0,t.jsx)("section",{children:(0,t.jsxs)("div",{className:l().nav,children:[(0,t.jsx)("div",{className:"logo",children:"\u53f0\u7063\u65c5\u904a\u666f\u9ede\u5c0e\u89bd\u5730\u5716"}),(0,t.jsx)("div",{className:l().btnCta,onClick:d,children:r})]})})}),(0,t.jsxs)("main",{children:[(0,t.jsx)("section",{children:(0,t.jsxs)("div",{className:l().wrapper,children:[(0,t.jsx)("div",{className:l().node,children:(0,t.jsx)("h1",{children:"\u5728\u5730\u5716\u4e0a\u63a2\u7d22\u53f0\u7063\u7684\u65c5\u904a\u666f\u9ede"})}),(0,t.jsx)("div",{className:l().node,children:(0,t.jsx)(i.Z,{src:"/images/intro/search-filter.png",alt:"search filter"})})]})}),(0,t.jsx)("section",{children:(0,t.jsxs)("div",{className:"".concat(l().wrapper," ").concat(l().reverse),children:[(0,t.jsx)("div",{className:l().node,children:(0,t.jsx)("h3",{children:"\u986f\u793a\u641c\u5c0b\u7d50\u679c\u5217\u8868\uff0c\u4e26\u5728\u6a19\u8a18\u5730\u5716\u4e0a"})}),(0,t.jsx)("div",{className:l().node,children:(0,t.jsx)(i.Z,{src:"/images/intro/search-result.png",alt:"search result"})})]})}),(0,t.jsx)("section",{children:(0,t.jsxs)("div",{className:l().wrapper,children:[(0,t.jsx)("div",{className:l().node,children:(0,t.jsx)("h3",{children:"\u9ede\u64ca\u611f\u8208\u8da3\u7684\u666f\u9ede\uff0c\u4f86\u7372\u5f97\u66f4\u591a\u76f8\u95dc\u7684\u8a0a\u606f"})}),(0,t.jsx)("div",{className:l().node,children:(0,t.jsx)(i.Z,{src:"/images/intro/search-result-detail.png",alt:"search result detail"})})]})}),(0,t.jsx)("section",{children:(0,t.jsxs)("div",{className:"".concat(l().wrapper," ").concat(l().reverse),children:[(0,t.jsxs)("div",{className:l().node,children:[(0,t.jsx)("h1",{children:"\u8cc7\u6599\u63d0\u4f9b"}),(0,t.jsx)("p",{children:"\u8cc7\u6599\u4f86\u6e90\u7531\u4ea4\u901a\u90e8\u8207\u5404\u516c\u5171\u904b\u8f38\u6a5f\u95dc\u5354\u4f5c\u6574\u5408\u7684\u300c\u516c\u5171\u904b\u8f38\u6574\u5408\u8cc7\u8a0a\u6d41\u901a\u670d\u52d9\u5e73\u81fa\u300d\u63d0\u4f9b\uff0c\u5e73\u81fa\u6db5\u84cb\u7684\u8cc7\u6599\u5305\u542b\u516c\u8def\u3001 \u8ecc\u9053\u3001\u822a\u7a7a\u53ca\u822a\u904b4\u5927\u985e\u516c\u5171\u904b\u8f38\u65c5\u904b\u76f8\u95dc\u52d5\u975c\u614b\u8cc7\u6599"})]}),(0,t.jsx)("div",{className:l().node,children:(0,t.jsx)(i.Z,{src:"/images/PTX_logo.png",alt:"\u8cc7\u6599\u4ecb\u63a5\u300c\u4ea4\u901a\u90e8PTX\u5e73\u81fa\u300d"})})]})}),(0,t.jsx)("section",{children:(0,t.jsxs)("div",{className:l().wrapper,children:[(0,t.jsxs)("div",{className:l().node,children:[(0,t.jsx)("h1",{children:"RWD\u652f\u63f4"}),(0,t.jsx)("p",{children:"\u652f\u63f4\u624b\u6a5f\u3001\u5e73\u7248\u3001\u684c\u6a5f\uff0c\u591a\u7a2e\u5e73\u53f0\u7684\u986f\u793a\u88dd\u7f6e"})]}),(0,t.jsx)("div",{className:l().node,children:(0,t.jsx)(i.Z,{src:"/images/intro/device-rwd.png",alt:"support rwd"})})]})}),(0,t.jsx)("section",{children:(0,t.jsx)("div",{className:l().cta,children:(0,t.jsx)("div",{className:l().btnCta,onClick:d,children:r})})})]}),(0,t.jsxs)("footer",{children:["\u4f5c\u8005\uff1a",(0,t.jsx)("a",{href:"https://github.com/ahung888",target:"_blank",rel:"noopener noreferrer",children:"ahung888"})]})]})}},8114:function(e,n,r){"use strict";r.d(n,{$:function(){return t}});var t="window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'UA-212235762-1');"},3224:function(e){e.exports={w:"IntroPage_w__2CCuG",nav:"IntroPage_nav__2IB0W",wrapper:"IntroPage_wrapper__1CR38",cta:"IntroPage_cta__2FJUl",node:"IntroPage_node__3B-oD",reverse:"IntroPage_reverse__36w9l",btnCta:"IntroPage_btnCta__3tbom"}},9008:function(e,n,r){e.exports=r(5443)},1664:function(e,n,r){e.exports=r(8418)},1163:function(e,n,r){e.exports=r(387)}},function(e){e.O(0,[774,888,179],(function(){return n=4920,e(e.s=n);var n}));var n=e.O();_N_E=n}]);