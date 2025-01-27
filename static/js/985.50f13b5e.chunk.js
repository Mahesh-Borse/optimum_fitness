"use strict";(self.webpackChunkoptimum_fitness=self.webpackChunkoptimum_fitness||[]).push([[985],{3985:(e,t,n)=>{n.d(t,{A:()=>Z});var r=n(8168),o=n(8587),i=n(5043),s=n(8387),u=n(8610),l=n(4535),c=n(6431),a=n(5849);const p=n(1782).A;var d=n(9303);let f=!0,h=!1;const m=new d.E,b={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function v(e){e.metaKey||e.altKey||e.ctrlKey||(f=!0)}function y(){f=!1}function g(){"hidden"===this.visibilityState&&h&&(f=!0)}function A(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(n){}return f||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!b[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}const E=function(){const e=i.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",v,!0),t.addEventListener("mousedown",y,!0),t.addEventListener("pointerdown",y,!0),t.addEventListener("touchstart",y,!0),t.addEventListener("visibilitychange",g,!0))}),[]),t=i.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!A(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(h=!0,m.start(100,(()=>{h=!1})),t.current=!1,!0)},ref:e}};var R=n(5540),x=n(8726);function M(e,t){var n=Object.create(null);return e&&i.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,i.isValidElement)(e)?t(e):e}(e)})),n}function k(e,t,n){return null!=n[t]?n[t]:e.props[t]}function w(e,t,n){var r=M(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,o=Object.create(null),i=[];for(var s in e)s in t?i.length&&(o[s]=i,i=[]):i.push(s);var u={};for(var l in t){if(o[l])for(r=0;r<o[l].length;r++){var c=o[l][r];u[o[l][r]]=n(c)}u[l]=n(l)}for(r=0;r<i.length;r++)u[i[r]]=n(i[r]);return u}(t,r);return Object.keys(o).forEach((function(s){var u=o[s];if((0,i.isValidElement)(u)){var l=s in t,c=s in r,a=t[s],p=(0,i.isValidElement)(a)&&!a.props.in;!c||l&&!p?c||!l||p?c&&l&&(0,i.isValidElement)(a)&&(o[s]=(0,i.cloneElement)(u,{onExited:n.bind(null,u),in:a.props.in,exit:k(u,"exit",e),enter:k(u,"enter",e)})):o[s]=(0,i.cloneElement)(u,{in:!1}):o[s]=(0,i.cloneElement)(u,{onExited:n.bind(null,u),in:!0,exit:k(u,"exit",e),enter:k(u,"enter",e)})}})),o}var T=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},C=function(e){function t(t,n){var r,o=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}(0,R.A)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,o=t.children,s=t.handleExited;return{children:t.firstRender?(n=e,r=s,M(n.children,(function(e){return(0,i.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:k(e,"appear",n),enter:k(e,"enter",n),exit:k(e,"exit",n)})}))):w(e,o,s),firstRender:!1}},n.handleExited=function(e,t){var n=M(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,r.A)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=(0,o.A)(e,["component","childFactory"]),s=this.state.contextValue,u=T(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?i.createElement(x.A.Provider,{value:s},u):i.createElement(x.A.Provider,{value:s},i.createElement(t,r,u))},t}(i.Component);C.propTypes={},C.defaultProps={component:"div",childFactory:function(e){return e}};const V=C;var P=n(3290),L=n(579);const S=function(e){const{className:t,classes:n,pulsate:r=!1,rippleX:o,rippleY:u,rippleSize:l,in:c,onExited:a,timeout:p}=e,[d,f]=i.useState(!1),h=(0,s.A)(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),m={width:l,height:l,top:-l/2+u,left:-l/2+o},b=(0,s.A)(n.child,d&&n.childLeaving,r&&n.childPulsate);return c||d||f(!0),i.useEffect((()=>{if(!c&&null!=a){const e=setTimeout(a,p);return()=>{clearTimeout(e)}}}),[a,c,p]),(0,L.jsx)("span",{className:h,style:m,children:(0,L.jsx)("span",{className:b})})};var I=n(2532);const j=(0,I.A)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),D=["center","classes","className"];let $,O,B,N,F=e=>e;const z=(0,P.i7)($||($=F`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),K=(0,P.i7)(O||(O=F`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),X=(0,P.i7)(B||(B=F`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),U=(0,l.Ay)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Y=(0,l.Ay)(S,{name:"MuiTouchRipple",slot:"Ripple"})(N||(N=F`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),j.rippleVisible,z,550,(e=>{let{theme:t}=e;return t.transitions.easing.easeInOut}),j.ripplePulsate,(e=>{let{theme:t}=e;return t.transitions.duration.shorter}),j.child,j.childLeaving,K,550,(e=>{let{theme:t}=e;return t.transitions.easing.easeInOut}),j.childPulsate,X,(e=>{let{theme:t}=e;return t.transitions.easing.easeInOut})),_=i.forwardRef((function(e,t){const n=(0,c.b)({props:e,name:"MuiTouchRipple"}),{center:u=!1,classes:l={},className:a}=n,p=(0,o.A)(n,D),[f,h]=i.useState([]),m=i.useRef(0),b=i.useRef(null);i.useEffect((()=>{b.current&&(b.current(),b.current=null)}),[f]);const v=i.useRef(!1),y=(0,d.A)(),g=i.useRef(null),A=i.useRef(null),E=i.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:o,cb:i}=e;h((e=>[...e,(0,L.jsx)(Y,{classes:{ripple:(0,s.A)(l.ripple,j.ripple),rippleVisible:(0,s.A)(l.rippleVisible,j.rippleVisible),ripplePulsate:(0,s.A)(l.ripplePulsate,j.ripplePulsate),child:(0,s.A)(l.child,j.child),childLeaving:(0,s.A)(l.childLeaving,j.childLeaving),childPulsate:(0,s.A)(l.childPulsate,j.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:o},m.current)])),m.current+=1,b.current=i}),[l]),R=i.useCallback((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>{};const{pulsate:r=!1,center:o=u||t.pulsate,fakeElement:i=!1}=t;if("mousedown"===(null==e?void 0:e.type)&&v.current)return void(v.current=!1);"touchstart"===(null==e?void 0:e.type)&&(v.current=!0);const s=i?null:A.current,l=s?s.getBoundingClientRect():{width:0,height:0,left:0,top:0};let c,a,p;if(o||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)c=Math.round(l.width/2),a=Math.round(l.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;c=Math.round(t-l.left),a=Math.round(n-l.top)}if(o)p=Math.sqrt((2*l.width**2+l.height**2)/3),p%2===0&&(p+=1);else{const e=2*Math.max(Math.abs((s?s.clientWidth:0)-c),c)+2,t=2*Math.max(Math.abs((s?s.clientHeight:0)-a),a)+2;p=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===g.current&&(g.current=()=>{E({pulsate:r,rippleX:c,rippleY:a,rippleSize:p,cb:n})},y.start(80,(()=>{g.current&&(g.current(),g.current=null)}))):E({pulsate:r,rippleX:c,rippleY:a,rippleSize:p,cb:n})}),[u,E,y]),x=i.useCallback((()=>{R({},{pulsate:!0})}),[R]),M=i.useCallback(((e,t)=>{if(y.clear(),"touchend"===(null==e?void 0:e.type)&&g.current)return g.current(),g.current=null,void y.start(0,(()=>{M(e,t)}));g.current=null,h((e=>e.length>0?e.slice(1):e)),b.current=t}),[y]);return i.useImperativeHandle(t,(()=>({pulsate:x,start:R,stop:M})),[x,R,M]),(0,L.jsx)(U,(0,r.A)({className:(0,s.A)(j.root,l.root,a),ref:A},p,{children:(0,L.jsx)(V,{component:null,exit:!0,children:f})}))}));var H=n(2372);function W(e){return(0,H.Ay)("MuiButtonBase",e)}const q=(0,I.A)("MuiButtonBase",["root","disabled","focusVisible"]),G=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],J=(0,l.Ay)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${q.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Q=i.forwardRef((function(e,t){const n=(0,c.b)({props:e,name:"MuiButtonBase"}),{action:l,centerRipple:d=!1,children:f,className:h,component:m="button",disabled:b=!1,disableRipple:v=!1,disableTouchRipple:y=!1,focusRipple:g=!1,LinkComponent:A="a",onBlur:R,onClick:x,onContextMenu:M,onDragLeave:k,onFocus:w,onFocusVisible:T,onKeyDown:C,onKeyUp:V,onMouseDown:P,onMouseLeave:S,onMouseUp:I,onTouchEnd:j,onTouchMove:D,onTouchStart:$,tabIndex:O=0,TouchRippleProps:B,touchRippleRef:N,type:F}=n,z=(0,o.A)(n,G),K=i.useRef(null),X=i.useRef(null),U=(0,a.A)(X,N),{isFocusVisibleRef:Y,onFocus:H,onBlur:q,ref:Q}=E(),[Z,ee]=i.useState(!1);b&&Z&&ee(!1),i.useImperativeHandle(l,(()=>({focusVisible:()=>{ee(!0),K.current.focus()}})),[]);const[te,ne]=i.useState(!1);i.useEffect((()=>{ne(!0)}),[]);const re=te&&!v&&!b;function oe(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y;return p((r=>{t&&t(r);return!n&&X.current&&X.current[e](r),!0}))}i.useEffect((()=>{Z&&g&&!v&&te&&X.current.pulsate()}),[v,g,Z,te]);const ie=oe("start",P),se=oe("stop",M),ue=oe("stop",k),le=oe("stop",I),ce=oe("stop",(e=>{Z&&e.preventDefault(),S&&S(e)})),ae=oe("start",$),pe=oe("stop",j),de=oe("stop",D),fe=oe("stop",(e=>{q(e),!1===Y.current&&ee(!1),R&&R(e)}),!1),he=p((e=>{K.current||(K.current=e.currentTarget),H(e),!0===Y.current&&(ee(!0),T&&T(e)),w&&w(e)})),me=()=>{const e=K.current;return m&&"button"!==m&&!("A"===e.tagName&&e.href)},be=i.useRef(!1),ve=p((e=>{g&&!be.current&&Z&&X.current&&" "===e.key&&(be.current=!0,X.current.stop(e,(()=>{X.current.start(e)}))),e.target===e.currentTarget&&me()&&" "===e.key&&e.preventDefault(),C&&C(e),e.target===e.currentTarget&&me()&&"Enter"===e.key&&!b&&(e.preventDefault(),x&&x(e))})),ye=p((e=>{g&&" "===e.key&&X.current&&Z&&!e.defaultPrevented&&(be.current=!1,X.current.stop(e,(()=>{X.current.pulsate(e)}))),V&&V(e),x&&e.target===e.currentTarget&&me()&&" "===e.key&&!e.defaultPrevented&&x(e)}));let ge=m;"button"===ge&&(z.href||z.to)&&(ge=A);const Ae={};"button"===ge?(Ae.type=void 0===F?"button":F,Ae.disabled=b):(z.href||z.to||(Ae.role="button"),b&&(Ae["aria-disabled"]=b));const Ee=(0,a.A)(t,Q,K);const Re=(0,r.A)({},n,{centerRipple:d,component:m,disabled:b,disableRipple:v,disableTouchRipple:y,focusRipple:g,tabIndex:O,focusVisible:Z}),xe=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:o}=e,i={root:["root",t&&"disabled",n&&"focusVisible"]},s=(0,u.A)(i,W,o);return n&&r&&(s.root+=` ${r}`),s})(Re);return(0,L.jsxs)(J,(0,r.A)({as:ge,className:(0,s.A)(xe.root,h),ownerState:Re,onBlur:fe,onClick:x,onContextMenu:se,onFocus:he,onKeyDown:ve,onKeyUp:ye,onMouseDown:ie,onMouseLeave:ce,onMouseUp:le,onDragLeave:ue,onTouchEnd:pe,onTouchMove:de,onTouchStart:ae,ref:Ee,tabIndex:b?-1:O,type:F},Ae,z,{children:[f,re?(0,L.jsx)(_,(0,r.A)({ref:U,center:d},B)):null]}))})),Z=Q},5849:(e,t,n)=>{n.d(t,{A:()=>r});const r=n(3462).A},6564:(e,t,n)=>{function r(e,t){"function"===typeof e?e(t):e&&(e.current=t)}n.d(t,{A:()=>r})},4440:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(5043);const o="undefined"!==typeof window?r.useLayoutEffect:r.useEffect},1782:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(5043),o=n(4440);const i=function(e){const t=r.useRef(e);return(0,o.A)((()=>{t.current=e})),r.useRef((function(){return(0,t.current)(...arguments)})).current}},3462:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(5043),o=n(6564);function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r.useMemo((()=>t.every((e=>null==e))?null:e=>{t.forEach((t=>{(0,o.A)(t,e)}))}),t)}},9303:(e,t,n)=>{n.d(t,{E:()=>s,A:()=>u});var r=n(5043);const o={};const i=[];class s{constructor(){this.currentId=null,this.clear=()=>{null!==this.currentId&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new s}start(e,t){this.clear(),this.currentId=setTimeout((()=>{this.currentId=null,t()}),e)}}function u(){const e=function(e,t){const n=r.useRef(o);return n.current===o&&(n.current=e(t)),n}(s.create).current;var t;return t=e.disposeEffect,r.useEffect(t,i),e}},8726:(e,t,n)=>{n.d(t,{A:()=>r});const r=n(5043).createContext(null)},5540:(e,t,n)=>{function r(e,t){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},r(e,t)}function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,r(e,t)}n.d(t,{A:()=>o})}}]);
//# sourceMappingURL=985.50f13b5e.chunk.js.map