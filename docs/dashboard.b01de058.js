let t,n,r,i,s,o;function a(t){return t&&t.__esModule?t.default:t}var l,u,h,c,f,d,p,g,m,y,v,w,E,_,b,I,T,C,S,A,k,N,R,O,x,D,L,P,M,U,F,V,B,j,$,q,H,z,K,G,W,Q,Y,J,X,Z,ee,et,en,er=globalThis;const ei=()=>void 0;var es={},eo=es={};function ea(){throw Error("setTimeout has not been defined")}function el(){throw Error("clearTimeout has not been defined")}function eu(t){if(T===setTimeout)return setTimeout(t,0);if((T===ea||!T)&&setTimeout)return T=setTimeout,setTimeout(t,0);try{return T(t,0)}catch(n){try{return T.call(null,t,0)}catch(n){return T.call(this,t,0)}}}!function(){try{T="function"==typeof setTimeout?setTimeout:ea}catch(t){T=ea}try{C="function"==typeof clearTimeout?clearTimeout:el}catch(t){C=el}}();var eh=[],ec=!1,ef=-1;function ed(){ec&&S&&(ec=!1,S.length?eh=S.concat(eh):ef=-1,eh.length&&ep())}function ep(){if(!ec){var t=eu(ed);ec=!0;for(var n=eh.length;n;){for(S=eh,eh=[];++ef<n;)S&&S[ef].run();ef=-1,n=eh.length}S=null,ec=!1,function(t){if(C===clearTimeout)return clearTimeout(t);if((C===el||!C)&&clearTimeout)return C=clearTimeout,clearTimeout(t);try{C(t)}catch(n){try{return C.call(null,t)}catch(n){return C.call(this,t)}}}(t)}}function eg(t,n){this.fun=t,this.array=n}function em(){}eo.nextTick=function(t){var n=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)n[r-1]=arguments[r];eh.push(new eg(t,n)),1!==eh.length||ec||eu(ep)},eg.prototype.run=function(){this.fun.apply(null,this.array)},eo.title="browser",eo.browser=!0,eo.env={},eo.argv=[],eo.version="",eo.versions={},eo.on=em,eo.addListener=em,eo.once=em,eo.off=em,eo.removeListener=em,eo.removeAllListeners=em,eo.emit=em,eo.prependListener=em,eo.prependOnceListener=em,eo.listeners=function(t){return[]},eo.binding=function(t){throw Error("process.binding is not supported")},eo.cwd=function(){return"/"},eo.chdir=function(t){throw Error("process.chdir is not supported")},eo.umask=function(){return 0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=function(t){let n=[],r=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?n[r++]=s:(s<2048?n[r++]=s>>6|192:((64512&s)==55296&&i+1<t.length&&(64512&t.charCodeAt(i+1))==56320?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++i)),n[r++]=s>>18|240,n[r++]=s>>12&63|128):n[r++]=s>>12|224,n[r++]=s>>6&63|128),n[r++]=63&s|128)}return n},ev=function(t){let n=[],r=0,i=0;for(;r<t.length;){let s=t[r++];if(s<128)n[i++]=String.fromCharCode(s);else if(s>191&&s<224){let o=t[r++];n[i++]=String.fromCharCode((31&s)<<6|63&o)}else if(s>239&&s<365){let o=t[r++],a=((7&s)<<18|(63&o)<<12|(63&t[r++])<<6|63&t[r++])-65536;n[i++]=String.fromCharCode(55296+(a>>10)),n[i++]=String.fromCharCode(56320+(1023&a))}else{let o=t[r++],a=t[r++];n[i++]=String.fromCharCode((15&s)<<12|(63&o)<<6|63&a)}}return n.join("")},ew={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,n){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=n?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let n=0;n<t.length;n+=3){let s=t[n],o=n+1<t.length,a=o?t[n+1]:0,l=n+2<t.length,u=l?t[n+2]:0,h=s>>2,c=(3&s)<<4|a>>4,f=(15&a)<<2|u>>6,d=63&u;l||(d=64,o||(f=64)),i.push(r[h],r[c],r[f],r[d])}return i.join("")},encodeString(t,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(t):this.encodeByteArray(ey(t),n)},decodeString(t,n){return this.HAS_NATIVE_SUPPORT&&!n?atob(t):ev(this.decodeStringToByteArray(t,n))},decodeStringToByteArray(t,n){this.init_();let r=n?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let n=0;n<t.length;){let s=r[t.charAt(n++)],o=n<t.length?r[t.charAt(n)]:0,a=++n<t.length?r[t.charAt(n)]:64,l=++n<t.length?r[t.charAt(n)]:64;if(++n,null==s||null==o||null==a||null==l)throw new eE;let u=s<<2|o>>4;if(i.push(u),64!==a){let t=o<<4&240|a>>2;if(i.push(t),64!==l){let t=a<<6&192|l;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class eE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const e_=function(t){let n=ey(t);return ew.encodeByteArray(n,!0)},eb=function(t){return e_(t).replace(/\./g,"")},eI=function(t){try{return ew.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null},eT=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==er)return er;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,eC=()=>{if(void 0===es||void 0===es.env)return;let t=void 0;if(t)return JSON.parse(t)},eS=()=>{let t;if("undefined"==typeof document)return;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}let n=t&&eI(t[1]);return n&&JSON.parse(n)},eA=()=>{try{return ei()||eT()||eC()||eS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ek=t=>{var n,r;return null===(r=null===(n=eA())||void 0===n?void 0:n.emulatorHosts)||void 0===r?void 0:r[t]},eN=t=>{let n=ek(t);if(!n)return;let r=n.lastIndexOf(":");if(r<=0||r+1===n.length)throw Error(`Invalid host ${n} with no separate hostname and port!`);let i=parseInt(n.substring(r+1),10);return"["===n[0]?[n.substring(1,r-1),i]:[n.substring(0,r),i]},eR=()=>{var t;return null===(t=eA())||void 0===t?void 0:t.config},eO=t=>{var n;return null===(n=eA())||void 0===n?void 0:n[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),"function"==typeof t&&(this.promise.catch(()=>{}),1===t.length?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eD(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class eL extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,eL.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eP.prototype.create)}}class eP{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){var r,i;let s=n[0]||{},o=`${this.service}/${t}`,a=this.errors[t],l=a?(r=a,i=s,r.replace(eM,(t,n)=>{let r=i[n];return null!=r?String(r):`<${n}?>`})):"Error",u=`${this.serviceName}: ${l} (${o}).`;return new eL(o,u,s)}}const eM=/\{\$([^}]+)}/g;function eU(t,n){if(t===n)return!0;let r=Object.keys(t),i=Object.keys(n);for(let s of r){if(!i.includes(s))return!1;let r=t[s],o=n[s];if(eF(r)&&eF(o)){if(!eU(r,o))return!1}else if(r!==o)return!1}for(let t of i)if(!r.includes(t))return!1;return!0}function eF(t){return null!==t&&"object"==typeof t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eV(t){let n=[];for(let[r,i]of Object.entries(t))Array.isArray(i)?i.forEach(t=>{n.push(encodeURIComponent(r)+"="+encodeURIComponent(t))}):n.push(encodeURIComponent(r)+"="+encodeURIComponent(i));return n.length?"&"+n.join("&"):""}function eB(t){let n={};return t.replace(/^\?/,"").split("&").forEach(t=>{if(t){let[r,i]=t.split("=");n[decodeURIComponent(r)]=decodeURIComponent(i)}}),n}function ej(t){let n=t.indexOf("?");if(!n)return"";let r=t.indexOf("#",n);return t.substring(n,r>0?r:void 0)}class e${constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(void 0===t&&void 0===n&&void 0===r)throw Error("Missing Observer.");void 0===(i=!function(t,n){if("object"!=typeof t||null===t)return!1;for(let r of n)if(r in t&&"function"==typeof t[r])return!0;return!1}(t,["next","error","complete"])?{next:t,error:n,complete:r}:t).next&&(i.next=eq),void 0===i.error&&(i.error=eq),void 0===i.complete&&(i.complete=eq);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}}),this.observers.push(i),s}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{n(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eq(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eH(t){return t&&t._delegate?t._delegate:t}class ez{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eK="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eG{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){let n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){let t=new ex;if(this.instancesDeferred.set(n,t),this.isInitialized(n)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:n});r&&t.resolve(r)}catch(t){}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;let r=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(n=null==t?void 0:t.optional)&&void 0!==n&&n;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(t){if(i)return null;throw t}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if("EAGER"===t.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:eK})}catch(t){}for(let[t,n]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(t);try{let t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(t){}}}}clearInstance(t=eK){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){let t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=eK){return this.instances.has(t)}getOptions(t=eK){return this.instancesOptions.get(t)||{}}initialize(t={}){let{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(let[t,n]of this.instancesDeferred.entries())r===this.normalizeInstanceIdentifier(t)&&n.resolve(i);return i}onInit(t,n){var r;let i=this.normalizeInstanceIdentifier(n),s=null!==(r=this.onInitCallbacks.get(i))&&void 0!==r?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);let o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){let r=this.onInitCallbacks.get(n);if(r)for(let i of r)try{i(t,n)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:n={}}){var r;let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t)===eK?void 0:r,options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch(t){}return i||null}normalizeInstanceIdentifier(t=eK){return this.component?this.component.multipleInstances?t:eK:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eW{constructor(t){this.name=t,this.providers=new Map}addComponent(t){let n=this.getProvider(t.name);if(n.isComponentSet())throw Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);let n=new eG(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eQ=[];(l=A||(A={}))[l.DEBUG=0]="DEBUG",l[l.VERBOSE=1]="VERBOSE",l[l.INFO=2]="INFO",l[l.WARN=3]="WARN",l[l.ERROR=4]="ERROR",l[l.SILENT=5]="SILENT";const eY={debug:A.DEBUG,verbose:A.VERBOSE,info:A.INFO,warn:A.WARN,error:A.ERROR,silent:A.SILENT},eJ=A.INFO,eX={[A.DEBUG]:"log",[A.VERBOSE]:"log",[A.INFO]:"info",[A.WARN]:"warn",[A.ERROR]:"error"},eZ=(t,n,...r)=>{if(n<t.logLevel)return;let i=new Date().toISOString(),s=eX[n];if(s)console[s](`[${i}]  ${t.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${n})`)};class e0{constructor(t){this.name=t,this._logLevel=eJ,this._logHandler=eZ,this._userLogHandler=null,eQ.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in A))throw TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?eY[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,A.DEBUG,...t),this._logHandler(this,A.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,A.VERBOSE,...t),this._logHandler(this,A.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,A.INFO,...t),this._logHandler(this,A.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,A.WARN,...t),this._logHandler(this,A.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,A.ERROR,...t),this._logHandler(this,A.ERROR,...t)}}const e1=(t,n)=>n.some(n=>t instanceof n),e2=new WeakMap,e6=new WeakMap,e3=new WeakMap,e5=new WeakMap,e8=new WeakMap;let e4={get(t,n,r){if(t instanceof IDBTransaction){if("done"===n)return e6.get(t);if("objectStoreNames"===n)return t.objectStoreNames||e3.get(t);if("store"===n)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return e7(t[n])},set:(t,n,r)=>(t[n]=r,!0),has:(t,n)=>t instanceof IDBTransaction&&("done"===n||"store"===n)||n in t};function e7(r){if(r instanceof IDBRequest)return function(t){let n=new Promise((n,r)=>{let i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(e7(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return n.then(n=>{n instanceof IDBCursor&&e2.set(n,t)}).catch(()=>{}),e8.set(n,t),n}(r);if(e5.has(r))return e5.get(r);let i=function(r){if("function"==typeof r)return r!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(n||(n=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(r)?function(...t){return r.apply(e9(this),t),e7(e2.get(this))}:function(...t){return e7(r.apply(e9(this),t))}:function(t,...n){let i=r.call(e9(this),t,...n);return e3.set(i,t.sort?t.sort():[t]),e7(i)};return(r instanceof IDBTransaction&&function(t){if(e6.has(t))return;let n=new Promise((n,r)=>{let i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});e6.set(t,n)}(r),e1(r,t||(t=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(r,e4):r}(r);return i!==r&&(e5.set(r,i),e8.set(i,r)),i}const e9=t=>e8.get(t),te=["get","getKey","getAll","getAllKeys","count"],tt=["put","add","delete","clear"],tn=new Map;function tr(t,n){if(!(t instanceof IDBDatabase&&!(n in t)&&"string"==typeof n))return;if(tn.get(n))return tn.get(n);let r=n.replace(/FromIndex$/,""),i=n!==r,s=tt.includes(r);if(!(r in(i?IDBIndex:IDBObjectStore).prototype)||!(s||te.includes(r)))return;let o=async function(t,...n){let o=this.transaction(t,s?"readwrite":"readonly"),a=o.store;return i&&(a=a.index(n.shift())),(await Promise.all([a[r](...n),s&&o.done]))[0]};return tn.set(n,o),o}e4={...o=e4,get:(t,n,r)=>tr(t,n)||o.get(t,n,r),has:(t,n)=>!!tr(t,n)||o.has(t,n)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(!function(t){let n=t.getComponent();return(null==n?void 0:n.type)==="VERSION"}(t))return null;{let n=t.getImmediate();return`${n.library}/${n.version}`}}).filter(t=>t).join(" ")}}const ts="@firebase/app",to="0.11.2",ta=new e0("@firebase/app"),tl="[DEFAULT]",tu={[ts]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},th=new Map,tc=new Map,tf=new Map;function td(t,n){try{t.container.addComponent(n)}catch(r){ta.debug(`Component ${n.name} failed to register with FirebaseApp ${t.name}`,r)}}function tp(t){let n=t.name;if(tf.has(n))return ta.debug(`There were multiple attempts to register component ${n}.`),!1;for(let r of(tf.set(n,t),th.values()))td(r,t);for(let n of tc.values())td(n,t);return!0}function tg(t,n){let r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(n)}function tm(t){return null!=t&&void 0!==t.settings}const ty=new eP("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ez("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ty.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="11.4.0";function tE(t,n={}){let r=t;"object"!=typeof n&&(n={name:n});let i=Object.assign({name:tl,automaticDataCollectionEnabled:!1},n),s=i.name;if("string"!=typeof s||!s)throw ty.create("bad-app-name",{appName:String(s)});if(r||(r=eR()),!r)throw ty.create("no-options");let o=th.get(s);if(o){if(eU(r,o.options)&&eU(i,o.config))return o;throw ty.create("duplicate-app",{appName:s})}let a=new eW(s);for(let t of tf.values())a.addComponent(t);let l=new tv(r,i,a);return th.set(s,l),l}function t_(t=tl){let n=th.get(t);if(!n&&t===tl&&eR())return tE();if(!n)throw ty.create("no-app",{appName:t});return n}function tb(t,n,r){var i;let s=null!==(i=tu[t])&&void 0!==i?i:t;r&&(s+=`-${r}`);let o=s.match(/\s|\//),a=n.match(/\s|\//);if(o||a){let t=[`Unable to register library "${s}" with version "${n}":`];o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${n}" contains illegal characters (whitespace or "/")`),ta.warn(t.join(" "));return}tp(new ez(`${s}-version`,()=>({library:s,version:n}),"VERSION"))}const tI="firebase-heartbeat-store";let tT=null;function tC(){return tT||(tT=(function(t,n,{blocked:r,upgrade:i,blocking:s,terminated:o}={}){let a=indexedDB.open(t,1),l=e7(a);return i&&a.addEventListener("upgradeneeded",t=>{i(e7(a.result),t.oldVersion,t.newVersion,e7(a.transaction),t)}),r&&a.addEventListener("blocked",t=>r(t.oldVersion,t.newVersion,t)),l.then(t=>{o&&t.addEventListener("close",()=>o()),s&&t.addEventListener("versionchange",t=>s(t.oldVersion,t.newVersion,t))}).catch(()=>{}),l})("firebase-heartbeat-database",0,{upgrade:(t,n)=>{if(0===n)try{t.createObjectStore(tI)}catch(t){console.warn(t)}}}).catch(t=>{throw ty.create("idb-open",{originalErrorMessage:t.message})})),tT}async function tS(t){try{let n=(await tC()).transaction(tI),r=await n.objectStore(tI).get(tk(t));return await n.done,r}catch(t){if(t instanceof eL)ta.warn(t.message);else{let n=ty.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});ta.warn(n.message)}}}async function tA(t,n){try{let r=(await tC()).transaction(tI,"readwrite"),i=r.objectStore(tI);await i.put(n,tk(t)),await r.done}catch(t){if(t instanceof eL)ta.warn(t.message);else{let n=ty.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});ta.warn(n.message)}}}function tk(t){return`${t.name}!${t.options.appId}`}class tN{constructor(t){this.container=t,this._heartbeatsCache=null;let n=this.container.getProvider("app").getImmediate();this._storage=new tO(n),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){var t,n;try{let r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=tR();if((null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(n=this._heartbeatsCache)||void 0===n?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(t=>t.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>30){let t=function(t){if(0===t.length)return -1;let n=0,r=t[0].date;for(let i=1;i<t.length;i++)t[i].date<r&&(r=t[i].date,n=i);return n}(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(t,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){ta.warn(t)}}async getHeartbeatsHeader(){var t;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let n=tR(),{heartbeatsToSend:r,unsentEntries:i}=function(t,n=1024){let r=[],i=t.slice();for(let s of t){let t=r.find(t=>t.agent===s.agent);if(t){if(t.dates.push(s.date),tx(r)>n){t.dates.pop();break}}else if(r.push({agent:s.agent,dates:[s.date]}),tx(r)>n){r.pop();break}i=i.slice(1)}return{heartbeatsToSend:r,unsentEntries:i}}(this._heartbeatsCache.heartbeats),s=eb(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return ta.warn(t),""}}}function tR(){return new Date().toISOString().substring(0,10)}class tO{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise((t,n)=>{try{let r=!0,i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),r||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{r=!1},s.onerror=()=>{var t;n((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(t){n(t)}}).then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let t=await tS(this.app);return(null==t?void 0:t.heartbeats)?t:{heartbeats:[]}}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){let r=await this.read();return tA(this.app,{lastSentHeartbeatDate:null!==(n=t.lastSentHeartbeatDate)&&void 0!==n?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var n;if(await this._canUseIndexedDBPromise){let r=await this.read();return tA(this.app,{lastSentHeartbeatDate:null!==(n=t.lastSentHeartbeatDate)&&void 0!==n?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}}}function tx(t){return eb(JSON.stringify({version:2,heartbeats:t})).length}tp(new ez("platform-logger",t=>new ti(t),"PRIVATE")),tp(new ez("heartbeat",t=>new tN(t),"PRIVATE")),tb(ts,to,""),tb(ts,to,"esm2017"),tb("fire-js",""),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tb("firebase","11.4.0","app");var tD="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==er?er:"undefined"!=typeof self?self:{},tL={};(function(){function t(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(t,n,r){r||(r=0);var i=Array(16);if("string"==typeof n)for(var s=0;16>s;++s)i[s]=n.charCodeAt(r++)|n.charCodeAt(r++)<<8|n.charCodeAt(r++)<<16|n.charCodeAt(r++)<<24;else for(s=0;16>s;++s)i[s]=n[r++]|n[r++]<<8|n[r++]<<16|n[r++]<<24;n=t.g[0],r=t.g[1],s=t.g[2];var o=t.g[3],a=n+(o^r&(s^o))+i[0]+0xd76aa478&0xffffffff;a=o+(s^(n=r+(a<<7&0xffffffff|a>>>25))&(r^s))+i[1]+0xe8c7b756&0xffffffff,a=s+(r^(o=n+(a<<12&0xffffffff|a>>>20))&(n^r))+i[2]+0x242070db&0xffffffff,a=r+(n^(s=o+(a<<17&0xffffffff|a>>>15))&(o^n))+i[3]+0xc1bdceee&0xffffffff,a=n+(o^(r=s+(a<<22&0xffffffff|a>>>10))&(s^o))+i[4]+0xf57c0faf&0xffffffff,a=o+(s^(n=r+(a<<7&0xffffffff|a>>>25))&(r^s))+i[5]+0x4787c62a&0xffffffff,a=s+(r^(o=n+(a<<12&0xffffffff|a>>>20))&(n^r))+i[6]+0xa8304613&0xffffffff,a=r+(n^(s=o+(a<<17&0xffffffff|a>>>15))&(o^n))+i[7]+0xfd469501&0xffffffff,a=n+(o^(r=s+(a<<22&0xffffffff|a>>>10))&(s^o))+i[8]+0x698098d8&0xffffffff,a=o+(s^(n=r+(a<<7&0xffffffff|a>>>25))&(r^s))+i[9]+0x8b44f7af&0xffffffff,a=s+(r^(o=n+(a<<12&0xffffffff|a>>>20))&(n^r))+i[10]+0xffff5bb1&0xffffffff,a=r+(n^(s=o+(a<<17&0xffffffff|a>>>15))&(o^n))+i[11]+0x895cd7be&0xffffffff,a=n+(o^(r=s+(a<<22&0xffffffff|a>>>10))&(s^o))+i[12]+0x6b901122&0xffffffff,a=o+(s^(n=r+(a<<7&0xffffffff|a>>>25))&(r^s))+i[13]+0xfd987193&0xffffffff,a=s+(r^(o=n+(a<<12&0xffffffff|a>>>20))&(n^r))+i[14]+0xa679438e&0xffffffff,a=r+(n^(s=o+(a<<17&0xffffffff|a>>>15))&(o^n))+i[15]+0x49b40821&0xffffffff,r=s+(a<<22&0xffffffff|a>>>10),a=n+(s^o&(r^s))+i[1]+0xf61e2562&0xffffffff,n=r+(a<<5&0xffffffff|a>>>27),a=o+(r^s&(n^r))+i[6]+0xc040b340&0xffffffff,o=n+(a<<9&0xffffffff|a>>>23),a=s+(n^r&(o^n))+i[11]+0x265e5a51&0xffffffff,s=o+(a<<14&0xffffffff|a>>>18),a=r+(o^n&(s^o))+i[0]+0xe9b6c7aa&0xffffffff,r=s+(a<<20&0xffffffff|a>>>12),a=n+(s^o&(r^s))+i[5]+0xd62f105d&0xffffffff,n=r+(a<<5&0xffffffff|a>>>27),a=o+(r^s&(n^r))+i[10]+0x2441453&0xffffffff,o=n+(a<<9&0xffffffff|a>>>23),a=s+(n^r&(o^n))+i[15]+0xd8a1e681&0xffffffff,s=o+(a<<14&0xffffffff|a>>>18),a=r+(o^n&(s^o))+i[4]+0xe7d3fbc8&0xffffffff,r=s+(a<<20&0xffffffff|a>>>12),a=n+(s^o&(r^s))+i[9]+0x21e1cde6&0xffffffff,n=r+(a<<5&0xffffffff|a>>>27),a=o+(r^s&(n^r))+i[14]+0xc33707d6&0xffffffff,o=n+(a<<9&0xffffffff|a>>>23),a=s+(n^r&(o^n))+i[3]+0xf4d50d87&0xffffffff,s=o+(a<<14&0xffffffff|a>>>18),a=r+(o^n&(s^o))+i[8]+0x455a14ed&0xffffffff,r=s+(a<<20&0xffffffff|a>>>12),a=n+(s^o&(r^s))+i[13]+0xa9e3e905&0xffffffff,n=r+(a<<5&0xffffffff|a>>>27),a=o+(r^s&(n^r))+i[2]+0xfcefa3f8&0xffffffff,o=n+(a<<9&0xffffffff|a>>>23),a=s+(n^r&(o^n))+i[7]+0x676f02d9&0xffffffff,s=o+(a<<14&0xffffffff|a>>>18),a=r+(o^n&(s^o))+i[12]+0x8d2a4c8a&0xffffffff,a=n+((r=s+(a<<20&0xffffffff|a>>>12))^s^o)+i[5]+0xfffa3942&0xffffffff,a=o+((n=r+(a<<4&0xffffffff|a>>>28))^r^s)+i[8]+0x8771f681&0xffffffff,a=s+((o=n+(a<<11&0xffffffff|a>>>21))^n^r)+i[11]+0x6d9d6122&0xffffffff,a=r+((s=o+(a<<16&0xffffffff|a>>>16))^o^n)+i[14]+0xfde5380c&0xffffffff,a=n+((r=s+(a<<23&0xffffffff|a>>>9))^s^o)+i[1]+0xa4beea44&0xffffffff,a=o+((n=r+(a<<4&0xffffffff|a>>>28))^r^s)+i[4]+0x4bdecfa9&0xffffffff,a=s+((o=n+(a<<11&0xffffffff|a>>>21))^n^r)+i[7]+0xf6bb4b60&0xffffffff,a=r+((s=o+(a<<16&0xffffffff|a>>>16))^o^n)+i[10]+0xbebfbc70&0xffffffff,a=n+((r=s+(a<<23&0xffffffff|a>>>9))^s^o)+i[13]+0x289b7ec6&0xffffffff,a=o+((n=r+(a<<4&0xffffffff|a>>>28))^r^s)+i[0]+0xeaa127fa&0xffffffff,a=s+((o=n+(a<<11&0xffffffff|a>>>21))^n^r)+i[3]+0xd4ef3085&0xffffffff,a=r+((s=o+(a<<16&0xffffffff|a>>>16))^o^n)+i[6]+0x4881d05&0xffffffff,a=n+((r=s+(a<<23&0xffffffff|a>>>9))^s^o)+i[9]+0xd9d4d039&0xffffffff,a=o+((n=r+(a<<4&0xffffffff|a>>>28))^r^s)+i[12]+0xe6db99e5&0xffffffff,a=s+((o=n+(a<<11&0xffffffff|a>>>21))^n^r)+i[15]+0x1fa27cf8&0xffffffff,a=r+((s=o+(a<<16&0xffffffff|a>>>16))^o^n)+i[2]+0xc4ac5665&0xffffffff,r=s+(a<<23&0xffffffff|a>>>9),a=n+(s^(r|~o))+i[0]+0xf4292244&0xffffffff,n=r+(a<<6&0xffffffff|a>>>26),a=o+(r^(n|~s))+i[7]+0x432aff97&0xffffffff,o=n+(a<<10&0xffffffff|a>>>22),a=s+(n^(o|~r))+i[14]+0xab9423a7&0xffffffff,s=o+(a<<15&0xffffffff|a>>>17),a=r+(o^(s|~n))+i[5]+0xfc93a039&0xffffffff,r=s+(a<<21&0xffffffff|a>>>11),a=n+(s^(r|~o))+i[12]+0x655b59c3&0xffffffff,n=r+(a<<6&0xffffffff|a>>>26),a=o+(r^(n|~s))+i[3]+0x8f0ccc92&0xffffffff,o=n+(a<<10&0xffffffff|a>>>22),a=s+(n^(o|~r))+i[10]+0xffeff47d&0xffffffff,s=o+(a<<15&0xffffffff|a>>>17),a=r+(o^(s|~n))+i[1]+0x85845dd1&0xffffffff,r=s+(a<<21&0xffffffff|a>>>11),a=n+(s^(r|~o))+i[8]+0x6fa87e4f&0xffffffff,n=r+(a<<6&0xffffffff|a>>>26),a=o+(r^(n|~s))+i[15]+0xfe2ce6e0&0xffffffff,o=n+(a<<10&0xffffffff|a>>>22),a=s+(n^(o|~r))+i[6]+0xa3014314&0xffffffff,s=o+(a<<15&0xffffffff|a>>>17),a=r+(o^(s|~n))+i[13]+0x4e0811a1&0xffffffff,r=s+(a<<21&0xffffffff|a>>>11),a=n+(s^(r|~o))+i[4]+0xf7537e82&0xffffffff,n=r+(a<<6&0xffffffff|a>>>26),a=o+(r^(n|~s))+i[11]+0xbd3af235&0xffffffff,o=n+(a<<10&0xffffffff|a>>>22),a=s+(n^(o|~r))+i[2]+0x2ad7d2bb&0xffffffff,s=o+(a<<15&0xffffffff|a>>>17),a=r+(o^(s|~n))+i[9]+0xeb86d391&0xffffffff,t.g[0]=t.g[0]+n&0xffffffff,t.g[1]=t.g[1]+(s+(a<<21&0xffffffff|a>>>11))&0xffffffff,t.g[2]=t.g[2]+s&0xffffffff,t.g[3]=t.g[3]+o&0xffffffff}function r(t,n){this.h=n;for(var r=[],i=!0,s=t.length-1;0<=s;s--){var o=0|t[s];i&&o==n||(r[s]=o,i=!1)}this.g=r}!function(t,n){function r(){}r.prototype=n.prototype,t.D=n.prototype,t.prototype=new r,t.prototype.constructor=t,t.C=function(t,r,i){for(var s=Array(arguments.length-2),o=2;o<arguments.length;o++)s[o-2]=arguments[o];return n.prototype[r].apply(t,s)}}(t,function(){this.blockSize=-1}),t.prototype.s=function(){this.g[0]=0x67452301,this.g[1]=0xefcdab89,this.g[2]=0x98badcfe,this.g[3]=0x10325476,this.o=this.h=0},t.prototype.u=function(t,r){void 0===r&&(r=t.length);for(var i=r-this.blockSize,s=this.B,o=this.h,a=0;a<r;){if(0==o)for(;a<=i;)n(this,t,a),a+=this.blockSize;if("string"==typeof t){for(;a<r;)if(s[o++]=t.charCodeAt(a++),o==this.blockSize){n(this,s),o=0;break}}else for(;a<r;)if(s[o++]=t[a++],o==this.blockSize){n(this,s),o=0;break}}this.h=o,this.o+=r},t.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var n=1;n<t.length-8;++n)t[n]=0;var r=8*this.o;for(n=t.length-8;n<t.length;++n)t[n]=255&r,r/=256;for(this.u(t),t=Array(16),n=r=0;4>n;++n)for(var i=0;32>i;i+=8)t[r++]=this.g[n]>>>i&255;return t};var i,s={};function o(t){var n;return -128<=t&&128>t?Object.prototype.hasOwnProperty.call(s,t)?s[t]:s[t]=new r([0|(n=t)],0>n?-1:0):new r([0|t],0>t?-1:0)}function a(t){if(isNaN(t)||!isFinite(t))return l;if(0>t)return d(a(-t));for(var n=[],i=1,s=0;t>=i;s++)n[s]=t/i|0,i*=0x100000000;return new r(n,0)}var l=o(0),u=o(1),h=o(0x1000000);function c(t){if(0!=t.h)return!1;for(var n=0;n<t.g.length;n++)if(0!=t.g[n])return!1;return!0}function f(t){return -1==t.h}function d(t){for(var n=t.g.length,i=[],s=0;s<n;s++)i[s]=~t.g[s];return new r(i,~t.h).add(u)}function p(t,n){return t.add(d(n))}function g(t,n){for(;(65535&t[n])!=t[n];)t[n+1]+=t[n]>>>16,t[n]&=65535,n++}function m(t,n){this.g=t,this.h=n}function y(t,n){if(c(n))throw Error("division by zero");if(c(t))return new m(l,l);if(f(t))return n=y(d(t),n),new m(d(n.g),d(n.h));if(f(n))return n=y(t,d(n)),new m(d(n.g),n.h);if(30<t.g.length){if(f(t)||f(n))throw Error("slowDivide_ only works with positive integers.");for(var r=u,i=n;0>=i.l(t);)r=v(r),i=v(i);var s=w(r,1),o=w(i,1);for(i=w(i,2),r=w(r,2);!c(i);){var h=o.add(i);0>=h.l(t)&&(s=s.add(r),o=h),i=w(i,1),r=w(r,1)}return n=p(t,s.j(n)),new m(s,n)}for(s=l;0<=t.l(n);){for(i=48>=(i=Math.ceil(Math.log(r=Math.max(1,Math.floor(t.m()/n.m())))/Math.LN2))?1:Math.pow(2,i-48),h=(o=a(r)).j(n);f(h)||0<h.l(t);)r-=i,h=(o=a(r)).j(n);c(o)&&(o=u),s=s.add(o),t=p(t,h)}return new m(s,t)}function v(t){for(var n=t.g.length+1,i=[],s=0;s<n;s++)i[s]=t.i(s)<<1|t.i(s-1)>>>31;return new r(i,t.h)}function w(t,n){var i=n>>5;n%=32;for(var s=t.g.length-i,o=[],a=0;a<s;a++)o[a]=0<n?t.i(a+i)>>>n|t.i(a+i+1)<<32-n:t.i(a+i);return new r(o,t.h)}(i=r.prototype).m=function(){if(f(this))return-d(this).m();for(var t=0,n=1,r=0;r<this.g.length;r++){var i=this.i(r);t+=(0<=i?i:0x100000000+i)*n,n*=0x100000000}return t},i.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(c(this))return"0";if(f(this))return"-"+d(this).toString(t);for(var n=a(Math.pow(t,6)),r=this,i="";;){var s=y(r,n).g,o=((0<(r=p(r,s.j(n))).g.length?r.g[0]:r.h)>>>0).toString(t);if(c(r=s))return o+i;for(;6>o.length;)o="0"+o;i=o+i}},i.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},i.l=function(t){return f(t=p(this,t))?-1:+!c(t)},i.abs=function(){return f(this)?d(this):this},i.add=function(t){for(var n=Math.max(this.g.length,t.g.length),i=[],s=0,o=0;o<=n;o++){var a=s+(65535&this.i(o))+(65535&t.i(o)),l=(a>>>16)+(this.i(o)>>>16)+(t.i(o)>>>16);s=l>>>16,a&=65535,l&=65535,i[o]=l<<16|a}return new r(i,-0x80000000&i[i.length-1]?-1:0)},i.j=function(t){if(c(this)||c(t))return l;if(f(this))return f(t)?d(this).j(d(t)):d(d(this).j(t));if(f(t))return d(this.j(d(t)));if(0>this.l(h)&&0>t.l(h))return a(this.m()*t.m());for(var n=this.g.length+t.g.length,i=[],s=0;s<2*n;s++)i[s]=0;for(s=0;s<this.g.length;s++)for(var o=0;o<t.g.length;o++){var u=this.i(s)>>>16,p=65535&this.i(s),m=t.i(o)>>>16,y=65535&t.i(o);i[2*s+2*o]+=p*y,g(i,2*s+2*o),i[2*s+2*o+1]+=u*y,g(i,2*s+2*o+1),i[2*s+2*o+1]+=p*m,g(i,2*s+2*o+1),i[2*s+2*o+2]+=u*m,g(i,2*s+2*o+2)}for(s=0;s<n;s++)i[s]=i[2*s+1]<<16|i[2*s];for(s=n;s<2*n;s++)i[s]=0;return new r(i,0)},i.A=function(t){return y(this,t).h},i.and=function(t){for(var n=Math.max(this.g.length,t.g.length),i=[],s=0;s<n;s++)i[s]=this.i(s)&t.i(s);return new r(i,this.h&t.h)},i.or=function(t){for(var n=Math.max(this.g.length,t.g.length),i=[],s=0;s<n;s++)i[s]=this.i(s)|t.i(s);return new r(i,this.h|t.h)},i.xor=function(t){for(var n=Math.max(this.g.length,t.g.length),i=[],s=0;s<n;s++)i[s]=this.i(s)^t.i(s);return new r(i,this.h^t.h)},t.prototype.digest=t.prototype.v,t.prototype.reset=t.prototype.s,t.prototype.update=t.prototype.u,N=tL.Md5=t,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=a,r.fromString=function t(n,r){if(0==n.length)throw Error("number format error: empty string");if(2>(r=r||10)||36<r)throw Error("radix out of range: "+r);if("-"==n.charAt(0))return d(t(n.substring(1),r));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=a(Math.pow(r,8)),s=l,o=0;o<n.length;o+=8){var u=Math.min(8,n.length-o),h=parseInt(n.substring(o,o+u),r);8>u?(u=a(Math.pow(r,u)),s=s.j(u).add(a(h))):s=(s=s.j(i)).add(a(h))}return s},k=tL.Integer=r}).apply(void 0!==tD?tD:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var tP="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==er?er:"undefined"!=typeof self?self:{},tM={};(function(){var t,n,r,i="function"==typeof Object.defineProperties?Object.defineProperty:function(t,n,r){return t==Array.prototype||t==Object.prototype||(t[n]=r.value),t},s=function(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof tP&&tP];for(var n=0;n<t.length;++n){var r=t[n];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")}(this);!function(t,n){if(n)e:{var r=s;t=t.split(".");for(var o=0;o<t.length-1;o++){var a=t[o];if(!(a in r))break e;r=r[a]}(n=n(o=r[t=t[t.length-1]]))!=o&&null!=n&&i(r,t,{configurable:!0,writable:!0,value:n})}}("Array.prototype.values",function(t){return t||function(){var t,n,r,i;return t=this,t instanceof String&&(t+=""),n=0,r=!1,(i={next:function(){if(!r&&n<t.length){var i,s=n++;return{value:(i=0,t[s]),done:!1}}return r=!0,{done:!0,value:void 0}}})[Symbol.iterator]=function(){return i},i}});var o=o||{},a=this||self;function l(t){var n=typeof t;return"array"==(n="object"!=n?n:t?Array.isArray(t)?"array":n:"null")||"object"==n&&"number"==typeof t.length}function u(t){var n=typeof t;return"object"==n&&null!=t||"function"==n}function h(t,n,r){return t.call.apply(t.bind,arguments)}function c(t,n,r){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(n,r)}}return function(){return t.apply(n,arguments)}}function f(t,n,r){return(f=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?h:c).apply(null,arguments)}function d(t,n){var r=Array.prototype.slice.call(arguments,1);return function(){var n=r.slice();return n.push.apply(n,arguments),t.apply(this,n)}}function p(t,n){function r(){}r.prototype=n.prototype,t.aa=n.prototype,t.prototype=new r,t.prototype.constructor=t,t.Qb=function(t,r,i){for(var s=Array(arguments.length-2),o=2;o<arguments.length;o++)s[o-2]=arguments[o];return n.prototype[r].apply(t,s)}}function g(t){let n=t.length;if(0<n){let r=Array(n);for(let i=0;i<n;i++)r[i]=t[i];return r}return[]}function m(t,n){for(let n=1;n<arguments.length;n++){let r=arguments[n];if(l(r)){let n=t.length||0,i=r.length||0;t.length=n+i;for(let s=0;s<i;s++)t[n+s]=r[s]}else t.push(r)}}function y(t){return/^[\s\xa0]*$/.test(t)}function v(){var t=a.navigator;return t&&(t=t.userAgent)?t:""}function w(t){return w[" "](t),t}w[" "]=function(){};var E=-1!=v().indexOf("Gecko")&&(-1==v().toLowerCase().indexOf("webkit")||-1!=v().indexOf("Edge"))&&-1==v().indexOf("Trident")&&-1==v().indexOf("MSIE")&&-1==v().indexOf("Edge");function _(t,n,r){for(let i in t)n.call(r,t[i],i,t)}function b(t){let n={};for(let r in t)n[r]=t[r];return n}let I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(t,n){let r,i;for(let n=1;n<arguments.length;n++){for(r in i=arguments[n])t[r]=i[r];for(let n=0;n<I.length;n++)r=I[n],Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}}var C=new class{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new S,t=>t.reset());class S{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}let A,k=!1,N=new class{constructor(){this.h=this.g=null}add(t,n){let r=C.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}},F=()=>{let t=a.Promise.resolve(void 0);A=()=>{t.then(V)}};var V=()=>{let t;for(var n;t=null,N.g&&(t=N.g,N.g=N.g.next,N.g||(N.h=null),t.next=null),n=t;){try{n.h.call(n.g)}catch(t){!function(t){a.setTimeout(()=>{throw t},0)}(t)}C.j(n),100>C.h&&(C.h++,n.next=C.g,C.g=n)}k=!1};function B(){this.s=this.s,this.C=this.C}function j(t,n){this.type=t,this.g=this.target=n,this.defaultPrevented=!1}B.prototype.s=!1,B.prototype.ma=function(){this.s||(this.s=!0,this.N())},B.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},j.prototype.h=function(){this.defaultPrevented=!0};var $=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,n=Object.defineProperty({},"passive",{get:function(){t=!0}});try{let t=()=>{};a.addEventListener("test",t,n),a.removeEventListener("test",t,n)}catch(t){}return t}();function q(t,n){if(j.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var r=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=n,n=t.relatedTarget){if(E){e:{try{w(n.nodeName);var s=!0;break e}catch(t){}s=!1}s||(n=null)}}else"mouseover"==r?n=t.fromElement:"mouseout"==r&&(n=t.toElement);this.relatedTarget=n,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:H[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&q.aa.h.call(this)}}p(q,j);var H={2:"touch",3:"pen",4:"mouse"};q.prototype.h=function(){q.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var z="closure_listenable_"+(1e6*Math.random()|0),K=0;function G(t,n,r,i,s){this.listener=t,this.proxy=null,this.src=n,this.type=r,this.capture=!!i,this.ha=s,this.key=++K,this.da=this.fa=!1}function W(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Q(t){this.src=t,this.g={},this.h=0}function Y(t,n){var r=n.type;if(r in t.g){var i,s=t.g[r],o=Array.prototype.indexOf.call(s,n,void 0);(i=0<=o)&&Array.prototype.splice.call(s,o,1),i&&(W(n),0==t.g[r].length&&(delete t.g[r],t.h--))}}function J(t,n,r,i){for(var s=0;s<t.length;++s){var o=t[s];if(!o.da&&o.listener==n&&!!r==o.capture&&o.ha==i)return s}return -1}Q.prototype.add=function(t,n,r,i,s){var o=t.toString();(t=this.g[o])||(t=this.g[o]=[],this.h++);var a=J(t,n,i,s);return -1<a?(n=t[a],r||(n.fa=!1)):((n=new G(n,this.src,o,!!i,s)).fa=r,t.push(n)),n};var X="closure_lm_"+(1e6*Math.random()|0),Z={};function ee(t,n,r,i,s,o){if(!n)throw Error("Invalid event type");var a=u(s)?!!s.capture:!!s,l=ei(t);if(l||(t[X]=l=new Q(t)),(r=l.add(n,r,i,a,o)).proxy)return r;if(i=function t(n){return er.call(t.src,t.listener,n)},r.proxy=i,i.src=t,i.listener=r,t.addEventListener)$||(s=a),void 0===s&&(s=!1),t.addEventListener(n.toString(),i,s);else if(t.attachEvent)t.attachEvent(en(n.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return r}function et(t){if("number"!=typeof t&&t&&!t.da){var n=t.src;if(n&&n[z])Y(n.i,t);else{var r=t.type,i=t.proxy;n.removeEventListener?n.removeEventListener(r,i,t.capture):n.detachEvent?n.detachEvent(en(r),i):n.addListener&&n.removeListener&&n.removeListener(i),(r=ei(n))?(Y(r,t),0==r.h&&(r.src=null,n[X]=null)):W(t)}}}function en(t){return t in Z?Z[t]:Z[t]="on"+t}function er(t,n){if(t.da)t=!0;else{n=new q(n,this);var r=t.listener,i=t.ha||t.src;t.fa&&et(t),t=r.call(i,n)}return t}function ei(t){return(t=t[X])instanceof Q?t:null}var es="__closure_events_fn_"+(1e9*Math.random()>>>0);function eo(t){return"function"==typeof t?t:(t[es]||(t[es]=function(n){return t.handleEvent(n)}),t[es])}function ea(){B.call(this),this.i=new Q(this),this.M=this,this.F=null}function el(t,n){var r,i=t.F;if(i)for(r=[];i;i=i.F)r.push(i);if(t=t.M,i=n.type||n,"string"==typeof n)n=new j(n,t);else if(n instanceof j)n.target=n.target||t;else{var s=n;T(n=new j(i,t),s)}if(s=!0,r)for(var o=r.length-1;0<=o;o--){var a=n.g=r[o];s=eu(a,i,!0,n)&&s}if(s=eu(a=n.g=t,i,!0,n)&&s,s=eu(a,i,!1,n)&&s,r)for(o=0;o<r.length;o++)s=eu(a=n.g=r[o],i,!1,n)&&s}function eu(t,n,r,i){if(!(n=t.i.g[String(n)]))return!0;n=n.concat();for(var s=!0,o=0;o<n.length;++o){var a=n[o];if(a&&!a.da&&a.capture==r){var l=a.listener,u=a.ha||a.src;a.fa&&Y(t.i,a),s=!1!==l.call(u,i)&&s}}return s&&!i.defaultPrevented}function eh(t,n,r){if("function"==typeof t)r&&(t=f(t,r));else if(t&&"function"==typeof t.handleEvent)t=f(t.handleEvent,t);else throw Error("Invalid listener argument");return 0x7fffffff<Number(n)?-1:a.setTimeout(t,n||0)}p(ea,B),ea.prototype[z]=!0,ea.prototype.removeEventListener=function(t,n,r,i){!function t(n,r,i,s,o){if(Array.isArray(r))for(var a=0;a<r.length;a++)t(n,r[a],i,s,o);else(s=u(s)?!!s.capture:!!s,i=eo(i),n&&n[z])?(n=n.i,(r=String(r).toString())in n.g&&-1<(i=J(a=n.g[r],i,s,o))&&(W(a[i]),Array.prototype.splice.call(a,i,1),0==a.length&&(delete n.g[r],n.h--))):n&&(n=ei(n))&&(r=n.g[r.toString()],n=-1,r&&(n=J(r,i,s,o)),(i=-1<n?r[n]:null)&&et(i))}(this,t,n,r,i)},ea.prototype.N=function(){if(ea.aa.N.call(this),this.i){var t,n=this.i;for(t in n.g){for(var r=n.g[t],i=0;i<r.length;i++)W(r[i]);delete n.g[t],n.h--}}this.F=null},ea.prototype.K=function(t,n,r,i){return this.i.add(String(t),n,!1,r,i)},ea.prototype.L=function(t,n,r,i){return this.i.add(String(t),n,!0,r,i)};class ec extends B{constructor(t,n){super(),this.m=t,this.l=n,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:function t(n){n.g=eh(()=>{n.g=null,n.i&&(n.i=!1,t(n))},n.l);let r=n.h;n.h=null,n.m.apply(null,r)}(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ef(t){B.call(this),this.h=t,this.g={}}p(ef,B);var ed=[];function ep(t){_(t.g,function(t,n){this.g.hasOwnProperty(n)&&et(t)},t),t.g={}}ef.prototype.N=function(){ef.aa.N.call(this),ep(this)},ef.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var eg=a.JSON.stringify,em=a.JSON.parse,ey=class{stringify(t){return a.JSON.stringify(t,void 0)}parse(t){return a.JSON.parse(t,void 0)}};function ev(){}function ew(t){return t.h||(t.h=t.i())}function eE(){}ev.prototype.h=null;var e_={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function eb(){j.call(this,"d")}function eI(){j.call(this,"c")}p(eb,j),p(eI,j);var eT={},eC=null;function eS(){return eC=eC||new ea}function eA(t){j.call(this,eT.La,t)}function ek(t){let n=eS();el(n,new eA(n))}function eN(t,n){j.call(this,eT.STAT_EVENT,t),this.stat=n}function eR(t){let n=eS();el(n,new eN(n,t))}function eO(t,n){j.call(this,eT.Ma,t),this.size=n}function ex(t,n){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){t()},n)}function eD(){this.g=!0}function eL(t,n,r,i){t.info(function(){return"XMLHTTP TEXT ("+n+"): "+function(t,n){if(!t.g)return n;if(!n)return null;try{var r=JSON.parse(n);if(r){for(t=0;t<r.length;t++)if(Array.isArray(r[t])){var i=r[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var o=s[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var a=1;a<s.length;a++)s[a]=""}}}}return eg(r)}catch(t){return n}}(t,r)+(i?" "+i:"")})}eT.La="serverreachability",p(eA,j),eT.STAT_EVENT="statevent",p(eN,j),eT.Ma="timingevent",p(eO,j),eD.prototype.xa=function(){this.g=!1},eD.prototype.info=function(){};var eP={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},eM={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function eU(){}function eF(t,n,r,i){this.j=t,this.i=n,this.l=r,this.R=i||1,this.U=new ef(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new eV}function eV(){this.i=null,this.g="",this.h=!1}p(eU,ev),eU.prototype.g=function(){return new XMLHttpRequest},eU.prototype.i=function(){return{}},n=new eU;var eB={},ej={};function e$(t,n,r){t.L=1,t.v=tr(e7(n)),t.m=r,t.P=!0,eq(t,null)}function eq(t,n){t.F=Date.now(),ez(t),t.A=e7(t.v);var r=t.A,i=t.R;Array.isArray(i)||(i=[String(i)]),tm(r.i,"t",i),t.C=0,r=t.j.J,t.h=new eV,t.g=t3(t.j,r?n:null,!t.m),0<t.O&&(t.M=new ec(f(t.Y,t,t.g),t.O)),n=t.U,r=t.g,i=t.ca;var s="readystatechange";Array.isArray(s)||(s&&(ed[0]=s.toString()),s=ed);for(var o=0;o<s.length;o++){var a=function t(n,r,i,s,o){if(s&&s.once)return function t(n,r,i,s,o){if(Array.isArray(r)){for(var a=0;a<r.length;a++)t(n,r[a],i,s,o);return null}return i=eo(i),n&&n[z]?n.L(r,i,u(s)?!!s.capture:!!s,o):ee(n,r,i,!0,s,o)}(n,r,i,s,o);if(Array.isArray(r)){for(var a=0;a<r.length;a++)t(n,r[a],i,s,o);return null}return i=eo(i),n&&n[z]?n.K(r,i,u(s)?!!s.capture:!!s,o):ee(n,r,i,!1,s,o)}(r,s[o],i||n.handleEvent,!1,n.h||n);if(!a)break;n.g[a.key]=a}n=t.H?b(t.H):{},t.m?(t.u||(t.u="POST"),n["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,n)):(t.u="GET",t.g.ea(t.A,t.u,null,n)),ek(),function(t,n,r,i,s,o){t.info(function(){if(t.g){if(o)for(var a="",l=o.split("&"),u=0;u<l.length;u++){var h=l[u].split("=");if(1<h.length){var c=h[0];h=h[1];var f=c.split("_");a=2<=f.length&&"type"==f[1]?a+(c+"=")+h+"&":a+(c+"=redacted&")}}else a=null}else a=o;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+n+"\n"+r+"\n"+a})}(t.i,t.u,t.A,t.l,t.R,t.m)}function eH(t){return!!t.g&&"GET"==t.u&&2!=t.L&&t.j.Ca}function ez(t){t.S=Date.now()+t.I,eK(t,t.I)}function eK(t,n){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ex(f(t.ba,t),n)}function eG(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function eW(t){0==t.j.G||t.J||tZ(t.j,t)}function eQ(t){eG(t);var n=t.M;n&&"function"==typeof n.ma&&n.ma(),t.M=null,ep(t.U),t.g&&(n=t.g,t.g=null,n.abort(),n.ma())}function eY(t,n){try{var r=t.j;if(0!=r.G&&(r.g==t||e1(r.h,t))){if(!t.K&&e1(r.h,t)&&3==r.G){try{var i=r.Da.g.parse(n)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){e:if(!r.u){if(r.g){if(r.g.F+3e3<t.F)tX(r),t$(r);else break e}tQ(r),eR(18)}}else r.za=s[1],0<r.za-r.T&&37500>s[2]&&r.F&&0==r.v&&!r.C&&(r.C=ex(f(r.Za,r),6e3));if(1>=e0(r.h)&&r.ca){try{r.ca()}catch(t){}r.ca=void 0}}else t1(r,11)}else if((t.K||r.g==t)&&tX(r),!y(n))for(s=r.Da.g.parse(n),n=0;n<s.length;n++){let l=s[n];if(r.T=l[0],l=l[1],2==r.G){if("c"==l[0]){r.K=l[1],r.ia=l[2];let n=l[3];null!=n&&(r.la=n,r.j.info("VER="+r.la));let s=l[4];null!=s&&(r.Aa=s,r.j.info("SVER="+r.Aa));let u=l[5];null!=u&&"number"==typeof u&&0<u&&(r.L=i=1.5*u,r.j.info("backChannelRequestTimeoutMs_="+i)),i=r;let h=t.g;if(h){let t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var o=i.h;o.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(e2(o,o.h),o.h=null))}if(i.D){let t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.ya=t,tn(i.I,i.D,t))}}if(r.G=3,r.l&&r.l.ua(),r.ba&&(r.R=Date.now()-t.F,r.j.info("Handshake RTT: "+r.R+"ms")),(i=r).qa=t6(i,i.J?i.ia:null,i.W),t.K){e6(i.h,t);var a=i.L;a&&(t.I=a),t.B&&(eG(t),ez(t)),i.g=t}else tW(i);0<r.i.length&&tH(r)}else"stop"!=l[0]&&"close"!=l[0]||t1(r,7)}else 3==r.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?t1(r,7):tj(r):"noop"!=l[0]&&r.l&&r.l.ta(l),r.v=0)}}ek(4)}catch(t){}}eF.prototype.ca=function(t){t=t.target;let n=this.M;n&&3==tU(t)?n.j():this.Y(t)},eF.prototype.Y=function(t){try{if(t==this.g)e:{let d=tU(this.g);var n=this.g.Ba();let p=this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||tF(this.g)))){this.J||4!=d||7==n||(8==n||0>=p?ek(3):ek(2)),eG(this);var r=this.g.Z();this.X=r;t:if(eH(this)){var i=tF(this.g);t="";var s=i.length,o=4==tU(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){eQ(this),eW(this);var l="";break t}this.h.i=new a.TextDecoder}for(n=0;n<s;n++)this.h.h=!0,t+=this.h.i.decode(i[n],{stream:!(o&&n==s-1)});i.length=0,this.h.g+=t,this.C=0,l=this.h.g}else l=this.g.oa();if(this.o=200==r,function(t,n,r,i,s,o,a){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+n+"\n"+r+"\n"+o+" "+a})}(this.i,this.u,this.A,this.l,this.R,d,r),this.o){if(this.T&&!this.K){t:{if(this.g){var u,h=this.g;if((u=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(u)){var c=u;break t}}c=null}if(r=c)eL(this.i,this.l,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,eY(this,r);else{this.o=!1,this.s=3,eR(12),eQ(this),eW(this);break e}}if(this.P){let t;for(r=!0;!this.J&&this.C<l.length;)if((t=function(t,n){var r=t.C,i=n.indexOf("\n",r);return -1==i?ej:isNaN(r=Number(n.substring(r,i)))?eB:(i+=1)+r>n.length?ej:(n=n.slice(i,i+r),t.C=i+r,n)}(this,l))==ej){4==d&&(this.s=4,eR(14),r=!1),eL(this.i,this.l,null,"[Incomplete Response]");break}else if(t==eB){this.s=4,eR(15),eL(this.i,this.l,l,"[Invalid Chunk]"),r=!1;break}else eL(this.i,this.l,t,null),eY(this,t);if(eH(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=l.length||this.h.h||(this.s=1,eR(16),r=!1),this.o=this.o&&r,r){if(0<l.length&&!this.W){this.W=!0;var f=this.j;f.g==this&&f.ba&&!f.M&&(f.j.info("Great, no buffering proxy detected. Bytes received: "+l.length),tY(f),f.M=!0,eR(11))}}else eL(this.i,this.l,l,"[Invalid Chunked Response]"),eQ(this),eW(this)}else eL(this.i,this.l,l,null),eY(this,l);4==d&&eQ(this),this.o&&!this.J&&(4==d?tZ(this.j,this):(this.o=!1,ez(this)))}else(function(t){let n={};t=(t.g&&2<=tU(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<t.length;i++){if(y(t[i]))continue;var r=function(t){var n=1;t=t.split(":");let r=[];for(;0<n&&t.length;)r.push(t.shift()),n--;return t.length&&r.push(t.join(":")),r}(t[i]);let s=r[0];if("string"!=typeof(r=r[1]))continue;r=r.trim();let o=n[s]||[];n[s]=o,o.push(r)}!function(t,n){for(let r in t)n.call(void 0,t[r],r,t)}(n,function(t){return t.join(", ")})})(this.g),400==r&&0<l.indexOf("Unknown SID")?(this.s=3,eR(12)):(this.s=0,eR(13)),eQ(this),eW(this)}}}catch(t){}finally{}},eF.prototype.cancel=function(){this.J=!0,eQ(this)},eF.prototype.ba=function(){this.B=null;let t=Date.now();0<=t-this.S?(function(t,n){t.info(function(){return"TIMEOUT: "+n})}(this.i,this.A),2!=this.L&&(ek(),eR(17)),eQ(this),this.s=2,eW(this)):eK(this,this.S-t)};var eJ=class{constructor(t,n){this.g=t,this.map=n}};function eX(t){this.l=t||10,t=a.PerformanceNavigationTiming?0<(t=a.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function eZ(t){return!!t.h||!!t.g&&t.g.size>=t.j}function e0(t){return t.h?1:t.g?t.g.size:0}function e1(t,n){return t.h?t.h==n:!!t.g&&t.g.has(n)}function e2(t,n){t.g?t.g.add(n):t.h=n}function e6(t,n){t.h&&t.h==n?t.h=null:t.g&&t.g.has(n)&&t.g.delete(n)}function e3(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let n=t.i;for(let r of t.g.values())n=n.concat(r.D);return n}return g(t.i)}function e5(t,n){if(t.forEach&&"function"==typeof t.forEach)t.forEach(n,void 0);else if(l(t)||"string"==typeof t)Array.prototype.forEach.call(t,n,void 0);else for(var r=function(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(l(t)||"string"==typeof t){var n=[];t=t.length;for(var r=0;r<t;r++)n.push(r);return n}for(let i in n=[],r=0,t)n[r++]=i;return n}}}(t),i=function(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(l(t)){for(var n=[],r=t.length,i=0;i<r;i++)n.push(t[i]);return n}for(i in n=[],r=0,t)n[r++]=t[i];return n}(t),s=i.length,o=0;o<s;o++)n.call(void 0,i[o],r&&r[o],t)}eX.prototype.cancel=function(){if(this.i=e3(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let t of this.g.values())t.cancel();this.g.clear()}};var e8=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function e4(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof e4){this.h=t.h,e9(this,t.j),this.o=t.o,this.g=t.g,te(this,t.s),this.l=t.l;var n=t.i,r=new tf;r.i=n.i,n.g&&(r.g=new Map(n.g),r.h=n.h),tt(this,r),this.m=t.m}else t&&(n=String(t).match(e8))?(this.h=!1,e9(this,n[1]||"",!0),this.o=ti(n[2]||""),this.g=ti(n[3]||"",!0),te(this,n[4]),this.l=ti(n[5]||"",!0),tt(this,n[6]||"",!0),this.m=ti(n[7]||"")):(this.h=!1,this.i=new tf(null,this.h))}function e7(t){return new e4(t)}function e9(t,n,r){t.j=r?ti(n,!0):n,t.j&&(t.j=t.j.replace(/:$/,""))}function te(t,n){if(n){if(isNaN(n=Number(n))||0>n)throw Error("Bad port number "+n);t.s=n}else t.s=null}function tt(t,n,r){var i,s;n instanceof tf?(t.i=n,i=t.i,(s=t.h)&&!i.j&&(td(i),i.i=null,i.g.forEach(function(t,n){var r=n.toLowerCase();n!=r&&(tp(this,n),tm(this,r,t))},i)),i.j=s):(r||(n=ts(n,th)),t.i=new tf(n,t.h))}function tn(t,n,r){t.i.set(n,r)}function tr(t){return tn(t,"zx",Math.floor(0x80000000*Math.random()).toString(36)+Math.abs(Math.floor(0x80000000*Math.random())^Date.now()).toString(36)),t}function ti(t,n){return t?n?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ts(t,n,r){return"string"==typeof t?(t=encodeURI(t).replace(n,to),r&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function to(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}e4.prototype.toString=function(){var t=[],n=this.j;n&&t.push(ts(n,ta,!0),":");var r=this.g;return(r||"file"==n)&&(t.push("//"),(n=this.o)&&t.push(ts(n,ta,!0),"@"),t.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(r=this.s)&&t.push(":",String(r))),(r=this.l)&&(this.g&&"/"!=r.charAt(0)&&t.push("/"),t.push(ts(r,"/"==r.charAt(0)?tu:tl,!0))),(r=this.i.toString())&&t.push("?",r),(r=this.m)&&t.push("#",ts(r,tc)),t.join("")};var ta=/[#\/\?@]/g,tl=/[#\?:]/g,tu=/[#\?]/g,th=/[#\?@]/g,tc=/#/g;function tf(t,n){this.h=this.g=null,this.i=t||null,this.j=!!n}function td(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,n){if(t){t=t.split("&");for(var r=0;r<t.length;r++){var i=t[r].indexOf("="),s=null;if(0<=i){var o=t[r].substring(0,i);s=t[r].substring(i+1)}else o=t[r];n(o,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,function(n,r){t.add(decodeURIComponent(n.replace(/\+/g," ")),r)}))}function tp(t,n){td(t),n=ty(t,n),t.g.has(n)&&(t.i=null,t.h-=t.g.get(n).length,t.g.delete(n))}function tg(t,n){return td(t),n=ty(t,n),t.g.has(n)}function tm(t,n,r){tp(t,n),0<r.length&&(t.i=null,t.g.set(ty(t,n),g(r)),t.h+=r.length)}function ty(t,n){return n=String(n),t.j&&(n=n.toLowerCase()),n}function tv(t,n,r,i,s){try{s&&(s.onload=null,s.onerror=null,s.onabort=null,s.ontimeout=null),i(r)}catch(t){}}function tw(){this.g=new ey}function tE(t){this.l=t.Ub||null,this.j=t.eb||!1}function t_(t,n){ea.call(this),this.D=t,this.o=n,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function tb(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function tI(t){t.readyState=4,t.l=null,t.j=null,t.v=null,tT(t)}function tT(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function tC(t){let n="";return _(t,function(t,r){n+=r,n+=":",n+=t,n+="\r\n"}),n}function tS(t,n,r){e:{for(i in r){var i=!1;break e}i=!0}i||(r=tC(r),"string"==typeof t?null!=r&&encodeURIComponent(String(r)):tn(t,n,r))}function tA(t){ea.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(r=tf.prototype).add=function(t,n){td(this),this.i=null,t=ty(this,t);var r=this.g.get(t);return r||this.g.set(t,r=[]),r.push(n),this.h+=1,this},r.forEach=function(t,n){td(this),this.g.forEach(function(r,i){r.forEach(function(r){t.call(n,r,i,this)},this)},this)},r.na=function(){td(this);let t=Array.from(this.g.values()),n=Array.from(this.g.keys()),r=[];for(let i=0;i<n.length;i++){let s=t[i];for(let t=0;t<s.length;t++)r.push(n[i])}return r},r.V=function(t){td(this);let n=[];if("string"==typeof t)tg(this,t)&&(n=n.concat(this.g.get(ty(this,t))));else{t=Array.from(this.g.values());for(let r=0;r<t.length;r++)n=n.concat(t[r])}return n},r.set=function(t,n){return td(this),this.i=null,tg(this,t=ty(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[n]),this.h+=1,this},r.get=function(t,n){return t&&0<(t=this.V(t)).length?String(t[0]):n},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";let t=[],n=Array.from(this.g.keys());for(var r=0;r<n.length;r++){var i=n[r];let o=encodeURIComponent(String(i)),a=this.V(i);for(i=0;i<a.length;i++){var s=o;""!==a[i]&&(s+="="+encodeURIComponent(String(a[i]))),t.push(s)}}return this.i=t.join("&")},p(tE,ev),tE.prototype.g=function(){return new t_(this.l,this.j)},tE.prototype.i=(t={},function(){return t}),p(t_,ea),(r=t_.prototype).open=function(t,n){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=n,this.readyState=1,tT(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let n={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(n.body=t),(this.D||a).fetch(new Request(this.A,n)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tI(this)),this.readyState=0},r.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,tT(this)),this.g&&(this.readyState=3,tT(this),this.g))){if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tb(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))}},r.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var n=t.value?t.value:new Uint8Array(0);(n=this.v.decode(n,{stream:!t.done}))&&(this.response=this.responseText+=n)}t.done?tI(this):tT(this),3==this.readyState&&tb(this)}},r.Ra=function(t){this.g&&(this.response=this.responseText=t,tI(this))},r.Qa=function(t){this.g&&(this.response=t,tI(this))},r.ga=function(){this.g&&tI(this)},r.setRequestHeader=function(t,n){this.u.append(t,n)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";let t=[],n=this.h.entries();for(var r=n.next();!r.done;)t.push((r=r.value)[0]+": "+r[1]),r=n.next();return t.join("\r\n")},Object.defineProperty(t_.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),p(tA,ea);var tk=/^https?$/i,tN=["POST","PUT"];function tR(t,n){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=n,t.m=5,tO(t),tD(t)}function tO(t){t.A||(t.A=!0,el(t,"complete"),el(t,"error"))}function tx(t){if(t.h&&void 0!==o&&(!t.v[1]||4!=tU(t)||2!=t.Z())){if(t.u&&4==tU(t))eh(t.Ea,0,t);else if(el(t,"readystatechange"),4==tU(t)){t.h=!1;try{let o=t.Z();switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var n,r,i=!0;break;default:i=!1}if(!(n=i)){if(r=0===o){var s=String(t.D).match(e8)[1]||null;!s&&a.self&&a.self.location&&(s=a.self.location.protocol.slice(0,-1)),r=!tk.test(s?s.toLowerCase():"")}n=r}if(n)el(t,"complete"),el(t,"success");else{t.m=6;try{var l=2<tU(t)?t.g.statusText:""}catch(t){l=""}t.l=l+" ["+t.Z()+"]",tO(t)}}finally{tD(t)}}}}function tD(t,n){if(t.g){tL(t);let r=t.g,i=t.v[0]?()=>{}:null;t.g=null,t.v=null,n||el(t,"ready");try{r.onreadystatechange=i}catch(t){}}}function tL(t){t.I&&(a.clearTimeout(t.I),t.I=null)}function tU(t){return t.g?t.g.readyState:0}function tF(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function tV(t,n,r){return r&&r.internalChannelParams&&r.internalChannelParams[t]||n}function tB(t){this.Aa=0,this.i=[],this.j=new eD,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tV("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tV("baseRetryDelayMs",5e3,t),this.cb=tV("retryDelaySeedMs",1e4,t),this.Wa=tV("forwardChannelMaxRetries",2,t),this.wa=tV("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new eX(t&&t.concurrentRequestLimit),this.Da=new tw,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function tj(t){if(tq(t),3==t.G){var n=t.U++,r=e7(t.I);if(tn(r,"SID",t.K),tn(r,"RID",n),tn(r,"TYPE","terminate"),tK(t,r),(n=new eF(t,t.j,n)).L=2,n.v=tr(e7(r)),r=!1,a.navigator&&a.navigator.sendBeacon)try{r=a.navigator.sendBeacon(n.v.toString(),"")}catch(t){}!r&&a.Image&&((new Image).src=n.v,r=!0),r||(n.g=t3(n.j,null),n.g.ea(n.v)),n.F=Date.now(),ez(n)}t2(t)}function t$(t){t.g&&(tY(t),t.g.cancel(),t.g=null)}function tq(t){t$(t),t.u&&(a.clearTimeout(t.u),t.u=null),tX(t),t.h.cancel(),t.s&&("number"==typeof t.s&&a.clearTimeout(t.s),t.s=null)}function tH(t){if(!eZ(t.h)&&!t.s){t.s=!0;var n=t.Ga;A||F(),k||(A(),k=!0),N.add(n,t),t.B=0}}function tz(t,n){var r;r=n?n.l:t.U++;let i=e7(t.I);tn(i,"SID",t.K),tn(i,"RID",r),tn(i,"AID",t.T),tK(t,i),t.m&&t.o&&tS(i,t.m,t.o),r=new eF(t,t.j,r,t.B+1),null===t.m&&(r.H=t.o),n&&(t.i=n.D.concat(t.i)),n=tG(t,r,1e3),r.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),e2(t.h,r),e$(r,i,n)}function tK(t,n){t.H&&_(t.H,function(t,r){tn(n,r,t)}),t.l&&e5({},function(t,r){tn(n,r,t)})}function tG(t,n,r){r=Math.min(t.i.length,r);var i=t.l?f(t.l.Na,t.l,t):null;e:{var s=t.i;let n=-1;for(;;){let t=["count="+r];-1==n?0<r?(n=s[0].g,t.push("ofs="+n)):n=0:t.push("ofs="+n);let o=!0;for(let a=0;a<r;a++){let r=s[a].g,l=s[a].map;if(0>(r-=n))n=Math.max(0,s[a].g-100),o=!1;else try{!function(t,n,r){let i=r||"";try{e5(t,function(t,r){let s=t;u(t)&&(s=eg(t)),n.push(i+r+"="+encodeURIComponent(s))})}catch(t){throw n.push(i+"type="+encodeURIComponent("_badmap")),t}}(l,t,"req"+r+"_")}catch(t){i&&i(l)}}if(o){i=t.join("&");break e}}}return n.D=t=t.i.splice(0,r),i}function tW(t){if(!t.g&&!t.u){t.Y=1;var n=t.Fa;A||F(),k||(A(),k=!0),N.add(n,t),t.v=0}}function tQ(t){return!t.g&&!t.u&&!(3<=t.v)&&(t.Y++,t.u=ex(f(t.Fa,t),t0(t,t.v)),t.v++,!0)}function tY(t){null!=t.A&&(a.clearTimeout(t.A),t.A=null)}function tJ(t){t.g=new eF(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var n=e7(t.qa);tn(n,"RID","rpc"),tn(n,"SID",t.K),tn(n,"AID",t.T),tn(n,"CI",t.F?"0":"1"),!t.F&&t.ja&&tn(n,"TO",t.ja),tn(n,"TYPE","xmlhttp"),tK(t,n),t.m&&t.o&&tS(n,t.m,t.o),t.L&&(t.g.I=t.L);var r=t.g;t=t.ia,r.L=1,r.v=tr(e7(n)),r.m=null,r.P=!0,eq(r,t)}function tX(t){null!=t.C&&(a.clearTimeout(t.C),t.C=null)}function tZ(t,n){var r=null;if(t.g==n){tX(t),tY(t),t.g=null;var i=2}else{if(!e1(t.h,n))return;r=n.D,e6(t.h,n),i=1}if(0!=t.G){if(n.o){if(1==i){r=n.m?n.m.length:0,n=Date.now()-n.F;var s,o=t.B;el(i=eS(),new eO(i,r)),tH(t)}else tW(t)}else if(3==(o=n.s)||0==o&&0<n.X||!(1==i&&(s=n,!(e0(t.h)>=t.h.j-+!!t.s)&&(t.s?(t.i=s.D.concat(t.i),!0):1!=t.G&&2!=t.G&&!(t.B>=(t.Va?0:t.Wa))&&(t.s=ex(f(t.Ga,t,s),t0(t,t.B)),t.B++,!0)))||2==i&&tQ(t)))switch(r&&0<r.length&&((n=t.h).i=n.i.concat(r)),o){case 1:t1(t,5);break;case 4:t1(t,10);break;case 3:t1(t,6);break;default:t1(t,2)}}}function t0(t,n){let r=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(r*=2),r*n}function t1(t,n){if(t.j.info("Error code "+n),2==n){var r=f(t.fb,t),i=t.Xa;let n=!i;i=new e4(i||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||e9(i,"https"),tr(i),n?function(t,n){let r=new eD;if(a.Image){let i=new Image;i.onload=d(tv,r,"TestLoadImage: loaded",!0,n,i),i.onerror=d(tv,r,"TestLoadImage: error",!1,n,i),i.onabort=d(tv,r,"TestLoadImage: abort",!1,n,i),i.ontimeout=d(tv,r,"TestLoadImage: timeout",!1,n,i),a.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else n(!1)}(i.toString(),r):function(t,n){let r=new eD,i=new AbortController,s=setTimeout(()=>{i.abort(),tv(r,"TestPingServer: timeout",!1,n)},1e4);fetch(t,{signal:i.signal}).then(t=>{clearTimeout(s),t.ok?tv(r,"TestPingServer: ok",!0,n):tv(r,"TestPingServer: server error",!1,n)}).catch(()=>{clearTimeout(s),tv(r,"TestPingServer: error",!1,n)})}(i.toString(),r)}else eR(2);t.G=0,t.l&&t.l.sa(n),t2(t),tq(t)}function t2(t){if(t.G=0,t.ka=[],t.l){let n=e3(t.h);(0!=n.length||0!=t.i.length)&&(m(t.ka,n),m(t.ka,t.i),t.h.i.length=0,g(t.i),t.i.length=0),t.l.ra()}}function t6(t,n,r){var i=r instanceof e4?e7(r):new e4(r);if(""!=i.g)n&&(i.g=n+"."+i.g),te(i,i.s);else{var s=a.location;i=s.protocol,n=n?n+"."+s.hostname:s.hostname,s=+s.port;var o=new e4(null);i&&e9(o,i),n&&(o.g=n),s&&te(o,s),r&&(o.l=r),i=o}return r=t.D,n=t.ya,r&&n&&tn(i,r,n),tn(i,"VER",t.la),tK(t,i),i}function t3(t,n,r){if(n&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(n=new tA(t.Ca&&!t.pa?new tE({eb:r}):t.pa)).Ha(t.J),n}function t5(){}function t8(){}function t4(t,n){ea.call(this),this.g=new tB(n),this.l=t,this.h=n&&n.messageUrlParams||null,t=n&&n.messageHeaders||null,n&&n.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=n&&n.initMessageHeaders||null,n&&n.messageContentType&&(t?t["X-WebChannel-Content-Type"]=n.messageContentType:t={"X-WebChannel-Content-Type":n.messageContentType}),n&&n.va&&(t?t["X-WebChannel-Client-Profile"]=n.va:t={"X-WebChannel-Client-Profile":n.va}),this.g.S=t,(t=n&&n.Sb)&&!y(t)&&(this.g.m=t),this.v=n&&n.supportsCrossDomainXhr||!1,this.u=n&&n.sendRawJson||!1,(n=n&&n.httpSessionIdParam)&&!y(n)&&(this.g.D=n,null!==(t=this.h)&&n in t&&n in(t=this.h)&&delete t[n]),this.j=new ne(this)}function t7(t){eb.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var n=t.__sm__;if(n){e:{for(let r in n){t=r;break e}t=void 0}(this.i=t)&&(t=this.i,n=null!==n&&t in n?n[t]:void 0),this.data=n}else this.data=t}function t9(){eI.call(this),this.status=1}function ne(t){this.g=t}(r=tA.prototype).Ha=function(t){this.J=t},r.ea=function(t,r,i,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);r=r?r.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():n.g(),this.v=this.o?ew(this.o):ew(n),this.g.onreadystatechange=f(this.Ea,this);try{this.B=!0,this.g.open(r,String(t),!0),this.B=!1}catch(t){tR(this,t);return}if(t=i||"",i=new Map(this.headers),s){if(Object.getPrototypeOf(s)===Object.prototype)for(var o in s)i.set(o,s[o]);else if("function"==typeof s.keys&&"function"==typeof s.get)for(let t of s.keys())i.set(t,s.get(t));else throw Error("Unknown input type for opt_headers: "+String(s))}for(let[n,l]of(s=Array.from(i.keys()).find(t=>"content-type"==t.toLowerCase()),o=a.FormData&&t instanceof a.FormData,!(0<=Array.prototype.indexOf.call(tN,r,void 0))||s||o||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i))this.g.setRequestHeader(n,l);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{tL(this),this.u=!0,this.g.send(t),this.u=!1}catch(t){tR(this,t)}},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,el(this,"complete"),el(this,"abort"),tD(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tD(this,!0)),tA.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?tx(this):this.bb())},r.bb=function(){tx(this)},r.isActive=function(){return!!this.g},r.Z=function(){try{return 2<tU(this)?this.g.status:-1}catch(t){return -1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Oa=function(t){if(this.g){var n=this.g.responseText;return t&&0==n.indexOf(t)&&(n=n.substring(t.length)),em(n)}},r.Ba=function(){return this.m},r.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(r=tB.prototype).la=8,r.G=1,r.connect=function(t,n,r,i){eR(0),this.W=t,this.H=n||{},r&&void 0!==i&&(this.H.OSID=r,this.H.OAID=i),this.F=this.X,this.I=t6(this,null,this.W),tH(this)},r.Ga=function(t){if(this.s){if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;let s=new eF(this,this.j,t),o=this.o;if(this.S&&(o?T(o=b(o),this.S):o=this.S),null!==this.m||this.O||(s.H=o,o=null),this.P)e:{for(var n=0,r=0;r<this.i.length;r++){t:{var i=this.i[r];if("__data__"in i.map&&"string"==typeof(i=i.map.__data__)){i=i.length;break t}i=void 0}if(void 0===i)break;if(4096<(n+=i)){n=r;break e}if(4096===n||r===this.i.length-1){n=r+1;break e}}n=1e3}else n=1e3;n=tG(this,s,n),tn(r=e7(this.I),"RID",t),tn(r,"CVER",22),this.D&&tn(r,"X-HTTP-Session-Id",this.D),tK(this,r),o&&(this.O?n="headers="+encodeURIComponent(String(tC(o)))+"&"+n:this.m&&tS(r,this.m,o)),e2(this.h,s),this.Ua&&tn(r,"TYPE","init"),this.P?(tn(r,"$req",n),tn(r,"SID","null"),s.T=!0,e$(s,r,null)):e$(s,r,n),this.G=2}}else 3==this.G&&(t?tz(this,t):0==this.i.length||eZ(this.h)||tz(this))}},r.Fa=function(){if(this.u=null,tJ(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=ex(f(this.ab,this),t)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,eR(10),t$(this),tJ(this))},r.Za=function(){null!=this.C&&(this.C=null,t$(this),tQ(this),eR(19))},r.fb=function(t){t?(this.j.info("Successfully pinged google.com"),eR(2)):(this.j.info("Failed to ping google.com"),eR(1))},r.isActive=function(){return!!this.l&&this.l.isActive(this)},(r=t5.prototype).ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){},t8.prototype.g=function(t,n){return new t4(t,n)},p(t4,ea),t4.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},t4.prototype.close=function(){tj(this.g)},t4.prototype.o=function(t){var n=this.g;if("string"==typeof t){var r={};r.__data__=t,t=r}else this.u&&((r={}).__data__=eg(t),t=r);n.i.push(new eJ(n.Ya++,t)),3==n.G&&tH(n)},t4.prototype.N=function(){this.g.l=null,delete this.j,tj(this.g),delete this.g,t4.aa.N.call(this)},p(t7,eb),p(t9,eI),p(ne,t5),ne.prototype.ua=function(){el(this.g,"a")},ne.prototype.ta=function(t){el(this.g,new t7(t))},ne.prototype.sa=function(t){el(this.g,new t9)},ne.prototype.ra=function(){el(this.g,"b")},t8.prototype.createWebChannel=t8.prototype.g,t4.prototype.send=t4.prototype.o,t4.prototype.open=t4.prototype.m,t4.prototype.close=t4.prototype.close,U=tM.createWebChannelTransport=function(){return new t8},M=tM.getStatEventTarget=function(){return eS()},P=tM.Event=eT,L=tM.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},eP.NO_ERROR=0,eP.TIMEOUT=8,eP.HTTP_ERROR=6,D=tM.ErrorCode=eP,eM.COMPLETE="complete",x=tM.EventType=eM,eE.EventType=e_,e_.OPEN="a",e_.CLOSE="b",e_.ERROR="c",e_.MESSAGE="d",ea.prototype.listen=ea.prototype.K,O=tM.WebChannel=eE,tM.FetchXmlHttpFactory=tE,tA.prototype.listenOnce=tA.prototype.L,tA.prototype.getLastError=tA.prototype.Ka,tA.prototype.getLastErrorCode=tA.prototype.Ba,tA.prototype.getStatus=tA.prototype.Z,tA.prototype.getResponseJson=tA.prototype.Oa,tA.prototype.getResponseText=tA.prototype.oa,tA.prototype.send=tA.prototype.ea,tA.prototype.setWithCredentials=tA.prototype.Ha,R=tM.XhrIo=tA}).apply(void 0!==tP?tP:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{}),F=function(t){for(var n,r=t.length,i=r%3,s=[],o=0,a=r-i;o<a;o+=16383)s.push(function(t,n,r){for(var i,s=[],o=n;o<r;o+=3)i=(t[o]<<16&0xff0000)+(t[o+1]<<8&65280)+(255&t[o+2]),s.push(tU[i>>18&63]+tU[i>>12&63]+tU[i>>6&63]+tU[63&i]);return s.join("")}(t,o,o+16383>a?a:o+16383));return 1===i?s.push(tU[(n=t[r-1])>>2]+tU[n<<4&63]+"=="):2===i&&s.push(tU[(n=(t[r-2]<<8)+t[r-1])>>10]+tU[n>>4&63]+tU[n<<2&63]+"="),s.join("")};for(var tU=[],tF=[],tV="undefined"!=typeof Uint8Array?Uint8Array:Array,tB="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",tj=0,t$=tB.length;tj<t$;++tj)tU[tj]=tB[tj],tF[tB.charCodeAt(tj)]=tj;tF["-".charCodeAt(0)]=62,tF["_".charCodeAt(0)]=63,V=function(t,n,r,i,s){var o,a,l=8*s-i-1,u=(1<<l)-1,h=u>>1,c=-7,f=r?s-1:0,d=r?-1:1,p=t[n+f];for(f+=d,o=p&(1<<-c)-1,p>>=-c,c+=l;c>0;o=256*o+t[n+f],f+=d,c-=8);for(a=o&(1<<-c)-1,o>>=-c,c+=i;c>0;a=256*a+t[n+f],f+=d,c-=8);if(0===o)o=1-h;else{if(o===u)return a?NaN:1/0*(p?-1:1);a+=Math.pow(2,i),o-=h}return(p?-1:1)*a*Math.pow(2,o-i)},B=function(t,n,r,i,s,o){var a,l,u,h=8*o-s-1,c=(1<<h)-1,f=c>>1,d=5960464477539062e-23*(23===s),p=i?0:o-1,g=i?1:-1,m=+(n<0||0===n&&1/n<0);for(isNaN(n=Math.abs(n))||n===1/0?(l=+!!isNaN(n),a=c):(a=Math.floor(Math.log(n)/Math.LN2),n*(u=Math.pow(2,-a))<1&&(a--,u*=2),a+f>=1?n+=d/u:n+=d*Math.pow(2,1-f),n*u>=2&&(a++,u/=2),a+f>=c?(l=0,a=c):a+f>=1?(l=(n*u-1)*Math.pow(2,s),a+=f):(l=n*Math.pow(2,f-1)*Math.pow(2,s),a=0));s>=8;t[r+p]=255&l,p+=g,l/=256,s-=8);for(a=a<<s|l,h+=s;h>0;t[r+p]=255&a,p+=g,a/=256,h-=8);t[r+p-g]|=128*m};const tq="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function tH(t){if(t>0x7fffffff)throw RangeError('The value "'+t+'" is invalid for option "size"');let n=new Uint8Array(t);return Object.setPrototypeOf(n,tz.prototype),n}function tz(t,n,r){if("number"==typeof t){if("string"==typeof n)throw TypeError('The "string" argument must be of type string. Received type number');return tW(t)}return tK(t,n,r)}function tK(t,n,r){if("string"==typeof t)return function(t,n){if(("string"!=typeof n||""===n)&&(n="utf8"),!tz.isEncoding(n))throw TypeError("Unknown encoding: "+n);let r=0|tX(t,n),i=tH(r),s=i.write(t,n);return s!==r&&(i=i.slice(0,s)),i}(t,n);if(ArrayBuffer.isView(t))return function(t){if(nc(t,Uint8Array)){let n=new Uint8Array(t);return tY(n.buffer,n.byteOffset,n.byteLength)}return tQ(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(nc(t,ArrayBuffer)||t&&nc(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(nc(t,SharedArrayBuffer)||t&&nc(t.buffer,SharedArrayBuffer)))return tY(t,n,r);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');let i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return tz.from(i,n,r);let s=function(t){if(tz.isBuffer(t)){let n=0|tJ(t.length),r=tH(n);return 0===r.length||t.copy(r,0,0,n),r}return void 0!==t.length?"number"!=typeof t.length||function(t){return t!=t}(t.length)?tH(0):tQ(t):"Buffer"===t.type&&Array.isArray(t.data)?tQ(t.data):void 0}(t);if(s)return s;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return tz.from(t[Symbol.toPrimitive]("string"),n,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function tG(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function tW(t){return tG(t),tH(t<0?0:0|tJ(t))}function tQ(t){let n=t.length<0?0:0|tJ(t.length),r=tH(n);for(let i=0;i<n;i+=1)r[i]=255&t[i];return r}function tY(t,n,r){let i;if(n<0||t.byteLength<n)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<n+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(i=void 0===n&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,n):new Uint8Array(t,n,r),tz.prototype),i}function tJ(t){if(t>=0x7fffffff)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function tX(t,n){if(tz.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||nc(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let r=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===r)return 0;let s=!1;for(;;)switch(n){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return nl(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return nu(t).length;default:if(s)return i?-1:nl(t).length;n=(""+n).toLowerCase(),s=!0}}function tZ(t,n,r){let i=!1;if((void 0===n||n<0)&&(n=0),n>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(n>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,n,r){let i=t.length;(!n||n<0)&&(n=0),(!r||r<0||r>i)&&(r=i);let s="";for(let i=n;i<r;++i)s+=nf[t[i]];return s}(this,n,r);case"utf8":case"utf-8":return t6(this,n,r);case"ascii":return function(t,n,r){let i="";r=Math.min(t.length,r);for(let s=n;s<r;++s)i+=String.fromCharCode(127&t[s]);return i}(this,n,r);case"latin1":case"binary":return function(t,n,r){let i="";r=Math.min(t.length,r);for(let s=n;s<r;++s)i+=String.fromCharCode(t[s]);return i}(this,n,r);case"base64":var s,o,a;return s=this,o=n,a=r,0===o&&a===s.length?F(s):F(s.slice(o,a));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,n,r){let i=t.slice(n,r),s="";for(let t=0;t<i.length-1;t+=2)s+=String.fromCharCode(i[t]+256*i[t+1]);return s}(this,n,r);default:if(i)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),i=!0}}function t0(t,n,r){let i=t[n];t[n]=t[r],t[r]=i}function t1(t,n,r,i,s){var o;if(0===t.length)return -1;if("string"==typeof r?(i=r,r=0):r>0x7fffffff?r=0x7fffffff:r<-0x80000000&&(r=-0x80000000),(o=r*=1)!=o&&(r=s?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(s)return -1;r=t.length-1}else if(r<0){if(!s)return -1;r=0}if("string"==typeof n&&(n=tz.from(n,i)),tz.isBuffer(n))return 0===n.length?-1:t2(t,n,r,i,s);if("number"==typeof n)return(n&=255,"function"==typeof Uint8Array.prototype.indexOf)?s?Uint8Array.prototype.indexOf.call(t,n,r):Uint8Array.prototype.lastIndexOf.call(t,n,r):t2(t,[n],r,i,s);throw TypeError("val must be string, number or Buffer")}function t2(t,n,r,i,s){let o,a=1,l=t.length,u=n.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(t.length<2||n.length<2)return -1;a=2,l/=2,u/=2,r/=2}function h(t,n){return 1===a?t[n]:t.readUInt16BE(n*a)}if(s){let i=-1;for(o=r;o<l;o++)if(h(t,o)===h(n,-1===i?0:o-i)){if(-1===i&&(i=o),o-i+1===u)return i*a}else -1!==i&&(o-=o-i),i=-1}else for(r+u>l&&(r=l-u),o=r;o>=0;o--){let r=!0;for(let i=0;i<u;i++)if(h(t,o+i)!==h(n,i)){r=!1;break}if(r)return o}return -1}function t6(t,n,r){r=Math.min(t.length,r);let i=[],s=n;for(;s<r;){let n=t[s],o=null,a=n>239?4:n>223?3:n>191?2:1;if(s+a<=r){let r,i,l,u;switch(a){case 1:n<128&&(o=n);break;case 2:(192&(r=t[s+1]))==128&&(u=(31&n)<<6|63&r)>127&&(o=u);break;case 3:r=t[s+1],i=t[s+2],(192&r)==128&&(192&i)==128&&(u=(15&n)<<12|(63&r)<<6|63&i)>2047&&(u<55296||u>57343)&&(o=u);break;case 4:r=t[s+1],i=t[s+2],l=t[s+3],(192&r)==128&&(192&i)==128&&(192&l)==128&&(u=(15&n)<<18|(63&r)<<12|(63&i)<<6|63&l)>65535&&u<1114112&&(o=u)}}null===o?(o=65533,a=1):o>65535&&(o-=65536,i.push(o>>>10&1023|55296),o=56320|1023&o),i.push(o),s+=a}return function(t){let n=t.length;if(n<=4096)return String.fromCharCode.apply(String,t);let r="",i=0;for(;i<n;)r+=String.fromCharCode.apply(String,t.slice(i,i+=4096));return r}(i)}function t3(t,n,r){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+n>r)throw RangeError("Trying to access beyond buffer length")}function t5(t,n,r,i,s,o){if(!tz.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(n>s||n<o)throw RangeError('"value" argument is out of bounds');if(r+i>t.length)throw RangeError("Index out of range")}function t8(t,n,r,i,s){ni(n,i,s,t,r,7);let o=Number(n&BigInt(0xffffffff));t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o;let a=Number(n>>BigInt(32)&BigInt(0xffffffff));return t[r++]=a,a>>=8,t[r++]=a,a>>=8,t[r++]=a,a>>=8,t[r++]=a,r}function t4(t,n,r,i,s){ni(n,i,s,t,r,7);let o=Number(n&BigInt(0xffffffff));t[r+7]=o,o>>=8,t[r+6]=o,o>>=8,t[r+5]=o,o>>=8,t[r+4]=o;let a=Number(n>>BigInt(32)&BigInt(0xffffffff));return t[r+3]=a,a>>=8,t[r+2]=a,a>>=8,t[r+1]=a,a>>=8,t[r]=a,r+8}function t7(t,n,r,i,s,o){if(r+i>t.length||r<0)throw RangeError("Index out of range")}function t9(t,n,r,i,s){return n*=1,r>>>=0,s||t7(t,n,r,4,34028234663852886e22,-34028234663852886e22),B(t,n,r,i,23,4),r+4}function ne(t,n,r,i,s){return n*=1,r>>>=0,s||t7(t,n,r,8,17976931348623157e292,-17976931348623157e292),B(t,n,r,i,52,8),r+8}tz.TYPED_ARRAY_SUPPORT=function(){try{let t=new Uint8Array(1),n={foo:function(){return 42}};return Object.setPrototypeOf(n,Uint8Array.prototype),Object.setPrototypeOf(t,n),42===t.foo()}catch(t){return!1}}(),tz.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(tz.prototype,"parent",{enumerable:!0,get:function(){if(tz.isBuffer(this))return this.buffer}}),Object.defineProperty(tz.prototype,"offset",{enumerable:!0,get:function(){if(tz.isBuffer(this))return this.byteOffset}}),tz.poolSize=8192,tz.from=function(t,n,r){return tK(t,n,r)},Object.setPrototypeOf(tz.prototype,Uint8Array.prototype),Object.setPrototypeOf(tz,Uint8Array),tz.alloc=function(t,n,r){return(tG(t),t<=0)?tH(t):void 0!==n?"string"==typeof r?tH(t).fill(n,r):tH(t).fill(n):tH(t)},tz.allocUnsafe=function(t){return tW(t)},tz.allocUnsafeSlow=function(t){return tW(t)},tz.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==tz.prototype},tz.compare=function(t,n){if(nc(t,Uint8Array)&&(t=tz.from(t,t.offset,t.byteLength)),nc(n,Uint8Array)&&(n=tz.from(n,n.offset,n.byteLength)),!tz.isBuffer(t)||!tz.isBuffer(n))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===n)return 0;let r=t.length,i=n.length;for(let s=0,o=Math.min(r,i);s<o;++s)if(t[s]!==n[s]){r=t[s],i=n[s];break}return r<i?-1:+(i<r)},tz.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},tz.concat=function(t,n){let r;if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return tz.alloc(0);if(void 0===n)for(r=0,n=0;r<t.length;++r)n+=t[r].length;let i=tz.allocUnsafe(n),s=0;for(r=0;r<t.length;++r){let n=t[r];if(nc(n,Uint8Array))s+n.length>i.length?(tz.isBuffer(n)||(n=tz.from(n)),n.copy(i,s)):Uint8Array.prototype.set.call(i,n,s);else if(tz.isBuffer(n))n.copy(i,s);else throw TypeError('"list" argument must be an Array of Buffers');s+=n.length}return i},tz.byteLength=tX,tz.prototype._isBuffer=!0,tz.prototype.swap16=function(){let t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let n=0;n<t;n+=2)t0(this,n,n+1);return this},tz.prototype.swap32=function(){let t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let n=0;n<t;n+=4)t0(this,n,n+3),t0(this,n+1,n+2);return this},tz.prototype.swap64=function(){let t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let n=0;n<t;n+=8)t0(this,n,n+7),t0(this,n+1,n+6),t0(this,n+2,n+5),t0(this,n+3,n+4);return this},tz.prototype.toString=function(){let t=this.length;return 0===t?"":0==arguments.length?t6(this,0,t):tZ.apply(this,arguments)},tz.prototype.toLocaleString=tz.prototype.toString,tz.prototype.equals=function(t){if(!tz.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===tz.compare(this,t)},tz.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},tq&&(tz.prototype[tq]=tz.prototype.inspect),tz.prototype.compare=function(t,n,r,i,s){if(nc(t,Uint8Array)&&(t=tz.from(t,t.offset,t.byteLength)),!tz.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===n&&(n=0),void 0===r&&(r=t?t.length:0),void 0===i&&(i=0),void 0===s&&(s=this.length),n<0||r>t.length||i<0||s>this.length)throw RangeError("out of range index");if(i>=s&&n>=r)return 0;if(i>=s)return -1;if(n>=r)return 1;if(n>>>=0,r>>>=0,i>>>=0,s>>>=0,this===t)return 0;let o=s-i,a=r-n,l=Math.min(o,a),u=this.slice(i,s),h=t.slice(n,r);for(let t=0;t<l;++t)if(u[t]!==h[t]){o=u[t],a=h[t];break}return o<a?-1:+(a<o)},tz.prototype.includes=function(t,n,r){return -1!==this.indexOf(t,n,r)},tz.prototype.indexOf=function(t,n,r){return t1(this,t,n,r,!0)},tz.prototype.lastIndexOf=function(t,n,r){return t1(this,t,n,r,!1)},tz.prototype.write=function(t,n,r,i){var s,o,a,l,u,h,c,f;if(void 0===n)i="utf8",r=this.length,n=0;else if(void 0===r&&"string"==typeof n)i=n,r=this.length,n=0;else if(isFinite(n))n>>>=0,isFinite(r)?(r>>>=0,void 0===i&&(i="utf8")):(i=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let d=this.length-n;if((void 0===r||r>d)&&(r=d),t.length>0&&(r<0||n<0)||n>this.length)throw RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let p=!1;for(;;)switch(i){case"hex":return function(t,n,r,i){let s;r=Number(r)||0;let o=t.length-r;i?(i=Number(i))>o&&(i=o):i=o;let a=n.length;for(i>a/2&&(i=a/2),s=0;s<i;++s){var l;let i=parseInt(n.substr(2*s,2),16);if((l=i)!=l)break;t[r+s]=i}return s}(this,t,n,r);case"utf8":case"utf-8":return s=n,o=r,nh(nl(t,this.length-s),this,s,o);case"ascii":case"latin1":case"binary":return a=n,l=r,nh(function(t){let n=[];for(let r=0;r<t.length;++r)n.push(255&t.charCodeAt(r));return n}(t),this,a,l);case"base64":return u=n,h=r,nh(nu(t),this,u,h);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=n,f=r,nh(function(t,n){let r,i;let s=[];for(let o=0;o<t.length&&!((n-=2)<0);++o)i=(r=t.charCodeAt(o))>>8,s.push(r%256),s.push(i);return s}(t,this.length-c),this,c,f);default:if(p)throw TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),p=!0}},tz.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},tz.prototype.slice=function(t,n){let r=this.length;t=~~t,n=void 0===n?r:~~n,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),n<0?(n+=r)<0&&(n=0):n>r&&(n=r),n<t&&(n=t);let i=this.subarray(t,n);return Object.setPrototypeOf(i,tz.prototype),i},tz.prototype.readUintLE=tz.prototype.readUIntLE=function(t,n,r){t>>>=0,n>>>=0,r||t3(t,n,this.length);let i=this[t],s=1,o=0;for(;++o<n&&(s*=256);)i+=this[t+o]*s;return i},tz.prototype.readUintBE=tz.prototype.readUIntBE=function(t,n,r){t>>>=0,n>>>=0,r||t3(t,n,this.length);let i=this[t+--n],s=1;for(;n>0&&(s*=256);)i+=this[t+--n]*s;return i},tz.prototype.readUint8=tz.prototype.readUInt8=function(t,n){return t>>>=0,n||t3(t,1,this.length),this[t]},tz.prototype.readUint16LE=tz.prototype.readUInt16LE=function(t,n){return t>>>=0,n||t3(t,2,this.length),this[t]|this[t+1]<<8},tz.prototype.readUint16BE=tz.prototype.readUInt16BE=function(t,n){return t>>>=0,n||t3(t,2,this.length),this[t]<<8|this[t+1]},tz.prototype.readUint32LE=tz.prototype.readUInt32LE=function(t,n){return t>>>=0,n||t3(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+0x1000000*this[t+3]},tz.prototype.readUint32BE=tz.prototype.readUInt32BE=function(t,n){return t>>>=0,n||t3(t,4,this.length),0x1000000*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},tz.prototype.readBigUInt64LE=nd(function(t){ns(t>>>=0,"offset");let n=this[t],r=this[t+7];(void 0===n||void 0===r)&&no(t,this.length-8);let i=n+256*this[++t]+65536*this[++t]+0x1000000*this[++t],s=this[++t]+256*this[++t]+65536*this[++t]+0x1000000*r;return BigInt(i)+(BigInt(s)<<BigInt(32))}),tz.prototype.readBigUInt64BE=nd(function(t){ns(t>>>=0,"offset");let n=this[t],r=this[t+7];(void 0===n||void 0===r)&&no(t,this.length-8);let i=0x1000000*n+65536*this[++t]+256*this[++t]+this[++t],s=0x1000000*this[++t]+65536*this[++t]+256*this[++t]+r;return(BigInt(i)<<BigInt(32))+BigInt(s)}),tz.prototype.readIntLE=function(t,n,r){t>>>=0,n>>>=0,r||t3(t,n,this.length);let i=this[t],s=1,o=0;for(;++o<n&&(s*=256);)i+=this[t+o]*s;return i>=(s*=128)&&(i-=Math.pow(2,8*n)),i},tz.prototype.readIntBE=function(t,n,r){t>>>=0,n>>>=0,r||t3(t,n,this.length);let i=n,s=1,o=this[t+--i];for(;i>0&&(s*=256);)o+=this[t+--i]*s;return o>=(s*=128)&&(o-=Math.pow(2,8*n)),o},tz.prototype.readInt8=function(t,n){return(t>>>=0,n||t3(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},tz.prototype.readInt16LE=function(t,n){t>>>=0,n||t3(t,2,this.length);let r=this[t]|this[t+1]<<8;return 32768&r?0xffff0000|r:r},tz.prototype.readInt16BE=function(t,n){t>>>=0,n||t3(t,2,this.length);let r=this[t+1]|this[t]<<8;return 32768&r?0xffff0000|r:r},tz.prototype.readInt32LE=function(t,n){return t>>>=0,n||t3(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},tz.prototype.readInt32BE=function(t,n){return t>>>=0,n||t3(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},tz.prototype.readBigInt64LE=nd(function(t){ns(t>>>=0,"offset");let n=this[t],r=this[t+7];return(void 0===n||void 0===r)&&no(t,this.length-8),(BigInt(this[t+4]+256*this[t+5]+65536*this[t+6]+(r<<24))<<BigInt(32))+BigInt(n+256*this[++t]+65536*this[++t]+0x1000000*this[++t])}),tz.prototype.readBigInt64BE=nd(function(t){ns(t>>>=0,"offset");let n=this[t],r=this[t+7];return(void 0===n||void 0===r)&&no(t,this.length-8),(BigInt((n<<24)+65536*this[++t]+256*this[++t]+this[++t])<<BigInt(32))+BigInt(0x1000000*this[++t]+65536*this[++t]+256*this[++t]+r)}),tz.prototype.readFloatLE=function(t,n){return t>>>=0,n||t3(t,4,this.length),V(this,t,!0,23,4)},tz.prototype.readFloatBE=function(t,n){return t>>>=0,n||t3(t,4,this.length),V(this,t,!1,23,4)},tz.prototype.readDoubleLE=function(t,n){return t>>>=0,n||t3(t,8,this.length),V(this,t,!0,52,8)},tz.prototype.readDoubleBE=function(t,n){return t>>>=0,n||t3(t,8,this.length),V(this,t,!1,52,8)},tz.prototype.writeUintLE=tz.prototype.writeUIntLE=function(t,n,r,i){if(t*=1,n>>>=0,r>>>=0,!i){let i=Math.pow(2,8*r)-1;t5(this,t,n,r,i,0)}let s=1,o=0;for(this[n]=255&t;++o<r&&(s*=256);)this[n+o]=t/s&255;return n+r},tz.prototype.writeUintBE=tz.prototype.writeUIntBE=function(t,n,r,i){if(t*=1,n>>>=0,r>>>=0,!i){let i=Math.pow(2,8*r)-1;t5(this,t,n,r,i,0)}let s=r-1,o=1;for(this[n+s]=255&t;--s>=0&&(o*=256);)this[n+s]=t/o&255;return n+r},tz.prototype.writeUint8=tz.prototype.writeUInt8=function(t,n,r){return t*=1,n>>>=0,r||t5(this,t,n,1,255,0),this[n]=255&t,n+1},tz.prototype.writeUint16LE=tz.prototype.writeUInt16LE=function(t,n,r){return t*=1,n>>>=0,r||t5(this,t,n,2,65535,0),this[n]=255&t,this[n+1]=t>>>8,n+2},tz.prototype.writeUint16BE=tz.prototype.writeUInt16BE=function(t,n,r){return t*=1,n>>>=0,r||t5(this,t,n,2,65535,0),this[n]=t>>>8,this[n+1]=255&t,n+2},tz.prototype.writeUint32LE=tz.prototype.writeUInt32LE=function(t,n,r){return t*=1,n>>>=0,r||t5(this,t,n,4,0xffffffff,0),this[n+3]=t>>>24,this[n+2]=t>>>16,this[n+1]=t>>>8,this[n]=255&t,n+4},tz.prototype.writeUint32BE=tz.prototype.writeUInt32BE=function(t,n,r){return t*=1,n>>>=0,r||t5(this,t,n,4,0xffffffff,0),this[n]=t>>>24,this[n+1]=t>>>16,this[n+2]=t>>>8,this[n+3]=255&t,n+4},tz.prototype.writeBigUInt64LE=nd(function(t,n=0){return t8(this,t,n,BigInt(0),BigInt("0xffffffffffffffff"))}),tz.prototype.writeBigUInt64BE=nd(function(t,n=0){return t4(this,t,n,BigInt(0),BigInt("0xffffffffffffffff"))}),tz.prototype.writeIntLE=function(t,n,r,i){if(t*=1,n>>>=0,!i){let i=Math.pow(2,8*r-1);t5(this,t,n,r,i-1,-i)}let s=0,o=1,a=0;for(this[n]=255&t;++s<r&&(o*=256);)t<0&&0===a&&0!==this[n+s-1]&&(a=1),this[n+s]=(t/o>>0)-a&255;return n+r},tz.prototype.writeIntBE=function(t,n,r,i){if(t*=1,n>>>=0,!i){let i=Math.pow(2,8*r-1);t5(this,t,n,r,i-1,-i)}let s=r-1,o=1,a=0;for(this[n+s]=255&t;--s>=0&&(o*=256);)t<0&&0===a&&0!==this[n+s+1]&&(a=1),this[n+s]=(t/o>>0)-a&255;return n+r},tz.prototype.writeInt8=function(t,n,r){return t*=1,n>>>=0,r||t5(this,t,n,1,127,-128),t<0&&(t=255+t+1),this[n]=255&t,n+1},tz.prototype.writeInt16LE=function(t,n,r){return t*=1,n>>>=0,r||t5(this,t,n,2,32767,-32768),this[n]=255&t,this[n+1]=t>>>8,n+2},tz.prototype.writeInt16BE=function(t,n,r){return t*=1,n>>>=0,r||t5(this,t,n,2,32767,-32768),this[n]=t>>>8,this[n+1]=255&t,n+2},tz.prototype.writeInt32LE=function(t,n,r){return t*=1,n>>>=0,r||t5(this,t,n,4,0x7fffffff,-0x80000000),this[n]=255&t,this[n+1]=t>>>8,this[n+2]=t>>>16,this[n+3]=t>>>24,n+4},tz.prototype.writeInt32BE=function(t,n,r){return t*=1,n>>>=0,r||t5(this,t,n,4,0x7fffffff,-0x80000000),t<0&&(t=0xffffffff+t+1),this[n]=t>>>24,this[n+1]=t>>>16,this[n+2]=t>>>8,this[n+3]=255&t,n+4},tz.prototype.writeBigInt64LE=nd(function(t,n=0){return t8(this,t,n,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),tz.prototype.writeBigInt64BE=nd(function(t,n=0){return t4(this,t,n,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),tz.prototype.writeFloatLE=function(t,n,r){return t9(this,t,n,!0,r)},tz.prototype.writeFloatBE=function(t,n,r){return t9(this,t,n,!1,r)},tz.prototype.writeDoubleLE=function(t,n,r){return ne(this,t,n,!0,r)},tz.prototype.writeDoubleBE=function(t,n,r){return ne(this,t,n,!1,r)},tz.prototype.copy=function(t,n,r,i){if(!tz.isBuffer(t))throw TypeError("argument should be a Buffer");if(r||(r=0),i||0===i||(i=this.length),n>=t.length&&(n=t.length),n||(n=0),i>0&&i<r&&(i=r),i===r||0===t.length||0===this.length)return 0;if(n<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(i<0)throw RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-n<i-r&&(i=t.length-n+r);let s=i-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(n,r,i):Uint8Array.prototype.set.call(t,this.subarray(r,i),n),s},tz.prototype.fill=function(t,n,r,i){let s;if("string"==typeof t){if("string"==typeof n?(i=n,n=0,r=this.length):"string"==typeof r&&(i=r,r=this.length),void 0!==i&&"string"!=typeof i)throw TypeError("encoding must be a string");if("string"==typeof i&&!tz.isEncoding(i))throw TypeError("Unknown encoding: "+i);if(1===t.length){let n=t.charCodeAt(0);("utf8"===i&&n<128||"latin1"===i)&&(t=n)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(n<0||this.length<n||this.length<r)throw RangeError("Out of range index");if(r<=n)return this;if(n>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(s=n;s<r;++s)this[s]=t;else{let o=tz.isBuffer(t)?t:tz.from(t,i),a=o.length;if(0===a)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(s=0;s<r-n;++s)this[s+n]=o[s%a]}return this};const nt={};function nn(t,n,r){nt[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:n.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function nr(t){let n="",r=t.length,i=+("-"===t[0]);for(;r>=i+4;r-=3)n=`_${t.slice(r-3,r)}${n}`;return`${t.slice(0,r)}${n}`}function ni(t,n,r,i,s,o){if(t>r||t<n){let i;let s="bigint"==typeof n?"n":"";throw i=o>3?0===n||n===BigInt(0)?`>= 0${s} and < 2${s} ** ${(o+1)*8}${s}`:`>= -(2${s} ** ${(o+1)*8-1}${s}) and < 2 ** ${(o+1)*8-1}${s}`:`>= ${n}${s} and <= ${r}${s}`,new nt.ERR_OUT_OF_RANGE("value",i,t)}ns(s,"offset"),(void 0===i[s]||void 0===i[s+o])&&no(s,i.length-(o+1))}function ns(t,n){if("number"!=typeof t)throw new nt.ERR_INVALID_ARG_TYPE(n,"number",t)}function no(t,n,r){if(Math.floor(t)!==t)throw ns(t,r),new nt.ERR_OUT_OF_RANGE(r||"offset","an integer",t);if(n<0)throw new nt.ERR_BUFFER_OUT_OF_BOUNDS;throw new nt.ERR_OUT_OF_RANGE(r||"offset",`>= ${+!!r} and <= ${n}`,t)}nn("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),nn("ERR_INVALID_ARG_TYPE",function(t,n){return`The "${t}" argument must be of type number. Received type ${typeof n}`},TypeError),nn("ERR_OUT_OF_RANGE",function(t,n,r){let i=`The value of "${t}" is out of range.`,s=r;return Number.isInteger(r)&&Math.abs(r)>0x100000000?s=nr(String(r)):"bigint"==typeof r&&(s=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(s=nr(s)),s+="n"),i+=` It must be ${n}. Received ${s}`},RangeError);const na=/[^+/0-9A-Za-z-_]/g;function nl(t,n){let r;n=n||1/0;let i=t.length,s=null,o=[];for(let a=0;a<i;++a){if((r=t.charCodeAt(a))>55295&&r<57344){if(!s){if(r>56319||a+1===i){(n-=3)>-1&&o.push(239,191,189);continue}s=r;continue}if(r<56320){(n-=3)>-1&&o.push(239,191,189),s=r;continue}r=(s-55296<<10|r-56320)+65536}else s&&(n-=3)>-1&&o.push(239,191,189);if(s=null,r<128){if((n-=1)<0)break;o.push(r)}else if(r<2048){if((n-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((n-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((n-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return o}function nu(t){return function(t){var n,r,i=function(t){var n=t.length;if(n%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");-1===r&&(r=n);var i=r===n?0:4-r%4;return[r,i]}(t),s=i[0],o=i[1],a=new tV((s+o)*3/4-o),l=0,u=o>0?s-4:s;for(r=0;r<u;r+=4)n=tF[t.charCodeAt(r)]<<18|tF[t.charCodeAt(r+1)]<<12|tF[t.charCodeAt(r+2)]<<6|tF[t.charCodeAt(r+3)],a[l++]=n>>16&255,a[l++]=n>>8&255,a[l++]=255&n;return 2===o&&(n=tF[t.charCodeAt(r)]<<2|tF[t.charCodeAt(r+1)]>>4,a[l++]=255&n),1===o&&(n=tF[t.charCodeAt(r)]<<10|tF[t.charCodeAt(r+1)]<<4|tF[t.charCodeAt(r+2)]>>2,a[l++]=n>>8&255,a[l++]=255&n),a}(function(t){if((t=(t=t.split("=")[0]).trim().replace(na,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function nh(t,n,r,i){let s;for(s=0;s<i&&!(s+r>=n.length)&&!(s>=t.length);++s)n[s+r]=t[s];return s}function nc(t,n){return t instanceof n||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===n.name}const nf=function(){let t="0123456789abcdef",n=Array(256);for(let r=0;r<16;++r){let i=16*r;for(let s=0;s<16;++s)n[i+s]=t[r]+t[s]}return n}();function nd(t){return"undefined"==typeof BigInt?np:t}function np(){throw Error("BigInt not supported")}const ng="@firebase/firestore",nm="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ny.UNAUTHENTICATED=new ny(null),ny.GOOGLE_CREDENTIALS=new ny("google-credentials-uid"),ny.FIRST_PARTY=new ny("first-party-uid"),ny.MOCK_USER=new ny("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nv="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw=new e0("@firebase/firestore");function nE(){return nw.logLevel}function n_(t,...n){if(nw.logLevel<=A.DEBUG){let r=n.map(nT);nw.debug(`Firestore (${nv}): ${t}`,...r)}}function nb(t,...n){if(nw.logLevel<=A.ERROR){let r=n.map(nT);nw.error(`Firestore (${nv}): ${t}`,...r)}}function nI(t,...n){if(nw.logLevel<=A.WARN){let r=n.map(nT);nw.warn(`Firestore (${nv}): ${t}`,...r)}}function nT(t){if("string"==typeof t)return t;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(t)}catch(n){return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(t="Unexpected state"){let n=`FIRESTORE (${nv}) INTERNAL ASSERTION FAILED: `+t;throw nb(n),Error(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class nA extends eL{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class nR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ny.UNAUTHENTICATED))}shutdown(){}}class nO{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class nx{constructor(t){this.t=t,this.currentUser=ny.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){void 0===this.o||nC();let r=this.i,i=t=>this.i!==r?(r=this.i,n(t)):Promise.resolve(),s=new nk;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new nk,t.enqueueRetryable(()=>i(this.currentUser))};let o=()=>{let n=s;t.enqueueRetryable(async()=>{await n.promise,await i(this.currentUser)})},a=t=>{n_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(t=>a(t)),setTimeout(()=>{if(!this.auth){let t=this.t.getImmediate({optional:!0});t?a(t):(n_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new nk)}},0),o()}getToken(){let t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(n=>this.i!==t?(n_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?("string"==typeof n.accessToken||nC(),new nN(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let t=this.auth&&this.auth.getUid();return null===t||"string"==typeof t||nC(),new ny(t)}}class nD{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=ny.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);let t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class nL{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new nD(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(ny.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nP{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nM{constructor(t,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,tm(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,n){void 0===this.o||nC();let r=t=>{null!=t.error&&n_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);let r=t.token!==this.R;return this.R=t.token,n_("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?n(t.token):Promise.resolve()};this.o=n=>{t.enqueueRetryable(()=>r(n))};let i=t=>{n_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(t=>i(t)),setTimeout(()=>{if(!this.appCheck){let t=this.A.getImmediate({optional:!0});t?i(t):n_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new nP(this.V));let t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?("string"==typeof t.token||nC(),this.R=t.token,new nP(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nU{static newId(){let t=62*Math.floor(256/62),n="";for(;n.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t){let n="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(40);if(n&&"function"==typeof n.getRandomValues)n.getRandomValues(r);else for(let t=0;t<40;t++)r[t]=Math.floor(256*Math.random());return r}(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(r[i]%62))}return n}}function nF(t,n){return t<n?-1:+(t>n)}function nV(t,n,r){return t.length===n.length&&t.every((t,i)=>r(t,n[i]))}class nB{static now(){return nB.fromMillis(Date.now())}static fromDate(t){return nB.fromMillis(t.getTime())}static fromMillis(t){let n=Math.floor(t/1e3),r=Math.floor((t-1e3*n)*1e6);return new nB(n,r)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0||n>=1e9)throw new nA(nS.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-0xe7791f700||t>=0x3afff44180)throw new nA(nS.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?nF(this.nanoseconds,t.nanoseconds):nF(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -0xe7791f700).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nj{static fromTimestamp(t){return new nj(t)}static min(){return new nj(new nB(0,0))}static max(){return new nj(new nB(0x3afff4417f,0x3b9ac9ff))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n$="__name__";class nq{constructor(t,n,r){void 0===n?n=0:n>t.length&&nC(),void 0===r?r=t.length-n:r>t.length-n&&nC(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return 0===nq.comparator(this,t)}child(t){let n=this.segments.slice(this.offset,this.limit());return t instanceof nq?t.forEach(t=>{n.push(t)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){let r=Math.min(t.length,n.length);for(let i=0;i<r;i++){let r=nq.compareSegments(t.get(i),n.get(i));if(0!==r)return r}return Math.sign(t.length-n.length)}static compareSegments(t,n){let r=nq.isNumericId(t),i=nq.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?nq.extractNumericId(t).compare(nq.extractNumericId(n)):t<n?-1:+(t>n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return k.fromString(t.substring(4,t.length-2))}}class nH extends nq{construct(t,n,r){return new nH(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){let n=[];for(let r of t){if(r.indexOf("//")>=0)throw new nA(nS.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(t=>t.length>0))}return new nH(n)}static emptyPath(){return new nH([])}}const nz=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nK extends nq{construct(t,n,r){return new nK(t,n,r)}static isValidIdentifier(t){return nz.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nK.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===n$}static keyField(){return new nK([n$])}static fromServerFormat(t){let n=[],r="",i=0,s=()=>{if(0===r.length)throw new nA(nS.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""},o=!1;for(;i<t.length;){let n=t[i];if("\\"===n){if(i+1===t.length)throw new nA(nS.INVALID_ARGUMENT,"Path has trailing escape character: "+t);let n=t[i+1];if("\\"!==n&&"."!==n&&"`"!==n)throw new nA(nS.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=n,i+=2}else"`"===n?o=!o:"."!==n||o?r+=n:s(),i++}if(s(),o)throw new nA(nS.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new nK(n)}static emptyPath(){return new nK([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nG{constructor(t){this.path=t}static fromPath(t){return new nG(nH.fromString(t))}static fromName(t){return new nG(nH.fromString(t).popFirst(5))}static empty(){return new nG(nH.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===nH.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,n){return nH.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new nG(new nH(t.slice()))}}class nW{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new nW(nj.min(),nG.empty(),-1)}static max(){return new nW(nj.max(),nG.empty(),-1)}}class nQ{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nY(t){if(t.code!==nS.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;n_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nJ{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&nC(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new nJ((r,i)=>{this.nextCallback=n=>{this.wrapSuccess(t,n).next(r,i)},this.catchCallback=t=>{this.wrapFailure(n,t).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{let n=t();return n instanceof nJ?n:nJ.resolve(n)}catch(t){return nJ.reject(t)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):nJ.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):nJ.reject(n)}static resolve(t){return new nJ((n,r)=>{n(t)})}static reject(t){return new nJ((n,r)=>{r(t)})}static waitFor(t){return new nJ((n,r)=>{let i=0,s=0,o=!1;t.forEach(t=>{++i,t.next(()=>{++s,o&&s===i&&n()},t=>r(t))}),o=!0,s===i&&n()})}static or(t){let n=nJ.resolve(!1);for(let r of t)n=n.next(t=>t?nJ.resolve(t):r());return n}static forEach(t,n){let r=[];return t.forEach((t,i)=>{r.push(n.call(this,t,i))}),this.waitFor(r)}static mapArray(t,n){return new nJ((r,i)=>{let s=t.length,o=Array(s),a=0;for(let l=0;l<s;l++){let u=l;n(t[u]).next(t=>{o[u]=t,++a===s&&r(o)},t=>i(t))}})}static doWhile(t,n){return new nJ((r,i)=>{let s=()=>{!0===t()?n().next(()=>{s()},i):r()};s()})}}function nX(t){return"IndexedDbTransactionError"===t.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nZ{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=t=>this.oe(t),this._e=t=>n.writeSequenceNumber(t))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){let t=++this.previousValue;return this._e&&this._e(t),t}}nZ.ae=-1;function n0(t){return 0===t&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(t){let n=0;for(let r in t)Object.prototype.hasOwnProperty.call(t,r)&&n++;return n}function n2(t,n){for(let r in t)Object.prototype.hasOwnProperty.call(t,r)&&n(r,t[r])}function n6(t){for(let n in t)if(Object.prototype.hasOwnProperty.call(t,n))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n3{constructor(t,n){this.comparator=t,this.root=n||n8.EMPTY}insert(t,n){return new n3(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,n8.BLACK,null,null))}remove(t){return new n3(this.comparator,this.root.remove(t,this.comparator).copy(null,null,n8.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){let r=this.comparator(t,n.key);if(0===r)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(t,r.key);if(0===i)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){let t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new n5(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new n5(this.root,t,this.comparator,!1)}getReverseIterator(){return new n5(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new n5(this.root,t,this.comparator,!0)}}class n5{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop(),n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class n8{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=null!=r?r:n8.RED,this.left=null!=i?i:n8.EMPTY,this.right=null!=s?s:n8.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new n8(null!=t?t:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this,s=r(t,i.key);return(i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):0===s?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r))).fixUp()}removeMin(){if(this.left.isEmpty())return n8.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),(t=t.copy(null,null,null,t.left.removeMin(),null)).fixUp()}remove(t,n){let r,i=this;if(0>n(t,i.key))i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===n(t,i.key)){if(i.right.isEmpty())return n8.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=(t=(t=t.copy(null,null,null,null,t.right.rotateRight())).rotateLeft()).colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=(t=t.rotateRight()).colorFlip()),t}rotateLeft(){let t=this.copy(null,null,n8.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){let t=this.copy(null,null,n8.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){let t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw nC();let t=this.left.check();if(t!==this.right.check())throw nC();return t+ +!this.isRed()}}n8.EMPTY=null,n8.RED=!0,n8.BLACK=!1,n8.EMPTY=new class{constructor(){this.size=0}get key(){throw nC()}get value(){throw nC()}get color(){throw nC()}get left(){throw nC()}get right(){throw nC()}copy(t,n,r,i,s){return this}insert(t,n,r){return new n8(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(t){this.comparator=t,this.data=new n3(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){let r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=void 0!==n?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){let n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new n7(this.data.getIterator())}getIteratorFrom(t){return new n7(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(t=>{n=n.add(t)}),n}isEqual(t){if(!(t instanceof n4)||this.size!==t.size)return!1;let n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){let t=n.getNext().key,i=r.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){let t=[];return this.forEach(n=>{t.push(n)}),t}toString(){let t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){let n=new n4(this.comparator);return n.data=t,n}}class n7{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n9{constructor(t){this.fields=t,t.sort(nK.comparator)}static empty(){return new n9([])}unionWith(t){let n=new n4(nK.comparator);for(let t of this.fields)n=n.add(t);for(let r of t)n=n.add(r);return new n9(n.toArray())}covers(t){for(let n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return nV(this.fields,t.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.binaryString=t}static fromBase64String(t){return new rt(function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new re("Invalid base64 string: "+t):t}}(t))}static fromUint8Array(t){return new rt(function(t){let n="";for(let r=0;r<t.length;++r)n+=String.fromCharCode(t[r]);return n}(t))}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(t){let n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return nF(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const rn=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rr(t){if(t||nC(),"string"==typeof t){let n=0,r=rn.exec(t);if(r||nC(),r[1]){let t=r[1];n=Number(t=(t+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(t).getTime()/1e3),nanos:n}}return{seconds:ri(t.seconds),nanos:ri(t.nanos)}}function ri(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function rs(t){return"string"==typeof t?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro="server_timestamp",ra="__type__",rl="__previous_value__",ru="__local_write_time__";function rh(t){var n,r;return(null===(r=((null===(n=null==t?void 0:t.mapValue)||void 0===n?void 0:n.fields)||{})[ra])||void 0===r?void 0:r.stringValue)===ro}function rc(t){let n=t.mapValue.fields[rl];return rh(n)?rc(n):n}function rf(t){let n=rr(t.mapValue.fields[ru].timestampValue);return new nB(n.seconds,n.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(t,n,r,i,s,o,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}const rp="(default)";class rg{constructor(t,n){this.projectId=t,this.database=n||rp}static empty(){return new rg("","")}get isDefaultDatabase(){return this.database===rp}isEqual(t){return t instanceof rg&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="__type__",ry="__max__",rv={mapValue:{fields:{__type__:{stringValue:ry}}}},rw="__vector__",rE="value";function r_(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?rh(t)?4:rM(t)?0x1fffffffffffff:rL(t)?10:11:nC()}function rb(t,n){if(t===n)return!0;let r=r_(t);if(r!==r_(n))return!1;switch(r){case 0:case 0x1fffffffffffff:return!0;case 1:return t.booleanValue===n.booleanValue;case 4:return rf(t).isEqual(rf(n));case 3:return function(t,n){if("string"==typeof t.timestampValue&&"string"==typeof n.timestampValue&&t.timestampValue.length===n.timestampValue.length)return t.timestampValue===n.timestampValue;let r=rr(t.timestampValue),i=rr(n.timestampValue);return r.seconds===i.seconds&&r.nanos===i.nanos}(t,n);case 5:return t.stringValue===n.stringValue;case 6:return rs(t.bytesValue).isEqual(rs(n.bytesValue));case 7:return t.referenceValue===n.referenceValue;case 8:return ri(t.geoPointValue.latitude)===ri(n.geoPointValue.latitude)&&ri(t.geoPointValue.longitude)===ri(n.geoPointValue.longitude);case 2:return function(t,n){if("integerValue"in t&&"integerValue"in n)return ri(t.integerValue)===ri(n.integerValue);if("doubleValue"in t&&"doubleValue"in n){let r=ri(t.doubleValue),i=ri(n.doubleValue);return r===i?n0(r)===n0(i):isNaN(r)&&isNaN(i)}return!1}(t,n);case 9:return nV(t.arrayValue.values||[],n.arrayValue.values||[],rb);case 10:case 11:return function(t,n){let r=t.mapValue.fields||{},i=n.mapValue.fields||{};if(n1(r)!==n1(i))return!1;for(let t in r)if(r.hasOwnProperty(t)&&(void 0===i[t]||!rb(r[t],i[t])))return!1;return!0}(t,n);default:return nC()}}function rI(t,n){return void 0!==(t.values||[]).find(t=>rb(t,n))}function rT(t,n){if(t===n)return 0;let r=r_(t),i=r_(n);if(r!==i)return nF(r,i);switch(r){case 0:case 0x1fffffffffffff:return 0;case 1:return nF(t.booleanValue,n.booleanValue);case 2:return function(t,n){let r=ri(t.integerValue||t.doubleValue),i=ri(n.integerValue||n.doubleValue);return r<i?-1:r>i?1:r===i?0:isNaN(r)?isNaN(i)?0:-1:1}(t,n);case 3:return rC(t.timestampValue,n.timestampValue);case 4:return rC(rf(t),rf(n));case 5:return nF(t.stringValue,n.stringValue);case 6:return function(t,n){let r=rs(t),i=rs(n);return r.compareTo(i)}(t.bytesValue,n.bytesValue);case 7:return function(t,n){let r=t.split("/"),i=n.split("/");for(let t=0;t<r.length&&t<i.length;t++){let n=nF(r[t],i[t]);if(0!==n)return n}return nF(r.length,i.length)}(t.referenceValue,n.referenceValue);case 8:return function(t,n){let r=nF(ri(t.latitude),ri(n.latitude));return 0!==r?r:nF(ri(t.longitude),ri(n.longitude))}(t.geoPointValue,n.geoPointValue);case 9:return rS(t.arrayValue,n.arrayValue);case 10:return function(t,n){var r,i,s,o;let a=t.fields||{},l=n.fields||{},u=null===(r=a[rE])||void 0===r?void 0:r.arrayValue,h=null===(i=l[rE])||void 0===i?void 0:i.arrayValue,c=nF((null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0,(null===(o=null==h?void 0:h.values)||void 0===o?void 0:o.length)||0);return 0!==c?c:rS(u,h)}(t.mapValue,n.mapValue);case 11:return function(t,n){if(t===rv.mapValue&&n===rv.mapValue)return 0;if(t===rv.mapValue)return 1;if(n===rv.mapValue)return -1;let r=t.fields||{},i=Object.keys(r),s=n.fields||{},o=Object.keys(s);i.sort(),o.sort();for(let t=0;t<i.length&&t<o.length;++t){let n=nF(i[t],o[t]);if(0!==n)return n;let a=rT(r[i[t]],s[o[t]]);if(0!==a)return a}return nF(i.length,o.length)}(t.mapValue,n.mapValue);default:throw nC()}}function rC(t,n){if("string"==typeof t&&"string"==typeof n&&t.length===n.length)return nF(t,n);let r=rr(t),i=rr(n),s=nF(r.seconds,i.seconds);return 0!==s?s:nF(r.nanos,i.nanos)}function rS(t,n){let r=t.values||[],i=n.values||[];for(let t=0;t<r.length&&t<i.length;++t){let n=rT(r[t],i[t]);if(n)return n}return nF(r.length,i.length)}function rA(t){var n,r;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){let n=rr(t);return`time(${n.seconds},${n.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?rs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,nG.fromName(n).toString()):"geoPointValue"in t?(r=t.geoPointValue,`geo(${r.latitude},${r.longitude})`):"arrayValue"in t?function(t){let n="[",r=!0;for(let i of t.values||[])r?r=!1:n+=",",n+=rA(i);return n+"]"}(t.arrayValue):"mapValue"in t?function(t){let n=Object.keys(t.fields||{}).sort(),r="{",i=!0;for(let s of n)i?i=!1:r+=",",r+=`${s}:${rA(t.fields[s])}`;return r+"}"}(t.mapValue):nC()}function rk(t,n){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${n.path.canonicalString()}`}}function rN(t){return!!t&&"integerValue"in t}function rR(t){return!!t&&"arrayValue"in t}function rO(t){return!!t&&"nullValue"in t}function rx(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function rD(t){return!!t&&"mapValue"in t}function rL(t){var n,r;return(null===(r=((null===(n=null==t?void 0:t.mapValue)||void 0===n?void 0:n.fields)||{})[rm])||void 0===r?void 0:r.stringValue)===rw}function rP(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){let n={mapValue:{fields:{}}};return n2(t.mapValue.fields,(t,r)=>n.mapValue.fields[t]=rP(r)),n}if(t.arrayValue){let n={arrayValue:{values:[]}};for(let r=0;r<(t.arrayValue.values||[]).length;++r)n.arrayValue.values[r]=rP(t.arrayValue.values[r]);return n}return Object.assign({},t)}function rM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===ry}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rU{constructor(t){this.value=t}static empty(){return new rU({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(!rD(n=(n.mapValue.fields||{})[t.get(r)]))return null;return(n=(n.mapValue.fields||{})[t.lastSegment()])||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=rP(n)}setAll(t){let n=nK.emptyPath(),r={},i=[];t.forEach((t,s)=>{if(!n.isImmediateParentOf(s)){let t=this.getFieldsMap(n);this.applyChanges(t,r,i),r={},i=[],n=s.popLast()}t?r[s.lastSegment()]=rP(t):i.push(s.lastSegment())});let s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){let n=this.field(t.popLast());rD(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return rb(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];rD(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){for(let i of(n2(n,(n,r)=>t[n]=r),r))delete t[i]}clone(){return new rU(rP(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rF{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new rF(t,0,nj.min(),nj.min(),nj.min(),rU.empty(),0)}static newFoundDocument(t,n,r,i){return new rF(t,1,n,nj.min(),r,i,0)}static newNoDocument(t,n){return new rF(t,2,n,nj.min(),nj.min(),rU.empty(),0)}static newUnknownDocument(t,n){return new rF(t,3,n,nj.min(),nj.min(),rU.empty(),2)}convertToFoundDocument(t,n){return this.createTime.isEqual(nj.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=rU.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=rU.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=nj.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof rF&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new rF(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rV{constructor(t,n){this.position=t,this.inclusive=n}}function rB(t,n,r){let i=0;for(let s=0;s<t.position.length;s++){let o=n[s],a=t.position[s];if(i=o.field.isKeyField()?nG.comparator(nG.fromName(a.referenceValue),r.key):rT(a,r.data.field(o.field)),"desc"===o.dir&&(i*=-1),0!==i)break}return i}function rj(t,n){if(null===t)return null===n;if(null===n||t.inclusive!==n.inclusive||t.position.length!==n.position.length)return!1;for(let r=0;r<t.position.length;r++)if(!rb(t.position[r],n.position[r]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r${constructor(t,n="asc"){this.field=t,this.dir=n}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rq{}class rH extends rq{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?"in"===n||"not-in"===n?this.createKeyFieldInFilter(t,n,r):new rW(t,n,r):"array-contains"===n?new rX(t,r):"in"===n?new rZ(t,r):"not-in"===n?new r0(t,r):"array-contains-any"===n?new r1(t,r):new rH(t,n,r)}static createKeyFieldInFilter(t,n,r){return"in"===n?new rQ(t,r):new rY(t,r)}matches(t){let n=t.data.field(this.field);return"!="===this.op?null!==n&&this.matchesComparison(rT(n,this.value)):null!==n&&r_(this.value)===r_(n)&&this.matchesComparison(rT(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return nC()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rz extends rq{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new rz(t,n)}matches(t){return rK(this)?void 0===this.filters.find(n=>!n.matches(t)):void 0!==this.filters.find(n=>n.matches(t))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function rK(t){return"and"===t.op}function rG(t){for(let n of t.filters)if(n instanceof rz)return!1;return!0}class rW extends rH{constructor(t,n,r){super(t,n,r),this.key=nG.fromName(r.referenceValue)}matches(t){let n=nG.comparator(t.key,this.key);return this.matchesComparison(n)}}class rQ extends rH{constructor(t,n){super(t,"in",n),this.keys=rJ("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class rY extends rH{constructor(t,n){super(t,"not-in",n),this.keys=rJ("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function rJ(t,n){var r;return((null===(r=n.arrayValue)||void 0===r?void 0:r.values)||[]).map(t=>nG.fromName(t.referenceValue))}class rX extends rH{constructor(t,n){super(t,"array-contains",n)}matches(t){let n=t.data.field(this.field);return rR(n)&&rI(n.arrayValue,this.value)}}class rZ extends rH{constructor(t,n){super(t,"in",n)}matches(t){let n=t.data.field(this.field);return null!==n&&rI(this.value.arrayValue,n)}}class r0 extends rH{constructor(t,n){super(t,"not-in",n)}matches(t){if(rI(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let n=t.data.field(this.field);return null!==n&&!rI(this.value.arrayValue,n)}}class r1 extends rH{constructor(t,n){super(t,"array-contains-any",n)}matches(t){let n=t.data.field(this.field);return!(!rR(n)||!n.arrayValue.values)&&n.arrayValue.values.some(t=>rI(this.value.arrayValue,t))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.le=null}}function r6(t,n=null,r=[],i=[],s=null,o=null,a=null){return new r2(t,n,r,i,s,o,a)}function r3(t){if(null===t.le){let n=t.path.canonicalString();null!==t.collectionGroup&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(t=>(function t(n){if(n instanceof rH)return n.field.canonicalString()+n.op.toString()+rA(n.value);if(rG(n)&&rK(n))return n.filters.map(n=>t(n)).join(",");{let r=n.filters.map(n=>t(n)).join(",");return`${n.op}(${r})`}})(t)).join(","),n+="|ob:",n+=t.orderBy.map(t=>t.field.canonicalString()+t.dir).join(","),null==t.limit||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(t=>rA(t)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(t=>rA(t)).join(",")),t.le=n}return t.le}function r5(t,n){if(t.limit!==n.limit||t.orderBy.length!==n.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++){var r,i;if(r=t.orderBy[s],i=n.orderBy[s],!(r.dir===i.dir&&r.field.isEqual(i.field)))return!1}if(t.filters.length!==n.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(!function t(n,r){return n instanceof rH?r instanceof rH&&n.op===r.op&&n.field.isEqual(r.field)&&rb(n.value,r.value):n instanceof rz?r instanceof rz&&n.op===r.op&&n.filters.length===r.filters.length&&n.filters.reduce((n,i,s)=>n&&t(i,r.filters[s]),!0):void nC()}(t.filters[r],n.filters[r]))return!1;return t.collectionGroup===n.collectionGroup&&!!t.path.isEqual(n.path)&&!!rj(t.startAt,n.startAt)&&rj(t.endAt,n.endAt)}function r8(t){return nG.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function r7(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function r9(t){return null!==t.collectionGroup}function ie(t){if(null===t.he){let n;t.he=[];let r=new Set;for(let n of t.explicitOrderBy)t.he.push(n),r.add(n.field.canonicalString());let i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(n=new n4(nK.comparator),t.filters.forEach(t=>{t.getFlattenedFilters().forEach(t=>{t.isInequality()&&(n=n.add(t.field))})}),n).forEach(n=>{r.has(n.canonicalString())||n.isKeyField()||t.he.push(new r$(n,i))}),r.has(nK.keyField().canonicalString())||t.he.push(new r$(nK.keyField(),i))}return t.he}function it(t){return t.Pe||(t.Pe=function(t,n){if("F"===t.limitType)return r6(t.path,t.collectionGroup,n,t.filters,t.limit,t.startAt,t.endAt);{n=n.map(t=>{let n="desc"===t.dir?"asc":"desc";return new r$(t.field,n)});let r=t.endAt?new rV(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new rV(t.startAt.position,t.startAt.inclusive):null;return r6(t.path,t.collectionGroup,n,t.filters,t.limit,r,i)}}(t,ie(t))),t.Pe}function ir(t,n){let r=t.filters.concat([n]);return new r4(t.path,t.collectionGroup,t.explicitOrderBy.slice(),r,t.limit,t.limitType,t.startAt,t.endAt)}function ii(t,n,r){return new r4(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),n,r,t.startAt,t.endAt)}function is(t,n){return r5(it(t),it(n))&&t.limitType===n.limitType}function io(t){return`${r3(it(t))}|lt:${t.limitType}`}function ia(t){var n;let r;return`Query(target=${r=(n=it(t)).path.canonicalString(),null!==n.collectionGroup&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(t=>(function t(n){return n instanceof rH?`${n.field.canonicalString()} ${n.op} ${rA(n.value)}`:n instanceof rz?n.op.toString()+" {"+n.getFilters().map(t).join(" ,")+"}":"Filter"})(t)).join(", ")}]`),null==n.limit||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(t=>`${t.field.canonicalString()} (${t.dir})`).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(t=>rA(t)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(t=>rA(t)).join(",")),`Target(${r})`}; limitType=${t.limitType})`}function il(t,n){return n.isFoundDocument()&&function(t,n){let r=n.key.path;return null!==t.collectionGroup?n.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(r):nG.isDocumentKey(t.path)?t.path.isEqual(r):t.path.isImmediateParentOf(r)}(t,n)&&function(t,n){for(let r of ie(t))if(!r.field.isKeyField()&&null===n.data.field(r.field))return!1;return!0}(t,n)&&function(t,n){for(let r of t.filters)if(!r.matches(n))return!1;return!0}(t,n)&&(!t.startAt||!!function(t,n,r){let i=rB(t,n,r);return t.inclusive?i<=0:i<0}(t.startAt,ie(t),n))&&(!t.endAt||!!function(t,n,r){let i=rB(t,n,r);return t.inclusive?i>=0:i>0}(t.endAt,ie(t),n))}function iu(t){return(n,r)=>{let i=!1;for(let s of ie(t)){let t=function(t,n,r){let i=t.field.isKeyField()?nG.comparator(n.key,r.key):function(t,n,r){let i=n.data.field(t),s=r.data.field(t);return null!==i&&null!==s?rT(i,s):nC()}(t.field,n,r);switch(t.dir){case"asc":return i;case"desc":return -1*i;default:return nC()}}(s,n,r);if(0!==t)return t;i=i||s.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){let n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let[n,i]of r)if(this.equalsFn(n,t))return i}}has(t){return void 0!==this.get(t)}set(t,n){let r=this.mapKeyFn(t),i=this.inner[r];if(void 0===i)return this.inner[r]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){let n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return 1===r.length?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){n2(this.inner,(n,r)=>{for(let[n,i]of r)t(n,i)})}isEmpty(){return n6(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=new n3(nG.comparator),id=new n3(nG.comparator);function ip(...t){let n=id;for(let r of t)n=n.insert(r.key,r);return n}function ig(t){let n=id;return t.forEach((t,r)=>n=n.insert(t,r.overlayedDocument)),n}function im(){return new ih(t=>t.toString(),(t,n)=>t.isEqual(n))}const iy=new n3(nG.comparator),iv=new n4(nG.comparator);function iw(...t){let n=iv;for(let r of t)n=n.add(r);return n}const iE=new n4(nF);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(t,n){if(t.useProto3Json){if(isNaN(n))return{doubleValue:"NaN"};if(n===1/0)return{doubleValue:"Infinity"};if(n===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:n0(n)?"-0":n}}function ib(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(){this._=void 0}}function iT(t,n){return t instanceof iR?rN(n)||n&&"doubleValue"in n?n:{integerValue:0}:null}class iC extends iI{}class iS extends iI{constructor(t){super(),this.elements=t}}function iA(t,n){let r=ix(n);for(let n of t.elements)r.some(t=>rb(t,n))||r.push(n);return{arrayValue:{values:r}}}class ik extends iI{constructor(t){super(),this.elements=t}}function iN(t,n){let r=ix(n);for(let n of t.elements)r=r.filter(t=>!rb(t,n));return{arrayValue:{values:r}}}class iR extends iI{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function iO(t){return ri(t.integerValue||t.doubleValue)}function ix(t){return rR(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class iD{constructor(t,n){this.version=t,this.transformResults=n}}class iL{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new iL}static exists(t){return new iL(void 0,t)}static updateTime(t){return new iL(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function iP(t,n){return void 0!==t.updateTime?n.isFoundDocument()&&n.version.isEqual(t.updateTime):void 0===t.exists||t.exists===n.isFoundDocument()}class iM{}function iU(t,n){if(!t.hasLocalMutations||n&&0===n.fields.length)return null;if(null===n)return t.isNoDocument()?new iz(t.key,iL.none()):new iB(t.key,t.data,iL.none());{let r=t.data,i=rU.empty(),s=new n4(nK.comparator);for(let t of n.fields)if(!s.has(t)){let n=r.field(t);null===n&&t.length>1&&(t=t.popLast(),n=r.field(t)),null===n?i.delete(t):i.set(t,n),s=s.add(t)}return new ij(t.key,i,new n9(s.toArray()),iL.none())}}function iF(t,n,r,i){return t instanceof iB?function(t,n,r,i){if(!iP(t.precondition,n))return r;let s=t.value.clone(),o=iH(t.fieldTransforms,i,n);return s.setAll(o),n.convertToFoundDocument(n.version,s).setHasLocalMutations(),null}(t,n,r,i):t instanceof ij?function(t,n,r,i){if(!iP(t.precondition,n))return r;let s=iH(t.fieldTransforms,i,n),o=n.data;return(o.setAll(i$(t)),o.setAll(s),n.convertToFoundDocument(n.version,o).setHasLocalMutations(),null===r)?null:r.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(t=>t.field))}(t,n,r,i):iP(t.precondition,n)?(n.convertToNoDocument(n.version).setHasLocalMutations(),null):r}function iV(t,n){var r,i;return t.type===n.type&&!!t.key.isEqual(n.key)&&!!t.precondition.isEqual(n.precondition)&&(r=t.fieldTransforms,i=n.fieldTransforms,!!(void 0===r&&void 0===i||!(!r||!i)&&nV(r,i,(t,n)=>{var r,i;return t.field.isEqual(n.field)&&(r=t.transform,i=n.transform,r instanceof iS&&i instanceof iS||r instanceof ik&&i instanceof ik?nV(r.elements,i.elements,rb):r instanceof iR&&i instanceof iR?rb(r.Ie,i.Ie):r instanceof iC&&i instanceof iC)})))&&(0===t.type?t.value.isEqual(n.value):1!==t.type||t.data.isEqual(n.data)&&t.fieldMask.isEqual(n.fieldMask))}class iB extends iM{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ij extends iM{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function i$(t){let n=new Map;return t.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let i=t.data.field(r);n.set(r,i)}}),n}function iq(t,n,r){var i;let s=new Map;t.length===r.length||nC();for(let o=0;o<r.length;o++){let a=t[o],l=a.transform,u=n.data.field(a.field);s.set(a.field,(i=r[o],l instanceof iS?iA(l,u):l instanceof ik?iN(l,u):i))}return s}function iH(t,n,r){let i=new Map;for(let s of t){let t=s.transform,o=r.data.field(s.field);i.set(s.field,t instanceof iC?function(t,n){let r={fields:{[ra]:{stringValue:ro},[ru]:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return n&&rh(n)&&(n=rc(n)),n&&(r.fields[rl]=n),{mapValue:r}}(n,o):t instanceof iS?iA(t,o):t instanceof ik?iN(t,o):function(t,n){let r=iT(t,n),i=iO(r)+iO(t.Ie);return rN(r)&&rN(t.Ie)?ib(i):i_(t.serializer,i)}(t,o))}return i}class iz extends iM{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iK extends iM{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iG{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){let r=n.mutationResults;for(let n=0;n<this.mutations.length;n++){let s=this.mutations[n];if(s.key.isEqual(t.key)){var i;i=r[n],s instanceof iB?function(t,n,r){let i=t.value.clone(),s=iq(t.fieldTransforms,n,r.transformResults);i.setAll(s),n.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(s,t,i):s instanceof ij?function(t,n,r){if(!iP(t.precondition,n))return void n.convertToUnknownDocument(r.version);let i=iq(t.fieldTransforms,n,r.transformResults),s=n.data;s.setAll(i$(t)),s.setAll(i),n.convertToFoundDocument(r.version,s).setHasCommittedMutations()}(s,t,i):function(t,n,r){n.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,i)}}}applyToLocalView(t,n){for(let r of this.baseMutations)r.key.isEqual(t.key)&&(n=iF(r,t,n,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(t.key)&&(n=iF(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){let r=im();return this.mutations.forEach(i=>{let s=t.get(i.key),o=s.overlayedDocument,a=this.applyToLocalView(o,s.mutatedFields),l=iU(o,a=n.has(i.key)?null:a);null!==l&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(nj.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),iw())}isEqual(t){return this.batchId===t.batchId&&nV(this.mutations,t.mutations,(t,n)=>iV(t,n))&&nV(this.baseMutations,t.baseMutations,(t,n)=>iV(t,n))}}class iW{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){t.mutations.length===r.length||nC();let i=iy,s=t.mutations;for(let t=0;t<s.length;t++)i=i.insert(s[t].key,r[t].version);return new iW(t,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iQ{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iY{constructor(t,n){this.count=t,this.unchangedNames=n}}function iJ(t){if(void 0===t)return nb("GRPC error has no .code"),nS.UNKNOWN;switch(t){case j.OK:return nS.OK;case j.CANCELLED:return nS.CANCELLED;case j.UNKNOWN:return nS.UNKNOWN;case j.DEADLINE_EXCEEDED:return nS.DEADLINE_EXCEEDED;case j.RESOURCE_EXHAUSTED:return nS.RESOURCE_EXHAUSTED;case j.INTERNAL:return nS.INTERNAL;case j.UNAVAILABLE:return nS.UNAVAILABLE;case j.UNAUTHENTICATED:return nS.UNAUTHENTICATED;case j.INVALID_ARGUMENT:return nS.INVALID_ARGUMENT;case j.NOT_FOUND:return nS.NOT_FOUND;case j.ALREADY_EXISTS:return nS.ALREADY_EXISTS;case j.PERMISSION_DENIED:return nS.PERMISSION_DENIED;case j.FAILED_PRECONDITION:return nS.FAILED_PRECONDITION;case j.ABORTED:return nS.ABORTED;case j.OUT_OF_RANGE:return nS.OUT_OF_RANGE;case j.UNIMPLEMENTED:return nS.UNIMPLEMENTED;case j.DATA_LOSS:return nS.DATA_LOSS;default:return nC()}}($=j||(j={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iX=new k([0xffffffff,0xffffffff],0);function iZ(t){let n=(new TextEncoder).encode(t),r=new N;return r.update(n),new Uint8Array(r.digest())}function i0(t){let n=new DataView(t.buffer),r=n.getUint32(0,!0),i=n.getUint32(4,!0),s=n.getUint32(8,!0),o=n.getUint32(12,!0);return[new k([r,i],0),new k([s,o],0)]}class i1{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new i2(`Invalid padding: ${n}`);if(r<0||t.length>0&&0===this.hashCount)throw new i2(`Invalid hash count: ${r}`);if(0===t.length&&0!==n)throw new i2(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*t.length-n,this.de=k.fromNumber(this.Ee)}Ae(t,n,r){let i=t.add(n.multiply(k.fromNumber(r)));return 1===i.compare(iX)&&(i=new k([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Ee)return!1;let[n,r]=i0(iZ(t));for(let t=0;t<this.hashCount;t++){let i=this.Ae(n,r,t);if(!this.Re(i))return!1}return!0}static create(t,n,r){let i=new i1(new Uint8Array(Math.ceil(t/8)),t%8==0?0:8-t%8,n);return r.forEach(t=>i.insert(t)),i}insert(t){if(0===this.Ee)return;let[n,r]=i0(iZ(t));for(let t=0;t<this.hashCount;t++){let i=this.Ae(n,r,t);this.Ve(i)}}Ve(t){let n=Math.floor(t/8);this.bitmap[n]|=1<<t%8}}class i2 extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i6{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){let i=new Map;return i.set(t,i3.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new i6(nj.min(),i,new n3(nF),ic,iw())}}class i3{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new i3(r,n,iw(),iw(),iw())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i5{constructor(t,n,r,i){this.me=t,this.removedTargetIds=n,this.key=r,this.fe=i}}class i8{constructor(t,n){this.targetId=t,this.ge=n}}class i4{constructor(t,n,r=rt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class i7{constructor(){this.pe=0,this.ye=st(),this.we=rt.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return 0!==this.pe}get ve(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.we=t)}Fe(){let t=iw(),n=iw(),r=iw();return this.ye.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:nC()}}),new i3(this.we,this.be,t,n,r)}Me(){this.Se=!1,this.ye=st()}xe(t,n){this.Se=!0,this.ye=this.ye.insert(t,n)}Oe(t){this.Se=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,this.pe>=0||nC()}Le(){this.Se=!0,this.be=!0}}class i9{constructor(t){this.ke=t,this.qe=new Map,this.Qe=ic,this.$e=se(),this.Ke=se(),this.Ue=new n3(nF)}We(t){for(let n of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(n,t.fe):this.ze(n,t.key,t.fe);for(let n of t.removedTargetIds)this.ze(n,t.key,t.fe)}je(t){this.forEachTarget(t,n=>{let r=this.He(n);switch(t.state){case 0:this.Je(n)&&r.Ce(t.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(t.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(t.resumeToken));break;default:nC()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.qe.forEach((t,r)=>{this.Je(r)&&n(r)})}Ze(t){let n=t.targetId,r=t.ge.count,i=this.Xe(n);if(i){let s=i.target;if(r8(s)){if(0===r){let t=new nG(s.path);this.ze(n,t,rF.newNoDocument(t,nj.min()))}else 1===r||nC()}else{let i=this.et(n);if(i!==r){let r=this.tt(t),s=r?this.nt(r,t,i):1;0!==s&&(this.Ye(n),this.Ue=this.Ue.insert(n,2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}tt(t){let n,r;let i=t.ge.unchangedNames;if(!i||!i.bits)return null;let{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=i;try{n=rs(s).toUint8Array()}catch(t){if(t instanceof re)return nI("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{r=new i1(n,o,a)}catch(t){return nI(t instanceof i2?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===r.Ee?null:r}nt(t,n,r){return 2*(n.ge.count!==r-this.st(t,n.targetId))}st(t,n){let r=this.ke.getRemoteKeysForTarget(n),i=0;return r.forEach(r=>{let s=this.ke.it(),o=`projects/${s.projectId}/databases/${s.database}/documents/${r.path.canonicalString()}`;t.mightContain(o)||(this.ze(n,r,null),i++)}),i}ot(t){let n=new Map;this.qe.forEach((r,i)=>{let s=this.Xe(i);if(s){if(r.current&&r8(s.target)){let n=new nG(s.target.path);this._t(n).has(i)||this.ut(i,n)||this.ze(i,n,rF.newNoDocument(n,t))}r.ve&&(n.set(i,r.Fe()),r.Me())}});let r=iw();this.Ke.forEach((t,n)=>{let i=!0;n.forEachWhile(t=>{let n=this.Xe(t);return!n||"TargetPurposeLimboResolution"===n.purpose||(i=!1,!1)}),i&&(r=r.add(t))}),this.Qe.forEach((n,r)=>r.setReadTime(t));let i=new i6(t,n,this.Ue,this.Qe,r);return this.Qe=ic,this.$e=se(),this.Ke=se(),this.Ue=new n3(nF),i}Ge(t,n){if(!this.Je(t))return;let r=2*!!this.ut(t,n.key);this.He(t).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(t)),this.Ke=this.Ke.insert(n.key,this.ct(n.key).add(t))}ze(t,n,r){if(!this.Je(t))return;let i=this.He(t);this.ut(t,n)?i.xe(n,1):i.Oe(n),this.Ke=this.Ke.insert(n,this.ct(n).delete(t)),this.Ke=this.Ke.insert(n,this.ct(n).add(t)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(t){this.qe.delete(t)}et(t){let n=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let n=this.qe.get(t);return n||(n=new i7,this.qe.set(t,n)),n}ct(t){let n=this.Ke.get(t);return n||(n=new n4(nF),this.Ke=this.Ke.insert(t,n)),n}_t(t){let n=this.$e.get(t);return n||(n=new n4(nF),this.$e=this.$e.insert(t,n)),n}Je(t){let n=null!==this.Xe(t);return n||n_("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){let n=this.qe.get(t);return n&&n.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new i7),this.ke.getRemoteKeysForTarget(t).forEach(n=>{this.ze(t,n,null)})}ut(t,n){return this.ke.getRemoteKeysForTarget(t).has(n)}}function se(){return new n3(nG.comparator)}function st(){return new n3(nG.comparator)}const sn={asc:"ASCENDING",desc:"DESCENDING"},sr={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},si={and:"AND",or:"OR"};class ss{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function so(t,n){return t.useProto3Json||null==n?n:{value:n}}function sa(t,n){return t.useProto3Json?`${new Date(1e3*n.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+n.nanoseconds).slice(-9)}Z`:{seconds:""+n.seconds,nanos:n.nanoseconds}}function sl(t,n){return t.useProto3Json?n.toBase64():n.toUint8Array()}function su(t){return t||nC(),nj.fromTimestamp(function(t){let n=rr(t);return new nB(n.seconds,n.nanos)}(t))}function sh(t,n){return sc(t,n).canonicalString()}function sc(t,n){let r=new nH(["projects",t.projectId,"databases",t.database]).child("documents");return void 0===n?r:r.child(n)}function sf(t){let n=nH.fromString(t);return s_(n)||nC(),n}function sd(t,n){return sh(t.databaseId,n.path)}function sp(t,n){let r=sf(n);if(r.get(1)!==t.databaseId.projectId)throw new nA(nS.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+t.databaseId.projectId);if(r.get(3)!==t.databaseId.database)throw new nA(nS.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+t.databaseId.database);return new nG(sy(r))}function sg(t,n){return sh(t.databaseId,n)}function sm(t){return new nH(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sy(t){return t.length>4&&"documents"===t.get(4)||nC(),t.popFirst(5)}function sv(t,n,r){return{name:sd(t,n),fields:r.value.mapValue.fields}}function sw(t){return{fieldPath:t.canonicalString()}}function sE(t){return nK.fromServerFormat(t.fieldPath)}function s_(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(t,n,r,i,s=nj.min(),o=nj.min(),a=rt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new sb(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new sb(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new sb(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new sb(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(t){this.Tt=t}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(){}At(t,n){this.Rt(t,n),n.Vt()}Rt(t,n){if("nullValue"in t)this.ft(n,5);else if("booleanValue"in t)this.ft(n,10),n.gt(+!!t.booleanValue);else if("integerValue"in t)this.ft(n,15),n.gt(ri(t.integerValue));else if("doubleValue"in t){let r=ri(t.doubleValue);isNaN(r)?this.ft(n,13):(this.ft(n,15),n0(r)?n.gt(0):n.gt(r))}else if("timestampValue"in t){let r=t.timestampValue;this.ft(n,20),"string"==typeof r&&(r=rr(r)),n.yt(`${r.seconds||""}`),n.gt(r.nanos||0)}else if("stringValue"in t)this.wt(t.stringValue,n),this.bt(n);else if("bytesValue"in t)this.ft(n,30),n.St(rs(t.bytesValue)),this.bt(n);else if("referenceValue"in t)this.Dt(t.referenceValue,n);else if("geoPointValue"in t){let r=t.geoPointValue;this.ft(n,45),n.gt(r.latitude||0),n.gt(r.longitude||0)}else"mapValue"in t?rM(t)?this.ft(n,Number.MAX_SAFE_INTEGER):rL(t)?this.vt(t.mapValue,n):(this.Ct(t.mapValue,n),this.bt(n)):"arrayValue"in t?(this.Ft(t.arrayValue,n),this.bt(n)):nC()}wt(t,n){this.ft(n,25),this.Mt(t,n)}Mt(t,n){n.yt(t)}Ct(t,n){let r=t.fields||{};for(let t of(this.ft(n,55),Object.keys(r)))this.wt(t,n),this.Rt(r[t],n)}vt(t,n){var r,i;let s=t.fields||{};this.ft(n,53);let o=(null===(i=null===(r=s[rE].arrayValue)||void 0===r?void 0:r.values)||void 0===i?void 0:i.length)||0;this.ft(n,15),n.gt(ri(o)),this.wt(rE,n),this.Rt(s[rE],n)}Ft(t,n){let r=t.values||[];for(let t of(this.ft(n,50),r))this.Rt(t,n)}Dt(t,n){this.ft(n,37),nG.fromName(t).path.forEach(t=>{this.ft(n,60),this.Mt(t,n)})}ft(t,n){t.gt(n)}bt(t){t.gt(2)}}sT.xt=new sT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(){this.Tn=new sS}addToCollectionParentIndex(t,n){return this.Tn.add(n),nJ.resolve()}getCollectionParents(t,n){return nJ.resolve(this.Tn.getEntries(n))}addFieldIndex(t,n){return nJ.resolve()}deleteFieldIndex(t,n){return nJ.resolve()}deleteAllFieldIndexes(t){return nJ.resolve()}createTargetIndexes(t,n){return nJ.resolve()}getDocumentsMatchingTarget(t,n){return nJ.resolve(null)}getIndexType(t,n){return nJ.resolve(0)}getFieldIndexes(t,n){return nJ.resolve([])}getNextCollectionGroupToUpdate(t){return nJ.resolve(null)}getMinOffset(t,n){return nJ.resolve(nW.min())}getMinOffsetFromCollectionGroup(t,n){return nJ.resolve(nW.min())}updateCollectionGroup(t,n,r){return nJ.resolve()}updateIndexEntries(t,n){return nJ.resolve()}}class sS{constructor(){this.index={}}add(t){let n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new n4(nH.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){let n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new n4(nH.comparator)).toArray()}}new Uint8Array(0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class sk{static withCacheSize(t){return new sk(t,sk.DEFAULT_COLLECTION_PERCENTILE,sk.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sk.DEFAULT_COLLECTION_PERCENTILE=10,sk.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sk.DEFAULT=new sk(0x2800000,sk.DEFAULT_COLLECTION_PERCENTILE,sk.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sk.DISABLED=new sk(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Kn(){return new sN(0)}static Un(){return new sN(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR="LruGarbageCollector";function sO([t,n],[r,i]){let s=nF(t,r);return 0===s?nF(n,i):s}class sx{constructor(t){this.Hn=t,this.buffer=new n4(sO),this.Jn=0}Yn(){return++this.Jn}Zn(t){let n=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{let t=this.buffer.last();0>sO(n,t)&&(this.buffer=this.buffer.delete(t).add(n))}}get maxValue(){return this.buffer.last()[0]}}class sD{constructor(t,n,r){this.garbageCollector=t,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return null!==this.Xn}er(t){n_(sR,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){nX(t)?n_(sR,"Ignoring IndexedDB error during garbage collection: ",t):await nY(t)}await this.er(3e5)})}}class sL{constructor(t,n){this.tr=t,this.params=n}calculateTargetCount(t,n){return this.tr.nr(t).next(t=>Math.floor(n/100*t))}nthSequenceNumber(t,n){if(0===n)return nJ.resolve(nZ.ae);let r=new sx(n);return this.tr.forEachTarget(t,t=>r.Zn(t.sequenceNumber)).next(()=>this.tr.rr(t,t=>r.Zn(t))).next(()=>r.maxValue)}removeTargets(t,n,r){return this.tr.removeTargets(t,n,r)}removeOrphanedDocuments(t,n){return this.tr.removeOrphanedDocuments(t,n)}collect(t,n){return -1===this.params.cacheSizeCollectionThreshold?(n_("LruGarbageCollector","Garbage collection skipped; disabled"),nJ.resolve(sA)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(n_("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sA):this.ir(t,n))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,n){let r,i,s,o,a,l,u;let h=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(n=>(n>this.params.maximumSequenceNumbersToCollect?(n_("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${n}`),i=this.params.maximumSequenceNumbersToCollect):i=n,o=Date.now(),this.nthSequenceNumber(t,i))).next(i=>(r=i,a=Date.now(),this.removeTargets(t,r,n))).next(n=>(s=n,l=Date.now(),this.removeOrphanedDocuments(t,r))).next(t=>(u=Date.now(),nE()<=A.DEBUG&&n_("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+"ms\n"+`	Removed ${s} targets in `+(l-a)+"ms\n"+`	Removed ${t} documents in `+(u-l)+"ms\n"+`Total Duration: ${u-h}ms`),nJ.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:t})))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(){this.changes=new ih(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,rF.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();let r=this.changes.get(n);return void 0!==r?nJ.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sU{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(t=>(null!==r&&iF(r.mutation,t,n9.empty(),nB.now()),t))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(n=>this.getLocalViewOfDocuments(t,n,iw()).next(()=>n))}getLocalViewOfDocuments(t,n,r=iw()){let i=im();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(t=>{let n=ip();return t.forEach((t,r)=>{n=n.insert(t,r.overlayedDocument)}),n}))}getOverlayedDocuments(t,n){let r=im();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,iw()))}populateOverlays(t,n,r){let i=[];return r.forEach(t=>{n.has(t)||i.push(t)}),this.documentOverlayCache.getOverlays(t,i).next(t=>{t.forEach((t,r)=>{n.set(t,r)})})}computeViews(t,n,r,i){let s=ic,o=im(),a=im();return n.forEach((t,n)=>{let a=r.get(n.key);i.has(n.key)&&(void 0===a||a.mutation instanceof ij)?s=s.insert(n.key,n):void 0!==a?(o.set(n.key,a.mutation.getFieldMask()),iF(a.mutation,n,a.mutation.getFieldMask(),nB.now())):o.set(n.key,n9.empty())}),this.recalculateAndSaveOverlays(t,s).next(t=>(t.forEach((t,n)=>o.set(t,n)),n.forEach((t,n)=>{var r;return a.set(t,new sM(n,null!==(r=o.get(t))&&void 0!==r?r:null))}),a))}recalculateAndSaveOverlays(t,n){let r=im(),i=new n3((t,n)=>t-n),s=iw();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(t=>{for(let s of t)s.keys().forEach(t=>{let o=n.get(t);if(null===o)return;let a=r.get(t)||n9.empty();a=s.applyToLocalView(o,a),r.set(t,a);let l=(i.get(s.batchId)||iw()).add(t);i=i.insert(s.batchId,l)})}).next(()=>{let o=[],a=i.getReverseIterator();for(;a.hasNext();){let i=a.getNext(),l=i.key,u=i.value,h=im();u.forEach(t=>{if(!s.has(t)){let i=iU(n.get(t),r.get(t));null!==i&&h.set(t,i),s=s.add(t)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return nJ.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,n,r,i){return nG.isDocumentKey(n.path)&&null===n.collectionGroup&&0===n.filters.length?this.getDocumentsMatchingDocumentQuery(t,n.path):r9(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{let o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):nJ.resolve(im()),a=-1,l=s;return o.next(n=>nJ.forEach(n,(n,r)=>(a<r.largestBatchId&&(a=r.largestBatchId),s.get(n)?nJ.resolve():this.remoteDocumentCache.getEntry(t,n).next(t=>{l=l.insert(n,t)}))).next(()=>this.populateOverlays(t,n,s)).next(()=>this.computeViews(t,l,n,iw())).next(t=>({batchId:a,changes:ig(t)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new nG(n)).next(t=>{let n=ip();return t.isFoundDocument()&&(n=n.insert(t.key,t)),n})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){let s=n.collectionGroup,o=ip();return this.indexManager.getCollectionParents(t,s).next(a=>nJ.forEach(a,a=>{let l=new r4(a.child(s),null,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt);return this.getDocumentsMatchingCollectionQuery(t,l,r,i).next(t=>{t.forEach((t,n)=>{o=o.insert(t,n)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(t=>{s.forEach((n,r)=>{let i=r.getKey();null===t.get(i)&&(t=t.insert(i,rF.newInvalidDocument(i)))});let r=ip();return t.forEach((t,i)=>{let o=s.get(t);void 0!==o&&iF(o.mutation,i,n9.empty(),nB.now()),il(n,i)&&(r=r.insert(t,i))}),r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sF{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,n){return nJ.resolve(this.dr.get(n))}saveBundleMetadata(t,n){return this.dr.set(n.id,{id:n.id,version:n.version,createTime:su(n.createTime)}),nJ.resolve()}getNamedQuery(t,n){return nJ.resolve(this.Ar.get(n))}saveNamedQuery(t,n){return this.Ar.set(n.name,{name:n.name,query:function(t){let n=function(t){var n;let r,i=function(t){let n=sf(t);return 4===n.length?nH.emptyPath():sy(n)}(t.parent),s=t.structuredQuery,o=s.from?s.from.length:0,a=null;if(o>0){1===o||nC();let t=s.from[0];t.allDescendants?a=t.collectionId:i=i.child(t.collectionId)}let l=[];s.where&&(l=function(t){var n;let r=function t(n){return void 0!==n.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":let n=sE(t.unaryFilter.field);return rH.create(n,"==",{doubleValue:NaN});case"IS_NULL":let r=sE(t.unaryFilter.field);return rH.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let i=sE(t.unaryFilter.field);return rH.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let s=sE(t.unaryFilter.field);return rH.create(s,"!=",{nullValue:"NULL_VALUE"});default:return nC()}}(n):void 0!==n.fieldFilter?rH.create(sE(n.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return nC()}}(n.fieldFilter.op),n.fieldFilter.value):void 0!==n.compositeFilter?rz.create(n.compositeFilter.filters.map(n=>t(n)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return nC()}}(n.compositeFilter.op)):nC()}(t);return r instanceof rz&&rG(n=r)&&rK(n)?r.getFilters():[r]}(s.where));let u=[];s.orderBy&&(u=s.orderBy.map(t=>new r$(sE(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))));let h=null;s.limit&&(h=null==(r="object"==typeof(n=s.limit)?n.value:n)?null:r);let c=null;s.startAt&&(c=function(t){let n=!!t.before;return new rV(t.values||[],n)}(s.startAt));let f=null;return s.endAt&&(f=function(t){let n=!t.before;return new rV(t.values||[],n)}(s.endAt)),new r4(i,a,u,l,h,"F",c,f)}({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?ii(n,n.limit,"L"):n}(n.bundledQuery),readTime:su(n.readTime)}),nJ.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(){this.overlays=new n3(nG.comparator),this.Rr=new Map}getOverlay(t,n){return nJ.resolve(this.overlays.get(n))}getOverlays(t,n){let r=im();return nJ.forEach(n,n=>this.getOverlay(t,n).next(t=>{null!==t&&r.set(n,t)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((r,i)=>{this.Et(t,n,i)}),nJ.resolve()}removeOverlaysForBatchId(t,n,r){let i=this.Rr.get(r);return void 0!==i&&(i.forEach(t=>this.overlays=this.overlays.remove(t)),this.Rr.delete(r)),nJ.resolve()}getOverlaysForCollection(t,n,r){let i=im(),s=n.length+1,o=new nG(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){let t=a.getNext().value,o=t.getKey();if(!n.isPrefixOf(o.path))break;o.path.length===s&&t.largestBatchId>r&&i.set(t.getKey(),t)}return nJ.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new n3((t,n)=>t-n),o=this.overlays.getIterator();for(;o.hasNext();){let t=o.getNext().value;if(t.getKey().getCollectionGroup()===n&&t.largestBatchId>r){let n=s.get(t.largestBatchId);null===n&&(n=im(),s=s.insert(t.largestBatchId,n)),n.set(t.getKey(),t)}}let a=im(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((t,n)=>a.set(t,n)),!(a.size()>=i)););return nJ.resolve(a)}Et(t,n,r){let i=this.overlays.get(r.key);if(null!==i){let t=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(r.key,new iQ(n,r));let s=this.Rr.get(n);void 0===s&&(s=iw(),this.Rr.set(n,s)),this.Rr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sB{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(t){return nJ.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,nJ.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sj{constructor(){this.Vr=new n4(s$.mr),this.gr=new n4(s$.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,n){let r=new s$(t,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(t,n){t.forEach(t=>this.addReference(t,n))}removeReference(t,n){this.wr(new s$(t,n))}br(t,n){t.forEach(t=>this.removeReference(t,n))}Sr(t){let n=new nG(new nH([])),r=new s$(n,t),i=new s$(n,t+1),s=[];return this.gr.forEachInRange([r,i],t=>{this.wr(t),s.push(t.key)}),s}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){let n=new nG(new nH([])),r=new s$(n,t),i=new s$(n,t+1),s=iw();return this.gr.forEachInRange([r,i],t=>{s=s.add(t.key)}),s}containsKey(t){let n=new s$(t,0),r=this.Vr.firstAfterOrEqual(n);return null!==r&&t.isEqual(r.key)}}class s${constructor(t,n){this.key=t,this.Cr=n}static mr(t,n){return nG.comparator(t.key,n.key)||nF(t.Cr,n.Cr)}static pr(t,n){return nF(t.Cr,n.Cr)||nG.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sq{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new n4(s$.mr)}checkEmpty(t){return nJ.resolve(0===this.mutationQueue.length)}addMutationBatch(t,n,r,i){let s=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let o=new iG(s,n,r,i);for(let n of(this.mutationQueue.push(o),i))this.Mr=this.Mr.add(new s$(n.key,s)),this.indexManager.addToCollectionParentIndex(t,n.key.path.popLast());return nJ.resolve(o)}lookupMutationBatch(t,n){return nJ.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(t,n){let r=this.Nr(n+1),i=r<0?0:r;return nJ.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return nJ.resolve(0===this.mutationQueue.length?-1:this.Fr-1)}getAllMutationBatches(t){return nJ.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){let r=new s$(n,0),i=new s$(n,Number.POSITIVE_INFINITY),s=[];return this.Mr.forEachInRange([r,i],t=>{let n=this.Or(t.Cr);s.push(n)}),nJ.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new n4(nF);return n.forEach(t=>{let n=new s$(t,0),i=new s$(t,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([n,i],t=>{r=r.add(t.Cr)})}),nJ.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(t,n){let r=n.path,i=r.length+1,s=r;nG.isDocumentKey(s)||(s=s.child(""));let o=new s$(new nG(s),0),a=new n4(nF);return this.Mr.forEachWhile(t=>{let n=t.key.path;return!!r.isPrefixOf(n)&&(n.length===i&&(a=a.add(t.Cr)),!0)},o),nJ.resolve(this.Br(a))}Br(t){let n=[];return t.forEach(t=>{let r=this.Or(t);null!==r&&n.push(r)}),n}removeMutationBatch(t,n){0===this.Lr(n.batchId,"removed")||nC(),this.mutationQueue.shift();let r=this.Mr;return nJ.forEach(n.mutations,i=>{let s=new s$(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Mr=r})}qn(t){}containsKey(t,n){let r=new s$(n,0),i=this.Mr.firstAfterOrEqual(r);return nJ.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,nJ.resolve()}Lr(t,n){return this.Nr(t)}Nr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Or(t){let n=this.Nr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sH{constructor(t){this.kr=t,this.docs=new n3(nG.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){let r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){let n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){let r=this.docs.get(n);return nJ.resolve(r?r.document.mutableCopy():rF.newInvalidDocument(n))}getEntries(t,n){let r=ic;return n.forEach(t=>{let n=this.docs.get(t);r=r.insert(t,n?n.document.mutableCopy():rF.newInvalidDocument(t))}),nJ.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=ic,o=n.path,a=new nG(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){let{key:t,value:{document:a}}=l.getNext();if(!o.isPrefixOf(t.path))break;t.path.length>o.length+1||0>=function(t,n){let r=t.readTime.compareTo(n.readTime);return 0!==r?r:0!==(r=nG.comparator(t.documentKey,n.documentKey))?r:nF(t.largestBatchId,n.largestBatchId)}(new nW(a.readTime,a.key,-1),r)||(i.has(a.key)||il(n,a))&&(s=s.insert(a.key,a.mutableCopy()))}return nJ.resolve(s)}getAllFromCollectionGroup(t,n,r,i){nC()}qr(t,n){return nJ.forEach(this.docs,t=>n(t))}newChangeBuffer(t){return new sz(this)}getSize(t){return nJ.resolve(this.size)}}class sz extends sP{constructor(t){super(),this.Ir=t}applyChanges(t){let n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Ir.addEntry(t,i)):this.Ir.removeEntry(r)}),nJ.waitFor(n)}getFromCache(t,n){return this.Ir.getEntry(t,n)}getAllFromCache(t,n){return this.Ir.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sK{constructor(t){this.persistence=t,this.Qr=new ih(t=>r3(t),r5),this.lastRemoteSnapshotVersion=nj.min(),this.highestTargetId=0,this.$r=0,this.Kr=new sj,this.targetCount=0,this.Ur=sN.Kn()}forEachTarget(t,n){return this.Qr.forEach((t,r)=>n(r)),nJ.resolve()}getLastRemoteSnapshotVersion(t){return nJ.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return nJ.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Ur.next(),nJ.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),nJ.resolve()}zn(t){this.Qr.set(t.target,t);let n=t.targetId;n>this.highestTargetId&&(this.Ur=new sN(n),this.highestTargetId=n),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,n){return this.zn(n),this.targetCount+=1,nJ.resolve()}updateTargetData(t,n){return this.zn(n),nJ.resolve()}removeTargetData(t,n){return this.Qr.delete(n.target),this.Kr.Sr(n.targetId),this.targetCount-=1,nJ.resolve()}removeTargets(t,n,r){let i=0,s=[];return this.Qr.forEach((o,a)=>{a.sequenceNumber<=n&&null===r.get(a.targetId)&&(this.Qr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),nJ.waitFor(s).next(()=>i)}getTargetCount(t){return nJ.resolve(this.targetCount)}getTargetData(t,n){let r=this.Qr.get(n)||null;return nJ.resolve(r)}addMatchingKeys(t,n,r){return this.Kr.yr(n,r),nJ.resolve()}removeMatchingKeys(t,n,r){this.Kr.br(n,r);let i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(n=>{s.push(i.markPotentiallyOrphaned(t,n))}),nJ.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Kr.Sr(n),nJ.resolve()}getMatchingKeysForTargetId(t,n){let r=this.Kr.vr(n);return nJ.resolve(r)}containsKey(t,n){return nJ.resolve(this.Kr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sG{constructor(t,n){this.Wr={},this.overlays={},this.Gr=new nZ(0),this.zr=!1,this.zr=!0,this.jr=new sB,this.referenceDelegate=t(this),this.Hr=new sK(this),this.indexManager=new sC,this.remoteDocumentCache=new sH(t=>this.referenceDelegate.Jr(t)),this.serializer=new sI(n),this.Yr=new sF(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new sV,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Wr[t.toKey()];return r||(r=new sq(n,this.referenceDelegate),this.Wr[t.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,n,r){n_("MemoryPersistence","Starting transaction:",t);let i=new sW(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(t=>this.referenceDelegate.Xr(i).next(()=>t)).toPromise().then(t=>(i.raiseOnCommittedEvent(),t))}ei(t,n){return nJ.or(Object.values(this.Wr).map(r=>()=>r.containsKey(t,n)))}}class sW extends nQ{constructor(t){super(),this.currentSequenceNumber=t}}class sQ{constructor(t){this.persistence=t,this.ti=new sj,this.ni=null}static ri(t){return new sQ(t)}get ii(){if(this.ni)return this.ni;throw nC()}addReference(t,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),nJ.resolve()}removeReference(t,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),nJ.resolve()}markPotentiallyOrphaned(t,n){return this.ii.add(n.toString()),nJ.resolve()}removeTarget(t,n){this.ti.Sr(n.targetId).forEach(t=>this.ii.add(t.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(t=>{t.forEach(t=>this.ii.add(t.toString()))}).next(()=>r.removeTargetData(t,n))}Zr(){this.ni=new Set}Xr(t){let n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return nJ.forEach(this.ii,r=>{let i=nG.fromPath(r);return this.si(t,i).next(t=>{t||n.removeEntry(i,nj.min())})}).next(()=>(this.ni=null,n.apply(t)))}updateLimboDocument(t,n){return this.si(t,n).next(t=>{t?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(t){return 0}si(t,n){return nJ.or([()=>nJ.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.ei(t,n)])}}class sY{constructor(t,n){this.persistence=t,this.oi=new ih(t=>(function(t){let n="";for(let r=0;r<t.length;r++)n.length>0&&(n+="\x01\x01"),n=function(t,n){let r=n,i=t.length;for(let n=0;n<i;n++){let i=t.charAt(n);switch(i){case"\0":r+="\x01\x10";break;case"\x01":r+="\x01\x11";break;default:r+=i}}return r}(t.get(r),n);return n+"\x01\x01"})(t.path),(t,n)=>t.isEqual(n)),this.garbageCollector=new sL(this,n)}static ri(t,n){return new sY(t,n)}Zr(){}Xr(t){return nJ.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}nr(t){let n=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(t=>n.next(n=>t+n))}sr(t){let n=0;return this.rr(t,t=>{n++}).next(()=>n)}rr(t,n){return nJ.forEach(this.oi,(r,i)=>this.ar(t,r,i).next(t=>t?nJ.resolve():n(i)))}removeTargets(t,n,r){return this.persistence.getTargetCache().removeTargets(t,n,r)}removeOrphanedDocuments(t,n){let r=0,i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.qr(t,i=>this.ar(t,i,n).next(t=>{t||(r++,s.removeEntry(i,nj.min()))})).next(()=>s.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,n){return this.oi.set(n,t.currentSequenceNumber),nJ.resolve()}removeTarget(t,n){let r=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,n,r){return this.oi.set(r,t.currentSequenceNumber),nJ.resolve()}removeReference(t,n,r){return this.oi.set(r,t.currentSequenceNumber),nJ.resolve()}updateLimboDocument(t,n){return this.oi.set(n,t.currentSequenceNumber),nJ.resolve()}Jr(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=function t(n){switch(r_(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let r=rc(n);return r?16+t(r):16;case 5:return 2*n.stringValue.length;case 6:return rs(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(n.arrayValue.values||[]).reduce((n,r)=>n+t(r),0);case 10:case 11:var i;let s;return i=n.mapValue,s=0,n2(i.fields,(n,r)=>{s+=n.length+t(r)}),s;default:throw nC()}}(t.data.value)),n}ar(t,n,r){return nJ.or([()=>this.persistence.ei(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{let t=this.oi.get(n);return nJ.resolve(void 0!==t&&t>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sJ{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.Hi=r,this.Ji=i}static Yi(t,n){let r=iw(),i=iw();for(let t of n.docChanges)switch(t.type){case 0:r=r.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new sJ(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sX{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sZ{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=!function(){var t;let n=null===(t=eA())||void 0===t?void 0:t.forceEnvironment;if("node"===n)return!0;if("browser"===n)return!1;try{return"[object process]"===Object.prototype.toString.call(er.process)}catch(t){return!1}}()&&navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")?8:function(t){let n=t.match(/Android ([\d.]+)/i);return Number(n?n[1].split(".").slice(0,2).join("."):"-1")}(eD())>0?6:4}initialize(t,n){this.ns=t,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(t,n,r,i){let s={result:null};return this.rs(t,n).next(t=>{s.result=t}).next(()=>{if(!s.result)return this.ss(t,n,i,r).next(t=>{s.result=t})}).next(()=>{if(s.result)return;let r=new sX;return this._s(t,n,r).next(i=>{if(s.result=i,this.Xi)return this.us(t,n,r,i.size)})}).next(()=>s.result)}us(t,n,r,i){return r.documentReadCount<this.es?(nE()<=A.DEBUG&&n_("QueryEngine","SDK will not create cache indexes for query:",ia(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),nJ.resolve()):(nE()<=A.DEBUG&&n_("QueryEngine","Query:",ia(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(nE()<=A.DEBUG&&n_("QueryEngine","The SDK decides to create cache indexes for query:",ia(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,it(n))):nJ.resolve())}rs(t,n){if(r7(n))return nJ.resolve(null);let r=it(n);return this.indexManager.getIndexType(t,r).next(i=>0===i?null:(null!==n.limit&&1===i&&(r=it(n=ii(n,null,"F"))),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{let s=iw(...i);return this.ns.getDocuments(t,s).next(i=>this.indexManager.getMinOffset(t,r).next(r=>{let o=this.cs(n,i);return this.ls(n,o,s,r.readTime)?this.rs(t,ii(n,null,"F")):this.hs(t,o,n,r)}))})))}ss(t,n,r,i){return r7(n)||i.isEqual(nj.min())?nJ.resolve(null):this.ns.getDocuments(t,r).next(s=>{let o=this.cs(n,s);return this.ls(n,o,r,i)?nJ.resolve(null):(nE()<=A.DEBUG&&n_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ia(n)),this.hs(t,o,n,function(t,n){let r=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1;return new nW(nj.fromTimestamp(1e9===i?new nB(r+1,0):new nB(r,i)),nG.empty(),-1)}(i,0)).next(t=>t))})}cs(t,n){let r=new n4(iu(t));return n.forEach((n,i)=>{il(t,i)&&(r=r.add(i))}),r}ls(t,n,r,i){if(null===t.limit)return!1;if(r.size!==n.size)return!0;let s="F"===t.limitType?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}_s(t,n,r){return nE()<=A.DEBUG&&n_("QueryEngine","Using full collection scan to execute query:",ia(n)),this.ns.getDocumentsMatchingQuery(t,n,nW.min(),r)}hs(t,n,r,i){return this.ns.getDocumentsMatchingQuery(t,r,i).next(t=>(n.forEach(n=>{t=t.insert(n.key,n)}),t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0="LocalStore";class s1{constructor(t,n,r,i){this.persistence=t,this.Ps=n,this.serializer=i,this.Ts=new n3(nF),this.Is=new ih(t=>r3(t),r5),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(r)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new sU(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ts))}}async function s2(t,n){return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.As(n),t.mutationQueue.getAllMutationBatches(r))).next(n=>{let s=[],o=[],a=iw();for(let t of i)for(let n of(s.push(t.batchId),t.mutations))a=a.add(n.key);for(let t of n)for(let n of(o.push(t.batchId),t.mutations))a=a.add(n.key);return t.localDocuments.getDocuments(r,a).next(t=>({Rs:t,removedBatchIds:s,addedBatchIds:o}))})})}function s6(t){return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Hr.getLastRemoteSnapshotVersion(n))}async function s3(t,n,r){let i=t.Ts.get(n);try{r||await t.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",n=>t.persistence.referenceDelegate.removeTarget(n,i))}catch(t){if(!nX(t))throw t;n_(s0,`Failed to update sequence numbers for target ${n}: ${t}`)}t.Ts=t.Ts.remove(n),t.Is.delete(i.target)}function s5(t,n,r){let i=nj.min(),s=iw();return t.persistence.runTransaction("Execute query","readwrite",o=>(function(t,n,r){let i=t.Is.get(r);return void 0!==i?nJ.resolve(t.Ts.get(i)):t.Hr.getTargetData(n,r)})(t,o,it(n)).next(n=>{if(n)return i=n.lastLimboFreeSnapshotVersion,t.Hr.getMatchingKeysForTargetId(o,n.targetId).next(t=>{s=t})}).next(()=>t.Ps.getDocumentsMatchingQuery(o,n,r?i:nj.min(),r?s:iw())).next(r=>{var i,o,a;let l;return i=t,o=n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2)),a=r,l=i.Es.get(o)||nj.min(),a.forEach((t,n)=>{n.readTime.compareTo(l)>0&&(l=n.readTime)}),i.Es.set(o,l),{documents:r,gs:s}}))}class s8{constructor(){this.activeTargetIds=iE}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ss(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class s4{constructor(){this.ho=new s8,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t,n=!0){return n&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,n,r){this.Po[t]=n}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new s8,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s7{To(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s9="ConnectivityMonitor";class oe{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){for(let t of(n_(s9,"Network connectivity changed: AVAILABLE"),this.Vo))t(0)}Ro(){for(let t of(n_(s9,"Network connectivity changed: UNAVAILABLE"),this.Vo))t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ot=null;function on(){return null===ot?ot=0x10000000+Math.round(0x80000000*Math.random()):ot++,"0x"+ot.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="RestConnection",oi={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class os{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let n=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=n+"://"+t.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===rp?`project_id=${r}`:`project_id=${r}&database_id=${i}`}bo(t,n,r,i,s){let o=on(),a=this.So(t,n.toUriEncodedString());n_(or,`Sending RPC '${t}' ${o}:`,a,r);let l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(l,i,s),this.vo(t,a,l,r).then(n=>(n_(or,`Received RPC '${t}' ${o}: `,n),n),n=>{throw nI(or,`RPC '${t}' ${o} failed with error: `,n,"url: ",a,"request:",r),n})}Co(t,n,r,i,s,o){return this.bo(t,n,r,i,s)}Do(t,n,r){t["X-Goog-Api-Client"]="gl-js/ fire/"+nv,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((n,r)=>t[r]=n),r&&r.headers.forEach((n,r)=>t[r]=n)}So(t,n){let r=oi[t];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Ko(t){this.ko(t)}Uo(t){this.qo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="WebChannelConnection";class ol extends os{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,n,r,i){let s=on();return new Promise((o,a)=>{let l=new R;l.setWithCredentials(!0),l.listenOnce(x.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case D.NO_ERROR:let n=l.getResponseJson();n_(oa,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(n)),o(n);break;case D.TIMEOUT:n_(oa,`RPC '${t}' ${s} timed out`),a(new nA(nS.DEADLINE_EXCEEDED,"Request time out"));break;case D.HTTP_ERROR:let r=l.getStatus();if(n_(oa,`RPC '${t}' ${s} failed with status:`,r,"response text:",l.getResponseText()),r>0){let t=l.getResponseJson();Array.isArray(t)&&(t=t[0]);let n=null==t?void 0:t.error;if(n&&n.status&&n.message){let t=function(t){let n=t.toLowerCase().replace(/_/g,"-");return Object.values(nS).indexOf(n)>=0?n:nS.UNKNOWN}(n.status);a(new nA(t,n.message))}else a(new nA(nS.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new nA(nS.UNAVAILABLE,"Connection failed."));break;default:nC()}}finally{n_(oa,`RPC '${t}' ${s} completed.`)}});let u=JSON.stringify(i);n_(oa,`RPC '${t}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Wo(t,n,r){let i=on(),s=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=U(),a=M(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;let h=s.join("");n_(oa,`Creating RPC '${t}' stream ${i}: ${h}`,l);let c=o.createWebChannel(h,l),f=!1,d=!1,p=new oo({Fo:n=>{d?n_(oa,`Not sending because RPC '${t}' stream ${i} is closed:`,n):(f||(n_(oa,`Opening RPC '${t}' stream ${i} transport.`),c.open(),f=!0),n_(oa,`RPC '${t}' stream ${i} sending:`,n),c.send(n))},Mo:()=>c.close()}),g=(t,n,r)=>{t.listen(n,t=>{try{r(t)}catch(t){setTimeout(()=>{throw t},0)}})};return g(c,O.EventType.OPEN,()=>{d||(n_(oa,`RPC '${t}' stream ${i} transport opened.`),p.Qo())}),g(c,O.EventType.CLOSE,()=>{d||(d=!0,n_(oa,`RPC '${t}' stream ${i} transport closed`),p.Ko())}),g(c,O.EventType.ERROR,n=>{d||(d=!0,nI(oa,`RPC '${t}' stream ${i} transport errored:`,n),p.Ko(new nA(nS.UNAVAILABLE,"The operation could not be completed")))}),g(c,O.EventType.MESSAGE,n=>{var r;if(!d){let s=n.data[0];s||nC();let o=(null==s?void 0:s.error)||(null===(r=s[0])||void 0===r?void 0:r.error);if(o){n_(oa,`RPC '${t}' stream ${i} received error:`,o);let n=o.status,r=function(t){let n=j[t];if(void 0!==n)return iJ(n)}(n),s=o.message;void 0===r&&(r=nS.INTERNAL,s="Unknown error status: "+n+" with message "+o.message),d=!0,p.Ko(new nA(r,s)),c.close()}else n_(oa,`RPC '${t}' stream ${i} received:`,s),p.Uo(s)}}),g(a,P.STAT_EVENT,n=>{n.stat===L.PROXY?n_(oa,`RPC '${t}' stream ${i} detected buffering proxy`):n.stat===L.NOPROXY&&n_(oa,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.$o()},0),p}}function ou(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(t){return new ss(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t,n,r=1e3,i=1.5,s=6e4){this.Ti=t,this.timerId=n,this.Go=r,this.zo=i,this.jo=s,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();let n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,n-r);i>0&&n_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){null!==this.Jo&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){null!==this.Jo&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of="PersistentStream";class od{constructor(t,n,r,i,s,o,a,l){this.Ti=t,this.n_=r,this.r_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new oc(t,n)}u_(){return 1===this.state||5===this.state||this.c_()}c_(){return 2===this.state||3===this.state}start(){this.__=0,4!==this.state?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&null===this.s_&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,4!==t?this.a_.reset():n&&n.code===nS.RESOURCE_EXHAUSTED?(nb(n.toString()),nb("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===nS.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(n)}A_(){}auth(){this.state=1;let t=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,r])=>{this.i_===n&&this.V_(t,r)},n=>{t(()=>{let t=new nA(nS.UNKNOWN,"Fetching auth token failed: "+n.message);return this.m_(t)})})}V_(t,n){let r=this.R_(this.i_);this.stream=this.f_(t,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(t=>{r(()=>this.m_(t))}),this.stream.onMessage(t=>{r(()=>1==++this.__?this.g_(t):this.onNext(t))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return n_(of,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return n=>{this.Ti.enqueueAndForget(()=>this.i_===t?n():(n_(of,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class op extends od{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}f_(t,n){return this.connection.Wo("Listen",t,n)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();let n=function(t,n){let r;if("targetChange"in n){var i,s;n.targetChange;let o="NO_CHANGE"===(i=n.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===i?1:"REMOVE"===i?2:"CURRENT"===i?3:"RESET"===i?4:nC(),a=n.targetChange.targetIds||[],l=(s=n.targetChange.resumeToken,t.useProto3Json?(void 0===s||"string"==typeof s||nC(),rt.fromBase64String(s||"")):(void 0===s||s instanceof tz||s instanceof Uint8Array||nC(),rt.fromUint8Array(s||new Uint8Array))),u=n.targetChange.cause;r=new i4(o,a,l,u&&new nA(void 0===u.code?nS.UNKNOWN:iJ(u.code),u.message||"")||null)}else if("documentChange"in n){n.documentChange;let i=n.documentChange;i.document,i.document.name,i.document.updateTime;let s=sp(t,i.document.name),o=su(i.document.updateTime),a=i.document.createTime?su(i.document.createTime):nj.min(),l=new rU({mapValue:{fields:i.document.fields}}),u=rF.newFoundDocument(s,o,a,l);r=new i5(i.targetIds||[],i.removedTargetIds||[],u.key,u)}else if("documentDelete"in n){n.documentDelete;let i=n.documentDelete;i.document;let s=sp(t,i.document),o=i.readTime?su(i.readTime):nj.min(),a=rF.newNoDocument(s,o);r=new i5([],i.removedTargetIds||[],a.key,a)}else if("documentRemove"in n){n.documentRemove;let i=n.documentRemove;i.document;let s=sp(t,i.document);r=new i5([],i.removedTargetIds||[],s,null)}else{if(!("filter"in n))return nC();{n.filter;let t=n.filter;t.targetId;let{count:i=0,unchangedNames:s}=t,o=new iY(i,s);r=new i8(t.targetId,o)}}return r}(this.serializer,t),r=function(t){if(!("targetChange"in t))return nj.min();let n=t.targetChange;return n.targetIds&&n.targetIds.length?nj.min():n.readTime?su(n.readTime):nj.min()}(t);return this.listener.p_(n,r)}y_(t){let n={};n.database=sm(this.serializer),n.addTarget=function(t,n){let r;let i=n.target;if((r=r8(i)?{documents:{documents:[sg(t,i.path)]}}:{query:function(t,n){var r,i;let s;let o={structuredQuery:{}},a=n.path;null!==n.collectionGroup?(s=a,o.structuredQuery.from=[{collectionId:n.collectionGroup,allDescendants:!0}]):(s=a.popLast(),o.structuredQuery.from=[{collectionId:a.lastSegment()}]),o.parent=sg(t,s);let l=function(t){if(0!==t.length)return function t(n){return n instanceof rH?function(t){if("=="===t.op){if(rx(t.value))return{unaryFilter:{field:sw(t.field),op:"IS_NAN"}};if(rO(t.value))return{unaryFilter:{field:sw(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(rx(t.value))return{unaryFilter:{field:sw(t.field),op:"IS_NOT_NAN"}};if(rO(t.value))return{unaryFilter:{field:sw(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sw(t.field),op:sr[t.op],value:t.value}}}(n):n instanceof rz?function(n){let r=n.getFilters().map(n=>t(n));return 1===r.length?r[0]:{compositeFilter:{op:si[n.op],filters:r}}}(n):nC()}(rz.create(t,"and"))}(n.filters);l&&(o.structuredQuery.where=l);let u=function(t){if(0!==t.length)return t.map(t=>({field:sw(t.field),direction:sn[t.dir]}))}(n.orderBy);u&&(o.structuredQuery.orderBy=u);let h=so(t,n.limit);return null!==h&&(o.structuredQuery.limit=h),n.startAt&&(o.structuredQuery.startAt={before:(r=n.startAt).inclusive,values:r.position}),n.endAt&&(o.structuredQuery.endAt={before:!(i=n.endAt).inclusive,values:i.position}),{ht:o,parent:s}}(t,i).ht}).targetId=n.targetId,n.resumeToken.approximateByteSize()>0){r.resumeToken=sl(t,n.resumeToken);let i=so(t,n.expectedCount);null!==i&&(r.expectedCount=i)}else if(n.snapshotVersion.compareTo(nj.min())>0){r.readTime=sa(t,n.snapshotVersion.toTimestamp());let i=so(t,n.expectedCount);null!==i&&(r.expectedCount=i)}return r}(this.serializer,t);let r=function(t,n){let r=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return nC()}}(n.purpose);return null==r?null:{"goog-listen-tags":r}}(this.serializer,t);r&&(n.labels=r),this.I_(n)}w_(t){let n={};n.database=sm(this.serializer),n.removeTarget=t,this.I_(n)}}class og extends od{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(t,n){return this.connection.Wo("Write",t,n)}g_(t){return t.streamToken||nC(),this.lastStreamToken=t.streamToken,t.writeResults&&0!==t.writeResults.length&&nC(),this.listener.D_()}onNext(t){var n,r;t.streamToken||nC(),this.lastStreamToken=t.streamToken,this.a_.reset();let i=(n=t.writeResults,r=t.commitTime,n&&n.length>0?(void 0!==r||nC(),n.map(t=>{let n;return(n=t.updateTime?su(t.updateTime):su(r)).isEqual(nj.min())&&(n=su(r)),new iD(n,t.transformResults||[])})):[]),s=su(t.commitTime);return this.listener.v_(s,i)}C_(){let t={};t.database=sm(this.serializer),this.I_(t)}S_(t){let n={streamToken:this.lastStreamToken,writes:t.map(t=>(function(t,n){var r;let i;if(n instanceof iB)i={update:sv(t,n.key,n.value)};else if(n instanceof iz)i={delete:sd(t,n.key)};else if(n instanceof ij)i={update:sv(t,n.key,n.data),updateMask:function(t){let n=[];return t.fields.forEach(t=>n.push(t.canonicalString())),{fieldPaths:n}}(n.fieldMask)};else{if(!(n instanceof iK))return nC();i={verify:sd(t,n.key)}}return n.fieldTransforms.length>0&&(i.updateTransforms=n.fieldTransforms.map(t=>(function(t,n){let r=n.transform;if(r instanceof iC)return{fieldPath:n.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(r instanceof iS)return{fieldPath:n.field.canonicalString(),appendMissingElements:{values:r.elements}};if(r instanceof ik)return{fieldPath:n.field.canonicalString(),removeAllFromArray:{values:r.elements}};if(r instanceof iR)return{fieldPath:n.field.canonicalString(),increment:r.Ie};throw nC()})(0,t))),n.precondition.isNone||(i.currentDocument=void 0!==(r=n.precondition).updateTime?{updateTime:sa(t,r.updateTime.toTimestamp())}:void 0!==r.exists?{exists:r.exists}:nC()),i})(this.serializer,t))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{}class oy extends om{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new nA(nS.FAILED_PRECONDITION,"The client has already been terminated.")}bo(t,n,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.bo(t,sc(n,r),i,s,o)).catch(t=>{throw"FirebaseError"===t.name?(t.code===nS.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new nA(nS.UNKNOWN,t.toString())})}Co(t,n,r,i,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(t,sc(n,r),i,o,a,s)).catch(t=>{throw"FirebaseError"===t.name?(t.code===nS.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new nA(nS.UNKNOWN,t.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class ov{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){0===this.x_&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){"Online"===this.state?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,"Online"===t&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){let n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(nb(n),this.N_=!1):n_("OnlineStateTracker",n)}Q_(){null!==this.O_&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow="RemoteStore";class oE{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=s,this.z_.To(t=>{r.enqueueAndForget(async()=>{oN(this)&&(n_(ow,"Restarting streams for network reachability change."),await async function(t){t.W_.add(4),await ob(t),t.j_.set("Unknown"),t.W_.delete(4),await o_(t)}(this))})}),this.j_=new ov(r,i)}}async function o_(t){if(oN(t))for(let n of t.G_)await n(!0)}async function ob(t){for(let n of t.G_)await n(!1)}function oI(t,n){t.U_.has(n.targetId)||(t.U_.set(n.targetId,n),ok(t)?oA(t):oz(t).c_()&&oC(t,n))}function oT(t,n){let r=oz(t);t.U_.delete(n),r.c_()&&oS(t,n),0===t.U_.size&&(r.c_()?r.P_():oN(t)&&t.j_.set("Unknown"))}function oC(t,n){if(t.H_.Ne(n.targetId),n.resumeToken.approximateByteSize()>0||n.snapshotVersion.compareTo(nj.min())>0){let r=t.remoteSyncer.getRemoteKeysForTarget(n.targetId).size;n=n.withExpectedCount(r)}oz(t).y_(n)}function oS(t,n){t.H_.Ne(n),oz(t).w_(n)}function oA(t){t.H_=new i9({getRemoteKeysForTarget:n=>t.remoteSyncer.getRemoteKeysForTarget(n),lt:n=>t.U_.get(n)||null,it:()=>t.datastore.serializer.databaseId}),oz(t).start(),t.j_.B_()}function ok(t){return oN(t)&&!oz(t).u_()&&t.U_.size>0}function oN(t){return 0===t.W_.size}async function oR(t){t.j_.set("Online")}async function oO(t){t.U_.forEach((n,r)=>{oC(t,n)})}async function ox(t,n){t.H_=void 0,ok(t)?(t.j_.q_(n),oA(t)):t.j_.set("Unknown")}async function oD(t,n,r){if(t.j_.set("Online"),n instanceof i4&&2===n.state&&n.cause)try{await async function(t,n){let r=n.cause;for(let i of n.targetIds)t.U_.has(i)&&(await t.remoteSyncer.rejectListen(i,r),t.U_.delete(i),t.H_.removeTarget(i))}(t,n)}catch(r){n_(ow,"Failed to remove targets %s: %s ",n.targetIds.join(","),r),await oL(t,r)}else if(n instanceof i5?t.H_.We(n):n instanceof i8?t.H_.Ze(n):t.H_.je(n),!r.isEqual(nj.min()))try{let n=await s6(t.localStore);r.compareTo(n)>=0&&await function(t,n){let r=t.H_.ot(n);return r.targetChanges.forEach((r,i)=>{if(r.resumeToken.approximateByteSize()>0){let s=t.U_.get(i);s&&t.U_.set(i,s.withResumeToken(r.resumeToken,n))}}),r.targetMismatches.forEach((n,r)=>{let i=t.U_.get(n);if(!i)return;t.U_.set(n,i.withResumeToken(rt.EMPTY_BYTE_STRING,i.snapshotVersion)),oS(t,n);let s=new sb(i.target,n,r,i.sequenceNumber);oC(t,s)}),t.remoteSyncer.applyRemoteEvent(r)}(t,r)}catch(n){n_(ow,"Failed to raise snapshot:",n),await oL(t,n)}}async function oL(t,n,r){if(!nX(n))throw n;t.W_.add(1),await ob(t),t.j_.set("Offline"),r||(r=()=>s6(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{n_(ow,"Retrying IndexedDB access"),await r(),t.W_.delete(1),await o_(t)})}function oP(t,n){return n().catch(r=>oL(t,r,n))}async function oM(t){var n;let r=oK(t),i=t.K_.length>0?t.K_[t.K_.length-1].batchId:-1;for(;oN(n=t)&&n.K_.length<10;)try{let n=await function(t,n){return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(void 0===n&&(n=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,n)))}(t.localStore,i);if(null===n){0===t.K_.length&&r.P_();break}i=n.batchId,function(t,n){t.K_.push(n);let r=oK(t);r.c_()&&r.b_&&r.S_(n.mutations)}(t,n)}catch(n){await oL(t,n)}oU(t)&&oF(t)}function oU(t){return oN(t)&&!oK(t).u_()&&t.K_.length>0}function oF(t){oK(t).start()}async function oV(t){oK(t).C_()}async function oB(t){let n=oK(t);for(let r of t.K_)n.S_(r.mutations)}async function oj(t,n,r){let i=t.K_.shift(),s=iW.from(i,n,r);await oP(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await oM(t)}async function o$(t,n){n&&oK(t).b_&&await async function(t,n){var r;if(function(t){switch(t){case nS.OK:return nC();case nS.CANCELLED:case nS.UNKNOWN:case nS.DEADLINE_EXCEEDED:case nS.RESOURCE_EXHAUSTED:case nS.INTERNAL:case nS.UNAVAILABLE:case nS.UNAUTHENTICATED:return!1;case nS.INVALID_ARGUMENT:case nS.NOT_FOUND:case nS.ALREADY_EXISTS:case nS.PERMISSION_DENIED:case nS.FAILED_PRECONDITION:case nS.ABORTED:case nS.OUT_OF_RANGE:case nS.UNIMPLEMENTED:case nS.DATA_LOSS:return!0;default:return nC()}}(r=n.code)&&r!==nS.ABORTED){let r=t.K_.shift();oK(t).h_(),await oP(t,()=>t.remoteSyncer.rejectFailedWrite(r.batchId,n)),await oM(t)}}(t,n),oU(t)&&oF(t)}async function oq(t,n){t.asyncQueue.verifyOperationInProgress(),n_(ow,"RemoteStore received new credentials");let r=oN(t);t.W_.add(3),await ob(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(n),t.W_.delete(3),await o_(t)}async function oH(t,n){n?(t.W_.delete(2),await o_(t)):n||(t.W_.add(2),await ob(t),t.j_.set("Unknown"))}function oz(t){var n,r,i;return t.J_||(n=t.datastore,r=t.asyncQueue,i={xo:oR.bind(null,t),No:oO.bind(null,t),Lo:ox.bind(null,t),p_:oD.bind(null,t)},n.M_(),t.J_=new op(r,n.connection,n.authCredentials,n.appCheckCredentials,n.serializer,i),t.G_.push(async n=>{n?(t.J_.h_(),ok(t)?oA(t):t.j_.set("Unknown")):(await t.J_.stop(),t.H_=void 0)})),t.J_}function oK(t){var n,r,i;return t.Y_||(n=t.datastore,r=t.asyncQueue,i={xo:()=>Promise.resolve(),No:oV.bind(null,t),Lo:o$.bind(null,t),D_:oB.bind(null,t),v_:oj.bind(null,t)},n.M_(),t.Y_=new og(r,n.connection,n.authCredentials,n.appCheckCredentials,n.serializer,i),t.G_.push(async n=>{n?(t.Y_.h_(),await oM(t)):(await t.Y_.stop(),t.K_.length>0&&(n_(ow,`Stopping write stream with ${t.K_.length} pending writes`),t.K_=[]))})),t.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oG{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new nk,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){let o=new oG(t,n,Date.now()+r,i,s);return o.start(r),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new nA(nS.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oW(t,n){if(nb("AsyncQueue",`${n}: ${t}`),nX(t))return new nA(nS.UNAVAILABLE,`${n}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oQ{static emptySet(t){return new oQ(t.comparator)}constructor(t){this.comparator=t?(n,r)=>t(n,r)||nG.comparator(n.key,r.key):(t,n)=>nG.comparator(t.key,n.key),this.keyedMap=ip(),this.sortedSet=new n3(this.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){let n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){let n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){let n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof oQ)||this.size!==t.size)return!1;let n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){let t=n.getNext().key,i=r.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){let t=[];return this.forEach(n=>{t.push(n.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,n){let r=new oQ;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oY{constructor(){this.Z_=new n3(nG.comparator)}track(t){let n=t.doc.key,r=this.Z_.get(n);r?0!==t.type&&3===r.type?this.Z_=this.Z_.insert(n,t):3===t.type&&1!==r.type?this.Z_=this.Z_.insert(n,{type:r.type,doc:t.doc}):2===t.type&&2===r.type?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):2===t.type&&0===r.type?this.Z_=this.Z_.insert(n,{type:0,doc:t.doc}):1===t.type&&0===r.type?this.Z_=this.Z_.remove(n):1===t.type&&2===r.type?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):0===t.type&&1===r.type?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):nC():this.Z_=this.Z_.insert(n,t)}X_(){let t=[];return this.Z_.inorderTraversal((n,r)=>{t.push(r)}),t}}class oJ{constructor(t,n,r,i,s,o,a,l,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,i,s){let o=[];return n.forEach(t=>{o.push({type:0,doc:t})}),new oJ(t,n,oQ.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&is(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;let n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let t=0;t<n.length;t++)if(n[t].type!==r[t].type||!n[t].doc.isEqual(r[t].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oX{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class oZ{constructor(){this.queries=o0(),this.onlineState="Unknown",this.ia=new Set}terminate(){!function(t,n){let r=t.queries;t.queries=o0(),r.forEach((t,r)=>{for(let t of r.ta)t.onError(n)})}(this,new nA(nS.ABORTED,"Firestore shutting down"))}}function o0(){return new ih(t=>io(t),is)}async function o1(t,n){let r=3,i=n.query,s=t.queries.get(i);s?!s.na()&&n.ra()&&(r=2):(s=new oX,r=+!n.ra());try{switch(r){case 0:s.ea=await t.onListen(i,!0);break;case 1:s.ea=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(r){let t=oW(r,`Initialization of query '${ia(n.query)}' failed`);return void n.onError(t)}t.queries.set(i,s),s.ta.push(n),n.sa(t.onlineState),s.ea&&n.oa(s.ea)&&o5(t)}async function o2(t,n){let r=n.query,i=3,s=t.queries.get(r);if(s){let t=s.ta.indexOf(n);t>=0&&(s.ta.splice(t,1),0===s.ta.length?i=+!n.ra():!s.na()&&n.ra()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function o6(t,n){let r=!1;for(let i of n){let n=i.query,s=t.queries.get(n);if(s){for(let t of s.ta)t.oa(i)&&(r=!0);s.ea=i}}r&&o5(t)}function o3(t,n,r){let i=t.queries.get(n);if(i)for(let t of i.ta)t.onError(r);t.queries.delete(n)}function o5(t){t.ia.forEach(t=>{t.next()})}(H=q||(q={}))._a="default",H.Cache="cache";class o8{constructor(t,n,r){this.query=t,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(t){if(!this.options.includeMetadataChanges){let n=[];for(let r of t.docChanges)3!==r.type&&n.push(r);t=new oJ(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.ua?this.la(t)&&(this.aa.next(t),n=!0):this.ha(t,this.onlineState)&&(this.Pa(t),n=!0),this.ca=t,n}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),n=!0),n}ha(t,n){return!(t.fromCache&&this.ra())||(!this.options.Ta||"Offline"===n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===n)}la(t){if(t.docChanges.length>0)return!0;let n=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&!0===this.options.includeMetadataChanges}Pa(t){t=oJ.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==q.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4{constructor(t){this.key=t}}class o7{constructor(t){this.key=t}}class o9{constructor(t,n){this.query=t,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=iw(),this.mutatedKeys=iw(),this.ya=iu(t),this.wa=new oQ(this.ya)}get ba(){return this.fa}Sa(t,n){let r=n?n.Da:new oY,i=n?n.wa:this.wa,s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1,l="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,u="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((t,n)=>{let h=i.get(t),c=il(this.query,n)?n:null,f=!!h&&this.mutatedKeys.has(h.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),p=!1;h&&c?h.data.isEqual(c.data)?f!==d&&(r.track({type:3,doc:c}),p=!0):this.va(h,c)||(r.track({type:2,doc:c}),p=!0,(l&&this.ya(c,l)>0||u&&0>this.ya(c,u))&&(a=!0)):!h&&c?(r.track({type:0,doc:c}),p=!0):h&&!c&&(r.track({type:1,doc:h}),p=!0,(l||u)&&(a=!0)),p&&(c?(o=o.add(c),s=d?s.add(t):s.delete(t)):(o=o.delete(t),s=s.delete(t)))}),null!==this.query.limit)for(;o.size>this.query.limit;){let t="F"===this.query.limitType?o.last():o.first();o=o.delete(t.key),s=s.delete(t.key),r.track({type:1,doc:t})}return{wa:o,Da:r,ls:a,mutatedKeys:s}}va(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,i){let s=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;let o=t.Da.X_();o.sort((t,n)=>(function(t,n){let r=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return nC()}};return r(t)-r(n)})(t.type,n.type)||this.ya(t.doc,n.doc)),this.Ca(r),i=null!=i&&i;let a=n&&!i?this.Fa():[],l=0===this.pa.size&&this.current&&!i?1:0,u=l!==this.ga;return(this.ga=l,0!==o.length||u)?{snapshot:new oJ(this.query,t.wa,s,o,t.mutatedKeys,0===l,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:a}:{Ma:a}}sa(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({wa:this.wa,Da:new oY,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=t.current)}Fa(){if(!this.current)return[];let t=this.pa;this.pa=iw(),this.wa.forEach(t=>{this.xa(t.key)&&(this.pa=this.pa.add(t.key))});let n=[];return t.forEach(t=>{this.pa.has(t)||n.push(new o7(t))}),this.pa.forEach(r=>{t.has(r)||n.push(new o4(r))}),n}Oa(t){this.fa=t.gs,this.pa=iw();let n=this.Sa(t.documents);return this.applyChanges(n,!0)}Na(){return oJ.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,0===this.ga,this.hasCachedResults)}}const ae="SyncEngine";class at{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class an{constructor(t){this.key=t,this.Ba=!1}}class ar{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new ih(t=>io(t),is),this.qa=new Map,this.Qa=new Set,this.$a=new n3(nG.comparator),this.Ka=new Map,this.Ua=new sj,this.Wa={},this.Ga=new Map,this.za=sN.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return!0===this.ja}}async function ai(t,n,r=!0){let i;let s=aC(t),o=s.ka.get(n);return o?(s.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Na()):i=await ao(s,n,r,!0),i}async function as(t,n){let r=aC(t);await ao(r,n,!0,!1)}async function ao(t,n,r,i){var s,o;let a;let l=await (s=t.localStore,o=it(n),s.persistence.runTransaction("Allocate target","readwrite",t=>{let n;return s.Hr.getTargetData(t,o).next(r=>r?(n=r,nJ.resolve(n)):s.Hr.allocateTargetId(t).next(r=>(n=new sb(o,r,"TargetPurposeListen",t.currentSequenceNumber),s.Hr.addTargetData(t,n).next(()=>n))))}).then(t=>{let n=s.Ts.get(t.targetId);return(null===n||t.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(s.Ts=s.Ts.insert(t.targetId,t),s.Is.set(o,t.targetId)),t})),u=l.targetId,h=t.sharedClientState.addLocalQueryTarget(u,r);return i&&(a=await aa(t,n,u,"current"===h,l.resumeToken)),t.isPrimaryClient&&r&&oI(t.remoteStore,l),a}async function aa(t,n,r,i,s){t.Ha=(n,r,i)=>(async function(t,n,r,i){let s=n.view.Sa(r);s.ls&&(s=await s5(t.localStore,n.query,!1).then(({documents:t})=>n.view.Sa(t,s)));let o=i&&i.targetChanges.get(n.targetId),a=i&&null!=i.targetMismatches.get(n.targetId),l=n.view.applyChanges(s,t.isPrimaryClient,o,a);return aE(t,n.targetId,l.Ma),l.snapshot})(t,n,r,i);let o=await s5(t.localStore,n,!0),a=new o9(n,o.gs),l=a.Sa(o.documents),u=i3.createSynthesizedTargetChangeForCurrentChange(r,i&&"Offline"!==t.onlineState,s),h=a.applyChanges(l,t.isPrimaryClient,u);aE(t,r,h.Ma);let c=new at(n,r,a);return t.ka.set(n,c),t.qa.has(r)?t.qa.get(r).push(n):t.qa.set(r,[n]),h.snapshot}async function al(t,n,r){let i=t.ka.get(n),s=t.qa.get(i.targetId);if(s.length>1)return t.qa.set(i.targetId,s.filter(t=>!is(t,n))),void t.ka.delete(n);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(i.targetId),t.sharedClientState.isActiveQueryTarget(i.targetId)||await s3(t.localStore,i.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(i.targetId),r&&oT(t.remoteStore,i.targetId),av(t,i.targetId)}).catch(nY)):(av(t,i.targetId),await s3(t.localStore,i.targetId,!0))}async function au(t,n){let r=t.ka.get(n),i=t.qa.get(r.targetId);t.isPrimaryClient&&1===i.length&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),oT(t.remoteStore,r.targetId))}async function ah(t,n,r){var i,s;let o=((i=t).remoteStore.remoteSyncer.applySuccessfulWrite=ap.bind(null,i),i.remoteStore.remoteSyncer.rejectFailedWrite=ag.bind(null,i),i);try{let t;let i=await function(t,n){let r,i;let s=nB.now(),o=n.reduce((t,n)=>t.add(n.key),iw());return t.persistence.runTransaction("Locally write mutations","readwrite",a=>{let l=ic,u=iw();return t.ds.getEntries(a,o).next(t=>{(l=t).forEach((t,n)=>{n.isValidDocument()||(u=u.add(t))})}).next(()=>t.localDocuments.getOverlayedDocuments(a,l)).next(i=>{r=i;let o=[];for(let t of n){let n=function(t,n){let r=null;for(let i of t.fieldTransforms){let t=n.data.field(i.field),s=iT(i.transform,t||null);null!=s&&(null===r&&(r=rU.empty()),r.set(i.field,s))}return r||null}(t,r.get(t.key).overlayedDocument);null!=n&&o.push(new ij(t.key,n,function t(n){let r=[];return n2(n.fields,(n,i)=>{let s=new nK([n]);if(rD(i)){let n=t(i.mapValue).fields;if(0===n.length)r.push(s);else for(let t of n)r.push(s.child(t))}else r.push(s)}),new n9(r)}(n.value.mapValue),iL.exists(!0)))}return t.mutationQueue.addMutationBatch(a,s,o,n)}).next(n=>{i=n;let s=n.applyToLocalDocumentSet(r,u);return t.documentOverlayCache.saveOverlays(a,n.batchId,s)})}).then(()=>({batchId:i.batchId,changes:ig(r)}))}(o.localStore,n);o.sharedClientState.addPendingMutation(i.batchId),s=i.batchId,(t=o.Wa[o.currentUser.toKey()])||(t=new n3(nF)),t=t.insert(s,r),o.Wa[o.currentUser.toKey()]=t,await ab(o,i.changes),await oM(o.remoteStore)}catch(n){let t=oW(n,"Failed to persist write");r.reject(t)}}async function ac(t,n){try{let r=await function(t,n){let r=n.snapshotVersion,i=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{var o,a,l;let u,h,c=t.ds.newChangeBuffer({trackRemovals:!0});i=t.Ts;let f=[];n.targetChanges.forEach((o,a)=>{var l;let u=i.get(a);if(!u)return;f.push(t.Hr.removeMatchingKeys(s,o.removedDocuments,a).next(()=>t.Hr.addMatchingKeys(s,o.addedDocuments,a)));let h=u.withSequenceNumber(s.currentSequenceNumber);null!==n.targetMismatches.get(a)?h=h.withResumeToken(rt.EMPTY_BYTE_STRING,nj.min()).withLastLimboFreeSnapshotVersion(nj.min()):o.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(o.resumeToken,r)),i=i.insert(a,h),l=h,(0===u.resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size>0)&&f.push(t.Hr.updateTargetData(s,h))});let d=ic,p=iw();if(n.documentUpdates.forEach(r=>{n.resolvedLimboDocuments.has(r)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(s,r))}),f.push((o=s,a=c,l=n.documentUpdates,u=iw(),h=iw(),l.forEach(t=>u=u.add(t)),a.getEntries(o,u).next(t=>{let n=ic;return l.forEach((r,i)=>{let s=t.get(r);i.isFoundDocument()!==s.isFoundDocument()&&(h=h.add(r)),i.isNoDocument()&&i.version.isEqual(nj.min())?(a.removeEntry(r,i.readTime),n=n.insert(r,i)):!s.isValidDocument()||i.version.compareTo(s.version)>0||0===i.version.compareTo(s.version)&&s.hasPendingWrites?(a.addEntry(i),n=n.insert(r,i)):n_(s0,"Ignoring outdated watch update for ",r,". Current version:",s.version," Watch version:",i.version)}),{Vs:n,fs:h}})).next(t=>{d=t.Vs,p=t.fs})),!r.isEqual(nj.min())){let n=t.Hr.getLastRemoteSnapshotVersion(s).next(n=>t.Hr.setTargetsMetadata(s,s.currentSequenceNumber,r));f.push(n)}return nJ.waitFor(f).next(()=>c.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,d,p)).next(()=>d)}).then(n=>(t.Ts=i,n))}(t.localStore,n);n.targetChanges.forEach((n,r)=>{let i=t.Ka.get(r);i&&(n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size<=1||nC(),n.addedDocuments.size>0?i.Ba=!0:n.modifiedDocuments.size>0?i.Ba||nC():n.removedDocuments.size>0&&(i.Ba||nC(),i.Ba=!1))}),await ab(t,r,n)}catch(t){await nY(t)}}function af(t,n,r){var i;if(t.isPrimaryClient&&0===r||!t.isPrimaryClient&&1===r){let r;let s=[];t.ka.forEach((t,r)=>{let i=r.view.sa(n);i.snapshot&&s.push(i.snapshot)}),(i=t.eventManager).onlineState=n,r=!1,i.queries.forEach((t,i)=>{for(let t of i.ta)t.sa(n)&&(r=!0)}),r&&o5(i),s.length&&t.La.p_(s),t.onlineState=n,t.isPrimaryClient&&t.sharedClientState.setOnlineState(n)}}async function ad(t,n,r){t.sharedClientState.updateQueryState(n,"rejected",r);let i=t.Ka.get(n),s=i&&i.key;if(s){let r=new n3(nG.comparator);r=r.insert(s,rF.newNoDocument(s,nj.min()));let i=iw().add(s),o=new i6(nj.min(),new Map,new n3(nF),r,i);await ac(t,o),t.$a=t.$a.remove(s),t.Ka.delete(n),a_(t)}else await s3(t.localStore,n,!1).then(()=>av(t,n,r)).catch(nY)}async function ap(t,n){var r;let i=n.batch.batchId;try{let s=await (r=t.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{let i=n.batch.keys(),s=r.ds.newChangeBuffer({trackRemovals:!0});return(function(t,n,r,i){let s=r.batch,o=s.keys(),a=nJ.resolve();return o.forEach(t=>{a=a.next(()=>i.getEntry(n,t)).next(n=>{let o=r.docVersions.get(t);null!==o||nC(),0>n.version.compareTo(o)&&(s.applyToRemoteDocument(n,r),n.isValidDocument()&&(n.setReadTime(r.commitVersion),i.addEntry(n)))})}),a.next(()=>t.mutationQueue.removeMutationBatch(n,s))})(r,t,n,s).next(()=>s.apply(t)).next(()=>r.mutationQueue.performConsistencyCheck(t)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(t,i,n.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let n=iw();for(let r=0;r<t.mutationResults.length;++r)t.mutationResults[r].transformResults.length>0&&(n=n.add(t.batch.mutations[r].key));return n}(n))).next(()=>r.localDocuments.getDocuments(t,i))});ay(t,i,null),am(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await ab(t,s)}catch(t){await nY(t)}}async function ag(t,n,r){var i;try{let s=await (i=t.localStore).persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return i.mutationQueue.lookupMutationBatch(t,n).next(n=>(null!==n||nC(),r=n.keys(),i.mutationQueue.removeMutationBatch(t,n))).next(()=>i.mutationQueue.performConsistencyCheck(t)).next(()=>i.documentOverlayCache.removeOverlaysForBatchId(t,r,n)).next(()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r)).next(()=>i.localDocuments.getDocuments(t,r))});ay(t,n,r),am(t,n),t.sharedClientState.updateMutationState(n,"rejected",r),await ab(t,s)}catch(t){await nY(t)}}function am(t,n){(t.Ga.get(n)||[]).forEach(t=>{t.resolve()}),t.Ga.delete(n)}function ay(t,n,r){let i=t.Wa[t.currentUser.toKey()];if(i){let s=i.get(n);s&&(r?s.reject(r):s.resolve(),i=i.remove(n)),t.Wa[t.currentUser.toKey()]=i}}function av(t,n,r=null){for(let i of(t.sharedClientState.removeLocalQueryTarget(n),t.qa.get(n)))t.ka.delete(i),r&&t.La.Ja(i,r);t.qa.delete(n),t.isPrimaryClient&&t.Ua.Sr(n).forEach(n=>{t.Ua.containsKey(n)||aw(t,n)})}function aw(t,n){t.Qa.delete(n.path.canonicalString());let r=t.$a.get(n);null!==r&&(oT(t.remoteStore,r),t.$a=t.$a.remove(n),t.Ka.delete(r),a_(t))}function aE(t,n,r){for(let i of r)i instanceof o4?(t.Ua.addReference(i.key,n),function(t,n){let r=n.key,i=r.path.canonicalString();t.$a.get(r)||t.Qa.has(i)||(n_(ae,"New document in limbo: "+r),t.Qa.add(i),a_(t))}(t,i)):i instanceof o7?(n_(ae,"Document no longer in limbo: "+i.key),t.Ua.removeReference(i.key,n),t.Ua.containsKey(i.key)||aw(t,i.key)):nC()}function a_(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){let n=t.Qa.values().next().value;t.Qa.delete(n);let r=new nG(nH.fromString(n)),i=t.za.next();t.Ka.set(i,new an(r)),t.$a=t.$a.insert(r,i),oI(t.remoteStore,new sb(it(new r4(r.path)),i,"TargetPurposeLimboResolution",nZ.ae))}}async function ab(t,n,r){let i=[],s=[],o=[];t.ka.isEmpty()||(t.ka.forEach((a,l)=>{o.push(t.Ha(l,n,r).then(n=>{var o;if((n||r)&&t.isPrimaryClient){let i=n?!n.fromCache:null===(o=null==r?void 0:r.targetChanges.get(l.targetId))||void 0===o?void 0:o.current;t.sharedClientState.updateQueryState(l.targetId,i?"current":"not-current")}if(n){i.push(n);let t=sJ.Yi(l.targetId,n);s.push(t)}}))}),await Promise.all(o),t.La.p_(i),await async function(t,n){try{await t.persistence.runTransaction("notifyLocalViewChanges","readwrite",r=>nJ.forEach(n,n=>nJ.forEach(n.Hi,i=>t.persistence.referenceDelegate.addReference(r,n.targetId,i)).next(()=>nJ.forEach(n.Ji,i=>t.persistence.referenceDelegate.removeReference(r,n.targetId,i)))))}catch(t){if(!nX(t))throw t;n_(s0,"Failed to update sequence numbers: "+t)}for(let r of n){let n=r.targetId;if(!r.fromCache){let r=t.Ts.get(n),i=r.snapshotVersion,s=r.withLastLimboFreeSnapshotVersion(i);t.Ts=t.Ts.insert(n,s)}}}(t.localStore,s))}async function aI(t,n){if(!t.currentUser.isEqual(n)){n_(ae,"User change. New user:",n.toKey());let r=await s2(t.localStore,n);t.currentUser=n,t.Ga.forEach(t=>{t.forEach(t=>{t.reject(new nA(nS.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),t.Ga.clear(),t.sharedClientState.handleUserChange(n,r.removedBatchIds,r.addedBatchIds),await ab(t,r.Rs)}}function aT(t,n){let r=t.Ka.get(n);if(r&&r.Ba)return iw().add(r.key);{let r=iw(),i=t.qa.get(n);if(!i)return r;for(let n of i){let i=t.ka.get(n);r=r.unionWith(i.view.ba)}return r}}function aC(t){return t.remoteStore.remoteSyncer.applyRemoteEvent=ac.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=aT.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ad.bind(null,t),t.La.p_=o6.bind(null,t.eventManager),t.La.Ja=o3.bind(null,t.eventManager),t}class aS{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=oh(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,n){return null}nu(t,n){return null}eu(t){var n,r;return n=this.persistence,r=new sZ,new s1(n,r,t.initialUser,this.serializer)}Xa(t){return new sG(sQ.ri,this.serializer)}Za(t){return new s4}async terminate(){var t,n;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(n=this.indexBackfillerScheduler)||void 0===n||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}aS.provider={build:()=>new aS};class aA extends aS{constructor(t){super(),this.cacheSizeBytes=t}tu(t,n){return this.persistence.referenceDelegate instanceof sY||nC(),new sD(this.persistence.referenceDelegate.garbageCollector,t.asyncQueue,n)}Xa(t){let n=void 0!==this.cacheSizeBytes?sk.withCacheSize(this.cacheSizeBytes):sk.DEFAULT;return new sG(t=>sY.ri(t,n),this.serializer)}}class ak{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>af(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=aI.bind(null,this.syncEngine),await oH(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new oZ}createDatastore(t){var n;let r=oh(t.databaseInfo.databaseId),i=new ol(t.databaseInfo);return n=t.authCredentials,new oy(n,t.appCheckCredentials,i,r)}createRemoteStore(t){var n,r;return n=this.localStore,r=this.datastore,new oE(n,r,t.asyncQueue,t=>af(this.syncEngine,t,0),oe.D()?new oe:new s7)}createSyncEngine(t,n){return function(t,n,r,i,s,o,a){let l=new ar(t,n,r,i,s,o);return a&&(l.ja=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(t){n_(ow,"RemoteStore shutting down."),t.W_.add(5),await ob(t),t.z_.shutdown(),t.j_.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate(),null===(n=this.eventManager)||void 0===n||n.terminate()}}ak.provider={build:()=>new ak};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):nb("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR="FirestoreClient";class aO{constructor(t,n,r,i,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ny.UNAUTHENTICATED,this.clientId=nU.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async t=>{n_(aR,"Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(r,t=>(n_(aR,"Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();let t=new nk;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(r){let n=oW(r,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function ax(t,n){t.asyncQueue.verifyOperationInProgress(),n_(aR,"Initializing OfflineComponentProvider");let r=t.configuration;await n.initialize(r);let i=r.initialUser;t.setCredentialChangeListener(async t=>{i.isEqual(t)||(await s2(n.localStore,t),i=t)}),n.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=n}async function aD(t,n){t.asyncQueue.verifyOperationInProgress();let r=await aL(t);n_(aR,"Initializing OnlineComponentProvider"),await n.initialize(r,t.configuration),t.setCredentialChangeListener(t=>oq(n.remoteStore,t)),t.setAppCheckTokenChangeListener((t,r)=>oq(n.remoteStore,r)),t._onlineComponents=n}async function aL(t){if(!t._offlineComponents){if(t._uninitializedComponentsProvider){n_(aR,"Using user provided OfflineComponentProvider");try{await ax(t,t._uninitializedComponentsProvider._offline)}catch(n){if(!("FirebaseError"===n.name?n.code===nS.FAILED_PRECONDITION||n.code===nS.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&n instanceof DOMException)||22===n.code||20===n.code||11===n.code))throw n;nI("Error using user provided cache. Falling back to memory cache: "+n),await ax(t,new aS)}}else n_(aR,"Using default OfflineComponentProvider"),await ax(t,new aA(void 0))}return t._offlineComponents}async function aP(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(n_(aR,"Using user provided OnlineComponentProvider"),await aD(t,t._uninitializedComponentsProvider._online)):(n_(aR,"Using default OnlineComponentProvider"),await aD(t,new ak))),t._onlineComponents}async function aM(t){let n=await aP(t),r=n.eventManager;return r.onListen=ai.bind(null,n.syncEngine),r.onUnlisten=al.bind(null,n.syncEngine),r.onFirstRemoteStoreListen=as.bind(null,n.syncEngine),r.onLastRemoteStoreUnlisten=au.bind(null,n.syncEngine),r}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aU(t){let n={};return void 0!==t.timeoutSeconds&&(n.timeoutSeconds=t.timeoutSeconds),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aF=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aV(t,n,r){if(!r)throw new nA(nS.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${n}.`)}function aB(t){if(!nG.isDocumentKey(t))throw new nA(nS.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function aj(t){if(nG.isDocumentKey(t))throw new nA(nS.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function a$(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{var n;let r=(n=t).constructor?n.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof t?"a function":nC()}function aq(t,n){if("_delegate"in t&&(t=t._delegate),!(t instanceof n)){if(n.name===t.constructor.name)throw new nA(nS.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=a$(t);throw new nA(nS.INVALID_ARGUMENT,`Expected type '${n.name}', but it was: ${r}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aH="firestore.googleapis.com";class az{constructor(t){var n,r;if(void 0===t.host){if(void 0!==t.ssl)throw new nA(nS.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=aH,this.ssl=!0}else this.host=t.host,this.ssl=null===(n=t.ssl)||void 0===n||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=0x2800000;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new nA(nS.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,n,r,i){if(!0===n&&!0===i)throw new nA(nS.INVALID_ARGUMENT,`${t} and ${r} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=aU(null!==(r=t.experimentalLongPollingOptions)&&void 0!==r?r:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new nA(nS.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new nA(nS.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new nA(nS.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){var n,r;return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=t.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class aK{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new az({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new nA(nS.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new nA(nS.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new az(t),this._emulatorOptions=t.emulatorOptions||{},void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new nR;switch(t.type){case"firstParty":return new nL(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new nA(nS.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let n=aF.get(t);n&&(n_("ComponentProvider","Removing Datastore"),aF.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aG{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new aG(this.firestore,t,this._query)}}class aW{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new aQ(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new aW(this.firestore,t,this._key)}}class aQ extends aG{constructor(t,n,r){super(t,n,new r4(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let t=this._path.popLast();return t.isEmpty()?null:new aW(this.firestore,null,new nG(t))}withConverter(t){return new aQ(this.firestore,t,this._path)}}function aY(t,n,...r){if(t=eH(t),aV("collection","path",n),t instanceof aK){let i=nH.fromString(n,...r);return aj(i),new aQ(t,null,i)}{if(!(t instanceof aW||t instanceof aQ))throw new nA(nS.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=t._path.child(nH.fromString(n,...r));return aj(i),new aQ(t.firestore,null,i)}}function aJ(t,n,...r){if(t=eH(t),1==arguments.length&&(n=nU.newId()),aV("doc","path",n),t instanceof aK){let i=nH.fromString(n,...r);return aB(i),new aW(t,null,new nG(i))}{if(!(t instanceof aW||t instanceof aQ))throw new nA(nS.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=t._path.child(nH.fromString(n,...r));return aB(i),new aW(t.firestore,t instanceof aQ?t.converter:null,new nG(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aX="AsyncQueue";class aZ{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new oc(this,"async_queue_retry"),this.bu=()=>{let t=ou();t&&n_(aX,"Visibility state changed to "+t.visibilityState),this.a_.t_()},this.Su=t;let n=ou();n&&"function"==typeof n.addEventListener&&n.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;let n=ou();n&&"function"==typeof n.removeEventListener&&n.removeEventListener("visibilitychange",this.bu)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});let n=new nk;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(0!==this.Vu.length){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!nX(t))throw t;n_(aX,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){let n=this.Su.then(()=>(this.pu=!0,t().catch(t=>{let n;throw this.gu=t,this.pu=!1,nb("INTERNAL UNHANDLED ERROR: ",(n=t.message||"",t.stack&&(n=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),n)),t}).then(t=>(this.pu=!1,t))));return this.Su=n,n}enqueueAfterDelay(t,n,r){this.Du(),this.wu.indexOf(t)>-1&&(n=0);let i=oG.createAndSchedule(this,t,n,r,t=>this.Fu(t));return this.fu.push(i),i}Du(){this.gu&&nC()}verifyOperationInProgress(){}async Mu(){let t;do t=this.Su,await t;while(t!==this.Su)}xu(t){for(let n of this.fu)if(n.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{for(let n of(this.fu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs),this.fu))if(n.skipDelay(),"all"!==t&&n.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){let n=this.fu.indexOf(t);this.fu.splice(n,1)}}class a0 extends aK{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new aZ,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let t=this._firestoreClient.terminate();this._queue=new aZ(t),this._firestoreClient=void 0,await t}}}function a1(t){if(t._terminated)throw new nA(nS.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||function(t){var n,r,i,s,o;let a=t._freezeSettings(),l=(s=t._databaseId,o=(null===(n=t._app)||void 0===n?void 0:n.options.appId)||"",new rd(s,o,t._persistenceKey,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,aU(a.experimentalLongPollingOptions),a.useFetchStreams));t._componentsProvider||(null===(r=a.localCache)||void 0===r?void 0:r._offlineComponentProvider)&&(null===(i=a.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(t._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),t._firestoreClient=new aO(t._authCredentials,t._appCheckCredentials,t._queue,l,t._componentsProvider&&function(t){let n=null==t?void 0:t._online.build();return{_offline:null==t?void 0:t._offline.build(n),_online:n}}(t._componentsProvider))}(t),t._firestoreClient}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(t){this._byteString=t}static fromBase64String(t){try{return new a2(rt.fromBase64String(t))}catch(t){throw new nA(nS.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new a2(rt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a6{constructor(...t){for(let n=0;n<t.length;++n)if(0===t[n].length)throw new nA(nS.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nK(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a3{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a5{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new nA(nS.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new nA(nS.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return nF(this._lat,t._lat)||nF(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a8{constructor(t){this._values=(t||[]).map(t=>t)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(t,n){if(t.length!==n.length)return!1;for(let r=0;r<t.length;++r)if(t[r]!==n[r])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a4=/^__.*__$/;class a7{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return null!==this.fieldMask?new ij(t,this.data,this.fieldMask,n,this.fieldTransforms):new iB(t,this.data,n,this.fieldTransforms)}}class a9{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new ij(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function le(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw nC()}}class lt{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,void 0===s&&this.Bu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new lt(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var n;let r=null===(n=this.path)||void 0===n?void 0:n.child(t),i=this.ku({path:r,Qu:!1});return i.$u(t),i}Ku(t){var n;let r=null===(n=this.path)||void 0===n?void 0:n.child(t),i=this.ku({path:r,Qu:!1});return i.Bu(),i}Uu(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return lf(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return void 0!==this.fieldMask.find(n=>t.isPrefixOf(n))||void 0!==this.fieldTransforms.find(n=>t.isPrefixOf(n.field))}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(0===t.length)throw this.Wu("Document fields must not be empty");if(le(this.Lu)&&a4.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class ln{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||oh(t)}ju(t,n,r,i=!1){return new lt({Lu:t,methodName:n,zu:r,path:nK.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lr(t){let n=t._freezeSettings(),r=oh(t._databaseId);return new ln(t._databaseId,!!n.ignoreUndefinedProperties,r)}class li extends a3{_toFieldTransform(t){if(2!==t.Lu)throw 1===t.Lu?t.Wu(`${this._methodName}() can only appear at the top level of your update data`):t.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof li}}function ls(t,n){if(la(t=eH(t)))return ll("Unsupported field value:",n,t),lo(t,n);if(t instanceof a3)return function(t,n){if(!le(n.Lu))throw n.Wu(`${t._methodName}() can only be used with update() and set()`);if(!n.path)throw n.Wu(`${t._methodName}() is not currently supported inside arrays`);let r=t._toFieldTransform(n);r&&n.fieldTransforms.push(r)}(t,n),null;if(void 0===t&&n.ignoreUndefinedProperties)return null;if(n.path&&n.fieldMask.push(n.path),t instanceof Array){if(n.settings.Qu&&4!==n.Lu)throw n.Wu("Nested arrays are not supported");return function(t,n){let r=[],i=0;for(let s of t){let t=ls(s,n.Uu(i));null==t&&(t={nullValue:"NULL_VALUE"}),r.push(t),i++}return{arrayValue:{values:r}}}(t,n)}return function(t,n){var r,i,s;if(null===(t=eH(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return r=n.serializer,"number"==typeof(s=i=t)&&Number.isInteger(s)&&!n0(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER?ib(i):i_(r,i);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){let r=nB.fromDate(t);return{timestampValue:sa(n.serializer,r)}}if(t instanceof nB){let r=new nB(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:sa(n.serializer,r)}}if(t instanceof a5)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof a2)return{bytesValue:sl(n.serializer,t._byteString)};if(t instanceof aW){let r=n.databaseId,i=t.firestore._databaseId;if(!i.isEqual(r))throw n.Wu(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:sh(t.firestore._databaseId||n.databaseId,t._key.path)}}if(t instanceof a8)return{mapValue:{fields:{[rm]:{stringValue:rw},[rE]:{arrayValue:{values:t.toArray().map(t=>{if("number"!=typeof t)throw n.Wu("VectorValues must only contain numeric values.");return i_(n.serializer,t)})}}}}};throw n.Wu(`Unsupported field value: ${a$(t)}`)}(t,n)}function lo(t,n){let r={};return n6(t)?n.path&&n.path.length>0&&n.fieldMask.push(n.path):n2(t,(t,i)=>{let s=ls(i,n.qu(t));null!=s&&(r[t]=s)}),{mapValue:{fields:r}}}function la(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof nB||t instanceof a5||t instanceof a2||t instanceof aW||t instanceof a3||t instanceof a8)}function ll(t,n,r){if(!la(r)||"object"!=typeof r||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r)){let i=a$(r);throw"an object"===i?n.Wu(t+" a custom object"):n.Wu(t+" "+i)}}function lu(t,n,r){if((n=eH(n))instanceof a6)return n._internalPath;if("string"==typeof n)return lc(t,n);throw lf("Field path arguments must be of type string or ",t,!1,void 0,r)}const lh=RegExp("[~\\*/\\[\\]]");function lc(t,n,r){if(n.search(lh)>=0)throw lf(`Invalid field path (${n}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,r);try{return new a6(...n.split("."))._internalPath}catch(i){throw lf(`Invalid field path (${n}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,r)}}function lf(t,n,r,i,s){let o=i&&!i.isEmpty(),a=void 0!==s,l=`Function ${n}() called with invalid data`;r&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(o||a)&&(u+=" (found",o&&(u+=` in field ${i}`),a&&(u+=` in document ${s}`),u+=")"),new nA(nS.INVALID_ARGUMENT,l+t+u)}function ld(t,n){return t.some(t=>t.isEqual(n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new aW(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let t=new lg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){let n=this._document.data.field(lm("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n)}}}class lg extends lp{data(){return super.data()}}function lm(t,n){return"string"==typeof n?lc(t,n):n instanceof a6?n._internalPath:n._delegate._internalPath}class ly{}class lv extends ly{}function lw(t,n,...r){let i=[];for(let s of(n instanceof ly&&i.push(n),function(t){let n=t.filter(t=>t instanceof lb).length,r=t.filter(t=>t instanceof lE).length;if(n>1||n>0&&r>0)throw new nA(nS.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i=i.concat(r)),i))t=s._apply(t);return t}class lE extends lv{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new lE(t,n,r)}_apply(t){let n=this._parse(t);return lC(t._query,n),new aG(t.firestore,t.converter,ir(t._query,n))}_parse(t){let n=lr(t.firestore);return function(t,n,r,i,s,o,a){let l;if(s.isKeyField()){if("array-contains"===o||"array-contains-any"===o)throw new nA(nS.INVALID_ARGUMENT,`Invalid Query. You can't perform '${o}' queries on documentId().`);if("in"===o||"not-in"===o){lT(a,o);let n=[];for(let r of a)n.push(lI(i,t,r));l={arrayValue:{values:n}}}else l=lI(i,t,a)}else"in"!==o&&"not-in"!==o&&"array-contains-any"!==o||lT(a,o),l=function(t,n,r,i=!1){return ls(r,t.ju(i?4:3,n))}(r,n,a,"in"===o||"not-in"===o);return rH.create(s,o,l)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function l_(t,n,r){let i=lm("where",t);return lE._create(i,n,r)}class lb extends ly{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new lb(t,n)}_parse(t){let n=this._queryConstraints.map(n=>n._parse(t)).filter(t=>t.getFilters().length>0);return 1===n.length?n[0]:rz.create(n,this._getOperator())}_apply(t){let n=this._parse(t);return 0===n.getFilters().length?t:(function(t,n){let r=t;for(let t of n.getFlattenedFilters())lC(r,t),r=ir(r,t)}(t._query,n),new aG(t.firestore,t.converter,ir(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function lI(t,n,r){if("string"==typeof(r=eH(r))){if(""===r)throw new nA(nS.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!r9(n)&&-1!==r.indexOf("/"))throw new nA(nS.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);let i=n.path.child(nH.fromString(r));if(!nG.isDocumentKey(i))throw new nA(nS.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return rk(t,new nG(i))}if(r instanceof aW)return rk(t,r._key);throw new nA(nS.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${a$(r)}.`)}function lT(t,n){if(!Array.isArray(t)||0===t.length)throw new nA(nS.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${n.toString()}' filters.`)}function lC(t,n){let r=function(t,n){for(let r of t)for(let t of r.getFlattenedFilters())if(n.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(n.op));if(null!==r)throw r===n.op?new nA(nS.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${n.op.toString()}' filter.`):new nA(nS.INVALID_ARGUMENT,`Invalid query. You cannot use '${n.op.toString()}' filters with '${r.toString()}' filters.`)}class lS{convertValue(t,n="none"){switch(r_(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ri(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(rs(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw nC()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){let r={};return n2(t,(t,i)=>{r[t]=this.convertValue(i,n)}),r}convertVectorValue(t){var n,r,i;return new a8(null===(i=null===(r=null===(n=t.fields)||void 0===n?void 0:n[rE].arrayValue)||void 0===r?void 0:r.values)||void 0===i?void 0:i.map(t=>ri(t.doubleValue)))}convertGeoPoint(t){return new a5(ri(t.latitude),ri(t.longitude))}convertArray(t,n){return(t.values||[]).map(t=>this.convertValue(t,n))}convertServerTimestamp(t,n){switch(n){case"previous":let r=rc(t);return null==r?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(rf(t));default:return null}}convertTimestamp(t){let n=rr(t);return new nB(n.seconds,n.nanos)}convertDocumentKey(t,n){let r=nH.fromString(t);s_(r)||nC();let i=new rg(r.get(1),r.get(3)),s=new nG(r.popFirst(5));return i.isEqual(n)||nb(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class lk extends lp{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){let n=new lN(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){let r=this._document.data.field(lm("DocumentSnapshot.get",t));if(null!==r)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class lN extends lk{data(t={}){return super.data(t)}}class lR{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new lA(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){let t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new lN(this._firestore,this._userDataWriter,r.key,r,new lA(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){let n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new nA(nS.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(t,n){if(t._snapshot.oldDocs.isEmpty()){let n=0;return t._snapshot.docChanges.map(r=>{let i=new lN(t._firestore,t._userDataWriter,r.doc.key,r.doc,new lA(t._snapshot.mutatedKeys.has(r.doc.key),t._snapshot.fromCache),t.query.converter);return r.doc,{type:"added",doc:i,oldIndex:-1,newIndex:n++}})}{let r=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>n||3!==t.type).map(n=>{let i=new lN(t._firestore,t._userDataWriter,n.doc.key,n.doc,new lA(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),s=-1,o=-1;return 0!==n.type&&(s=r.indexOf(n.doc.key),r=r.delete(n.doc.key)),1!==n.type&&(o=(r=r.add(n.doc)).indexOf(n.doc.key)),{type:function(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return nC()}}(n.type),doc:i,oldIndex:s,newIndex:o}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}class lO extends lS{constructor(t){super(),this.firestore=t}convertBytes(t){return new a2(t)}convertReference(t){let n=this.convertDocumentKey(t,this.firestore._databaseId);return new aW(this.firestore,null,n)}}function lx(t){t=aq(t,aG);let n=aq(t.firestore,a0),r=a1(n),i=new lO(n);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new nA(nS.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query),(function(t,n,r={}){let i=new nk;return t.asyncQueue.enqueueAndForget(async()=>(function(t,n,r,i,s){let o=new aN({next:r=>{o.su(),n.enqueueAndForget(()=>o2(t,a)),r.fromCache&&"server"===i.source?s.reject(new nA(nS.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(r)},error:t=>s.reject(t)}),a=new o8(r,o,{includeMetadataChanges:!0,Ta:!0});return o1(t,a)})(await aM(t),t.asyncQueue,n,r,i)),i.promise})(r,t._query).then(r=>new lR(n,i,t,r)))}function lD(t,n){return function(t,n){let r=new nk;return t.asyncQueue.enqueueAndForget(async()=>ah(await aP(t).then(t=>t.syncEngine),n,r)),r.promise}(a1(t),n)}function lL(t,n){var r={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&0>n.indexOf(i)&&(r[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)0>n.indexOf(i[s])&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(r[i[s]]=t[i[s]]);return r}function lP(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}new WeakMap,function(t=!0){nv=tw,tp(new ez("firestore",(n,{instanceIdentifier:r,options:i})=>{let s=n.getProvider("app").getImmediate(),o=new a0(new nx(n.getProvider("auth-internal")),new nM(s,n.getProvider("app-check-internal")),function(t,n){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new nA(nS.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rg(t.options.projectId,n)}(s,r),s);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),tb(ng,nm,void 0),tb(ng,nm,"esm2017")}(),"function"==typeof SuppressedError&&SuppressedError;const lM=new eP("auth","Firebase",lP()),lU=new e0("@firebase/auth");function lF(t,...n){lU.logLevel<=A.ERROR&&lU.error(`Auth (${tw}): ${t}`,...n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lV(t,...n){throw lq(t,...n)}function lB(t,...n){return lq(t,...n)}function lj(t,n,r){return new eP("auth","Firebase",Object.assign(Object.assign({},lP()),{[n]:r})).create(n,{appName:t.name})}function l$(t){return lj(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lq(t,...n){if("string"!=typeof t){let r=n[0],i=[...n.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(r,...i)}return lM.create(t,...n)}function lH(t,n,...r){if(!t)throw lq(n,...r)}function lz(t){let n="INTERNAL ASSERTION FAILED: "+t;throw lF(n),Error(n)}function lK(t,n){t||lz(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lG(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function lW(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lQ{constructor(t,n){var r;this.shortDelay=t,this.longDelay=n,r="Short delay should be less than long delay!",n>t||lz(r),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(eD())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===lW()||"https:"===lW()||function(){let t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lY(t,n){var r,i;r=t.emulator,i="Emulator should always be set here",r||lz(i);let{url:s}=t.emulator;return n?`${s}${n.startsWith("/")?n.slice(1):n}`:s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lJ{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void lz("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void lz("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void lz("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lX={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},lZ=new lQ(3e4,6e4);function l0(t,n){return t.tenantId&&!n.tenantId?Object.assign(Object.assign({},n),{tenantId:t.tenantId}):n}async function l1(t,n,r,i,s={}){return l2(t,s,async()=>{let s={},o={};i&&("GET"===n?o=i:s={body:JSON.stringify(i)});let a=eV(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);let u=Object.assign({method:n,headers:l},s);return("undefined"==typeof navigator||"Cloudflare-Workers"!==navigator.userAgent)&&(u.referrerPolicy="no-referrer"),lJ.fetch()(l3(t,t.config.apiHost,r,a),u)})}async function l2(t,n,r){t._canInitEmulator=!1;let i=Object.assign(Object.assign({},lX),n);try{let n=new l5(t),s=await Promise.race([r(),n.promise]);n.clearNetworkTimeout();let o=await s.json();if("needConfirmation"in o)throw l8(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{let[n,r]=(s.ok?o.errorMessage:o.error.message).split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw l8(t,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw l8(t,"email-already-in-use",o);if("USER_DISABLED"===n)throw l8(t,"user-disabled",o);let a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(r)throw lj(t,a,r);lV(t,a)}}catch(n){if(n instanceof eL)throw n;lV(t,"network-request-failed",{message:String(n)})}}async function l6(t,n,r,i,s={}){let o=await l1(t,n,r,i,s);return"mfaPendingCredential"in o&&lV(t,"multi-factor-auth-required",{_serverResponse:o}),o}function l3(t,n,r,i){let s=`${n}${r}?${i}`;return t.config.emulator?lY(t.config,s):`${t.config.apiScheme}://${s}`}class l5{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(lB(this.auth,"network-request-failed")),lZ.get())})}}function l8(t,n,r){let i={appName:t.name};r.email&&(i.email=r.email),r.phoneNumber&&(i.phoneNumber=r.phoneNumber);let s=lB(t,n,i);return s.customData._tokenResponse=r,s}function l4(t){return void 0!==t&&void 0!==t.enterprise}class l7{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===t.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(let n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return function(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}(n.enforcementState);return null}isProviderEnabled(t){return"ENFORCE"===this.getProviderEnforcementState(t)||"AUDIT"===this.getProviderEnforcementState(t)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function l9(t,n){return l1(t,"GET","/v2/recaptchaConfig",l0(t,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ue(t,n){return l1(t,"POST","/v1/accounts:delete",n)}async function ut(t,n){return l1(t,"POST","/v1/accounts:lookup",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t){if(t)try{let n=new Date(Number(t));if(!isNaN(n.getTime()))return n.toUTCString()}catch(t){}}async function ur(t,n=!1){let r=eH(t),i=await r.getIdToken(n),s=us(i);lH(s&&s.exp&&s.auth_time&&s.iat,r.auth,"internal-error");let o="object"==typeof s.firebase?s.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:un(ui(s.auth_time)),issuedAtTime:un(ui(s.iat)),expirationTime:un(ui(s.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}function ui(t){return 1e3*Number(t)}function us(t){let[n,r,i]=t.split(".");if(void 0===n||void 0===r||void 0===i)return lF("JWT malformed, contained fewer than 3 sections"),null;try{let t=eI(r);if(!t)return lF("Failed to decode base64 JWT payload"),null;return JSON.parse(t)}catch(t){return lF("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}function uo(t){let n=us(t);return lH(n,"internal-error"),lH(void 0!==n.exp,"internal-error"),lH(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ua(t,n,r=!1){if(r)return n;try{return await n}catch(n){throw n instanceof eL&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var n;if(!t)return this.errorBackoff=3e4,Math.max(0,(null!==(n=this.user.stsTokenManager.expirationTime)&&void 0!==n?n:0)-Date.now()-3e5);{let t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}}schedule(t=!1){if(!this.isRunning)return;let n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(null==t?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=un(this.lastLoginAt),this.creationTime=un(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uh(t){var n,r,i;let s=t.auth,o=await t.getIdToken(),a=await ua(t,ut(s,{idToken:o}));lH(null==a?void 0:a.users.length,s,"internal-error");let l=a.users[0];t._notifyReloadListener(l);let u=(null===(n=l.providerUserInfo)||void 0===n?void 0:n.length)?uf(l.providerUserInfo):[],h=(r=t.providerData,i=u,[...r.filter(t=>!i.some(n=>n.providerId===t.providerId)),...i]),c=t.isAnonymous,f=!(t.email&&l.passwordHash)&&!(null==h?void 0:h.length);Object.assign(t,{uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:h,metadata:new uu(l.createdAt,l.lastLoginAt),isAnonymous:!!c&&f})}async function uc(t){let n=eH(t);await uh(n),await n.auth._persistUserIfCurrent(n),n.auth._notifyListenersIfCurrent(n)}function uf(t){return t.map(t=>{var{providerId:n}=t,r=lL(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ud(t,n){let r=await l2(t,{},async()=>{let r=eV({grant_type:"refresh_token",refresh_token:n}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=l3(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",lJ.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function up(t,n){return l1(t,"POST","/v2/accounts:revokeToken",l0(t,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){lH(t.idToken,"internal-error"),lH(void 0!==t.idToken,"internal-error"),lH(void 0!==t.refreshToken,"internal-error");let n="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):uo(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){lH(0!==t.length,"internal-error");let n=uo(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return n||!this.accessToken||this.isExpired?(lH(this.refreshToken,t,"user-token-expired"),this.refreshToken)?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){let{accessToken:r,refreshToken:i,expiresIn:s}=await ud(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(t,n){let{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ug;return r&&(lH("string"==typeof r,"internal-error",{appName:t}),o.refreshToken=r),i&&(lH("string"==typeof i,"internal-error",{appName:t}),o.accessToken=i),s&&(lH("number"==typeof s,"internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ug,this.toJSON())}_performRefresh(){return lz("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(t,n){lH("string"==typeof t||void 0===t,"internal-error",{appName:n})}class uy{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=lL(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ul(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new uu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){let n=await ua(this,this.stsTokenManager.getToken(this.auth,t));return lH(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return ur(this,t)}reload(){return uc(this)}_assign(t){this!==t&&(lH(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){let n=new uy(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){lH(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await uh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tm(this.auth.app))return Promise.reject(l$(this.auth));let t=await this.getIdToken();return await ua(this,ue(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,h;let c=null!==(r=n.displayName)&&void 0!==r?r:void 0,f=null!==(i=n.email)&&void 0!==i?i:void 0,d=null!==(s=n.phoneNumber)&&void 0!==s?s:void 0,p=null!==(o=n.photoURL)&&void 0!==o?o:void 0,g=null!==(a=n.tenantId)&&void 0!==a?a:void 0,m=null!==(l=n._redirectEventId)&&void 0!==l?l:void 0,y=null!==(u=n.createdAt)&&void 0!==u?u:void 0,v=null!==(h=n.lastLoginAt)&&void 0!==h?h:void 0,{uid:w,emailVerified:E,isAnonymous:_,providerData:b,stsTokenManager:I}=n;lH(w&&I,t,"internal-error");let T=ug.fromJSON(this.name,I);lH("string"==typeof w,t,"internal-error"),um(c,t.name),um(f,t.name),lH("boolean"==typeof E,t,"internal-error"),lH("boolean"==typeof _,t,"internal-error"),um(d,t.name),um(p,t.name),um(g,t.name),um(m,t.name),um(y,t.name),um(v,t.name);let C=new uy({uid:w,auth:t,email:f,emailVerified:E,displayName:c,isAnonymous:_,photoURL:p,phoneNumber:d,tenantId:g,stsTokenManager:T,createdAt:y,lastLoginAt:v});return b&&Array.isArray(b)&&(C.providerData=b.map(t=>Object.assign({},t))),m&&(C._redirectEventId=m),C}static async _fromIdTokenResponse(t,n,r=!1){let i=new ug;i.updateFromServerResponse(n);let s=new uy({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await uh(s),s}static async _fromGetAccountInfoResponse(t,n,r){let i=n.users[0];lH(void 0!==i.localId,"internal-error");let s=void 0!==i.providerUserInfo?uf(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(null==s?void 0:s.length),a=new ug;a.updateFromIdToken(r);let l=new uy({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o});return Object.assign(l,{uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new uu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(null==s?void 0:s.length)}),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=new Map;function uw(t){var n,r;n="Expected a class definition",t instanceof Function||lz(n);let i=uv.get(t);return i?(r="Instance stored in cache mismatched with class",i instanceof t||lz(r)):(i=new t,uv.set(t,i)),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){let n=this.storage[t];return void 0===n?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(t,n,r){return`firebase:${t}:${n}:${r}`}uE.type="NONE";class ub{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;let{config:i,name:s}=this.auth;this.fullUserKey=u_(this.userKey,i.apiKey,s),this.fullPersistenceKey=u_("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){let t=await this.persistence._get(this.fullUserKey);return t?uy._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;let n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new ub(uw(uE),t,r);let i=(await Promise.all(n.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t),s=i[0]||uw(uE),o=u_(r,t.config.apiKey,t.name),a=null;for(let r of n)try{let n=await r._get(o);if(n){let i=uy._fromJSON(t,n);r!==s&&(a=i),s=r;break}}catch(t){}let l=i.filter(t=>t._shouldAllowMigration);return s._shouldAllowMigration&&l.length&&(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async t=>{if(t!==s)try{await t._remove(o)}catch(t){}}))),new ub(s,t,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(t){let n=t.toLowerCase();if(n.includes("opera/")||n.includes("opr/")||n.includes("opios/"))return"Opera";{if(uA(n))return"IEMobile";if(n.includes("msie")||n.includes("trident/"))return"IE";if(n.includes("edge/"))return"Edge";if(uT(n))return"Firefox";if(n.includes("silk/"))return"Silk";if(uN(n))return"Blackberry";if(uR(n))return"Webos";if(uC(n))return"Safari";if((n.includes("chrome/")||uS(n))&&!n.includes("edge/"))return"Chrome";if(uk(n))return"Android";let r=t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==r?void 0:r.length)===2)return r[1]}return"Other"}function uT(t=eD()){return/firefox\//i.test(t)}function uC(t=eD()){let n=t.toLowerCase();return n.includes("safari/")&&!n.includes("chrome/")&&!n.includes("crios/")&&!n.includes("android")}function uS(t=eD()){return/crios\//i.test(t)}function uA(t=eD()){return/iemobile/i.test(t)}function uk(t=eD()){return/android/i.test(t)}function uN(t=eD()){return/blackberry/i.test(t)}function uR(t=eD()){return/webos/i.test(t)}function uO(t=eD()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ux(t=eD()){return uO(t)||uk(t)||uR(t)||uN(t)||/windows phone/i.test(t)||uA(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(t,n=[]){let r;switch(t){case"Browser":r=uI(eD());break;case"Worker":r=`${uI(eD())}-${t}`;break;default:r=t}let i=n.length?n.join(","):"FirebaseCore-web";return`${r}/JsCore/${tw}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uL{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){let r=n=>new Promise((r,i)=>{try{let i=t(n);r(i)}catch(t){i(t)}});r.onAbort=n,this.queue.push(r);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;let n=[];try{for(let r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(t){for(let t of(n.reverse(),n))try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uP(t,n={}){return l1(t,"GET","/v2/passwordPolicy",l0(t,n))}class uM{constructor(t){var n,r,i,s;let o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(n=o.minPasswordLength)&&void 0!==n?n:6,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),void 0!==o.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),void 0!==o.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),void 0!==o.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),void 0!==o.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(i=null===(r=t.allowedNonAlphanumericCharacters)||void 0===r?void 0:r.join(""))&&void 0!==i?i:"",this.forceUpgradeOnSignin=null!==(s=t.forceUpgradeOnSignin)&&void 0!==s&&s,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;let l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=null===(n=l.meetsMinPasswordLength)||void 0===n||n),l.isValid&&(l.isValid=null===(r=l.meetsMaxPasswordLength)||void 0===r||r),l.isValid&&(l.isValid=null===(i=l.containsLowercaseLetter)||void 0===i||i),l.isValid&&(l.isValid=null===(s=l.containsUppercaseLetter)||void 0===s||s),l.isValid&&(l.isValid=null===(o=l.containsNumericCharacter)||void 0===o||o),l.isValid&&(l.isValid=null===(a=l.containsNonAlphanumericCharacter)||void 0===a||a),l}validatePasswordLengthOptions(t,n){let r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){let r;this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uU{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uF(this),this.idTokenSubscription=new uF(this),this.beforeStateQueue=new uL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lM,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=uw(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted){if(this.persistenceManager=await ub.create(this,t),!this._deleted){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(n),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let t=await this.assertedPersistence.getCurrentUser();if(this.currentUser||t){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{let n=await ut(this,{idToken:t}),r=await uy._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(tm(this.app)){let t=this.app.settings.authIdToken;return t?new Promise(n=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(t).then(n,n))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let r=null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId,o=null==i?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(t);(!r||r===o)&&(null==a?void 0:a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(t){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(t))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return(lH(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId)?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await uh(t)}catch(t){if((null==t?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(tm(this.app))return Promise.reject(l$(this));let n=t?eH(t):null;return n&&lH(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&lH(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return tm(this.app)?Promise.reject(l$(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return tm(this.app)?Promise.reject(l$(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(uw(t))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let t=new uM(await uP(this));null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new eP("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{let r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){let n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(n.tenantId=this.tenantId),await up(this,n)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,n){let r=await this.getOrInitRedirectPersistenceManager(n);return null===t?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){let n=t&&uw(t)||this._popupRedirectResolver;lH(n,this,"argument-error"),this.redirectPersistenceManager=await ub.create(this,[uw(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return(this._isInitialized&&await this.queue(async()=>{}),(null===(n=this._currentUser)||void 0===n?void 0:n._redirectEventId)===t)?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=null!==(n=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==n?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};let s="function"==typeof n?n:n.next.bind(n),o=!1,a=this._isInitialized?Promise.resolve():this._initializationPromise;if(lH(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),"function"==typeof n){let s=t.addObserver(n,r,i);return()=>{o=!0,s()}}{let r=t.addObserver(n);return()=>{o=!0,r()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return lH(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=uD(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;let n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);let r=await (null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);let i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;if(tm(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let n=await (null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null==n?void 0:n.error)&&function(t,...n){lU.logLevel<=A.WARN&&lU.warn(`Auth (${tw}): ${t}`,...n)}(`Error while retrieving App Check token: ${n.error}`),null==n?void 0:n.token}}class uF{constructor(t){this.auth=t,this.observer=null,this.addObserver=function(t,n){let r=new e$(t,void 0);return r.subscribe.bind(r)}(t=>this.observer=t)}get next(){return lH(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uV={async loadJS(){throw Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uB(t){return`__${t}${Math.floor(1e6*Math.random())}`}class uj{constructor(){this.enterprise=new u$}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class u${ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const uq="NO_RECAPTCHA";class uH{constructor(t){this.type="recaptcha-enterprise",this.auth=eH(t)}async verify(t="verify",n=!1){async function r(t){if(!n){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise(async(n,r)=>{l9(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(i=>{if(void 0===i.recaptchaKey)r(Error("recaptcha Enterprise site key undefined"));else{let r=new l7(i);return null==t.tenantId?t._agentRecaptchaConfig=r:t._tenantRecaptchaConfigs[t.tenantId]=r,n(r.siteKey)}}).catch(t=>{r(t)})})}function i(n,r,i){let s=window.grecaptcha;l4(s)?s.enterprise.ready(()=>{s.enterprise.execute(n,{action:t}).then(t=>{r(t)}).catch(()=>{r(uq)})}):i(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new uj().execute("siteKey",{action:"verify"}):new Promise((t,s)=>{r(this.auth).then(r=>{if(!n&&l4(window.grecaptcha))i(r,t,s);else{var o;if("undefined"==typeof window){s(Error("RecaptchaVerifier is only supported in browser"));return}let n=uV.recaptchaEnterpriseScript;0!==n.length&&(n+=r),(o=n,uV.loadJS(o)).then(()=>{i(r,t,s)}).catch(t=>{s(t)})}}).catch(t=>{s(t)})})}}async function uz(t,n,r,i=!1,s=!1){let o;let a=new uH(t);if(s)o=uq;else try{o=await a.verify(r)}catch(t){o=await a.verify(r,!0)}let l=Object.assign({},n);if("mfaSmsEnrollment"===r||"mfaSmsSignIn"===r){if("phoneEnrollmentInfo"in l){let t=l.phoneEnrollmentInfo.phoneNumber,n=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:t,recaptchaToken:n,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){let t=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return i?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function uK(t,n,r,i,s){var o,a;if("EMAIL_PASSWORD_PROVIDER"===s){if(null===(o=t._getRecaptchaConfig())||void 0===o||!o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"))return i(t,n).catch(async s=>{if("auth/missing-recaptcha-token"!==s.code)return Promise.reject(s);{console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let s=await uz(t,n,r,"getOobCode"===r);return i(t,s)}});{let s=await uz(t,n,r,"getOobCode"===r);return i(t,s)}}if("PHONE_PROVIDER"!==s)return Promise.reject(s+" provider is not supported.");if(null===(a=t._getRecaptchaConfig())||void 0===a?void 0:a.isProviderEnabled("PHONE_PROVIDER")){let s=await uz(t,n,r);return i(t,s).catch(async s=>{var o;if((null===(o=t._getRecaptchaConfig())||void 0===o?void 0:o.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&("auth/missing-recaptcha-token"===s.code||"auth/invalid-app-credential"===s.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${r} flow.`);let s=await uz(t,n,r,!1,!0);return i(t,s)}return Promise.reject(s)})}{let s=await uz(t,n,r,!1,!0);return i(t,s)}}async function uG(t){let n=eH(t),r=new l7(await l9(n,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}));null==n.tenantId?n._agentRecaptchaConfig=r:n._tenantRecaptchaConfigs[n.tenantId]=r,r.isAnyProviderEnabled()&&new uH(n).verify()}function uW(t){let n=t.indexOf(":");return n<0?"":t.substr(0,n+1)}function uQ(t){if(!t)return null;let n=Number(t);return isNaN(n)?null:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uY{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return lz("not implemented")}_getIdTokenResponse(t){return lz("not implemented")}_linkToIdToken(t,n){return lz("not implemented")}_getReauthenticationResolver(t){return lz("not implemented")}}async function uJ(t,n){return l1(t,"POST","/v1/accounts:signUp",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uX(t,n){return l6(t,"POST","/v1/accounts:signInWithPassword",l0(t,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uZ(t,n){return l6(t,"POST","/v1/accounts:signInWithEmailLink",l0(t,n))}async function u0(t,n){return l6(t,"POST","/v1/accounts:signInWithEmailLink",l0(t,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1 extends uY{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new u1(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new u1(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){let n="string"==typeof t?JSON.parse(t):t;if((null==n?void 0:n.email)&&(null==n?void 0:n.password)){if("password"===n.signInMethod)return this._fromEmailAndPassword(n.email,n.password);if("emailLink"===n.signInMethod)return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return uK(t,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",uX,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return uZ(t,{email:this._email,oobCode:this._password});default:lV(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return uK(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",uJ,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return u0(t,{idToken:n,email:this._email,oobCode:this._password});default:lV(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u2(t,n){return l6(t,"POST","/v1/accounts:signInWithIdp",l0(t,n))}class u6 extends uY{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){let n=new u6(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):lV("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){let n="string"==typeof t?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=lL(n,["providerId","signInMethod"]);if(!r||!i)return null;let o=new u6(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){return u2(t,this.buildRequest())}_linkToIdToken(t,n){let r=this.buildRequest();return r.idToken=n,u2(t,r)}_getReauthenticationResolver(t){let n=this.buildRequest();return n.autoCreate=!1,u2(t,n)}buildRequest(){let t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{let n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=eV(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u3(t,n){return l1(t,"POST","/v1/accounts:sendVerificationCode",l0(t,n))}async function u5(t,n){return l6(t,"POST","/v1/accounts:signInWithPhoneNumber",l0(t,n))}async function u8(t,n){let r=await l6(t,"POST","/v1/accounts:signInWithPhoneNumber",l0(t,n));if(r.temporaryProof)throw l8(t,"account-exists-with-different-credential",r);return r}const u4={USER_NOT_FOUND:"user-not-found"};async function u7(t,n){return l6(t,"POST","/v1/accounts:signInWithPhoneNumber",l0(t,Object.assign(Object.assign({},n),{operation:"REAUTH"})),u4)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u9 extends uY{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,n){return new u9({verificationId:t,verificationCode:n})}static _fromTokenResponse(t,n){return new u9({phoneNumber:t,temporaryProof:n})}_getIdTokenResponse(t){return u5(t,this._makeVerificationRequest())}_linkToIdToken(t,n){return u8(t,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return u7(t,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:t,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){let t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));let{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=t;return r||n||i||s?new u9({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}):null}}class he{constructor(t){var n,r,i,s,o,a;let l=eB(ej(t)),u=null!==(n=l.apiKey)&&void 0!==n?n:null,h=null!==(r=l.oobCode)&&void 0!==r?r:null,c=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=l.mode)&&void 0!==i?i:null);lH(u&&h&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=h,this.continueUrl=null!==(s=l.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=l.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=l.tenantId)&&void 0!==a?a:null}static parseLink(t){let n=function(t){let n=eB(ej(t)).link,r=n?eB(ej(n)).deep_link_id:null,i=eB(ej(t)).deep_link_id;return(i?eB(ej(i)).link:null)||i||r||n||t}(t);try{return new he(n)}catch(t){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(){this.providerId=ht.PROVIDER_ID}static credential(t,n){return u1._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){let r=he.parseLink(n);return lH(r,"argument-error"),u1._fromEmailAndCode(t,r.code,r.tenantId)}}ht.PROVIDER_ID="password",ht.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ht.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends hn{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends hr{constructor(){super("facebook.com")}static credential(t){return u6._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return hi.credentialFromTaggedObject(t)}static credentialFromError(t){return hi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return hi.credential(t.oauthAccessToken)}catch(t){return null}}}hi.FACEBOOK_SIGN_IN_METHOD="facebook.com",hi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends hr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return u6._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return hs.credentialFromTaggedObject(t)}static credentialFromError(t){return hs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;let{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return hs.credential(n,r)}catch(t){return null}}}hs.GOOGLE_SIGN_IN_METHOD="google.com",hs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho extends hr{constructor(){super("github.com")}static credential(t){return u6._fromParams({providerId:ho.PROVIDER_ID,signInMethod:ho.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ho.credentialFromTaggedObject(t)}static credentialFromError(t){return ho.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ho.credential(t.oauthAccessToken)}catch(t){return null}}}ho.GITHUB_SIGN_IN_METHOD="github.com",ho.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha extends hr{constructor(){super("twitter.com")}static credential(t,n){return u6._fromParams({providerId:ha.PROVIDER_ID,signInMethod:ha.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return ha.credentialFromTaggedObject(t)}static credentialFromError(t){return ha.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;let{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return ha.credential(n,r)}catch(t){return null}}}ha.TWITTER_SIGN_IN_METHOD="twitter.com",ha.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){return new hl({user:await uy._fromIdTokenResponse(t,r,i),providerId:hu(r),_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){return await t._updateTokensIfNecessary(r,!0),new hl({user:t,providerId:hu(r),_tokenResponse:r,operationType:n})}}function hu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh extends eL{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,hh.prototype),this.customData={appName:t.name,tenantId:null!==(s=t.tenantId)&&void 0!==s?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new hh(t,n,r,i)}}function hc(t,n,r,i){return("reauthenticate"===n?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(r=>{if("auth/multi-factor-auth-required"===r.code)throw hh._fromErrorAndOperation(t,r,n,i);throw r})}async function hf(t,n,r=!1){let i=await ua(t,n._linkToIdToken(t.auth,await t.getIdToken()),r);return hl._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hd(t,n,r=!1){let{auth:i}=t;if(tm(i.app))return Promise.reject(l$(i));let s="reauthenticate";try{let o=await ua(t,hc(i,s,n,t),r);lH(o.idToken,i,"internal-error");let a=us(o.idToken);lH(a,i,"internal-error");let{sub:l}=a;return lH(t.uid===l,i,"user-mismatch"),hl._forOperation(t,s,o)}catch(t){throw(null==t?void 0:t.code)==="auth/user-not-found"&&lV(i,"user-mismatch"),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hp(t,n,r=!1){if(tm(t.app))return Promise.reject(l$(t));let i="signIn",s=await hc(t,i,n),o=await hl._fromIdTokenResponse(t,i,s);return r||await t._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(t,n){return l1(t,"POST","/v2/accounts/mfaEnrollment:start",l0(t,n))}new WeakMap;const hm="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(hm,"1"),this.storage.removeItem(hm),Promise.resolve(!0)}catch(t){return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){let n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}class hv extends hy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ux(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(let n of Object.keys(this.listeners)){let r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((t,n,r)=>{this.notifyListeners(t,r)});return}let r=t.key;n?this.detachListener():this.stopPolling();let i=()=>{let t=this.storage.getItem(r);(n||this.localCache[r]!==t)&&this.notifyListeners(r,t)},s=this.storage.getItem(r);(function(){let t=eD();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0})()&&10===document.documentMode&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,10):i()}notifyListeners(t,n){this.localCache[t]=n;let r=this.listeners[t];if(r)for(let t of Array.from(r))t(n?JSON.parse(n):n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){let n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}hv.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw extends hy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}hw.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){let n=this.receivers.find(n=>n.isListeningto(t));if(n)return n;let r=new hE(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){let{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});let o=Array.from(s).map(async n=>n(t.origin,i)),a=await Promise.all(o.map(async t=>{try{let n=await t;return{fulfilled:!0,value:n}}catch(t){return{fulfilled:!1,reason:t}}}));t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,n){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),n&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(t="",n=10){let r="";for(let t=0;t<n;t++)r+=Math.floor(10*Math.random());return t+r}hE.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){let i,s;let o="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!o)throw Error("connection_unavailable");return new Promise((a,l)=>{let u=h_("",20);o.port1.start();let h=setTimeout(()=>{l(Error("unsupported_event"))},r);s={messageChannel:o,onMessage(t){if(t.data.eventId===u)switch(t.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(t.data.response);break;default:clearTimeout(h),clearTimeout(i),l(Error("invalid_response"))}}},this.handlers.add(s),o.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[o.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(){return void 0!==hI().WorkerGlobalScope&&"function"==typeof hI().importScripts}async function hC(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS="firebaseLocalStorageDb",hA="firebaseLocalStorage",hk="fbase_key";class hN{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hR(t,n){return t.transaction([hA],n?"readwrite":"readonly").objectStore(hA)}function hO(){let t=indexedDB.open(hS,1);return new Promise((n,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{let n=t.result;try{n.createObjectStore(hA,{keyPath:hk})}catch(t){r(t)}}),t.addEventListener("success",async()=>{let r=t.result;r.objectStoreNames.contains(hA)?n(r):(r.close(),await new hN(indexedDB.deleteDatabase(hS)).toPromise(),n(await hO()))})})}async function hx(t,n,r){return new hN(hR(t,!0).put({[hk]:n,value:r})).toPromise()}async function hD(t,n){let r=hR(t,!1).get(n),i=await new hN(r).toPromise();return void 0===i?null:i.value}function hL(t,n){return new hN(hR(t,!0).delete(n)).toPromise()}class hP{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await hO()),this.db}async _withRetries(t){let n=0;for(;;)try{let n=await this._openDb();return await t(n)}catch(t){if(n++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hE._getInstance(hT()?self:null),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await hC(),!this.activeServiceWorker)return;this.sender=new hb(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&(null===(t=r[0])||void 0===t?void 0:t.fulfilled)&&(null===(n=r[0])||void 0===n?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var n;if(this.sender&&this.activeServiceWorker&&((null===(n=null==navigator?void 0:navigator.serviceWorker)||void 0===n?void 0:n.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;let t=await hO();return await hx(t,hm,"1"),await hL(t,hm),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>hx(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){let n=await this._withRetries(n=>hD(n,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>hL(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){let t=await this._withRetries(t=>new hN(hR(t,!1).getAll()).toPromise());if(!t||0!==this.pendingWrites)return[];let n=[],r=new Set;if(0!==t.length)for(let{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(let t of Object.keys(this.localCache))this.localCache[t]&&!r.has(t)&&(this.notifyListeners(t,null),n.push(t));return n}notifyListeners(t,n){this.localCache[t]=n;let r=this.listeners[t];if(r)for(let t of Array.from(r))t(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hM(t,n){return l1(t,"POST","/v2/accounts/mfaSignIn:start",l0(t,n))}hP.type="LOCAL",uB("rcb"),new lQ(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hU="recaptcha";async function hF(t,n,r){var i;if(!t._getRecaptchaConfig())try{await uG(t)}catch(t){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let s;if(s="string"==typeof n?{phoneNumber:n}:n,"session"in s){let n=s.session;if("phoneNumber"in s){lH("enroll"===n.type,t,"internal-error");let i={idToken:n.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},o=async(t,n)=>{if(n.phoneEnrollmentInfo.captchaResponse===uq){lH((null==r?void 0:r.type)===hU,t,"argument-error");let i=await hV(t,n,r);return hg(t,i)}return hg(t,n)},a=uK(t,i,"mfaSmsEnrollment",o,"PHONE_PROVIDER");return(await a.catch(t=>Promise.reject(t))).phoneSessionInfo.sessionInfo}{lH("signin"===n.type,t,"internal-error");let o=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;lH(o,t,"missing-multi-factor-info");let a={mfaPendingCredential:n.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},l=async(t,n)=>{if(n.phoneSignInInfo.captchaResponse===uq){lH((null==r?void 0:r.type)===hU,t,"argument-error");let i=await hV(t,n,r);return hM(t,i)}return hM(t,n)},u=uK(t,a,"mfaSmsSignIn",l,"PHONE_PROVIDER");return(await u.catch(t=>Promise.reject(t))).phoneResponseInfo.sessionInfo}}{let n={phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"},i=async(t,n)=>{if(n.captchaResponse===uq){lH((null==r?void 0:r.type)===hU,t,"argument-error");let i=await hV(t,n,r);return u3(t,i)}return u3(t,n)},o=uK(t,n,"sendVerificationCode",i,"PHONE_PROVIDER");return(await o.catch(t=>Promise.reject(t))).sessionInfo}}finally{null==r||r._reset()}}async function hV(t,n,r){lH(r.type===hU,t,"argument-error");let i=await r.verify();lH("string"==typeof i,t,"argument-error");let s=Object.assign({},n);if("phoneEnrollmentInfo"in s){let t=s.phoneEnrollmentInfo.phoneNumber,n=s.phoneEnrollmentInfo.captchaResponse,r=s.phoneEnrollmentInfo.clientType,o=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:t,recaptchaToken:i,captchaResponse:n,clientType:r,recaptchaVersion:o}}),s}if(!("phoneSignInInfo"in s))return Object.assign(s,{recaptchaToken:i}),s;{let t=s.phoneSignInInfo.captchaResponse,n=s.phoneSignInInfo.clientType,r=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:i,captchaResponse:t,clientType:n,recaptchaVersion:r}}),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hB{constructor(t){this.providerId=hB.PROVIDER_ID,this.auth=eH(t)}verifyPhoneNumber(t,n){return hF(this.auth,t,eH(n))}static credential(t,n){return u9._fromVerification(t,n)}static credentialFromResult(t){return hB.credentialFromTaggedObject(t)}static credentialFromError(t){return hB.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;let{phoneNumber:n,temporaryProof:r}=t;return n&&r?u9._fromTokenResponse(n,r):null}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hj(t,n){return n?uw(n):(lH(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}hB.PROVIDER_ID="phone",hB.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h$ extends uY{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return u2(t,this._buildIdpRequest())}_linkToIdToken(t,n){return u2(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return u2(t,this._buildIdpRequest())}_buildIdpRequest(t){let n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function hq(t){return hp(t.auth,new h$(t),t.bypassAuthState)}function hH(t){let{auth:n,user:r}=t;return lH(r,n,"internal-error"),hd(r,new h$(t),t.bypassAuthState)}async function hz(t){let{auth:n,user:r}=t;return lH(r,n,"internal-error"),hf(r,new h$(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hK{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}})}async onAuthEvent(t){let{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}let l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return hq;case"linkViaPopup":case"linkViaRedirect":return hz;case"reauthViaPopup":case"reauthViaRedirect":return hH;default:lV(this.auth,"internal-error")}}resolve(t){var n,r;n=this.pendingPromise,r="Pending promise was never set",n||lz(r),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){var n,r;n=this.pendingPromise,r="Pending promise was never set",n||lz(r),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hG=new lQ(2e3,1e4);async function hW(t,n,r){if(tm(t.app))return Promise.reject(lB(t,"operation-not-supported-in-this-environment"));let i=eH(t);!function(t,n,r){if(!(n instanceof r))throw r.name!==n.constructor.name&&lV(t,"argument-error"),lj(t,"argument-error",`Type of ${n.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(t,n,hn);let s=hj(i,r);return new hQ(i,"signInViaPopup",n,s).executeNotNull()}class hQ extends hK{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,hQ.currentPopupAction&&hQ.currentPopupAction.cancel(),hQ.currentPopupAction=this}async executeNotNull(){let t=await this.execute();return lH(t,this.auth,"internal-error"),t}async onExecution(){var t,n;t=1===this.filter.length,n="Popup operations only handle one event",t||lz(n);let r=h_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],r),this.authWindow.associatedEvent=r,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(lB(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(lB(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hQ.currentPopupAction=null}pollUserCancellation(){let t=()=>{var n,r;if(null===(r=null===(n=this.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lB(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,hG.get())};t()}}hQ.currentPopupAction=null;const hY=new Map;class hJ extends hK{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=hY.get(this.auth._key());if(!t){try{let n=await hX(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(n)}catch(n){t=()=>Promise.reject(n)}hY.set(this.auth._key(),t)}return this.bypassAuthState||hY.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"===t.type){this.resolve(null);return}if(t.eventId){let n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hX(t,n){var r;let i=u_("pendingRedirect",(r=n).config.apiKey,r.name),s=uw(t._redirectPersistence);if(!await s._isAvailable())return!1;let o=await s._get(i)==="true";return await s._remove(i),o}function hZ(t,n){hY.set(t._key(),n)}async function h0(t,n,r=!1){if(tm(t.app))return Promise.reject(l$(t));let i=eH(t),s=hj(i,n),o=new hJ(i,s,r),a=await o.execute();return a&&!r&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,n)),a}class h1{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return h6(t);default:return!1}}(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!h6(t)){let i=(null===(r=t.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";n.onError(lB(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){let r=null===n.eventId||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(h2(t))}saveEventToCache(t){this.cachedEventUids.add(h2(t)),this.lastProcessedEventTime=Date.now()}}function h2(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(t=>t).join("-")}function h6({type:t,error:n}){return"unknown"===t&&(null==n?void 0:n.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h3(t,n={}){return l1(t,"GET","/v1/projects",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h5=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,h8=/^https?/;async function h4(t){if(t.config.emulator)return;let{authorizedDomains:n}=await h3(t);for(let t of n)try{if(function(t){let n=lG(),{protocol:r,hostname:i}=new URL(n);if(t.startsWith("chrome-extension://")){let s=new URL(t);return""===s.hostname&&""===i?"chrome-extension:"===r&&t.replace("chrome-extension://","")===n.replace("chrome-extension://",""):"chrome-extension:"===r&&s.hostname===i}if(!h8.test(r))return!1;if(h5.test(t))return i===t;let s=t.replace(/\./g,"\\.");return RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}(t))return}catch(t){}lV(t,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h7=new lQ(3e4,6e4);function h9(){let t=hI().___jsl;if(null==t?void 0:t.H){for(let n of Object.keys(t.H))if(t.H[n].r=t.H[n].r||[],t.H[n].L=t.H[n].L||[],t.H[n].r=[...t.H[n].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}let ce=null;/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=new lQ(5e3,15e3),cn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function ci(t){let n=await (ce=ce||new Promise((n,r)=>{var i,s,o,a;function l(){h9(),gapi.load("gapi.iframes",{callback:()=>{n(gapi.iframes.getContext())},ontimeout:()=>{h9(),r(lB(t,"network-request-failed"))},timeout:h7.get()})}if(null===(s=null===(i=hI().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)n(gapi.iframes.getContext());else if(null===(o=hI().gapi)||void 0===o?void 0:o.load)l();else{let n=uB("iframefcb");return hI()[n]=()=>{gapi.load?l():r(lB(t,"network-request-failed"))},(a=`${uV.gapiScript}?onload=${n}`,uV.loadJS(a)).catch(t=>r(t))}}).catch(t=>{throw ce=null,t})),r=hI().gapi;return lH(r,t,"internal-error"),n.open({where:document.body,url:function(t){let n=t.config;lH(n.authDomain,t,"auth-domain-config-required");let r=n.emulator?lY(n,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,i={apiKey:n.apiKey,appName:t.name,v:tw},s=cr.get(t.config.apiHost);s&&(i.eid=s);let o=t._getFrameworks();return o.length&&(i.fw=o.join(",")),`${r}?${eV(i).slice(1)}`}(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cn,dontclear:!0},n=>new Promise(async(r,i)=>{await n.restyle({setHideOnLeave:!1});let s=lB(t,"network-request-failed"),o=hI().setTimeout(()=>{i(s)},ct.get());function a(){hI().clearTimeout(o),r(n)}n.ping(a).then(a,()=>{i(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class co{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}const ca=encodeURIComponent("fac");async function cl(t,n,r,i,s,o){lH(t.config.authDomain,t,"auth-domain-config-required"),lH(t.config.apiKey,t,"invalid-api-key");let a={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:i,v:tw,eventId:s};if(n instanceof hn)for(let[r,i]of(n.setDefaultLanguage(t.languageCode),a.providerId=n.providerId||"",!function(t){for(let n in t)if(Object.prototype.hasOwnProperty.call(t,n))return!1;return!0}(n.getCustomParameters())&&(a.customParameters=JSON.stringify(n.getCustomParameters())),Object.entries(o||{})))a[r]=i;if(n instanceof hr){let t=n.getScopes().filter(t=>""!==t);t.length>0&&(a.scopes=t.join(","))}for(let n of(t.tenantId&&(a.tid=t.tenantId),Object.keys(a)))void 0===a[n]&&delete a[n];let l=await t._getAppCheckToken(),u=l?`#${ca}=${encodeURIComponent(l)}`:"";return`${function({config:t}){return t.emulator?lY(t,"emulator/auth/handler"):`https://${t.authDomain}/__/auth/handler`}(t)}?${eV(a).slice(1)}${u}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu="webStorageSupport",ch=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hw,this._completeRedirectFn=h0,this._overrideRedirectResult=hZ}async _openPopup(t,n,r,i){var s,o,a;o=null===(s=this.eventManagers[t._key()])||void 0===s?void 0:s.manager,a="_initialize() not called before _openPopup()",o||lz(a);let l=await cl(t,n,r,lG(),i);return function(t,n,r,i=500,s=600){let o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString(),l="",u=Object.assign(Object.assign({},cs),{width:i.toString(),height:s.toString(),top:o,left:a}),h=eD().toLowerCase();r&&(l=uS(h)?"_blank":r),uT(h)&&(n=n||"http://localhost",u.scrollbars="yes");let c=Object.entries(u).reduce((t,[n,r])=>`${t}${n}=${r},`,"");if(function(t=eD()){var n;return uO(t)&&!!(null===(n=window.navigator)||void 0===n?void 0:n.standalone)}(h)&&"_self"!==l)return function(t,n){let r=document.createElement("a");r.href=t,r.target=n;let i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(i)}(n||"",l),new co(null);let f=window.open(n||"",l,c);lH(f,t,"popup-blocked");try{f.focus()}catch(t){}return new co(f)}(t,l,h_())}async _openRedirect(t,n,r,i){var s;return await this._originValidation(t),s=await cl(t,n,r,lG(),i),hI().location.href=s,new Promise(()=>{})}_initialize(t){let n=t._key();if(this.eventManagers[n]){var r;let{manager:t,promise:i}=this.eventManagers[n];return t?Promise.resolve(t):(r="If manager is not set, promise should be",i||lz(r),i)}let i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){let n=await ci(t),r=new h1(t);return n.register("authEvent",n=>(lH(null==n?void 0:n.authEvent,t,"invalid-auth-event"),{status:r.onEvent(n.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(cu,{type:cu},r=>{var i;let s=null===(i=null==r?void 0:r[0])||void 0===i?void 0:i[cu];void 0!==s&&n(!!s),lV(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){let n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=h4(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return ux()||uC()||uO()}};class cc{constructor(t){this.factorId=t}_process(t,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(t,n.credential,r);case"signin":return this._finalizeSignIn(t,n.credential);default:return lz("unexpected MultiFactorSessionType")}}}class cf extends cc{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new cf(t)}_finalizeEnroll(t,n,r){return l1(t,"POST","/v2/accounts/mfaEnrollment:finalize",l0(t,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(t,n){return l1(t,"POST","/v2/accounts/mfaSignIn:finalize",l0(t,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class cd extends cc{constructor(t,n,r){super("totp"),this.otp=t,this.enrollmentId=n,this.secret=r}static _fromSecret(t,n){return new cd(n,void 0,t)}static _fromEnrollmentId(t,n){return new cd(n,t)}async _finalizeEnroll(t,n,r){return lH(void 0!==this.secret,t,"argument-error"),l1(t,"POST","/v2/accounts/mfaEnrollment:finalize",l0(t,{idToken:n,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(t,n){lH(void 0!==this.enrollmentId&&void 0!==this.otp,t,"argument-error");let r={verificationCode:this.otp};return l1(t,"POST","/v2/accounts/mfaSignIn:finalize",l0(t,{mfaPendingCredential:n,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r}))}}class cp{constructor(t,n,r,i,s,o,a){this.sessionInfo=o,this.auth=a,this.secretKey=t,this.hashingAlgorithm=n,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(t,n){return new cp(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,n)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,n){var r;let i=!1;return(cg(t)||cg(n))&&(i=!0),i&&(cg(t)&&(t=(null===(r=this.auth.currentUser)||void 0===r?void 0:r.email)||"unknownuser"),cg(n)&&(n=this.auth.name)),`otpauth://totp/${n}:${t}?secret=${this.secretKey}&issuer=${n}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function cg(t){return void 0===t||(null==t?void 0:t.length)===0}var cm="@firebase/auth",cy="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){return(this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser)?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;let n=this.auth.onIdTokenChanged(n=>{t((null==n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();let n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){lH(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const cw=eO("authIdTokenMaxAge")||300;let cE=null;const c_=t=>async n=>{let r=n&&await n.getIdTokenResult(),i=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(i&&i>cw)return;let s=null==r?void 0:r.token;cE!==s&&(cE=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};uV={loadJS:t=>new Promise((n,r)=>{var i,s;let o=document.createElement("script");o.setAttribute("src",t),o.onload=n,o.onerror=t=>{let n=lB("internal-error");n.customData=t,r(n)},o.type="text/javascript",o.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(o)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},u="Browser",tp(new ez("auth",(t,{options:n})=>{let r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;lH(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});let l=new uU(r,i,s,{apiKey:o,authDomain:a,clientPlatform:u,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uD(u)});return function(t,n){let r=(null==n?void 0:n.persistence)||[],i=(Array.isArray(r)?r:[r]).map(uw);(null==n?void 0:n.errorMap)&&t._updateErrorMap(n.errorMap),t._initializeWithPersistence(i,null==n?void 0:n.popupRedirectResolver)}(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),tp(new ez("auth-internal",t=>new cv(eH(t.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),tb(cm,cy,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(u)),tb(cm,cy,"esm2017");try{r=tE({apiKey:"AIzaSyBns3LavTVNJqw29TSokocIu7B2d5TUXWI",authDomain:"info5146booklog.firebaseapp.com",databaseURL:"https://info5146booklog.firebaseio.com",projectId:"info5146booklog",storageBucket:"info5146booklog.appspot.com",messagingSenderId:"497963989735",appId:"1:497963989735:web:8895451e8ffe6c446e0042"}),i=function(t,n){let r=tg("object"==typeof t?t:t_(),"firestore").getImmediate({identifier:"string"==typeof t?t:rp});if(!r._initialized){let t=eN("firestore");t&&function(t,n,r,i={}){var s;let o=(t=aq(t,aK))._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),l=`${n}:${r}`;o.host!==aH&&o.host!==l&&nI("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let u=Object.assign(Object.assign({},o),{host:l,ssl:!1,emulatorOptions:i});if(!eU(u,a)&&(t._setSettings(u),i.mockUserToken)){let n,r;if("string"==typeof i.mockUserToken)n=i.mockUserToken,r=ny.MOCK_USER;else{n=function(t,n){if(t.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let r=n||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[eb(JSON.stringify({alg:"none",type:"JWT"})),eb(JSON.stringify(o)),""].join(".")}(i.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);let o=i.mockUserToken.sub||i.mockUserToken.user_id;if(!o)throw new nA(nS.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new ny(o)}t._authCredentials=new nO(new nN(n,r))}}(r,...t)}return r}(r),s=function(t=t_()){let n=tg(t,"auth");if(n.isInitialized())return n.getImmediate();let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t,n){let r=tg(t,"auth");if(r.isInitialized()){let t=r.getImmediate();if(eU(r.getOptions(),null!=n?n:{}))return t;lV(t,"already-initialized")}return r.initialize({options:n})}(t,{popupRedirectResolver:ch,persistence:[hP,hv,hw]}),i=eO("authTokenSyncURL");if(i&&"boolean"==typeof isSecureContext&&isSecureContext){let t=new URL(i,location.origin);if(location.origin===t.origin){let n=c_(t.toString());eH(r).beforeAuthStateChanged(n,()=>n(r.currentUser)),eH(r).onIdTokenChanged(t=>n(t),void 0,void 0)}}let s=ek("auth");return s&&function(t,n,r){let i=eH(t);lH(/^https?:\/\//.test(n),i,"invalid-emulator-scheme");let s=uW(n),{host:o,port:a}=function(t){let n=uW(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(n.length));if(!r)return{host:"",port:null};let i=r[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){let t=s[1];return{host:t,port:uQ(i.substr(t.length+1))}}{let[t,n]=i.split(":");return{host:t,port:uQ(n)}}}(n),l=null===a?"":`:${a}`,u={url:`${s}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:!1})});if(!i._canInitEmulator){lH(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),lH(eU(u,i.config.emulator)&&eU(h,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=u,i.emulatorConfig=h,i.settings.appVerificationDisabledForTesting=!0,function(){function t(){let t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}()}(r,`http://${s}`),r}(r),r&&i&&s?console.log("Firebase initialized successfully."):console.error("Firebase components failed to initialize.")}catch(t){console.error("Firebase initialization error:",t)}var cb={};h=cb,c=function(){var t=function(){},n="undefined",r=typeof window!==n&&typeof window.navigator!==n&&/Trident\/|MSIE /.test(window.navigator.userAgent),i=["trace","debug","info","warn","error"],s={},o=null;function a(t,n){var r=t[n];if("function"==typeof r.bind)return r.bind(t);try{return Function.prototype.bind.call(r,t)}catch(n){return function(){return Function.prototype.apply.apply(r,[t,arguments])}}}function l(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function u(){for(var r=this.getLevel(),s=0;s<i.length;s++){var o=i[s];this[o]=s<r?t:this.methodFactory(o,r,this.name)}if(this.log=this.debug,typeof console===n&&r<this.levels.SILENT)return"No console available for logging"}function h(t){return function(){typeof console!==n&&(u.call(this),this[t].apply(this,arguments))}}function c(i,s,o){var u;return"debug"===(u=i)&&(u="log"),typeof console!==n&&("trace"===u&&r?l:void 0!==console[u]?a(console,u):void 0!==console.log?a(console,"log"):t)||h.apply(this,arguments)}function f(t,r){var a,l,h,f=this,d="loglevel";function p(){var t;if(typeof window!==n&&d){try{t=window.localStorage[d]}catch(t){}if(typeof t===n)try{var r=window.document.cookie,i=encodeURIComponent(d),s=r.indexOf(i+"=");-1!==s&&(t=/^([^;]+)/.exec(r.slice(s+i.length+1))[1])}catch(t){}return void 0===f.levels[t]&&(t=void 0),t}}function g(t){var n=t;if("string"==typeof n&&void 0!==f.levels[n.toUpperCase()]&&(n=f.levels[n.toUpperCase()]),"number"==typeof n&&n>=0&&n<=f.levels.SILENT)return n;throw TypeError("log.setLevel() called with invalid level: "+t)}"string"==typeof t?d+=":"+t:"symbol"==typeof t&&(d=void 0),f.name=t,f.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},f.methodFactory=r||c,f.getLevel=function(){return null!=h?h:null!=l?l:a},f.setLevel=function(t,r){return h=g(t),!1!==r&&function(t){var r=(i[t]||"silent").toUpperCase();if(typeof window!==n&&d){try{window.localStorage[d]=r;return}catch(t){}try{window.document.cookie=encodeURIComponent(d)+"="+r+";"}catch(t){}}}(h),u.call(f)},f.setDefaultLevel=function(t){l=g(t),p()||f.setLevel(t,!1)},f.resetLevel=function(){h=null,function(){if(typeof window!==n&&d){try{window.localStorage.removeItem(d)}catch(t){}try{window.document.cookie=encodeURIComponent(d)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(t){}}}(),u.call(f)},f.enableAll=function(t){f.setLevel(f.levels.TRACE,t)},f.disableAll=function(t){f.setLevel(f.levels.SILENT,t)},f.rebuild=function(){if(o!==f&&(a=g(o.getLevel())),u.call(f),o===f)for(var t in s)s[t].rebuild()},a=g(o?o.getLevel():"WARN");var m=p();null!=m&&(h=g(m)),u.call(f)}(o=new f).getLogger=function(t){if("symbol"!=typeof t&&"string"!=typeof t||""===t)throw TypeError("You must supply a name when creating a logger.");var n=s[t];return n||(n=s[t]=new f(t,o.methodFactory)),n};var d=typeof window!==n?window.log:void 0;return o.noConflict=function(){return typeof window!==n&&window.log===o&&(window.log=d),o},o.getLoggers=function(){return s},o.default=o,o},"function"==typeof define&&define.amd?define(c):cb?cb=c():h.log=c(),(f=z||(z={})).STRING="string",f.NUMBER="number",f.INTEGER="integer",f.BOOLEAN="boolean",f.ARRAY="array",f.OBJECT="object",(d=K||(K={})).LANGUAGE_UNSPECIFIED="language_unspecified",d.PYTHON="python",(p=G||(G={})).OUTCOME_UNSPECIFIED="outcome_unspecified",p.OUTCOME_OK="outcome_ok",p.OUTCOME_FAILED="outcome_failed",p.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=["user","model","function","system"];(g=W||(W={})).HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",g.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",g.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",g.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",g.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",(m=Q||(Q={})).HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",m.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",m.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",m.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",m.BLOCK_NONE="BLOCK_NONE",(y=Y||(Y={})).HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",y.NEGLIGIBLE="NEGLIGIBLE",y.LOW="LOW",y.MEDIUM="MEDIUM",y.HIGH="HIGH",(v=J||(J={})).BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",v.SAFETY="SAFETY",v.OTHER="OTHER",(w=X||(X={})).FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",w.STOP="STOP",w.MAX_TOKENS="MAX_TOKENS",w.SAFETY="SAFETY",w.RECITATION="RECITATION",w.LANGUAGE="LANGUAGE",w.BLOCKLIST="BLOCKLIST",w.PROHIBITED_CONTENT="PROHIBITED_CONTENT",w.SPII="SPII",w.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",w.OTHER="OTHER",(E=Z||(Z={})).TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",E.RETRIEVAL_QUERY="RETRIEVAL_QUERY",E.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",E.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",E.CLASSIFICATION="CLASSIFICATION",E.CLUSTERING="CLUSTERING",(_=ee||(ee={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",_.AUTO="AUTO",_.ANY="ANY",_.NONE="NONE",(b=et||(et={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",b.MODE_DYNAMIC="MODE_DYNAMIC";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class cC extends cT{constructor(t,n){super(t),this.response=n}}class cS extends cT{constructor(t,n,r,i){super(t),this.status=n,this.statusText=r,this.errorDetails=i}}class cA extends cT{}(I=en||(en={})).GENERATE_CONTENT="generateContent",I.STREAM_GENERATE_CONTENT="streamGenerateContent",I.COUNT_TOKENS="countTokens",I.EMBED_CONTENT="embedContent",I.BATCH_EMBED_CONTENTS="batchEmbedContents";class ck{constructor(t,n,r,i,s){this.model=t,this.task=n,this.apiKey=r,this.stream=i,this.requestOptions=s}toString(){var t,n;let r=(null===(t=this.requestOptions)||void 0===t?void 0:t.apiVersion)||"v1beta",i=(null===(n=this.requestOptions)||void 0===n?void 0:n.baseUrl)||"https://generativelanguage.googleapis.com",s=`${i}/${r}/${this.model}:${this.task}`;return this.stream&&(s+="?alt=sse"),s}}async function cN(t){var n;let r=new Headers;r.append("Content-Type","application/json"),r.append("x-goog-api-client",function(t){let n=[];return(null==t?void 0:t.apiClient)&&n.push(t.apiClient),n.push("genai-js/0.22.0"),n.join(" ")}(t.requestOptions)),r.append("x-goog-api-key",t.apiKey);let i=null===(n=t.requestOptions)||void 0===n?void 0:n.customHeaders;if(i){if(!(i instanceof Headers))try{i=new Headers(i)}catch(t){throw new cA(`unable to convert customHeaders value ${JSON.stringify(i)} to Headers: ${t.message}`)}for(let[t,n]of i.entries()){if("x-goog-api-key"===t)throw new cA(`Cannot set reserved header name ${t}`);if("x-goog-api-client"===t)throw new cA(`Header name ${t} can only be set using the apiClient field`);r.append(t,n)}}return r}async function cR(t,n,r,i,s,o){let a=new ck(t,n,r,i,o);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},function(t){let n={};if((null==t?void 0:t.signal)!==void 0||(null==t?void 0:t.timeout)>=0){let r=new AbortController;(null==t?void 0:t.timeout)>=0&&setTimeout(()=>r.abort(),t.timeout),(null==t?void 0:t.signal)&&t.signal.addEventListener("abort",()=>{r.abort()}),n.signal=r.signal}return n}(o)),{method:"POST",headers:await cN(a),body:s})}}async function cO(t,n,r,i,s,o={},a=fetch){let{url:l,fetchOptions:u}=await cR(t,n,r,i,s,o);return cx(l,u,a)}async function cx(t,n,r=fetch){let i;try{i=await r(t,n)}catch(n){!function(t,n){let r=t;throw t instanceof cS||t instanceof cA||((r=new cT(`Error fetching from ${n.toString()}: ${t.message}`)).stack=t.stack),r}(n,t)}return i.ok||await cD(i,t),i}async function cD(t,n){let r,i="";try{let n=await t.json();i=n.error.message,n.error.details&&(i+=` ${JSON.stringify(n.error.details)}`,r=n.error.details)}catch(t){}throw new cS(`Error fetching from ${n.toString()}: [${t.status} ${t.statusText}] ${i}`,t.status,t.statusText,r)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cL(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),cU(t.candidates[0]))throw new cC(`${cF(t)}`,t);return function(t){var n,r,i,s;let o=[];if(null===(r=null===(n=t.candidates)||void 0===n?void 0:n[0].content)||void 0===r?void 0:r.parts)for(let n of null===(s=null===(i=t.candidates)||void 0===i?void 0:i[0].content)||void 0===s?void 0:s.parts)n.text&&o.push(n.text),n.executableCode&&o.push("\n```"+n.executableCode.language+"\n"+n.executableCode.code+"\n```\n"),n.codeExecutionResult&&o.push("\n```\n"+n.codeExecutionResult.output+"\n```\n");return o.length>0?o.join(""):""}(t)}if(t.promptFeedback)throw new cC(`Text not available. ${cF(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),cU(t.candidates[0]))throw new cC(`${cF(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),cP(t)[0]}if(t.promptFeedback)throw new cC(`Function call not available. ${cF(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),cU(t.candidates[0]))throw new cC(`${cF(t)}`,t);return cP(t)}if(t.promptFeedback)throw new cC(`Function call not available. ${cF(t)}`,t)},t}function cP(t){var n,r,i,s;let o=[];if(null===(r=null===(n=t.candidates)||void 0===n?void 0:n[0].content)||void 0===r?void 0:r.parts)for(let n of null===(s=null===(i=t.candidates)||void 0===i?void 0:i[0].content)||void 0===s?void 0:s.parts)n.functionCall&&o.push(n.functionCall);return o.length>0?o:void 0}const cM=[X.RECITATION,X.SAFETY,X.LANGUAGE];function cU(t){return!!t.finishReason&&cM.includes(t.finishReason)}function cF(t){var n,r,i;let s="";if((!t.candidates||0===t.candidates.length)&&t.promptFeedback)s+="Response was blocked",(null===(n=t.promptFeedback)||void 0===n?void 0:n.blockReason)&&(s+=` due to ${t.promptFeedback.blockReason}`),(null===(r=t.promptFeedback)||void 0===r?void 0:r.blockReasonMessage)&&(s+=`: ${t.promptFeedback.blockReasonMessage}`);else if(null===(i=t.candidates)||void 0===i?void 0:i[0]){let n=t.candidates[0];cU(n)&&(s+=`Candidate was blocked due to ${n.finishReason}`,n.finishMessage&&(s+=`: ${n.finishMessage}`))}return s}function cV(t){return this instanceof cV?(this.v=t,this):new cV(t)}"function"==typeof SuppressedError&&SuppressedError;/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cB=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function cj(t){let n=[],r=t.getReader();for(;;){let{done:t,value:i}=await r.read();if(t)return cL(function(t){let n=t[t.length-1],r={promptFeedback:null==n?void 0:n.promptFeedback};for(let n of t){if(n.candidates){let t=0;for(let i of n.candidates)if(r.candidates||(r.candidates=[]),r.candidates[t]||(r.candidates[t]={index:t}),r.candidates[t].citationMetadata=i.citationMetadata,r.candidates[t].groundingMetadata=i.groundingMetadata,r.candidates[t].finishReason=i.finishReason,r.candidates[t].finishMessage=i.finishMessage,r.candidates[t].safetyRatings=i.safetyRatings,i.content&&i.content.parts){r.candidates[t].content||(r.candidates[t].content={role:i.content.role||"user",parts:[]});let n={};for(let s of i.content.parts)s.text&&(n.text=s.text),s.functionCall&&(n.functionCall=s.functionCall),s.executableCode&&(n.executableCode=s.executableCode),s.codeExecutionResult&&(n.codeExecutionResult=s.codeExecutionResult),0===Object.keys(n).length&&(n.text=""),r.candidates[t].content.parts.push(n)}t++}n.usageMetadata&&(r.usageMetadata=n.usageMetadata)}return r}(n));n.push(i)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c$(t,n,r,i){return function(t){let[n,r]=(function(t){let n=t.getReader();return new ReadableStream({start(t){let r="";return function i(){return n.read().then(({value:n,done:s})=>{let o;if(s){if(r.trim()){t.error(new cT("Failed to parse stream"));return}t.close();return}let a=(r+=n).match(cB);for(;a;){try{o=JSON.parse(a[1])}catch(n){t.error(new cT(`Error parsing JSON response: "${a[1]}"`));return}t.enqueue(o),a=(r=r.substring(a[0].length)).match(cB)}return i()})}()}})})(t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))).tee();return{stream:function(t){return function(t,n,r){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var i,s=r.apply(t,n||[]),o=[];return i={},a("next"),a("throw"),a("return"),i[Symbol.asyncIterator]=function(){return this},i;function a(t){s[t]&&(i[t]=function(n){return new Promise(function(r,i){o.push([t,n,r,i])>1||l(t,n)})})}function l(t,n){try{var r;(r=s[t](n)).value instanceof cV?Promise.resolve(r.value.v).then(u,h):c(o[0][2],r)}catch(t){c(o[0][3],t)}}function u(t){l("next",t)}function h(t){l("throw",t)}function c(t,n){t(n),o.shift(),o.length&&l(o[0][0],o[0][1])}}(this,arguments,function*(){let n=t.getReader();for(;;){let{value:t,done:r}=yield cV(n.read());if(r)break;yield yield cV(cL(t))}})}(n),response:cj(r)}}(await cO(n,en.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(r),i))}async function cq(t,n,r,i){let s=await cO(n,en.GENERATE_CONTENT,t,!1,JSON.stringify(r),i);return{response:cL(await s.json())}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cH(t){if(null!=t){if("string"==typeof t)return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function cz(t){let n=[];if("string"==typeof t)n=[{text:t}];else for(let r of t)"string"==typeof r?n.push({text:r}):n.push(r);return function(t){let n={role:"user",parts:[]},r={role:"function",parts:[]},i=!1,s=!1;for(let o of t)"functionResponse"in o?(r.parts.push(o),s=!0):(n.parts.push(o),i=!0);if(i&&s)throw new cT("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!i&&!s)throw new cT("No content is provided for sending chat message.");return i?n:r}(n)}function cK(t){let n;return n=t.contents?t:{contents:[cz(t)]},t.systemInstruction&&(n.systemInstruction=cH(t.systemInstruction)),n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cG=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],cW={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]},cQ="SILENT_ERROR";class cY{constructor(t,n,r,i={}){this.model=n,this.params=r,this._requestOptions=i,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,(null==r?void 0:r.history)&&(function(t){let n=!1;for(let r of t){let{role:t,parts:i}=r;if(!n&&"user"!==t)throw new cT(`First content should be with role 'user', got ${t}`);if(!cI.includes(t))throw new cT(`Each item should include role field. Got ${t} but valid roles are: ${JSON.stringify(cI)}`);if(!Array.isArray(i))throw new cT("Content should have 'parts' property with an array of Parts");if(0===i.length)throw new cT("Each Content should have at least one part");let s={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(let t of i)for(let n of cG)n in t&&(s[n]+=1);let o=cW[t];for(let n of cG)if(!o.includes(n)&&s[n]>0)throw new cT(`Content with role '${t}' can't contain '${n}' part`);n=!0}}(r.history),this._history=r.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,n={}){var r,i,s,o,a,l;let u;await this._sendPromise;let h=cz(t),c={safetySettings:null===(r=this.params)||void 0===r?void 0:r.safetySettings,generationConfig:null===(i=this.params)||void 0===i?void 0:i.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(o=this.params)||void 0===o?void 0:o.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(l=this.params)||void 0===l?void 0:l.cachedContent,contents:[...this._history,h]},f=Object.assign(Object.assign({},this._requestOptions),n);return this._sendPromise=this._sendPromise.then(()=>cq(this._apiKey,this.model,c,f)).then(t=>{var n,r;if(t.response.candidates&&t.response.candidates.length>0&&(null===(n=t.response.candidates[0])||void 0===n?void 0:n.content)!==void 0){this._history.push(h);let n=Object.assign({parts:[],role:"model"},null===(r=t.response.candidates)||void 0===r?void 0:r[0].content);this._history.push(n)}else{let n=cF(t.response);n&&console.warn(`sendMessage() was unsuccessful. ${n}. Inspect response object for details.`)}u=t}),await this._sendPromise,u}async sendMessageStream(t,n={}){var r,i,s,o,a,l;await this._sendPromise;let u=cz(t),h={safetySettings:null===(r=this.params)||void 0===r?void 0:r.safetySettings,generationConfig:null===(i=this.params)||void 0===i?void 0:i.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(o=this.params)||void 0===o?void 0:o.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(l=this.params)||void 0===l?void 0:l.cachedContent,contents:[...this._history,u]},c=Object.assign(Object.assign({},this._requestOptions),n),f=c$(this._apiKey,this.model,h,c);return this._sendPromise=this._sendPromise.then(()=>f).catch(t=>{throw Error(cQ)}).then(t=>t.response).then(t=>{var n;if(t.candidates&&t.candidates.length>0&&(null===(n=t.candidates[0])||void 0===n?void 0:n.content)!==void 0){this._history.push(u);let n=Object.assign({},t.candidates[0].content);n.role||(n.role="model"),this._history.push(n)}else{let n=cF(t);n&&console.warn(`sendMessageStream() was unsuccessful. ${n}. Inspect response object for details.`)}}).catch(t=>{t.message!==cQ&&console.error(t)}),f}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cJ(t,n,r,i){return(await cO(n,en.COUNT_TOKENS,t,!1,JSON.stringify(r),i)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cX(t,n,r,i){return(await cO(n,en.EMBED_CONTENT,t,!1,JSON.stringify(r),i)).json()}async function cZ(t,n,r,i){let s=r.requests.map(t=>Object.assign(Object.assign({},t),{model:n}));return(await cO(n,en.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:s}),i)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(t,n,r={}){this.apiKey=t,this._requestOptions=r,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=cH(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(t,n={}){var r;let i=cK(t),s=Object.assign(Object.assign({},this._requestOptions),n);return cq(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(r=this.cachedContent)||void 0===r?void 0:r.name},i),s)}async generateContentStream(t,n={}){var r;let i=cK(t),s=Object.assign(Object.assign({},this._requestOptions),n);return c$(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(r=this.cachedContent)||void 0===r?void 0:r.name},i),s)}startChat(t){var n;return new cY(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},t),this._requestOptions)}async countTokens(t,n={}){let r=function(t,n){var r;let i={model:null==n?void 0:n.model,generationConfig:null==n?void 0:n.generationConfig,safetySettings:null==n?void 0:n.safetySettings,tools:null==n?void 0:n.tools,toolConfig:null==n?void 0:n.toolConfig,systemInstruction:null==n?void 0:n.systemInstruction,cachedContent:null===(r=null==n?void 0:n.cachedContent)||void 0===r?void 0:r.name,contents:[]},s=null!=t.generateContentRequest;if(t.contents){if(s)throw new cA("CountTokensRequest must have one of contents or generateContentRequest, not both.");i.contents=t.contents}else if(s)i=Object.assign(Object.assign({},i),t.generateContentRequest);else{let n=cz(t);i.contents=[n]}return{generateContentRequest:i}}(t,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),i=Object.assign(Object.assign({},this._requestOptions),n);return cJ(this.apiKey,this.model,r,i)}async embedContent(t,n={}){let r="string"==typeof t||Array.isArray(t)?{content:cz(t)}:t,i=Object.assign(Object.assign({},this._requestOptions),n);return cX(this.apiKey,this.model,r,i)}async batchEmbedContents(t,n={}){let r=Object.assign(Object.assign({},this._requestOptions),n);return cZ(this.apiKey,this.model,t,r)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(t){this.apiKey=t}getGenerativeModel(t,n){if(!t.model)throw new cT("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new c0(this.apiKey,t,n)}getGenerativeModelFromCachedContent(t,n,r){if(!t.name)throw new cA("Cached content must contain a `name` field.");if(!t.model)throw new cA("Cached content must contain a `model` field.");for(let r of["model","systemInstruction"])if((null==n?void 0:n[r])&&t[r]&&(null==n?void 0:n[r])!==t[r]){if("model"===r&&(n.model.startsWith("models/")?n.model.replace("models/",""):n.model)===(t.model.startsWith("models/")?t.model.replace("models/",""):t.model))continue;throw new cA(`Different value for "${r}" specified in modelParams (${n[r]}) and cachedContent (${t[r]})`)}let i=Object.assign(Object.assign({},n),{model:t.model,tools:t.tools,toolConfig:t.toolConfig,systemInstruction:t.systemInstruction,cachedContent:t});return new c0(this.apiKey,i,r)}}document.addEventListener("DOMContentLoaded",function(){a(cb).setLevel("info"),a(cb).info("Application started"),console.log("Firebase Firestore:",i,s);let t=new hs,n=document.getElementById("signIn");n?n.addEventListener("click",function(n){hW(s,t).then(t=>{hs.credentialFromResult(t).accessToken;let n=t.user;localStorage.setItem("email",JSON.stringify(n.email)),window.location="dashboard.html"}).catch(t=>{t.code,t.message,t.customData.email,hs.credentialFromError(t)})}):console.error("Sign-in button not found."),console.log("Email:",localStorage.getItem("email")?JSON.parse(localStorage.getItem("email")):null);let r=document.getElementById("logout");if(r?r.addEventListener("click",function(t){localStorage.removeItem("email"),window.location.href="index.html"}):console.error("Logout button not found."),console.log("Checking for book-form:",document.getElementById("book-form")),document.getElementById("book-form")){console.log("Initializing Book Logic...");let t=document.getElementById("book-form"),n=document.getElementById("book-list");async function o(n,r,o,a){s.onAuthStateChanged(async s=>{if(!s){console.error("No user signed in. Cannot add/update book.");return}try{let u=document.querySelector("#book-form button[type='submit']"),h=u.getAttribute("data-editing-id");h?(await setDoc(aJ(i,"books",h),{title:n,author:r,genre:o,rating:a,email:s.email}),console.log(`Book "${n}" updated successfully.`),u.textContent="Add Book",u.removeAttribute("data-editing-id")):(await function(t,n){var r;let i=aq(t.firestore,a0),s=aJ(t),o=(r=t.converter)?r.toFirestore(n):n;return lD(i,[(function(t,n,r,i,s,o={}){let a,l;let u=t.ju(o.merge||o.mergeFields?2:0,n,r,s);ll("Data must be an object, but it was:",u,i);let h=lo(i,u);if(o.merge)a=new n9(u.fieldMask),l=u.fieldTransforms;else if(o.mergeFields){let t=[];for(let i of o.mergeFields){let s=lu(n,i,r);if(!u.contains(s))throw new nA(nS.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);ld(t,s)||t.push(s)}a=new n9(t),l=u.fieldTransforms.filter(t=>a.covers(t.field))}else a=null,l=u.fieldTransforms;return new a7(new rU(h),a,l)})(lr(t.firestore),"addDoc",s._key,o,null!==t.converter,{}).toMutation(s._key,iL.exists(!1))]).then(()=>s)}(aY(i,"books"),{title:n,author:r,genre:o,rating:a,email:s.email}),console.log(`Book "${n}" added successfully by ${s.email}.`)),t.reset(),l()}catch(t){console.error("Error adding/updating book:",t)}})}async function l(){console.log("Fetching books..."),s.onAuthStateChanged(async t=>{if(!t){console.log("No user signed in. Cannot fetch books.");return}try{let r=lw(aY(i,"books"),l_("email","==",t.email)),s=await lx(r);if(n.innerHTML="",s.empty){n.innerHTML="<p>No books added yet.</p>",console.log("No books found in database.");return}s.forEach(t=>{let r=t.data(),i=t.id,s=document.createElement("li");s.tabIndex=0,s.id=i,s.innerHTML=`
                            <strong>${r.title} </strong>
                            by <span class="author-tag" data-author="${r.author}">${r.author}</span>
                            <em> (<span class="genre-tag" data-genre="${r.genre}">${r.genre}</span>) </em>
                            - Rating: ${r.rating}
                            <div class="book-actions">
                                <button class="edit-btn" data-id="${i}">Edit</button>
                                <button class="delete-btn" data-id="${i}">Delete</button>
                            </div>
                        `,n.appendChild(s)}),console.log("Books successfully displayed.")}catch(t){console.error("Error fetching and displaying books:",t)}})}async function u(t,n,r,s,o){try{let a=aJ(i,"books",t);await function(t,n,r,...i){t=aq(t,aW);let s=aq(t.firestore,a0),o=lr(s);return lD(s,[("string"==typeof(n=eH(n))||n instanceof a6?function(t,n,r,i,s,o){let a=t.ju(1,n,r),l=[lu(n,i,r)],u=[s];if(o.length%2!=0)throw new nA(nS.INVALID_ARGUMENT,`Function ${n}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<o.length;t+=2)l.push(lu(n,o[t])),u.push(o[t+1]);let h=[],c=rU.empty();for(let t=l.length-1;t>=0;--t)if(!ld(h,l[t])){let n=l[t],r=u[t];r=eH(r);let i=a.Ku(n);if(r instanceof li)h.push(n);else{let t=ls(r,i);null!=t&&(h.push(n),c.set(n,t))}}return new a9(c,new n9(h),a.fieldTransforms)}(o,"updateDoc",t._key,n,void 0,i):function(t,n,r,i){let s=t.ju(1,n,r);ll("Data must be an object, but it was:",s,i);let o=[],a=rU.empty();return n2(i,(t,i)=>{let l=lc(n,t,r);i=eH(i);let u=s.Ku(l);if(i instanceof li)o.push(l);else{let t=ls(i,u);null!=t&&(o.push(l),a.set(l,t))}}),new a9(a,new n9(o),s.fieldTransforms)}(o,"updateDoc",t._key,n)).toMutation(t._key,iL.exists(!0))])}(a,{title:n,author:r,genre:s,rating:o}),console.log(`Book "${n}" updated successfully.`),l()}catch(t){console.error("Error updating book:",t)}}async function h(t,r){console.log(`Filtering books where ${t} == ${r}`),s.onAuthStateChanged(async s=>{if(!s){console.log("No user signed in. Cannot filter books.");return}try{let o=lw(aY(i,"books"),l_("email","==",s.email),l_(t,"==",r)),a=await lx(o);if(n.innerHTML="",a.empty){n.innerHTML=`<p>No books found for ${t} "${r}".</p>`,console.log(`No books found for ${t} "${r}".`);return}a.forEach(t=>{let r=t.data(),i=t.id,s=document.createElement("li");s.tabIndex=0,s.id=i,s.innerHTML=`
                            <strong>${r.title} </strong>
                            by <span class="author-tag" data-author="${r.author}">${r.author}</span>
                            <em> (<span class="genre-tag" data-genre="${r.genre}">${r.genre}</span>) </em>
                            - Rating: ${r.rating}
                            <div class="book-actions">
                                <button class="edit-btn" data-id="${i}">Edit</button>
                                <button class="delete-btn" data-id="${i}">Delete</button>
                            </div>
                        `,n.appendChild(s)}),console.log("Filtered books successfully displayed.")}catch(t){console.error("Error fetching and displaying filtered books:",t)}})}if(document.getElementById("update-book").addEventListener("click",function(){let t=document.getElementById("update-book").getAttribute("data-id");if(!t){console.error("No book selected for updating.");return}let n=document.getElementById("title").value.trim(),r=document.getElementById("author").value.trim(),i=document.getElementById("genre").value.trim(),s=document.getElementById("rating").value.trim();if(!n||!r||!i||!s){console.error("All fields must be filled.");return}u(t,n,r,i,s),document.getElementById("book-form").reset(),document.getElementById("update-book").style.display="none",document.getElementById("submit-book").style.display="inline-block"}),document.addEventListener("click",async t=>{if(t.target.classList.contains("author-tag")){let n=t.target.getAttribute("data-author");console.log(`Filtering books by author: ${n}`),h("author",n)}if(t.target.classList.contains("genre-tag")){let n=t.target.getAttribute("data-genre");console.log(`Filtering books by genre: ${n}`),h("genre",n)}}),document.addEventListener("click",async function(t){if(t.target.classList.contains("edit-btn")){let n=t.target.getAttribute("data-id"),r=t.target.closest("li");document.getElementById("title").value=r.querySelector("strong").innerText,document.getElementById("author").value=r.querySelector(".author-tag").innerText,document.getElementById("genre").value=r.querySelector(".genre-tag").innerText,document.getElementById("rating").value=r.innerHTML.match(/Rating: (\d+)/)[1],document.getElementById("update-book").setAttribute("data-id",n),document.getElementById("update-book").style.display="inline-block",document.getElementById("submit-book").style.display="none"}if(t.target.classList.contains("delete-btn")){let t=e.target.getAttribute("data-id");try{var n;await (n=aJ(i,"books",t),lD(aq(n.firestore,a0),[new iz(n._key,iL.none())])),console.log(`Book with ID ${t} deleted.`),l()}catch(t){console.error("Error deleting book:",t)}}}),document.getElementById("book-form")){console.log("Book form found. Initializing book logic...");let t=document.getElementById("book-form");document.getElementById("book-list"),t.addEventListener("submit",function(n){console.log("Form submit event detected."),n.preventDefault(),console.log("Book form submitted.");let r=document.getElementById("title").value.trim(),i=document.getElementById("author").value.trim(),s=document.getElementById("genre").value.trim(),a=document.getElementById("rating").value.trim();if(!r||!i||!s||!a){console.error("All fields must be filled.");return}console.log("Form values:",{title:r,author:i,genre:s,rating:a}),o(r,i,s,a),t.reset()}),l()}else console.error("Book form not found.");document.getElementById("reset-filter").addEventListener("click",()=>{console.log("Resetting book list filter..."),l()})}let c=document.getElementById("chat-input"),f=document.getElementById("send-btn"),d=document.getElementById("chat-history"),p=document.getElementById("chatbot-container");async function g(){model=(genAI=new c1(apiKey=(await function(t){t=aq(t,aW);let n=aq(t.firestore,a0);return(function(t,n,r={}){let i=new nk;return t.asyncQueue.enqueueAndForget(async()=>(function(t,n,r,i,s){let o=new aN({next:l=>{o.su(),n.enqueueAndForget(()=>o2(t,a));let u=l.docs.has(r);!u&&l.fromCache?s.reject(new nA(nS.UNAVAILABLE,"Failed to get document because the client is offline.")):u&&l.fromCache&&i&&"server"===i.source?s.reject(new nA(nS.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(l)},error:t=>s.reject(t)}),a=new o8(new r4(r.path),o,{includeMetadataChanges:!0,Ta:!0});return o1(t,a)})(await aM(t),t.asyncQueue,n,r,i)),i.promise})(a1(n),t._key).then(r=>(function(t,n,r){let i=r.docs.get(n._key),s=new lO(t);return new lk(t,s,n._key,i,new lA(r.hasPendingWrites,r.fromCache),n.converter)})(n,t,r))}(aJ(i,"apikey","googlegenai"))).data().key)).getGenerativeModel({model:"gemini-1.5-flash"})}async function m(t){return(await model.generateContent(t)).candidates[0].content.parts[0].text}function y(t){let n=document.createElement("div");n.textContent=t,n.className="history",d.appendChild(n)}document.getElementById("chat-icon"),p.addEventListener("click",function(t){p.classList.contains("expanded")||(p.classList.add("expanded"),t.stopPropagation())}),document.addEventListener("click",function(t){!p.contains(t.target)&&p.classList.contains("expanded")&&p.classList.remove("expanded")}),d.addEventListener("click",t=>t.stopPropagation()),c.addEventListener("click",t=>t.stopPropagation()),f.addEventListener("click",t=>t.stopPropagation()),c&&f&&f.addEventListener("click",async()=>{let t=c.value.trim();if(t){var n;if(y(`You: ${t}`,"user"),!((n=(n=t).toLowerCase().trim()).startsWith("add")?(y("To add a book, enter title, author, genre, and rating, then click 'Add Book'."),!0):n.startsWith("delete")?(y("To delete a book, click the 'Delete' button next to it."),!0):n.startsWith("sort")?(y("To sort through books, click either on the author's name or on the book's genre."),!0):(y("I'm sorry, I didn't understand that command."),!1)))try{let n=await m(t);y(`Chatbot: ${n}`,"bot")}catch(t){console.error("Error with AI chatbot:",t),y("Chatbot: Sorry, I couldn't process that request.","bot")}c.value=""}}),!async function(){await g(),console.log("AI initialized successfully.")}()});
//# sourceMappingURL=dashboard.b01de058.js.map
