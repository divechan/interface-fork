(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5098],{49552:function(e){var t=e.exports=function(e){e||(e={}),"string"===typeof e&&(e={cookie:e}),void 0===e.cookie&&(e.cookie="");var t={get:function(t){for(var r=e.cookie.split(/;\s*/),o=0;o<r.length;o++){var n=r[o].split("=");if(unescape(n[0])===t)return unescape(n[1])}},set:function(t,r,o){o||(o={});var n=escape(t)+"="+escape(r);return o.expires&&(n+="; expires="+o.expires),o.path&&(n+="; path="+escape(o.path)),o.domain&&(n+="; domain="+escape(o.domain)),o.secure&&(n+="; secure"),e.cookie=n,n}};return t};if("undefined"!==typeof document){var r=t(document);t.get=r.get,t.set=r.set}},97698:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return le}});var o=r(59499),n=r(56727),i=r(52358),a=r(14744),s=r(31518),l=r(25962),d=r(15205),c=r(56785),u=r(38239),p=r(76537),v=r(10697),m=r(33318),f=r(32036),g=r(59497),h=r(4363),w=r(50623),y=r(44554),x=r(15174),b=r(60708),T=r(15423),j=r(61647),A=r(2593),O=r(17988),_=r(97503),I=r(69328),S=r(12614),C=r(16339),P=r(22166),k=r(67294),N=r(71195),Z=r(20290),E=r(17368);function F(e,t,r,o){const{chainId:n,library:i}=(0,S.aQ)(),a=(0,I.ZP)(),l=(0,C.T)(),{0:d,1:c}=(0,k.useState)(),{0:u,1:p}=(0,k.useMemo)((()=>e===s.YL.EXACT_INPUT?[r,o]:[o,r]),[e,r,o]),{rebase:v}=(0,j.C)(u),{rebase:m}=(0,j.C)(p),f=function(e,t){const r=(0,N.V)(e,t),o=(0,Z.$k)(r),n=(0,_.OY)(r),i=(0,k.useMemo)((()=>[...o,...n]),[n,o]);return(0,k.useMemo)((()=>[...Object.values(i.reduce(((e,t)=>(!Array.isArray(t)&&t.state===O.tK.EXISTS&&t.pool&&e.push(t.pool),Array.isArray(t)&&t[0]===_._G.EXISTS&&t[1]&&e.push(t[1]),e)),[]))]),[i])}(u,p);return(0,k.useEffect)((()=>{if(!i)return;(async()=>(await i.getGasPrice()).toNumber())().then((e=>c(e)))}),[a,i]),(0,k.useMemo)((()=>{if(d&&u&&p&&u.wrapped.address!==p.wrapped.address&&n&&t&&o&&v&&m&&f.length>0){const o=s.ih.fromRawAmount(t.currency,(0,y.HW)(v,t.wrapped).quotient.toString()),i=f.filter((e=>e instanceof O.Pg)),a=f.filter((e=>e instanceof E.s));if(e===s.YL.EXACT_INPUT){const e=(0,O.aD)(u.wrapped,p.wrapped,A.O$.from(o.quotient.toString()),i,s.FX[o.currency.chainId],d),c=(0,O.v0)(u.wrapped,p.wrapped,A.O$.from(t.quotient.toString()),a,s.FX[t.currency.chainId],d);if(A.O$.from((0,y.p8)(m,s.QA.BigInt(e.amountOutBN.toString())).toString()).gt(c.amountOutBN)){if(e.status===O.yB.Success){const t=e.priceImpact;return l((0,P.bg)({info:{chainId:n,allowedPools:i,route:e,mode:"multiple"}})),{trade:O.ho.bestTradeExactIn(e,o,p),priceImpact:t}}}else if(c.status===O.yB.Success){const e=c.priceImpact;l((0,P.bg)({info:{chainId:n,allowedPools:a,route:c,mode:"single"}}));const o=(0,O.Yj)(c,a,u,p);try{return{trade:s.ho.exactIn(o,t),priceImpact:e}}catch(r){return{trade:void 0,priceImpact:void 0}}}}else{const e=(0,O.cc)(u.wrapped,p.wrapped,A.O$.from(o.quotient.toString()),i,s.FX[o.currency.chainId],d),c=(0,O.uH)(u.wrapped,p.wrapped,A.O$.from(t.quotient.toString()),a,s.FX[t.currency.chainId],d);if(A.O$.from((0,y.p8)(m,s.QA.BigInt(e.amountOut.toString())).toString()).lt(c.amountInBN)){if(e.status===O.yB.Success){const t=e.priceImpact;return l((0,P.bg)({info:{chainId:n,allowedPools:i,route:e,mode:"multiple"}})),{trade:O.ho.bestTradeExactOut(e,u,o),priceImpact:t}}}else if(c.status===O.yB.Success){const e=c.priceImpact;l((0,P.bg)({info:{chainId:n,allowedPools:a,route:c,mode:"single"}}));const o=(0,O.Yj)(c,a,u,p);try{return{trade:s.ho.exactOut(o,t),priceImpact:e}}catch(r){return{trade:void 0,priceImpact:void 0}}}}}return{trade:void 0,priceImpact:void 0}}),[f,t,n,u,p,d,o,v,m,e,l])}var G=()=>{const{i18n:e}=(0,a.mV)(),{value:t,typedField:r,spendFromWallet:o}=(0,C.C)(h.gD),{account:n,chainId:i}=(0,S.aQ)(),{currencies:[l,d]}=(0,w.Z)(),{rebases:c,loading:u}=(0,j.Z)([l,d]),p=(0,k.useMemo)((()=>(0,b.e)(t,r===h.GT.A?l:d)),[l,d,r,t]),v=(0,k.useMemo)((()=>l&&d&&!!i&&((null===l||void 0===l?void 0:l.isNative)&&s.FX[i].address===(null===d||void 0===d?void 0:d.wrapped.address)||(null===d||void 0===d?void 0:d.isNative)&&s.FX[i].address===(null===l||void 0===l?void 0:l.wrapped.address))),[i,l,d]),{trade:m,priceImpact:f}=F(r===h.GT.A?s.YL.EXACT_INPUT:s.YL.EXACT_OUTPUT,p,r===h.GT.A?l:d,r===h.GT.A?d:l),g=(0,k.useMemo)((()=>f?new s.gG(f.toString().toBigNumber(18).toString(),s.QA.exponentiate(s.QA.BigInt(10),s.QA.BigInt(18))):void 0),[f]),A=(0,k.useMemo)((()=>{var e,t,r;if(m)return(0,x.C)(m)===s.G1.V2TRADE?m.outputAmount:(0,x.C)(m)===s.G1.V3TRADE&&!u&&null!==(e=m.outputAmount)&&void 0!==e&&e.currency.wrapped.address&&c[null===m||void 0===m||null===(t=m.outputAmount)||void 0===t?void 0:t.currency.wrapped.address]?(0,y.nP)(c[null===(r=m.outputAmount)||void 0===r?void 0:r.currency.wrapped.address],m.outputAmount.wrapped):void 0}),[c,u,m]),O=(0,T.C)(null!==n&&void 0!==n?n:void 0,l,o),_=(0,k.useMemo)((()=>{var e,o;return v?[t,t]:[r===h.GT.A?t:null!==(e=null===A||void 0===A?void 0:A.toSignificant(6))&&void 0!==e?e:"",r===h.GT.B?t:null!==(o=null===A||void 0===A?void 0:A.toSignificant(6))&&void 0!==o?o:""]}),[v,A,r,t]),I=(0,k.useMemo)((()=>v?[p,p]:[p,A]),[v,p,A]);let P=(0,k.useMemo)((()=>{var t,r,o,i;return n?null!==(t=(0,y.iN)(O))&&void 0!==t&&t.equalTo(s.xE)?e._(e._("Insufficient balance to cover for fees")):null!==m&&void 0!==m&&null!==(r=m.inputAmount[0])&&void 0!==r&&r.greaterThan(s.xE)||null!==(o=I[1])&&void 0!==o&&o.greaterThan(s.xE)?void 0!==m||v?O&&m&&p&&null!==(i=(0,y.iN)(O))&&void 0!==i&&i.lessThan(p)?e._(e._("Insufficient Balance")):"":e._(e._("No route found")):e._(e._("Enter an amount")):e._(e._("Connect Wallet"))}),[n,O,e,p,v,I,m]);return(0,k.useMemo)((()=>({isWrap:v,error:P,trade:m,priceImpact:g,formattedAmounts:_,parsedAmounts:I})),[g,v,P,m,_,I])};const B=(0,k.createContext)({formattedAmounts:void 0,trade:void 0,priceImpact:void 0,error:void 0,isWrap:void 0,parsedAmounts:void 0}),D=()=>(0,k.useContext)(B);var W=r(92088),M=r(71862),X=r(15097),R=r(40588),V=r(53389),L=r(90573),q=r(627),U=r(49932),Q=r(85893);function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $=e=>{let{onClick:t,spendFromWallet:r=!0}=e;const{i18n:o}=(0,a.mV)(),n=(0,C.T)(),i=(0,C.C)(h.gD),{attemptingTxn:l,bentoPermit:d}=i,{parsedAmounts:u,error:p,trade:v}=D(),m=(0,V.sL)(),f=(0,V.Ti)(),g=(0,V.rO)(),w=(0,L.NF)(null===u||void 0===u?void 0:u[0]),b=(0,L.NF)(null===u||void 0===u?void 0:u[1]),T=(0,y.Ld)(w,b),[j]=(0,q.DG)(),{0:A,1:_}=(0,k.useState)(),{0:I,1:S}=(0,k.useState)(),P=(0,k.useMemo)((()=>{if(v instanceof s.ho){const e=null===v||void 0===v?void 0:v.priceImpact;return e&&T?e.greaterThan(T)?e:T:null!==e&&void 0!==e?e:T}if(v instanceof O.ho)return new s.gG(Math.floor(1e4*Number(v.route.priceImpact)),1e4)}),[T,v]),N=(0,k.useMemo)((()=>(0,y.oX)(P)),[P]),Z=(0,k.useCallback)((()=>{v&&P&&(0,R.ZP)(P)&&(t(v),n((0,h.rg)(Y(Y({},i),{},{showReview:!0}))))}),[n,t,P,v,i]),E=(0,x.C)(v)===s.G1.V2TRADE;return(0,Q.jsxs)(Q.Fragment,{children:[A&&(0,Q.jsx)(c.Z,{variant:"sm",className:"p-4 text-center border rounded border-yellow/40 text-yellow",children:o._(o._("Something went wrong during signing of the approval. This is expected for hardware wallets, such as Trezor and Ledger. Click 'Approve BentoBox' again for approving using the fallback method"))}),(0,Q.jsx)(U.Z,Y(Y({inputAmounts:[null===u||void 0===u?void 0:u[0]],tokenApproveOn:r?E?null===f||void 0===f?void 0:f.address:null===g||void 0===g?void 0:g.address:void 0,masterContractAddress:E||null===m||void 0===m?void 0:m.address},E?{withPermit:!1}:{withPermit:!0,permit:d,onPermit:e=>{n((0,h.T1)(e))},onPermitError:()=>_(!0)}),{},{children:e=>{let{approved:t,loading:r}=e;const n=!!p||!t||r||l||N>3&&!j,i=l?(0,Q.jsx)(X.Z,{children:o._(o._("Swapping"))}):r?"":p||(N>3&&!j?o._(o._("Price Impact Too High")):N>2?o._(o._("Swap Anyway")):o._(o._("Swap")));return(0,Q.jsx)("div",{className:"flex",children:(0,Q.jsx)(M.ZP,{fullWidth:!0,id:"swap-button",loading:r,color:N>2&&!p?"red":"gradient",disabled:n,onClick:Z,className:"rounded-[5px] md:rounded",children:i})})}}))]})},z=r(68411);var K=()=>{const{i18n:e}=(0,a.mV)(),{chainId:t}=(0,S.aQ)(),r=(0,V.lz)(),o=(0,V.rO)(),{deposit:n,withdraw:i}=(0,V.x7)(),{rebase:l}=(0,j.C)(t?s.FX[t]:void 0),d=(0,z.h7)(),{spendFromWallet:c,receiveToWallet:u,attemptingTxn:p}=(0,C.C)(h.gD),{parsedAmounts:v,error:m}=D(),f=async()=>{if(r&&null!==v&&void 0!==v&&v[0]&&t&&l){if(c&&u){var o,a;let n;return n=null!==v&&void 0!==v&&null!==(o=v[0])&&void 0!==o&&o.currency.isNative?await r.deposit({value:null===v||void 0===v?void 0:v[0].quotient.toString()}):await r.withdraw(null===v||void 0===v?void 0:v[0].quotient.toString()),d(n,{summary:null!==v&&void 0!==v&&null!==(a=v[0])&&void 0!==a&&a.currency.isNative?e._(e._("Wrap {0} {1} to {2}",{0:null===v||void 0===v?void 0:v[0].toSignificant(6),1:s.B5[t].symbol,2:s.FX[t].symbol})):e._(e._("Unwrap {0} {1} to {2}",{0:null===v||void 0===v?void 0:v[0].toSignificant(6),1:s.FX[t].symbol,2:s.B5[t].symbol}))})}var p,m;if(!c&&u)return await i(s.df[t],null===v||void 0===v||null===(p=v[0])||void 0===p?void 0:p.quotient.toString().toBigNumber(0));if(c&&!u)return await n(s.FX[t],l,null===v||void 0===v||null===(m=v[0])||void 0===m?void 0:m.quotient.toString().toBigNumber(0))}};return(0,Q.jsx)(U.Z,{inputAmounts:[null===v||void 0===v?void 0:v[0]],tokenApproveOn:null===o||void 0===o?void 0:o.address,children:t=>{var r;let{approved:o,loading:n}=t,i=!!m||!o||n||p,a=[null!==v&&void 0!==v&&null!==(r=v[0])&&void 0!==r&&r.currency.isNative?e._(e._("Wrap")):e._(e._("Unwrap"))];!c&&u&&(a=[e._(e._("Withdraw")),...a]),c&&!u&&(a=[e._(e._("Deposit"))]),c||u||(i=!0,a=[e._(e._("Unsupported"))]);const s=p?(0,Q.jsx)(X.Z,{children:a.join(" + ")}):n?"":m||a.join(" + ");return(0,Q.jsx)("div",{className:"flex",children:(0,Q.jsx)(M.ZP,{fullWidth:!0,id:"wrap-button",loading:n,color:"gradient",disabled:i,onClick:f,children:s})})}})},J=r(87433),ee=r(46472),te=r(46847),re=r(22651),oe=r(67801),ne=r(1420);function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const se=e=>{var t;let{banners:r}=e;const{formattedAmounts:o,trade:u,priceImpact:y,isWrap:b,parsedAmounts:T,error:j}=G(),A=(0,x.C)(u),{i18n:O}=(0,a.mV)(),{currencies:_,setURLCurrency:I,switchCurrencies:S}=(0,w.Z)(),[P]=(0,q.DG)(),N=(0,C.T)(),Z=(0,C.C)(h.gD),{typedField:E,spendFromWallet:F,receiveToWallet:D,recipient:M,attemptingTxn:X,showReview:R,error:V,bentoPermit:L}=Z,{address:U}=(0,ee.Z)(M),{0:H,1:Y}=(0,k.useState)(),{0:z,1:J}=(0,k.useState)(),ie=(0,te.G)(_[0],_[1]),se=(0,oe.Z)(u),{0:le,1:de}=(0,k.useState)(),ce=A===s.G1.V2TRADE||F,ue=A===s.G1.V2TRADE||D,pe=(0,k.useCallback)((async()=>{N((0,h.rg)(ae(ae({},Z),{},{value:"",typedField:h.GT.A}))),await S()}),[N,S,Z]),{callback:ve,error:me}=(0,re.od)(u,se,null!==U&&void 0!==U?U:void 0,null,{receiveToWallet:ue,fromWallet:ce,parsedAmounts:T,bentoPermit:L,resetBentoPermit:()=>N((0,h.T1)(void 0))}),fe=(0,k.useCallback)((async()=>{if(!ve)return;N((0,h.jv)(!0));let{value:e,typedField:t}=Z;try{const r=await ve();Y(r),e="",t=h.GT.A}catch(r){de(r.message)}N((0,h.rg)(ae(ae({},Z),{},{value:e,typedField:t,attemptingTxn:!1})))}),[ve,N,Z]),ge=(0,k.useCallback)((()=>{N((0,h.rg)(ae(ae({},Z),{},{showReview:!1,error:void 0}))),Y(void 0)}),[N,Z]);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(ne.yz,{children:[(0,Q.jsx)("div",{className:"px-2",children:(0,Q.jsx)(g.Z,{inputCurrency:_[0],outputCurrency:_[1],trident:!0})}),(0,Q.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,Q.jsx)(W.Z,{error:E===h.GT.A&&!!j&&!!o[0],header:e=>(0,Q.jsx)(W.Z.Header,ae(ae({},e),{},{id:"asset-select-trigger-".concat(h.GT.A)})),walletToggle:e=>(0,Q.jsx)(n.uT,{show:!u||A===s.G1.V3TRADE,enter:"transition duration-100 ease-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",leave:"transition duration-100 ease-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:(0,Q.jsx)(W.Z.Switch,ae(ae({},e),{},{label:O._(O._("Pay from")),onChange:e=>N((0,h.h0)(e)),id:"chk-pay-from-wallet"}))}),selected:E===h.GT.A,spendFromWallet:ce,currency:_[0],value:o[0],onChange:e=>N((0,h.rg)(ae(ae({},Z),{},{value:e||"",typedField:h.GT.A}))),onSelect:e=>I(e,0)}),(0,Q.jsx)("div",{className:"z-0 flex justify-center -mt-6 -mb-6",children:(0,Q.jsx)("div",{role:"button",className:"p-1.5 rounded-full bg-dark-800 border shadow-md border-dark-700 hover:border-dark-600",onClick:pe,children:(0,Q.jsx)(i.Z,{width:14,className:"text-high-emphesis hover:text-white"})})}),(0,Q.jsx)(W.Z,{error:E===h.GT.B&&!!j&&!!o[0],header:e=>(0,Q.jsx)(W.Z.Header,ae(ae({},e),{},{id:"asset-select-trigger-".concat(h.GT.B)})),walletToggle:e=>(0,Q.jsx)(n.uT,{show:!u||A===s.G1.V3TRADE,enter:"transition duration-100 ease-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",leave:"transition duration-100 ease-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:(0,Q.jsx)(W.Z.Switch,ae(ae({},e),{},{label:O._(O._("Receive to")),onChange:e=>N((0,h.v7)(e)),id:"chk-receive-to-wallet"}))}),selected:E===h.GT.B,spendFromWallet:ue,currency:_[1],value:o[1],onChange:e=>{N((0,h.rg)(ae(ae({},Z),{},{value:e||"",typedField:h.GT.A})))},onSelect:e=>I(e,1),priceImpact:y,inputDisabled:!0}),(0,Q.jsxs)(B.Provider,{value:(0,k.useMemo)((()=>{var e,t;return{formattedAmounts:o,trade:u,priceImpact:y,error:null!==(e=null!==(t=null!==j&&void 0!==j?j:V)&&void 0!==t?t:me)&&void 0!==e?e:void 0,isWrap:b,parsedAmounts:T}}),[me,j,o,b,T,y,V,u]),children:[P&&(0,Q.jsx)(d.Z,{recipient:M,action:h.He}),Boolean(u)&&(0,Q.jsx)(m.Z,{inputCurrency:_[0],outputCurrency:_[1],trade:u,recipient:null!==M&&void 0!==M?M:void 0}),u&&!(null!==u&&void 0!==u&&u.route)&&(null===(t=T[0])||void 0===t?void 0:t.greaterThan(s.xE))&&(0,Q.jsxs)(c.Z,{variant:"xs",className:"py-2 text-center",children:[O._(O._("Insufficient liquidity for this trade."))," "]}),b?(0,Q.jsx)(K,{}):(0,Q.jsx)($,{onClick:e=>J(e),spendFromWallet:ce})]}),P&&le?(0,Q.jsx)(v.Z,{error:le}):null,ie?(0,Q.jsx)(f.Z,{currencies:[_[0],_[1]]}):null]}),(0,Q.jsx)(p.Z,{isOpen:R,trade:u,originalTrade:z,onAcceptChanges:()=>J(u),attemptingTxn:X,txHash:H,recipient:M,allowedSlippage:se,onConfirm:fe,swapErrorMessage:V,onDismiss:ge})]}),(0,Q.jsxs)(c.Z,{variant:"xs",className:"px-10 mt-5 text-center text-low-emphesis",children:[(0,Q.jsx)(c.Z,{variant:"xs",weight:700,component:"span",children:"Tip"}),": ",O._(O._("BentoBox to BentoBox swaps are up to 50% cheaper than normal swaps"))]}),(0,Q.jsx)(l.Z,{banners:r})]})};se.Layout=(0,ne.Pf)("swap-page"),se.Guard=(0,J.Z)(u.L.TRIDENT);var le=se},52358:function(e,t,r){"use strict";var o=r(67294);const n=o.forwardRef((function(e,t){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 14l-7 7m0 0l-7-7m7 7V3"}))}));t.Z=n}}]);