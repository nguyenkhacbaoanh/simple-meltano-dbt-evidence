import{S as L,i as Z,s as x,e as A,t as I,a as N,v as H,c as k,b as C,d as D,f as m,g as Q,w as R,h as p,j as O,x as j,q as v,r as g,y as Y,z as F,l as ee,A as te,B as ae,C as re,D as W}from"../chunks/index.d98ccd38.js";import"../chunks/paths.8e47a1ff.js";import{p as z,r as B}from"../chunks/stores.7e9c4c19.js";import{D as ne,Q as X}from"../chunks/CodeBlock.svelte_svelte_type_style_lang.5e8cc226.js";import{C as se}from"../chunks/Prismjs.3bae84d0.js";function K(u){let a,l;return a=new X({props:{pageQueries:u[0].evidencemeta.queries,queryID:"nonmatched",queryResult:u[0].nonmatched}}),{c(){H(a.$$.fragment)},l(t){R(a.$$.fragment,t)},m(t,n){j(a,t,n),l=!0},p(t,n){const s={};n&1&&(s.pageQueries=t[0].evidencemeta.queries),n&1&&(s.queryResult=t[0].nonmatched),a.$set(s)},i(t){l||(v(a.$$.fragment,t),l=!0)},o(t){g(a.$$.fragment,t),l=!1},d(t){F(a,t)}}}function V(u){let a,l;return a=new X({props:{pageQueries:u[0].evidencemeta.queries,queryID:"sg_count_nonmatched",queryResult:u[0].sg_count_nonmatched}}),{c(){H(a.$$.fragment)},l(t){R(a.$$.fragment,t)},m(t,n){j(a,t,n),l=!0},p(t,n){const s={};n&1&&(s.pageQueries=t[0].evidencemeta.queries),n&1&&(s.queryResult=t[0].sg_count_nonmatched),a.$set(s)},i(t){l||(v(a.$$.fragment,t),l=!0)},o(t){g(a.$$.fragment,t),l=!1},d(t){F(a,t)}}}function ie(u){let a,l,t,n,s,E,T,q,_,f,$,d,w,h,y,b,c,G,i=u[0].nonmatched&&K(u),o=u[0].sg_count_nonmatched&&V(u);return c=new ne({props:{data:u[1],link:"company_link",rows:"10",search:"true",rowShading:"true",sortable:"true"}}),{c(){a=A("h1"),l=I("Gaps Investigation"),t=N(),n=A("p"),s=A("em"),E=I("Written by Anh NGUYEN in January 2024"),T=N(),q=A("p"),_=A("em"),f=I("Analysis covers the time period of October 2022 to January 2024. All queries have been limited to that range."),$=N(),d=A("h2"),w=I("All contract number have been unmatched:"),h=N(),i&&i.c(),y=N(),o&&o.c(),b=N(),H(c.$$.fragment)},l(e){a=k(e,"H1",{});var r=C(a);l=D(r,"Gaps Investigation"),r.forEach(m),t=Q(e),n=k(e,"P",{});var S=C(n);s=k(S,"EM",{});var J=C(s);E=D(J,"Written by Anh NGUYEN in January 2024"),J.forEach(m),S.forEach(m),T=Q(e),q=k(e,"P",{});var M=C(q);_=k(M,"EM",{});var P=C(_);f=D(P,"Analysis covers the time period of October 2022 to January 2024. All queries have been limited to that range."),P.forEach(m),M.forEach(m),$=Q(e),d=k(e,"H2",{});var U=C(d);w=D(U,"All contract number have been unmatched:"),U.forEach(m),h=Q(e),i&&i.l(e),y=Q(e),o&&o.l(e),b=Q(e),R(c.$$.fragment,e)},m(e,r){p(e,a,r),O(a,l),p(e,t,r),p(e,n,r),O(n,s),O(s,E),p(e,T,r),p(e,q,r),O(q,_),O(_,f),p(e,$,r),p(e,d,r),O(d,w),p(e,h,r),i&&i.m(e,r),p(e,y,r),o&&o.m(e,r),p(e,b,r),j(c,e,r),G=!0},p(e,[r]){e[0].nonmatched?i?(i.p(e,r),r&1&&v(i,1)):(i=K(e),i.c(),v(i,1),i.m(y.parentNode,y)):i&&(W(),g(i,1,1,()=>{i=null}),Y()),e[0].sg_count_nonmatched?o?(o.p(e,r),r&1&&v(o,1)):(o=V(e),o.c(),v(o,1),o.m(b.parentNode,b)):o&&(W(),g(o,1,1,()=>{o=null}),Y());const S={};r&2&&(S.data=e[1]),c.$set(S)},i(e){G||(v(i),v(o),v(c.$$.fragment,e),G=!0)},o(e){g(i),g(o),g(c.$$.fragment,e),G=!1},d(e){e&&m(a),e&&m(t),e&&m(n),e&&m(T),e&&m(q),e&&m($),e&&m(d),e&&m(h),i&&i.d(e),e&&m(y),o&&o.d(e),e&&m(b),F(c,e)}}}function oe(u,a,l){let t;ee(u,B,f=>l(5,t=f));let{data:n}=a,{data:s={},customFormattingSettings:E}=n;te(B,t="b803b14a24e0c0d4445cbae1557790a6",t),ae(se,{getCustomFormats:()=>E.customFormats||[]});const T=function(f){var d,w;let $=(d=f.evidencemeta)==null?void 0:d.queries;if($)for(let h=0;h<$.length;h++){let y=f[$[h].id],b=(w=f.evidencemeta)==null?void 0:w.queries[h].columnTypes;for(let c=0;c<y.length;c++)b&&Object.defineProperty(y[c],"_evidenceColumnTypes",{enumerable:!1,value:b})}};re(()=>{T(s)});let{nonmatched:q,sg_count_nonmatched:_}=s;return u.$$set=f=>{"data"in f&&l(2,n=f.data)},u.$$.update=()=>{u.$$.dirty&4&&l(0,{data:s={},customFormattingSettings:E}=n,s),u.$$.dirty&1&&(Object.keys(s).length>0?z.set(!0):z.set(!1)),u.$$.dirty&1&&l(1,{nonmatched:q,sg_count_nonmatched:_}=s,_)},[s,_,n]}class pe extends L{constructor(a){super(),Z(this,a,oe,ie,x,{data:2})}}export{pe as default};
