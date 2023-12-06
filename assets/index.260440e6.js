import{a as f,j as S,p as g,r as p}from"./index.20e87095.js";import{C as T}from"./Card.f09d8ef4.js";const _=({name:e,label:r="Browse",onChange:t,placeholder:n="Choose a file or drop it here...",multiple:a,preview:o,className:s="custom-class",id:u,selectedFile:d,badge:c,selectedFiles:m})=>f("div",{children:f("div",{className:"filegroup",children:S("label",{children:[f("input",{type:"file",onChange:t,className:"bg-red-400 w-full hidden",name:e,id:u,multiple:a,placeholder:n}),S("div",{className:`w-full h-[40px] file-control flex items-center ${s}`,children:[!a&&S("span",{className:"flex-1 overflow-hidden text-ellipsis whitespace-nowrap",children:[d&&f("span",{className:c?" badge-title":"text-slate-900 dark:text-white",children:d.name}),!d&&f("span",{className:"text-slate-400",children:n})]}),a&&S("span",{className:"flex-1 overflow-hidden text-ellipsis whitespace-nowrap",children:[m.length>0&&f("span",{className:c?" badge-title":"text-slate-900 dark:text-white",children:m.length>0?m.length+" files selected":""}),m.length===0&&f("span",{className:"text-slate-400",children:n})]}),f("span",{className:"file-name flex-none cursor-pointer border-l px-4 border-slate-200 dark:border-slate-700 h-full inline-flex items-center bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-base rounded-tr rounded-br font-normal",children:r})]}),!a&&o&&d&&f("div",{className:"w-[200px] h-[200px] mx-auto mt-6  ",children:f("img",{src:d?URL.createObjectURL(d):"",className:"w-full  h-full block rounded object-contain border p-2  border-slate-200",alt:d==null?void 0:d.name})}),a&&o&&m.length>0&&f("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:m.map((v,x)=>f("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:f("img",{src:v?URL.createObjectURL(v):"",className:"object-cover w-full h-full rounded",alt:v==null?void 0:v.name})},x))})]})})});function N(e,r,t,n){function a(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function u(m){try{c(n.next(m))}catch(v){s(v)}}function d(m){try{c(n.throw(m))}catch(v){s(v)}}function c(m){m.done?o(m.value):a(m.value).then(u,d)}c((n=n.apply(e,r||[])).next())})}function $(e,r){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,a,o,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(c){return function(m){return d([c,m])}}function d(c){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(t=0)),t;)try{if(n=1,a&&(o=c[0]&2?a.return:c[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,c[1])).done)return o;switch(a=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,a=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){t.label=c[1];break}if(c[0]===6&&t.label<o[1]){t.label=o[1],o=c;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(c);break}o[2]&&t.ops.pop(),t.trys.pop();continue}c=r.call(e,t)}catch(m){c=[6,m],a=0}finally{n=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function $e(e,r){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var n=t.call(e),a,o=[],s;try{for(;(r===void 0||r-- >0)&&!(a=n.next()).done;)o.push(a.value)}catch(u){s={error:u}}finally{try{a&&!a.done&&(t=n.return)&&t.call(n)}finally{if(s)throw s.error}}return o}function Ke(e,r,t){if(t||arguments.length===2)for(var n=0,a=r.length,o;n<a;n++)(o||!(n in r))&&(o||(o=Array.prototype.slice.call(r,0,n)),o[n]=r[n]);return e.concat(o||Array.prototype.slice.call(r))}var gr=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function U(e,r){var t=vr(e);if(typeof t.path!="string"){var n=e.webkitRelativePath;Object.defineProperty(t,"path",{value:typeof r=="string"?r:typeof n=="string"&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}function vr(e){var r=e.name,t=r&&r.lastIndexOf(".")!==-1;if(t&&!e.type){var n=r.split(".").pop().toLowerCase(),a=gr.get(n);a&&Object.defineProperty(e,"type",{value:a,writable:!1,configurable:!1,enumerable:!0})}return e}var hr=[".DS_Store","Thumbs.db"];function br(e){return N(this,void 0,void 0,function(){return $(this,function(r){return ee(e)&&yr(e.dataTransfer)?[2,Ar(e.dataTransfer,e.type)]:xr(e)?[2,Dr(e)]:Array.isArray(e)&&e.every(function(t){return"getFile"in t&&typeof t.getFile=="function"})?[2,wr(e)]:[2,[]]})})}function yr(e){return ee(e)}function xr(e){return ee(e)&&ee(e.target)}function ee(e){return typeof e=="object"&&e!==null}function Dr(e){return be(e.target.files).map(function(r){return U(r)})}function wr(e){return N(this,void 0,void 0,function(){var r;return $(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(n){return n.getFile()}))];case 1:return r=t.sent(),[2,r.map(function(n){return U(n)})]}})})}function Ar(e,r){return N(this,void 0,void 0,function(){var t,n;return $(this,function(a){switch(a.label){case 0:return e.items?(t=be(e.items).filter(function(o){return o.kind==="file"}),r!=="drop"?[2,t]:[4,Promise.all(t.map(Fr))]):[3,2];case 1:return n=a.sent(),[2,We(Qe(n))];case 2:return[2,We(be(e.files).map(function(o){return U(o)}))]}})})}function We(e){return e.filter(function(r){return hr.indexOf(r.name)===-1})}function be(e){if(e===null)return[];for(var r=[],t=0;t<e.length;t++){var n=e[t];r.push(n)}return r}function Fr(e){if(typeof e.webkitGetAsEntry!="function")return Be(e);var r=e.webkitGetAsEntry();return r&&r.isDirectory?Xe(r):Be(e)}function Qe(e){return e.reduce(function(r,t){return Ke(Ke([],$e(r),!1),$e(Array.isArray(t)?Qe(t):[t]),!1)},[])}function Be(e){var r=e.getAsFile();if(!r)return Promise.reject("".concat(e," is not a File"));var t=U(r);return Promise.resolve(t)}function Or(e){return N(this,void 0,void 0,function(){return $(this,function(r){return[2,e.isDirectory?Xe(e):Er(e)]})})}function Xe(e){var r=e.createReader();return new Promise(function(t,n){var a=[];function o(){var s=this;r.readEntries(function(u){return N(s,void 0,void 0,function(){var d,c,m;return $(this,function(v){switch(v.label){case 0:if(u.length)return[3,5];v.label=1;case 1:return v.trys.push([1,3,,4]),[4,Promise.all(a)];case 2:return d=v.sent(),t(d),[3,4];case 3:return c=v.sent(),n(c),[3,4];case 4:return[3,6];case 5:m=Promise.all(u.map(Or)),a.push(m),o(),v.label=6;case 6:return[2]}})})},function(u){n(u)})}o()})}function Er(e){return N(this,void 0,void 0,function(){return $(this,function(r){return[2,new Promise(function(t,n){e.file(function(a){var o=U(a,e.fullPath);t(o)},function(a){n(a)})})]})})}var jr=function(e,r){if(e&&r){var t=Array.isArray(r)?r:r.split(","),n=e.name||"",a=(e.type||"").toLowerCase(),o=a.replace(/\/.*$/,"");return t.some(function(s){var u=s.trim().toLowerCase();return u.charAt(0)==="."?n.toLowerCase().endsWith(u):u.endsWith("/*")?o===u.replace(/\/.*$/,""):a===u})}return!0};function He(e){return Sr(e)||_r(e)||rr(e)||Cr()}function Cr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _r(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Sr(e){if(Array.isArray(e))return ye(e)}function Ue(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function Ge(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Ue(Object(t),!0).forEach(function(n){er(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ue(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function er(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function H(e,r){return Tr(e)||kr(e,r)||rr(e,r)||Pr()}function Pr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rr(e,r){if(!!e){if(typeof e=="string")return ye(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ye(e,r)}}function ye(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function kr(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],a=!0,o=!1,s,u;try{for(t=t.call(e);!(a=(s=t.next()).done)&&(n.push(s.value),!(r&&n.length===r));a=!0);}catch(d){o=!0,u=d}finally{try{!a&&t.return!=null&&t.return()}finally{if(o)throw u}}return n}}function Tr(e){if(Array.isArray(e))return e}var Ir="file-invalid-type",Rr="file-too-large",Lr="file-too-small",Mr="too-many-files",zr=function(r){r=Array.isArray(r)&&r.length===1?r[0]:r;var t=Array.isArray(r)?"one of ".concat(r.join(", ")):r;return{code:Ir,message:"File type must be ".concat(t)}},Ye=function(r){return{code:Rr,message:"File is larger than ".concat(r," ").concat(r===1?"byte":"bytes")}},qe=function(r){return{code:Lr,message:"File is smaller than ".concat(r," ").concat(r===1?"byte":"bytes")}},Nr={code:Mr,message:"Too many files"};function tr(e,r){var t=e.type==="application/x-moz-file"||jr(e,r);return[t,t?null:zr(r)]}function nr(e,r,t){if(I(e.size))if(I(r)&&I(t)){if(e.size>t)return[!1,Ye(t)];if(e.size<r)return[!1,qe(r)]}else{if(I(r)&&e.size<r)return[!1,qe(r)];if(I(t)&&e.size>t)return[!1,Ye(t)]}return[!0,null]}function I(e){return e!=null}function $r(e){var r=e.files,t=e.accept,n=e.minSize,a=e.maxSize,o=e.multiple,s=e.maxFiles,u=e.validator;return!o&&r.length>1||o&&s>=1&&r.length>s?!1:r.every(function(d){var c=tr(d,t),m=H(c,1),v=m[0],x=nr(d,n,a),E=H(x,1),j=E[0],C=u?u(d):null;return v&&j&&!C})}function re(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function X(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(r){return r==="Files"||r==="application/x-moz-file"}):!!e.target&&!!e.target.files}function Je(e){e.preventDefault()}function Kr(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function Wr(e){return e.indexOf("Edge/")!==-1}function Br(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return Kr(e)||Wr(e)}function O(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(n){for(var a=arguments.length,o=new Array(a>1?a-1:0),s=1;s<a;s++)o[s-1]=arguments[s];return r.some(function(u){return!re(n)&&u&&u.apply(void 0,[n].concat(o)),re(n)})}}function Hr(){return"showOpenFilePicker"in window}function Ur(e){if(I(e)){var r=Object.entries(e).filter(function(t){var n=H(t,2),a=n[0],o=n[1],s=!0;return or(a)||(console.warn('Skipped "'.concat(a,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),s=!1),(!Array.isArray(o)||!o.every(ar))&&(console.warn('Skipped "'.concat(a,'" because an invalid file extension was provided.')),s=!1),s}).reduce(function(t,n){var a=H(n,2),o=a[0],s=a[1];return Ge(Ge({},t),{},er({},o,s))},{});return[{description:"Files",accept:r}]}return e}function Gr(e){if(I(e))return Object.entries(e).reduce(function(r,t){var n=H(t,2),a=n[0],o=n[1];return[].concat(He(r),[a],He(o))},[]).filter(function(r){return or(r)||ar(r)}).join(",")}function Yr(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function qr(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function or(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function ar(e){return/^.*\.[\w]+$/.test(e)}var Jr=["children"],Vr=["open"],Zr=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Qr=["refKey","onChange","onClick"];function Xr(e){return tt(e)||rt(e)||ir(e)||et()}function et(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function tt(e){if(Array.isArray(e))return xe(e)}function he(e,r){return at(e)||ot(e,r)||ir(e,r)||nt()}function nt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ir(e,r){if(!!e){if(typeof e=="string")return xe(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return xe(e,r)}}function xe(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function ot(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],a=!0,o=!1,s,u;try{for(t=t.call(e);!(a=(s=t.next()).done)&&(n.push(s.value),!(r&&n.length===r));a=!0);}catch(d){o=!0,u=d}finally{try{!a&&t.return!=null&&t.return()}finally{if(o)throw u}}return n}}function at(e){if(Array.isArray(e))return e}function Ve(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Ve(Object(t),!0).forEach(function(n){De(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ve(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function De(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function te(e,r){if(e==null)return{};var t=it(e,r),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(r.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(t[n]=e[n]))}return t}function it(e,r){if(e==null)return{};var t={},n=Object.keys(e),a,o;for(o=0;o<n.length;o++)a=n[o],!(r.indexOf(a)>=0)&&(t[a]=e[a]);return t}var Ae=p.exports.forwardRef(function(e,r){var t=e.children,n=te(e,Jr),a=lr(n),o=a.open,s=te(a,Vr);return p.exports.useImperativeHandle(r,function(){return{open:o}},[o]),f(p.exports.Fragment,{children:t(h(h({},s),{},{open:o}))})});Ae.displayName="Dropzone";var sr={disabled:!1,getFilesFromEvent:br,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Ae.defaultProps=sr;Ae.propTypes={children:g.exports.func,accept:g.exports.objectOf(g.exports.arrayOf(g.exports.string)),multiple:g.exports.bool,preventDropOnDocument:g.exports.bool,noClick:g.exports.bool,noKeyboard:g.exports.bool,noDrag:g.exports.bool,noDragEventsBubbling:g.exports.bool,minSize:g.exports.number,maxSize:g.exports.number,maxFiles:g.exports.number,disabled:g.exports.bool,getFilesFromEvent:g.exports.func,onFileDialogCancel:g.exports.func,onFileDialogOpen:g.exports.func,useFsAccessApi:g.exports.bool,autoFocus:g.exports.bool,onDragEnter:g.exports.func,onDragLeave:g.exports.func,onDragOver:g.exports.func,onDrop:g.exports.func,onDropAccepted:g.exports.func,onDropRejected:g.exports.func,onError:g.exports.func,validator:g.exports.func};var we={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function lr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=h(h({},sr),e),t=r.accept,n=r.disabled,a=r.getFilesFromEvent,o=r.maxSize,s=r.minSize,u=r.multiple,d=r.maxFiles,c=r.onDragEnter,m=r.onDragLeave,v=r.onDragOver,x=r.onDrop,E=r.onDropAccepted,j=r.onDropRejected,C=r.onFileDialogCancel,ne=r.onFileDialogOpen,Fe=r.useFsAccessApi,Oe=r.autoFocus,oe=r.preventDropOnDocument,Ee=r.noClick,ae=r.noKeyboard,je=r.noDrag,P=r.noDragEventsBubbling,ie=r.onError,K=r.validator,W=p.exports.useMemo(function(){return Gr(t)},[t]),Ce=p.exports.useMemo(function(){return Ur(t)},[t]),se=p.exports.useMemo(function(){return typeof ne=="function"?ne:Ze},[ne]),G=p.exports.useMemo(function(){return typeof C=="function"?C:Ze},[C]),D=p.exports.useRef(null),F=p.exports.useRef(null),cr=p.exports.useReducer(st,we),_e=he(cr,2),le=_e[0],w=_e[1],ur=le.isFocused,Se=le.isFileDialogActive,Y=p.exports.useRef(typeof window<"u"&&window.isSecureContext&&Fe&&Hr()),Pe=function(){!Y.current&&Se&&setTimeout(function(){if(F.current){var l=F.current.files;l.length||(w({type:"closeDialog"}),G())}},300)};p.exports.useEffect(function(){return window.addEventListener("focus",Pe,!1),function(){window.removeEventListener("focus",Pe,!1)}},[F,Se,G,Y]);var R=p.exports.useRef([]),ke=function(l){D.current&&D.current.contains(l.target)||(l.preventDefault(),R.current=[])};p.exports.useEffect(function(){return oe&&(document.addEventListener("dragover",Je,!1),document.addEventListener("drop",ke,!1)),function(){oe&&(document.removeEventListener("dragover",Je),document.removeEventListener("drop",ke))}},[D,oe]),p.exports.useEffect(function(){return!n&&Oe&&D.current&&D.current.focus(),function(){}},[D,Oe,n]);var k=p.exports.useCallback(function(i){ie?ie(i):console.error(i)},[ie]),Te=p.exports.useCallback(function(i){i.preventDefault(),i.persist(),Z(i),R.current=[].concat(Xr(R.current),[i.target]),X(i)&&Promise.resolve(a(i)).then(function(l){if(!(re(i)&&!P)){var b=l.length,y=b>0&&$r({files:l,accept:W,minSize:s,maxSize:o,multiple:u,maxFiles:d,validator:K}),A=b>0&&!y;w({isDragAccept:y,isDragReject:A,isDragActive:!0,type:"setDraggedFiles"}),c&&c(i)}}).catch(function(l){return k(l)})},[a,c,k,P,W,s,o,u,d,K]),Ie=p.exports.useCallback(function(i){i.preventDefault(),i.persist(),Z(i);var l=X(i);if(l&&i.dataTransfer)try{i.dataTransfer.dropEffect="copy"}catch{}return l&&v&&v(i),!1},[v,P]),Re=p.exports.useCallback(function(i){i.preventDefault(),i.persist(),Z(i);var l=R.current.filter(function(y){return D.current&&D.current.contains(y)}),b=l.indexOf(i.target);b!==-1&&l.splice(b,1),R.current=l,!(l.length>0)&&(w({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),X(i)&&m&&m(i))},[D,m,P]),q=p.exports.useCallback(function(i,l){var b=[],y=[];i.forEach(function(A){var B=tr(A,W),z=he(B,2),ue=z[0],fe=z[1],pe=nr(A,s,o),Q=he(pe,2),de=Q[0],me=Q[1],ge=K?K(A):null;if(ue&&de&&!ge)b.push(A);else{var ve=[fe,me];ge&&(ve=ve.concat(ge)),y.push({file:A,errors:ve.filter(function(mr){return mr})})}}),(!u&&b.length>1||u&&d>=1&&b.length>d)&&(b.forEach(function(A){y.push({file:A,errors:[Nr]})}),b.splice(0)),w({acceptedFiles:b,fileRejections:y,type:"setFiles"}),x&&x(b,y,l),y.length>0&&j&&j(y,l),b.length>0&&E&&E(b,l)},[w,u,W,s,o,d,x,E,j,K]),J=p.exports.useCallback(function(i){i.preventDefault(),i.persist(),Z(i),R.current=[],X(i)&&Promise.resolve(a(i)).then(function(l){re(i)&&!P||q(l,i)}).catch(function(l){return k(l)}),w({type:"reset"})},[a,q,k,P]),L=p.exports.useCallback(function(){if(Y.current){w({type:"openDialog"}),se();var i={multiple:u,types:Ce};window.showOpenFilePicker(i).then(function(l){return a(l)}).then(function(l){q(l,null),w({type:"closeDialog"})}).catch(function(l){Yr(l)?(G(l),w({type:"closeDialog"})):qr(l)?(Y.current=!1,F.current?(F.current.value=null,F.current.click()):k(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):k(l)});return}F.current&&(w({type:"openDialog"}),se(),F.current.value=null,F.current.click())},[w,se,G,Fe,q,k,Ce,u]),Le=p.exports.useCallback(function(i){!D.current||!D.current.isEqualNode(i.target)||(i.key===" "||i.key==="Enter"||i.keyCode===32||i.keyCode===13)&&(i.preventDefault(),L())},[D,L]),Me=p.exports.useCallback(function(){w({type:"focus"})},[]),ze=p.exports.useCallback(function(){w({type:"blur"})},[]),Ne=p.exports.useCallback(function(){Ee||(Br()?setTimeout(L,0):L())},[Ee,L]),M=function(l){return n?null:l},ce=function(l){return ae?null:M(l)},V=function(l){return je?null:M(l)},Z=function(l){P&&l.stopPropagation()},fr=p.exports.useMemo(function(){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=i.refKey,b=l===void 0?"ref":l,y=i.role,A=i.onKeyDown,B=i.onFocus,z=i.onBlur,ue=i.onClick,fe=i.onDragEnter,pe=i.onDragOver,Q=i.onDragLeave,de=i.onDrop,me=te(i,Zr);return h(h(De({onKeyDown:ce(O(A,Le)),onFocus:ce(O(B,Me)),onBlur:ce(O(z,ze)),onClick:M(O(ue,Ne)),onDragEnter:V(O(fe,Te)),onDragOver:V(O(pe,Ie)),onDragLeave:V(O(Q,Re)),onDrop:V(O(de,J)),role:typeof y=="string"&&y!==""?y:"presentation"},b,D),!n&&!ae?{tabIndex:0}:{}),me)}},[D,Le,Me,ze,Ne,Te,Ie,Re,J,ae,je,n]),pr=p.exports.useCallback(function(i){i.stopPropagation()},[]),dr=p.exports.useMemo(function(){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=i.refKey,b=l===void 0?"ref":l,y=i.onChange,A=i.onClick,B=te(i,Qr),z=De({accept:W,multiple:u,type:"file",style:{display:"none"},onChange:M(O(y,J)),onClick:M(O(A,pr)),tabIndex:-1},b,F);return h(h({},z),B)}},[F,t,u,J,n]);return h(h({},le),{},{isFocused:ur&&!n,getRootProps:fr,getInputProps:dr,rootRef:D,inputRef:F,open:M(L)})}function st(e,r){switch(r.type){case"focus":return h(h({},e),{},{isFocused:!0});case"blur":return h(h({},e),{},{isFocused:!1});case"openDialog":return h(h({},we),{},{isFileDialogActive:!0});case"closeDialog":return h(h({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return h(h({},e),{},{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return h(h({},e),{},{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return h({},we);default:return e}}function Ze(){}const lt="/assets/upload.7ea9ffeb.svg",ct=()=>{const[e,r]=p.exports.useState([]),{getRootProps:t,getInputProps:n,isDragAccept:a}=lr({accept:{"image/*":[]},onDrop:o=>{r(o.map(s=>Object.assign(s,{preview:URL.createObjectURL(s)})))}});return f("div",{children:S("div",{className:"w-full text-center border-dashed border border-secondary-500 rounded-md py-[52px] flex flex-col justify-center items-center",children:[e.length===0&&S("div",{...t({className:"dropzone"}),children:[f("input",{className:"hidden",...n()}),f("img",{src:lt,alt:"",className:"mx-auto mb-4"}),a?f("p",{className:"text-sm text-slate-500 dark:text-slate-300 ",children:"Drop the files here ..."}):f("p",{className:"text-sm text-slate-500 dark:text-slate-300 f",children:"Drop files here or click to upload."})]}),f("div",{className:"flex space-x-4",children:e.map((o,s)=>f("div",{className:"mb-4 flex-none",children:f("div",{className:"h-[300px] w-[300px] mx-auto mt-6 rounded-md",children:f("img",{src:o.preview,className:" object-contain h-full w-full block rounded-md",onLoad:()=>{URL.revokeObjectURL(o.preview)}})})},s))})]})})},pt=()=>{const[e,r]=p.exports.useState(null),[t,n]=p.exports.useState(null),[a,o]=p.exports.useState([]),[s,u]=p.exports.useState([]),d=x=>{r(x.target.files[0])};return S("div",{className:"grid xl:grid-cols-2 grid-cols-1 gap-5",children:[f(T,{title:"File Input Basic",children:f(_,{name:"basic",selectedFile:e,onChange:d})}),f(T,{title:"Multiple Files",children:f(_,{name:"basic",multiple:!0,selectedFiles:a,onChange:x=>{const E=x.target.files,j=Array.from(E).map(C=>C);o(j)}})}),f(T,{title:"File Input Basic With Preview",children:f(_,{name:"basic",selectedFile:t,onChange:x=>{n(x.target.files[0])},preview:!0})}),f(T,{title:"Multiple Files With Preview",children:f(_,{name:"basic",selectedFiles:s,onChange:x=>{const E=x.target.files,j=Array.from(E).map(C=>C);u(j)},multiple:!0,preview:!0})}),f("div",{className:"xl:col-span-2 col-span-1",children:f(T,{title:"File upload",children:f(ct,{})})}),f(T,{title:"Control sizing",children:S("div",{className:"space-y-3",children:[f(_,{placeholder:"Large",className:"h-[48px]",name:"large"}),f(_,{placeholder:"Default",name:"default"}),f(_,{placeholder:"Small",className:"h-[32px]",name:"small"})]})}),f(T,{title:"File Name Formatting",children:f(_,{name:"basic",badge:!0,selectedFile:e,onChange:d})})]})};export{pt as default};
