(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8926],{20701:function(e,t,n){"use strict";n.d(t,{Z:function(){return B}});var r=n(59499),a=n(55929),l=n(83567),s=n(85874),i=n(89046),o=n(41664),c=n.n(o),u=n(67294),d=n(79521),h=n(14744),v=n(56785),f=n(16339),g=n(83898),x=n(85893);const m=()=>{const{i18n:e}=(0,h.mV)(),{searchQuery:t}=(0,f.C)(g.i0);return(0,x.jsx)("div",{className:"flex flex-row items-center justify-between px-2 py-2",children:(0,x.jsx)(v.Z,{variant:"base",className:"text-high-emphesis",weight:700,children:t?"".concat(e._(e._("Search results for"))," '").concat(t,"'"):e._(e._("Top Tokens"))})})};var p=n(73232);const w=e=>{(e=>{const{searchQuery:t}=(0,f.C)(p.i0);(0,u.useMemo)((()=>e("token",{searchQuery:t})),[t,e])})(e)};var b=n(19485),j=n(31518),y=n(41626),P=n(44554),N=n(62483),C=n(8100);const k=(e,t,n)=>e.filter((e=>{var t,r,a,l;let{original:s}=e;const i=null===s||void 0===s||null===(t=s.token)||void 0===t||null===(r=t.name)||void 0===r||null===(a=r.concat(null===s||void 0===s||null===(l=s.token)||void 0===l?void 0:l.symbol))||void 0===a?void 0:a.toLowerCase();return!n.searchQuery.length||i.includes(n.searchQuery.toLowerCase())}));function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=e=>{let{chainId:t}=e;const{config:n}=(e=>{const t=(0,N.e_)(),{data:n}=(0,C.ZP)(e?"/api/analytics/bentobox/".concat(e):null,(e=>fetch(e).then((e=>e.json())))),r=null===n||void 0===n?void 0:n.bentoBoxTokens,a=(0,u.useMemo)((()=>[{Header:"Name",accessor:"token",maxWidth:100,Cell:n=>{const r=(0,b.getAddress)(n.value.id),a=(0,u.useMemo)((()=>r in t?t[r]:new j.WU(e,r,Number(n.value.decimals),n.value.symbol,n.value.name)),[n,r]);return(0,x.jsxs)("div",{className:"flex items-center gap-2",children:[(0,x.jsx)(y.X,{currency:null!==a&&void 0!==a?a:void 0,className:"!rounded-full",size:36}),n.value.symbol]})},filter:k},{Header:"Price",accessor:"price",minWidth:150,Cell:e=>(0,P.uf)(e.value,!0,void 0,2),align:"right"},{Header:"Liquidity",accessor:"liquidity",minWidth:150,Cell:e=>(0,P.uf)(e.value,!0,!1),align:"right"},{id:"target",Header:"Strategy Target",accessor:"strategy.targetPercentage",minWidth:150,Cell:e=>(0,P.T3)(e.value)},{id:"utilisation",Header:"Strategy Utilization",accessor:"strategy.utilization",minWidth:150,Cell:e=>(0,P.T3)(e.value)},{Header:"APY",accessor:"strategy.apy",minWidth:150,Cell:e=>(0,P.T3)(e.value)}]),[t,e]);return(0,u.useMemo)((()=>({config:{columns:a,data:null!==r&&void 0!==r?r:[],initialState:{sortBy:[{id:"liquidity",desc:!0},{id:"price",desc:!0},{id:"targetPercentage",desc:!0},{id:"utilization",desc:!0},{id:"apy",desc:!0}]},autoResetFilters:!1}})),[a,r])})(t),{getTableProps:r,getTableBodyProps:o,headerGroups:h,rows:v,page:f,gotoPage:g,canPreviousPage:p,canNextPage:O,prepareRow:B,setFilter:R,toggleSortBy:_,state:{pageIndex:E,pageSize:z}}=(0,d.useTable)(n,d.useFlexLayout,d.useFilters,d.useSortBy,d.useFlexLayout,d.usePagination);return w(R),(0,x.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,x.jsx)(m,{}),(0,x.jsx)("div",{className:i._O,children:(0,x.jsxs)("table",Z(Z({},r()),{},{className:i.RR,children:[(0,x.jsx)("thead",{children:h.map(((e,t)=>(0,u.createElement)("tr",Z(Z({},e.getHeaderGroupProps()),{},{key:t}),e.headers.map(((t,n)=>(0,u.createElement)("th",Z(Z({},t.getHeaderProps(t.getSortByToggleProps())),{},{key:n,className:(0,i.G0)(n,e.headers.length)}),t.render("Header"),(0,x.jsx)("span",{className:"inline-block ml-1 align-middle",children:t.isSorted?t.isSortedDesc?(0,x.jsx)(a.Z,{width:12}):(0,x.jsx)(l.Z,{width:12}):""})))))))}),(0,x.jsx)("tbody",Z(Z({},o()),{},{children:f.map(((e,n)=>(B(e),(0,x.jsx)(c(),{href:{pathname:"/analytics/tokens/".concat(e.original.token.id),query:{chainId:t}},passHref:!0,children:(0,u.createElement)("tr",Z(Z({},e.getRowProps()),{},{key:n,className:i.vu}),e.cells.map(((t,n)=>(0,x.jsx)("td",Z(Z({},t.getCellProps()),{},{className:(0,i.zm)(n,e.cells.length),children:t.render("Cell")}),n))))},n))))}))]}))}),(0,x.jsx)(s.a,{pageIndex:E,pageSize:z,totalItems:v.length,gotoPage:g,canPreviousPage:p,canNextPage:O,loading:!v.length})]})}},26510:function(e,t,n){"use strict";var r=n(69743),a=n(14744),l=n(16339),s=n(83898),i=n(85893);t.Z=()=>{const{i18n:e}=(0,a.mV)(),t=(0,l.T)();return(0,i.jsx)("div",{className:"flex items-center flex-grow w-full gap-4 sm:w-auto",children:(0,i.jsxs)("div",{className:"flex items-center flex-grow w-full gap-2 px-3 py-2 bg-opacity-50 border rounded border-dark-800 bg-dark-900 sm:w-auto",children:[(0,i.jsx)(r.Z,{strokeWidth:3,width:20,height:20}),(0,i.jsx)("input",{className:"w-full bg-transparent text-high-emphesis placeholder:text-low-emphesis",placeholder:e._(e._("Search by token name or symbol")),onChange:e=>t((0,s.zr)(e.target.value))})]})})}},28297:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});n(67294);var r=n(85893);function a(e){let{text:t,number:n}=e;return(0,r.jsxs)("div",{className:"w-full py-3 border px-9 border-dark-900 rounded shadow-md bg-[rgba(0,0,0,0.12)]",children:[(0,r.jsx)("div",{className:"whitespace-nowrap",children:t}),(0,r.jsx)("div",{className:"text-2xl font-bold",children:n})]})}},26867:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(14744),a=n(22680),l=(n(67294),n(56785)),s=n(85893);const i=()=>{const{i18n:e}=(0,r.mV)();return(0,s.jsx)(a.CV,{className:"sm:!flex-row justify-between items-center",pattern:"bg-bubble",children:(0,s.jsxs)("div",{children:[(0,s.jsx)(l.Z,{variant:"h2",className:"text-high-emphesis",weight:700,children:e._(e._("BentoBox Analytics."))}),(0,s.jsx)(l.Z,{variant:"sm",weight:400,children:e._(e._("Click on the column name to sort BentoBox tokens by price, liquidity, volume, APY etc..."))})]})})};var o=n(20701),c=n(26510),u=n(28297),d=n(47448),h=n(11163),v=n(2962),f=n(8100);function g(e){let{fallback:t}=e;return(0,s.jsx)(f.J$,{value:{fallback:t},children:(0,s.jsx)(x,{})})}function x(){var e,t,n,r;const l=(0,h.useRouter)(),g=Number(l.query.chainId),{data:x}=(0,f.ZP)(g?"/api/analytics/bentobox/".concat(g):null,(e=>fetch(e).then((e=>e.json()))));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v.PB,{title:"BentoBox Anlytics"}),(0,s.jsx)(i,{}),(0,s.jsxs)(a.A9,{children:[(0,s.jsx)("div",{className:"text-2xl font-bold text-high-emphesis",children:"KPIs"}),(0,s.jsxs)("div",{className:"flex flex-row space-x-4 overflow-auto",children:[(0,s.jsx)(u.Z,{text:"TVL",number:(0,d.uf)(null===x||void 0===x?void 0:x.bentoBox.tvl)}),(0,s.jsx)(u.Z,{text:"User Count",number:(null===x||void 0===x||null===(e=x.bentoBox)||void 0===e?void 0:e.userCount)||0}),(0,s.jsx)(u.Z,{text:"Token Count",number:(null===x||void 0===x||null===(t=x.bentoBox)||void 0===t?void 0:t.tokenCount)||0}),(0,s.jsx)(u.Z,{text:"Flashloan Count",number:(null===x||void 0===x||null===(n=x.bentoBox)||void 0===n?void 0:n.flashloanCount)||0}),(0,s.jsx)(u.Z,{text:"Transaction Count",number:(null===x||void 0===x||null===(r=x.bentoBox)||void 0===r?void 0:r.transactionCount)||0})]}),(0,s.jsxs)("div",{className:"flex flex-col w-full gap-10",children:[(0,s.jsx)(c.Z,{}),(0,s.jsx)(o.Z,{chainId:g})]})]})]})}},83898:function(e,t,n){"use strict";n.d(t,{i0:function(){return r.i0},zr:function(){return r.zr}});var r=n(73232)},22160:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/analytics/bentobox",function(){return n(26867)}])},55929:function(e,t,n){"use strict";var r=n(67294);const a=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z",clipRule:"evenodd"}))}));t.Z=a},83567:function(e,t,n){"use strict";var r=n(67294);const a=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"}))}));t.Z=a},13342:function(e,t,n){"use strict";var r=n(67294);const a=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}))}));t.Z=a},94323:function(e,t,n){"use strict";var r=n(67294);const a=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"}))}));t.Z=a},51183:function(e,t,n){"use strict";var r=n(67294);const a=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"}))}));t.Z=a},69743:function(e,t,n){"use strict";var r=n(67294);const a=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"}))}));t.Z=a}},function(e){e.O(0,[8882,6541,8769,9774,2888,179],(function(){return t=22160,e(e.s=t);var t}));var t=e.O();_N_E=t}]);