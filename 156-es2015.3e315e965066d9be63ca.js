(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{SYde:function(e,n){function t(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(n){var r=e[n];"object"!=typeof r||Object.isFrozen(r)||t(r)})),e}var r=t;r.default=t;class s{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}ignoreMatch(){this.ignore=!0}}function i(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function a(e,...n){const t=Object.create(null);for(const r in e)t[r]=e[r];return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}function o(e){return e.nodeName.toLowerCase()}var l=Object.freeze({__proto__:null,escapeHTML:i,inherit:a,nodeStream:function(e){const n=[];return function e(t,r){for(let s=t.firstChild;s;s=s.nextSibling)3===s.nodeType?r+=s.nodeValue.length:1===s.nodeType&&(n.push({event:"start",offset:r,node:s}),r=e(s,r),o(s).match(/br|hr|img|input/)||n.push({event:"stop",offset:r,node:s}));return r}(e,0),n},mergeStreams:function(e,n,t){let r=0,s="";const a=[];function l(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function c(e){s+="<"+o(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+i(e.value)+'"'})).join("")+">"}function u(e){s+="</"+o(e)+">"}function g(e){("start"===e.event?c:u)(e.node)}for(;e.length||n.length;){let n=l();if(s+=i(t.substring(r,n[0].offset)),r=n[0].offset,n===e){a.reverse().forEach(u);do{g(n.splice(0,1)[0]),n=l()}while(n===e&&n.length&&n[0].offset===r);a.reverse().forEach(c)}else"start"===n[0].event?a.push(n[0].node):a.pop(),g(n.splice(0,1)[0])}return s+i(t.substr(r))}});const c=e=>!!e.kind;class u{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=i(e)}openNode(e){if(!c(e))return;let n=e.kind;e.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(e){c(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class g{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach(n=>this._walk(e,n)),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every(e=>"string"==typeof e)?e.children=[e.children.join("")]:e.children.forEach(e=>{g._collapse(e)}))}}class d extends g{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new u(this,this.options).value()}finalize(){return!0}}function h(e){return e?"string"==typeof e?e:e.source:null}const f="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",p={begin:"\\\\[\\s\\S]",relevance:0},m={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[p]},b={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[p]},w={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},x=function(e,n,t={}){const r=a({className:"comment",begin:e,end:n,contains:[]},t);return r.contains.push(w),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),r},E=x("//","$"),v=x("/\\*","\\*/"),_=x("#","$");var N=Object.freeze({__proto__:null,IDENT_RE:"[a-zA-Z]\\w*",UNDERSCORE_IDENT_RE:"[a-zA-Z_]\\w*",NUMBER_RE:"\\b\\d+(\\.\\d+)?",C_NUMBER_RE:f,BINARY_NUMBER_RE:"\\b(0b[01]+)",RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map(e=>h(e)).join("")}(n,/.*\b/,e.binary,/\b.*/)),a({className:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:p,APOS_STRING_MODE:m,QUOTE_STRING_MODE:b,PHRASAL_WORDS_MODE:w,COMMENT:x,C_LINE_COMMENT_MODE:E,C_BLOCK_COMMENT_MODE:v,HASH_COMMENT_MODE:_,NUMBER_MODE:{className:"number",begin:"\\b\\d+(\\.\\d+)?",relevance:0},C_NUMBER_MODE:{className:"number",begin:f,relevance:0},BINARY_NUMBER_MODE:{className:"number",begin:"\\b(0b[01]+)",relevance:0},CSS_NUMBER_MODE:{className:"number",begin:"\\b\\d+(\\.\\d+)?(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[p,{begin:/\[/,end:/\]/,relevance:0,contains:[p]}]}]},TITLE_MODE:{className:"title",begin:"[a-zA-Z]\\w*",relevance:0},UNDERSCORE_TITLE_MODE:{className:"title",begin:"[a-zA-Z_]\\w*",relevance:0},METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});const R=["of","and","for","in","not","or","if","then","parent","list","value"];function y(e,n){return n?Number(n):function(e){return R.includes(e.toLowerCase())}(e)?0:1}function k(e){const n={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,i(this.code);let n;return this.autoDetect?(n=e.highlightAuto(this.code),this.detectedLanguage=n.language):(n=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),n.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:n,VuePlugin:{install(e){e.component("highlightjs",n)}}}}const M=i,O=a,{nodeStream:A,mergeStreams:L}=l,S=Symbol("nomatch");var I=function(e){const n=[],t=Object.create(null),i=Object.create(null),o=[];let l=!0;const c=/(^(<[^>]+>|\t|)+|\n)/gm,u="Could not find the language '{}', did you forget to load/include a language module?",g={disableAutodetect:!0,name:"Plain text",contains:[]};let f={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:d};function p(e){return f.noHighlightRe.test(e)}function m(e,n,t,r){const s={code:n,language:e};T("before:highlight",s);const i=s.result?s.result:b(s.language,s.code,t,r);return i.code=s.code,T("after:highlight",i),i}function b(e,n,r,i){const o=n;function c(e,n){const t=E.case_insensitive?n[0].toLowerCase():n[0];return Object.prototype.hasOwnProperty.call(e.keywords,t)&&e.keywords[t]}function g(){null!=R.subLanguage?function(){if(""===A)return;let e=null;if("string"==typeof R.subLanguage){if(!t[R.subLanguage])return void O.addText(A);e=b(R.subLanguage,A,!0,k[R.subLanguage]),k[R.subLanguage]=e.top}else e=w(A,R.subLanguage.length?R.subLanguage:null);R.relevance>0&&(L+=e.relevance),O.addSublanguage(e.emitter,e.language)}():function(){if(!R.keywords)return void O.addText(A);let e=0;R.keywordPatternRe.lastIndex=0;let n=R.keywordPatternRe.exec(A),t="";for(;n;){t+=A.substring(e,n.index);const r=c(R,n);if(r){const[e,s]=r;O.addText(t),t="",L+=s,O.addKeyword(n[0],E.classNameAliases[e]||e)}else t+=n[0];e=R.keywordPatternRe.lastIndex,n=R.keywordPatternRe.exec(A)}t+=A.substr(e),O.addText(t)}(),A=""}function d(e){return e.className&&O.openNode(E.classNameAliases[e.className]||e.className),R=Object.create(e,{parent:{value:R}}),R}function p(e){return 0===R.matcher.regexIndex?(A+=e[0],1):(j=!0,0)}let m={};function x(n,t){const i=t&&t[0];if(A+=n,null==i)return g(),0;if("begin"===m.type&&"end"===t.type&&m.index===t.index&&""===i){if(A+=o.slice(t.index,t.index+1),!l){const n=new Error("0 width match regex");throw n.languageName=e,n.badRule=m.rule,n}return 1}if(m=t,"begin"===t.type)return function(e){const n=e[0],t=e.rule,r=new s(t),i=[t.__beforeBegin,t["on:begin"]];for(const s of i)if(s&&(s(e,r),r.ignore))return p(n);return t&&t.endSameAsBegin&&(t.endRe=new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),t.skip?A+=n:(t.excludeBegin&&(A+=n),g(),t.returnBegin||t.excludeBegin||(A=n)),d(t),t.returnBegin?0:n.length}(t);if("illegal"===t.type&&!r){const e=new Error('Illegal lexeme "'+i+'" for mode "'+(R.className||"<unnamed>")+'"');throw e.mode=R,e}if("end"===t.type){const e=function(e){const n=e[0],t=o.substr(e.index),r=function e(n,t,r){let i=function(e,n){const t=e&&e.exec(n);return t&&0===t.index}(n.endRe,r);if(i){if(n["on:end"]){const e=new s(n);n["on:end"](t,e),e.ignore&&(i=!1)}if(i){for(;n.endsParent&&n.parent;)n=n.parent;return n}}if(n.endsWithParent)return e(n.parent,t,r)}(R,e,t);if(!r)return S;const i=R;i.skip?A+=n:(i.returnEnd||i.excludeEnd||(A+=n),g(),i.excludeEnd&&(A=n));do{R.className&&O.closeNode(),R.skip||R.subLanguage||(L+=R.relevance),R=R.parent}while(R!==r.parent);return r.starts&&(r.endSameAsBegin&&(r.starts.endRe=r.endRe),d(r.starts)),i.returnEnd?0:n.length}(t);if(e!==S)return e}if("illegal"===t.type&&""===i)return 1;if(T>1e5&&T>3*t.index)throw new Error("potential infinite loop, way more iterations than matches");return A+=i,i.length}const E=_(e);if(!E)throw console.error(u.replace("{}",e)),new Error('Unknown language: "'+e+'"');const v=function(e){function n(n,t){return new RegExp(h(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map(e=>e[1]);this.matcherRe=n(function(e,n="|"){const t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;let r=0,s="";for(let i=0;i<e.length;i++){r+=1;const a=r;let o=h(e[i]);for(i>0&&(s+=n),s+="(";o.length>0;){const e=t.exec(o);if(null==e){s+=o;break}s+=o.substring(0,e.index),o=o.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?s+="\\"+String(Number(e[1])+a):(s+=e[0],"("===e[0]&&r++)}s+=")"}return s}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex((e,n)=>n>0&&void 0!==e),r=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,r)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach(([e,t])=>n.addRule(e,t)),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}function s(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}if(e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=a(e.classNameAliases||{}),function t(i,o){const l=i;if(i.compiled)return l;i.compiled=!0,i.__beforeBegin=null,i.keywords=i.keywords||i.beginKeywords;let c=null;if("object"==typeof i.keywords&&(c=i.keywords.$pattern,delete i.keywords.$pattern),i.keywords&&(i.keywords=function(e,n){const t={};return"string"==typeof e?r("keyword",e):Object.keys(e).forEach((function(n){r(n,e[n])})),t;function r(e,r){n&&(r=r.toLowerCase()),r.split(" ").forEach((function(n){const r=n.split("|");t[r[0]]=[e,y(r[0],r[1])]}))}}(i.keywords,e.case_insensitive)),i.lexemes&&c)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return l.keywordPatternRe=n(i.lexemes||c||/\w+/,!0),o&&(i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",i.__beforeBegin=s),i.begin||(i.begin=/\B|\b/),l.beginRe=n(i.begin),i.endSameAsBegin&&(i.end=i.begin),i.end||i.endsWithParent||(i.end=/\B|\b/),i.end&&(l.endRe=n(i.end)),l.terminator_end=h(i.end)||"",i.endsWithParent&&o.terminator_end&&(l.terminator_end+=(i.end?"|":"")+o.terminator_end)),i.illegal&&(l.illegalRe=n(i.illegal)),void 0===i.relevance&&(i.relevance=1),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map((function(e){return function(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(n){return a(e,{variants:null},n)}))),e.cached_variants?e.cached_variants:function e(n){return!!n&&(n.endsWithParent||e(n.starts))}(e)?a(e,{starts:e.starts?a(e.starts):null}):Object.isFrozen(e)?a(e):e}("self"===e?i:e)}))),i.contains.forEach((function(e){t(e,l)})),i.starts&&t(i.starts,o),l.matcher=function(e){const n=new r;return e.contains.forEach(e=>n.addRule(e.begin,{rule:e,type:"begin"})),e.terminator_end&&n.addRule(e.terminator_end,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(l),l}(e)}(E);let N="",R=i||v;const k={},O=new f.__emitter(f);!function(){const e=[];for(let n=R;n!==E;n=n.parent)n.className&&e.unshift(n.className);e.forEach(e=>O.openNode(e))}();let A="",L=0,I=0,T=0,j=!1;try{for(R.matcher.considerAll();;){T++,j?j=!1:R.matcher.considerAll(),R.matcher.lastIndex=I;const e=R.matcher.exec(o);if(!e)break;const n=x(o.substring(I,e.index),e);I=e.index+n}return x(o.substr(I)),O.closeAllNodes(),O.finalize(),N=O.toHTML(),{relevance:L,value:N,language:e,illegal:!1,emitter:O,top:R}}catch(B){if(B.message&&B.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:B.message,context:o.slice(I-100,I+100),mode:B.mode},sofar:N,relevance:0,value:M(o),emitter:O};if(l)return{illegal:!1,relevance:0,value:M(o),emitter:O,language:e,top:R,errorRaised:B};throw B}}function w(e,n){n=n||f.languages||Object.keys(t);const r=function(e){const n={relevance:0,emitter:new f.__emitter(f),value:M(e),illegal:!1,top:g};return n.emitter.addText(e),n}(e),s=n.filter(_).filter(I).map(n=>b(n,e,!1));s.unshift(r);const i=s.sort((e,n)=>{if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(_(e.language).supersetOf===n.language)return 1;if(_(n.language).supersetOf===e.language)return-1}return 0}),[a,o]=i,l=a;return l.second_best=o,l}function x(e){return f.tabReplace||f.useBR?e.replace(c,e=>"\n"===e?f.useBR?"<br>":e:f.tabReplace?e.replace(/\t/g,f.tabReplace):e):e}function E(e){let n=null;const t=function(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=f.languageDetectRe.exec(n);if(t){const n=_(t[1]);return n||(console.warn(u.replace("{}",t[1])),console.warn("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find(e=>p(e)||_(e))}(e);if(p(t))return;T("before:highlightBlock",{block:e,language:t}),f.useBR?(n=document.createElement("div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n")):n=e;const r=n.textContent,s=t?m(t,r,!0):w(r),a=A(n);if(a.length){const e=document.createElement("div");e.innerHTML=s.value,s.value=L(a,A(e),r)}s.value=x(s.value),T("after:highlightBlock",{block:e,result:s}),e.innerHTML=s.value,e.className=function(e,n,t){const r=n?i[n]:t,s=[e.trim()];return e.match(/\bhljs\b/)||s.push("hljs"),e.includes(r)||s.push(r),s.join(" ").trim()}(e.className,t,s.language),e.result={language:s.language,re:s.relevance,relavance:s.relevance},s.second_best&&(e.second_best={language:s.second_best.language,re:s.second_best.relevance,relavance:s.second_best.relevance})}const v=()=>{if(v.called)return;v.called=!0;const e=document.querySelectorAll("pre code");n.forEach.call(e,E)};function _(e){return e=(e||"").toLowerCase(),t[e]||t[i[e]]}function R(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach(e=>{i[e]=n})}function I(e){const n=_(e);return n&&!n.disableAutodetect}function T(e,n){const t=e;o.forEach((function(e){e[t]&&e[t](n)}))}Object.assign(e,{highlight:m,highlightAuto:w,fixMarkup:function(e){return console.warn("fixMarkup is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2534"),x(e)},highlightBlock:E,configure:function(e){e.useBR&&(console.warn("'useBR' option is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2559")),f=O(f,e)},initHighlighting:v,initHighlightingOnLoad:function(){window.addEventListener("DOMContentLoaded",v,!1)},registerLanguage:function(n,r){let s=null;try{s=r(e)}catch(i){if(console.error("Language definition for '{}' could not be registered.".replace("{}",n)),!l)throw i;console.error(i),s=g}s.name||(s.name=n),t[n]=s,s.rawDefinition=r.bind(null,e),s.aliases&&R(s.aliases,{languageName:n})},listLanguages:function(){return Object.keys(t)},getLanguage:_,registerAliases:R,requireLanguage:function(e){console.warn("requireLanguage is deprecated and will be removed entirely in the future."),console.warn("Please see https://github.com/highlightjs/highlight.js/pull/2844");const n=_(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:I,inherit:O,addPlugin:function(e){o.push(e)},vuePlugin:k(e).VuePlugin}),e.debugMode=function(){l=!1},e.safeMode=function(){l=!0},e.versionString="10.4.1";for(const s in N)"object"==typeof N[s]&&r(N[s]);return Object.assign(e,N),e}({});e.exports=I}}]);