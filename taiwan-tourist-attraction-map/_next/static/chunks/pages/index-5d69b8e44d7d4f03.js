(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3249)}])},6009:function(n,e,t){"use strict";var i=t(5893),o=(t(7294),t(1163));function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}e.Z=function(n){var e=(0,o.useRouter)();return(0,i.jsx)("img",function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),i.forEach((function(e){r(n,e,t[e])}))}return n}({},n,{src:"".concat(e.basePath).concat(null===n||void 0===n?void 0:n.src)}))}},3249:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return jn}});var i=t(5893),o=t(7294),r=t(5617),a=t(5785),c=t(9008),s=t(9437),l=t(6893),u=t(9583),d=t(3990),v=t(7516),f=function(n){var e=n.onMenuClick,t=n.onProfileClick,o=n.showReturnButton,c=n.onReturnButtonClick,f=n.onCrossButtonClick,m=(0,r.I0)(),h=(0,r.v9)((0,a.br)("searchText")),p=(0,r.v9)((0,a.br)("device")),x=p.isMobile,j=p.isTablet,g=p.isDesktop;return(0,i.jsx)("header",{className:"header",children:(0,i.jsxs)("div",{className:"header-container",children:[o?(0,i.jsx)(v.YiX,{className:"menu-icon",onClick:c}):(0,i.jsx)(l.cur,{className:"menu-icon",onClick:e}),(0,i.jsx)("div",{className:"slot left",children:(0,i.jsx)("input",{className:"search-input",type:"text",placeholder:"\u5c0b\u627e\u65c5\u904a\u666f\u9ede",value:h,onChange:function(n){m((0,a.FD)(n.target.value))},onKeyDown:function(n){"Enter"===n.key&&m((0,s.d)(h))}})}),h?(0,i.jsx)(d.sQZ,{className:"menu-icon",size:"1.5rem",color:"#999",onClick:function(){m((0,a.IY)()),m((0,a.al)()),f()}}):"",g||(x||j)&&!h?(0,i.jsx)("div",{className:"profile",onClick:t,children:(0,i.jsx)(u.OXn,{})}):""]})})},m=t(7379);function h(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function p(){var n=h(["\n  font-size: 1.2rem;\n  padding: .5rem;\n  background-color: #fff;\n  border: 1px solid #42b883;\n  border-radius: 5px;\n  color: #35495e;\n  cursor: pointer;\n\n  &.active {\n    background-color: rgba(66, 184, 131, .15);\n  }\n"]);return p=function(){return n},n}function x(){var n=h(["\n  font-size: 1rem;\n  padding: .2rem .5rem;\n  background-color: rgba(66, 184, 131, .15);\n  border: 1px solid #42b883;\n  border-radius: 5px;\n  color: #35495e;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: .5rem;\n\n  &.active {\n    background-color: rgba(66, 184, 131, .15);\n  }\n"]);return x=function(){return n},n}var j=m.ZP.button(p()),g=m.ZP.button(x()),b=t(8193),C=[{name:"\u5317\u5317\u57fa\u5b9c",locations:["Taipei","NewTaipei","Keelung","YilanCounty"]},{name:"\u6843\u7af9\u82d7",locations:["Taoyuan","Hsinchu","HsinchuCounty","MiaoliCounty"]},{name:"\u4e2d\u5f70\u6295",locations:["Taichung","ChanghuaCounty","NantouCounty"]},{name:"\u96f2\u5609\u5357",locations:["YunlinCounty","Chiayi","ChiayiCounty","Tainan"]},{name:"\u9ad8\u5c4f",locations:["Kaohsiung","PingtungCounty"]},{name:"\u82b1\u6771",locations:["HualienCounty","TaitungCounty"]},{name:"\u6f8e\u91d1\u99ac",locations:["PenghuCounty","KinmenCounty","LienchiangCounty"]}],y={Taipei:"\u81fa\u5317\u5e02",NewTaipei:"\u65b0\u5317\u5e02",Taoyuan:"\u6843\u5712\u5e02",Taichung:"\u81fa\u4e2d\u5e02",Tainan:"\u81fa\u5357\u5e02",Kaohsiung:"\u9ad8\u96c4\u5e02",Keelung:"\u57fa\u9686\u5e02",Hsinchu:"\u65b0\u7af9\u5e02",HsinchuCounty:"\u65b0\u7af9\u7e23",MiaoliCounty:"\u82d7\u6817\u7e23",ChanghuaCounty:"\u5f70\u5316\u7e23",NantouCounty:"\u5357\u6295\u7e23",YunlinCounty:"\u96f2\u6797\u7e23",ChiayiCounty:"\u5609\u7fa9\u7e23",Chiayi:"\u5609\u7fa9\u5e02",PingtungCounty:"\u5c4f\u6771\u7e23",YilanCounty:"\u5b9c\u862d\u7e23",HualienCounty:"\u82b1\u84ee\u7e23",TaitungCounty:"\u81fa\u6771\u7e23",KinmenCounty:"\u91d1\u9580\u7e23",PenghuCounty:"\u6f8e\u6e56\u7e23",LienchiangCounty:"\u9023\u6c5f\u7e23"};function P(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function w(){var n=P(["\n  bottom: 0;\n  height: 60vh;\n  transition: bottom 0.26s ease;\n  z-index: 500;\n  flex-direction: column;\n  border-radius: 10px 10px 0 0;\n  box-shadow: 0 -2px 2px 0 rgb(0 0 0 / 15%);\n\n  &.hide {\n    bottom: -60vh;\n    box-shadow: none;\n  }\n"]);return w=function(){return n},n}function _(){var n=P(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  margin-bottom: .5rem;\n"]);return _=function(){return n},n}function k(){var n=P(["\n  color: #333;\n  font-weight: 700;\n  margin: 1rem 0 .5rem;\n"]);return k=function(){return n},n}function N(){var n=P(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: .5rem;\n"]);return N=function(){return n},n}function T(){var n=P(["\n  width: 8rem;\n  font-size: 1rem;\n  padding: .5rem;\n  background-color: rgba(66, 184, 131, .15);\n  border: 1px solid #42b883;\n  color: #35495e;\n  cursor: pointer;\n"]);return T=function(){return n},n}function L(){var n=P(["\n  position: absolute;\n  bottom: .5rem;\n"]);return L=function(){return n},n}function O(){var n=P(["\n  position: absolute;\n  top: .5rem;\n  right: .5rem;\n  color: #42b883;\n"]);return O=function(){return n},n}var S=m.ZP.footer(w()),z=m.ZP.section(_()),I=m.ZP.div(k()),E=m.ZP.div(N()),A=m.ZP.button(T()),D=m.ZP.div(L()),Z=m.ZP.div(O()),R=function(n){var e=n.active,t=n.onClose,c=(0,r.I0)(),l=(0,o.useState)(null),u=l[0],d=l[1],v=(0,o.useState)(null),f=v[0],m=v[1],h=C.map((function(n,e){return(0,i.jsx)(j,{className:"area ".concat(e===u?"active":""),onClick:function(){d(e),m(null)},children:n.name},e)})),p=(null!==u?C[u].locations:[]).map((function(n,e){return(0,i.jsx)(j,{className:"location ".concat(n===f?"active":""),onClick:function(){return m(n)},children:y[n]},e)})),x=function(){d(null),m(null),t()};(0,o.useEffect)((function(){if(void 0!==("undefined"===typeof document?"undefined":(n=document)&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n))return document.addEventListener("onmapclick",x),function(){return document.removeEventListener("onmapclick",x)};var n}),[]);return(0,i.jsxs)(S,{className:"footer footer-pane ".concat(e?"":"hide"),children:[(0,i.jsx)(Z,{onClick:x,children:(0,i.jsx)(b.SV5,{size:"1.5rem"})}),(0,i.jsxs)(z,{className:"locations",children:[(0,i.jsx)(I,{children:"\u5340\u57df"}),(0,i.jsx)(E,{className:"areas",children:h}),null!==u?(0,i.jsx)(I,{children:"\u7e23\u5e02"}):(0,i.jsx)(i.Fragment,{}),(0,i.jsx)(E,{className:"locations",children:p})]}),(0,i.jsx)(D,{children:(0,i.jsx)(A,{onClick:function(){null!==f&&(c((0,s.c)(f)),c((0,a.FD)(y[f])),x())},children:"\u67e5\u8a62"})})]})},M=t(5434),B=t(5155),H=function(n){var e=n.onFooterPaneClosed,t=n.showItemList,c=n.showMap,s=(0,r.v9)((0,a.br)("entities")),l=(0,o.useState)(!1),u=l[0],d=l[1],v=(0,o.useState)(!0),f=v[0],m=v[1],h=Object.values(s),p=(0,i.jsxs)(g,{onClick:function(){m(!1),t(f)},children:[(0,i.jsx)(b.N8n,{}),"\u67e5\u770b\u6e05\u55ae"]}),x=(0,i.jsxs)(g,{onClick:function(){m(!0),c()},children:[(0,i.jsx)(B.OHW,{}),"\u67e5\u770b\u5730\u5716"]}),j=f?p:x;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("footer",{className:"footer",children:[(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)("div",{className:"icon",onClick:function(){return d(!0)},children:(0,i.jsx)(M.rWj,{size:"1.5rem"})}),(0,i.jsx)("p",{onClick:function(){return d(!0)},children:"\u5feb\u901f\u67e5\u8a62"})]}),(0,i.jsx)("div",{className:"flex",children:h.length>0?j:""})]}),(0,i.jsx)(R,{active:u,onClose:function(){d(!1),e()}})]})},X=t(1664),F=t(6009),J=t(2585),K=t(943),W=t.n(K),Y=function(n){var e=n.show,t=n.onNavClose;return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"nav-panel ".concat(e?"active":""," ").concat(W().navInfo),children:[(0,i.jsxs)("header",{children:[(0,i.jsx)(J.Ijk,{className:W().logo,size:"5rem"}),(0,i.jsx)("h1",{children:"\u53f0\u7063\u65c5\u904a\u666f\u9ede\u5c0e\u89bd\u5730\u5716"})]}),(0,i.jsxs)("main",{children:[(0,i.jsx)("div",{children:"\u8cc7\u6599\u4ecb\u63a5\u300c\u4ea4\u901a\u90e8PTX\u5e73\u81fa\u300d"}),(0,i.jsx)("a",{href:"https://ptx.transportdata.tw/PTX/",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(F.Z,{src:"/images/PTX_logo.png",alt:"\u8cc7\u6599\u4ecb\u63a5\u300c\u4ea4\u901a\u90e8PTX\u5e73\u81fa\u300d"})})]}),(0,i.jsx)(X.default,{href:"/intro",children:"\u5730\u5716\u7c21\u4ecb"}),(0,i.jsx)("footer",{children:(0,i.jsxs)("div",{children:["ver: ","0.1"]})})]}),(0,i.jsx)("div",{className:"screen-mask ".concat(e?"active":""),onClick:t})]})},U=t(3410),G=t.n(U);function V(n){if(!n)return[];var e=n.City,t=n.Class1,i=n.Class2,o=n.Class3,r=n.Level,a=[e,t,i,o].reduce((function(n,e){return e?n.concat(e):n}),[]);return r&&"\u975e\u53e4\u8e5f"!==r&&a.push("".concat(r,"\u53e4\u8e5f")),a}var Q=t(3750),$=function(n){var e=n.data,t=n.onCardClick,o=(0,r.I0)(),c=V(e).map((function(n,e){return(0,i.jsx)("div",{className:G().tag,children:n},e)})),s=null===e||void 0===e?void 0:e.Picture,l=s.PictureUrl1,u=s.PictureDescription1;return(0,i.jsxs)("div",{className:G().card,onClick:function(){t(e);var n=new Event("flytospot");n.data=e,document.dispatchEvent(n),o((0,a.Ao)(e))},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:G().title,children:null===e||void 0===e?void 0:e.Name}),(0,i.jsxs)("div",{className:G().iconRow,children:[(0,i.jsx)(Q.xNm,{size:"1.2rem"}),(0,i.jsx)("span",{children:c})]})]}),l?(0,i.jsx)("img",{className:G().img,src:l,alt:u}):(0,i.jsx)(i.Fragment,{})]})},q=t(4614),nn=t.n(q),en=function(n){var e=n.show,t=n.onSelectItem,o=(0,r.v9)((0,a.br)("entities")),c=Object.values(o).map((function(n,e){return(0,i.jsx)($,{data:n,onCardClick:t},e)})),s="".concat(nn().slidePane," ").concat(nn().posBottom," ").concat(nn().layer1);return s+=e?" ".concat(nn().posBottomActive):"",(0,i.jsx)("div",{className:s,children:c})},tn=function(n){var e=n.show,t=n.data,o="";if(void 0!==t){var r,a,c=V(t).map((function(n,e){return(0,i.jsx)("div",{className:G().tag,children:n},e)})),s=null===t||void 0===t||null===(r=t.Picture)||void 0===r?void 0:r.PictureUrl1,l=null===t||void 0===t||null===(a=t.Picture)||void 0===a?void 0:a.PictureDescription1,d=void 0!==s?(0,i.jsx)("div",{className:G().thumbnails,children:(0,i.jsx)("img",{src:s,alt:l})}):"";o=(0,i.jsxs)(i.Fragment,{children:[d,(0,i.jsx)("div",{className:G().articleTitle,children:null===t||void 0===t?void 0:t.Name}),(0,i.jsxs)("div",{className:G().iconRow,children:[(0,i.jsx)(Q.xNm,{size:"1.2rem"}),(0,i.jsx)("span",{children:c})]}),(0,i.jsx)("p",{children:null===t||void 0===t?void 0:t.Description}),(0,i.jsx)("p",{children:null===t||void 0===t?void 0:t.DescriptionDetail}),(null===t||void 0===t?void 0:t.WebsiteUrl)?(0,i.jsxs)("div",{className:G().iconRow,children:[(0,i.jsx)(b.HmR,{size:"1.2rem"}),(0,i.jsx)("a",{href:null===t||void 0===t?void 0:t.WebsiteUrl,target:"_blank",rel:"noreferrer",children:null===t||void 0===t?void 0:t.WebsiteUrl})]}):"",(null===t||void 0===t?void 0:t.OpenTime)?(0,i.jsxs)("div",{className:G().iconRow,children:[(0,i.jsx)(b.QRz,{size:"1.2rem"}),(0,i.jsx)("span",{children:null===t||void 0===t?void 0:t.OpenTime})]}):"",(null===t||void 0===t?void 0:t.Phone)?(0,i.jsxs)("div",{className:G().iconRow,children:[(0,i.jsx)(Q.UL8,{size:"1.2rem"}),(0,i.jsx)("span",{children:null===t||void 0===t?void 0:t.Phone})]}):"",(null===t||void 0===t?void 0:t.TravelInfo)?(0,i.jsxs)("div",{className:G().iconRow,children:[(0,i.jsx)(v.LVk,{size:"1.2rem"}),(0,i.jsx)("span",{children:null===t||void 0===t?void 0:t.TravelInfo})]}):"",(null===t||void 0===t?void 0:t.ParkingInfo)?(0,i.jsxs)("div",{className:G().iconRow,children:[(0,i.jsx)(u.mxg,{size:"1.2rem"}),(0,i.jsx)("span",{children:null===t||void 0===t?void 0:t.ParkingInfo})]}):""]})}var f="".concat(nn().slidePane," ").concat(nn().posLeft," ").concat(nn().layer2);return f+=e?" ".concat(nn().posLeftActive):"",(0,i.jsx)("div",{className:f,children:o})},on=t(8747);function rn(n){var e=n.data,t=n.onClick;return e.map((function(n,e){return(0,i.jsx)(on.Jx,{longitude:n.Position.PositionLon,latitude:n.Position.PositionLat,children:(0,i.jsxs)("svg",{height:20,viewBox:"0 0 24 24",style:{cursor:"pointer",fill:"#d00",stroke:"none",transform:"translate(".concat(-10,"px,").concat(-20,"px)")},onClick:function(){console.log(n),t(n)},children:[(0,i.jsx)("path",{fill:"#f84d4d",stroke:"#951212",strokeWidth:"0.5",d:"M19.25,10.4a13.0663,13.0663,0,0,1-1.4607,5.2235,41.5281,41.5281,0,0,1-3.2459,5.5483c-1.1829,1.7369-2.3662,3.2784-3.2541,4.3859-.4438.5536-.8135.9984-1.0721,1.3046-.0844.1-.157.1852-.2164.2545-.06-.07-.1325-.1564-.2173-.2578-.2587-.3088-.6284-.7571-1.0723-1.3147-.8879-1.1154-2.0714-2.6664-3.2543-4.41a42.2677,42.2677,0,0,1-3.2463-5.5535A12.978,12.978,0,0,1,.75,10.4,9.4659,9.4659,0,0,1,10,.75,9.4659,9.4659,0,0,1,19.25,10.4Z"}),(0,i.jsx)("path",{fill:"#fff",stroke:"#951212",strokeWidth:"0.5",d:"M13.55,10A3.55,3.55,0,1,1,10,6.45,3.5484,3.5484,0,0,1,13.55,10Z"})]})},"marker-".concat(e))}))}var an=o.memo(rn),cn=t(9123),sn=t.n(cn);function ln(n){var e,t,o=n.info,r=null===o||void 0===o||null===(e=o.Picture)||void 0===e?void 0:e.PictureUrl1,a=null===o||void 0===o||null===(t=o.Picture)||void 0===t?void 0:t.PictureDescription1,c="".concat(o.Name,", ").concat(o.City),s=r?(0,i.jsx)("img",{className:sn().img,src:r,alt:a}):"";return(0,i.jsxs)("div",{className:sn().wrapper,children:[(0,i.jsx)("div",{className:"title",children:c}),(0,i.jsx)("div",{className:"thumbnail",children:s})]})}var un=o.memo(ln),dn=[23.5042966,120.9583613];var vn=8,fn=13;function mn(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function hn(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),i.forEach((function(e){mn(n,e,t[e])}))}return n}var pn=function(n){n=null!==n?n:function(n){throw n}(new TypeError("Cannot destructure undefined"));var e=(0,r.I0)(),t=(0,r.v9)((0,a.br)("device")).isMobile,c=(0,r.v9)((0,a.br)("entities")),s=(0,r.v9)((0,a.br)("status")),l=(0,r.v9)((0,a.br)("popupInfo")),u=(0,o.useState)({latitude:dn[0],longitude:dn[1],zoom:6.5,bearing:0,pitch:0}),d=u[0],v=u[1],f=t?-.015:0,m=Object.values(c);(0,o.useEffect)((function(){if(void 0!==("undefined"===typeof document?"undefined":(n=document)&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n))return document.addEventListener("flytospot",p),function(){return document.removeEventListener("flytospot",p)};var n}),[]);var h=(0,o.useCallback)((function(n){var e=n.Position,t=e.PositionLon,i=e.PositionLat;v({latitude:i,longitude:t,zoom:fn,transitionInterpolator:new on.Cf({speed:1.2}),transitionDuration:"auto"})}),[]),p=function(n){var e=n.data.Position,t=e.PositionLon,i=e.PositionLat;v({latitude:i,longitude:t+f,zoom:fn,transitionInterpolator:new on.Cf({speed:1.2}),transitionDuration:"auto"})};return"loaded"===s&&m.length>0&&(setTimeout((function(){m.length>0&&v(hn({},function(n){var e=void 0===n?[]:n,t={latitude:0,longitude:0};return e.length>0&&(e.map((function(n){var e,i;t.latitude+=(null===n||void 0===n||null===(e=n.Position)||void 0===e?void 0:e.PositionLat)||0,t.longitude+=(null===n||void 0===n||null===(i=n.Position)||void 0===i?void 0:i.PositionLon)||0})),t.latitude/=e.length,t.longitude/=e.length),t}(m),{zoom:vn,transitionInterpolator:new on.Cf({speed:1.2}),transitionDuration:"auto"}))}),500),e((0,a.vN)())),(0,i.jsx)("div",{children:(0,i.jsxs)(on.ZP,hn({className:"map"},d,{width:"100vw",height:"100vh",mapStyle:"mapbox://styles/mapbox/streets-v11",onViewportChange:v,mapboxApiAccessToken:"pk.eyJ1IjoieXVuaHVuZyIsImEiOiJja3ZvaG95d3c3dnA4Mm5xd25mNzQ0MGJ4In0.VA6hdK0vkpkP_ruoevenuw",onClick:function(){return document.dispatchEvent(new Event("onmapclick"))},children:[(0,i.jsx)(an,{data:m,onClick:function(n){h(n),e((0,a.Ao)(n))}}),l&&(0,i.jsx)(on.GI,{tipSize:5,anchor:"top",longitude:l.Position.PositionLon,latitude:l.Position.PositionLat,closeOnClick:!1,onClose:function(){e((0,a.al)())},children:(0,i.jsx)(un,{info:l})})]}))})},xn=t(8114);function jn(){var n=(0,r.I0)(),e=(0,o.useState)(!1),t=e[0],s=e[1],l=(0,o.useState)(!1),u=l[0],d=l[1],v=(0,o.useState)(!1),m=v[0],h=v[1],p=(0,o.useState)(null),x=p[0],j=p[1];(0,o.useEffect)((function(){var e=function(){n((0,a.hG)({width:window.innerWidth,height:window.innerHeight}))};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]);return(0,i.jsxs)("div",{children:[(0,i.jsxs)(c.default,{children:[(0,i.jsx)("title",{children:"\u53f0\u7063\u65c5\u904a\u666f\u9ede\u5c0e\u89bd\u5730\u5716"}),(0,i.jsx)("meta",{name:"description",content:"\u53f0\u7063\u65c5\u904a\u666f\u9ede\u5c0e\u89bd\u5730\u5716"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,i.jsx)("script",{children:xn.$})]}),(0,i.jsx)(f,{onMenuClick:function(){return s(!0)},onProfileClick:function(){return h(!m)},showReturnButton:m,onReturnButtonClick:function(){return h(!1)},onCrossButtonClick:function(){d(!1),h(!1),j(null),n((0,a.DI)())}}),(0,i.jsx)(Y,{show:t,onNavClose:function(){return s(!1)}}),(0,i.jsx)(en,{show:u,onSelectItem:function(n){j(n),h(!0)}}),(0,i.jsx)(tn,{show:m,data:x}),(0,i.jsx)(pn,{}),(0,i.jsx)(H,{onFooterPaneClosed:function(){d(!1),h(!1)},showItemList:function(n){return d(n)},showMap:function(){d(!1),h(!1)}})]})}},8114:function(n,e,t){"use strict";t.d(e,{$:function(){return i}});var i="window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'UA-212235762-1');"},3410:function(n){n.exports={card:"Card_card__2cXDm",title:"Card_title__1A-34",articleTitle:"Card_articleTitle__1VGcJ",tag:"Card_tag__FWTGo",img:"Card_img__1Arhv",thumbnails:"Card_thumbnails__x5LIj",iconRow:"Card_iconRow__1xM1t"}},943:function(n){n.exports={navInfo:"Nav_navInfo__1gGJR",logo:"Nav_logo__11byI"}},4614:function(n){n.exports={slidePane:"SlidePane_slidePane__1YYCz",posTop:"SlidePane_posTop__rYK-3",posTopActive:"SlidePane_posTopActive__23DfQ",posLeft:"SlidePane_posLeft__3zoIJ",posLeftActive:"SlidePane_posLeftActive__23TlA",posBottom:"SlidePane_posBottom__1mzJa",posBottomActive:"SlidePane_posBottomActive__37j52",layer1:"SlidePane_layer1__2iz2y",layer2:"SlidePane_layer2__2rOz9",layer3:"SlidePane_layer3__3ZN7j"}},9123:function(n){n.exports={wrapper:"SpotInfo_wrapper__1rQ6J",img:"SpotInfo_img__3ZMML"}}},function(n){n.O(0,[228,609,158,980,445,13,874,617,634,818,774,888,179],(function(){return e=8581,n(n.s=e);var e}));var e=n.O();_N_E=e}]);