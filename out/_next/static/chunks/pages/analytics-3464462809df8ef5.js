(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4583],{80853:function(e,t,n){"use strict";var r=n(909),l=(n(67294),n(85893));(0,r.Z)((e=>e.x)).center;t.Z=e=>{let{data:t,stroke:n={solid:"#0993EC"},strokeWidth:r=1.5,setSelectedIndex:a}=e;return(0,l.jsx)(l.Fragment,{})}},40334:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(67294),l=n(80853),a=n(44554),s=n(73803),i=n(85893);function o(e){let{header:t,subheader:n,figure:o,change:c,chart:d,defaultTimespan:u,timespans:h}=e;const{0:v,1:m}=(0,r.useState)(null===h||void 0===h?void 0:h.find((e=>e.text===u))),g=(0,r.useMemo)((()=>{const e=Math.round(Date.now()/1e3);return null===d||void 0===d?void 0:d.reduce(((t,n)=>{const r=n.x.getTime();return Math.round(r/1e3)>=e-(null===v||void 0===v?void 0:v.length)&&t.push({x:r,y:n.y}),t}),[])}),[d,null===v||void 0===v?void 0:v.length]),{0:f,1:p}=(0,r.useState)((null===g||void 0===g?void 0:g.length)-1),x=(0,r.useMemo)((()=>{var e;return null===g||void 0===g||null===(e=g[f])||void 0===e?void 0:e.y}),[g,f]),y=(0,r.useMemo)((()=>{var e;return null===g||void 0===g||null===(e=g[f])||void 0===e?void 0:e.x}),[g,f]);return(0,i.jsxs)("div",{className:"w-full p-5 space-y-4 font-bold border border-dark-900 rounded shadow-md bg-[rgba(0,0,0,0.12)]",children:[(0,i.jsxs)("div",{className:"flex justify-between",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"text-xs text-secondary",children:n}),(0,i.jsx)("div",{className:"text-high-emphesis",children:t})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"flex justify-end text-2xl text-high-emphesis",children:(0,a.uf)(null!==x&&void 0!==x?x:o,!0,!1)}),(0,i.jsxs)("div",{className:"flex flex-row items-center justify-end",children:[f===(null===g||void 0===g?void 0:g.length)-1&&(0,i.jsx)(s.Z,{number:c,percent:!0}),(0,i.jsx)("div",{className:"ml-3 font-normal",children:y?(0,a.p6)(new Date(y)):"Past 24 Hours"})]})]})]}),(0,i.jsx)("div",{className:"py-4 h-36",children:g&&(0,i.jsx)(l.Z,{data:g,stroke:{gradient:{from:"#27B0E6",to:"#FA52A0"}},setSelectedIndex:p})}),(0,i.jsx)("div",{className:"flex flex-row justify-end space-x-4",children:h.map(((e,t)=>(0,i.jsx)("button",{className:(0,a.AK)(e===v?"text-blue bg-blue bg-opacity-30 rounded-xl font-bold border border-blue border-opacity-50":"text-secondary","text-sm px-3 py-0.5"),onClick:()=>m(e),children:e.text},t)))})]})}},73803:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(44554),l=n(85893);function a(e){let{number:t,scaleNumber:n=!0,percent:a=!1,className:s=""}=e;return(isNaN(t)||t===1/0)&&(t=0),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:(0,r.AK)(t>0?"text-green":t<0&&"text-red","font-normal",s),children:(t>0?"+":t<0?"-":"")+(a?(0,r.T3)(t).replace("-",""):n?(0,r.nH)(t,!0).replace("-",""):(0,r.uf)(t,!0,!1).replace("-",""))})})}},20701:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var r=n(59499),l=n(55929),a=n(83567),s=n(85874),i=n(89046),o=n(41664),c=n.n(o),d=n(67294),u=n(79521),h=n(14744),v=n(56785),m=n(16339),g=n(83898),f=n(85893);const p=()=>{const{i18n:e}=(0,h.mV)(),{searchQuery:t}=(0,m.C)(g.i0);return(0,f.jsx)("div",{className:"flex flex-row items-center justify-between px-2 py-2",children:(0,f.jsx)(v.Z,{variant:"base",className:"text-high-emphesis",weight:700,children:t?"".concat(e._(e._("Search results for"))," '").concat(t,"'"):e._(e._("Top Tokens"))})})};var x=n(73232);const y=e=>{(e=>{const{searchQuery:t}=(0,m.C)(x.i0);(0,d.useMemo)((()=>e("token",{searchQuery:t})),[t,e])})(e)};var j=n(19485),b=n(31518),w=n(41626),P=n(44554),N=n(62483),O=n(8100);const k=(e,t,n)=>e.filter((e=>{var t,r,l,a;let{original:s}=e;const i=null===s||void 0===s||null===(t=s.token)||void 0===t||null===(r=t.name)||void 0===r||null===(l=r.concat(null===s||void 0===s||null===(a=s.token)||void 0===a?void 0:a.symbol))||void 0===l?void 0:l.toLowerCase();return!n.searchQuery.length||i.includes(n.searchQuery.toLowerCase())}));function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=e=>{let{chainId:t}=e;const{config:n}=(e=>{const t=(0,N.e_)(),{data:n}=(0,O.ZP)(e?"/api/analytics/bentobox/".concat(e):null,(e=>fetch(e).then((e=>e.json())))),r=null===n||void 0===n?void 0:n.bentoBoxTokens,l=(0,d.useMemo)((()=>[{Header:"Name",accessor:"token",maxWidth:100,Cell:n=>{const r=(0,j.getAddress)(n.value.id),l=(0,d.useMemo)((()=>r in t?t[r]:new b.WU(e,r,Number(n.value.decimals),n.value.symbol,n.value.name)),[n,r]);return(0,f.jsxs)("div",{className:"flex items-center gap-2",children:[(0,f.jsx)(w.X,{currency:null!==l&&void 0!==l?l:void 0,className:"!rounded-full",size:36}),n.value.symbol]})},filter:k},{Header:"Price",accessor:"price",minWidth:150,Cell:e=>(0,P.uf)(e.value,!0,void 0,2),align:"right"},{Header:"Liquidity",accessor:"liquidity",minWidth:150,Cell:e=>(0,P.uf)(e.value,!0,!1),align:"right"},{id:"target",Header:"Strategy Target",accessor:"strategy.targetPercentage",minWidth:150,Cell:e=>(0,P.T3)(e.value)},{id:"utilisation",Header:"Strategy Utilization",accessor:"strategy.utilization",minWidth:150,Cell:e=>(0,P.T3)(e.value)},{Header:"APY",accessor:"strategy.apy",minWidth:150,Cell:e=>(0,P.T3)(e.value)}]),[t,e]);return(0,d.useMemo)((()=>({config:{columns:l,data:null!==r&&void 0!==r?r:[],initialState:{sortBy:[{id:"liquidity",desc:!0},{id:"price",desc:!0},{id:"targetPercentage",desc:!0},{id:"utilization",desc:!0},{id:"apy",desc:!0}]},autoResetFilters:!1}})),[l,r])})(t),{getTableProps:r,getTableBodyProps:o,headerGroups:h,rows:v,page:m,gotoPage:g,canPreviousPage:x,canNextPage:C,prepareRow:E,setFilter:Z,toggleSortBy:R,state:{pageIndex:M,pageSize:_}}=(0,u.useTable)(n,u.useFlexLayout,u.useFilters,u.useSortBy,u.useFlexLayout,u.usePagination);return y(Z),(0,f.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,f.jsx)(p,{}),(0,f.jsx)("div",{className:i._O,children:(0,f.jsxs)("table",S(S({},r()),{},{className:i.RR,children:[(0,f.jsx)("thead",{children:h.map(((e,t)=>(0,d.createElement)("tr",S(S({},e.getHeaderGroupProps()),{},{key:t}),e.headers.map(((t,n)=>(0,d.createElement)("th",S(S({},t.getHeaderProps(t.getSortByToggleProps())),{},{key:n,className:(0,i.G0)(n,e.headers.length)}),t.render("Header"),(0,f.jsx)("span",{className:"inline-block ml-1 align-middle",children:t.isSorted?t.isSortedDesc?(0,f.jsx)(l.Z,{width:12}):(0,f.jsx)(a.Z,{width:12}):""})))))))}),(0,f.jsx)("tbody",S(S({},o()),{},{children:m.map(((e,n)=>(E(e),(0,f.jsx)(c(),{href:{pathname:"/analytics/tokens/".concat(e.original.token.id),query:{chainId:t}},passHref:!0,children:(0,d.createElement)("tr",S(S({},e.getRowProps()),{},{key:n,className:i.vu}),e.cells.map(((t,n)=>(0,f.jsx)("td",S(S({},t.getCellProps()),{},{className:(0,i.zm)(n,e.cells.length),children:t.render("Cell")}),n))))},n))))}))]}))}),(0,f.jsx)(s.a,{pageIndex:M,pageSize:_,totalItems:v.length,gotoPage:g,canPreviousPage:x,canNextPage:C,loading:!v.length})]})}},26702:function(e,t,n){"use strict";n.d(t,{Z:function(){return R}});var r=n(59499),l=n(55929),a=n(83567),s=n(85874),i=n(89046),o=n(41664),c=n.n(o),d=n(67294),u=n(79521),h=n(14744),v=n(56785),m=n(16339),g=n(95382),f=n(85893);const p=()=>{const{i18n:e}=(0,h.mV)(),{searchQuery:t}=(0,m.C)(g.AE);return(0,f.jsx)("div",{className:"flex flex-row items-center justify-between px-2 py-2",children:(0,f.jsx)(v.Z,{variant:"base",className:"text-high-emphesis",weight:700,children:t?"".concat(e._(e._("Search results for"))," '").concat(t,"'"):e._(e._("Top Pools"))})})};var x=n(731);const y=e=>{(e=>{const{searchQuery:t}=(0,m.C)(x.AE);(0,d.useMemo)((()=>e("pair",{searchQuery:t})),[t,e])})(e)};var j=n(19485),b=n(31518),w=n(41626),P=n(44554),N=n(62483),O=n(25675),k=n.n(O),C=n(8100);const S=(e,t,n)=>e.filter((e=>{var t,r,l,a,s,i,o,c,d,u,h,v;let{original:m}=e;const g=null===m||void 0===m||null===(t=m.pair)||void 0===t||null===(r=t.token0)||void 0===r||null===(l=r.symbol)||void 0===l||null===(a=l.concat(null===m||void 0===m||null===(o=m.pair)||void 0===o||null===(c=o.token0)||void 0===c?void 0:c.name))||void 0===a||null===(s=a.concat(null===m||void 0===m||null===(d=m.pair)||void 0===d||null===(u=d.token1)||void 0===u?void 0:u.symbol))||void 0===s||null===(i=s.concat(null===m||void 0===m||null===(h=m.pair)||void 0===h||null===(v=h.token1)||void 0===v?void 0:v.name))||void 0===i?void 0:i.toLowerCase();return!n.searchQuery.length||g.includes(n.searchQuery.toLowerCase())}));function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=e=>{let{chainId:t}=e;const{config:n}=(e=>{const t=(0,N.e_)(),{data:n}=(0,C.ZP)(e?"/api/analytics/pairs/".concat(e):null,(e=>fetch(e).then((e=>e.json())))),r=(0,d.useMemo)((()=>[{Header:"Name",accessor:"pair",maxWidth:150,Cell:n=>{const r=(0,j.getAddress)(n.value.token0.id),l=(0,d.useMemo)((()=>r in t?t[r]:new b.WU(e,(0,j.getAddress)(n.value.token0.id),Number(n.value.token0.decimals),n.value.token0.symbol,n.value.token0.name)),[n,r]),a=(0,j.getAddress)(n.value.token1.id),s=(0,d.useMemo)((()=>a in t?t[a]:new b.WU(e,a,Number(n.value.token1.decimals),n.value.token1.symbol,n.value.token1.name)),[n,a]);return(0,f.jsxs)("div",{className:"flex items-center gap-2 overflow-hidden",children:[(0,f.jsx)(w.B,{currencies:[l,s],size:40,dense:!0}),(0,f.jsxs)("div",{id:"pool-".concat(n.value.token0.symbol,"/").concat(n.value.token1.symbol),className:"overflow-hidden font-bold text-high-emphesis overflow-ellipsis whitespace-nowrap",children:[n.value.token0.symbol,"/",n.value.token1.symbol]}),(0,f.jsx)("div",{className:"w-3.5",children:(0,f.jsx)(k(),{src:"https://app.sushi.com/images/rss.svg",alt:"rss icon",layout:"fixed",width:"14",height:"14"})})]})},filter:S},{Header:"TVL",accessor:"liquidity",minWidth:150,Cell:e=>(0,P.uf)(e.value,!0,!1,2),align:"right"},{Header:"Volume 1d",accessor:"volume1d",minWidth:150,Cell:e=>(0,P.uf)(e.value,!0,!1,2),align:"right"},{Header:"Fees 1d",accessor:"fees1d",minWidth:150,Cell:e=>(0,P.uf)(e.value,!0,!1,2),align:"right"},{Header:"APY",accessor:"apy",minWidth:150,Cell:e=>(0,f.jsxs)(f.Fragment,{children:[e.value," ","-"!==e.value&&(e.row.original.utilisation1dChange>0?(0,f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ml-2",viewBox:"0 0 20 20",fill:"currentColor",children:(0,f.jsx)("path",{fillRule:"evenodd",d:"M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z",clipRule:"evenodd"})}):(0,f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ml-2",viewBox:"0 0 20 20",fill:"currentColor",children:(0,f.jsx)("path",{fillRule:"evenodd",d:"M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z",clipRule:"evenodd"})}))]})}]),[t,e]);return(0,d.useMemo)((()=>({config:{columns:r,data:null!==n&&void 0!==n?n:[],initialState:{sortBy:[{id:"liquidity",desc:!0},{id:"apy",desc:!0}]},autoResetFilters:!1,autoResetPage:!1}})),[r,n])})(t),{getTableProps:r,getTableBodyProps:o,headerGroups:h,rows:v,page:m,gotoPage:g,canPreviousPage:x,canNextPage:O,prepareRow:E,setFilter:R,toggleSortBy:M,state:{pageIndex:_,pageSize:T}}=(0,u.useTable)(n,u.useFlexLayout,u.useFilters,u.useSortBy,u.useFlexLayout,u.usePagination);return y(R),(0,f.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,f.jsx)(p,{}),(0,f.jsx)("div",{className:i._O,children:(0,f.jsxs)("table",Z(Z({},r()),{},{className:i.RR,children:[(0,f.jsx)("thead",{children:h.map(((e,t)=>(0,d.createElement)("tr",Z(Z({},e.getHeaderGroupProps()),{},{key:t}),e.headers.map(((t,n)=>(0,d.createElement)("th",Z(Z({},t.getHeaderProps(t.getSortByToggleProps())),{},{key:n,className:(0,i.G0)(n,e.headers.length)}),t.render("Header"),(0,f.jsx)("span",{className:"inline-block ml-1 align-middle",children:t.isSorted?t.isSortedDesc?(0,f.jsx)(l.Z,{width:12}):(0,f.jsx)(a.Z,{width:12}):""})))))))}),(0,f.jsx)("tbody",Z(Z({},o()),{},{children:m.map(((e,n)=>(E(e),(0,f.jsx)(c(),{href:{pathname:"/analytics/pools/".concat(e.original.pair.id),query:{chainId:t}},passHref:!0,children:(0,d.createElement)("tr",Z(Z({},e.getRowProps()),{},{key:n,className:i.vu}),e.cells.map(((t,n)=>(0,f.jsx)("td",Z(Z({},t.getCellProps()),{},{className:(0,i.zm)(n,e.cells.length),children:t.render("Cell")}),n))))},n))))}))]}))}),(0,f.jsx)(s.a,{pageIndex:_,pageSize:T,totalItems:v.length,gotoPage:g,canPreviousPage:x,canNextPage:O,loading:!v.length})]})}},68359:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(59499),l=n(14744),a=n(56785),s=n(20701),i=n(40334),o=n(26702),c=n(22680),d=n(11163),u=n(2962),h=n(8100),v=n(85893);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const f=[{text:"1W",length:604800},{text:"1M",length:2629746},{text:"1Y",length:31556952},{text:"ALL",length:1/0}];function p(e){let{fallback:t}=e;return(0,v.jsx)(h.J$,{value:{fallback:t},children:(0,v.jsx)(x,{})})}function x(){var e,t,n,r;const{i18n:m}=(0,l.mV)(),p=(0,d.useRouter)(),x=Number(p.query.chainId),{data:y}=(0,h.ZP)(x?"/api/analytics/dashboard/".concat(x):null,(e=>fetch(e).then((e=>e.json())))),j={liquidity:null===y||void 0===y?void 0:y.liquidity.chart.map((e=>g(g({},e),{},{x:new Date(1e3*e.x)}))),volume:null===y||void 0===y?void 0:y.volume.chart.map((e=>g(g({},e),{},{x:new Date(1e3*e.x)})))};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u.PB,{title:"SteamX Analytics"}),(0,v.jsx)(c.CV,{className:"sm:!flex-row justify-between items-center",pattern:"bg-bubble",children:(0,v.jsxs)("div",{children:[(0,v.jsx)(a.Z,{variant:"h2",className:"text-high-emphesis",weight:700,children:m._(m._("SteamX Analytics."))}),(0,v.jsx)(a.Z,{variant:"sm",weight:400,children:m._(m._("Dive deeper in the analytics of SteamX Bar, BentoBox, Pools, Farms and Tokens."))})]})}),(0,v.jsx)(c.A9,{children:(0,v.jsxs)("div",{className:"flex flex-col w-full gap-10",children:[(0,v.jsx)("div",{className:"text-2xl font-bold text-high-emphesis",children:"Overview"}),(0,v.jsxs)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[(0,v.jsx)(i.Z,{header:"TVL",subheader:"SteamX AMM",figure:null!==(e=null===y||void 0===y?void 0:y.liquidity.value)&&void 0!==e?e:0,change:null!==(t=null===y||void 0===y?void 0:y.liquidity.change)&&void 0!==t?t:0,chart:j.liquidity,defaultTimespan:"1M",timespans:f}),(0,v.jsx)(i.Z,{header:"Volume",subheader:"SteamX AMM",figure:null!==(n=null===y||void 0===y?void 0:y.volume.value)&&void 0!==n?n:0,change:null!==(r=null===y||void 0===y?void 0:y.volume.change)&&void 0!==r?r:0,chart:j.volume,defaultTimespan:"1M",timespans:f})]}),(0,v.jsxs)("div",{className:"pt-4",children:[(0,v.jsx)(o.Z,{chainId:x}),(0,v.jsx)(s.Z,{chainId:x})]})]})})]})}},95382:function(e,t,n){"use strict";n.d(t,{AE:function(){return r.AE},jr:function(){return r.jr}});var r=n(731)},83898:function(e,t,n){"use strict";n.d(t,{i0:function(){return r.i0},zr:function(){return r.zr}});var r=n(73232)},44813:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/analytics",function(){return n(68359)}])},55929:function(e,t,n){"use strict";var r=n(67294);const l=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z",clipRule:"evenodd"}))}));t.Z=l},83567:function(e,t,n){"use strict";var r=n(67294);const l=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"}))}));t.Z=l},13342:function(e,t,n){"use strict";var r=n(67294);const l=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}))}));t.Z=l},94323:function(e,t,n){"use strict";var r=n(67294);const l=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"}))}));t.Z=l},51183:function(e,t,n){"use strict";var r=n(67294);const l=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"}))}));t.Z=l},909:function(e,t,n){"use strict";function r(e,t){return null==e||null==t?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function l(e,t){return null==e||null==t?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function a(e){let t,n,a;function i(e,r,l=0,a=e.length){if(l<a){if(0!==t(r,r))return a;do{const t=l+a>>>1;n(e[t],r)<0?l=t+1:a=t}while(l<a)}return l}return 2!==e.length?(t=r,n=(t,n)=>r(e(t),n),a=(t,n)=>e(t)-n):(t=e===r||e===l?e:s,n=e,a=e),{left:i,center:function(e,t,n=0,r=e.length){const l=i(e,t,n,r-1);return l>n&&a(e[l-1],t)>-a(e[l],t)?l-1:l},right:function(e,r,l=0,a=e.length){if(l<a){if(0!==t(r,r))return a;do{const t=l+a>>>1;n(e[t],r)<=0?l=t+1:a=t}while(l<a)}return l}}}function s(){return 0}n.d(t,{Z:function(){return a}})}},function(e){e.O(0,[8882,6541,8769,9774,2888,179],(function(){return t=44813,e(e.s=t);var t}));var t=e.O();_N_E=t}]);