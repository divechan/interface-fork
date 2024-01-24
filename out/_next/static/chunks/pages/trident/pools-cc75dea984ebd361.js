(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1874],{92552:function(e,s,t){"use strict";var r=t(59499),a=t(4730),l=(t(67294),t(85893));const n=["set","className","checked"];function i(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?i(Object(t),!0).forEach((function(s){(0,r.Z)(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}s.Z=function(e){let{set:s,className:t="",checked:r}=e,i=(0,a.Z)(e,n);return(0,l.jsx)("div",{className:"relative flex items-center justify-center",children:(0,l.jsx)("input",c({type:"checkbox",onChange:e=>s?s(e.target.checked):null,className:"border border-dark-700 checked:bg-gradient-to-r checked:border-[3px] checked:from-blue checked:to-pink cursor-pointer appearance-none h-5 w-5 rounded-[4px] bg-dark-900 disabled:bg-dark-1000 disabled:border-dark-800 ".concat(t),checked:r},i))})}},44345:function(e,s,t){"use strict";var r=t(56727),a=t(5506),l=t(67294),n=t(56785),i=t(85893);s.Z=e=>{let{title:s,open:t,onClose:c,children:o,closeTrigger:d}=e;return(0,i.jsx)(r.uT.Root,{show:t,as:l.Fragment,children:(0,i.jsx)(r.Vq,{as:"div",static:!0,className:"fixed inset-0 overflow-hidden z-20",open:t,onClose:c,children:(0,i.jsxs)("div",{className:"absolute inset-0 overflow-hidden",children:[(0,i.jsx)(r.uT.Child,{as:l.Fragment,enter:"ease-in-out duration-200",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,i.jsx)(r.Vq.Overlay,{className:"absolute inset-0 bg-black bg-opacity-75 transition-opacity"})}),(0,i.jsx)("div",{className:"max-h-[fit-content] absolute bottom-0 fixed right-0 left-0 w-full flex",children:(0,i.jsx)(r.uT.Child,{as:l.Fragment,enter:"transform transition ease-in-out duration-200 sm:duration-700",enterFrom:"translate-y-full",enterTo:"translate-y-0",leave:"transform transition ease-in-out duration-200 sm:duration-700",leaveFrom:"translate-y-0",leaveTo:"translate-y-full",children:(0,i.jsx)("div",{className:"w-full rounded-t overflow-hidden",children:s?(0,i.jsxs)("div",{className:"flex flex-col shadow-xl overflow-y-auto h-full bg-gradient-to-r from-blue to-pink",children:[(0,i.jsx)("div",{className:"p-5",children:(0,i.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,i.jsx)(n.Z,{variant:"lg",weight:700,className:"text-high-emphesis",children:s}),d||(0,i.jsxs)("button",{onClick:c,children:[(0,i.jsx)("span",{className:"sr-only",children:"Close panel"}),(0,i.jsx)(a.Z,{className:"h-6 w-6 text-high-emphesis","aria-hidden":"true"})]})]})}),o]}):o})})})]})})})}},91282:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return Y}});var r=t(14744),a=t(22680),l=t(12614),n=t(41664),i=t.n(n),c=t(67294),o=t(71862),d=t(56785),h=t(85893);const u=()=>{const{i18n:e}=(0,r.mV)(),{account:s}=(0,l.aQ)();return(0,h.jsxs)(a.CV,{className:"sm:!flex-row justify-between items-center",pattern:"bg-bubble",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)(d.Z,{variant:"h2",className:"text-high-emphesis",weight:700,children:e._(e._("Provide liquidity & earn."))}),(0,h.jsx)(d.Z,{variant:"sm",weight:400,children:e._(e._("Earn LP fees by depositing tokens to the platform."))})]}),(0,h.jsxs)("div",{className:"flex gap-3",children:[s&&(0,h.jsx)(i(),{href:"/account/liquidity?account=".concat(s),passHref:!0,children:(0,h.jsx)(o.ZP,{color:"blue",size:"sm",children:e._(e._("My Positions"))})}),(0,h.jsx)(i(),{href:"/trident/create",passHref:!0,children:(0,h.jsx)(o.ZP,{id:"btn-create-new-pool",size:"sm",children:e._(e._("Create Pool"))})})]})]})};var x=t(69743),p=t(26822),m=t(16339),f=t(17988),g=t(92552),j=t(44345);const v=e=>{let{children:s,title:t}=e;return(0,h.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,h.jsx)(d.Z,{variant:"sm",weight:700,children:t}),(0,h.jsx)("div",{className:"flex flex-col gap-4",children:s})]})},w=e=>{let{title:s,checked:t,setter:r}=e;return(0,h.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,h.jsx)(g.Z,{checked:t,set:r}),(0,h.jsx)("span",{className:"text-xs",children:s})]})},b=(e,s,t)=>{s.includes(e)?t(s.filter((s=>s!==e))):t([...s,e])},y=()=>{const{feeTiers:e}=(0,m.C)(p.cd),s=(0,m.T)();return(0,h.jsx)(v,{title:"Fee Tiers",children:[f.at.HIGH,f.at.DEFAULT,f.at.MEDIUM,f.at.LOW].map((t=>(0,h.jsx)(w,{title:"".concat(t/100,"%"),checked:e.includes(t),setter:()=>b(t,e,(e=>s((0,p.Gu)(e))))},t)))})},N=()=>{const{showTWAPOnly:e}=(0,m.C)(p.cd),s=(0,m.T)();return(0,h.jsxs)("div",{className:"hidden lg:flex flex-col gap-6 w-52 pt-2",children:[(0,h.jsx)(v,{title:"TWAP Oracles",children:(0,h.jsx)(w,{title:"Show oracle pairs only",checked:e,setter:()=>s((0,p.M8)(!e))})}),(0,h.jsx)(y,{})]})},k=()=>{const{showTWAPOnly:e}=(0,m.C)(p.cd),s=(0,m.T)();return(0,h.jsxs)("div",{className:"flex flex-col gap-5 p-5",children:[(0,h.jsx)("div",{className:"flex items-center justify-between gap-3",children:(0,h.jsx)(d.Z,{variant:"lg",weight:700,className:"text-high-emphesis",children:"TWAP Oracles:"})}),(0,h.jsxs)("div",{className:"flex flex-row gap-3 items-center",onClick:()=>s((0,p.M8)(!e)),children:[(0,h.jsx)(g.Z,{checked:e}),(0,h.jsx)(d.Z,{className:"text-secondary",children:"Show oracle pairs only"})]})]})},P=()=>{const{feeTiers:e}=(0,m.C)(p.cd),s=(0,m.T)();return(0,h.jsxs)("div",{className:"flex flex-col gap-5 p-5",children:[(0,h.jsx)("div",{className:"flex items-center justify-between gap-3",children:(0,h.jsx)(d.Z,{variant:"lg",weight:700,className:"text-high-emphesis",children:"By Fee Tier:"})}),[f.at.HIGH,f.at.DEFAULT,f.at.MEDIUM,f.at.LOW].map((t=>(0,h.jsxs)("div",{className:"flex flex-row gap-3 items-center",onClick:()=>b(t,e,(e=>s((0,p.Gu)(e)))),children:[(0,h.jsx)(g.Z,{checked:e.includes(t)}),(0,h.jsxs)(d.Z,{className:"text-secondary",children:[t/100,"%"]})]},t)))]})},O=()=>{const{i18n:e}=(0,r.mV)(),{0:s,1:t}=(0,c.useState)(!1),{feeTiers:a,showTWAPOnly:l,farmsOnly:n}=(0,m.C)(p.cd),i=n||l||a.length>0;return(0,h.jsxs)("div",{className:"lg:hidden",children:[(0,h.jsx)("div",{onClick:()=>t(!0),className:"hover:cursor-pointer",children:(0,h.jsx)("svg",{width:"25",height:"20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,h.jsx)("path",{d:"M10 0a1.5 1.5 0 0 1 1.5 1.5V3h12a1.5 1.5 0 0 1 0 3h-12v1.5a1.5 1.5 0 0 1-3 0v-6A1.5 1.5 0 0 1 10 0ZM0 4.5A1.5 1.5 0 0 1 1.5 3H5a1.5 1.5 0 1 1 0 3H1.5A1.5 1.5 0 0 1 0 4.5ZM13 14H1.5a1.5 1.5 0 0 0 0 3H13a1.5 1.5 0 0 0 0-3Zm3.5 1.5v-3a1.5 1.5 0 0 1 3 0V14h4a1.5 1.5 0 0 1 0 3h-4v1.5a1.5 1.5 0 0 1-3 0v-3Z",fill:i?"#f139c3":"#E3E3E3"})})}),(0,h.jsx)(j.Z,{title:e._(e._("Select Filters")),open:s,onClose:()=>t(!1),closeTrigger:(0,h.jsx)(o.ZP,{size:"sm",onClick:()=>t(!1),children:(0,h.jsx)("span",{className:"px-3",children:e._(e._("Apply & Close"))})}),children:(0,h.jsx)("div",{className:"bg-dark-700 rounded-t",children:(0,h.jsxs)("div",{className:"bg-dark-800 rounded-t",children:[(0,h.jsx)(k,{}),(0,h.jsx)("div",{className:"relative bg-dark-900 rounded-t",children:(0,h.jsx)(P,{})})]})})})]})},T=()=>{const{i18n:e}=(0,r.mV)(),s=(0,m.T)();return(0,h.jsxs)("div",{className:"flex flex-grow items-center gap-4 w-full sm:w-auto",children:[(0,h.jsxs)("div",{className:"flex flex-grow gap-2 items-center rounded border border-dark-800 bg-dark-900 bg-opacity-50 py-2 px-3 w-full sm:w-auto",children:[(0,h.jsx)(x.Z,{strokeWidth:3,width:20,height:20}),(0,h.jsx)("input",{className:"bg-transparent text-high-emphesis w-full placeholder:text-low-emphesis",placeholder:e._(e._("Search by token or pair")),onChange:e=>s((0,p.jr)(e.target.value))})]}),(0,h.jsx)(O,{})]})};var C=t(56727),_=t(13342),E=t(77062);const Z=()=>{const{sort:e}=(0,m.C)(p.cd),s=(0,m.T)();return(0,h.jsx)("div",{className:"flex gap-2 items-center",children:(0,h.jsxs)(C.v2,{as:"div",className:"relative inline-block text-left",children:[(0,h.jsx)("div",{children:(0,h.jsx)(C.v2.Button,{className:"w-full px-4 py-2.5 text-sm font-bold bg-transparent border rounded shadow-sm text-primary border-dark-800 hover:bg-dark-900",children:(0,h.jsxs)("div",{className:"flex flex-row",children:[e,(0,h.jsx)(_.Z,{className:"w-5 h-5 ml-2 -mr-1","aria-hidden":"true"})]})})}),(0,h.jsx)(C.uT,{as:c.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,h.jsx)(C.v2.Items,{static:!0,className:"w-full absolute rounded mt-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-dark-800 bg-dark-1000 shadow-md",children:Object.values(p.JD).filter((s=>s!==e)).map(((e,t)=>(0,h.jsx)(C.v2.Item,{children:t=>{let{active:r}=t;return(0,h.jsx)("div",{className:(0,E.A)(r?"bg-dark-700 text-high-emphesis":"text-primary","group flex items-center px-4 py-2 text-sm hover:bg-dark-900 hover:cursor-pointer focus:bg-dark-900 rounded font-bold"),onClick:()=>{s((0,p.Ew)(e))},children:e})}},t)))})})]})})};var F=t(59499),S=t(85874),D=t(89046),H=t(79521),A=t(25675),M=t.n(A);const L=()=>{const{i18n:e}=(0,r.mV)(),{searchQuery:s}=(0,m.C)(p.cd);return(0,h.jsxs)("div",{className:"flex flex-row items-center justify-between px-2 py-2",children:[(0,h.jsx)(d.Z,{variant:"base",className:"text-high-emphesis",weight:700,children:s?"".concat(e._(e._("Search results for"))," '").concat(s,"'"):e._(e._("Top Liquidity Pools"))}),(0,h.jsxs)("div",{className:"flex gap-1",children:[(0,h.jsx)(M(),{src:"https://app.sushi.com/images/rss.svg",width:16,height:16,alt:"rss icon"}),(0,h.jsx)("div",{className:"text-xs text-secondary",children:e._(e._("*Pairs with this symbol have a TWAP oracle."))})]})]})},W=(e,s)=>{(e=>{const{searchQuery:s,showTWAPOnly:t,feeTiers:r}=(0,m.C)(p.cd);(0,c.useMemo)((()=>e("assets",{searchQuery:s,twapEnabled:t})),[s,e,t]),(0,c.useMemo)((()=>e("swapFee",{feeTiersSelected:r})),[r,e])})(e),(e=>{const{sort:s}=(0,m.C)(p.cd);(0,c.useLayoutEffect)((()=>{e(G[s],!0)}),[s,e])})(s)};var R=t(17141),V=t(47448),z=t(25361),I=t(85843),U=t(26797);function B(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,r)}return t}function q(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?B(Object(t),!0).forEach((function(s){(0,F.Z)(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}const G={[p.JD.TVL]:"liquidityUSD",[p.JD.VOLUME]:"volumeUSD",[p.JD.APY]:"apy"};var Q=()=>{const{i18n:e}=(0,r.mV)(),{config:s,loading:t,error:a}=(()=>{const{chainId:e}=(0,l.aQ)(),{data:s,error:t,isValidating:r}=(0,z.fv)({chainId:e}),a=(0,c.useMemo)((()=>[{Header:"Assets",accessor:"assets",Cell:e=>{let{value:s,row:{original:t}}=e;return(0,h.jsx)(I.y,{assets:[t.token0,t.token1],twapEnabled:t.twapEnabled})},filter:U._},{Header:"Pool Type",accessor:"type",maxWidth:100,Cell:e=>(0,h.jsx)(R.Z,{label:"Classic",color:"purple"}),filter:(e,s,t)=>e.filter((e=>!t.length||t.includes(e.values.type)))},{Header:"Fee Tier",accessor:"swapFee",maxWidth:100,Cell:e=>(0,h.jsxs)("span",{children:[e.value/100,"%"]}),filter:U.S},{Header:"TVL",accessor:"liquidityUSD",maxWidth:100,Cell:e=>(0,h.jsx)("span",{children:(0,V.uf)(e.value,!0)})},{Header:"Volume",accessor:"volumeUSD",maxWidth:100,Cell:e=>(0,h.jsx)("span",{children:(0,V.uf)(e.value,!0)})},{Header:"APY",accessor:"apy",maxWidth:100,Cell:e=>(0,h.jsx)("span",{children:(0,V.T3)(e.value,"NEW")})}]),[]);return(0,c.useMemo)((()=>({config:{columns:a,data:null!==s&&void 0!==s?s:[],initialState:{pageSize:15,sortBy:[{id:"liquidityUSD",desc:!0},{id:"volumeUSD",desc:!0}]},autoResetFilters:!1},loading:r,error:t})),[a,s,t,r])})(),{getTableProps:n,getTableBodyProps:o,headerGroups:d,rows:u,page:x,gotoPage:p,canPreviousPage:m,canNextPage:f,prepareRow:g,setFilter:j,toggleSortBy:v,state:{pageIndex:w,pageSize:b}}=(0,H.useTable)(s,H.useFlexLayout,H.useFilters,H.useSortBy,H.useFlexLayout,H.usePagination);return W(j,v),(0,h.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,h.jsx)(L,{}),(0,h.jsx)("div",{className:D._O,children:(0,h.jsxs)("table",q(q({},n()),{},{className:D.RR,children:[(0,h.jsx)("thead",{children:d.map(((s,r)=>(0,c.createElement)("tr",q(q({},s.getHeaderGroupProps()),{},{key:r}),s.headers.map(((r,l)=>(0,c.createElement)("th",q(q({},r.getHeaderProps()),{},{key:l,className:(0,D.G0)(l,s.headers.length)}),r.render("Header"),0===l&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-blue inline-block ml-3 transition ".concat(t?"opacity-100":"opacity-0")}),a&&(0,h.jsx)("span",{className:"ml-2 text-sm italic text-red",children:e._(e._("\u26a0\ufe0f Loading Error"))})]})))))))}),(0,h.jsx)("tbody",q(q({},o()),{},{children:x.map(((e,s)=>(g(e),(0,h.jsx)(i(),{href:{pathname:"/trident/pool",query:{tokens:[e.original.token0.address,e.original.token1.address],fee:e.original.swapFee,twap:e.original.twapEnabled}},passHref:!0,children:(0,h.jsx)("tr",q(q({},e.getRowProps()),{},{className:D.vu,children:e.cells.map(((s,t)=>(0,h.jsx)("td",q(q({},s.getCellProps()),{},{className:(0,D.zm)(t,e.cells.length),children:s.render("Cell")}),t)))}))},s))))}))]}))}),(0,h.jsx)(S.a,{pageIndex:w,pageSize:b,totalItems:u.length,gotoPage:p,canPreviousPage:m,canNextPage:f,loading:t})]})},J=t(2962);const X=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(J.PB,{title:"Pools"}),(0,h.jsx)(u,{}),(0,h.jsx)(a.A9,{children:(0,h.jsxs)("div",{className:"flex gap-6",children:[(0,h.jsx)(N,{}),(0,h.jsx)("div",{className:"flex w-full",children:(0,h.jsxs)("div",{className:"flex flex-col w-full gap-10",children:[(0,h.jsxs)("div",{className:"flex flex-col items-center justify-between gap-4 sm:flex-row",children:[(0,h.jsx)(T,{}),(0,h.jsx)(Z,{})]}),(0,h.jsx)(Q,{})]})})]})})]});X.Layout=a.ZP;var Y=X},62265:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trident/pools",function(){return t(91282)}])},94323:function(e,s,t){"use strict";var r=t(67294);const a=r.forwardRef((function(e,s){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:s},e),r.createElement("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"}))}));s.Z=a},51183:function(e,s,t){"use strict";var r=t(67294);const a=r.forwardRef((function(e,s){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:s},e),r.createElement("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"}))}));s.Z=a},69743:function(e,s,t){"use strict";var r=t(67294);const a=r.forwardRef((function(e,s){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:s},e),r.createElement("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"}))}));s.Z=a}},function(e){e.O(0,[8306,8529,9613,8882,6541,7032,8769,5228,9774,2888,179],(function(){return s=62265,e(e.s=s);var s}));var s=e.O();_N_E=s}]);