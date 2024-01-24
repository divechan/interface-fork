"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7782],{93688:function(e,t,r){var s,a=r(13752),i=r(44554),n=r(85893);!function(e){e[e.REPEAT=0]="REPEAT",e[e.SINGLE=1]="SINGLE"}(s||(s={}));const l={"bg-bars":{type:s.REPEAT,url:"https://app.sushi.com/images/trident/bars-pattern.png"},"bg-binary":{type:s.REPEAT,url:"https://app.sushi.com/images/trident/binary-pattern.png"},"bg-bubble":{type:s.REPEAT,url:"https://app.sushi.com/images/trident/bubble-pattern.png"},"bg-dots":{type:s.REPEAT,url:"https://app.sushi.com/images/trident/dots-pattern.png"},"bg-x-times-y-is-k":{type:s.REPEAT,url:"https://app.sushi.com/images/trident/x-times-y-is-k.png"},"bg-wavy":{type:s.REPEAT,url:"https://app.sushi.com/images/trident/wavy-pattern.png"},"bg-chevron":{type:s.REPEAT,url:"https://app.sushi.com/images/trident/chevron-pattern.png"},"miso-bowl":{type:s.SINGLE,url:"https://app.sushi.com/images/miso/banner.jpg"}};t.Z=e=>{let{variant:t}=e;if(!t)return(0,n.jsx)("div",{className:"absolute inset-0 bg-dark-900/30"});const{type:r,url:c}=l[t];return r===s.REPEAT?(0,n.jsx)("div",{className:(0,i.AK)("absolute inset-0 flex flex-col items-center bg-dark-900/30"),children:(0,n.jsx)("div",{className:(0,i.AK)("absolute inset-0 w-full h-full z-0 opacity-10",t)})}):(0,n.jsx)(a.Z,{alt:"background image",src:c,objectFit:"cover",objectPosition:"center",layout:"fill",priority:!0})}},92552:function(e,t,r){var s=r(59499),a=r(4730),i=(r(67294),r(85893));const n=["set","className","checked"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){let{set:t,className:r="",checked:s}=e,l=(0,a.Z)(e,n);return(0,i.jsx)("div",{className:"relative flex items-center justify-center",children:(0,i.jsx)("input",c({type:"checkbox",onChange:e=>t?t(e.target.checked):null,className:"border border-dark-700 checked:bg-gradient-to-r checked:border-[3px] checked:from-blue checked:to-pink cursor-pointer appearance-none h-5 w-5 rounded-[4px] bg-dark-900 disabled:bg-dark-1000 disabled:border-dark-800 ".concat(r),checked:s},l))})}},8578:function(e,t,r){r.d(t,{Z:function(){return Z}});var s=r(14744),a=r(42144),i=r(56727),n=r(13342),l=r(77062),c=r(49552),o=r.n(c),d=r(11163),h=r(67294),m=r(56785),u=r(85893);const x={en:"English",de:"Deutsch",fr:"Fran\xe7ais",it:"Italiano",ro:"Rom\xe2n\u0103",ru:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",vi:"Ti\u1ebfng Vi\u1ec7t",zh_CN:"\u7b80\u4f53\u4e2d\u6587",zh_TW:"\u7e41\u9ad4\u4e2d\u6587",ko:"\ud55c\uad6d\uc5b4",ja:"\u65e5\u672c\u8a9e",fa:"\u0641\u0627\u0631\u0633\u06cc",pt_BR:"Portugu\xeas",hi:"\u0939\u093f\u0928\u094d\u0926\u0940",es:"Espa\xf1ol",tr:"T\xfcrk\xe7e",el:"\u03b5\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",pl:"Polskie"};function p(){const{locale:e,locales:t,asPath:r,push:s}=(0,d.useRouter)();return(0,u.jsxs)(i.v2,{as:"div",className:"relative inline-block w-full text-left",children:[(0,u.jsx)("div",{children:(0,u.jsx)(i.v2.Button,{className:"w-full px-4 py-2 text-sm font-bold bg-transparent border-2 rounded shadow-sm text-primary border-dark-800 hover:border-dark-700 bg-dark-1000",children:(0,u.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[(0,u.jsx)(m.Z,{weight:700,variant:"sm",children:e&&x[e]}),(0,u.jsx)(n.Z,{className:"w-5 h-5 ml-2 -mr-1","aria-hidden":"true"})]})})}),(0,u.jsx)(i.uT,{as:h.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,u.jsx)(i.v2.Items,{static:!0,className:"absolute max-h-[240px] overflow-auto w-full border-2 mt-2 divide-y rounded shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border-dark-900 bg-dark-1000 divide-dark-900",children:null===t||void 0===t?void 0:t.map(((e,t)=>(0,u.jsx)(i.v2.Item,{onClick:()=>{o().set("NEXT_LOCALE",e),s(r,void 0,{locale:e})},children:t=>{let{active:r}=t;return(0,u.jsx)(m.Z,{variant:"sm",weight:700,className:(0,l.A)(r?"text-white":"text-primary","px-3 py-2 cursor-pointer hover:bg-dark-900/40"),children:x[e]})}},t)))})})]})}var f=r(38239),g=r(44554),j=r(12614),b=r(25675),v=r.n(b),w=r(41664),y=r.n(w),N=r(72457),k=r(51591),_=r(19244),O=r(12862);var Z=()=>{const{chainId:e}=(0,j.aQ)(),{i18n:t}=(0,s.mV)();return(0,u.jsx)("div",{className:"z-10 w-full",children:(0,u.jsx)(N.Z,{maxWidth:"7xl",className:"px-6 pb-20 mx-auto",children:(0,u.jsxs)("div",{className:"grid grid-cols-2 gap-10 pt-8 border-t md:grid-cols-3 lg:grid-cols-6 xs:px-6 border-dark-900",children:[(0,u.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,u.jsxs)("div",{className:"flex items-center justify-start gap-2",children:[(0,u.jsx)("div",{className:"",children:(0,u.jsx)(v(),{src:"https://i.imgur.com/44SEwTZ.png",alt:"SteamX logo",width:"28px",height:"28px"})}),(0,u.jsx)(m.Z,{variant:"h2",weight:700,className:"tracking-[0.02em] scale-y-90 hover:text-high-emphesis",children:"SteamX"})]}),(0,u.jsx)(m.Z,{variant:"xs",className:"text-low-emphesis",children:t._(t._("Our community is building a comprehensive decentralized trading platform for the future of finance. Join\nus!"))}),(0,u.jsxs)("div",{className:"flex items-center gap-4",children:[(0,u.jsx)("a",{href:"https://twitter.com/BitBallSwap",target:"_blank",rel:"noreferrer",children:(0,u.jsx)(a.Zm,{width:16,className:"text-low-emphesis"})}),(0,u.jsx)("a",{href:"https://www.facebook.com/bitballerc20/",target:"_blank",rel:"noreferrer",children:(0,u.jsx)(k.Z,{width:16,className:"text-low-emphesis"})}),(0,u.jsx)("a",{href:"https://www.instagram.com/bitball_erc20/",target:"_blank",rel:"noreferrer",children:(0,u.jsx)(a.yu,{width:16,className:"text-low-emphesis"})}),(0,u.jsx)("a",{href:"https://bitballerc20.medium.com",target:"_blank",rel:"noreferrer",children:(0,u.jsx)(a.OW,{width:16,className:"text-low-emphesis"})}),(0,u.jsx)("a",{href:"https://discord.gg/f7sWmJ4",target:"_blank",rel:"noreferrer",children:(0,u.jsx)(a.D7,{width:16,className:"text-low-emphesis"})}),(0,u.jsx)("a",{href:"https://t.me/Ballswap",target:"_blank",rel:"noreferrer",children:(0,u.jsx)(a.YG,{width:16,className:"text-low-emphesis"})}),(0,u.jsx)("a",{href:"https://www.youtube.com/channel/UCshc0oNpahxoulOhe5WwT-Q",target:"_blank",rel:"noreferrer",children:(0,u.jsx)(_.Z,{width:16,className:"text-low-emphesis"})}),(0,u.jsx)("a",{href:"https://github.com/BitballErc20",target:"_blank",rel:"noreferrer",children:(0,u.jsx)(a.ET,{width:16,className:"text-low-emphesis"})}),(0,u.jsx)("a",{href:"https://www.bitball-btb.com/",target:"_blank",rel:"noreferrer",children:(0,u.jsx)(O.Z,{width:16,className:"text-low-emphesis"})}),(0,u.jsx)("a",{href:"https://www.reddit.com/r/BitBallEcosystem",target:"_blank",rel:"noreferrer",children:(0,u.jsx)(a.MP,{width:16,className:"text-low-emphesis"})})]})]}),(0,u.jsxs)("div",{className:"flex flex-col gap-1 text-right",children:[(0,u.jsx)(m.Z,{variant:"xs",weight:700,className:"mt-2.5 hover:text-high-emphesis",children:t._(t._("Products"))}),(0,u.jsx)(y(),{href:(0,g.vR)(f.L.TRIDENT,e)?"/trident/pools":"/legacy/pool",passHref:!0,children:(0,u.jsx)(m.Z,{variant:"xs",className:"text-low-emphesis hover:text-high-emphesis",children:t._(t._("Liquidity Pools"))})})]}),(0,u.jsxs)("div",{className:"flex flex-col gap-1 md:text-right lg:text-right",children:[(0,u.jsx)(m.Z,{variant:"xs",weight:700,className:"mt-2.5 hover:text-high-emphesis",children:t._(t._("Help"))}),(0,u.jsx)("a",{href:"https://discord.gg/f7sWmJ4",target:"_blank",rel:"noreferrer",children:(0,u.jsx)(m.Z,{variant:"xs",className:"text-low-emphesis hover:text-high-emphesis",children:t._(t._("Ask on Discord"))})}),(0,u.jsx)("a",{href:"https://twitter.com/BitBallSwap",target:"_blank",rel:"noreferrer",children:(0,u.jsx)(m.Z,{variant:"xs",className:"text-low-emphesis hover:text-high-emphesis",children:t._(t._("Ask on Twitter"))})}),(0,u.jsx)("a",{href:"https://t.me/Ballswap",target:"_blank",rel:"noreferrer",children:(0,u.jsx)(m.Z,{variant:"xs",className:"text-low-emphesis hover:text-high-emphesis",children:t._(t._("Ask on Telegram"))})}),(0,u.jsx)("a",{href:"https://medium.com/@bitballerc20/",target:"_blank",rel:"noreferrer",children:(0,u.jsx)(m.Z,{variant:"xs",className:"text-low-emphesis hover:text-high-emphesis",children:t._(t._("Ask on Forum"))})})]}),(0,u.jsx)("div",{className:"flex flex-col gap-1",children:(0,u.jsx)(p,{})})]})})})}},90695:function(e,t,r){r.d(t,{T:function(){return a}});r(67294);var s=r(85893);const a=e=>{let{active:t}=e;return(0,s.jsx)("div",{className:"animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-blue transition ".concat(t?"opacity-100":"opacity-0")})}},13063:function(e,t,r){r.d(t,{W:function(){return i}});var s=r(41626),a=(r(67294),r(85893));const i=e=>{let{pair:t}=e;return(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(s.X,{className:"rounded-full",currency:t.token0,size:40}),(0,a.jsx)("div",{className:"-ml-2",children:(0,a.jsx)(s.X,{className:"rounded-full",currency:t.token1,size:40})}),(0,a.jsxs)("div",{className:"ml-2 text-high-emphesis",children:[t.token0.symbol,"-",t.token1.symbol]})]})}},34776:function(e,t,r){r.d(t,{c:function(){return d}});var s=r(31518),a=r(21328),i=r(44554),n=r(62603),l=r(12614),c=r(22986),o=(r(67294),r(85893));const d=e=>{let{pair:t,roundedBottom:r}=e;const{account:d}=(0,l.aQ)(),h=(0,c.mM)(null!==d&&void 0!==d?d:void 0,t.liquidityToken),m=(0,n.A)(t.liquidityToken),[u,x]=t&&m&&h&&s.QA.greaterThanOrEqual(m.quotient,h.quotient)?[t.getLiquidityValue(t.token0,m,h,!1),t.getLiquidityValue(t.token1,m,h,!1)]:[void 0,void 0];return(0,o.jsxs)("div",{className:(0,i.AK)("flex items-center justify-between p-3 bg-dark-800",r&&"rounded-b"),children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{children:[null===u||void 0===u?void 0:u.toSignificant(6)," ",t.token0.symbol]}),(0,o.jsxs)("div",{children:[null===x||void 0===x?void 0:x.toSignificant(6)," ",t.token1.symbol]})]}),(0,o.jsx)(a.Z,{amounts:[u,x],children:e=>{let{amount:t}=e;return(0,o.jsxs)("div",{className:"font-bold text-high-emphesis",children:["\u2248 $",null===t||void 0===t?void 0:t.toFixed(2)]})}})]})}},64958:function(e,t,r){var s=r(59499),a=r(4730),i=r(41664),n=r.n(i),l=r(11163),c=r(67294),o=r(85893);const d=["children","exact","activeClassName"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=e=>{let{children:t,exact:r=!1,activeClassName:s="text-high-emphesis"}=e,i=(0,a.Z)(e,d);const{asPath:h,pathname:u,route:x,query:p,basePath:f}=(0,l.useRouter)(),g=c.Children.only(t),j=g.props.className||"",b=(r?(i.as||i.href.pathname||i.href)===h:h.startsWith(i.as||i.href.pathname||i.href))?"".concat(j," ").concat(s).trim():j;return(0,o.jsx)(n(),m(m({href:i.href},i),{},{children:c.cloneElement(g,{className:b||null})}))}},21328:function(e,t,r){var s=r(59499),a=r(9279),i=r(94633),n=r(67294),l=r(85893);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const d=(0,n.memo)((e=>{let{amount:t,update:r}=e;const s=(0,i.or)(t),c=t?t.currency.isNative?a.d:t.currency.wrapped.address:void 0;return(0,n.useEffect)((()=>{if(c)return r(c,s),()=>{r(c,void 0)}}),[c,r,s]),(0,l.jsx)(l.Fragment,{})}));t.Z=e=>{let{amounts:t,children:r}=e;const{0:s,1:a}=(0,n.useState)({}),i=(0,n.useCallback)(((e,t)=>{a((r=>o(o({},r),{},{[e]:t})))}),[]),c=(0,n.useMemo)((()=>Object.values(s).filter(Boolean)),[s]),h=(0,n.useMemo)((()=>c.length>0?c.reduce(((e,t)=>e.add(t))):void 0),[c]);return(0,l.jsxs)(l.Fragment,{children:[null===t||void 0===t?void 0:t.map(((e,t)=>(0,l.jsx)(d,{amount:e,update:i},t))),r({amount:h})]})}},14894:function(e,t,r){r.d(t,{y:function(){return j},T:function(){return g}});var s=r(14744),a=r(71862),i=r(90695),n=r(92552),l=r(13063),c=r(34776),o=(r(67294),r(85893));const d=e=>{let{pair:t,source:r,setFunc:s,checkedState:i}=e;return(0,o.jsxs)("div",{className:"w-full border border-1 border-dark-700 rounded",children:[(0,o.jsxs)("div",{className:"flex justify-between p-3 bg-dark-900 items-center rounded-t",children:[(0,o.jsx)(l.W,{pair:t}),(0,o.jsxs)("div",{className:"flex",children:[(0,o.jsx)(a.ZP,{color:"blue",variant:"outlined",size:"xs",children:r}),(0,o.jsx)(n.Z,{className:"ml-2",checked:i,set:()=>s(!i,{v2Pair:t})})]})]}),(0,o.jsx)(c.c,{pair:t,roundedBottom:!0})]})};var h=r(7656),m=r(22641),u=r(12614),x=r(16339),p=r(11163),f=r(56785);const g="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6",j=()=>{const{i18n:e}=(0,s.mV)(),t=(0,p.useRouter)(),{account:r}=(0,u.aQ)(),{pairs:n,loading:l}=(0,m.m)(),c=(0,x.T)(),j=(0,x.C)(h.Gi);return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,o.jsxs)("div",{className:"flex items-center gap-3",children:[(0,o.jsx)(f.Z,{variant:"h3",className:"text-high-emphesis",weight:700,children:e._(e._("Available to Migrate"))}),(0,o.jsx)(i.T,{active:l})]}),!r&&(0,o.jsx)("div",{children:e._(e._("Connect to your wallet first \u2197\ufe0f"))}),r&&0===n.length&&!l&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{children:e._(e._("You have no pools available for migration"))}),(0,o.jsx)(a.ZP,{className:"w-max",size:"sm",onClick:()=>t.push("/account/".concat(r)),children:e._(e._("Go to your wallet"))})]})]}),n.length>0&&(0,o.jsxs)("div",{className:"flex flex-col",children:[(0,o.jsx)("div",{className:g,children:n.map(((e,t)=>(0,o.jsx)(d,{pair:e,source:h.Iv.SUSHI_V2,setFunc:(e,t)=>c((0,h.ms)({add:e,migration:t})),checkedState:j.some((t=>t.v2Pair.liquidityToken.address===e.liquidityToken.address))},t)))}),(0,o.jsx)(a.ZP,{className:"self-center w-full mt-6 md:w-96",color:j.length?"gradient":"gray",disabled:Boolean(!j.length),onClick:()=>t.push("/trident/migrate/confirm"),children:1===j.length?e._(e._("Migrate Pool")):j.length>1?e._(e._("Migrate Pools")):e._(e._("Select liquidity positions to migrate"))})]})]})}},87433:function(e,t,r){var s=r(14744),a=r(31518),i=r(46430),n=r(64958),l=r(56785),c=r(87269),o=r(10552),d=r(90662),h=r(12614),m=r(49552),u=r.n(m),x=r(25675),p=r.n(x),f=r(67294),g=r(85893);const j=e=>{var t;let{children:r,feature:m,asModal:x=!0}=e;const{i18n:j}=(0,s.mV)(),{chainId:b,library:v,account:w}=(0,h.aQ)(),y=(0,g.jsx)(n.Z,{href:"/swap",children:(0,g.jsx)("a",{className:"text-blue focus:outline-none",children:j._(j._("home page"))})}),N=Object.entries(c.Z).reduce(((e,t)=>{let[r,s]=t;return s.includes(m)&&e.push(r),e}),[]),k=(0,g.jsx)("div",{className:"flex justify-center lg:mt-[200px]",children:(0,g.jsxs)("div",{className:"flex flex-col gap-5 justify-center p-4 mt-10 lg:mt-0",children:[(0,g.jsx)(l.Z,{variant:"h1",className:"max-w-2xl text-white text-center",weight:700,children:j._(j._("This feature is not yet supported on the {0} network",{0:o.z[b]}))}),(0,g.jsxs)(l.Z,{className:"text-center max-w-[248px] mx-auto",children:[(0,g.jsx)(s.cC,{id:"Either return to the {link}",values:{link:y},components:f.Fragment})," ",j._(j._("or change to an available network"))]}),(0,g.jsx)(l.Z,{variant:"sm",className:"uppercase text-center tracking-[.2rem] mt-10 mb-5",weight:700,children:j._(j._("Available Networks"))}),(0,g.jsx)("div",{className:"grid grid-cols-[repeat(2,_100px)] md:grid-cols-[repeat(4,_100px)] gap-y-10 justify-center",children:N.map(((e,t)=>(0,g.jsxs)("button",{className:"text-primary hover:text-white flex items-center flex-col gap-2 justify-center",onClick:()=>{const t=d.b[e];u().set("chainId",e),e===a.a_.ETHEREUM.toString()?null===v||void 0===v||v.send("wallet_switchEthereumChain",[{chainId:"0x1"},w]):e===a.a_.KOVAN.toString()?null===v||void 0===v||v.send("wallet_switchEthereumChain",[{chainId:"0x2A"},w]):null===v||void 0===v||v.send("wallet_addEthereumChain",[t,w])},children:[(0,g.jsx)("div",{className:"w-[40px] h-[40px]",children:(0,g.jsx)(p(),{src:o.w[e],alt:"Switch Network",className:"rounded-md filter drop-shadow-currencyLogo",width:"40px",height:"40px"})}),(0,g.jsx)(l.Z,{variant:"sm",weight:700,className:"text-white",children:o.z[e]})]},t)))})]})});return x?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i.Z.Controlled,{isOpen:!!w&&!(null!==(t=c.Z[b])&&void 0!==t&&t.includes(m)),onDismiss:()=>null,transparent:!0,children:k}),r]}):w&&!c.Z[b].includes(m)?k:(0,g.jsx)(g.Fragment,{children:r})};t.Z=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t?t=>{let{children:r}=t;return(0,g.jsx)(j,{feature:e,children:r})}:t=>{let{children:r}=t;return(0,g.jsx)(j,{feature:e,asModal:!1,children:r})}}},22680:function(e,t,r){r.d(t,{A9:function(){return m},CV:function(){return h}});var s=r(93688),a=r(72457),i=r(8578),n=r(66231),l=r(52907),c=r(76844),o=r(44554),d=(r(67294),r(85893));const h=e=>{let{children:t,className:r,pattern:i,maxWidth:n="7xl",condensed:l}=e;return(0,d.jsxs)("header",{className:"relative flex flex-col items-center justify-center w-full",children:[(0,d.jsx)(s.Z,{variant:i}),(0,d.jsx)(a.Z,{maxWidth:n,className:(0,o.AK)("flex flex-col gap-5 z-[1] p-6 lg:py-10",l&&"py-5",r),children:t})]})},m=e=>{let{children:t,className:r,maxWidth:s="7xl"}=e;return(0,d.jsx)(l.Z,{children:(0,d.jsx)(a.Z,{maxWidth:s,className:(0,o.AK)("flex flex-col gap-10 z-[1] p-6 lg:py-10 mx-auto",r),children:t})})};t.ZP=e=>{let{children:t=[]}=e;return(0,d.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,d.jsx)(n.Z,{}),(0,d.jsxs)("div",{className:"flex flex-col items-center flex-grow w-full",children:[(0,d.jsx)("div",{className:"flex flex-col flex-grow w-full",children:t}),(0,d.jsx)(c.Z,{})]}),(0,d.jsx)(i.Z,{})]})}}}]);