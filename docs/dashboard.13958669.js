var t,e,n,o,s,i,a,r,l,c,d,u,h,f,g,m,E,p,C,y,O,I,v,_,T=globalThis,N={},A={},b=T.parcelRequire94c2;null==b&&((b=function(t){if(t in N)return N[t].exports;if(t in A){var e=A[t];delete A[t];var n={id:t,exports:{}};return N[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){A[t]=e},T.parcelRequire94c2=b),b.register;var R=b("6FvfU"),S=b("6AR8M");(t=h||(h={})).STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object",(e=f||(f={})).LANGUAGE_UNSPECIFIED="language_unspecified",e.PYTHON="python",(n=g||(g={})).OUTCOME_UNSPECIFIED="outcome_unspecified",n.OUTCOME_OK="outcome_ok",n.OUTCOME_FAILED="outcome_failed",n.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded";/**
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
 */const w=["user","model","function","system"];(o=m||(m={})).HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",o.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",o.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",o.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",o.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",(s=E||(E={})).HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",s.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",s.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",s.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",s.BLOCK_NONE="BLOCK_NONE",(i=p||(p={})).HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",i.NEGLIGIBLE="NEGLIGIBLE",i.LOW="LOW",i.MEDIUM="MEDIUM",i.HIGH="HIGH",(a=C||(C={})).BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",a.SAFETY="SAFETY",a.OTHER="OTHER",(r=y||(y={})).FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",r.STOP="STOP",r.MAX_TOKENS="MAX_TOKENS",r.SAFETY="SAFETY",r.RECITATION="RECITATION",r.LANGUAGE="LANGUAGE",r.BLOCKLIST="BLOCKLIST",r.PROHIBITED_CONTENT="PROHIBITED_CONTENT",r.SPII="SPII",r.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",r.OTHER="OTHER",(l=O||(O={})).TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",l.RETRIEVAL_QUERY="RETRIEVAL_QUERY",l.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",l.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",l.CLASSIFICATION="CLASSIFICATION",l.CLUSTERING="CLUSTERING",(c=I||(I={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",c.AUTO="AUTO",c.ANY="ANY",c.NONE="NONE",(d=v||(v={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",d.MODE_DYNAMIC="MODE_DYNAMIC";/**
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
 */class M extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class D extends M{constructor(t,e){super(t),this.response=e}}class L extends M{constructor(t,e,n,o){super(t),this.status=e,this.statusText=n,this.errorDetails=o}}class x extends M{}(u=_||(_={})).GENERATE_CONTENT="generateContent",u.STREAM_GENERATE_CONTENT="streamGenerateContent",u.COUNT_TOKENS="countTokens",u.EMBED_CONTENT="embedContent",u.BATCH_EMBED_CONTENTS="batchEmbedContents";class k{constructor(t,e,n,o,s){this.model=t,this.task=e,this.apiKey=n,this.stream=o,this.requestOptions=s}toString(){var t,e;let n=(null===(t=this.requestOptions)||void 0===t?void 0:t.apiVersion)||"v1beta",o=(null===(e=this.requestOptions)||void 0===e?void 0:e.baseUrl)||"https://generativelanguage.googleapis.com",s=`${o}/${n}/${this.model}:${this.task}`;return this.stream&&(s+="?alt=sse"),s}}async function F(t){var e;let n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",function(t){let e=[];return(null==t?void 0:t.apiClient)&&e.push(t.apiClient),e.push("genai-js/0.22.0"),e.join(" ")}(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let o=null===(e=t.requestOptions)||void 0===e?void 0:e.customHeaders;if(o){if(!(o instanceof Headers))try{o=new Headers(o)}catch(t){throw new x(`unable to convert customHeaders value ${JSON.stringify(o)} to Headers: ${t.message}`)}for(let[t,e]of o.entries()){if("x-goog-api-key"===t)throw new x(`Cannot set reserved header name ${t}`);if("x-goog-api-client"===t)throw new x(`Header name ${t} can only be set using the apiClient field`);n.append(t,e)}}return n}async function H(t,e,n,o,s,i){let a=new k(t,e,n,o,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},function(t){let e={};if((null==t?void 0:t.signal)!==void 0||(null==t?void 0:t.timeout)>=0){let n=new AbortController;(null==t?void 0:t.timeout)>=0&&setTimeout(()=>n.abort(),t.timeout),(null==t?void 0:t.signal)&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}(i)),{method:"POST",headers:await F(a),body:s})}}async function U(t,e,n,o,s,i={},a=fetch){let{url:r,fetchOptions:l}=await H(t,e,n,o,s,i);return B(r,l,a)}async function B(t,e,n=fetch){let o;try{o=await n(t,e)}catch(e){!function(t,e){let n=t;throw t instanceof L||t instanceof x||((n=new M(`Error fetching from ${e.toString()}: ${t.message}`)).stack=t.stack),n}(e,t)}return o.ok||await P(o,t),o}async function P(t,e){let n,o="";try{let e=await t.json();o=e.error.message,e.error.details&&(o+=` ${JSON.stringify(e.error.details)}`,n=e.error.details)}catch(t){}throw new L(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${o}`,t.status,t.statusText,n)}/**
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
 */function $(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),K(t.candidates[0]))throw new D(`${Y(t)}`,t);return function(t){var e,n,o,s;let i=[];if(null===(n=null===(e=t.candidates)||void 0===e?void 0:e[0].content)||void 0===n?void 0:n.parts)for(let e of null===(s=null===(o=t.candidates)||void 0===o?void 0:o[0].content)||void 0===s?void 0:s.parts)e.text&&i.push(e.text),e.executableCode&&i.push("\n```"+e.executableCode.language+"\n"+e.executableCode.code+"\n```\n"),e.codeExecutionResult&&i.push("\n```\n"+e.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}(t)}if(t.promptFeedback)throw new D(`Text not available. ${Y(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),K(t.candidates[0]))throw new D(`${Y(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),G(t)[0]}if(t.promptFeedback)throw new D(`Function call not available. ${Y(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),K(t.candidates[0]))throw new D(`${Y(t)}`,t);return G(t)}if(t.promptFeedback)throw new D(`Function call not available. ${Y(t)}`,t)},t}function G(t){var e,n,o,s;let i=[];if(null===(n=null===(e=t.candidates)||void 0===e?void 0:e[0].content)||void 0===n?void 0:n.parts)for(let e of null===(s=null===(o=t.candidates)||void 0===o?void 0:o[0].content)||void 0===s?void 0:s.parts)e.functionCall&&i.push(e.functionCall);return i.length>0?i:void 0}const j=[y.RECITATION,y.SAFETY,y.LANGUAGE];function K(t){return!!t.finishReason&&j.includes(t.finishReason)}function Y(t){var e,n,o;let s="";if((!t.candidates||0===t.candidates.length)&&t.promptFeedback)s+="Response was blocked",(null===(e=t.promptFeedback)||void 0===e?void 0:e.blockReason)&&(s+=` due to ${t.promptFeedback.blockReason}`),(null===(n=t.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(s+=`: ${t.promptFeedback.blockReasonMessage}`);else if(null===(o=t.candidates)||void 0===o?void 0:o[0]){let e=t.candidates[0];K(e)&&(s+=`Candidate was blocked due to ${e.finishReason}`,e.finishMessage&&(s+=`: ${e.finishMessage}`))}return s}function q(t){return this instanceof q?(this.v=t,this):new q(t)}"function"==typeof SuppressedError&&SuppressedError;/**
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
 */const J=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function W(t){let e=[],n=t.getReader();for(;;){let{done:t,value:o}=await n.read();if(t)return $(function(t){let e=t[t.length-1],n={promptFeedback:null==e?void 0:e.promptFeedback};for(let e of t){if(e.candidates){let t=0;for(let o of e.candidates)if(n.candidates||(n.candidates=[]),n.candidates[t]||(n.candidates[t]={index:t}),n.candidates[t].citationMetadata=o.citationMetadata,n.candidates[t].groundingMetadata=o.groundingMetadata,n.candidates[t].finishReason=o.finishReason,n.candidates[t].finishMessage=o.finishMessage,n.candidates[t].safetyRatings=o.safetyRatings,o.content&&o.content.parts){n.candidates[t].content||(n.candidates[t].content={role:o.content.role||"user",parts:[]});let e={};for(let s of o.content.parts)s.text&&(e.text=s.text),s.functionCall&&(e.functionCall=s.functionCall),s.executableCode&&(e.executableCode=s.executableCode),s.codeExecutionResult&&(e.codeExecutionResult=s.codeExecutionResult),0===Object.keys(e).length&&(e.text=""),n.candidates[t].content.parts.push(e)}t++}e.usageMetadata&&(n.usageMetadata=e.usageMetadata)}return n}(e));e.push(o)}}/**
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
 */async function V(t,e,n,o){return function(t){let[e,n]=(function(t){let e=t.getReader();return new ReadableStream({start(t){let n="";return function o(){return e.read().then(({value:e,done:s})=>{let i;if(s){if(n.trim()){t.error(new M("Failed to parse stream"));return}t.close();return}let a=(n+=e).match(J);for(;a;){try{i=JSON.parse(a[1])}catch(e){t.error(new M(`Error parsing JSON response: "${a[1]}"`));return}t.enqueue(i),a=(n=n.substring(a[0].length)).match(J)}return o()})}()}})})(t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))).tee();return{stream:function(t){return function(t,e,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var o,s=n.apply(t,e||[]),i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(t){s[t]&&(o[t]=function(e){return new Promise(function(n,o){i.push([t,e,n,o])>1||r(t,e)})})}function r(t,e){try{var n;(n=s[t](e)).value instanceof q?Promise.resolve(n.value.v).then(l,c):d(i[0][2],n)}catch(t){d(i[0][3],t)}}function l(t){r("next",t)}function c(t){r("throw",t)}function d(t,e){t(e),i.shift(),i.length&&r(i[0][0],i[0][1])}}(this,arguments,function*(){let e=t.getReader();for(;;){let{value:t,done:n}=yield q(e.read());if(n)break;yield yield q($(t))}})}(e),response:W(n)}}(await U(e,_.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),o))}async function X(t,e,n,o){let s=await U(e,_.GENERATE_CONTENT,t,!1,JSON.stringify(n),o);return{response:$(await s.json())}}/**
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
 */function z(t){if(null!=t){if("string"==typeof t)return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function Q(t){let e=[];if("string"==typeof t)e=[{text:t}];else for(let n of t)"string"==typeof n?e.push({text:n}):e.push(n);return function(t){let e={role:"user",parts:[]},n={role:"function",parts:[]},o=!1,s=!1;for(let i of t)"functionResponse"in i?(n.parts.push(i),s=!0):(e.parts.push(i),o=!0);if(o&&s)throw new M("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!o&&!s)throw new M("No content is provided for sending chat message.");return o?e:n}(e)}function Z(t){let e;return e=t.contents?t:{contents:[Q(t)]},t.systemInstruction&&(e.systemInstruction=z(t.systemInstruction)),e}/**
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
 */const tt=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],te={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]},tn="SILENT_ERROR";class to{constructor(t,e,n,o={}){this.model=e,this.params=n,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,(null==n?void 0:n.history)&&(function(t){let e=!1;for(let n of t){let{role:t,parts:o}=n;if(!e&&"user"!==t)throw new M(`First content should be with role 'user', got ${t}`);if(!w.includes(t))throw new M(`Each item should include role field. Got ${t} but valid roles are: ${JSON.stringify(w)}`);if(!Array.isArray(o))throw new M("Content should have 'parts' property with an array of Parts");if(0===o.length)throw new M("Each Content should have at least one part");let s={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(let t of o)for(let e of tt)e in t&&(s[e]+=1);let i=te[t];for(let e of tt)if(!i.includes(e)&&s[e]>0)throw new M(`Content with role '${t}' can't contain '${e}' part`);e=!0}}(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,e={}){var n,o,s,i,a,r;let l;await this._sendPromise;let c=Q(t),d={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(o=this.params)||void 0===o?void 0:o.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,c]},u=Object.assign(Object.assign({},this._requestOptions),e);return this._sendPromise=this._sendPromise.then(()=>X(this._apiKey,this.model,d,u)).then(t=>{var e,n;if(t.response.candidates&&t.response.candidates.length>0&&(null===(e=t.response.candidates[0])||void 0===e?void 0:e.content)!==void 0){this._history.push(c);let e=Object.assign({parts:[],role:"model"},null===(n=t.response.candidates)||void 0===n?void 0:n[0].content);this._history.push(e)}else{let e=Y(t.response);e&&console.warn(`sendMessage() was unsuccessful. ${e}. Inspect response object for details.`)}l=t}),await this._sendPromise,l}async sendMessageStream(t,e={}){var n,o,s,i,a,r;await this._sendPromise;let l=Q(t),c={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(o=this.params)||void 0===o?void 0:o.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,l]},d=Object.assign(Object.assign({},this._requestOptions),e),u=V(this._apiKey,this.model,c,d);return this._sendPromise=this._sendPromise.then(()=>u).catch(t=>{throw Error(tn)}).then(t=>t.response).then(t=>{var e;if(t.candidates&&t.candidates.length>0&&(null===(e=t.candidates[0])||void 0===e?void 0:e.content)!==void 0){this._history.push(l);let e=Object.assign({},t.candidates[0].content);e.role||(e.role="model"),this._history.push(e)}else{let e=Y(t);e&&console.warn(`sendMessageStream() was unsuccessful. ${e}. Inspect response object for details.`)}}).catch(t=>{t.message!==tn&&console.error(t)}),u}}/**
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
 */async function ts(t,e,n,o){return(await U(e,_.COUNT_TOKENS,t,!1,JSON.stringify(n),o)).json()}/**
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
 */async function ti(t,e,n,o){return(await U(e,_.EMBED_CONTENT,t,!1,JSON.stringify(n),o)).json()}async function ta(t,e,n,o){let s=n.requests.map(t=>Object.assign(Object.assign({},t),{model:e}));return(await U(e,_.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:s}),o)).json()}/**
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
 */class tr{constructor(t,e,n={}){this.apiKey=t,this._requestOptions=n,e.model.includes("/")?this.model=e.model:this.model=`models/${e.model}`,this.generationConfig=e.generationConfig||{},this.safetySettings=e.safetySettings||[],this.tools=e.tools,this.toolConfig=e.toolConfig,this.systemInstruction=z(e.systemInstruction),this.cachedContent=e.cachedContent}async generateContent(t,e={}){var n;let o=Z(t),s=Object.assign(Object.assign({},this._requestOptions),e);return X(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},o),s)}async generateContentStream(t,e={}){var n;let o=Z(t),s=Object.assign(Object.assign({},this._requestOptions),e);return V(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},o),s)}startChat(t){var e;return new to(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(e=this.cachedContent)||void 0===e?void 0:e.name},t),this._requestOptions)}async countTokens(t,e={}){let n=function(t,e){var n;let o={model:null==e?void 0:e.model,generationConfig:null==e?void 0:e.generationConfig,safetySettings:null==e?void 0:e.safetySettings,tools:null==e?void 0:e.tools,toolConfig:null==e?void 0:e.toolConfig,systemInstruction:null==e?void 0:e.systemInstruction,cachedContent:null===(n=null==e?void 0:e.cachedContent)||void 0===n?void 0:n.name,contents:[]},s=null!=t.generateContentRequest;if(t.contents){if(s)throw new x("CountTokensRequest must have one of contents or generateContentRequest, not both.");o.contents=t.contents}else if(s)o=Object.assign(Object.assign({},o),t.generateContentRequest);else{let e=Q(t);o.contents=[e]}return{generateContentRequest:o}}(t,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),e);return ts(this.apiKey,this.model,n,o)}async embedContent(t,e={}){let n="string"==typeof t||Array.isArray(t)?{content:Q(t)}:t,o=Object.assign(Object.assign({},this._requestOptions),e);return ti(this.apiKey,this.model,n,o)}async batchEmbedContents(t,e={}){let n=Object.assign(Object.assign({},this._requestOptions),e);return ta(this.apiKey,this.model,t,n)}}/**
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
 */class tl{constructor(t){this.apiKey=t}getGenerativeModel(t,e){if(!t.model)throw new M("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new tr(this.apiKey,t,e)}getGenerativeModelFromCachedContent(t,e,n){if(!t.name)throw new x("Cached content must contain a `name` field.");if(!t.model)throw new x("Cached content must contain a `model` field.");for(let n of["model","systemInstruction"])if((null==e?void 0:e[n])&&t[n]&&(null==e?void 0:e[n])!==t[n]){if("model"===n&&(e.model.startsWith("models/")?e.model.replace("models/",""):e.model)===(t.model.startsWith("models/")?t.model.replace("models/",""):t.model))continue;throw new x(`Different value for "${n}" specified in modelParams (${e[n]}) and cachedContent (${t[n]})`)}let o=Object.assign(Object.assign({},e),{model:t.model,tools:t.tools,toolConfig:t.toolConfig,systemInstruction:t.systemInstruction,cachedContent:t});return new tr(this.apiKey,o,n)}}var tc=b("ilpIi");document.addEventListener("DOMContentLoaded",()=>{console.log("DOM fully loaded. Initializing app..."),document.getElementById("signIn").addEventListener("click",function(t){R.auth,provider,(0,S.signInWithPopup)(R.auth,provider).then(t=>{(0,S.GoogleAuthProvider).credentialFromResult(t).accessToken;let e=t.user;localStorage.setItem("email",JSON.stringify(e.email)),window.location="dashboard.html"}).catch(t=>{t.code,t.message,t.customData.email,(0,S.GoogleAuthProvider).credentialFromError(t)})});let t=document.getElementById("logout");if(t&&t.addEventListener("click",()=>{(0,R.auth).signOut().then(()=>{console.log("User signed out."),localStorage.removeItem("email"),window.location.href="index.html"}).catch(t=>{console.error("Logout error:",t)})}),document.getElementById("book-form")){console.log("Initializing Book Logic...");let t=document.getElementById("book-form"),o=document.getElementById("book-list");async function e(t,e,o,s){try{await (0,tc.addDoc)((0,tc.collection)(R.db,"books"),{title:t,author:e,genre:o,rating:s}),console.log("Book added successfully."),n()}catch(t){console.error("Error adding book:",t)}}async function n(){try{console.log("Fetching books...");let t=await (0,tc.getDocs)((0,tc.collection)(R.db,"books"));if(t.empty){o.innerHTML="<p>No books added yet.</p>",console.log("⚠ No books in database.");return}t.forEach(t=>{let e=t.data(),n=t.id;console.log("Found book:",e),function(t,e){let n=document.createElement("li");n.innerHTML=`
                <strong>${t.title}</strong> by ${t.author} <em>(${t.genre})</em> - Rating: ${t.rating}
                <button onclick="deleteBook('${e}')">Delete</button>
            `,o.appendChild(n)}(e,n)}),console.log("Books successfully fetched.")}catch(t){console.error("Error fetching books:",t)}}t.addEventListener("submit",function(n){n.preventDefault();let o=document.getElementById("title").value,s=document.getElementById("author").value;e(o,s,document.getElementById("genre").value,document.getElementById("rating").value),t.reset()}),n()}let o=document.getElementById("chat-input"),s=document.getElementById("send-btn"),i=document.getElementById("chat-history");async function a(){model=(genAI=new tl(apiKey=(await getDoc((0,tc.doc)(R.db,"apikey","googlegenai"))).data().key)).getGenerativeModel({model:"gemini-1.5-flash"})}async function r(t){return(await model.generateContent(t)).candidates[0].content.parts[0].text}function l(t){let e=document.createElement("div");e.textContent=t,e.className="history",i.appendChild(e)}o&&s&&s.addEventListener("click",async()=>{let t=o.value.trim();if(t){var e;if(l(`You: ${t}`,"user"),!((e=(e=t).toLowerCase().trim()).startsWith("add")?(l("To add a book, enter title, author, genre, and rating, then click 'Add Book'."),!0):e.startsWith("delete")?(l("To delete a book, click the 'Delete' button next to it."),!0):(l("I'm sorry, I didn't understand that command."),!1)))try{let e=await r(t);l(`Chatbot: ${e}`,"bot")}catch(t){console.error("Error with AI chatbot:",t),l("Chatbot: Sorry, I couldn't process that request.","bot")}o.value=""}}),!async function(){await a(),console.log("AI initialized successfully.")}()});
//# sourceMappingURL=dashboard.13958669.js.map
