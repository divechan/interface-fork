(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1831],{46206:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(56727),i=n(94323),a=n(51183),o=n(71862),s=n(31969),u=n(67294),l=n(34155);function c(e){return e.startsWith("/")?"".concat(l.env.NEXT_PUBLIC_STRAPI_API_URL||"http://localhost:1337").concat(e):e}var d=n(85893),m=function(e){var t=e.banners,n=t.filter((function(e){var t=e.attributes,n=t.startDate,r=t.endDate,i=(new Date).getTime(),a=new Date(n).getTime(),o=new Date(r).getTime();return i>a&&i<o})),l=(0,u.useState)(Math.floor(Math.random()*n.length)),m=l[0],v=l[1],p=(0,u.useCallback)((function(){v((function(e){return(e+1)%t.length}))}),[t.length]),f=(0,u.useCallback)((function(){v((function(e){return(e-1+t.length)%t.length}))}),[t.length]);if(0===t.length)return(0,d.jsx)(d.Fragment,{});var h=n.map((function(e,t){var n=e.attributes,i=n.image,a=n.url;return(0,d.jsx)("div",{className:(0,s.AK)(t===m?"block":"hidden","h-[96px] absolute inset-0 flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform slide"),children:(0,d.jsx)(r.uT,{as:u.Fragment,show:t===m,enter:"transform transition duration-[200ms]",enterFrom:"opacity-0 scale-90",enterTo:"opacity-100 scale-100",leave:"transform duration-200 transition ease-in-out",leaveFrom:"opacity-100 rotate-0 scale-100 ",leaveTo:"opacity-0 scale-95 ",children:(0,d.jsx)("a",{rel:"noreferrer",href:a,target:"_blank",className:"block w-full py-12 rounded cursor-pointer",style:{backgroundImage:"url(".concat(c(i.data.attributes.url),")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},children:(0,d.jsx)("div",{className:"flex items-center justify-between gap-6 pl-5 pr-8"})})})},t)}));return(0,d.jsx)("div",{className:"flex flex-col justify-center",children:(0,d.jsxs)("div",{className:"relative h-[96px] mt-4",children:[h,h.length>1&&(0,d.jsxs)("div",{className:"flex items-center justify-between w-full h-full",children:[(0,d.jsx)(o.ZP,{onClick:f,className:"flex items-center -ml-12",children:(0,d.jsx)(i.Z,{width:24,className:"hover:text-white text-low-emphesis"})}),(0,d.jsx)(o.ZP,{onClick:p,className:"flex items-center -mr-12",children:(0,d.jsx)(a.Z,{width:24,className:"hover:text-white text-low-emphesis"})})]})]})})}},76537:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(14744),i=n(31518),a=n(31969),o=n(15174),s=n(61647),u=n(23816),l=n(67294),c=n(71862),d=n(10697),m=n(85893),v=function(e){var t=e.onConfirm,n=e.swapErrorMessage,i=e.disabledConfirm,a=(0,r.mV)().i18n;return(0,m.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,m.jsx)(c.ZP,{onClick:t,disabled:i,id:"confirm-swap-or-send",color:"blue",children:a._(a._("Confirm Swap"))}),n&&(0,m.jsx)(d.Z,{error:n})]})},p=n(41626),f=n(46430),h=n(56785),g=n(33318),x=n(90573),y=n(42660),b=function(e){var t=e.trade,n=e.recipient,a=e.showAcceptChanges,o=e.onAcceptChanges,s=e.inputAmount,u=e.minimumAmountOut,l=e.outputAmount,d=e.maximumAmountIn,v=(0,r.mV)().i18n,b=(0,x.NF)(s),w=(0,x.NF)(l),j=(Number(null===w||void 0===w?void 0:w.toExact())-Number(null===b||void 0===b?void 0:b.toExact()))/Number(null===b||void 0===b?void 0:b.toExact())*100;return(0,m.jsxs)("div",{className:"grid gap-2",children:[(0,m.jsxs)("div",{className:"flex flex-col",children:[(0,m.jsx)(f.Z.BorderedContent,{className:"bg-dark-1000/40 border !border-dark-800 rounded-2xl",children:(0,m.jsxs)("div",{className:"flex items-start justify-between",children:[(0,m.jsx)("div",{className:"flex items-start gap-3",children:(0,m.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,m.jsxs)(h.Z,{variant:"h3",weight:700,className:"text-high-emphesis",children:[null===s||void 0===s?void 0:s.toSignificant(6)," "]}),(null===b||void 0===b?void 0:b.greaterThan(i.xE))&&(0,m.jsxs)(h.Z,{className:"text-secondary",children:["$",b.toFixed(2)]})]})}),(0,m.jsxs)("div",{className:"flex items-center gap-3",children:[(0,m.jsx)(p.X,{currency:null===s||void 0===s?void 0:s.currency,size:18,className:"!rounded-full overflow-hidden"}),(0,m.jsx)(h.Z,{variant:"lg",weight:700,className:"text-high-emphesis",children:null===s||void 0===s?void 0:s.currency.symbol})]})]})}),(0,m.jsx)("div",{className:"flex justify-center -mt-3 -mb-3",children:(0,m.jsx)("div",{className:"border-2 border-dark-800 shadow-md rounded-full p-1 backdrop-blur-[20px] z-10",children:(0,m.jsx)(y.Z,{size:18})})}),(0,m.jsx)(f.Z.BorderedContent,{className:"bg-dark-1000/40 border !border-dark-800",children:(0,m.jsxs)("div",{className:"flex items-start justify-between",children:[(0,m.jsx)("div",{className:"flex items-start gap-3",children:(0,m.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,m.jsxs)(h.Z,{variant:"h3",weight:700,className:"text-high-emphesis",children:[null===l||void 0===l?void 0:l.toSignificant(6)," "]}),(null===w||void 0===w?void 0:w.greaterThan(i.xE))&&(0,m.jsxs)(h.Z,{className:"text-secondary",children:["$",null===w||void 0===w?void 0:w.toFixed(2)," ",(0,m.jsxs)(h.Z,{variant:"xs",component:"span",children:["(",j.toFixed(2),"%)"]})]})]})}),(0,m.jsxs)("div",{className:"flex items-center gap-3",children:[(0,m.jsx)(p.X,{currency:null===l||void 0===l?void 0:l.currency,size:18,className:"!rounded-full overflow-hidden"}),(0,m.jsx)(h.Z,{variant:"lg",weight:700,className:"text-high-emphesis",children:null===l||void 0===l?void 0:l.currency.symbol})]})]})})]}),(0,m.jsx)(g.Z,{trade:t,recipient:n,inputCurrency:null===s||void 0===s?void 0:s.currency,outputCurrency:null===l||void 0===l?void 0:l.currency,inputAmount:s,outputAmount:l,minimumAmountOut:u,className:"!border-dark-800"}),a&&(0,m.jsx)(f.Z.BorderedContent,{className:"border !border-dark-800",children:(0,m.jsxs)("div",{className:"flex items-center justify-between",children:[(0,m.jsx)(h.Z,{variant:"sm",weight:700,children:v._(v._("Price Updated"))}),(0,m.jsx)(c.ZP,{variant:"outlined",size:"xs",color:"blue",onClick:o,children:v._(v._("Accept"))})]})}),(0,m.jsx)("div",{className:"justify-start text-sm text-center text-secondary py-2",children:(null===t||void 0===t?void 0:t.tradeType)===i.YL.EXACT_INPUT?(0,m.jsxs)(h.Z,{variant:"xs",className:"text-secondary",children:[v._(v._("Output is estimated. You will receive at least"))," ",(0,m.jsxs)(h.Z,{variant:"xs",className:"text-high-emphesis",weight:700,component:"span",children:[null===u||void 0===u?void 0:u.toSignificant(6)," ",null===l||void 0===l?void 0:l.currency.symbol]})," ",v._(v._("or the transaction will revert."))]}):(0,m.jsxs)(h.Z,{variant:"xs",className:"text-secondary",children:[v._(v._("Input is estimated. You will sell at most"))," ",(0,m.jsxs)(h.Z,{variant:"xs",className:"text-high-emphesis",weight:700,component:"span",children:[null===d||void 0===d?void 0:d.toSignificant(6)," ",null===s||void 0===s?void 0:s.currency.symbol]})," ",v._(v._("or the transaction will revert."))]})})]})};var w=function(e){var t,n,c=e.trade,d=e.originalTrade,p=e.onAcceptChanges,f=e.allowedSlippage,h=e.onConfirm,g=e.onDismiss,x=e.recipient,y=e.swapErrorMessage,w=e.isOpen,j=e.attemptingTxn,A=e.txHash,N=(0,r.mV)().i18n,T=(0,s.Z)([null===c||void 0===c?void 0:c.inputAmount.currency,null===c||void 0===c?void 0:c.outputAmount.currency]),S=T.rebases,_=T.loading,P=(0,l.useMemo)((function(){return Boolean(c&&d&&function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[0],i=t[1];return r.tradeType!==i.tradeType||!r.inputAmount.currency.equals(i.inputAmount.currency)||!r.inputAmount.equalTo(i.inputAmount)||!r.outputAmount.currency.equals(i.outputAmount.currency)||!r.outputAmount.equalTo(i.outputAmount)}(c,d))}),[d,c]),E=(0,l.useMemo)((function(){if((0,o.C)(c)===i.G1.V2TRADE)return[null===c||void 0===c?void 0:c.inputAmount,null===c||void 0===c?void 0:c.outputAmount,null===c||void 0===c?void 0:c.maximumAmountIn(f),null===c||void 0===c?void 0:c.minimumAmountOut(f)];if(_)return[void 0,void 0,void 0,void 0];var e=null!==c&&void 0!==c&&c.inputAmount.currency.wrapped.address?S[c.inputAmount.currency.wrapped.address]:void 0,t=null!==c&&void 0!==c&&c.outputAmount.currency.wrapped.address?S[c.outputAmount.currency.wrapped.address]:void 0;return[null!==c&&void 0!==c&&c.inputAmount&&e?(0,a.nP)(e,c.inputAmount.wrapped):void 0,null!==c&&void 0!==c&&c.outputAmount&&t?(0,a.nP)(t,c.outputAmount.wrapped):void 0,null!==c&&void 0!==c&&c.maximumAmountIn(f)&&e?(0,a.nP)(e,null===c||void 0===c?void 0:c.maximumAmountIn(f).wrapped):void 0,null!==c&&void 0!==c&&c.minimumAmountOut(f)&&t?(0,a.nP)(t,null===c||void 0===c?void 0:c.minimumAmountOut(f).wrapped):void 0]}),[f,_,S,c]),I=E[0],k=E[1],O=E[2],F=E[3],Z="Swapping ".concat(null===I||void 0===I?void 0:I.toSignificant(6)," ").concat(null===I||void 0===I||null===(t=I.currency)||void 0===t?void 0:t.symbol," for ").concat(null===k||void 0===k?void 0:k.toSignificant(6)," ").concat(null===k||void 0===k||null===(n=k.currency)||void 0===n?void 0:n.symbol);return(0,m.jsx)(u.ZP,{isOpen:w,onDismiss:g,attemptingTxn:j,hash:A,content:y?(0,m.jsx)(u.ht,{onDismiss:g,message:y}):(0,m.jsx)(u.pM,{title:N._(N._("Confirm Swap")),onDismiss:g,topContent:(0,m.jsx)(b,{trade:c,recipient:x,showAcceptChanges:P,onAcceptChanges:p,inputAmount:I,outputAmount:k,maximumAmountIn:O,minimumAmountOut:F}),bottomContent:(0,m.jsx)(v,{onConfirm:h,disabledConfirm:P,swapErrorMessage:y})}),pendingText:Z,currencyToAdd:null===c||void 0===c?void 0:c.outputAmount.currency})}},10697:function(e,t,n){"use strict";var r=n(56785),i=(n(67294),n(85893));t.Z=function(e){var t=e.error;return(0,i.jsx)("div",{className:"flex items-center justify-center gap-2 text-red",children:(0,i.jsx)(r.Z,{variant:"sm",weight:700,children:t})})}},33318:function(e,t,n){"use strict";var r=n(27812),i=n(16835),a=n(56727),o=n(61782),s=n(56365),u=n(14744),l=n(31518),c=n(17988),d=n(17141),m=n(56785),v=n(15503),p=n(31969),f=n(15174),h=n(68326),g=n(96033),x=n(67801),y=n(12614),b=n(68273),w=n(627),j=n(41664),A=n.n(j),N=n(67294),T=n(18269),S=n(85893),_=function(e){var t,n,a=e.trade,o=e.recipient,d=e.inputAmount,v=e.outputAmount,f=e.minimumAmountOut,j=(0,u.mV)().i18n,_=(0,y.aQ)().chainId,P=(0,x.Z)(a),E=f||(null===a||void 0===a?void 0:a.minimumAmountOut(P)),I=a?(0,p.GS)(a):void 0,k=(0,g.Z)(),O=(0,w.DG)(),F=(0,i.Z)(O,1)[0],Z=(0,h.Z)(),D=Z.maxFeePerGas,C=Z.maxPriorityFeePerGas,G=(0,b.dU)(),R=G.maxFee,L=G.maxPriorityFee,U=v||(null===a||void 0===a?void 0:a.outputAmount),M=(d||(null===a||void 0===a||a.inputAmount),F&&R?R:D),V=F&&L?L:C,q=(0,N.useMemo)((function(){return a instanceof l.ho?a.route.path:a instanceof c.ho?a.route.legs.reduce((function(e,t,n){return 1===a.route.legs.length||a.route.legs.length-1===n?[].concat((0,r.Z)(e),[t.tokenFrom,t.tokenTo]):[].concat((0,r.Z)(e),[t.tokenFrom])}),[]):[]}),[a]),B=(0,N.useMemo)((function(){if(a instanceof l.ho){var e=(0,p.GS)(a);return a.priceImpact.subtract(e)}return a instanceof c.ho?100*Number(a.route.priceImpact):0}),[a]),Y=(0,N.useMemo)((function(){if(B){if(B instanceof l.gG){if(B.lessThan("0"))return"text-green";var e=(0,p.oX)(B);if(e<1)return"text-primary";if(e<3)return"text-yellow"}else if("number"===typeof B){if(B<0)return"text-green";if(B<.01)return"text-primary";if(B<.03)return"text-yellow"}return"text-red"}}),[B]);return(0,S.jsxs)("div",{className:"flex flex-col divide-y divide-dark-850",children:[(0,S.jsxs)("div",{className:"flex flex-col gap-1 pb-2",children:[(0,S.jsxs)("div",{className:"flex justify-between gap-4",children:[(0,S.jsx)(m.Z,{variant:"xs",children:j._(j._("Expected Output"))}),(0,S.jsxs)(m.Z,{weight:700,variant:"xs",className:"text-right",children:[null===U||void 0===U?void 0:U.toSignificant(6)," ",null===U||void 0===U?void 0:U.currency.symbol]})]}),(0,S.jsxs)("div",{className:"flex justify-between gap-4",children:[(0,S.jsx)(m.Z,{variant:"xs",children:j._(j._("Price Impact"))}),(0,S.jsxs)(m.Z,{variant:"xs",className:(0,p.AK)("text-right",Y),children:[B instanceof l.gG?"".concat(B.multiply(-1).toFixed(2),"%"):null,"number"===typeof B?"".concat(-(null===B||void 0===B?void 0:B.toFixed(2)),"%"):null]})]}),o&&(0,T.isAddress)(o)&&(0,S.jsxs)("div",{className:"flex justify-between gap-4",children:[(0,S.jsx)(m.Z,{variant:"xs",children:j._(j._("Recipient"))}),(0,S.jsx)(m.Z,{variant:"xs",className:"text-right",children:(0,p.Xn)(o)})]})]}),(0,S.jsxs)("div",{className:"flex flex-col gap-1 pt-2",children:[(0,S.jsxs)("div",{className:"flex justify-between gap-4",children:[(0,S.jsxs)(m.Z,{variant:"xs",className:"text-secondary",children:[j._(j._("Minimum received after slippage"))," (",P.toFixed(2),"%)"]}),(0,S.jsxs)(m.Z,{variant:"xs",className:"text-right text-secondary",children:[null===E||void 0===E?void 0:E.toSignificant(6)," ",null===E||void 0===E?void 0:E.currency.symbol]})]}),I&&(0,S.jsxs)("div",{className:"flex justify-between gap-4",children:[(0,S.jsx)(m.Z,{variant:"xs",className:"text-secondary",children:j._(j._("Liquidity provider fee"))}),(0,S.jsxs)(m.Z,{variant:"xs",className:"text-right text-secondary",children:[I.toFixed(2),"%"]})]}),q&&(0,S.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,S.jsx)(m.Z,{variant:"xs",className:"text-secondary",children:j._(j._("Route"))}),(0,S.jsx)(m.Z,{variant:"xs",className:"text-right text-secondary",children:q.map((function(e){return e.symbol})).join(" > ")})]})]}),k&&(0,S.jsxs)("div",{className:"flex flex-col gap-1 py-2",children:[(0,S.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,S.jsx)(m.Z,{variant:"xs",className:"text-secondary",children:j._(j._("SushiGuard Gas Rebate"))}),(0,S.jsx)(A(),{href:"https://docs.openmev.org/",passHref:!0,children:(0,S.jsx)("a",{target:"_blank",children:(0,S.jsxs)(m.Z,{variant:"xs",className:"flex items-center justify-end gap-1 text-right text-blue",children:[j._(j._("Enabled")),(0,S.jsx)(s.Z,{width:12})]})})})]}),(0,S.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,S.jsx)(m.Z,{variant:"xs",className:"text-secondary",children:j._(j._("Max Fee"))}),(0,S.jsxs)(m.Z,{variant:"xs",className:"text-right text-secondary",children:[_&&M&&(null===(t=l.ih.fromRawAmount(l.B5[_],(0,T.toWei)(M.toString(),"gwei")))||void 0===t?void 0:t.toSignificant(6))," ","GWEI"]})]}),(0,S.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,S.jsx)(m.Z,{variant:"xs",className:"text-secondary",children:j._(j._("Max Priority Fee"))}),(0,S.jsxs)(m.Z,{variant:"xs",className:"text-right text-secondary",children:[_&&V&&(null===(n=l.ih.fromRawAmount(l.B5[_],(0,T.toWei)(V.toString(),"gwei")))||void 0===n?void 0:n.toSignificant(6))," ","GWEI"]})]})]})]})};t.Z=function(e){var t=e.inputCurrency,n=e.outputCurrency,r=e.recipient,i=e.trade,s=e.inputAmount,u=e.outputAmount,c=e.minimumAmountOut,m=e.className,h=(0,N.useState)(!1),g=h[0],x=h[1];return(0,S.jsx)(a.pJ,{as:"div",children:function(e){var h=e.open;return(0,S.jsxs)("div",{className:(0,p.AK)(h?"bg-dark-900":"","shadow-inner flex flex-col gap-2 py-2 rounded px-2 border border-dark-700 transition hover:border-dark-700",m),children:[(0,S.jsxs)("div",{className:"flex items-center justify-between gap-2 pl-2",children:[(0,S.jsx)("div",{children:(0,S.jsx)(v.Z,{inputCurrency:t,outputCurrency:n,price:null===i||void 0===i?void 0:i.executionPrice,showInverted:g,setShowInverted:x})}),(0,S.jsx)(a.pJ.Button,{as:N.Fragment,children:(0,S.jsxs)("div",{className:"flex items-center justify-end flex-grow gap-2 p-1 rounded cursor-pointer",children:[(0,S.jsx)(d.Z,{size:"sm",id:"trade-type",label:(0,f.C)(i)===l.G1.V2TRADE?"Legacy":"Trident",color:(0,f.C)(i)===l.G1.V2TRADE?"blue":"green"}),(0,S.jsx)(o.Z,{width:20,className:(0,p.AK)(h?"transform rotate-180":"","transition hover:text-white")})]})})]}),(0,S.jsx)(a.uT,{show:h,enter:"transition duration-100 ease-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",unmount:!1,children:(0,S.jsx)(a.pJ.Panel,{static:!0,className:"px-1 pt-2",children:(0,S.jsx)(_,{trade:i,recipient:r,inputAmount:s,outputAmount:u,minimumAmountOut:c})})})]})}})}},67347:function(e,t,n){"use strict";n.d(t,{CG:function(){return s},H7:function(){return o},Il:function(){return c},VU:function(){return m},Wb:function(){return u},gc:function(){return l},uE:function(){return d},x:function(){return a}});var r=n(84243),i=n(31518),a=function(e){var t=e.contract,n=e.fn,r=e.args;return t.interface.encodeFunctionData(n,r)},o=function(e){var t=e.contract,n=e.actions,r=(void 0===n?[]:n).filter(Boolean);if(0===r.length)throw new Error("No valid actions");return 1===r.length?r[0]:r.length>1?t.interface.encodeFunctionData("multicall",[r]):void 0},s=function(e){var t=e.router,n=e.address,i=e.amount,a=e.recipient,o=e.receiveToWallet,s=e.liquidityOutput;return t.interface.encodeFunctionData("burnLiquidity",[n,i,r.$.encode(["address","bool"],[a,o]),s])},u=function(e){var t=e.router,n=e.token,i=e.address,a=e.amount,o=e.recipient,s=e.receiveToWallet,u=e.minWithdrawal;return t.interface.encodeFunctionData("burnLiquiditySingle",[i,a,r.$.encode(["address","address","bool"],[n,o,s]),u])},l=function(e){var t=e.chainId,n=e.router,r=e.recipient,a=e.amountMinimum;return t===i.a_.MATIC?n.interface.encodeFunctionData("unwrapWETH",[a,r]):n.interface.encodeFunctionData("unwrapWETH",[r])},c=function(e){var t=e.router,n=e.token,r=e.amount,i=e.recipient;return t.interface.encodeFunctionData("sweepNativeToken",[n,r,i])},d=function(e){var t=e.router,n=e.signature;if(n){var r=n.v,i=n.r,a=n.s;return t.interface.encodeFunctionData("approveMasterContract",[r,i,a])}},m=function(e){var t=e.router,n=e.signatureData;if(n){var r=n.tokenAddress,i=n.amount,a=n.deadline,o=n.v,s=n.r,u=n.s;return t.interface.encodeFunctionData("selfPermit",[r,i,a,o,s,u])}}},15174:function(e,t,n){"use strict";n.d(t,{C:function(){return i}});var r=n(31518);function i(e){if(e)return e instanceof r.ho?r.G1.V2TRADE:r.G1.V3TRADE}},68326:function(e,t,n){"use strict";var r=n(59499),i=n(50029),a=n(87794),o=n.n(a),s=n(16682),u=n(69328),l=n(12614),c=n(67294);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(){var e=(0,l.aQ)(),t=e.chainId,n=e.library,r=(0,u.ZP)(),a=(0,c.useState)({maxFeePerGas:null,maxPriorityFeePerGas:null,gasPrice:null}),d=a[0],v=a[1],p=!(!t||!r)&&r>=Number(s.rW[t]);return(0,c.useEffect)((function(){var e=function(){var e=(0,i.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null===n||void 0===n?void 0:n.getFeeData());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then((function(e){e&&v(e)}))}),[n,r]),m(m({},d),{},{eip1559:p})}},22651:function(e,t,n){"use strict";n.d(t,{od:function(){return se}});var r=n(50029),i=n(16835),a=n(59499),o=n(4730),s=n(87794),u=n.n(s),l=n(32601),c=n(2832),d=n.n(c),m=n(66052),v=n(84243),p=n(2593),f=n(635),h=n(16441),g=n(9279),x=n(31518),y=n(17988),b=n(16682),w=n(38239),j=n(67347),A=n(31969);function N(e){var t=x.QA.BigInt(e).toString(16);return t.length%2!==0&&(t="0".concat(t)),"0x".concat(t)}var T=new(n(8198).vU)([{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}]);function S(e,t){if(!e.currency.isToken)throw new Error("Must call with an amount of token");var n=T.encodeFunctionData("approve",[t,N(e.quotient)]);return{to:e.currency.address,data:n,value:"0x0"}}var _=n(47448),P=n(92659),E=n(84853),I=n(61647),k=n(69328),O=n(12614),F=n(53344),Z=n(16339),D=n(53134),C=n(68273),G=n(68411),R=n(627),L=n(39209),U=n(67294),M=n(70185),V=JSON.parse('[{"inputs":[{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"_transactions","type":"tuple[]"}],"name":"wc_multiCall","outputs":[{"internalType":"bytes[]","name":"","type":"bytes[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_msgHash","type":"bytes32"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"isValidSignature","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"view","type":"function"}]'),q=n(54907),B=n(67993);var Y,X=n(46472),W=n(66367),z=n(48764).Buffer,H=["routeType"];function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function J(e,t,n,r){var i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],a=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];return{amountIn:i?r.quotient.toString().toBigNumber(0):(0,y.Xq)(e.amountIn*e.legs[0].absolutePortion),amountOutMinimum:(0,y.Xq)(e.amountOut*n),tokenIn:r.currency.isNative&&i?g.d:e.legs[0].tokenFrom.address,pool:e.legs[0].poolAddress,data:v.$.encode(["address","address","bool"],[e.legs[0].tokenFrom.address,t,a]),routeType:y.Yt.SinglePool}}function K(e,t,n,r){for(var i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],a=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],o=e.legs.length,s=[],u=0;u<o;++u){var l=te(u,e),c=l?t:e.legs[u+1].poolAddress,d={pool:e.legs[u].poolAddress,data:v.$.encode(["address","address","bool"],[e.legs[u].tokenFrom.address,c,l&&a])};s.push(d)}var m={tokenIn:r.currency.isNative&&i?g.d:e.legs[0].tokenFrom.address,amountIn:i?r.quotient.toString().toBigNumber(0):(0,y.Xq)(e.amountIn),amountOutMinimum:(0,y.Xq)(e.amountOut*n),path:s,routeType:y.Yt.SinglePath};return m}function ee(e,t,n,r,i){var a=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],o=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],s=[],u=[],l=[],c=e.legs.length,d=e.legs.filter((function(t){return t.tokenFrom.address===e.fromToken.address})).length,m={token:e.toToken.wrapped.address,to:t,unwrapBento:o,minAmount:(0,y.Xq)(e.amountOut*r)};l.push(m);for(var p=e.fromToken.wrapped.address,f=0;f<c;++f)if(e.legs[f].tokenFrom.address===p){var h={tokenIn:i.currency.isNative&&a?g.d:e.legs[f].tokenFrom.address,pool:e.legs[f].poolAddress,amount:ie(f,e,s,d,i,a),native:i.currency.isNative||a,data:v.$.encode(["address","address","bool"],[e.legs[f].tokenFrom.address,n,!1])};s.push(h)}else{var x={tokenIn:e.legs[f].tokenFrom.address,pool:e.legs[f].poolAddress,balancePercentage:(0,y.Xq)(e.legs[f].swapPortion*Math.pow(10,8)),data:v.$.encode(["address","address","bool"],[e.legs[f].tokenFrom.address,n,!1])};u.push(x)}var b={initialPath:s,percentagePath:u,output:l,routeType:y.Yt.ComplexPath};return b}function te(e,t){return e===t.legs.length-1}function ne(e){if(1===e.legs.length)return y.Yt.SinglePool;var t=e.legs.map((function(e){return e.tokenFrom.address}));return new Set(t).size===t.length?y.Yt.SinglePath:new Set(t).size!==t.length?y.Yt.ComplexPath:y.Yt.Unknown}function re(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e6;return e.mulDiv(Math.round(t*n),n)}function ie(e,t,n,r,i){var a=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];if(r>1&&e===r-1){var o=n.map((function(e){return e.amount})).reduce((function(e,t){return e.add(t)}));return a?i.quotient.toString().toBigNumber(0).sub(o):(0,y.Xq)(t.amountIn).sub(o)}return a?re(i.quotient.toString().toBigNumber(0),t.legs[e].absolutePortion):(0,y.Xq)(t.amountIn*t.legs[e].absolutePortion)}function ae(e,t,n,r,i){var s=(0,O.aQ)(),u=s.account,l=s.chainId,c=s.library,d=(0,X.Z)(n).address,m=null===n?u:d,v=(0,W.Z)(),p=(0,q.Ti)(),f=(0,q.sL)(),h=function(){var e=(0,O.aQ)().account,t=(0,B.Z)();return(0,q.cq)(t&&null!==e&&void 0!==e?e:void 0,V,!0)}(),g=(0,I.C)(null===e||void 0===e?void 0:e.inputAmount.currency).rebase;return(0,U.useMemo)((function(){var n=[];if((0,A.vR)(w.L.BENTOBOX,l)&&!g||!e||!m||!c||!u||!l)return n;if(e instanceof x.ho){if(!p||!v)return n;var r=[];return r.push(x.F0.swapCallParameters(e,{feeOnTransfer:!1,allowedSlippage:t,recipient:m,deadline:v.toNumber()})),e.tradeType===x.YL.EXACT_INPUT&&r.push(x.F0.swapCallParameters(e,{feeOnTransfer:!0,allowedSlippage:t,recipient:m,deadline:v.toNumber()})),n=r.map((function(n){var r=n.methodName,i=n.args,a=n.value;return h&&e.inputAmount.currency.isToken?{address:h.address,calldata:h.interface.encodeFunctionData("wc_multiCall",[[S(e.maximumAmountIn(t),p.address),{to:p.address,value:a,data:p.interface.encodeFunctionData(r,i)}]]),value:"0x0"}:{address:p.address,calldata:p.interface.encodeFunctionData(r,i),value:a}})),n}if(e instanceof y.ho){var s,d,b,N;if(!i)return n;var T=i.parsedAmounts,_=i.receiveToWallet,P=i.fromWallet,E=i.bentoPermit;if(!f||!e.route||null===T||void 0===T||!T[0])return n;var I=function(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,a=arguments.length>4?arguments[4]:void 0,o=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],s=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],u=ne(e),l=1-i/100;switch(u){case y.Yt.SinglePool:n=J(e,t,l,a,o,s);break;case y.Yt.SinglePath:n=K(e,t,l,a,o,s);break;case y.Yt.ComplexPath:default:n=ee(e,t,r,l,a,o,s)}return n}(e.route,null!==e&&void 0!==e&&null!==(s=e.outputAmount)&&void 0!==s&&s.currency.isNative&&_?null===f||void 0===f?void 0:f.address:m,null===f||void 0===f?void 0:f.address,Number(t.asFraction.multiply(100).toSignificant(2)),T[0],P,_),k=I.routeType,O=(0,o.Z)(I,H),F=(d={},(0,a.Z)(d,y.Yt.SinglePool,P?"exactInputSingleWithNativeToken":"exactInputSingle"),(0,a.Z)(d,y.Yt.SinglePath,P?"exactInputWithNativeToken":"exactInput"),(0,a.Z)(d,y.Yt.ComplexPath,"complexPath"),d),Z="0x0";T[0]&&P&&null!==e&&void 0!==e&&null!==(b=e.inputAmount.currency)&&void 0!==b&&b.isNative&&(Z=(0,x.NC)(T[0]));var D=[(0,j.uE)({router:f,signature:E}),f.interface.encodeFunctionData(F[k],[O])];return null!==e&&void 0!==e&&null!==(N=e.outputAmount)&&void 0!==N&&N.currency.isNative&&_&&D.push((0,j.gc)({chainId:l,router:f,recipient:m,amountMinimum:null===e||void 0===e?void 0:e.minimumAmountOut(t).quotient.toString()})),n.push({address:f.address,calldata:(0,j.H7)({contract:f,actions:D}),value:Z}),n}return n}),[u,t,h,l,v,p,c,g,m,e,f,i])}function oe(e){for(var t,n,r;Boolean(e);){var i,a,o,s;r=null!==(i=null!==(a=e.reason)&&void 0!==a?a:e.message)&&void 0!==i?i:r,e=null!==(o=e.error)&&void 0!==o?o:null===(s=e.data)||void 0===s?void 0:s.originalError}switch(0===(null===(t=r)||void 0===t?void 0:t.indexOf("execution reverted: "))&&(r=r.substr("execution reverted: ".length)),r){case"UniswapV2Router: EXPIRED":return l.ag._("The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low.");case"UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT":case"UniswapV2Router: EXCESSIVE_INPUT_AMOUNT":return l.ag._("This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.");case"TransferHelper: TRANSFER_FROM_FAILED":return l.ag._("The input token cannot be transferred. There may be an issue with the input token.");case"UniswapV2: TRANSFER_FAILED":case"TF":return l.ag._("The output token cannot be transferred. There may be an issue with the output token.");case"UniswapV2: K":return l.ag._("The Uniswap invariant x*y=k was not satisfied by the swap. This usually means one of the tokens you are swapping incorporates custom behavior on transfer.");case"Too little received":case"Too much requested":case"STF":return l.ag._("This transaction will not succeed due to price movement. Try increasing your slippage tolerance.");case"SushiGuard: FAILED_GAS_PRICE_ESTIMATION":return l.ag._("Your wallet provider has failed to obtain an accurate gas price estimation. Try again as it may be a transient error, or disable the SushiGuard feature.");case"SushiGuard: FAILED_EIP1559_FEE_GAS_ESTIMATION":return l.ag._("Your wallet provider has failed to obtain an accurate gas fee estimation. Try again as it may be a transient error, or disable the SushiGuard feature.");case"SushiGuard: FAILED_NONCE_RETRIEVAL":return l.ag._("Your wallet provider has failed to obtain a valid nonce from your wallet. Try again as it may be a transient error, or disable the SushiGuard feature.");case"SushiGuard: UNSUPPORTED_PROVIDER_REQUEST":return l.ag._("Swap failed: Your wallet provider doesn't support the custom signature features necessary to sign your TX. Disable the SushiGuard feature or try with another wallet provider.");case"SushiGuard: RELAY_URL_NOT_AVAILABLE":return l.ag._("SushiGuard is not available for the selected network. Disable the SushiGuard feature or switch to a supported network.");default:return-1!==(null===(n=r)||void 0===n?void 0:n.indexOf("undefined is not an object"))?(console.error(e,r),l.ag._("An error occurred when trying to execute this swap. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading. Note fee on transfer and rebase tokens are incompatible with Uniswap V3.")):l.ag._("Unknown error{0}. Try increasing your slippage tolerance.",{0:r?': "'.concat(r,'"'):""})}}function se(e,t,n,a,o){var s=arguments.length>5&&void 0!==arguments[5]&&arguments[5],l=(0,O.aQ)(),v=l.account,g=l.chainId,y=l.library,w=(0,k.ZP)(),j=(0,Z.T)(),A=(0,C.dU)(),N=A.maxFee,T=A.maxPriorityFee,S=(0,R.DG)(),I=(0,i.Z)(S,1),V=I[0],q=void 0!=b.rW[g]&&w>=b.rW[g],B=(0,X.Z)(n),W=B.address,H=n?null!==W&&void 0!==W?W:void 0:null!==v&&void 0!==v?v:void 0,$=ae(e,t,H,0,o),J=(0,G.h7)();return(0,U.useMemo)((function(){return e&&y&&v&&g?H?{state:Y.VALID,callback:function(){var t=(0,r.Z)(u().mark((function t(){var r,i,a,l,b,w,A,S,I,k,O;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all($.map((function(e){var t=e.address,n=e.calldata,r=e.value,i=!r||(0,E.Fr)(r)?{from:v,to:t,data:n}:{from:v,to:t,data:n,value:r};return y.estimateGas(i).then((function(t){return{call:e,gasEstimate:t}})).catch((function(t){return console.debug("Gas estimate failed, trying eth_call to extract error",e),y.call(i).then((function(n){return console.debug("Unexpected successful call after failed estimate gas",e,t,n),{call:e,error:new Error("Unexpected issue with estimating the gas. Please try again.")}})).catch((function(t){return console.debug("Call threw error",e,t),{call:e,error:new Error(oe(t))}}))}))})));case 2:if(r=t.sent,i=r.find((function(e,t,n){return"gasEstimate"in e&&(t===n.length-1||"gasEstimate"in n[t+1])}))){t.next=12;break}if(!((a=r.filter((function(e){return"error"in e}))).length>0)){t.next=8;break}throw a[a.length-1].error;case 8:if(l=r.find((function(e){return!("error"in e)}))){t.next=11;break}throw new Error("Unexpected error. Could not estimate gas for the swap.");case 11:i=l;case 12:return b=i.call,w=b.address,A=b.calldata,S=b.value,I=Q(Q({from:v,to:w,data:A},"gasEstimate"in i?{gasLimit:(0,P.yC)(i.gasEstimate)}:{}),S&&!(0,E.Fr)(S)?{value:S}:{}),k=!1,s?(k=!0,O=y.getSigner().populateTransaction(Q({type:q?2:0},I)).then((function(e){var t=e.type,n=e.chainId,r=e.nonce,i=e.gasPrice,a=e.gasLimit,o=e.maxFeePerGas,s=e.maxPriorityFeePerGas,u=e.to,l=e.value,g=e.data,b={hexPad:"left"},w=V&&N?p.O$.from(N):o,A=V&&T?p.O$.from(T):s;if(!q&&!(0,f.isBigNumberish)(i))throw new Error("SushiGuard: FAILED_GAS_PRICE_ESTIMATION");if(q&&!(0,f.isBigNumberish)(w)&&!(0,f.isBigNumberish)(A))throw new Error("SushiGuard: FAILED_EIP1559_FEE_GAS_ESTIMATION");var S=m.TransactionFactory.fromTxData({type:t?(0,h.hexlify)(t):void 0,chainId:n?(0,h.hexlify)(n):void 0,nonce:r?(0,h.hexlify)(r,b):void 0,gasPrice:i?(0,h.hexlify)(i,b):void 0,gasLimit:a?(0,h.hexlify)(a,b):void 0,maxFeePerGas:w?(0,h.hexlify)(w,b):void 0,maxPriorityFeePerGas:A?(0,h.hexlify)(A,b):void 0,to:u,value:l?(0,h.hexlify)(l,b):void 0,data:null===g||void 0===g?void 0:g.toString()},{common:new(d())({chain:null!==n&&void 0!==n?n:x.a_.ETHEREUM,hardfork:c.Hardfork.London})}),_=(0,h.hexlify)(S.getMessageToSign());if(j((0,D.ut)(_)),!y.provider.request)throw new Error("SushiGuard: UNSUPPORTED_PROVIDER_REQUEST");return y.provider.request({method:"eth_sign",params:[v,_]}).then((function(e){var t=(0,h.splitSignature)(e),n=t.v,r=t.r,i=t.s,a=S._processSignature(n,(0,h.arrayify)(r),(0,h.arrayify)(i)),o=m.TransactionFactory.fromSerializedData(z.from(a.serialize(),"utf8")).getSenderAddress().toString();if(v.toLowerCase()!==o.toLowerCase())throw new Error("SushiGuard: UNSUPPORTED_PROVIDER_REQUEST");return(0,h.hexlify)(a.serialize())}))})).then((function(e){var t;if(!M.S[g])throw new Error("SushiGuard: RELAY_URL_NOT_AVAILABLE");return(0,L.x)(null!==(t=M.S[g])&&void 0!==t?t:"",{method:"eth_sendRawTransaction",params:[e]}).then((function(e){if(e.error)throw e.error;return{hash:e.result}}))})).finally((function(){j((0,D.ut)(void 0))}))):O=y.getSigner().sendTransaction(I),t.abrupt("return",O.then((function(t){var r,i,a,s,u,l,c,d,m="Swap ".concat(null===e||void 0===e||null===(r=e.inputAmount)||void 0===r?void 0:r.toSignificant(4)," ").concat(null===e||void 0===e||null===(i=e.inputAmount.currency)||void 0===i?void 0:i.symbol," for ").concat(null===e||void 0===e||null===(a=e.outputAmount)||void 0===a?void 0:a.toSignificant(4)," ").concat(null===e||void 0===e||null===(s=e.outputAmount.currency)||void 0===s?void 0:s.symbol);null!==o&&void 0!==o&&o.parsedAmounts&&(m="Swap ".concat(null===o||void 0===o||null===(u=o.parsedAmounts[0])||void 0===u?void 0:u.toSignificant(4)," ").concat(null===o||void 0===o||null===(l=o.parsedAmounts[0].currency)||void 0===l?void 0:l.symbol," for ").concat(null===o||void 0===o||null===(c=o.parsedAmounts[1])||void 0===c?void 0:c.toSignificant(4)," ").concat(null===o||void 0===o||null===(d=o.parsedAmounts[1].currency)||void 0===d?void 0:d.symbol));null!==o&&void 0!==o&&o.bentoPermit&&null!==o&&void 0!==o&&o.resetBentoPermit&&o.resetBentoPermit();var p=H===v?m:"".concat(m," to ").concat(n&&(0,E.UJ)(n)?(0,_.Xn)(n):n);return J(t,{summary:p,privateTx:k}),t.hash})).catch((function(e){throw(null===e||void 0===e?void 0:e.code)===F.PM?new Error("Transaction rejected."):(console.error("Swap failed",e,w,A,S),new Error("Swap failed: ".concat(oe(e))))})));case 17:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),error:null}:null!==n?{state:Y.INVALID,callback:null,error:"Invalid recipient"}:{state:Y.LOADING,callback:null,error:null}:{state:Y.INVALID,callback:null,error:"Missing dependencies"}}),[e,y,v,g,H,n,$,s,q,V,N,T,j,o,J])}!function(e){e[e.INVALID=0]="INVALID",e[e.LOADING=1]="LOADING",e[e.VALID=2]="VALID"}(Y||(Y={}))},89214:function(){},85568:function(){}}]);