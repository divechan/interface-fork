(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8009],{44516:function(e,t,n){"use strict";var r=n(59499),a=n(14744),i=n(56785),s=n(89046),c=n(67294),l=n(79521),o=n(85893);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.config,n=e.onSelect,r=(0,a.mV)().i18n,u=(0,l.useTable)(t,l.useSortBy,l.usePagination,l.useFlexLayout),h=u.getTableProps,f=u.getTableBodyProps,p=u.headerGroups,m=u.prepareRow,v=u.page;return(0,o.jsx)("div",{className:s._O,children:(0,o.jsxs)("table",d(d({id:"asset-balances-table"},h()),{},{className:s.RR,children:[(0,o.jsx)("thead",{children:p.map((function(e,t){return(0,c.createElement)("tr",d(d({},e.getHeaderGroupProps()),{},{key:t}),e.headers.map((function(t,n){return(0,c.createElement)("th",d(d({},t.getHeaderProps(t.getSortByToggleProps())),{},{key:n,className:(0,s.G0)(n,e.headers.length)}),t.render("Header"))})))}))}),(0,o.jsx)("tbody",d(d({},f()),{},{className:"h-[65px]",children:v.length>0?v.map((function(e,t){return m(e),(0,c.createElement)("tr",d(d({},e.getRowProps()),{},{key:t,onClick:function(){return n&&n(e)},className:s.vu}),e.cells.map((function(t,n){return(0,o.jsx)("td",d(d({},t.getCellProps()),{},{className:(0,s.zm)(n,e.cells.length),children:t.render("Cell")}),n)})))})):(0,o.jsx)(i.Z,{variant:"xs",className:"text-center text-low-emphesis h-[60px] flex items-center justify-center",children:r._(r._("No balances"))})}))]}))})}},45572:function(e,t,n){"use strict";var r=n(610),a=n.n(r),i=n(77082),s=n(15003),c=n(56785),l=n(31969),o=n(29325),u=n(12614),d=n(41664),h=n.n(d),f=n(67294),p=n(30710),m=n(85893);t.Z=function(e){var t=e.account,n=e.chainId,r=e.hideAccount,d=void 0!==r&&r,v=(0,u.aQ)().library,x=(0,f.useState)(!1),y=x[0],g=x[1],b=(0,o.Z)(null!==t&&void 0!==t?t:void 0).ENSName;return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:"flex items-center gap-4",onClick:function(){return g(!y)},children:[t&&(0,m.jsx)("div",{className:"border-2 rounded-full",children:(0,m.jsx)(a(),{size:64,address:t,defaultComponent:(0,m.jsx)(p.default,{seed:t,size:16,className:"rounded-full"}),provider:v})}),(0,m.jsxs)("div",{className:"flex flex-col",children:[t&&(0,m.jsx)(h(),{href:(0,l.E8)(n,t,"address"),passHref:!0,children:(0,m.jsx)("a",{target:"_blank",children:(0,m.jsxs)(c.Z,{variant:"h3",className:"flex gap-1 cursor-pointer text-high-emphesis hover:text-blue-100",weight:700,children:[b||(t?(0,l.Xn)(t):"")," ",(0,m.jsx)(i.Z,{width:20})]})})}),t&&!d&&(0,m.jsx)(s.Z,{toCopy:t,className:"opacity-100 text-primary",children:(0,l.Xn)(t)})]})]})})}},37387:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(14744),a=n(56785),i=n(27812),s=(n(32601),n(44516)),c=n(17141),l=n(85843),o=n(26797),u=n(50484),d=n(31969),h=n(25361),f=n(41664),p=n.n(f),m=n(67294),v=n(85893),x=n(59499),y=n(31518),g=n(17988),b=n(84329);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,x.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(e){var t=e.account,n=e.chainId,r=function(e){var t=e.account,n=e.chainId,r=(0,b.T5)({chainId:n}).data,a=(0,b.Qq)({chainId:n,variables:{where:{user:null===t||void 0===t?void 0:t.toLowerCase(),liquidityTokenBalance_gt:0}},shouldFetch:!!n&&!!t}),i=(0,b.__)({chainId:n,variables:{where:{id_in:null===a||void 0===a?void 0:a.map((function(e){return e.pair.id}))}},shouldFetch:!!a}).data,s=(0,b.__)({chainId:n,variables:{block:r,where:{id_in:null===a||void 0===a?void 0:a.map((function(e){return e.pair.id}))}},shouldFetch:!!a}).data;return(0,m.useMemo)((function(){return a&&i?a.map((function(e){var t,r=i.find((function(t){return t.id===e.pair.id})),a=null!==(t=null===s||void 0===s?void 0:s.find((function(t){return t.id===e.pair.id})))&&void 0!==t?t:r;return{id:e.id,assets:[r.token0,r.token1].map((function(e){return new y.WU(n,e.id,Number(e.decimals),e.symbol,e.name)})),type:g.W4.ConstantProduct,swapFeePercent:.3,twapEnabled:!0,value:e.liquidityTokenBalance/r.totalSupply*r.reserveUSD,apy:(0,d.g5)({volume:r.volumeUSD-a.volumeUSD,liquidity:r.reserveUSD,days:7}),legacy:!0}})):void 0}),[a,i,s,n])}({account:t,chainId:n}),f=function(e){var t=e.account,n=e.chainId,r=(0,b.T5)({chainId:n}).data,a=(0,b.Pm)({chainId:n,variables:{where:{user:null===t||void 0===t?void 0:t.toLowerCase(),balance_gt:0}},shouldFetch:!!n&&!!t}).data,i=(0,h.G_)({chainId:n,variables:{where:{id_in:null===a||void 0===a?void 0:a.map((function(e){return e.id}))}},shouldFetch:!!a}),s=(0,h.G_)({chainId:n,variables:{where:{id_in:null===a||void 0===a?void 0:a.map((function(e){return e.id}))},block:r},shouldFetch:!!a||!!r});return(0,m.useMemo)((function(){return a&&i&&s?a.map((function(e){var t,n=i.find((function(t){return t.address===e.id})),r=s.find((function(t){return t.address===e.id}));return r&&(t=(0,d.g5)({volume:n.volumeUSD-r.volumeUSD,liquidity:n.liquidityUSD,days:7})),w(w({},e),{},{apy:t})})):[]}),[i,s,a])}({account:t,chainId:n}),x=function(e){var t=e.positions,n=e.chainId,r=(0,m.useMemo)((function(){return[{Header:"Assets",accessor:"assets",className:"text-left",Cell:function(e){var t=e.value,n=e.row.original;return(0,v.jsx)(l.y,{assets:t,twapEnabled:n.twapEnabled})},filter:o._},{Header:"Pool Type",accessor:"type",maxWidth:100,className:"text-left hidden lg:flex",Cell:function(e){return(0,v.jsx)(c.Z,{label:e.row.original.legacy?"Legacy":u.kv[e.value],color:u.bG[e.value]})},filter:function(e,t,n){return e.filter((function(e){return!n.length||n.includes(e.values.type)}))}},{Header:"Fee Tier",accessor:"swapFeePercent",maxWidth:100,className:"text-left hidden lg:flex",Cell:function(e){return(0,v.jsxs)("span",{children:[e.value,"%"]})},filter:o.S},{id:"value",Header:"Value",accessor:"value",maxWidth:100,className:"text-right flex justify-end",Cell:function(e){return(0,v.jsxs)(a.Z,{weight:700,className:"w-full text-right text-high-emphesis",children:["$",e.value.toFixed(2)]})}},{Header:"APY",accessor:"apy",maxWidth:100,className:"text-right flex justify-end",Cell:function(e){var r,i=e.row,s=e.value,c=(0,h.IA)({chainId:n,variables:{where:{id_in:null===t||void 0===t?void 0:t.map((function(e){return e.id.toLowerCase()}))}},shouldFetch:!!n&&!!t}).data;return(0,v.jsx)(a.Z,{weight:700,className:"w-full text-right text-high-emphesis",children:(0,d.T3)(null!==s&&void 0!==s?s:null===c||void 0===c||null===(r=c[i.id])||void 0===r?void 0:r.apy)})}},{id:"actions",Header:"Actions",accessor:"type",maxWidth:100,className:"text-right flex justify-end",cellClassName:"justify-end",Cell:function(e){var t=e.row.original;return t.legacy?(0,v.jsxs)("div",{className:"space-x-4",children:[(0,v.jsx)(p(),{href:{pathname:"/add",query:{tokens:t.assets.map((function(e){return e.address}))}},children:(0,v.jsx)("a",{className:"text-sm rounded-full text-blue",children:"Add"})}),(0,v.jsx)(p(),{href:{pathname:"/remove",query:{tokens:t.assets.map((function(e){return e.address}))}},children:(0,v.jsx)("a",{className:"text-sm rounded-full text-blue",children:"Remove"})})]}):(0,v.jsx)(p(),{href:{pathname:"/trident/pool",query:{tokens:t.assets.map((function(e){return e.address})),fee:100*t.swapFeePercent,twap:t.twapEnabled}},children:(0,v.jsx)("a",{className:"text-sm rounded-full text-blue",children:"Manage"})})}}]}),[n,t]),i=m.useMemo((function(){return{minWidth:0}}),[]);return(0,m.useMemo)((function(){return{config:{columns:r,data:t||[],defaultColumn:i,initialState:{pageSize:15,sortBy:[{id:"value",desc:!0}]},autoResetFilters:!1}}}),[r,i,t])}({positions:[].concat((0,i.Z)(r||[]),(0,i.Z)(f||[])),chainId:n}),j=x.config;return(0,v.jsx)(s.Z,{config:j})},O=n(45572),P=n(22680),_=n(11163),k=function(){var e=(0,r.mV)().i18n,t=(0,_.useRouter)(),n=t.query.account,i=t.query.account?Number(t.query.chainId):void 0;return n&&i?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(P.CV,{pattern:"bg-binary",children:(0,v.jsx)(O.Z,{account:n,chainId:i})}),(0,v.jsxs)(P.A9,{children:[(0,v.jsx)(a.Z,{variant:"lg",className:"text-high-emphesis",weight:700,children:e._(e._("SteamX Liquidity Positions"))}),(0,v.jsx)("div",{className:"flex flex-col justify-between gap-8",children:(0,v.jsx)(N,{account:n,chainId:i})})]})]}):null};k.Layout=P.ZP;var C=k},25174:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/liquidity",function(){return n(37387)}])},77082:function(e,t,n){"use strict";var r=n(67294);const a=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"}))}));t.Z=a}},function(e){e.O(0,[8306,8529,9613,9521,7230,7032,3625,9774,2888,179],(function(){return t=25174,e(e.s=t);var t}));var t=e.O();_N_E=t}]);