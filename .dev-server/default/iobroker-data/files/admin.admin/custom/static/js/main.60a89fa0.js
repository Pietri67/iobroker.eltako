(()=>{var M={56046:(s,u,n)=>{Promise.all([n.e("webpack_sharing_consume_default_react_react"),n.e("webpack_sharing_consume_default_prop-types_prop-types"),n.e("webpack_sharing_consume_default_react-dom_react-dom"),n.e("webpack_sharing_consume_default_mui_material_mui_material"),n.e("webpack_sharing_consume_default_iobroker_adapter-react-v5_iobroker_adapter-react-v5-webpack_s-bbec14"),n.e("src_bootstrap_jsx")]).then(n.bind(n,40067))}},T={};function e(s){var u=T[s];if(u!==void 0)return u.exports;var n=T[s]={id:s,loaded:!1,exports:{}};return M[s].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}e.m=M,e.c=T,e.amdD=function(){throw new Error("define cannot be used indirect")},e.n=s=>{var u=s&&s.__esModule?()=>s.default:()=>s;return e.d(u,{a:u}),u},e.d=(s,u)=>{for(var n in u)e.o(u,n)&&!e.o(s,n)&&Object.defineProperty(s,n,{enumerable:!0,get:u[n]})},e.f={},e.e=s=>Promise.all(Object.keys(e.f).reduce((u,n)=>(e.f[n](s,u),u),[])),e.u=s=>"static/js/"+s+"."+{webpack_sharing_consume_default_react_react:"a0714c8d","webpack_sharing_consume_default_prop-types_prop-types":"4852a01b","webpack_sharing_consume_default_react-dom_react-dom":"b2e87ff7",webpack_sharing_consume_default_mui_material_mui_material:"ab9c362b","webpack_sharing_consume_default_iobroker_adapter-react-v5_iobroker_adapter-react-v5-webpack_s-bbec14":"f18e9fbd",src_bootstrap_jsx:"b1e4762d","vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_system_esm_DefaultPropsPr-f385a6":"41dbbb0e","vendors-node_modules_cronstrue_locales_de_js-node_modules_cronstrue_locales_es_js-node_module-ce4b54":"7ba66369","vendors-node_modules_mui_material_colors_index_js-node_modules_mui_material_styles_index_js":"f075e886","vendors-node_modules_iobroker_adapter-react-v5_index_js-node_modules_mui_material_styles_cssU-0622a3":"4d99d021","webpack_sharing_consume_default_mui_icons-material_mui_icons-material-webpack_sharing_consume-80e7de":"e1fec510","vendors-node_modules_mui_material_FilledInput_FilledInput_js-node_modules_mui_material_styles-7ce2a0":"e5dfe3a8","vendors-node_modules_iobroker_json-config_build_index_js":"e322ba3a","webpack_sharing_consume_default_mui_x-date-pickers_mui_x-date-pickers-webpack_sharing_consume-9f1a2d":"88a09f42",_9157:"6b3f402f","vendors-node_modules_mui_icons-material_esm_index_js":"8219fdd8","vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_Chip_Chip_js-nod-734f01":"e4bf5431","vendors-node_modules_mui_material_index_js":"356485f4","vendors-node_modules_mui_x-date-pickers_index_js":"a8e98b8c","node_modules_prop-types_index_js":"fc74650a","vendors-node_modules_react-ace_lib_index_js":"903fd459","vendors-node_modules_react-dom_index_js":"b8c838c7","vendors-node_modules_react-dropzone_dist_es_index_js":"c3d94aad",node_modules_react_index_js:"47666f7d","vendors-node_modules_react-qr-code_lib_index_js":"0471d4fd"}[s]+".chunk.js",e.miniCssF=s=>{},e.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(s){if(typeof window=="object")return window}}(),e.o=(s,u)=>Object.prototype.hasOwnProperty.call(s,u),(()=>{var s={},u="@iobroker/admin-component-easy-access:";e.l=(n,l,v,p)=>{if(s[n]){s[n].push(l);return}var m,y;if(v!==void 0)for(var c=document.getElementsByTagName("script"),w=0;w<c.length;w++){var f=c[w];if(f.getAttribute("src")==n||f.getAttribute("data-webpack")==u+v){m=f;break}}m||(y=!0,m=document.createElement("script"),m.charset="utf-8",m.timeout=120,e.nc&&m.setAttribute("nonce",e.nc),m.setAttribute("data-webpack",u+v),m.src=n),s[n]=[l];var b=(P,x)=>{m.onerror=m.onload=null,clearTimeout(g);var k=s[n];if(delete s[n],m.parentNode&&m.parentNode.removeChild(m),k&&k.forEach(h=>h(x)),P)return P(x)},g=setTimeout(b.bind(null,void 0,{type:"timeout",target:m}),12e4);m.onerror=b.bind(null,m.onerror),m.onload=b.bind(null,m.onload),y&&document.head.appendChild(m)}})(),e.r=s=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},e.nmd=s=>(s.paths=[],s.children||(s.children=[]),s),(()=>{e.S={};var s={},u={};e.I=(n,l)=>{l||(l=[]);var v=u[n];if(v||(v=u[n]={}),!(l.indexOf(v)>=0)){if(l.push(v),s[n])return s[n];e.o(e.S,n)||(e.S[n]={});var p=e.S[n],m=b=>{typeof console!="undefined"&&console.warn&&console.warn(b)},y="@iobroker/admin-component-easy-access",c=(b,g,P,x)=>{var k=p[b]=p[b]||{},h=k[g];(!h||!h.loaded&&(!x!=!h.eager?x:y>h.from))&&(k[g]={get:P,from:y,eager:!!x})},w=b=>{var g=h=>m("Initialization of sharing external failed: "+h);try{var P=e(b);if(!P)return;var x=h=>h&&h.init&&h.init(e.S[n],l);if(P.then)return f.push(P.then(x,g));var k=x(P);if(k&&k.then)return f.push(k.catch(g))}catch(h){g(h)}},f=[];switch(n){case"default":c("@iobroker/adapter-react-v5","7.2.4",()=>Promise.all([e.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_system_esm_DefaultPropsPr-f385a6"),e.e("vendors-node_modules_cronstrue_locales_de_js-node_modules_cronstrue_locales_es_js-node_module-ce4b54"),e.e("vendors-node_modules_mui_material_colors_index_js-node_modules_mui_material_styles_index_js"),e.e("vendors-node_modules_iobroker_adapter-react-v5_index_js-node_modules_mui_material_styles_cssU-0622a3"),e.e("webpack_sharing_consume_default_react_react"),e.e("webpack_sharing_consume_default_prop-types_prop-types"),e.e("webpack_sharing_consume_default_mui_icons-material_mui_icons-material-webpack_sharing_consume-80e7de"),e.e("webpack_sharing_consume_default_mui_material_mui_material")]).then(()=>()=>e(64620))),c("@iobroker/json-config","7.2.5",()=>Promise.all([e.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_system_esm_DefaultPropsPr-f385a6"),e.e("vendors-node_modules_mui_material_FilledInput_FilledInput_js-node_modules_mui_material_styles-7ce2a0"),e.e("vendors-node_modules_cronstrue_locales_de_js-node_modules_cronstrue_locales_es_js-node_module-ce4b54"),e.e("vendors-node_modules_iobroker_json-config_build_index_js"),e.e("webpack_sharing_consume_default_react_react"),e.e("webpack_sharing_consume_default_prop-types_prop-types"),e.e("webpack_sharing_consume_default_react-dom_react-dom"),e.e("webpack_sharing_consume_default_mui_icons-material_mui_icons-material-webpack_sharing_consume-80e7de"),e.e("webpack_sharing_consume_default_mui_material_mui_material"),e.e("webpack_sharing_consume_default_mui_x-date-pickers_mui_x-date-pickers-webpack_sharing_consume-9f1a2d"),e.e("_9157")]).then(()=>()=>e(72765))),c("@mui/icons-material","6.1.3",()=>Promise.all([e.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_system_esm_DefaultPropsPr-f385a6"),e.e("vendors-node_modules_mui_icons-material_esm_index_js"),e.e("webpack_sharing_consume_default_react_react"),e.e("webpack_sharing_consume_default_prop-types_prop-types")]).then(()=>()=>e(61636))),c("@mui/material","6.1.3",()=>Promise.all([e.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_system_esm_DefaultPropsPr-f385a6"),e.e("vendors-node_modules_mui_material_FilledInput_FilledInput_js-node_modules_mui_material_styles-7ce2a0"),e.e("vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_Chip_Chip_js-nod-734f01"),e.e("vendors-node_modules_mui_material_colors_index_js-node_modules_mui_material_styles_index_js"),e.e("vendors-node_modules_mui_material_index_js"),e.e("webpack_sharing_consume_default_react_react"),e.e("webpack_sharing_consume_default_prop-types_prop-types"),e.e("webpack_sharing_consume_default_react-dom_react-dom")]).then(()=>()=>e(82739))),c("@mui/x-date-pickers","7.20.0",()=>Promise.all([e.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_system_esm_DefaultPropsPr-f385a6"),e.e("vendors-node_modules_mui_material_FilledInput_FilledInput_js-node_modules_mui_material_styles-7ce2a0"),e.e("vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_Chip_Chip_js-nod-734f01"),e.e("vendors-node_modules_mui_x-date-pickers_index_js"),e.e("webpack_sharing_consume_default_react_react"),e.e("webpack_sharing_consume_default_prop-types_prop-types"),e.e("webpack_sharing_consume_default_react-dom_react-dom")]).then(()=>()=>e(72117))),c("prop-types","15.8.1",()=>e.e("node_modules_prop-types_index_js").then(()=>()=>e(75826))),c("react-ace","12.0.0",()=>Promise.all([e.e("vendors-node_modules_react-ace_lib_index_js"),e.e("webpack_sharing_consume_default_react_react"),e.e("webpack_sharing_consume_default_prop-types_prop-types")]).then(()=>()=>e(76216))),c("react-dom","18.3.1",()=>Promise.all([e.e("vendors-node_modules_react-dom_index_js"),e.e("webpack_sharing_consume_default_react_react")]).then(()=>()=>e(22483))),c("react-dropzone","14.2.9",()=>Promise.all([e.e("vendors-node_modules_react-dropzone_dist_es_index_js"),e.e("webpack_sharing_consume_default_react_react"),e.e("webpack_sharing_consume_default_prop-types_prop-types")]).then(()=>()=>e(72589))),c("react","18.3.1",()=>e.e("node_modules_react_index_js").then(()=>()=>e(77810)));break}return f.length?s[n]=Promise.all(f).then(()=>s[n]=1):s[n]=1}}})(),(()=>{var s;e.g.importScripts&&(s=e.g.location+"");var u=e.g.document;if(!s&&u&&(u.currentScript&&u.currentScript.tagName.toUpperCase()==="SCRIPT"&&(s=u.currentScript.src),!s)){var n=u.getElementsByTagName("script");if(n.length)for(var l=n.length-1;l>-1&&(!s||!/^http(s?):/.test(s));)s=n[l--].src}if(!s)throw new Error("Automatic publicPath is not supported in this browser");s=s.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=s+"../../"})(),(()=>{var s=r=>{var a=o=>o.split(".").map(t=>+t==t?+t:t),_=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(r),i=_[1]?a(_[1]):[];return _[2]&&(i.length++,i.push.apply(i,a(_[2]))),_[3]&&(i.push([]),i.push.apply(i,a(_[3]))),i},u=(r,a)=>{r=s(r),a=s(a);for(var _=0;;){if(_>=r.length)return _<a.length&&(typeof a[_])[0]!="u";var i=r[_],o=(typeof i)[0];if(_>=a.length)return o=="u";var t=a[_],d=(typeof t)[0];if(o!=d)return o=="o"&&d=="n"||d=="s"||o=="u";if(o!="o"&&o!="u"&&i!=t)return i<t;_++}},n=r=>{var a=r[0],_="";if(r.length===1)return"*";if(a+.5){_+=a==0?">=":a==-1?"<":a==1?"^":a==2?"~":a>0?"=":"!=";for(var i=1,o=1;o<r.length;o++)i--,_+=(typeof(d=r[o]))[0]=="u"?"-":(i>0?".":"")+(i=2,d);return _}var t=[];for(o=1;o<r.length;o++){var d=r[o];t.push(d===0?"not("+j()+")":d===1?"("+j()+" || "+j()+")":d===2?t.pop()+" "+t.pop():n(d))}return j();function j(){return t.pop().replace(/^\((.+)\)$/,"$1")}},l=(r,a)=>{if(0 in r){a=s(a);var _=r[0],i=_<0;i&&(_=-_-1);for(var o=0,t=1,d=!0;;t++,o++){var j,O,C=t<r.length?(typeof r[t])[0]:"";if(o>=a.length||(O=(typeof(j=a[o]))[0])=="o")return!d||(C=="u"?t>_&&!i:C==""!=i);if(O=="u"){if(!d||C!="u")return!1}else if(d)if(C==O)if(t<=_){if(j!=r[t])return!1}else{if(i?j>r[t]:j<r[t])return!1;j!=r[t]&&(d=!1)}else if(C!="s"&&C!="n"){if(i||t<=_)return!1;d=!1,t--}else{if(t<=_||O<C!=i)return!1;d=!1}else C!="s"&&C!="n"&&(d=!1,t--)}}var D=[],E=D.pop.bind(D);for(o=1;o<r.length;o++){var B=r[o];D.push(B==1?E()|E():B==2?E()&E():B?l(B,a):!E())}return!!E()},v=(r,a)=>r&&e.o(r,a),p=r=>(r.loaded=1,r.get()),m=r=>Object.keys(r).reduce((a,_)=>(r[_].eager&&(a[_]=r[_]),a),{}),y=(r,o,_)=>{var i=_?m(r[o]):r[o],o=Object.keys(i).reduce((t,d)=>!t||u(t,d)?d:t,0);return o&&i[o]},c=(r,t,_,i)=>{var o=i?m(r[t]):r[t],t=Object.keys(o).reduce((d,j)=>l(_,j)&&(!d||u(d,j))?j:d,0);return t&&o[t]},w=(r,a,_)=>{var i=_?m(r[a]):r[a];return Object.keys(i).reduce((o,t)=>!o||!i[o].loaded&&u(o,t)?t:o,0)},f=(r,a,_,i)=>"Unsatisfied version "+_+" from "+(_&&r[a][_].from)+" of shared singleton module "+a+" (required "+n(i)+")",b=(r,a,_,i,o)=>{var t=r[_];return"No satisfying version ("+n(i)+")"+(o?" for eager consumption":"")+" of shared module "+_+" found in shared scope "+a+`.
Available versions: `+Object.keys(t).map(d=>d+" from "+t[d].from).join(", ")},g=r=>{throw new Error(r)},P=(r,a)=>g("Shared module "+a+" doesn't exist in shared scope "+r),x=r=>{typeof console!="undefined"&&console.warn&&console.warn(r)},k=r=>function(a,_,i,o,t){var d=e.I(a);return d&&d.then&&!i?d.then(r.bind(r,a,e.S[a],_,!1,o,t)):r(a,e.S[a],_,i,o,t)},h=(r,a,_)=>_?_():P(r,a),z=k((r,a,_,i,o)=>v(a,_)?p(y(a,_,i)):h(r,_,o)),U=k((r,a,_,i,o,t)=>{if(!v(a,_))return h(r,_,t);var d=c(a,_,o,i);return d?p(d):(x(b(a,r,_,o,i)),p(y(a,_,i)))}),L=k((r,a,_,i,o,t)=>{if(!v(a,_))return h(r,_,t);var d=c(a,_,o,i);if(d)return p(d);if(t)return t();g(b(a,r,_,o,i))}),N=k((r,a,_,i,o)=>{if(!v(a,_))return h(r,_,o);var t=w(a,_,i);return p(a[_][t])}),S=k((r,a,_,i,o,t)=>{if(!v(a,_))return h(r,_,t);var d=w(a,_,i);return l(o,d)||x(f(a,_,d,o)),p(a[_][d])}),G=k((r,a,_,i,o,t)=>{if(!v(a,_))return h(r,_,t);var d=w(a,_,i);return l(o,d)||g(f(a,_,d,o)),p(a[_][d])}),F={},I={28437:()=>S("default","react",!1,[0],()=>e.e("node_modules_react_index_js").then(()=>()=>e(77810))),95973:()=>S("default","prop-types",!1,[0],()=>e.e("node_modules_prop-types_index_js").then(()=>()=>e(75826))),23479:()=>S("default","react-dom",!1,[0],()=>e.e("vendors-node_modules_react-dom_index_js").then(()=>()=>e(22483))),67085:()=>S("default","@mui/material",!1,[0],()=>Promise.all([e.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_system_esm_DefaultPropsPr-f385a6"),e.e("vendors-node_modules_mui_material_FilledInput_FilledInput_js-node_modules_mui_material_styles-7ce2a0"),e.e("vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_Chip_Chip_js-nod-734f01"),e.e("vendors-node_modules_mui_material_colors_index_js-node_modules_mui_material_styles_index_js"),e.e("vendors-node_modules_mui_material_index_js"),e.e("webpack_sharing_consume_default_react-dom_react-dom")]).then(()=>()=>e(82739))),37449:()=>S("default","@iobroker/adapter-react-v5",!1,[0],()=>Promise.all([e.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_system_esm_DefaultPropsPr-f385a6"),e.e("vendors-node_modules_cronstrue_locales_de_js-node_modules_cronstrue_locales_es_js-node_module-ce4b54"),e.e("vendors-node_modules_mui_material_colors_index_js-node_modules_mui_material_styles_index_js"),e.e("vendors-node_modules_iobroker_adapter-react-v5_index_js-node_modules_mui_material_styles_cssU-0622a3"),e.e("webpack_sharing_consume_default_mui_icons-material_mui_icons-material-webpack_sharing_consume-80e7de")]).then(()=>()=>e(64620))),60556:()=>S("default","@iobroker/json-config",!1,[0],()=>Promise.all([e.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_system_esm_DefaultPropsPr-f385a6"),e.e("vendors-node_modules_mui_material_FilledInput_FilledInput_js-node_modules_mui_material_styles-7ce2a0"),e.e("vendors-node_modules_cronstrue_locales_de_js-node_modules_cronstrue_locales_es_js-node_module-ce4b54"),e.e("vendors-node_modules_iobroker_json-config_build_index_js"),e.e("webpack_sharing_consume_default_react-dom_react-dom"),e.e("webpack_sharing_consume_default_mui_icons-material_mui_icons-material-webpack_sharing_consume-80e7de"),e.e("webpack_sharing_consume_default_mui_x-date-pickers_mui_x-date-pickers-webpack_sharing_consume-9f1a2d"),e.e("_9157")]).then(()=>()=>e(72765))),21839:()=>S("default","@mui/icons-material",!1,[0],()=>e.e("vendors-node_modules_mui_icons-material_esm_index_js").then(()=>()=>e(61636))),53683:()=>S("default","react-dropzone",!1,[0],()=>e.e("vendors-node_modules_react-dropzone_dist_es_index_js").then(()=>()=>e(72589))),28497:()=>S("default","@mui/x-date-pickers",!1,[0],()=>Promise.all([e.e("vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_Chip_Chip_js-nod-734f01"),e.e("vendors-node_modules_mui_x-date-pickers_index_js")]).then(()=>()=>e(72117))),58093:()=>S("default","react-ace",!1,[0],()=>e.e("vendors-node_modules_react-ace_lib_index_js").then(()=>()=>e(76216)))},V={webpack_sharing_consume_default_react_react:[28437],"webpack_sharing_consume_default_prop-types_prop-types":[95973],"webpack_sharing_consume_default_react-dom_react-dom":[23479],webpack_sharing_consume_default_mui_material_mui_material:[67085],"webpack_sharing_consume_default_iobroker_adapter-react-v5_iobroker_adapter-react-v5-webpack_s-bbec14":[37449,60556],"webpack_sharing_consume_default_mui_icons-material_mui_icons-material-webpack_sharing_consume-80e7de":[21839,53683],"webpack_sharing_consume_default_mui_x-date-pickers_mui_x-date-pickers-webpack_sharing_consume-9f1a2d":[28497,58093]},A={};e.f.consumes=(r,a)=>{e.o(V,r)&&V[r].forEach(_=>{if(e.o(F,_))return a.push(F[_]);if(!A[_]){var i=d=>{F[_]=0,e.m[_]=j=>{delete e.c[_],j.exports=d()}};A[_]=!0;var o=d=>{delete F[_],e.m[_]=j=>{throw delete e.c[_],d}};try{var t=I[_]();t.then?a.push(F[_]=t.then(i).catch(o)):i(t)}catch(d){o(d)}}})}})(),(()=>{var s={main:0};e.f.j=(l,v)=>{var p=e.o(s,l)?s[l]:void 0;if(p!==0)if(p)v.push(p[2]);else if(/^webpack_sharing_consume_default_(mui_(icons\-material_mui_icons\-material\-webpack_sharing_consume\-80e7de|material_mui_material|x\-date\-pickers_mui_x\-date\-pickers\-webpack_sharing_consume\-9f1a2d)|react(\-dom_react\-dom|_react)|iobroker_adapter\-react\-v5_iobroker_adapter\-react\-v5\-webpack_s\-bbec14|prop\-types_prop\-types)$/.test(l))s[l]=0;else{var m=new Promise((f,b)=>p=s[l]=[f,b]);v.push(p[2]=m);var y=e.p+e.u(l),c=new Error,w=f=>{if(e.o(s,l)&&(p=s[l],p!==0&&(s[l]=void 0),p)){var b=f&&(f.type==="load"?"missing":f.type),g=f&&f.target&&f.target.src;c.message="Loading chunk "+l+` failed.
(`+b+": "+g+")",c.name="ChunkLoadError",c.type=b,c.request=g,p[1](c)}};e.l(y,w,"chunk-"+l,l)}};var u=(l,v)=>{var p=v[0],m=v[1],y=v[2],c,w,f=0;if(p.some(g=>s[g]!==0)){for(c in m)e.o(m,c)&&(e.m[c]=m[c]);if(y)var b=y(e)}for(l&&l(v);f<p.length;f++)w=p[f],e.o(s,w)&&s[w]&&s[w][0](),s[w]=0},n=self.webpackChunk_iobroker_admin_component_easy_access=self.webpackChunk_iobroker_admin_component_easy_access||[];n.forEach(u.bind(null,0)),n.push=u.bind(null,n.push.bind(n))})(),e.nc=void 0;var $=e(56046)})();

//# sourceMappingURL=main.60a89fa0.js.map