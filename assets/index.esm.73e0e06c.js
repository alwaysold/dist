import{R as b}from"./index.20e87095.js";var ge=e=>e.type==="checkbox",ae=e=>e instanceof Date,B=e=>e==null;const ar=e=>typeof e=="object";var T=e=>!B(e)&&!Array.isArray(e)&&ar(e)&&!ae(e),nr=e=>T(e)&&e.target?ge(e.target)?e.target.checked:e.target.value:e,Er=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,lr=(e,i)=>e.has(Er(i)),Cr=e=>{const i=e.constructor&&e.constructor.prototype;return T(i)&&i.hasOwnProperty("isPrototypeOf")},We=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function P(e){let i;const r=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(We&&(e instanceof Blob||e instanceof FileList))&&(r||T(e)))if(i=r?[]:{},!Array.isArray(e)&&!Cr(e))i=e;else for(const t in e)i[t]=P(e[t]);else return e;return i}var le=e=>Array.isArray(e)?e.filter(Boolean):[],D=e=>e===void 0,c=(e,i,r)=>{if(!i||!T(e))return r;const t=le(i.split(/[,[\].]+?/)).reduce((u,l)=>B(u)?u:u[l],e);return D(t)||t===e?D(e[i])?r:e[i]:t};const he={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},K={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Y={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Or=b.createContext(null),Fe=()=>b.useContext(Or);var or=(e,i,r,t=!0)=>{const u={defaultValues:i._defaultValues};for(const l in e)Object.defineProperty(u,l,{get:()=>{const f=l;return i._proxyFormState[f]!==K.all&&(i._proxyFormState[f]=!t||K.all),r&&(r[f]=!0),e[f]}});return u},W=e=>T(e)&&!Object.keys(e).length,cr=(e,i,r,t)=>{r(e);const{name:u,...l}=e;return W(l)||Object.keys(l).length>=Object.keys(i).length||Object.keys(l).find(f=>i[f]===(!t||K.all))},$=e=>Array.isArray(e)?e:[e],fr=(e,i,r)=>r&&i?e===i:!e||!i||e===i||$(e).some(t=>t&&(t.startsWith(i)||i.startsWith(t)));function xe(e){const i=b.useRef(e);i.current=e,b.useEffect(()=>{const r=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}function Rr(e){const i=Fe(),{control:r=i.control,disabled:t,name:u,exact:l}=e||{},[f,A]=b.useState(r._formState),_=b.useRef(!0),S=b.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),E=b.useRef(u);return E.current=u,xe({disabled:t,next:p=>_.current&&fr(E.current,p.name,l)&&cr(p,S.current,r._updateFormState)&&A({...r._formState,...p}),subject:r._subjects.state}),b.useEffect(()=>(_.current=!0,S.current.isValid&&r._updateValid(!0),()=>{_.current=!1}),[r]),or(f,r,S.current,!1)}var Q=e=>typeof e=="string",dr=(e,i,r,t,u)=>Q(e)?(t&&i.watch.add(e),c(r,e,u)):Array.isArray(e)?e.map(l=>(t&&i.watch.add(l),c(r,l))):(t&&(i.watchAll=!0),r);function Lr(e){const i=Fe(),{control:r=i.control,name:t,defaultValue:u,disabled:l,exact:f}=e||{},A=b.useRef(t);A.current=t,xe({disabled:l,subject:r._subjects.values,next:E=>{fr(A.current,E.name,f)&&S(P(dr(A.current,r._names,E.values||r._formValues,!1,u)))}});const[_,S]=b.useState(r._getWatch(t,u));return b.useEffect(()=>r._removeUnmounted()),_}var $e=e=>/^\w*$/.test(e),yr=e=>le(e.replace(/["|']|\]/g,"").split(/\.|\[/));function k(e,i,r){let t=-1;const u=$e(i)?[i]:yr(i),l=u.length,f=l-1;for(;++t<l;){const A=u[t];let _=r;if(t!==f){const S=e[A];_=T(S)||Array.isArray(S)?S:isNaN(+u[t+1])?{}:[]}e[A]=_,e=e[A]}return e}function Tr(e){const i=Fe(),{name:r,control:t=i.control,shouldUnregister:u}=e,l=lr(t._names.array,r),f=Lr({control:t,name:r,defaultValue:c(t._formValues,r,c(t._defaultValues,r,e.defaultValue)),exact:!0}),A=Rr({control:t,name:r}),_=b.useRef(t.register(r,{...e.rules,value:f}));return b.useEffect(()=>{const S=t._options.shouldUnregister||u,E=(p,v)=>{const j=c(t._fields,p);j&&(j._f.mount=v)};if(E(r,!0),S){const p=P(c(t._options.defaultValues,r));k(t._defaultValues,r,p),D(c(t._formValues,r))&&k(t._formValues,r,p)}return()=>{(l?S&&!t._state.action:S)?t.unregister(r):E(r,!1)}},[r,t,l,u]),{field:{name:r,value:f,onChange:b.useCallback(S=>_.current.onChange({target:{value:nr(S),name:r},type:he.CHANGE}),[r]),onBlur:b.useCallback(()=>_.current.onBlur({target:{value:c(t._formValues,r),name:r},type:he.BLUR}),[r,t]),ref:S=>{const E=c(t._fields,r);E&&S&&(E._f.ref={focus:()=>S.focus(),select:()=>S.select(),setCustomValidity:p=>S.setCustomValidity(p),reportValidity:()=>S.reportValidity()})}},formState:A,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!c(A.errors,r)},isDirty:{enumerable:!0,get:()=>!!c(A.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!c(A.touchedFields,r)},error:{enumerable:!0,get:()=>c(A.errors,r)}})}}const Qr=e=>e.render(Tr(e));var Ur=(e,i,r,t,u)=>i?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[t]:u||!0}}:{};const ve=(e,i,r)=>{for(const t of r||Object.keys(e)){const u=c(e,t);if(u){const{_f:l,...f}=u;if(l&&i(l.name)){if(l.ref.focus){l.ref.focus();break}else if(l.refs&&l.refs[0].focus){l.refs[0].focus();break}}else T(f)&&ve(f,i)}}};var Z=()=>{const e=typeof performance>"u"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,i=>{const r=(Math.random()*16+e)%16|0;return(i=="x"?r:r&3|8).toString(16)})},De=(e,i,r={})=>r.shouldFocus||D(r.shouldFocus)?r.focusName||`${e}.${D(r.focusIndex)?i:r.focusIndex}.`:"",Pe=e=>({isOnSubmit:!e||e===K.onSubmit,isOnBlur:e===K.onBlur,isOnChange:e===K.onChange,isOnAll:e===K.all,isOnTouch:e===K.onTouched}),je=(e,i,r)=>!r&&(i.watchAll||i.watch.has(e)||[...i.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),gr=(e,i,r)=>{const t=le(c(e,r));return k(t,"root",i[r]),k(e,r,t),e},ne=e=>typeof e=="boolean",He=e=>e.type==="file",ee=e=>typeof e=="function",Ae=e=>{if(!We)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},_e=e=>Q(e),Ke=e=>e.type==="radio",Ve=e=>e instanceof RegExp;const er={value:!1,isValid:!1},rr={value:!0,isValid:!0};var _r=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!D(e[0].attributes.value)?D(e[0].value)||e[0].value===""?rr:{value:e[0].value,isValid:!0}:rr:er}return er};const tr={isValid:!1,value:null};var hr=e=>Array.isArray(e)?e.reduce((i,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:i,tr):tr;function sr(e,i,r="validate"){if(_e(e)||Array.isArray(e)&&e.every(_e)||ne(e)&&!e)return{type:r,message:_e(e)?e:"",ref:i}}var ue=e=>T(e)&&!Ve(e)?e:{value:e,message:""},qe=async(e,i,r,t,u)=>{const{ref:l,refs:f,required:A,maxLength:_,minLength:S,min:E,max:p,pattern:v,validate:j,name:N,valueAsNumber:oe,mount:se,disabled:ce}=e._f,m=c(i,N);if(!se||ce)return{};const q=f?f[0]:l,G=w=>{t&&q.reportValidity&&(q.setCustomValidity(ne(w)?"":w||""),q.reportValidity())},y={},V=Ke(l),F=ge(l),L=V||F,M=(oe||He(l))&&D(l.value)&&D(m)||Ae(l)&&l.value===""||m===""||Array.isArray(m)&&!m.length,z=Ur.bind(null,N,r,y),X=(w,x,O,I=Y.maxLength,H=Y.minLength)=>{const J=w?x:O;y[N]={type:w?I:H,message:J,ref:l,...z(w?I:H,J)}};if(u?!Array.isArray(m)||!m.length:A&&(!L&&(M||B(m))||ne(m)&&!m||F&&!_r(f).isValid||V&&!hr(f).isValid)){const{value:w,message:x}=_e(A)?{value:!!A,message:A}:ue(A);if(w&&(y[N]={type:Y.required,message:x,ref:q,...z(Y.required,x)},!r))return G(x),y}if(!M&&(!B(E)||!B(p))){let w,x;const O=ue(p),I=ue(E);if(!B(m)&&!isNaN(m)){const H=l.valueAsNumber||m&&+m;B(O.value)||(w=H>O.value),B(I.value)||(x=H<I.value)}else{const H=l.valueAsDate||new Date(m),J=de=>new Date(new Date().toDateString()+" "+de),re=l.type=="time",fe=l.type=="week";Q(O.value)&&m&&(w=re?J(m)>J(O.value):fe?m>O.value:H>new Date(O.value)),Q(I.value)&&m&&(x=re?J(m)<J(I.value):fe?m<I.value:H<new Date(I.value))}if((w||x)&&(X(!!w,O.message,I.message,Y.max,Y.min),!r))return G(y[N].message),y}if((_||S)&&!M&&(Q(m)||u&&Array.isArray(m))){const w=ue(_),x=ue(S),O=!B(w.value)&&m.length>+w.value,I=!B(x.value)&&m.length<+x.value;if((O||I)&&(X(O,w.message,x.message),!r))return G(y[N].message),y}if(v&&!M&&Q(m)){const{value:w,message:x}=ue(v);if(Ve(w)&&!m.match(w)&&(y[N]={type:Y.pattern,message:x,ref:l,...z(Y.pattern,x)},!r))return G(x),y}if(j){if(ee(j)){const w=await j(m,i),x=sr(w,q);if(x&&(y[N]={...x,...z(Y.validate,x.message)},!r))return G(x.message),y}else if(T(j)){let w={};for(const x in j){if(!W(w)&&!r)break;const O=sr(await j[x](m,i),q,x);O&&(w={...O,...z(x,O.message)},G(O.message),r&&(y[N]=w))}if(!W(w)&&(y[N]={ref:q,...w},!r))return y}}return G(!0),y};function Ee(e,i){return[...e,...$(i)]}var Ce=e=>Array.isArray(e)?e.map(()=>{}):void 0;function Oe(e,i,r){return[...e.slice(0,i),...$(r),...e.slice(i)]}var Re=(e,i,r)=>Array.isArray(e)?(D(e[r])&&(e[r]=void 0),e.splice(r,0,e.splice(i,1)[0]),e):[];function Le(e,i){return[...$(i),...$(e)]}function Mr(e,i){let r=0;const t=[...e];for(const u of i)t.splice(u-r,1),r++;return le(t).length?t:[]}var Te=(e,i)=>D(i)?[]:Mr(e,$(i).sort((r,t)=>r-t)),Ue=(e,i,r)=>{e[i]=[e[r],e[r]=e[i]][0]};function Br(e,i){const r=i.slice(0,-1).length;let t=0;for(;t<r;)e=D(e)?t++:e[i[t++]];return e}function Nr(e){for(const i in e)if(!D(e[i]))return!1;return!0}function U(e,i){const r=Array.isArray(i)?i:$e(i)?[i]:yr(i),t=r.length===1?e:Br(e,r),u=r.length-1,l=r[u];return t&&delete t[l],u!==0&&(T(t)&&W(t)||Array.isArray(t)&&Nr(t))&&U(e,r.slice(0,-1)),e}var ir=(e,i,r)=>(e[i]=r,e);function Xr(e){const i=Fe(),{control:r=i.control,name:t,keyName:u="id",shouldUnregister:l}=e,[f,A]=b.useState(r._getFieldArray(t)),_=b.useRef(r._getFieldArray(t).map(Z)),S=b.useRef(f),E=b.useRef(t),p=b.useRef(!1);E.current=t,S.current=f,r._names.array.add(t),e.rules&&r.register(t,e.rules),xe({next:({values:y,name:V})=>{if(V===E.current||!V){const F=c(y,E.current);Array.isArray(F)&&(A(F),_.current=F.map(Z))}},subject:r._subjects.array});const v=b.useCallback(y=>{p.current=!0,r._updateFieldArray(t,y)},[r,t]),j=(y,V)=>{const F=$(P(y)),L=Ee(r._getFieldArray(t),F);r._names.focus=De(t,L.length-1,V),_.current=Ee(_.current,F.map(Z)),v(L),A(L),r._updateFieldArray(t,L,Ee,{argA:Ce(y)})},N=(y,V)=>{const F=$(P(y)),L=Le(r._getFieldArray(t),F);r._names.focus=De(t,0,V),_.current=Le(_.current,F.map(Z)),v(L),A(L),r._updateFieldArray(t,L,Le,{argA:Ce(y)})},oe=y=>{const V=Te(r._getFieldArray(t),y);_.current=Te(_.current,y),v(V),A(V),r._updateFieldArray(t,V,Te,{argA:y})},se=(y,V,F)=>{const L=$(P(V)),M=Oe(r._getFieldArray(t),y,L);r._names.focus=De(t,y,F),_.current=Oe(_.current,y,L.map(Z)),v(M),A(M),r._updateFieldArray(t,M,Oe,{argA:y,argB:Ce(V)})},ce=(y,V)=>{const F=r._getFieldArray(t);Ue(F,y,V),Ue(_.current,y,V),v(F),A(F),r._updateFieldArray(t,F,Ue,{argA:y,argB:V},!1)},m=(y,V)=>{const F=r._getFieldArray(t);Re(F,y,V),Re(_.current,y,V),v(F),A(F),r._updateFieldArray(t,F,Re,{argA:y,argB:V},!1)},q=(y,V)=>{const F=P(V),L=ir(r._getFieldArray(t),y,F);_.current=[...L].map((M,z)=>!M||z===y?Z():_.current[z]),v(L),A([...L]),r._updateFieldArray(t,L,ir,{argA:y,argB:F},!0,!1)},G=y=>{const V=$(P(y));_.current=V.map(Z),v([...V]),A([...V]),r._updateFieldArray(t,[...V],F=>F,{},!0,!1)};return b.useEffect(()=>{if(r._state.action=!1,je(t,r._names)&&r._subjects.state.next({...r._formState}),p.current&&(!Pe(r._options.mode).isOnSubmit||r._formState.isSubmitted))if(r._options.resolver)r._executeSchema([t]).then(y=>{const V=c(y.errors,t),F=c(r._formState.errors,t);(F?!V&&F.type:V&&V.type)&&(V?k(r._formState.errors,t,V):U(r._formState.errors,t),r._subjects.state.next({errors:r._formState.errors}))});else{const y=c(r._fields,t);y&&y._f&&qe(y,r._formValues,r._options.criteriaMode===K.all,r._options.shouldUseNativeValidation,!0).then(V=>!W(V)&&r._subjects.state.next({errors:gr(r._formState.errors,V,t)}))}r._subjects.values.next({name:t,values:{...r._formValues}}),r._names.focus&&ve(r._fields,y=>!!y&&y.startsWith(r._names.focus||"")),r._names.focus="",r._updateValid()},[f,t,r]),b.useEffect(()=>(!c(r._formValues,t)&&r._updateFieldArray(t),()=>{(r._options.shouldUnregister||l)&&r.unregister(t)}),[t,r,u,l]),{swap:b.useCallback(ce,[v,t,r]),move:b.useCallback(m,[v,t,r]),prepend:b.useCallback(N,[v,t,r]),append:b.useCallback(j,[v,t,r]),remove:b.useCallback(oe,[v,t,r]),insert:b.useCallback(se,[v,t,r]),update:b.useCallback(q,[v,t,r]),replace:b.useCallback(G,[v,t,r]),fields:b.useMemo(()=>f.map((y,V)=>({...y,[u]:_.current[V]||Z()})),[f,u])}}function Me(){let e=[];return{get observers(){return e},next:u=>{for(const l of e)l.next&&l.next(u)},subscribe:u=>(e.push(u),{unsubscribe:()=>{e=e.filter(l=>l!==u)}}),unsubscribe:()=>{e=[]}}}var me=e=>B(e)||!ar(e);function te(e,i){if(me(e)||me(i))return e===i;if(ae(e)&&ae(i))return e.getTime()===i.getTime();const r=Object.keys(e),t=Object.keys(i);if(r.length!==t.length)return!1;for(const u of r){const l=e[u];if(!t.includes(u))return!1;if(u!=="ref"){const f=i[u];if(ae(l)&&ae(f)||T(l)&&T(f)||Array.isArray(l)&&Array.isArray(f)?!te(l,f):l!==f)return!1}}return!0}var vr=e=>e.type==="select-multiple",Ir=e=>Ke(e)||ge(e),Be=e=>Ae(e)&&e.isConnected,Ar=e=>{for(const i in e)if(ee(e[i]))return!0;return!1};function be(e,i={}){const r=Array.isArray(e);if(T(e)||r)for(const t in e)Array.isArray(e[t])||T(e[t])&&!Ar(e[t])?(i[t]=Array.isArray(e[t])?[]:{},be(e[t],i[t])):B(e[t])||(i[t]=!0);return i}function Vr(e,i,r){const t=Array.isArray(e);if(T(e)||t)for(const u in e)Array.isArray(e[u])||T(e[u])&&!Ar(e[u])?D(i)||me(r[u])?r[u]=Array.isArray(e[u])?be(e[u],[]):{...be(e[u])}:Vr(e[u],B(i)?{}:i[u],r[u]):r[u]=!te(e[u],i[u]);return r}var Ne=(e,i)=>Vr(e,i,be(i)),mr=(e,{valueAsNumber:i,valueAsDate:r,setValueAs:t})=>D(e)?e:i?e===""?NaN:e&&+e:r&&Q(e)?new Date(e):t?t(e):e;function Ie(e){const i=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):i.disabled))return He(i)?i.files:Ke(i)?hr(e.refs).value:vr(i)?[...i.selectedOptions].map(({value:r})=>r):ge(i)?_r(e.refs).value:mr(D(i.value)?e.ref.value:i.value,e)}var Pr=(e,i,r,t)=>{const u={};for(const l of e){const f=c(i,l);f&&k(u,l,f._f)}return{criteriaMode:r,names:[...e],fields:u,shouldUseNativeValidation:t}},ye=e=>D(e)?e:Ve(e)?e.source:T(e)?Ve(e.value)?e.value.source:e.value:e,jr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ur(e,i,r){const t=c(e,r);if(t||$e(r))return{error:t,name:r};const u=r.split(".");for(;u.length;){const l=u.join("."),f=c(i,l),A=c(e,l);if(f&&!Array.isArray(f)&&r!==l)return{name:r};if(A&&A.type)return{name:l,error:A};u.pop()}return{name:r}}var qr=(e,i,r,t,u)=>u.isOnAll?!1:!r&&u.isOnTouch?!(i||e):(r?t.isOnBlur:u.isOnBlur)?!e:(r?t.isOnChange:u.isOnChange)?e:!0,Wr=(e,i)=>!le(c(e,i)).length&&U(e,i);const $r={mode:K.onSubmit,reValidateMode:K.onChange,shouldFocusError:!0};function Hr(e={},i){let r={...$r,...e},t={submitCount:0,isDirty:!1,isLoading:ee(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},u={},l=T(r.defaultValues)||T(r.values)?P(r.defaultValues||r.values)||{}:{},f=r.shouldUnregister?{}:P(l),A={action:!1,mount:!1,watch:!1},_={mount:new Set,unMount:new Set,array:new Set,watch:new Set},S,E=0;const p={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:Me(),array:Me(),state:Me()},j=e.resetOptions&&e.resetOptions.keepDirtyValues,N=Pe(r.mode),oe=Pe(r.reValidateMode),se=r.criteriaMode===K.all,ce=s=>a=>{clearTimeout(E),E=setTimeout(s,a)},m=async s=>{if(p.isValid||s){const a=r.resolver?W((await M()).errors):await X(u,!0);a!==t.isValid&&v.state.next({isValid:a})}},q=s=>p.isValidating&&v.state.next({isValidating:s}),G=(s,a=[],n,g,d=!0,o=!0)=>{if(g&&n){if(A.action=!0,o&&Array.isArray(c(u,s))){const h=n(c(u,s),g.argA,g.argB);d&&k(u,s,h)}if(o&&Array.isArray(c(t.errors,s))){const h=n(c(t.errors,s),g.argA,g.argB);d&&k(t.errors,s,h),Wr(t.errors,s)}if(p.touchedFields&&o&&Array.isArray(c(t.touchedFields,s))){const h=n(c(t.touchedFields,s),g.argA,g.argB);d&&k(t.touchedFields,s,h)}p.dirtyFields&&(t.dirtyFields=Ne(l,f)),v.state.next({name:s,isDirty:x(s,a),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else k(f,s,a)},y=(s,a)=>{k(t.errors,s,a),v.state.next({errors:t.errors})},V=(s,a,n,g)=>{const d=c(u,s);if(d){const o=c(f,s,D(n)?c(l,s):n);D(o)||g&&g.defaultChecked||a?k(f,s,a?o:Ie(d._f)):H(s,o),A.mount&&m()}},F=(s,a,n,g,d)=>{let o=!1,h=!1;const C={name:s};if(!n||g){p.isDirty&&(h=t.isDirty,t.isDirty=C.isDirty=x(),o=h!==C.isDirty);const R=te(c(l,s),a);h=c(t.dirtyFields,s),R?U(t.dirtyFields,s):k(t.dirtyFields,s,!0),C.dirtyFields=t.dirtyFields,o=o||p.dirtyFields&&h!==!R}if(n){const R=c(t.touchedFields,s);R||(k(t.touchedFields,s,n),C.touchedFields=t.touchedFields,o=o||p.touchedFields&&R!==n)}return o&&d&&v.state.next(C),o?C:{}},L=(s,a,n,g)=>{const d=c(t.errors,s),o=p.isValid&&ne(a)&&t.isValid!==a;if(e.delayError&&n?(S=ce(()=>y(s,n)),S(e.delayError)):(clearTimeout(E),S=null,n?k(t.errors,s,n):U(t.errors,s)),(n?!te(d,n):d)||!W(g)||o){const h={...g,...o&&ne(a)?{isValid:a}:{},errors:t.errors,name:s};t={...t,...h},v.state.next(h)}q(!1)},M=async s=>r.resolver(f,r.context,Pr(s||_.mount,u,r.criteriaMode,r.shouldUseNativeValidation)),z=async s=>{const{errors:a}=await M();if(s)for(const n of s){const g=c(a,n);g?k(t.errors,n,g):U(t.errors,n)}else t.errors=a;return a},X=async(s,a,n={valid:!0})=>{for(const g in s){const d=s[g];if(d){const{_f:o,...h}=d;if(o){const C=_.array.has(o.name),R=await qe(d,f,se,r.shouldUseNativeValidation&&!a,C);if(R[o.name]&&(n.valid=!1,a))break;!a&&(c(R,o.name)?C?gr(t.errors,R,o.name):k(t.errors,o.name,R[o.name]):U(t.errors,o.name))}h&&await X(h,a,n)}}return n.valid},w=()=>{for(const s of _.unMount){const a=c(u,s);a&&(a._f.refs?a._f.refs.every(n=>!Be(n)):!Be(a._f.ref))&&pe(s)}_.unMount=new Set},x=(s,a)=>(s&&a&&k(f,s,a),!te(Ge(),l)),O=(s,a,n)=>dr(s,_,{...A.mount?f:D(a)?l:Q(s)?{[s]:a}:a},n,a),I=s=>le(c(A.mount?f:l,s,e.shouldUnregister?c(l,s,[]):[])),H=(s,a,n={})=>{const g=c(u,s);let d=a;if(g){const o=g._f;o&&(!o.disabled&&k(f,s,mr(a,o)),d=Ae(o.ref)&&B(a)?"":a,vr(o.ref)?[...o.ref.options].forEach(h=>h.selected=d.includes(h.value)):o.refs?ge(o.ref)?o.refs.length>1?o.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(d)?!!d.find(C=>C===h.value):d===h.value)):o.refs[0]&&(o.refs[0].checked=!!d):o.refs.forEach(h=>h.checked=h.value===d):He(o.ref)?o.ref.value="":(o.ref.value=d,o.ref.type||v.values.next({name:s,values:{...f}})))}(n.shouldDirty||n.shouldTouch)&&F(s,d,n.shouldTouch,n.shouldDirty,!0),n.shouldValidate&&de(s)},J=(s,a,n)=>{for(const g in a){const d=a[g],o=`${s}.${g}`,h=c(u,o);(_.array.has(s)||!me(d)||h&&!h._f)&&!ae(d)?J(o,d,n):H(o,d,n)}},re=(s,a,n={})=>{const g=c(u,s),d=_.array.has(s),o=P(a);k(f,s,o),d?(v.array.next({name:s,values:{...f}}),(p.isDirty||p.dirtyFields)&&n.shouldDirty&&v.state.next({name:s,dirtyFields:Ne(l,f),isDirty:x(s,o)})):g&&!g._f&&!B(o)?J(s,o,n):H(s,o,n),je(s,_)&&v.state.next({...t}),v.values.next({name:s,values:{...f}}),!A.mount&&i()},fe=async s=>{const a=s.target;let n=a.name,g=!0;const d=c(u,n),o=()=>a.type?Ie(d._f):nr(s);if(d){let h,C;const R=o(),ie=s.type===he.BLUR||s.type===he.FOCUS_OUT,wr=!jr(d._f)&&!r.resolver&&!c(t.errors,n)&&!d._f.deps||qr(ie,c(t.touchedFields,n),t.isSubmitted,oe,N),we=je(n,_,ie);k(f,n,R),ie?(d._f.onBlur&&d._f.onBlur(s),S&&S(0)):d._f.onChange&&d._f.onChange(s);const ke=F(n,R,ie,!1),kr=!W(ke)||we;if(!ie&&v.values.next({name:n,type:s.type,values:{...f}}),wr)return p.isValid&&m(),kr&&v.state.next({name:n,...we?{}:ke});if(!ie&&we&&v.state.next({...t}),q(!0),r.resolver){const{errors:Ye}=await M([n]),Dr=ur(t.errors,u,n),Ze=ur(Ye,u,Dr.name||n);h=Ze.error,n=Ze.name,C=W(Ye)}else h=(await qe(d,f,se,r.shouldUseNativeValidation))[n],g=isNaN(R)||R===c(f,n,R),g&&(h?C=!1:p.isValid&&(C=await X(u,!0)));g&&(d._f.deps&&de(d._f.deps),L(n,C,h,ke))}},de=async(s,a={})=>{let n,g;const d=$(s);if(q(!0),r.resolver){const o=await z(D(s)?s:d);n=W(o),g=s?!d.some(h=>c(o,h)):n}else s?(g=(await Promise.all(d.map(async o=>{const h=c(u,o);return await X(h&&h._f?{[o]:h}:h)}))).every(Boolean),!(!g&&!t.isValid)&&m()):g=n=await X(u);return v.state.next({...!Q(s)||p.isValid&&n!==t.isValid?{}:{name:s},...r.resolver||!s?{isValid:n}:{},errors:t.errors,isValidating:!1}),a.shouldFocus&&!g&&ve(u,o=>o&&c(t.errors,o),s?d:_.mount),g},Ge=s=>{const a={...l,...A.mount?f:{}};return D(s)?a:Q(s)?c(a,s):s.map(n=>c(a,n))},ze=(s,a)=>({invalid:!!c((a||t).errors,s),isDirty:!!c((a||t).dirtyFields,s),isTouched:!!c((a||t).touchedFields,s),error:c((a||t).errors,s)}),br=s=>{s&&$(s).forEach(a=>U(t.errors,a)),v.state.next({errors:s?t.errors:{}})},Fr=(s,a,n)=>{const g=(c(u,s,{_f:{}})._f||{}).ref;k(t.errors,s,{...a,ref:g}),v.state.next({name:s,errors:t.errors,isValid:!1}),n&&n.shouldFocus&&g&&g.focus&&g.focus()},xr=(s,a)=>ee(s)?v.values.subscribe({next:n=>s(O(void 0,a),n)}):O(s,a,!0),pe=(s,a={})=>{for(const n of s?$(s):_.mount)_.mount.delete(n),_.array.delete(n),a.keepValue||(U(u,n),U(f,n)),!a.keepError&&U(t.errors,n),!a.keepDirty&&U(t.dirtyFields,n),!a.keepTouched&&U(t.touchedFields,n),!r.shouldUnregister&&!a.keepDefaultValue&&U(l,n);v.values.next({values:{...f}}),v.state.next({...t,...a.keepDirty?{isDirty:x()}:{}}),!a.keepIsValid&&m()},Se=(s,a={})=>{let n=c(u,s);const g=ne(a.disabled);return k(u,s,{...n||{},_f:{...n&&n._f?n._f:{ref:{name:s}},name:s,mount:!0,...a}}),_.mount.add(s),n?g&&k(f,s,a.disabled?void 0:c(f,s,Ie(n._f))):V(s,!0,a.value),{...g?{disabled:a.disabled}:{},...r.shouldUseNativeValidation?{required:!!a.required,min:ye(a.min),max:ye(a.max),minLength:ye(a.minLength),maxLength:ye(a.maxLength),pattern:ye(a.pattern)}:{},name:s,onChange:fe,onBlur:fe,ref:d=>{if(d){Se(s,a),n=c(u,s);const o=D(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,h=Ir(o),C=n._f.refs||[];if(h?C.find(R=>R===o):o===n._f.ref)return;k(u,s,{_f:{...n._f,...h?{refs:[...C.filter(Be),o,...Array.isArray(c(l,s))?[{}]:[]],ref:{type:o.type,name:s}}:{ref:o}}}),V(s,!1,void 0,o)}else n=c(u,s,{}),n._f&&(n._f.mount=!1),(r.shouldUnregister||a.shouldUnregister)&&!(lr(_.array,s)&&A.action)&&_.unMount.add(s)}}},Je=()=>r.shouldFocusError&&ve(u,s=>s&&c(t.errors,s),_.mount),pr=(s,a)=>async n=>{n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let g=P(f);if(v.state.next({isSubmitting:!0}),r.resolver){const{errors:d,values:o}=await M();t.errors=d,g=o}else await X(u);U(t.errors,"root"),W(t.errors)?(v.state.next({errors:{}}),await s(g,n)):(a&&await a({...t.errors},n),Je(),setTimeout(Je)),v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:W(t.errors),submitCount:t.submitCount+1,errors:t.errors})},Sr=(s,a={})=>{c(u,s)&&(D(a.defaultValue)?re(s,c(l,s)):(re(s,a.defaultValue),k(l,s,a.defaultValue)),a.keepTouched||U(t.touchedFields,s),a.keepDirty||(U(t.dirtyFields,s),t.isDirty=a.defaultValue?x(s,c(l,s)):x()),a.keepError||(U(t.errors,s),p.isValid&&m()),v.state.next({...t}))},Qe=(s,a={})=>{const n=s||l,g=P(n),d=s&&!W(s)?g:l;if(a.keepDefaultValues||(l=n),!a.keepValues){if(a.keepDirtyValues||j)for(const o of _.mount)c(t.dirtyFields,o)?k(d,o,c(f,o)):re(o,c(d,o));else{if(We&&D(s))for(const o of _.mount){const h=c(u,o);if(h&&h._f){const C=Array.isArray(h._f.refs)?h._f.refs[0]:h._f.ref;if(Ae(C)){const R=C.closest("form");if(R){R.reset();break}}}}u={}}f=e.shouldUnregister?a.keepDefaultValues?P(l):{}:g,v.array.next({values:{...d}}),v.values.next({values:{...d}})}_={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!A.mount&&i(),A.mount=!p.isValid||!!a.keepIsValid,A.watch=!!e.shouldUnregister,v.state.next({submitCount:a.keepSubmitCount?t.submitCount:0,isDirty:a.keepDirty?t.isDirty:!!(a.keepDefaultValues&&!te(s,l)),isSubmitted:a.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:a.keepDirtyValues?t.dirtyFields:a.keepDefaultValues&&s?Ne(l,s):{},touchedFields:a.keepTouched?t.touchedFields:{},errors:a.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Xe=(s,a)=>Qe(ee(s)?s(f):s,a);return{control:{register:Se,unregister:pe,getFieldState:ze,_executeSchema:M,_getWatch:O,_getDirty:x,_updateValid:m,_removeUnmounted:w,_updateFieldArray:G,_getFieldArray:I,_reset:Qe,_resetDefaultValues:()=>ee(r.defaultValues)&&r.defaultValues().then(s=>{Xe(s,r.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:s=>{t={...t,...s}},_subjects:v,_proxyFormState:p,get _fields(){return u},get _formValues(){return f},get _state(){return A},set _state(s){A=s},get _defaultValues(){return l},get _names(){return _},set _names(s){_=s},get _formState(){return t},set _formState(s){t=s},get _options(){return r},set _options(s){r={...r,...s}}},trigger:de,register:Se,handleSubmit:pr,watch:xr,setValue:re,getValues:Ge,reset:Xe,resetField:Sr,clearErrors:br,unregister:pe,setError:Fr,setFocus:(s,a={})=>{const n=c(u,s),g=n&&n._f;if(g){const d=g.refs?g.refs[0]:g.ref;d.focus&&(d.focus(),a.shouldSelect&&d.select())}},getFieldState:ze}}function Yr(e={}){const i=b.useRef(),[r,t]=b.useState({isDirty:!1,isValidating:!1,isLoading:ee(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:ee(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...Hr(e,()=>t(l=>({...l}))),formState:r});const u=i.current.control;return u._options=e,xe({subject:u._subjects.state,next:l=>{cr(l,u._proxyFormState,u._updateFormState,!0)&&t({...u._formState})}}),b.useEffect(()=>{e.values&&!te(e.values,u._defaultValues)?u._reset(e.values,u._options.resetOptions):u._resetDefaultValues()},[e.values,u]),b.useEffect(()=>{u._state.mount||(u._updateValid(),u._state.mount=!0),u._state.watch&&(u._state.watch=!1,u._subjects.state.next({...u._formState})),u._removeUnmounted()}),i.current.formState=or(r,u),i.current}export{Qr as C,Ur as a,Xr as b,c as g,k as s,Yr as u};
