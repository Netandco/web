/*! jQuery v2.2.0 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!k.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=R.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c}catch(e){}O.set(a,b,c);
}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return this;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.rnamespace||a.rnamespace.test(g.namespace))&&(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ca(b),i="border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Fa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Ba.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+Oa(b,c,e||(i?"border":"content"),f,h)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b];
},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(void 0===a||"boolean"===c)&&(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){return n.trim(a.value)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var hb=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!hb.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,hb.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var ib=a.location,jb=n.now(),kb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return(!c||c.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+b),c};var lb=/#.*$/,mb=/([?&])_=[^&]*/,nb=/^(.*?):[ \t]*([^\r\n]*)$/gm,ob=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,pb=/^(?:GET|HEAD)$/,qb=/^\/\//,rb={},sb={},tb="*/".concat("*"),ub=d.createElement("a");ub.href=ib.href;function vb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function wb(a,b,c,d){var e={},f=a===sb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function xb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function yb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function zb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ib.href,type:"GET",isLocal:ob.test(ib.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":tb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?xb(xb(a,n.ajaxSettings),b):xb(n.ajaxSettings,a)},ajaxPrefilter:vb(rb),ajaxTransport:vb(sb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=nb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||ib.href)+"").replace(lb,"").replace(qb,ib.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=ub.protocol+"//"+ub.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),wb(rb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!pb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(kb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=mb.test(f)?f.replace(mb,"$1_="+jb++):f+(kb.test(f)?"&":"?")+"_="+jb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+tb+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=wb(sb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=yb(m,x,d)),u=zb(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,(b||!y)&&(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Ab=/%20/g,Bb=/\[\]$/,Cb=/\r?\n/g,Db=/^(?:submit|button|image|reset|file)$/i,Eb=/^(?:input|select|textarea|keygen)/i;function Fb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Bb.test(a)?d(a,e):Fb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Fb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Fb(c,a[c],b,e);return d.join("&").replace(Ab,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Eb.test(this.nodeName)&&!Db.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Cb,"\r\n")}}):{name:b.name,value:c.replace(Cb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Gb={0:200,1223:204},Hb=n.ajaxSettings.xhr();l.cors=!!Hb&&"withCredentials"in Hb,l.ajax=Hb=!!Hb,n.ajaxTransport(function(b){var c,d;return l.cors||Hb&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Gb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Ib=[],Jb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Ib.pop()||n.expando+"_"+jb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Jb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Jb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Jb,"$1"+e):b.jsonp!==!1&&(b.url+=(kb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Ib.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),l.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||(l.createHTMLDocument?d.implementation.createHTMLDocument(""):d);var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Kb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Kb)return Kb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Lb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Lb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0)-a.scrollTop(),d.left+=n.css(a[0],"borderLeftWidth",!0)-a.scrollLeft()),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Lb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Mb=a.jQuery,Nb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Nb),b&&a.jQuery===n&&(a.jQuery=Mb),n},b||(a.jQuery=a.$=n),n});

/*
 * jQuery One Page Nav Plugin
 * http://github.com/davist11/jQuery-One-Page-Nav
 *
 * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * @version 3.0.0
 *
 * Example usage:
 * $('#nav').onePageNav({
 *   currentClass: 'current',
 *   changeHash: false,
 *   scrollSpeed: 750
 * });
 */

;(function($, window, document, undefined){

	// our plugin constructor
	var OnePageNav = function(elem, options){
		this.elem = elem;
		this.$elem = $(elem);
		this.options = options;
		this.metadata = this.$elem.data('plugin-options');
		this.$win = $(window);
		this.sections = {};
		this.didScroll = false;
		this.$doc = $(document);
		this.docHeight = this.$doc.height();
	};

	// the plugin prototype
	OnePageNav.prototype = {
		defaults: {
			navItems: 'a',
			currentClass: 'current',
			changeHash: false,
			easing: 'swing',
			filter: '',
			scrollSpeed: 750,
			scrollThreshold: 0.5,
			begin: false,
			end: false,
			scrollChange: false
		},

		init: function() {
			// Introduce defaults that can be extended either
			// globally or using an object literal.
			this.config = $.extend({}, this.defaults, this.options, this.metadata);

			this.$nav = this.$elem.find(this.config.navItems);

			//Filter any links out of the nav
			if(this.config.filter !== '') {
				this.$nav = this.$nav.filter(this.config.filter);
			}

			//Handle clicks on the nav
			this.$nav.on('click.onePageNav', $.proxy(this.handleClick, this));

			//Get the section positions
			this.getPositions();

			//Handle scroll changes
			this.bindInterval();

			//Update the positions on resize too
			this.$win.on('resize.onePageNav', $.proxy(this.getPositions, this));

			return this;
		},

		adjustNav: function(self, $parent) {
			self.$elem.find('.' + self.config.currentClass).removeClass(self.config.currentClass);
			$parent.addClass(self.config.currentClass);
		},

		bindInterval: function() {
			var self = this;
			var docHeight;

			self.$win.on('scroll.onePageNav', function() {
				self.didScroll = true;
			});

			self.t = setInterval(function() {
				docHeight = self.$doc.height();

				//If it was scrolled
				if(self.didScroll) {
					self.didScroll = false;
					self.scrollChange();
				}

				//If the document height changes
				if(docHeight !== self.docHeight) {
					self.docHeight = docHeight;
					self.getPositions();
				}
			}, 250);
		},

		getHash: function($link) {
			return $link.attr('href').split('#')[1];
		},

		getPositions: function() {
			var self = this;
			var linkHref;
			var topPos;
			var $target;

			self.$nav.each(function() {
				linkHref = self.getHash($(this));
				$target = $('#' + linkHref);

				if($target.length) {
					topPos = $target.offset().top;
					self.sections[linkHref] = Math.round(topPos);
				}
			});
		},

		getSection: function(windowPos) {
			var returnValue = null;
			var windowHeight = Math.round(this.$win.height() * this.config.scrollThreshold);

			for(var section in this.sections) {
				if((this.sections[section] - windowHeight) < windowPos) {
					returnValue = section;
				}
			}

			return returnValue;
		},

		handleClick: function(e) {
			var self = this;
			var $link = $(e.currentTarget);
			var $parent = $link.parent();
			var newLoc = '#' + self.getHash($link);

			if(!$parent.hasClass(self.config.currentClass)) {
				//Start callback
				if(self.config.begin) {
					self.config.begin();
				}

				//Change the highlighted nav item
				self.adjustNav(self, $parent);

				//Removing the auto-adjust on scroll
				self.unbindInterval();

				//Scroll to the correct position
				self.scrollTo(newLoc, function() {
					//Do we need to change the hash?
					if(self.config.changeHash) {
						window.location.hash = newLoc;
					}

					//Add the auto-adjust on scroll back in
					self.bindInterval();

					//End callback
					if(self.config.end) {
						self.config.end();
					}
				});
			}

			e.preventDefault();
		},

		scrollChange: function() {
			var windowTop = this.$win.scrollTop();
			var position = this.getSection(windowTop);
			var $parent;

			//If the position is set
			if(position !== null) {
				$parent = this.$elem.find('a[href$="#' + position + '"]').parent();

				//If it's not already the current section
				if(!$parent.hasClass(this.config.currentClass)) {
					//Change the highlighted nav item
					this.adjustNav(this, $parent);

					//If there is a scrollChange callback
					if(this.config.scrollChange) {
						this.config.scrollChange($parent);
					}
				}
			}
		},

		scrollTo: function(target, callback) {
			var offset = $(target).offset().top;

			$('html, body').animate({
				scrollTop: offset
			}, this.config.scrollSpeed, this.config.easing, callback);
		},

		unbindInterval: function() {
			clearInterval(this.t);
			this.$win.unbind('scroll.onePageNav');
		}
	};

	OnePageNav.defaults = OnePageNav.prototype.defaults;

	$.fn.onePageNav = function(options) {
		return this.each(function() {
			new OnePageNav(this, options).init();
		});
	};

})( jQuery, window , document );
(function() {
  var Util,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Util = (function() {
    function Util() {}

    Util.prototype.extend = function(custom, defaults) {
      var key, value;
      for (key in custom) {
        value = custom[key];
        if (value != null) {
          defaults[key] = value;
        }
      }
      return defaults;
    };

    Util.prototype.isMobile = function(agent) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
    };

    return Util;

  })();

  this.WOW = (function() {
    WOW.prototype.defaults = {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true
    };

    function WOW(options) {
      if (options == null) {
        options = {};
      }
      this.scrollCallback = __bind(this.scrollCallback, this);
      this.scrollHandler = __bind(this.scrollHandler, this);
      this.start = __bind(this.start, this);
      this.scrolled = true;
      this.config = this.util().extend(options, this.defaults);
    }

    WOW.prototype.init = function() {
      var _ref;
      this.element = window.document.documentElement;
      this.boxes = this.element.getElementsByClassName(this.config.boxClass);
      if (this.boxes.length) {
        if (this.disabled()) {
          return this.resetStyle();
        } else {
          if ((_ref = document.readyState) === "interactive" || _ref === "complete") {
            return this.start();
          } else {
            return document.addEventListener('DOMContentLoaded', this.start);
          }
        }
      }
    };

    WOW.prototype.start = function() {
      var box, _i, _len, _ref;
      _ref = this.boxes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        box = _ref[_i];
        this.applyStyle(box, true);
      }
      window.addEventListener('scroll', this.scrollHandler, false);
      window.addEventListener('resize', this.scrollHandler, false);
      return this.interval = setInterval(this.scrollCallback, 50);
    };

    WOW.prototype.stop = function() {
      window.removeEventListener('scroll', this.scrollHandler, false);
      window.removeEventListener('resize', this.scrollHandler, false);
      if (this.interval != null) {
        return clearInterval(this.interval);
      }
    };

    WOW.prototype.show = function(box) {
      this.applyStyle(box);
      return box.className = "" + box.className + " " + this.config.animateClass;
    };

    WOW.prototype.applyStyle = function(box, hidden) {
      var delay, duration, iteration;
      duration = box.getAttribute('data-wow-duration');
      delay = box.getAttribute('data-wow-delay');
      iteration = box.getAttribute('data-wow-iteration');
      return box.setAttribute('style', this.customStyle(hidden, duration, delay, iteration));
    };

    WOW.prototype.resetStyle = function() {
      var box, _i, _len, _ref, _results;
      _ref = this.boxes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        box = _ref[_i];
        _results.push(box.setAttribute('style', 'visibility: visible;'));
      }
      return _results;
    };

    WOW.prototype.customStyle = function(hidden, duration, delay, iteration) {
      var style;
      style = hidden ? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;" : "visibility: visible;";
      if (duration) {
        style += "-webkit-animation-duration: " + duration + "; -moz-animation-duration: " + duration + "; animation-duration: " + duration + ";";
      }
      if (delay) {
        style += "-webkit-animation-delay: " + delay + "; -moz-animation-delay: " + delay + "; animation-delay: " + delay + ";";
      }
      if (iteration) {
        style += "-webkit-animation-iteration-count: " + iteration + "; -moz-animation-iteration-count: " + iteration + "; animation-iteration-count: " + iteration + ";";
      }
      return style;
    };

    WOW.prototype.scrollHandler = function() {
      return this.scrolled = true;
    };

    WOW.prototype.scrollCallback = function() {
      var box;
      if (this.scrolled) {
        this.scrolled = false;
        this.boxes = (function() {
          var _i, _len, _ref, _results;
          _ref = this.boxes;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            box = _ref[_i];
            if (!(box)) {
              continue;
            }
            if (this.isVisible(box)) {
              this.show(box);
              continue;
            }
            _results.push(box);
          }
          return _results;
        }).call(this);
        if (!this.boxes.length) {
          return this.stop();
        }
      }
    };

    WOW.prototype.offsetTop = function(element) {
      var top;
      top = element.offsetTop;
      while (element = element.offsetParent) {
        top += element.offsetTop;
      }
      return top;
    };

    WOW.prototype.isVisible = function(box) {
      var bottom, offset, top, viewBottom, viewTop;
      offset = box.getAttribute('data-wow-offset') || this.config.offset;
      viewTop = window.pageYOffset;
      viewBottom = viewTop + this.element.clientHeight - offset;
      top = this.offsetTop(box);
      bottom = top + box.clientHeight;
      return top <= viewBottom && bottom >= viewTop;
    };

    WOW.prototype.util = function() {
      return this._util || (this._util = new Util());
    };

    WOW.prototype.disabled = function() {
      return this.config.mobile === false && this.util().isMobile(navigator.userAgent);
    };

    return WOW;

  })();

}).call(this);

function muestra_oculta(id){
    if (document.getElementById){ //se obtiene el id
    var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
    el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
    }
}
window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
    muestra_oculta('contact');/* "contacto" es el nombre que le dimos al DIV */
}

$(".navbar-nav li").on( "click", function() {
	$(".navbar-nav li").removeClass("active");
  	$(this).addClass("active");
});


//WOW Scroll Spy
var wow = new WOW({
    //disabled for mobile
    mobile: false
});
wow.init();
/**!
 * MixItUp v2.1.6
 *
 * @copyright Copyright 2014 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://mixitup.kunkalabs.com
 *
 * @license   Commercial use requires a commercial license.
 *            https://mixitup.kunkalabs.com/licenses/
 *
 *            Non-commercial use permitted under terms of CC-BY-NC license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */

(function($, undf){
	
	/**
	 * MixItUp Constructor Function
	 * @constructor
	 * @extends jQuery
	 */
	
	$.MixItUp = function(){
		var self = this;
		
		self._execAction('_constructor', 0);
		
		$.extend(self, {
			
			/* Public Properties
			---------------------------------------------------------------------- */
			
			selectors: {
				target: '.mix',
				filter: '.filter',
				sort: '.sort'
			},
				
			animation: {
				enable: true,
				effects: 'fade scale',
				duration: 600,
				easing: 'ease',
				perspectiveDistance: '3000',
				perspectiveOrigin: '50% 50%',
				queue: true,
				queueLimit: 1,
				animateChangeLayout: false,
				animateResizeContainer: true,
				animateResizeTargets: false,
				staggerSequence: false,
				reverseOut: false
			},
				
			callbacks: {
				onMixLoad: false,
				onMixStart: false,
				onMixBusy: false,
				onMixEnd: false,
				onMixFail: false,
				_user: false
			},
				
			controls: {
				enable: true,
				live: false,
				toggleFilterButtons: false,
				toggleLogic: 'or',
				activeClass: 'active'
			},

			layout: {
				display: 'inline-block',
				containerClass: '',
				containerClassFail: 'fail'
			},
			
			load: {
				filter: 'all',
				sort: false
			},
			
			/* Private Properties
			---------------------------------------------------------------------- */
				
			_$body: null,
			_$container: null,
			_$targets: null,
			_$parent: null,
			_$sortButtons: null,
			_$filterButtons: null,
		
			_suckMode: false,
			_mixing: false,
			_sorting: false,
			_clicking: false,
			_loading: true,
			_changingLayout: false,
			_changingClass: false,
			_changingDisplay: false,
			
			_origOrder: [],
			_startOrder: [],
			_newOrder: [],
			_activeFilter: null,
			_toggleArray: [],
			_toggleString: '',
			_activeSort: 'default:asc',
			_newSort: null,
			_startHeight: null,
			_newHeight: null,
			_incPadding: true,
			_newDisplay: null,
			_newClass: null,
			_targetsBound: 0,
			_targetsDone: 0,
			_queue: [],
				
			_$show: $(),
			_$hide: $()
		});
	
		self._execAction('_constructor', 1);
	};
	
	/**
	 * MixItUp Prototype
	 * @override
	 */
	
	$.MixItUp.prototype = {
		constructor: $.MixItUp,
		
		/* Static Properties
		---------------------------------------------------------------------- */
		
		_instances: {},
		_handled: {
			_filter: {},
			_sort: {}
		},
		_bound: {
			_filter: {},
			_sort: {}
		},
		_actions: {},
		_filters: {},
		
		/* Static Methods
		---------------------------------------------------------------------- */
		
		/**
		 * Extend
		 * @since 2.1.0
		 * @param {object} new properties/methods
		 * @extends {object} prototype
		 */
		
		extend: function(extension){
			for(var key in extension){
				$.MixItUp.prototype[key] = extension[key];
			}
		},
		
		/**
		 * Add Action
		 * @since 2.1.0
		 * @param {string} hook name
		 * @param {string} namespace
		 * @param {function} function to execute
		 * @param {number} priority
		 * @extends {object} $.MixItUp.prototype._actions
		 */
		
		addAction: function(hook, name, func, priority){
			$.MixItUp.prototype._addHook('_actions', hook, name, func, priority);
		},
		
		/**
		 * Add Filter
		 * @since 2.1.0
		 * @param {string} hook name
		 * @param {string} namespace
		 * @param {function} function to execute
		 * @param {number} priority
		 * @extends {object} $.MixItUp.prototype._filters
		 */
		
		addFilter: function(hook, name, func, priority){
			$.MixItUp.prototype._addHook('_filters', hook, name, func, priority);
		},
		
		/**
		 * Add Hook
		 * @since 2.1.0
		 * @param {string} type of hook
		 * @param {string} hook name
		 * @param {function} function to execute
		 * @param {number} priority
		 * @extends {object} $.MixItUp.prototype._filters
		 */
		
		_addHook: function(type, hook, name, func, priority){
			var collection = $.MixItUp.prototype[type],
				obj = {};
				
			priority = (priority === 1 || priority === 'post') ? 'post' : 'pre';
				
			obj[hook] = {};
			obj[hook][priority] = {};
			obj[hook][priority][name] = func;

			$.extend(true, collection, obj);
		},
		
		
		/* Private Methods
		---------------------------------------------------------------------- */
		
		/**
		 * Initialise
		 * @since 2.0.0
		 * @param {object} domNode
		 * @param {object} config
		 */
		
		_init: function(domNode, config){
			var self = this;
			
			self._execAction('_init', 0, arguments);
			
			config && $.extend(true, self, config);
			
			self._$body = $('body');
			self._domNode = domNode;
			self._$container = $(domNode);
			self._$container.addClass(self.layout.containerClass);
			self._id = domNode.id;
			
			self._platformDetect();
			
			self._brake = self._getPrefixedCSS('transition', 'none');
			
			self._refresh(true);
			
			self._$parent = self._$targets.parent().length ? self._$targets.parent() : self._$container;
			
			if(self.load.sort){
				self._newSort = self._parseSort(self.load.sort);
				self._newSortString = self.load.sort;
				self._activeSort = self.load.sort;
				self._sort();
				self._printSort();
			}
			
			self._activeFilter = self.load.filter === 'all' ? 
				self.selectors.target : 
				self.load.filter === 'none' ?
					'' :
					self.load.filter;
			
			self.controls.enable && self._bindHandlers();
			
			if(self.controls.toggleFilterButtons){
				self._buildToggleArray();
				
				for(var i = 0; i < self._toggleArray.length; i++){
					self._updateControls({filter: self._toggleArray[i], sort: self._activeSort}, true);
				};
			} else if(self.controls.enable){
				self._updateControls({filter: self._activeFilter, sort: self._activeSort});
			}
			
			self._filter();
			
			self._init = true;
			
			self._$container.data('mixItUp',self);
			
			self._execAction('_init', 1, arguments);
			
			self._buildState();
			
			self._$targets.css(self._brake);
		
			self._goMix(self.animation.enable);
		},
		
		/**
		 * Platform Detect
		 * @since 2.0.0
		 */
		
		_platformDetect: function(){
			var self = this,
				vendorsTrans = ['Webkit', 'Moz', 'O', 'ms'],
				vendorsRAF = ['webkit', 'moz'],
				chrome = window.navigator.appVersion.match(/Chrome\/(\d+)\./) || false,
				ff = typeof InstallTrigger !== 'undefined',
				prefix = function(el){
					for (var i = 0; i < vendorsTrans.length; i++){
						if (vendorsTrans[i] + 'Transition' in el.style){
							return {
								prefix: '-'+vendorsTrans[i].toLowerCase()+'-',
								vendor: vendorsTrans[i]
							};
						};
					}; 
					return 'transition' in el.style ? '' : false;
				},
				transPrefix = prefix(self._domNode);
				
			self._execAction('_platformDetect', 0);
			
			self._chrome = chrome ? parseInt(chrome[1], 10) : false;
			self._ff = ff ? parseInt(window.navigator.userAgent.match(/rv:([^)]+)\)/)[1]) : false;
			self._prefix = transPrefix.prefix;
			self._vendor = transPrefix.vendor;
			self._suckMode = window.atob && self._prefix ? false : true;

			self._suckMode && (self.animation.enable = false);
			(self._ff && self._ff <= 4) && (self.animation.enable = false);
			
			/* Polyfills
			---------------------------------------------------------------------- */
			
			/**
			 * window.requestAnimationFrame
			 */
			
			for(var x = 0; x < vendorsRAF.length && !window.requestAnimationFrame; x++){
				window.requestAnimationFrame = window[vendorsRAF[x]+'RequestAnimationFrame'];
			}

			/**
			 * Object.getPrototypeOf
			 */

			if(typeof Object.getPrototypeOf !== 'function'){
				if(typeof 'test'.__proto__ === 'object'){
					Object.getPrototypeOf = function(object){
						return object.__proto__;
					};
				} else {
					Object.getPrototypeOf = function(object){
						return object.constructor.prototype;
					};
				}
			}

			/**
			 * Element.nextElementSibling
			 */
			
			if(self._domNode.nextElementSibling === undf){
				Object.defineProperty(Element.prototype, 'nextElementSibling',{
					get: function(){
						var el = this.nextSibling;
						
						while(el){
							if(el.nodeType ===1){
								return el;
							}
							el = el.nextSibling;
						}
						return null;
					}
				});
			}
			
			self._execAction('_platformDetect', 1);
		},
		
		/**
		 * Refresh
		 * @since 2.0.0
		 * @param {boolean} init
		 * @param {boolean} force
		 */
		
		_refresh: function(init, force){
			var self = this;
				
			self._execAction('_refresh', 0, arguments);

			self._$targets = self._$container.find(self.selectors.target);
			
			for(var i = 0;  i < self._$targets.length; i++){
				var target = self._$targets[i];
					
				if(target.dataset === undf || force){
						
					target.dataset = {};
					
					for(var j = 0; j < target.attributes.length; j++){
						
						var attr =  target.attributes[j],
							name = attr.name,
							val = attr.value;
							
						if(name.indexOf('data-') > -1){
							var dataName = self._helpers._camelCase(name.substring(5,name.length));
							target.dataset[dataName] = val;
						}
					}
				}
				
				if(target.mixParent === undf){
					target.mixParent = self._id;
				}
			}
			
			if(
				(self._$targets.length && init) ||
				(!self._origOrder.length && self._$targets.length)
			){
				self._origOrder = [];
				
				for(var i = 0;  i < self._$targets.length; i++){
					var target = self._$targets[i];
					
					self._origOrder.push(target);
				}
			}
			
			self._execAction('_refresh', 1, arguments);
		},
		
		/**
		 * Bind Handlers
		 * @since 2.0.0
		 */
		
		_bindHandlers: function(){
			var self = this,
				filters = $.MixItUp.prototype._bound._filter,
				sorts = $.MixItUp.prototype._bound._sort;
			
			self._execAction('_bindHandlers', 0);
			
			if(self.controls.live){
				self._$body
					.on('click.mixItUp.'+self._id, self.selectors.sort, function(){
						self._processClick($(this), 'sort');
					})
					.on('click.mixItUp.'+self._id, self.selectors.filter, function(){
						self._processClick($(this), 'filter');
					});
			} else {
				self._$sortButtons = $(self.selectors.sort);
				self._$filterButtons = $(self.selectors.filter);
				
				self._$sortButtons.on('click.mixItUp.'+self._id, function(){
					self._processClick($(this), 'sort');
				});
				
				self._$filterButtons.on('click.mixItUp.'+self._id, function(){
					self._processClick($(this), 'filter');
				});
			}

			filters[self.selectors.filter] = (filters[self.selectors.filter] === undf) ? 1 : filters[self.selectors.filter] + 1;
			sorts[self.selectors.sort] = (sorts[self.selectors.sort] === undf) ? 1 : sorts[self.selectors.sort] + 1;
			
			self._execAction('_bindHandlers', 1);
		},
		
		/**
		 * Process Click
		 * @since 2.0.0
		 * @param {object} $button
		 * @param {string} type
		 */
		
		_processClick: function($button, type){
			var self = this,
				trackClick = function($button, type, off){
					var proto = $.MixItUp.prototype;
						
					proto._handled['_'+type][self.selectors[type]] = (proto._handled['_'+type][self.selectors[type]] === undf) ? 
						1 : 
						proto._handled['_'+type][self.selectors[type]] + 1;

					if(proto._handled['_'+type][self.selectors[type]] === proto._bound['_'+type][self.selectors[type]]){
						$button[(off ? 'remove' : 'add')+'Class'](self.controls.activeClass);
						delete proto._handled['_'+type][self.selectors[type]];
					}
				};
			
			self._execAction('_processClick', 0, arguments);
			
			if(!self._mixing || (self.animation.queue && self._queue.length < self.animation.queueLimit)){
				self._clicking = true;
				
				if(type === 'sort'){
					var sort = $button.attr('data-sort');
					
					if(!$button.hasClass(self.controls.activeClass) || sort.indexOf('random') > -1){
						$(self.selectors.sort).removeClass(self.controls.activeClass);
						trackClick($button, type);
						self.sort(sort);
					}
				}
				
				if(type === 'filter') {
					var filter = $button.attr('data-filter'),
						ndx,
						seperator = self.controls.toggleLogic === 'or' ? ',' : '';
					
					if(!self.controls.toggleFilterButtons){
						if(!$button.hasClass(self.controls.activeClass)){
							$(self.selectors.filter).removeClass(self.controls.activeClass);
							trackClick($button, type);
							self.filter(filter);
						}
					} else {
						self._buildToggleArray();
						
						if(!$button.hasClass(self.controls.activeClass)){
							trackClick($button, type);
							
							self._toggleArray.push(filter);
						} else {
							trackClick($button, type, true);
							ndx = self._toggleArray.indexOf(filter);
							self._toggleArray.splice(ndx, 1);
						}
						
						self._toggleArray = $.grep(self._toggleArray,function(n){return(n);});
						
						self._toggleString = self._toggleArray.join(seperator);

						self.filter(self._toggleString);
					}
				}
				
				self._execAction('_processClick', 1, arguments);
			} else {
				if(typeof self.callbacks.onMixBusy === 'function'){
					self.callbacks.onMixBusy.call(self._domNode, self._state, self);
				}
				self._execAction('_processClickBusy', 1, arguments);
			}
		},
		
		/**
		 * Build Toggle Array
		 * @since 2.0.0
		 */
		
		_buildToggleArray: function(){
			var self = this,
				activeFilter = self._activeFilter.replace(/\s/g, '');
			
			self._execAction('_buildToggleArray', 0, arguments);
			
			if(self.controls.toggleLogic === 'or'){
				self._toggleArray = activeFilter.split(',');
			} else {
				self._toggleArray = activeFilter.split('.');
				
				!self._toggleArray[0] && self._toggleArray.shift();
				
				for(var i = 0, filter; filter = self._toggleArray[i]; i++){
					self._toggleArray[i] = '.'+filter;
				}
			}
			
			self._execAction('_buildToggleArray', 1, arguments);
		},
		
		/**
		 * Update Controls
		 * @since 2.0.0
		 * @param {object} command
		 * @param {boolean} multi
		 */
		
		_updateControls: function(command, multi){
			var self = this,
				output = {
					filter: command.filter,
					sort: command.sort
				},
				update = function($el, filter){
					(multi && type == 'filter' && !(output.filter === 'none' || output.filter === '')) ?
						$el.filter(filter).addClass(self.controls.activeClass) :
						$el.removeClass(self.controls.activeClass).filter(filter).addClass(self.controls.activeClass);
				},
				type = 'filter',
				$el = null;
				
			self._execAction('_updateControls', 0, arguments);
				
			(command.filter === undf) && (output.filter = self._activeFilter);
			(command.sort === undf) && (output.sort = self._activeSort);
			(output.filter === self.selectors.target) && (output.filter = 'all');
			
			for(var i = 0; i < 2; i++){
				$el = self.controls.live ? $(self.selectors[type]) : self['_$'+type+'Buttons'];
				$el && update($el, '[data-'+type+'="'+output[type]+'"]');
				type = 'sort';
			}
			
			self._execAction('_updateControls', 1, arguments);
		},
		
		/**
		 * Filter (private)
		 * @since 2.0.0
		 */
		
		_filter: function(){
			var self = this;
			
			self._execAction('_filter', 0);
			
			for(var i = 0; i < self._$targets.length; i++){
				var $target = $(self._$targets[i]);
				
				if($target.is(self._activeFilter)){
					self._$show = self._$show.add($target);
				} else {
					self._$hide = self._$hide.add($target);
				}
			}
			
			self._execAction('_filter', 1);
		},
		
		/**
		 * Sort (private)
		 * @since 2.0.0
		 */
		
		_sort: function(){
			var self = this,
				arrayShuffle = function(oldArray){
					var newArray = oldArray.slice(),
						len = newArray.length,
						i = len;

					while(i--){
						var p = parseInt(Math.random()*len);
						var t = newArray[i];
						newArray[i] = newArray[p];
						newArray[p] = t;
					};
					return newArray; 
				};
				
			self._execAction('_sort', 0);
			
			self._startOrder = [];
			
			for(var i = 0; i < self._$targets.length; i++){
				var target = self._$targets[i];
				
				self._startOrder.push(target);
			}
			
			switch(self._newSort[0].sortBy){
				case 'default':
					self._newOrder = self._origOrder;
					break;
				case 'random':
					self._newOrder = arrayShuffle(self._startOrder);
					break;
				case 'custom':
					self._newOrder = self._newSort[0].order;
					break;
				default:
					self._newOrder = self._startOrder.concat().sort(function(a, b){
						return self._compare(a, b);
					});
			}
			
			self._execAction('_sort', 1);
		},
		
		/**
		 * Compare Algorithm
		 * @since 2.0.0
		 * @param {string|number} a
		 * @param {string|number} b
		 * @param {number} depth (recursion)
		 * @return {number}
		 */
		
		_compare: function(a, b, depth){
			depth = depth ? depth : 0;
		
			var self = this,
				order = self._newSort[depth].order,
				getData = function(el){
					return el.dataset[self._newSort[depth].sortBy] || 0;
				},
				attrA = isNaN(getData(a) * 1) ? getData(a).toLowerCase() : getData(a) * 1,
				attrB = isNaN(getData(b) * 1) ? getData(b).toLowerCase() : getData(b) * 1;
				
			if(attrA < attrB)
				return order == 'asc' ? -1 : 1;
			if(attrA > attrB)
				return order == 'asc' ? 1 : -1;
			if(attrA == attrB && self._newSort.length > depth+1)
				return self._compare(a, b, depth+1);

			return 0;
		},
		
		/**
		 * Print Sort
		 * @since 2.0.0
		 * @param {boolean} reset
		 */
		
		_printSort: function(reset){
			var self = this,
				order = reset ? self._startOrder : self._newOrder,
				targets = self._$parent[0].querySelectorAll(self.selectors.target),
				nextSibling = targets[targets.length -1].nextElementSibling,
				frag = document.createDocumentFragment();
				
			self._execAction('_printSort', 0, arguments);
			
			for(var i = 0; i < targets.length; i++){
				var target = targets[i],
					whiteSpace = target.nextSibling;

				if(target.style.position === 'absolute') continue;
			
				if(whiteSpace && whiteSpace.nodeName == '#text'){
					self._$parent[0].removeChild(whiteSpace);
				}
				
				self._$parent[0].removeChild(target);
			}
			
			for(var i = 0; i < order.length; i++){
				var el = order[i];

				if(self._newSort[0].sortBy == 'default' && self._newSort[0].order == 'desc' && !reset){
					var firstChild = frag.firstChild;
					frag.insertBefore(el, firstChild);
					frag.insertBefore(document.createTextNode(' '), el);
				} else {
					frag.appendChild(el);
					frag.appendChild(document.createTextNode(' '));
				}
			}
			
			nextSibling ? 
				self._$parent[0].insertBefore(frag, nextSibling) :
				self._$parent[0].appendChild(frag);
				
			self._execAction('_printSort', 1, arguments);
		},
		
		/**
		 * Parse Sort
		 * @since 2.0.0
		 * @param {string} sortString
		 * @return {array} newSort
		 */
		
		_parseSort: function(sortString){
			var self = this,
				rules = typeof sortString === 'string' ? sortString.split(' ') : [sortString],
				newSort = [];
				
			for(var i = 0; i < rules.length; i++){
				var rule = typeof sortString === 'string' ? rules[i].split(':') : ['custom', rules[i]],
					ruleObj = {
						sortBy: self._helpers._camelCase(rule[0]),
						order: rule[1] || 'asc'
					};
					
				newSort.push(ruleObj);
				
				if(ruleObj.sortBy == 'default' || ruleObj.sortBy == 'random') break;
			}
			
			return self._execFilter('_parseSort', newSort, arguments);
		},
		
		/**
		 * Parse Effects
		 * @since 2.0.0
		 * @return {object} effects
		 */
		
		_parseEffects: function(){
			var self = this,
				effects = {
					opacity: '',
					transformIn: '',
					transformOut: '',
					filter: ''
				},
				parse = function(effect, extract, reverse){
					if(self.animation.effects.indexOf(effect) > -1){
						if(extract){
							var propIndex = self.animation.effects.indexOf(effect+'(');
							if(propIndex > -1){
								var str = self.animation.effects.substring(propIndex),
									match = /\(([^)]+)\)/.exec(str),
									val = match[1];

									return {val: val};
							}
						}
						return true;
					} else {
						return false;
					}
				},
				negate = function(value, invert){
					if(invert){
						return value.charAt(0) === '-' ? value.substr(1, value.length) : '-'+value;
					} else {
						return value;
					}
				},
				buildTransform = function(key, invert){
					var transforms = [
						['scale', '.01'],
						['translateX', '20px'],
						['translateY', '20px'],
						['translateZ', '20px'],
						['rotateX', '90deg'],
						['rotateY', '90deg'],
						['rotateZ', '180deg'],
					];
					
					for(var i = 0; i < transforms.length; i++){
						var prop = transforms[i][0],
							def = transforms[i][1],
							inverted = invert && prop !== 'scale';
							
						effects[key] += parse(prop) ? prop+'('+negate(parse(prop, true).val || def, inverted)+') ' : '';
					}
				};
			
			effects.opacity = parse('fade') ? parse('fade',true).val || '0' : '1';
			
			buildTransform('transformIn');
			
			self.animation.reverseOut ? buildTransform('transformOut', true) : (effects.transformOut = effects.transformIn);

			effects.transition = {};
			
			effects.transition = self._getPrefixedCSS('transition','all '+self.animation.duration+'ms '+self.animation.easing+', opacity '+self.animation.duration+'ms linear');
		
			self.animation.stagger = parse('stagger') ? true : false;
			self.animation.staggerDuration = parseInt(parse('stagger') ? (parse('stagger',true).val ? parse('stagger',true).val : 100) : 100);

			return self._execFilter('_parseEffects', effects);
		},
		
		/**
		 * Build State
		 * @since 2.0.0
		 * @param {boolean} future
		 * @return {object} futureState
		 */
		
		_buildState: function(future){
			var self = this,
				state = {};
			
			self._execAction('_buildState', 0);
			
			state = {
				activeFilter: self._activeFilter === '' ? 'none' : self._activeFilter,
				activeSort: future && self._newSortString ? self._newSortString : self._activeSort,
				fail: !self._$show.length && self._activeFilter !== '',
				$targets: self._$targets,
				$show: self._$show,
				$hide: self._$hide,
				totalTargets: self._$targets.length,
				totalShow: self._$show.length,
				totalHide: self._$hide.length,
				display: future && self._newDisplay ? self._newDisplay : self.layout.display
			};
			
			if(future){
				return self._execFilter('_buildState', state);
			} else {
				self._state = state;
				
				self._execAction('_buildState', 1);
			}
		},
		
		/**
		 * Go Mix
		 * @since 2.0.0
		 * @param {boolean} animate
		 */
		
		_goMix: function(animate){
			var self = this,
				phase1 = function(){
					if(self._chrome && (self._chrome === 31)){
						chromeFix(self._$parent[0]);
					}
					
					self._setInter();
					
					phase2();
				},
				phase2 = function(){
					var scrollTop = window.pageYOffset,
						scrollLeft = window.pageXOffset,
						docHeight = document.documentElement.scrollHeight;

					self._getInterMixData();
					
					self._setFinal();

					self._getFinalMixData();

					(window.pageYOffset !== scrollTop) && window.scrollTo(scrollLeft, scrollTop);

					self._prepTargets();
					
					if(window.requestAnimationFrame){
						requestAnimationFrame(phase3);
					} else {
						setTimeout(function(){
							phase3();
						},20);
					}
				},
				phase3 = function(){
					self._animateTargets();

					if(self._targetsBound === 0){
						self._cleanUp();
					}
				},
				chromeFix = function(grid){
					var parent = grid.parentElement,
						placeholder = document.createElement('div'),
						frag = document.createDocumentFragment();

					parent.insertBefore(placeholder, grid);
					frag.appendChild(grid);
					parent.replaceChild(grid, placeholder);
				},
				futureState = self._buildState(true);
				
			self._execAction('_goMix', 0, arguments);
				
			!self.animation.duration && (animate = false);

			self._mixing = true;
			
			self._$container.removeClass(self.layout.containerClassFail);
			
			if(typeof self.callbacks.onMixStart === 'function'){
				self.callbacks.onMixStart.call(self._domNode, self._state, futureState, self);
			}
			
			self._$container.trigger('mixStart', [self._state, futureState, self]);
			
			self._getOrigMixData();
			
			if(animate && !self._suckMode){
			
				window.requestAnimationFrame ?
					requestAnimationFrame(phase1) :
					phase1();
			
			} else {
				self._cleanUp();
			}
			
			self._execAction('_goMix', 1, arguments);
		},
		
		/**
		 * Get Target Data
		 * @since 2.0.0
		 */
		
		_getTargetData: function(el, stage){
			var self = this,
				elStyle;
			
			el.dataset[stage+'PosX'] = el.offsetLeft;
			el.dataset[stage+'PosY'] = el.offsetTop;

			if(self.animation.animateResizeTargets){
				elStyle = window.getComputedStyle(el);
			
				el.dataset[stage+'MarginBottom'] = parseInt(elStyle.marginBottom);
				el.dataset[stage+'MarginRight'] = parseInt(elStyle.marginRight);
				el.dataset[stage+'Width'] = el.offsetWidth;
				el.dataset[stage+'Height'] = el.offsetHeight;
			}
		},
		
		/**
		 * Get Original Mix Data
		 * @since 2.0.0
		 */
		
		_getOrigMixData: function(){
			var self = this,
				parentStyle = !self._suckMode ? window.getComputedStyle(self._$parent[0]) : {boxSizing: ''},
				parentBS = parentStyle.boxSizing || parentStyle[self._vendor+'BoxSizing'];
	
			self._incPadding = (parentBS === 'border-box');
			
			self._execAction('_getOrigMixData', 0);
			
			!self._suckMode && (self.effects = self._parseEffects());
		
			self._$toHide = self._$hide.filter(':visible');
			self._$toShow = self._$show.filter(':hidden');
			self._$pre = self._$targets.filter(':visible');

			self._startHeight = self._incPadding ? 
				self._$parent.outerHeight() : 
				self._$parent.height();
				
			for(var i = 0; i < self._$pre.length; i++){
				var el = self._$pre[i];
				
				self._getTargetData(el, 'orig');
			}
			
			self._execAction('_getOrigMixData', 1);
		},
		
		/**
		 * Set Intermediate Positions
		 * @since 2.0.0
		 */
		
		_setInter: function(){
			var self = this;
			
			self._execAction('_setInter', 0);
			
			if(self._changingLayout && self.animation.animateChangeLayout){
				self._$toShow.css('display',self._newDisplay);

				if(self._changingClass){
					self._$container
						.removeClass(self.layout.containerClass)
						.addClass(self._newClass);
				}
			} else {
				self._$toShow.css('display', self.layout.display);
			}
			
			self._execAction('_setInter', 1);
		},
		
		/**
		 * Get Intermediate Mix Data
		 * @since 2.0.0
		 */
		
		_getInterMixData: function(){
			var self = this;
			
			self._execAction('_getInterMixData', 0);
			
			for(var i = 0; i < self._$toShow.length; i++){
				var el = self._$toShow[i];
					
				self._getTargetData(el, 'inter');
			}
			
			for(var i = 0; i < self._$pre.length; i++){
				var el = self._$pre[i];
					
				self._getTargetData(el, 'inter');
			}
			
			self._execAction('_getInterMixData', 1);
		},
		
		/**
		 * Set Final Positions
		 * @since 2.0.0
		 */
		
		_setFinal: function(){
			var self = this;
			
			self._execAction('_setFinal', 0);
			
			self._sorting && self._printSort();

			self._$toHide.removeStyle('display');
			
			if(self._changingLayout && self.animation.animateChangeLayout){
				self._$pre.css('display',self._newDisplay);
			}
			
			self._execAction('_setFinal', 1);
		},
		
		/**
		 * Get Final Mix Data
		 * @since 2.0.0
		 */
		
		_getFinalMixData: function(){
			var self = this;
			
			self._execAction('_getFinalMixData', 0);
	
			for(var i = 0; i < self._$toShow.length; i++){
				var el = self._$toShow[i];
					
				self._getTargetData(el, 'final');
			}
			
			for(var i = 0; i < self._$pre.length; i++){
				var el = self._$pre[i];
					
				self._getTargetData(el, 'final');
			}
			
			self._newHeight = self._incPadding ? 
				self._$parent.outerHeight() : 
				self._$parent.height();

			self._sorting && self._printSort(true);
	
			self._$toShow.removeStyle('display');
			
			self._$pre.css('display',self.layout.display);
			
			if(self._changingClass && self.animation.animateChangeLayout){
				self._$container
					.removeClass(self._newClass)
					.addClass(self.layout.containerClass);
			}
			
			self._execAction('_getFinalMixData', 1);
		},
		
		/**
		 * Prepare Targets
		 * @since 2.0.0
		 */
		
		_prepTargets: function(){
			var self = this,
				transformCSS = {
					_in: self._getPrefixedCSS('transform', self.effects.transformIn),
					_out: self._getPrefixedCSS('transform', self.effects.transformOut)
				};

			self._execAction('_prepTargets', 0);
			
			if(self.animation.animateResizeContainer){
				self._$parent.css('height',self._startHeight+'px');
			}
			
			for(var i = 0; i < self._$toShow.length; i++){
				var el = self._$toShow[i],
					$el = $(el);
				
				el.style.opacity = self.effects.opacity;
				el.style.display = (self._changingLayout && self.animation.animateChangeLayout) ?
					self._newDisplay :
					self.layout.display;
					
				$el.css(transformCSS._in);
				
				if(self.animation.animateResizeTargets){
					el.style.width = el.dataset.finalWidth+'px';
					el.style.height = el.dataset.finalHeight+'px';
					el.style.marginRight = -(el.dataset.finalWidth - el.dataset.interWidth) + (el.dataset.finalMarginRight * 1)+'px';
					el.style.marginBottom = -(el.dataset.finalHeight - el.dataset.interHeight) + (el.dataset.finalMarginBottom * 1)+'px';
				}
			}

			for(var i = 0; i < self._$pre.length; i++){
				var el = self._$pre[i],
					$el = $(el),
					translate = {
						x: el.dataset.origPosX - el.dataset.interPosX,
						y: el.dataset.origPosY - el.dataset.interPosY
					},
					transformCSS = self._getPrefixedCSS('transform','translate('+translate.x+'px,'+translate.y+'px)');

				$el.css(transformCSS);
				
				if(self.animation.animateResizeTargets){
					el.style.width = el.dataset.origWidth+'px';
					el.style.height = el.dataset.origHeight+'px';
					
					if(el.dataset.origWidth - el.dataset.finalWidth){
						el.style.marginRight = -(el.dataset.origWidth - el.dataset.interWidth) + (el.dataset.origMarginRight * 1)+'px';
					}
					
					if(el.dataset.origHeight - el.dataset.finalHeight){
						el.style.marginBottom = -(el.dataset.origHeight - el.dataset.interHeight) + (el.dataset.origMarginBottom * 1) +'px';
					}
				}
			}
			
			self._execAction('_prepTargets', 1);
		},
		
		/**
		 * Animate Targets
		 * @since 2.0.0
		 */
		
		_animateTargets: function(){
			var self = this;

			self._execAction('_animateTargets', 0);
			
			self._targetsDone = 0;
			self._targetsBound = 0;
			
			self._$parent
				.css(self._getPrefixedCSS('perspective', self.animation.perspectiveDistance+'px'))
				.css(self._getPrefixedCSS('perspective-origin', self.animation.perspectiveOrigin));
			
			if(self.animation.animateResizeContainer){
				self._$parent
					.css(self._getPrefixedCSS('transition','height '+self.animation.duration+'ms ease'))
					.css('height',self._newHeight+'px');
			}
			
			for(var i = 0; i < self._$toShow.length; i++){
				var el = self._$toShow[i],
					$el = $(el),
					translate = {
						x: el.dataset.finalPosX - el.dataset.interPosX,
						y: el.dataset.finalPosY - el.dataset.interPosY
					},
					delay = self._getDelay(i),
					toShowCSS = {};
				
				el.style.opacity = '';
				
				for(var j = 0; j < 2; j++){
					var a = j === 0 ? a = self._prefix : '';
					
					if(self._ff && self._ff <= 20){
						toShowCSS[a+'transition-property'] = 'all';
						toShowCSS[a+'transition-timing-function'] = self.animation.easing+'ms';
						toShowCSS[a+'transition-duration'] = self.animation.duration+'ms';
					}
					
					toShowCSS[a+'transition-delay'] = delay+'ms';
					toShowCSS[a+'transform'] = 'translate('+translate.x+'px,'+translate.y+'px)';
				}
				
				if(self.effects.transform || self.effects.opacity){
					self._bindTargetDone($el);
				}
				
				(self._ff && self._ff <= 20) ? 
					$el.css(toShowCSS) : 
					$el.css(self.effects.transition).css(toShowCSS);
			}
			
			for(var i = 0; i < self._$pre.length; i++){
				var el = self._$pre[i],
					$el = $(el),
					translate = {
						x: el.dataset.finalPosX - el.dataset.interPosX,
						y: el.dataset.finalPosY - el.dataset.interPosY
					},
					delay = self._getDelay(i);
					
				if(!(
					el.dataset.finalPosX === el.dataset.origPosX &&
					el.dataset.finalPosY === el.dataset.origPosY
				)){
					self._bindTargetDone($el);
				}
				
				$el.css(self._getPrefixedCSS('transition', 'all '+self.animation.duration+'ms '+self.animation.easing+' '+delay+'ms'));
				$el.css(self._getPrefixedCSS('transform', 'translate('+translate.x+'px,'+translate.y+'px)'));
				
				if(self.animation.animateResizeTargets){
					if(el.dataset.origWidth - el.dataset.finalWidth && el.dataset.finalWidth * 1){
						el.style.width = el.dataset.finalWidth+'px';
						el.style.marginRight = -(el.dataset.finalWidth - el.dataset.interWidth)+(el.dataset.finalMarginRight * 1)+'px';
					}
					
					if(el.dataset.origHeight - el.dataset.finalHeight && el.dataset.finalHeight * 1){
						el.style.height = el.dataset.finalHeight+'px';
						el.style.marginBottom = -(el.dataset.finalHeight - el.dataset.interHeight)+(el.dataset.finalMarginBottom * 1) +'px';
					}
				}
			}
			
			if(self._changingClass){
				self._$container
					.removeClass(self.layout.containerClass)
					.addClass(self._newClass);
			}
			
			for(var i = 0; i < self._$toHide.length; i++){
				var el = self._$toHide[i],
					$el = $(el),
					delay = self._getDelay(i),
					toHideCSS = {};

				for(var j = 0; j<2; j++){
					var a = j === 0 ? a = self._prefix : '';

					toHideCSS[a+'transition-delay'] = delay+'ms';
					toHideCSS[a+'transform'] = self.effects.transformOut;
					toHideCSS.opacity = self.effects.opacity;
				}
				
				$el.css(self.effects.transition).css(toHideCSS);
			
				if(self.effects.transform || self.effects.opacity){
					self._bindTargetDone($el);
				};
			}
			
			self._execAction('_animateTargets', 1);

		},
		
		/**
		 * Bind Targets TransitionEnd
		 * @since 2.0.0
		 * @param {object} $el
		 */
		
		_bindTargetDone: function($el){
			var self = this,
				el = $el[0];
				
			self._execAction('_bindTargetDone', 0, arguments);
			
			if(!el.dataset.bound){
				
				el.dataset.bound = true;
				self._targetsBound++;
			
				$el.on('webkitTransitionEnd.mixItUp transitionend.mixItUp',function(e){
					if(
						(e.originalEvent.propertyName.indexOf('transform') > -1 || 
						e.originalEvent.propertyName.indexOf('opacity') > -1) &&
						$(e.originalEvent.target).is(self.selectors.target)
					){
						$el.off('.mixItUp');
						delete el.dataset.bound;
						self._targetDone();
					}
				});
			}
			
			self._execAction('_bindTargetDone', 1, arguments);
		},
		
		/**
		 * Target Done
		 * @since 2.0.0
		 */
		
		_targetDone: function(){
			var self = this;
			
			self._execAction('_targetDone', 0);
			
			self._targetsDone++;
			
			(self._targetsDone === self._targetsBound) && self._cleanUp();
			
			self._execAction('_targetDone', 1);
		},
		
		/**
		 * Clean Up
		 * @since 2.0.0
		 */
		
		_cleanUp: function(){
			var self = this,
				targetStyles = self.animation.animateResizeTargets ? 'transform opacity width height margin-bottom margin-right' : 'transform opacity';
				unBrake = function(){
					self._$targets.removeStyle('transition', self._prefix);
				};
				
			self._execAction('_cleanUp', 0);
			
			!self._changingLayout ?
				self._$show.css('display',self.layout.display) :
				self._$show.css('display',self._newDisplay);
			
			self._$targets.css(self._brake);
			
			self._$targets
				.removeStyle(targetStyles, self._prefix)
				.removeAttr('data-inter-pos-x data-inter-pos-y data-final-pos-x data-final-pos-y data-orig-pos-x data-orig-pos-y data-orig-height data-orig-width data-final-height data-final-width data-inter-width data-inter-height data-orig-margin-right data-orig-margin-bottom data-inter-margin-right data-inter-margin-bottom data-final-margin-right data-final-margin-bottom');
				
			self._$hide.removeStyle('display');
			
			self._$parent.removeStyle('height transition perspective-distance perspective perspective-origin-x perspective-origin-y perspective-origin perspectiveOrigin', self._prefix);
			
			if(self._sorting){
				self._printSort();
				self._activeSort = self._newSortString;
				self._sorting = false;
			}
			
			if(self._changingLayout){
				if(self._changingDisplay){
					self.layout.display = self._newDisplay;
					self._changingDisplay = false;
				}
				
				if(self._changingClass){
					self._$parent.removeClass(self.layout.containerClass).addClass(self._newClass);
					self.layout.containerClass = self._newClass;
					self._changingClass = false;
				}
				
				self._changingLayout = false;
			}
			
			self._refresh();
			
			self._buildState();
			
			if(self._state.fail){
				self._$container.addClass(self.layout.containerClassFail);
			}
			
			self._$show = $();
			self._$hide = $();
			
			if(window.requestAnimationFrame){
				requestAnimationFrame(unBrake);
			}
			
			self._mixing = false;
			
			if(typeof self.callbacks._user === 'function'){
				self.callbacks._user.call(self._domNode, self._state, self);
			}
			
			if(typeof self.callbacks.onMixEnd === 'function'){
				self.callbacks.onMixEnd.call(self._domNode, self._state, self);
			}
			
			self._$container.trigger('mixEnd', [self._state, self]);
			
			if(self._state.fail){
				(typeof self.callbacks.onMixFail === 'function') && self.callbacks.onMixFail.call(self._domNode, self._state, self);
				self._$container.trigger('mixFail', [self._state, self]);
			}
			
			if(self._loading){
				(typeof self.callbacks.onMixLoad === 'function') && self.callbacks.onMixLoad.call(self._domNode, self._state, self);
				self._$container.trigger('mixLoad', [self._state, self]);
			}
			
			if(self._queue.length){
				self._execAction('_queue', 0);
				
				self.multiMix(self._queue[0][0],self._queue[0][1],self._queue[0][2]);
				self._queue.splice(0, 1);
			}
			
			self._execAction('_cleanUp', 1);
			
			self._loading = false;
		},
		
		/**
		 * Get Prefixed CSS
		 * @since 2.0.0
		 * @param {string} property
		 * @param {string} value
		 * @param {boolean} prefixValue
		 * @return {object} styles
		 */
		
		_getPrefixedCSS: function(property, value, prefixValue){
			var self = this,
				styles = {};
		
			for(i = 0; i < 2; i++){
				var prefix = i === 0 ? self._prefix : '';
				prefixValue ? styles[prefix+property] = prefix+value : styles[prefix+property] = value;
			}
			
			return self._execFilter('_getPrefixedCSS', styles, arguments);
		},
		
		/**
		 * Get Delay
		 * @since 2.0.0
		 * @param {number} i
		 * @return {number} delay
		 */
		
		_getDelay: function(i){
			var self = this,
				n = typeof self.animation.staggerSequence === 'function' ? self.animation.staggerSequence.call(self._domNode, i, self._state) : i,
				delay = self.animation.stagger ?  n * self.animation.staggerDuration : 0;
				
			return self._execFilter('_getDelay', delay, arguments);
		},
		
		/**
		 * Parse MultiMix Arguments
		 * @since 2.0.0
		 * @param {array} args
		 * @return {object} output
		 */
		
		_parseMultiMixArgs: function(args){
			var self = this,
				output = {
					command: null,
					animate: self.animation.enable,
					callback: null
				};
				
			for(var i = 0; i < args.length; i++){
				var arg = args[i];

				if(arg !== null){
					if(typeof arg === 'object' || typeof arg === 'string'){
						output.command = arg;
					} else if(typeof arg === 'boolean'){
						output.animate = arg;
					} else if(typeof arg === 'function'){
						output.callback = arg;
					}
				}
			}
			
			return self._execFilter('_parseMultiMixArgs', output, arguments);
		},
		
		/**
		 * Parse Insert Arguments
		 * @since 2.0.0
		 * @param {array} args
		 * @return {object} output
		 */
		
		_parseInsertArgs: function(args){
			var self = this,
				output = {
					index: 0,
					$object: $(),
					multiMix: {filter: self._state.activeFilter},
					callback: null
				};
			
			for(var i = 0; i < args.length; i++){
				var arg = args[i];
				
				if(typeof arg === 'number'){
					output.index = arg;
				} else if(typeof arg === 'object' && arg instanceof $){
					output.$object = arg;
				} else if(typeof arg === 'object' && self._helpers._isElement(arg)){
					output.$object = $(arg);
				} else if(typeof arg === 'object' && arg !== null){
					output.multiMix = arg;
				} else if(typeof arg === 'boolean' && !arg){
					output.multiMix = false;
				} else if(typeof arg === 'function'){
					output.callback = arg;
				}
			}
			
			return self._execFilter('_parseInsertArgs', output, arguments);
		},
		
		/**
		 * Execute Action
		 * @since 2.0.0
		 * @param {string} methodName
		 * @param {boolean} isPost
		 * @param {array} args
		 */
		
		_execAction: function(methodName, isPost, args){
			var self = this,
				context = isPost ? 'post' : 'pre';

			if(!self._actions.isEmptyObject && self._actions.hasOwnProperty(methodName)){
				for(var key in self._actions[methodName][context]){
					self._actions[methodName][context][key].call(self, args);
				}
			}
		},
		
		/**
		 * Execute Filter
		 * @since 2.0.0
		 * @param {string} methodName
		 * @param {mixed} value
		 * @return {mixed} value
		 */
		
		_execFilter: function(methodName, value, args){
			var self = this;
			
			if(!self._filters.isEmptyObject && self._filters.hasOwnProperty(methodName)){
				for(var key in self._filters[methodName]){
					return self._filters[methodName][key].call(self, args);
				}
			} else {
				return value;
			}
		},
		
		/* Helpers
		---------------------------------------------------------------------- */

		_helpers: {
			
			/**
			 * CamelCase
			 * @since 2.0.0
			 * @param {string}
			 * @return {string}
			 */

			_camelCase: function(string){
				return string.replace(/-([a-z])/g, function(g){
						return g[1].toUpperCase();
				});
			},
			
			/**
			 * Is Element
			 * @since 2.1.3
			 * @param {object} element to test
			 * @return {boolean}
			 */
			
			_isElement: function(el){
				if(window.HTMLElement){
					return el instanceof HTMLElement;
				} else {
					return (
						el !== null && 
						el.nodeType === 1 &&
						el.nodeName === 'string'
					);
				}
			}
		},
		
		/* Public Methods
		---------------------------------------------------------------------- */
		
		/**
		 * Is Mixing
		 * @since 2.0.0
		 * @return {boolean}
		 */
		
		isMixing: function(){
			var self = this;
			
			return self._execFilter('isMixing', self._mixing);
		},
		
		/**
		 * Filter (public)
		 * @since 2.0.0
		 * @param {array} arguments
		 */
		
		filter: function(){
			var self = this,
				args = self._parseMultiMixArgs(arguments);

			self._clicking && (self._toggleString = '');
			
			self.multiMix({filter: args.command}, args.animate, args.callback);
		},
		
		/**
		 * Sort (public)
		 * @since 2.0.0
		 * @param {array} arguments
		 */
		
		sort: function(){
			var self = this,
				args = self._parseMultiMixArgs(arguments);

			self.multiMix({sort: args.command}, args.animate, args.callback);
		},

		/**
		 * Change Layout (public)
		 * @since 2.0.0
		 * @param {array} arguments
		 */
		
		changeLayout: function(){
			var self = this,
				args = self._parseMultiMixArgs(arguments);
				
			self.multiMix({changeLayout: args.command}, args.animate, args.callback);
		},
		
		/**
		 * MultiMix
		 * @since 2.0.0
		 * @param {array} arguments
		 */
		
		multiMix: function(){
			var self = this,
				args = self._parseMultiMixArgs(arguments);

			self._execAction('multiMix', 0, arguments);

			if(!self._mixing){
				if(self.controls.enable && !self._clicking){
					self.controls.toggleFilterButtons && self._buildToggleArray();
					self._updateControls(args.command, self.controls.toggleFilterButtons);
				}
				
				(self._queue.length < 2) && (self._clicking = false);
			
				delete self.callbacks._user;
				if(args.callback) self.callbacks._user = args.callback;
			
				var sort = args.command.sort,
					filter = args.command.filter,
					changeLayout = args.command.changeLayout;

				self._refresh();

				if(sort){
					self._newSort = self._parseSort(sort);
					self._newSortString = sort;
					
					self._sorting = true;
					self._sort();
				}
				
				if(filter !== undf){
					filter = (filter === 'all') ? self.selectors.target : filter;
	
					self._activeFilter = filter;
				}
				
				self._filter();
				
				if(changeLayout){
					self._newDisplay = (typeof changeLayout === 'string') ? changeLayout : changeLayout.display || self.layout.display;
					self._newClass = changeLayout.containerClass || '';

					if(
						self._newDisplay !== self.layout.display ||
						self._newClass !== self.layout.containerClass
					){
						self._changingLayout = true;
						
						self._changingClass = (self._newClass !== self.layout.containerClass);
						self._changingDisplay = (self._newDisplay !== self.layout.display);
					}
				}
				
				self._$targets.css(self._brake);
				
				self._goMix(args.animate ^ self.animation.enable ? args.animate : self.animation.enable);
				
				self._execAction('multiMix', 1, arguments);
				
			} else {
				if(self.animation.queue && self._queue.length < self.animation.queueLimit){
					self._queue.push(arguments);
					
					(self.controls.enable && !self._clicking) && self._updateControls(args.command);
					
					self._execAction('multiMixQueue', 1, arguments);
					
				} else {
					if(typeof self.callbacks.onMixBusy === 'function'){
						self.callbacks.onMixBusy.call(self._domNode, self._state, self);
					}
					self._$container.trigger('mixBusy', [self._state, self]);
					
					self._execAction('multiMixBusy', 1, arguments);
				}
			}
		},
		
		/**
		 * Insert
		 * @since 2.0.0
		 * @param {array} arguments
		 */
		
		insert: function(){
			var self = this,
				args = self._parseInsertArgs(arguments),
				callback = (typeof args.callback === 'function') ? args.callback : null,
				frag = document.createDocumentFragment(),
				target = (function(){
					self._refresh();
					
					if(self._$targets.length){
						return (args.index < self._$targets.length || !self._$targets.length) ? 
							self._$targets[args.index] :
							self._$targets[self._$targets.length-1].nextElementSibling;
					} else {
						return self._$parent[0].children[0];
					}
				})();
						
			self._execAction('insert', 0, arguments);
				
			if(args.$object){
				for(var i = 0; i < args.$object.length; i++){
					var el = args.$object[i];
					
					frag.appendChild(el);
					frag.appendChild(document.createTextNode(' '));
				}

				self._$parent[0].insertBefore(frag, target);
			}
			
			self._execAction('insert', 1, arguments);
			
			if(typeof args.multiMix === 'object'){
				self.multiMix(args.multiMix, callback);
			}
		},

		/**
		 * Prepend
		 * @since 2.0.0
		 * @param {array} arguments
		 */
		
		prepend: function(){
			var self = this,
				args = self._parseInsertArgs(arguments);
				
			self.insert(0, args.$object, args.multiMix, args.callback);
		},
		
		/**
		 * Append
		 * @since 2.0.0
		 * @param {array} arguments
		 */
		
		append: function(){
			var self = this,
				args = self._parseInsertArgs(arguments);
		
			self.insert(self._state.totalTargets, args.$object, args.multiMix, args.callback);
		},
		
		/**
		 * Get Option
		 * @since 2.0.0
		 * @param {string} string
		 * @return {mixed} value
		 */
		
		getOption: function(string){
			var self = this,
				getProperty = function(obj, prop){
					var parts = prop.split('.'),
						last = parts.pop(),
						l = parts.length,
						i = 1,
						current = parts[0] || prop;

					while((obj = obj[current]) && i < l){
						current = parts[i];
						i++;
					}

					if(obj !== undf){
						return obj[last] !== undf ? obj[last] : obj;
					}
				};

			return string ? self._execFilter('getOption', getProperty(self, string), arguments) : self;
		},
		
		/**
		 * Set Options
		 * @since 2.0.0
		 * @param {object} config
		 */
		
		setOptions: function(config){
			var self = this;
			
			self._execAction('setOptions', 0, arguments);
			
			typeof config === 'object' && $.extend(true, self, config);
			
			self._execAction('setOptions', 1, arguments);
		},
		
		/**
		 * Get State
		 * @since 2.0.0
		 * @return {object} state
		 */
		
		getState: function(){
			var self = this;
			
			return self._execFilter('getState', self._state, self);
		},
		
		/**
		 * Force Refresh
		 * @since 2.1.2
		 */
		
		forceRefresh: function(){
			var self = this;
			
			self._refresh(false, true);
		},
		
		/**
		 * Destroy
		 * @since 2.0.0
		 * @param {boolean} hideAll
		 */
		
		destroy: function(hideAll){
			var self = this;
			
			self._execAction('destroy', 0, arguments);
		
			self._$body
				.add($(self.selectors.sort))
				.add($(self.selectors.filter))
				.off('.mixItUp');
			
			for(var i = 0; i < self._$targets.length; i++){
				var target = self._$targets[i];

				hideAll && (target.style.display = '');

				delete target.mixParent;
			}
			
			self._execAction('destroy', 1, arguments);
			
			delete $.MixItUp.prototype._instances[self._id];
		}
		
	};
	
	/* jQuery Methods
	---------------------------------------------------------------------- */
	
	/**
	 * jQuery .mixItUp() method
	 * @since 2.0.0
	 * @extends $.fn
	 */
	
	$.fn.mixItUp = function(){
		var args = arguments,
			dataReturn = [],
			eachReturn,
			_instantiate = function(domNode, settings){
				var instance = new $.MixItUp(),
					rand = function(){
						return ('00000'+(Math.random()*16777216<<0).toString(16)).substr(-6).toUpperCase();
					};
					
				instance._execAction('_instantiate', 0, arguments);

				domNode.id = !domNode.id ? 'MixItUp'+rand() : domNode.id;
				
				if(!instance._instances[domNode.id]){
					instance._instances[domNode.id] = instance;
					instance._init(domNode, settings);
				}
				
				instance._execAction('_instantiate', 1, arguments);
			};
			
		eachReturn = this.each(function(){
			if(args && typeof args[0] === 'string'){
				var instance = $.MixItUp.prototype._instances[this.id];
				if(args[0] == 'isLoaded'){
					dataReturn.push(instance ? true : false);
				} else {
					var data = instance[args[0]](args[1], args[2], args[3]);
					if(data !== undf)dataReturn.push(data);
				}
			} else {
				_instantiate(this, args[0]);
			}
		});
		
		if(dataReturn.length){
			return dataReturn.length > 1 ? dataReturn : dataReturn[0];
		} else {
			return eachReturn;
		}
	};
	
	/**
	 * jQuery .removeStyle() method
	 * @since 2.0.0
	 * @extends $.fn
	 */
	
	$.fn.removeStyle = function(style, prefix){
		prefix = prefix ? prefix : '';
	
		return this.each(function(){
			var el = this,
				styles = style.split(' ');
				
			for(var i = 0; i < styles.length; i++){
				for(var j = 0; j < 2; j++){
					var prop = j ? styles[i] : prefix+styles[i];
					if(
						el.style[prop] !== undf && 
						typeof el.style[prop] !== 'unknown' &&
						el.style[prop].length > 0
					){
						el.style[prop] = '';
					}
					if(!prefix)break;
				}
			}
			
			if(el.attributes && el.attributes.style && el.attributes.style !== undf && el.attributes.style.value === ''){
				el.attributes.removeNamedItem('style');
			}
		});
	};
	
})(jQuery);
/* Modernizr 2.8.0 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexboxlegacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.0",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.flexboxlegacy=function(){return J("boxDirection")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS5taW4uanMiLCJqcXVlcnkubmF2LmpzIiwid293LmpzIiwiYXBwLmpzIiwianF1ZXJ5Lm1peGl0dXAuanMiLCJtb2Rlcm5penItMi44LjAubWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6Z0VBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISBqUXVlcnkgdjIuMi4wIHwgKGMpIGpRdWVyeSBGb3VuZGF0aW9uIHwganF1ZXJ5Lm9yZy9saWNlbnNlICovXG4hZnVuY3Rpb24oYSxiKXtcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YS5kb2N1bWVudD9iKGEsITApOmZ1bmN0aW9uKGEpe2lmKCFhLmRvY3VtZW50KXRocm93IG5ldyBFcnJvcihcImpRdWVyeSByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIik7cmV0dXJuIGIoYSl9OmIoYSl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnRoaXMsZnVuY3Rpb24oYSxiKXt2YXIgYz1bXSxkPWEuZG9jdW1lbnQsZT1jLnNsaWNlLGY9Yy5jb25jYXQsZz1jLnB1c2gsaD1jLmluZGV4T2YsaT17fSxqPWkudG9TdHJpbmcsaz1pLmhhc093blByb3BlcnR5LGw9e30sbT1cIjIuMi4wXCIsbj1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgbi5mbi5pbml0KGEsYil9LG89L15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLHA9L14tbXMtLyxxPS8tKFtcXGRhLXpdKS9naSxyPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGIudG9VcHBlckNhc2UoKX07bi5mbj1uLnByb3RvdHlwZT17anF1ZXJ5Om0sY29uc3RydWN0b3I6bixzZWxlY3RvcjpcIlwiLGxlbmd0aDowLHRvQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gZS5jYWxsKHRoaXMpfSxnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWE/MD5hP3RoaXNbYSt0aGlzLmxlbmd0aF06dGhpc1thXTplLmNhbGwodGhpcyl9LHB1c2hTdGFjazpmdW5jdGlvbihhKXt2YXIgYj1uLm1lcmdlKHRoaXMuY29uc3RydWN0b3IoKSxhKTtyZXR1cm4gYi5wcmV2T2JqZWN0PXRoaXMsYi5jb250ZXh0PXRoaXMuY29udGV4dCxifSxlYWNoOmZ1bmN0aW9uKGEpe3JldHVybiBuLmVhY2godGhpcyxhKX0sbWFwOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayhuLm1hcCh0aGlzLGZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuY2FsbChiLGMsYil9KSl9LHNsaWNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGUuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0sZmlyc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgwKX0sbGFzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKC0xKX0sZXE6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5sZW5ndGgsYz0rYSsoMD5hP2I6MCk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGM+PTAmJmI+Yz9bdGhpc1tjXV06W10pfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKCl9LHB1c2g6Zyxzb3J0OmMuc29ydCxzcGxpY2U6Yy5zcGxpY2V9LG4uZXh0ZW5kPW4uZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmLGc9YXJndW1lbnRzWzBdfHx7fSxoPTEsaT1hcmd1bWVudHMubGVuZ3RoLGo9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgZyYmKGo9ZyxnPWFyZ3VtZW50c1toXXx8e30saCsrKSxcIm9iamVjdFwiPT10eXBlb2YgZ3x8bi5pc0Z1bmN0aW9uKGcpfHwoZz17fSksaD09PWkmJihnPXRoaXMsaC0tKTtpPmg7aCsrKWlmKG51bGwhPShhPWFyZ3VtZW50c1toXSkpZm9yKGIgaW4gYSljPWdbYl0sZD1hW2JdLGchPT1kJiYoaiYmZCYmKG4uaXNQbGFpbk9iamVjdChkKXx8KGU9bi5pc0FycmF5KGQpKSk/KGU/KGU9ITEsZj1jJiZuLmlzQXJyYXkoYyk/YzpbXSk6Zj1jJiZuLmlzUGxhaW5PYmplY3QoYyk/Yzp7fSxnW2JdPW4uZXh0ZW5kKGosZixkKSk6dm9pZCAwIT09ZCYmKGdbYl09ZCkpO3JldHVybiBnfSxuLmV4dGVuZCh7ZXhwYW5kbzpcImpRdWVyeVwiKyhtK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLGlzUmVhZHk6ITAsZXJyb3I6ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKGEpfSxub29wOmZ1bmN0aW9uKCl7fSxpc0Z1bmN0aW9uOmZ1bmN0aW9uKGEpe3JldHVyblwiZnVuY3Rpb25cIj09PW4udHlwZShhKX0saXNBcnJheTpBcnJheS5pc0FycmF5LGlzV2luZG93OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hJiZhPT09YS53aW5kb3d9LGlzTnVtZXJpYzpmdW5jdGlvbihhKXt2YXIgYj1hJiZhLnRvU3RyaW5nKCk7cmV0dXJuIW4uaXNBcnJheShhKSYmYi1wYXJzZUZsb2F0KGIpKzE+PTB9LGlzUGxhaW5PYmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuXCJvYmplY3RcIiE9PW4udHlwZShhKXx8YS5ub2RlVHlwZXx8bi5pc1dpbmRvdyhhKT8hMTphLmNvbnN0cnVjdG9yJiYhay5jYWxsKGEuY29uc3RydWN0b3IucHJvdG90eXBlLFwiaXNQcm90b3R5cGVPZlwiKT8hMTohMH0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihhKXt2YXIgYjtmb3IoYiBpbiBhKXJldHVybiExO3JldHVybiEwfSx0eXBlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP2ErXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYT9pW2ouY2FsbChhKV18fFwib2JqZWN0XCI6dHlwZW9mIGF9LGdsb2JhbEV2YWw6ZnVuY3Rpb24oYSl7dmFyIGIsYz1ldmFsO2E9bi50cmltKGEpLGEmJigxPT09YS5pbmRleE9mKFwidXNlIHN0cmljdFwiKT8oYj1kLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksYi50ZXh0PWEsZC5oZWFkLmFwcGVuZENoaWxkKGIpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYikpOmMoYSkpfSxjYW1lbENhc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZShwLFwibXMtXCIpLnJlcGxhY2UocSxyKX0sbm9kZU5hbWU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yi50b0xvd2VyQ2FzZSgpfSxlYWNoOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0wO2lmKHMoYSkpe2ZvcihjPWEubGVuZ3RoO2M+ZDtkKyspaWYoYi5jYWxsKGFbZF0sZCxhW2RdKT09PSExKWJyZWFrfWVsc2UgZm9yKGQgaW4gYSlpZihiLmNhbGwoYVtkXSxkLGFbZF0pPT09ITEpYnJlYWs7cmV0dXJuIGF9LHRyaW06ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjooYStcIlwiKS5yZXBsYWNlKG8sXCJcIil9LG1ha2VBcnJheTpmdW5jdGlvbihhLGIpe3ZhciBjPWJ8fFtdO3JldHVybiBudWxsIT1hJiYocyhPYmplY3QoYSkpP24ubWVyZ2UoYyxcInN0cmluZ1wiPT10eXBlb2YgYT9bYV06YSk6Zy5jYWxsKGMsYSkpLGN9LGluQXJyYXk6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBudWxsPT1iPy0xOmguY2FsbChiLGEsYyl9LG1lcmdlOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPStiLmxlbmd0aCxkPTAsZT1hLmxlbmd0aDtjPmQ7ZCsrKWFbZSsrXT1iW2RdO3JldHVybiBhLmxlbmd0aD1lLGF9LGdyZXA6ZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZCxlPVtdLGY9MCxnPWEubGVuZ3RoLGg9IWM7Zz5mO2YrKylkPSFiKGFbZl0sZiksZCE9PWgmJmUucHVzaChhW2ZdKTtyZXR1cm4gZX0sbWFwOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGc9MCxoPVtdO2lmKHMoYSkpZm9yKGQ9YS5sZW5ndGg7ZD5nO2crKyllPWIoYVtnXSxnLGMpLG51bGwhPWUmJmgucHVzaChlKTtlbHNlIGZvcihnIGluIGEpZT1iKGFbZ10sZyxjKSxudWxsIT1lJiZoLnB1c2goZSk7cmV0dXJuIGYuYXBwbHkoW10saCl9LGd1aWQ6MSxwcm94eTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZjtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYiYmKGM9YVtiXSxiPWEsYT1jKSxuLmlzRnVuY3Rpb24oYSk/KGQ9ZS5jYWxsKGFyZ3VtZW50cywyKSxmPWZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYnx8dGhpcyxkLmNvbmNhdChlLmNhbGwoYXJndW1lbnRzKSkpfSxmLmd1aWQ9YS5ndWlkPWEuZ3VpZHx8bi5ndWlkKyssZik6dm9pZCAwfSxub3c6RGF0ZS5ub3csc3VwcG9ydDpsfSksXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiYobi5mbltTeW1ib2wuaXRlcmF0b3JdPWNbU3ltYm9sLml0ZXJhdG9yXSksbi5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvciBTeW1ib2xcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSxiKXtpW1wiW29iamVjdCBcIitiK1wiXVwiXT1iLnRvTG93ZXJDYXNlKCl9KTtmdW5jdGlvbiBzKGEpe3ZhciBiPSEhYSYmXCJsZW5ndGhcImluIGEmJmEubGVuZ3RoLGM9bi50eXBlKGEpO3JldHVyblwiZnVuY3Rpb25cIj09PWN8fG4uaXNXaW5kb3coYSk/ITE6XCJhcnJheVwiPT09Y3x8MD09PWJ8fFwibnVtYmVyXCI9PXR5cGVvZiBiJiZiPjAmJmItMSBpbiBhfXZhciB0PWZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGksaixrLGwsbSxuLG8scCxxLHIscyx0LHU9XCJzaXp6bGVcIisxKm5ldyBEYXRlLHY9YS5kb2N1bWVudCx3PTAseD0wLHk9Z2EoKSx6PWdhKCksQT1nYSgpLEI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT09PWImJihsPSEwKSwwfSxDPTE8PDMxLEQ9e30uaGFzT3duUHJvcGVydHksRT1bXSxGPUUucG9wLEc9RS5wdXNoLEg9RS5wdXNoLEk9RS5zbGljZSxKPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTAsZD1hLmxlbmd0aDtkPmM7YysrKWlmKGFbY109PT1iKXJldHVybiBjO3JldHVybi0xfSxLPVwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixMPVwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIixNPVwiKD86XFxcXFxcXFwufFtcXFxcdy1dfFteXFxcXHgwMC1cXFxceGEwXSkrXCIsTj1cIlxcXFxbXCIrTCtcIiooXCIrTStcIikoPzpcIitMK1wiKihbKl4kfCF+XT89KVwiK0wrXCIqKD86JygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwifChcIitNK1wiKSl8KVwiK0wrXCIqXFxcXF1cIixPPVwiOihcIitNK1wiKSg/OlxcXFwoKCgnKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIitOK1wiKSopfC4qKVxcXFwpfClcIixQPW5ldyBSZWdFeHAoTCtcIitcIixcImdcIiksUT1uZXcgUmVnRXhwKFwiXlwiK0wrXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiK0wrXCIrJFwiLFwiZ1wiKSxSPW5ldyBSZWdFeHAoXCJeXCIrTCtcIiosXCIrTCtcIipcIiksUz1uZXcgUmVnRXhwKFwiXlwiK0wrXCIqKFs+K35dfFwiK0wrXCIpXCIrTCtcIipcIiksVD1uZXcgUmVnRXhwKFwiPVwiK0wrXCIqKFteXFxcXF0nXFxcIl0qPylcIitMK1wiKlxcXFxdXCIsXCJnXCIpLFU9bmV3IFJlZ0V4cChPKSxWPW5ldyBSZWdFeHAoXCJeXCIrTStcIiRcIiksVz17SUQ6bmV3IFJlZ0V4cChcIl4jKFwiK00rXCIpXCIpLENMQVNTOm5ldyBSZWdFeHAoXCJeXFxcXC4oXCIrTStcIilcIiksVEFHOm5ldyBSZWdFeHAoXCJeKFwiK00rXCJ8WypdKVwiKSxBVFRSOm5ldyBSZWdFeHAoXCJeXCIrTiksUFNFVURPOm5ldyBSZWdFeHAoXCJeXCIrTyksQ0hJTEQ6bmV3IFJlZ0V4cChcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIrTCtcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiK0wrXCIqKD86KFsrLV18KVwiK0wrXCIqKFxcXFxkKyl8KSlcIitMK1wiKlxcXFwpfClcIixcImlcIiksYm9vbDpuZXcgUmVnRXhwKFwiXig/OlwiK0srXCIpJFwiLFwiaVwiKSxuZWVkc0NvbnRleHQ6bmV3IFJlZ0V4cChcIl5cIitMK1wiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIitMK1wiKigoPzotXFxcXGQpP1xcXFxkKilcIitMK1wiKlxcXFwpfCkoPz1bXi1dfCQpXCIsXCJpXCIpfSxYPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksWT0vXmhcXGQkL2ksWj0vXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLCQ9L14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sXz0vWyt+XS8sYWE9Lyd8XFxcXC9nLGJhPW5ldyBSZWdFeHAoXCJcXFxcXFxcXChbXFxcXGRhLWZdezEsNn1cIitMK1wiP3woXCIrTCtcIil8LilcIixcImlnXCIpLGNhPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1cIjB4XCIrYi02NTUzNjtyZXR1cm4gZCE9PWR8fGM/YjowPmQ/U3RyaW5nLmZyb21DaGFyQ29kZShkKzY1NTM2KTpTdHJpbmcuZnJvbUNoYXJDb2RlKGQ+PjEwfDU1Mjk2LDEwMjMmZHw1NjMyMCl9LGRhPWZ1bmN0aW9uKCl7bSgpfTt0cnl7SC5hcHBseShFPUkuY2FsbCh2LmNoaWxkTm9kZXMpLHYuY2hpbGROb2RlcyksRVt2LmNoaWxkTm9kZXMubGVuZ3RoXS5ub2RlVHlwZX1jYXRjaChlYSl7SD17YXBwbHk6RS5sZW5ndGg/ZnVuY3Rpb24oYSxiKXtHLmFwcGx5KGEsSS5jYWxsKGIpKX06ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLmxlbmd0aCxkPTA7d2hpbGUoYVtjKytdPWJbZCsrXSk7YS5sZW5ndGg9Yy0xfX19ZnVuY3Rpb24gZmEoYSxiLGQsZSl7dmFyIGYsaCxqLGssbCxvLHIscyx3PWImJmIub3duZXJEb2N1bWVudCx4PWI/Yi5ub2RlVHlwZTo5O2lmKGQ9ZHx8W10sXCJzdHJpbmdcIiE9dHlwZW9mIGF8fCFhfHwxIT09eCYmOSE9PXgmJjExIT09eClyZXR1cm4gZDtpZighZSYmKChiP2Iub3duZXJEb2N1bWVudHx8Yjp2KSE9PW4mJm0oYiksYj1ifHxuLHApKXtpZigxMSE9PXgmJihvPSQuZXhlYyhhKSkpaWYoZj1vWzFdKXtpZig5PT09eCl7aWYoIShqPWIuZ2V0RWxlbWVudEJ5SWQoZikpKXJldHVybiBkO2lmKGouaWQ9PT1mKXJldHVybiBkLnB1c2goaiksZH1lbHNlIGlmKHcmJihqPXcuZ2V0RWxlbWVudEJ5SWQoZikpJiZ0KGIsaikmJmouaWQ9PT1mKXJldHVybiBkLnB1c2goaiksZH1lbHNle2lmKG9bMl0pcmV0dXJuIEguYXBwbHkoZCxiLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpKSxkO2lmKChmPW9bM10pJiZjLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSlyZXR1cm4gSC5hcHBseShkLGIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShmKSksZH1pZihjLnFzYSYmIUFbYStcIiBcIl0mJighcXx8IXEudGVzdChhKSkpe2lmKDEhPT14KXc9YixzPWE7ZWxzZSBpZihcIm9iamVjdFwiIT09Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXsoaz1iLmdldEF0dHJpYnV0ZShcImlkXCIpKT9rPWsucmVwbGFjZShhYSxcIlxcXFwkJlwiKTpiLnNldEF0dHJpYnV0ZShcImlkXCIsaz11KSxyPWcoYSksaD1yLmxlbmd0aCxsPVYudGVzdChrKT9cIiNcIitrOlwiW2lkPSdcIitrK1wiJ11cIjt3aGlsZShoLS0pcltoXT1sK1wiIFwiK3FhKHJbaF0pO3M9ci5qb2luKFwiLFwiKSx3PV8udGVzdChhKSYmb2EoYi5wYXJlbnROb2RlKXx8Yn1pZihzKXRyeXtyZXR1cm4gSC5hcHBseShkLHcucXVlcnlTZWxlY3RvckFsbChzKSksZH1jYXRjaCh5KXt9ZmluYWxseXtrPT09dSYmYi5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKX19fXJldHVybiBpKGEucmVwbGFjZShRLFwiJDFcIiksYixkLGUpfWZ1bmN0aW9uIGdhKCl7dmFyIGE9W107ZnVuY3Rpb24gYihjLGUpe3JldHVybiBhLnB1c2goYytcIiBcIik+ZC5jYWNoZUxlbmd0aCYmZGVsZXRlIGJbYS5zaGlmdCgpXSxiW2MrXCIgXCJdPWV9cmV0dXJuIGJ9ZnVuY3Rpb24gaGEoYSl7cmV0dXJuIGFbdV09ITAsYX1mdW5jdGlvbiBpYShhKXt2YXIgYj1uLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dHJ5e3JldHVybiEhYShiKX1jYXRjaChjKXtyZXR1cm4hMX1maW5hbGx5e2IucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpLGI9bnVsbH19ZnVuY3Rpb24gamEoYSxiKXt2YXIgYz1hLnNwbGl0KFwifFwiKSxlPWMubGVuZ3RoO3doaWxlKGUtLSlkLmF0dHJIYW5kbGVbY1tlXV09Yn1mdW5jdGlvbiBrYShhLGIpe3ZhciBjPWImJmEsZD1jJiYxPT09YS5ub2RlVHlwZSYmMT09PWIubm9kZVR5cGUmJih+Yi5zb3VyY2VJbmRleHx8QyktKH5hLnNvdXJjZUluZGV4fHxDKTtpZihkKXJldHVybiBkO2lmKGMpd2hpbGUoYz1jLm5leHRTaWJsaW5nKWlmKGM9PT1iKXJldHVybi0xO3JldHVybiBhPzE6LTF9ZnVuY3Rpb24gbGEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1jJiZiLnR5cGU9PT1hfX1mdW5jdGlvbiBtYShhKXtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybihcImlucHV0XCI9PT1jfHxcImJ1dHRvblwiPT09YykmJmIudHlwZT09PWF9fWZ1bmN0aW9uIG5hKGEpe3JldHVybiBoYShmdW5jdGlvbihiKXtyZXR1cm4gYj0rYixoYShmdW5jdGlvbihjLGQpe3ZhciBlLGY9YShbXSxjLmxlbmd0aCxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSljW2U9ZltnXV0mJihjW2VdPSEoZFtlXT1jW2VdKSl9KX0pfWZ1bmN0aW9uIG9hKGEpe3JldHVybiBhJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZSYmYX1jPWZhLnN1cHBvcnQ9e30sZj1mYS5pc1hNTD1mdW5jdGlvbihhKXt2YXIgYj1hJiYoYS5vd25lckRvY3VtZW50fHxhKS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuIGI/XCJIVE1MXCIhPT1iLm5vZGVOYW1lOiExfSxtPWZhLnNldERvY3VtZW50PWZ1bmN0aW9uKGEpe3ZhciBiLGUsZz1hP2Eub3duZXJEb2N1bWVudHx8YTp2O3JldHVybiBnIT09biYmOT09PWcubm9kZVR5cGUmJmcuZG9jdW1lbnRFbGVtZW50PyhuPWcsbz1uLmRvY3VtZW50RWxlbWVudCxwPSFmKG4pLChlPW4uZGVmYXVsdFZpZXcpJiZlLnRvcCE9PWUmJihlLmFkZEV2ZW50TGlzdGVuZXI/ZS5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsZGEsITEpOmUuYXR0YWNoRXZlbnQmJmUuYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLGRhKSksYy5hdHRyaWJ1dGVzPWlhKGZ1bmN0aW9uKGEpe3JldHVybiBhLmNsYXNzTmFtZT1cImlcIiwhYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIil9KSxjLmdldEVsZW1lbnRzQnlUYWdOYW1lPWlhKGZ1bmN0aW9uKGEpe3JldHVybiBhLmFwcGVuZENoaWxkKG4uY3JlYXRlQ29tbWVudChcIlwiKSksIWEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aH0pLGMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT1aLnRlc3Qobi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSxjLmdldEJ5SWQ9aWEoZnVuY3Rpb24oYSl7cmV0dXJuIG8uYXBwZW5kQ2hpbGQoYSkuaWQ9dSwhbi5nZXRFbGVtZW50c0J5TmFtZXx8IW4uZ2V0RWxlbWVudHNCeU5hbWUodSkubGVuZ3RofSksYy5nZXRCeUlkPyhkLmZpbmQuSUQ9ZnVuY3Rpb24oYSxiKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50QnlJZCYmcCl7dmFyIGM9Yi5nZXRFbGVtZW50QnlJZChhKTtyZXR1cm4gYz9bY106W119fSxkLmZpbHRlci5JRD1mdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoYmEsY2EpO3JldHVybiBmdW5jdGlvbihhKXtyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoXCJpZFwiKT09PWJ9fSk6KGRlbGV0ZSBkLmZpbmQuSUQsZC5maWx0ZXIuSUQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKGJhLGNhKTtyZXR1cm4gZnVuY3Rpb24oYSl7dmFyIGM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0QXR0cmlidXRlTm9kZSYmYS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7cmV0dXJuIGMmJmMudmFsdWU9PT1ifX0pLGQuZmluZC5UQUc9Yy5nZXRFbGVtZW50c0J5VGFnTmFtZT9mdW5jdGlvbihhLGIpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRzQnlUYWdOYW1lP2IuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSk6Yy5xc2E/Yi5xdWVyeVNlbGVjdG9yQWxsKGEpOnZvaWQgMH06ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9MCxmPWIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSk7aWYoXCIqXCI9PT1hKXt3aGlsZShjPWZbZSsrXSkxPT09Yy5ub2RlVHlwZSYmZC5wdXNoKGMpO3JldHVybiBkfXJldHVybiBmfSxkLmZpbmQuQ0xBU1M9Yy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZmdW5jdGlvbihhLGIpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJnA/Yi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGEpOnZvaWQgMH0scj1bXSxxPVtdLChjLnFzYT1aLnRlc3Qobi5xdWVyeVNlbGVjdG9yQWxsKSkmJihpYShmdW5jdGlvbihhKXtvLmFwcGVuZENoaWxkKGEpLmlubmVySFRNTD1cIjxhIGlkPSdcIit1K1wiJz48L2E+PHNlbGVjdCBpZD0nXCIrdStcIi1cXHJcXFxcJyBtc2FsbG93Y2FwdHVyZT0nJz48b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiLGEucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCYmcS5wdXNoKFwiWypeJF09XCIrTCtcIiooPzonJ3xcXFwiXFxcIilcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGh8fHEucHVzaChcIlxcXFxbXCIrTCtcIiooPzp2YWx1ZXxcIitLK1wiKVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWR+PVwiK3UrXCItXVwiKS5sZW5ndGh8fHEucHVzaChcIn49XCIpLGEucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aHx8cS5wdXNoKFwiOmNoZWNrZWRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiYSNcIit1K1wiKypcIikubGVuZ3RofHxxLnB1c2goXCIuIy4rWyt+XVwiKX0pLGlhKGZ1bmN0aW9uKGEpe3ZhciBiPW4uY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Iuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiaGlkZGVuXCIpLGEuYXBwZW5kQ2hpbGQoYikuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiRFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGgmJnEucHVzaChcIm5hbWVcIitMK1wiKlsqXiR8IX5dPz1cIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RofHxxLnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIikscS5wdXNoKFwiLC4qOlwiKX0pKSwoYy5tYXRjaGVzU2VsZWN0b3I9Wi50ZXN0KHM9by5tYXRjaGVzfHxvLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8by5tb3pNYXRjaGVzU2VsZWN0b3J8fG8ub01hdGNoZXNTZWxlY3Rvcnx8by5tc01hdGNoZXNTZWxlY3RvcikpJiZpYShmdW5jdGlvbihhKXtjLmRpc2Nvbm5lY3RlZE1hdGNoPXMuY2FsbChhLFwiZGl2XCIpLHMuY2FsbChhLFwiW3MhPScnXTp4XCIpLHIucHVzaChcIiE9XCIsTyl9KSxxPXEubGVuZ3RoJiZuZXcgUmVnRXhwKHEuam9pbihcInxcIikpLHI9ci5sZW5ndGgmJm5ldyBSZWdFeHAoci5qb2luKFwifFwiKSksYj1aLnRlc3Qoby5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiksdD1ifHxaLnRlc3Qoby5jb250YWlucyk/ZnVuY3Rpb24oYSxiKXt2YXIgYz05PT09YS5ub2RlVHlwZT9hLmRvY3VtZW50RWxlbWVudDphLGQ9YiYmYi5wYXJlbnROb2RlO3JldHVybiBhPT09ZHx8ISghZHx8MSE9PWQubm9kZVR5cGV8fCEoYy5jb250YWlucz9jLmNvbnRhaW5zKGQpOmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJjE2JmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZCkpKX06ZnVuY3Rpb24oYSxiKXtpZihiKXdoaWxlKGI9Yi5wYXJlbnROb2RlKWlmKGI9PT1hKXJldHVybiEwO3JldHVybiExfSxCPWI/ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gbD0hMCwwO3ZhciBkPSFhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uLSFiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO3JldHVybiBkP2Q6KGQ9KGEub3duZXJEb2N1bWVudHx8YSk9PT0oYi5vd25lckRvY3VtZW50fHxiKT9hLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpOjEsMSZkfHwhYy5zb3J0RGV0YWNoZWQmJmIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYSk9PT1kP2E9PT1ufHxhLm93bmVyRG9jdW1lbnQ9PT12JiZ0KHYsYSk/LTE6Yj09PW58fGIub3duZXJEb2N1bWVudD09PXYmJnQodixiKT8xOms/SihrLGEpLUooayxiKTowOjQmZD8tMToxKX06ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gbD0hMCwwO3ZhciBjLGQ9MCxlPWEucGFyZW50Tm9kZSxmPWIucGFyZW50Tm9kZSxnPVthXSxoPVtiXTtpZighZXx8IWYpcmV0dXJuIGE9PT1uPy0xOmI9PT1uPzE6ZT8tMTpmPzE6az9KKGssYSktSihrLGIpOjA7aWYoZT09PWYpcmV0dXJuIGthKGEsYik7Yz1hO3doaWxlKGM9Yy5wYXJlbnROb2RlKWcudW5zaGlmdChjKTtjPWI7d2hpbGUoYz1jLnBhcmVudE5vZGUpaC51bnNoaWZ0KGMpO3doaWxlKGdbZF09PT1oW2RdKWQrKztyZXR1cm4gZD9rYShnW2RdLGhbZF0pOmdbZF09PT12Py0xOmhbZF09PT12PzE6MH0sbik6bn0sZmEubWF0Y2hlcz1mdW5jdGlvbihhLGIpe3JldHVybiBmYShhLG51bGwsbnVsbCxiKX0sZmEubWF0Y2hlc1NlbGVjdG9yPWZ1bmN0aW9uKGEsYil7aWYoKGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpLGI9Yi5yZXBsYWNlKFQsXCI9JyQxJ11cIiksYy5tYXRjaGVzU2VsZWN0b3ImJnAmJiFBW2IrXCIgXCJdJiYoIXJ8fCFyLnRlc3QoYikpJiYoIXF8fCFxLnRlc3QoYikpKXRyeXt2YXIgZD1zLmNhbGwoYSxiKTtpZihkfHxjLmRpc2Nvbm5lY3RlZE1hdGNofHxhLmRvY3VtZW50JiYxMSE9PWEuZG9jdW1lbnQubm9kZVR5cGUpcmV0dXJuIGR9Y2F0Y2goZSl7fXJldHVybiBmYShiLG4sbnVsbCxbYV0pLmxlbmd0aD4wfSxmYS5jb250YWlucz1mdW5jdGlvbihhLGIpe3JldHVybihhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKSx0KGEsYil9LGZhLmF0dHI9ZnVuY3Rpb24oYSxiKXsoYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSk7dmFyIGU9ZC5hdHRySGFuZGxlW2IudG9Mb3dlckNhc2UoKV0sZj1lJiZELmNhbGwoZC5hdHRySGFuZGxlLGIudG9Mb3dlckNhc2UoKSk/ZShhLGIsIXApOnZvaWQgMDtyZXR1cm4gdm9pZCAwIT09Zj9mOmMuYXR0cmlidXRlc3x8IXA/YS5nZXRBdHRyaWJ1dGUoYik6KGY9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpKSYmZi5zcGVjaWZpZWQ/Zi52YWx1ZTpudWxsfSxmYS5lcnJvcj1mdW5jdGlvbihhKXt0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIithKX0sZmEudW5pcXVlU29ydD1mdW5jdGlvbihhKXt2YXIgYixkPVtdLGU9MCxmPTA7aWYobD0hYy5kZXRlY3REdXBsaWNhdGVzLGs9IWMuc29ydFN0YWJsZSYmYS5zbGljZSgwKSxhLnNvcnQoQiksbCl7d2hpbGUoYj1hW2YrK10pYj09PWFbZl0mJihlPWQucHVzaChmKSk7d2hpbGUoZS0tKWEuc3BsaWNlKGRbZV0sMSl9cmV0dXJuIGs9bnVsbCxhfSxlPWZhLmdldFRleHQ9ZnVuY3Rpb24oYSl7dmFyIGIsYz1cIlwiLGQ9MCxmPWEubm9kZVR5cGU7aWYoZil7aWYoMT09PWZ8fDk9PT1mfHwxMT09PWYpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhLnRleHRDb250ZW50KXJldHVybiBhLnRleHRDb250ZW50O2ZvcihhPWEuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZyljKz1lKGEpfWVsc2UgaWYoMz09PWZ8fDQ9PT1mKXJldHVybiBhLm5vZGVWYWx1ZX1lbHNlIHdoaWxlKGI9YVtkKytdKWMrPWUoYik7cmV0dXJuIGN9LGQ9ZmEuc2VsZWN0b3JzPXtjYWNoZUxlbmd0aDo1MCxjcmVhdGVQc2V1ZG86aGEsbWF0Y2g6VyxhdHRySGFuZGxlOnt9LGZpbmQ6e30scmVsYXRpdmU6e1wiPlwiOntkaXI6XCJwYXJlbnROb2RlXCIsZmlyc3Q6ITB9LFwiIFwiOntkaXI6XCJwYXJlbnROb2RlXCJ9LFwiK1wiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIixmaXJzdDohMH0sXCJ+XCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wifX0scHJlRmlsdGVyOntBVFRSOmZ1bmN0aW9uKGEpe3JldHVybiBhWzFdPWFbMV0ucmVwbGFjZShiYSxjYSksYVszXT0oYVszXXx8YVs0XXx8YVs1XXx8XCJcIikucmVwbGFjZShiYSxjYSksXCJ+PVwiPT09YVsyXSYmKGFbM109XCIgXCIrYVszXStcIiBcIiksYS5zbGljZSgwLDQpfSxDSElMRDpmdW5jdGlvbihhKXtyZXR1cm4gYVsxXT1hWzFdLnRvTG93ZXJDYXNlKCksXCJudGhcIj09PWFbMV0uc2xpY2UoMCwzKT8oYVszXXx8ZmEuZXJyb3IoYVswXSksYVs0XT0rKGFbNF0/YVs1XSsoYVs2XXx8MSk6MiooXCJldmVuXCI9PT1hWzNdfHxcIm9kZFwiPT09YVszXSkpLGFbNV09KyhhWzddK2FbOF18fFwib2RkXCI9PT1hWzNdKSk6YVszXSYmZmEuZXJyb3IoYVswXSksYX0sUFNFVURPOmZ1bmN0aW9uKGEpe3ZhciBiLGM9IWFbNl0mJmFbMl07cmV0dXJuIFcuQ0hJTEQudGVzdChhWzBdKT9udWxsOihhWzNdP2FbMl09YVs0XXx8YVs1XXx8XCJcIjpjJiZVLnRlc3QoYykmJihiPWcoYywhMCkpJiYoYj1jLmluZGV4T2YoXCIpXCIsYy5sZW5ndGgtYiktYy5sZW5ndGgpJiYoYVswXT1hWzBdLnNsaWNlKDAsYiksYVsyXT1jLnNsaWNlKDAsYikpLGEuc2xpY2UoMCwzKSl9fSxmaWx0ZXI6e1RBRzpmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoYmEsY2EpLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCIqXCI9PT1hP2Z1bmN0aW9uKCl7cmV0dXJuITB9OmZ1bmN0aW9uKGEpe3JldHVybiBhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1ifX0sQ0xBU1M6ZnVuY3Rpb24oYSl7dmFyIGI9eVthK1wiIFwiXTtyZXR1cm4gYnx8KGI9bmV3IFJlZ0V4cChcIihefFwiK0wrXCIpXCIrYStcIihcIitMK1wifCQpXCIpKSYmeShhLGZ1bmN0aW9uKGEpe3JldHVybiBiLnRlc3QoXCJzdHJpbmdcIj09dHlwZW9mIGEuY2xhc3NOYW1lJiZhLmNsYXNzTmFtZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0QXR0cmlidXRlJiZhLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKX0pfSxBVFRSOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZCl7dmFyIGU9ZmEuYXR0cihkLGEpO3JldHVybiBudWxsPT1lP1wiIT1cIj09PWI6Yj8oZSs9XCJcIixcIj1cIj09PWI/ZT09PWM6XCIhPVwiPT09Yj9lIT09YzpcIl49XCI9PT1iP2MmJjA9PT1lLmluZGV4T2YoYyk6XCIqPVwiPT09Yj9jJiZlLmluZGV4T2YoYyk+LTE6XCIkPVwiPT09Yj9jJiZlLnNsaWNlKC1jLmxlbmd0aCk9PT1jOlwifj1cIj09PWI/KFwiIFwiK2UucmVwbGFjZShQLFwiIFwiKStcIiBcIikuaW5kZXhPZihjKT4tMTpcInw9XCI9PT1iP2U9PT1jfHxlLnNsaWNlKDAsYy5sZW5ndGgrMSk9PT1jK1wiLVwiOiExKTohMH19LENISUxEOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9XCJudGhcIiE9PWEuc2xpY2UoMCwzKSxnPVwibGFzdFwiIT09YS5zbGljZSgtNCksaD1cIm9mLXR5cGVcIj09PWI7cmV0dXJuIDE9PT1kJiYwPT09ZT9mdW5jdGlvbihhKXtyZXR1cm4hIWEucGFyZW50Tm9kZX06ZnVuY3Rpb24oYixjLGkpe3ZhciBqLGssbCxtLG4sbyxwPWYhPT1nP1wibmV4dFNpYmxpbmdcIjpcInByZXZpb3VzU2libGluZ1wiLHE9Yi5wYXJlbnROb2RlLHI9aCYmYi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLHM9IWkmJiFoLHQ9ITE7aWYocSl7aWYoZil7d2hpbGUocCl7bT1iO3doaWxlKG09bVtwXSlpZihoP20ubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXI6MT09PW0ubm9kZVR5cGUpcmV0dXJuITE7bz1wPVwib25seVwiPT09YSYmIW8mJlwibmV4dFNpYmxpbmdcIn1yZXR1cm4hMH1pZihvPVtnP3EuZmlyc3RDaGlsZDpxLmxhc3RDaGlsZF0sZyYmcyl7bT1xLGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGo9a1thXXx8W10sbj1qWzBdPT09dyYmalsxXSx0PW4mJmpbMl0sbT1uJiZxLmNoaWxkTm9kZXNbbl07d2hpbGUobT0rK24mJm0mJm1bcF18fCh0PW49MCl8fG8ucG9wKCkpaWYoMT09PW0ubm9kZVR5cGUmJisrdCYmbT09PWIpe2tbYV09W3csbix0XTticmVha319ZWxzZSBpZihzJiYobT1iLGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGo9a1thXXx8W10sbj1qWzBdPT09dyYmalsxXSx0PW4pLHQ9PT0hMSl3aGlsZShtPSsrbiYmbSYmbVtwXXx8KHQ9bj0wKXx8by5wb3AoKSlpZigoaD9tLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1yOjE9PT1tLm5vZGVUeXBlKSYmKyt0JiYocyYmKGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGtbYV09W3csdF0pLG09PT1iKSlicmVhaztyZXR1cm4gdC09ZSx0PT09ZHx8dCVkPT09MCYmdC9kPj0wfX19LFBTRVVETzpmdW5jdGlvbihhLGIpe3ZhciBjLGU9ZC5wc2V1ZG9zW2FdfHxkLnNldEZpbHRlcnNbYS50b0xvd2VyQ2FzZSgpXXx8ZmEuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiK2EpO3JldHVybiBlW3VdP2UoYik6ZS5sZW5ndGg+MT8oYz1bYSxhLFwiXCIsYl0sZC5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KGEudG9Mb3dlckNhc2UoKSk/aGEoZnVuY3Rpb24oYSxjKXt2YXIgZCxmPWUoYSxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSlkPUooYSxmW2ddKSxhW2RdPSEoY1tkXT1mW2ddKX0pOmZ1bmN0aW9uKGEpe3JldHVybiBlKGEsMCxjKX0pOmV9fSxwc2V1ZG9zOntub3Q6aGEoZnVuY3Rpb24oYSl7dmFyIGI9W10sYz1bXSxkPWgoYS5yZXBsYWNlKFEsXCIkMVwiKSk7cmV0dXJuIGRbdV0/aGEoZnVuY3Rpb24oYSxiLGMsZSl7dmFyIGYsZz1kKGEsbnVsbCxlLFtdKSxoPWEubGVuZ3RoO3doaWxlKGgtLSkoZj1nW2hdKSYmKGFbaF09IShiW2hdPWYpKX0pOmZ1bmN0aW9uKGEsZSxmKXtyZXR1cm4gYlswXT1hLGQoYixudWxsLGYsYyksYlswXT1udWxsLCFjLnBvcCgpfX0pLGhhczpoYShmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIGZhKGEsYikubGVuZ3RoPjB9fSksY29udGFpbnM6aGEoZnVuY3Rpb24oYSl7cmV0dXJuIGE9YS5yZXBsYWNlKGJhLGNhKSxmdW5jdGlvbihiKXtyZXR1cm4oYi50ZXh0Q29udGVudHx8Yi5pbm5lclRleHR8fGUoYikpLmluZGV4T2YoYSk+LTF9fSksbGFuZzpoYShmdW5jdGlvbihhKXtyZXR1cm4gVi50ZXN0KGF8fFwiXCIpfHxmYS5lcnJvcihcInVuc3VwcG9ydGVkIGxhbmc6IFwiK2EpLGE9YS5yZXBsYWNlKGJhLGNhKS50b0xvd2VyQ2FzZSgpLGZ1bmN0aW9uKGIpe3ZhciBjO2RvIGlmKGM9cD9iLmxhbmc6Yi5nZXRBdHRyaWJ1dGUoXCJ4bWw6bGFuZ1wiKXx8Yi5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKXJldHVybiBjPWMudG9Mb3dlckNhc2UoKSxjPT09YXx8MD09PWMuaW5kZXhPZihhK1wiLVwiKTt3aGlsZSgoYj1iLnBhcmVudE5vZGUpJiYxPT09Yi5ub2RlVHlwZSk7cmV0dXJuITF9fSksdGFyZ2V0OmZ1bmN0aW9uKGIpe3ZhciBjPWEubG9jYXRpb24mJmEubG9jYXRpb24uaGFzaDtyZXR1cm4gYyYmYy5zbGljZSgxKT09PWIuaWR9LHJvb3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1vfSxmb2N1czpmdW5jdGlvbihhKXtyZXR1cm4gYT09PW4uYWN0aXZlRWxlbWVudCYmKCFuLmhhc0ZvY3VzfHxuLmhhc0ZvY3VzKCkpJiYhIShhLnR5cGV8fGEuaHJlZnx8fmEudGFiSW5kZXgpfSxlbmFibGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLmRpc2FibGVkPT09ITF9LGRpc2FibGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLmRpc2FibGVkPT09ITB9LGNoZWNrZWQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWImJiEhYS5jaGVja2VkfHxcIm9wdGlvblwiPT09YiYmISFhLnNlbGVjdGVkfSxzZWxlY3RlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5wYXJlbnROb2RlJiZhLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxhLnNlbGVjdGVkPT09ITB9LGVtcHR5OmZ1bmN0aW9uKGEpe2ZvcihhPWEuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZylpZihhLm5vZGVUeXBlPDYpcmV0dXJuITE7cmV0dXJuITB9LHBhcmVudDpmdW5jdGlvbihhKXtyZXR1cm4hZC5wc2V1ZG9zLmVtcHR5KGEpfSxoZWFkZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIFkudGVzdChhLm5vZGVOYW1lKX0saW5wdXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIFgudGVzdChhLm5vZGVOYW1lKX0sYnV0dG9uOmZ1bmN0aW9uKGEpe3ZhciBiPWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iJiZcImJ1dHRvblwiPT09YS50eXBlfHxcImJ1dHRvblwiPT09Yn0sdGV4dDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm5cImlucHV0XCI9PT1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJlwidGV4dFwiPT09YS50eXBlJiYobnVsbD09KGI9YS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKXx8XCJ0ZXh0XCI9PT1iLnRvTG93ZXJDYXNlKCkpfSxmaXJzdDpuYShmdW5jdGlvbigpe3JldHVyblswXX0pLGxhc3Q6bmEoZnVuY3Rpb24oYSxiKXtyZXR1cm5bYi0xXX0pLGVxOm5hKGZ1bmN0aW9uKGEsYixjKXtyZXR1cm5bMD5jP2MrYjpjXX0pLGV2ZW46bmEoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MDtiPmM7Yys9MilhLnB1c2goYyk7cmV0dXJuIGF9KSxvZGQ6bmEoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MTtiPmM7Yys9MilhLnB1c2goYyk7cmV0dXJuIGF9KSxsdDpuYShmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTA+Yz9jK2I6YzstLWQ+PTA7KWEucHVzaChkKTtyZXR1cm4gYX0pLGd0Om5hKGZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9MD5jP2MrYjpjOysrZDxiOylhLnB1c2goZCk7cmV0dXJuIGF9KX19LGQucHNldWRvcy5udGg9ZC5wc2V1ZG9zLmVxO2ZvcihiIGlue3JhZGlvOiEwLGNoZWNrYm94OiEwLGZpbGU6ITAscGFzc3dvcmQ6ITAsaW1hZ2U6ITB9KWQucHNldWRvc1tiXT1sYShiKTtmb3IoYiBpbntzdWJtaXQ6ITAscmVzZXQ6ITB9KWQucHNldWRvc1tiXT1tYShiKTtmdW5jdGlvbiBwYSgpe31wYS5wcm90b3R5cGU9ZC5maWx0ZXJzPWQucHNldWRvcyxkLnNldEZpbHRlcnM9bmV3IHBhLGc9ZmEudG9rZW5pemU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxlLGYsZyxoLGksaixrPXpbYStcIiBcIl07aWYoaylyZXR1cm4gYj8wOmsuc2xpY2UoMCk7aD1hLGk9W10saj1kLnByZUZpbHRlcjt3aGlsZShoKXsoIWN8fChlPVIuZXhlYyhoKSkpJiYoZSYmKGg9aC5zbGljZShlWzBdLmxlbmd0aCl8fGgpLGkucHVzaChmPVtdKSksYz0hMSwoZT1TLmV4ZWMoaCkpJiYoYz1lLnNoaWZ0KCksZi5wdXNoKHt2YWx1ZTpjLHR5cGU6ZVswXS5yZXBsYWNlKFEsXCIgXCIpfSksaD1oLnNsaWNlKGMubGVuZ3RoKSk7Zm9yKGcgaW4gZC5maWx0ZXIpIShlPVdbZ10uZXhlYyhoKSl8fGpbZ10mJiEoZT1qW2ddKGUpKXx8KGM9ZS5zaGlmdCgpLGYucHVzaCh7dmFsdWU6Yyx0eXBlOmcsbWF0Y2hlczplfSksaD1oLnNsaWNlKGMubGVuZ3RoKSk7aWYoIWMpYnJlYWt9cmV0dXJuIGI/aC5sZW5ndGg6aD9mYS5lcnJvcihhKTp6KGEsaSkuc2xpY2UoMCl9O2Z1bmN0aW9uIHFhKGEpe2Zvcih2YXIgYj0wLGM9YS5sZW5ndGgsZD1cIlwiO2M+YjtiKyspZCs9YVtiXS52YWx1ZTtyZXR1cm4gZH1mdW5jdGlvbiByYShhLGIsYyl7dmFyIGQ9Yi5kaXIsZT1jJiZcInBhcmVudE5vZGVcIj09PWQsZj14Kys7cmV0dXJuIGIuZmlyc3Q/ZnVuY3Rpb24oYixjLGYpe3doaWxlKGI9YltkXSlpZigxPT09Yi5ub2RlVHlwZXx8ZSlyZXR1cm4gYShiLGMsZil9OmZ1bmN0aW9uKGIsYyxnKXt2YXIgaCxpLGosaz1bdyxmXTtpZihnKXt3aGlsZShiPWJbZF0paWYoKDE9PT1iLm5vZGVUeXBlfHxlKSYmYShiLGMsZykpcmV0dXJuITB9ZWxzZSB3aGlsZShiPWJbZF0paWYoMT09PWIubm9kZVR5cGV8fGUpe2lmKGo9Ylt1XXx8KGJbdV09e30pLGk9altiLnVuaXF1ZUlEXXx8KGpbYi51bmlxdWVJRF09e30pLChoPWlbZF0pJiZoWzBdPT09dyYmaFsxXT09PWYpcmV0dXJuIGtbMl09aFsyXTtpZihpW2RdPWssa1syXT1hKGIsYyxnKSlyZXR1cm4hMH19fWZ1bmN0aW9uIHNhKGEpe3JldHVybiBhLmxlbmd0aD4xP2Z1bmN0aW9uKGIsYyxkKXt2YXIgZT1hLmxlbmd0aDt3aGlsZShlLS0paWYoIWFbZV0oYixjLGQpKXJldHVybiExO3JldHVybiEwfTphWzBdfWZ1bmN0aW9uIHRhKGEsYixjKXtmb3IodmFyIGQ9MCxlPWIubGVuZ3RoO2U+ZDtkKyspZmEoYSxiW2RdLGMpO3JldHVybiBjfWZ1bmN0aW9uIHVhKGEsYixjLGQsZSl7Zm9yKHZhciBmLGc9W10saD0wLGk9YS5sZW5ndGgsaj1udWxsIT1iO2k+aDtoKyspKGY9YVtoXSkmJighY3x8YyhmLGQsZSkpJiYoZy5wdXNoKGYpLGomJmIucHVzaChoKSk7cmV0dXJuIGd9ZnVuY3Rpb24gdmEoYSxiLGMsZCxlLGYpe3JldHVybiBkJiYhZFt1XSYmKGQ9dmEoZCkpLGUmJiFlW3VdJiYoZT12YShlLGYpKSxoYShmdW5jdGlvbihmLGcsaCxpKXt2YXIgaixrLGwsbT1bXSxuPVtdLG89Zy5sZW5ndGgscD1mfHx0YShifHxcIipcIixoLm5vZGVUeXBlP1toXTpoLFtdKSxxPSFhfHwhZiYmYj9wOnVhKHAsbSxhLGgsaSkscj1jP2V8fChmP2E6b3x8ZCk/W106ZzpxO2lmKGMmJmMocSxyLGgsaSksZCl7aj11YShyLG4pLGQoaixbXSxoLGkpLGs9ai5sZW5ndGg7d2hpbGUoay0tKShsPWpba10pJiYocltuW2tdXT0hKHFbbltrXV09bCkpfWlmKGYpe2lmKGV8fGEpe2lmKGUpe2o9W10saz1yLmxlbmd0aDt3aGlsZShrLS0pKGw9cltrXSkmJmoucHVzaChxW2tdPWwpO2UobnVsbCxyPVtdLGosaSl9az1yLmxlbmd0aDt3aGlsZShrLS0pKGw9cltrXSkmJihqPWU/SihmLGwpOm1ba10pPi0xJiYoZltqXT0hKGdbal09bCkpfX1lbHNlIHI9dWEocj09PWc/ci5zcGxpY2UobyxyLmxlbmd0aCk6ciksZT9lKG51bGwsZyxyLGkpOkguYXBwbHkoZyxyKX0pfWZ1bmN0aW9uIHdhKGEpe2Zvcih2YXIgYixjLGUsZj1hLmxlbmd0aCxnPWQucmVsYXRpdmVbYVswXS50eXBlXSxoPWd8fGQucmVsYXRpdmVbXCIgXCJdLGk9Zz8xOjAsaz1yYShmdW5jdGlvbihhKXtyZXR1cm4gYT09PWJ9LGgsITApLGw9cmEoZnVuY3Rpb24oYSl7cmV0dXJuIEooYixhKT4tMX0saCwhMCksbT1bZnVuY3Rpb24oYSxjLGQpe3ZhciBlPSFnJiYoZHx8YyE9PWopfHwoKGI9Yykubm9kZVR5cGU/ayhhLGMsZCk6bChhLGMsZCkpO3JldHVybiBiPW51bGwsZX1dO2Y+aTtpKyspaWYoYz1kLnJlbGF0aXZlW2FbaV0udHlwZV0pbT1bcmEoc2EobSksYyldO2Vsc2V7aWYoYz1kLmZpbHRlclthW2ldLnR5cGVdLmFwcGx5KG51bGwsYVtpXS5tYXRjaGVzKSxjW3VdKXtmb3IoZT0rK2k7Zj5lO2UrKylpZihkLnJlbGF0aXZlW2FbZV0udHlwZV0pYnJlYWs7cmV0dXJuIHZhKGk+MSYmc2EobSksaT4xJiZxYShhLnNsaWNlKDAsaS0xKS5jb25jYXQoe3ZhbHVlOlwiIFwiPT09YVtpLTJdLnR5cGU/XCIqXCI6XCJcIn0pKS5yZXBsYWNlKFEsXCIkMVwiKSxjLGU+aSYmd2EoYS5zbGljZShpLGUpKSxmPmUmJndhKGE9YS5zbGljZShlKSksZj5lJiZxYShhKSl9bS5wdXNoKGMpfXJldHVybiBzYShtKX1mdW5jdGlvbiB4YShhLGIpe3ZhciBjPWIubGVuZ3RoPjAsZT1hLmxlbmd0aD4wLGY9ZnVuY3Rpb24oZixnLGgsaSxrKXt2YXIgbCxvLHEscj0wLHM9XCIwXCIsdD1mJiZbXSx1PVtdLHY9aix4PWZ8fGUmJmQuZmluZC5UQUcoXCIqXCIsaykseT13Kz1udWxsPT12PzE6TWF0aC5yYW5kb20oKXx8LjEsej14Lmxlbmd0aDtmb3IoayYmKGo9Zz09PW58fGd8fGspO3MhPT16JiZudWxsIT0obD14W3NdKTtzKyspe2lmKGUmJmwpe289MCxnfHxsLm93bmVyRG9jdW1lbnQ9PT1ufHwobShsKSxoPSFwKTt3aGlsZShxPWFbbysrXSlpZihxKGwsZ3x8bixoKSl7aS5wdXNoKGwpO2JyZWFrfWsmJih3PXkpfWMmJigobD0hcSYmbCkmJnItLSxmJiZ0LnB1c2gobCkpfWlmKHIrPXMsYyYmcyE9PXIpe289MDt3aGlsZShxPWJbbysrXSlxKHQsdSxnLGgpO2lmKGYpe2lmKHI+MCl3aGlsZShzLS0pdFtzXXx8dVtzXXx8KHVbc109Ri5jYWxsKGkpKTt1PXVhKHUpfUguYXBwbHkoaSx1KSxrJiYhZiYmdS5sZW5ndGg+MCYmcitiLmxlbmd0aD4xJiZmYS51bmlxdWVTb3J0KGkpfXJldHVybiBrJiYodz15LGo9diksdH07cmV0dXJuIGM/aGEoZik6Zn1yZXR1cm4gaD1mYS5jb21waWxlPWZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPVtdLGY9QVthK1wiIFwiXTtpZighZil7Ynx8KGI9ZyhhKSksYz1iLmxlbmd0aDt3aGlsZShjLS0pZj13YShiW2NdKSxmW3VdP2QucHVzaChmKTplLnB1c2goZik7Zj1BKGEseGEoZSxkKSksZi5zZWxlY3Rvcj1hfXJldHVybiBmfSxpPWZhLnNlbGVjdD1mdW5jdGlvbihhLGIsZSxmKXt2YXIgaSxqLGssbCxtLG49XCJmdW5jdGlvblwiPT10eXBlb2YgYSYmYSxvPSFmJiZnKGE9bi5zZWxlY3Rvcnx8YSk7aWYoZT1lfHxbXSwxPT09by5sZW5ndGgpe2lmKGo9b1swXT1vWzBdLnNsaWNlKDApLGoubGVuZ3RoPjImJlwiSURcIj09PShrPWpbMF0pLnR5cGUmJmMuZ2V0QnlJZCYmOT09PWIubm9kZVR5cGUmJnAmJmQucmVsYXRpdmVbalsxXS50eXBlXSl7aWYoYj0oZC5maW5kLklEKGsubWF0Y2hlc1swXS5yZXBsYWNlKGJhLGNhKSxiKXx8W10pWzBdLCFiKXJldHVybiBlO24mJihiPWIucGFyZW50Tm9kZSksYT1hLnNsaWNlKGouc2hpZnQoKS52YWx1ZS5sZW5ndGgpfWk9Vy5uZWVkc0NvbnRleHQudGVzdChhKT8wOmoubGVuZ3RoO3doaWxlKGktLSl7aWYoaz1qW2ldLGQucmVsYXRpdmVbbD1rLnR5cGVdKWJyZWFrO2lmKChtPWQuZmluZFtsXSkmJihmPW0oay5tYXRjaGVzWzBdLnJlcGxhY2UoYmEsY2EpLF8udGVzdChqWzBdLnR5cGUpJiZvYShiLnBhcmVudE5vZGUpfHxiKSkpe2lmKGouc3BsaWNlKGksMSksYT1mLmxlbmd0aCYmcWEoaiksIWEpcmV0dXJuIEguYXBwbHkoZSxmKSxlO2JyZWFrfX19cmV0dXJuKG58fGgoYSxvKSkoZixiLCFwLGUsIWJ8fF8udGVzdChhKSYmb2EoYi5wYXJlbnROb2RlKXx8YiksZX0sYy5zb3J0U3RhYmxlPXUuc3BsaXQoXCJcIikuc29ydChCKS5qb2luKFwiXCIpPT09dSxjLmRldGVjdER1cGxpY2F0ZXM9ISFsLG0oKSxjLnNvcnREZXRhY2hlZD1pYShmdW5jdGlvbihhKXtyZXR1cm4gMSZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG4uY3JlYXRlRWxlbWVudChcImRpdlwiKSl9KSxpYShmdW5jdGlvbihhKXtyZXR1cm4gYS5pbm5lckhUTUw9XCI8YSBocmVmPScjJz48L2E+XCIsXCIjXCI9PT1hLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKX0pfHxqYShcInR5cGV8aHJlZnxoZWlnaHR8d2lkdGhcIixmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGM/dm9pZCAwOmEuZ2V0QXR0cmlidXRlKGIsXCJ0eXBlXCI9PT1iLnRvTG93ZXJDYXNlKCk/MToyKX0pLGMuYXR0cmlidXRlcyYmaWEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGlucHV0Lz5cIixhLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiKSxcIlwiPT09YS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfSl8fGphKFwidmFsdWVcIixmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGN8fFwiaW5wdXRcIiE9PWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT92b2lkIDA6YS5kZWZhdWx0VmFsdWV9KSxpYShmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YS5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKX0pfHxqYShLLGZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gYz92b2lkIDA6YVtiXT09PSEwP2IudG9Mb3dlckNhc2UoKTooZD1hLmdldEF0dHJpYnV0ZU5vZGUoYikpJiZkLnNwZWNpZmllZD9kLnZhbHVlOm51bGx9KSxmYX0oYSk7bi5maW5kPXQsbi5leHByPXQuc2VsZWN0b3JzLG4uZXhwcltcIjpcIl09bi5leHByLnBzZXVkb3Msbi51bmlxdWVTb3J0PW4udW5pcXVlPXQudW5pcXVlU29ydCxuLnRleHQ9dC5nZXRUZXh0LG4uaXNYTUxEb2M9dC5pc1hNTCxuLmNvbnRhaW5zPXQuY29udGFpbnM7dmFyIHU9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVtdLGU9dm9pZCAwIT09Yzt3aGlsZSgoYT1hW2JdKSYmOSE9PWEubm9kZVR5cGUpaWYoMT09PWEubm9kZVR5cGUpe2lmKGUmJm4oYSkuaXMoYykpYnJlYWs7ZC5wdXNoKGEpfXJldHVybiBkfSx2PWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPVtdO2E7YT1hLm5leHRTaWJsaW5nKTE9PT1hLm5vZGVUeXBlJiZhIT09YiYmYy5wdXNoKGEpO3JldHVybiBjfSx3PW4uZXhwci5tYXRjaC5uZWVkc0NvbnRleHQseD0vXjwoW1xcdy1dKylcXHMqXFwvPz4oPzo8XFwvXFwxPnwpJC8seT0vXi5bXjojXFxbXFwuLF0qJC87ZnVuY3Rpb24geihhLGIsYyl7aWYobi5pc0Z1bmN0aW9uKGIpKXJldHVybiBuLmdyZXAoYSxmdW5jdGlvbihhLGQpe3JldHVybiEhYi5jYWxsKGEsZCxhKSE9PWN9KTtpZihiLm5vZGVUeXBlKXJldHVybiBuLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gYT09PWIhPT1jfSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpe2lmKHkudGVzdChiKSlyZXR1cm4gbi5maWx0ZXIoYixhLGMpO2I9bi5maWx0ZXIoYixhKX1yZXR1cm4gbi5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGguY2FsbChiLGEpPi0xIT09Y30pfW4uZmlsdGVyPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1iWzBdO3JldHVybiBjJiYoYT1cIjpub3QoXCIrYStcIilcIiksMT09PWIubGVuZ3RoJiYxPT09ZC5ub2RlVHlwZT9uLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGQsYSk/W2RdOltdOm4uZmluZC5tYXRjaGVzKGEsbi5ncmVwKGIsZnVuY3Rpb24oYSl7cmV0dXJuIDE9PT1hLm5vZGVUeXBlfSkpfSxuLmZuLmV4dGVuZCh7ZmluZDpmdW5jdGlvbihhKXt2YXIgYixjPXRoaXMubGVuZ3RoLGQ9W10sZT10aGlzO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybiB0aGlzLnB1c2hTdGFjayhuKGEpLmZpbHRlcihmdW5jdGlvbigpe2ZvcihiPTA7Yz5iO2IrKylpZihuLmNvbnRhaW5zKGVbYl0sdGhpcykpcmV0dXJuITB9KSk7Zm9yKGI9MDtjPmI7YisrKW4uZmluZChhLGVbYl0sZCk7cmV0dXJuIGQ9dGhpcy5wdXNoU3RhY2soYz4xP24udW5pcXVlKGQpOmQpLGQuc2VsZWN0b3I9dGhpcy5zZWxlY3Rvcj90aGlzLnNlbGVjdG9yK1wiIFwiK2E6YSxkfSxmaWx0ZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHoodGhpcyxhfHxbXSwhMSkpfSxub3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHoodGhpcyxhfHxbXSwhMCkpfSxpczpmdW5jdGlvbihhKXtyZXR1cm4hIXoodGhpcyxcInN0cmluZ1wiPT10eXBlb2YgYSYmdy50ZXN0KGEpP24oYSk6YXx8W10sITEpLmxlbmd0aH19KTt2YXIgQSxCPS9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKnwjKFtcXHctXSopKSQvLEM9bi5mbi5pbml0PWZ1bmN0aW9uKGEsYixjKXt2YXIgZSxmO2lmKCFhKXJldHVybiB0aGlzO2lmKGM9Y3x8QSxcInN0cmluZ1wiPT10eXBlb2YgYSl7aWYoZT1cIjxcIj09PWFbMF0mJlwiPlwiPT09YVthLmxlbmd0aC0xXSYmYS5sZW5ndGg+PTM/W251bGwsYSxudWxsXTpCLmV4ZWMoYSksIWV8fCFlWzFdJiZiKXJldHVybiFifHxiLmpxdWVyeT8oYnx8YykuZmluZChhKTp0aGlzLmNvbnN0cnVjdG9yKGIpLmZpbmQoYSk7aWYoZVsxXSl7aWYoYj1iIGluc3RhbmNlb2Ygbj9iWzBdOmIsbi5tZXJnZSh0aGlzLG4ucGFyc2VIVE1MKGVbMV0sYiYmYi5ub2RlVHlwZT9iLm93bmVyRG9jdW1lbnR8fGI6ZCwhMCkpLHgudGVzdChlWzFdKSYmbi5pc1BsYWluT2JqZWN0KGIpKWZvcihlIGluIGIpbi5pc0Z1bmN0aW9uKHRoaXNbZV0pP3RoaXNbZV0oYltlXSk6dGhpcy5hdHRyKGUsYltlXSk7cmV0dXJuIHRoaXN9cmV0dXJuIGY9ZC5nZXRFbGVtZW50QnlJZChlWzJdKSxmJiZmLnBhcmVudE5vZGUmJih0aGlzLmxlbmd0aD0xLHRoaXNbMF09ZiksdGhpcy5jb250ZXh0PWQsdGhpcy5zZWxlY3Rvcj1hLHRoaXN9cmV0dXJuIGEubm9kZVR5cGU/KHRoaXMuY29udGV4dD10aGlzWzBdPWEsdGhpcy5sZW5ndGg9MSx0aGlzKTpuLmlzRnVuY3Rpb24oYSk/dm9pZCAwIT09Yy5yZWFkeT9jLnJlYWR5KGEpOmEobik6KHZvaWQgMCE9PWEuc2VsZWN0b3ImJih0aGlzLnNlbGVjdG9yPWEuc2VsZWN0b3IsdGhpcy5jb250ZXh0PWEuY29udGV4dCksbi5tYWtlQXJyYXkoYSx0aGlzKSl9O0MucHJvdG90eXBlPW4uZm4sQT1uKGQpO3ZhciBEPS9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLEU9e2NoaWxkcmVuOiEwLGNvbnRlbnRzOiEwLG5leHQ6ITAscHJldjohMH07bi5mbi5leHRlbmQoe2hhczpmdW5jdGlvbihhKXt2YXIgYj1uKGEsdGhpcyksYz1iLmxlbmd0aDtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodmFyIGE9MDtjPmE7YSsrKWlmKG4uY29udGFpbnModGhpcyxiW2FdKSlyZXR1cm4hMH0pfSxjbG9zZXN0OmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjLGQ9MCxlPXRoaXMubGVuZ3RoLGY9W10sZz13LnRlc3QoYSl8fFwic3RyaW5nXCIhPXR5cGVvZiBhP24oYSxifHx0aGlzLmNvbnRleHQpOjA7ZT5kO2QrKylmb3IoYz10aGlzW2RdO2MmJmMhPT1iO2M9Yy5wYXJlbnROb2RlKWlmKGMubm9kZVR5cGU8MTEmJihnP2cuaW5kZXgoYyk+LTE6MT09PWMubm9kZVR5cGUmJm4uZmluZC5tYXRjaGVzU2VsZWN0b3IoYyxhKSkpe2YucHVzaChjKTticmVha31yZXR1cm4gdGhpcy5wdXNoU3RhY2soZi5sZW5ndGg+MT9uLnVuaXF1ZVNvcnQoZik6Zil9LGluZGV4OmZ1bmN0aW9uKGEpe3JldHVybiBhP1wic3RyaW5nXCI9PXR5cGVvZiBhP2guY2FsbChuKGEpLHRoaXNbMF0pOmguY2FsbCh0aGlzLGEuanF1ZXJ5P2FbMF06YSk6dGhpc1swXSYmdGhpc1swXS5wYXJlbnROb2RlP3RoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoOi0xfSxhZGQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobi51bmlxdWVTb3J0KG4ubWVyZ2UodGhpcy5nZXQoKSxuKGEsYikpKSl9LGFkZEJhY2s6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuYWRkKG51bGw9PWE/dGhpcy5wcmV2T2JqZWN0OnRoaXMucHJldk9iamVjdC5maWx0ZXIoYSkpfX0pO2Z1bmN0aW9uIEYoYSxiKXt3aGlsZSgoYT1hW2JdKSYmMSE9PWEubm9kZVR5cGUpO3JldHVybiBhfW4uZWFjaCh7cGFyZW50OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtyZXR1cm4gYiYmMTEhPT1iLm5vZGVUeXBlP2I6bnVsbH0scGFyZW50czpmdW5jdGlvbihhKXtyZXR1cm4gdShhLFwicGFyZW50Tm9kZVwiKX0scGFyZW50c1VudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdShhLFwicGFyZW50Tm9kZVwiLGMpfSxuZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBGKGEsXCJuZXh0U2libGluZ1wiKX0scHJldjpmdW5jdGlvbihhKXtyZXR1cm4gRihhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0QWxsOmZ1bmN0aW9uKGEpe3JldHVybiB1KGEsXCJuZXh0U2libGluZ1wiKX0scHJldkFsbDpmdW5jdGlvbihhKXtyZXR1cm4gdShhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB1KGEsXCJuZXh0U2libGluZ1wiLGMpfSxwcmV2VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB1KGEsXCJwcmV2aW91c1NpYmxpbmdcIixjKX0sc2libGluZ3M6ZnVuY3Rpb24oYSl7cmV0dXJuIHYoKGEucGFyZW50Tm9kZXx8e30pLmZpcnN0Q2hpbGQsYSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGEpe3JldHVybiB2KGEuZmlyc3RDaGlsZCl9LGNvbnRlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiBhLmNvbnRlbnREb2N1bWVudHx8bi5tZXJnZShbXSxhLmNoaWxkTm9kZXMpfX0sZnVuY3Rpb24oYSxiKXtuLmZuW2FdPWZ1bmN0aW9uKGMsZCl7dmFyIGU9bi5tYXAodGhpcyxiLGMpO3JldHVyblwiVW50aWxcIiE9PWEuc2xpY2UoLTUpJiYoZD1jKSxkJiZcInN0cmluZ1wiPT10eXBlb2YgZCYmKGU9bi5maWx0ZXIoZCxlKSksdGhpcy5sZW5ndGg+MSYmKEVbYV18fG4udW5pcXVlU29ydChlKSxELnRlc3QoYSkmJmUucmV2ZXJzZSgpKSx0aGlzLnB1c2hTdGFjayhlKX19KTt2YXIgRz0vXFxTKy9nO2Z1bmN0aW9uIEgoYSl7dmFyIGI9e307cmV0dXJuIG4uZWFjaChhLm1hdGNoKEcpfHxbXSxmdW5jdGlvbihhLGMpe2JbY109ITB9KSxifW4uQ2FsbGJhY2tzPWZ1bmN0aW9uKGEpe2E9XCJzdHJpbmdcIj09dHlwZW9mIGE/SChhKTpuLmV4dGVuZCh7fSxhKTt2YXIgYixjLGQsZSxmPVtdLGc9W10saD0tMSxpPWZ1bmN0aW9uKCl7Zm9yKGU9YS5vbmNlLGQ9Yj0hMDtnLmxlbmd0aDtoPS0xKXtjPWcuc2hpZnQoKTt3aGlsZSgrK2g8Zi5sZW5ndGgpZltoXS5hcHBseShjWzBdLGNbMV0pPT09ITEmJmEuc3RvcE9uRmFsc2UmJihoPWYubGVuZ3RoLGM9ITEpfWEubWVtb3J5fHwoYz0hMSksYj0hMSxlJiYoZj1jP1tdOlwiXCIpfSxqPXthZGQ6ZnVuY3Rpb24oKXtyZXR1cm4gZiYmKGMmJiFiJiYoaD1mLmxlbmd0aC0xLGcucHVzaChjKSksZnVuY3Rpb24gZChiKXtuLmVhY2goYixmdW5jdGlvbihiLGMpe24uaXNGdW5jdGlvbihjKT9hLnVuaXF1ZSYmai5oYXMoYyl8fGYucHVzaChjKTpjJiZjLmxlbmd0aCYmXCJzdHJpbmdcIiE9PW4udHlwZShjKSYmZChjKX0pfShhcmd1bWVudHMpLGMmJiFiJiZpKCkpLHRoaXN9LHJlbW92ZTpmdW5jdGlvbigpe3JldHVybiBuLmVhY2goYXJndW1lbnRzLGZ1bmN0aW9uKGEsYil7dmFyIGM7d2hpbGUoKGM9bi5pbkFycmF5KGIsZixjKSk+LTEpZi5zcGxpY2UoYywxKSxoPj1jJiZoLS19KSx0aGlzfSxoYXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/bi5pbkFycmF5KGEsZik+LTE6Zi5sZW5ndGg+MH0sZW1wdHk6ZnVuY3Rpb24oKXtyZXR1cm4gZiYmKGY9W10pLHRoaXN9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gZT1nPVtdLGY9Yz1cIlwiLHRoaXN9LGRpc2FibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIWZ9LGxvY2s6ZnVuY3Rpb24oKXtyZXR1cm4gZT1nPVtdLGN8fChmPWM9XCJcIiksdGhpc30sbG9ja2VkOmZ1bmN0aW9uKCl7cmV0dXJuISFlfSxmaXJlV2l0aDpmdW5jdGlvbihhLGMpe3JldHVybiBlfHwoYz1jfHxbXSxjPVthLGMuc2xpY2U/Yy5zbGljZSgpOmNdLGcucHVzaChjKSxifHxpKCkpLHRoaXN9LGZpcmU6ZnVuY3Rpb24oKXtyZXR1cm4gai5maXJlV2l0aCh0aGlzLGFyZ3VtZW50cyksdGhpc30sZmlyZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWR9fTtyZXR1cm4gan0sbi5leHRlbmQoe0RlZmVycmVkOmZ1bmN0aW9uKGEpe3ZhciBiPVtbXCJyZXNvbHZlXCIsXCJkb25lXCIsbi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxcInJlc29sdmVkXCJdLFtcInJlamVjdFwiLFwiZmFpbFwiLG4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksXCJyZWplY3RlZFwiXSxbXCJub3RpZnlcIixcInByb2dyZXNzXCIsbi5DYWxsYmFja3MoXCJtZW1vcnlcIildXSxjPVwicGVuZGluZ1wiLGQ9e3N0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIGN9LGFsd2F5czpmdW5jdGlvbigpe3JldHVybiBlLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyksdGhpc30sdGhlbjpmdW5jdGlvbigpe3ZhciBhPWFyZ3VtZW50cztyZXR1cm4gbi5EZWZlcnJlZChmdW5jdGlvbihjKXtuLmVhY2goYixmdW5jdGlvbihiLGYpe3ZhciBnPW4uaXNGdW5jdGlvbihhW2JdKSYmYVtiXTtlW2ZbMV1dKGZ1bmN0aW9uKCl7dmFyIGE9ZyYmZy5hcHBseSh0aGlzLGFyZ3VtZW50cyk7YSYmbi5pc0Z1bmN0aW9uKGEucHJvbWlzZSk/YS5wcm9taXNlKCkucHJvZ3Jlc3MoYy5ub3RpZnkpLmRvbmUoYy5yZXNvbHZlKS5mYWlsKGMucmVqZWN0KTpjW2ZbMF0rXCJXaXRoXCJdKHRoaXM9PT1kP2MucHJvbWlzZSgpOnRoaXMsZz9bYV06YXJndW1lbnRzKX0pfSksYT1udWxsfSkucHJvbWlzZSgpfSxwcm9taXNlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hP24uZXh0ZW5kKGEsZCk6ZH19LGU9e307cmV0dXJuIGQucGlwZT1kLnRoZW4sbi5lYWNoKGIsZnVuY3Rpb24oYSxmKXt2YXIgZz1mWzJdLGg9ZlszXTtkW2ZbMV1dPWcuYWRkLGgmJmcuYWRkKGZ1bmN0aW9uKCl7Yz1ofSxiWzFeYV1bMl0uZGlzYWJsZSxiWzJdWzJdLmxvY2spLGVbZlswXV09ZnVuY3Rpb24oKXtyZXR1cm4gZVtmWzBdK1wiV2l0aFwiXSh0aGlzPT09ZT9kOnRoaXMsYXJndW1lbnRzKSx0aGlzfSxlW2ZbMF0rXCJXaXRoXCJdPWcuZmlyZVdpdGh9KSxkLnByb21pc2UoZSksYSYmYS5jYWxsKGUsZSksZX0sd2hlbjpmdW5jdGlvbihhKXt2YXIgYj0wLGM9ZS5jYWxsKGFyZ3VtZW50cyksZD1jLmxlbmd0aCxmPTEhPT1kfHxhJiZuLmlzRnVuY3Rpb24oYS5wcm9taXNlKT9kOjAsZz0xPT09Zj9hOm4uRGVmZXJyZWQoKSxoPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZCl7YlthXT10aGlzLGNbYV09YXJndW1lbnRzLmxlbmd0aD4xP2UuY2FsbChhcmd1bWVudHMpOmQsYz09PWk/Zy5ub3RpZnlXaXRoKGIsYyk6LS1mfHxnLnJlc29sdmVXaXRoKGIsYyl9fSxpLGosaztpZihkPjEpZm9yKGk9bmV3IEFycmF5KGQpLGo9bmV3IEFycmF5KGQpLGs9bmV3IEFycmF5KGQpO2Q+YjtiKyspY1tiXSYmbi5pc0Z1bmN0aW9uKGNbYl0ucHJvbWlzZSk/Y1tiXS5wcm9taXNlKCkucHJvZ3Jlc3MoaChiLGosaSkpLmRvbmUoaChiLGssYykpLmZhaWwoZy5yZWplY3QpOi0tZjtyZXR1cm4gZnx8Zy5yZXNvbHZlV2l0aChrLGMpLGcucHJvbWlzZSgpfX0pO3ZhciBJO24uZm4ucmVhZHk9ZnVuY3Rpb24oYSl7cmV0dXJuIG4ucmVhZHkucHJvbWlzZSgpLmRvbmUoYSksdGhpc30sbi5leHRlbmQoe2lzUmVhZHk6ITEscmVhZHlXYWl0OjEsaG9sZFJlYWR5OmZ1bmN0aW9uKGEpe2E/bi5yZWFkeVdhaXQrKzpuLnJlYWR5KCEwKX0scmVhZHk6ZnVuY3Rpb24oYSl7KGE9PT0hMD8tLW4ucmVhZHlXYWl0Om4uaXNSZWFkeSl8fChuLmlzUmVhZHk9ITAsYSE9PSEwJiYtLW4ucmVhZHlXYWl0PjB8fChJLnJlc29sdmVXaXRoKGQsW25dKSxuLmZuLnRyaWdnZXJIYW5kbGVyJiYobihkKS50cmlnZ2VySGFuZGxlcihcInJlYWR5XCIpLG4oZCkub2ZmKFwicmVhZHlcIikpKSl9fSk7ZnVuY3Rpb24gSigpe2QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixKKSxhLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsSiksbi5yZWFkeSgpfW4ucmVhZHkucHJvbWlzZT1mdW5jdGlvbihiKXtyZXR1cm4gSXx8KEk9bi5EZWZlcnJlZCgpLFwiY29tcGxldGVcIj09PWQucmVhZHlTdGF0ZXx8XCJsb2FkaW5nXCIhPT1kLnJlYWR5U3RhdGUmJiFkLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbD9hLnNldFRpbWVvdXQobi5yZWFkeSk6KGQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixKKSxhLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsSikpKSxJLnByb21pc2UoYil9LG4ucmVhZHkucHJvbWlzZSgpO3ZhciBLPWZ1bmN0aW9uKGEsYixjLGQsZSxmLGcpe3ZhciBoPTAsaT1hLmxlbmd0aCxqPW51bGw9PWM7aWYoXCJvYmplY3RcIj09PW4udHlwZShjKSl7ZT0hMDtmb3IoaCBpbiBjKUsoYSxiLGgsY1toXSwhMCxmLGcpfWVsc2UgaWYodm9pZCAwIT09ZCYmKGU9ITAsbi5pc0Z1bmN0aW9uKGQpfHwoZz0hMCksaiYmKGc/KGIuY2FsbChhLGQpLGI9bnVsbCk6KGo9YixiPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gai5jYWxsKG4oYSksYyl9KSksYikpZm9yKDtpPmg7aCsrKWIoYVtoXSxjLGc/ZDpkLmNhbGwoYVtoXSxoLGIoYVtoXSxjKSkpO3JldHVybiBlP2E6aj9iLmNhbGwoYSk6aT9iKGFbMF0sYyk6Zn0sTD1mdW5jdGlvbihhKXtyZXR1cm4gMT09PWEubm9kZVR5cGV8fDk9PT1hLm5vZGVUeXBlfHwhK2Eubm9kZVR5cGV9O2Z1bmN0aW9uIE0oKXt0aGlzLmV4cGFuZG89bi5leHBhbmRvK00udWlkKyt9TS51aWQ9MSxNLnByb3RvdHlwZT17cmVnaXN0ZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz1ifHx7fTtyZXR1cm4gYS5ub2RlVHlwZT9hW3RoaXMuZXhwYW5kb109YzpPYmplY3QuZGVmaW5lUHJvcGVydHkoYSx0aGlzLmV4cGFuZG8se3ZhbHVlOmMsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksYVt0aGlzLmV4cGFuZG9dfSxjYWNoZTpmdW5jdGlvbihhKXtpZighTChhKSlyZXR1cm57fTt2YXIgYj1hW3RoaXMuZXhwYW5kb107cmV0dXJuIGJ8fChiPXt9LEwoYSkmJihhLm5vZGVUeXBlP2FbdGhpcy5leHBhbmRvXT1iOk9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLHRoaXMuZXhwYW5kbyx7dmFsdWU6Yixjb25maWd1cmFibGU6ITB9KSkpLGJ9LHNldDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZT10aGlzLmNhY2hlKGEpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKWVbYl09YztlbHNlIGZvcihkIGluIGIpZVtkXT1iW2RdO3JldHVybiBlfSxnZXQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdm9pZCAwPT09Yj90aGlzLmNhY2hlKGEpOmFbdGhpcy5leHBhbmRvXSYmYVt0aGlzLmV4cGFuZG9dW2JdfSxhY2Nlc3M6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiB2b2lkIDA9PT1ifHxiJiZcInN0cmluZ1wiPT10eXBlb2YgYiYmdm9pZCAwPT09Yz8oZD10aGlzLmdldChhLGIpLHZvaWQgMCE9PWQ/ZDp0aGlzLmdldChhLG4uY2FtZWxDYXNlKGIpKSk6KHRoaXMuc2V0KGEsYixjKSx2b2lkIDAhPT1jP2M6Yil9LHJlbW92ZTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPWFbdGhpcy5leHBhbmRvXTtpZih2b2lkIDAhPT1mKXtpZih2b2lkIDA9PT1iKXRoaXMucmVnaXN0ZXIoYSk7ZWxzZXtuLmlzQXJyYXkoYik/ZD1iLmNvbmNhdChiLm1hcChuLmNhbWVsQ2FzZSkpOihlPW4uY2FtZWxDYXNlKGIpLGIgaW4gZj9kPVtiLGVdOihkPWUsZD1kIGluIGY/W2RdOmQubWF0Y2goRyl8fFtdKSksYz1kLmxlbmd0aDt3aGlsZShjLS0pZGVsZXRlIGZbZFtjXV19KHZvaWQgMD09PWJ8fG4uaXNFbXB0eU9iamVjdChmKSkmJihhLm5vZGVUeXBlP2FbdGhpcy5leHBhbmRvXT12b2lkIDA6ZGVsZXRlIGFbdGhpcy5leHBhbmRvXSl9fSxoYXNEYXRhOmZ1bmN0aW9uKGEpe3ZhciBiPWFbdGhpcy5leHBhbmRvXTtyZXR1cm4gdm9pZCAwIT09YiYmIW4uaXNFbXB0eU9iamVjdChiKX19O3ZhciBOPW5ldyBNLE89bmV3IE0sUD0vXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sUT0vW0EtWl0vZztmdW5jdGlvbiBSKGEsYixjKXt2YXIgZDtpZih2b2lkIDA9PT1jJiYxPT09YS5ub2RlVHlwZSlpZihkPVwiZGF0YS1cIitiLnJlcGxhY2UoUSxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpLGM9YS5nZXRBdHRyaWJ1dGUoZCksXCJzdHJpbmdcIj09dHlwZW9mIGMpe3RyeXtjPVwidHJ1ZVwiPT09Yz8hMDpcImZhbHNlXCI9PT1jPyExOlwibnVsbFwiPT09Yz9udWxsOitjK1wiXCI9PT1jPytjOlAudGVzdChjKT9uLnBhcnNlSlNPTihjKTpjfWNhdGNoKGUpe31PLnNldChhLGIsYyk7XG59ZWxzZSBjPXZvaWQgMDtyZXR1cm4gY31uLmV4dGVuZCh7aGFzRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4gTy5oYXNEYXRhKGEpfHxOLmhhc0RhdGEoYSl9LGRhdGE6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBPLmFjY2VzcyhhLGIsYyl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSxiKXtPLnJlbW92ZShhLGIpfSxfZGF0YTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIE4uYWNjZXNzKGEsYixjKX0sX3JlbW92ZURhdGE6ZnVuY3Rpb24oYSxiKXtOLnJlbW92ZShhLGIpfX0pLG4uZm4uZXh0ZW5kKHtkYXRhOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY9dGhpc1swXSxnPWYmJmYuYXR0cmlidXRlcztpZih2b2lkIDA9PT1hKXtpZih0aGlzLmxlbmd0aCYmKGU9Ty5nZXQoZiksMT09PWYubm9kZVR5cGUmJiFOLmdldChmLFwiaGFzRGF0YUF0dHJzXCIpKSl7Yz1nLmxlbmd0aDt3aGlsZShjLS0pZ1tjXSYmKGQ9Z1tjXS5uYW1lLDA9PT1kLmluZGV4T2YoXCJkYXRhLVwiKSYmKGQ9bi5jYW1lbENhc2UoZC5zbGljZSg1KSksUihmLGQsZVtkXSkpKTtOLnNldChmLFwiaGFzRGF0YUF0dHJzXCIsITApfXJldHVybiBlfXJldHVyblwib2JqZWN0XCI9PXR5cGVvZiBhP3RoaXMuZWFjaChmdW5jdGlvbigpe08uc2V0KHRoaXMsYSl9KTpLKHRoaXMsZnVuY3Rpb24oYil7dmFyIGMsZDtpZihmJiZ2b2lkIDA9PT1iKXtpZihjPU8uZ2V0KGYsYSl8fE8uZ2V0KGYsYS5yZXBsYWNlKFEsXCItJCZcIikudG9Mb3dlckNhc2UoKSksdm9pZCAwIT09YylyZXR1cm4gYztpZihkPW4uY2FtZWxDYXNlKGEpLGM9Ty5nZXQoZixkKSx2b2lkIDAhPT1jKXJldHVybiBjO2lmKGM9UihmLGQsdm9pZCAwKSx2b2lkIDAhPT1jKXJldHVybiBjfWVsc2UgZD1uLmNhbWVsQ2FzZShhKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1PLmdldCh0aGlzLGQpO08uc2V0KHRoaXMsZCxiKSxhLmluZGV4T2YoXCItXCIpPi0xJiZ2b2lkIDAhPT1jJiZPLnNldCh0aGlzLGEsYil9KX0sbnVsbCxiLGFyZ3VtZW50cy5sZW5ndGg+MSxudWxsLCEwKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Ty5yZW1vdmUodGhpcyxhKX0pfX0pLG4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ7cmV0dXJuIGE/KGI9KGJ8fFwiZnhcIikrXCJxdWV1ZVwiLGQ9Ti5nZXQoYSxiKSxjJiYoIWR8fG4uaXNBcnJheShjKT9kPU4uYWNjZXNzKGEsYixuLm1ha2VBcnJheShjKSk6ZC5wdXNoKGMpKSxkfHxbXSk6dm9pZCAwfSxkZXF1ZXVlOmZ1bmN0aW9uKGEsYil7Yj1ifHxcImZ4XCI7dmFyIGM9bi5xdWV1ZShhLGIpLGQ9Yy5sZW5ndGgsZT1jLnNoaWZ0KCksZj1uLl9xdWV1ZUhvb2tzKGEsYiksZz1mdW5jdGlvbigpe24uZGVxdWV1ZShhLGIpfTtcImlucHJvZ3Jlc3NcIj09PWUmJihlPWMuc2hpZnQoKSxkLS0pLGUmJihcImZ4XCI9PT1iJiZjLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLGRlbGV0ZSBmLnN0b3AsZS5jYWxsKGEsZyxmKSksIWQmJmYmJmYuZW1wdHkuZmlyZSgpfSxfcXVldWVIb29rczpmdW5jdGlvbihhLGIpe3ZhciBjPWIrXCJxdWV1ZUhvb2tzXCI7cmV0dXJuIE4uZ2V0KGEsYyl8fE4uYWNjZXNzKGEsYyx7ZW1wdHk6bi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKS5hZGQoZnVuY3Rpb24oKXtOLnJlbW92ZShhLFtiK1wicXVldWVcIixjXSl9KX0pfX0pLG4uZm4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihhLGIpe3ZhciBjPTI7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGEmJihiPWEsYT1cImZ4XCIsYy0tKSxhcmd1bWVudHMubGVuZ3RoPGM/bi5xdWV1ZSh0aGlzWzBdLGEpOnZvaWQgMD09PWI/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1uLnF1ZXVlKHRoaXMsYSxiKTtuLl9xdWV1ZUhvb2tzKHRoaXMsYSksXCJmeFwiPT09YSYmXCJpbnByb2dyZXNzXCIhPT1jWzBdJiZuLmRlcXVldWUodGhpcyxhKX0pfSxkZXF1ZXVlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmRlcXVldWUodGhpcyxhKX0pfSxjbGVhclF1ZXVlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnF1ZXVlKGF8fFwiZnhcIixbXSl9LHByb21pc2U6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPTEsZT1uLkRlZmVycmVkKCksZj10aGlzLGc9dGhpcy5sZW5ndGgsaD1mdW5jdGlvbigpey0tZHx8ZS5yZXNvbHZlV2l0aChmLFtmXSl9O1wic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9dm9pZCAwKSxhPWF8fFwiZnhcIjt3aGlsZShnLS0pYz1OLmdldChmW2ddLGErXCJxdWV1ZUhvb2tzXCIpLGMmJmMuZW1wdHkmJihkKyssYy5lbXB0eS5hZGQoaCkpO3JldHVybiBoKCksZS5wcm9taXNlKGIpfX0pO3ZhciBTPS9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvLnNvdXJjZSxUPW5ldyBSZWdFeHAoXCJeKD86KFsrLV0pPXwpKFwiK1MrXCIpKFthLXolXSopJFwiLFwiaVwiKSxVPVtcIlRvcFwiLFwiUmlnaHRcIixcIkJvdHRvbVwiLFwiTGVmdFwiXSxWPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9Ynx8YSxcIm5vbmVcIj09PW4uY3NzKGEsXCJkaXNwbGF5XCIpfHwhbi5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSl9O2Z1bmN0aW9uIFcoYSxiLGMsZCl7dmFyIGUsZj0xLGc9MjAsaD1kP2Z1bmN0aW9uKCl7cmV0dXJuIGQuY3VyKCl9OmZ1bmN0aW9uKCl7cmV0dXJuIG4uY3NzKGEsYixcIlwiKX0saT1oKCksaj1jJiZjWzNdfHwobi5jc3NOdW1iZXJbYl0/XCJcIjpcInB4XCIpLGs9KG4uY3NzTnVtYmVyW2JdfHxcInB4XCIhPT1qJiYraSkmJlQuZXhlYyhuLmNzcyhhLGIpKTtpZihrJiZrWzNdIT09ail7aj1qfHxrWzNdLGM9Y3x8W10saz0raXx8MTtkbyBmPWZ8fFwiLjVcIixrLz1mLG4uc3R5bGUoYSxiLGsraik7d2hpbGUoZiE9PShmPWgoKS9pKSYmMSE9PWYmJi0tZyl9cmV0dXJuIGMmJihrPStrfHwraXx8MCxlPWNbMV0/aysoY1sxXSsxKSpjWzJdOitjWzJdLGQmJihkLnVuaXQ9aixkLnN0YXJ0PWssZC5lbmQ9ZSkpLGV9dmFyIFg9L14oPzpjaGVja2JveHxyYWRpbykkL2ksWT0vPChbXFx3Oi1dKykvLFo9L14kfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaSwkPXtvcHRpb246WzEsXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsXCI8L3NlbGVjdD5cIl0sdGhlYWQ6WzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXSxjb2w6WzIsXCI8dGFibGU+PGNvbGdyb3VwPlwiLFwiPC9jb2xncm91cD48L3RhYmxlPlwiXSx0cjpbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdLHRkOlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sX2RlZmF1bHQ6WzAsXCJcIixcIlwiXX07JC5vcHRncm91cD0kLm9wdGlvbiwkLnRib2R5PSQudGZvb3Q9JC5jb2xncm91cD0kLmNhcHRpb249JC50aGVhZCwkLnRoPSQudGQ7ZnVuY3Rpb24gXyhhLGIpe3ZhciBjPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEVsZW1lbnRzQnlUYWdOYW1lP2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYnx8XCIqXCIpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLnF1ZXJ5U2VsZWN0b3JBbGw/YS5xdWVyeVNlbGVjdG9yQWxsKGJ8fFwiKlwiKTpbXTtyZXR1cm4gdm9pZCAwPT09Ynx8YiYmbi5ub2RlTmFtZShhLGIpP24ubWVyZ2UoW2FdLGMpOmN9ZnVuY3Rpb24gYWEoYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2Q+YztjKyspTi5zZXQoYVtjXSxcImdsb2JhbEV2YWxcIiwhYnx8Ti5nZXQoYltjXSxcImdsb2JhbEV2YWxcIikpfXZhciBiYT0vPHwmIz9cXHcrOy87ZnVuY3Rpb24gY2EoYSxiLGMsZCxlKXtmb3IodmFyIGYsZyxoLGksaixrLGw9Yi5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksbT1bXSxvPTAscD1hLmxlbmd0aDtwPm87bysrKWlmKGY9YVtvXSxmfHwwPT09ZilpZihcIm9iamVjdFwiPT09bi50eXBlKGYpKW4ubWVyZ2UobSxmLm5vZGVUeXBlP1tmXTpmKTtlbHNlIGlmKGJhLnRlc3QoZikpe2c9Z3x8bC5hcHBlbmRDaGlsZChiLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGg9KFkuZXhlYyhmKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCksaT0kW2hdfHwkLl9kZWZhdWx0LGcuaW5uZXJIVE1MPWlbMV0rbi5odG1sUHJlZmlsdGVyKGYpK2lbMl0saz1pWzBdO3doaWxlKGstLSlnPWcubGFzdENoaWxkO24ubWVyZ2UobSxnLmNoaWxkTm9kZXMpLGc9bC5maXJzdENoaWxkLGcudGV4dENvbnRlbnQ9XCJcIn1lbHNlIG0ucHVzaChiLmNyZWF0ZVRleHROb2RlKGYpKTtsLnRleHRDb250ZW50PVwiXCIsbz0wO3doaWxlKGY9bVtvKytdKWlmKGQmJm4uaW5BcnJheShmLGQpPi0xKWUmJmUucHVzaChmKTtlbHNlIGlmKGo9bi5jb250YWlucyhmLm93bmVyRG9jdW1lbnQsZiksZz1fKGwuYXBwZW5kQ2hpbGQoZiksXCJzY3JpcHRcIiksaiYmYWEoZyksYyl7az0wO3doaWxlKGY9Z1trKytdKVoudGVzdChmLnR5cGV8fFwiXCIpJiZjLnB1c2goZil9cmV0dXJuIGx9IWZ1bmN0aW9uKCl7dmFyIGE9ZC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksYj1hLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudChcImRpdlwiKSksYz1kLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtjLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInJhZGlvXCIpLGMuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLFwiY2hlY2tlZFwiKSxjLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcInRcIiksYi5hcHBlbmRDaGlsZChjKSxsLmNoZWNrQ2xvbmU9Yi5jbG9uZU5vZGUoITApLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmNoZWNrZWQsYi5pbm5lckhUTUw9XCI8dGV4dGFyZWE+eDwvdGV4dGFyZWE+XCIsbC5ub0Nsb25lQ2hlY2tlZD0hIWIuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlfSgpO3ZhciBkYT0vXmtleS8sZWE9L14oPzptb3VzZXxwb2ludGVyfGNvbnRleHRtZW51fGRyYWd8ZHJvcCl8Y2xpY2svLGZhPS9eKFteLl0qKSg/OlxcLiguKyl8KS87ZnVuY3Rpb24gZ2EoKXtyZXR1cm4hMH1mdW5jdGlvbiBoYSgpe3JldHVybiExfWZ1bmN0aW9uIGlhKCl7dHJ5e3JldHVybiBkLmFjdGl2ZUVsZW1lbnR9Y2F0Y2goYSl7fX1mdW5jdGlvbiBqYShhLGIsYyxkLGUsZil7dmFyIGcsaDtpZihcIm9iamVjdFwiPT10eXBlb2YgYil7XCJzdHJpbmdcIiE9dHlwZW9mIGMmJihkPWR8fGMsYz12b2lkIDApO2ZvcihoIGluIGIpamEoYSxoLGMsZCxiW2hdLGYpO3JldHVybiBhfWlmKG51bGw9PWQmJm51bGw9PWU/KGU9YyxkPWM9dm9pZCAwKTpudWxsPT1lJiYoXCJzdHJpbmdcIj09dHlwZW9mIGM/KGU9ZCxkPXZvaWQgMCk6KGU9ZCxkPWMsYz12b2lkIDApKSxlPT09ITEpZT1oYTtlbHNlIGlmKCFlKXJldHVybiB0aGlzO3JldHVybiAxPT09ZiYmKGc9ZSxlPWZ1bmN0aW9uKGEpe3JldHVybiBuKCkub2ZmKGEpLGcuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxlLmd1aWQ9Zy5ndWlkfHwoZy5ndWlkPW4uZ3VpZCsrKSksYS5lYWNoKGZ1bmN0aW9uKCl7bi5ldmVudC5hZGQodGhpcyxiLGUsZCxjKX0pfW4uZXZlbnQ9e2dsb2JhbDp7fSxhZGQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnLGgsaSxqLGssbCxtLG8scCxxLHI9Ti5nZXQoYSk7aWYocil7Yy5oYW5kbGVyJiYoZj1jLGM9Zi5oYW5kbGVyLGU9Zi5zZWxlY3RvciksYy5ndWlkfHwoYy5ndWlkPW4uZ3VpZCsrKSwoaT1yLmV2ZW50cyl8fChpPXIuZXZlbnRzPXt9KSwoZz1yLmhhbmRsZSl8fChnPXIuaGFuZGxlPWZ1bmN0aW9uKGIpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBuJiZuLmV2ZW50LnRyaWdnZXJlZCE9PWIudHlwZT9uLmV2ZW50LmRpc3BhdGNoLmFwcGx5KGEsYXJndW1lbnRzKTp2b2lkIDB9KSxiPShifHxcIlwiKS5tYXRjaChHKXx8W1wiXCJdLGo9Yi5sZW5ndGg7d2hpbGUoai0tKWg9ZmEuZXhlYyhiW2pdKXx8W10sbz1xPWhbMV0scD0oaFsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxvJiYobD1uLmV2ZW50LnNwZWNpYWxbb118fHt9LG89KGU/bC5kZWxlZ2F0ZVR5cGU6bC5iaW5kVHlwZSl8fG8sbD1uLmV2ZW50LnNwZWNpYWxbb118fHt9LGs9bi5leHRlbmQoe3R5cGU6byxvcmlnVHlwZTpxLGRhdGE6ZCxoYW5kbGVyOmMsZ3VpZDpjLmd1aWQsc2VsZWN0b3I6ZSxuZWVkc0NvbnRleHQ6ZSYmbi5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KGUpLG5hbWVzcGFjZTpwLmpvaW4oXCIuXCIpfSxmKSwobT1pW29dKXx8KG09aVtvXT1bXSxtLmRlbGVnYXRlQ291bnQ9MCxsLnNldHVwJiZsLnNldHVwLmNhbGwoYSxkLHAsZykhPT0hMXx8YS5hZGRFdmVudExpc3RlbmVyJiZhLmFkZEV2ZW50TGlzdGVuZXIobyxnKSksbC5hZGQmJihsLmFkZC5jYWxsKGEsayksay5oYW5kbGVyLmd1aWR8fChrLmhhbmRsZXIuZ3VpZD1jLmd1aWQpKSxlP20uc3BsaWNlKG0uZGVsZWdhdGVDb3VudCsrLDAsayk6bS5wdXNoKGspLG4uZXZlbnQuZ2xvYmFsW29dPSEwKX19LHJlbW92ZTpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG0sbyxwLHEscj1OLmhhc0RhdGEoYSkmJk4uZ2V0KGEpO2lmKHImJihpPXIuZXZlbnRzKSl7Yj0oYnx8XCJcIikubWF0Y2goRyl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSlpZihoPWZhLmV4ZWMoYltqXSl8fFtdLG89cT1oWzFdLHA9KGhbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbyl7bD1uLmV2ZW50LnNwZWNpYWxbb118fHt9LG89KGQ/bC5kZWxlZ2F0ZVR5cGU6bC5iaW5kVHlwZSl8fG8sbT1pW29dfHxbXSxoPWhbMl0mJm5ldyBSZWdFeHAoXCIoXnxcXFxcLilcIitwLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKSxnPWY9bS5sZW5ndGg7d2hpbGUoZi0tKWs9bVtmXSwhZSYmcSE9PWsub3JpZ1R5cGV8fGMmJmMuZ3VpZCE9PWsuZ3VpZHx8aCYmIWgudGVzdChrLm5hbWVzcGFjZSl8fGQmJmQhPT1rLnNlbGVjdG9yJiYoXCIqKlwiIT09ZHx8IWsuc2VsZWN0b3IpfHwobS5zcGxpY2UoZiwxKSxrLnNlbGVjdG9yJiZtLmRlbGVnYXRlQ291bnQtLSxsLnJlbW92ZSYmbC5yZW1vdmUuY2FsbChhLGspKTtnJiYhbS5sZW5ndGgmJihsLnRlYXJkb3duJiZsLnRlYXJkb3duLmNhbGwoYSxwLHIuaGFuZGxlKSE9PSExfHxuLnJlbW92ZUV2ZW50KGEsbyxyLmhhbmRsZSksZGVsZXRlIGlbb10pfWVsc2UgZm9yKG8gaW4gaSluLmV2ZW50LnJlbW92ZShhLG8rYltqXSxjLGQsITApO24uaXNFbXB0eU9iamVjdChpKSYmTi5yZW1vdmUoYSxcImhhbmRsZSBldmVudHNcIil9fSxkaXNwYXRjaDpmdW5jdGlvbihhKXthPW4uZXZlbnQuZml4KGEpO3ZhciBiLGMsZCxmLGcsaD1bXSxpPWUuY2FsbChhcmd1bWVudHMpLGo9KE4uZ2V0KHRoaXMsXCJldmVudHNcIil8fHt9KVthLnR5cGVdfHxbXSxrPW4uZXZlbnQuc3BlY2lhbFthLnR5cGVdfHx7fTtpZihpWzBdPWEsYS5kZWxlZ2F0ZVRhcmdldD10aGlzLCFrLnByZURpc3BhdGNofHxrLnByZURpc3BhdGNoLmNhbGwodGhpcyxhKSE9PSExKXtoPW4uZXZlbnQuaGFuZGxlcnMuY2FsbCh0aGlzLGEsaiksYj0wO3doaWxlKChmPWhbYisrXSkmJiFhLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpe2EuY3VycmVudFRhcmdldD1mLmVsZW0sYz0wO3doaWxlKChnPWYuaGFuZGxlcnNbYysrXSkmJiFhLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpKCFhLnJuYW1lc3BhY2V8fGEucm5hbWVzcGFjZS50ZXN0KGcubmFtZXNwYWNlKSkmJihhLmhhbmRsZU9iaj1nLGEuZGF0YT1nLmRhdGEsZD0oKG4uZXZlbnQuc3BlY2lhbFtnLm9yaWdUeXBlXXx8e30pLmhhbmRsZXx8Zy5oYW5kbGVyKS5hcHBseShmLmVsZW0saSksdm9pZCAwIT09ZCYmKGEucmVzdWx0PWQpPT09ITEmJihhLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKSkpfXJldHVybiBrLnBvc3REaXNwYXRjaCYmay5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLGEpLGEucmVzdWx0fX0saGFuZGxlcnM6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZixnPVtdLGg9Yi5kZWxlZ2F0ZUNvdW50LGk9YS50YXJnZXQ7aWYoaCYmaS5ub2RlVHlwZSYmKFwiY2xpY2tcIiE9PWEudHlwZXx8aXNOYU4oYS5idXR0b24pfHxhLmJ1dHRvbjwxKSlmb3IoO2khPT10aGlzO2k9aS5wYXJlbnROb2RlfHx0aGlzKWlmKDE9PT1pLm5vZGVUeXBlJiYoaS5kaXNhYmxlZCE9PSEwfHxcImNsaWNrXCIhPT1hLnR5cGUpKXtmb3IoZD1bXSxjPTA7aD5jO2MrKylmPWJbY10sZT1mLnNlbGVjdG9yK1wiIFwiLHZvaWQgMD09PWRbZV0mJihkW2VdPWYubmVlZHNDb250ZXh0P24oZSx0aGlzKS5pbmRleChpKT4tMTpuLmZpbmQoZSx0aGlzLG51bGwsW2ldKS5sZW5ndGgpLGRbZV0mJmQucHVzaChmKTtkLmxlbmd0aCYmZy5wdXNoKHtlbGVtOmksaGFuZGxlcnM6ZH0pfXJldHVybiBoPGIubGVuZ3RoJiZnLnB1c2goe2VsZW06dGhpcyxoYW5kbGVyczpiLnNsaWNlKGgpfSksZ30scHJvcHM6XCJhbHRLZXkgYnViYmxlcyBjYW5jZWxhYmxlIGN0cmxLZXkgY3VycmVudFRhcmdldCBkZXRhaWwgZXZlbnRQaGFzZSBtZXRhS2V5IHJlbGF0ZWRUYXJnZXQgc2hpZnRLZXkgdGFyZ2V0IHRpbWVTdGFtcCB2aWV3IHdoaWNoXCIuc3BsaXQoXCIgXCIpLGZpeEhvb2tzOnt9LGtleUhvb2tzOntwcm9wczpcImNoYXIgY2hhckNvZGUga2V5IGtleUNvZGVcIi5zcGxpdChcIiBcIiksZmlsdGVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIG51bGw9PWEud2hpY2gmJihhLndoaWNoPW51bGwhPWIuY2hhckNvZGU/Yi5jaGFyQ29kZTpiLmtleUNvZGUpLGF9fSxtb3VzZUhvb2tzOntwcm9wczpcImJ1dHRvbiBidXR0b25zIGNsaWVudFggY2xpZW50WSBvZmZzZXRYIG9mZnNldFkgcGFnZVggcGFnZVkgc2NyZWVuWCBzY3JlZW5ZIHRvRWxlbWVudFwiLnNwbGl0KFwiIFwiKSxmaWx0ZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYyxlLGYsZz1iLmJ1dHRvbjtyZXR1cm4gbnVsbD09YS5wYWdlWCYmbnVsbCE9Yi5jbGllbnRYJiYoYz1hLnRhcmdldC5vd25lckRvY3VtZW50fHxkLGU9Yy5kb2N1bWVudEVsZW1lbnQsZj1jLmJvZHksYS5wYWdlWD1iLmNsaWVudFgrKGUmJmUuc2Nyb2xsTGVmdHx8ZiYmZi5zY3JvbGxMZWZ0fHwwKS0oZSYmZS5jbGllbnRMZWZ0fHxmJiZmLmNsaWVudExlZnR8fDApLGEucGFnZVk9Yi5jbGllbnRZKyhlJiZlLnNjcm9sbFRvcHx8ZiYmZi5zY3JvbGxUb3B8fDApLShlJiZlLmNsaWVudFRvcHx8ZiYmZi5jbGllbnRUb3B8fDApKSxhLndoaWNofHx2b2lkIDA9PT1nfHwoYS53aGljaD0xJmc/MToyJmc/Mzo0Jmc/MjowKSxhfX0sZml4OmZ1bmN0aW9uKGEpe2lmKGFbbi5leHBhbmRvXSlyZXR1cm4gYTt2YXIgYixjLGUsZj1hLnR5cGUsZz1hLGg9dGhpcy5maXhIb29rc1tmXTtofHwodGhpcy5maXhIb29rc1tmXT1oPWVhLnRlc3QoZik/dGhpcy5tb3VzZUhvb2tzOmRhLnRlc3QoZik/dGhpcy5rZXlIb29rczp7fSksZT1oLnByb3BzP3RoaXMucHJvcHMuY29uY2F0KGgucHJvcHMpOnRoaXMucHJvcHMsYT1uZXcgbi5FdmVudChnKSxiPWUubGVuZ3RoO3doaWxlKGItLSljPWVbYl0sYVtjXT1nW2NdO3JldHVybiBhLnRhcmdldHx8KGEudGFyZ2V0PWQpLDM9PT1hLnRhcmdldC5ub2RlVHlwZSYmKGEudGFyZ2V0PWEudGFyZ2V0LnBhcmVudE5vZGUpLGguZmlsdGVyP2guZmlsdGVyKGEsZyk6YX0sc3BlY2lhbDp7bG9hZDp7bm9CdWJibGU6ITB9LGZvY3VzOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMhPT1pYSgpJiZ0aGlzLmZvY3VzPyh0aGlzLmZvY3VzKCksITEpOnZvaWQgMH0sZGVsZWdhdGVUeXBlOlwiZm9jdXNpblwifSxibHVyOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXM9PT1pYSgpJiZ0aGlzLmJsdXI/KHRoaXMuYmx1cigpLCExKTp2b2lkIDB9LGRlbGVnYXRlVHlwZTpcImZvY3Vzb3V0XCJ9LGNsaWNrOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuXCJjaGVja2JveFwiPT09dGhpcy50eXBlJiZ0aGlzLmNsaWNrJiZuLm5vZGVOYW1lKHRoaXMsXCJpbnB1dFwiKT8odGhpcy5jbGljaygpLCExKTp2b2lkIDB9LF9kZWZhdWx0OmZ1bmN0aW9uKGEpe3JldHVybiBuLm5vZGVOYW1lKGEudGFyZ2V0LFwiYVwiKX19LGJlZm9yZXVubG9hZDp7cG9zdERpc3BhdGNoOmZ1bmN0aW9uKGEpe3ZvaWQgMCE9PWEucmVzdWx0JiZhLm9yaWdpbmFsRXZlbnQmJihhLm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWU9YS5yZXN1bHQpfX19fSxuLnJlbW92ZUV2ZW50PWZ1bmN0aW9uKGEsYixjKXthLnJlbW92ZUV2ZW50TGlzdGVuZXImJmEucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLGMpfSxuLkV2ZW50PWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBuLkV2ZW50PyhhJiZhLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1hLHRoaXMudHlwZT1hLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9YS5kZWZhdWx0UHJldmVudGVkfHx2b2lkIDA9PT1hLmRlZmF1bHRQcmV2ZW50ZWQmJmEucmV0dXJuVmFsdWU9PT0hMT9nYTpoYSk6dGhpcy50eXBlPWEsYiYmbi5leHRlbmQodGhpcyxiKSx0aGlzLnRpbWVTdGFtcD1hJiZhLnRpbWVTdGFtcHx8bi5ub3coKSx2b2lkKHRoaXNbbi5leHBhbmRvXT0hMCkpOm5ldyBuLkV2ZW50KGEsYil9LG4uRXZlbnQucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpuLkV2ZW50LGlzRGVmYXVsdFByZXZlbnRlZDpoYSxpc1Byb3BhZ2F0aW9uU3RvcHBlZDpoYSxpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDpoYSxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1nYSxhJiZhLnByZXZlbnREZWZhdWx0KCl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPWdhLGEmJmEuc3RvcFByb3BhZ2F0aW9uKCl9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPWdhLGEmJmEuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksdGhpcy5zdG9wUHJvcGFnYXRpb24oKX19LG4uZWFjaCh7bW91c2VlbnRlcjpcIm1vdXNlb3ZlclwiLG1vdXNlbGVhdmU6XCJtb3VzZW91dFwiLHBvaW50ZXJlbnRlcjpcInBvaW50ZXJvdmVyXCIscG9pbnRlcmxlYXZlOlwicG9pbnRlcm91dFwifSxmdW5jdGlvbihhLGIpe24uZXZlbnQuc3BlY2lhbFthXT17ZGVsZWdhdGVUeXBlOmIsYmluZFR5cGU6YixoYW5kbGU6ZnVuY3Rpb24oYSl7dmFyIGMsZD10aGlzLGU9YS5yZWxhdGVkVGFyZ2V0LGY9YS5oYW5kbGVPYmo7cmV0dXJuKCFlfHxlIT09ZCYmIW4uY29udGFpbnMoZCxlKSkmJihhLnR5cGU9Zi5vcmlnVHlwZSxjPWYuaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyksYS50eXBlPWIpLGN9fX0pLG4uZm4uZXh0ZW5kKHtvbjpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gamEodGhpcyxhLGIsYyxkKX0sb25lOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiBqYSh0aGlzLGEsYixjLGQsMSl9LG9mZjpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZTtpZihhJiZhLnByZXZlbnREZWZhdWx0JiZhLmhhbmRsZU9iailyZXR1cm4gZD1hLmhhbmRsZU9iaixuKGEuZGVsZWdhdGVUYXJnZXQpLm9mZihkLm5hbWVzcGFjZT9kLm9yaWdUeXBlK1wiLlwiK2QubmFtZXNwYWNlOmQub3JpZ1R5cGUsZC5zZWxlY3RvcixkLmhhbmRsZXIpLHRoaXM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGEpe2ZvcihlIGluIGEpdGhpcy5vZmYoZSxiLGFbZV0pO3JldHVybiB0aGlzfXJldHVybihiPT09ITF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGIpJiYoYz1iLGI9dm9pZCAwKSxjPT09ITEmJihjPWhhKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LnJlbW92ZSh0aGlzLGEsYyxiKX0pfX0pO3ZhciBrYT0vPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbXFx3Oi1dKylbXj5dKilcXC8+L2dpLGxhPS88c2NyaXB0fDxzdHlsZXw8bGluay9pLG1hPS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksbmE9L150cnVlXFwvKC4qKS8sb2E9L15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nO2Z1bmN0aW9uIHBhKGEsYil7cmV0dXJuIG4ubm9kZU5hbWUoYSxcInRhYmxlXCIpJiZuLm5vZGVOYW1lKDExIT09Yi5ub2RlVHlwZT9iOmIuZmlyc3RDaGlsZCxcInRyXCIpP2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0Ym9keVwiKVswXXx8YTphfWZ1bmN0aW9uIHFhKGEpe3JldHVybiBhLnR5cGU9KG51bGwhPT1hLmdldEF0dHJpYnV0ZShcInR5cGVcIikpK1wiL1wiK2EudHlwZSxhfWZ1bmN0aW9uIHJhKGEpe3ZhciBiPW5hLmV4ZWMoYS50eXBlKTtyZXR1cm4gYj9hLnR5cGU9YlsxXTphLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIiksYX1mdW5jdGlvbiBzYShhLGIpe3ZhciBjLGQsZSxmLGcsaCxpLGo7aWYoMT09PWIubm9kZVR5cGUpe2lmKE4uaGFzRGF0YShhKSYmKGY9Ti5hY2Nlc3MoYSksZz1OLnNldChiLGYpLGo9Zi5ldmVudHMpKXtkZWxldGUgZy5oYW5kbGUsZy5ldmVudHM9e307Zm9yKGUgaW4gailmb3IoYz0wLGQ9altlXS5sZW5ndGg7ZD5jO2MrKyluLmV2ZW50LmFkZChiLGUsaltlXVtjXSl9Ty5oYXNEYXRhKGEpJiYoaD1PLmFjY2VzcyhhKSxpPW4uZXh0ZW5kKHt9LGgpLE8uc2V0KGIsaSkpfX1mdW5jdGlvbiB0YShhLGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcImlucHV0XCI9PT1jJiZYLnRlc3QoYS50eXBlKT9iLmNoZWNrZWQ9YS5jaGVja2VkOihcImlucHV0XCI9PT1jfHxcInRleHRhcmVhXCI9PT1jKSYmKGIuZGVmYXVsdFZhbHVlPWEuZGVmYXVsdFZhbHVlKX1mdW5jdGlvbiB1YShhLGIsYyxkKXtiPWYuYXBwbHkoW10sYik7dmFyIGUsZyxoLGksaixrLG09MCxvPWEubGVuZ3RoLHA9by0xLHE9YlswXSxyPW4uaXNGdW5jdGlvbihxKTtpZihyfHxvPjEmJlwic3RyaW5nXCI9PXR5cGVvZiBxJiYhbC5jaGVja0Nsb25lJiZtYS50ZXN0KHEpKXJldHVybiBhLmVhY2goZnVuY3Rpb24oZSl7dmFyIGY9YS5lcShlKTtyJiYoYlswXT1xLmNhbGwodGhpcyxlLGYuaHRtbCgpKSksdWEoZixiLGMsZCl9KTtpZihvJiYoZT1jYShiLGFbMF0ub3duZXJEb2N1bWVudCwhMSxhLGQpLGc9ZS5maXJzdENoaWxkLDE9PT1lLmNoaWxkTm9kZXMubGVuZ3RoJiYoZT1nKSxnfHxkKSl7Zm9yKGg9bi5tYXAoXyhlLFwic2NyaXB0XCIpLHFhKSxpPWgubGVuZ3RoO28+bTttKyspaj1lLG0hPT1wJiYoaj1uLmNsb25lKGosITAsITApLGkmJm4ubWVyZ2UoaCxfKGosXCJzY3JpcHRcIikpKSxjLmNhbGwoYVttXSxqLG0pO2lmKGkpZm9yKGs9aFtoLmxlbmd0aC0xXS5vd25lckRvY3VtZW50LG4ubWFwKGgscmEpLG09MDtpPm07bSsrKWo9aFttXSxaLnRlc3Qoai50eXBlfHxcIlwiKSYmIU4uYWNjZXNzKGosXCJnbG9iYWxFdmFsXCIpJiZuLmNvbnRhaW5zKGssaikmJihqLnNyYz9uLl9ldmFsVXJsJiZuLl9ldmFsVXJsKGouc3JjKTpuLmdsb2JhbEV2YWwoai50ZXh0Q29udGVudC5yZXBsYWNlKG9hLFwiXCIpKSl9cmV0dXJuIGF9ZnVuY3Rpb24gdmEoYSxiLGMpe2Zvcih2YXIgZCxlPWI/bi5maWx0ZXIoYixhKTphLGY9MDtudWxsIT0oZD1lW2ZdKTtmKyspY3x8MSE9PWQubm9kZVR5cGV8fG4uY2xlYW5EYXRhKF8oZCkpLGQucGFyZW50Tm9kZSYmKGMmJm4uY29udGFpbnMoZC5vd25lckRvY3VtZW50LGQpJiZhYShfKGQsXCJzY3JpcHRcIikpLGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkKSk7cmV0dXJuIGF9bi5leHRlbmQoe2h0bWxQcmVmaWx0ZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZShrYSxcIjwkMT48LyQyPlwiKX0sY2xvbmU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5jbG9uZU5vZGUoITApLGk9bi5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSk7aWYoIShsLm5vQ2xvbmVDaGVja2VkfHwxIT09YS5ub2RlVHlwZSYmMTEhPT1hLm5vZGVUeXBlfHxuLmlzWE1MRG9jKGEpKSlmb3IoZz1fKGgpLGY9XyhhKSxkPTAsZT1mLmxlbmd0aDtlPmQ7ZCsrKXRhKGZbZF0sZ1tkXSk7aWYoYilpZihjKWZvcihmPWZ8fF8oYSksZz1nfHxfKGgpLGQ9MCxlPWYubGVuZ3RoO2U+ZDtkKyspc2EoZltkXSxnW2RdKTtlbHNlIHNhKGEsaCk7cmV0dXJuIGc9XyhoLFwic2NyaXB0XCIpLGcubGVuZ3RoPjAmJmFhKGcsIWkmJl8oYSxcInNjcmlwdFwiKSksaH0sY2xlYW5EYXRhOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjLGQsZT1uLmV2ZW50LnNwZWNpYWwsZj0wO3ZvaWQgMCE9PShjPWFbZl0pO2YrKylpZihMKGMpKXtpZihiPWNbTi5leHBhbmRvXSl7aWYoYi5ldmVudHMpZm9yKGQgaW4gYi5ldmVudHMpZVtkXT9uLmV2ZW50LnJlbW92ZShjLGQpOm4ucmVtb3ZlRXZlbnQoYyxkLGIuaGFuZGxlKTtjW04uZXhwYW5kb109dm9pZCAwfWNbTy5leHBhbmRvXSYmKGNbTy5leHBhbmRvXT12b2lkIDApfX19KSxuLmZuLmV4dGVuZCh7ZG9tTWFuaXA6dWEsZGV0YWNoOmZ1bmN0aW9uKGEpe3JldHVybiB2YSh0aGlzLGEsITApfSxyZW1vdmU6ZnVuY3Rpb24oYSl7cmV0dXJuIHZhKHRoaXMsYSl9LHRleHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIEsodGhpcyxmdW5jdGlvbihhKXtyZXR1cm4gdm9pZCAwPT09YT9uLnRleHQodGhpcyk6dGhpcy5lbXB0eSgpLmVhY2goZnVuY3Rpb24oKXsoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpJiYodGhpcy50ZXh0Q29udGVudD1hKX0pfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LGFwcGVuZDpmdW5jdGlvbigpe3JldHVybiB1YSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIGI9cGEodGhpcyxhKTtiLmFwcGVuZENoaWxkKGEpfX0pfSxwcmVwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHVhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj1wYSh0aGlzLGEpO2IuaW5zZXJ0QmVmb3JlKGEsYi5maXJzdENoaWxkKX19KX0sYmVmb3JlOmZ1bmN0aW9uKCl7cmV0dXJuIHVhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLHRoaXMpfSl9LGFmdGVyOmZ1bmN0aW9uKCl7cmV0dXJuIHVhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLHRoaXMubmV4dFNpYmxpbmcpfSl9LGVtcHR5OmZ1bmN0aW9uKCl7Zm9yKHZhciBhLGI9MDtudWxsIT0oYT10aGlzW2JdKTtiKyspMT09PWEubm9kZVR5cGUmJihuLmNsZWFuRGF0YShfKGEsITEpKSxhLnRleHRDb250ZW50PVwiXCIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihhLGIpe3JldHVybiBhPW51bGw9PWE/ITE6YSxiPW51bGw9PWI/YTpiLHRoaXMubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIG4uY2xvbmUodGhpcyxhLGIpfSl9LGh0bWw6ZnVuY3Rpb24oYSl7cmV0dXJuIEsodGhpcyxmdW5jdGlvbihhKXt2YXIgYj10aGlzWzBdfHx7fSxjPTAsZD10aGlzLmxlbmd0aDtpZih2b2lkIDA9PT1hJiYxPT09Yi5ub2RlVHlwZSlyZXR1cm4gYi5pbm5lckhUTUw7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJiFsYS50ZXN0KGEpJiYhJFsoWS5leGVjKGEpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2E9bi5odG1sUHJlZmlsdGVyKGEpO3RyeXtmb3IoO2Q+YztjKyspYj10aGlzW2NdfHx7fSwxPT09Yi5ub2RlVHlwZSYmKG4uY2xlYW5EYXRhKF8oYiwhMSkpLGIuaW5uZXJIVE1MPWEpO2I9MH1jYXRjaChlKXt9fWImJnRoaXMuZW1wdHkoKS5hcHBlbmQoYSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24oKXt2YXIgYT1bXTtyZXR1cm4gdWEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYil7dmFyIGM9dGhpcy5wYXJlbnROb2RlO24uaW5BcnJheSh0aGlzLGEpPDAmJihuLmNsZWFuRGF0YShfKHRoaXMpKSxjJiZjLnJlcGxhY2VDaGlsZChiLHRoaXMpKX0sYSl9fSksbi5lYWNoKHthcHBlbmRUbzpcImFwcGVuZFwiLHByZXBlbmRUbzpcInByZXBlbmRcIixpbnNlcnRCZWZvcmU6XCJiZWZvcmVcIixpbnNlcnRBZnRlcjpcImFmdGVyXCIscmVwbGFjZUFsbDpcInJlcGxhY2VXaXRoXCJ9LGZ1bmN0aW9uKGEsYil7bi5mblthXT1mdW5jdGlvbihhKXtmb3IodmFyIGMsZD1bXSxlPW4oYSksZj1lLmxlbmd0aC0xLGg9MDtmPj1oO2grKyljPWg9PT1mP3RoaXM6dGhpcy5jbG9uZSghMCksbihlW2hdKVtiXShjKSxnLmFwcGx5KGQsYy5nZXQoKSk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGQpfX0pO3ZhciB3YSx4YT17SFRNTDpcImJsb2NrXCIsQk9EWTpcImJsb2NrXCJ9O2Z1bmN0aW9uIHlhKGEsYil7dmFyIGM9bihiLmNyZWF0ZUVsZW1lbnQoYSkpLmFwcGVuZFRvKGIuYm9keSksZD1uLmNzcyhjWzBdLFwiZGlzcGxheVwiKTtyZXR1cm4gYy5kZXRhY2goKSxkfWZ1bmN0aW9uIHphKGEpe3ZhciBiPWQsYz14YVthXTtyZXR1cm4gY3x8KGM9eWEoYSxiKSxcIm5vbmVcIiE9PWMmJmN8fCh3YT0od2F8fG4oXCI8aWZyYW1lIGZyYW1lYm9yZGVyPScwJyB3aWR0aD0nMCcgaGVpZ2h0PScwJy8+XCIpKS5hcHBlbmRUbyhiLmRvY3VtZW50RWxlbWVudCksYj13YVswXS5jb250ZW50RG9jdW1lbnQsYi53cml0ZSgpLGIuY2xvc2UoKSxjPXlhKGEsYiksd2EuZGV0YWNoKCkpLHhhW2FdPWMpLGN9dmFyIEFhPS9ebWFyZ2luLyxCYT1uZXcgUmVnRXhwKFwiXihcIitTK1wiKSg/IXB4KVthLXolXSskXCIsXCJpXCIpLENhPWZ1bmN0aW9uKGIpe3ZhciBjPWIub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztyZXR1cm4gYy5vcGVuZXJ8fChjPWEpLGMuZ2V0Q29tcHV0ZWRTdHlsZShiKX0sRGE9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGUsZixnPXt9O2ZvcihmIGluIGIpZ1tmXT1hLnN0eWxlW2ZdLGEuc3R5bGVbZl09YltmXTtlPWMuYXBwbHkoYSxkfHxbXSk7Zm9yKGYgaW4gYilhLnN0eWxlW2ZdPWdbZl07cmV0dXJuIGV9LEVhPWQuZG9jdW1lbnRFbGVtZW50OyFmdW5jdGlvbigpe3ZhciBiLGMsZSxmLGc9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGg9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2lmKGguc3R5bGUpe2guc3R5bGUuYmFja2dyb3VuZENsaXA9XCJjb250ZW50LWJveFwiLGguY2xvbmVOb2RlKCEwKS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cIlwiLGwuY2xlYXJDbG9uZVN0eWxlPVwiY29udGVudC1ib3hcIj09PWguc3R5bGUuYmFja2dyb3VuZENsaXAsZy5zdHlsZS5jc3NUZXh0PVwiYm9yZGVyOjA7d2lkdGg6OHB4O2hlaWdodDowO3RvcDowO2xlZnQ6LTk5OTlweDtwYWRkaW5nOjA7bWFyZ2luLXRvcDoxcHg7cG9zaXRpb246YWJzb2x1dGVcIixnLmFwcGVuZENoaWxkKGgpO2Z1bmN0aW9uIGkoKXtoLnN0eWxlLmNzc1RleHQ9XCItd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jazttYXJnaW46YXV0bztib3JkZXI6MXB4O3BhZGRpbmc6MXB4O3RvcDoxJTt3aWR0aDo1MCVcIixoLmlubmVySFRNTD1cIlwiLEVhLmFwcGVuZENoaWxkKGcpO3ZhciBkPWEuZ2V0Q29tcHV0ZWRTdHlsZShoKTtiPVwiMSVcIiE9PWQudG9wLGY9XCIycHhcIj09PWQubWFyZ2luTGVmdCxjPVwiNHB4XCI9PT1kLndpZHRoLGguc3R5bGUubWFyZ2luUmlnaHQ9XCI1MCVcIixlPVwiNHB4XCI9PT1kLm1hcmdpblJpZ2h0LEVhLnJlbW92ZUNoaWxkKGcpfW4uZXh0ZW5kKGwse3BpeGVsUG9zaXRpb246ZnVuY3Rpb24oKXtyZXR1cm4gaSgpLGJ9LGJveFNpemluZ1JlbGlhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIG51bGw9PWMmJmkoKSxjfSxwaXhlbE1hcmdpblJpZ2h0OmZ1bmN0aW9uKCl7cmV0dXJuIG51bGw9PWMmJmkoKSxlfSxyZWxpYWJsZU1hcmdpbkxlZnQ6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09YyYmaSgpLGZ9LHJlbGlhYmxlTWFyZ2luUmlnaHQ6ZnVuY3Rpb24oKXt2YXIgYixjPWguYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtyZXR1cm4gYy5zdHlsZS5jc3NUZXh0PWguc3R5bGUuY3NzVGV4dD1cIi13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjA7Ym9yZGVyOjA7cGFkZGluZzowXCIsYy5zdHlsZS5tYXJnaW5SaWdodD1jLnN0eWxlLndpZHRoPVwiMFwiLGguc3R5bGUud2lkdGg9XCIxcHhcIixFYS5hcHBlbmRDaGlsZChnKSxiPSFwYXJzZUZsb2F0KGEuZ2V0Q29tcHV0ZWRTdHlsZShjKS5tYXJnaW5SaWdodCksRWEucmVtb3ZlQ2hpbGQoZyksaC5yZW1vdmVDaGlsZChjKSxifX0pfX0oKTtmdW5jdGlvbiBGYShhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLnN0eWxlO3JldHVybiBjPWN8fENhKGEpLGMmJihnPWMuZ2V0UHJvcGVydHlWYWx1ZShiKXx8Y1tiXSxcIlwiIT09Z3x8bi5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSl8fChnPW4uc3R5bGUoYSxiKSksIWwucGl4ZWxNYXJnaW5SaWdodCgpJiZCYS50ZXN0KGcpJiZBYS50ZXN0KGIpJiYoZD1oLndpZHRoLGU9aC5taW5XaWR0aCxmPWgubWF4V2lkdGgsaC5taW5XaWR0aD1oLm1heFdpZHRoPWgud2lkdGg9ZyxnPWMud2lkdGgsaC53aWR0aD1kLGgubWluV2lkdGg9ZSxoLm1heFdpZHRoPWYpKSx2b2lkIDAhPT1nP2crXCJcIjpnfWZ1bmN0aW9uIEdhKGEsYil7cmV0dXJue2dldDpmdW5jdGlvbigpe3JldHVybiBhKCk/dm9pZCBkZWxldGUgdGhpcy5nZXQ6KHRoaXMuZ2V0PWIpLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fXZhciBIYT0vXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sSWE9e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix2aXNpYmlsaXR5OlwiaGlkZGVuXCIsZGlzcGxheTpcImJsb2NrXCJ9LEphPXtsZXR0ZXJTcGFjaW5nOlwiMFwiLGZvbnRXZWlnaHQ6XCI0MDBcIn0sS2E9W1wiV2Via2l0XCIsXCJPXCIsXCJNb3pcIixcIm1zXCJdLExhPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZTtmdW5jdGlvbiBNYShhKXtpZihhIGluIExhKXJldHVybiBhO3ZhciBiPWFbMF0udG9VcHBlckNhc2UoKSthLnNsaWNlKDEpLGM9S2EubGVuZ3RoO3doaWxlKGMtLSlpZihhPUthW2NdK2IsYSBpbiBMYSlyZXR1cm4gYX1mdW5jdGlvbiBOYShhLGIsYyl7dmFyIGQ9VC5leGVjKGIpO3JldHVybiBkP01hdGgubWF4KDAsZFsyXS0oY3x8MCkpKyhkWzNdfHxcInB4XCIpOmJ9ZnVuY3Rpb24gT2EoYSxiLGMsZCxlKXtmb3IodmFyIGY9Yz09PShkP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpPzQ6XCJ3aWR0aFwiPT09Yj8xOjAsZz0wOzQ+ZjtmKz0yKVwibWFyZ2luXCI9PT1jJiYoZys9bi5jc3MoYSxjK1VbZl0sITAsZSkpLGQ/KFwiY29udGVudFwiPT09YyYmKGctPW4uY3NzKGEsXCJwYWRkaW5nXCIrVVtmXSwhMCxlKSksXCJtYXJnaW5cIiE9PWMmJihnLT1uLmNzcyhhLFwiYm9yZGVyXCIrVVtmXStcIldpZHRoXCIsITAsZSkpKTooZys9bi5jc3MoYSxcInBhZGRpbmdcIitVW2ZdLCEwLGUpLFwicGFkZGluZ1wiIT09YyYmKGcrPW4uY3NzKGEsXCJib3JkZXJcIitVW2ZdK1wiV2lkdGhcIiwhMCxlKSkpO3JldHVybiBnfWZ1bmN0aW9uIFBhKGIsYyxlKXt2YXIgZj0hMCxnPVwid2lkdGhcIj09PWM/Yi5vZmZzZXRXaWR0aDpiLm9mZnNldEhlaWdodCxoPUNhKGIpLGk9XCJib3JkZXItYm94XCI9PT1uLmNzcyhiLFwiYm94U2l6aW5nXCIsITEsaCk7aWYoZC5tc0Z1bGxzY3JlZW5FbGVtZW50JiZhLnRvcCE9PWEmJmIuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgmJihnPU1hdGgucm91bmQoMTAwKmIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbY10pKSwwPj1nfHxudWxsPT1nKXtpZihnPUZhKGIsYyxoKSwoMD5nfHxudWxsPT1nKSYmKGc9Yi5zdHlsZVtjXSksQmEudGVzdChnKSlyZXR1cm4gZztmPWkmJihsLmJveFNpemluZ1JlbGlhYmxlKCl8fGc9PT1iLnN0eWxlW2NdKSxnPXBhcnNlRmxvYXQoZyl8fDB9cmV0dXJuIGcrT2EoYixjLGV8fChpP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpLGYsaCkrXCJweFwifWZ1bmN0aW9uIFFhKGEsYil7Zm9yKHZhciBjLGQsZSxmPVtdLGc9MCxoPWEubGVuZ3RoO2g+ZztnKyspZD1hW2ddLGQuc3R5bGUmJihmW2ddPU4uZ2V0KGQsXCJvbGRkaXNwbGF5XCIpLGM9ZC5zdHlsZS5kaXNwbGF5LGI/KGZbZ118fFwibm9uZVwiIT09Y3x8KGQuc3R5bGUuZGlzcGxheT1cIlwiKSxcIlwiPT09ZC5zdHlsZS5kaXNwbGF5JiZWKGQpJiYoZltnXT1OLmFjY2VzcyhkLFwib2xkZGlzcGxheVwiLHphKGQubm9kZU5hbWUpKSkpOihlPVYoZCksXCJub25lXCI9PT1jJiZlfHxOLnNldChkLFwib2xkZGlzcGxheVwiLGU/YzpuLmNzcyhkLFwiZGlzcGxheVwiKSkpKTtmb3IoZz0wO2g+ZztnKyspZD1hW2ddLGQuc3R5bGUmJihiJiZcIm5vbmVcIiE9PWQuc3R5bGUuZGlzcGxheSYmXCJcIiE9PWQuc3R5bGUuZGlzcGxheXx8KGQuc3R5bGUuZGlzcGxheT1iP2ZbZ118fFwiXCI6XCJub25lXCIpKTtyZXR1cm4gYX1uLmV4dGVuZCh7Y3NzSG9va3M6e29wYWNpdHk6e2dldDpmdW5jdGlvbihhLGIpe2lmKGIpe3ZhciBjPUZhKGEsXCJvcGFjaXR5XCIpO3JldHVyblwiXCI9PT1jP1wiMVwiOmN9fX19LGNzc051bWJlcjp7YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ITAsY29sdW1uQ291bnQ6ITAsZmlsbE9wYWNpdHk6ITAsZmxleEdyb3c6ITAsZmxleFNocmluazohMCxmb250V2VpZ2h0OiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcmRlcjohMCxvcnBoYW5zOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMH0sY3NzUHJvcHM6e1wiZmxvYXRcIjpcImNzc0Zsb2F0XCJ9LHN0eWxlOmZ1bmN0aW9uKGEsYixjLGQpe2lmKGEmJjMhPT1hLm5vZGVUeXBlJiY4IT09YS5ub2RlVHlwZSYmYS5zdHlsZSl7dmFyIGUsZixnLGg9bi5jYW1lbENhc2UoYiksaT1hLnN0eWxlO3JldHVybiBiPW4uY3NzUHJvcHNbaF18fChuLmNzc1Byb3BzW2hdPU1hKGgpfHxoKSxnPW4uY3NzSG9va3NbYl18fG4uY3NzSG9va3NbaF0sdm9pZCAwPT09Yz9nJiZcImdldFwiaW4gZyYmdm9pZCAwIT09KGU9Zy5nZXQoYSwhMSxkKSk/ZTppW2JdOihmPXR5cGVvZiBjLFwic3RyaW5nXCI9PT1mJiYoZT1ULmV4ZWMoYykpJiZlWzFdJiYoYz1XKGEsYixlKSxmPVwibnVtYmVyXCIpLG51bGwhPWMmJmM9PT1jJiYoXCJudW1iZXJcIj09PWYmJihjKz1lJiZlWzNdfHwobi5jc3NOdW1iZXJbaF0/XCJcIjpcInB4XCIpKSxsLmNsZWFyQ2xvbmVTdHlsZXx8XCJcIiE9PWN8fDAhPT1iLmluZGV4T2YoXCJiYWNrZ3JvdW5kXCIpfHwoaVtiXT1cImluaGVyaXRcIiksZyYmXCJzZXRcImluIGcmJnZvaWQgMD09PShjPWcuc2V0KGEsYyxkKSl8fChpW2JdPWMpKSx2b2lkIDApfX0sY3NzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZyxoPW4uY2FtZWxDYXNlKGIpO3JldHVybiBiPW4uY3NzUHJvcHNbaF18fChuLmNzc1Byb3BzW2hdPU1hKGgpfHxoKSxnPW4uY3NzSG9va3NbYl18fG4uY3NzSG9va3NbaF0sZyYmXCJnZXRcImluIGcmJihlPWcuZ2V0KGEsITAsYykpLHZvaWQgMD09PWUmJihlPUZhKGEsYixkKSksXCJub3JtYWxcIj09PWUmJmIgaW4gSmEmJihlPUphW2JdKSxcIlwiPT09Y3x8Yz8oZj1wYXJzZUZsb2F0KGUpLGM9PT0hMHx8aXNGaW5pdGUoZik/Znx8MDplKTplfX0pLG4uZWFjaChbXCJoZWlnaHRcIixcIndpZHRoXCJdLGZ1bmN0aW9uKGEsYil7bi5jc3NIb29rc1tiXT17Z2V0OmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gYz9IYS50ZXN0KG4uY3NzKGEsXCJkaXNwbGF5XCIpKSYmMD09PWEub2Zmc2V0V2lkdGg/RGEoYSxJYSxmdW5jdGlvbigpe3JldHVybiBQYShhLGIsZCl9KTpQYShhLGIsZCk6dm9pZCAwfSxzZXQ6ZnVuY3Rpb24oYSxjLGQpe3ZhciBlLGY9ZCYmQ2EoYSksZz1kJiZPYShhLGIsZCxcImJvcmRlci1ib3hcIj09PW4uY3NzKGEsXCJib3hTaXppbmdcIiwhMSxmKSxmKTtyZXR1cm4gZyYmKGU9VC5leGVjKGMpKSYmXCJweFwiIT09KGVbM118fFwicHhcIikmJihhLnN0eWxlW2JdPWMsYz1uLmNzcyhhLGIpKSxOYShhLGMsZyl9fX0pLG4uY3NzSG9va3MubWFyZ2luTGVmdD1HYShsLnJlbGlhYmxlTWFyZ2luTGVmdCxmdW5jdGlvbihhLGIpe3JldHVybiBiPyhwYXJzZUZsb2F0KEZhKGEsXCJtYXJnaW5MZWZ0XCIpKXx8YS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LURhKGEse21hcmdpbkxlZnQ6MH0sZnVuY3Rpb24oKXtyZXR1cm4gYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0fSkpK1wicHhcIjp2b2lkIDB9KSxuLmNzc0hvb2tzLm1hcmdpblJpZ2h0PUdhKGwucmVsaWFibGVNYXJnaW5SaWdodCxmdW5jdGlvbihhLGIpe3JldHVybiBiP0RhKGEse2Rpc3BsYXk6XCJpbmxpbmUtYmxvY2tcIn0sRmEsW2EsXCJtYXJnaW5SaWdodFwiXSk6dm9pZCAwfSksbi5lYWNoKHttYXJnaW46XCJcIixwYWRkaW5nOlwiXCIsYm9yZGVyOlwiV2lkdGhcIn0sZnVuY3Rpb24oYSxiKXtuLmNzc0hvb2tzW2ErYl09e2V4cGFuZDpmdW5jdGlvbihjKXtmb3IodmFyIGQ9MCxlPXt9LGY9XCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5zcGxpdChcIiBcIik6W2NdOzQ+ZDtkKyspZVthK1VbZF0rYl09ZltkXXx8ZltkLTJdfHxmWzBdO3JldHVybiBlfX0sQWEudGVzdChhKXx8KG4uY3NzSG9va3NbYStiXS5zZXQ9TmEpfSksbi5mbi5leHRlbmQoe2NzczpmdW5jdGlvbihhLGIpe3JldHVybiBLKHRoaXMsZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj17fSxnPTA7aWYobi5pc0FycmF5KGIpKXtmb3IoZD1DYShhKSxlPWIubGVuZ3RoO2U+ZztnKyspZltiW2ddXT1uLmNzcyhhLGJbZ10sITEsZCk7cmV0dXJuIGZ9cmV0dXJuIHZvaWQgMCE9PWM/bi5zdHlsZShhLGIsYyk6bi5jc3MoYSxiKX0sYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHNob3c6ZnVuY3Rpb24oKXtyZXR1cm4gUWEodGhpcywhMCl9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gUWEodGhpcyl9LHRvZ2dsZTpmdW5jdGlvbihhKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGE/YT90aGlzLnNob3coKTp0aGlzLmhpZGUoKTp0aGlzLmVhY2goZnVuY3Rpb24oKXtWKHRoaXMpP24odGhpcykuc2hvdygpOm4odGhpcykuaGlkZSgpfSl9fSk7ZnVuY3Rpb24gUmEoYSxiLGMsZCxlKXtyZXR1cm4gbmV3IFJhLnByb3RvdHlwZS5pbml0KGEsYixjLGQsZSl9bi5Ud2Vlbj1SYSxSYS5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOlJhLGluaXQ6ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3RoaXMuZWxlbT1hLHRoaXMucHJvcD1jLHRoaXMuZWFzaW5nPWV8fG4uZWFzaW5nLl9kZWZhdWx0LHRoaXMub3B0aW9ucz1iLHRoaXMuc3RhcnQ9dGhpcy5ub3c9dGhpcy5jdXIoKSx0aGlzLmVuZD1kLHRoaXMudW5pdD1mfHwobi5jc3NOdW1iZXJbY10/XCJcIjpcInB4XCIpfSxjdXI6ZnVuY3Rpb24oKXt2YXIgYT1SYS5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gYSYmYS5nZXQ/YS5nZXQodGhpcyk6UmEucHJvcEhvb2tzLl9kZWZhdWx0LmdldCh0aGlzKX0scnVuOmZ1bmN0aW9uKGEpe3ZhciBiLGM9UmEucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIHRoaXMub3B0aW9ucy5kdXJhdGlvbj90aGlzLnBvcz1iPW4uZWFzaW5nW3RoaXMuZWFzaW5nXShhLHRoaXMub3B0aW9ucy5kdXJhdGlvbiphLDAsMSx0aGlzLm9wdGlvbnMuZHVyYXRpb24pOnRoaXMucG9zPWI9YSx0aGlzLm5vdz0odGhpcy5lbmQtdGhpcy5zdGFydCkqYit0aGlzLnN0YXJ0LHRoaXMub3B0aW9ucy5zdGVwJiZ0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSx0aGlzLm5vdyx0aGlzKSxjJiZjLnNldD9jLnNldCh0aGlzKTpSYS5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KHRoaXMpLHRoaXN9fSxSYS5wcm90b3R5cGUuaW5pdC5wcm90b3R5cGU9UmEucHJvdG90eXBlLFJhLnByb3BIb29rcz17X2RlZmF1bHQ6e2dldDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm4gMSE9PWEuZWxlbS5ub2RlVHlwZXx8bnVsbCE9YS5lbGVtW2EucHJvcF0mJm51bGw9PWEuZWxlbS5zdHlsZVthLnByb3BdP2EuZWxlbVthLnByb3BdOihiPW4uY3NzKGEuZWxlbSxhLnByb3AsXCJcIiksYiYmXCJhdXRvXCIhPT1iP2I6MCl9LHNldDpmdW5jdGlvbihhKXtuLmZ4LnN0ZXBbYS5wcm9wXT9uLmZ4LnN0ZXBbYS5wcm9wXShhKToxIT09YS5lbGVtLm5vZGVUeXBlfHxudWxsPT1hLmVsZW0uc3R5bGVbbi5jc3NQcm9wc1thLnByb3BdXSYmIW4uY3NzSG9va3NbYS5wcm9wXT9hLmVsZW1bYS5wcm9wXT1hLm5vdzpuLnN0eWxlKGEuZWxlbSxhLnByb3AsYS5ub3crYS51bml0KX19fSxSYS5wcm9wSG9va3Muc2Nyb2xsVG9wPVJhLnByb3BIb29rcy5zY3JvbGxMZWZ0PXtzZXQ6ZnVuY3Rpb24oYSl7YS5lbGVtLm5vZGVUeXBlJiZhLmVsZW0ucGFyZW50Tm9kZSYmKGEuZWxlbVthLnByb3BdPWEubm93KX19LG4uZWFzaW5nPXtsaW5lYXI6ZnVuY3Rpb24oYSl7cmV0dXJuIGF9LHN3aW5nOmZ1bmN0aW9uKGEpe3JldHVybi41LU1hdGguY29zKGEqTWF0aC5QSSkvMn0sX2RlZmF1bHQ6XCJzd2luZ1wifSxuLmZ4PVJhLnByb3RvdHlwZS5pbml0LG4uZnguc3RlcD17fTt2YXIgU2EsVGEsVWE9L14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLFZhPS9xdWV1ZUhvb2tzJC87ZnVuY3Rpb24gV2EoKXtyZXR1cm4gYS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7U2E9dm9pZCAwfSksU2E9bi5ub3coKX1mdW5jdGlvbiBYYShhLGIpe3ZhciBjLGQ9MCxlPXtoZWlnaHQ6YX07Zm9yKGI9Yj8xOjA7ND5kO2QrPTItYiljPVVbZF0sZVtcIm1hcmdpblwiK2NdPWVbXCJwYWRkaW5nXCIrY109YTtyZXR1cm4gYiYmKGUub3BhY2l0eT1lLndpZHRoPWEpLGV9ZnVuY3Rpb24gWWEoYSxiLGMpe2Zvcih2YXIgZCxlPShfYS50d2VlbmVyc1tiXXx8W10pLmNvbmNhdChfYS50d2VlbmVyc1tcIipcIl0pLGY9MCxnPWUubGVuZ3RoO2c+ZjtmKyspaWYoZD1lW2ZdLmNhbGwoYyxiLGEpKXJldHVybiBkfWZ1bmN0aW9uIFphKGEsYixjKXt2YXIgZCxlLGYsZyxoLGksaixrLGw9dGhpcyxtPXt9LG89YS5zdHlsZSxwPWEubm9kZVR5cGUmJlYoYSkscT1OLmdldChhLFwiZnhzaG93XCIpO2MucXVldWV8fChoPW4uX3F1ZXVlSG9va3MoYSxcImZ4XCIpLG51bGw9PWgudW5xdWV1ZWQmJihoLnVucXVldWVkPTAsaT1oLmVtcHR5LmZpcmUsaC5lbXB0eS5maXJlPWZ1bmN0aW9uKCl7aC51bnF1ZXVlZHx8aSgpfSksaC51bnF1ZXVlZCsrLGwuYWx3YXlzKGZ1bmN0aW9uKCl7bC5hbHdheXMoZnVuY3Rpb24oKXtoLnVucXVldWVkLS0sbi5xdWV1ZShhLFwiZnhcIikubGVuZ3RofHxoLmVtcHR5LmZpcmUoKX0pfSkpLDE9PT1hLm5vZGVUeXBlJiYoXCJoZWlnaHRcImluIGJ8fFwid2lkdGhcImluIGIpJiYoYy5vdmVyZmxvdz1bby5vdmVyZmxvdyxvLm92ZXJmbG93WCxvLm92ZXJmbG93WV0saj1uLmNzcyhhLFwiZGlzcGxheVwiKSxrPVwibm9uZVwiPT09aj9OLmdldChhLFwib2xkZGlzcGxheVwiKXx8emEoYS5ub2RlTmFtZSk6aixcImlubGluZVwiPT09ayYmXCJub25lXCI9PT1uLmNzcyhhLFwiZmxvYXRcIikmJihvLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIikpLGMub3ZlcmZsb3cmJihvLm92ZXJmbG93PVwiaGlkZGVuXCIsbC5hbHdheXMoZnVuY3Rpb24oKXtvLm92ZXJmbG93PWMub3ZlcmZsb3dbMF0sby5vdmVyZmxvd1g9Yy5vdmVyZmxvd1sxXSxvLm92ZXJmbG93WT1jLm92ZXJmbG93WzJdfSkpO2ZvcihkIGluIGIpaWYoZT1iW2RdLFVhLmV4ZWMoZSkpe2lmKGRlbGV0ZSBiW2RdLGY9Znx8XCJ0b2dnbGVcIj09PWUsZT09PShwP1wiaGlkZVwiOlwic2hvd1wiKSl7aWYoXCJzaG93XCIhPT1lfHwhcXx8dm9pZCAwPT09cVtkXSljb250aW51ZTtwPSEwfW1bZF09cSYmcVtkXXx8bi5zdHlsZShhLGQpfWVsc2Ugaj12b2lkIDA7aWYobi5pc0VtcHR5T2JqZWN0KG0pKVwiaW5saW5lXCI9PT0oXCJub25lXCI9PT1qP3phKGEubm9kZU5hbWUpOmopJiYoby5kaXNwbGF5PWopO2Vsc2V7cT9cImhpZGRlblwiaW4gcSYmKHA9cS5oaWRkZW4pOnE9Ti5hY2Nlc3MoYSxcImZ4c2hvd1wiLHt9KSxmJiYocS5oaWRkZW49IXApLHA/bihhKS5zaG93KCk6bC5kb25lKGZ1bmN0aW9uKCl7bihhKS5oaWRlKCl9KSxsLmRvbmUoZnVuY3Rpb24oKXt2YXIgYjtOLnJlbW92ZShhLFwiZnhzaG93XCIpO2ZvcihiIGluIG0pbi5zdHlsZShhLGIsbVtiXSl9KTtmb3IoZCBpbiBtKWc9WWEocD9xW2RdOjAsZCxsKSxkIGluIHF8fChxW2RdPWcuc3RhcnQscCYmKGcuZW5kPWcuc3RhcnQsZy5zdGFydD1cIndpZHRoXCI9PT1kfHxcImhlaWdodFwiPT09ZD8xOjApKX19ZnVuY3Rpb24gJGEoYSxiKXt2YXIgYyxkLGUsZixnO2ZvcihjIGluIGEpaWYoZD1uLmNhbWVsQ2FzZShjKSxlPWJbZF0sZj1hW2NdLG4uaXNBcnJheShmKSYmKGU9ZlsxXSxmPWFbY109ZlswXSksYyE9PWQmJihhW2RdPWYsZGVsZXRlIGFbY10pLGc9bi5jc3NIb29rc1tkXSxnJiZcImV4cGFuZFwiaW4gZyl7Zj1nLmV4cGFuZChmKSxkZWxldGUgYVtkXTtmb3IoYyBpbiBmKWMgaW4gYXx8KGFbY109ZltjXSxiW2NdPWUpfWVsc2UgYltkXT1lfWZ1bmN0aW9uIF9hKGEsYixjKXt2YXIgZCxlLGY9MCxnPV9hLnByZWZpbHRlcnMubGVuZ3RoLGg9bi5EZWZlcnJlZCgpLmFsd2F5cyhmdW5jdGlvbigpe2RlbGV0ZSBpLmVsZW19KSxpPWZ1bmN0aW9uKCl7aWYoZSlyZXR1cm4hMTtmb3IodmFyIGI9U2F8fFdhKCksYz1NYXRoLm1heCgwLGouc3RhcnRUaW1lK2ouZHVyYXRpb24tYiksZD1jL2ouZHVyYXRpb258fDAsZj0xLWQsZz0wLGk9ai50d2VlbnMubGVuZ3RoO2k+ZztnKyspai50d2VlbnNbZ10ucnVuKGYpO3JldHVybiBoLm5vdGlmeVdpdGgoYSxbaixmLGNdKSwxPmYmJmk/YzooaC5yZXNvbHZlV2l0aChhLFtqXSksITEpfSxqPWgucHJvbWlzZSh7ZWxlbTphLHByb3BzOm4uZXh0ZW5kKHt9LGIpLG9wdHM6bi5leHRlbmQoITAse3NwZWNpYWxFYXNpbmc6e30sZWFzaW5nOm4uZWFzaW5nLl9kZWZhdWx0fSxjKSxvcmlnaW5hbFByb3BlcnRpZXM6YixvcmlnaW5hbE9wdGlvbnM6YyxzdGFydFRpbWU6U2F8fFdhKCksZHVyYXRpb246Yy5kdXJhdGlvbix0d2VlbnM6W10sY3JlYXRlVHdlZW46ZnVuY3Rpb24oYixjKXt2YXIgZD1uLlR3ZWVuKGEsai5vcHRzLGIsYyxqLm9wdHMuc3BlY2lhbEVhc2luZ1tiXXx8ai5vcHRzLmVhc2luZyk7cmV0dXJuIGoudHdlZW5zLnB1c2goZCksZH0sc3RvcDpmdW5jdGlvbihiKXt2YXIgYz0wLGQ9Yj9qLnR3ZWVucy5sZW5ndGg6MDtpZihlKXJldHVybiB0aGlzO2ZvcihlPSEwO2Q+YztjKyspai50d2VlbnNbY10ucnVuKDEpO3JldHVybiBiPyhoLm5vdGlmeVdpdGgoYSxbaiwxLDBdKSxoLnJlc29sdmVXaXRoKGEsW2osYl0pKTpoLnJlamVjdFdpdGgoYSxbaixiXSksdGhpc319KSxrPWoucHJvcHM7Zm9yKCRhKGssai5vcHRzLnNwZWNpYWxFYXNpbmcpO2c+ZjtmKyspaWYoZD1fYS5wcmVmaWx0ZXJzW2ZdLmNhbGwoaixhLGssai5vcHRzKSlyZXR1cm4gbi5pc0Z1bmN0aW9uKGQuc3RvcCkmJihuLl9xdWV1ZUhvb2tzKGouZWxlbSxqLm9wdHMucXVldWUpLnN0b3A9bi5wcm94eShkLnN0b3AsZCkpLGQ7cmV0dXJuIG4ubWFwKGssWWEsaiksbi5pc0Z1bmN0aW9uKGoub3B0cy5zdGFydCkmJmoub3B0cy5zdGFydC5jYWxsKGEsaiksbi5meC50aW1lcihuLmV4dGVuZChpLHtlbGVtOmEsYW5pbTpqLHF1ZXVlOmoub3B0cy5xdWV1ZX0pKSxqLnByb2dyZXNzKGoub3B0cy5wcm9ncmVzcykuZG9uZShqLm9wdHMuZG9uZSxqLm9wdHMuY29tcGxldGUpLmZhaWwoai5vcHRzLmZhaWwpLmFsd2F5cyhqLm9wdHMuYWx3YXlzKX1uLkFuaW1hdGlvbj1uLmV4dGVuZChfYSx7dHdlZW5lcnM6e1wiKlwiOltmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuY3JlYXRlVHdlZW4oYSxiKTtyZXR1cm4gVyhjLmVsZW0sYSxULmV4ZWMoYiksYyksY31dfSx0d2VlbmVyOmZ1bmN0aW9uKGEsYil7bi5pc0Z1bmN0aW9uKGEpPyhiPWEsYT1bXCIqXCJdKTphPWEubWF0Y2goRyk7Zm9yKHZhciBjLGQ9MCxlPWEubGVuZ3RoO2U+ZDtkKyspYz1hW2RdLF9hLnR3ZWVuZXJzW2NdPV9hLnR3ZWVuZXJzW2NdfHxbXSxfYS50d2VlbmVyc1tjXS51bnNoaWZ0KGIpfSxwcmVmaWx0ZXJzOltaYV0scHJlZmlsdGVyOmZ1bmN0aW9uKGEsYil7Yj9fYS5wcmVmaWx0ZXJzLnVuc2hpZnQoYSk6X2EucHJlZmlsdGVycy5wdXNoKGEpfX0pLG4uc3BlZWQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWEmJlwib2JqZWN0XCI9PXR5cGVvZiBhP24uZXh0ZW5kKHt9LGEpOntjb21wbGV0ZTpjfHwhYyYmYnx8bi5pc0Z1bmN0aW9uKGEpJiZhLGR1cmF0aW9uOmEsZWFzaW5nOmMmJmJ8fGImJiFuLmlzRnVuY3Rpb24oYikmJmJ9O3JldHVybiBkLmR1cmF0aW9uPW4uZngub2ZmPzA6XCJudW1iZXJcIj09dHlwZW9mIGQuZHVyYXRpb24/ZC5kdXJhdGlvbjpkLmR1cmF0aW9uIGluIG4uZnguc3BlZWRzP24uZnguc3BlZWRzW2QuZHVyYXRpb25dOm4uZnguc3BlZWRzLl9kZWZhdWx0LChudWxsPT1kLnF1ZXVlfHxkLnF1ZXVlPT09ITApJiYoZC5xdWV1ZT1cImZ4XCIpLGQub2xkPWQuY29tcGxldGUsZC5jb21wbGV0ZT1mdW5jdGlvbigpe24uaXNGdW5jdGlvbihkLm9sZCkmJmQub2xkLmNhbGwodGhpcyksZC5xdWV1ZSYmbi5kZXF1ZXVlKHRoaXMsZC5xdWV1ZSl9LGR9LG4uZm4uZXh0ZW5kKHtmYWRlVG86ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMuZmlsdGVyKFYpLmNzcyhcIm9wYWNpdHlcIiwwKS5zaG93KCkuZW5kKCkuYW5pbWF0ZSh7b3BhY2l0eTpifSxhLGMsZCl9LGFuaW1hdGU6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9bi5pc0VtcHR5T2JqZWN0KGEpLGY9bi5zcGVlZChiLGMsZCksZz1mdW5jdGlvbigpe3ZhciBiPV9hKHRoaXMsbi5leHRlbmQoe30sYSksZik7KGV8fE4uZ2V0KHRoaXMsXCJmaW5pc2hcIikpJiZiLnN0b3AoITApfTtyZXR1cm4gZy5maW5pc2g9ZyxlfHxmLnF1ZXVlPT09ITE/dGhpcy5lYWNoKGcpOnRoaXMucXVldWUoZi5xdWV1ZSxnKX0sc3RvcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5zdG9wO2RlbGV0ZSBhLnN0b3AsYihjKX07cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGEmJihjPWIsYj1hLGE9dm9pZCAwKSxiJiZhIT09ITEmJnRoaXMucXVldWUoYXx8XCJmeFwiLFtdKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj0hMCxlPW51bGwhPWEmJmErXCJxdWV1ZUhvb2tzXCIsZj1uLnRpbWVycyxnPU4uZ2V0KHRoaXMpO2lmKGUpZ1tlXSYmZ1tlXS5zdG9wJiZkKGdbZV0pO2Vsc2UgZm9yKGUgaW4gZylnW2VdJiZnW2VdLnN0b3AmJlZhLnRlc3QoZSkmJmQoZ1tlXSk7Zm9yKGU9Zi5sZW5ndGg7ZS0tOylmW2VdLmVsZW0hPT10aGlzfHxudWxsIT1hJiZmW2VdLnF1ZXVlIT09YXx8KGZbZV0uYW5pbS5zdG9wKGMpLGI9ITEsZi5zcGxpY2UoZSwxKSk7KGJ8fCFjKSYmbi5kZXF1ZXVlKHRoaXMsYSl9KX0sZmluaXNoOmZ1bmN0aW9uKGEpe3JldHVybiBhIT09ITEmJihhPWF8fFwiZnhcIiksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGIsYz1OLmdldCh0aGlzKSxkPWNbYStcInF1ZXVlXCJdLGU9Y1thK1wicXVldWVIb29rc1wiXSxmPW4udGltZXJzLGc9ZD9kLmxlbmd0aDowO2ZvcihjLmZpbmlzaD0hMCxuLnF1ZXVlKHRoaXMsYSxbXSksZSYmZS5zdG9wJiZlLnN0b3AuY2FsbCh0aGlzLCEwKSxiPWYubGVuZ3RoO2ItLTspZltiXS5lbGVtPT09dGhpcyYmZltiXS5xdWV1ZT09PWEmJihmW2JdLmFuaW0uc3RvcCghMCksZi5zcGxpY2UoYiwxKSk7Zm9yKGI9MDtnPmI7YisrKWRbYl0mJmRbYl0uZmluaXNoJiZkW2JdLmZpbmlzaC5jYWxsKHRoaXMpO2RlbGV0ZSBjLmZpbmlzaH0pfX0pLG4uZWFjaChbXCJ0b2dnbGVcIixcInNob3dcIixcImhpZGVcIl0sZnVuY3Rpb24oYSxiKXt2YXIgYz1uLmZuW2JdO24uZm5bYl09ZnVuY3Rpb24oYSxkLGUpe3JldHVybiBudWxsPT1hfHxcImJvb2xlYW5cIj09dHlwZW9mIGE/Yy5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dGhpcy5hbmltYXRlKFhhKGIsITApLGEsZCxlKX19KSxuLmVhY2goe3NsaWRlRG93bjpYYShcInNob3dcIiksc2xpZGVVcDpYYShcImhpZGVcIiksc2xpZGVUb2dnbGU6WGEoXCJ0b2dnbGVcIiksZmFkZUluOntvcGFjaXR5Olwic2hvd1wifSxmYWRlT3V0OntvcGFjaXR5OlwiaGlkZVwifSxmYWRlVG9nZ2xlOntvcGFjaXR5OlwidG9nZ2xlXCJ9fSxmdW5jdGlvbihhLGIpe24uZm5bYV09ZnVuY3Rpb24oYSxjLGQpe3JldHVybiB0aGlzLmFuaW1hdGUoYixhLGMsZCl9fSksbi50aW1lcnM9W10sbi5meC50aWNrPWZ1bmN0aW9uKCl7dmFyIGEsYj0wLGM9bi50aW1lcnM7Zm9yKFNhPW4ubm93KCk7YjxjLmxlbmd0aDtiKyspYT1jW2JdLGEoKXx8Y1tiXSE9PWF8fGMuc3BsaWNlKGItLSwxKTtjLmxlbmd0aHx8bi5meC5zdG9wKCksU2E9dm9pZCAwfSxuLmZ4LnRpbWVyPWZ1bmN0aW9uKGEpe24udGltZXJzLnB1c2goYSksYSgpP24uZnguc3RhcnQoKTpuLnRpbWVycy5wb3AoKX0sbi5meC5pbnRlcnZhbD0xMyxuLmZ4LnN0YXJ0PWZ1bmN0aW9uKCl7VGF8fChUYT1hLnNldEludGVydmFsKG4uZngudGljayxuLmZ4LmludGVydmFsKSl9LG4uZnguc3RvcD1mdW5jdGlvbigpe2EuY2xlYXJJbnRlcnZhbChUYSksVGE9bnVsbH0sbi5meC5zcGVlZHM9e3Nsb3c6NjAwLGZhc3Q6MjAwLF9kZWZhdWx0OjQwMH0sbi5mbi5kZWxheT1mdW5jdGlvbihiLGMpe3JldHVybiBiPW4uZng/bi5meC5zcGVlZHNbYl18fGI6YixjPWN8fFwiZnhcIix0aGlzLnF1ZXVlKGMsZnVuY3Rpb24oYyxkKXt2YXIgZT1hLnNldFRpbWVvdXQoYyxiKTtkLnN0b3A9ZnVuY3Rpb24oKXthLmNsZWFyVGltZW91dChlKX19KX0sZnVuY3Rpb24oKXt2YXIgYT1kLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxiPWQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSxjPWIuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKTthLnR5cGU9XCJjaGVja2JveFwiLGwuY2hlY2tPbj1cIlwiIT09YS52YWx1ZSxsLm9wdFNlbGVjdGVkPWMuc2VsZWN0ZWQsYi5kaXNhYmxlZD0hMCxsLm9wdERpc2FibGVkPSFjLmRpc2FibGVkLGE9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYS52YWx1ZT1cInRcIixhLnR5cGU9XCJyYWRpb1wiLGwucmFkaW9WYWx1ZT1cInRcIj09PWEudmFsdWV9KCk7dmFyIGFiLGJiPW4uZXhwci5hdHRySGFuZGxlO24uZm4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIEsodGhpcyxuLmF0dHIsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24ucmVtb3ZlQXR0cih0aGlzLGEpfSl9fSksbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj1hLm5vZGVUeXBlO2lmKDMhPT1mJiY4IT09ZiYmMiE9PWYpcmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGEuZ2V0QXR0cmlidXRlP24ucHJvcChhLGIsYyk6KDE9PT1mJiZuLmlzWE1MRG9jKGEpfHwoYj1iLnRvTG93ZXJDYXNlKCksZT1uLmF0dHJIb29rc1tiXXx8KG4uZXhwci5tYXRjaC5ib29sLnRlc3QoYik/YWI6dm9pZCAwKSksdm9pZCAwIT09Yz9udWxsPT09Yz92b2lkIG4ucmVtb3ZlQXR0cihhLGIpOmUmJlwic2V0XCJpbiBlJiZ2b2lkIDAhPT0oZD1lLnNldChhLGMsYikpP2Q6KGEuc2V0QXR0cmlidXRlKGIsYytcIlwiKSxjKTplJiZcImdldFwiaW4gZSYmbnVsbCE9PShkPWUuZ2V0KGEsYikpP2Q6KGQ9bi5maW5kLmF0dHIoYSxiKSxudWxsPT1kP3ZvaWQgMDpkKSl9LGF0dHJIb29rczp7dHlwZTp7c2V0OmZ1bmN0aW9uKGEsYil7aWYoIWwucmFkaW9WYWx1ZSYmXCJyYWRpb1wiPT09YiYmbi5ub2RlTmFtZShhLFwiaW5wdXRcIikpe3ZhciBjPWEudmFsdWU7cmV0dXJuIGEuc2V0QXR0cmlidXRlKFwidHlwZVwiLGIpLGMmJihhLnZhbHVlPWMpLGJ9fX19LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU9MCxmPWImJmIubWF0Y2goRyk7aWYoZiYmMT09PWEubm9kZVR5cGUpd2hpbGUoYz1mW2UrK10pZD1uLnByb3BGaXhbY118fGMsbi5leHByLm1hdGNoLmJvb2wudGVzdChjKSYmKGFbZF09ITEpLGEucmVtb3ZlQXR0cmlidXRlKGMpfX0pLGFiPXtzZXQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBiPT09ITE/bi5yZW1vdmVBdHRyKGEsYyk6YS5zZXRBdHRyaWJ1dGUoYyxjKSxjfX0sbi5lYWNoKG4uZXhwci5tYXRjaC5ib29sLnNvdXJjZS5tYXRjaCgvXFx3Ky9nKSxmdW5jdGlvbihhLGIpe3ZhciBjPWJiW2JdfHxuLmZpbmQuYXR0cjtiYltiXT1mdW5jdGlvbihhLGIsZCl7dmFyIGUsZjtyZXR1cm4gZHx8KGY9YmJbYl0sYmJbYl09ZSxlPW51bGwhPWMoYSxiLGQpP2IudG9Mb3dlckNhc2UoKTpudWxsLGJiW2JdPWYpLGV9fSk7dmFyIGNiPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksZGI9L14oPzphfGFyZWEpJC9pO24uZm4uZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGEsYil7cmV0dXJuIEsodGhpcyxuLnByb3AsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZVByb3A6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2RlbGV0ZSB0aGlzW24ucHJvcEZpeFthXXx8YV19KX19KSxuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPWEubm9kZVR5cGU7aWYoMyE9PWYmJjghPT1mJiYyIT09ZilyZXR1cm4gMT09PWYmJm4uaXNYTUxEb2MoYSl8fChiPW4ucHJvcEZpeFtiXXx8YixlPW4ucHJvcEhvb2tzW2JdKSx2b2lkIDAhPT1jP2UmJlwic2V0XCJpbiBlJiZ2b2lkIDAhPT0oZD1lLnNldChhLGMsYikpP2Q6YVtiXT1jOmUmJlwiZ2V0XCJpbiBlJiZudWxsIT09KGQ9ZS5nZXQoYSxiKSk/ZDphW2JdO1xufSxwcm9wSG9va3M6e3RhYkluZGV4OntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9bi5maW5kLmF0dHIoYSxcInRhYmluZGV4XCIpO3JldHVybiBiP3BhcnNlSW50KGIsMTApOmNiLnRlc3QoYS5ub2RlTmFtZSl8fGRiLnRlc3QoYS5ub2RlTmFtZSkmJmEuaHJlZj8wOi0xfX19LHByb3BGaXg6e1wiZm9yXCI6XCJodG1sRm9yXCIsXCJjbGFzc1wiOlwiY2xhc3NOYW1lXCJ9fSksbC5vcHRTZWxlY3RlZHx8KG4ucHJvcEhvb2tzLnNlbGVjdGVkPXtnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiZiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LG51bGx9fSksbi5lYWNoKFtcInRhYkluZGV4XCIsXCJyZWFkT25seVwiLFwibWF4TGVuZ3RoXCIsXCJjZWxsU3BhY2luZ1wiLFwiY2VsbFBhZGRpbmdcIixcInJvd1NwYW5cIixcImNvbFNwYW5cIixcInVzZU1hcFwiLFwiZnJhbWVCb3JkZXJcIixcImNvbnRlbnRFZGl0YWJsZVwiXSxmdW5jdGlvbigpe24ucHJvcEZpeFt0aGlzLnRvTG93ZXJDYXNlKCldPXRoaXN9KTt2YXIgZWI9L1tcXHRcXHJcXG5cXGZdL2c7ZnVuY3Rpb24gZmIoYSl7cmV0dXJuIGEuZ2V0QXR0cmlidXRlJiZhLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwifW4uZm4uZXh0ZW5kKHthZGRDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpPTA7aWYobi5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS5hZGRDbGFzcyhhLmNhbGwodGhpcyxiLGZiKHRoaXMpKSl9KTtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmYSl7Yj1hLm1hdGNoKEcpfHxbXTt3aGlsZShjPXRoaXNbaSsrXSlpZihlPWZiKGMpLGQ9MT09PWMubm9kZVR5cGUmJihcIiBcIitlK1wiIFwiKS5yZXBsYWNlKGViLFwiIFwiKSl7Zz0wO3doaWxlKGY9YltnKytdKWQuaW5kZXhPZihcIiBcIitmK1wiIFwiKTwwJiYoZCs9ZitcIiBcIik7aD1uLnRyaW0oZCksZSE9PWgmJmMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixoKX19cmV0dXJuIHRoaXN9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGk9MDtpZihuLmlzRnVuY3Rpb24oYSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLnJlbW92ZUNsYXNzKGEuY2FsbCh0aGlzLGIsZmIodGhpcykpKX0pO2lmKCFhcmd1bWVudHMubGVuZ3RoKXJldHVybiB0aGlzLmF0dHIoXCJjbGFzc1wiLFwiXCIpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiZhKXtiPWEubWF0Y2goRyl8fFtdO3doaWxlKGM9dGhpc1tpKytdKWlmKGU9ZmIoYyksZD0xPT09Yy5ub2RlVHlwZSYmKFwiIFwiK2UrXCIgXCIpLnJlcGxhY2UoZWIsXCIgXCIpKXtnPTA7d2hpbGUoZj1iW2crK10pd2hpbGUoZC5pbmRleE9mKFwiIFwiK2YrXCIgXCIpPi0xKWQ9ZC5yZXBsYWNlKFwiIFwiK2YrXCIgXCIsXCIgXCIpO2g9bi50cmltKGQpLGUhPT1oJiZjLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsaCl9fXJldHVybiB0aGlzfSx0b2dnbGVDbGFzczpmdW5jdGlvbihhLGIpe3ZhciBjPXR5cGVvZiBhO3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgYiYmXCJzdHJpbmdcIj09PWM/Yj90aGlzLmFkZENsYXNzKGEpOnRoaXMucmVtb3ZlQ2xhc3MoYSk6bi5pc0Z1bmN0aW9uKGEpP3RoaXMuZWFjaChmdW5jdGlvbihjKXtuKHRoaXMpLnRvZ2dsZUNsYXNzKGEuY2FsbCh0aGlzLGMsZmIodGhpcyksYiksYil9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYixkLGUsZjtpZihcInN0cmluZ1wiPT09Yyl7ZD0wLGU9bih0aGlzKSxmPWEubWF0Y2goRyl8fFtdO3doaWxlKGI9ZltkKytdKWUuaGFzQ2xhc3MoYik/ZS5yZW1vdmVDbGFzcyhiKTplLmFkZENsYXNzKGIpfWVsc2Uodm9pZCAwPT09YXx8XCJib29sZWFuXCI9PT1jKSYmKGI9ZmIodGhpcyksYiYmTi5zZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIixiKSx0aGlzLnNldEF0dHJpYnV0ZSYmdGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGJ8fGE9PT0hMT9cIlwiOk4uZ2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIpfHxcIlwiKSl9KX0saGFzQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkPTA7Yj1cIiBcIithK1wiIFwiO3doaWxlKGM9dGhpc1tkKytdKWlmKDE9PT1jLm5vZGVUeXBlJiYoXCIgXCIrZmIoYykrXCIgXCIpLnJlcGxhY2UoZWIsXCIgXCIpLmluZGV4T2YoYik+LTEpcmV0dXJuITA7cmV0dXJuITF9fSk7dmFyIGdiPS9cXHIvZztuLmZuLmV4dGVuZCh7dmFsOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlPXRoaXNbMF07e2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGQ9bi5pc0Z1bmN0aW9uKGEpLHRoaXMuZWFjaChmdW5jdGlvbihjKXt2YXIgZTsxPT09dGhpcy5ub2RlVHlwZSYmKGU9ZD9hLmNhbGwodGhpcyxjLG4odGhpcykudmFsKCkpOmEsbnVsbD09ZT9lPVwiXCI6XCJudW1iZXJcIj09dHlwZW9mIGU/ZSs9XCJcIjpuLmlzQXJyYXkoZSkmJihlPW4ubWFwKGUsZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjphK1wiXCJ9KSksYj1uLnZhbEhvb2tzW3RoaXMudHlwZV18fG4udmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcInNldFwiaW4gYiYmdm9pZCAwIT09Yi5zZXQodGhpcyxlLFwidmFsdWVcIil8fCh0aGlzLnZhbHVlPWUpKX0pO2lmKGUpcmV0dXJuIGI9bi52YWxIb29rc1tlLnR5cGVdfHxuLnZhbEhvb2tzW2Uubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJnZXRcImluIGImJnZvaWQgMCE9PShjPWIuZ2V0KGUsXCJ2YWx1ZVwiKSk/YzooYz1lLnZhbHVlLFwic3RyaW5nXCI9PXR5cGVvZiBjP2MucmVwbGFjZShnYixcIlwiKTpudWxsPT1jP1wiXCI6Yyl9fX0pLG4uZXh0ZW5kKHt2YWxIb29rczp7b3B0aW9uOntnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG4udHJpbShhLnZhbHVlKX19LHNlbGVjdDp7Z2V0OmZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjLGQ9YS5vcHRpb25zLGU9YS5zZWxlY3RlZEluZGV4LGY9XCJzZWxlY3Qtb25lXCI9PT1hLnR5cGV8fDA+ZSxnPWY/bnVsbDpbXSxoPWY/ZSsxOmQubGVuZ3RoLGk9MD5lP2g6Zj9lOjA7aD5pO2krKylpZihjPWRbaV0sKGMuc2VsZWN0ZWR8fGk9PT1lKSYmKGwub3B0RGlzYWJsZWQ/IWMuZGlzYWJsZWQ6bnVsbD09PWMuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikpJiYoIWMucGFyZW50Tm9kZS5kaXNhYmxlZHx8IW4ubm9kZU5hbWUoYy5wYXJlbnROb2RlLFwib3B0Z3JvdXBcIikpKXtpZihiPW4oYykudmFsKCksZilyZXR1cm4gYjtnLnB1c2goYil9cmV0dXJuIGd9LHNldDpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT1hLm9wdGlvbnMsZj1uLm1ha2VBcnJheShiKSxnPWUubGVuZ3RoO3doaWxlKGctLSlkPWVbZ10sKGQuc2VsZWN0ZWQ9bi5pbkFycmF5KG4udmFsSG9va3Mub3B0aW9uLmdldChkKSxmKT4tMSkmJihjPSEwKTtyZXR1cm4gY3x8KGEuc2VsZWN0ZWRJbmRleD0tMSksZn19fX0pLG4uZWFjaChbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0sZnVuY3Rpb24oKXtuLnZhbEhvb2tzW3RoaXNdPXtzZXQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbi5pc0FycmF5KGIpP2EuY2hlY2tlZD1uLmluQXJyYXkobihhKS52YWwoKSxiKT4tMTp2b2lkIDB9fSxsLmNoZWNrT258fChuLnZhbEhvb2tzW3RoaXNdLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09PWEuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik/XCJvblwiOmEudmFsdWV9KX0pO3ZhciBoYj0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC87bi5leHRlbmQobi5ldmVudCx7dHJpZ2dlcjpmdW5jdGlvbihiLGMsZSxmKXt2YXIgZyxoLGksaixsLG0sbyxwPVtlfHxkXSxxPWsuY2FsbChiLFwidHlwZVwiKT9iLnR5cGU6YixyPWsuY2FsbChiLFwibmFtZXNwYWNlXCIpP2IubmFtZXNwYWNlLnNwbGl0KFwiLlwiKTpbXTtpZihoPWk9ZT1lfHxkLDMhPT1lLm5vZGVUeXBlJiY4IT09ZS5ub2RlVHlwZSYmIWhiLnRlc3QocStuLmV2ZW50LnRyaWdnZXJlZCkmJihxLmluZGV4T2YoXCIuXCIpPi0xJiYocj1xLnNwbGl0KFwiLlwiKSxxPXIuc2hpZnQoKSxyLnNvcnQoKSksbD1xLmluZGV4T2YoXCI6XCIpPDAmJlwib25cIitxLGI9YltuLmV4cGFuZG9dP2I6bmV3IG4uRXZlbnQocSxcIm9iamVjdFwiPT10eXBlb2YgYiYmYiksYi5pc1RyaWdnZXI9Zj8yOjMsYi5uYW1lc3BhY2U9ci5qb2luKFwiLlwiKSxiLnJuYW1lc3BhY2U9Yi5uYW1lc3BhY2U/bmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3Iuam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsYi5yZXN1bHQ9dm9pZCAwLGIudGFyZ2V0fHwoYi50YXJnZXQ9ZSksYz1udWxsPT1jP1tiXTpuLm1ha2VBcnJheShjLFtiXSksbz1uLmV2ZW50LnNwZWNpYWxbcV18fHt9LGZ8fCFvLnRyaWdnZXJ8fG8udHJpZ2dlci5hcHBseShlLGMpIT09ITEpKXtpZighZiYmIW8ubm9CdWJibGUmJiFuLmlzV2luZG93KGUpKXtmb3Ioaj1vLmRlbGVnYXRlVHlwZXx8cSxoYi50ZXN0KGorcSl8fChoPWgucGFyZW50Tm9kZSk7aDtoPWgucGFyZW50Tm9kZSlwLnB1c2goaCksaT1oO2k9PT0oZS5vd25lckRvY3VtZW50fHxkKSYmcC5wdXNoKGkuZGVmYXVsdFZpZXd8fGkucGFyZW50V2luZG93fHxhKX1nPTA7d2hpbGUoKGg9cFtnKytdKSYmIWIuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSliLnR5cGU9Zz4xP2o6by5iaW5kVHlwZXx8cSxtPShOLmdldChoLFwiZXZlbnRzXCIpfHx7fSlbYi50eXBlXSYmTi5nZXQoaCxcImhhbmRsZVwiKSxtJiZtLmFwcGx5KGgsYyksbT1sJiZoW2xdLG0mJm0uYXBwbHkmJkwoaCkmJihiLnJlc3VsdD1tLmFwcGx5KGgsYyksYi5yZXN1bHQ9PT0hMSYmYi5wcmV2ZW50RGVmYXVsdCgpKTtyZXR1cm4gYi50eXBlPXEsZnx8Yi5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8by5fZGVmYXVsdCYmby5fZGVmYXVsdC5hcHBseShwLnBvcCgpLGMpIT09ITF8fCFMKGUpfHxsJiZuLmlzRnVuY3Rpb24oZVtxXSkmJiFuLmlzV2luZG93KGUpJiYoaT1lW2xdLGkmJihlW2xdPW51bGwpLG4uZXZlbnQudHJpZ2dlcmVkPXEsZVtxXSgpLG4uZXZlbnQudHJpZ2dlcmVkPXZvaWQgMCxpJiYoZVtsXT1pKSksYi5yZXN1bHR9fSxzaW11bGF0ZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9bi5leHRlbmQobmV3IG4uRXZlbnQsYyx7dHlwZTphLGlzU2ltdWxhdGVkOiEwfSk7bi5ldmVudC50cmlnZ2VyKGQsbnVsbCxiKSxkLmlzRGVmYXVsdFByZXZlbnRlZCgpJiZjLnByZXZlbnREZWZhdWx0KCl9fSksbi5mbi5leHRlbmQoe3RyaWdnZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5ldmVudC50cmlnZ2VyKGEsYix0aGlzKX0pfSx0cmlnZ2VySGFuZGxlcjpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXNbMF07cmV0dXJuIGM/bi5ldmVudC50cmlnZ2VyKGEsYixjLCEwKTp2b2lkIDB9fSksbi5lYWNoKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IGxvYWQgcmVzaXplIHNjcm9sbCB1bmxvYWQgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBlcnJvciBjb250ZXh0bWVudVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe24uZm5bYl09ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4wP3RoaXMub24oYixudWxsLGEsYyk6dGhpcy50cmlnZ2VyKGIpfX0pLG4uZm4uZXh0ZW5kKHtob3ZlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm1vdXNlZW50ZXIoYSkubW91c2VsZWF2ZShifHxhKX19KSxsLmZvY3VzaW49XCJvbmZvY3VzaW5cImluIGEsbC5mb2N1c2lufHxuLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihhLGIpe3ZhciBjPWZ1bmN0aW9uKGEpe24uZXZlbnQuc2ltdWxhdGUoYixhLnRhcmdldCxuLmV2ZW50LmZpeChhKSl9O24uZXZlbnQuc3BlY2lhbFtiXT17c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZD10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsZT1OLmFjY2VzcyhkLGIpO2V8fGQuYWRkRXZlbnRMaXN0ZW5lcihhLGMsITApLE4uYWNjZXNzKGQsYiwoZXx8MCkrMSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9Ti5hY2Nlc3MoZCxiKS0xO2U/Ti5hY2Nlc3MoZCxiLGUpOihkLnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxjLCEwKSxOLnJlbW92ZShkLGIpKX19fSk7dmFyIGliPWEubG9jYXRpb24samI9bi5ub3coKSxrYj0vXFw/LztuLnBhcnNlSlNPTj1mdW5jdGlvbihhKXtyZXR1cm4gSlNPTi5wYXJzZShhK1wiXCIpfSxuLnBhcnNlWE1MPWZ1bmN0aW9uKGIpe3ZhciBjO2lmKCFifHxcInN0cmluZ1wiIT10eXBlb2YgYilyZXR1cm4gbnVsbDt0cnl7Yz0obmV3IGEuRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcoYixcInRleHQveG1sXCIpfWNhdGNoKGQpe2M9dm9pZCAwfXJldHVybighY3x8Yy5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aCkmJm4uZXJyb3IoXCJJbnZhbGlkIFhNTDogXCIrYiksY307dmFyIGxiPS8jLiokLyxtYj0vKFs/Jl0pXz1bXiZdKi8sbmI9L14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopJC9nbSxvYj0vXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLyxwYj0vXig/OkdFVHxIRUFEKSQvLHFiPS9eXFwvXFwvLyxyYj17fSxzYj17fSx0Yj1cIiovXCIuY29uY2F0KFwiKlwiKSx1Yj1kLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3ViLmhyZWY9aWIuaHJlZjtmdW5jdGlvbiB2YihhKXtyZXR1cm4gZnVuY3Rpb24oYixjKXtcInN0cmluZ1wiIT10eXBlb2YgYiYmKGM9YixiPVwiKlwiKTt2YXIgZCxlPTAsZj1iLnRvTG93ZXJDYXNlKCkubWF0Y2goRyl8fFtdO2lmKG4uaXNGdW5jdGlvbihjKSl3aGlsZShkPWZbZSsrXSlcIitcIj09PWRbMF0/KGQ9ZC5zbGljZSgxKXx8XCIqXCIsKGFbZF09YVtkXXx8W10pLnVuc2hpZnQoYykpOihhW2RdPWFbZF18fFtdKS5wdXNoKGMpfX1mdW5jdGlvbiB3YihhLGIsYyxkKXt2YXIgZT17fSxmPWE9PT1zYjtmdW5jdGlvbiBnKGgpe3ZhciBpO3JldHVybiBlW2hdPSEwLG4uZWFjaChhW2hdfHxbXSxmdW5jdGlvbihhLGgpe3ZhciBqPWgoYixjLGQpO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBqfHxmfHxlW2pdP2Y/IShpPWopOnZvaWQgMDooYi5kYXRhVHlwZXMudW5zaGlmdChqKSxnKGopLCExKX0pLGl9cmV0dXJuIGcoYi5kYXRhVHlwZXNbMF0pfHwhZVtcIipcIl0mJmcoXCIqXCIpfWZ1bmN0aW9uIHhiKGEsYil7dmFyIGMsZCxlPW4uYWpheFNldHRpbmdzLmZsYXRPcHRpb25zfHx7fTtmb3IoYyBpbiBiKXZvaWQgMCE9PWJbY10mJigoZVtjXT9hOmR8fChkPXt9KSlbY109YltjXSk7cmV0dXJuIGQmJm4uZXh0ZW5kKCEwLGEsZCksYX1mdW5jdGlvbiB5YihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLmNvbnRlbnRzLGk9YS5kYXRhVHlwZXM7d2hpbGUoXCIqXCI9PT1pWzBdKWkuc2hpZnQoKSx2b2lkIDA9PT1kJiYoZD1hLm1pbWVUeXBlfHxiLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihkKWZvcihlIGluIGgpaWYoaFtlXSYmaFtlXS50ZXN0KGQpKXtpLnVuc2hpZnQoZSk7YnJlYWt9aWYoaVswXWluIGMpZj1pWzBdO2Vsc2V7Zm9yKGUgaW4gYyl7aWYoIWlbMF18fGEuY29udmVydGVyc1tlK1wiIFwiK2lbMF1dKXtmPWU7YnJlYWt9Z3x8KGc9ZSl9Zj1mfHxnfXJldHVybiBmPyhmIT09aVswXSYmaS51bnNoaWZ0KGYpLGNbZl0pOnZvaWQgMH1mdW5jdGlvbiB6YihhLGIsYyxkKXt2YXIgZSxmLGcsaCxpLGo9e30saz1hLmRhdGFUeXBlcy5zbGljZSgpO2lmKGtbMV0pZm9yKGcgaW4gYS5jb252ZXJ0ZXJzKWpbZy50b0xvd2VyQ2FzZSgpXT1hLmNvbnZlcnRlcnNbZ107Zj1rLnNoaWZ0KCk7d2hpbGUoZilpZihhLnJlc3BvbnNlRmllbGRzW2ZdJiYoY1thLnJlc3BvbnNlRmllbGRzW2ZdXT1iKSwhaSYmZCYmYS5kYXRhRmlsdGVyJiYoYj1hLmRhdGFGaWx0ZXIoYixhLmRhdGFUeXBlKSksaT1mLGY9ay5zaGlmdCgpKWlmKFwiKlwiPT09ZilmPWk7ZWxzZSBpZihcIipcIiE9PWkmJmkhPT1mKXtpZihnPWpbaStcIiBcIitmXXx8altcIiogXCIrZl0sIWcpZm9yKGUgaW4gailpZihoPWUuc3BsaXQoXCIgXCIpLGhbMV09PT1mJiYoZz1qW2krXCIgXCIraFswXV18fGpbXCIqIFwiK2hbMF1dKSl7Zz09PSEwP2c9altlXTpqW2VdIT09ITAmJihmPWhbMF0say51bnNoaWZ0KGhbMV0pKTticmVha31pZihnIT09ITApaWYoZyYmYVtcInRocm93c1wiXSliPWcoYik7ZWxzZSB0cnl7Yj1nKGIpfWNhdGNoKGwpe3JldHVybntzdGF0ZTpcInBhcnNlcmVycm9yXCIsZXJyb3I6Zz9sOlwiTm8gY29udmVyc2lvbiBmcm9tIFwiK2krXCIgdG8gXCIrZn19fXJldHVybntzdGF0ZTpcInN1Y2Nlc3NcIixkYXRhOmJ9fW4uZXh0ZW5kKHthY3RpdmU6MCxsYXN0TW9kaWZpZWQ6e30sZXRhZzp7fSxhamF4U2V0dGluZ3M6e3VybDppYi5ocmVmLHR5cGU6XCJHRVRcIixpc0xvY2FsOm9iLnRlc3QoaWIucHJvdG9jb2wpLGdsb2JhbDohMCxwcm9jZXNzRGF0YTohMCxhc3luYzohMCxjb250ZW50VHlwZTpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLGFjY2VwdHM6e1wiKlwiOnRiLHRleHQ6XCJ0ZXh0L3BsYWluXCIsaHRtbDpcInRleHQvaHRtbFwiLHhtbDpcImFwcGxpY2F0aW9uL3htbCwgdGV4dC94bWxcIixqc29uOlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJ9LGNvbnRlbnRzOnt4bWw6L1xcYnhtbFxcYi8saHRtbDovXFxiaHRtbC8sanNvbjovXFxianNvblxcYi99LHJlc3BvbnNlRmllbGRzOnt4bWw6XCJyZXNwb25zZVhNTFwiLHRleHQ6XCJyZXNwb25zZVRleHRcIixqc29uOlwicmVzcG9uc2VKU09OXCJ9LGNvbnZlcnRlcnM6e1wiKiB0ZXh0XCI6U3RyaW5nLFwidGV4dCBodG1sXCI6ITAsXCJ0ZXh0IGpzb25cIjpuLnBhcnNlSlNPTixcInRleHQgeG1sXCI6bi5wYXJzZVhNTH0sZmxhdE9wdGlvbnM6e3VybDohMCxjb250ZXh0OiEwfX0sYWpheFNldHVwOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/eGIoeGIoYSxuLmFqYXhTZXR0aW5ncyksYik6eGIobi5hamF4U2V0dGluZ3MsYSl9LGFqYXhQcmVmaWx0ZXI6dmIocmIpLGFqYXhUcmFuc3BvcnQ6dmIoc2IpLGFqYXg6ZnVuY3Rpb24oYixjKXtcIm9iamVjdFwiPT10eXBlb2YgYiYmKGM9YixiPXZvaWQgMCksYz1jfHx7fTt2YXIgZSxmLGcsaCxpLGosayxsLG09bi5hamF4U2V0dXAoe30sYyksbz1tLmNvbnRleHR8fG0scD1tLmNvbnRleHQmJihvLm5vZGVUeXBlfHxvLmpxdWVyeSk/bihvKTpuLmV2ZW50LHE9bi5EZWZlcnJlZCgpLHI9bi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxzPW0uc3RhdHVzQ29kZXx8e30sdD17fSx1PXt9LHY9MCx3PVwiY2FuY2VsZWRcIix4PXtyZWFkeVN0YXRlOjAsZ2V0UmVzcG9uc2VIZWFkZXI6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoMj09PXYpe2lmKCFoKXtoPXt9O3doaWxlKGI9bmIuZXhlYyhnKSloW2JbMV0udG9Mb3dlckNhc2UoKV09YlsyXX1iPWhbYS50b0xvd2VyQ2FzZSgpXX1yZXR1cm4gbnVsbD09Yj9udWxsOmJ9LGdldEFsbFJlc3BvbnNlSGVhZGVyczpmdW5jdGlvbigpe3JldHVybiAyPT09dj9nOm51bGx9LHNldFJlcXVlc3RIZWFkZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLnRvTG93ZXJDYXNlKCk7cmV0dXJuIHZ8fChhPXVbY109dVtjXXx8YSx0W2FdPWIpLHRoaXN9LG92ZXJyaWRlTWltZVR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuIHZ8fChtLm1pbWVUeXBlPWEpLHRoaXN9LHN0YXR1c0NvZGU6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoYSlpZigyPnYpZm9yKGIgaW4gYSlzW2JdPVtzW2JdLGFbYl1dO2Vsc2UgeC5hbHdheXMoYVt4LnN0YXR1c10pO3JldHVybiB0aGlzfSxhYm9ydDpmdW5jdGlvbihhKXt2YXIgYj1hfHx3O3JldHVybiBlJiZlLmFib3J0KGIpLHooMCxiKSx0aGlzfX07aWYocS5wcm9taXNlKHgpLmNvbXBsZXRlPXIuYWRkLHguc3VjY2Vzcz14LmRvbmUseC5lcnJvcj14LmZhaWwsbS51cmw9KChifHxtLnVybHx8aWIuaHJlZikrXCJcIikucmVwbGFjZShsYixcIlwiKS5yZXBsYWNlKHFiLGliLnByb3RvY29sK1wiLy9cIiksbS50eXBlPWMubWV0aG9kfHxjLnR5cGV8fG0ubWV0aG9kfHxtLnR5cGUsbS5kYXRhVHlwZXM9bi50cmltKG0uZGF0YVR5cGV8fFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKEcpfHxbXCJcIl0sbnVsbD09bS5jcm9zc0RvbWFpbil7aj1kLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3RyeXtqLmhyZWY9bS51cmwsai5ocmVmPWouaHJlZixtLmNyb3NzRG9tYWluPXViLnByb3RvY29sK1wiLy9cIit1Yi5ob3N0IT1qLnByb3RvY29sK1wiLy9cIitqLmhvc3R9Y2F0Y2goeSl7bS5jcm9zc0RvbWFpbj0hMH19aWYobS5kYXRhJiZtLnByb2Nlc3NEYXRhJiZcInN0cmluZ1wiIT10eXBlb2YgbS5kYXRhJiYobS5kYXRhPW4ucGFyYW0obS5kYXRhLG0udHJhZGl0aW9uYWwpKSx3YihyYixtLGMseCksMj09PXYpcmV0dXJuIHg7az1uLmV2ZW50JiZtLmdsb2JhbCxrJiYwPT09bi5hY3RpdmUrKyYmbi5ldmVudC50cmlnZ2VyKFwiYWpheFN0YXJ0XCIpLG0udHlwZT1tLnR5cGUudG9VcHBlckNhc2UoKSxtLmhhc0NvbnRlbnQ9IXBiLnRlc3QobS50eXBlKSxmPW0udXJsLG0uaGFzQ29udGVudHx8KG0uZGF0YSYmKGY9bS51cmwrPShrYi50ZXN0KGYpP1wiJlwiOlwiP1wiKSttLmRhdGEsZGVsZXRlIG0uZGF0YSksbS5jYWNoZT09PSExJiYobS51cmw9bWIudGVzdChmKT9mLnJlcGxhY2UobWIsXCIkMV89XCIramIrKyk6Zisoa2IudGVzdChmKT9cIiZcIjpcIj9cIikrXCJfPVwiK2piKyspKSxtLmlmTW9kaWZpZWQmJihuLmxhc3RNb2RpZmllZFtmXSYmeC5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTW9kaWZpZWQtU2luY2VcIixuLmxhc3RNb2RpZmllZFtmXSksbi5ldGFnW2ZdJiZ4LnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Ob25lLU1hdGNoXCIsbi5ldGFnW2ZdKSksKG0uZGF0YSYmbS5oYXNDb250ZW50JiZtLmNvbnRlbnRUeXBlIT09ITF8fGMuY29udGVudFR5cGUpJiZ4LnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixtLmNvbnRlbnRUeXBlKSx4LnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIixtLmRhdGFUeXBlc1swXSYmbS5hY2NlcHRzW20uZGF0YVR5cGVzWzBdXT9tLmFjY2VwdHNbbS5kYXRhVHlwZXNbMF1dKyhcIipcIiE9PW0uZGF0YVR5cGVzWzBdP1wiLCBcIit0YitcIjsgcT0wLjAxXCI6XCJcIik6bS5hY2NlcHRzW1wiKlwiXSk7Zm9yKGwgaW4gbS5oZWFkZXJzKXguc2V0UmVxdWVzdEhlYWRlcihsLG0uaGVhZGVyc1tsXSk7aWYobS5iZWZvcmVTZW5kJiYobS5iZWZvcmVTZW5kLmNhbGwobyx4LG0pPT09ITF8fDI9PT12KSlyZXR1cm4geC5hYm9ydCgpO3c9XCJhYm9ydFwiO2ZvcihsIGlue3N1Y2Nlc3M6MSxlcnJvcjoxLGNvbXBsZXRlOjF9KXhbbF0obVtsXSk7aWYoZT13YihzYixtLGMseCkpe2lmKHgucmVhZHlTdGF0ZT0xLGsmJnAudHJpZ2dlcihcImFqYXhTZW5kXCIsW3gsbV0pLDI9PT12KXJldHVybiB4O20uYXN5bmMmJm0udGltZW91dD4wJiYoaT1hLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt4LmFib3J0KFwidGltZW91dFwiKX0sbS50aW1lb3V0KSk7dHJ5e3Y9MSxlLnNlbmQodCx6KX1jYXRjaCh5KXtpZighKDI+dikpdGhyb3cgeTt6KC0xLHkpfX1lbHNlIHooLTEsXCJObyBUcmFuc3BvcnRcIik7ZnVuY3Rpb24geihiLGMsZCxoKXt2YXIgaixsLHQsdSx3LHk9YzsyIT09diYmKHY9MixpJiZhLmNsZWFyVGltZW91dChpKSxlPXZvaWQgMCxnPWh8fFwiXCIseC5yZWFkeVN0YXRlPWI+MD80OjAsaj1iPj0yMDAmJjMwMD5ifHwzMDQ9PT1iLGQmJih1PXliKG0seCxkKSksdT16YihtLHUseCxqKSxqPyhtLmlmTW9kaWZpZWQmJih3PXguZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpLHcmJihuLmxhc3RNb2RpZmllZFtmXT13KSx3PXguZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpLHcmJihuLmV0YWdbZl09dykpLDIwND09PWJ8fFwiSEVBRFwiPT09bS50eXBlP3k9XCJub2NvbnRlbnRcIjozMDQ9PT1iP3k9XCJub3Rtb2RpZmllZFwiOih5PXUuc3RhdGUsbD11LmRhdGEsdD11LmVycm9yLGo9IXQpKToodD15LChifHwheSkmJih5PVwiZXJyb3JcIiwwPmImJihiPTApKSkseC5zdGF0dXM9Yix4LnN0YXR1c1RleHQ9KGN8fHkpK1wiXCIsaj9xLnJlc29sdmVXaXRoKG8sW2wseSx4XSk6cS5yZWplY3RXaXRoKG8sW3gseSx0XSkseC5zdGF0dXNDb2RlKHMpLHM9dm9pZCAwLGsmJnAudHJpZ2dlcihqP1wiYWpheFN1Y2Nlc3NcIjpcImFqYXhFcnJvclwiLFt4LG0saj9sOnRdKSxyLmZpcmVXaXRoKG8sW3gseV0pLGsmJihwLnRyaWdnZXIoXCJhamF4Q29tcGxldGVcIixbeCxtXSksLS1uLmFjdGl2ZXx8bi5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIikpKX1yZXR1cm4geH0sZ2V0SlNPTjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG4uZ2V0KGEsYixjLFwianNvblwiKX0sZ2V0U2NyaXB0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uZ2V0KGEsdm9pZCAwLGIsXCJzY3JpcHRcIil9fSksbi5lYWNoKFtcImdldFwiLFwicG9zdFwiXSxmdW5jdGlvbihhLGIpe25bYl09ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIG4uaXNGdW5jdGlvbihjKSYmKGU9ZXx8ZCxkPWMsYz12b2lkIDApLG4uYWpheChuLmV4dGVuZCh7dXJsOmEsdHlwZTpiLGRhdGFUeXBlOmUsZGF0YTpjLHN1Y2Nlc3M6ZH0sbi5pc1BsYWluT2JqZWN0KGEpJiZhKSl9fSksbi5fZXZhbFVybD1mdW5jdGlvbihhKXtyZXR1cm4gbi5hamF4KHt1cmw6YSx0eXBlOlwiR0VUXCIsZGF0YVR5cGU6XCJzY3JpcHRcIixhc3luYzohMSxnbG9iYWw6ITEsXCJ0aHJvd3NcIjohMH0pfSxuLmZuLmV4dGVuZCh7d3JhcEFsbDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm4gbi5pc0Z1bmN0aW9uKGEpP3RoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLndyYXBBbGwoYS5jYWxsKHRoaXMsYikpfSk6KHRoaXNbMF0mJihiPW4oYSx0aGlzWzBdLm93bmVyRG9jdW1lbnQpLmVxKDApLmNsb25lKCEwKSx0aGlzWzBdLnBhcmVudE5vZGUmJmIuaW5zZXJ0QmVmb3JlKHRoaXNbMF0pLGIubWFwKGZ1bmN0aW9uKCl7dmFyIGE9dGhpczt3aGlsZShhLmZpcnN0RWxlbWVudENoaWxkKWE9YS5maXJzdEVsZW1lbnRDaGlsZDtyZXR1cm4gYX0pLmFwcGVuZCh0aGlzKSksdGhpcyl9LHdyYXBJbm5lcjpmdW5jdGlvbihhKXtyZXR1cm4gbi5pc0Z1bmN0aW9uKGEpP3RoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLndyYXBJbm5lcihhLmNhbGwodGhpcyxiKSl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1uKHRoaXMpLGM9Yi5jb250ZW50cygpO2MubGVuZ3RoP2Mud3JhcEFsbChhKTpiLmFwcGVuZChhKX0pfSx3cmFwOmZ1bmN0aW9uKGEpe3ZhciBiPW4uaXNGdW5jdGlvbihhKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe24odGhpcykud3JhcEFsbChiP2EuY2FsbCh0aGlzLGMpOmEpfSl9LHVud3JhcDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnBhcmVudCgpLmVhY2goZnVuY3Rpb24oKXtuLm5vZGVOYW1lKHRoaXMsXCJib2R5XCIpfHxuKHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyl9KS5lbmQoKX19KSxuLmV4cHIuZmlsdGVycy5oaWRkZW49ZnVuY3Rpb24oYSl7cmV0dXJuIW4uZXhwci5maWx0ZXJzLnZpc2libGUoYSl9LG4uZXhwci5maWx0ZXJzLnZpc2libGU9ZnVuY3Rpb24oYSl7cmV0dXJuIGEub2Zmc2V0V2lkdGg+MHx8YS5vZmZzZXRIZWlnaHQ+MHx8YS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aD4wfTt2YXIgQWI9LyUyMC9nLEJiPS9cXFtcXF0kLyxDYj0vXFxyP1xcbi9nLERiPS9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSxFYj0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7ZnVuY3Rpb24gRmIoYSxiLGMsZCl7dmFyIGU7aWYobi5pc0FycmF5KGIpKW4uZWFjaChiLGZ1bmN0aW9uKGIsZSl7Y3x8QmIudGVzdChhKT9kKGEsZSk6RmIoYStcIltcIisoXCJvYmplY3RcIj09dHlwZW9mIGUmJm51bGwhPWU/YjpcIlwiKStcIl1cIixlLGMsZCl9KTtlbHNlIGlmKGN8fFwib2JqZWN0XCIhPT1uLnR5cGUoYikpZChhLGIpO2Vsc2UgZm9yKGUgaW4gYilGYihhK1wiW1wiK2UrXCJdXCIsYltlXSxjLGQpfW4ucGFyYW09ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9ZnVuY3Rpb24oYSxiKXtiPW4uaXNGdW5jdGlvbihiKT9iKCk6bnVsbD09Yj9cIlwiOmIsZFtkLmxlbmd0aF09ZW5jb2RlVVJJQ29tcG9uZW50KGEpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChiKX07aWYodm9pZCAwPT09YiYmKGI9bi5hamF4U2V0dGluZ3MmJm4uYWpheFNldHRpbmdzLnRyYWRpdGlvbmFsKSxuLmlzQXJyYXkoYSl8fGEuanF1ZXJ5JiYhbi5pc1BsYWluT2JqZWN0KGEpKW4uZWFjaChhLGZ1bmN0aW9uKCl7ZSh0aGlzLm5hbWUsdGhpcy52YWx1ZSl9KTtlbHNlIGZvcihjIGluIGEpRmIoYyxhW2NdLGIsZSk7cmV0dXJuIGQuam9pbihcIiZcIikucmVwbGFjZShBYixcIitcIil9LG4uZm4uZXh0ZW5kKHtzZXJpYWxpemU6ZnVuY3Rpb24oKXtyZXR1cm4gbi5wYXJhbSh0aGlzLnNlcmlhbGl6ZUFycmF5KCkpfSxzZXJpYWxpemVBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBhPW4ucHJvcCh0aGlzLFwiZWxlbWVudHNcIik7cmV0dXJuIGE/bi5tYWtlQXJyYXkoYSk6dGhpc30pLmZpbHRlcihmdW5jdGlvbigpe3ZhciBhPXRoaXMudHlwZTtyZXR1cm4gdGhpcy5uYW1lJiYhbih0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSYmRWIudGVzdCh0aGlzLm5vZGVOYW1lKSYmIURiLnRlc3QoYSkmJih0aGlzLmNoZWNrZWR8fCFYLnRlc3QoYSkpfSkubWFwKGZ1bmN0aW9uKGEsYil7dmFyIGM9bih0aGlzKS52YWwoKTtyZXR1cm4gbnVsbD09Yz9udWxsOm4uaXNBcnJheShjKT9uLm1hcChjLGZ1bmN0aW9uKGEpe3JldHVybntuYW1lOmIubmFtZSx2YWx1ZTphLnJlcGxhY2UoQ2IsXCJcXHJcXG5cIil9fSk6e25hbWU6Yi5uYW1lLHZhbHVlOmMucmVwbGFjZShDYixcIlxcclxcblwiKX19KS5nZXQoKX19KSxuLmFqYXhTZXR0aW5ncy54aHI9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG5ldyBhLlhNTEh0dHBSZXF1ZXN0fWNhdGNoKGIpe319O3ZhciBHYj17MDoyMDAsMTIyMzoyMDR9LEhiPW4uYWpheFNldHRpbmdzLnhocigpO2wuY29ycz0hIUhiJiZcIndpdGhDcmVkZW50aWFsc1wiaW4gSGIsbC5hamF4PUhiPSEhSGIsbi5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKGIpe3ZhciBjLGQ7cmV0dXJuIGwuY29yc3x8SGImJiFiLmNyb3NzRG9tYWluP3tzZW5kOmZ1bmN0aW9uKGUsZil7dmFyIGcsaD1iLnhocigpO2lmKGgub3BlbihiLnR5cGUsYi51cmwsYi5hc3luYyxiLnVzZXJuYW1lLGIucGFzc3dvcmQpLGIueGhyRmllbGRzKWZvcihnIGluIGIueGhyRmllbGRzKWhbZ109Yi54aHJGaWVsZHNbZ107Yi5taW1lVHlwZSYmaC5vdmVycmlkZU1pbWVUeXBlJiZoLm92ZXJyaWRlTWltZVR5cGUoYi5taW1lVHlwZSksYi5jcm9zc0RvbWFpbnx8ZVtcIlgtUmVxdWVzdGVkLVdpdGhcIl18fChlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXT1cIlhNTEh0dHBSZXF1ZXN0XCIpO2ZvcihnIGluIGUpaC5zZXRSZXF1ZXN0SGVhZGVyKGcsZVtnXSk7Yz1mdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oKXtjJiYoYz1kPWgub25sb2FkPWgub25lcnJvcj1oLm9uYWJvcnQ9aC5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxcImFib3J0XCI9PT1hP2guYWJvcnQoKTpcImVycm9yXCI9PT1hP1wibnVtYmVyXCIhPXR5cGVvZiBoLnN0YXR1cz9mKDAsXCJlcnJvclwiKTpmKGguc3RhdHVzLGguc3RhdHVzVGV4dCk6ZihHYltoLnN0YXR1c118fGguc3RhdHVzLGguc3RhdHVzVGV4dCxcInRleHRcIiE9PShoLnJlc3BvbnNlVHlwZXx8XCJ0ZXh0XCIpfHxcInN0cmluZ1wiIT10eXBlb2YgaC5yZXNwb25zZVRleHQ/e2JpbmFyeTpoLnJlc3BvbnNlfTp7dGV4dDpoLnJlc3BvbnNlVGV4dH0saC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkpfX0saC5vbmxvYWQ9YygpLGQ9aC5vbmVycm9yPWMoXCJlcnJvclwiKSx2b2lkIDAhPT1oLm9uYWJvcnQ/aC5vbmFib3J0PWQ6aC5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXs0PT09aC5yZWFkeVN0YXRlJiZhLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtjJiZkKCl9KX0sYz1jKFwiYWJvcnRcIik7dHJ5e2guc2VuZChiLmhhc0NvbnRlbnQmJmIuZGF0YXx8bnVsbCl9Y2F0Y2goaSl7aWYoYyl0aHJvdyBpfX0sYWJvcnQ6ZnVuY3Rpb24oKXtjJiZjKCl9fTp2b2lkIDB9KSxuLmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIn0sY29udGVudHM6e3NjcmlwdDovXFxiKD86amF2YXxlY21hKXNjcmlwdFxcYi99LGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbihhKXtyZXR1cm4gbi5nbG9iYWxFdmFsKGEpLGF9fX0pLG4uYWpheFByZWZpbHRlcihcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe3ZvaWQgMD09PWEuY2FjaGUmJihhLmNhY2hlPSExKSxhLmNyb3NzRG9tYWluJiYoYS50eXBlPVwiR0VUXCIpfSksbi5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24oYSl7aWYoYS5jcm9zc0RvbWFpbil7dmFyIGIsYztyZXR1cm57c2VuZDpmdW5jdGlvbihlLGYpe2I9bihcIjxzY3JpcHQ+XCIpLnByb3Aoe2NoYXJzZXQ6YS5zY3JpcHRDaGFyc2V0LHNyYzphLnVybH0pLm9uKFwibG9hZCBlcnJvclwiLGM9ZnVuY3Rpb24oYSl7Yi5yZW1vdmUoKSxjPW51bGwsYSYmZihcImVycm9yXCI9PT1hLnR5cGU/NDA0OjIwMCxhLnR5cGUpfSksZC5oZWFkLmFwcGVuZENoaWxkKGJbMF0pfSxhYm9ydDpmdW5jdGlvbigpe2MmJmMoKX19fX0pO3ZhciBJYj1bXSxKYj0vKD0pXFw/KD89JnwkKXxcXD9cXD8vO24uYWpheFNldHVwKHtqc29ucDpcImNhbGxiYWNrXCIsanNvbnBDYWxsYmFjazpmdW5jdGlvbigpe3ZhciBhPUliLnBvcCgpfHxuLmV4cGFuZG8rXCJfXCIramIrKztyZXR1cm4gdGhpc1thXT0hMCxhfX0pLG4uYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIixmdW5jdGlvbihiLGMsZCl7dmFyIGUsZixnLGg9Yi5qc29ucCE9PSExJiYoSmIudGVzdChiLnVybCk/XCJ1cmxcIjpcInN0cmluZ1wiPT10eXBlb2YgYi5kYXRhJiYwPT09KGIuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJkpiLnRlc3QoYi5kYXRhKSYmXCJkYXRhXCIpO3JldHVybiBofHxcImpzb25wXCI9PT1iLmRhdGFUeXBlc1swXT8oZT1iLmpzb25wQ2FsbGJhY2s9bi5pc0Z1bmN0aW9uKGIuanNvbnBDYWxsYmFjayk/Yi5qc29ucENhbGxiYWNrKCk6Yi5qc29ucENhbGxiYWNrLGg/YltoXT1iW2hdLnJlcGxhY2UoSmIsXCIkMVwiK2UpOmIuanNvbnAhPT0hMSYmKGIudXJsKz0oa2IudGVzdChiLnVybCk/XCImXCI6XCI/XCIpK2IuanNvbnArXCI9XCIrZSksYi5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gZ3x8bi5lcnJvcihlK1wiIHdhcyBub3QgY2FsbGVkXCIpLGdbMF19LGIuZGF0YVR5cGVzWzBdPVwianNvblwiLGY9YVtlXSxhW2VdPWZ1bmN0aW9uKCl7Zz1hcmd1bWVudHN9LGQuYWx3YXlzKGZ1bmN0aW9uKCl7dm9pZCAwPT09Zj9uKGEpLnJlbW92ZVByb3AoZSk6YVtlXT1mLGJbZV0mJihiLmpzb25wQ2FsbGJhY2s9Yy5qc29ucENhbGxiYWNrLEliLnB1c2goZSkpLGcmJm4uaXNGdW5jdGlvbihmKSYmZihnWzBdKSxnPWY9dm9pZCAwfSksXCJzY3JpcHRcIik6dm9pZCAwfSksbC5jcmVhdGVIVE1MRG9jdW1lbnQ9ZnVuY3Rpb24oKXt2YXIgYT1kLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKS5ib2R5O3JldHVybiBhLmlubmVySFRNTD1cIjxmb3JtPjwvZm9ybT48Zm9ybT48L2Zvcm0+XCIsMj09PWEuY2hpbGROb2Rlcy5sZW5ndGh9KCksbi5wYXJzZUhUTUw9ZnVuY3Rpb24oYSxiLGMpe2lmKCFhfHxcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gbnVsbDtcImJvb2xlYW5cIj09dHlwZW9mIGImJihjPWIsYj0hMSksYj1ifHwobC5jcmVhdGVIVE1MRG9jdW1lbnQ/ZC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIik6ZCk7dmFyIGU9eC5leGVjKGEpLGY9IWMmJltdO3JldHVybiBlP1tiLmNyZWF0ZUVsZW1lbnQoZVsxXSldOihlPWNhKFthXSxiLGYpLGYmJmYubGVuZ3RoJiZuKGYpLnJlbW92ZSgpLG4ubWVyZ2UoW10sZS5jaGlsZE5vZGVzKSl9O3ZhciBLYj1uLmZuLmxvYWQ7bi5mbi5sb2FkPWZ1bmN0aW9uKGEsYixjKXtpZihcInN0cmluZ1wiIT10eXBlb2YgYSYmS2IpcmV0dXJuIEtiLmFwcGx5KHRoaXMsYXJndW1lbnRzKTt2YXIgZCxlLGYsZz10aGlzLGg9YS5pbmRleE9mKFwiIFwiKTtyZXR1cm4gaD4tMSYmKGQ9bi50cmltKGEuc2xpY2UoaCkpLGE9YS5zbGljZSgwLGgpKSxuLmlzRnVuY3Rpb24oYik/KGM9YixiPXZvaWQgMCk6YiYmXCJvYmplY3RcIj09dHlwZW9mIGImJihlPVwiUE9TVFwiKSxnLmxlbmd0aD4wJiZuLmFqYXgoe3VybDphLHR5cGU6ZXx8XCJHRVRcIixkYXRhVHlwZTpcImh0bWxcIixkYXRhOmJ9KS5kb25lKGZ1bmN0aW9uKGEpe2Y9YXJndW1lbnRzLGcuaHRtbChkP24oXCI8ZGl2PlwiKS5hcHBlbmQobi5wYXJzZUhUTUwoYSkpLmZpbmQoZCk6YSl9KS5hbHdheXMoYyYmZnVuY3Rpb24oYSxiKXtnLmVhY2goZnVuY3Rpb24oKXtjLmFwcGx5KGcsZnx8W2EucmVzcG9uc2VUZXh0LGIsYV0pfSl9KSx0aGlzfSxuLmVhY2goW1wiYWpheFN0YXJ0XCIsXCJhamF4U3RvcFwiLFwiYWpheENvbXBsZXRlXCIsXCJhamF4RXJyb3JcIixcImFqYXhTdWNjZXNzXCIsXCJhamF4U2VuZFwiXSxmdW5jdGlvbihhLGIpe24uZm5bYl09ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMub24oYixhKX19KSxuLmV4cHIuZmlsdGVycy5hbmltYXRlZD1mdW5jdGlvbihhKXtyZXR1cm4gbi5ncmVwKG4udGltZXJzLGZ1bmN0aW9uKGIpe3JldHVybiBhPT09Yi5lbGVtfSkubGVuZ3RofTtmdW5jdGlvbiBMYihhKXtyZXR1cm4gbi5pc1dpbmRvdyhhKT9hOjk9PT1hLm5vZGVUeXBlJiZhLmRlZmF1bHRWaWV3fW4ub2Zmc2V0PXtzZXRPZmZzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGgsaSxqLGs9bi5jc3MoYSxcInBvc2l0aW9uXCIpLGw9bihhKSxtPXt9O1wic3RhdGljXCI9PT1rJiYoYS5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIpLGg9bC5vZmZzZXQoKSxmPW4uY3NzKGEsXCJ0b3BcIiksaT1uLmNzcyhhLFwibGVmdFwiKSxqPShcImFic29sdXRlXCI9PT1rfHxcImZpeGVkXCI9PT1rKSYmKGYraSkuaW5kZXhPZihcImF1dG9cIik+LTEsaj8oZD1sLnBvc2l0aW9uKCksZz1kLnRvcCxlPWQubGVmdCk6KGc9cGFyc2VGbG9hdChmKXx8MCxlPXBhcnNlRmxvYXQoaSl8fDApLG4uaXNGdW5jdGlvbihiKSYmKGI9Yi5jYWxsKGEsYyxuLmV4dGVuZCh7fSxoKSkpLG51bGwhPWIudG9wJiYobS50b3A9Yi50b3AtaC50b3ArZyksbnVsbCE9Yi5sZWZ0JiYobS5sZWZ0PWIubGVmdC1oLmxlZnQrZSksXCJ1c2luZ1wiaW4gYj9iLnVzaW5nLmNhbGwoYSxtKTpsLmNzcyhtKX19LG4uZm4uZXh0ZW5kKHtvZmZzZXQ6ZnVuY3Rpb24oYSl7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdm9pZCAwPT09YT90aGlzOnRoaXMuZWFjaChmdW5jdGlvbihiKXtuLm9mZnNldC5zZXRPZmZzZXQodGhpcyxhLGIpfSk7dmFyIGIsYyxkPXRoaXNbMF0sZT17dG9wOjAsbGVmdDowfSxmPWQmJmQub3duZXJEb2N1bWVudDtpZihmKXJldHVybiBiPWYuZG9jdW1lbnRFbGVtZW50LG4uY29udGFpbnMoYixkKT8oZT1kLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGM9TGIoZikse3RvcDplLnRvcCtjLnBhZ2VZT2Zmc2V0LWIuY2xpZW50VG9wLGxlZnQ6ZS5sZWZ0K2MucGFnZVhPZmZzZXQtYi5jbGllbnRMZWZ0fSk6ZX0scG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzWzBdKXt2YXIgYSxiLGM9dGhpc1swXSxkPXt0b3A6MCxsZWZ0OjB9O3JldHVyblwiZml4ZWRcIj09PW4uY3NzKGMsXCJwb3NpdGlvblwiKT9iPWMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6KGE9dGhpcy5vZmZzZXRQYXJlbnQoKSxiPXRoaXMub2Zmc2V0KCksbi5ub2RlTmFtZShhWzBdLFwiaHRtbFwiKXx8KGQ9YS5vZmZzZXQoKSksZC50b3ArPW4uY3NzKGFbMF0sXCJib3JkZXJUb3BXaWR0aFwiLCEwKS1hLnNjcm9sbFRvcCgpLGQubGVmdCs9bi5jc3MoYVswXSxcImJvcmRlckxlZnRXaWR0aFwiLCEwKS1hLnNjcm9sbExlZnQoKSkse3RvcDpiLnRvcC1kLnRvcC1uLmNzcyhjLFwibWFyZ2luVG9wXCIsITApLGxlZnQ6Yi5sZWZ0LWQubGVmdC1uLmNzcyhjLFwibWFyZ2luTGVmdFwiLCEwKX19fSxvZmZzZXRQYXJlbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9mZnNldFBhcmVudDt3aGlsZShhJiZcInN0YXRpY1wiPT09bi5jc3MoYSxcInBvc2l0aW9uXCIpKWE9YS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGF8fEVhfSl9fSksbi5lYWNoKHtzY3JvbGxMZWZ0OlwicGFnZVhPZmZzZXRcIixzY3JvbGxUb3A6XCJwYWdlWU9mZnNldFwifSxmdW5jdGlvbihhLGIpe3ZhciBjPVwicGFnZVlPZmZzZXRcIj09PWI7bi5mblthXT1mdW5jdGlvbihkKXtyZXR1cm4gSyh0aGlzLGZ1bmN0aW9uKGEsZCxlKXt2YXIgZj1MYihhKTtyZXR1cm4gdm9pZCAwPT09ZT9mP2ZbYl06YVtkXTp2b2lkKGY/Zi5zY3JvbGxUbyhjP2YucGFnZVhPZmZzZXQ6ZSxjP2U6Zi5wYWdlWU9mZnNldCk6YVtkXT1lKX0sYSxkLGFyZ3VtZW50cy5sZW5ndGgpfX0pLG4uZWFjaChbXCJ0b3BcIixcImxlZnRcIl0sZnVuY3Rpb24oYSxiKXtuLmNzc0hvb2tzW2JdPUdhKGwucGl4ZWxQb3NpdGlvbixmdW5jdGlvbihhLGMpe3JldHVybiBjPyhjPUZhKGEsYiksQmEudGVzdChjKT9uKGEpLnBvc2l0aW9uKClbYl0rXCJweFwiOmMpOnZvaWQgMH0pfSksbi5lYWNoKHtIZWlnaHQ6XCJoZWlnaHRcIixXaWR0aDpcIndpZHRoXCJ9LGZ1bmN0aW9uKGEsYil7bi5lYWNoKHtwYWRkaW5nOlwiaW5uZXJcIithLGNvbnRlbnQ6YixcIlwiOlwib3V0ZXJcIithfSxmdW5jdGlvbihjLGQpe24uZm5bZF09ZnVuY3Rpb24oZCxlKXt2YXIgZj1hcmd1bWVudHMubGVuZ3RoJiYoY3x8XCJib29sZWFuXCIhPXR5cGVvZiBkKSxnPWN8fChkPT09ITB8fGU9PT0hMD9cIm1hcmdpblwiOlwiYm9yZGVyXCIpO3JldHVybiBLKHRoaXMsZnVuY3Rpb24oYixjLGQpe3ZhciBlO3JldHVybiBuLmlzV2luZG93KGIpP2IuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wiY2xpZW50XCIrYV06OT09PWIubm9kZVR5cGU/KGU9Yi5kb2N1bWVudEVsZW1lbnQsTWF0aC5tYXgoYi5ib2R5W1wic2Nyb2xsXCIrYV0sZVtcInNjcm9sbFwiK2FdLGIuYm9keVtcIm9mZnNldFwiK2FdLGVbXCJvZmZzZXRcIithXSxlW1wiY2xpZW50XCIrYV0pKTp2b2lkIDA9PT1kP24uY3NzKGIsYyxnKTpuLnN0eWxlKGIsYyxkLGcpfSxiLGY/ZDp2b2lkIDAsZixudWxsKX19KX0pLG4uZm4uZXh0ZW5kKHtiaW5kOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5vbihhLG51bGwsYixjKX0sdW5iaW5kOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub2ZmKGEsbnVsbCxiKX0sZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMub24oYixhLGMsZCl9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihhLFwiKipcIik6dGhpcy5vZmYoYixhfHxcIioqXCIsYyl9LHNpemU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5sZW5ndGh9fSksbi5mbi5hbmRTZWxmPW4uZm4uYWRkQmFjayxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShcImpxdWVyeVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIG59KTt2YXIgTWI9YS5qUXVlcnksTmI9YS4kO3JldHVybiBuLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oYil7cmV0dXJuIGEuJD09PW4mJihhLiQ9TmIpLGImJmEualF1ZXJ5PT09biYmKGEualF1ZXJ5PU1iKSxufSxifHwoYS5qUXVlcnk9YS4kPW4pLG59KTtcbiIsIi8qXG4gKiBqUXVlcnkgT25lIFBhZ2UgTmF2IFBsdWdpblxuICogaHR0cDovL2dpdGh1Yi5jb20vZGF2aXN0MTEvalF1ZXJ5LU9uZS1QYWdlLU5hdlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMCBUcmV2b3IgRGF2aXMgKGh0dHA6Ly90cmV2b3JkYXZpcy5uZXQpXG4gKiBEdWFsIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgYW5kIEdQTCBsaWNlbnNlcy5cbiAqIFVzZXMgdGhlIHNhbWUgbGljZW5zZSBhcyBqUXVlcnksIHNlZTpcbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqXG4gKiBAdmVyc2lvbiAzLjAuMFxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAkKCcjbmF2Jykub25lUGFnZU5hdih7XG4gKiAgIGN1cnJlbnRDbGFzczogJ2N1cnJlbnQnLFxuICogICBjaGFuZ2VIYXNoOiBmYWxzZSxcbiAqICAgc2Nyb2xsU3BlZWQ6IDc1MFxuICogfSk7XG4gKi9cblxuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpe1xuXG5cdC8vIG91ciBwbHVnaW4gY29uc3RydWN0b3Jcblx0dmFyIE9uZVBhZ2VOYXYgPSBmdW5jdGlvbihlbGVtLCBvcHRpb25zKXtcblx0XHR0aGlzLmVsZW0gPSBlbGVtO1xuXHRcdHRoaXMuJGVsZW0gPSAkKGVsZW0pO1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy5tZXRhZGF0YSA9IHRoaXMuJGVsZW0uZGF0YSgncGx1Z2luLW9wdGlvbnMnKTtcblx0XHR0aGlzLiR3aW4gPSAkKHdpbmRvdyk7XG5cdFx0dGhpcy5zZWN0aW9ucyA9IHt9O1xuXHRcdHRoaXMuZGlkU2Nyb2xsID0gZmFsc2U7XG5cdFx0dGhpcy4kZG9jID0gJChkb2N1bWVudCk7XG5cdFx0dGhpcy5kb2NIZWlnaHQgPSB0aGlzLiRkb2MuaGVpZ2h0KCk7XG5cdH07XG5cblx0Ly8gdGhlIHBsdWdpbiBwcm90b3R5cGVcblx0T25lUGFnZU5hdi5wcm90b3R5cGUgPSB7XG5cdFx0ZGVmYXVsdHM6IHtcblx0XHRcdG5hdkl0ZW1zOiAnYScsXG5cdFx0XHRjdXJyZW50Q2xhc3M6ICdjdXJyZW50Jyxcblx0XHRcdGNoYW5nZUhhc2g6IGZhbHNlLFxuXHRcdFx0ZWFzaW5nOiAnc3dpbmcnLFxuXHRcdFx0ZmlsdGVyOiAnJyxcblx0XHRcdHNjcm9sbFNwZWVkOiA3NTAsXG5cdFx0XHRzY3JvbGxUaHJlc2hvbGQ6IDAuNSxcblx0XHRcdGJlZ2luOiBmYWxzZSxcblx0XHRcdGVuZDogZmFsc2UsXG5cdFx0XHRzY3JvbGxDaGFuZ2U6IGZhbHNlXG5cdFx0fSxcblxuXHRcdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gSW50cm9kdWNlIGRlZmF1bHRzIHRoYXQgY2FuIGJlIGV4dGVuZGVkIGVpdGhlclxuXHRcdFx0Ly8gZ2xvYmFsbHkgb3IgdXNpbmcgYW4gb2JqZWN0IGxpdGVyYWwuXG5cdFx0XHR0aGlzLmNvbmZpZyA9ICQuZXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRzLCB0aGlzLm9wdGlvbnMsIHRoaXMubWV0YWRhdGEpO1xuXG5cdFx0XHR0aGlzLiRuYXYgPSB0aGlzLiRlbGVtLmZpbmQodGhpcy5jb25maWcubmF2SXRlbXMpO1xuXG5cdFx0XHQvL0ZpbHRlciBhbnkgbGlua3Mgb3V0IG9mIHRoZSBuYXZcblx0XHRcdGlmKHRoaXMuY29uZmlnLmZpbHRlciAhPT0gJycpIHtcblx0XHRcdFx0dGhpcy4kbmF2ID0gdGhpcy4kbmF2LmZpbHRlcih0aGlzLmNvbmZpZy5maWx0ZXIpO1xuXHRcdFx0fVxuXG5cdFx0XHQvL0hhbmRsZSBjbGlja3Mgb24gdGhlIG5hdlxuXHRcdFx0dGhpcy4kbmF2Lm9uKCdjbGljay5vbmVQYWdlTmF2JywgJC5wcm94eSh0aGlzLmhhbmRsZUNsaWNrLCB0aGlzKSk7XG5cblx0XHRcdC8vR2V0IHRoZSBzZWN0aW9uIHBvc2l0aW9uc1xuXHRcdFx0dGhpcy5nZXRQb3NpdGlvbnMoKTtcblxuXHRcdFx0Ly9IYW5kbGUgc2Nyb2xsIGNoYW5nZXNcblx0XHRcdHRoaXMuYmluZEludGVydmFsKCk7XG5cblx0XHRcdC8vVXBkYXRlIHRoZSBwb3NpdGlvbnMgb24gcmVzaXplIHRvb1xuXHRcdFx0dGhpcy4kd2luLm9uKCdyZXNpemUub25lUGFnZU5hdicsICQucHJveHkodGhpcy5nZXRQb3NpdGlvbnMsIHRoaXMpKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblxuXHRcdGFkanVzdE5hdjogZnVuY3Rpb24oc2VsZiwgJHBhcmVudCkge1xuXHRcdFx0c2VsZi4kZWxlbS5maW5kKCcuJyArIHNlbGYuY29uZmlnLmN1cnJlbnRDbGFzcykucmVtb3ZlQ2xhc3Moc2VsZi5jb25maWcuY3VycmVudENsYXNzKTtcblx0XHRcdCRwYXJlbnQuYWRkQ2xhc3Moc2VsZi5jb25maWcuY3VycmVudENsYXNzKTtcblx0XHR9LFxuXG5cdFx0YmluZEludGVydmFsOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdHZhciBkb2NIZWlnaHQ7XG5cblx0XHRcdHNlbGYuJHdpbi5vbignc2Nyb2xsLm9uZVBhZ2VOYXYnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0c2VsZi5kaWRTY3JvbGwgPSB0cnVlO1xuXHRcdFx0fSk7XG5cblx0XHRcdHNlbGYudCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkb2NIZWlnaHQgPSBzZWxmLiRkb2MuaGVpZ2h0KCk7XG5cblx0XHRcdFx0Ly9JZiBpdCB3YXMgc2Nyb2xsZWRcblx0XHRcdFx0aWYoc2VsZi5kaWRTY3JvbGwpIHtcblx0XHRcdFx0XHRzZWxmLmRpZFNjcm9sbCA9IGZhbHNlO1xuXHRcdFx0XHRcdHNlbGYuc2Nyb2xsQ2hhbmdlKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvL0lmIHRoZSBkb2N1bWVudCBoZWlnaHQgY2hhbmdlc1xuXHRcdFx0XHRpZihkb2NIZWlnaHQgIT09IHNlbGYuZG9jSGVpZ2h0KSB7XG5cdFx0XHRcdFx0c2VsZi5kb2NIZWlnaHQgPSBkb2NIZWlnaHQ7XG5cdFx0XHRcdFx0c2VsZi5nZXRQb3NpdGlvbnMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgMjUwKTtcblx0XHR9LFxuXG5cdFx0Z2V0SGFzaDogZnVuY3Rpb24oJGxpbmspIHtcblx0XHRcdHJldHVybiAkbGluay5hdHRyKCdocmVmJykuc3BsaXQoJyMnKVsxXTtcblx0XHR9LFxuXG5cdFx0Z2V0UG9zaXRpb25zOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdHZhciBsaW5rSHJlZjtcblx0XHRcdHZhciB0b3BQb3M7XG5cdFx0XHR2YXIgJHRhcmdldDtcblxuXHRcdFx0c2VsZi4kbmF2LmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxpbmtIcmVmID0gc2VsZi5nZXRIYXNoKCQodGhpcykpO1xuXHRcdFx0XHQkdGFyZ2V0ID0gJCgnIycgKyBsaW5rSHJlZik7XG5cblx0XHRcdFx0aWYoJHRhcmdldC5sZW5ndGgpIHtcblx0XHRcdFx0XHR0b3BQb3MgPSAkdGFyZ2V0Lm9mZnNldCgpLnRvcDtcblx0XHRcdFx0XHRzZWxmLnNlY3Rpb25zW2xpbmtIcmVmXSA9IE1hdGgucm91bmQodG9wUG9zKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdGdldFNlY3Rpb246IGZ1bmN0aW9uKHdpbmRvd1Bvcykge1xuXHRcdFx0dmFyIHJldHVyblZhbHVlID0gbnVsbDtcblx0XHRcdHZhciB3aW5kb3dIZWlnaHQgPSBNYXRoLnJvdW5kKHRoaXMuJHdpbi5oZWlnaHQoKSAqIHRoaXMuY29uZmlnLnNjcm9sbFRocmVzaG9sZCk7XG5cblx0XHRcdGZvcih2YXIgc2VjdGlvbiBpbiB0aGlzLnNlY3Rpb25zKSB7XG5cdFx0XHRcdGlmKCh0aGlzLnNlY3Rpb25zW3NlY3Rpb25dIC0gd2luZG93SGVpZ2h0KSA8IHdpbmRvd1Bvcykge1xuXHRcdFx0XHRcdHJldHVyblZhbHVlID0gc2VjdGlvbjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmV0dXJuVmFsdWU7XG5cdFx0fSxcblxuXHRcdGhhbmRsZUNsaWNrOiBmdW5jdGlvbihlKSB7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHR2YXIgJGxpbmsgPSAkKGUuY3VycmVudFRhcmdldCk7XG5cdFx0XHR2YXIgJHBhcmVudCA9ICRsaW5rLnBhcmVudCgpO1xuXHRcdFx0dmFyIG5ld0xvYyA9ICcjJyArIHNlbGYuZ2V0SGFzaCgkbGluayk7XG5cblx0XHRcdGlmKCEkcGFyZW50Lmhhc0NsYXNzKHNlbGYuY29uZmlnLmN1cnJlbnRDbGFzcykpIHtcblx0XHRcdFx0Ly9TdGFydCBjYWxsYmFja1xuXHRcdFx0XHRpZihzZWxmLmNvbmZpZy5iZWdpbikge1xuXHRcdFx0XHRcdHNlbGYuY29uZmlnLmJlZ2luKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvL0NoYW5nZSB0aGUgaGlnaGxpZ2h0ZWQgbmF2IGl0ZW1cblx0XHRcdFx0c2VsZi5hZGp1c3ROYXYoc2VsZiwgJHBhcmVudCk7XG5cblx0XHRcdFx0Ly9SZW1vdmluZyB0aGUgYXV0by1hZGp1c3Qgb24gc2Nyb2xsXG5cdFx0XHRcdHNlbGYudW5iaW5kSW50ZXJ2YWwoKTtcblxuXHRcdFx0XHQvL1Njcm9sbCB0byB0aGUgY29ycmVjdCBwb3NpdGlvblxuXHRcdFx0XHRzZWxmLnNjcm9sbFRvKG5ld0xvYywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0Ly9EbyB3ZSBuZWVkIHRvIGNoYW5nZSB0aGUgaGFzaD9cblx0XHRcdFx0XHRpZihzZWxmLmNvbmZpZy5jaGFuZ2VIYXNoKSB7XG5cdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IG5ld0xvYztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvL0FkZCB0aGUgYXV0by1hZGp1c3Qgb24gc2Nyb2xsIGJhY2sgaW5cblx0XHRcdFx0XHRzZWxmLmJpbmRJbnRlcnZhbCgpO1xuXG5cdFx0XHRcdFx0Ly9FbmQgY2FsbGJhY2tcblx0XHRcdFx0XHRpZihzZWxmLmNvbmZpZy5lbmQpIHtcblx0XHRcdFx0XHRcdHNlbGYuY29uZmlnLmVuZCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR9LFxuXG5cdFx0c2Nyb2xsQ2hhbmdlOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciB3aW5kb3dUb3AgPSB0aGlzLiR3aW4uc2Nyb2xsVG9wKCk7XG5cdFx0XHR2YXIgcG9zaXRpb24gPSB0aGlzLmdldFNlY3Rpb24od2luZG93VG9wKTtcblx0XHRcdHZhciAkcGFyZW50O1xuXG5cdFx0XHQvL0lmIHRoZSBwb3NpdGlvbiBpcyBzZXRcblx0XHRcdGlmKHBvc2l0aW9uICE9PSBudWxsKSB7XG5cdFx0XHRcdCRwYXJlbnQgPSB0aGlzLiRlbGVtLmZpbmQoJ2FbaHJlZiQ9XCIjJyArIHBvc2l0aW9uICsgJ1wiXScpLnBhcmVudCgpO1xuXG5cdFx0XHRcdC8vSWYgaXQncyBub3QgYWxyZWFkeSB0aGUgY3VycmVudCBzZWN0aW9uXG5cdFx0XHRcdGlmKCEkcGFyZW50Lmhhc0NsYXNzKHRoaXMuY29uZmlnLmN1cnJlbnRDbGFzcykpIHtcblx0XHRcdFx0XHQvL0NoYW5nZSB0aGUgaGlnaGxpZ2h0ZWQgbmF2IGl0ZW1cblx0XHRcdFx0XHR0aGlzLmFkanVzdE5hdih0aGlzLCAkcGFyZW50KTtcblxuXHRcdFx0XHRcdC8vSWYgdGhlcmUgaXMgYSBzY3JvbGxDaGFuZ2UgY2FsbGJhY2tcblx0XHRcdFx0XHRpZih0aGlzLmNvbmZpZy5zY3JvbGxDaGFuZ2UpIHtcblx0XHRcdFx0XHRcdHRoaXMuY29uZmlnLnNjcm9sbENoYW5nZSgkcGFyZW50KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0c2Nyb2xsVG86IGZ1bmN0aW9uKHRhcmdldCwgY2FsbGJhY2spIHtcblx0XHRcdHZhciBvZmZzZXQgPSAkKHRhcmdldCkub2Zmc2V0KCkudG9wO1xuXG5cdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG5cdFx0XHRcdHNjcm9sbFRvcDogb2Zmc2V0XG5cdFx0XHR9LCB0aGlzLmNvbmZpZy5zY3JvbGxTcGVlZCwgdGhpcy5jb25maWcuZWFzaW5nLCBjYWxsYmFjayk7XG5cdFx0fSxcblxuXHRcdHVuYmluZEludGVydmFsOiBmdW5jdGlvbigpIHtcblx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy50KTtcblx0XHRcdHRoaXMuJHdpbi51bmJpbmQoJ3Njcm9sbC5vbmVQYWdlTmF2Jyk7XG5cdFx0fVxuXHR9O1xuXG5cdE9uZVBhZ2VOYXYuZGVmYXVsdHMgPSBPbmVQYWdlTmF2LnByb3RvdHlwZS5kZWZhdWx0cztcblxuXHQkLmZuLm9uZVBhZ2VOYXYgPSBmdW5jdGlvbihvcHRpb25zKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdG5ldyBPbmVQYWdlTmF2KHRoaXMsIG9wdGlvbnMpLmluaXQoKTtcblx0XHR9KTtcblx0fTtcblxufSkoIGpRdWVyeSwgd2luZG93ICwgZG9jdW1lbnQgKTsiLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBVdGlsLFxuICAgIF9fYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbiAgVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBVdGlsKCkge31cblxuICAgIFV0aWwucHJvdG90eXBlLmV4dGVuZCA9IGZ1bmN0aW9uKGN1c3RvbSwgZGVmYXVsdHMpIHtcbiAgICAgIHZhciBrZXksIHZhbHVlO1xuICAgICAgZm9yIChrZXkgaW4gY3VzdG9tKSB7XG4gICAgICAgIHZhbHVlID0gY3VzdG9tW2tleV07XG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgZGVmYXVsdHNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfTtcblxuICAgIFV0aWwucHJvdG90eXBlLmlzTW9iaWxlID0gZnVuY3Rpb24oYWdlbnQpIHtcbiAgICAgIHJldHVybiAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QoYWdlbnQpO1xuICAgIH07XG5cbiAgICByZXR1cm4gVXRpbDtcblxuICB9KSgpO1xuXG4gIHRoaXMuV09XID0gKGZ1bmN0aW9uKCkge1xuICAgIFdPVy5wcm90b3R5cGUuZGVmYXVsdHMgPSB7XG4gICAgICBib3hDbGFzczogJ3dvdycsXG4gICAgICBhbmltYXRlQ2xhc3M6ICdhbmltYXRlZCcsXG4gICAgICBvZmZzZXQ6IDAsXG4gICAgICBtb2JpbGU6IHRydWVcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gV09XKG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgfVxuICAgICAgdGhpcy5zY3JvbGxDYWxsYmFjayA9IF9fYmluZCh0aGlzLnNjcm9sbENhbGxiYWNrLCB0aGlzKTtcbiAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlciA9IF9fYmluZCh0aGlzLnNjcm9sbEhhbmRsZXIsIHRoaXMpO1xuICAgICAgdGhpcy5zdGFydCA9IF9fYmluZCh0aGlzLnN0YXJ0LCB0aGlzKTtcbiAgICAgIHRoaXMuc2Nyb2xsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLnV0aWwoKS5leHRlbmQob3B0aW9ucywgdGhpcy5kZWZhdWx0cyk7XG4gICAgfVxuXG4gICAgV09XLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgX3JlZjtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICB0aGlzLmJveGVzID0gdGhpcy5lbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5jb25maWcuYm94Q2xhc3MpO1xuICAgICAgaWYgKHRoaXMuYm94ZXMubGVuZ3RoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKCkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZXNldFN0eWxlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKChfcmVmID0gZG9jdW1lbnQucmVhZHlTdGF0ZSkgPT09IFwiaW50ZXJhY3RpdmVcIiB8fCBfcmVmID09PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgdGhpcy5zdGFydCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIFdPVy5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBib3gsIF9pLCBfbGVuLCBfcmVmO1xuICAgICAgX3JlZiA9IHRoaXMuYm94ZXM7XG4gICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgICAgYm94ID0gX3JlZltfaV07XG4gICAgICAgIHRoaXMuYXBwbHlTdHlsZShib3gsIHRydWUpO1xuICAgICAgfVxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlciwgZmFsc2UpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuc2Nyb2xsSGFuZGxlciwgZmFsc2UpO1xuICAgICAgcmV0dXJuIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLnNjcm9sbENhbGxiYWNrLCA1MCk7XG4gICAgfTtcblxuICAgIFdPVy5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlciwgZmFsc2UpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuc2Nyb2xsSGFuZGxlciwgZmFsc2UpO1xuICAgICAgaWYgKHRoaXMuaW50ZXJ2YWwgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgV09XLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oYm94KSB7XG4gICAgICB0aGlzLmFwcGx5U3R5bGUoYm94KTtcbiAgICAgIHJldHVybiBib3guY2xhc3NOYW1lID0gXCJcIiArIGJveC5jbGFzc05hbWUgKyBcIiBcIiArIHRoaXMuY29uZmlnLmFuaW1hdGVDbGFzcztcbiAgICB9O1xuXG4gICAgV09XLnByb3RvdHlwZS5hcHBseVN0eWxlID0gZnVuY3Rpb24oYm94LCBoaWRkZW4pIHtcbiAgICAgIHZhciBkZWxheSwgZHVyYXRpb24sIGl0ZXJhdGlvbjtcbiAgICAgIGR1cmF0aW9uID0gYm94LmdldEF0dHJpYnV0ZSgnZGF0YS13b3ctZHVyYXRpb24nKTtcbiAgICAgIGRlbGF5ID0gYm94LmdldEF0dHJpYnV0ZSgnZGF0YS13b3ctZGVsYXknKTtcbiAgICAgIGl0ZXJhdGlvbiA9IGJveC5nZXRBdHRyaWJ1dGUoJ2RhdGEtd293LWl0ZXJhdGlvbicpO1xuICAgICAgcmV0dXJuIGJveC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgdGhpcy5jdXN0b21TdHlsZShoaWRkZW4sIGR1cmF0aW9uLCBkZWxheSwgaXRlcmF0aW9uKSk7XG4gICAgfTtcblxuICAgIFdPVy5wcm90b3R5cGUucmVzZXRTdHlsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGJveCwgX2ksIF9sZW4sIF9yZWYsIF9yZXN1bHRzO1xuICAgICAgX3JlZiA9IHRoaXMuYm94ZXM7XG4gICAgICBfcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgIGJveCA9IF9yZWZbX2ldO1xuICAgICAgICBfcmVzdWx0cy5wdXNoKGJveC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Zpc2liaWxpdHk6IHZpc2libGU7JykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgIH07XG5cbiAgICBXT1cucHJvdG90eXBlLmN1c3RvbVN0eWxlID0gZnVuY3Rpb24oaGlkZGVuLCBkdXJhdGlvbiwgZGVsYXksIGl0ZXJhdGlvbikge1xuICAgICAgdmFyIHN0eWxlO1xuICAgICAgc3R5bGUgPSBoaWRkZW4gPyBcInZpc2liaWxpdHk6IGhpZGRlbjsgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogbm9uZTsgLW1vei1hbmltYXRpb24tbmFtZTogbm9uZTsgYW5pbWF0aW9uLW5hbWU6IG5vbmU7XCIgOiBcInZpc2liaWxpdHk6IHZpc2libGU7XCI7XG4gICAgICBpZiAoZHVyYXRpb24pIHtcbiAgICAgICAgc3R5bGUgKz0gXCItd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogXCIgKyBkdXJhdGlvbiArIFwiOyAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogXCIgKyBkdXJhdGlvbiArIFwiOyBhbmltYXRpb24tZHVyYXRpb246IFwiICsgZHVyYXRpb24gKyBcIjtcIjtcbiAgICAgIH1cbiAgICAgIGlmIChkZWxheSkge1xuICAgICAgICBzdHlsZSArPSBcIi13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiBcIiArIGRlbGF5ICsgXCI7IC1tb3otYW5pbWF0aW9uLWRlbGF5OiBcIiArIGRlbGF5ICsgXCI7IGFuaW1hdGlvbi1kZWxheTogXCIgKyBkZWxheSArIFwiO1wiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZXJhdGlvbikge1xuICAgICAgICBzdHlsZSArPSBcIi13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogXCIgKyBpdGVyYXRpb24gKyBcIjsgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBcIiArIGl0ZXJhdGlvbiArIFwiOyBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBcIiArIGl0ZXJhdGlvbiArIFwiO1wiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH07XG5cbiAgICBXT1cucHJvdG90eXBlLnNjcm9sbEhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbGVkID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgV09XLnByb3RvdHlwZS5zY3JvbGxDYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGJveDtcbiAgICAgIGlmICh0aGlzLnNjcm9sbGVkKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ib3hlcyA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgX2ksIF9sZW4sIF9yZWYsIF9yZXN1bHRzO1xuICAgICAgICAgIF9yZWYgPSB0aGlzLmJveGVzO1xuICAgICAgICAgIF9yZXN1bHRzID0gW107XG4gICAgICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgICAgICBib3ggPSBfcmVmW19pXTtcbiAgICAgICAgICAgIGlmICghKGJveCkpIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pc1Zpc2libGUoYm94KSkge1xuICAgICAgICAgICAgICB0aGlzLnNob3coYm94KTtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfcmVzdWx0cy5wdXNoKGJveCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICAgICAgaWYgKCF0aGlzLmJveGVzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBXT1cucHJvdG90eXBlLm9mZnNldFRvcCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHZhciB0b3A7XG4gICAgICB0b3AgPSBlbGVtZW50Lm9mZnNldFRvcDtcbiAgICAgIHdoaWxlIChlbGVtZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQpIHtcbiAgICAgICAgdG9wICs9IGVsZW1lbnQub2Zmc2V0VG9wO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRvcDtcbiAgICB9O1xuXG4gICAgV09XLnByb3RvdHlwZS5pc1Zpc2libGUgPSBmdW5jdGlvbihib3gpIHtcbiAgICAgIHZhciBib3R0b20sIG9mZnNldCwgdG9wLCB2aWV3Qm90dG9tLCB2aWV3VG9wO1xuICAgICAgb2Zmc2V0ID0gYm94LmdldEF0dHJpYnV0ZSgnZGF0YS13b3ctb2Zmc2V0JykgfHwgdGhpcy5jb25maWcub2Zmc2V0O1xuICAgICAgdmlld1RvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgIHZpZXdCb3R0b20gPSB2aWV3VG9wICsgdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCAtIG9mZnNldDtcbiAgICAgIHRvcCA9IHRoaXMub2Zmc2V0VG9wKGJveCk7XG4gICAgICBib3R0b20gPSB0b3AgKyBib3guY2xpZW50SGVpZ2h0O1xuICAgICAgcmV0dXJuIHRvcCA8PSB2aWV3Qm90dG9tICYmIGJvdHRvbSA+PSB2aWV3VG9wO1xuICAgIH07XG5cbiAgICBXT1cucHJvdG90eXBlLnV0aWwgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl91dGlsIHx8ICh0aGlzLl91dGlsID0gbmV3IFV0aWwoKSk7XG4gICAgfTtcblxuICAgIFdPVy5wcm90b3R5cGUuZGlzYWJsZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5tb2JpbGUgPT09IGZhbHNlICYmIHRoaXMudXRpbCgpLmlzTW9iaWxlKG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIH07XG5cbiAgICByZXR1cm4gV09XO1xuXG4gIH0pKCk7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCJmdW5jdGlvbiBtdWVzdHJhX29jdWx0YShpZCl7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKXsgLy9zZSBvYnRpZW5lIGVsIGlkXG4gICAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpOyAvL3NlIGRlZmluZSBsYSB2YXJpYWJsZSBcImVsXCIgaWd1YWwgYSBudWVzdHJvIGRpdlxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAoZWwuc3R5bGUuZGlzcGxheSA9PSAnbm9uZScpID8gJ2Jsb2NrJyA6ICdub25lJzsgLy9kYW1vcyB1biBhdHJpYnV0byBkaXNwbGF5Om5vbmUgcXVlIG9jdWx0YSBlbCBkaXZcbiAgICB9XG59XG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXsvKmhhY2UgcXVlIHNlIGNhcmd1ZSBsYSBmdW5jacOzbiBsbyBxdWUgcHJlZGV0ZXJtaW5hIHF1ZSBkaXYgZXN0YXLDoSBvY3VsdG8gaGFzdGEgbGxhbWFyIGEgbGEgZnVuY2nDs24gbnVldmFtZW50ZSovXG4gICAgbXVlc3RyYV9vY3VsdGEoJ2NvbnRhY3QnKTsvKiBcImNvbnRhY3RvXCIgZXMgZWwgbm9tYnJlIHF1ZSBsZSBkaW1vcyBhbCBESVYgKi9cbn1cblxuJChcIi5uYXZiYXItbmF2IGxpXCIpLm9uKCBcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHQkKFwiLm5hdmJhci1uYXYgbGlcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gIFx0JCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbn0pO1xuXG5cbi8vV09XIFNjcm9sbCBTcHlcbnZhciB3b3cgPSBuZXcgV09XKHtcbiAgICAvL2Rpc2FibGVkIGZvciBtb2JpbGVcbiAgICBtb2JpbGU6IGZhbHNlXG59KTtcbndvdy5pbml0KCk7IiwiLyoqIVxuICogTWl4SXRVcCB2Mi4xLjZcbiAqXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAyMDE0IEt1bmthTGFicyBMaW1pdGVkLlxuICogQGF1dGhvciAgICBLdW5rYUxhYnMgTGltaXRlZC5cbiAqIEBsaW5rICAgICAgaHR0cHM6Ly9taXhpdHVwLmt1bmthbGFicy5jb21cbiAqXG4gKiBAbGljZW5zZSAgIENvbW1lcmNpYWwgdXNlIHJlcXVpcmVzIGEgY29tbWVyY2lhbCBsaWNlbnNlLlxuICogICAgICAgICAgICBodHRwczovL21peGl0dXAua3Vua2FsYWJzLmNvbS9saWNlbnNlcy9cbiAqXG4gKiAgICAgICAgICAgIE5vbi1jb21tZXJjaWFsIHVzZSBwZXJtaXR0ZWQgdW5kZXIgdGVybXMgb2YgQ0MtQlktTkMgbGljZW5zZS5cbiAqICAgICAgICAgICAgaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktbmMvMy4wL1xuICovXG5cbihmdW5jdGlvbigkLCB1bmRmKXtcblx0XG5cdC8qKlxuXHQgKiBNaXhJdFVwIENvbnN0cnVjdG9yIEZ1bmN0aW9uXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAZXh0ZW5kcyBqUXVlcnlcblx0ICovXG5cdFxuXHQkLk1peEl0VXAgPSBmdW5jdGlvbigpe1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcblx0XHRzZWxmLl9leGVjQWN0aW9uKCdfY29uc3RydWN0b3InLCAwKTtcblx0XHRcblx0XHQkLmV4dGVuZChzZWxmLCB7XG5cdFx0XHRcblx0XHRcdC8qIFB1YmxpYyBQcm9wZXJ0aWVzXG5cdFx0XHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdFx0XHRcblx0XHRcdHNlbGVjdG9yczoge1xuXHRcdFx0XHR0YXJnZXQ6ICcubWl4Jyxcblx0XHRcdFx0ZmlsdGVyOiAnLmZpbHRlcicsXG5cdFx0XHRcdHNvcnQ6ICcuc29ydCdcblx0XHRcdH0sXG5cdFx0XHRcdFxuXHRcdFx0YW5pbWF0aW9uOiB7XG5cdFx0XHRcdGVuYWJsZTogdHJ1ZSxcblx0XHRcdFx0ZWZmZWN0czogJ2ZhZGUgc2NhbGUnLFxuXHRcdFx0XHRkdXJhdGlvbjogNjAwLFxuXHRcdFx0XHRlYXNpbmc6ICdlYXNlJyxcblx0XHRcdFx0cGVyc3BlY3RpdmVEaXN0YW5jZTogJzMwMDAnLFxuXHRcdFx0XHRwZXJzcGVjdGl2ZU9yaWdpbjogJzUwJSA1MCUnLFxuXHRcdFx0XHRxdWV1ZTogdHJ1ZSxcblx0XHRcdFx0cXVldWVMaW1pdDogMSxcblx0XHRcdFx0YW5pbWF0ZUNoYW5nZUxheW91dDogZmFsc2UsXG5cdFx0XHRcdGFuaW1hdGVSZXNpemVDb250YWluZXI6IHRydWUsXG5cdFx0XHRcdGFuaW1hdGVSZXNpemVUYXJnZXRzOiBmYWxzZSxcblx0XHRcdFx0c3RhZ2dlclNlcXVlbmNlOiBmYWxzZSxcblx0XHRcdFx0cmV2ZXJzZU91dDogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHRcdFxuXHRcdFx0Y2FsbGJhY2tzOiB7XG5cdFx0XHRcdG9uTWl4TG9hZDogZmFsc2UsXG5cdFx0XHRcdG9uTWl4U3RhcnQ6IGZhbHNlLFxuXHRcdFx0XHRvbk1peEJ1c3k6IGZhbHNlLFxuXHRcdFx0XHRvbk1peEVuZDogZmFsc2UsXG5cdFx0XHRcdG9uTWl4RmFpbDogZmFsc2UsXG5cdFx0XHRcdF91c2VyOiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdFx0XG5cdFx0XHRjb250cm9sczoge1xuXHRcdFx0XHRlbmFibGU6IHRydWUsXG5cdFx0XHRcdGxpdmU6IGZhbHNlLFxuXHRcdFx0XHR0b2dnbGVGaWx0ZXJCdXR0b25zOiBmYWxzZSxcblx0XHRcdFx0dG9nZ2xlTG9naWM6ICdvcicsXG5cdFx0XHRcdGFjdGl2ZUNsYXNzOiAnYWN0aXZlJ1xuXHRcdFx0fSxcblxuXHRcdFx0bGF5b3V0OiB7XG5cdFx0XHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdFx0XHRjb250YWluZXJDbGFzczogJycsXG5cdFx0XHRcdGNvbnRhaW5lckNsYXNzRmFpbDogJ2ZhaWwnXG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRsb2FkOiB7XG5cdFx0XHRcdGZpbHRlcjogJ2FsbCcsXG5cdFx0XHRcdHNvcnQ6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHQvKiBQcml2YXRlIFByb3BlcnRpZXNcblx0XHRcdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0XHRcdFx0XG5cdFx0XHRfJGJvZHk6IG51bGwsXG5cdFx0XHRfJGNvbnRhaW5lcjogbnVsbCxcblx0XHRcdF8kdGFyZ2V0czogbnVsbCxcblx0XHRcdF8kcGFyZW50OiBudWxsLFxuXHRcdFx0XyRzb3J0QnV0dG9uczogbnVsbCxcblx0XHRcdF8kZmlsdGVyQnV0dG9uczogbnVsbCxcblx0XHRcblx0XHRcdF9zdWNrTW9kZTogZmFsc2UsXG5cdFx0XHRfbWl4aW5nOiBmYWxzZSxcblx0XHRcdF9zb3J0aW5nOiBmYWxzZSxcblx0XHRcdF9jbGlja2luZzogZmFsc2UsXG5cdFx0XHRfbG9hZGluZzogdHJ1ZSxcblx0XHRcdF9jaGFuZ2luZ0xheW91dDogZmFsc2UsXG5cdFx0XHRfY2hhbmdpbmdDbGFzczogZmFsc2UsXG5cdFx0XHRfY2hhbmdpbmdEaXNwbGF5OiBmYWxzZSxcblx0XHRcdFxuXHRcdFx0X29yaWdPcmRlcjogW10sXG5cdFx0XHRfc3RhcnRPcmRlcjogW10sXG5cdFx0XHRfbmV3T3JkZXI6IFtdLFxuXHRcdFx0X2FjdGl2ZUZpbHRlcjogbnVsbCxcblx0XHRcdF90b2dnbGVBcnJheTogW10sXG5cdFx0XHRfdG9nZ2xlU3RyaW5nOiAnJyxcblx0XHRcdF9hY3RpdmVTb3J0OiAnZGVmYXVsdDphc2MnLFxuXHRcdFx0X25ld1NvcnQ6IG51bGwsXG5cdFx0XHRfc3RhcnRIZWlnaHQ6IG51bGwsXG5cdFx0XHRfbmV3SGVpZ2h0OiBudWxsLFxuXHRcdFx0X2luY1BhZGRpbmc6IHRydWUsXG5cdFx0XHRfbmV3RGlzcGxheTogbnVsbCxcblx0XHRcdF9uZXdDbGFzczogbnVsbCxcblx0XHRcdF90YXJnZXRzQm91bmQ6IDAsXG5cdFx0XHRfdGFyZ2V0c0RvbmU6IDAsXG5cdFx0XHRfcXVldWU6IFtdLFxuXHRcdFx0XHRcblx0XHRcdF8kc2hvdzogJCgpLFxuXHRcdFx0XyRoaWRlOiAkKClcblx0XHR9KTtcblx0XG5cdFx0c2VsZi5fZXhlY0FjdGlvbignX2NvbnN0cnVjdG9yJywgMSk7XG5cdH07XG5cdFxuXHQvKipcblx0ICogTWl4SXRVcCBQcm90b3R5cGVcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRcblx0JC5NaXhJdFVwLnByb3RvdHlwZSA9IHtcblx0XHRjb25zdHJ1Y3RvcjogJC5NaXhJdFVwLFxuXHRcdFxuXHRcdC8qIFN0YXRpYyBQcm9wZXJ0aWVzXG5cdFx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXHRcdFxuXHRcdF9pbnN0YW5jZXM6IHt9LFxuXHRcdF9oYW5kbGVkOiB7XG5cdFx0XHRfZmlsdGVyOiB7fSxcblx0XHRcdF9zb3J0OiB7fVxuXHRcdH0sXG5cdFx0X2JvdW5kOiB7XG5cdFx0XHRfZmlsdGVyOiB7fSxcblx0XHRcdF9zb3J0OiB7fVxuXHRcdH0sXG5cdFx0X2FjdGlvbnM6IHt9LFxuXHRcdF9maWx0ZXJzOiB7fSxcblx0XHRcblx0XHQvKiBTdGF0aWMgTWV0aG9kc1xuXHRcdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0XHRcblx0XHQvKipcblx0XHQgKiBFeHRlbmRcblx0XHQgKiBAc2luY2UgMi4xLjBcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gbmV3IHByb3BlcnRpZXMvbWV0aG9kc1xuXHRcdCAqIEBleHRlbmRzIHtvYmplY3R9IHByb3RvdHlwZVxuXHRcdCAqL1xuXHRcdFxuXHRcdGV4dGVuZDogZnVuY3Rpb24oZXh0ZW5zaW9uKXtcblx0XHRcdGZvcih2YXIga2V5IGluIGV4dGVuc2lvbil7XG5cdFx0XHRcdCQuTWl4SXRVcC5wcm90b3R5cGVba2V5XSA9IGV4dGVuc2lvbltrZXldO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogQWRkIEFjdGlvblxuXHRcdCAqIEBzaW5jZSAyLjEuMFxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBob29rIG5hbWVcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuY3Rpb24gdG8gZXhlY3V0ZVxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBwcmlvcml0eVxuXHRcdCAqIEBleHRlbmRzIHtvYmplY3R9ICQuTWl4SXRVcC5wcm90b3R5cGUuX2FjdGlvbnNcblx0XHQgKi9cblx0XHRcblx0XHRhZGRBY3Rpb246IGZ1bmN0aW9uKGhvb2ssIG5hbWUsIGZ1bmMsIHByaW9yaXR5KXtcblx0XHRcdCQuTWl4SXRVcC5wcm90b3R5cGUuX2FkZEhvb2soJ19hY3Rpb25zJywgaG9vaywgbmFtZSwgZnVuYywgcHJpb3JpdHkpO1xuXHRcdH0sXG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogQWRkIEZpbHRlclxuXHRcdCAqIEBzaW5jZSAyLjEuMFxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBob29rIG5hbWVcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuY3Rpb24gdG8gZXhlY3V0ZVxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBwcmlvcml0eVxuXHRcdCAqIEBleHRlbmRzIHtvYmplY3R9ICQuTWl4SXRVcC5wcm90b3R5cGUuX2ZpbHRlcnNcblx0XHQgKi9cblx0XHRcblx0XHRhZGRGaWx0ZXI6IGZ1bmN0aW9uKGhvb2ssIG5hbWUsIGZ1bmMsIHByaW9yaXR5KXtcblx0XHRcdCQuTWl4SXRVcC5wcm90b3R5cGUuX2FkZEhvb2soJ19maWx0ZXJzJywgaG9vaywgbmFtZSwgZnVuYywgcHJpb3JpdHkpO1xuXHRcdH0sXG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogQWRkIEhvb2tcblx0XHQgKiBAc2luY2UgMi4xLjBcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBvZiBob29rXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGhvb2sgbmFtZVxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmN0aW9uIHRvIGV4ZWN1dGVcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gcHJpb3JpdHlcblx0XHQgKiBAZXh0ZW5kcyB7b2JqZWN0fSAkLk1peEl0VXAucHJvdG90eXBlLl9maWx0ZXJzXG5cdFx0ICovXG5cdFx0XG5cdFx0X2FkZEhvb2s6IGZ1bmN0aW9uKHR5cGUsIGhvb2ssIG5hbWUsIGZ1bmMsIHByaW9yaXR5KXtcblx0XHRcdHZhciBjb2xsZWN0aW9uID0gJC5NaXhJdFVwLnByb3RvdHlwZVt0eXBlXSxcblx0XHRcdFx0b2JqID0ge307XG5cdFx0XHRcdFxuXHRcdFx0cHJpb3JpdHkgPSAocHJpb3JpdHkgPT09IDEgfHwgcHJpb3JpdHkgPT09ICdwb3N0JykgPyAncG9zdCcgOiAncHJlJztcblx0XHRcdFx0XG5cdFx0XHRvYmpbaG9va10gPSB7fTtcblx0XHRcdG9ialtob29rXVtwcmlvcml0eV0gPSB7fTtcblx0XHRcdG9ialtob29rXVtwcmlvcml0eV1bbmFtZV0gPSBmdW5jO1xuXG5cdFx0XHQkLmV4dGVuZCh0cnVlLCBjb2xsZWN0aW9uLCBvYmopO1xuXHRcdH0sXG5cdFx0XG5cdFx0XG5cdFx0LyogUHJpdmF0ZSBNZXRob2RzXG5cdFx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIEluaXRpYWxpc2Vcblx0XHQgKiBAc2luY2UgMi4wLjBcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gZG9tTm9kZVxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWdcblx0XHQgKi9cblx0XHRcblx0XHRfaW5pdDogZnVuY3Rpb24oZG9tTm9kZSwgY29uZmlnKXtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdFxuXHRcdFx0c2VsZi5fZXhlY0FjdGlvbignX2luaXQnLCAwLCBhcmd1bWVudHMpO1xuXHRcdFx0XG5cdFx0XHRjb25maWcgJiYgJC5leHRlbmQodHJ1ZSwgc2VsZiwgY29uZmlnKTtcblx0XHRcdFxuXHRcdFx0c2VsZi5fJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0XHRzZWxmLl9kb21Ob2RlID0gZG9tTm9kZTtcblx0XHRcdHNlbGYuXyRjb250YWluZXIgPSAkKGRvbU5vZGUpO1xuXHRcdFx0c2VsZi5fJGNvbnRhaW5lci5hZGRDbGFzcyhzZWxmLmxheW91dC5jb250YWluZXJDbGFzcyk7XG5cdFx0XHRzZWxmLl9pZCA9IGRvbU5vZGUuaWQ7XG5cdFx0XHRcblx0XHRcdHNlbGYuX3BsYXRmb3JtRGV0ZWN0KCk7XG5cdFx0XHRcblx0XHRcdHNlbGYuX2JyYWtlID0gc2VsZi5fZ2V0UHJlZml4ZWRDU1MoJ3RyYW5zaXRpb24nLCAnbm9uZScpO1xuXHRcdFx0XG5cdFx0XHRzZWxmLl9yZWZyZXNoKHRydWUpO1xuXHRcdFx0XG5cdFx0XHRzZWxmLl8kcGFyZW50ID0gc2VsZi5fJHRhcmdldHMucGFyZW50KCkubGVuZ3RoID8gc2VsZi5fJHRhcmdldHMucGFyZW50KCkgOiBzZWxmLl8kY29udGFpbmVyO1xuXHRcdFx0XG5cdFx0XHRpZihzZWxmLmxvYWQuc29ydCl7XG5cdFx0XHRcdHNlbGYuX25ld1NvcnQgPSBzZWxmLl9wYXJzZVNvcnQoc2VsZi5sb2FkLnNvcnQpO1xuXHRcdFx0XHRzZWxmLl9uZXdTb3J0U3RyaW5nID0gc2VsZi5sb2FkLnNvcnQ7XG5cdFx0XHRcdHNlbGYuX2FjdGl2ZVNvcnQgPSBzZWxmLmxvYWQuc29ydDtcblx0XHRcdFx0c2VsZi5fc29ydCgpO1xuXHRcdFx0XHRzZWxmLl9wcmludFNvcnQoKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c2VsZi5fYWN0aXZlRmlsdGVyID0gc2VsZi5sb2FkLmZpbHRlciA9PT0gJ2FsbCcgPyBcblx0XHRcdFx0c2VsZi5zZWxlY3RvcnMudGFyZ2V0IDogXG5cdFx0XHRcdHNlbGYubG9hZC5maWx0ZXIgPT09ICdub25lJyA/XG5cdFx0XHRcdFx0JycgOlxuXHRcdFx0XHRcdHNlbGYubG9hZC5maWx0ZXI7XG5cdFx0XHRcblx0XHRcdHNlbGYuY29udHJvbHMuZW5hYmxlICYmIHNlbGYuX2JpbmRIYW5kbGVycygpO1xuXHRcdFx0XG5cdFx0XHRpZihzZWxmLmNvbnRyb2xzLnRvZ2dsZUZpbHRlckJ1dHRvbnMpe1xuXHRcdFx0XHRzZWxmLl9idWlsZFRvZ2dsZUFycmF5KCk7XG5cdFx0XHRcdFxuXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2VsZi5fdG9nZ2xlQXJyYXkubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHRcdHNlbGYuX3VwZGF0ZUNvbnRyb2xzKHtmaWx0ZXI6IHNlbGYuX3RvZ2dsZUFycmF5W2ldLCBzb3J0OiBzZWxmLl9hY3RpdmVTb3J0fSwgdHJ1ZSk7XG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2UgaWYoc2VsZi5jb250cm9scy5lbmFibGUpe1xuXHRcdFx0XHRzZWxmLl91cGRhdGVDb250cm9scyh7ZmlsdGVyOiBzZWxmLl9hY3RpdmVGaWx0ZXIsIHNvcnQ6IHNlbGYuX2FjdGl2ZVNvcnR9KTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c2VsZi5fZmlsdGVyKCk7XG5cdFx0XHRcblx0XHRcdHNlbGYuX2luaXQgPSB0cnVlO1xuXHRcdFx0XG5cdFx0XHRzZWxmLl8kY29udGFpbmVyLmRhdGEoJ21peEl0VXAnLHNlbGYpO1xuXHRcdFx0XG5cdFx0XHRzZWxmLl9leGVjQWN0aW9uKCdfaW5pdCcsIDEsIGFyZ3VtZW50cyk7XG5cdFx0XHRcblx0XHRcdHNlbGYuX2J1aWxkU3RhdGUoKTtcblx0XHRcdFxuXHRcdFx0c2VsZi5fJHRhcmdldHMuY3NzKHNlbGYuX2JyYWtlKTtcblx0XHRcblx0XHRcdHNlbGYuX2dvTWl4KHNlbGYuYW5pbWF0aW9uLmVuYWJsZSk7XG5cdFx0fSxcblx0XHRcblx0XHQvKipcblx0XHQgKiBQbGF0Zm9ybSBEZXRlY3Rcblx0XHQgKiBAc2luY2UgMi4wLjBcblx0XHQgKi9cblx0XHRcblx0XHRfcGxhdGZvcm1EZXRlY3Q6IGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0XHRcdHZlbmRvcnNUcmFucyA9IFsnV2Via2l0JywgJ01veicsICdPJywgJ21zJ10sXG5cdFx0XHRcdHZlbmRvcnNSQUYgPSBbJ3dlYmtpdCcsICdtb3onXSxcblx0XHRcdFx0Y2hyb21lID0gd2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uLm1hdGNoKC9DaHJvbWVcXC8oXFxkKylcXC4vKSB8fCBmYWxzZSxcblx0XHRcdFx0ZmYgPSB0eXBlb2YgSW5zdGFsbFRyaWdnZXIgIT09ICd1bmRlZmluZWQnLFxuXHRcdFx0XHRwcmVmaXggPSBmdW5jdGlvbihlbCl7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2ZW5kb3JzVHJhbnMubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHRcdFx0aWYgKHZlbmRvcnNUcmFuc1tpXSArICdUcmFuc2l0aW9uJyBpbiBlbC5zdHlsZSl7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdFx0cHJlZml4OiAnLScrdmVuZG9yc1RyYW5zW2ldLnRvTG93ZXJDYXNlKCkrJy0nLFxuXHRcdFx0XHRcdFx0XHRcdHZlbmRvcjogdmVuZG9yc1RyYW5zW2ldXG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH07IFxuXHRcdFx0XHRcdHJldHVybiAndHJhbnNpdGlvbicgaW4gZWwuc3R5bGUgPyAnJyA6IGZhbHNlO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR0cmFuc1ByZWZpeCA9IHByZWZpeChzZWxmLl9kb21Ob2RlKTtcblx0XHRcdFx0XG5cdFx0XHRzZWxmLl9leGVjQWN0aW9uKCdfcGxhdGZvcm1EZXRlY3QnLCAwKTtcblx0XHRcdFxuXHRcdFx0c2VsZi5fY2hyb21lID0gY2hyb21lID8gcGFyc2VJbnQoY2hyb21lWzFdLCAxMCkgOiBmYWxzZTtcblx0XHRcdHNlbGYuX2ZmID0gZmYgPyBwYXJzZUludCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvcnY6KFteKV0rKVxcKS8pWzFdKSA6IGZhbHNlO1xuXHRcdFx0c2VsZi5fcHJlZml4ID0gdHJhbnNQcmVmaXgucHJlZml4O1xuXHRcdFx0c2VsZi5fdmVuZG9yID0gdHJhbnNQcmVmaXgudmVuZG9yO1xuXHRcdFx0c2VsZi5fc3Vja01vZGUgPSB3aW5kb3cuYXRvYiAmJiBzZWxmLl9wcmVmaXggPyBmYWxzZSA6IHRydWU7XG5cblx0XHRcdHNlbGYuX3N1Y2tNb2RlICYmIChzZWxmLmFuaW1hdGlvbi5lbmFibGUgPSBmYWxzZSk7XG5cdFx0XHQoc2VsZi5fZmYgJiYgc2VsZi5fZmYgPD0gNCkgJiYgKHNlbGYuYW5pbWF0aW9uLmVuYWJsZSA9IGZhbHNlKTtcblx0XHRcdFxuXHRcdFx0LyogUG9seWZpbGxzXG5cdFx0XHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdFx0XHRcblx0XHRcdC8qKlxuXHRcdFx0ICogd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZVxuXHRcdFx0ICovXG5cdFx0XHRcblx0XHRcdGZvcih2YXIgeCA9IDA7IHggPCB2ZW5kb3JzUkFGLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgeCsrKXtcblx0XHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzUkFGW3hdKydSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBPYmplY3QuZ2V0UHJvdG90eXBlT2Zcblx0XHRcdCAqL1xuXG5cdFx0XHRpZih0eXBlb2YgT2JqZWN0LmdldFByb3RvdHlwZU9mICE9PSAnZnVuY3Rpb24nKXtcblx0XHRcdFx0aWYodHlwZW9mICd0ZXN0Jy5fX3Byb3RvX18gPT09ICdvYmplY3QnKXtcblx0XHRcdFx0XHRPYmplY3QuZ2V0UHJvdG90eXBlT2YgPSBmdW5jdGlvbihvYmplY3Qpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIG9iamVjdC5fX3Byb3RvX187XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRPYmplY3QuZ2V0UHJvdG90eXBlT2YgPSBmdW5jdGlvbihvYmplY3Qpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIG9iamVjdC5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nXG5cdFx0XHQgKi9cblx0XHRcdFxuXHRcdFx0aWYoc2VsZi5fZG9tTm9kZS5uZXh0RWxlbWVudFNpYmxpbmcgPT09IHVuZGYpe1xuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxlbWVudC5wcm90b3R5cGUsICduZXh0RWxlbWVudFNpYmxpbmcnLHtcblx0XHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHR2YXIgZWwgPSB0aGlzLm5leHRTaWJsaW5nO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR3aGlsZShlbCl7XG5cdFx0XHRcdFx0XHRcdGlmKGVsLm5vZGVUeXBlID09PTEpe1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRlbCA9IGVsLm5leHRTaWJsaW5nO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c2VsZi5fZXhlY0FjdGlvbignX3BsYXRmb3JtRGV0ZWN0JywgMSk7XG5cdFx0fSxcblx0XHRcblx0XHQvKipcblx0XHQgKiBSZWZyZXNoXG5cdFx0ICogQHNpbmNlIDIuMC4wXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBpbml0XG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBmb3JjZVxuXHRcdCAqL1xuXHRcdFxuXHRcdF9yZWZyZXNoOiBmdW5jdGlvbihpbml0LCBmb3JjZSl7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdFxuXHRcdFx0c2VsZi5fZXhlY0FjdGlvbignX3JlZnJlc2gnLCAwLCBhcmd1bWVudHMpO1xuXG5cdFx0XHRzZWxmLl8kdGFyZ2V0cyA9IHNlbGYuXyRjb250YWluZXIuZmluZChzZWxmLnNlbGVjdG9ycy50YXJnZXQpO1xuXHRcdFx0XG5cdFx0XHRmb3IodmFyIGkgPSAwOyAgaSA8IHNlbGYuXyR0YXJnZXRzLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0dmFyIHRhcmdldCA9IHNlbGYuXyR0YXJnZXRzW2ldO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRpZih0YXJnZXQuZGF0YXNldCA9PT0gdW5kZiB8fCBmb3JjZSl7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR0YXJnZXQuZGF0YXNldCA9IHt9O1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCB0YXJnZXQuYXR0cmlidXRlcy5sZW5ndGg7IGorKyl7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdHZhciBhdHRyID0gIHRhcmdldC5hdHRyaWJ1dGVzW2pdLFxuXHRcdFx0XHRcdFx0XHRuYW1lID0gYXR0ci5uYW1lLFxuXHRcdFx0XHRcdFx0XHR2YWwgPSBhdHRyLnZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGlmKG5hbWUuaW5kZXhPZignZGF0YS0nKSA+IC0xKXtcblx0XHRcdFx0XHRcdFx0dmFyIGRhdGFOYW1lID0gc2VsZi5faGVscGVycy5fY2FtZWxDYXNlKG5hbWUuc3Vic3RyaW5nKDUsbmFtZS5sZW5ndGgpKTtcblx0XHRcdFx0XHRcdFx0dGFyZ2V0LmRhdGFzZXRbZGF0YU5hbWVdID0gdmFsO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0aWYodGFyZ2V0Lm1peFBhcmVudCA9PT0gdW5kZil7XG5cdFx0XHRcdFx0dGFyZ2V0Lm1peFBhcmVudCA9IHNlbGYuX2lkO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmKFxuXHRcdFx0XHQoc2VsZi5fJHRhcmdldHMubGVuZ3RoICYmIGluaXQpIHx8XG5cdFx0XHRcdCghc2VsZi5fb3JpZ09yZGVyLmxlbmd0aCAmJiBzZWxmLl8kdGFyZ2V0cy5sZW5ndGgpXG5cdFx0XHQpe1xuXHRcdFx0XHRzZWxmLl9vcmlnT3JkZXIgPSBbXTtcblx0XHRcdFx0XG5cdFx0XHRcdGZvcih2YXIgaSA9IDA7ICBpIDwgc2VsZi5fJHRhcmdldHMubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHRcdHZhciB0YXJnZXQgPSBzZWxmLl8kdGFyZ2V0c1tpXTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRzZWxmLl9vcmlnT3JkZXIucHVzaCh0YXJnZXQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHNlbGYuX2V4ZWNBY3Rpb24oJ19yZWZyZXNoJywgMSwgYXJndW1lbnRzKTtcblx0XHR9LFxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIEJpbmQgSGFuZGxlcnNcblx0XHQgKiBAc2luY2UgMi4wLjBcblx0XHQgKi9cblx0XHRcblx0XHRfYmluZEhhbmRsZXJzOiBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzLFxuXHRcdFx0XHRmaWx0ZXJzID0gJC5NaXhJdFVwLnByb3RvdHlwZS5fYm91bmQuX2ZpbHRlcixcblx0XHRcdFx0c29ydHMgPSAkLk1peEl0VXAucHJvdG90eXBlLl9ib3VuZC5fc29ydDtcblx0XHRcdFxuXHRcdFx0c2VsZi5fZXhlY0FjdGlvbignX2JpbmRIYW5kbGVycycsIDApO1xuXHRcdFx0XG5cdFx0XHRpZihzZWxmLmNvbnRyb2xzLmxpdmUpe1xuXHRcdFx0XHRzZWxmLl8kYm9keVxuXHRcdFx0XHRcdC5vbignY2xpY2subWl4SXRVcC4nK3NlbGYuX2lkLCBzZWxmLnNlbGVjdG9ycy5zb3J0LCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0c2VsZi5fcHJvY2Vzc0NsaWNrKCQodGhpcyksICdzb3J0Jyk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQub24oJ2NsaWNrLm1peEl0VXAuJytzZWxmLl9pZCwgc2VsZi5zZWxlY3RvcnMuZmlsdGVyLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0c2VsZi5fcHJvY2Vzc0NsaWNrKCQodGhpcyksICdmaWx0ZXInKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlbGYuXyRzb3J0QnV0dG9ucyA9ICQoc2VsZi5zZWxlY3RvcnMuc29ydCk7XG5cdFx0XHRcdHNlbGYuXyRmaWx0ZXJCdXR0b25zID0gJChzZWxmLnNlbGVjdG9ycy5maWx0ZXIpO1xuXHRcdFx0XHRcblx0XHRcdFx0c2VsZi5fJHNvcnRCdXR0b25zLm9uKCdjbGljay5taXhJdFVwLicrc2VsZi5faWQsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0c2VsZi5fcHJvY2Vzc0NsaWNrKCQodGhpcyksICdzb3J0Jyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRcblx0XHRcdFx0c2VsZi5fJGZpbHRlckJ1dHRvbnMub24oJ2NsaWNrLm1peEl0VXAuJytzZWxmLl9pZCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRzZWxmLl9wcm9jZXNzQ2xpY2soJCh0aGlzKSwgJ2ZpbHRlcicpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0ZmlsdGVyc1tzZWxmLnNlbGVjdG9ycy5maWx0ZXJdID0gKGZpbHRlcnNbc2VsZi5zZWxlY3RvcnMuZmlsdGVyXSA9PT0gdW5kZikgPyAxIDogZmlsdGVyc1tzZWxmLnNlbGVjdG9ycy5maWx0ZXJdICsgMTtcblx0XHRcdHNvcnRzW3NlbGYuc2VsZWN0b3JzLnNvcnRdID0gKHNvcnRzW3NlbGYuc2VsZWN0b3JzLnNvcnRdID09PSB1bmRmKSA/IDEgOiBzb3J0c1tzZWxmLnNlbGVjdG9ycy5zb3J0XSArIDE7XG5cdFx0XHRcblx0XHRcdHNlbGYuX2V4ZWNBY3Rpb24oJ19iaW5kSGFuZGxlcnMnLCAxKTtcblx0XHR9LFxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIFByb2Nlc3MgQ2xpY2tcblx0XHQgKiBAc2luY2UgMi4wLjBcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gJGJ1dHRvblxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG5cdFx0ICovXG5cdFx0XG5cdFx0X3Byb2Nlc3NDbGljazogZnVuY3Rpb24oJGJ1dHRvbiwgdHlwZSl7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0XHRcdHRyYWNrQ2xpY2sgPSBmdW5jdGlvbigkYnV0dG9uLCB0eXBlLCBvZmYpe1xuXHRcdFx0XHRcdHZhciBwcm90byA9ICQuTWl4SXRVcC5wcm90b3R5cGU7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRwcm90by5faGFuZGxlZFsnXycrdHlwZV1bc2VsZi5zZWxlY3RvcnNbdHlwZV1dID0gKHByb3RvLl9oYW5kbGVkWydfJyt0eXBlXVtzZWxmLnNlbGVjdG9yc1t0eXBlXV0gPT09IHVuZGYpID8gXG5cdFx0XHRcdFx0XHQxIDogXG5cdFx0XHRcdFx0XHRwcm90by5faGFuZGxlZFsnXycrdHlwZV1bc2VsZi5zZWxlY3RvcnNbdHlwZV1dICsgMTtcblxuXHRcdFx0XHRcdGlmKHByb3RvLl9oYW5kbGVkWydfJyt0eXBlXVtzZWxmLnNlbGVjdG9yc1t0eXBlXV0gPT09IHByb3RvLl9ib3VuZFsnXycrdHlwZV1bc2VsZi5zZWxlY3RvcnNbdHlwZV1dKXtcblx0XHRcdFx0XHRcdCRidXR0b25bKG9mZiA/ICdyZW1vdmUnIDogJ2FkZCcpKydDbGFzcyddKHNlbGYuY29udHJvbHMuYWN0aXZlQ2xhc3MpO1xuXHRcdFx0XHRcdFx0ZGVsZXRlIHByb3RvLl9oYW5kbGVkWydfJyt0eXBlXVtzZWxmLnNlbGVjdG9yc1t0eXBlXV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0XG5cdFx0XHRzZWxmLl9leGVjQWN0aW9uKCdfcHJvY2Vzc0NsaWNrJywgMCwgYXJndW1lbnRzKTtcblx0XHRcdFxuXHRcdFx0aWYoIXNlbGYuX21peGluZyB8fCAoc2VsZi5hbmltYXRpb24ucXVldWUgJiYgc2VsZi5fcXVldWUubGVuZ3RoIDwgc2VsZi5hbmltYXRpb24ucXVldWVMaW1pdCkpe1xuXHRcdFx0XHRzZWxmLl9jbGlja2luZyA9IHRydWU7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZih0eXBlID09PSAnc29ydCcpe1xuXHRcdFx0XHRcdHZhciBzb3J0ID0gJGJ1dHRvbi5hdHRyKCdkYXRhLXNvcnQnKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZighJGJ1dHRvbi5oYXNDbGFzcyhzZWxmLmNvbnRyb2xzLmFjdGl2ZUNsYXNzKSB8fCBzb3J0LmluZGV4T2YoJ3JhbmRvbScpID4gLTEpe1xuXHRcdFx0XHRcdFx0JChzZWxmLnNlbGVjdG9ycy5zb3J0KS5yZW1vdmVDbGFzcyhzZWxmLmNvbnRyb2xzLmFjdGl2ZUNsYXNzKTtcblx0XHRcdFx0XHRcdHRyYWNrQ2xpY2soJGJ1dHRvbiwgdHlwZSk7XG5cdFx0XHRcdFx0XHRzZWxmLnNvcnQoc29ydCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRpZih0eXBlID09PSAnZmlsdGVyJykge1xuXHRcdFx0XHRcdHZhciBmaWx0ZXIgPSAkYnV0dG9uLmF0dHIoJ2RhdGEtZmlsdGVyJyksXG5cdFx0XHRcdFx0XHRuZHgsXG5cdFx0XHRcdFx0XHRzZXBlcmF0b3IgPSBzZWxmLmNvbnRyb2xzLnRvZ2dsZUxvZ2ljID09PSAnb3InID8gJywnIDogJyc7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYoIXNlbGYuY29udHJvbHMudG9nZ2xlRmlsdGVyQnV0dG9ucyl7XG5cdFx0XHRcdFx0XHRpZighJGJ1dHRvbi5oYXNDbGFzcyhzZWxmLmNvbnRyb2xzLmFjdGl2ZUNsYXNzKSl7XG5cdFx0XHRcdFx0XHRcdCQoc2VsZi5zZWxlY3RvcnMuZmlsdGVyKS5yZW1vdmVDbGFzcyhzZWxmLmNvbnRyb2xzLmFjdGl2ZUNsYXNzKTtcblx0XHRcdFx0XHRcdFx0dHJhY2tDbGljaygkYnV0dG9uLCB0eXBlKTtcblx0XHRcdFx0XHRcdFx0c2VsZi5maWx0ZXIoZmlsdGVyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c2VsZi5fYnVpbGRUb2dnbGVBcnJheSgpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRpZighJGJ1dHRvbi5oYXNDbGFzcyhzZWxmLmNvbnRyb2xzLmFjdGl2ZUNsYXNzKSl7XG5cdFx0XHRcdFx0XHRcdHRyYWNrQ2xpY2soJGJ1dHRvbiwgdHlwZSk7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRzZWxmLl90b2dnbGVBcnJheS5wdXNoKGZpbHRlcik7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0cmFja0NsaWNrKCRidXR0b24sIHR5cGUsIHRydWUpO1xuXHRcdFx0XHRcdFx0XHRuZHggPSBzZWxmLl90b2dnbGVBcnJheS5pbmRleE9mKGZpbHRlcik7XG5cdFx0XHRcdFx0XHRcdHNlbGYuX3RvZ2dsZUFycmF5LnNwbGljZShuZHgsIDEpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRzZWxmLl90b2dnbGVBcnJheSA9ICQuZ3JlcChzZWxmLl90b2dnbGVBcnJheSxmdW5jdGlvbihuKXtyZXR1cm4obik7fSk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdHNlbGYuX3RvZ2dsZVN0cmluZyA9IHNlbGYuX3RvZ2dsZUFycmF5LmpvaW4oc2VwZXJhdG9yKTtcblxuXHRcdFx0XHRcdFx0c2VsZi5maWx0ZXIoc2VsZi5fdG9nZ2xlU3RyaW5nKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHNlbGYuX2V4ZWNBY3Rpb24oJ19wcm9jZXNzQ2xpY2snLCAxLCBhcmd1bWVudHMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHlwZW9mIHNlbGYuY2FsbGJhY2tzLm9uTWl4QnVzeSA9PT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRcdFx0c2VsZi5jYWxsYmFja3Mub25NaXhCdXN5LmNhbGwoc2VsZi5fZG9tTm9kZSwgc2VsZi5fc3RhdGUsIHNlbGYpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNlbGYuX2V4ZWNBY3Rpb24oJ19wcm9jZXNzQ2xpY2tCdXN5JywgMSwgYXJndW1lbnRzKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIEJ1aWxkIFRvZ2dsZSBBcnJheVxuXHRcdCAqIEBzaW5jZSAyLjAuMFxuXHRcdCAqL1xuXHRcdFxuXHRcdF9idWlsZFRvZ2dsZUFycmF5OiBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzLFxuXHRcdFx0XHRhY3RpdmVGaWx0ZXIgPSBzZWxmLl9hY3RpdmVGaWx0ZXIucmVwbGFjZSgvXFxzL2csICcnKTtcblx0XHRcdFxuXHRcdFx0c2VsZi5fZXhlY0FjdGlvbignX2J1aWxkVG9nZ2xlQXJyYXknLCAwLCBhcmd1bWVudHMpO1xuXHRcdFx0XG5cdFx0XHRpZihzZWxmLmNvbnRyb2xzLnRvZ2dsZUxvZ2ljID09PSAnb3InKXtcblx0XHRcdFx0c2VsZi5fdG9nZ2xlQXJyYXkgPSBhY3RpdmVGaWx0ZXIuc3BsaXQoJywnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlbGYuX3RvZ2dsZUFycmF5ID0gYWN0aXZlRmlsdGVyLnNwbGl0KCcuJyk7XG5cdFx0XHRcdFxuXHRcdFx0XHQhc2VsZi5fdG9nZ2xlQXJyYXlbMF0gJiYgc2VsZi5fdG9nZ2xlQXJyYXkuc2hpZnQoKTtcblx0XHRcdFx0XG5cdFx0XHRcdGZvcih2YXIgaSA9IDAsIGZpbHRlcjsgZmlsdGVyID0gc2VsZi5fdG9nZ2xlQXJyYXlbaV07IGkrKyl7XG5cdFx0XHRcdFx0c2VsZi5fdG9nZ2xlQXJyYXlbaV0gPSAnLicrZmlsdGVyO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHNlbGYuX2V4ZWNBY3Rpb24oJ19idWlsZFRvZ2dsZUFycmF5JywgMSwgYXJndW1lbnRzKTtcblx0XHR9LFxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIFVwZGF0ZSBDb250cm9sc1xuXHRcdCAqIEBzaW5jZSAyLjAuMFxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBjb21tYW5kXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBtdWx0aVxuXHRcdCAqL1xuXHRcdFxuXHRcdF91cGRhdGVDb250cm9sczogZnVuY3Rpb24oY29tbWFuZCwgbXVsdGkpe1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzLFxuXHRcdFx0XHRvdXRwdXQgPSB7XG5cdFx0XHRcdFx0ZmlsdGVyOiBjb21tYW5kLmZpbHRlcixcblx0XHRcdFx0XHRzb3J0OiBjb21tYW5kLnNvcnRcblx0XHRcdFx0fSxcblx0XHRcdFx0dXBkYXRlID0gZnVuY3Rpb24oJGVsLCBmaWx0ZXIpe1xuXHRcdFx0XHRcdChtdWx0aSAmJiB0eXBlID09ICdmaWx0ZXInICYmICEob3V0cHV0LmZpbHRlciA9PT0gJ25vbmUnIHx8IG91dHB1dC5maWx0ZXIgPT09ICcnKSkgP1xuXHRcdFx0XHRcdFx0JGVsLmZpbHRlcihmaWx0ZXIpLmFkZENsYXNzKHNlbGYuY29udHJvbHMuYWN0aXZlQ2xhc3MpIDpcblx0XHRcdFx0XHRcdCRlbC5yZW1vdmVDbGFzcyhzZWxmLmNvbnRyb2xzLmFjdGl2ZUNsYXNzKS5maWx0ZXIoZmlsdGVyKS5hZGRDbGFzcyhzZWxmLmNvbnRyb2xzLmFjdGl2ZUNsYXNzKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0dHlwZSA9ICdmaWx0ZXInLFxuXHRcdFx0XHQkZWwgPSBudWxsO1xuXHRcdFx0XHRcblx0XHRcdHNlbGYuX2V4ZWNBY3Rpb24oJ191cGRhdGVDb250cm9scycsIDAsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdFxuXHRcdFx0KGNvbW1hbmQuZmlsdGVyID09PSB1bmRmKSAmJiAob3V0cHV0LmZpbHRlciA9IHNlbGYuX2FjdGl2ZUZpbHRlcik7XG5cdFx0XHQoY29tbWFuZC5zb3J0ID09PSB1bmRmKSAmJiAob3V0cHV0LnNvcnQgPSBzZWxmLl9hY3RpdmVTb3J0KTtcblx0XHRcdChvdXRwdXQuZmlsdGVyID09PSBzZWxmLnNlbGVjdG9ycy50YXJnZXQpICYmIChvdXRwdXQuZmlsdGVyID0gJ2FsbCcpO1xuXHRcdFx0XG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgMjsgaSsrKXtcblx0XHRcdFx0JGVsID0gc2VsZi5jb250cm9scy5saXZlID8gJChzZWxmLnNlbGVjdG9yc1t0eXBlXSkgOiBzZWxmWydfJCcrdHlwZSsnQnV0dG9ucyddO1xuXHRcdFx0XHQkZWwgJiYgdXBkYXRlKCRlbCwgJ1tkYXRhLScrdHlwZSsnPVwiJytvdXRwdXRbdHlwZV0rJ1wiXScpO1xuXHRcdFx0XHR0eXBlID0gJ3NvcnQnO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRzZWxmLl9leGVjQWN0aW9uKCdfdXBkYXRlQ29udHJvbHMnLCAxLCBhcmd1bWVudHMpO1xuXHRcdH0sXG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogRmlsdGVyIChwcml2YXRlKVxuXHRcdCAqIEBzaW5jZSAyLjAuMFxuXHRcdCAqL1xuXHRcdFxuXHRcdF9maWx0ZXI6IGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHRcblx0XHRcdHNlbGYuX2V4ZWNBY3Rpb24oJ19maWx0ZXInLCAwKTtcblx0XHRcdFxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNlbGYuXyR0YXJnZXRzLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0dmFyICR0YXJnZXQgPSAkKHNlbGYuXyR0YXJnZXRzW2ldKTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKCR0YXJnZXQuaXMoc2VsZi5fYWN0aXZlRmlsdGVyKSl7XG5cdFx0XHRcdFx0c2VsZi5fJHNob3cgPSBzZWxmLl8kc2hvdy5hZGQoJHRhcmdldCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c2VsZi5fJGhpZGUgPSBzZWxmLl8kaGlkZS5hZGQoJHRhcmdldCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c2VsZi5fZXhlY0FjdGlvbignX2ZpbHRlcicsIDEpO1xuXHRcdH0sXG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogU29ydCAocHJpdmF0ZSlcblx0XHQgKiBAc2luY2UgMi4wLjBcblx0XHQgKi9cblx0XHRcblx0XHRfc29ydDogZnVuY3Rpb24oKXtcblx0XHRcdHZhciBzZWxmID0gdGhpcyxcblx0XHRcdFx0YXJyYXlTaHVmZmxlID0gZnVuY3Rpb24ob2xkQXJyYXkpe1xuXHRcdFx0XHRcdHZhciBuZXdBcnJheSA9IG9sZEFycmF5LnNsaWNlKCksXG5cdFx0XHRcdFx0XHRsZW4gPSBuZXdBcnJheS5sZW5ndGgsXG5cdFx0XHRcdFx0XHRpID0gbGVuO1xuXG5cdFx0XHRcdFx0d2hpbGUoaS0tKXtcblx0XHRcdFx0XHRcdHZhciBwID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSpsZW4pO1xuXHRcdFx0XHRcdFx0dmFyIHQgPSBuZXdBcnJheVtpXTtcblx0XHRcdFx0XHRcdG5ld0FycmF5W2ldID0gbmV3QXJyYXlbcF07XG5cdFx0XHRcdFx0XHRuZXdBcnJheVtwXSA9IHQ7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRyZXR1cm4gbmV3QXJyYXk7IFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRcblx0XHRcdHNlbGYuX2V4ZWNBY3Rpb24oJ19zb3J0JywgMCk7XG5cdFx0XHRcblx0XHRcdHNlbGYuX3N0YXJ0T3JkZXIgPSBbXTtcblx0XHRcdFxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNlbGYuXyR0YXJnZXRzLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0dmFyIHRhcmdldCA9IHNlbGYuXyR0YXJnZXRzW2ldO1xuXHRcdFx0XHRcblx0XHRcdFx0c2VsZi5fc3RhcnRPcmRlci5wdXNoKHRhcmdldCk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHN3aXRjaChzZWxmLl9uZXdTb3J0WzBdLnNvcnRCeSl7XG5cdFx0XHRcdGNhc2UgJ2RlZmF1bHQnOlxuXHRcdFx0XHRcdHNlbGYuX25ld09yZGVyID0gc2VsZi5fb3JpZ09yZGVyO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdyYW5kb20nOlxuXHRcdFx0XHRcdHNlbGYuX25ld09yZGVyID0gYXJyYXlTaHVmZmxlKHNlbGYuX3N0YXJ0T3JkZXIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdjdXN0b20nOlxuXHRcdFx0XHRcdHNlbGYuX25ld09yZGVyID0gc2VsZi5fbmV3U29ydFswXS5vcmRlcjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRzZWxmLl9uZXdPcmRlciA9IHNlbGYuX3N0YXJ0T3JkZXIuY29uY2F0KCkuc29ydChmdW5jdGlvbihhLCBiKXtcblx0XHRcdFx0XHRcdHJldHVybiBzZWxmLl9jb21wYXJlKGEsIGIpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRzZWxmLl9leGVjQWN0aW9uKCdfc29ydCcsIDEpO1xuXHRcdH0sXG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogQ29tcGFyZSBBbGdvcml0aG1cblx0XHQgKiBAc2luY2UgMi4wLjBcblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGFcblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGJcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gZGVwdGggKHJlY3Vyc2lvbilcblx0XHQgKiBAcmV0dXJuIHtudW1iZXJ9XG5cdFx0ICovXG5cdFx0XG5cdFx0X2NvbXBhcmU6IGZ1bmN0aW9uKGEsIGIsIGRlcHRoKXtcblx0XHRcdGRlcHRoID0gZGVwdGggPyBkZXB0aCA6IDA7XG5cdFx0XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0XHRcdG9yZGVyID0gc2VsZi5fbmV3U29ydFtkZXB0aF0ub3JkZXIsXG5cdFx0XHRcdGdldERhdGEgPSBmdW5jdGlvbihlbCl7XG5cdFx0XHRcdFx0cmV0dXJuIGVsLmRhdGFzZXRbc2VsZi5fbmV3U29ydFtkZXB0aF0uc29ydEJ5XSB8fCAwO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRhdHRyQSA9IGlzTmFOKGdldERhdGEoYSkgKiAxKSA/IGdldERhdGEoYSkudG9Mb3dlckNhc2UoKSA6IGdldERhdGEoYSkgKiAxLFxuXHRcdFx0XHRhdHRyQiA9IGlzTmFOKGdldERhdGEoYikgKiAxKSA/IGdldERhdGEoYikudG9Mb3dlckNhc2UoKSA6IGdldERhdGEoYikgKiAxO1xuXHRcdFx0XHRcblx0XHRcdGlmKGF0dHJBIDwgYXR0ckIpXG5cdFx0XHRcdHJldHVybiBvcmRlciA9PSAnYXNjJyA/IC0xIDogMTtcblx0XHRcdGlmKGF0dHJBID4gYXR0ckIpXG5cdFx0XHRcdHJldHVybiBvcmRlciA9PSAnYXNjJyA/IDEgOiAtMTtcblx0XHRcdGlmKGF0dHJBID09IGF0dHJCICYmIHNlbGYuX25ld1NvcnQubGVuZ3RoID4gZGVwdGgrMSlcblx0XHRcdFx0cmV0dXJuIHNlbGYuX2NvbXBhcmUoYSwgYiwgZGVwdGgrMSk7XG5cblx0XHRcdHJldHVybiAwO1xuXHRcdH0sXG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogUHJpbnQgU29ydFxuXHRcdCAqIEBzaW5jZSAyLjAuMFxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVzZXRcblx0XHQgKi9cblx0XHRcblx0XHRfcHJpbnRTb3J0OiBmdW5jdGlvbihyZXNldCl7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0XHRcdG9yZGVyID0gcmVzZXQgPyBzZWxmLl9zdGFydE9yZGVyIDogc2VsZi5fbmV3T3JkZXIsXG5cdFx0XHRcdHRhcmdldHMgPSBzZWxmLl8kcGFyZW50WzBdLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZi5zZWxlY3RvcnMudGFyZ2V0KSxcblx0XHRcdFx0bmV4dFNpYmxpbmcgPSB0YXJnZXRzW3RhcmdldHMubGVuZ3RoIC0xXS5uZXh0RWxlbWVudFNpYmxpbmcsXG5cdFx0XHRcdGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0XHRcdFxuXHRcdFx0c2VsZi5fZXhlY0FjdGlvbignX3ByaW50U29ydCcsIDAsIGFyZ3VtZW50cyk7XG5cdFx0XHRcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0YXJnZXRzLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0dmFyIHRhcmdldCA9IHRhcmdldHNbaV0sXG5cdFx0XHRcdFx0d2hpdGVTcGFjZSA9IHRhcmdldC5uZXh0U2libGluZztcblxuXHRcdFx0XHRpZih0YXJnZXQuc3R5bGUucG9zaXRpb24gPT09ICdhYnNvbHV0ZScpIGNvbnRpbnVlO1xuXHRcdFx0XG5cdFx0XHRcdGlmKHdoaXRlU3BhY2UgJiYgd2hpdGVTcGFjZS5ub2RlTmFtZSA9PSAnI3RleHQnKXtcblx0XHRcdFx0XHRzZWxmLl8kcGFyZW50WzBdLnJlbW92ZUNoaWxkKHdoaXRlU3BhY2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRzZWxmLl8kcGFyZW50WzBdLnJlbW92ZUNoaWxkKHRhcmdldCk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBvcmRlci5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdHZhciBlbCA9IG9yZGVyW2ldO1xuXG5cdFx0XHRcdGlmKHNlbGYuX25ld1NvcnRbMF0uc29ydEJ5ID09ICdkZWZhdWx0JyAmJiBzZWxmLl9uZXdTb3J0WzBdLm9yZGVyID09ICdkZXNjJyAmJiAhcmVzZXQpe1xuXHRcdFx0XHRcdHZhciBmaXJzdENoaWxkID0gZnJhZy5maXJzdENoaWxkO1xuXHRcdFx0XHRcdGZyYWcuaW5zZXJ0QmVmb3JlKGVsLCBmaXJzdENoaWxkKTtcblx0XHRcdFx0XHRmcmFnLmluc2VydEJlZm9yZShkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnICcpLCBlbCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZnJhZy5hcHBlbmRDaGlsZChlbCk7XG5cdFx0XHRcdFx0ZnJhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnICcpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRuZXh0U2libGluZyA/IFxuXHRcdFx0XHRzZWxmLl8kcGFyZW50WzBdLmluc2VydEJlZm9yZShmcmFnLCBuZXh0U2libGluZykgOlxuXHRcdFx0XHRzZWxmLl8kcGFyZW50WzBdLmFwcGVuZENoaWxkKGZyYWcpO1xuXHRcdFx0XHRcblx0XHRcdHNlbGYuX2V4ZWNBY3Rpb24oJ19wcmludFNvcnQnLCAxLCBhcmd1bWVudHMpO1xuXHRcdH0sXG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogUGFyc2UgU29ydFxuXHRcdCAqIEBzaW5jZSAyLjAuMFxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzb3J0U3RyaW5nXG5cdFx0ICogQHJldHVybiB7YXJyYXl9IG5ld1NvcnRcblx0XHQgKi9cblx0XHRcblx0XHRfcGFyc2VTb3J0OiBmdW5jdGlvbihzb3J0U3RyaW5nKXtcblx0XHRcdHZhciBzZWxmID0gdGhpcyxcblx0XHRcdFx0cnVsZXMgPSB0eXBlb2Ygc29ydFN0cmluZyA9PT0gJ3N0cmluZycgPyBzb3J0U3RyaW5nLnNwbGl0KCcgJykgOiBbc29ydFN0cmluZ10sXG5cdFx0XHRcdG5ld1NvcnQgPSBbXTtcblx0XHRcdFx0XG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHR2YXIgcnVsZSA9IHR5cGVvZiBzb3J0U3RyaW5nID09PSAnc3RyaW5nJyA/IHJ1bGVzW2ldLnNwbGl0KCc6JykgOiBbJ2N1c3RvbScsIHJ1bGVzW2ldXSxcblx0XHRcdFx0XHRydWxlT2JqID0ge1xuXHRcdFx0XHRcdFx0c29ydEJ5OiBzZWxmLl9oZWxwZXJzLl9jYW1lbENhc2UocnVsZVswXSksXG5cdFx0XHRcdFx0XHRvcmRlcjogcnVsZVsxXSB8fCAnYXNjJ1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XG5cdFx0XHRcdG5ld1NvcnQucHVzaChydWxlT2JqKTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKHJ1bGVPYmouc29ydEJ5ID09ICdkZWZhdWx0JyB8fCBydWxlT2JqLnNvcnRCeSA9PSAncmFuZG9tJykgYnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHJldHVybiBzZWxmLl9leGVjRmlsdGVyKCdfcGFyc2VTb3J0JywgbmV3U29ydCwgYXJndW1lbnRzKTtcblx0XHR9LFxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIFBhcnNlIEVmZmVjdHNcblx0XHQgKiBAc2luY2UgMi4wLjBcblx0XHQgKiBAcmV0dXJuIHtvYmplY3R9IGVmZmVjdHNcblx0XHQgKi9cblx0XHRcblx0XHRfcGFyc2VFZmZlY3RzOiBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzLFxuXHRcdFx0XHRlZmZlY3RzID0ge1xuXHRcdFx0XHRcdG9wYWNpdHk6ICcnLFxuXHRcdFx0XHRcdHRyYW5zZm9ybUluOiAnJyxcblx0XHRcdFx0XHR0cmFuc2Zvcm1PdXQ6ICcnLFxuXHRcdFx0XHRcdGZpbHRlcjogJydcblx0XHRcdFx0fSxcblx0XHRcdFx0cGFyc2UgPSBmdW5jdGlvbihlZmZlY3QsIGV4dHJhY3QsIHJldmVyc2Upe1xuXHRcdFx0XHRcdGlmKHNlbGYuYW5pbWF0aW9uLmVmZmVjdHMuaW5kZXhPZihlZmZlY3QpID4gLTEpe1xuXHRcdFx0XHRcdFx0aWYoZXh0cmFjdCl7XG5cdFx0XHRcdFx0XHRcdHZhciBwcm9wSW5kZXggPSBzZWxmLmFuaW1hdGlvbi5lZmZlY3RzLmluZGV4T2YoZWZmZWN0KycoJyk7XG5cdFx0XHRcdFx0XHRcdGlmKHByb3BJbmRleCA+IC0xKXtcblx0XHRcdFx0XHRcdFx0XHR2YXIgc3RyID0gc2VsZi5hbmltYXRpb24uZWZmZWN0cy5zdWJzdHJpbmcocHJvcEluZGV4KSxcblx0XHRcdFx0XHRcdFx0XHRcdG1hdGNoID0gL1xcKChbXildKylcXCkvLmV4ZWMoc3RyKSxcblx0XHRcdFx0XHRcdFx0XHRcdHZhbCA9IG1hdGNoWzFdO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4ge3ZhbDogdmFsfTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG5lZ2F0ZSA9IGZ1bmN0aW9uKHZhbHVlLCBpbnZlcnQpe1xuXHRcdFx0XHRcdGlmKGludmVydCl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWUuY2hhckF0KDApID09PSAnLScgPyB2YWx1ZS5zdWJzdHIoMSwgdmFsdWUubGVuZ3RoKSA6ICctJyt2YWx1ZTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0YnVpbGRUcmFuc2Zvcm0gPSBmdW5jdGlvbihrZXksIGludmVydCl7XG5cdFx0XHRcdFx0dmFyIHRyYW5zZm9ybXMgPSBbXG5cdFx0XHRcdFx0XHRbJ3NjYWxlJywgJy4wMSddLFxuXHRcdFx0XHRcdFx0Wyd0cmFuc2xhdGVYJywgJzIwcHgnXSxcblx0XHRcdFx0XHRcdFsndHJhbnNsYXRlWScsICcyMHB4J10sXG5cdFx0XHRcdFx0XHRbJ3RyYW5zbGF0ZVonLCAnMjBweCddLFxuXHRcdFx0XHRcdFx0Wydyb3RhdGVYJywgJzkwZGVnJ10sXG5cdFx0XHRcdFx0XHRbJ3JvdGF0ZVknLCAnOTBkZWcnXSxcblx0XHRcdFx0XHRcdFsncm90YXRlWicsICcxODBkZWcnXSxcblx0XHRcdFx0XHRdO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0cmFuc2Zvcm1zLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0XHRcdHZhciBwcm9wID0gdHJhbnNmb3Jtc1tpXVswXSxcblx0XHRcdFx0XHRcdFx0ZGVmID0gdHJhbnNmb3Jtc1tpXVsxXSxcblx0XHRcdFx0XHRcdFx0aW52ZXJ0ZWQgPSBpbnZlcnQgJiYgcHJvcCAhPT0gJ3NjYWxlJztcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRlZmZlY3RzW2tleV0gKz0gcGFyc2UocHJvcCkgPyBwcm9wKycoJytuZWdhdGUocGFyc2UocHJvcCwgdHJ1ZSkudmFsIHx8IGRlZiwgaW52ZXJ0ZWQpKycpICcgOiAnJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcblx0XHRcdGVmZmVjdHMub3BhY2l0eSA9IHBhcnNlKCdmYWRlJykgPyBwYXJzZSgnZmFkZScsdHJ1ZSkudmFsIHx8ICcwJyA6ICcxJztcblx0XHRcdFxuXHRcdFx0YnVpbGRUcmFuc2Zvcm0oJ3RyYW5zZm9ybUluJyk7XG5cdFx0XHRcblx0XHRcdHNlbGYuYW5pbWF0aW9uLnJldmVyc2VPdXQgPyBidWlsZFRyYW5zZm9ybSgndHJhbnNmb3JtT3V0JywgdHJ1ZSkgOiAoZWZmZWN0cy50cmFuc2Zvcm1PdXQgPSBlZmZlY3RzLnRyYW5zZm9ybUluKTtcblxuXHRcdFx0ZWZmZWN0cy50cmFuc2l0aW9uID0ge307XG5cdFx0XHRcblx0XHRcdGVmZmVjdHMudHJhbnNpdGlvbiA9IHNlbGYuX2dldFByZWZpeGVkQ1NTKCd0cmFuc2l0aW9uJywnYWxsICcrc2VsZi5hbmltYXRpb24uZHVyYXRpb24rJ21zICcrc2VsZi5hbmltYXRpb24uZWFzaW5nKycsIG9wYWNpdHkgJytzZWxmLmFuaW1hdGlvbi5kdXJhdGlvbisnbXMgbGluZWFyJyk7XG5cdFx0XG5cdFx0XHRzZWxmLmFuaW1hdGlvbi5zdGFnZ2VyID0gcGFyc2UoJ3N0YWdnZXInKSA/IHRydWUgOiBmYWxzZTtcblx0XHRcdHNlbGYuYW5pbWF0aW9uLnN0YWdnZXJEdXJhdGlvbiA9IHBhcnNlSW50KHBhcnNlKCdzdGFnZ2VyJykgPyAocGFyc2UoJ3N0YWdnZXInLHRydWUpLnZhbCA/IHBhcnNlKCdzdGFnZ2VyJyx0cnVlKS52YWwgOiAxMDApIDogMTAwKTtcblxuXHRcdFx0cmV0dXJuIHNlbGYuX2V4ZWNGaWx0ZXIoJ19wYXJzZUVmZmVjdHMnLCBlZmZlY3RzKTtcblx0XHR9LFxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIEJ1aWxkIFN0YXRlXG5cdFx0ICogQHNpbmNlIDIuMC4wXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBmdXR1cmVcblx0XHQgKiBAcmV0dXJuIHtvYmplY3R9IGZ1dHVyZVN0YXRlXG5cdFx0ICovXG5cdFx0XG5cdFx0X2J1aWxkU3RhdGU6IGZ1bmN0aW9uKGZ1dHVyZSl7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0XHRcdHN0YXRlID0ge307XG5cdFx0XHRcblx0XHRcdHNlbGYuX2V4ZWNBY3Rpb24oJ19idWlsZFN0YXRlJywgMCk7XG5cdFx0XHRcblx0XHRcdHN0YXRlID0ge1xuXHRcdFx0XHRhY3RpdmVGaWx0ZXI6IHNlbGYuX2FjdGl2ZUZpbHRlciA9PT0gJycgPyAnbm9uZScgOiBzZWxmLl9hY3RpdmVGaWx0ZXIsXG5cdFx0XHRcdGFjdGl2ZVNvcnQ6IGZ1dHVyZSAmJiBzZWxmLl9uZXdTb3J0U3RyaW5nID8gc2VsZi5fbmV3U29ydFN0cmluZyA6IHNlbGYuX2FjdGl2ZVNvcnQsXG5cdFx0XHRcdGZhaWw6ICFzZWxmLl8kc2hvdy5sZW5ndGggJiYgc2VsZi5fYWN0aXZlRmlsdGVyICE9PSAnJyxcblx0XHRcdFx0JHRhcmdldHM6IHNlbGYuXyR0YXJnZXRzLFxuXHRcdFx0XHQkc2hvdzogc2VsZi5fJHNob3csXG5cdFx0XHRcdCRoaWRlOiBzZWxmLl8kaGlkZSxcblx0XHRcdFx0dG90YWxUYXJnZXRzOiBzZWxmLl8kdGFyZ2V0cy5sZW5ndGgsXG5cdFx0XHRcdHRvdGFsU2hvdzogc2VsZi5fJHNob3cubGVuZ3RoLFxuXHRcdFx0XHR0b3RhbEhpZGU6IHNlbGYuXyRoaWRlLmxlbmd0aCxcblx0XHRcdFx0ZGlzcGxheTogZnV0dXJlICYmIHNlbGYuX25ld0Rpc3BsYXkgPyBzZWxmLl9uZXdEaXNwbGF5IDogc2VsZi5sYXlvdXQuZGlzcGxheVxuXHRcdFx0fTtcblx0XHRcdFxuXHRcdFx0aWYoZnV0dXJlKXtcblx0XHRcdFx0cmV0dXJuIHNlbGYuX2V4ZWNGaWx0ZXIoJ19idWlsZFN0YXRlJywgc3RhdGUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2VsZi5fc3RhdGUgPSBzdGF0ZTtcblx0XHRcdFx0XG5cdFx0XHRcdHNlbGYuX2V4ZWNBY3Rpb24oJ19idWlsZFN0YXRlJywgMSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRcblx0XHQvKipcblx0XHQgKiBHbyBNaXhcblx0XHQgKiBAc2luY2UgMi4wLjBcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IGFuaW1hdGVcblx0XHQgKi9cblx0XHRcblx0XHRfZ29NaXg6IGZ1bmN0aW9uKGFuaW1hdGUpe1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzLFxuXHRcdFx0XHRwaGFzZTEgPSBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdGlmKHNlbGYuX2Nocm9tZSAmJiAoc2VsZi5fY2hyb21lID09PSAzMSkpe1xuXHRcdFx0XHRcdFx0Y2hyb21lRml4KHNlbGYuXyRwYXJlbnRbMF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRzZWxmLl9zZXRJbnRlcigpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHBoYXNlMigpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRwaGFzZTIgPSBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdHZhciBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQsXG5cdFx0XHRcdFx0XHRzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0LFxuXHRcdFx0XHRcdFx0ZG9jSGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodDtcblxuXHRcdFx0XHRcdHNlbGYuX2dldEludGVyTWl4RGF0YSgpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHNlbGYuX3NldEZpbmFsKCk7XG5cblx0XHRcdFx0XHRzZWxmLl9nZXRGaW5hbE1peERhdGEoKTtcblxuXHRcdFx0XHRcdCh3aW5kb3cucGFnZVlPZmZzZXQgIT09IHNjcm9sbFRvcCkgJiYgd2luZG93LnNjcm9sbFRvKHNjcm9sbExlZnQsIHNjcm9sbFRvcCk7XG5cblx0XHRcdFx0XHRzZWxmLl9wcmVwVGFyZ2V0cygpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpe1xuXHRcdFx0XHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHBoYXNlMyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdFx0cGhhc2UzKCk7XG5cdFx0XHRcdFx0XHR9LDIwKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHBoYXNlMyA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0c2VsZi5fYW5pbWF0ZVRhcmdldHMoKTtcblxuXHRcdFx0XHRcdGlmKHNlbGYuX3RhcmdldHNCb3VuZCA9PT0gMCl7XG5cdFx0XHRcdFx0XHRzZWxmLl9jbGVhblVwKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRjaHJvbWVGaXggPSBmdW5jdGlvbihncmlkKXtcblx0XHRcdFx0XHR2YXIgcGFyZW50ID0gZ3JpZC5wYXJlbnRFbGVtZW50LFxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRcdFx0XHRcdGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cblx0XHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKHBsYWNlaG9sZGVyLCBncmlkKTtcblx0XHRcdFx0XHRmcmFnLmFwcGVuZENoaWxkKGdyaWQpO1xuXHRcdFx0XHRcdHBhcmVudC5yZXBsYWNlQ2hpbGQoZ3JpZCwgcGxhY2Vob2xkZXIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRmdXR1cmVTdGF0ZSA9IHNlbGYuX2J1aWxkU3RhdGUodHJ1ZSk7XG5cdFx0XHRcdFxuXHRcdFx0c2VsZi5fZXhlY0FjdGlvbignX2dvTWl4JywgMCwgYXJndW1lbnRzKTtcblx0XHRcdFx0XG5cdFx0XHQhc2VsZi5hbmltYXRpb24uZHVyYXRpb24gJiYgKGFuaW1hdGUgPSBmYWxzZSk7XG5cblx0XHRcdHNlbGYuX21peGluZyA9IHRydWU7XG5cdFx0XHRcblx0XHRcdHNlbGYuXyRjb250YWluZXIucmVtb3ZlQ2xhc3Moc2VsZi5sYXlvdXQuY29udGFpbmVyQ2xhc3NGYWlsKTtcblx0XHRcdFxuXHRcdFx0aWYodHlwZW9mIHNlbGYuY2FsbGJhY2tzLm9uTWl4U3RhcnQgPT09ICdmdW5jdGlvbicpe1xuXHRcdFx0XHRzZWxmLmNhbGxiYWNrcy5vbk1peFN0YXJ0LmNhbGwoc2VsZi5fZG9tTm9kZSwgc2VsZi5fc3RhdGUsIGZ1dHVyZVN0YXRlLCBzZWxmKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c2VsZi5fJGNvbnRhaW5lci50cmlnZ2VyKCdtaXhTdGFydCcsIFtzZWxmLl9zdGF0ZSwgZnV0dXJlU3RhdGUsIHNlbGZdKTtcblx0XHRcdFxuXHRcdFx0c2VsZi5fZ2V0T3JpZ01peERhdGEoKTtcblx0XHRcdFxuXHRcdFx0aWYoYW5pbWF0ZSAmJiAhc2VsZi5fc3Vja01vZGUpe1xuXHRcdFx0XG5cdFx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgP1xuXHRcdFx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShwaGFzZTEpIDpcblx0XHRcdFx0XHRwaGFzZTEoKTtcblx0XHRcdFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2VsZi5fY2xlYW5VcCgpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRzZWxmLl9leGVjQWN0aW9uKCdfZ29NaXgnLCAxLCBhcmd1bWVudHMpO1xuXHRcdH0sXG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogR2V0IFRhcmdldCBEYXRhXG5cdFx0ICogQHNpbmNlIDIuMC4wXG5cdFx0ICovXG5cdFx0XG5cdFx0X2dldFRhcmdldERhdGE6IGZ1bmN0aW9uKGVsLCBzdGFnZSl7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0XHRcdGVsU3R5bGU7XG5cdFx0XHRcblx0XHRcdGVsLmRhdGFzZXRbc3RhZ2UrJ1Bvc1gnXSA9IGVsLm9mZnNldExlZnQ7XG5cdFx0XHRlbC5kYXRhc2V0W3N0YWdlKydQb3NZJ10gPSBlbC5vZmZzZXRUb3A7XG5cblx0XHRcdGlmKHNlbGYuYW5pbWF0aW9uLmFuaW1hdGVSZXNpemVUYXJnZXRzKXtcblx0XHRcdFx0ZWxTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcblx0XHRcdFxuXHRcdFx0XHRlbC5kYXRhc2V0W3N0YWdlKydNYXJnaW5Cb3R0b20nXSA9IHBhcnNlSW50KGVsU3R5bGUubWFyZ2luQm90dG9tKTtcblx0XHRcdFx0ZWwuZGF0YXNldFtzdGFnZSsnTWFyZ2luUmlnaHQnXSA9IHBhcnNlSW50KGVsU3R5bGUubWFyZ2luUmlnaHQpO1xuXHRcdFx0XHRlbC5kYXRhc2V0W3N0YWdlKydXaWR0aCddID0gZWwub2Zmc2V0V2lkdGg7XG5cdFx0XHRcdGVsLmRhdGFzZXRbc3RhZ2UrJ0hlaWdodCddID0gZWwub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogR2V0IE9yaWdpbmFsIE1peCBEYXRhXG5cdFx0ICogQHNpbmNlIDIuMC4wXG5cdFx0ICovXG5cdFx0XG5cdFx0X2dldE9yaWdNaXhEYXRhOiBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzLFxuXHRcdFx0XHRwYXJlbnRTdHlsZSA9ICFzZWxmLl9zdWNrTW9kZSA/IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNlbGYuXyRwYXJlbnRbMF0pIDoge2JveFNpemluZzogJyd9LFxuXHRcdFx0XHRwYXJlbnRCUyA9IHBhcmVudFN0eWxlLmJveFNpemluZyB8fCBwYXJlbnRTdHlsZVtzZWxmLl92ZW5kb3IrJ0JveFNpemluZyddO1xuXHRcblx0XHRcdHNlbGYuX2luY1BhZGRpbmcgPSAocGFyZW50QlMgPT09ICdib3JkZXItYm94Jyk7XG5cdFx0XHRcblx0XHRcdHNlbGYuX2V4ZWNBY3Rpb24oJ19nZXRPcmlnTWl4RGF0YScsIDApO1xuXHRcdFx0XG5cdFx0XHQhc2VsZi5fc3Vja01vZGUgJiYgKHNlbGYuZWZmZWN0cyA9IHNlbGYuX3BhcnNlRWZmZWN0cygpKTtcblx0XHRcblx0XHRcdHNlbGYuXyR0b0hpZGUgPSBzZWxmLl8kaGlkZS5maWx0ZXIoJzp2aXNpYmxlJyk7XG5cdFx0XHRzZWxmLl8kdG9TaG93ID0gc2VsZi5fJHNob3cuZmlsdGVyKCc6aGlkZGVuJyk7XG5cdFx0XHRzZWxmLl8kcHJlID0gc2VsZi5fJHRhcmdldHMuZmlsdGVyKCc6dmlzaWJsZScpO1xuXG5cdFx0XHRzZWxmLl9zdGFydEhlaWdodCA9IHNlbGYuX2luY1BhZGRpbmcgPyBcblx0XHRcdFx0c2VsZi5fJHBhcmVudC5vdXRlckhlaWdodCgpIDogXG5cdFx0XHRcdHNlbGYuXyRwYXJlbnQuaGVpZ2h0KCk7XG5cdFx0XHRcdFxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNlbGYuXyRwcmUubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHR2YXIgZWwgPSBzZWxmLl8kcHJlW2ldO1xuXHRcdFx0XHRcblx0XHRcdFx0c2VsZi5fZ2V0VGFyZ2V0RGF0YShlbCwgJ29yaWcnKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c2VsZi5fZXhlY0FjdGlvbignX2dldE9yaWdNaXhEYXRhJywgMSk7XG5cdFx0fSxcblx0XHRcblx0XHQvKipcblx0XHQgKiBTZXQgSW50ZXJtZWRpYXRlIFBvc2l0aW9uc1xuXHRcdCAqIEBzaW5jZSAyLjAuMFxuXHRcdCAqL1xuXHRcdFxuXHRcdF9zZXRJbnRlcjogZnVuY3Rpb24oKXtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdFxuXHRcdFx0c2VsZi5fZXhlY0FjdGlvbignX3NldEludGVyJywgMCk7XG5cdFx0XHRcblx0XHRcdGlmKHNlbGYuX2NoYW5naW5nTGF5b3V0ICYmIHNlbGYuYW5pbWF0aW9uLmFuaW1hdGVDaGFuZ2VMYXlvdXQpe1xuXHRcdFx0XHRzZWxmLl8kdG9TaG93LmNzcygnZGlzcGxheScsc2VsZi5fbmV3RGlzcGxheSk7XG5cblx0XHRcdFx0aWYoc2VsZi5fY2hhbmdpbmdDbGFzcyl7XG5cdFx0XHRcdFx0c2VsZi5fJGNvbnRhaW5lclxuXHRcdFx0XHRcdFx0LnJlbW92ZUNsYXNzKHNlbGYubGF5b3V0LmNvbnRhaW5lckNsYXNzKVxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKHNlbGYuX25ld0NsYXNzKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2VsZi5fJHRvU2hvdy5jc3MoJ2Rpc3BsYXknLCBzZWxmLmxheW91dC5kaXNwbGF5KTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c2VsZi5fZXhlY0FjdGlvbignX3NldEludGVyJywgMSk7XG5cdFx0fSxcblx0XHRcblx0XHQvKipcblx0XHQgKiBHZXQgSW50ZXJtZWRpYXRlIE1peCBEYXRhXG5cdFx0ICogQHNpbmNlIDIuMC4wXG5cdFx0ICovXG5cdFx0XG5cdFx0X2dldEludGVyTWl4RGF0YTogZnVuY3Rpb24oKXtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdFxuXHRcdFx0c2VsZi5fZXhlY0FjdGlvbignX2dldEludGVyTWl4RGF0YScsIDApO1xuXHRcdFx0XG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2VsZi5fJHRvU2hvdy5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdHZhciBlbCA9IHNlbGYuXyR0b1Nob3dbaV07XG5cdFx0XHRcdFx0XG5cdFx0XHRcdHNlbGYuX2dldFRhcmdldERhdGEoZWwsICdpbnRlcicpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2VsZi5fJHByZS5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdHZhciBlbCA9IHNlbGYuXyRwcmVbaV07XG5cdFx0XHRcdFx0XG5cdFx0XHRcdHNlbGYuX2dldFRhcmdldERhdGEoZWwsICdpbnRlcicpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRzZWxmLl9leGVjQWN0aW9uKCdfZ2V0SW50ZXJNaXhEYXRhJywgMSk7XG5cdFx0fSxcblx0XHRcblx0XHQvKipcblx0XHQgKiBTZXQgRmluYWwgUG9zaXRpb25zXG5cdFx0ICogQHNpbmNlIDIuMC4wXG5cdFx0ICovXG5cdFx0XG5cdFx0X3NldEZpbmFsOiBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0XG5cdFx0XHRzZWxmLl9leGVjQWN0aW9uKCdfc2V0RmluYWwnLCAwKTtcblx0XHRcdFxuXHRcdFx0c2VsZi5fc29ydGluZyAmJiBzZWxmLl9wcmludFNvcnQoKTtcblxuXHRcdFx0c2VsZi5fJHRvSGlkZS5yZW1vdmVTdHlsZSgnZGlzcGxheScpO1xuXHRcdFx0XG5cdFx0XHRpZihzZWxmLl9jaGFuZ2luZ0xheW91dCAmJiBzZWxmLmFuaW1hdGlvbi5hbmltYXRlQ2hhbmdlTGF5b3V0KXtcblx0XHRcdFx0c2VsZi5fJHByZS5jc3MoJ2Rpc3BsYXknLHNlbGYuX25ld0Rpc3BsYXkpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRzZWxmLl9leGVjQWN0aW9uKCdfc2V0RmluYWwnLCAxKTtcblx0XHR9LFxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIEdldCBGaW5hbCBNaXggRGF0YVxuXHRcdCAqIEBzaW5jZSAyLjAuMFxuXHRcdCAqL1xuXHRcdFxuXHRcdF9nZXRGaW5hbE1peERhdGE6IGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHRcblx0XHRcdHNlbGYuX2V4ZWNBY3Rpb24oJ19nZXRGaW5hbE1peERhdGEnLCAwKTtcblx0XG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2VsZi5fJHRvU2hvdy5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdHZhciBlbCA9IHNlbGYuXyR0b1Nob3dbaV07XG5cdFx0XHRcdFx0XG5cdFx0XHRcdHNlbGYuX2dldFRhcmdldERhdGEoZWwsICdmaW5hbCcpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2VsZi5fJHByZS5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdHZhciBlbCA9IHNlbGYuXyRwcmVbaV07XG5cdFx0XHRcdFx0XG5cdFx0XHRcdHNlbGYuX2dldFRhcmdldERhdGEoZWwsICdmaW5hbCcpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRzZWxmLl9uZXdIZWlnaHQgPSBzZWxmLl9pbmNQYWRkaW5nID8gXG5cdFx0XHRcdHNlbGYuXyRwYXJlbnQub3V0ZXJIZWlnaHQoKSA6IFxuXHRcdFx0XHRzZWxmLl8kcGFyZW50LmhlaWdodCgpO1xuXG5cdFx0XHRzZWxmLl9zb3J0aW5nICYmIHNlbGYuX3ByaW50U29ydCh0cnVlKTtcblx0XG5cdFx0XHRzZWxmLl8kdG9TaG93LnJlbW92ZVN0eWxlKCdkaXNwbGF5Jyk7XG5cdFx0XHRcblx0XHRcdHNlbGYuXyRwcmUuY3NzKCdkaXNwbGF5JyxzZWxmLmxheW91dC5kaXNwbGF5KTtcblx0XHRcdFxuXHRcdFx0aWYoc2VsZi5fY2hhbmdpbmdDbGFzcyAmJiBzZWxmLmFuaW1hdGlvbi5hbmltYXRlQ2hhbmdlTGF5b3V0KXtcblx0XHRcdFx0c2VsZi5fJGNvbnRhaW5lclxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcyhzZWxmLl9uZXdDbGFzcylcblx0XHRcdFx0XHQuYWRkQ2xhc3Moc2VsZi5sYXlvdXQuY29udGFpbmVyQ2xhc3MpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRzZWxmLl9leGVjQWN0aW9uKCdfZ2V0RmluYWxNaXhEYXRhJywgMSk7XG5cdFx0fSxcblx0XHRcblx0XHQvKipcblx0XHQgKiBQcmVwYXJlIFRhcmdldHNcblx0XHQgKiBAc2luY2UgMi4wLjBcblx0XHQgKi9cblx0XHRcblx0XHRfcHJlcFRhcmdldHM6IGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0XHRcdHRyYW5zZm9ybUNTUyA9IHtcblx0XHRcdFx0XHRfaW46IHNlbGYuX2dldFByZWZpeGVkQ1NTKCd0cmFuc2Zvcm0nLCBzZWxmLmVmZmVjdHMudHJhbnNmb3JtSW4pLFxuXHRcdFx0XHRcdF9vdXQ6IHNlbGYuX2dldFByZWZpeGVkQ1NTKCd0cmFuc2Zvcm0nLCBzZWxmLmVmZmVjdHMudHJhbnNmb3JtT3V0KVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRzZWxmLl9leGVjQWN0aW9uKCdfcHJlcFRhcmdldHMnLCAwKTtcblx0XHRcdFxuXHRcdFx0aWYoc2VsZi5hbmltYXRpb24uYW5pbWF0ZVJlc2l6ZUNvbnRhaW5lcil7XG5cdFx0XHRcdHNlbGYuXyRwYXJlbnQuY3NzKCdoZWlnaHQnLHNlbGYuX3N0YXJ0SGVpZ2h0KydweCcpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2VsZi5fJHRvU2hvdy5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdHZhciBlbCA9IHNlbGYuXyR0b1Nob3dbaV0sXG5cdFx0XHRcdFx0JGVsID0gJChlbCk7XG5cdFx0XHRcdFxuXHRcdFx0XHRlbC5zdHlsZS5vcGFjaXR5ID0gc2VsZi5lZmZlY3RzLm9wYWNpdHk7XG5cdFx0XHRcdGVsLnN0eWxlLmRpc3BsYXkgPSAoc2VsZi5fY2hhbmdpbmdMYXlvdXQgJiYgc2VsZi5hbmltYXRpb24uYW5pbWF0ZUNoYW5nZUxheW91dCkgP1xuXHRcdFx0XHRcdHNlbGYuX25ld0Rpc3BsYXkgOlxuXHRcdFx0XHRcdHNlbGYubGF5b3V0LmRpc3BsYXk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdCRlbC5jc3ModHJhbnNmb3JtQ1NTLl9pbik7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZihzZWxmLmFuaW1hdGlvbi5hbmltYXRlUmVzaXplVGFyZ2V0cyl7XG5cdFx0XHRcdFx0ZWwuc3R5bGUud2lkdGggPSBlbC5kYXRhc2V0LmZpbmFsV2lkdGgrJ3B4Jztcblx0XHRcdFx0XHRlbC5zdHlsZS5oZWlnaHQgPSBlbC5kYXRhc2V0LmZpbmFsSGVpZ2h0KydweCc7XG5cdFx0XHRcdFx0ZWwuc3R5bGUubWFyZ2luUmlnaHQgPSAtKGVsLmRhdGFzZXQuZmluYWxXaWR0aCAtIGVsLmRhdGFzZXQuaW50ZXJXaWR0aCkgKyAoZWwuZGF0YXNldC5maW5hbE1hcmdpblJpZ2h0ICogMSkrJ3B4Jztcblx0XHRcdFx0XHRlbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAtKGVsLmRhdGFzZXQuZmluYWxIZWlnaHQgLSBlbC5kYXRhc2V0LmludGVySGVpZ2h0KSArIChlbC5kYXRhc2V0LmZpbmFsTWFyZ2luQm90dG9tICogMSkrJ3B4Jztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2VsZi5fJHByZS5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdHZhciBlbCA9IHNlbGYuXyRwcmVbaV0sXG5cdFx0XHRcdFx0JGVsID0gJChlbCksXG5cdFx0XHRcdFx0dHJhbnNsYXRlID0ge1xuXHRcdFx0XHRcdFx0eDogZWwuZGF0YXNldC5vcmlnUG9zWCAtIGVsLmRhdGFzZXQuaW50ZXJQb3NYLFxuXHRcdFx0XHRcdFx0eTogZWwuZGF0YXNldC5vcmlnUG9zWSAtIGVsLmRhdGFzZXQuaW50ZXJQb3NZXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0cmFuc2Zvcm1DU1MgPSBzZWxmLl9nZXRQcmVmaXhlZENTUygndHJhbnNmb3JtJywndHJhbnNsYXRlKCcrdHJhbnNsYXRlLngrJ3B4LCcrdHJhbnNsYXRlLnkrJ3B4KScpO1xuXG5cdFx0XHRcdCRlbC5jc3ModHJhbnNmb3JtQ1NTKTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKHNlbGYuYW5pbWF0aW9uLmFuaW1hdGVSZXNpemVUYXJnZXRzKXtcblx0XHRcdFx0XHRlbC5zdHlsZS53aWR0aCA9IGVsLmRhdGFzZXQub3JpZ1dpZHRoKydweCc7XG5cdFx0XHRcdFx0ZWwuc3R5bGUuaGVpZ2h0ID0gZWwuZGF0YXNldC5vcmlnSGVpZ2h0KydweCc7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYoZWwuZGF0YXNldC5vcmlnV2lkdGggLSBlbC5kYXRhc2V0LmZpbmFsV2lkdGgpe1xuXHRcdFx0XHRcdFx0ZWwuc3R5bGUubWFyZ2luUmlnaHQgPSAtKGVsLmRhdGFzZXQub3JpZ1dpZHRoIC0gZWwuZGF0YXNldC5pbnRlcldpZHRoKSArIChlbC5kYXRhc2V0Lm9yaWdNYXJnaW5SaWdodCAqIDEpKydweCc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmKGVsLmRhdGFzZXQub3JpZ0hlaWdodCAtIGVsLmRhdGFzZXQuZmluYWxIZWlnaHQpe1xuXHRcdFx0XHRcdFx0ZWwuc3R5bGUubWFyZ2luQm90dG9tID0gLShlbC5kYXRhc2V0Lm9yaWdIZWlnaHQgLSBlbC5kYXRhc2V0LmludGVySGVpZ2h0KSArIChlbC5kYXRhc2V0Lm9yaWdNYXJnaW5Cb3R0b20gKiAxKSArJ3B4Jztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c2VsZi5fZXhlY0FjdGlvbignX3ByZXBUYXJnZXRzJywgMSk7XG5cdFx0fSxcblx0XHRcblx0XHQvKipcblx0XHQgKiBBbmltYXRlIFRhcmdldHNcblx0XHQgKiBAc2luY2UgMi4wLjBcblx0XHQgKi9cblx0XHRcblx0XHRfYW5pbWF0ZVRhcmdldHM6IGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHRcdHNlbGYuX2V4ZWNBY3Rpb24oJ19hbmltYXRlVGFyZ2V0cycsIDApO1xuXHRcdFx0XG5cdFx0XHRzZWxmLl90YXJnZXRzRG9uZSA9IDA7XG5cdFx0XHRzZWxmLl90YXJnZXRzQm91bmQgPSAwO1xuXHRcdFx0XG5cdFx0XHRzZWxmLl8kcGFyZW50XG5cdFx0XHRcdC5jc3Moc2VsZi5fZ2V0UHJlZml4ZWRDU1MoJ3BlcnNwZWN0aXZlJywgc2VsZi5hbmltYXRpb24ucGVyc3BlY3RpdmVEaXN0YW5jZSsncHgnKSlcblx0XHRcdFx0LmNzcyhzZWxmLl9nZXRQcmVmaXhlZENTUygncGVyc3BlY3RpdmUtb3JpZ2luJywgc2VsZi5hbmltYXRpb24ucGVyc3BlY3RpdmVPcmlnaW4pKTtcblx0XHRcdFxuXHRcdFx0aWYoc2VsZi5hbmltYXRpb24uYW5pbWF0ZVJlc2l6ZUNvbnRhaW5lcil7XG5cdFx0XHRcdHNlbGYuXyRwYXJlbnRcblx0XHRcdFx0XHQuY3NzKHNlbGYuX2dldFByZWZpeGVkQ1NTKCd0cmFuc2l0aW9uJywnaGVpZ2h0ICcrc2VsZi5hbmltYXRpb24uZHVyYXRpb24rJ21zIGVhc2UnKSlcblx0XHRcdFx0XHQuY3NzKCdoZWlnaHQnLHNlbGYuX25ld0hlaWdodCsncHgnKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNlbGYuXyR0b1Nob3cubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHR2YXIgZWwgPSBzZWxmLl8kdG9TaG93W2ldLFxuXHRcdFx0XHRcdCRlbCA9ICQoZWwpLFxuXHRcdFx0XHRcdHRyYW5zbGF0ZSA9IHtcblx0XHRcdFx0XHRcdHg6IGVsLmRhdGFzZXQuZmluYWxQb3NYIC0gZWwuZGF0YXNldC5pbnRlclBvc1gsXG5cdFx0XHRcdFx0XHR5OiBlbC5kYXRhc2V0LmZpbmFsUG9zWSAtIGVsLmRhdGFzZXQuaW50ZXJQb3NZXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRkZWxheSA9IHNlbGYuX2dldERlbGF5KGkpLFxuXHRcdFx0XHRcdHRvU2hvd0NTUyA9IHt9O1xuXHRcdFx0XHRcblx0XHRcdFx0ZWwuc3R5bGUub3BhY2l0eSA9ICcnO1xuXHRcdFx0XHRcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IDI7IGorKyl7XG5cdFx0XHRcdFx0dmFyIGEgPSBqID09PSAwID8gYSA9IHNlbGYuX3ByZWZpeCA6ICcnO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmKHNlbGYuX2ZmICYmIHNlbGYuX2ZmIDw9IDIwKXtcblx0XHRcdFx0XHRcdHRvU2hvd0NTU1thKyd0cmFuc2l0aW9uLXByb3BlcnR5J10gPSAnYWxsJztcblx0XHRcdFx0XHRcdHRvU2hvd0NTU1thKyd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddID0gc2VsZi5hbmltYXRpb24uZWFzaW5nKydtcyc7XG5cdFx0XHRcdFx0XHR0b1Nob3dDU1NbYSsndHJhbnNpdGlvbi1kdXJhdGlvbiddID0gc2VsZi5hbmltYXRpb24uZHVyYXRpb24rJ21zJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dG9TaG93Q1NTW2ErJ3RyYW5zaXRpb24tZGVsYXknXSA9IGRlbGF5Kydtcyc7XG5cdFx0XHRcdFx0dG9TaG93Q1NTW2ErJ3RyYW5zZm9ybSddID0gJ3RyYW5zbGF0ZSgnK3RyYW5zbGF0ZS54KydweCwnK3RyYW5zbGF0ZS55KydweCknO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRpZihzZWxmLmVmZmVjdHMudHJhbnNmb3JtIHx8IHNlbGYuZWZmZWN0cy5vcGFjaXR5KXtcblx0XHRcdFx0XHRzZWxmLl9iaW5kVGFyZ2V0RG9uZSgkZWwpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHQoc2VsZi5fZmYgJiYgc2VsZi5fZmYgPD0gMjApID8gXG5cdFx0XHRcdFx0JGVsLmNzcyh0b1Nob3dDU1MpIDogXG5cdFx0XHRcdFx0JGVsLmNzcyhzZWxmLmVmZmVjdHMudHJhbnNpdGlvbikuY3NzKHRvU2hvd0NTUyk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzZWxmLl8kcHJlLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0dmFyIGVsID0gc2VsZi5fJHByZVtpXSxcblx0XHRcdFx0XHQkZWwgPSAkKGVsKSxcblx0XHRcdFx0XHR0cmFuc2xhdGUgPSB7XG5cdFx0XHRcdFx0XHR4OiBlbC5kYXRhc2V0LmZpbmFsUG9zWCAtIGVsLmRhdGFzZXQuaW50ZXJQb3NYLFxuXHRcdFx0XHRcdFx0eTogZWwuZGF0YXNldC5maW5hbFBvc1kgLSBlbC5kYXRhc2V0LmludGVyUG9zWVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZGVsYXkgPSBzZWxmLl9nZXREZWxheShpKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0aWYoIShcblx0XHRcdFx0XHRlbC5kYXRhc2V0LmZpbmFsUG9zWCA9PT0gZWwuZGF0YXNldC5vcmlnUG9zWCAmJlxuXHRcdFx0XHRcdGVsLmRhdGFzZXQuZmluYWxQb3NZID09PSBlbC5kYXRhc2V0Lm9yaWdQb3NZXG5cdFx0XHRcdCkpe1xuXHRcdFx0XHRcdHNlbGYuX2JpbmRUYXJnZXREb25lKCRlbCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdCRlbC5jc3Moc2VsZi5fZ2V0UHJlZml4ZWRDU1MoJ3RyYW5zaXRpb24nLCAnYWxsICcrc2VsZi5hbmltYXRpb24uZHVyYXRpb24rJ21zICcrc2VsZi5hbmltYXRpb24uZWFzaW5nKycgJytkZWxheSsnbXMnKSk7XG5cdFx0XHRcdCRlbC5jc3Moc2VsZi5fZ2V0UHJlZml4ZWRDU1MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyt0cmFuc2xhdGUueCsncHgsJyt0cmFuc2xhdGUueSsncHgpJykpO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYoc2VsZi5hbmltYXRpb24uYW5pbWF0ZVJlc2l6ZVRhcmdldHMpe1xuXHRcdFx0XHRcdGlmKGVsLmRhdGFzZXQub3JpZ1dpZHRoIC0gZWwuZGF0YXNldC5maW5hbFdpZHRoICYmIGVsLmRhdGFzZXQuZmluYWxXaWR0aCAqIDEpe1xuXHRcdFx0XHRcdFx0ZWwuc3R5bGUud2lkdGggPSBlbC5kYXRhc2V0LmZpbmFsV2lkdGgrJ3B4Jztcblx0XHRcdFx0XHRcdGVsLnN0eWxlLm1hcmdpblJpZ2h0ID0gLShlbC5kYXRhc2V0LmZpbmFsV2lkdGggLSBlbC5kYXRhc2V0LmludGVyV2lkdGgpKyhlbC5kYXRhc2V0LmZpbmFsTWFyZ2luUmlnaHQgKiAxKSsncHgnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZihlbC5kYXRhc2V0Lm9yaWdIZWlnaHQgLSBlbC5kYXRhc2V0LmZpbmFsSGVpZ2h0ICYmIGVsLmRhdGFzZXQuZmluYWxIZWlnaHQgKiAxKXtcblx0XHRcdFx0XHRcdGVsLnN0eWxlLmhlaWdodCA9IGVsLmRhdGFzZXQuZmluYWxIZWlnaHQrJ3B4Jztcblx0XHRcdFx0XHRcdGVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IC0oZWwuZGF0YXNldC5maW5hbEhlaWdodCAtIGVsLmRhdGFzZXQuaW50ZXJIZWlnaHQpKyhlbC5kYXRhc2V0LmZpbmFsTWFyZ2luQm90dG9tICogMSkgKydweCc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmKHNlbGYuX2NoYW5naW5nQ2xhc3Mpe1xuXHRcdFx0XHRzZWxmLl8kY29udGFpbmVyXG5cdFx0XHRcdFx0LnJlbW92ZUNsYXNzKHNlbGYubGF5b3V0LmNvbnRhaW5lckNsYXNzKVxuXHRcdFx0XHRcdC5hZGRDbGFzcyhzZWxmLl9uZXdDbGFzcyk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzZWxmLl8kdG9IaWRlLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0dmFyIGVsID0gc2VsZi5fJHRvSGlkZVtpXSxcblx0XHRcdFx0XHQkZWwgPSAkKGVsKSxcblx0XHRcdFx0XHRkZWxheSA9IHNlbGYuX2dldERlbGF5KGkpLFxuXHRcdFx0XHRcdHRvSGlkZUNTUyA9IHt9O1xuXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGo8MjsgaisrKXtcblx0XHRcdFx0XHR2YXIgYSA9IGogPT09IDAgPyBhID0gc2VsZi5fcHJlZml4IDogJyc7XG5cblx0XHRcdFx0XHR0b0hpZGVDU1NbYSsndHJhbnNpdGlvbi1kZWxheSddID0gZGVsYXkrJ21zJztcblx0XHRcdFx0XHR0b0hpZGVDU1NbYSsndHJhbnNmb3JtJ10gPSBzZWxmLmVmZmVjdHMudHJhbnNmb3JtT3V0O1xuXHRcdFx0XHRcdHRvSGlkZUNTUy5vcGFjaXR5ID0gc2VsZi5lZmZlY3RzLm9wYWNpdHk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdCRlbC5jc3Moc2VsZi5lZmZlY3RzLnRyYW5zaXRpb24pLmNzcyh0b0hpZGVDU1MpO1xuXHRcdFx0XG5cdFx0XHRcdGlmKHNlbGYuZWZmZWN0cy50cmFuc2Zvcm0gfHwgc2VsZi5lZmZlY3RzLm9wYWNpdHkpe1xuXHRcdFx0XHRcdHNlbGYuX2JpbmRUYXJnZXREb25lKCRlbCk7XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHNlbGYuX2V4ZWNBY3Rpb24oJ19hbmltYXRlVGFyZ2V0cycsIDEpO1xuXG5cdFx0fSxcblx0XHRcblx0XHQvKipcblx0XHQgKiBCaW5kIFRhcmdldHMgVHJhbnNpdGlvbkVuZFxuXHRcdCAqIEBzaW5jZSAyLjAuMFxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSAkZWxcblx0XHQgKi9cblx0XHRcblx0XHRfYmluZFRhcmdldERvbmU6IGZ1bmN0aW9uKCRlbCl7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0XHRcdGVsID0gJGVsWzBdO1xuXHRcdFx0XHRcblx0XHRcdHNlbGYuX2V4ZWNBY3Rpb24oJ19iaW5kVGFyZ2V0RG9uZScsIDAsIGFyZ3VtZW50cyk7XG5cdFx0XHRcblx0XHRcdGlmKCFlbC5kYXRhc2V0LmJvdW5kKXtcblx0XHRcdFx0XG5cdFx0XHRcdGVsLmRhdGFzZXQuYm91bmQgPSB0cnVlO1xuXHRcdFx0XHRzZWxmLl90YXJnZXRzQm91bmQrKztcblx0XHRcdFxuXHRcdFx0XHQkZWwub24oJ3dlYmtpdFRyYW5zaXRpb25FbmQubWl4SXRVcCB0cmFuc2l0aW9uZW5kLm1peEl0VXAnLGZ1bmN0aW9uKGUpe1xuXHRcdFx0XHRcdGlmKFxuXHRcdFx0XHRcdFx0KGUub3JpZ2luYWxFdmVudC5wcm9wZXJ0eU5hbWUuaW5kZXhPZigndHJhbnNmb3JtJykgPiAtMSB8fCBcblx0XHRcdFx0XHRcdGUub3JpZ2luYWxFdmVudC5wcm9wZXJ0eU5hbWUuaW5kZXhPZignb3BhY2l0eScpID4gLTEpICYmXG5cdFx0XHRcdFx0XHQkKGUub3JpZ2luYWxFdmVudC50YXJnZXQpLmlzKHNlbGYuc2VsZWN0b3JzLnRhcmdldClcblx0XHRcdFx0XHQpe1xuXHRcdFx0XHRcdFx0JGVsLm9mZignLm1peEl0VXAnKTtcblx0XHRcdFx0XHRcdGRlbGV0ZSBlbC5kYXRhc2V0LmJvdW5kO1xuXHRcdFx0XHRcdFx0c2VsZi5fdGFyZ2V0RG9uZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHNlbGYuX2V4ZWNBY3Rpb24oJ19iaW5kVGFyZ2V0RG9uZScsIDEsIGFyZ3VtZW50cyk7XG5cdFx0fSxcblx0XHRcblx0XHQvKipcblx0XHQgKiBUYXJnZXQgRG9uZVxuXHRcdCAqIEBzaW5jZSAyLjAuMFxuXHRcdCAqL1xuXHRcdFxuXHRcdF90YXJnZXREb25lOiBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0XG5cdFx0XHRzZWxmLl9leGVjQWN0aW9uKCdfdGFyZ2V0RG9uZScsIDApO1xuXHRcdFx0XG5cdFx0XHRzZWxmLl90YXJnZXRzRG9uZSsrO1xuXHRcdFx0XG5cdFx0XHQoc2VsZi5fdGFyZ2V0c0RvbmUgPT09IHNlbGYuX3RhcmdldHNCb3VuZCkgJiYgc2VsZi5fY2xlYW5VcCgpO1xuXHRcdFx0XG5cdFx0XHRzZWxmLl9leGVjQWN0aW9uKCdfdGFyZ2V0RG9uZScsIDEpO1xuXHRcdH0sXG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogQ2xlYW4gVXBcblx0XHQgKiBAc2luY2UgMi4wLjBcblx0XHQgKi9cblx0XHRcblx0XHRfY2xlYW5VcDogZnVuY3Rpb24oKXtcblx0XHRcdHZhciBzZWxmID0gdGhpcyxcblx0XHRcdFx0dGFyZ2V0U3R5bGVzID0gc2VsZi5hbmltYXRpb24uYW5pbWF0ZVJlc2l6ZVRhcmdldHMgPyAndHJhbnNmb3JtIG9wYWNpdHkgd2lkdGggaGVpZ2h0IG1hcmdpbi1ib3R0b20gbWFyZ2luLXJpZ2h0JyA6ICd0cmFuc2Zvcm0gb3BhY2l0eSc7XG5cdFx0XHRcdHVuQnJha2UgPSBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdHNlbGYuXyR0YXJnZXRzLnJlbW92ZVN0eWxlKCd0cmFuc2l0aW9uJywgc2VsZi5fcHJlZml4KTtcblx0XHRcdFx0fTtcblx0XHRcdFx0XG5cdFx0XHRzZWxmLl9leGVjQWN0aW9uKCdfY2xlYW5VcCcsIDApO1xuXHRcdFx0XG5cdFx0XHQhc2VsZi5fY2hhbmdpbmdMYXlvdXQgP1xuXHRcdFx0XHRzZWxmLl8kc2hvdy5jc3MoJ2Rpc3BsYXknLHNlbGYubGF5b3V0LmRpc3BsYXkpIDpcblx0XHRcdFx0c2VsZi5fJHNob3cuY3NzKCdkaXNwbGF5JyxzZWxmLl9uZXdEaXNwbGF5KTtcblx0XHRcdFxuXHRcdFx0c2VsZi5fJHRhcmdldHMuY3NzKHNlbGYuX2JyYWtlKTtcblx0XHRcdFxuXHRcdFx0c2VsZi5fJHRhcmdldHNcblx0XHRcdFx0LnJlbW92ZVN0eWxlKHRhcmdldFN0eWxlcywgc2VsZi5fcHJlZml4KVxuXHRcdFx0XHQucmVtb3ZlQXR0cignZGF0YS1pbnRlci1wb3MteCBkYXRhLWludGVyLXBvcy15IGRhdGEtZmluYWwtcG9zLXggZGF0YS1maW5hbC1wb3MteSBkYXRhLW9yaWctcG9zLXggZGF0YS1vcmlnLXBvcy15IGRhdGEtb3JpZy1oZWlnaHQgZGF0YS1vcmlnLXdpZHRoIGRhdGEtZmluYWwtaGVpZ2h0IGRhdGEtZmluYWwtd2lkdGggZGF0YS1pbnRlci13aWR0aCBkYXRhLWludGVyLWhlaWdodCBkYXRhLW9yaWctbWFyZ2luLXJpZ2h0IGRhdGEtb3JpZy1tYXJnaW4tYm90dG9tIGRhdGEtaW50ZXItbWFyZ2luLXJpZ2h0IGRhdGEtaW50ZXItbWFyZ2luLWJvdHRvbSBkYXRhLWZpbmFsLW1hcmdpbi1yaWdodCBkYXRhLWZpbmFsLW1hcmdpbi1ib3R0b20nKTtcblx0XHRcdFx0XG5cdFx0XHRzZWxmLl8kaGlkZS5yZW1vdmVTdHlsZSgnZGlzcGxheScpO1xuXHRcdFx0XG5cdFx0XHRzZWxmLl8kcGFyZW50LnJlbW92ZVN0eWxlKCdoZWlnaHQgdHJhbnNpdGlvbiBwZXJzcGVjdGl2ZS1kaXN0YW5jZSBwZXJzcGVjdGl2ZSBwZXJzcGVjdGl2ZS1vcmlnaW4teCBwZXJzcGVjdGl2ZS1vcmlnaW4teSBwZXJzcGVjdGl2ZS1vcmlnaW4gcGVyc3BlY3RpdmVPcmlnaW4nLCBzZWxmLl9wcmVmaXgpO1xuXHRcdFx0XG5cdFx0XHRpZihzZWxmLl9zb3J0aW5nKXtcblx0XHRcdFx0c2VsZi5fcHJpbnRTb3J0KCk7XG5cdFx0XHRcdHNlbGYuX2FjdGl2ZVNvcnQgPSBzZWxmLl9uZXdTb3J0U3RyaW5nO1xuXHRcdFx0XHRzZWxmLl9zb3J0aW5nID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmKHNlbGYuX2NoYW5naW5nTGF5b3V0KXtcblx0XHRcdFx0aWYoc2VsZi5fY2hhbmdpbmdEaXNwbGF5KXtcblx0XHRcdFx0XHRzZWxmLmxheW91dC5kaXNwbGF5ID0gc2VsZi5fbmV3RGlzcGxheTtcblx0XHRcdFx0XHRzZWxmLl9jaGFuZ2luZ0Rpc3BsYXkgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0aWYoc2VsZi5fY2hhbmdpbmdDbGFzcyl7XG5cdFx0XHRcdFx0c2VsZi5fJHBhcmVudC5yZW1vdmVDbGFzcyhzZWxmLmxheW91dC5jb250YWluZXJDbGFzcykuYWRkQ2xhc3Moc2VsZi5fbmV3Q2xhc3MpO1xuXHRcdFx0XHRcdHNlbGYubGF5b3V0LmNvbnRhaW5lckNsYXNzID0gc2VsZi5fbmV3Q2xhc3M7XG5cdFx0XHRcdFx0c2VsZi5fY2hhbmdpbmdDbGFzcyA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRzZWxmLl9jaGFuZ2luZ0xheW91dCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRzZWxmLl9yZWZyZXNoKCk7XG5cdFx0XHRcblx0XHRcdHNlbGYuX2J1aWxkU3RhdGUoKTtcblx0XHRcdFxuXHRcdFx0aWYoc2VsZi5fc3RhdGUuZmFpbCl7XG5cdFx0XHRcdHNlbGYuXyRjb250YWluZXIuYWRkQ2xhc3Moc2VsZi5sYXlvdXQuY29udGFpbmVyQ2xhc3NGYWlsKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c2VsZi5fJHNob3cgPSAkKCk7XG5cdFx0XHRzZWxmLl8kaGlkZSA9ICQoKTtcblx0XHRcdFxuXHRcdFx0aWYod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSl7XG5cdFx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh1bkJyYWtlKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c2VsZi5fbWl4aW5nID0gZmFsc2U7XG5cdFx0XHRcblx0XHRcdGlmKHR5cGVvZiBzZWxmLmNhbGxiYWNrcy5fdXNlciA9PT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRcdHNlbGYuY2FsbGJhY2tzLl91c2VyLmNhbGwoc2VsZi5fZG9tTm9kZSwgc2VsZi5fc3RhdGUsIHNlbGYpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZih0eXBlb2Ygc2VsZi5jYWxsYmFja3Mub25NaXhFbmQgPT09ICdmdW5jdGlvbicpe1xuXHRcdFx0XHRzZWxmLmNhbGxiYWNrcy5vbk1peEVuZC5jYWxsKHNlbGYuX2RvbU5vZGUsIHNlbGYuX3N0YXRlLCBzZWxmKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c2VsZi5fJGNvbnRhaW5lci50cmlnZ2VyKCdtaXhFbmQnLCBbc2VsZi5fc3RhdGUsIHNlbGZdKTtcblx0XHRcdFxuXHRcdFx0aWYoc2VsZi5fc3RhdGUuZmFpbCl7XG5cdFx0XHRcdCh0eXBlb2Ygc2VsZi5jYWxsYmFja3Mub25NaXhGYWlsID09PSAnZnVuY3Rpb24nKSAmJiBzZWxmLmNhbGxiYWNrcy5vbk1peEZhaWwuY2FsbChzZWxmLl9kb21Ob2RlLCBzZWxmLl9zdGF0ZSwgc2VsZik7XG5cdFx0XHRcdHNlbGYuXyRjb250YWluZXIudHJpZ2dlcignbWl4RmFpbCcsIFtzZWxmLl9zdGF0ZSwgc2VsZl0pO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZihzZWxmLl9sb2FkaW5nKXtcblx0XHRcdFx0KHR5cGVvZiBzZWxmLmNhbGxiYWNrcy5vbk1peExvYWQgPT09ICdmdW5jdGlvbicpICYmIHNlbGYuY2FsbGJhY2tzLm9uTWl4TG9hZC5jYWxsKHNlbGYuX2RvbU5vZGUsIHNlbGYuX3N0YXRlLCBzZWxmKTtcblx0XHRcdFx0c2VsZi5fJGNvbnRhaW5lci50cmlnZ2VyKCdtaXhMb2FkJywgW3NlbGYuX3N0YXRlLCBzZWxmXSk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmKHNlbGYuX3F1ZXVlLmxlbmd0aCl7XG5cdFx0XHRcdHNlbGYuX2V4ZWNBY3Rpb24oJ19xdWV1ZScsIDApO1xuXHRcdFx0XHRcblx0XHRcdFx0c2VsZi5tdWx0aU1peChzZWxmLl9xdWV1ZVswXVswXSxzZWxmLl9xdWV1ZVswXVsxXSxzZWxmLl9xdWV1ZVswXVsyXSk7XG5cdFx0XHRcdHNlbGYuX3F1ZXVlLnNwbGljZSgwLCAxKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c2VsZi5fZXhlY0FjdGlvbignX2NsZWFuVXAnLCAxKTtcblx0XHRcdFxuXHRcdFx0c2VsZi5fbG9hZGluZyA9IGZhbHNlO1xuXHRcdH0sXG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogR2V0IFByZWZpeGVkIENTU1xuXHRcdCAqIEBzaW5jZSAyLjAuMFxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eVxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJlZml4VmFsdWVcblx0XHQgKiBAcmV0dXJuIHtvYmplY3R9IHN0eWxlc1xuXHRcdCAqL1xuXHRcdFxuXHRcdF9nZXRQcmVmaXhlZENTUzogZnVuY3Rpb24ocHJvcGVydHksIHZhbHVlLCBwcmVmaXhWYWx1ZSl7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0XHRcdHN0eWxlcyA9IHt9O1xuXHRcdFxuXHRcdFx0Zm9yKGkgPSAwOyBpIDwgMjsgaSsrKXtcblx0XHRcdFx0dmFyIHByZWZpeCA9IGkgPT09IDAgPyBzZWxmLl9wcmVmaXggOiAnJztcblx0XHRcdFx0cHJlZml4VmFsdWUgPyBzdHlsZXNbcHJlZml4K3Byb3BlcnR5XSA9IHByZWZpeCt2YWx1ZSA6IHN0eWxlc1twcmVmaXgrcHJvcGVydHldID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHJldHVybiBzZWxmLl9leGVjRmlsdGVyKCdfZ2V0UHJlZml4ZWRDU1MnLCBzdHlsZXMsIGFyZ3VtZW50cyk7XG5cdFx0fSxcblx0XHRcblx0XHQvKipcblx0XHQgKiBHZXQgRGVsYXlcblx0XHQgKiBAc2luY2UgMi4wLjBcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gaVxuXHRcdCAqIEByZXR1cm4ge251bWJlcn0gZGVsYXlcblx0XHQgKi9cblx0XHRcblx0XHRfZ2V0RGVsYXk6IGZ1bmN0aW9uKGkpe1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzLFxuXHRcdFx0XHRuID0gdHlwZW9mIHNlbGYuYW5pbWF0aW9uLnN0YWdnZXJTZXF1ZW5jZSA9PT0gJ2Z1bmN0aW9uJyA/IHNlbGYuYW5pbWF0aW9uLnN0YWdnZXJTZXF1ZW5jZS5jYWxsKHNlbGYuX2RvbU5vZGUsIGksIHNlbGYuX3N0YXRlKSA6IGksXG5cdFx0XHRcdGRlbGF5ID0gc2VsZi5hbmltYXRpb24uc3RhZ2dlciA/ICBuICogc2VsZi5hbmltYXRpb24uc3RhZ2dlckR1cmF0aW9uIDogMDtcblx0XHRcdFx0XG5cdFx0XHRyZXR1cm4gc2VsZi5fZXhlY0ZpbHRlcignX2dldERlbGF5JywgZGVsYXksIGFyZ3VtZW50cyk7XG5cdFx0fSxcblx0XHRcblx0XHQvKipcblx0XHQgKiBQYXJzZSBNdWx0aU1peCBBcmd1bWVudHNcblx0XHQgKiBAc2luY2UgMi4wLjBcblx0XHQgKiBAcGFyYW0ge2FycmF5fSBhcmdzXG5cdFx0ICogQHJldHVybiB7b2JqZWN0fSBvdXRwdXRcblx0XHQgKi9cblx0XHRcblx0XHRfcGFyc2VNdWx0aU1peEFyZ3M6IGZ1bmN0aW9uKGFyZ3Mpe1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzLFxuXHRcdFx0XHRvdXRwdXQgPSB7XG5cdFx0XHRcdFx0Y29tbWFuZDogbnVsbCxcblx0XHRcdFx0XHRhbmltYXRlOiBzZWxmLmFuaW1hdGlvbi5lbmFibGUsXG5cdFx0XHRcdFx0Y2FsbGJhY2s6IG51bGxcblx0XHRcdFx0fTtcblx0XHRcdFx0XG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdHZhciBhcmcgPSBhcmdzW2ldO1xuXG5cdFx0XHRcdGlmKGFyZyAhPT0gbnVsbCl7XG5cdFx0XHRcdFx0aWYodHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycpe1xuXHRcdFx0XHRcdFx0b3V0cHV0LmNvbW1hbmQgPSBhcmc7XG5cdFx0XHRcdFx0fSBlbHNlIGlmKHR5cGVvZiBhcmcgPT09ICdib29sZWFuJyl7XG5cdFx0XHRcdFx0XHRvdXRwdXQuYW5pbWF0ZSA9IGFyZztcblx0XHRcdFx0XHR9IGVsc2UgaWYodHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRcdFx0XHRvdXRwdXQuY2FsbGJhY2sgPSBhcmc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHJldHVybiBzZWxmLl9leGVjRmlsdGVyKCdfcGFyc2VNdWx0aU1peEFyZ3MnLCBvdXRwdXQsIGFyZ3VtZW50cyk7XG5cdFx0fSxcblx0XHRcblx0XHQvKipcblx0XHQgKiBQYXJzZSBJbnNlcnQgQXJndW1lbnRzXG5cdFx0ICogQHNpbmNlIDIuMC4wXG5cdFx0ICogQHBhcmFtIHthcnJheX0gYXJnc1xuXHRcdCAqIEByZXR1cm4ge29iamVjdH0gb3V0cHV0XG5cdFx0ICovXG5cdFx0XG5cdFx0X3BhcnNlSW5zZXJ0QXJnczogZnVuY3Rpb24oYXJncyl7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0XHRcdG91dHB1dCA9IHtcblx0XHRcdFx0XHRpbmRleDogMCxcblx0XHRcdFx0XHQkb2JqZWN0OiAkKCksXG5cdFx0XHRcdFx0bXVsdGlNaXg6IHtmaWx0ZXI6IHNlbGYuX3N0YXRlLmFjdGl2ZUZpbHRlcn0sXG5cdFx0XHRcdFx0Y2FsbGJhY2s6IG51bGxcblx0XHRcdFx0fTtcblx0XHRcdFxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHR2YXIgYXJnID0gYXJnc1tpXTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKXtcblx0XHRcdFx0XHRvdXRwdXQuaW5kZXggPSBhcmc7XG5cdFx0XHRcdH0gZWxzZSBpZih0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgaW5zdGFuY2VvZiAkKXtcblx0XHRcdFx0XHRvdXRwdXQuJG9iamVjdCA9IGFyZztcblx0XHRcdFx0fSBlbHNlIGlmKHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIHNlbGYuX2hlbHBlcnMuX2lzRWxlbWVudChhcmcpKXtcblx0XHRcdFx0XHRvdXRwdXQuJG9iamVjdCA9ICQoYXJnKTtcblx0XHRcdFx0fSBlbHNlIGlmKHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbCl7XG5cdFx0XHRcdFx0b3V0cHV0Lm11bHRpTWl4ID0gYXJnO1xuXHRcdFx0XHR9IGVsc2UgaWYodHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nICYmICFhcmcpe1xuXHRcdFx0XHRcdG91dHB1dC5tdWx0aU1peCA9IGZhbHNlO1xuXHRcdFx0XHR9IGVsc2UgaWYodHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRcdFx0b3V0cHV0LmNhbGxiYWNrID0gYXJnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHJldHVybiBzZWxmLl9leGVjRmlsdGVyKCdfcGFyc2VJbnNlcnRBcmdzJywgb3V0cHV0LCBhcmd1bWVudHMpO1xuXHRcdH0sXG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogRXhlY3V0ZSBBY3Rpb25cblx0XHQgKiBAc2luY2UgMi4wLjBcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZVxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNQb3N0XG5cdFx0ICogQHBhcmFtIHthcnJheX0gYXJnc1xuXHRcdCAqL1xuXHRcdFxuXHRcdF9leGVjQWN0aW9uOiBmdW5jdGlvbihtZXRob2ROYW1lLCBpc1Bvc3QsIGFyZ3Mpe1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzLFxuXHRcdFx0XHRjb250ZXh0ID0gaXNQb3N0ID8gJ3Bvc3QnIDogJ3ByZSc7XG5cblx0XHRcdGlmKCFzZWxmLl9hY3Rpb25zLmlzRW1wdHlPYmplY3QgJiYgc2VsZi5fYWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShtZXRob2ROYW1lKSl7XG5cdFx0XHRcdGZvcih2YXIga2V5IGluIHNlbGYuX2FjdGlvbnNbbWV0aG9kTmFtZV1bY29udGV4dF0pe1xuXHRcdFx0XHRcdHNlbGYuX2FjdGlvbnNbbWV0aG9kTmFtZV1bY29udGV4dF1ba2V5XS5jYWxsKHNlbGYsIGFyZ3MpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRcblx0XHQvKipcblx0XHQgKiBFeGVjdXRlIEZpbHRlclxuXHRcdCAqIEBzaW5jZSAyLjAuMFxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lXG5cdFx0ICogQHBhcmFtIHttaXhlZH0gdmFsdWVcblx0XHQgKiBAcmV0dXJuIHttaXhlZH0gdmFsdWVcblx0XHQgKi9cblx0XHRcblx0XHRfZXhlY0ZpbHRlcjogZnVuY3Rpb24obWV0aG9kTmFtZSwgdmFsdWUsIGFyZ3Mpe1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0XG5cdFx0XHRpZighc2VsZi5fZmlsdGVycy5pc0VtcHR5T2JqZWN0ICYmIHNlbGYuX2ZpbHRlcnMuaGFzT3duUHJvcGVydHkobWV0aG9kTmFtZSkpe1xuXHRcdFx0XHRmb3IodmFyIGtleSBpbiBzZWxmLl9maWx0ZXJzW21ldGhvZE5hbWVdKXtcblx0XHRcdFx0XHRyZXR1cm4gc2VsZi5fZmlsdGVyc1ttZXRob2ROYW1lXVtrZXldLmNhbGwoc2VsZiwgYXJncyk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdFxuXHRcdC8qIEhlbHBlcnNcblx0XHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cblx0XHRfaGVscGVyczoge1xuXHRcdFx0XG5cdFx0XHQvKipcblx0XHRcdCAqIENhbWVsQ2FzZVxuXHRcdFx0ICogQHNpbmNlIDIuMC4wXG5cdFx0XHQgKiBAcGFyYW0ge3N0cmluZ31cblx0XHRcdCAqIEByZXR1cm4ge3N0cmluZ31cblx0XHRcdCAqL1xuXG5cdFx0XHRfY2FtZWxDYXNlOiBmdW5jdGlvbihzdHJpbmcpe1xuXHRcdFx0XHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UoLy0oW2Etel0pL2csIGZ1bmN0aW9uKGcpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIGdbMV0udG9VcHBlckNhc2UoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHQvKipcblx0XHRcdCAqIElzIEVsZW1lbnRcblx0XHRcdCAqIEBzaW5jZSAyLjEuM1xuXHRcdFx0ICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnQgdG8gdGVzdFxuXHRcdFx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0XHRcdCAqL1xuXHRcdFx0XG5cdFx0XHRfaXNFbGVtZW50OiBmdW5jdGlvbihlbCl7XG5cdFx0XHRcdGlmKHdpbmRvdy5IVE1MRWxlbWVudCl7XG5cdFx0XHRcdFx0cmV0dXJuIGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdGVsICE9PSBudWxsICYmIFxuXHRcdFx0XHRcdFx0ZWwubm9kZVR5cGUgPT09IDEgJiZcblx0XHRcdFx0XHRcdGVsLm5vZGVOYW1lID09PSAnc3RyaW5nJ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdFxuXHRcdC8qIFB1YmxpYyBNZXRob2RzXG5cdFx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIElzIE1peGluZ1xuXHRcdCAqIEBzaW5jZSAyLjAuMFxuXHRcdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0XG5cdFx0aXNNaXhpbmc6IGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHRcblx0XHRcdHJldHVybiBzZWxmLl9leGVjRmlsdGVyKCdpc01peGluZycsIHNlbGYuX21peGluZyk7XG5cdFx0fSxcblx0XHRcblx0XHQvKipcblx0XHQgKiBGaWx0ZXIgKHB1YmxpYylcblx0XHQgKiBAc2luY2UgMi4wLjBcblx0XHQgKiBAcGFyYW0ge2FycmF5fSBhcmd1bWVudHNcblx0XHQgKi9cblx0XHRcblx0XHRmaWx0ZXI6IGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0XHRcdGFyZ3MgPSBzZWxmLl9wYXJzZU11bHRpTWl4QXJncyhhcmd1bWVudHMpO1xuXG5cdFx0XHRzZWxmLl9jbGlja2luZyAmJiAoc2VsZi5fdG9nZ2xlU3RyaW5nID0gJycpO1xuXHRcdFx0XG5cdFx0XHRzZWxmLm11bHRpTWl4KHtmaWx0ZXI6IGFyZ3MuY29tbWFuZH0sIGFyZ3MuYW5pbWF0ZSwgYXJncy5jYWxsYmFjayk7XG5cdFx0fSxcblx0XHRcblx0XHQvKipcblx0XHQgKiBTb3J0IChwdWJsaWMpXG5cdFx0ICogQHNpbmNlIDIuMC4wXG5cdFx0ICogQHBhcmFtIHthcnJheX0gYXJndW1lbnRzXG5cdFx0ICovXG5cdFx0XG5cdFx0c29ydDogZnVuY3Rpb24oKXtcblx0XHRcdHZhciBzZWxmID0gdGhpcyxcblx0XHRcdFx0YXJncyA9IHNlbGYuX3BhcnNlTXVsdGlNaXhBcmdzKGFyZ3VtZW50cyk7XG5cblx0XHRcdHNlbGYubXVsdGlNaXgoe3NvcnQ6IGFyZ3MuY29tbWFuZH0sIGFyZ3MuYW5pbWF0ZSwgYXJncy5jYWxsYmFjayk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIENoYW5nZSBMYXlvdXQgKHB1YmxpYylcblx0XHQgKiBAc2luY2UgMi4wLjBcblx0XHQgKiBAcGFyYW0ge2FycmF5fSBhcmd1bWVudHNcblx0XHQgKi9cblx0XHRcblx0XHRjaGFuZ2VMYXlvdXQ6IGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0XHRcdGFyZ3MgPSBzZWxmLl9wYXJzZU11bHRpTWl4QXJncyhhcmd1bWVudHMpO1xuXHRcdFx0XHRcblx0XHRcdHNlbGYubXVsdGlNaXgoe2NoYW5nZUxheW91dDogYXJncy5jb21tYW5kfSwgYXJncy5hbmltYXRlLCBhcmdzLmNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIE11bHRpTWl4XG5cdFx0ICogQHNpbmNlIDIuMC4wXG5cdFx0ICogQHBhcmFtIHthcnJheX0gYXJndW1lbnRzXG5cdFx0ICovXG5cdFx0XG5cdFx0bXVsdGlNaXg6IGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0XHRcdGFyZ3MgPSBzZWxmLl9wYXJzZU11bHRpTWl4QXJncyhhcmd1bWVudHMpO1xuXG5cdFx0XHRzZWxmLl9leGVjQWN0aW9uKCdtdWx0aU1peCcsIDAsIGFyZ3VtZW50cyk7XG5cblx0XHRcdGlmKCFzZWxmLl9taXhpbmcpe1xuXHRcdFx0XHRpZihzZWxmLmNvbnRyb2xzLmVuYWJsZSAmJiAhc2VsZi5fY2xpY2tpbmcpe1xuXHRcdFx0XHRcdHNlbGYuY29udHJvbHMudG9nZ2xlRmlsdGVyQnV0dG9ucyAmJiBzZWxmLl9idWlsZFRvZ2dsZUFycmF5KCk7XG5cdFx0XHRcdFx0c2VsZi5fdXBkYXRlQ29udHJvbHMoYXJncy5jb21tYW5kLCBzZWxmLmNvbnRyb2xzLnRvZ2dsZUZpbHRlckJ1dHRvbnMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHQoc2VsZi5fcXVldWUubGVuZ3RoIDwgMikgJiYgKHNlbGYuX2NsaWNraW5nID0gZmFsc2UpO1xuXHRcdFx0XG5cdFx0XHRcdGRlbGV0ZSBzZWxmLmNhbGxiYWNrcy5fdXNlcjtcblx0XHRcdFx0aWYoYXJncy5jYWxsYmFjaykgc2VsZi5jYWxsYmFja3MuX3VzZXIgPSBhcmdzLmNhbGxiYWNrO1xuXHRcdFx0XG5cdFx0XHRcdHZhciBzb3J0ID0gYXJncy5jb21tYW5kLnNvcnQsXG5cdFx0XHRcdFx0ZmlsdGVyID0gYXJncy5jb21tYW5kLmZpbHRlcixcblx0XHRcdFx0XHRjaGFuZ2VMYXlvdXQgPSBhcmdzLmNvbW1hbmQuY2hhbmdlTGF5b3V0O1xuXG5cdFx0XHRcdHNlbGYuX3JlZnJlc2goKTtcblxuXHRcdFx0XHRpZihzb3J0KXtcblx0XHRcdFx0XHRzZWxmLl9uZXdTb3J0ID0gc2VsZi5fcGFyc2VTb3J0KHNvcnQpO1xuXHRcdFx0XHRcdHNlbGYuX25ld1NvcnRTdHJpbmcgPSBzb3J0O1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHNlbGYuX3NvcnRpbmcgPSB0cnVlO1xuXHRcdFx0XHRcdHNlbGYuX3NvcnQoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0aWYoZmlsdGVyICE9PSB1bmRmKXtcblx0XHRcdFx0XHRmaWx0ZXIgPSAoZmlsdGVyID09PSAnYWxsJykgPyBzZWxmLnNlbGVjdG9ycy50YXJnZXQgOiBmaWx0ZXI7XG5cdFxuXHRcdFx0XHRcdHNlbGYuX2FjdGl2ZUZpbHRlciA9IGZpbHRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0c2VsZi5fZmlsdGVyKCk7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZihjaGFuZ2VMYXlvdXQpe1xuXHRcdFx0XHRcdHNlbGYuX25ld0Rpc3BsYXkgPSAodHlwZW9mIGNoYW5nZUxheW91dCA9PT0gJ3N0cmluZycpID8gY2hhbmdlTGF5b3V0IDogY2hhbmdlTGF5b3V0LmRpc3BsYXkgfHwgc2VsZi5sYXlvdXQuZGlzcGxheTtcblx0XHRcdFx0XHRzZWxmLl9uZXdDbGFzcyA9IGNoYW5nZUxheW91dC5jb250YWluZXJDbGFzcyB8fCAnJztcblxuXHRcdFx0XHRcdGlmKFxuXHRcdFx0XHRcdFx0c2VsZi5fbmV3RGlzcGxheSAhPT0gc2VsZi5sYXlvdXQuZGlzcGxheSB8fFxuXHRcdFx0XHRcdFx0c2VsZi5fbmV3Q2xhc3MgIT09IHNlbGYubGF5b3V0LmNvbnRhaW5lckNsYXNzXG5cdFx0XHRcdFx0KXtcblx0XHRcdFx0XHRcdHNlbGYuX2NoYW5naW5nTGF5b3V0ID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0c2VsZi5fY2hhbmdpbmdDbGFzcyA9IChzZWxmLl9uZXdDbGFzcyAhPT0gc2VsZi5sYXlvdXQuY29udGFpbmVyQ2xhc3MpO1xuXHRcdFx0XHRcdFx0c2VsZi5fY2hhbmdpbmdEaXNwbGF5ID0gKHNlbGYuX25ld0Rpc3BsYXkgIT09IHNlbGYubGF5b3V0LmRpc3BsYXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0c2VsZi5fJHRhcmdldHMuY3NzKHNlbGYuX2JyYWtlKTtcblx0XHRcdFx0XG5cdFx0XHRcdHNlbGYuX2dvTWl4KGFyZ3MuYW5pbWF0ZSBeIHNlbGYuYW5pbWF0aW9uLmVuYWJsZSA/IGFyZ3MuYW5pbWF0ZSA6IHNlbGYuYW5pbWF0aW9uLmVuYWJsZSk7XG5cdFx0XHRcdFxuXHRcdFx0XHRzZWxmLl9leGVjQWN0aW9uKCdtdWx0aU1peCcsIDEsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYoc2VsZi5hbmltYXRpb24ucXVldWUgJiYgc2VsZi5fcXVldWUubGVuZ3RoIDwgc2VsZi5hbmltYXRpb24ucXVldWVMaW1pdCl7XG5cdFx0XHRcdFx0c2VsZi5fcXVldWUucHVzaChhcmd1bWVudHMpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdChzZWxmLmNvbnRyb2xzLmVuYWJsZSAmJiAhc2VsZi5fY2xpY2tpbmcpICYmIHNlbGYuX3VwZGF0ZUNvbnRyb2xzKGFyZ3MuY29tbWFuZCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0c2VsZi5fZXhlY0FjdGlvbignbXVsdGlNaXhRdWV1ZScsIDEsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYodHlwZW9mIHNlbGYuY2FsbGJhY2tzLm9uTWl4QnVzeSA9PT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRcdFx0XHRzZWxmLmNhbGxiYWNrcy5vbk1peEJ1c3kuY2FsbChzZWxmLl9kb21Ob2RlLCBzZWxmLl9zdGF0ZSwgc2VsZik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHNlbGYuXyRjb250YWluZXIudHJpZ2dlcignbWl4QnVzeScsIFtzZWxmLl9zdGF0ZSwgc2VsZl0pO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHNlbGYuX2V4ZWNBY3Rpb24oJ211bHRpTWl4QnVzeScsIDEsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIEluc2VydFxuXHRcdCAqIEBzaW5jZSAyLjAuMFxuXHRcdCAqIEBwYXJhbSB7YXJyYXl9IGFyZ3VtZW50c1xuXHRcdCAqL1xuXHRcdFxuXHRcdGluc2VydDogZnVuY3Rpb24oKXtcblx0XHRcdHZhciBzZWxmID0gdGhpcyxcblx0XHRcdFx0YXJncyA9IHNlbGYuX3BhcnNlSW5zZXJ0QXJncyhhcmd1bWVudHMpLFxuXHRcdFx0XHRjYWxsYmFjayA9ICh0eXBlb2YgYXJncy5jYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgPyBhcmdzLmNhbGxiYWNrIDogbnVsbCxcblx0XHRcdFx0ZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcblx0XHRcdFx0dGFyZ2V0ID0gKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0c2VsZi5fcmVmcmVzaCgpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmKHNlbGYuXyR0YXJnZXRzLmxlbmd0aCl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKGFyZ3MuaW5kZXggPCBzZWxmLl8kdGFyZ2V0cy5sZW5ndGggfHwgIXNlbGYuXyR0YXJnZXRzLmxlbmd0aCkgPyBcblx0XHRcdFx0XHRcdFx0c2VsZi5fJHRhcmdldHNbYXJncy5pbmRleF0gOlxuXHRcdFx0XHRcdFx0XHRzZWxmLl8kdGFyZ2V0c1tzZWxmLl8kdGFyZ2V0cy5sZW5ndGgtMV0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gc2VsZi5fJHBhcmVudFswXS5jaGlsZHJlblswXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pKCk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdHNlbGYuX2V4ZWNBY3Rpb24oJ2luc2VydCcsIDAsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdFxuXHRcdFx0aWYoYXJncy4kb2JqZWN0KXtcblx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGFyZ3MuJG9iamVjdC5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdFx0dmFyIGVsID0gYXJncy4kb2JqZWN0W2ldO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGZyYWcuYXBwZW5kQ2hpbGQoZWwpO1xuXHRcdFx0XHRcdGZyYWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyAnKSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzZWxmLl8kcGFyZW50WzBdLmluc2VydEJlZm9yZShmcmFnLCB0YXJnZXQpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRzZWxmLl9leGVjQWN0aW9uKCdpbnNlcnQnLCAxLCBhcmd1bWVudHMpO1xuXHRcdFx0XG5cdFx0XHRpZih0eXBlb2YgYXJncy5tdWx0aU1peCA9PT0gJ29iamVjdCcpe1xuXHRcdFx0XHRzZWxmLm11bHRpTWl4KGFyZ3MubXVsdGlNaXgsIGNhbGxiYWNrKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogUHJlcGVuZFxuXHRcdCAqIEBzaW5jZSAyLjAuMFxuXHRcdCAqIEBwYXJhbSB7YXJyYXl9IGFyZ3VtZW50c1xuXHRcdCAqL1xuXHRcdFxuXHRcdHByZXBlbmQ6IGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0XHRcdGFyZ3MgPSBzZWxmLl9wYXJzZUluc2VydEFyZ3MoYXJndW1lbnRzKTtcblx0XHRcdFx0XG5cdFx0XHRzZWxmLmluc2VydCgwLCBhcmdzLiRvYmplY3QsIGFyZ3MubXVsdGlNaXgsIGFyZ3MuY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogQXBwZW5kXG5cdFx0ICogQHNpbmNlIDIuMC4wXG5cdFx0ICogQHBhcmFtIHthcnJheX0gYXJndW1lbnRzXG5cdFx0ICovXG5cdFx0XG5cdFx0YXBwZW5kOiBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzLFxuXHRcdFx0XHRhcmdzID0gc2VsZi5fcGFyc2VJbnNlcnRBcmdzKGFyZ3VtZW50cyk7XG5cdFx0XG5cdFx0XHRzZWxmLmluc2VydChzZWxmLl9zdGF0ZS50b3RhbFRhcmdldHMsIGFyZ3MuJG9iamVjdCwgYXJncy5tdWx0aU1peCwgYXJncy5jYWxsYmFjayk7XG5cdFx0fSxcblx0XHRcblx0XHQvKipcblx0XHQgKiBHZXQgT3B0aW9uXG5cdFx0ICogQHNpbmNlIDIuMC4wXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuXHRcdCAqIEByZXR1cm4ge21peGVkfSB2YWx1ZVxuXHRcdCAqL1xuXHRcdFxuXHRcdGdldE9wdGlvbjogZnVuY3Rpb24oc3RyaW5nKXtcblx0XHRcdHZhciBzZWxmID0gdGhpcyxcblx0XHRcdFx0Z2V0UHJvcGVydHkgPSBmdW5jdGlvbihvYmosIHByb3Ape1xuXHRcdFx0XHRcdHZhciBwYXJ0cyA9IHByb3Auc3BsaXQoJy4nKSxcblx0XHRcdFx0XHRcdGxhc3QgPSBwYXJ0cy5wb3AoKSxcblx0XHRcdFx0XHRcdGwgPSBwYXJ0cy5sZW5ndGgsXG5cdFx0XHRcdFx0XHRpID0gMSxcblx0XHRcdFx0XHRcdGN1cnJlbnQgPSBwYXJ0c1swXSB8fCBwcm9wO1xuXG5cdFx0XHRcdFx0d2hpbGUoKG9iaiA9IG9ialtjdXJyZW50XSkgJiYgaSA8IGwpe1xuXHRcdFx0XHRcdFx0Y3VycmVudCA9IHBhcnRzW2ldO1xuXHRcdFx0XHRcdFx0aSsrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmKG9iaiAhPT0gdW5kZil7XG5cdFx0XHRcdFx0XHRyZXR1cm4gb2JqW2xhc3RdICE9PSB1bmRmID8gb2JqW2xhc3RdIDogb2JqO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblxuXHRcdFx0cmV0dXJuIHN0cmluZyA/IHNlbGYuX2V4ZWNGaWx0ZXIoJ2dldE9wdGlvbicsIGdldFByb3BlcnR5KHNlbGYsIHN0cmluZyksIGFyZ3VtZW50cykgOiBzZWxmO1xuXHRcdH0sXG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogU2V0IE9wdGlvbnNcblx0XHQgKiBAc2luY2UgMi4wLjBcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnXG5cdFx0ICovXG5cdFx0XG5cdFx0c2V0T3B0aW9uczogZnVuY3Rpb24oY29uZmlnKXtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdFxuXHRcdFx0c2VsZi5fZXhlY0FjdGlvbignc2V0T3B0aW9ucycsIDAsIGFyZ3VtZW50cyk7XG5cdFx0XHRcblx0XHRcdHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmICQuZXh0ZW5kKHRydWUsIHNlbGYsIGNvbmZpZyk7XG5cdFx0XHRcblx0XHRcdHNlbGYuX2V4ZWNBY3Rpb24oJ3NldE9wdGlvbnMnLCAxLCBhcmd1bWVudHMpO1xuXHRcdH0sXG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogR2V0IFN0YXRlXG5cdFx0ICogQHNpbmNlIDIuMC4wXG5cdFx0ICogQHJldHVybiB7b2JqZWN0fSBzdGF0ZVxuXHRcdCAqL1xuXHRcdFxuXHRcdGdldFN0YXRlOiBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0XG5cdFx0XHRyZXR1cm4gc2VsZi5fZXhlY0ZpbHRlcignZ2V0U3RhdGUnLCBzZWxmLl9zdGF0ZSwgc2VsZik7XG5cdFx0fSxcblx0XHRcblx0XHQvKipcblx0XHQgKiBGb3JjZSBSZWZyZXNoXG5cdFx0ICogQHNpbmNlIDIuMS4yXG5cdFx0ICovXG5cdFx0XG5cdFx0Zm9yY2VSZWZyZXNoOiBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0XG5cdFx0XHRzZWxmLl9yZWZyZXNoKGZhbHNlLCB0cnVlKTtcblx0XHR9LFxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIERlc3Ryb3lcblx0XHQgKiBAc2luY2UgMi4wLjBcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IGhpZGVBbGxcblx0XHQgKi9cblx0XHRcblx0XHRkZXN0cm95OiBmdW5jdGlvbihoaWRlQWxsKXtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdFxuXHRcdFx0c2VsZi5fZXhlY0FjdGlvbignZGVzdHJveScsIDAsIGFyZ3VtZW50cyk7XG5cdFx0XG5cdFx0XHRzZWxmLl8kYm9keVxuXHRcdFx0XHQuYWRkKCQoc2VsZi5zZWxlY3RvcnMuc29ydCkpXG5cdFx0XHRcdC5hZGQoJChzZWxmLnNlbGVjdG9ycy5maWx0ZXIpKVxuXHRcdFx0XHQub2ZmKCcubWl4SXRVcCcpO1xuXHRcdFx0XG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2VsZi5fJHRhcmdldHMubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHR2YXIgdGFyZ2V0ID0gc2VsZi5fJHRhcmdldHNbaV07XG5cblx0XHRcdFx0aGlkZUFsbCAmJiAodGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnJyk7XG5cblx0XHRcdFx0ZGVsZXRlIHRhcmdldC5taXhQYXJlbnQ7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHNlbGYuX2V4ZWNBY3Rpb24oJ2Rlc3Ryb3knLCAxLCBhcmd1bWVudHMpO1xuXHRcdFx0XG5cdFx0XHRkZWxldGUgJC5NaXhJdFVwLnByb3RvdHlwZS5faW5zdGFuY2VzW3NlbGYuX2lkXTtcblx0XHR9XG5cdFx0XG5cdH07XG5cdFxuXHQvKiBqUXVlcnkgTWV0aG9kc1xuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdFxuXHQvKipcblx0ICogalF1ZXJ5IC5taXhJdFVwKCkgbWV0aG9kXG5cdCAqIEBzaW5jZSAyLjAuMFxuXHQgKiBAZXh0ZW5kcyAkLmZuXG5cdCAqL1xuXHRcblx0JC5mbi5taXhJdFVwID0gZnVuY3Rpb24oKXtcblx0XHR2YXIgYXJncyA9IGFyZ3VtZW50cyxcblx0XHRcdGRhdGFSZXR1cm4gPSBbXSxcblx0XHRcdGVhY2hSZXR1cm4sXG5cdFx0XHRfaW5zdGFudGlhdGUgPSBmdW5jdGlvbihkb21Ob2RlLCBzZXR0aW5ncyl7XG5cdFx0XHRcdHZhciBpbnN0YW5jZSA9IG5ldyAkLk1peEl0VXAoKSxcblx0XHRcdFx0XHRyYW5kID0gZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdHJldHVybiAoJzAwMDAwJysoTWF0aC5yYW5kb20oKSoxNjc3NzIxNjw8MCkudG9TdHJpbmcoMTYpKS5zdWJzdHIoLTYpLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcblx0XHRcdFx0aW5zdGFuY2UuX2V4ZWNBY3Rpb24oJ19pbnN0YW50aWF0ZScsIDAsIGFyZ3VtZW50cyk7XG5cblx0XHRcdFx0ZG9tTm9kZS5pZCA9ICFkb21Ob2RlLmlkID8gJ01peEl0VXAnK3JhbmQoKSA6IGRvbU5vZGUuaWQ7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZighaW5zdGFuY2UuX2luc3RhbmNlc1tkb21Ob2RlLmlkXSl7XG5cdFx0XHRcdFx0aW5zdGFuY2UuX2luc3RhbmNlc1tkb21Ob2RlLmlkXSA9IGluc3RhbmNlO1xuXHRcdFx0XHRcdGluc3RhbmNlLl9pbml0KGRvbU5vZGUsIHNldHRpbmdzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0aW5zdGFuY2UuX2V4ZWNBY3Rpb24oJ19pbnN0YW50aWF0ZScsIDEsIGFyZ3VtZW50cyk7XG5cdFx0XHR9O1xuXHRcdFx0XG5cdFx0ZWFjaFJldHVybiA9IHRoaXMuZWFjaChmdW5jdGlvbigpe1xuXHRcdFx0aWYoYXJncyAmJiB0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycpe1xuXHRcdFx0XHR2YXIgaW5zdGFuY2UgPSAkLk1peEl0VXAucHJvdG90eXBlLl9pbnN0YW5jZXNbdGhpcy5pZF07XG5cdFx0XHRcdGlmKGFyZ3NbMF0gPT0gJ2lzTG9hZGVkJyl7XG5cdFx0XHRcdFx0ZGF0YVJldHVybi5wdXNoKGluc3RhbmNlID8gdHJ1ZSA6IGZhbHNlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgZGF0YSA9IGluc3RhbmNlW2FyZ3NbMF1dKGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuXHRcdFx0XHRcdGlmKGRhdGEgIT09IHVuZGYpZGF0YVJldHVybi5wdXNoKGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfaW5zdGFudGlhdGUodGhpcywgYXJnc1swXSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0XG5cdFx0aWYoZGF0YVJldHVybi5sZW5ndGgpe1xuXHRcdFx0cmV0dXJuIGRhdGFSZXR1cm4ubGVuZ3RoID4gMSA/IGRhdGFSZXR1cm4gOiBkYXRhUmV0dXJuWzBdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZWFjaFJldHVybjtcblx0XHR9XG5cdH07XG5cdFxuXHQvKipcblx0ICogalF1ZXJ5IC5yZW1vdmVTdHlsZSgpIG1ldGhvZFxuXHQgKiBAc2luY2UgMi4wLjBcblx0ICogQGV4dGVuZHMgJC5mblxuXHQgKi9cblx0XG5cdCQuZm4ucmVtb3ZlU3R5bGUgPSBmdW5jdGlvbihzdHlsZSwgcHJlZml4KXtcblx0XHRwcmVmaXggPSBwcmVmaXggPyBwcmVmaXggOiAnJztcblx0XG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1xuXHRcdFx0dmFyIGVsID0gdGhpcyxcblx0XHRcdFx0c3R5bGVzID0gc3R5bGUuc3BsaXQoJyAnKTtcblx0XHRcdFx0XG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IDI7IGorKyl7XG5cdFx0XHRcdFx0dmFyIHByb3AgPSBqID8gc3R5bGVzW2ldIDogcHJlZml4K3N0eWxlc1tpXTtcblx0XHRcdFx0XHRpZihcblx0XHRcdFx0XHRcdGVsLnN0eWxlW3Byb3BdICE9PSB1bmRmICYmIFxuXHRcdFx0XHRcdFx0dHlwZW9mIGVsLnN0eWxlW3Byb3BdICE9PSAndW5rbm93bicgJiZcblx0XHRcdFx0XHRcdGVsLnN0eWxlW3Byb3BdLmxlbmd0aCA+IDBcblx0XHRcdFx0XHQpe1xuXHRcdFx0XHRcdFx0ZWwuc3R5bGVbcHJvcF0gPSAnJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYoIXByZWZpeClicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZihlbC5hdHRyaWJ1dGVzICYmIGVsLmF0dHJpYnV0ZXMuc3R5bGUgJiYgZWwuYXR0cmlidXRlcy5zdHlsZSAhPT0gdW5kZiAmJiBlbC5hdHRyaWJ1dGVzLnN0eWxlLnZhbHVlID09PSAnJyl7XG5cdFx0XHRcdGVsLmF0dHJpYnV0ZXMucmVtb3ZlTmFtZWRJdGVtKCdzdHlsZScpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXHRcbn0pKGpRdWVyeSk7IiwiLyogTW9kZXJuaXpyIDIuOC4wIChDdXN0b20gQnVpbGQpIHwgTUlUICYgQlNEXG4gKiBCdWlsZDogaHR0cDovL21vZGVybml6ci5jb20vZG93bmxvYWQvIy1mb250ZmFjZS1iYWNrZ3JvdW5kc2l6ZS1ib3JkZXJpbWFnZS1ib3JkZXJyYWRpdXMtYm94c2hhZG93LWZsZXhib3gtZmxleGJveGxlZ2FjeS1oc2xhLW11bHRpcGxlYmdzLW9wYWNpdHktcmdiYS10ZXh0c2hhZG93LWNzc2FuaW1hdGlvbnMtY3NzY29sdW1ucy1nZW5lcmF0ZWRjb250ZW50LWNzc2dyYWRpZW50cy1jc3NyZWZsZWN0aW9ucy1jc3N0cmFuc2Zvcm1zLWNzc3RyYW5zZm9ybXMzZC1jc3N0cmFuc2l0aW9ucy1hcHBsaWNhdGlvbmNhY2hlLWNhbnZhcy1jYW52YXN0ZXh0LWRyYWdhbmRkcm9wLWhhc2hjaGFuZ2UtaGlzdG9yeS1hdWRpby12aWRlby1pbmRleGVkZGItaW5wdXQtaW5wdXR0eXBlcy1sb2NhbHN0b3JhZ2UtcG9zdG1lc3NhZ2Utc2Vzc2lvbnN0b3JhZ2Utd2Vic29ja2V0cy13ZWJzcWxkYXRhYmFzZS13ZWJ3b3JrZXJzLWdlb2xvY2F0aW9uLWlubGluZXN2Zy1zbWlsLXN2Zy1zdmdjbGlwcGF0aHMtdG91Y2gtd2ViZ2wtc2hpdi1tcS1jc3NjbGFzc2VzLXRlc3RzdHlsZXMtdGVzdHByb3AtdGVzdGFsbHByb3BzLWhhc2V2ZW50LXByZWZpeGVzLWRvbXByZWZpeGVzLWxvYWRcbiAqL1xuO3dpbmRvdy5Nb2Rlcm5penI9ZnVuY3Rpb24oYSxiLGMpe2Z1bmN0aW9uIEQoYSl7ai5jc3NUZXh0PWF9ZnVuY3Rpb24gRShhLGIpe3JldHVybiBEKG4uam9pbihhK1wiO1wiKSsoYnx8XCJcIikpfWZ1bmN0aW9uIEYoYSxiKXtyZXR1cm4gdHlwZW9mIGE9PT1ifWZ1bmN0aW9uIEcoYSxiKXtyZXR1cm4hIX4oXCJcIithKS5pbmRleE9mKGIpfWZ1bmN0aW9uIEgoYSxiKXtmb3IodmFyIGQgaW4gYSl7dmFyIGU9YVtkXTtpZighRyhlLFwiLVwiKSYmaltlXSE9PWMpcmV0dXJuIGI9PVwicGZ4XCI/ZTohMH1yZXR1cm4hMX1mdW5jdGlvbiBJKGEsYixkKXtmb3IodmFyIGUgaW4gYSl7dmFyIGY9YlthW2VdXTtpZihmIT09YylyZXR1cm4gZD09PSExP2FbZV06RihmLFwiZnVuY3Rpb25cIik/Zi5iaW5kKGR8fGIpOmZ9cmV0dXJuITF9ZnVuY3Rpb24gSihhLGIsYyl7dmFyIGQ9YS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSthLnNsaWNlKDEpLGU9KGErXCIgXCIrcC5qb2luKGQrXCIgXCIpK2QpLnNwbGl0KFwiIFwiKTtyZXR1cm4gRihiLFwic3RyaW5nXCIpfHxGKGIsXCJ1bmRlZmluZWRcIik/SChlLGIpOihlPShhK1wiIFwiK3Euam9pbihkK1wiIFwiKStkKS5zcGxpdChcIiBcIiksSShlLGIsYykpfWZ1bmN0aW9uIEsoKXtlLmlucHV0PWZ1bmN0aW9uKGMpe2Zvcih2YXIgZD0wLGU9Yy5sZW5ndGg7ZDxlO2QrKyl1W2NbZF1dPWNbZF1pbiBrO3JldHVybiB1Lmxpc3QmJih1Lmxpc3Q9ISFiLmNyZWF0ZUVsZW1lbnQoXCJkYXRhbGlzdFwiKSYmISFhLkhUTUxEYXRhTGlzdEVsZW1lbnQpLHV9KFwiYXV0b2NvbXBsZXRlIGF1dG9mb2N1cyBsaXN0IHBsYWNlaG9sZGVyIG1heCBtaW4gbXVsdGlwbGUgcGF0dGVybiByZXF1aXJlZCBzdGVwXCIuc3BsaXQoXCIgXCIpKSxlLmlucHV0dHlwZXM9ZnVuY3Rpb24oYSl7Zm9yKHZhciBkPTAsZSxmLGgsaT1hLmxlbmd0aDtkPGk7ZCsrKWsuc2V0QXR0cmlidXRlKFwidHlwZVwiLGY9YVtkXSksZT1rLnR5cGUhPT1cInRleHRcIixlJiYoay52YWx1ZT1sLGsuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOmFic29sdXRlO3Zpc2liaWxpdHk6aGlkZGVuO1wiLC9ecmFuZ2UkLy50ZXN0KGYpJiZrLnN0eWxlLldlYmtpdEFwcGVhcmFuY2UhPT1jPyhnLmFwcGVuZENoaWxkKGspLGg9Yi5kZWZhdWx0VmlldyxlPWguZ2V0Q29tcHV0ZWRTdHlsZSYmaC5nZXRDb21wdXRlZFN0eWxlKGssbnVsbCkuV2Via2l0QXBwZWFyYW5jZSE9PVwidGV4dGZpZWxkXCImJmsub2Zmc2V0SGVpZ2h0IT09MCxnLnJlbW92ZUNoaWxkKGspKTovXihzZWFyY2h8dGVsKSQvLnRlc3QoZil8fCgvXih1cmx8ZW1haWwpJC8udGVzdChmKT9lPWsuY2hlY2tWYWxpZGl0eSYmay5jaGVja1ZhbGlkaXR5KCk9PT0hMTplPWsudmFsdWUhPWwpKSx0W2FbZF1dPSEhZTtyZXR1cm4gdH0oXCJzZWFyY2ggdGVsIHVybCBlbWFpbCBkYXRldGltZSBkYXRlIG1vbnRoIHdlZWsgdGltZSBkYXRldGltZS1sb2NhbCBudW1iZXIgcmFuZ2UgY29sb3JcIi5zcGxpdChcIiBcIikpfXZhciBkPVwiMi44LjBcIixlPXt9LGY9ITAsZz1iLmRvY3VtZW50RWxlbWVudCxoPVwibW9kZXJuaXpyXCIsaT1iLmNyZWF0ZUVsZW1lbnQoaCksaj1pLnN0eWxlLGs9Yi5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksbD1cIjopXCIsbT17fS50b1N0cmluZyxuPVwiIC13ZWJraXQtIC1tb3otIC1vLSAtbXMtIFwiLnNwbGl0KFwiIFwiKSxvPVwiV2Via2l0IE1veiBPIG1zXCIscD1vLnNwbGl0KFwiIFwiKSxxPW8udG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIikscj17c3ZnOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIn0scz17fSx0PXt9LHU9e30sdj1bXSx3PXYuc2xpY2UseCx5PWZ1bmN0aW9uKGEsYyxkLGUpe3ZhciBmLGksaixrLGw9Yi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLG09Yi5ib2R5LG49bXx8Yi5jcmVhdGVFbGVtZW50KFwiYm9keVwiKTtpZihwYXJzZUludChkLDEwKSl3aGlsZShkLS0paj1iLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksai5pZD1lP2VbZF06aCsoZCsxKSxsLmFwcGVuZENoaWxkKGopO3JldHVybiBmPVtcIiYjMTczO1wiLCc8c3R5bGUgaWQ9XCJzJyxoLCdcIj4nLGEsXCI8L3N0eWxlPlwiXS5qb2luKFwiXCIpLGwuaWQ9aCwobT9sOm4pLmlubmVySFRNTCs9ZixuLmFwcGVuZENoaWxkKGwpLG18fChuLnN0eWxlLmJhY2tncm91bmQ9XCJcIixuLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIsaz1nLnN0eWxlLm92ZXJmbG93LGcuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIixnLmFwcGVuZENoaWxkKG4pKSxpPWMobCxhKSxtP2wucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsKToobi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG4pLGcuc3R5bGUub3ZlcmZsb3c9ayksISFpfSx6PWZ1bmN0aW9uKGIpe3ZhciBjPWEubWF0Y2hNZWRpYXx8YS5tc01hdGNoTWVkaWE7aWYoYylyZXR1cm4gYyhiKSYmYyhiKS5tYXRjaGVzfHwhMTt2YXIgZDtyZXR1cm4geShcIkBtZWRpYSBcIitiK1wiIHsgI1wiK2grXCIgeyBwb3NpdGlvbjogYWJzb2x1dGU7IH0gfVwiLGZ1bmN0aW9uKGIpe2Q9KGEuZ2V0Q29tcHV0ZWRTdHlsZT9nZXRDb21wdXRlZFN0eWxlKGIsbnVsbCk6Yi5jdXJyZW50U3R5bGUpW1wicG9zaXRpb25cIl09PVwiYWJzb2x1dGVcIn0pLGR9LEE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBkKGQsZSl7ZT1lfHxiLmNyZWF0ZUVsZW1lbnQoYVtkXXx8XCJkaXZcIiksZD1cIm9uXCIrZDt2YXIgZj1kIGluIGU7cmV0dXJuIGZ8fChlLnNldEF0dHJpYnV0ZXx8KGU9Yi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxlLnNldEF0dHJpYnV0ZSYmZS5yZW1vdmVBdHRyaWJ1dGUmJihlLnNldEF0dHJpYnV0ZShkLFwiXCIpLGY9RihlW2RdLFwiZnVuY3Rpb25cIiksRihlW2RdLFwidW5kZWZpbmVkXCIpfHwoZVtkXT1jKSxlLnJlbW92ZUF0dHJpYnV0ZShkKSkpLGU9bnVsbCxmfXZhciBhPXtzZWxlY3Q6XCJpbnB1dFwiLGNoYW5nZTpcImlucHV0XCIsc3VibWl0OlwiZm9ybVwiLHJlc2V0OlwiZm9ybVwiLGVycm9yOlwiaW1nXCIsbG9hZDpcImltZ1wiLGFib3J0OlwiaW1nXCJ9O3JldHVybiBkfSgpLEI9e30uaGFzT3duUHJvcGVydHksQzshRihCLFwidW5kZWZpbmVkXCIpJiYhRihCLmNhbGwsXCJ1bmRlZmluZWRcIik/Qz1mdW5jdGlvbihhLGIpe3JldHVybiBCLmNhbGwoYSxiKX06Qz1mdW5jdGlvbihhLGIpe3JldHVybiBiIGluIGEmJkYoYS5jb25zdHJ1Y3Rvci5wcm90b3R5cGVbYl0sXCJ1bmRlZmluZWRcIil9LEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kfHwoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQ9ZnVuY3Rpb24oYil7dmFyIGM9dGhpcztpZih0eXBlb2YgYyE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBUeXBlRXJyb3I7dmFyIGQ9dy5jYWxsKGFyZ3VtZW50cywxKSxlPWZ1bmN0aW9uKCl7aWYodGhpcyBpbnN0YW5jZW9mIGUpe3ZhciBhPWZ1bmN0aW9uKCl7fTthLnByb3RvdHlwZT1jLnByb3RvdHlwZTt2YXIgZj1uZXcgYSxnPWMuYXBwbHkoZixkLmNvbmNhdCh3LmNhbGwoYXJndW1lbnRzKSkpO3JldHVybiBPYmplY3QoZyk9PT1nP2c6Zn1yZXR1cm4gYy5hcHBseShiLGQuY29uY2F0KHcuY2FsbChhcmd1bWVudHMpKSl9O3JldHVybiBlfSkscy5mbGV4Ym94PWZ1bmN0aW9uKCl7cmV0dXJuIEooXCJmbGV4V3JhcFwiKX0scy5mbGV4Ym94bGVnYWN5PWZ1bmN0aW9uKCl7cmV0dXJuIEooXCJib3hEaXJlY3Rpb25cIil9LHMuY2FudmFzPWZ1bmN0aW9uKCl7dmFyIGE9Yi5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO3JldHVybiEhYS5nZXRDb250ZXh0JiYhIWEuZ2V0Q29udGV4dChcIjJkXCIpfSxzLmNhbnZhc3RleHQ9ZnVuY3Rpb24oKXtyZXR1cm4hIWUuY2FudmFzJiYhIUYoYi5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLmdldENvbnRleHQoXCIyZFwiKS5maWxsVGV4dCxcImZ1bmN0aW9uXCIpfSxzLndlYmdsPWZ1bmN0aW9uKCl7cmV0dXJuISFhLldlYkdMUmVuZGVyaW5nQ29udGV4dH0scy50b3VjaD1mdW5jdGlvbigpe3ZhciBjO3JldHVyblwib250b3VjaHN0YXJ0XCJpbiBhfHxhLkRvY3VtZW50VG91Y2gmJmIgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoP2M9ITA6eShbXCJAbWVkaWEgKFwiLG4uam9pbihcInRvdWNoLWVuYWJsZWQpLChcIiksaCxcIilcIixcInsjbW9kZXJuaXpye3RvcDo5cHg7cG9zaXRpb246YWJzb2x1dGV9fVwiXS5qb2luKFwiXCIpLGZ1bmN0aW9uKGEpe2M9YS5vZmZzZXRUb3A9PT05fSksY30scy5nZW9sb2NhdGlvbj1mdW5jdGlvbigpe3JldHVyblwiZ2VvbG9jYXRpb25cImluIG5hdmlnYXRvcn0scy5wb3N0bWVzc2FnZT1mdW5jdGlvbigpe3JldHVybiEhYS5wb3N0TWVzc2FnZX0scy53ZWJzcWxkYXRhYmFzZT1mdW5jdGlvbigpe3JldHVybiEhYS5vcGVuRGF0YWJhc2V9LHMuaW5kZXhlZERCPWZ1bmN0aW9uKCl7cmV0dXJuISFKKFwiaW5kZXhlZERCXCIsYSl9LHMuaGFzaGNoYW5nZT1mdW5jdGlvbigpe3JldHVybiBBKFwiaGFzaGNoYW5nZVwiLGEpJiYoYi5kb2N1bWVudE1vZGU9PT1jfHxiLmRvY3VtZW50TW9kZT43KX0scy5oaXN0b3J5PWZ1bmN0aW9uKCl7cmV0dXJuISFhLmhpc3RvcnkmJiEhaGlzdG9yeS5wdXNoU3RhdGV9LHMuZHJhZ2FuZGRyb3A9ZnVuY3Rpb24oKXt2YXIgYT1iLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuXCJkcmFnZ2FibGVcImluIGF8fFwib25kcmFnc3RhcnRcImluIGEmJlwib25kcm9wXCJpbiBhfSxzLndlYnNvY2tldHM9ZnVuY3Rpb24oKXtyZXR1cm5cIldlYlNvY2tldFwiaW4gYXx8XCJNb3pXZWJTb2NrZXRcImluIGF9LHMucmdiYT1mdW5jdGlvbigpe3JldHVybiBEKFwiYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE1MCwyNTUsMTUwLC41KVwiKSxHKGouYmFja2dyb3VuZENvbG9yLFwicmdiYVwiKX0scy5oc2xhPWZ1bmN0aW9uKCl7cmV0dXJuIEQoXCJiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMTIwLDQwJSwxMDAlLC41KVwiKSxHKGouYmFja2dyb3VuZENvbG9yLFwicmdiYVwiKXx8RyhqLmJhY2tncm91bmRDb2xvcixcImhzbGFcIil9LHMubXVsdGlwbGViZ3M9ZnVuY3Rpb24oKXtyZXR1cm4gRChcImJhY2tncm91bmQ6dXJsKGh0dHBzOi8vKSx1cmwoaHR0cHM6Ly8pLHJlZCB1cmwoaHR0cHM6Ly8pXCIpLC8odXJsXFxzKlxcKC4qPyl7M30vLnRlc3Qoai5iYWNrZ3JvdW5kKX0scy5iYWNrZ3JvdW5kc2l6ZT1mdW5jdGlvbigpe3JldHVybiBKKFwiYmFja2dyb3VuZFNpemVcIil9LHMuYm9yZGVyaW1hZ2U9ZnVuY3Rpb24oKXtyZXR1cm4gSihcImJvcmRlckltYWdlXCIpfSxzLmJvcmRlcnJhZGl1cz1mdW5jdGlvbigpe3JldHVybiBKKFwiYm9yZGVyUmFkaXVzXCIpfSxzLmJveHNoYWRvdz1mdW5jdGlvbigpe3JldHVybiBKKFwiYm94U2hhZG93XCIpfSxzLnRleHRzaGFkb3c9ZnVuY3Rpb24oKXtyZXR1cm4gYi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlLnRleHRTaGFkb3c9PT1cIlwifSxzLm9wYWNpdHk9ZnVuY3Rpb24oKXtyZXR1cm4gRShcIm9wYWNpdHk6LjU1XCIpLC9eMC41NSQvLnRlc3Qoai5vcGFjaXR5KX0scy5jc3NhbmltYXRpb25zPWZ1bmN0aW9uKCl7cmV0dXJuIEooXCJhbmltYXRpb25OYW1lXCIpfSxzLmNzc2NvbHVtbnM9ZnVuY3Rpb24oKXtyZXR1cm4gSihcImNvbHVtbkNvdW50XCIpfSxzLmNzc2dyYWRpZW50cz1mdW5jdGlvbigpe3ZhciBhPVwiYmFja2dyb3VuZC1pbWFnZTpcIixiPVwiZ3JhZGllbnQobGluZWFyLGxlZnQgdG9wLHJpZ2h0IGJvdHRvbSxmcm9tKCM5ZjkpLHRvKHdoaXRlKSk7XCIsYz1cImxpbmVhci1ncmFkaWVudChsZWZ0IHRvcCwjOWY5LCB3aGl0ZSk7XCI7cmV0dXJuIEQoKGErXCItd2Via2l0LSBcIi5zcGxpdChcIiBcIikuam9pbihiK2EpK24uam9pbihjK2EpKS5zbGljZSgwLC1hLmxlbmd0aCkpLEcoai5iYWNrZ3JvdW5kSW1hZ2UsXCJncmFkaWVudFwiKX0scy5jc3NyZWZsZWN0aW9ucz1mdW5jdGlvbigpe3JldHVybiBKKFwiYm94UmVmbGVjdFwiKX0scy5jc3N0cmFuc2Zvcm1zPWZ1bmN0aW9uKCl7cmV0dXJuISFKKFwidHJhbnNmb3JtXCIpfSxzLmNzc3RyYW5zZm9ybXMzZD1mdW5jdGlvbigpe3ZhciBhPSEhSihcInBlcnNwZWN0aXZlXCIpO3JldHVybiBhJiZcIndlYmtpdFBlcnNwZWN0aXZlXCJpbiBnLnN0eWxlJiZ5KFwiQG1lZGlhICh0cmFuc2Zvcm0tM2QpLCgtd2Via2l0LXRyYW5zZm9ybS0zZCl7I21vZGVybml6cntsZWZ0OjlweDtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6M3B4O319XCIsZnVuY3Rpb24oYixjKXthPWIub2Zmc2V0TGVmdD09PTkmJmIub2Zmc2V0SGVpZ2h0PT09M30pLGF9LHMuY3NzdHJhbnNpdGlvbnM9ZnVuY3Rpb24oKXtyZXR1cm4gSihcInRyYW5zaXRpb25cIil9LHMuZm9udGZhY2U9ZnVuY3Rpb24oKXt2YXIgYTtyZXR1cm4geSgnQGZvbnQtZmFjZSB7Zm9udC1mYW1pbHk6XCJmb250XCI7c3JjOnVybChcImh0dHBzOi8vXCIpfScsZnVuY3Rpb24oYyxkKXt2YXIgZT1iLmdldEVsZW1lbnRCeUlkKFwic21vZGVybml6clwiKSxmPWUuc2hlZXR8fGUuc3R5bGVTaGVldCxnPWY/Zi5jc3NSdWxlcyYmZi5jc3NSdWxlc1swXT9mLmNzc1J1bGVzWzBdLmNzc1RleHQ6Zi5jc3NUZXh0fHxcIlwiOlwiXCI7YT0vc3JjL2kudGVzdChnKSYmZy5pbmRleE9mKGQuc3BsaXQoXCIgXCIpWzBdKT09PTB9KSxhfSxzLmdlbmVyYXRlZGNvbnRlbnQ9ZnVuY3Rpb24oKXt2YXIgYTtyZXR1cm4geShbXCIjXCIsaCxcIntmb250OjAvMCBhfSNcIixoLCc6YWZ0ZXJ7Y29udGVudDpcIicsbCwnXCI7dmlzaWJpbGl0eTpoaWRkZW47Zm9udDozcHgvMSBhfSddLmpvaW4oXCJcIiksZnVuY3Rpb24oYil7YT1iLm9mZnNldEhlaWdodD49M30pLGF9LHMudmlkZW89ZnVuY3Rpb24oKXt2YXIgYT1iLmNyZWF0ZUVsZW1lbnQoXCJ2aWRlb1wiKSxjPSExO3RyeXtpZihjPSEhYS5jYW5QbGF5VHlwZSljPW5ldyBCb29sZWFuKGMpLGMub2dnPWEuY2FuUGxheVR5cGUoJ3ZpZGVvL29nZzsgY29kZWNzPVwidGhlb3JhXCInKS5yZXBsYWNlKC9ebm8kLyxcIlwiKSxjLmgyNjQ9YS5jYW5QbGF5VHlwZSgndmlkZW8vbXA0OyBjb2RlY3M9XCJhdmMxLjQyRTAxRVwiJykucmVwbGFjZSgvXm5vJC8sXCJcIiksYy53ZWJtPWEuY2FuUGxheVR5cGUoJ3ZpZGVvL3dlYm07IGNvZGVjcz1cInZwOCwgdm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLyxcIlwiKX1jYXRjaChkKXt9cmV0dXJuIGN9LHMuYXVkaW89ZnVuY3Rpb24oKXt2YXIgYT1iLmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiKSxjPSExO3RyeXtpZihjPSEhYS5jYW5QbGF5VHlwZSljPW5ldyBCb29sZWFuKGMpLGMub2dnPWEuY2FuUGxheVR5cGUoJ2F1ZGlvL29nZzsgY29kZWNzPVwidm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLyxcIlwiKSxjLm1wMz1hLmNhblBsYXlUeXBlKFwiYXVkaW8vbXBlZztcIikucmVwbGFjZSgvXm5vJC8sXCJcIiksYy53YXY9YS5jYW5QbGF5VHlwZSgnYXVkaW8vd2F2OyBjb2RlY3M9XCIxXCInKS5yZXBsYWNlKC9ebm8kLyxcIlwiKSxjLm00YT0oYS5jYW5QbGF5VHlwZShcImF1ZGlvL3gtbTRhO1wiKXx8YS5jYW5QbGF5VHlwZShcImF1ZGlvL2FhYztcIikpLnJlcGxhY2UoL15ubyQvLFwiXCIpfWNhdGNoKGQpe31yZXR1cm4gY30scy5sb2NhbHN0b3JhZ2U9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGgsaCksbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oaCksITB9Y2F0Y2goYSl7cmV0dXJuITF9fSxzLnNlc3Npb25zdG9yYWdlPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGgsaCksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShoKSwhMH1jYXRjaChhKXtyZXR1cm4hMX19LHMud2Vid29ya2Vycz1mdW5jdGlvbigpe3JldHVybiEhYS5Xb3JrZXJ9LHMuYXBwbGljYXRpb25jYWNoZT1mdW5jdGlvbigpe3JldHVybiEhYS5hcHBsaWNhdGlvbkNhY2hlfSxzLnN2Zz1mdW5jdGlvbigpe3JldHVybiEhYi5jcmVhdGVFbGVtZW50TlMmJiEhYi5jcmVhdGVFbGVtZW50TlMoci5zdmcsXCJzdmdcIikuY3JlYXRlU1ZHUmVjdH0scy5pbmxpbmVzdmc9ZnVuY3Rpb24oKXt2YXIgYT1iLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPHN2Zy8+XCIsKGEuZmlyc3RDaGlsZCYmYS5maXJzdENoaWxkLm5hbWVzcGFjZVVSSSk9PXIuc3ZnfSxzLnNtaWw9ZnVuY3Rpb24oKXtyZXR1cm4hIWIuY3JlYXRlRWxlbWVudE5TJiYvU1ZHQW5pbWF0ZS8udGVzdChtLmNhbGwoYi5jcmVhdGVFbGVtZW50TlMoci5zdmcsXCJhbmltYXRlXCIpKSl9LHMuc3ZnY2xpcHBhdGhzPWZ1bmN0aW9uKCl7cmV0dXJuISFiLmNyZWF0ZUVsZW1lbnROUyYmL1NWR0NsaXBQYXRoLy50ZXN0KG0uY2FsbChiLmNyZWF0ZUVsZW1lbnROUyhyLnN2ZyxcImNsaXBQYXRoXCIpKSl9O2Zvcih2YXIgTCBpbiBzKUMocyxMKSYmKHg9TC50b0xvd2VyQ2FzZSgpLGVbeF09c1tMXSgpLHYucHVzaCgoZVt4XT9cIlwiOlwibm8tXCIpK3gpKTtyZXR1cm4gZS5pbnB1dHx8SygpLGUuYWRkVGVzdD1mdW5jdGlvbihhLGIpe2lmKHR5cGVvZiBhPT1cIm9iamVjdFwiKWZvcih2YXIgZCBpbiBhKUMoYSxkKSYmZS5hZGRUZXN0KGQsYVtkXSk7ZWxzZXthPWEudG9Mb3dlckNhc2UoKTtpZihlW2FdIT09YylyZXR1cm4gZTtiPXR5cGVvZiBiPT1cImZ1bmN0aW9uXCI/YigpOmIsdHlwZW9mIGYhPVwidW5kZWZpbmVkXCImJmYmJihnLmNsYXNzTmFtZSs9XCIgXCIrKGI/XCJcIjpcIm5vLVwiKSthKSxlW2FdPWJ9cmV0dXJuIGV9LEQoXCJcIiksaT1rPW51bGwsZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBsKGEsYil7dmFyIGM9YS5jcmVhdGVFbGVtZW50KFwicFwiKSxkPWEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdfHxhLmRvY3VtZW50RWxlbWVudDtyZXR1cm4gYy5pbm5lckhUTUw9XCJ4PHN0eWxlPlwiK2IrXCI8L3N0eWxlPlwiLGQuaW5zZXJ0QmVmb3JlKGMubGFzdENoaWxkLGQuZmlyc3RDaGlsZCl9ZnVuY3Rpb24gbSgpe3ZhciBhPXMuZWxlbWVudHM7cmV0dXJuIHR5cGVvZiBhPT1cInN0cmluZ1wiP2Euc3BsaXQoXCIgXCIpOmF9ZnVuY3Rpb24gbihhKXt2YXIgYj1qW2FbaF1dO3JldHVybiBifHwoYj17fSxpKyssYVtoXT1pLGpbaV09YiksYn1mdW5jdGlvbiBvKGEsYyxkKXtjfHwoYz1iKTtpZihrKXJldHVybiBjLmNyZWF0ZUVsZW1lbnQoYSk7ZHx8KGQ9bihjKSk7dmFyIGc7cmV0dXJuIGQuY2FjaGVbYV0/Zz1kLmNhY2hlW2FdLmNsb25lTm9kZSgpOmYudGVzdChhKT9nPShkLmNhY2hlW2FdPWQuY3JlYXRlRWxlbShhKSkuY2xvbmVOb2RlKCk6Zz1kLmNyZWF0ZUVsZW0oYSksZy5jYW5IYXZlQ2hpbGRyZW4mJiFlLnRlc3QoYSkmJiFnLnRhZ1Vybj9kLmZyYWcuYXBwZW5kQ2hpbGQoZyk6Z31mdW5jdGlvbiBwKGEsYyl7YXx8KGE9Yik7aWYoaylyZXR1cm4gYS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7Yz1jfHxuKGEpO3ZhciBkPWMuZnJhZy5jbG9uZU5vZGUoKSxlPTAsZj1tKCksZz1mLmxlbmd0aDtmb3IoO2U8ZztlKyspZC5jcmVhdGVFbGVtZW50KGZbZV0pO3JldHVybiBkfWZ1bmN0aW9uIHEoYSxiKXtiLmNhY2hlfHwoYi5jYWNoZT17fSxiLmNyZWF0ZUVsZW09YS5jcmVhdGVFbGVtZW50LGIuY3JlYXRlRnJhZz1hLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQsYi5mcmFnPWIuY3JlYXRlRnJhZygpKSxhLmNyZWF0ZUVsZW1lbnQ9ZnVuY3Rpb24oYyl7cmV0dXJuIHMuc2hpdk1ldGhvZHM/byhjLGEsYik6Yi5jcmVhdGVFbGVtKGMpfSxhLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQ9RnVuY3Rpb24oXCJoLGZcIixcInJldHVybiBmdW5jdGlvbigpe3ZhciBuPWYuY2xvbmVOb2RlKCksYz1uLmNyZWF0ZUVsZW1lbnQ7aC5zaGl2TWV0aG9kcyYmKFwiK20oKS5qb2luKCkucmVwbGFjZSgvW1xcd1xcLV0rL2csZnVuY3Rpb24oYSl7cmV0dXJuIGIuY3JlYXRlRWxlbShhKSxiLmZyYWcuY3JlYXRlRWxlbWVudChhKSwnYyhcIicrYSsnXCIpJ30pK1wiKTtyZXR1cm4gbn1cIikocyxiLmZyYWcpfWZ1bmN0aW9uIHIoYSl7YXx8KGE9Yik7dmFyIGM9bihhKTtyZXR1cm4gcy5zaGl2Q1NTJiYhZyYmIWMuaGFzQ1NTJiYoYy5oYXNDU1M9ISFsKGEsXCJhcnRpY2xlLGFzaWRlLGRpYWxvZyxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsaGVhZGVyLGhncm91cCxtYWluLG5hdixzZWN0aW9ue2Rpc3BsYXk6YmxvY2t9bWFya3tiYWNrZ3JvdW5kOiNGRjA7Y29sb3I6IzAwMH10ZW1wbGF0ZXtkaXNwbGF5Om5vbmV9XCIpKSxrfHxxKGEsYyksYX12YXIgYz1cIjMuNy4wXCIsZD1hLmh0bWw1fHx7fSxlPS9ePHxeKD86YnV0dG9ufG1hcHxzZWxlY3R8dGV4dGFyZWF8b2JqZWN0fGlmcmFtZXxvcHRpb258b3B0Z3JvdXApJC9pLGY9L14oPzphfGJ8Y29kZXxkaXZ8ZmllbGRzZXR8aDF8aDJ8aDN8aDR8aDV8aDZ8aXxsYWJlbHxsaXxvbHxwfHF8c3BhbnxzdHJvbmd8c3R5bGV8dGFibGV8dGJvZHl8dGR8dGh8dHJ8dWwpJC9pLGcsaD1cIl9odG1sNXNoaXZcIixpPTAsaj17fSxrOyhmdW5jdGlvbigpe3RyeXt2YXIgYT1iLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2EuaW5uZXJIVE1MPVwiPHh5ej48L3h5ej5cIixnPVwiaGlkZGVuXCJpbiBhLGs9YS5jaGlsZE5vZGVzLmxlbmd0aD09MXx8ZnVuY3Rpb24oKXtiLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3ZhciBhPWIuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO3JldHVybiB0eXBlb2YgYS5jbG9uZU5vZGU9PVwidW5kZWZpbmVkXCJ8fHR5cGVvZiBhLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQ9PVwidW5kZWZpbmVkXCJ8fHR5cGVvZiBhLmNyZWF0ZUVsZW1lbnQ9PVwidW5kZWZpbmVkXCJ9KCl9Y2F0Y2goYyl7Zz0hMCxrPSEwfX0pKCk7dmFyIHM9e2VsZW1lbnRzOmQuZWxlbWVudHN8fFwiYWJiciBhcnRpY2xlIGFzaWRlIGF1ZGlvIGJkaSBjYW52YXMgZGF0YSBkYXRhbGlzdCBkZXRhaWxzIGRpYWxvZyBmaWdjYXB0aW9uIGZpZ3VyZSBmb290ZXIgaGVhZGVyIGhncm91cCBtYWluIG1hcmsgbWV0ZXIgbmF2IG91dHB1dCBwcm9ncmVzcyBzZWN0aW9uIHN1bW1hcnkgdGVtcGxhdGUgdGltZSB2aWRlb1wiLHZlcnNpb246YyxzaGl2Q1NTOmQuc2hpdkNTUyE9PSExLHN1cHBvcnRzVW5rbm93bkVsZW1lbnRzOmssc2hpdk1ldGhvZHM6ZC5zaGl2TWV0aG9kcyE9PSExLHR5cGU6XCJkZWZhdWx0XCIsc2hpdkRvY3VtZW50OnIsY3JlYXRlRWxlbWVudDpvLGNyZWF0ZURvY3VtZW50RnJhZ21lbnQ6cH07YS5odG1sNT1zLHIoYil9KHRoaXMsYiksZS5fdmVyc2lvbj1kLGUuX3ByZWZpeGVzPW4sZS5fZG9tUHJlZml4ZXM9cSxlLl9jc3NvbVByZWZpeGVzPXAsZS5tcT16LGUuaGFzRXZlbnQ9QSxlLnRlc3RQcm9wPWZ1bmN0aW9uKGEpe3JldHVybiBIKFthXSl9LGUudGVzdEFsbFByb3BzPUosZS50ZXN0U3R5bGVzPXksZy5jbGFzc05hbWU9Zy5jbGFzc05hbWUucmVwbGFjZSgvKF58XFxzKW5vLWpzKFxcc3wkKS8sXCIkMSQyXCIpKyhmP1wiIGpzIFwiK3Yuam9pbihcIiBcIik6XCJcIiksZX0odGhpcyx0aGlzLmRvY3VtZW50KSxmdW5jdGlvbihhLGIsYyl7ZnVuY3Rpb24gZChhKXtyZXR1cm5cIltvYmplY3QgRnVuY3Rpb25dXCI9PW8uY2FsbChhKX1mdW5jdGlvbiBlKGEpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBhfWZ1bmN0aW9uIGYoKXt9ZnVuY3Rpb24gZyhhKXtyZXR1cm4hYXx8XCJsb2FkZWRcIj09YXx8XCJjb21wbGV0ZVwiPT1hfHxcInVuaW5pdGlhbGl6ZWRcIj09YX1mdW5jdGlvbiBoKCl7dmFyIGE9cC5zaGlmdCgpO3E9MSxhP2EudD9tKGZ1bmN0aW9uKCl7KFwiY1wiPT1hLnQ/Qi5pbmplY3RDc3M6Qi5pbmplY3RKcykoYS5zLDAsYS5hLGEueCxhLmUsMSl9LDApOihhKCksaCgpKTpxPTB9ZnVuY3Rpb24gaShhLGMsZCxlLGYsaSxqKXtmdW5jdGlvbiBrKGIpe2lmKCFvJiZnKGwucmVhZHlTdGF0ZSkmJih1LnI9bz0xLCFxJiZoKCksbC5vbmxvYWQ9bC5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxiKSl7XCJpbWdcIiE9YSYmbShmdW5jdGlvbigpe3QucmVtb3ZlQ2hpbGQobCl9LDUwKTtmb3IodmFyIGQgaW4geVtjXSl5W2NdLmhhc093blByb3BlcnR5KGQpJiZ5W2NdW2RdLm9ubG9hZCgpfX12YXIgaj1qfHxCLmVycm9yVGltZW91dCxsPWIuY3JlYXRlRWxlbWVudChhKSxvPTAscj0wLHU9e3Q6ZCxzOmMsZTpmLGE6aSx4Omp9OzE9PT15W2NdJiYocj0xLHlbY109W10pLFwib2JqZWN0XCI9PWE/bC5kYXRhPWM6KGwuc3JjPWMsbC50eXBlPWEpLGwud2lkdGg9bC5oZWlnaHQ9XCIwXCIsbC5vbmVycm9yPWwub25sb2FkPWwub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7ay5jYWxsKHRoaXMscil9LHAuc3BsaWNlKGUsMCx1KSxcImltZ1wiIT1hJiYocnx8Mj09PXlbY10/KHQuaW5zZXJ0QmVmb3JlKGwscz9udWxsOm4pLG0oayxqKSk6eVtjXS5wdXNoKGwpKX1mdW5jdGlvbiBqKGEsYixjLGQsZil7cmV0dXJuIHE9MCxiPWJ8fFwialwiLGUoYSk/aShcImNcIj09Yj92OnUsYSxiLHRoaXMuaSsrLGMsZCxmKToocC5zcGxpY2UodGhpcy5pKyssMCxhKSwxPT1wLmxlbmd0aCYmaCgpKSx0aGlzfWZ1bmN0aW9uIGsoKXt2YXIgYT1CO3JldHVybiBhLmxvYWRlcj17bG9hZDpqLGk6MH0sYX12YXIgbD1iLmRvY3VtZW50RWxlbWVudCxtPWEuc2V0VGltZW91dCxuPWIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIilbMF0sbz17fS50b1N0cmluZyxwPVtdLHE9MCxyPVwiTW96QXBwZWFyYW5jZVwiaW4gbC5zdHlsZSxzPXImJiEhYi5jcmVhdGVSYW5nZSgpLmNvbXBhcmVOb2RlLHQ9cz9sOm4ucGFyZW50Tm9kZSxsPWEub3BlcmEmJlwiW29iamVjdCBPcGVyYV1cIj09by5jYWxsKGEub3BlcmEpLGw9ISFiLmF0dGFjaEV2ZW50JiYhbCx1PXI/XCJvYmplY3RcIjpsP1wic2NyaXB0XCI6XCJpbWdcIix2PWw/XCJzY3JpcHRcIjp1LHc9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24oYSl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT1vLmNhbGwoYSl9LHg9W10seT17fSx6PXt0aW1lb3V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIGIubGVuZ3RoJiYoYS50aW1lb3V0PWJbMF0pLGF9fSxBLEI7Qj1mdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEpe3ZhciBhPWEuc3BsaXQoXCIhXCIpLGI9eC5sZW5ndGgsYz1hLnBvcCgpLGQ9YS5sZW5ndGgsYz17dXJsOmMsb3JpZ1VybDpjLHByZWZpeGVzOmF9LGUsZixnO2ZvcihmPTA7ZjxkO2YrKylnPWFbZl0uc3BsaXQoXCI9XCIpLChlPXpbZy5zaGlmdCgpXSkmJihjPWUoYyxnKSk7Zm9yKGY9MDtmPGI7ZisrKWM9eFtmXShjKTtyZXR1cm4gY31mdW5jdGlvbiBnKGEsZSxmLGcsaCl7dmFyIGk9YihhKSxqPWkuYXV0b0NhbGxiYWNrO2kudXJsLnNwbGl0KFwiLlwiKS5wb3AoKS5zcGxpdChcIj9cIikuc2hpZnQoKSxpLmJ5cGFzc3x8KGUmJihlPWQoZSk/ZTplW2FdfHxlW2ddfHxlW2Euc3BsaXQoXCIvXCIpLnBvcCgpLnNwbGl0KFwiP1wiKVswXV0pLGkuaW5zdGVhZD9pLmluc3RlYWQoYSxlLGYsZyxoKTooeVtpLnVybF0/aS5ub2V4ZWM9ITA6eVtpLnVybF09MSxmLmxvYWQoaS51cmwsaS5mb3JjZUNTU3x8IWkuZm9yY2VKUyYmXCJjc3NcIj09aS51cmwuc3BsaXQoXCIuXCIpLnBvcCgpLnNwbGl0KFwiP1wiKS5zaGlmdCgpP1wiY1wiOmMsaS5ub2V4ZWMsaS5hdHRycyxpLnRpbWVvdXQpLChkKGUpfHxkKGopKSYmZi5sb2FkKGZ1bmN0aW9uKCl7aygpLGUmJmUoaS5vcmlnVXJsLGgsZyksaiYmaihpLm9yaWdVcmwsaCxnKSx5W2kudXJsXT0yfSkpKX1mdW5jdGlvbiBoKGEsYil7ZnVuY3Rpb24gYyhhLGMpe2lmKGEpe2lmKGUoYSkpY3x8KGo9ZnVuY3Rpb24oKXt2YXIgYT1bXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7ay5hcHBseSh0aGlzLGEpLGwoKX0pLGcoYSxqLGIsMCxoKTtlbHNlIGlmKE9iamVjdChhKT09PWEpZm9yKG4gaW4gbT1mdW5jdGlvbigpe3ZhciBiPTAsYztmb3IoYyBpbiBhKWEuaGFzT3duUHJvcGVydHkoYykmJmIrKztyZXR1cm4gYn0oKSxhKWEuaGFzT3duUHJvcGVydHkobikmJighYyYmIS0tbSYmKGQoaik/aj1mdW5jdGlvbigpe3ZhciBhPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtrLmFwcGx5KHRoaXMsYSksbCgpfTpqW25dPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe3ZhciBiPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTthJiZhLmFwcGx5KHRoaXMsYiksbCgpfX0oa1tuXSkpLGcoYVtuXSxqLGIsbixoKSl9ZWxzZSFjJiZsKCl9dmFyIGg9ISFhLnRlc3QsaT1hLmxvYWR8fGEuYm90aCxqPWEuY2FsbGJhY2t8fGYsaz1qLGw9YS5jb21wbGV0ZXx8ZixtLG47YyhoP2EueWVwOmEubm9wZSwhIWkpLGkmJmMoaSl9dmFyIGksaixsPXRoaXMueWVwbm9wZS5sb2FkZXI7aWYoZShhKSlnKGEsMCxsLDApO2Vsc2UgaWYodyhhKSlmb3IoaT0wO2k8YS5sZW5ndGg7aSsrKWo9YVtpXSxlKGopP2coaiwwLGwsMCk6dyhqKT9CKGopOk9iamVjdChqKT09PWomJmgoaixsKTtlbHNlIE9iamVjdChhKT09PWEmJmgoYSxsKX0sQi5hZGRQcmVmaXg9ZnVuY3Rpb24oYSxiKXt6W2FdPWJ9LEIuYWRkRmlsdGVyPWZ1bmN0aW9uKGEpe3gucHVzaChhKX0sQi5lcnJvclRpbWVvdXQ9MWU0LG51bGw9PWIucmVhZHlTdGF0ZSYmYi5hZGRFdmVudExpc3RlbmVyJiYoYi5yZWFkeVN0YXRlPVwibG9hZGluZ1wiLGIuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixBPWZ1bmN0aW9uKCl7Yi5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEEsMCksYi5yZWFkeVN0YXRlPVwiY29tcGxldGVcIn0sMCkpLGEueWVwbm9wZT1rKCksYS55ZXBub3BlLmV4ZWN1dGVTdGFjaz1oLGEueWVwbm9wZS5pbmplY3RKcz1mdW5jdGlvbihhLGMsZCxlLGksail7dmFyIGs9Yi5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpLGwsbyxlPWV8fEIuZXJyb3JUaW1lb3V0O2suc3JjPWE7Zm9yKG8gaW4gZClrLnNldEF0dHJpYnV0ZShvLGRbb10pO2M9aj9oOmN8fGYsay5vbnJlYWR5c3RhdGVjaGFuZ2U9ay5vbmxvYWQ9ZnVuY3Rpb24oKXshbCYmZyhrLnJlYWR5U3RhdGUpJiYobD0xLGMoKSxrLm9ubG9hZD1rLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsKX0sbShmdW5jdGlvbigpe2x8fChsPTEsYygxKSl9LGUpLGk/ay5vbmxvYWQoKTpuLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGssbil9LGEueWVwbm9wZS5pbmplY3RDc3M9ZnVuY3Rpb24oYSxjLGQsZSxnLGkpe3ZhciBlPWIuY3JlYXRlRWxlbWVudChcImxpbmtcIiksaixjPWk/aDpjfHxmO2UuaHJlZj1hLGUucmVsPVwic3R5bGVzaGVldFwiLGUudHlwZT1cInRleHQvY3NzXCI7Zm9yKGogaW4gZCllLnNldEF0dHJpYnV0ZShqLGRbal0pO2d8fChuLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsbiksbShjLDApKX19KHRoaXMsZG9jdW1lbnQpLE1vZGVybml6ci5sb2FkPWZ1bmN0aW9uKCl7eWVwbm9wZS5hcHBseSh3aW5kb3csW10uc2xpY2UuY2FsbChhcmd1bWVudHMsMCkpfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
