import{n as b,s as p}from"./index.d98ccd38.js";const e=[];function d(n,u=b){let o;const i=new Set;function r(t){if(p(n,t)&&(n=t,o)){const a=!e.length;for(const s of i)s[1](),e.push(s,n);if(a){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function l(t){r(t(n))}function _(t,a=b){const s=[t,a];return i.add(s),i.size===1&&(o=u(r)||b),t(n),()=>{i.delete(s),i.size===0&&(o(),o=null)}}return{set:r,update:l,subscribe:_}}var c;const h=((c=globalThis.__sveltekit_p8aalx)==null?void 0:c.base)??"";var f;const q=((f=globalThis.__sveltekit_p8aalx)==null?void 0:f.assets)??h;export{q as a,h as b,d as w};