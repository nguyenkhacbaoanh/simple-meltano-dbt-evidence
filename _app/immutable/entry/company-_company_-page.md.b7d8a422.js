import{S as X,i as Y,s as W,e as T,t as w,c as C,b as P,d as k,f as g,G as H,N as Z,h as E,j as b,k as M,n as L,J as ue,I as x,D as z,r as q,y as J,q as v,a as R,v as D,g as j,w as G,x as F,z as U,l as ee,A as fe,B as ie,C as ce}from"../chunks/index.d98ccd38.js";import{p as me}from"../chunks/stores.b39e9614.js";import{p as te,r as re}from"../chunks/stores.c7cbf6c6.js";import{c as pe,g as _e,s as de,D as he,Q as oe}from"../chunks/CodeBlock.svelte_svelte_type_style_lang.99526c4a.js";import{c as ge,f as ae,C as ye}from"../chunks/Prismjs.3bae84d0.js";import{H as be}from"../chunks/HelpCircleIcon.8c307bd2.js";function ve(l){let e,r,t;return{c(){e=T("span"),r=w(l[0]),this.h()},l(a){e=C(a,"SPAN",{class:!0});var n=P(e);r=k(n,l[0]),n.forEach(g),this.h()},h(){H(e,"class",t=Z(l[1]?"flash":"normal")+" svelte-dlmu54")},m(a,n){E(a,e,n),b(e,r)},p(a,[n]){n&1&&M(r,a[0]),n&2&&t!==(t=Z(a[1]?"flash":"normal")+" svelte-dlmu54")&&H(e,"class",t)},i:L,o:L,d(a){a&&g(e)}}}function qe(l,e,r){let{value:t}=e,a=!0;return ue(()=>{r(1,a=!a)}),l.$$set=n=>{"value"in n&&r(0,t=n.value)},[t,a]}class we extends X{constructor(e){super(),Y(this,e,qe,ve,W,{value:0})}}function ke(l){let e,r,t,a,n,u,m,o,p,_;return u=new be({props:{height:"18",width:"18",verticalOffset:"2"}}),{c(){e=T("span"),r=T("span"),t=w("Error"),a=R(),n=T("span"),D(u.$$.fragment),m=R(),o=T("span"),p=w(l[1]),this.h()},l(f){e=C(f,"SPAN",{class:!0});var i=P(e);r=C(i,"SPAN",{class:!0});var O=P(r);t=k(O,"Error"),O.forEach(g),a=j(i),n=C(i,"SPAN",{class:!0});var c=P(n);G(u.$$.fragment,c),c.forEach(g),m=j(i),o=C(i,"SPAN",{class:!0});var A=P(o);p=k(A,l[1]),A.forEach(g),i.forEach(g),this.h()},h(){H(r,"class","error-label svelte-gbiqqa"),H(n,"class","additional-info-icon svelte-gbiqqa"),H(o,"class","error-msg svelte-gbiqqa"),H(e,"class","error svelte-gbiqqa")},m(f,i){E(f,e,i),b(e,r),b(r,t),b(e,a),b(e,n),F(u,n,null),b(e,m),b(e,o),b(o,p),_=!0},p(f,i){(!_||i&2)&&M(p,f[1])},i(f){_||(v(u.$$.fragment,f),_=!0)},o(f){q(u.$$.fragment,f),_=!1},d(f){f&&g(e),U(u)}}}function Ee(l){let e,r;return e=new we({props:{value:ae(l[2],l[3])}}),{c(){D(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,a){F(e,t,a),r=!0},p(t,a){const n={};a&12&&(n.value=ae(t[2],t[3])),e.$set(n)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){q(e.$$.fragment,t),r=!1},d(t){U(e,t)}}}function Ne(l){let e,r,t,a,n,u;return{c(){e=T("span"),r=w("["),t=w(l[0]),a=w("]"),n=T("span"),u=w("Placeholder: no data currently referenced."),this.h()},l(m){e=C(m,"SPAN",{class:!0});var o=P(e);r=k(o,"["),t=k(o,l[0]),a=k(o,"]"),n=C(o,"SPAN",{class:!0});var p=P(n);u=k(p,"Placeholder: no data currently referenced."),p.forEach(g),o.forEach(g),this.h()},h(){H(n,"class","error-msg svelte-gbiqqa"),H(e,"class","placeholder svelte-gbiqqa")},m(m,o){E(m,e,o),b(e,r),b(e,t),b(e,a),b(e,n),b(n,u)},p(m,o){o&1&&M(t,m[0])},i:L,o:L,d(m){m&&g(e)}}}function Se(l){let e,r,t,a;const n=[Ne,Ee,ke],u=[];function m(o,p){return o[0]?0:o[1]?2:1}return e=m(l),r=u[e]=n[e](l),{c(){r.c(),t=x()},l(o){r.l(o),t=x()},m(o,p){u[e].m(o,p),E(o,t,p),a=!0},p(o,[p]){let _=e;e=m(o),e===_?u[e].p(o,p):(z(),q(u[_],1,1,()=>{u[_]=null}),J(),r=u[e],r?r.p(o,p):(r=u[e]=n[e](o),r.c()),v(r,1),r.m(t.parentNode,t))},i(o){a||(v(r),a=!0)},o(o){q(r),a=!1},d(o){u[e].d(o),o&&g(t)}}}function Te(l,e,r){let{data:t=null}=e,{row:a=0}=e,{column:n=null}=e,{placeholder:u=null}=e,m,o,p,_;return l.$$set=f=>{"data"in f&&r(4,t=f.data),"row"in f&&r(6,a=f.row),"column"in f&&r(5,n=f.column),"placeholder"in f&&r(0,u=f.placeholder)},l.$$.update=()=>{if(l.$$.dirty&243)try{if(r(1,p=void 0),!u)if(t){if(typeof t=="string")throw Error(`Received: data=${t}, expected: data={${t}}`);if(Array.isArray(t)||r(4,t=[t]),isNaN(a))throw Error("row must be a number (row="+a+")");try{Object.keys(t[a])[0]}catch{throw Error("Row "+a+" does not exist in the dataset")}r(5,n=n??Object.keys(t[a])[0]),pe(t,[n]),r(7,_=_e(t,"array"));let f=_.filter(i=>i.type==="date");if(f=f.map(i=>i.id),f.length>0)for(let i=0;i<f.length;i++)r(4,t=ge(t,f[i]));r(2,m=t[a][n]),r(7,_=_.filter(i=>i.id===n)),r(3,o=_[0].format)}else throw Error("No data provided. If you referenced a query result, check that the name is correct.")}catch(f){if(r(1,p=f.message),de)throw p}},[u,p,m,o,t,n,a,_]}class ne extends X{constructor(e){super(),Y(this,e,Te,Se,W,{data:4,row:6,column:5,placeholder:0})}}function se(l){let e,r;return e=new oe({props:{pageQueries:l[0].evidencemeta.queries,queryID:"nonmatched",queryResult:l[0].nonmatched}}),{c(){D(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,a){F(e,t,a),r=!0},p(t,a){const n={};a&1&&(n.pageQueries=t[0].evidencemeta.queries),a&1&&(n.queryResult=t[0].nonmatched),e.$set(n)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){q(e.$$.fragment,t),r=!1},d(t){U(e,t)}}}function le(l){let e,r;return e=new oe({props:{pageQueries:l[0].evidencemeta.queries,queryID:"sg_count_nonmatched_filtered",queryResult:l[0].sg_count_nonmatched_filtered}}),{c(){D(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,a){F(e,t,a),r=!0},p(t,a){const n={};a&1&&(n.pageQueries=t[0].evidencemeta.queries),a&1&&(n.queryResult=t[0].sg_count_nonmatched_filtered),e.$set(n)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){q(e.$$.fragment,t),r=!1},d(t){U(e,t)}}}function Ce(l){let e,r,t=l[3].params.company+"",a,n,u,m,o,p,_,f,i,O,c,A,N,K,I,S,Q,d=l[0].nonmatched&&se(l),y=l[0].sg_count_nonmatched_filtered&&le(l);return c=new ne({props:{data:l[2].filter(l[5]),column:"nonmatched_so"}}),N=new ne({props:{data:l[2].filter(l[6]),column:"nonmatched_contract"}}),S=new he({props:{data:l[1].filter(l[7]),search:"true"}}),{c(){e=T("h1"),r=w("Gap Investigation detail for "),a=w(t),n=R(),d&&d.c(),u=R(),y&&y.c(),m=R(),o=T("h2"),p=w("Key facteurs"),_=R(),f=T("ul"),i=T("li"),O=w("There were "),D(c.$$.fragment),A=w(`
system operation which `),D(N.$$.fragment),K=w(" contracts problemes during migration, our auditeur can more details to make manuals entries for next phase."),I=R(),D(S.$$.fragment)},l(s){e=C(s,"H1",{});var h=P(e);r=k(h,"Gap Investigation detail for "),a=k(h,t),h.forEach(g),n=j(s),d&&d.l(s),u=j(s),y&&y.l(s),m=j(s),o=C(s,"H2",{});var V=P(o);p=k(V,"Key facteurs"),V.forEach(g),_=j(s),f=C(s,"UL",{});var B=P(f);i=C(B,"LI",{});var $=P(i);O=k($,"There were "),G(c.$$.fragment,$),A=k($,`
system operation which `),G(N.$$.fragment,$),K=k($," contracts problemes during migration, our auditeur can more details to make manuals entries for next phase."),$.forEach(g),B.forEach(g),I=j(s),G(S.$$.fragment,s)},m(s,h){E(s,e,h),b(e,r),b(e,a),E(s,n,h),d&&d.m(s,h),E(s,u,h),y&&y.m(s,h),E(s,m,h),E(s,o,h),b(o,p),E(s,_,h),E(s,f,h),b(f,i),b(i,O),F(c,i,null),b(i,A),F(N,i,null),b(i,K),E(s,I,h),F(S,s,h),Q=!0},p(s,[h]){(!Q||h&8)&&t!==(t=s[3].params.company+"")&&M(a,t),s[0].nonmatched?d?(d.p(s,h),h&1&&v(d,1)):(d=se(s),d.c(),v(d,1),d.m(u.parentNode,u)):d&&(z(),q(d,1,1,()=>{d=null}),J()),s[0].sg_count_nonmatched_filtered?y?(y.p(s,h),h&1&&v(y,1)):(y=le(s),y.c(),v(y,1),y.m(m.parentNode,m)):y&&(z(),q(y,1,1,()=>{y=null}),J());const V={};h&12&&(V.data=s[2].filter(s[5])),c.$set(V);const B={};h&12&&(B.data=s[2].filter(s[6])),N.$set(B);const $={};h&10&&($.data=s[1].filter(s[7])),S.$set($)},i(s){Q||(v(d),v(y),v(c.$$.fragment,s),v(N.$$.fragment,s),v(S.$$.fragment,s),Q=!0)},o(s){q(d),q(y),q(c.$$.fragment,s),q(N.$$.fragment,s),q(S.$$.fragment,s),Q=!1},d(s){s&&g(e),s&&g(n),d&&d.d(s),s&&g(u),y&&y.d(s),s&&g(m),s&&g(o),s&&g(_),s&&g(f),U(c),U(N),s&&g(I),U(S,s)}}}function Pe(l,e,r){let t,a;ee(l,re,c=>r(9,t=c)),ee(l,me,c=>r(3,a=c));let{data:n}=e,{data:u={},customFormattingSettings:m}=n;fe(re,t="bfc61d7ad84cb5fb67d0cbc7779e7454",t),ie(ye,{getCustomFormats:()=>m.customFormats||[]});const o=function(c){var N,K;let A=(N=c.evidencemeta)==null?void 0:N.queries;if(A)for(let I=0;I<A.length;I++){let S=c[A[I].id],Q=(K=c.evidencemeta)==null?void 0:K.queries[I].columnTypes;for(let d=0;d<S.length;d++)Q&&Object.defineProperty(S[d],"_evidenceColumnTypes",{enumerable:!1,value:Q})}};ce(()=>{o(u)});let{nonmatched:p,sg_count_nonmatched_filtered:_}=u;const f=c=>c.company===a.params.company,i=c=>c.company===a.params.company,O=c=>c.company===a.params.company;return l.$$set=c=>{"data"in c&&r(4,n=c.data)},l.$$.update=()=>{l.$$.dirty&16&&r(0,{data:u={},customFormattingSettings:m}=n,u),l.$$.dirty&1&&(Object.keys(u).length>0?te.set(!0):te.set(!1)),l.$$.dirty&1&&r(1,{nonmatched:p,sg_count_nonmatched_filtered:_}=u,p,(r(2,_),r(0,u),r(4,n)))},[u,p,_,a,n,f,i,O]}class Re extends X{constructor(e){super(),Y(this,e,Pe,Ce,W,{data:4})}}export{Re as default};