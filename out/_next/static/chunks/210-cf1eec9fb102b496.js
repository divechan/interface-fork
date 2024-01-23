"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[210],{15503:function(e,n,t){var s=t(31518),r=t(56785),a=t(31969),l=t(53389),i=t(67294),o=t(85893);n.Z=function(e){var n,t,c,d,u,x=e.price,h=e.inputCurrency,p=e.outputCurrency,m=e.showInverted,v=e.setShowInverted,f=e.className,g=(0,l.oF)(h),w=(0,l.oF)(p);try{var j;u=m?null===x||void 0===x?void 0:x.toSignificant(4):null===x||void 0===x||null===(j=x.invert())||void 0===j?void 0:j.toSignificant(4)}catch(C){u="0"}var b=m?"".concat(null===x||void 0===x||null===(n=x.quoteCurrency)||void 0===n?void 0:n.symbol):"".concat(null===x||void 0===x||null===(t=x.baseCurrency)||void 0===t?void 0:t.symbol," "),y=m?"".concat(null===x||void 0===x||null===(c=x.baseCurrency)||void 0===c?void 0:c.symbol," "):"".concat(null===x||void 0===x||null===(d=x.quoteCurrency)||void 0===d?void 0:d.symbol),N=(0,i.useCallback)((function(){return v(!m)}),[v,m]),Z=m?g:w;return(0,o.jsx)("button",{type:"button",onClick:N,className:(0,a.AK)("flex w-full gap-1 cursor-pointer hover:text-white select-none",f),children:(0,o.jsxs)(r.Z,{variant:"xs",weight:700,className:"flex gap-1 tracking-[0.06em] text-white",children:["1 ",y," ",(0,o.jsx)("span",{className:"text-primary",children:"="})," ",u," ",b,(null===Z||void 0===Z?void 0:Z.greaterThan(s.xE))&&(0,o.jsxs)(r.Z,{variant:"xs",component:"span",className:"text-secondary",children:["($",null===Z||void 0===Z?void 0:Z.toSignificant(6),")"]})]})})}},42802:function(e,n,t){var s=t(2905),r=t(14744),a=t(42144),l=t(13752),i=t(46430),o=t(573),c=t(56785),d=t(31969),u=t(67294),x=t(85893);n.Z=function(){var e=(0,r.mV)().i18n,n=(0,u.useState)(!1),t=n[0],h=n[1];return(0,x.jsx)(i.Z,{trigger:(0,x.jsx)("div",{className:"flex items-center justify-center rounded cursor-pointer lg:w-4 lg:h-4",children:(0,x.jsx)(s.Z,{className:"w-4 h-4 text-high-emphesis"})}),children:function(n){var s=n.setOpen;return(0,x.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,x.jsx)(i.Z.Header,{header:e._(e._("Bentobox")),onClose:function(){return s(!1)}}),(0,x.jsxs)("div",{className:"flex justify-center gap-4",children:[(0,x.jsx)("div",{className:"relative shadow-pink-glow",children:(0,x.jsx)(l.Z,{src:"https://app.sushi.com/images/bentobox/logo.png",width:160,height:120,alt:"BentoBox Logo"})}),(0,x.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,x.jsx)(c.Z,{variant:"lg",weight:700,className:"text-center text-high-emphesis",children:e._(e._("SteamX utilizes a token vault called BentoBox that has balances separate from your wallet."))}),(0,x.jsx)(c.Z,{variant:"sm",className:"text-center text-secondary",children:e._(e._('You can think of this as having "account balances" for each asset within sushi.com'))})]})]}),(0,x.jsxs)(i.Z.BorderedContent,{className:"flex flex-col",children:[(0,x.jsxs)("div",{className:"grid grid-cols-2 gap-10 flex-grow min-h-[160px]",children:[(0,x.jsxs)("div",{className:"flex flex-col justify-center gap-3",children:[(0,x.jsxs)("div",{className:"flex justify-center gap-4",children:[(0,x.jsxs)("div",{className:(0,d.AK)("flex flex-col gap-1",t?"text-low-emphesis":"text-high-emphesis"),children:[(0,x.jsx)(a.OP,{width:48}),(0,x.jsx)(c.Z,{variant:"xs",className:"text-secondary",children:e._(e._("Bentobox"))})]}),(0,x.jsxs)("div",{className:(0,d.AK)("flex flex-col gap-1",t?"text-high-emphesis":"text-low-emphesis"),children:[(0,x.jsx)(a.o,{width:48}),(0,x.jsx)(c.Z,{variant:"xs",className:"text-secondary",children:e._(e._("Wallet"))})]})]}),(0,x.jsx)(c.Z,{weight:700,variant:"sm",className:"text-center text-high-emphesis",children:e._(e._("You\u2019ll see these icons next to your balance in various input fields."))})]}),(0,x.jsx)("div",{className:"h-full bg-right bg-no-repeat bg-contain",style:{backgroundImage:"url('/images/trident/AssetInputScreenshot.png')"}})]}),(0,x.jsx)("div",{className:"flex flex-col flex-grow min-h-[160px]",children:(0,x.jsxs)("div",{className:"grid flex-grow grid-cols-2",children:[(0,x.jsx)("div",{className:"h-full bg-no-repeat bg-contain",style:{backgroundImage:"url('/images/trident/AssetInputScreenshot2.png')"}}),(0,x.jsxs)("div",{className:"flex flex-col items-center justify-center gap-2 p-3 px-8",children:[(0,x.jsx)(o.Z,{checked:t,onChange:h}),(0,x.jsx)(c.Z,{weight:700,variant:"sm",className:"text-center text-high-emphesis",children:e._(e._("Use the toggle to switch between balances when interacting with our platform."))})]})]})}),(0,x.jsxs)(c.Z,{variant:"xs",className:"px-10 mt-5 text-center text-low-emphesis",children:[(0,x.jsx)(c.Z,{variant:"xs",weight:700,component:"span",children:"Tip"}),": ",e._(e._("BentoBox to BentoBox swaps are up to 50% cheaper than normal swaps"))]})]})]})}})}},92088:function(e,n,t){var s=t(13342),r=t(14744),a=t(31518),l=t(71862),i=t(41626),o=t(48410),c=t(54962),d=t(56785),u=t(31969),x=t(15423),h=t(90573),p=t(86047),m=t(12614),v=t(67294),f=t(42802),g=t(85893),w=(0,v.forwardRef)((function(e,n){var t=e.error,s=e.header,r=e.walletToggle,a=e.currency,l=e.value,i=e.onChange,o=e.selected,c=e.onSelect,d=e.spendFromWallet,x=e.priceImpact,h=e.priceImpactCss,p=e.disabled,m=e.inputDisabled,v=e.currencies,f=e.balancePanel,w=e.hideInput;return(0,g.jsxs)("div",{className:(0,u.AK)(p?"pointer-events-none opacity-40":"",t?"border-red-800 hover:border-red-500":"border-dark-700 hover:border-dark-600","rounded-[14px] border bg-dark-900 p-3 flex flex-col gap-4"),children:[s({disabled:p,onChange:i,value:l,currency:a,currencies:v,onSelect:c,walletToggle:r,spendFromWallet:d}),!w&&(0,g.jsxs)("div",{className:"flex gap-1 justify-between items-baseline px-1.5",children:[(0,g.jsx)(j,{ref:n,selected:o,error:t,currency:a,currencies:v,value:l,onChange:i,inputDisabled:m,onSelect:c,priceImpact:x,priceImpactCss:h,spendFromWallet:d}),f?f({disabled:p,currency:a,onChange:i,spendFromWallet:d}):(0,g.jsx)(b,{disabled:p,currency:a,onChange:i,spendFromWallet:d})]})]})})),j=(0,v.forwardRef)((function(e,n){var t,s=e.currency,r=e.value,l=e.onChange,i=e.inputDisabled,c=e.priceImpact,x=(e.priceImpactCss,(0,h.NF)((0,u.eo)(r||"1",s))),p=(0,v.useRef)(null),m=(0,v.useState)(0),f=m[0],w=m[1],j=(0,v.useMemo)((function(){if(c){if(c.lessThan("0"))return"text-green";var e=(0,u.oX)(c);return e<1?"text-primary":e<3?"text-yellow":"text-red"}}),[c]);return(0,v.useEffect)((function(){var e;p.current&&w(r?(null===p||void 0===p||null===(e=p.current)||void 0===e?void 0:e.clientWidth)+8:60)}),[r]),(0,g.jsxs)(d.Z,{weight:700,variant:"h3",className:"relative flex items-baseline flex-grow gap-3 overflow-hidden",children:[(0,g.jsx)(o.Z,{ref:n,disabled:i,value:r||"",onUserInput:l,placeholder:"0.00",className:"leading-[36px] focus:placeholder:text-low-emphesis flex-grow w-full text-left bg-transparent text-inherit disabled:cursor-not-allowed",autoFocus:!0}),!n&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(d.Z,{variant:"xs",className:"text-secondary absolute bottom-1.5 pointer-events-none",component:"span",style:{left:f},children:[(null===x||void 0===x?void 0:x.greaterThan(a.xE))&&(0,g.jsxs)(g.Fragment,{children:["~",(0,u.uf)(null===x||void 0===x?void 0:x.toFixed(),!0,!0,2)," "]}),c&&(0,g.jsxs)("span",{className:j,children:["(",null===c||void 0===c||null===(t=c.multiply(-1))||void 0===t?void 0:t.toSignificant(2),"%)"]})]}),(0,g.jsx)(d.Z,{variant:"h3",weight:700,className:"relative flex flex-row items-baseline",children:(0,g.jsx)("span",{ref:p,className:"opacity-0 absolute pointer-events-none tracking-[0]",children:"".concat(r||"0.00")})})]})]})})),b=function(e){var n=e.disabled,t=e.currency,s=e.onChange,a=e.spendFromWallet,l=(0,r.mV)().i18n,i=(0,m.aQ)().account,o=(0,x.C)(i||void 0,t,a),c=(0,v.useCallback)((function(){var e;!n&&o&&s&&s(null===(e=(0,u.iN)(o))||void 0===e?void 0:e.toExact())}),[o,n,s]);return(0,g.jsxs)(d.Z,{role:"button",onClick:c,variant:"sm",className:"flex text-secondary whitespace-nowrap",children:[l._(l._("Balance:"))," ",o?o.toSignificant(6):"0.00"]})};n.Z=Object.assign(w,{Header:function(e){var n=e.label,t=e.selectLabel,a=e.walletToggle,o=e.currency,c=e.onSelect,x=e.spendFromWallet,h=e.id,m=e.currencies,v=e.hideSearchModal,f=(0,r.mV)().i18n,w=o?(0,g.jsxs)("div",{id:h,className:(0,u.AK)(v?"":"bg-dark-800 hover:bg-dark-700 cursor-pointer","flex items-center gap-2 px-2 py-1 rounded-full shadow-md text-high-emphesis"),children:[(0,g.jsx)(i.X,{currency:o,className:"!rounded-full overflow-hidden",size:20}),n&&(0,g.jsx)(d.Z,{variant:"sm",className:"!text-xl",weight:700,children:n}),(0,g.jsx)(d.Z,{variant:"sm",className:"!text-xl",weight:700,children:x?o.symbol:o.wrapped.symbol}),!v&&(0,g.jsx)(s.Z,{width:18})]}):(0,g.jsxs)(l.ZP,{color:"blue",variant:"filled",size:"sm",id:h,className:"!rounded-full !px-2 !py-0 !h-[32px] !pl-3",children:[t||f._(f._("Select a Token")),(0,g.jsx)(s.Z,{width:18})]});return(0,g.jsxs)("div",{className:"flex items-center justify-between gap-2",children:[(0,g.jsx)("div",{className:"flex items-center",children:v?w:(0,g.jsx)(p.Z,{selectedCurrency:o,onCurrencySelect:function(e){return c&&c(e)},trigger:w,currencyList:m})}),a&&a({spendFromWallet:x})]})},Switch:function(e){var n=e.label,t=e.onChange,s=e.id,a=e.spendFromWallet,l=e.disabled,i=(0,r.mV)().i18n,o=(0,g.jsxs)(d.Z,{variant:"xs",weight:700,component:"span",className:(0,u.AK)(l?"pointer-events-none opacity-40":"","flex items-center gap-2 !justify-end"),children:[n,(0,g.jsx)(d.Z,{id:s,role:"button",onClick:function(){return t(!a)},variant:"sm",weight:700,component:"span",className:"flex items-center gap-1 px-2 py-1 rounded-full cursor-pointer text-high-emphesis hover:text-white hover:shadow bg-dark-800 hover:bg-dark-700",children:a?i._(i._("Wallet")):i._(i._("BentoBox"))}),(0,g.jsx)(f.Z,{})]});return l?(0,g.jsx)(c.Z,{text:i._(i._("Not available for legacy route")),children:o}):o}})},15423:function(e,n,t){t.d(n,{C:function(){return o},L:function(){return i}});var s=t(31518),r=t(15393),a=t(22986),l=t(67294),i=function(e,n,t){var i=(0,l.useMemo)((function(){return n.every((function(e){return e}))?n.map((function(e){return e.wrapped.address})):void 0}),[n]),o=(0,a.K5)(e,n),c=(0,r.wu)(i).data;return(0,l.useMemo)((function(){return n.every((function(e){return!!e}))&&c?n.map((function(e,n){var r;if(e)return(r=!1===(null===t||void 0===t?void 0:t[n])?c.find((function(n){return(null===n||void 0===n?void 0:n.currency.wrapped.address)===e.wrapped.address})):o.find((function(n){return(null===n||void 0===n?void 0:n.currency.wrapped.address)===e.wrapped.address})))||(r=s.ih.fromRawAmount(e.wrapped,"0")),r}),[]):[]}),[n,c,t,o])},o=function(e,n,t){var s=(0,l.useMemo)((function(){return[n]}),[n]),r=(0,l.useMemo)((function(){return[t]}),[t]),a=i(e,s,r);return(0,l.useMemo)((function(){return a?a[0]:void 0}),[a])}}}]);