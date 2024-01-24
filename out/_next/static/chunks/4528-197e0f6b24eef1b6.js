"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4528],{16078:function(e,i,a){a.d(i,{Z:function(){return L}});var t=a(70028),l=a(67294);var s=l.forwardRef((function(e,i){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:i},e),l.createElement("path",{d:"M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"}))})),n=a(14744),o=a(31518),r=a(42144),d=a(46430),c=a(34189),u=a(56785),m=a(85893);var h=e=>{let{svg:i,onClick:a,label:t}=e;return(0,m.jsx)("div",{className:"border border-dark-700 bg-dark-900 hover:border-dark-600 rounded px-3 py-2.5 w-full cursor-pointer",onClick:a,children:(0,m.jsxs)("div",{className:"flex gap-3 items-center",children:[(0,m.jsx)("div",{className:"w-10 h-10 rounded-full flex items-center justify-center",children:i}),(0,m.jsx)(u.Z,{variant:"sm",className:"text-high-emphesis",weight:700,children:t})]})})},v=a(8825),p=a(62483),x=a(25617);const g=()=>{var e;const i=(0,x.v9)(v.jL);return null!==(e=(0,p.U8)(i))&&void 0!==e?e:void 0};var f=a(50484),b=a(44554),w=a(12614),j=a(16339),_=a(11163);var k=e=>{let{onClose:i}=e;const{chainId:a}=(0,w.aQ)(),t=g(),u=(0,j.T)(),{i18n:p}=(0,n.mV)(),x=(0,_.useRouter)(),{activeModal:k,modalOpen:C}=(0,j.C)(v.jD),N=(0,l.useCallback)((async()=>(0,b.vR)(c.L.TRIDENT,a)?null!==t&&void 0!==t&&t.isNative?x.push("/swap"):x.push("/swap?&tokens=".concat(o.B5[a].symbol,"&tokens=").concat(null===t||void 0===t?void 0:t.wrapped.address)):null!==t&&void 0!==t&&t.isNative?x.push("/swap"):x.push("/swap?inputCurrency=".concat(null===t||void 0===t?void 0:t.wrapped.address))),[a,null===t||void 0===t?void 0:t.isNative,null===t||void 0===t?void 0:t.wrapped.address,x]);return(0,m.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,m.jsx)(d.Z.Header,{header:p._(p._("Available actions")),onClose:i}),(0,m.jsx)(h,{svg:(0,m.jsx)(s,{width:24}),label:p._(p._("Swap {0}",{0:null===t||void 0===t?void 0:t.symbol})),onClick:N}),(0,b.vR)(c.L.BENTOBOX,a)&&(0,m.jsxs)(m.Fragment,{children:[k===f.rO.WALLET_MENU&&(0,m.jsx)(h,{svg:(0,m.jsx)(r.OP,{width:20,height:20}),label:p._(p._("Deposit {0} to BentoBox",{0:null===t||void 0===t?void 0:t.symbol})),onClick:()=>u((0,v.WH)({activeModal:f.rO.DEPOSIT}))}),k===f.rO.BENTOBOX_MENU&&(0,m.jsx)(h,{svg:(0,m.jsx)(r.o,{width:20,height:20}),label:p._(p._("Withdraw {0} to Wallet",{0:null===t||void 0===t?void 0:t.symbol})),onClick:()=>u((0,v.WH)({activeModal:f.rO.WITHDRAW}))})]})]})},C=a(55929),N=a(97436),y=a(71862),q=a(49932),O=a(53389),Z=a(61647),B=a(15393),E=a(22986);var M=e=>{var i;let{onClose:a,onBack:t}=e;const{account:s}=(0,w.aQ)(),c=g(),{rebase:h}=(0,Z.C)(c),{0:v,1:p}=(0,l.useState)(!1),x=(0,E._h)(null!==s&&void 0!==s?s:void 0,c),{data:f}=(0,B.T_)(c?c.wrapped.address:void 0),{deposit:j}=(0,O.x7)(),{0:_,1:k}=(0,l.useState)(),{i18n:M}=(0,n.mV)(),W=(0,O.rO)(),L=c?(0,b.eo)(_,c):void 0;let R=null===L||void 0===L?void 0:L.wrapped;R&&f&&(R=R.add(f));const T=(0,l.useCallback)((async()=>{if(c&&_&&h)try{p(!0),await j(c,h,_.toBigNumber(null===c||void 0===c?void 0:c.decimals))}finally{p(!1),a()}}),[c,j,a,h,_]),H=s?null!==L&&void 0!==L&&L.greaterThan(o.xE)?x?null!==L&&void 0!==L&&L.greaterThan(x)?M._(M._("Insufficient {0} balance",{0:L.currency.symbol})):"":M._(M._("Loading balance")):M._(M._("Enter an amount")):M._(M._("Connect Wallet"));return(0,m.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,m.jsx)(d.Z.Header,{header:M._(M._("Deposit to BentoBox")),onClose:a,onBack:t}),(0,m.jsx)(N.Z,{title:"",currency:c,onChange:e=>k(e),value:_,spendFromWallet:!0}),(0,m.jsx)("div",{className:"flex justify-center -mt-6 -mb-6 z-10",children:(0,m.jsx)("div",{className:"p-1.5 rounded-full bg-dark-800 border border-dark-800 shadow-md border-dark-700",children:(0,m.jsx)(C.Z,{width:14,className:"text-high-emphesis"})})}),(0,m.jsxs)(d.Z.BorderedContent,{className:"bg-dark-900 flex gap-3 px-3",children:[(0,m.jsx)("div",{className:"border border-dark-700 rounded-full w-[48px] h-[48px] flex items-center justify-center shadow-md",children:(0,m.jsx)(r.OP,{width:20,height:20})}),(0,m.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,m.jsx)(u.Z,{variant:"h3",className:_?"text-high-emphesis":"text-secondary",weight:700,children:null===(i=R||f)||void 0===i?void 0:i.toSignificant(6)}),(0,m.jsx)(u.Z,{variant:"xxs",className:"text-secondary",children:M._(M._("Total in BentoBox"))})]})]}),(0,m.jsx)(q.Z,{inputAmounts:[L],tokenApproveOn:null===W||void 0===W?void 0:W.address,children:e=>{let{approved:i,loading:a}=e;const t=!!H||!i||a||v,l=H||M._(M._("Confirm Deposit"));return(0,m.jsx)(y.ZP,{loading:v||a,color:"blue",disabled:t,onClick:T,children:(0,m.jsx)(u.Z,{variant:"sm",weight:700,className:H?"text-low-emphasis":"text-high-emphesis",children:l})})}})]})};var W=e=>{var i;let{onClose:a,onBack:t}=e;const{i18n:s}=(0,n.mV)(),{account:c}=(0,w.aQ)(),{withdraw:h}=(0,O.x7)(),v=g(),p=(0,E._h)(null!==c&&void 0!==c?c:void 0,v),x=(0,B.oZ)(null!==c&&void 0!==c?c:void 0,null===v||void 0===v?void 0:v.wrapped.address),{data:f}=(0,B.T_)(v?v.wrapped.address:void 0),{0:j,1:_}=(0,l.useState)(!1),{0:k,1:q}=(0,l.useState)({value:void 0,isMax:!1}),Z=v?(0,b.eo)(k.value,v):void 0;let M=null===Z||void 0===Z?void 0:Z.wrapped;M&&p&&(M=M.wrapped.add(p.wrapped));const W=(0,l.useCallback)((async()=>{if(v&&k.value)try{_(!0),k.isMax?await h(null===v||void 0===v?void 0:v.wrapped.address,k.value.toBigNumber(null===v||void 0===v?void 0:v.decimals),x):await h(null===v||void 0===v?void 0:v.wrapped.address,k.value.toBigNumber(null===v||void 0===v?void 0:v.decimals))}finally{_(!1),a()}}),[v,k.value,k.isMax,h,x,a]),L=c?null!==Z&&void 0!==Z&&Z.greaterThan(o.xE)?f?null!==Z&&void 0!==Z&&Z.greaterThan(f)?s._(s._("Insufficient {0} balance",{0:Z.currency.symbol})):"":s._(s._("Loading balance")):s._(s._("Enter an amount")):s._(s._("Connect Wallet")),R=!!L||j,T=L||s._(s._("Confirm Withdrawal"));return(0,m.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,m.jsx)(d.Z.Header,{header:s._(s._("Withdraw to wallet")),onClose:a,onBack:t}),(0,m.jsx)(N.Z,{title:"",currency:v,onChange:(e,i)=>q({value:e,isMax:i||!1}),value:k.value,spendFromWallet:!1}),(0,m.jsx)("div",{className:"z-10 flex justify-center -mt-6 -mb-6",children:(0,m.jsx)("div",{className:"p-1.5 rounded-full bg-dark-800 border border-dark-800 shadow-md border-dark-700",children:(0,m.jsx)(C.Z,{width:14,className:"text-high-emphesis"})})}),(0,m.jsxs)(d.Z.BorderedContent,{className:"flex gap-3 px-3 bg-dark-900",children:[(0,m.jsx)("div",{className:"border border-dark-700 rounded-full w-[48px] h-[48px] flex items-center justify-center shadow-md",children:(0,m.jsx)(r.o,{width:20,height:20})}),(0,m.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,m.jsx)(u.Z,{variant:"h3",className:k.value?"text-high-emphesis":"text-secondary",weight:700,children:null===(i=M||p)||void 0===i?void 0:i.toSignificant(6)}),(0,m.jsx)(u.Z,{variant:"xxs",className:"text-secondary",children:s._(s._("In Wallet"))})]})]}),(0,m.jsx)(y.ZP,{loading:j,color:"gradient",disabled:R,onClick:W,children:(0,m.jsx)(u.Z,{variant:"sm",weight:700,className:L?"text-low-emphasis":"text-high-emphesis",children:T})})]})};var L=()=>{const e=(0,j.T)(),{activeModal:i,modalOpen:a}=(0,j.C)(v.jD),s=(0,l.useCallback)((()=>{(0,v.oK)({activeModal:void 0,currency:void 0})}),[]);return(0,m.jsx)(t.S.Controlled,{isOpen:a,onDismiss:()=>e((0,v.a7)(!1)),afterLeave:s,maxWidth:"md",children:i===f.rO.DEPOSIT?(0,m.jsx)(M,{onBack:()=>e((0,v.WH)({activeModal:f.rO.MENU})),onClose:()=>e((0,v.WH)({activeModal:void 0,modalOpen:!1}))}):i===f.rO.WITHDRAW?(0,m.jsx)(W,{onBack:()=>e((0,v.WH)({activeModal:f.rO.MENU})),onClose:()=>e((0,v.WH)({activeModal:void 0,modalOpen:!1}))}):(0,m.jsx)(k,{onClose:()=>e((0,v.WH)({activeModal:void 0,modalOpen:!1}))})})}},45572:function(e,i,a){var t=a(610),l=a.n(t),s=a(77082),n=a(15003),o=a(56785),r=a(44554),d=a(29325),c=a(12614),u=a(41664),m=a.n(u),h=a(67294),v=a(30710),p=a(85893);i.Z=e=>{let{account:i,chainId:a,hideAccount:t=!1}=e;const{library:u}=(0,c.aQ)(),{0:x,1:g}=(0,h.useState)(!1),{ENSName:f}=(0,d.Z)(null!==i&&void 0!==i?i:void 0);return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"flex items-center gap-4",onClick:()=>g(!x),children:[i&&(0,p.jsx)("div",{className:"border-2 rounded-full",children:(0,p.jsx)(l(),{size:64,address:i,defaultComponent:(0,p.jsx)(v.default,{seed:i,size:16,className:"rounded-full"}),provider:u})}),(0,p.jsxs)("div",{className:"flex flex-col",children:[i&&(0,p.jsx)(m(),{href:(0,r.E8)(a,i,"address"),passHref:!0,children:(0,p.jsx)("a",{target:"_blank",children:(0,p.jsxs)(o.Z,{variant:"h3",className:"flex gap-1 cursor-pointer text-high-emphesis hover:text-blue-100",weight:700,children:[f||(i?(0,r.Xn)(i):"")," ",(0,p.jsx)(s.Z,{width:20})]})})}),i&&!t&&(0,p.jsx)(n.Z,{toCopy:i,className:"opacity-100 text-primary",children:(0,r.Xn)(i)})]})]})})}},89046:function(e,i,a){a.d(i,{G0:function(){return o},RR:function(){return n},_O:function(){return s},k9:function(){return l},vu:function(){return r},zm:function(){return d}});var t=a(44554);const l={ConstantProduct:{label:"Classic",label_long:"Classic Pool",color:"default",description:"Most common, traditional 50/50 value split between assets",long_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim bibendum in ut amet, sit fames. Iaculis ultrices sit fermentum commodo nisl eget etiam fusce ac. Risus enim sollicitudin phasellus nibh. Neque turpis amet at scelerisque vitae nibh magna. Aliquet ut natoque quisque eget pellentesque id. Convallis enim.",image:{url:"/images/trident/a-b-pool.png",width:121,height:95}},Weighted:{label:"Index",label_long:"Index Pool",color:"yellow",description:"Two asset pools, with the value split skewed higher towards one.",long_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim bibendum in ut amet, sit fames. Iaculis ultrices sit fermentum commodo nisl eget etiam fusce ac. Risus enim sollicitudin phasellus nibh. Neque turpis amet at scelerisque vitae nibh magna. Aliquet ut natoque quisque eget pellentesque id. Convallis enim.",image:{url:"/images/trident/index-pool-scale.png",width:151,height:95}},ConcentratedLiquidity:{label:"Concentrated",label_long:"Concentrated Range",color:"purple",description:"Same value makeup of a classic pool, but for a specific price range",long_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim bibendum in ut amet, sit fames. Iaculis ultrices sit fermentum commodo nisl eget etiam fusce ac. Risus enim sollicitudin phasellus nibh. Neque turpis amet at scelerisque vitae nibh magna. Aliquet ut natoque quisque eget pellentesque id. Convallis enim.",image:{url:"/images/trident/a-b-pool.png",width:151,height:95}},Hybrid:{label:"Stable",label_long:"Stable Pool",color:"blue",description:"3 to 32 assets, with tokens deposited in equal values",long_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim bibendum in ut amet, sit fames. Iaculis ultrices sit fermentum commodo nisl eget etiam fusce ac. Risus enim sollicitudin phasellus nibh. Neque turpis amet at scelerisque vitae nibh magna. Aliquet ut natoque quisque eget pellentesque id. Convallis enim.",image:{url:"/images/trident/a-b-pool.png",width:121,height:95}}},s="overflow-x-auto border border-dark-900 rounded shadow-md bg-[rgba(0,0,0,0.12)]",n="w-full border-collapse",o=(e,i)=>(0,t.AK)("text-secondary text-sm py-3",0===e?"pl-4 text-left":"text-right",e===i-1?"pr-4":""),r="hover:bg-dark-900/40 hover:cursor-pointer",d=(e,i)=>(0,t.AK)("py-3 border-t border-dark-900 flex items-center",0===e?"pl-4 justify-start":"justify-end",e===i-1?"pr-4":"")},13902:function(e,i,a){var t=a(67294);const l=t.forwardRef((function(e,i){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:i},e),t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))}));i.Z=l},77082:function(e,i,a){var t=a(67294);const l=t.forwardRef((function(e,i){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:i},e),t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"}))}));i.Z=l},55929:function(e,i,a){var t=a(67294);const l=t.forwardRef((function(e,i){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:i},e),t.createElement("path",{fillRule:"evenodd",d:"M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z",clipRule:"evenodd"}))}));i.Z=l}}]);