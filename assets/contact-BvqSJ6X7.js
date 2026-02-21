import{r as m,c as ge,u as be,j as n,H as ye,L as ve}from"./app-BzHhPVOJ.js";import{g as P,S as ae,a as le,A as we,C as je,F as _e}from"./footer-Bq5Ba9NV.js";import{S as ne}from"./SplitText-C-ojTpxI.js";import{c as re}from"./utils-C2fB7_LP.js";/* empty css            */import"./index-HmK_NbF3.js";const ke=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Ne=re("Github",ke);const Ee=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],Se=re("Instagram",Ee);const Ce=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],$e=re("Linkedin",Ce);let Ae={data:""},De=e=>{if(typeof window=="object"){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||Ae},Ie=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Le=/\/\*[^]*?\*\/|  +/g,ie=/\n+/g,N=(e,t)=>{let s="",r="",i="";for(let o in e){let a=e[o];o[0]=="@"?o[1]=="i"?s=o+" "+a+";":r+=o[1]=="f"?N(a,o):o+"{"+N(a,o[1]=="k"?"":t)+"}":typeof a=="object"?r+=N(a,t?t.replace(/([^,])+/g,l=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,l):l?l+" "+c:c)):o):a!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=N.p?N.p(o,a):o+":"+a+";")}return s+(t&&i?t+"{"+i+"}":i)+r},v={},ce=e=>{if(typeof e=="object"){let t="";for(let s in e)t+=s+ce(e[s]);return t}return e},ze=(e,t,s,r,i)=>{let o=ce(e),a=v[o]||(v[o]=(c=>{let d=0,p=11;for(;d<c.length;)p=101*p+c.charCodeAt(d++)>>>0;return"go"+p})(o));if(!v[a]){let c=o!==e?e:(d=>{let p,u,f=[{}];for(;p=Ie.exec(d.replace(Le,""));)p[4]?f.shift():p[3]?(u=p[3].replace(ie," ").trim(),f.unshift(f[0][u]=f[0][u]||{})):f[0][p[1]]=p[2].replace(ie," ").trim();return f[0]})(e);v[a]=N(i?{["@keyframes "+a]:c}:c,s?"":"."+a)}let l=s&&v.g?v.g:null;return s&&(v.g=v[a]),((c,d,p,u)=>{u?d.data=d.data.replace(u,c):d.data.indexOf(c)===-1&&(d.data=p?c+d.data:d.data+c)})(v[a],t,r,l),a},Oe=(e,t,s)=>e.reduce((r,i,o)=>{let a=t[o];if(a&&a.call){let l=a(s),c=l&&l.props&&l.props.className||/^go/.test(l)&&l;a=c?"."+c:l&&typeof l=="object"?l.props?"":N(l,""):l===!1?"":l}return r+i+(a??"")},"");function J(e){let t=this||{},s=e.call?e(t.p):e;return ze(s.unshift?s.raw?Oe(s,[].slice.call(arguments,1),t.p):s.reduce((r,i)=>Object.assign(r,i&&i.call?i(t.p):i),{}):s,De(t.target),t.g,t.o,t.k)}let de,te,se;J.bind({g:1});let w=J.bind({k:1});function Me(e,t,s,r){N.p=t,de=e,te=s,se=r}function E(e,t){let s=this||{};return function(){let r=arguments;function i(o,a){let l=Object.assign({},o),c=l.className||i.className;s.p=Object.assign({theme:te&&te()},l),s.o=/ *go\d+/.test(c),l.className=J.apply(s,r)+(c?" "+c:"");let d=e;return e[0]&&(d=l.as||e,delete l.as),se&&d[0]&&se(l),de(d,l)}return t?t(i):i}}var Te=e=>typeof e=="function",V=(e,t)=>Te(e)?e(t):e,Pe=(()=>{let e=0;return()=>(++e).toString()})(),me=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Fe=20,oe="default",ue=(e,t)=>{let{toastLimit:s}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,s)};case 1:return{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:r}=t;return ue(e,{type:e.toasts.find(a=>a.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=t;return{...e,toasts:e.toasts.map(a=>a.id===i||i===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+o}))}}},Q=[],pe={toasts:[],pausedAt:void 0,settings:{toastLimit:Fe}},b={},fe=(e,t=oe)=>{b[t]=ue(b[t]||pe,e),Q.forEach(([s,r])=>{s===t&&r(b[t])})},he=e=>Object.keys(b).forEach(t=>fe(e,t)),Re=e=>Object.keys(b).find(t=>b[t].toasts.some(s=>s.id===e)),ee=(e=oe)=>t=>{fe(t,e)},He={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},qe=(e={},t=oe)=>{let[s,r]=m.useState(b[t]||pe),i=m.useRef(b[t]);m.useEffect(()=>(i.current!==b[t]&&r(b[t]),Q.push([t,r]),()=>{let a=Q.findIndex(([l])=>l===t);a>-1&&Q.splice(a,1)}),[t]);let o=s.toasts.map(a=>{var l,c,d;return{...e,...e[a.type],...a,removeDelay:a.removeDelay||((l=e[a.type])==null?void 0:l.removeDelay)||e?.removeDelay,duration:a.duration||((c=e[a.type])==null?void 0:c.duration)||e?.duration||He[a.type],style:{...e.style,...(d=e[a.type])==null?void 0:d.style,...a.style}}});return{...s,toasts:o}},Ye=(e,t="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:s?.id||Pe()}),F=e=>(t,s)=>{let r=Ye(t,e,s);return ee(r.toasterId||Re(r.id))({type:2,toast:r}),r.id},x=(e,t)=>F("blank")(e,t);x.error=F("error");x.success=F("success");x.loading=F("loading");x.custom=F("custom");x.dismiss=(e,t)=>{let s={type:3,toastId:e};t?ee(t)(s):he(s)};x.dismissAll=e=>x.dismiss(void 0,e);x.remove=(e,t)=>{let s={type:4,toastId:e};t?ee(t)(s):he(s)};x.removeAll=e=>x.remove(void 0,e);x.promise=(e,t,s)=>{let r=x.loading(t.loading,{...s,...s?.loading});return typeof e=="function"&&(e=e()),e.then(i=>{let o=t.success?V(t.success,i):void 0;return o?x.success(o,{id:r,...s,...s?.success}):x.dismiss(r),i}).catch(i=>{let o=t.error?V(t.error,i):void 0;o?x.error(o,{id:r,...s,...s?.error}):x.dismiss(r)}),e};var Ge=1e3,Be=(e,t="default")=>{let{toasts:s,pausedAt:r}=qe(e,t),i=m.useRef(new Map).current,o=m.useCallback((u,f=Ge)=>{if(i.has(u))return;let h=setTimeout(()=>{i.delete(u),a({type:4,toastId:u})},f);i.set(u,h)},[]);m.useEffect(()=>{if(r)return;let u=Date.now(),f=s.map(h=>{if(h.duration===1/0)return;let j=(h.duration||0)+h.pauseDuration-(u-h.createdAt);if(j<0){h.visible&&x.dismiss(h.id);return}return setTimeout(()=>x.dismiss(h.id,t),j)});return()=>{f.forEach(h=>h&&clearTimeout(h))}},[s,r,t]);let a=m.useCallback(ee(t),[t]),l=m.useCallback(()=>{a({type:5,time:Date.now()})},[a]),c=m.useCallback((u,f)=>{a({type:1,toast:{id:u,height:f}})},[a]),d=m.useCallback(()=>{r&&a({type:6,time:Date.now()})},[r,a]),p=m.useCallback((u,f)=>{let{reverseOrder:h=!1,gutter:j=8,defaultPosition:S}=f||{},_=s.filter(g=>(g.position||S)===(u.position||S)&&g.height),$=_.findIndex(g=>g.id===u.id),C=_.filter((g,k)=>k<$&&g.visible).length;return _.filter(g=>g.visible).slice(...h?[C+1]:[0,C]).reduce((g,k)=>g+(k.height||0)+j,0)},[s]);return m.useEffect(()=>{s.forEach(u=>{if(u.dismissed)o(u.id,u.removeDelay);else{let f=i.get(u.id);f&&(clearTimeout(f),i.delete(u.id))}})},[s,o]),{toasts:s,handlers:{updateHeight:c,startPause:l,endPause:d,calculateOffset:p}}},We=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Xe=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ue=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Ze=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${We} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Xe} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Ue} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Ke=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Qe=E("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Ke} 1s linear infinite;
`,Ve=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Je=w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,et=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ve} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Je} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,tt=E("div")`
  position: absolute;
