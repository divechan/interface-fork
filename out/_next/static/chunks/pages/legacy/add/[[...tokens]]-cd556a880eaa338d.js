(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5180],{3382:function(e,i,n){"use strict";var t=n(31969),r=n(76866),o=(n(67294),n(85893));i.Z=function(e){var i=e.children,n=e.className;return(0,r.Z)()?(0,o.jsxs)("div",{className:(0,t.AK)(n,"relative w-full max-w-2xl"),children:[(0,o.jsx)("div",{className:(0,t.AK)("from-pink/5 to-blue/5 fixed inset-0 bg-gradient-radial z-0 pointer-events-none")}),(0,o.jsx)("div",{className:"relative filter z-10",children:i})]}):(0,o.jsx)(o.Fragment,{children:i})}},66223:function(e,i,n){"use strict";n.d(i,{Z:function(){return l}});var t=n(31969),r=(n(67294),n(41626)),o=n(85893);function l(e){var i=e.currency0,n=e.currency1,l=e.className,d=void 0===l?"":l,s=e.logoClassName,a=void 0===s?"":s,c=e.size,u=void 0===c?16:c;return(0,o.jsxs)("div",{className:(0,t.AK)("flex items-center space-x-2",d),children:[(0,o.jsx)(r.X,{className:a,currency:i,size:u.toString()+"px"}),(0,o.jsx)(r.X,{className:a,currency:n,size:u.toString()+"px"})]})}},92037:function(e,i,n){"use strict";n.d(i,{Z:function(){return o}});var t=n(2886),r=n(54907);function o(){var e,i,n=(0,r.h$)();return null===(e=(0,t.Wk)(n,"getCurrentBlockTimestamp"))||void 0===e||null===(i=e.result)||void 0===i?void 0:i[0]}},62603:function(e,i,n){"use strict";n.d(i,{A:function(){return s},Y:function(){return d}});var t=n(8198),r=n(31518),o=n(89638),l=n(2886);var d=function(e){var i;return(0,l._Y)(null!==(i=null===e||void 0===e?void 0:e.map((function(e){return null!==e&&void 0!==e&&e.isToken?e.address:void 0})))&&void 0!==i?i:[],new t.vU(o),"totalSupply").map((function(i,n){var t,o,l;return o=null===(t=i.result)||void 0===t?void 0:t[0],null!==(l=null===e||void 0===e?void 0:e[n])&&void 0!==l&&l.isToken&&o?r.ih.fromRawAmount(l,o.toString()):void 0})).reduce((function(i,n,t){return n&&null!==e&&void 0!==e&&e[t]&&(i[e[t].wrapped.address]=n),i}),{})},s=function(e){var i=d([e]);return e?i[e.wrapped.address]:void 0}},66367:function(e,i,n){"use strict";n.d(i,{Z:function(){return l}});var t=n(16339),r=n(67294),o=n(92037);function l(){var e=(0,t.C)((function(e){return e.user.userDeadline})),i=(0,o.Z)();return(0,r.useMemo)((function(){if(i&&e)return i.add(e)}),[i,e])}},73179:function(e,i,n){"use strict";n.d(i,{Pf:function(){return v},yz:function(){return c}});var t=n(59499),r=n(72457),o=n(3382),l=n(31969),d=(n(67294),n(76138)),s=n(85893);function a(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}var c=function(e){var i=e.children,n=e.className;return(0,s.jsx)("div",{className:(0,l.AK)("flex flex-col gap-3 p-2 md:p-4 pt-4 rounded-[24px] bg-dark-800 shadow-md shadow-dark-1000",n),children:i})},u=function(e){var i=e.children,n=e.id;return(0,s.jsx)(d.Z,{children:(0,s.jsx)(r.Z,{id:n,className:"py-4 md:py-12 lg:py-[120px] px-2 mx-auto",maxWidth:"md",children:(0,s.jsx)(o.Z,{children:i})})})},v=function(e){return function(i){return(0,s.jsx)(u,function(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?a(Object(n),!0).forEach((function(i){(0,t.Z)(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}({id:e},i))}}},16029:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return Q}});var t=n(27812),r=n(50029),o=n(59499),l=n(16835),d=n(87794),s=n.n(d),a=n(2593),c=n(93973),u=n(25159),v=n(14744),N=n(31518),p=n(71862),f=n(66223),g=n(94492),h=n(56785),m=n(63192),C=n(16682),x=n(30380),R=n(67294),y=n(85893);function _(e){var i,n,t,r,o,l,d,s,a,c,u,N=e.noLiquidity,f=e.price,g=e.currencies,h=e.parsedAmounts,m=e.poolTokenPercentage,C=e.onAdd,R=(0,v.mV)().i18n;return(0,y.jsxs)("div",{className:"p-6 mt-0 -m-6 rounded bg-dark-800",children:[(0,y.jsxs)("div",{className:"grid gap-1",children:[(0,y.jsxs)("div",{className:"flex items-center justify-between",children:[(0,y.jsx)("div",{className:"text-sm text-high-emphesis",children:R._(R._("Rates"))}),(0,y.jsx)("div",{className:"text-sm font-bold justify-center items-center flex right-align pl-1.5 text-high-emphesis",children:"1 ".concat(null===(i=h[x.gN.CURRENCY_A])||void 0===i?void 0:i.currency.symbol," = ").concat(null===f||void 0===f?void 0:f.toSignificant(4)," ").concat(null===(n=h[x.gN.CURRENCY_B])||void 0===n?void 0:n.currency.symbol)})]}),(0,y.jsx)("div",{className:"flex items-center justify-end",children:(0,y.jsx)("div",{className:"text-sm font-bold justify-center items-center flex right-align pl-1.5 text-high-emphesis",children:"1 ".concat(null===(t=h[x.gN.CURRENCY_B])||void 0===t?void 0:t.currency.symbol," = ").concat(null===f||void 0===f||null===(r=f.invert())||void 0===r?void 0:r.toSignificant(4)," ").concat(null===(o=h[x.gN.CURRENCY_A])||void 0===o?void 0:o.currency.symbol)})})]}),(0,y.jsx)("div",{className:"h-px my-6 bg-gray-700"}),(0,y.jsxs)("div",{className:"grid gap-1 pb-6",children:[(0,y.jsxs)("div",{className:"flex items-center justify-between",children:[(0,y.jsx)("div",{className:"text-sm text-secondary",children:R._(R._("{0} Deposited",{0:null===(l=g[x.gN.CURRENCY_A])||void 0===l?void 0:l.symbol}))}),(0,y.jsxs)("div",{className:"text-sm font-bold justify-center items-center flex right-align pl-1.5 text-high-emphesis",children:[(0,y.jsx)("div",{children:null===(d=h[x.gN.CURRENCY_A])||void 0===d?void 0:d.toSignificant(6)}),(0,y.jsx)("span",{className:"ml-1",children:null===(s=h[x.gN.CURRENCY_A])||void 0===s?void 0:s.currency.symbol})]})]}),(0,y.jsxs)("div",{className:"flex items-center justify-between",children:[(0,y.jsx)("div",{className:"text-sm text-secondary",children:R._(R._("{0} Deposited",{0:null===(a=g[x.gN.CURRENCY_B])||void 0===a?void 0:a.symbol}))}),(0,y.jsxs)("div",{className:"text-sm font-bold justify-center items-center flex right-align pl-1.5 text-high-emphesis",children:[(0,y.jsx)("div",{children:null===(c=h[x.gN.CURRENCY_B])||void 0===c?void 0:c.toSignificant(6)}),(0,y.jsx)("span",{className:"ml-1",children:null===(u=h[x.gN.CURRENCY_B])||void 0===u?void 0:u.currency.symbol})]})]}),(0,y.jsxs)("div",{className:"flex items-center justify-between",children:[(0,y.jsx)("div",{className:"text-sm text-secondary",children:R._(R._("Share of Pool:"))}),(0,y.jsxs)("div",{className:"text-sm font-bold justify-center items-center flex right-align pl-1.5 text-high-emphesis",children:[N?"100":null===m||void 0===m?void 0:m.toSignificant(4),"%"]})]})]}),(0,y.jsx)(p.ZP,{color:"gradient",fullWidth:!0,onClick:C,children:N?R._(R._("Create Pool & Supply")):R._(R._("Confirm Supply"))})]})}var j=n(15503),E=n(31969),b=function(e){var i,n=e.currencies,t=e.price,r=e.noLiquidity,o=e.poolTokenPercentage,l=e.className,d=(0,R.useState)(!1),s=d[0],a=d[1];return(0,y.jsxs)("div",{className:(0,E.AK)("flex flex-col gap-2 px-3 py-2 rounded border border-dark-700 bg-dark-900 shadow-inner",l),children:[(0,y.jsxs)("div",{className:"flex justify-between gap-4",children:[(0,y.jsx)(h.Z,{variant:"xs",children:"Rate"}),(0,y.jsx)("div",{children:(0,y.jsx)(j.Z,{inputCurrency:n[x.gN.CURRENCY_A],outputCurrency:n[x.gN.CURRENCY_B],price:t,showInverted:s,setShowInverted:a})})]}),(0,y.jsxs)("div",{className:"flex justify-between gap-4",children:[(0,y.jsx)(h.Z,{variant:"xs",children:"Share of pool"}),(0,y.jsxs)(h.Z,{variant:"xs",className:"text-right",children:[r&&t?"100":null!==(i=null!==o&&void 0!==o&&o.lessThan(C.IS)?"<0.01":null===o||void 0===o?void 0:o.toFixed(2))&&void 0!==i?i:"0","%"]})]})]})},U=n(32036),w=n(92088),Y=n(66529),A=n(92659),O=n(62483),Z=n(27262),B=n(54907),k=n(46847),P=n(66367),S=n(97503),q=n(73179),T=n(23816),L=n(12614),I=n(53344),D=n(16339),K=n(26168),z=n(37643),M=n(68411),V=n(627),F=n(11163),W=n(2962);function G(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function H(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?G(Object(n),!0).forEach((function(i){(0,o.Z)(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function Q(){var e,i,n,d,j,E,G,Q,X,$,J,ee,ie,ne=(0,v.mV)().i18n,te=(0,L.aQ)(),re=te.account,oe=te.chainId,le=te.library,de=(0,F.useRouter)(),se=de.query.tokens||[void 0,void 0],ae=(0,l.Z)(se,2),ce=ae[0],ue=ae[1],ve=(0,O.U8)(ce),Ne=(0,O.U8)(ue),pe=(Boolean(oe&&(ve&&(0,N.PT)(ve,N.FX[oe])||Ne&&(0,N.PT)(Ne,N.FX[oe]))),(0,V.DG)()),fe=(0,l.Z)(pe,1)[0],ge=(0,K.OY)(),he=ge.independentField,me=ge.typedValue,Ce=ge.otherTypedValue,xe=(0,K.Qw)(null!==ve&&void 0!==ve?ve:void 0,null!==Ne&&void 0!==Ne?Ne:void 0),Re=xe.dependentField,ye=xe.currencies,_e=(xe.pair,xe.pairState),je=(xe.currencyBalances,xe.parsedAmounts),Ee=xe.price,be=xe.noLiquidity,Ue=xe.liquidityMinted,we=xe.poolTokenPercentage,Ye=xe.error,Ae=(0,K.OA)(be),Oe=Ae.onFieldAInput,Ze=Ae.onFieldBInput,Be=!Ye,ke=(0,R.useState)(!1),Pe=ke[0],Se=ke[1],qe=(0,R.useState)(!1),Te=qe[0],Le=qe[1],Ie=(0,P.Z)(),De=(0,D.C)(z.tE),Ke=(0,R.useState)(""),ze=Ke[0],Me=Ke[1],Ve=(n={},(0,o.Z)(n,he,me),(0,o.Z)(n,Re,be?Ce:null!==(e=null===(i=je[Re])||void 0===i?void 0:i.toSignificant(6))&&void 0!==e?e:""),n),Fe=(0,B.Ti)(),We=(0,Z.qL)(je[x.gN.CURRENCY_A],null===Fe||void 0===Fe?void 0:Fe.address),Ge=(0,l.Z)(We,2),He=Ge[0],Qe=Ge[1],Xe=(0,Z.qL)(je[x.gN.CURRENCY_B],null===Fe||void 0===Fe?void 0:Fe.address),$e=(0,l.Z)(Xe,2),Je=$e[0],ei=$e[1],ii=(0,M.h7)();function ni(){return ti.apply(this,arguments)}function ti(){return ti=(0,r.Z)(s().mark((function e(){var i,n,r,l,d,c,u,v,N,p,f,g,h,m,R,y;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(oe&&le&&re&&Fe){e.next=2;break}return e.abrupt("return");case 2:if(n=je[x.gN.CURRENCY_A],r=je[x.gN.CURRENCY_B],n&&r&&ve&&Ne&&Ie){e.next=5;break}return e.abrupt("return");case 5:return i={},(0,o.Z)(i,x.gN.CURRENCY_A,(0,A.uc)(n,be?C.fI:De)[0]),(0,o.Z)(i,x.gN.CURRENCY_B,(0,A.uc)(r,be?C.fI:De)[0]),l=i,ve.isNative||Ne.isNative?(g=Ne.isNative,d=Fe.estimateGas.addLiquidityETH,c=Fe.addLiquidityETH,u=[null!==(N=null===(p=g?ve:Ne)||void 0===p||null===(f=p.wrapped)||void 0===f?void 0:f.address)&&void 0!==N?N:"",(g?n:r).quotient.toString(),l[g?x.gN.CURRENCY_A:x.gN.CURRENCY_B].toString(),l[g?x.gN.CURRENCY_B:x.gN.CURRENCY_A].toString(),re,Ie.toHexString()],v=a.O$.from((g?r:n).quotient.toString())):(d=Fe.estimateGas.addLiquidity,c=Fe.addLiquidity,u=[null!==(h=null===ve||void 0===ve||null===(m=ve.wrapped)||void 0===m?void 0:m.address)&&void 0!==h?h:"",null!==(R=null===Ne||void 0===Ne||null===(y=Ne.wrapped)||void 0===y?void 0:y.address)&&void 0!==R?R:"",n.quotient.toString(),r.quotient.toString(),l[x.gN.CURRENCY_A].toString(),l[x.gN.CURRENCY_B].toString(),re,Ie.toHexString()],v=null),Le(!0),e.next=10,d.apply(void 0,(0,t.Z)(u).concat([v?{value:v}:{}])).then((function(e){return c.apply(void 0,(0,t.Z)(u).concat([H(H({},v?{value:v}:{}),{},{gasLimit:(0,A.yC)(e)})])).then((function(e){var i,n,t,r,o,l;Le(!1),ii(e,{summary:ne._(ne._("Add {0} {1} and {2} {3}",{0:null===(i=je[x.gN.CURRENCY_A])||void 0===i?void 0:i.toSignificant(3),1:null===(n=ye[x.gN.CURRENCY_A])||void 0===n?void 0:n.symbol,2:null===(t=je[x.gN.CURRENCY_B])||void 0===t?void 0:t.toSignificant(3),3:null===(r=ye[x.gN.CURRENCY_B])||void 0===r?void 0:r.symbol}))}),Me(e.hash),gtag("event","Add",{event_category:"Liquidity",event_label:[null===(o=ye[x.gN.CURRENCY_A])||void 0===o?void 0:o.symbol,null===(l=ye[x.gN.CURRENCY_B])||void 0===l?void 0:l.symbol].join("/")})}))})).catch((function(e){Le(!1),(null===e||void 0===e?void 0:e.code)!==I.PM&&console.error(e)}));case 10:case"end":return e.stop()}}),e)}))),ti.apply(this,arguments)}var ri=be?(0,y.jsx)("div",{className:"pb-4",children:(0,y.jsxs)("div",{className:"flex items-center justify-start gap-3",children:[(0,y.jsx)("div",{className:"text-2xl font-bold text-high-emphesis",children:(null===(d=ye[x.gN.CURRENCY_A])||void 0===d?void 0:d.symbol)+"/"+(null===(j=ye[x.gN.CURRENCY_B])||void 0===j?void 0:j.symbol)}),(0,y.jsx)(f.Z,{currency0:ve,currency1:Ne,size:48})]})}):(0,y.jsxs)("div",{className:"pb-4",children:[(0,y.jsxs)("div",{className:"flex items-center justify-start gap-3",children:[(0,y.jsx)("div",{className:"text-xl font-bold md:text-3xl text-high-emphesis",children:null===Ue||void 0===Ue?void 0:Ue.toSignificant(6)}),(0,y.jsx)("div",{className:"grid grid-flow-col gap-2",children:(0,y.jsx)(f.Z,{currency0:ve,currency1:Ne,size:48})})]}),(0,y.jsxs)("div",{className:"text-lg font-medium md:text-2xl text-high-emphesis",children:[null===(E=ye[x.gN.CURRENCY_A])||void 0===E?void 0:E.symbol,"/",null===(G=ye[x.gN.CURRENCY_B])||void 0===G?void 0:G.symbol,"\xa0",ne._(ne._("Pool Tokens"))]}),(0,y.jsx)("div",{className:"pt-3 text-xs italic text-secondary",children:ne._(ne._("Output is estimated. If the price changes by more than {0}% your transaction\nwill revert.",{0:De.toSignificant(4)}))})]}),oi=(0,y.jsx)(_,{price:Ee,currencies:ye,parsedAmounts:je,noLiquidity:be,onAdd:ni,poolTokenPercentage:we}),li=ne._(ne._("Supplying {0} {1} and {2} {3}",{0:null===(Q=je[x.gN.CURRENCY_A])||void 0===Q?void 0:Q.toSignificant(6),1:null===(X=ye[x.gN.CURRENCY_A])||void 0===X?void 0:X.symbol,2:null===($=je[x.gN.CURRENCY_B])||void 0===$?void 0:$.toSignificant(6),3:null===(J=ye[x.gN.CURRENCY_B])||void 0===J?void 0:J.symbol})),di=(0,R.useCallback)((function(e){var i=(0,Y.Hh)(e);i===ue?de.push("/add/".concat(ue,"/").concat(ce)):de.push("/add/".concat(i,"/").concat(ue))}),[ue,de,ce]),si=(0,R.useCallback)((function(e){var i=(0,Y.Hh)(e);ce===i?ue?de.push("/add/".concat(ue,"/").concat(i)):de.push("/add/".concat(i)):de.push("/add/".concat(ce||"ETH","/").concat(i))}),[ce,de,ue]),ai=(0,R.useCallback)((function(){Se(!1),ze&&Oe(""),Me("")}),[Oe,ze]),ci=(0,k.G)(null===ye||void 0===ye?void 0:ye.CURRENCY_A,null===ye||void 0===ye?void 0:ye.CURRENCY_B);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(W.PB,{title:"Add Liquidity"}),(0,y.jsx)(T.ZP,{isOpen:Pe,onDismiss:ai,attemptingTxn:Te,hash:ze,content:(0,y.jsx)(T.pM,{title:be?ne._(ne._("You are creating a pool")):ne._(ne._("You will receive")),onDismiss:ai,topContent:ri,bottomContent:oi}),pendingText:li}),(0,y.jsxs)(q.yz,{children:[(0,y.jsxs)("div",{className:"grid items-center grid-cols-3",children:[(0,y.jsx)(c.Z,{width:24,height:24,className:"cursor-pointer text-high-emphesis hover:text-white focus:text-white",onClick:function(){return de.push("/pool")}}),(0,y.jsx)(h.Z,{weight:700,className:"text-center whitespace-nowrap text-high-emphesis",children:ne._(ne._("Add Liquidity"))}),(0,y.jsx)(g.Z,{className:"!w-6 !h-6 justify-self-end"})]}),(0,y.jsx)("div",{className:"flex flex-col gap-3",children:(0,y.jsx)(w.Z,{header:w.Z.Header,spendFromWallet:!0,value:Ve[x.gN.CURRENCY_A],onChange:Oe,onSelect:di,currency:ye[x.gN.CURRENCY_A]})}),(0,y.jsx)("div",{className:"z-0 flex justify-center -mt-6 -mb-6",children:(0,y.jsx)("div",{className:"p-1.5 rounded-full bg-dark-800 border shadow-md border-dark-700 hover:border-dark-600",children:(0,y.jsx)(u.Z,{width:14,className:"text-high-emphesis hover:text-white"})})}),(0,y.jsx)(w.Z,{header:w.Z.Header,spendFromWallet:!0,value:Ve[x.gN.CURRENCY_B],onChange:Ze,onSelect:si,currency:ye[x.gN.CURRENCY_B]}),ye[x.gN.CURRENCY_A]&&ye[x.gN.CURRENCY_B]&&_e!==S._G.INVALID&&(0,y.jsx)(b,{currencies:ye,price:Ee,noLiquidity:be,poolTokenPercentage:we,className:"bg-dark-900"}),ci?(0,y.jsx)(p.ZP,{color:"red",disabled:!0,fullWidth:!0,className:"rounded-2xl md:rounded",children:ne._(ne._("Unsupported Asset"))}):re?(0,y.jsxs)("div",{className:"flex flex-col gap-3",children:[He!==Z.UK.APPROVED&&He!==Z.UK.UNKNOWN&&(0,y.jsx)(p.ZP,{loading:He===Z.UK.PENDING,fullWidth:!0,onClick:Qe,disabled:He===Z.UK.PENDING,className:"rounded-2xl md:rounded",children:ne._(ne._("Approve {0}",{0:null===(ee=ye[x.gN.CURRENCY_A])||void 0===ee?void 0:ee.symbol}))}),Je!==Z.UK.APPROVED&&Je!==Z.UK.UNKNOWN&&(0,y.jsx)(p.ZP,{loading:Je===Z.UK.PENDING,fullWidth:!0,onClick:ei,disabled:Je===Z.UK.PENDING,className:"rounded-2xl md:rounded",children:ne._(ne._("Approve {0}",{0:null===(ie=ye[x.gN.CURRENCY_B])||void 0===ie?void 0:ie.symbol}))}),(0,y.jsx)(p.ZP,{fullWidth:!0,onClick:function(){fe?ni():Se(!0)},disabled:!Be||He!==Z.UK.APPROVED||Je!==Z.UK.APPROVED,className:"rounded-2xl md:rounded",children:null!==Ye&&void 0!==Ye?Ye:ne._(ne._("Add Liquidity"))})]}):(0,y.jsx)(m.Z,{color:"blue",variant:"filled",fullWidth:!0,className:"rounded-2xl md:rounded"}),ci&&(0,y.jsx)(U.Z,{currencies:[ye.CURRENCY_A,ye.CURRENCY_B]})]}),be&&(0,y.jsx)(h.Z,{variant:"xs",className:"px-10 mt-5 text-center text-yellow",children:ne._(ne._("When creating a pair you are the first liquidity provider. The ratio of tokens you add will set the price of this pool. Once you are happy with the rate, click supply to review"))}),(0,y.jsxs)(h.Z,{variant:"xs",className:"px-10 mt-5 text-center text-low-emphesis",children:[(0,y.jsx)(h.Z,{variant:"xs",weight:700,component:"span",children:"Tip"}),":"," ",ne._(ne._("By adding liquidity you'll earn 0.25% of all trades on this pair\nproportional to your share of the pool. Fees are added to the pool, accrue in real time and can be\nclaimed by withdrawing your liquidity."))]})]})}Q.Layout=(0,q.Pf)("add-page")},26168:function(e,i,n){"use strict";n.d(i,{OA:function(){return m},OY:function(){return h},Qw:function(){return C}});var t=n(16835),r=n(59499),o=n(14744),l=n(31518),d=n(60708),s=n(62603),a=n(97503),c=n(12614),u=n(16339),v=n(22986),N=n(67294),p=n(25617),f=n(30380),g=l.QA.BigInt(0);function h(){return(0,p.v9)((function(e){return e.mint}))}function m(e){var i=(0,u.T)();return{onFieldAInput:(0,N.useCallback)((function(n){i((0,f.LC)({field:f.gN.CURRENCY_A,typedValue:n,noLiquidity:!0===e}))}),[i,e]),onFieldBInput:(0,N.useCallback)((function(n){i((0,f.LC)({field:f.gN.CURRENCY_B,typedValue:n,noLiquidity:!0===e}))}),[i,e])}}function C(e,i){var n,u,p,m,C,x,R=(0,o.mV)().i18n,y=(0,c.aQ)().account,_=h(),j=_.independentField,E=_.typedValue,b=_.otherTypedValue,U=j===f.gN.CURRENCY_A?f.gN.CURRENCY_B:f.gN.CURRENCY_A,w=(0,N.useMemo)((function(){var n;return n={},(0,r.Z)(n,f.gN.CURRENCY_A,null!==e&&void 0!==e?e:void 0),(0,r.Z)(n,f.gN.CURRENCY_B,null!==i&&void 0!==i?i:void 0),n}),[e,i]),Y=(0,a.Oo)(w[f.gN.CURRENCY_A],w[f.gN.CURRENCY_B]),A=(0,t.Z)(Y,2),O=A[0],Z=A[1],B=(0,s.A)(null===Z||void 0===Z?void 0:Z.liquidityToken),k=O===a._G.NOT_EXISTS||Boolean(B&&l.QA.equal(B.quotient,g))||Boolean(O===a._G.EXISTS&&Z&&l.QA.equal(Z.reserve0.quotient,g)&&l.QA.equal(Z.reserve1.quotient,g)),P=(0,v.K5)(null!==y&&void 0!==y?y:void 0,[w[f.gN.CURRENCY_A],w[f.gN.CURRENCY_B]]),S=(n={},(0,r.Z)(n,f.gN.CURRENCY_A,P[0]),(0,r.Z)(n,f.gN.CURRENCY_B,P[1]),n),q=(0,d.e)(E,w[j]),T=(0,N.useMemo)((function(){if(k)return b&&w[U]?(0,d.e)(b,w[U]):void 0;if(q){var n=null===q||void 0===q?void 0:q.wrapped,t=null===e||void 0===e?void 0:e.wrapped,r=null===i||void 0===i?void 0:i.wrapped;if(t&&r&&n&&Z){var o=U===f.gN.CURRENCY_B?i:e,s=U===f.gN.CURRENCY_B?Z.priceOf(t).quote(n):Z.priceOf(r).quote(n);return null!==o&&void 0!==o&&o.isNative?l.ih.fromRawAmount(o,s.quotient):s}}else;}),[k,b,w,U,q,e,i,Z]),L=(0,N.useMemo)((function(){var e;return e={},(0,r.Z)(e,f.gN.CURRENCY_A,j===f.gN.CURRENCY_A?q:T),(0,r.Z)(e,f.gN.CURRENCY_B,j===f.gN.CURRENCY_A?T:q),e}),[T,q,j]),I=(0,N.useMemo)((function(){if(!k){var i=null===e||void 0===e?void 0:e.wrapped;return Z&&i?Z.priceOf(i):void 0}var n=L[f.gN.CURRENCY_A],t=L[f.gN.CURRENCY_B];if(null!==n&&void 0!==n&&n.greaterThan(0)&&null!==t&&void 0!==t&&t.greaterThan(0)){var r=t.divide(n);return new l.tA(n.currency,t.currency,r.denominator,r.numerator)}}),[e,k,Z,L]),D=(0,N.useMemo)((function(){var e=L[f.gN.CURRENCY_A],i=L[f.gN.CURRENCY_B],n=null===e||void 0===e?void 0:e.wrapped,t=null===i||void 0===i?void 0:i.wrapped;if(Z&&B&&n&&t)try{return Z.getLiquidityMinted(B,n,t)}catch(m){return void console.error(m)}}),[L,Z,B]),K=(0,N.useMemo)((function(){return D&&B?new l.gG(D.quotient,B.add(D).quotient):void 0}),[D,B]);(y||(m=R._(R._("Connect Wallet"))),O===a._G.INVALID)&&(m=null!==(C=m)&&void 0!==C?C:R._(R._("Invalid pair")));L[f.gN.CURRENCY_A]&&L[f.gN.CURRENCY_B]||(m=null!==(x=m)&&void 0!==x?x:R._(R._("Enter an amount")));var z,M,V=L[f.gN.CURRENCY_A],F=L[f.gN.CURRENCY_B];V&&null!==S&&void 0!==S&&null!==(u=S[f.gN.CURRENCY_A])&&void 0!==u&&u.lessThan(V)&&(m=R._(R._("Insufficient {0} balance",{0:null===(z=w[f.gN.CURRENCY_A])||void 0===z?void 0:z.symbol})));F&&null!==S&&void 0!==S&&null!==(p=S[f.gN.CURRENCY_B])&&void 0!==p&&p.lessThan(F)&&(m=R._(R._("Insufficient {0} balance",{0:null===(M=w[f.gN.CURRENCY_B])||void 0===M?void 0:M.symbol})));return{dependentField:U,currencies:w,pair:Z,pairState:O,currencyBalances:S,parsedAmounts:L,price:I,noLiquidity:k,liquidityMinted:D,poolTokenPercentage:K,error:m}}},15795:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/legacy/add/[[...tokens]]",function(){return n(16029)}])},24635:function(e,i,n){"use strict";var t=n(67294);const r=t.forwardRef((function(e,i){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:i},e),t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}))}));i.Z=r},93973:function(e,i,n){"use strict";var t=n(67294);const r=t.forwardRef((function(e,i){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:i},e),t.createElement("path",{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"}))}));i.Z=r},25159:function(e,i,n){"use strict";var t=n(67294);const r=t.forwardRef((function(e,i){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:i},e),t.createElement("path",{fillRule:"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",clipRule:"evenodd"}))}));i.Z=r},2905:function(e,i,n){"use strict";var t=n(67294);const r=t.forwardRef((function(e,i){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:i},e),t.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}))}));i.Z=r}},function(e){e.O(0,[8306,8529,2749,1641,129,7230,3389,9658,6688,3935,210,2589,9774,2888,179],(function(){return i=15795,e(e.s=i);var i}));var i=e.O();_N_E=i}]);