`,st=E("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,at=w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,rt=E("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${at} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ot=({toast:e})=>{let{icon:t,type:s,iconTheme:r}=e;return t!==void 0?typeof t=="string"?m.createElement(rt,null,t):t:s==="blank"?null:m.createElement(st,null,m.createElement(Qe,{...r}),s!=="loading"&&m.createElement(tt,null,s==="error"?m.createElement(Ze,{...r}):m.createElement(et,{...r})))},it=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,lt=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,nt="0%{opacity:0;} 100%{opacity:1;}",ct="0%{opacity:1;} 100%{opacity:0;}",dt=E("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,mt=E("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ut=(e,t)=>{let s=e.includes("top")?1:-1,[r,i]=me()?[nt,ct]:[it(s),lt(s)];return{animation:t?`${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},pt=m.memo(({toast:e,position:t,style:s,children:r})=>{let i=e.height?ut(e.position||t||"top-center",e.visible):{opacity:0},o=m.createElement(ot,{toast:e}),a=m.createElement(mt,{...e.ariaProps},V(e.message,e));return m.createElement(dt,{className:e.className,style:{...i,...s,...e.style}},typeof r=="function"?r({icon:o,message:a}):m.createElement(m.Fragment,null,o,a))});Me(m.createElement);var ft=({id:e,className:t,style:s,onHeightUpdate:r,children:i})=>{let o=m.useCallback(a=>{if(a){let l=()=>{let c=a.getBoundingClientRect().height;r(e,c)};l(),new MutationObserver(l).observe(a,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return m.createElement("div",{ref:o,className:t,style:s},i)},ht=(e,t)=>{let s=e.includes("top"),r=s?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:me()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(s?1:-1)}px)`,...r,...i}},xt=J`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,K=16,gt=({reverseOrder:e,position:t="top-center",toastOptions:s,gutter:r,children:i,toasterId:o,containerStyle:a,containerClassName:l})=>{let{toasts:c,handlers:d}=Be(s,o);return m.createElement("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:K,left:K,right:K,bottom:K,pointerEvents:"none",...a},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map(p=>{let u=p.position||t,f=d.calculateOffset(p,{reverseOrder:e,gutter:r,defaultPosition:t}),h=ht(u,f);return m.createElement(ft,{id:p.id,key:p.id,onHeightUpdate:d.updateHeight,className:p.visible?xt:"",style:h},p.type==="custom"?V(p.message,p):i?i(p):m.createElement(pt,{toast:p,position:u}))}))},xe=x;P.registerPlugin(ae,ne);function At(){const e=ge.c(48);P.registerPlugin(ae,le);let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=[],e[0]=t):t=e[0],m.useEffect(_t,t);const[,s]=m.useState(Boolean);let r;e[1]===Symbol.for("react.memo_cache_sentinel")?(r=[],e[1]=r):r=e[1],m.useEffect(jt,r);const i=m.useRef(null);let o,a;e[2]===Symbol.for("react.memo_cache_sentinel")?(o=()=>{if(!i.current)return;const y=P.context(yt,i);return()=>y.revert()},a=[],e[2]=o,e[3]=a):(o=e[2],a=e[3]),m.useEffect(o,a);let l;e[4]===Symbol.for("react.memo_cache_sentinel")?(l={name:"",email:"",message:""},e[4]=l):l=e[4];const{data:c,setData:d,post:p,processing:u,reset:f}=be(l);let h;e[5]!==p||e[6]!==f?(h=y=>{y.preventDefault(),p("/contact/send",{onSuccess:()=>{f(),xe.success("Message sent ✅")},onError:bt})},e[5]=p,e[6]=f,e[7]=h):h=e[7];const j=h;let S,_,$,C,g;e[8]===Symbol.for("react.memo_cache_sentinel")?(_=n.jsx(gt,{position:"bottom-center",toastOptions:{style:{background:"#1c1c1c",color:"#fff",border:"1px solid rgba(255,255,255,.1)",borderRadius:"999px"}}}),$=n.jsx(we,{}),C=()=>s(!0),g=()=>s(!1),S=n.jsx(je,{}),e[8]=S,e[9]=_,e[10]=$,e[11]=C,e[12]=g):(S=e[8],_=e[9],$=e[10],C=e[11],g=e[12]);let k;e[13]===Symbol.for("react.memo_cache_sentinel")?(k=n.jsxs(ye,{title:"Welcome",children:[n.jsx("link",{rel:"preconnect",href:"https://fonts.bunny.net"}),n.jsx("link",{href:"https://fonts.bunny.net/css?family=instrument-sans:400,500,600",rel:"stylesheet"})]}),e[13]=k):k=e[13];let R;e[14]===Symbol.for("react.memo_cache_sentinel")?(R=n.jsxs("div",{className:"h-full bg-[#111111] fixed flex  inset-0 items-end justify-end overflow-hidden z-0",children:[n.jsx("img",{className:"w-full fixed h-full object-cover",src:"./img/projects/bg-projects.png",alt:"projects-bg"}),n.jsx("div",{className:"lens fixed pointer-events-none z-10"})]}),e[14]=R):R=e[14];let H,q,Y;e[15]===Symbol.for("react.memo_cache_sentinel")?(H=n.jsx("p",{className:"text-[16px] text-[#7af298]",children:"// Get In Touch"}),q=n.jsx("h1",{className:"lg:text-[50px] uppercase text-[37px] text-white font-semibold max-w-xl lg:leading-tight",children:"Let’s Connect & Collaborate"}),Y=n.jsx("p",{className:"text-[16px] text-[#b5b5b5] max-w-lg",children:"Have a project in mind? Let’s make it happen! Drop us a message, and we’ll connect with you soon."}),e[15]=H,e[16]=q,e[17]=Y):(H=e[15],q=e[16],Y=e[17]);let G;e[18]===Symbol.for("react.memo_cache_sentinel")?(G=n.jsxs("a",{target:"_blank",href:"https://github.com/theelh",className:"flex lg:mx-auto hover:rotate-x-180 transition-all duration-700 items-center gap-2 hover:bg-white hover:text-[#131313] border-b border-white text-white py-3 px-3 hover:rounded-full",children:["Github",n.jsx(Ne,{className:"text-md"})]}),e[18]=G):G=e[18];let B;e[19]===Symbol.for("react.memo_cache_sentinel")?(B=n.jsxs("a",{target:"_blank",href:"https://www.linkedin.com/in/marwane-elhosni/",className:"flex lg:mx-auto hover:rotate-x-180 transition-all duration-700 items-center gap-2 hover:bg-white hover:text-[#131313] border-b border-white text-white py-3 px-3 hover:rounded-full",children:["LinkedIn",n.jsx($e,{className:"text-md"})]}),e[19]=B):B=e[19];let W;e[20]===Symbol.for("react.memo_cache_sentinel")?(W=n.jsxs("div",{className:"flex flex-col gap-6",children:[H,q,Y,n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-2",children:[G,B,n.jsxs("a",{target:"_blank",href:"https://www.instagram.com/codeaurum77/",className:"flex lg:mx-auto hover:rotate-x-180 transition-all duration-700 items-center gap-2 hover:bg-white hover:text-[#131313] border-b border-white text-white py-3 px-3 hover:rounded-full",children:["Instagram",n.jsx(Se,{className:"text-md"})]})]})]}),e[20]=W):W=e[20];let A;e[21]!==d?(A=y=>d("name",y.target.value),e[21]=d,e[22]=A):A=e[22];let D;e[23]!==c.name||e[24]!==A?(D=n.jsx("input",{placeholder:"Name",value:c.name,onChange:A,className:"input"}),e[23]=c.name,e[24]=A,e[25]=D):D=e[25];let I;e[26]!==d?(I=y=>d("email",y.target.value),e[26]=d,e[27]=I):I=e[27];let L;e[28]!==c.email||e[29]!==I?(L=n.jsx("input",{placeholder:"Email",value:c.email,onChange:I,className:"input"}),e[28]=c.email,e[29]=I,e[30]=L):L=e[30];let z;e[31]!==d?(z=y=>d("message",y.target.value),e[31]=d,e[32]=z):z=e[32];let O;e[33]!==c.message||e[34]!==z?(O=n.jsx("textarea",{placeholder:"Message",rows:4,value:c.message,onChange:z,className:"input"}),e[33]=c.message,e[34]=z,e[35]=O):O=e[35];let M;e[36]!==u?(M=n.jsx("button",{disabled:u,className:"py-3 rounded-full bg-white text-black font-medium",children:"Send Message"}),e[36]=u,e[37]=M):M=e[37];let T;e[38]!==j||e[39]!==D||e[40]!==L||e[41]!==O||e[42]!==M?(T=n.jsxs("main",{className:"grid lg:grid-cols-2 gap-16 font-sans items-center w-full my-20 lg:my-40 h-full max-w-7xl px-6",children:[W,n.jsx("div",{children:n.jsxs("form",{onSubmit:j,className:`\r
      lg:w-[420px] w-80 p-8 rounded-3xl\r
      backdrop-blur-xl bg-white/5 border border-white/10\r
      flex flex-col gap-6\r
      `,children:[D,L,O,M]})})]}),e[38]=j,e[39]=D,e[40]=L,e[41]=O,e[42]=M,e[43]=T):T=e[43];let X;e[44]===Symbol.for("react.memo_cache_sentinel")?(X=n.jsxs("div",{className:"flex flex-col gap-8 max-w-6xl",children:[n.jsx("p",{className:"text-[16px] mt-3 text-[#7af298]",children:"// Let's Connect"}),n.jsx("img",{className:"size-96 w-xl object-cover ",src:"./img/pre-footer.jpg",alt:""})]}),e[44]=X):X=e[44];let U;e[45]===Symbol.for("react.memo_cache_sentinel")?(U=n.jsxs("main",{className:" w-full pt-12 h-full max-w-full bg-[#131313] font-mono justify-center",children:[n.jsx("div",{className:"max-w-340 p-8 mx-auto flex flex-col",children:n.jsxs("div",{className:"flex flex-col lg:flex-row lg:justify-between items-start gap-6 py-8 rounded-2xl font-sans text-white",children:[X,n.jsxs("div",{className:"flex flex-col gap-8",children:[n.jsx("h3",{className:"text-[48px] font-bold max-w-xl leading-tight",children:"Ready to take your idea to the next level?"}),n.jsx(ve,{href:"/contact",className:"flex mx-auto items-center font-sans gap-2 border border-[#131313] bg-[#7af298] text-[#131313] py-14 px-5 rounded-full",children:"Start Project"})]})]})}),n.jsx(_e,{})]}),e[45]=U):U=e[45];let Z;return e[46]!==T?(Z=n.jsxs(n.Fragment,{children:[_,$,n.jsxs("div",{onMouseEnter:C,onMouseLeave:g,children:[S,k,R,n.jsx("div",{id:"smooth-wrapper",children:n.jsxs("div",{id:"smooth-content",className:"relative z-10 min-h-screen flex flex-col items-center pt-6 text-[#1b1b18] lg:justify-center",children:[T,U]})})]})]}),e[46]=T,e[47]=Z):Z=e[47],Z}function bt(){xe.error("Something went wrong ❌")}function yt(){P.set(".split",{opacity:1}),document.fonts.ready.then(vt)}function vt(){P.utils.toArray(".container").forEach(wt)}function wt(e){e.querySelectorAll(".split").forEach(s=>{ne.create(s,{type:"words,lines",mask:"lines",linesClass:"line",autoSplit:!0,onSplit:r=>P.from(r.lines,{yPercent:120,stagger:.1,scrollTrigger:{trigger:e,scrub:!0,start:"top center",end:"bottom center"}})})})}function jt(){const e=document.querySelector(".lens");let t=0,s=0,r=0,i=0;const o=l=>{t=l.clientX,s=l.clientY};window.addEventListener("mousemove",o);const a=()=>{r=r+(t-r)*.12,i=i+(s-i)*.12,e&&e.setAttribute("style",`transform: translate(${r}px, ${i}px) translate(-50%, -50%) scale(1.08);`),requestAnimationFrame(a)};return a(),()=>{window.removeEventListener("mousemove",o)}}function _t(){const e=le.create({wrapper:"#smooth-wrapper",content:"#smooth-content",smooth:1,effects:!0,smoothTouch:.1});return ae.refresh(),()=>{e.paused()}}export{At as default};
