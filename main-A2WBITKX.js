var CI=Object.defineProperty,II=Object.defineProperties;var SI=Object.getOwnPropertyDescriptors;var Ml=Object.getOwnPropertySymbols;var ub=Object.prototype.hasOwnProperty,fb=Object.prototype.propertyIsEnumerable;var db=(t,n,e)=>n in t?CI(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,v=(t,n)=>{for(var e in n||={})ub.call(n,e)&&db(t,e,n[e]);if(Ml)for(var e of Ml(n))fb.call(n,e)&&db(t,e,n[e]);return t},Y=(t,n)=>II(t,SI(n));var Ff=(t,n)=>{var e={};for(var i in t)ub.call(t,i)&&n.indexOf(i)<0&&(e[i]=t[i]);if(t!=null&&Ml)for(var i of Ml(t))n.indexOf(i)<0&&fb.call(t,i)&&(e[i]=t[i]);return e};var Re=(t,n,e)=>new Promise((i,r)=>{var o=l=>{try{a(e.next(l))}catch(c){r(c)}},s=l=>{try{a(e.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(o,s);a((e=e.apply(t,n)).next())});var ht=null,Tl=!1,Pf=1,MI=null,Ze=Symbol("SIGNAL");function F(t){let n=ht;return ht=t,n}function kl(){return ht}var Si={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Mi(t){if(Tl)throw new Error("");if(ht===null)return;ht.consumerOnSignalRead(t);let n=ht.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=ht.recomputing;if(i&&(e=n!==void 0?n.nextProducer:ht.producers,e!==void 0&&e.producer===t)){ht.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===ht&&(!i||kI(r,ht)))return;let o=go(ht),s={producer:t,consumer:ht,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};ht.producersTail=s,n!==void 0?n.nextProducer=s:ht.producers=s,o&&gb(t,s)}function mb(){Pf++}function mr(t){if(!(go(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===Pf)){if(!t.producerMustRecompute(t)&&!po(t)){ho(t);return}t.producerRecomputeValue(t),ho(t)}}function Lf(t){if(t.consumers===void 0)return;let n=Tl;Tl=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||TI(i)}}finally{Tl=n}}function Vf(){return ht?.consumerAllowSignalWrites!==!1}function TI(t){t.dirty=!0,Lf(t),t.consumerMarkedDirty?.(t)}function ho(t){t.dirty=!1,t.lastCleanEpoch=Pf}function qn(t){return t&&hb(t),F(t)}function hb(t){t.producersTail=void 0,t.recomputing=!0}function Ti(t,n){F(n),t&&pb(t)}function pb(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(go(t))do e=jf(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function po(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(mr(e),i!==e.version))return!0}return!1}function ki(t){if(go(t)){let n=t.producers;for(;n!==void 0;)n=jf(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function gb(t,n){let e=t.consumersTail,i=go(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)gb(r.producer,r)}function jf(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!go(n)){let o=n.producers;for(;o!==void 0;)o=jf(o)}return e}function go(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function Ss(t){MI?.(t)}function kI(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function Ms(t,n){return Object.is(t,n)}function Ts(t,n){let e=Object.create(AI);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(mr(e),Mi(e),e.value===Rn)throw e.error;return e.value};return i[Ze]=e,Ss(e),i}var ur=Symbol("UNSET"),fr=Symbol("COMPUTING"),Rn=Symbol("ERRORED"),AI=Y(v({},Si),{value:ur,dirty:!0,error:null,equal:Ms,kind:"computed",producerMustRecompute(t){return t.value===ur||t.value===fr},producerRecomputeValue(t){if(t.value===fr)throw new Error("");let n=t.value;t.value=fr;let e=qn(t),i,r=!1;try{i=t.computation(),F(null),r=n!==ur&&n!==Rn&&i!==Rn&&t.equal(n,i)}catch(o){i=Rn,t.error=o}finally{Ti(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function RI(){throw new Error}var vb=RI;function bb(t){vb(t)}function Bf(t){vb=t}var NI=null;function Uf(t,n){let e=Object.create(ks);e.value=t,n!==void 0&&(e.equal=n);let i=()=>yb(e);return i[Ze]=e,Ss(e),[i,s=>hr(e,s),s=>Al(e,s)]}function yb(t){return Mi(t),t.value}function hr(t,n){Vf()||bb(t),t.equal(t.value,n)||(t.value=n,OI(t))}function Al(t,n){Vf()||bb(t),hr(t,n(t.value))}var ks=Y(v({},Si),{equal:Ms,value:void 0,kind:"signal"});function OI(t){t.version++,mb(),Lf(t),NI?.(t)}var Hf=Y(v({},Si),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function zf(t){if(t.dirty=!1,t.version>0&&!po(t))return;t.version++;let n=qn(t);try{t.cleanup(),t.fn()}finally{Ti(t,n)}}function J(t){return typeof t=="function"}function vo(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var Rl=vo(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function pr(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var Fe=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(J(i))try{i()}catch(o){n=o instanceof Rl?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{_b(o)}catch(s){n=n??[],s instanceof Rl?n=[...n,...s.errors]:n.push(s)}}if(n)throw new Rl(n)}}add(n){var e;if(n&&n!==this)if(this.closed)_b(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&pr(e,n)}remove(n){let{_finalizers:e}=this;e&&pr(e,n),n instanceof t&&n._removeParent(this)}};Fe.EMPTY=(()=>{let t=new Fe;return t.closed=!0,t})();var $f=Fe.EMPTY;function Nl(t){return t instanceof Fe||t&&"closed"in t&&J(t.remove)&&J(t.add)&&J(t.unsubscribe)}function _b(t){J(t)?t():t.unsubscribe()}var fn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var bo={setTimeout(t,n,...e){let{delegate:i}=bo;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=bo;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function Ol(t){bo.setTimeout(()=>{let{onUnhandledError:n}=fn;if(n)n(t);else throw t})}function Qn(){}var wb=Gf("C",void 0,void 0);function Eb(t){return Gf("E",void 0,t)}function Db(t){return Gf("N",t,void 0)}function Gf(t,n,e){return{kind:t,value:n,error:e}}var gr=null;function yo(t){if(fn.useDeprecatedSynchronousErrorHandling){let n=!gr;if(n&&(gr={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=gr;if(gr=null,e)throw i}}else t()}function xb(t){fn.useDeprecatedSynchronousErrorHandling&&gr&&(gr.errorThrown=!0,gr.error=t)}var vr=class extends Fe{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,Nl(n)&&n.add(this)):this.destination=LI}static create(n,e,i){return new Zn(n,e,i)}next(n){this.isStopped?qf(Db(n),this):this._next(n)}error(n){this.isStopped?qf(Eb(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?qf(wb,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},FI=Function.prototype.bind;function Wf(t,n){return FI.call(t,n)}var Qf=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){Fl(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){Fl(i)}else Fl(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){Fl(e)}}},Zn=class extends vr{constructor(n,e,i){super();let r;if(J(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&fn.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&Wf(n.next,o),error:n.error&&Wf(n.error,o),complete:n.complete&&Wf(n.complete,o)}):r=n}this.destination=new Qf(r)}};function Fl(t){fn.useDeprecatedSynchronousErrorHandling?xb(t):Ol(t)}function PI(t){throw t}function qf(t,n){let{onStoppedNotification:e}=fn;e&&bo.setTimeout(()=>e(t,n))}var LI={closed:!0,next:Qn,error:PI,complete:Qn};var _o=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Ut(t){return t}function Zf(...t){return Kf(t)}function Kf(t){return t.length===0?Ut:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var z=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=jI(e)?e:new Zn(e,i,r);return yo(()=>{let{operator:s,source:a}=this;o.add(s?s.call(o,a):a?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=Cb(i),new i((r,o)=>{let s=new Zn({next:a=>{try{e(a)}catch(l){o(l),s.unsubscribe()}},error:o,complete:r});this.subscribe(s)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[_o](){return this}pipe(...e){return Kf(e)(this)}toPromise(e){return e=Cb(e),new e((i,r)=>{let o;this.subscribe(s=>o=s,s=>r(s),()=>i(o))})}}return t.create=n=>new t(n),t})();function Cb(t){var n;return(n=t??fn.Promise)!==null&&n!==void 0?n:Promise}function VI(t){return t&&J(t.next)&&J(t.error)&&J(t.complete)}function jI(t){return t&&t instanceof vr||VI(t)&&Nl(t)}function BI(t){return J(t?.lift)}function ne(t){return n=>{if(BI(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function ie(t,n,e,i,r){return new Yf(t,n,e,i,r)}var Yf=class extends vr{constructor(n,e,i,r,o,s){super(n),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=e?function(a){try{e(a)}catch(l){n.error(l)}}:super._next,this._error=r?function(a){try{r(a)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){n.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var Ib=vo(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var M=(()=>{class t extends z{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new Pl(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new Ib}next(e){yo(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){yo(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){yo(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?$f:(this.currentObservers=null,o.push(e),new Fe(()=>{this.currentObservers=null,pr(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new z;return e.source=this,e}}return t.create=(n,e)=>new Pl(n,e),t})(),Pl=class extends M{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:$f}};var je=class extends M{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var As={now(){return(As.delegate||Date).now()},delegate:void 0};var Ll=class extends M{constructor(n=1/0,e=1/0,i=As){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:s}=this;e||(i.push(n),!r&&i.push(o.now()+s)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let s=0;s<o.length&&!n.closed;s+=i?1:2)n.next(o[s]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let s=e.now(),a=0;for(let l=1;l<i.length&&i[l]<=s;l+=2)a=l;a&&i.splice(0,a+1)}}};var Vl=class extends Fe{constructor(n,e){super()}schedule(n,e=0){return this}};var Rs={setInterval(t,n,...e){let{delegate:i}=Rs;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=Rs;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var jl=class extends Vl{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return Rs.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&Rs.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,pr(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var wo=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};wo.now=As.now;var Bl=class extends wo{constructor(n,e=wo.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var br=new Bl(jl),Sb=br;var Ke=new z(t=>t.complete());function Ul(t){return t&&J(t.schedule)}function Xf(t){return t[t.length-1]}function Hl(t){return J(Xf(t))?t.pop():void 0}function Nn(t){return Ul(Xf(t))?t.pop():void 0}function Mb(t,n){return typeof Xf(t)=="number"?t.pop():n}function kb(t,n,e,i){function r(o){return o instanceof e?o:new e(function(s){s(o)})}return new(e||(e=Promise))(function(o,s){function a(d){try{c(i.next(d))}catch(f){s(f)}}function l(d){try{c(i.throw(d))}catch(f){s(f)}}function c(d){d.done?o(d.value):r(d.value).then(a,l)}c((i=i.apply(t,n||[])).next())})}function Tb(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function yr(t){return this instanceof yr?(this.v=t,this):new yr(t)}function Ab(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r={},a("next"),a("throw"),a("return",s),r[Symbol.asyncIterator]=function(){return this},r;function s(m){return function(p){return Promise.resolve(p).then(m,f)}}function a(m,p){i[m]&&(r[m]=function(b){return new Promise(function(w,D){o.push([m,b,w,D])>1||l(m,b)})},p&&(r[m]=p(r[m])))}function l(m,p){try{c(i[m](p))}catch(b){h(o[0][3],b)}}function c(m){m.value instanceof yr?Promise.resolve(m.value.v).then(d,f):h(o[0][2],m)}function d(m){l("next",m)}function f(m){l("throw",m)}function h(m,p){m(p),o.shift(),o.length&&l(o[0][0],o[0][1])}}function Rb(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof Tb=="function"?Tb(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(s){return new Promise(function(a,l){s=t[o](s),r(a,l,s.done,s.value)})}}function r(o,s,a,l){Promise.resolve(l).then(function(c){o({value:c,done:a})},s)}}var zl=t=>t&&typeof t.length=="number"&&typeof t!="function";function $l(t){return J(t?.then)}function Gl(t){return J(t[_o])}function Wl(t){return Symbol.asyncIterator&&J(t?.[Symbol.asyncIterator])}function ql(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function UI(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Ql=UI();function Zl(t){return J(t?.[Ql])}function Kl(t){return Ab(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield yr(e.read());if(r)return yield yr(void 0);yield yield yr(i)}}finally{e.releaseLock()}})}function Yl(t){return J(t?.getReader)}function Ie(t){if(t instanceof z)return t;if(t!=null){if(Gl(t))return HI(t);if(zl(t))return zI(t);if($l(t))return $I(t);if(Wl(t))return Nb(t);if(Zl(t))return GI(t);if(Yl(t))return WI(t)}throw ql(t)}function HI(t){return new z(n=>{let e=t[_o]();if(J(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function zI(t){return new z(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function $I(t){return new z(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,Ol)})}function GI(t){return new z(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function Nb(t){return new z(n=>{qI(t,n).catch(e=>n.error(e))})}function WI(t){return Nb(Kl(t))}function qI(t,n){var e,i,r,o;return kb(this,void 0,void 0,function*(){try{for(e=Rb(t);i=yield e.next(),!i.done;){let s=i.value;if(n.next(s),n.closed)return}}catch(s){r={error:s}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function At(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function Xl(t,n=0){return ne((e,i)=>{e.subscribe(ie(i,r=>At(i,t,()=>i.next(r),n),()=>At(i,t,()=>i.complete(),n),r=>At(i,t,()=>i.error(r),n)))})}function Jl(t,n=0){return ne((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function Ob(t,n){return Ie(t).pipe(Jl(n),Xl(n))}function Fb(t,n){return Ie(t).pipe(Jl(n),Xl(n))}function Pb(t,n){return new z(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function Lb(t,n){return new z(e=>{let i;return At(e,n,()=>{i=t[Ql](),At(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(s){e.error(s);return}o?e.complete():e.next(r)},0,!0)}),()=>J(i?.return)&&i.return()})}function ec(t,n){if(!t)throw new Error("Iterable cannot be null");return new z(e=>{At(e,n,()=>{let i=t[Symbol.asyncIterator]();At(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function Vb(t,n){return ec(Kl(t),n)}function jb(t,n){if(t!=null){if(Gl(t))return Ob(t,n);if(zl(t))return Pb(t,n);if($l(t))return Fb(t,n);if(Wl(t))return ec(t,n);if(Zl(t))return Lb(t,n);if(Yl(t))return Vb(t,n)}throw ql(t)}function Ne(t,n){return n?jb(t,n):Ie(t)}function T(...t){let n=Nn(t);return Ne(t,n)}function Ns(t,n){let e=J(t)?t:()=>t,i=r=>r.error(e());return new z(n?r=>n.schedule(i,0,r):i)}function Os(t){return!!t&&(t instanceof z||J(t.lift)&&J(t.subscribe))}var _r=vo(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function Bb(t){return t instanceof Date&&!isNaN(t)}function j(t,n){return ne((e,i)=>{let r=0;e.subscribe(ie(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:QI}=Array;function ZI(t,n){return QI(n)?t(...n):t(n)}function tc(t){return j(n=>ZI(t,n))}var{isArray:KI}=Array,{getPrototypeOf:YI,prototype:XI,keys:JI}=Object;function nc(t){if(t.length===1){let n=t[0];if(KI(n))return{args:n,keys:null};if(eS(n)){let e=JI(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function eS(t){return t&&typeof t=="object"&&YI(t)===XI}function ic(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function Eo(...t){let n=Nn(t),e=Hl(t),{args:i,keys:r}=nc(t);if(i.length===0)return Ne([],n);let o=new z(tS(i,n,r?s=>ic(r,s):Ut));return e?o.pipe(tc(e)):o}function tS(t,n,e=Ut){return i=>{Ub(n,()=>{let{length:r}=t,o=new Array(r),s=r,a=r;for(let l=0;l<r;l++)Ub(n,()=>{let c=Ne(t[l],n),d=!1;c.subscribe(ie(i,f=>{o[l]=f,d||(d=!0,a--),a||i.next(e(o.slice()))},()=>{--s||i.complete()}))},i)},i)}}function Ub(t,n,e){t?At(e,t,n):n()}function Hb(t,n,e,i,r,o,s,a){let l=[],c=0,d=0,f=!1,h=()=>{f&&!l.length&&!c&&n.complete()},m=b=>c<i?p(b):l.push(b),p=b=>{o&&n.next(b),c++;let w=!1;Ie(e(b,d++)).subscribe(ie(n,D=>{r?.(D),o?m(D):n.next(D)},()=>{w=!0},void 0,()=>{if(w)try{for(c--;l.length&&c<i;){let D=l.shift();s?At(n,s,()=>p(D)):p(D)}h()}catch(D){n.error(D)}}))};return t.subscribe(ie(n,m,()=>{f=!0,h()})),()=>{a?.()}}function tt(t,n,e=1/0){return J(n)?tt((i,r)=>j((o,s)=>n(i,o,r,s))(Ie(t(i,r))),e):(typeof n=="number"&&(e=n),ne((i,r)=>Hb(i,r,t,e)))}function Ai(t=1/0){return tt(Ut,t)}function zb(){return Ai(1)}function Ri(...t){return zb()(Ne(t,Nn(t)))}function Fs(t){return new z(n=>{Ie(t()).subscribe(n)})}function Ps(...t){let n=Hl(t),{args:e,keys:i}=nc(t),r=new z(o=>{let{length:s}=e;if(!s){o.complete();return}let a=new Array(s),l=s,c=s;for(let d=0;d<s;d++){let f=!1;Ie(e[d]).subscribe(ie(o,h=>{f||(f=!0,c--),a[d]=h},()=>l--,void 0,()=>{(!l||!f)&&(c||o.next(i?ic(i,a):a),o.complete())}))}});return n?r.pipe(tc(n)):r}function wr(t=0,n,e=Sb){let i=-1;return n!=null&&(Ul(n)?e=n:i=n),new z(r=>{let o=Bb(t)?+t-e.now():t;o<0&&(o=0);let s=0;return e.schedule(function(){r.closed||(r.next(s++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function Ls(t=0,n=br){return t<0&&(t=0),wr(t,t,n)}function Er(...t){let n=Nn(t),e=Mb(t,1/0),i=t;return i.length?i.length===1?Ie(i[0]):Ai(e)(Ne(i,n)):Ke}var Kn=new z(Qn);function fe(t,n){return ne((e,i)=>{let r=0;e.subscribe(ie(i,o=>t.call(n,o,r++)&&i.next(o)))})}function $b(t){return ne((n,e)=>{let i=!1,r=null,o=null,s=!1,a=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let c=r;r=null,e.next(c)}s&&e.complete()},l=()=>{o=null,s&&e.complete()};n.subscribe(ie(e,c=>{i=!0,r=c,o||Ie(t(c)).subscribe(o=ie(e,a,l))},()=>{s=!0,(!i||!o||o.closed)&&e.complete()}))})}function rc(t,n=br){return $b(()=>wr(t,n))}function Ni(t){return ne((n,e)=>{let i=null,r=!1,o;i=n.subscribe(ie(e,void 0,void 0,s=>{o=Ie(t(s,Ni(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function Oi(t,n){return J(n)?tt(t,n,1):tt(t,1)}function Vs(t,n=br){return ne((e,i)=>{let r=null,o=null,s=null,a=()=>{if(r){r.unsubscribe(),r=null;let c=o;o=null,i.next(c)}};function l(){let c=s+t,d=n.now();if(d<c){r=this.schedule(void 0,c-d),i.add(r);return}a()}e.subscribe(ie(i,c=>{o=c,s=n.now(),r||(r=n.schedule(l,t),i.add(r))},()=>{a(),i.complete()},void 0,()=>{o=r=null}))})}function Gb(t){return ne((n,e)=>{let i=!1;n.subscribe(ie(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function We(t){return t<=0?()=>Ke:ne((n,e)=>{let i=0;n.subscribe(ie(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function Wb(){return ne((t,n)=>{t.subscribe(ie(n,Qn))})}function Yn(t){return j(()=>t)}function oc(t,n){return n?e=>Ri(n.pipe(We(1),Wb()),e.pipe(oc(t))):tt((e,i)=>Ie(t(e,i)).pipe(We(1),Yn(e)))}function Dr(t,n=Ut){return t=t??nS,ne((e,i)=>{let r,o=!0;e.subscribe(ie(i,s=>{let a=n(s);(o||!t(r,a))&&(o=!1,r=a,i.next(s))}))})}function nS(t,n){return t===n}function qb(t=iS){return ne((n,e)=>{let i=!1;n.subscribe(ie(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function iS(){return new _r}function xr(t){return ne((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function Xn(t,n){let e=arguments.length>=2;return i=>i.pipe(t?fe((r,o)=>t(r,o,i)):Ut,We(1),e?Gb(n):qb(()=>new _r))}function sc(t){return t<=0?()=>Ke:ne((n,e)=>{let i=[];n.subscribe(ie(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function ac(){return ne((t,n)=>{let e,i=!1;t.subscribe(ie(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function js(t={}){let{connector:n=()=>new M,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let s,a,l,c=0,d=!1,f=!1,h=()=>{a?.unsubscribe(),a=void 0},m=()=>{h(),s=l=void 0,d=f=!1},p=()=>{let b=s;m(),b?.unsubscribe()};return ne((b,w)=>{c++,!f&&!d&&h();let D=l=l??n();w.add(()=>{c--,c===0&&!f&&!d&&(a=Jf(p,r))}),D.subscribe(w),!s&&c>0&&(s=new Zn({next:U=>D.next(U),error:U=>{f=!0,h(),a=Jf(m,e,U),D.error(U)},complete:()=>{d=!0,h(),a=Jf(m,i),D.complete()}}),Ie(b).subscribe(s))})(o)}}function Jf(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new Zn({next:()=>{i.unsubscribe(),t()}});return Ie(n(...e)).subscribe(i)}function lc(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,js({connector:()=>new Ll(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function em(t){return fe((n,e)=>t<=e)}function Jn(...t){let n=Nn(t);return ne((e,i)=>{(n?Ri(t,e,n):Ri(t,e)).subscribe(i)})}function Ve(t,n){return ne((e,i)=>{let r=null,o=0,s=!1,a=()=>s&&!r&&i.complete();e.subscribe(ie(i,l=>{r?.unsubscribe();let c=0,d=o++;Ie(t(l,d)).subscribe(r=ie(i,f=>i.next(n?n(l,f,d,c++):f),()=>{r=null,a()}))},()=>{s=!0,a()}))})}function Pe(t){return ne((n,e)=>{Ie(t).subscribe(ie(e,()=>e.complete(),Qn)),!e.closed&&n.subscribe(e)})}function pt(t,n,e){let i=J(t)||n||e?{next:t,error:n,complete:e}:t;return i?ne((r,o)=>{var s;(s=i.subscribe)===null||s===void 0||s.call(i);let a=!0;r.subscribe(ie(o,l=>{var c;(c=i.next)===null||c===void 0||c.call(i,l),o.next(l)},()=>{var l;a=!1,(l=i.complete)===null||l===void 0||l.call(i),o.complete()},l=>{var c;a=!1,(c=i.error)===null||c===void 0||c.call(i,l),o.error(l)},()=>{var l,c;a&&((l=i.unsubscribe)===null||l===void 0||l.call(i)),(c=i.finalize)===null||c===void 0||c.call(i)}))}):Ut}var tm;function cc(){return tm}function On(t){let n=tm;return tm=t,n}var Qb=Symbol("NotFound");function Do(t){return t===Qb||t?.name==="\u0275NotFound"}function nm(t,n,e){let i=Object.create(rS);i.source=t,i.computation=n,e!=null&&(i.equal=e);let o=()=>{if(mr(i),Mi(i),i.value===Rn)throw i.error;return i.value};return o[Ze]=i,Ss(i),o}function Zb(t,n){mr(t),hr(t,n),ho(t)}function Kb(t,n){if(mr(t),t.value===Rn)throw t.error;Al(t,n),ho(t)}var rS=Y(v({},Si),{value:ur,dirty:!0,error:null,equal:Ms,kind:"linkedSignal",producerMustRecompute(t){return t.value===ur||t.value===fr},producerRecomputeValue(t){if(t.value===fr)throw new Error("");let n=t.value;t.value=fr;let e=qn(t),i,r=!1;try{let o=t.source(),s=n!==ur&&n!==Rn,a=s?{source:t.sourceValue,value:n}:void 0;i=t.computation(o,a),t.sourceValue=o,F(null),r=s&&i!==Rn&&t.equal(n,i)}catch(o){i=Rn,t.error=o}finally{Ti(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function Yb(t){let n=F(null);try{return t()}finally{F(n)}}var vc="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",g=class extends Error{code;constructor(n,e){super(Ht(n,e)),this.code=n}};function oS(t){return`NG0${Math.abs(t)}`}function Ht(t,n){return`${oS(t)}${n?": "+n:""}`}var Et=globalThis;function De(t){for(let n in t)if(t[n]===De)return n;throw Error("")}function ny(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function qs(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(qs).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function bc(t,n){return t?n?`${t} ${n}`:t:n||""}var sS=De({__forward_ref__:De});function at(t){return t.__forward_ref__=at,t}function ut(t){return pm(t)?t():t}function pm(t){return typeof t=="function"&&t.hasOwnProperty(sS)&&t.__forward_ref__===at}function _(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function P(t){return{providers:t.providers||[],imports:t.imports||[]}}function Qs(t){return aS(t,yc)}function gm(t){return Qs(t)!==null}function aS(t,n){return t.hasOwnProperty(n)&&t[n]||null}function lS(t){let n=t?.[yc]??null;return n||null}function rm(t){return t&&t.hasOwnProperty(fc)?t[fc]:null}var yc=De({\u0275prov:De}),fc=De({\u0275inj:De}),y=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=_({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function vm(t){return t&&!!t.\u0275providers}var Zs=De({\u0275cmp:De}),Ks=De({\u0275dir:De}),bm=De({\u0275pipe:De}),ym=De({\u0275mod:De}),Us=De({\u0275fac:De}),Tr=De({__NG_ELEMENT_ID__:De}),Xb=De({__NG_ENV_ID__:De});function _m(t){return _c(t,"@NgModule"),t[ym]||null}function Pn(t){return _c(t,"@Component"),t[Zs]||null}function wm(t){return _c(t,"@Directive"),t[Ks]||null}function iy(t){return _c(t,"@Pipe"),t[bm]||null}function _c(t,n){if(t==null)throw new g(-919,!1)}function Co(t){return typeof t=="string"?t:t==null?"":String(t)}var ry=De({ngErrorCode:De}),cS=De({ngErrorMessage:De}),dS=De({ngTokenPath:De});function Em(t,n){return oy("",-200,n)}function wc(t,n){throw new g(-201,!1)}function oy(t,n,e){let i=new g(n,t);return i[ry]=n,i[cS]=t,e&&(i[dS]=e),i}function uS(t){return t[ry]}var om;function sy(){return om}function _t(t){let n=om;return om=t,n}function Dm(t,n,e){let i=Qs(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;wc(t,"")}var fS={},Cr=fS,mS="__NG_DI_FLAG__",sm=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=Ir(e)||0;try{return this.injector.get(n,i&8?null:Cr,i)}catch(r){if(Do(r))return r;throw r}}};function hS(t,n=0){let e=cc();if(e===void 0)throw new g(-203,!1);if(e===null)return Dm(t,void 0,n);{let i=pS(n),r=e.retrieve(t,i);if(Do(r)){if(i.optional)return null;throw r}return r}}function C(t,n=0){return(sy()||hS)(ut(t),n)}function u(t,n){return C(t,Ir(n))}function Ir(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function pS(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function am(t){let n=[];for(let e=0;e<t.length;e++){let i=ut(t[e]);if(Array.isArray(i)){if(i.length===0)throw new g(900,!1);let r,o=0;for(let s=0;s<i.length;s++){let a=i[s],l=gS(a);typeof l=="number"?l===-1?r=a.token:o|=l:r=a}n.push(C(r,o))}else n.push(C(i))}return n}function gS(t){return t[mS]}function Pi(t,n){let e=t.hasOwnProperty(Us);return e?t[Us]:null}function ay(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function ly(t){return t.flat(Number.POSITIVE_INFINITY)}function Ec(t,n){t.forEach(e=>Array.isArray(e)?Ec(e,n):n(e))}function xm(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function Ys(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function cy(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function dy(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function Dc(t,n,e){let i=Io(t,n);return i>=0?t[i|1]=e:(i=~i,dy(t,i,n,e)),i}function xc(t,n){let e=Io(t,n);if(e>=0)return t[e|1]}function Io(t,n){return vS(t,n,1)}function vS(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),s=t[o<<e];if(n===s)return o<<e;s>n?r=o:i=o+1}return~(r<<e)}var ji={},gt=[],kr=new y(""),Cm=new y("",-1),Im=new y(""),Hs=class{get(n,e=Cr){if(e===Cr){let r=oy("",-201);throw r.name="\u0275NotFound",r}return e}};function Bi(t){return{\u0275providers:t}}function Cc(...t){return{\u0275providers:Sm(!0,t),\u0275fromNgModule:!0}}function Sm(t,...n){let e=[],i=new Set,r,o=s=>{e.push(s)};return Ec(n,s=>{let a=s;mc(a,o,[],i)&&(r||=[],r.push(a))}),r!==void 0&&uy(r,o),e}function uy(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];Mm(r,o=>{n(o,i)})}}function mc(t,n,e,i){if(t=ut(t),!t)return!1;let r=null,o=rm(t),s=!o&&Pn(t);if(!o&&!s){let l=t.ngModule;if(o=rm(l),o)r=l;else return!1}else{if(s&&!s.standalone)return!1;r=t}let a=i.has(r);if(s){if(a)return!1;if(i.add(r),s.dependencies){let l=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let c of l)mc(c,n,e,i)}}else if(o){if(o.imports!=null&&!a){i.add(r);let c;Ec(o.imports,d=>{mc(d,n,e,i)&&(c||=[],c.push(d))}),c!==void 0&&uy(c,n)}if(!a){let c=Pi(r)||(()=>new r);n({provide:r,useFactory:c,deps:gt},r),n({provide:Im,useValue:r,multi:!0},r),n({provide:kr,useValue:()=>C(r),multi:!0},r)}let l=o.providers;if(l!=null&&!a){let c=t;Mm(l,d=>{n(d,c)})}}else return!1;return r!==t&&t.providers!==void 0}function Mm(t,n){for(let e of t)vm(e)&&(e=e.\u0275providers),Array.isArray(e)?Mm(e,n):n(e)}var bS=De({provide:String,useValue:De});function fy(t){return t!==null&&typeof t=="object"&&bS in t}function yS(t){return!!(t&&t.useExisting)}function _S(t){return!!(t&&t.useFactory)}function Sr(t){return typeof t=="function"}function my(t){return!!t.useClass}var Xs=new y(""),dc={},Jb={},im;function So(){return im===void 0&&(im=new Hs),im}var Le=class{},Mr=class extends Le{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,cm(n,s=>this.processProvider(s)),this.records.set(Cm,xo(void 0,this)),r.has("environment")&&this.records.set(Le,xo(void 0,this));let o=this.records.get(Xs);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Im,gt,{self:!0}))}retrieve(n,e){let i=Ir(e)||0;try{return this.get(n,Cr,i)}catch(r){if(Do(r))return r;throw r}}destroy(){Bs(this),this._destroyed=!0;let n=F(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),F(n)}}onDestroy(n){return Bs(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){Bs(this);let e=On(this),i=_t(void 0),r;try{return n()}finally{On(e),_t(i)}}get(n,e=Cr,i){if(Bs(this),n.hasOwnProperty(Xb))return n[Xb](this);let r=Ir(i),o,s=On(this),a=_t(void 0);try{if(!(r&4)){let c=this.records.get(n);if(c===void 0){let d=CS(n)&&Qs(n);d&&this.injectableDefInScope(d)?c=xo(lm(n),dc):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,r)}let l=r&2?So():this.parent;return e=r&8&&e===Cr?null:e,l.get(n,e)}catch(l){let c=uS(l);throw c===-200||c===-201?new g(c,null):l}finally{_t(a),On(s)}}resolveInjectorInitializers(){let n=F(null),e=On(this),i=_t(void 0),r;try{let o=this.get(kr,gt,{self:!0});for(let s of o)s()}finally{On(e),_t(i),F(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=ut(n);let e=Sr(n)?n:ut(n&&n.provide),i=ES(n);if(!Sr(n)&&n.multi===!0){let r=this.records.get(e);r||(r=xo(void 0,dc,!0),r.factory=()=>am(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=F(null);try{if(e.value===Jb)throw Em("");return e.value===dc&&(e.value=Jb,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&xS(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{F(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=ut(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function lm(t){let n=Qs(t),e=n!==null?n.factory:Pi(t);if(e!==null)return e;if(t instanceof y)throw new g(-204,!1);if(t instanceof Function)return wS(t);throw new g(-204,!1)}function wS(t){if(t.length>0)throw new g(-204,!1);let e=lS(t);return e!==null?()=>e.factory(t):()=>new t}function ES(t){if(fy(t))return xo(void 0,t.useValue);{let n=Tm(t);return xo(n,dc)}}function Tm(t,n,e){let i;if(Sr(t)){let r=ut(t);return Pi(r)||lm(r)}else if(fy(t))i=()=>ut(t.useValue);else if(_S(t))i=()=>t.useFactory(...am(t.deps||[]));else if(yS(t))i=(r,o)=>C(ut(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=ut(t&&(t.useClass||t.provide));if(DS(t))i=()=>new r(...am(t.deps));else return Pi(r)||lm(r)}return i}function Bs(t){if(t.destroyed)throw new g(-205,!1)}function xo(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function DS(t){return!!t.deps}function xS(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function CS(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function cm(t,n){for(let e of t)Array.isArray(e)?cm(e,n):e&&vm(e)?cm(e.\u0275providers,n):n(e)}function it(t,n){let e;t instanceof Mr?(Bs(t),e=t):e=new sm(t);let i,r=On(e),o=_t(void 0);try{return n()}finally{On(r),_t(o)}}function km(){return sy()!==void 0||cc()!=null}var mn=0,B=1,q=2,nt=3,en=4,Dt=5,Ar=6,Mo=7,Ye=8,ti=9,hn=10,Oe=11,To=12,Am=13,Rr=14,xt=15,Ui=16,Nr=17,Ln=18,ni=19,Rm=20,ei=21,Ic=22,Li=23,zt=24,Or=25,Hi=26,$e=27,hy=1,Nm=6,zi=7,Js=8,Fr=9,qe=10;function ii(t){return Array.isArray(t)&&typeof t[hy]=="object"}function pn(t){return Array.isArray(t)&&t[hy]===!0}function Om(t){return(t.flags&4)!==0}function ri(t){return t.componentOffset>-1}function ea(t){return(t.flags&1)===1}function Vn(t){return!!t.template}function ko(t){return(t[q]&512)!==0}function Pr(t){return(t[q]&256)===256}var Se=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t[t.ATTRIBUTE_NO_BINDING=6]="ATTRIBUTE_NO_BINDING",t})(Se||{}),uc,zs="svg",Fm="math";function py(){return uc||(uc={},Fi(Se.HTML,void 0,[["iframe",["srcdoc"]],["*",["innerHTML","outerHTML"]]]),Fi(Se.STYLE,void 0,[["*",["style"]]]),Fi(Se.URL,void 0,[["*",["formAction"]],["area",["href"]],["a",["href","xlink:href"]],["form",["action"]],["img",["src"]],["video",["src"]]]),Fi(Se.URL,Fm,[["*",["href","xlink:href"]],["annotation",["href","xlink:href"]],["annotation-xml",["href","xlink:href"]],["maction",["href","xlink:href"]],["malignmark",["href","xlink:href"]],["math",["href","xlink:href"]],["mroot",["href","xlink:href"]],["msqrt",["href","xlink:href"]],["merror",["href","xlink:href"]],["mfrac",["href","xlink:href"]],["mglyph",["href","xlink:href"]],["msub",["href","xlink:href"]],["msup",["href","xlink:href"]],["msubsup",["href","xlink:href"]],["mmultiscripts",["href","xlink:href"]],["mprescripts",["href","xlink:href"]],["mi",["href","xlink:href"]],["mn",["href","xlink:href"]],["mo",["href","xlink:href"]],["mpadded",["href","xlink:href"]],["mphantom",["href","xlink:href"]],["mrow",["href","xlink:href"]],["ms",["href","xlink:href"]],["mspace",["href","xlink:href"]],["mstyle",["href","xlink:href"]],["mtable",["href","xlink:href"]],["mtd",["href","xlink:href"]],["mtr",["href","xlink:href"]],["mtext",["href","xlink:href"]],["mover",["href","xlink:href"]],["munder",["href","xlink:href"]],["munderover",["href","xlink:href"]],["semantics",["href","xlink:href"]],["none",["href","xlink:href"]]]),Fi(Se.RESOURCE_URL,void 0,[["base",["href"]],["embed",["src"]],["frame",["src"]],["iframe",["src"]],["link",["href"]],["object",["codebase","data"]]]),Fi(Se.URL,zs,[["a",["href","xlink:href"]]]),Fi(Se.ATTRIBUTE_NO_BINDING,zs,[["animate",["attributeName","values","to","from"]],["set",["to","attributeName"]],["animateMotion",["attributeName"]],["animateTransform",["attributeName"]]]),Fi(Se.ATTRIBUTE_NO_BINDING,void 0,[["unknown",["attributeName","values","to","from","sandbox","allow","allowFullscreen","referrerPolicy","csp","fetchPriority"]],["iframe",["sandbox","allow","allowFullscreen","referrerPolicy","csp","fetchPriority"]]])),uc}function Fi(t,n,e){for(let[i,r]of e){let o=n&&i!=="unknown"?`:${n}:${i}`:i;o=o.toLowerCase();for(let s of r)uc[`${o}|${s.toLowerCase()}`]=t}}function gy(t,n,e){let i=py(),r=t.toLowerCase(),o=n.toLowerCase(),s=e&&r!=="*"&&r!=="unknown"?i[`:${e}:${r}|${o}`]:void 0,a=e?i[`:${e}:*|${o}`]:void 0;return s??a??i[`${r}|${o}`]??i[`*|${o}`]??Se.NONE}function tn(t){for(;Array.isArray(t);)t=t[mn];return t}function Pm(t,n){return tn(n[t])}function nn(t,n){return tn(n[t.index])}function Sc(t,n){return t.data[n]}function Lm(t,n){return t[n]}function Vm(t,n,e,i){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=i}function rn(t,n){let e=n[t];return ii(e)?e:e[mn]}function vy(t){return(t[q]&4)===4}function Mc(t){return(t[q]&128)===128}function by(t){return pn(t[nt])}function on(t,n){return n==null?null:t[n]}function jm(t){t[Nr]=0}function Bm(t){t[q]&1024||(t[q]|=1024,Mc(t)&&Lr(t))}function yy(t,n){for(;t>0;)n=n[Rr],t--;return n}function ta(t){return!!(t[q]&9216||t[zt]?.dirty)}function Tc(t){t[hn].changeDetectionScheduler?.notify(8),t[q]&64&&(t[q]|=1024),ta(t)&&Lr(t)}function Lr(t){t[hn].changeDetectionScheduler?.notify(0);let n=Vi(t);for(;n!==null&&!(n[q]&8192||(n[q]|=8192,!Mc(n)));)n=Vi(n)}function Um(t,n){if(Pr(t))throw new g(911,!1);t[ei]===null&&(t[ei]=[]),t[ei].push(n)}function _y(t,n){if(t[ei]===null)return;let e=t[ei].indexOf(n);e!==-1&&t[ei].splice(e,1)}function Vi(t){let n=t[nt];return pn(n)?n[nt]:n}function Hm(t){return t[Mo]??=[]}function zm(t){return t.cleanup??=[]}function wy(t,n,e,i){let r=Hm(n);r.push(e),t.firstCreatePass&&zm(t).push(i,r.length-1)}var re={lFrame:Oy(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var dm=!1;function Ey(){return re.lFrame.elementDepthCount}function Dy(){re.lFrame.elementDepthCount++}function $m(){re.lFrame.elementDepthCount--}function Gm(){return re.bindingsEnabled}function Wm(){return re.skipHydrationRootTNode!==null}function qm(t){return re.skipHydrationRootTNode===t}function Qm(){re.skipHydrationRootTNode=null}function G(){return re.lFrame.lView}function Be(){return re.lFrame.tView}function Rt(t){return re.lFrame.contextLView=t,t[Ye]}function Nt(t){return re.lFrame.contextLView=null,t}function lt(){let t=Zm();for(;t!==null&&t.type===64;)t=t.parent;return t}function Zm(){return re.lFrame.currentTNode}function xy(){let t=re.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function Ao(t,n){let e=re.lFrame;e.currentTNode=t,e.isParent=n}function Km(){return re.lFrame.isParent}function Ym(){re.lFrame.isParent=!1}function Cy(){return re.lFrame.contextLView}function Xm(){return dm}function $s(t){let n=dm;return dm=t,n}function Iy(){let t=re.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function Sy(){return re.lFrame.bindingIndex}function My(t){return re.lFrame.bindingIndex=t}function $i(){return re.lFrame.bindingIndex++}function kc(t){let n=re.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function Ty(){return re.lFrame.inI18n}function ky(t,n){let e=re.lFrame;e.bindingIndex=e.bindingRootIndex=t,Ac(n)}function Ay(){return re.lFrame.currentDirectiveIndex}function Ac(t){re.lFrame.currentDirectiveIndex=t}function Ry(t){let n=re.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function Rc(){return re.lFrame.currentQueryIndex}function na(t){re.lFrame.currentQueryIndex=t}function IS(t){let n=t[B];return n.type===2?n.declTNode:n.type===1?t[Dt]:null}function Jm(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=IS(o),r===null||(o=o[Rr],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=re.lFrame=Ny();return i.currentTNode=n,i.lView=t,!0}function Nc(t){let n=Ny(),e=t[B];re.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function Ny(){let t=re.lFrame,n=t===null?null:t.child;return n===null?Oy(t):n}function Oy(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function Fy(){let t=re.lFrame;return re.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var eh=Fy;function Oc(){let t=Fy();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function Py(t){return(re.lFrame.contextLView=yy(t,re.lFrame.contextLView))[Ye]}function gn(){return re.lFrame.selectedIndex}function Gi(t){re.lFrame.selectedIndex=t}function Ro(){let t=re.lFrame;return Sc(t.tView,t.selectedIndex)}function ia(){re.lFrame.currentNamespace=zs}function th(){return re.lFrame.currentNamespace}var Ly=!0;function Fc(){return Ly}function Pc(t){Ly=t}function um(t,n=null,e=null,i){let r=nh(t,n,e,i);return r.resolveInjectorInitializers(),r}function nh(t,n=null,e=null,i,r=new Set){let o=[e||gt,Cc(t)],s;return new Mr(o,n||So(),s||null,r)}var de=class t{static THROW_IF_NOT_FOUND=Cr;static NULL=new Hs;static create(n,e){if(Array.isArray(n))return um({name:""},e,n,"");{let i=n.name??"";return um({name:i},n.parent,n.providers,i)}}static \u0275prov=_({token:t,providedIn:"any",factory:()=>C(Cm)});static __NG_ELEMENT_ID__=-1},K=new y(""),vt=(()=>{class t{static __NG_ELEMENT_ID__=SS;static __NG_ENV_ID__=e=>e}return t})(),hc=class extends vt{_lView;constructor(n){super(),this._lView=n}get destroyed(){return Pr(this._lView)}onDestroy(n){let e=this._lView;return Um(e,n),()=>_y(e,n)}};function SS(){return new hc(G())}var Vy=!1,jy=new y(""),oi=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new je(!1);debugTaskTracker=u(jy,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new z(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=_({token:t,providedIn:"root",factory:()=>new t})}return t})(),fm=class extends M{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,km()&&(this.destroyRef=u(vt,{optional:!0})??void 0,this.pendingTasks=u(oi,{optional:!0})??void 0)}emit(n){let e=F(null);try{super.next(n)}finally{F(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),s=i;if(n&&typeof n=="object"){let l=n;r=l.next?.bind(l),o=l.error?.bind(l),s=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:r,error:o,complete:s});return n instanceof Fe&&n.add(a),a}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},ee=fm;function pc(...t){}function ih(t){let n,e;function i(){t=pc;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch(r){}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function By(t){return queueMicrotask(()=>t()),()=>{t=pc}}var rh="isAngularZone",Gs=rh+"_ID",MS=0,R=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new ee(!1);onMicrotaskEmpty=new ee(!1);onStable=new ee(!1);onError=new ee(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=Vy}=n;if(typeof Zone>"u")throw new g(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!r&&i,s.shouldCoalesceRunChangeDetection=r,s.callbackScheduled=!1,s.scheduleInRootZone=o,AS(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(rh)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new g(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new g(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+r,n,TS,pc,pc);try{return o.runTask(s,e,i)}finally{o.cancelTask(s)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},TS={};function oh(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function kS(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){ih(()=>{t.callbackScheduled=!1,mm(t),t.isCheckStableRunning=!0,oh(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),mm(t)}function AS(t){let n=()=>{kS(t)},e=MS++;t._inner=t._inner.fork({name:"angular",properties:{[rh]:!0,[Gs]:e,[Gs+e]:!0},onInvokeTask:(i,r,o,s,a,l)=>{if(RS(l))return i.invokeTask(o,s,a,l);try{return ey(t),i.invokeTask(o,s,a,l)}finally{(t.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),ty(t)}},onInvoke:(i,r,o,s,a,l,c)=>{try{return ey(t),i.invoke(o,s,a,l,c)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!NS(l)&&n(),ty(t)}},onHasTask:(i,r,o,s)=>{i.hasTask(o,s),r===o&&(s.change=="microTask"?(t._hasPendingMicrotasks=s.microTask,mm(t),oh(t)):s.change=="macroTask"&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(i,r,o,s)=>(i.handleError(o,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}function mm(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function ey(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function ty(t){t._nesting--,oh(t)}var Ws=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new ee;onMicrotaskEmpty=new ee;onStable=new ee;onError=new ee;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function RS(t){return Uy(t,"__ignore_ng_zone__")}function NS(t){return Uy(t,"__scheduler_tick__")}function Uy(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var wt=class{_console=console;handleError(n){this._console.error("ERROR",n)}},$t=new y("",{factory:()=>{let t=u(R),n=u(Le),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(wt),e.handleError(i))})}}}),Hy={provide:kr,useValue:()=>{let t=u(wt,{optional:!0})},multi:!0};function oe(t,n){let[e,i,r]=Uf(t,n?.equal),o=e,s=o[Ze];return o.set=i,o.update=r,o.asReadonly=Lc.bind(o),o}function Lc(){let t=this[Ze];if(t.readonlyFn===void 0){let n=()=>this();n[Ze]=t,t.readonlyFn=n}return t.readonlyFn}var No=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=OS}return t})();function OS(){return new No(G(),lt())}var Fn=class{},ra=new y("",{factory:()=>!0});var sh=new y(""),oa=(()=>{class t{internalPendingTasks=u(oi);scheduler=u(Fn);errorHandler=u($t);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=_({token:t,providedIn:"root",factory:()=>new t})}return t})(),Vc=(()=>{class t{static \u0275prov=_({token:t,providedIn:"root",factory:()=>new hm})}return t})(),hm=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},gc=class{[Ze];constructor(n){this[Ze]=n}destroy(){this[Ze].destroy()}};function Vr(t,n){let e=n?.injector??u(de),i=n?.manualCleanup!==!0?e.get(vt):null,r,o=e.get(No,null,{optional:!0}),s=e.get(Fn);return o!==null?(r=LS(o.view,s,t),i instanceof hc&&i._lView===o.view&&(i=null)):r=VS(t,e.get(Vc),s),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new gc(r)}var zy=Y(v({},Hf),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=$s(!1);try{zf(this)}finally{$s(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=F(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],F(t)}}}),FS=Y(v({},zy),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(ki(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),PS=Y(v({},zy),{consumerMarkedDirty(){this.view[q]|=8192,Lr(this.view),this.notifier.notify(13)},destroy(){if(ki(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[Li]?.delete(this)}});function LS(t,n,e){let i=Object.create(PS);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=$y(i,e),t[Li]??=new Set,t[Li].add(i),i.consumerMarkedDirty(i),i}function VS(t,n,e){let i=Object.create(FS);return i.fn=$y(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function $y(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function ga(t){return{toString:t}.toString()}function GS(t){return typeof t=="function"}function C_(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var Qc=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},Qe=(()=>{let t=()=>I_;return t.ngInherit=!0,t})();function I_(t){return t.type.prototype.ngOnChanges&&(t.setInput=qS),WS}function WS(){let t=M_(this),n=t?.current;if(n){let e=t.previous;if(e===ji)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function qS(t,n,e,i,r){let o=this.declaredInputs[i],s=M_(t)||QS(t,{previous:ji,current:null}),a=s.current||(s.current={}),l=s.previous,c=l[o];a[o]=new Qc(c&&c.currentValue,e,l===ji),C_(t,n,r,e)}var S_="__ngSimpleChanges__";function M_(t){return t[S_]||null}function QS(t,n){return t[S_]=n}var Gy=[];var xe=function(t,n=null,e){for(let i=0;i<Gy.length;i++){let r=Gy[i];r(t,n,e)}},pe=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(pe||{});function ZS(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let s=I_(n);(e.preOrderHooks??=[]).push(t,s),(e.preOrderCheckHooks??=[]).push(t,s)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function T_(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:d}=o;s&&(t.contentHooks??=[]).push(-e,s),a&&((t.contentHooks??=[]).push(e,a),(t.contentCheckHooks??=[]).push(e,a)),l&&(t.viewHooks??=[]).push(-e,l),c&&((t.viewHooks??=[]).push(e,c),(t.viewCheckHooks??=[]).push(e,c)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function zc(t,n,e){k_(t,n,3,e)}function $c(t,n,e,i){(t[q]&3)===e&&k_(t,n,e,i)}function ah(t,n){let e=t[q];(e&3)===n&&(e&=16383,e+=1,t[q]=e)}function k_(t,n,e,i){let r=i!==void 0?t[Nr]&65535:0,o=i??-1,s=n.length-1,a=0;for(let l=r;l<s;l++)if(typeof n[l+1]=="number"){if(a=n[l],i!=null&&a>=i)break}else n[l]<0&&(t[Nr]+=65536),(a<o||o==-1)&&(KS(t,e,n,l),t[Nr]=(t[Nr]&4294901760)+l+2),l++}function Wy(t,n){xe(pe.LifecycleHookStart,t,n);let e=F(null);try{n.call(t)}finally{F(e),xe(pe.LifecycleHookEnd,t,n)}}function KS(t,n,e,i){let r=e[i]<0,o=e[i+1],s=r?-e[i]:e[i],a=t[s];r?t[q]>>14<t[Nr]>>16&&(t[q]&3)===n&&(t[q]+=16384,Wy(a,o)):Wy(a,o)}var Fo=-1,Br=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function YS(t){return(t.flags&8)!==0}function XS(t){return(t.flags&16)!==0}function JS(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],s=e[i++],a=e[i++];t.setAttribute(n,s,a,o)}else{let o=r,s=e[++i];eM(o)?t.setProperty(n,o,s):t.setAttribute(n,o,s),i++}}return i}function A_(t){return t===3||t===4||t===6}function eM(t){return t.charCodeAt(0)===64}function Po(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?qy(t,e,r,null,n[++i]):qy(t,e,r,null,null))}}return t}function qy(t,n,e,i,r){let o=0,s=t.length;if(n===-1)s=-1;else for(;o<t.length;){let a=t[o++];if(typeof a=="number"){if(a===n){s=-1;break}else if(a>n){s=o-1;break}}}for(;o<t.length;){let a=t[o];if(typeof a=="number")break;if(a===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}s!==-1&&(t.splice(s,0,n),o=s+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function R_(t){return t!==Fo}function Zc(t){return t&32767}function tM(t){return t>>16}function Kc(t,n){let e=tM(t),i=n;for(;e>0;)i=i[Rr],e--;return i}var vh=!0;function Yc(t){let n=vh;return vh=t,n}var nM=256,N_=nM-1,O_=5,iM=0,jn={};function rM(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(Tr)&&(i=e[Tr]),i==null&&(i=e[Tr]=iM++);let r=i&N_,o=1<<r;n.data[t+(r>>O_)]|=o}function Xc(t,n){let e=F_(t,n);if(e!==-1)return e;let i=n[B];i.firstCreatePass&&(t.injectorIndex=n.length,lh(i.data,t),lh(n,null),lh(i.blueprint,null));let r=Jh(t,n),o=t.injectorIndex;if(R_(r)){let s=Zc(r),a=Kc(r,n),l=a[B].data;for(let c=0;c<8;c++)n[o+c]=a[s+c]|l[s+c]}return n[o+8]=r,o}function lh(t,n){t.push(0,0,0,0,0,0,0,0,n)}function F_(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Jh(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=B_(r),i===null)return Fo;if(e++,r=r[Rr],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return Fo}function bh(t,n,e){rM(t,n,e)}function oM(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(A_(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function P_(t,n,e){if(e&8||t!==void 0)return t;wc(n,"NodeInjector")}function L_(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[ti],o=_t(void 0);try{return r?r.get(n,i,e&8):Dm(n,i,e&8)}finally{_t(o)}}return P_(i,n,e)}function V_(t,n,e,i=0,r){if(t!==null){if(n[q]&2048&&!(i&2)){let s=cM(t,n,e,i,jn);if(s!==jn)return s}let o=j_(t,n,e,i,jn);if(o!==jn)return o}return L_(n,e,i,r)}function j_(t,n,e,i,r){let o=aM(e);if(typeof o=="function"){if(!Jm(n,t,i))return i&1?P_(r,e,i):L_(n,e,i,r);try{let s;if(s=o(i),s==null&&!(i&8))wc(e);else return s}finally{eh()}}else if(typeof o=="number"){let s=null,a=F_(t,n),l=Fo,c=i&1?n[xt][Dt]:null;for((a===-1||i&4)&&(l=a===-1?Jh(t,n):n[a+8],l===Fo||!Zy(i,!1)?a=-1:(s=n[B],a=Zc(l),n=Kc(l,n)));a!==-1;){let d=n[B];if(Qy(o,a,d.data)){let f=sM(a,n,e,s,i,c);if(f!==jn)return f}l=n[a+8],l!==Fo&&Zy(i,n[B].data[a+8]===c)&&Qy(o,a,n)?(s=d,a=Zc(l),n=Kc(l,n)):a=-1}}return r}function sM(t,n,e,i,r,o){let s=n[B],a=s.data[t+8],l=i==null?ri(a)&&vh:i!=s&&(a.type&3)!==0,c=r&1&&o===a,d=Gc(a,s,e,l,c);return d!==null?ca(n,s,d,a,r):jn}function Gc(t,n,e,i,r){let o=t.providerIndexes,s=n.data,a=o&1048575,l=t.directiveStart,c=t.directiveEnd,d=o>>20,f=i?a:a+d,h=r?a+d:c;for(let m=f;m<h;m++){let p=s[m];if(m<l&&e===p||m>=l&&p.type===e)return m}if(r){let m=s[l];if(m&&Vn(m)&&m.type===e)return l}return null}function ca(t,n,e,i,r){let o=t[e],s=n.data;if(o instanceof Br){let a=o;if(a.resolving)throw Em("");let l=Yc(a.canSeeViewProviders);a.resolving=!0;let c=s[e].type||s[e],d,f=a.injectImpl?_t(a.injectImpl):null,h=Jm(t,i,0);try{o=t[e]=a.factory(void 0,r,s,t,i),n.firstCreatePass&&e>=i.directiveStart&&ZS(e,s[e],n)}finally{f!==null&&_t(f),Yc(l),a.resolving=!1,eh()}}return o}function aM(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(Tr)?t[Tr]:void 0;return typeof n=="number"?n>=0?n&N_:lM:n}function Qy(t,n,e){let i=1<<t;return!!(e[n+(t>>O_)]&i)}function Zy(t,n){return!(t&2)&&!(t&1&&n)}var jr=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return V_(this._tNode,this._lView,n,Ir(i),e)}};function lM(){return new jr(lt(),G())}function Je(t){return ga(()=>{let n=t.prototype.constructor,e=n[Us]||yh(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[Us]||yh(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function yh(t){return pm(t)?()=>{let n=yh(ut(t));return n&&n()}:Pi(t)}function cM(t,n,e,i,r){let o=t,s=n;for(;o!==null&&s!==null&&s[q]&2048&&!ko(s);){let a=j_(o,s,e,i|2,jn);if(a!==jn)return a;let l=o.parent;if(!l){let c=s[Rm];if(c){let d=c.get(e,jn,i&-5);if(d!==jn)return d}l=B_(s),s=s[Rr]}o=l}return r}function B_(t){let n=t[B],e=n.type;return e===2?n.declTNode:e===1?t[Dt]:null}function va(t){return oM(lt(),t)}function dM(){return Uo(lt(),G())}function Uo(t,n){return new W(nn(t,n))}var W=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=dM}return t})();function U_(t){return t instanceof W?t.nativeElement:t}function uM(){return this._results[Symbol.iterator]()}var Lo=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new M}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=ly(n);(this._changesDetected=!ay(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=uM};function H_(t){return(t.flags&128)===128}var ep=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(ep||{}),z_=new Map,fM=0;function mM(){return fM++}function hM(t){z_.set(t[ni],t)}function _h(t){z_.delete(t[ni])}var Ky="__ngContext__";function Vo(t,n){ii(n)?(t[Ky]=n[ni],hM(n)):t[Ky]=n}function $_(t){return W_(t[To])}function G_(t){return W_(t[en])}function W_(t){for(;t!==null&&!pn(t);)t=t[en];return t}var pM;function tp(t){pM=t}var Ho=new y("",{factory:()=>gM}),gM="ng";var ud=new y(""),Gr=new y("",{providedIn:"platform",factory:()=>"unknown"}),zo=new y(""),Wr=new y("",{factory:()=>u(K).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var q_="r";var Q_="di";var np=new y(""),Z_=!1,K_=new y("",{factory:()=>Z_});var fd=new y("");var Yy=new WeakMap;function vM(t,n){if(t==null||typeof t!="object")return;let e=Yy.get(t);e||(e=new WeakSet,Yy.set(t,e)),e.add(n)}var bM=(t,n,e,i)=>{};function yM(t,n,e,i){bM(t,n,e,i)}function md(t){return(t.flags&32)===32}var _M=()=>null;function Y_(t,n,e=!1){return _M(t,n,e)}function X_(t,n){let e=t.contentQueries;if(e!==null){let i=F(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],s=e[r+1];if(s!==-1){let a=t.data[s];na(o),a.contentQueries(2,n[s],s)}}}finally{F(i)}}}function wh(t,n,e){na(0);let i=F(null);try{n(t,e)}finally{F(i)}}function J_(t,n,e){if(Om(n)){let i=F(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let s=r;s<o;s++){let a=t.data[s];if(a.contentQueries){let l=e[s];a.contentQueries(1,l,s)}}}finally{F(i)}}}var yn=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(yn||{});var wM="svg",EM="math",DM={"http://www.w3.org/2000/svg":wM,"http://www.w3.org/1998/Math/MathML":EM},jc;function xM(){if(jc===void 0&&(jc=null,Et.trustedTypes))try{jc=Et.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch(t){}return jc}function hd(t){return xM()?.createHTML(t)||t}var Bc;function CM(){if(Bc===void 0&&(Bc=null,Et.trustedTypes))try{Bc=Et.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch(t){}return Bc}function Xy(t){return CM()?.createScriptURL(t)||t}var si=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${vc})`}},Eh=class extends si{getTypeName(){return"HTML"}},Dh=class extends si{getTypeName(){return"Style"}},xh=class extends si{getTypeName(){return"Script"}},Ch=class extends si{getTypeName(){return"URL"}},Ih=class extends si{getTypeName(){return"ResourceURL"}};function an(t){return t instanceof si?t.changingThisBreaksApplicationSecurity:t}function ai(t,n){let e=e0(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${vc})`)}return e===n}function e0(t){return t instanceof si&&t.getTypeName()||null}function ip(t){return new Eh(t)}function rp(t){return new Dh(t)}function op(t){return new xh(t)}function sp(t){return new Ch(t)}function ap(t){return new Ih(t)}function IM(t){let n=new Mh(t);return SM()?new Sh(n):n}var Sh=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(hd(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch(e){return null}}},Mh=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=hd(n),e}};function SM(){try{return!!new window.DOMParser().parseFromString(hd(""),"text/html")}catch(t){return!1}}var MM=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function ba(t){return t=String(t),t.match(MM)?t:"unsafe:"+t}function li(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function ya(...t){let n={};for(let e of t)for(let i in e)e.hasOwnProperty(i)&&(n[i]=!0);return n}var t0=li("area,br,col,hr,img,wbr"),n0=li("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),i0=li("rp,rt"),TM=ya(i0,n0),kM=ya(n0,li("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),AM=ya(i0,li("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Jy=ya(t0,kM,AM,TM),r0=li("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),RM=li("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),NM=li("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),OM=ya(r0,RM,NM),FM=li("script,style,template"),Th=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=VM(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=LM(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=e_(n).toLowerCase();if(!Jy.hasOwnProperty(e))return this.sanitizedSomething=!0,!FM.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),s=o.name,a=s.toLowerCase();if(!OM.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let l=o.value;r0[a]&&(l=ba(l)),this.buf.push(" ",s,'="',t_(l),'"')}return this.buf.push(">"),!0}endElement(n){let e=e_(n).toLowerCase();Jy.hasOwnProperty(e)&&!t0.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(t_(n))}};function PM(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function LM(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw o0(n);return n}function VM(t){let n=t.firstChild;if(n&&PM(t,n))throw o0(n);return n}function e_(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function o0(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var jM=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,BM=/([^\#-~ |!])/g;function t_(t){return t.replace(/&/g,"&amp;").replace(jM,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(BM,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var Uc;function lp(t,n){let e=null;try{Uc=Uc||IM(t);let i=n?String(n):"";e=Uc.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=Uc.getInertBodyElement(i)}while(i!==o);let a=new Th().sanitizeChildren(n_(e)||e);return hd(a)}finally{if(e){let i=n_(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function n_(t){return"content"in t&&UM(t)?t.content:null}function UM(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}function HM(t,n){return t.createText(n)}function zM(t,n,e){t.setValue(n,e)}function s0(t,n,e){return t.createElement(n,e)}function Jc(t,n,e,i,r){t.insertBefore(n,e,i,r)}function a0(t,n,e){t.appendChild(n,e)}function i_(t,n,e,i,r){i!==null?Jc(t,n,e,i,r):a0(t,n,e)}function l0(t,n,e,i){t.removeChild(null,n,e,i)}function $M(t,n,e){t.setAttribute(n,"style",e)}function GM(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function c0(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&JS(t,n,i),r!==null&&GM(t,n,r),o!==null&&$M(t,n,o)}function WM(t,n=!0){if(t[0]!=":")return[null,t];let e=t.indexOf(":",1);if(e===-1){if(n)throw new Error(`Unsupported format "${t}" expecting ":namespace:name"`);return[null,t]}return[t.slice(1,e),t.slice(e+1)]}function d0(t){let n=f0();return n?n.sanitize(Se.URL,t)||"":ai(t,"URL")?an(t):ba(Co(t))}function u0(t){let n=f0();if(n)return Xy(n.sanitize(Se.RESOURCE_URL,t)||"");if(ai(t,"ResourceURL"))return Xy(an(t));throw new g(904,!1)}function qM(t,n){switch(QM(t,n)){case Se.RESOURCE_URL:return u0;case Se.URL:return d0;default:return null}}function cp(t,n,e){return qM(n,e)?.(t)??t}function f0(){let t=G();return t&&t[hn].sanitizer}function QM(t,n){let[e,i]=ZM(t);return gy(i,n,e)}function ZM(t){t=t.toLowerCase();let n=WM(t,!1);if(n[0])return n;let i=gn()===-1?null:Ro(),r=i?.namespace;if(t==="#host"&&i?.type===2){let o=nn(i,G());if(o.tagName&&(t=o.tagName.toLowerCase()),r==null){let s=o.namespaceURI;r=s&&DM[s]}}return[r,t]}function m0(t){return t instanceof Function?t():t}function KM(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var h0="ng-template";function YM(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&KM(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(dp(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function dp(t){return t.type===4&&t.value!==h0}function XM(t,n,e){let i=t.type===4&&!e?h0:t.value;return n===i}function JM(t,n,e){let i=4,r=t.attrs,o=r!==null?nT(r):0,s=!1;for(let a=0;a<n.length;a++){let l=n[a];if(typeof l=="number"){if(!s&&!vn(i)&&!vn(l))return!1;if(s&&vn(l))continue;s=!1,i=l|i&1;continue}if(!s)if(i&4){if(i=2|i&1,l!==""&&!XM(t,l,e)||l===""&&n.length===1){if(vn(i))return!1;s=!0}}else if(i&8){if(r===null||!YM(t,r,l,e)){if(vn(i))return!1;s=!0}}else{let c=n[++a],d=eT(l,r,dp(t),e);if(d===-1){if(vn(i))return!1;s=!0;continue}if(c!==""){let f;if(d>o?f="":f=r[d+1].toLowerCase(),i&2&&c!==f){if(vn(i))return!1;s=!0}}}}return vn(i)||s}function vn(t){return(t&1)===0}function eT(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let s=n[r];if(s===t)return r;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=n[++r];for(;typeof a=="string";)a=n[++r];continue}else{if(s===4)break;if(s===0){r+=4;continue}}r+=o?1:2}return-1}else return iT(n,t)}function p0(t,n,e=!1){for(let i=0;i<n.length;i++)if(JM(t,n[i],e))return!0;return!1}function tT(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function nT(t){for(let n=0;n<t.length;n++){let e=t[n];if(A_(e))return n}return t.length}function iT(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function rT(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function r_(t,n){return t?":not("+n.trim()+")":n}function oT(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let s=t[e];if(typeof s=="string")if(i&2){let a=t[++e];r+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+s:i&4&&(r+=" "+s);else r!==""&&!vn(s)&&(n+=r_(o,r),r=""),i=s,o=o||!vn(i);e++}return r!==""&&(n+=r_(o,r)),n}function sT(t){return t.map(oT).join(",")}function aT(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!vn(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var Ot={};function up(t,n,e,i,r,o,s,a,l,c,d){let f=$e+i,h=f+r,m=lT(f,h),p=typeof c=="function"?c():c;return m[B]={type:t,blueprint:m,template:e,queries:null,viewQuery:a,declTNode:n,data:m.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:l,consts:p,incompleteFirstPass:!1,ssrId:d}}function lT(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:Ot);return e}function cT(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=up(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function fp(t,n,e,i,r,o,s,a,l,c,d){let f=n.blueprint.slice();return f[mn]=r,f[q]=i|4|128|8|64|1024,(c!==null||t&&t[q]&2048)&&(f[q]|=2048),jm(f),f[nt]=f[Rr]=t,f[Ye]=e,f[hn]=s||t&&t[hn],f[Oe]=a||t&&t[Oe],f[ti]=l||t&&t[ti]||null,f[Dt]=o,f[ni]=mM(),f[Ar]=d,f[Rm]=c,f[xt]=n.type==2?t[xt]:f,f}function dT(t,n,e){let i=nn(n,t),r=cT(e),o=t[hn].rendererFactory,s=mp(t,fp(t,r,null,g0(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=s}function g0(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function v0(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function mp(t,n){return t[To]?t[Am][en]=n:t[To]=n,t[Am]=n,n}function I(t=1){b0(Be(),G(),gn()+t,!1)}function b0(t,n,e,i){if(!i)if((n[q]&3)===3){let o=t.preOrderCheckHooks;o!==null&&zc(n,o,e)}else{let o=t.preOrderHooks;o!==null&&$c(n,o,0,e)}Gi(e)}var pd=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(pd||{});function kh(t,n,e,i){let r=F(null);try{let[o,s,a]=t.inputs[e],l=null;(s&pd.SignalBased)!==0&&(l=n[o][Ze]),l!==null&&l.transformFn!==void 0?i=l.transformFn(i):a!==null&&(i=a.call(n,i)),t.setInput!==null?t.setInput(n,l,i,e,o):C_(n,l,o,i)}finally{F(r)}}var Bn=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(Bn||{}),uT;function hp(t,n){return uT(t,n)}var Jz=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var Ah=new WeakMap,sa=new WeakSet;function fT(t,n){let e=Ah.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let s=e[o],a=s.parentNode;s===n?(e.splice(o,1),sa.add(s),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&s===r||a&&i&&a!==i)&&(e.splice(o,1),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),s.parentNode?.removeChild(s))}}function mT(t,n){let e=Ah.get(t);e?e.includes(n)||e.push(n):Ah.set(t,[n])}var Ur=new Set,gd=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(gd||{}),_n=new y(""),o_=new Set;function wn(t){o_.has(t)||(o_.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var vd=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=_({token:t,providedIn:"root",factory:()=>new t})}return t})(),pp=[0,1,2,3],gp=(()=>{class t{ngZone=u(R);scheduler=u(Fn);errorHandler=u(wt,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(_n,{optional:!0})}execute(){let e=this.sequences.size>0;e&&xe(pe.AfterRenderHooksStart),this.executing=!0;for(let i of pp)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&xe(pe.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[Or]??=[]).push(e),Lr(i),i[q]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(gd.AFTER_NEXT_RENDER,e):e()}static \u0275prov=_({token:t,providedIn:"root",factory:()=>new t})}return t})(),da=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,s=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=s,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[Or];n&&(this.view[Or]=n.filter(e=>e!==this))}};function En(t,n){let e=n?.injector??u(de);return wn("NgAfterNextRender"),pT(t,e,n,!0)}function hT(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function pT(t,n,e,i){let r=n.get(vd);r.impl??=n.get(gp);let o=n.get(_n,null,{optional:!0}),s=e?.manualCleanup!==!0?n.get(vt):null,a=n.get(No,null,{optional:!0}),l=new da(r.impl,hT(t),a?.view,i,s,o?.snapshot(null));return r.impl.register(l),l}var y0=new y("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:u(Le)})});function _0(t,n,e){let i=t.get(y0);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function gT(t,n){let e=t.get(y0);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function vT(t,n){for(let[e,i]of n)_0(t,i.animateFns)}function s_(t,n,e,i){let r=t?.[Hi]?.enter;n!==null&&r&&r.has(e.index)&&vT(i,r)}function Oo(t,n,e,i,r,o,s,a){if(r!=null){let l,c=!1;pn(r)?l=r:ii(r)&&(c=!0,r=r[mn]);let d=tn(r);t===0&&i!==null?(s_(a,i,o,e),s==null?a0(n,i,d):Jc(n,i,d,s||null,!0)):t===1&&i!==null?(s_(a,i,o,e),Jc(n,i,d,s||null,!0),fT(o,d)):t===2?(a?.[Hi]?.leave?.has(o.index)&&mT(o,d),sa.delete(d),a_(a,o,e,f=>{if(sa.has(d)){sa.delete(d);return}l0(n,d,c,f)})):t===3&&(sa.delete(d),a_(a,o,e,()=>{n.destroyNode(d)})),l!=null&&MT(n,t,e,l,o,i,s)}}function bT(t,n){w0(t,n),n[mn]=null,n[Dt]=null}function yT(t,n,e,i,r,o){i[mn]=r,i[Dt]=n,yd(t,i,e,1,r,o)}function w0(t,n){n[hn].changeDetectionScheduler?.notify(9),yd(t,n,n[Oe],2,null,null)}function _T(t){let n=t[To];if(!n)return ch(t[B],t);for(;n;){let e=null;if(ii(n))e=n[To];else{let i=n[qe];i&&(e=i)}if(!e){for(;n&&!n[en]&&n!==t;)ii(n)&&ch(n[B],n),n=n[nt];n===null&&(n=t),ii(n)&&ch(n[B],n),e=n&&n[en]}n=e}}function vp(t,n){let e=t[Fr],i=e.indexOf(n);e.splice(i,1)}function bd(t,n){if(Pr(n))return;let e=n[Oe];e.destroyNode&&yd(t,n,e,3,null,null),_T(n)}function ch(t,n){if(Pr(n))return;let e=F(null);try{n[q]&=-129,n[q]|=256,n[zt]&&ki(n[zt]),DT(t,n),ET(t,n),n[B].type===1&&n[Oe].destroy();let i=n[Ui];if(i!==null&&pn(n[nt])){i!==n[nt]&&vp(i,n);let r=n[Ln];r!==null&&r.detachView(t)}_h(n)}finally{F(e)}}function a_(t,n,e,i){let r=t?.[Hi];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&Ur.add(t[ni]),_0(e,()=>{if(r.leave&&r.leave.has(n.index)){let s=r.leave.get(n.index),a=[];if(s){for(let l=0;l<s.animateFns.length;l++){let c=s.animateFns[l],{promise:d}=c();a.push(d)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(a),wT(t,i)}else t&&Ur.delete(t[ni]),i(!1)},r)}function wT(t,n){let e=t[Hi]?.running;if(e){e.then(()=>{t[Hi].running=void 0,Ur.delete(t[ni]),n(!0)});return}n(!1)}function ET(t,n){let e=t.cleanup,i=n[Mo];if(e!==null)for(let s=0;s<e.length-1;s+=2)if(typeof e[s]=="string"){let a=e[s+3];a>=0?i[a]():i[-a].unsubscribe(),s+=2}else{let a=i[e[s+1]];e[s].call(a)}i!==null&&(n[Mo]=null);let r=n[ei];if(r!==null){n[ei]=null;for(let s=0;s<r.length;s++){let a=r[s];a()}}let o=n[Li];if(o!==null){n[Li]=null;for(let s of o)s.destroy()}}function DT(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof Br)){let o=e[i+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=r[o[s]],l=o[s+1];xe(pe.LifecycleHookStart,a,l);try{l.call(a)}finally{xe(pe.LifecycleHookEnd,a,l)}}else{xe(pe.LifecycleHookStart,r,o);try{o.call(r)}finally{xe(pe.LifecycleHookEnd,r,o)}}}}}function E0(t,n,e){return xT(t,n.parent,e)}function xT(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[mn];if(ri(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===yn.None||r===yn.Emulated)return null}return nn(i,e)}function D0(t,n,e){return IT(t,n,e)}function CT(t,n,e){return t.type&40?nn(t,e):null}var IT=CT,l_;function bp(t,n,e,i){let r=E0(t,i,n),o=n[Oe],s=i.parent||n[Dt],a=D0(s,i,n);if(r!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)i_(o,r,e[l],a,!1);else i_(o,r,e,a,!1);l_!==void 0&&l_(o,i,n,e,r)}function aa(t,n){if(n!==null){let e=n.type;if(e&3)return nn(n,t);if(e&4)return Rh(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return aa(t,i);{let r=t[n.index];return pn(r)?Rh(-1,r):tn(r)}}else{if(e&128)return aa(t,n.next);if(e&32)return hp(n,t)()||tn(t[n.index]);{let i=x0(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=Vi(t[xt]);return aa(r,i)}else return aa(t,n.next)}}}return null}function x0(t,n){if(n!==null){let i=t[xt][Dt],r=n.projection;return i.projection[r]}return null}function Rh(t,n){let e=qe+t+1;if(e<n.length){let i=n[e],r=i[B].firstChild;if(r!==null)return aa(i,r)}return n[zi]}function yp(t,n,e,i,r,o,s){for(;e!=null;){let a=i[ti];if(e.type===128){e=e.next;continue}let l=i[e.index],c=e.type;if(s&&n===0&&(l&&Vo(tn(l),i),e.flags|=2),!md(e))if(c&8)yp(t,n,e.child,i,r,o,!1),Oo(n,t,a,r,l,e,o,i);else if(c&32){let d=hp(e,i),f;for(;f=d();)Oo(n,t,a,r,f,e,o,i);Oo(n,t,a,r,l,e,o,i)}else c&16?C0(t,n,i,e,r,o):Oo(n,t,a,r,l,e,o,i);e=s?e.projectionNext:e.next}}function yd(t,n,e,i,r,o){yp(e,i,t.firstChild,n,r,o,!1)}function ST(t,n,e){let i=n[Oe],r=E0(t,e,n),o=e.parent||n[Dt],s=D0(o,e,n);C0(i,0,n,e,r,s)}function C0(t,n,e,i,r,o){let s=e[xt],l=s[Dt].projection[i.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];Oo(n,t,e[ti],r,d,i,o,e)}else{let c=l,d=s[nt];H_(i)&&(c.flags|=128),yp(t,n,c,d,r,o,!0)}}function MT(t,n,e,i,r,o,s){let a=i[zi],l=tn(i);a!==l&&Oo(n,t,e,o,a,r,s);for(let c=qe;c<i.length;c++){let d=i[c];yd(d[B],d,t,n,o,a)}}function TT(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:Bn.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=Bn.Important),t.setStyle(e,i,r,o))}}function I0(t,n,e,i,r){let o=gn(),s=i&2;try{Gi(-1),s&&n.length>$e&&b0(t,n,$e,!1);let a=s?pe.TemplateUpdateStart:pe.TemplateCreateStart;xe(a,r,e),e(i,r)}finally{Gi(o);let a=s?pe.TemplateUpdateEnd:pe.TemplateCreateEnd;xe(a,r,e)}}function _p(t,n,e){FT(t,n,e),(e.flags&64)===64&&PT(t,n,e)}function _d(t,n,e=nn){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let s=i[o+1],a=s===-1?e(n,t):t[s];t[r++]=a}}}function kT(t,n,e,i){let o=i.get(K_,Z_)||e===yn.ShadowDom||e===yn.ExperimentalIsolatedShadowDom,s=t.selectRootElement(n,o);return AT(s),s}function AT(t){RT(t)}var RT=()=>null;function NT(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function S0(t,n,e,i,r,o){let s=n[B];if(wp(t,s,n,e,i)){ri(t)&&OT(n,t.index);return}t.type&3&&(e=NT(e)),M0(t,n,e,i,r,o)}function M0(t,n,e,i,r,o){if(t.type&3){let s=nn(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(s,e,i)}else t.type&12}function OT(t,n){let e=rn(n,t);e[q]&16||(e[q]|=64)}function FT(t,n,e){let i=e.directiveStart,r=e.directiveEnd;ri(e)&&dT(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||Xc(e,n);let o=e.initialInputs;for(let s=i;s<r;s++){let a=t.data[s],l=ca(n,t,s,e);if(Vo(l,n),o!==null&&BT(n,s-i,l,a,e,o),Vn(a)){let c=rn(e.index,n);c[Ye]=ca(n,t,s,e)}}}function PT(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,s=Ay();try{Gi(o);for(let a=i;a<r;a++){let l=t.data[a],c=n[a];Ac(a),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&LT(l,c)}}finally{Gi(-1),Ac(s)}}function LT(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function T0(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];p0(n,o.selectors,!1)&&(i??=[],Vn(o)?i.unshift(o):i.push(o))}return i}function VT(t,n,e,i,r,o){let s=nn(t,n);jT(n[Oe],s,o,t.value,e,i,r)}function jT(t,n,e,i,r,o,s){if(o==null)t.removeAttribute(n,r,e);else{let a=s==null?Co(o):s(o,i||"",r);t.setAttribute(n,r,a,e)}}function BT(t,n,e,i,r,o){let s=o[n];if(s!==null)for(let a=0;a<s.length;a+=2){let l=s[a],c=s[a+1];kh(i,e,l,c)}}function k0(t,n,e,i,r){let o=$e+e,s=n[B],a=r(s,n,t,i,e);n[o]=a,Ao(t,!0);let l=t.type===2;return l?(c0(n[Oe],a,t),(Ey()===0||ea(t))&&Vo(a,n),Dy()):Vo(a,n),Fc()&&(!l||!md(t))&&bp(s,n,a,t),t}function A0(t){let n=t;return Km()?Ym():(n=n.parent,Ao(n,!1)),n}function UT(t,n){let e=t[ti];if(!e)return;let i;try{i=e.get($t,null)}catch(r){i=null}i?.(n)}function wp(t,n,e,i,r){let o=t.inputs?.[i],s=t.hostDirectiveInputs?.[i],a=!1;if(s)for(let l=0;l<s.length;l+=2){let c=s[l],d=s[l+1],f=n.data[c];kh(f,e[c],d,r),a=!0}if(o)for(let l of o){let c=e[l],d=n.data[l];kh(d,c,i,r),a=!0}return a}function HT(t,n){let e=rn(n,t),i=e[B];zT(i,e);let r=e[mn];r!==null&&e[Ar]===null&&(e[Ar]=Y_(r,e[ti])),xe(pe.ComponentStart);try{Ep(i,e,e[Ye])}finally{xe(pe.ComponentEnd,e[Ye])}}function zT(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function Ep(t,n,e){Nc(n);try{let i=t.viewQuery;i!==null&&wh(1,i,e);let r=t.template;r!==null&&I0(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[Ln]?.finishViewCreation(t),t.staticContentQueries&&X_(t,n),t.staticViewQueries&&wh(2,t.viewQuery,e);let o=t.components;o!==null&&$T(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[q]&=-5,Oc()}}function $T(t,n){for(let e=0;e<n.length;e++)HT(t,n[e])}function _a(t,n,e,i){let r=F(null);try{let o=n.tView,a=t[q]&4096?4096:16,l=fp(t,o,e,a,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),c=t[n.index];l[Ui]=c;let d=t[Ln];return d!==null&&(l[Ln]=d.createEmbeddedView(o)),Ep(o,l,e),l}finally{F(r)}}function jo(t,n){return!n||n.firstChild===null||H_(t)}function ua(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(tn(o)),pn(o)&&R0(o,i);let s=e.type;if(s&8)ua(t,n,e.child,i);else if(s&32){let a=hp(e,n),l;for(;l=a();)i.push(l)}else if(s&16){let a=x0(n,e);if(Array.isArray(a))i.push(...a);else{let l=Vi(n[xt]);ua(l[B],l,a,i,!0)}}e=r?e.projectionNext:e.next}return i}function R0(t,n){for(let e=qe;e<t.length;e++){let i=t[e],r=i[B].firstChild;r!==null&&ua(i[B],i,r,n)}t[zi]!==t[mn]&&n.push(t[zi])}function N0(t){if(t[Or]!==null){for(let n of t[Or])n.impl.addSequence(n);t[Or].length=0}}var O0=[];function GT(t){return t[zt]??WT(t)}function WT(t){let n=O0.pop()??Object.create(QT);return n.lView=t,n}function qT(t){t.lView[zt]!==t&&(t.lView=null,O0.push(t))}var QT=Y(v({},Si),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{Lr(t.lView)},consumerOnSignalRead(){this.lView[zt]=this}});function ZT(t){let n=t[zt]??Object.create(KT);return n.lView=t,n}var KT=Y(v({},Si),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=Vi(t.lView);for(;n&&!F0(n[B]);)n=Vi(n);n&&Bm(n)},consumerOnSignalRead(){this.lView[zt]=this}});function F0(t){return t.type!==2}function P0(t){if(t[Li]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[Li])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[q]&8192)}}var YT=100;function L0(t,n=0){let i=t[hn].rendererFactory,r=!1;r||i.begin?.();try{XT(t,n)}finally{r||i.end?.()}}function XT(t,n){let e=Xm();try{$s(!0),Nh(t,n);let i=0;for(;ta(t);){if(i===YT)throw new g(103,!1);i++,Nh(t,1)}}finally{$s(e)}}function JT(t,n,e,i){if(Pr(n))return;let r=n[q],o=!1,s=!1;Nc(n);let a=!0,l=null,c=null;o||(F0(t)?(c=GT(n),l=qn(c)):kl()===null?(a=!1,c=ZT(n),l=qn(c)):n[zt]&&(ki(n[zt]),n[zt]=null));try{jm(n),My(t.bindingStartIndex),e!==null&&I0(t,n,e,2,i);let d=(r&3)===3;if(!o)if(d){let m=t.preOrderCheckHooks;m!==null&&zc(n,m,null)}else{let m=t.preOrderHooks;m!==null&&$c(n,m,0,null),ah(n,0)}if(s||ek(n),P0(n),V0(n,0),t.contentQueries!==null&&X_(t,n),!o)if(d){let m=t.contentCheckHooks;m!==null&&zc(n,m)}else{let m=t.contentHooks;m!==null&&$c(n,m,1),ah(n,1)}nk(t,n);let f=t.components;f!==null&&B0(n,f,0);let h=t.viewQuery;if(h!==null&&wh(2,h,i),!o)if(d){let m=t.viewCheckHooks;m!==null&&zc(n,m)}else{let m=t.viewHooks;m!==null&&$c(n,m,2),ah(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[Ic]){for(let m of n[Ic])m();n[Ic]=null}o||(N0(n),n[q]&=-73)}catch(d){throw o||Lr(n),d}finally{c!==null&&(Ti(c,l),a&&qT(c)),Oc()}}function V0(t,n){for(let e=$_(t);e!==null;e=G_(e))for(let i=qe;i<e.length;i++){let r=e[i];j0(r,n)}}function ek(t){for(let n=$_(t);n!==null;n=G_(n)){if(!(n[q]&2))continue;let e=n[Fr];for(let i=0;i<e.length;i++){let r=e[i];Bm(r)}}}function tk(t,n,e){xe(pe.ComponentStart);let i=rn(n,t);try{j0(i,e)}finally{xe(pe.ComponentEnd,i[Ye])}}function j0(t,n){Mc(t)&&Nh(t,n)}function Nh(t,n){let i=t[B],r=t[q],o=t[zt],s=!!(n===0&&r&16);if(s||=!!(r&64&&n===0),s||=!!(r&1024),s||=!!(o?.dirty&&po(o)),s||=!1,o&&(o.dirty=!1),t[q]&=-9217,s)JT(i,t,i.template,t[Ye]);else if(r&8192){let a=F(null);try{P0(t),V0(t,1);let l=i.components;l!==null&&B0(t,l,1),N0(t)}finally{F(a)}}}function B0(t,n,e){for(let i=0;i<n.length;i++)tk(t,n[i],e)}function nk(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)Gi(~r);else{let o=r,s=e[++i],a=e[++i];ky(s,o);let l=n[o];xe(pe.HostBindingsUpdateStart,l);try{a(2,l)}finally{xe(pe.HostBindingsUpdateEnd,l)}}}}finally{Gi(-1)}}function Dp(t,n){let e=Xm()?64:1088;for(t[hn].changeDetectionScheduler?.notify(n);t;){t[q]|=e;let i=Vi(t);if(ko(t)&&!i)return t;t=i}return null}function U0(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function H0(t,n){let e=qe+n;if(e<t.length)return t[e]}function wa(t,n,e,i=!0){let r=n[B];if(ik(r,n,t,e),i){let s=Rh(e,t),a=n[Oe],l=a.parentNode(t[zi]);l!==null&&yT(r,t[Dt],a,n,l,s)}let o=n[Ar];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function z0(t,n){let e=fa(t,n);return e!==void 0&&bd(e[B],e),e}function fa(t,n){if(t.length<=qe)return;let e=qe+n,i=t[e];if(i){let r=i[Ui];r!==null&&r!==t&&vp(r,i),n>0&&(t[e-1][en]=i[en]);let o=Ys(t,qe+n);bT(i[B],i);let s=o[Ln];s!==null&&s.detachView(o[B]),i[nt]=null,i[en]=null,i[q]&=-129}return i}function ik(t,n,e,i){let r=qe+i,o=e.length;i>0&&(e[r-1][en]=n),i<o-qe?(n[en]=e[r],xm(e,qe+i,n)):(e.push(n),n[en]=null),n[nt]=e;let s=n[Ui];s!==null&&e!==s&&$0(s,n);let a=n[Ln];a!==null&&a.insertView(t),Tc(n),n[q]|=128}function $0(t,n){let e=t[Fr],i=n[nt];if(ii(i))t[q]|=2;else{let r=i[nt][xt];n[xt]!==r&&(t[q]|=2)}e===null?t[Fr]=[n]:e.push(n)}var Wi=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[B];return ua(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[Ye]}set context(n){this._lView[Ye]=n}get destroyed(){return Pr(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[nt];if(pn(n)){let e=n[Js],i=e?e.indexOf(this):-1;i>-1&&(fa(n,i),Ys(e,i))}this._attachedToViewContainer=!1}bd(this._lView[B],this._lView)}onDestroy(n){Um(this._lView,n)}markForCheck(){Dp(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[q]&=-129}reattach(){Tc(this._lView),this._lView[q]|=128}detectChanges(){this._lView[q]|=1024,L0(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new g(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=ko(this._lView),e=this._lView[Ui];e!==null&&!n&&vp(e,this._lView),w0(this._lView[B],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new g(902,!1);this._appRef=n;let e=ko(this._lView),i=this._lView[Ui];i!==null&&!e&&$0(i,this._lView),Tc(this._lView)}};var Hr=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=rk;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=_a(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new Wi(o)}}return t})();function rk(){return wd(lt(),G())}function wd(t,n){return t.type&4?new Hr(n,t,Uo(t,n)):null}function $o(t,n,e,i,r){let o=t.data[n];if(o===null)o=ok(t,n,e,i,r),Ty()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let s=xy();o.injectorIndex=s===null?-1:s.injectorIndex}return Ao(o,!0),o}function ok(t,n,e,i,r){let o=Zm(),s=Km(),a=s?o:o&&o.parent,l=t.data[n]=ak(t,a,e,n,i,r);return sk(t,l,o,s),l}function sk(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function ak(t,n,e,i,r,o){let s=n?n.injectorIndex:-1,a=0;return Wm()&&(a|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,namespace:th(),attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function lk(t){let n=t[Nm]??[],i=t[nt][Oe],r=[];for(let o of n)o.data[Q_]!==void 0?r.push(o):ck(o,i);t[Nm]=r}function ck(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[q_];for(;e<r;){let o=i.nextSibling;l0(n,i,!1),i=o,e++}}}var dk=()=>null,uk=()=>null;function ed(t,n){return dk(t,n)}function G0(t,n,e){return uk(t,n,e)}var W0=class{},Ed=class{},Oh=class{resolveComponentFactory(n){throw new g(917,!1)}},Ea=class{static NULL=new Oh},ct=class{},et=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>fk()}return t})();function fk(){let t=G(),n=lt(),e=rn(n.index,t);return(ii(e)?e:t)[Oe]}var q0=(()=>{class t{static \u0275prov=_({token:t,providedIn:"root",factory:()=>null})}return t})();var Wc={},Fh=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,Wc,i);return r!==Wc||e===Wc?r:this.parentInjector.get(n,e,i)}};function td(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let s=0;s<n.length;s++){let a=n[s];if(typeof a=="number")o=a;else if(o==1)r=bc(r,a);else if(o==2){let l=a,c=n[++s];i=bc(i,l+": "+c+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function ge(t,n=0){let e=G();if(e===null)return C(t,n);let i=lt();return V_(i,e,ut(t),n)}function xp(){let t="invalid";throw new Error(t)}function Q0(t,n,e,i,r){let o=i===null?null:{"":-1},s=r(t,e);if(s!==null){let a=s,l=null,c=null;for(let d of s)if(d.resolveHostDirectives!==null){[a,l,c]=d.resolveHostDirectives(s);break}pk(t,n,e,a,o,l,c)}o!==null&&i!==null&&mk(e,i,o)}function mk(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new g(-301,!1);i.push(n[r],o)}}function hk(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function pk(t,n,e,i,r,o,s){let a=i.length,l=null;for(let h=0;h<a;h++){let m=i[h];l===null&&Vn(m)&&(l=m,hk(t,e,h)),bh(Xc(e,n),t,m.type)}wk(e,t.data.length,a),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let h=0;h<a;h++){let m=i[h];m.providersResolver&&m.providersResolver(m)}let c=!1,d=!1,f=v0(t,n,a,null);a>0&&(e.directiveToIndex=new Map);for(let h=0;h<a;h++){let m=i[h];if(e.mergedAttrs=Po(e.mergedAttrs,m.hostAttrs),vk(t,e,n,f,m),_k(f,m,r),s!==null&&s.has(m)){let[b,w]=s.get(m);e.directiveToIndex.set(m.type,[f,b+e.directiveStart,w+e.directiveStart])}else(o===null||!o.has(m))&&e.directiveToIndex.set(m.type,f);m.contentQueries!==null&&(e.flags|=4),(m.hostBindings!==null||m.hostAttrs!==null||m.hostVars!==0)&&(e.flags|=64);let p=m.type.prototype;!c&&(p.ngOnChanges||p.ngOnInit||p.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),c=!0),!d&&(p.ngOnChanges||p.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),f++}gk(t,e,o)}function gk(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))c_(0,n,r,i),c_(1,n,r,i),u_(n,i,!1);else{let o=e.get(r);d_(0,n,o,i),d_(1,n,o,i),u_(n,i,!0)}}}function c_(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s;t===0?s=n.inputs??={}:s=n.outputs??={},s[o]??=[],s[o].push(i),Z0(n,o)}}function d_(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s=r[o],a;t===0?a=n.hostDirectiveInputs??={}:a=n.hostDirectiveOutputs??={},a[s]??=[],a[s].push(i,o),Z0(n,s)}}function Z0(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function u_(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||dp(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let s=null,a=0;for(;a<i.length;){let l=i[a];if(l===0){a+=4;continue}else if(l===5){a+=2;continue}else if(typeof l=="number")break;if(!e&&r.hasOwnProperty(l)){let c=r[l];for(let d of c)if(d===n){s??=[],s.push(l,i[a+1]);break}}else if(e&&o.hasOwnProperty(l)){let c=o[l];for(let d=0;d<c.length;d+=2)if(c[d]===n){s??=[],s.push(c[d+1],i[a+1]);break}}a+=2}t.initialInputs??=[],t.initialInputs.push(s)}function vk(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=Pi(r.type,!0)),s=new Br(o,Vn(r),ge,null);t.blueprint[i]=s,e[i]=s,bk(t,n,i,v0(t,e,r.hostVars,Ot),r)}function bk(t,n,e,i,r){let o=r.hostBindings;if(o){let s=t.hostBindingOpCodes;s===null&&(s=t.hostBindingOpCodes=[]);let a=~n.index;yk(s)!=a&&s.push(a),s.push(e,i,o)}}function yk(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function _k(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;Vn(n)&&(e[""]=t)}}function wk(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function K0(t,n,e,i,r,o,s,a){let l=n[B],c=l.consts,d=on(c,s),f=$o(l,t,e,i,d);return o&&Q0(l,n,f,on(c,a),r),f.mergedAttrs=Po(f.mergedAttrs,f.attrs),f.attrs!==null&&td(f,f.attrs,!1),f.mergedAttrs!==null&&td(f,f.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,f),f}function Y0(t,n){T_(t,n),Om(n)&&t.queries.elementEnd(n)}function Ek(t,n,e,i,r,o){let s=n.consts,a=on(s,r),l=$o(n,t,e,i,a);if(l.mergedAttrs=Po(l.mergedAttrs,l.attrs),o!=null){let c=on(s,o);l.localNames=[];for(let d=0;d<c.length;d+=2)l.localNames.push(c[d],-1)}return l.attrs!==null&&td(l,l.attrs,!1),l.mergedAttrs!==null&&td(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}function Dk(t,n,e){return t[n]=e}function sn(t,n,e){if(e===Ot)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function xk(t,n,e,i){let r=sn(t,n,e);return sn(t,n+1,i)||r}function qc(t,n,e){return function i(r){let o=i.__ngNativeEl__;o!==void 0&&vM(r,o);let s=ri(t)?rn(t.index,n):n;Dp(s,5);let a=n[Ye],l=f_(n,a,e,r),c=i.__ngNextListenerFn__;for(;c;)l=f_(n,a,c,r)&&l,c=c.__ngNextListenerFn__;return l}}function f_(t,n,e,i){let r=F(null);try{return xe(pe.OutputStart,n,e),e(i)!==!1}catch(o){return UT(t,o),!1}finally{xe(pe.OutputEnd,n,e),F(r)}}function X0(t,n,e,i,r,o,s,a){let l=ea(t),c=!1,d=null;if(!i&&l&&(d=Ik(n,e,o,t.index)),d!==null){let f=d.__ngLastListenerFn__||d;f.__ngNextListenerFn__=s,d.__ngLastListenerFn__=s,c=!0}else{let f=nn(t,e),h=i?i(f):f;yM(e,h,o,a),i||(a.__ngNativeEl__=f);let m=r.listen(h,o,a);if(!Ck(o)){let p=i?b=>i(tn(b[t.index])):t.index;J0(p,n,e,o,a,m,!1)}}return c}function Ck(t){return t.startsWith("animation")||t.startsWith("transition")}function Ik(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let s=r[o];if(s===e&&r[o+1]===i){let a=n[Mo],l=r[o+2];return a&&a.length>l?a[l]:null}typeof s=="string"&&(o+=2)}return null}function J0(t,n,e,i,r,o,s){let a=n.firstCreatePass?zm(n):null,l=Hm(e),c=l.length;l.push(r,o),a&&a.push(i,t,c,(c+1)*(s?-1:1))}function m_(t,n,e,i,r,o){let s=n[e],a=n[B],c=a.data[e].outputs[i],f=s[c].subscribe(o);J0(t.index,a,n,r,o,f,!0)}var Ph=Symbol("BINDING");function ew(t){return t.debugInfo?.className||t.type.name||null}var nd=class extends Ea{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=Pn(n);return new qi(e,this.ngModule)}};function Sk(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&pd.SignalBased)!==0};return r&&(o.transform=r),o})}function Mk(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function Tk(t,n,e){let i=n instanceof Le?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new Fh(e,i):e}function kk(t){let n=t.get(ct,null);if(n===null)throw new g(407,!1);let e=t.get(q0,null),i=t.get(Fn,null),r=t.get(_n,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function Ak(t,n){let e=tw(t);return s0(n,e,e==="svg"?zs:e==="math"?Fm:null)}function Rk(t){if(t?.toLowerCase()==="script")throw new g(905,!1)}function tw(t){return(t.selectors[0][0]||"div").toLowerCase()}var qi=class extends Ed{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=Sk(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=Mk(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=sT(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,s){xe(pe.DynamicComponentStart);let a=F(null);try{let l=this.componentDef,c=Tk(l,r||this.ngModule,n),d=kk(c),f=d.tracingService;return f&&f.componentCreate?f.componentCreate(ew(l),()=>this.createComponentRef(d,c,e,i,o,s)):this.createComponentRef(d,c,e,i,o,s)}finally{F(a)}}createComponentRef(n,e,i,r,o,s){let a=this.componentDef,l=Nk(r,a,s,o),c=n.rendererFactory.createRenderer(null,a),d=r?kT(c,r,a.encapsulation,e):Ak(a,c);Rk(d?.tagName);let f=s?.some(h_)||o?.some(p=>typeof p!="function"&&p.bindings.some(h_)),h=fp(null,l,null,512|g0(a),null,null,n,c,e,null,Y_(d,e,!0));h[$e]=d,Nc(h);let m=null;try{let p=K0($e,h,2,"#host",()=>l.directiveRegistry,!0,0);c0(c,d,p),Vo(d,h),_p(l,h,p),J_(l,p,h),Y0(l,p),i!==void 0&&Fk(p,this.ngContentSelectors,i),m=rn(p.index,h),h[Ye]=m[Ye],Ep(l,h,null)}catch(p){throw m!==null&&_h(m),_h(h),p}finally{xe(pe.DynamicComponentEnd),Oc()}return new id(this.componentType,h,!!f)}};function Nk(t,n,e,i){let r=t?["ng-version","21.2.22"]:aT(n.selectors[0]),o=null,s=null,a=0;if(e)for(let d of e)a+=d[Ph].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(s??=[]).push(d));if(i)for(let d=0;d<i.length;d++){let f=i[d];if(typeof f!="function")for(let h of f.bindings){a+=h[Ph].requiredVars;let m=d+1;h.create&&(h.targetIdx=m,(o??=[]).push(h)),h.update&&(h.targetIdx=m,(s??=[]).push(h))}}let l=[n];if(i)for(let d of i){let f=typeof d=="function"?d:d.type,h=wm(f);l.push(h)}return up(0,null,Ok(o,s),1,a,l,null,null,null,[r],null)}function Ok(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function h_(t){let n=t[Ph].kind;return n==="input"||n==="twoWay"}var id=class extends W0{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=Sc(e[B],$e),this.location=Uo(this._tNode,e),this.instance=rn(this._tNode.index,e)[Ye],this.hostView=this.changeDetectorRef=new Wi(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=wp(i,r[B],r,n,e);this.previousInputValues.set(n,e);let s=rn(i.index,r);Dp(s,1)}get injector(){return new jr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function Fk(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var ci=(()=>{class t{static __NG_ELEMENT_ID__=Pk}return t})();function Pk(){let t=lt();return nw(t,G())}var Lh=class t extends ci{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return Uo(this._hostTNode,this._hostLView)}get injector(){return new jr(this._hostTNode,this._hostLView)}get parentInjector(){let n=Jh(this._hostTNode,this._hostLView);if(R_(n)){let e=Kc(n,this._hostLView),i=Zc(n),r=e[B].data[i+8];return new jr(r,e)}else return new jr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=p_(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-qe}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let s=ed(this._lContainer,n.ssrId),a=n.createEmbeddedViewImpl(e||{},o,s);return this.insertImpl(a,r,jo(this._hostTNode,s)),a}createComponent(n,e,i,r,o,s,a){let l=n&&!GS(n),c;if(l)c=e;else{let w=e||{};c=w.index,i=w.injector,r=w.projectableNodes,o=w.environmentInjector||w.ngModuleRef,s=w.directives,a=w.bindings}let d=l?n:new qi(Pn(n)),f=i||this.parentInjector;if(!o&&d.ngModule==null){let D=(l?f:this.parentInjector).get(Le,null);D&&(o=D)}let h=Pn(d.componentType??{}),m=ed(this._lContainer,h?.id??null),p=m?.firstChild??null,b=d.create(f,r,p,o,s,a);return this.insertImpl(b.hostView,c,jo(this._hostTNode,m)),b}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(by(r)){let a=this.indexOf(n);if(a!==-1)this.detach(a);else{let l=r[nt],c=new t(l,l[Dt],l[nt]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(e),s=this._lContainer;return wa(s,r,o,i),n.attachToViewContainerRef(),xm(dh(s),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=p_(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=fa(this._lContainer,e);i&&(Ys(dh(this._lContainer),e),bd(i[B],i))}detach(n){let e=this._adjustIndex(n,-1),i=fa(this._lContainer,e);return i&&Ys(dh(this._lContainer),e)!=null?new Wi(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function p_(t){return t[Js]}function dh(t){return t[Js]||(t[Js]=[])}function nw(t,n){let e,i=n[t.index];return pn(i)?e=i:(e=U0(i,n,null,t),n[t.index]=e,mp(n,e)),Vk(e,n,t,i),new Lh(e,t,n)}function Lk(t,n){let e=t[Oe],i=e.createComment(""),r=nn(n,t),o=e.parentNode(r);return Jc(e,o,i,e.nextSibling(r),!1),i}var Vk=Uk,jk=()=>!1;function Bk(t,n,e){return jk(t,n,e)}function Uk(t,n,e,i){if(t[zi])return;let r;e.type&8?r=tn(i):r=Lk(n,e),t[zi]=r}var Vh=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},jh=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let s=e.getByIndex(o),a=this.queries[s.indexInDeclarationView];r.push(a.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)Ip(n,e).matches!==null&&this.queries[e].setDirty()}},rd=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=Wk(n):this.predicate=n}},Bh=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},Uh=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,Hk(e,o)),this.matchTNodeWithReadOption(n,e,Gc(e,n,o,!1,!1))}else i===Hr?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,Gc(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===W||r===ci||r===Hr&&e.type&4)this.addMatch(e.index,-2);else{let o=Gc(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function Hk(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function zk(t,n){return t.type&11?Uo(t,n):t.type&4?wd(t,n):null}function $k(t,n,e,i){return e===-1?zk(n,t):e===-2?Gk(t,n,i):ca(t,t[B],e,n)}function Gk(t,n,e){if(e===W)return Uo(n,t);if(e===Hr)return wd(n,t);if(e===ci)return nw(n,t)}function iw(t,n,e,i){let r=n[Ln].queries[i];if(r.matches===null){let o=t.data,s=e.matches,a=[];for(let l=0;s!==null&&l<s.length;l+=2){let c=s[l];if(c<0)a.push(null);else{let d=o[c];a.push($k(n,d,s[l+1],e.metadata.read))}}r.matches=a}return r.matches}function Hh(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let s=iw(t,n,r,e);for(let a=0;a<o.length;a+=2){let l=o[a];if(l>0)i.push(s[a/2]);else{let c=o[a+1],d=n[-l];for(let f=qe;f<d.length;f++){let h=d[f];h[Ui]===h[nt]&&Hh(h[B],h,c,i)}if(d[Fr]!==null){let f=d[Fr];for(let h=0;h<f.length;h++){let m=f[h];Hh(m[B],m,c,i)}}}}}return i}function Cp(t,n){return t[Ln].queries[n].queryList}function rw(t,n,e){let i=new Lo((e&4)===4);return wy(t,n,i,i.destroy),(n[Ln]??=new jh).queries.push(new Vh(i))-1}function ow(t,n,e){let i=Be();return i.firstCreatePass&&(aw(i,new rd(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),rw(i,G(),n)}function sw(t,n,e,i){let r=Be();if(r.firstCreatePass){let o=lt();aw(r,new rd(n,e,i),o.index),qk(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return rw(r,G(),e)}function Wk(t){return t.split(",").map(n=>n.trim())}function aw(t,n,e){t.queries===null&&(t.queries=new Bh),t.queries.track(new Uh(n,e))}function qk(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function Ip(t,n){return t.queries.getByIndex(n)}function lw(t,n){let e=t[B],i=Ip(e,n);return i.crossesNgTemplate?Hh(e,t,n,[]):iw(e,t,i,n)}function cw(t,n,e){let i,r=Ts(()=>{i._dirtyCounter();let o=Qk(i,t);if(n&&o===void 0)throw new g(-951,!1);return o});return i=r[Ze],i._dirtyCounter=oe(0),i._flatValue=void 0,r}function Sp(t){return cw(!0,!1,t)}function Mp(t){return cw(!0,!0,t)}function dw(t,n){let e=t[Ze];e._lView=G(),e._queryIndex=n,e._queryList=Cp(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function Qk(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[q]&4)return n?void 0:gt;let r=Cp(e,i),o=lw(e,i);return r.reset(o,U_),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var zr=class{},Dd=class{};var od=class extends zr{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new nd(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=_m(n);this._bootstrapComponents=m0(o.bootstrap),this._r3Injector=nh(n,e,[{provide:zr,useValue:this},{provide:Ea,useValue:this.componentFactoryResolver},...i],qs(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},sd=class extends Dd{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new od(this.moduleType,n,[])}};var ma=class extends zr{injector;componentFactoryResolver=new nd(this);instance=null;constructor(n){super();let e=new Mr([...n.providers,{provide:zr,useValue:this},{provide:Ea,useValue:this.componentFactoryResolver}],n.parent||So(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function Go(t,n,e=null){return new ma({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var Zk=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=Sm(!1,e.type),r=i.length>0?Go([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=_({token:t,providedIn:"environment",factory:()=>new t(C(Le))})}return t})();function k(t){return ga(()=>{let n=uw(t),e=Y(v({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===ep.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(Zk).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||yn.Emulated,styles:t.styles||gt,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&wn("NgStandalone"),fw(e);let i=t.dependencies;return e.directiveDefs=g_(i,Kk),e.pipeDefs=g_(i,iy),e.id=Jk(e),e})}function Kk(t){return Pn(t)||wm(t)}function L(t){return ga(()=>({type:t.type,bootstrap:t.bootstrap||gt,declarations:t.declarations||gt,imports:t.imports||gt,exports:t.exports||gt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function Yk(t,n){if(t==null)return ji;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,s,a,l;Array.isArray(r)?(a=r[0],o=r[1],s=r[2]??o,l=r[3]||null):(o=r,s=r,a=pd.None,l=null),e[o]=[i,a,l],n[o]=s}return e}function Xk(t){if(t==null)return ji;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function N(t){return ga(()=>{let n=uw(t);return fw(n),n})}function Tp(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function uw(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||ji,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||gt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:Yk(t.inputs,n),outputs:Xk(t.outputs),debugInfo:null}}function fw(t){t.features?.forEach(n=>n(t))}function g_(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function Jk(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function eA(t){return Object.getPrototypeOf(t.prototype).constructor}function _e(t){let n=eA(t.type),e=!0,i=[t];for(;n&&n!==Function.prototype&&n!==Object.prototype;){let r,o=Object.hasOwn(n,Zs)?n[Zs]:void 0,s=Object.hasOwn(n,Ks)?n[Ks]:void 0;if(Vn(t))r=o??s;else{if(o)throw new g(903,!1);r=s}if(r){if(e){i.push(r);let l=t;l.inputs=uh(t.inputs),l.declaredInputs=uh(t.declaredInputs),l.outputs=uh(t.outputs);let c=r.hostBindings;c&&oA(t,c);let d=r.viewQuery,f=r.contentQueries;if(d&&iA(t,d),f&&rA(t,f),tA(t,r),ny(t.outputs,r.outputs),Vn(r)&&r.data.animation){let h=t.data;h.animation=(h.animation||[]).concat(r.data.animation)}}let a=r.features;if(a)for(let l=0;l<a.length;l++){let c=a[l];c&&c.ngInherit&&c(t),c===_e&&(e=!1)}}n=Object.getPrototypeOf(n)}nA(i)}function tA(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function nA(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=Po(r.hostAttrs,e=Po(e,r.hostAttrs))}}function uh(t){return t===ji?{}:t===gt?[]:t}function iA(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function rA(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function oA(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function mw(t,n,e,i,r,o,s,a){if(e.firstCreatePass){t.mergedAttrs=Po(t.mergedAttrs,t.attrs);let d=t.tView=up(2,t,r,o,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}a&&(t.flags|=a),Ao(t,!1);let l=aA(e,n,t,i);Fc()&&bp(e,n,l,t),Vo(l,n);let c=U0(l,n,l,t);n[i+$e]=c,mp(n,c),Bk(c,t,n)}function sA(t,n,e,i,r,o,s,a,l,c,d){let f=e+$e,h;return n.firstCreatePass?(h=$o(n,f,4,s||null,a||null),Gm()&&Q0(n,t,h,on(n.consts,c),T0),T_(n,h)):h=n.data[f],mw(h,t,n,e,i,r,o,l),ea(h)&&_p(n,t,h),c!=null&&_d(t,h,d),h}function ha(t,n,e,i,r,o,s,a,l,c,d){let f=e+$e,h;if(n.firstCreatePass){if(h=$o(n,f,4,s||null,a||null),c!=null){let m=on(n.consts,c);h.localNames=[];for(let p=0;p<m.length;p+=2)h.localNames.push(m[p],-1)}}else h=n.data[f];return mw(h,t,n,e,i,r,o,l),c!=null&&_d(t,h,d),h}function qr(t,n,e,i,r,o,s,a){let l=G(),c=Be(),d=on(c.consts,o);return sA(l,c,t,n,e,i,r,d,void 0,s,a),qr}var aA=lA;function lA(t,n,e,i){return Pc(!0),n[Oe].createComment("")}var xd=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function Da(t){return typeof t=="function"&&t[Ze]!==void 0}function kp(t){return Da(t)&&typeof t.set=="function"}var Cd=new y(""),Id=new y(""),xa=(()=>{class t{_ngZone;registry;_isZoneStable=!0;_callbacks=[];_taskTrackingZone=null;_destroyRef;constructor(e,i,r){this._ngZone=e,this.registry=i,km()&&(this._destroyRef=u(vt,{optional:!0})??void 0),Ap||(pw(r),r.addToWindow(i)),this._watchAngularEvents(),e.run(()=>{this._taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){let e=this._ngZone.onUnstable.subscribe({next:()=>{this._isZoneStable=!1}}),i=this._ngZone.runOutsideAngular(()=>this._ngZone.onStable.subscribe({next:()=>{R.assertNotInAngularZone(),queueMicrotask(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}}));this._destroyRef?.onDestroy(()=>{e.unsubscribe(),i.unsubscribe()})}isStable(){return this._isZoneStable&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())queueMicrotask(()=>{for(;this._callbacks.length!==0;){let e=this._callbacks.pop();clearTimeout(e.timeoutId),e.doneCb()}});else{let e=this.getPendingTasks();this._callbacks=this._callbacks.filter(i=>i.updateCb&&i.updateCb(e)?(clearTimeout(i.timeoutId),!1):!0)}}getPendingTasks(){return this._taskTrackingZone?this._taskTrackingZone.macroTasks.map(e=>({source:e.source,creationLocation:e.creationLocation,data:e.data})):[]}addCallback(e,i,r){let o=-1;i&&i>0&&(o=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==o),e()},i)),this._callbacks.push({doneCb:e,timeoutId:o,updateCb:r})}whenStable(e,i,r){if(r&&!this._taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(e,i,r),this._runCallbacksIfReady()}registerApplication(e){this.registry.registerApplication(e,this)}unregisterApplication(e){this.registry.unregisterApplication(e)}findProviders(e,i,r){return[]}static \u0275fac=function(i){return new(i||t)(C(R),C(hw),C(Id))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),hw=(()=>{class t{_applications=new Map;registerApplication(e,i){this._applications.set(e,i)}unregisterApplication(e){this._applications.delete(e)}unregisterAllApplications(){this._applications.clear()}getTestability(e){return this._applications.get(e)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(e,i=!0){return Ap?.findTestabilityInTree(this,e,i)??null}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function pw(t){Ap=t}var Ap;function di(t){return!!t&&typeof t.then=="function"}function Sd(t){return!!t&&typeof t.subscribe=="function"}var Rp=new y("");function Wo(t){return Bi([{provide:Rp,multi:!0,useValue:t}])}var Np=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=u(Rp,{optional:!0})??[];injector=u(de);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=it(this.injector,r);if(di(o))e.push(o);else if(Sd(o)){let s=new Promise((a,l)=>{o.subscribe({complete:a,error:l})});e.push(s)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Md=new y("");function gw(){Bf(()=>{let t="";throw new g(600,t)})}function vw(t){return t.isBoundToModule}var cA=10;var bt=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u($t);afterRenderManager=u(vd);zonelessEnabled=u(ra);rootEffectScheduler=u(Vc);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new M;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(oi);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(j(e=>!e))}constructor(){u(_n,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=u(Le);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=de.NULL){return this._injector.get(R).run(()=>{xe(pe.BootstrapComponentStart);let s=e instanceof Ed;if(!this._injector.get(Np).done){let p="";throw new g(405,p)}let l;s?l=e:l=this._injector.get(Ea).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let c=vw(l)?void 0:this._injector.get(zr),d=i||l.selector,f=l.create(r,[],d,c),h=f.location.nativeElement,m=f.injector.get(Cd,null);return m?.registerApplication(h),f.onDestroy(()=>{this.detachView(f.hostView),la(this.components,f),m?.unregisterApplication(h)}),this._loadComponent(f),xe(pe.BootstrapComponentEnd,f),f})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){xe(pe.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(gd.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw xe(pe.ChangeDetectionEnd),new g(101,!1);let e=F(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,F(e),this.afterTick.next(),xe(pe.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(ct,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<cA;){xe(pe.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{xe(pe.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!ta(r))continue;let o=i&&!this.zonelessEnabled?0:1;L0(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>ta(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;la(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(Md,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>la(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new g(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function la(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function ve(t,n,e,i){let r=G(),o=$i();if(sn(r,o,n)){let s=Be(),a=Ro();VT(a,r,t,n,e,i)}return ve}var zh=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let s=this.detach(i);this.attach(i,o),this.attach(r,s)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function fh(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function dA(t,n,e,i){let r,o,s=0,a=t.length-1,l=void 0;if(Array.isArray(n)){F(i);let c=n.length-1;for(F(null);s<=a&&s<=c;){let d=t.at(s),f=n[s],h=fh(s,d,s,f,e);if(h!==0){h<0&&t.updateValue(s,f),s++;continue}let m=t.at(a),p=n[c],b=fh(a,m,c,p,e);if(b!==0){b<0&&t.updateValue(a,p),a--,c--;continue}let w=e(s,d),D=e(a,m),U=e(s,f);if(Object.is(U,D)){let ue=e(c,p);Object.is(ue,w)?(t.swap(s,a),t.updateValue(a,p),c--,a--):t.move(a,s),t.updateValue(s,f),s++;continue}if(r??=new ad,o??=b_(t,s,a,e),$h(t,r,s,U))t.updateValue(s,f),s++,a++;else if(o.has(U))r.set(w,t.detach(s)),a--;else{let ue=t.create(s,n[s]);t.attach(s,ue),s++,a++}}for(;s<=c;)v_(t,r,e,s,n[s]),s++}else if(n!=null){F(i);let c=n[Symbol.iterator]();F(null);let d=c.next();for(;!d.done&&s<=a;){let f=t.at(s),h=d.value,m=fh(s,f,s,h,e);if(m!==0)m<0&&t.updateValue(s,h),s++,d=c.next();else{r??=new ad,o??=b_(t,s,a,e);let p=e(s,h);if($h(t,r,s,p))t.updateValue(s,h),s++,a++,d=c.next();else if(!o.has(p))t.attach(s,t.create(s,h)),s++,a++,d=c.next();else{let b=e(s,f);r.set(b,t.detach(s)),a--}}}for(;!d.done;)v_(t,r,e,t.length,d.value),d=c.next()}for(;s<=a;)t.destroy(t.detach(a--));r?.forEach(c=>{t.destroy(c)})}function $h(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function v_(t,n,e,i,r){if($h(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function b_(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var ad=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function be(t,n,e,i,r,o,s,a){wn("NgControlFlow");let l=G(),c=Be(),d=on(c.consts,o);return ha(l,c,t,n,e,i,r,d,256,s,a),Op}function Op(t,n,e,i,r,o,s,a){wn("NgControlFlow");let l=G(),c=Be(),d=on(c.consts,o);return ha(l,c,t,n,e,i,r,d,512,s,a),Op}function ye(t,n){wn("NgControlFlow");let e=G(),i=$i(),r=e[i]!==Ot?e[i]:-1,o=r!==-1?ld(e,$e+r):void 0,s=0;if(sn(e,i,t)){let a=F(null);try{if(o!==void 0&&z0(o,s),t!==-1){let l=$e+t,c=ld(e,l),d=Qh(e[B],l),f=G0(c,d,e),h=_a(e,d,n,{dehydratedView:f});wa(c,h,s,jo(d,f))}}finally{F(a)}}else if(o!==void 0){let a=H0(o,s);a!==void 0&&(a[Ye]=n)}}var Gh=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-qe}};function Qi(t,n){return n}var Wh=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function Zi(t,n,e,i,r,o,s,a,l,c,d,f,h){wn("NgControlFlow");let m=G(),p=Be(),b=l!==void 0,w=G(),D=a?s.bind(w[xt][Ye]):s,U=new Wh(b,D);w[$e+t]=U,ha(m,p,t+1,n,e,i,r,on(p.consts,o),256),b&&ha(m,p,t+2,l,c,d,f,on(p.consts,h),512)}var qh=class extends zh{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-qe}at(n){return this.getLView(n)[Ye].$implicit}attach(n,e){let i=e[Ar];this.needsIndexUpdate||=n!==this.length,wa(this.lContainer,e,n,jo(this.templateTNode,i)),uA(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,fA(this.lContainer,n),mA(this.lContainer,n)}create(n,e){let i=ed(this.lContainer,this.templateTNode.tView.ssrId);return _a(this.hostLView,this.templateTNode,new Gh(this.lContainer,e,n),{dehydratedView:i})}destroy(n){bd(n[B],n)}updateValue(n,e){this.getLView(n)[Ye].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[Ye].$index=n}getLView(n){return hA(this.lContainer,n)}};function Ki(t){let n=F(null),e=gn();try{let i=G(),r=i[B],o=i[e],s=e+1,a=ld(i,s);if(o.liveCollection===void 0){let c=Qh(r,s);o.liveCollection=new qh(a,i,c)}else o.liveCollection.reset();let l=o.liveCollection;if(dA(l,t,o.trackByFn,n),l.updateIndexes(),o.hasEmptyBlock){let c=$i(),d=l.length===0;if(sn(i,c,d)){let f=e+2,h=ld(i,f);if(d){let m=Qh(r,f),p=G0(h,m,i),b=_a(i,m,void 0,{dehydratedView:p});wa(h,b,0,jo(m,p))}else r.firstUpdatePass&&lk(h),z0(h,0)}}}finally{F(n)}}function ld(t,n){return t[n]}function uA(t,n){if(t.length<=qe)return;let e=qe+n,i=t[e],r=i?i[Hi]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[ti];gT(o,r),Ur.delete(i[ni]),r.detachedLeaveAnimationFns=void 0}}function fA(t,n){if(t.length<=qe)return;let e=qe+n,i=t[e],r=i?i[Hi]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function mA(t,n){return fa(t,n)}function hA(t,n){return H0(t,n)}function Qh(t,n){return Sc(t,n)}function we(t,n,e){let i=G(),r=$i();if(sn(i,r,n)){let o=Be(),s=Ro();S0(s,i,t,n,i[Oe],e)}return we}function Zh(t,n,e,i,r){wp(n,t,e,r?"class":"style",i)}function E(t,n,e,i){let r=G(),o=r[B],s=t+$e,a=o.firstCreatePass?K0(s,r,2,n,T0,Gm(),e,i):o.data[s];if(ri(a)){let l=r[hn].tracingService;if(l&&l.componentCreate){let c=o.data[a.directiveStart+a.componentOffset];return l.componentCreate(ew(c),()=>(y_(t,n,r,a,i),E))}}return y_(t,n,r,a,i),E}function y_(t,n,e,i,r){if(k0(i,e,t,n,bw),ea(i)){let o=e[B];_p(o,e,i),J_(o,i,e)}r!=null&&_d(e,i)}function x(){let t=Be(),n=lt(),e=A0(n);return t.firstCreatePass&&Y0(t,e),qm(e)&&Qm(),$m(),e.classesWithoutHost!=null&&YS(e)&&Zh(t,e,G(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&XS(e)&&Zh(t,e,G(),e.stylesWithoutHost,!1),x}function Me(t,n,e,i){return E(t,n,e,i),x(),Me}function Ct(t,n,e,i){let r=G(),o=r[B],s=t+$e,a=o.firstCreatePass?Ek(s,o,2,n,e,i):o.data[s];return k0(a,r,t,n,bw),i!=null&&_d(r,a),Ct}function It(){let t=lt(),n=A0(t);return qm(n)&&Qm(),$m(),It}function Ft(t,n,e,i){return Ct(t,n,e,i),It(),Ft}var bw=(t,n,e,i,r)=>(Pc(!0),s0(n[Oe],i,th()));function Gt(){return G()}function Yi(t,n,e){let i=G(),r=$i();if(sn(i,r,n)){let o=Be(),s=Ro();M0(s,i,t,n,i[Oe],e)}return Yi}var Ca="en-US";var pA=Ca;function yw(t){typeof t=="string"&&(pA=t.toLowerCase().replace(/_/g,"-"))}function te(t,n,e){let i=G(),r=Be(),o=lt();return _w(r,i,i[Oe],o,t,n,e),te}function Ia(t,n,e){let i=G(),r=Be(),o=lt();return(o.type&3||e)&&X0(o,r,i,e,i[Oe],t,n,qc(o,i,n)),Ia}function _w(t,n,e,i,r,o,s){let a=!0,l=null;if((i.type&3||s)&&(l??=qc(i,n,o),X0(i,t,n,s,e,r,o,l)&&(a=!1)),a){let c=i.outputs?.[r],d=i.hostDirectiveOutputs?.[r];if(d&&d.length)for(let f=0;f<d.length;f+=2){let h=d[f],m=d[f+1];l??=qc(i,n,o),m_(i,n,h,m,r,l)}if(c&&c.length)for(let f of c)l??=qc(i,n,o),m_(i,n,f,r,r,l)}}function Ce(t=1){return Py(t)}function gA(t,n){let e=null,i=tT(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?p0(t,o,!0):rT(i,o))return r}return e}function Te(t){let n=G()[xt][Dt];if(!n.projection){let e=t?t.length:1,i=n.projection=cy(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let s=t?gA(o,t):0;s!==null&&(r[s]?r[s].projectionNext=o:i[s]=o,r[s]=o)}o=o.next}}}function $(t,n=0,e,i,r,o){let s=G(),a=Be(),l=i?t+1:null;l!==null&&ha(s,a,l,i,r,o,null,e);let c=$o(a,$e+t,16,null,e||null);c.projection===null&&(c.projection=n),Ym();let f=!s[Ar]||Wm();s[xt][Dt].projection[c.projection]===null&&l!==null?vA(s,a,l):f&&!md(c)&&ST(a,s,c)}function vA(t,n,e){let i=$e+e,r=n.data[i],o=t[i],s=ed(o,r.tView.ssrId),a=_a(t,r,void 0,{dehydratedView:s});wa(o,a,0,jo(r,s))}function St(t,n,e,i){return sw(t,n,e,i),St}function Xe(t,n,e){return ow(t,n,e),Xe}function Q(t){let n=G(),e=Be(),i=Rc();na(i+1);let r=Ip(e,i);if(t.dirty&&vy(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=lw(n,i);t.reset(o,U_),t.notifyOnChanges()}return!0}return!1}function Z(){return Cp(G(),Rc())}function Td(t,n,e,i,r){return dw(n,sw(t,e,i,r)),Td}function kd(t,n,e,i){return dw(t,ow(n,e,i)),kd}function Ad(t=1){na(Rc()+t)}function Wt(t){let n=Cy();return Lm(n,$e+t)}function Hc(t,n){return t<<17|n<<2}function $r(t){return t>>17&32767}function bA(t){return(t&2)==2}function yA(t,n){return t&131071|n<<17}function Kh(t){return t|2}function Bo(t){return(t&131068)>>2}function mh(t,n){return t&-131069|n<<2}function _A(t){return(t&1)===1}function Yh(t){return t|1}function wA(t,n,e,i,r,o){let s=o?n.classBindings:n.styleBindings,a=$r(s),l=Bo(s);t[i]=e;let c=!1,d;if(Array.isArray(e)){let f=e;d=f[1],(d===null||Io(f,d)>0)&&(c=!0)}else d=e;if(r)if(l!==0){let h=$r(t[a+1]);t[i+1]=Hc(h,a),h!==0&&(t[h+1]=mh(t[h+1],i)),t[a+1]=yA(t[a+1],i)}else t[i+1]=Hc(a,0),a!==0&&(t[a+1]=mh(t[a+1],i)),a=i;else t[i+1]=Hc(l,0),a===0?a=i:t[l+1]=mh(t[l+1],i),l=i;c&&(t[i+1]=Kh(t[i+1])),__(t,d,i,!0),__(t,d,i,!1),EA(n,d,t,i,o),s=Hc(a,l),o?n.classBindings=s:n.styleBindings=s}function EA(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&Io(o,n)>=0&&(e[i+1]=Yh(e[i+1]))}function __(t,n,e,i){let r=t[e+1],o=n===null,s=i?$r(r):Bo(r),a=!1;for(;s!==0&&(a===!1||o);){let l=t[s],c=t[s+1];DA(l,n)&&(a=!0,t[s+1]=i?Yh(c):Kh(c)),s=i?$r(c):Bo(c)}a&&(t[e+1]=i?Kh(r):Yh(r))}function DA(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?Io(t,n)>=0:!1}var bn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function xA(t){return t.substring(bn.key,bn.keyEnd)}function CA(t){return IA(t),ww(t,Ew(t,0,bn.textEnd))}function ww(t,n){let e=bn.textEnd;return e===n?-1:(n=bn.keyEnd=SA(t,bn.key=n,e),Ew(t,n,e))}function IA(t){bn.key=0,bn.keyEnd=0,bn.value=0,bn.valueEnd=0,bn.textEnd=t.length}function Ew(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function SA(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function ui(t,n,e){return Dw(t,n,e,!1),ui}function V(t,n){return Dw(t,n,null,!0),V}function fi(t){TA(FA,MA,t,!0)}function MA(t,n){for(let e=CA(n);e>=0;e=ww(n,e))Dc(t,xA(n),!0)}function Dw(t,n,e,i){let r=G(),o=Be(),s=kc(2);if(o.firstUpdatePass&&Cw(o,t,s,i),n!==Ot&&sn(r,s,n)){let a=o.data[gn()];Iw(o,a,r,r[Oe],t,r[s+1]=LA(n,e),i,s)}}function TA(t,n,e,i){let r=Be(),o=kc(2);r.firstUpdatePass&&Cw(r,null,o,i);let s=G();if(e!==Ot&&sn(s,o,e)){let a=r.data[gn()];if(Sw(a,i)&&!xw(r,o)){let l=i?a.classesWithoutHost:a.stylesWithoutHost;l!==null&&(e=bc(l,e||"")),Zh(r,a,s,e,i)}else PA(r,a,s,s[Oe],s[o+1],s[o+1]=OA(t,n,e),i,o)}}function xw(t,n){return n>=t.expandoStartIndex}function Cw(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[gn()],s=xw(t,e);Sw(o,i)&&n===null&&!s&&(n=!1),n=kA(r,o,n,i),wA(r,o,n,e,s,i)}}function kA(t,n,e,i){let r=Ry(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=hh(null,t,n,e,i),e=pa(e,n.attrs,i),o=null);else{let s=n.directiveStylingLast;if(s===-1||t[s]!==r)if(e=hh(r,t,n,e,i),o===null){let l=AA(t,n,i);l!==void 0&&Array.isArray(l)&&(l=hh(null,t,n,l[1],i),l=pa(l,n.attrs,i),RA(t,n,i,l))}else o=NA(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function AA(t,n,e){let i=e?n.classBindings:n.styleBindings;if(Bo(i)!==0)return t[$r(i)]}function RA(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[$r(r)]=i}function NA(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let s=t[o].hostAttrs;i=pa(i,s,e)}return pa(i,n.attrs,e)}function hh(t,n,e,i,r){let o=null,s=e.directiveEnd,a=e.directiveStylingLast;for(a===-1?a=e.directiveStart:a++;a<s&&(o=n[a],i=pa(i,o.hostAttrs,r),o!==t);)a++;return t!==null&&(e.directiveStylingLast=a),i}function pa(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let s=n[o];typeof s=="number"?r=s:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),Dc(t,s,e?!0:n[++o]))}return t===void 0?null:t}function OA(t,n,e){if(e==null||e==="")return gt;let i=[],r=an(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function FA(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&Dc(t,i,e)}function PA(t,n,e,i,r,o,s,a){r===Ot&&(r=gt);let l=0,c=0,d=0<r.length?r[0]:null,f=0<o.length?o[0]:null;for(;d!==null||f!==null;){let h=l<r.length?r[l+1]:void 0,m=c<o.length?o[c+1]:void 0,p=null,b;d===f?(l+=2,c+=2,h!==m&&(p=f,b=m)):f===null||d!==null&&d<f?(l+=2,p=d):(c+=2,p=f,b=m),p!==null&&Iw(t,n,e,i,p,b,s,a),d=l<r.length?r[l]:null,f=c<o.length?o[c]:null}}function Iw(t,n,e,i,r,o,s,a){if(!(n.type&3))return;let l=t.data,c=l[a+1],d=_A(c)?w_(l,n,e,r,Bo(c),s):void 0;if(!cd(d)){cd(o)||bA(c)&&(o=w_(l,null,e,r,a,s));let f=Pm(gn(),e);TT(i,s,f,r,o)}}function w_(t,n,e,i,r,o){let s=n===null,a;for(;r>0;){let l=t[r],c=Array.isArray(l),d=c?l[1]:l,f=d===null,h=e[r+1];h===Ot&&(h=f?gt:void 0);let m=f?xc(h,i):d===i?h:void 0;if(c&&!cd(m)&&(m=xc(l,i)),cd(m)&&(a=m,s))return a;let p=t[r+1];r=s?$r(p):Bo(p)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(a=xc(l,i))}return a}function cd(t){return t!==void 0}function LA(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=qs(an(t)))),t}function Sw(t,n){return(t.flags&(n?8:16))!==0}function le(t,n=""){let e=G(),i=Be(),r=t+$e,o=i.firstCreatePass?$o(i,r,1,n,null):i.data[r],s=VA(i,e,o,n);e[r]=s,Fc()&&bp(i,e,s,o),Ao(o,!1)}var VA=(t,n,e,i)=>(Pc(!0),HM(n[Oe],i));function jA(t,n,e,i=""){return sn(t,$i(),e)?n+Co(e)+i:Ot}function BA(t,n,e,i,r,o=""){let s=Sy(),a=xk(t,s,e,r);return kc(2),a?n+Co(e)+i+Co(r)+o:Ot}function Pt(t){return Sa("",t),Pt}function Sa(t,n,e){let i=G(),r=jA(i,t,n,e);return r!==Ot&&Mw(i,gn(),r),Sa}function qo(t,n,e,i,r){let o=G(),s=BA(o,t,n,e,i,r);return s!==Ot&&Mw(o,gn(),s),qo}function Mw(t,n,e){let i=Pm(n,t);zM(t[Oe],i,e)}function Rd(t,n,e){kp(n)&&(n=n());let i=G(),r=$i();if(sn(i,r,n)){let o=Be(),s=Ro();S0(s,i,t,n,i[Oe],e)}return Rd}function Fp(t,n){let e=kp(t);return e&&t.set(n),e}function Nd(t,n){let e=G(),i=Be(),r=lt();return _w(i,e,e[Oe],r,t,n),Nd}function E_(t,n,e){let i=Be();i.firstCreatePass&&Tw(n,i.data,i.blueprint,Vn(t),e)}function Tw(t,n,e,i,r){if(t=ut(t),Array.isArray(t))for(let o=0;o<t.length;o++)Tw(t[o],n,e,i,r);else{let o=Be(),s=G(),a=lt(),l=Sr(t)?t:ut(t.provide),c=Tm(t),d=a.providerIndexes&1048575,f=a.directiveStart,h=a.providerIndexes>>20;if(Sr(t)||!t.multi){let m=new Br(c,r,ge,null),p=gh(l,n,r?d:d+h,f);p===-1?(bh(Xc(a,s),o,l),ph(o,t,n.length),n.push(l),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(m),s.push(m)):(e[p]=m,s[p]=m)}else{let m=gh(l,n,d+h,f),p=gh(l,n,d,d+h),b=m>=0&&e[m],w=p>=0&&e[p];if(r&&!w||!r&&!b){bh(Xc(a,s),o,l);let D=zA(r?HA:UA,e.length,r,i,c,t);!r&&w&&(e[p].providerFactory=D),ph(o,t,n.length,0),n.push(l),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(D),s.push(D)}else{let D=kw(e[r?p:m],c,!r&&i);ph(o,t,m>-1?m:p,D)}!r&&i&&w&&e[p].componentProviders++}}}function ph(t,n,e,i){let r=Sr(n),o=my(n);if(r||o){let l=(o?ut(n.useClass):n).prototype.ngOnDestroy;if(l){let c=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let d=c.indexOf(e);d===-1?c.push(e,[i,l]):c[d+1].push(i,l)}else c.push(e,l)}}}function kw(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function gh(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function UA(t,n,e,i,r){return Xh(this.multi,[])}function HA(t,n,e,i,r){let o=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,l=ca(i,i[B],this.providerFactory.index,r);s=l.slice(0,a),Xh(o,s);for(let c=a;c<l.length;c++)s.push(l[c])}else s=[],Xh(o,s);return s}function Xh(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function zA(t,n,e,i,r,o){let s=new Br(t,e,ge,null);return s.multi=[],s.index=n,s.componentProviders=0,kw(s,r,i&&!e),s}function Ae(t,n){return e=>{e.providersResolver=(i,r)=>E_(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>E_(i,r?r(n):n,!0))}}function $A(t,n){let e=t[n];return e===Ot?void 0:e}function GA(t,n,e,i,r,o){let s=n+e;return sn(t,s,r)?Dk(t,s+1,o?i.call(o,r):i(r)):$A(t,s+1)}function mi(t,n){let e=Be(),i,r=t+$e;e.firstCreatePass?(i=WA(n,e.pipeRegistry),e.data[r]=i,i.onDestroy&&(e.destroyHooks??=[]).push(r,i.onDestroy)):i=e.data[r];let o=i.factory||(i.factory=Pi(i.type,!0)),s,a=_t(ge);try{let l=Yc(!1),c=o();return Yc(l),Vm(e,G(),r,c),c}finally{_t(a)}}function WA(t,n){if(n)for(let e=n.length-1;e>=0;e--){let i=n[e];if(t===i.name)return i}}function hi(t,n,e){let i=t+$e,r=G(),o=Lm(r,i);return qA(r,i)?GA(r,Iy(),n,o.transform,e,o):o.transform(e)}function qA(t,n){return t[B].data[n].pure}function Od(t,n){return wd(t,n)}var dd=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},Pp=(()=>{class t{compileModuleSync(e){return new sd(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=_m(e),o=m0(r.declarations).reduce((s,a)=>{let l=Pn(a);return l&&s.push(new qi(l)),s},[]);return new dd(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Aw=(()=>{class t{applicationErrorHandler=u($t);appRef=u(bt);taskService=u(oi);ngZone=u(R);zonelessEnabled=u(ra);tracing=u(_n,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Fe;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Gs):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(sh,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?By:ih;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Gs+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Rw(){return[{provide:Fn,useExisting:Aw},{provide:R,useClass:Ws},{provide:ra,useValue:!0}]}function QA(){return typeof $localize<"u"&&$localize.locale||Ca}var Fd=new y("",{factory:()=>u(Fd,{optional:!0,skipSelf:!0})||QA()});function me(t){return Yb(t)}function Lt(t,n){return Ts(t,n?.equal)}var ZA=t=>t;function Lp(t,n){if(typeof t=="function"){let e=nm(t,ZA,n?.equal);return Nw(e,n?.debugName)}else{let e=nm(t.source,t.computation,t.equal);return Nw(e,t.debugName)}}function Nw(t,n){let e=t[Ze],i=t;return i.set=r=>Zb(e,r),i.update=r=>Kb(e,r),i.asReadonly=Lc.bind(t),i}var Vw=Symbol("InputSignalNode#UNSET"),lR=Y(v({},ks),{transformFn:void 0,applyValueToInputSignal(t,n){hr(t,n)}});function jw(t,n){let e=Object.create(lR);e.value=t,e.transformFn=n?.transform;function i(){if(Mi(e),e.value===Vw){let r=null;throw new g(-950,r)}return e.value}return i[Ze]=e,i}var Un=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>va(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function Ow(t,n){return jw(t,n)}function cR(t){return jw(Vw,t)}var Bw=(Ow.required=cR,Ow);function Fw(t,n){return Sp(n)}function dR(t,n){return Mp(n)}var Ta=(Fw.required=dR,Fw);function Pw(t,n){return Sp(n)}function uR(t,n){return Mp(n)}var Uw=(Pw.required=uR,Pw);var jp=new y(""),fR=new y("");function Ma(t){return!t.moduleRef}function mR(t){let n=Ma(t)?t.r3Injector:t.moduleRef.injector,e=n.get(R);return e.run(()=>{Ma(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get($t),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),Ma(t)){let o=()=>n.destroy(),s=t.platformInjector.get(jp);s.add(o),n.onDestroy(()=>{r.unsubscribe(),s.delete(o)})}else{let o=()=>t.moduleRef.destroy(),s=t.platformInjector.get(jp);s.add(o),t.moduleRef.onDestroy(()=>{la(t.allPlatformModules,t.moduleRef),r.unsubscribe(),s.delete(o)})}return pR(i,e,()=>{let o=n.get(oi),s=o.add(),a=n.get(Np);return a.runInitializers(),a.donePromise.then(()=>{let l=n.get(Fd,Ca);if(yw(l||Ca),!n.get(fR,!0))return Ma(t)?n.get(bt):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(Ma(t)){let d=n.get(bt);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return hR?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(s)})})})}var hR;function pR(t,n,e){try{let i=e();return di(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var Pd=null;function gR(t=[],n){return de.create({name:n,providers:[{provide:Xs,useValue:"platform"},{provide:jp,useValue:new Set([()=>Pd=null])},...t]})}function vR(t=[]){if(Pd)return Pd;let n=gR(t);return Pd=n,gw(),bR(n),n}function bR(t){let n=t.get(ud,null);it(t,()=>{n?.forEach(e=>e())})}var yR=1e4;var eq=yR-1e3;var Ge=(()=>{class t{static __NG_ELEMENT_ID__=_R}return t})();function _R(t){return wR(lt(),G(),(t&16)===16)}function wR(t,n,e){if(ri(t)&&!e){let i=rn(t.index,n);return new Wi(i,i)}else if(t.type&175){let i=n[xt];return new Wi(i,n)}return null}var Hw=(()=>{class t{constructor(e){}static \u0275fac=function(i){return new(i||t)(C(bt))};static \u0275mod=L({type:t});static \u0275inj=P({})}return t})();function zw(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;xe(pe.BootstrapApplicationStart);try{let o=r?.injector??vR(i),s=[Rw(),Hy,...e||[]],a=new ma({providers:s,parent:o,debugName:"",runEnvironmentInitializers:!1});return mR({r3Injector:a.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{xe(pe.BootstrapApplicationEnd)}}function se(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function ka(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var Vp=Symbol("NOT_SET"),$w=new Set,ER=Y(v({},ks),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:Vp,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==Vp&&!po(this))return this.signal;try{for(let r of this.cleanup??$w)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=qn(this),i;try{i=this.userFn.apply(null,n)}finally{Ti(this,e)}return(this.value===Vp||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),Bp=class extends da{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,s=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(vt),s),this.scheduler=r;for(let a of pp){let l=e[a];if(l===void 0)continue;let c=Object.create(ER);c.sequence=this,c.phase=a,c.userFn=l,c.dirty=!0,c.signal=()=>(Mi(c),c.value),c.signal[Ze]=c,c.registerCleanupFn=d=>(c.cleanup??=new Set).add(d),this.nodes[a]=c,this.hooks[a]=d=>c.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??$w)e()}finally{ki(n)}}};function Gw(t,n){let e=n?.injector??u(de),i=e.get(Fn),r=e.get(vd),o=e.get(_n,null,{optional:!0});r.impl??=e.get(gp);let s=t;typeof s=="function"&&(s={mixedReadWrite:t});let a=e.get(No,null,{optional:!0}),l=new Bp(r.impl,[s.earlyRead,s.write,s.mixedReadWrite,s.read],a?.view,i,e,o?.snapshot(null));return r.impl.register(l),l}function Ww(t,n){let e=Pn(t),i=n.elementInjector||So();return new qi(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}function qw(t){let n=Pn(t);if(!n)return null;let e=new qi(n);return{get selector(){return e.selector},get type(){return e.componentType},get inputs(){return e.inputs},get outputs(){return e.outputs},get ngContentSelectors(){return e.ngContentSelectors},get isStandalone(){return n.standalone},get isSignal(){return n.signals}}}var Ld={production:!0,baseHref:"/math-boxes/"};var Qw=null;function qt(){return Qw}function Hp(t){Qw??=t}var Aa=class{},pi=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:()=>u(Zw),providedIn:"platform"})}return t})(),zp=new y(""),Zw=(()=>{class t extends pi{_location;_history;_doc=u(K);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return qt().getBaseHref(this._doc)}onPopState(e){let i=qt().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=qt().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function Vd(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function Kw(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function Dn(t){return t&&t[0]!=="?"?`?${t}`:t}var xn=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:()=>u(jd),providedIn:"root"})}return t})(),Qo=new y(""),jd=(()=>{class t extends xn{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??u(K).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Vd(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+Dn(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let s=this.prepareExternalUrl(r+Dn(o));this._platformLocation.pushState(e,i,s)}replaceState(e,i,r,o){let s=this.prepareExternalUrl(r+Dn(o));this._platformLocation.replaceState(e,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(C(pi),C(Qo,8))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Xi=(()=>{class t{_subject=new M;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=CR(Kw(Yw(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+Dn(i))}normalize(e){return t.stripTrailingSlash(xR(this._basePath,Yw(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Dn(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Dn(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Dn;static joinWithSlash=Vd;static stripTrailingSlash=Kw;static \u0275fac=function(i){return new(i||t)(C(xn))};static \u0275prov=_({token:t,factory:()=>DR(),providedIn:"root"})}return t})();function DR(){return new Xi(C(xn))}function xR(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function Yw(t){return t.replace(/\/index\.html$/,"")}function CR(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Wp=(()=>{class t extends xn{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(e){let i=Vd(this._baseHref,e);return i.length>0?"#"+i:i}pushState(e,i,r,o){let s=this.prepareExternalUrl(r+Dn(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,i,s)}replaceState(e,i,r,o){let s=this.prepareExternalUrl(r+Dn(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(C(pi),C(Qo,8))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})();var qp=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(de);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(ge(ci))};static \u0275dir=N({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Qe]})}return t})();function SR(t,n){return new g(2100,!1)}var $p=class{createSubscription(n,e,i){return me(()=>n.subscribe({next:e,error:i}))}dispose(n){me(()=>n.unsubscribe())}},Gp=class{createSubscription(n,e,i){return n.then(r=>e?.(r),r=>i?.(r)),{unsubscribe:()=>{e=null,i=null}}}dispose(n){n.unsubscribe()}},MR=new Gp,TR=new $p,Ra=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=u($t);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,i=>this._updateLatestValue(e,i),i=>this.applicationErrorHandler(i))}_selectStrategy(e){if(di(e))return MR;if(Sd(e))return TR;throw SR(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,i){e===this._obj&&(this._latestValue=i,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(i){return new(i||t)(ge(Ge,16))};static \u0275pipe=Tp({name:"async",type:t,pure:!1})}return t})();var Qp=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=P({})}return t})();function Na(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var Qr=class{};var Kp="browser";function Xw(t){return t===Kp}var Yp=(()=>{class t{static \u0275prov=_({token:t,providedIn:"root",factory:()=>new Zp(u(K),window)})}return t})(),Zp=class{document;window;offset=()=>[0,0];constructor(n,e){this.document=n,this.window=e}setOffset(n){Array.isArray(n)?this.offset=()=>n:this.offset=n}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(n,e){this.window.scrollTo(Y(v({},e),{left:n[0],top:n[1]}))}scrollToAnchor(n,e){let i=AR(this.document,n);i&&(this.scrollToElement(i,e),i.focus({preventScroll:!0}))}setHistoryScrollRestoration(n){try{this.window.history.scrollRestoration=n}catch(e){console.warn(Ht(2400,!1))}}scrollToElement(n,e){let i=n.getBoundingClientRect(),r=i.left+this.window.pageXOffset,o=i.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(Y(v({},e),{left:r-s[0],top:o-s[1]}))}};function AR(t,n){let e=t.getElementById(n)||t.getElementsByName(n)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let i=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=i.currentNode;for(;r;){let o=r.shadowRoot;if(o){let s=o.getElementById(n)||o.querySelector(`[name="${n}"]`);if(s)return s}r=i.nextNode()}}return null}var Oa=class{_doc;constructor(n){this._doc=n}manager},Bd=(()=>{class t extends Oa{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(C(K))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),zd=new y(""),tg=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(s=>{s.manager=this});let r=e.filter(s=>!(s instanceof Bd));this._plugins=r.slice().reverse();let o=e.find(s=>s instanceof Bd);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new g(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(C(zd),C(R))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),Xp="ng-app-id";function Jw(t){for(let n of t)n.remove()}function eE(t,n){let e=n.createElement("style");return e.textContent=t,e}function NR(t,n,e,i){let r=t.head?.querySelectorAll(`style[${Xp}="${n}"],link[${Xp}="${n}"]`);if(r)for(let o of r)o.removeAttribute(Xp),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function eg(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var ng=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,NR(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,eE);i?.forEach(r=>this.addUsage(r,this.external,eg))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(Jw(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Jw(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,eE(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,eg(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(C(K),C(Ho),C(Wr,8),C(Gr))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),Jp={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},ig=/%COMP%/g;var nE="%COMP%",OR=`_nghost-${nE}`,FR=`_ngcontent-${nE}`,PR=!0,LR=new y("",{factory:()=>PR});function VR(t){return FR.replace(ig,t)}function jR(t){return OR.replace(ig,t)}function iE(t,n){return n.map(e=>e.replace(ig,t))}var La=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,s,a,l=null,c=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=l,this.tracingService=c,this.defaultRenderer=new Fa(e,s,a,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof Hd?r.applyToHost(e):r instanceof Pa&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let s=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(i.encapsulation){case yn.Emulated:o=new Hd(l,c,i,this.appId,d,s,a,f);break;case yn.ShadowDom:return new Ud(l,e,i,s,a,this.nonce,f,c);case yn.ExperimentalIsolatedShadowDom:return new Ud(l,e,i,s,a,this.nonce,f);default:o=new Pa(l,c,i,d,s,a,f);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(C(tg),C(ng),C(Ho),C(LR),C(K),C(R),C(Wr),C(_n,8))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),Fa=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Jp[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(tE(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(tE(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new g(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=Jp[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=Jp[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(Bn.DashCase|Bn.Important)?n.style.setProperty(e,i,r&Bn.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&Bn.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=qt().getGlobalEventTarget(this.doc,n),!n))throw new g(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function tE(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Ud=class extends Fa{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,s,a,l){super(n,r,o,a),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=i.styles;c=iE(i.id,c);for(let f of c){let h=document.createElement("style");s&&h.setAttribute("nonce",s),h.textContent=f,this.shadowRoot.appendChild(h)}let d=i.getExternalStyles?.();if(d)for(let f of d){let h=eg(f,r);s&&h.setAttribute("nonce",s),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Pa=class extends Fa{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,s,a,l){super(n,o,s,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let c=i.styles;this.styles=l?iE(l,c):c,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Ur.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Hd=class extends Pa{contentAttr;hostAttr;constructor(n,e,i,r,o,s,a,l){let c=r+"-"+i.id;super(n,e,i,o,s,a,l,c),this.contentAttr=VR(c),this.hostAttr=jR(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var $d=class t extends Aa{supportsDOMEvents=!0;static makeCurrent(){Hp(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=BR();return e==null?null:UR(e)}resetBaseElement(){Va=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Na(document.cookie,n)}},Va=null;function BR(){return Va=Va||document.head.querySelector("base"),Va?Va.getAttribute("href"):null}function UR(t){return new URL(t,document.baseURI).pathname}var Gd=class{addToWindow(n){Et.getAngularTestability=(i,r=!0)=>{let o=n.findTestabilityInTree(i,r);if(o==null)throw new g(5103,!1);return o},Et.getAllAngularTestabilities=()=>n.getAllTestabilities(),Et.getAllAngularRootElements=()=>n.getAllRootElements();let e=i=>{let r=Et.getAllAngularTestabilities(),o=r.length,s=function(){o--,o==0&&i()};r.forEach(a=>{a.whenStable(s)})};Et.frameworkStabilizers||(Et.frameworkStabilizers=[]),Et.frameworkStabilizers.push(e)}findTestabilityInTree(n,e,i){if(e==null)return null;let r=n.getTestability(e);return r??(i?qt().isShadowRoot(e)?this.findTestabilityInTree(n,e.host,!0):this.findTestabilityInTree(n,e.parentElement,!0):null)}},HR=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),rE=["alt","control","meta","shift"],zR={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},$R={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},oE=(()=>{class t extends Oa{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let s=t.parseEventName(i),a=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>qt().onAndCancel(e,s.domEventName,a,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),s="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),s="code."),rE.forEach(c=>{let d=i.indexOf(c);d>-1&&(i.splice(d,1),s+=c+".")}),s+=o,i.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=s,l}static matchEventFullKeyCode(e,i){let r=zR[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),rE.forEach(s=>{if(s!==r){let a=$R[s];a(e)&&(o+=s+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(C(K))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})();function rg(t,n,e){return Re(this,null,function*(){let i=v({rootComponent:t},GR(n,e));return zw(i)})}function GR(t,n){return{platformRef:n?.platformRef,appProviders:[...sE,...t?.providers??[]],platformProviders:ZR}}function WR(){$d.makeCurrent()}function qR(){return new wt}function QR(){return tp(document),document}var ZR=[{provide:Gr,useValue:Kp},{provide:ud,useValue:WR,multi:!0},{provide:K,useFactory:QR}];var KR=[{provide:Id,useClass:Gd},{provide:Cd,useClass:xa},{provide:xa,useClass:xa}],sE=[{provide:Xs,useValue:"root"},{provide:wt,useFactory:qR},{provide:zd,useClass:Bd,multi:!0},{provide:zd,useClass:oE,multi:!0},La,ng,tg,{provide:ct,useExisting:La},{provide:Qr,useClass:HR},[]],ja=(()=>{class t{constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=P({providers:[...sE,...KR],imports:[Qp,Hw]})}return t})();var Ji=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init();for(let[e,i]of n.headers.entries())this.headers.set(e,i),this.normalizedNames.set(e,n.normalizedNames.get(e))}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=n.op==="a"?(this.headers.get(e)||[]).slice():[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(o===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=Array.isArray(o)?o:[o],a=this.headers.get(e);if(!a)return;a=a.filter(l=>s.indexOf(l)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var sg=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},ag=class{encodeKey(n){return aE(n)}encodeValue(n){return aE(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function YR(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[s,a]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],l=e.get(s)||[];l.push(a),e.set(s,l)}),e}var XR=/%(\d[a-f0-9])/gi,JR={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function aE(t){return encodeURIComponent(t).replace(XR,(n,e)=>JR[e]??n)}function Wd(t){return`${t}`}var gi=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new ag,n.fromString){if(n.fromObject)throw new g(2805,!1);this.map=YR(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(Wd):[Wd(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[n,e]of this.cloneFrom.map.entries())this.map.set(n,e);this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=n.op==="a"?(this.map.get(n.param)||[]).slice():[];e.push(Wd(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=(this.map.get(n.param)||[]).slice(),r=i.indexOf(Wd(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null}}};function eN(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function lE(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function cE(t){return typeof Blob<"u"&&t instanceof Blob}function dE(t){return typeof FormData<"u"&&t instanceof FormData}function tN(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var uE="Content-Type",fE="Accept",mE="text/plain",hE="application/json",nN=`${hE}, ${mE}, */*`,Zo=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(eN(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new g(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Ji,this.context??=new sg,!this.params)this.params=new gi,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),l=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||lE(this.body)||cE(this.body)||dE(this.body)||tN(this.body)?this.body:this.body instanceof gi?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||dE(this.body)?null:cE(this.body)?this.body.type||null:lE(this.body)?null:typeof this.body=="string"?mE:this.body instanceof gi?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?hE:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,s=n.priority||this.priority,a=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,d=n.credentials||this.credentials,f=n.referrer??this.referrer,h=n.integrity||this.integrity,m=n.referrerPolicy||this.referrerPolicy,p=n.transferCache??this.transferCache,b=n.timeout??this.timeout,w=n.body!==void 0?n.body:this.body,D=n.withCredentials??this.withCredentials,U=n.reportProgress??this.reportProgress,ue=n.headers||this.headers,ce=n.params||this.params,Xt=n.context??this.context;return n.setHeaders!==void 0&&(ue=Object.keys(n.setHeaders).reduce((ft,He)=>ft.set(He,n.setHeaders[He]),ue)),n.setParams&&(ce=Object.keys(n.setParams).reduce((ft,He)=>ft.set(He,n.setParams[He]),ce)),new t(e,i,w,{params:ce,headers:ue,context:Xt,reportProgress:U,responseType:r,withCredentials:D,transferCache:p,keepalive:o,cache:a,priority:s,timeout:b,mode:l,redirect:c,credentials:d,referrer:f,integrity:h,referrerPolicy:m})}},Zr=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Zr||{}),Ba=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new Ji,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},lg=class t extends Ba{constructor(n={}){super(n)}type=Zr.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Ua=class t extends Ba{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Zr.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Ko=class extends Ba{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},iN=200,rN=204;var oN=/^\)\]\}',?\n/;var sN=(()=>{class t{xhrFactory;tracingService=u(_n,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new g(-2800,!1);let i=this.xhrFactory;return T(null).pipe(Ve(()=>new z(o=>{let s=i.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((w,D)=>s.setRequestHeader(w,D.join(","))),e.headers.has(fE)||s.setRequestHeader(fE,nN),!e.headers.has(uE)){let w=e.detectContentTypeHeader();w!==null&&s.setRequestHeader(uE,w)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let w=e.responseType.toLowerCase();s.responseType=w!=="json"?w:"text"}let a=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let w=s.statusText||"OK",D=new Ji(s.getAllResponseHeaders()),U=s.responseURL||e.url;return l=new lg({headers:D,status:s.status,statusText:w,url:U}),l},d=this.maybePropagateTrace(()=>{let{headers:w,status:D,statusText:U,url:ue}=c(),ce=null;D!==rN&&(ce=typeof s.response>"u"?s.responseText:s.response),D===0&&(D=ce?iN:0);let Xt=D>=200&&D<300;if(e.responseType==="json"&&typeof ce=="string"){let ft=ce;ce=ce.replace(oN,"");try{ce=ce!==""?JSON.parse(ce):null}catch(He){ce=ft,Xt&&(Xt=!1,ce={error:He,text:ce})}}Xt?(o.next(new Ua({body:ce,headers:w,status:D,statusText:U,url:ue||void 0})),o.complete()):o.error(new Ko({error:ce,headers:w,status:D,statusText:U,url:ue||void 0}))}),f=this.maybePropagateTrace(w=>{let{url:D}=c(),U=new Ko({error:w,status:s.status||0,statusText:s.statusText||"Unknown Error",url:D||void 0});o.error(U)}),h=f;e.timeout&&(h=this.maybePropagateTrace(w=>{let{url:D}=c(),U=new Ko({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:D||void 0});o.error(U)}));let m=!1,p=this.maybePropagateTrace(w=>{m||(o.next(c()),m=!0);let D={type:Zr.DownloadProgress,loaded:w.loaded};w.lengthComputable&&(D.total=w.total),e.responseType==="text"&&s.responseText&&(D.partialText=s.responseText),o.next(D)}),b=this.maybePropagateTrace(w=>{let D={type:Zr.UploadProgress,loaded:w.loaded};w.lengthComputable&&(D.total=w.total),o.next(D)});return s.addEventListener("load",d),s.addEventListener("error",f),s.addEventListener("timeout",h),s.addEventListener("abort",f),e.reportProgress&&(s.addEventListener("progress",p),a!==null&&s.upload&&s.upload.addEventListener("progress",b)),s.send(a),o.next({type:Zr.Sent}),()=>{s.removeEventListener("error",f),s.removeEventListener("abort",f),s.removeEventListener("load",d),s.removeEventListener("timeout",h),e.reportProgress&&(s.removeEventListener("progress",p),a!==null&&s.upload&&s.upload.removeEventListener("progress",b)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(i){return new(i||t)(C(Qr))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),aN=new y("",{factory:()=>!0}),lN="XSRF-TOKEN",cN=new y("",{factory:()=>lN}),dN="X-XSRF-TOKEN",uN=new y("",{factory:()=>dN}),fN=(()=>{class t{cookieName=u(cN);doc=u(K);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Na(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),mN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=C(fN),r},providedIn:"root"})}return t})();function hN(t,n){if(!u(aN)||t.method==="GET"||t.method==="HEAD")return n(t);try{let r=u(pi).href,{origin:o}=new URL(r),{origin:s}=new URL(t.url,o);if(o!==s)return n(t)}catch(r){return n(t)}let e=u(mN).getToken(),i=u(uN);return e!=null&&!t.headers.has(i)&&(t=t.clone({headers:t.headers.set(i,e)})),n(t)}function pN(t,n){return n(t)}function gN(t,n,e){return(i,r)=>it(e,()=>n(i,o=>t(o,r)))}var vN=new y("",{factory:()=>[hN]}),pE=new y(""),bN=new y("",{factory:()=>!0});var yN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=C(sN),r},providedIn:"root"})}return t})();var _N=(()=>{class t{backend;injector;chain=null;pendingTasks=u(oa);contributeToStability=u(bN);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=this.injector.get(gE,null,{skipSelf:!0}),r=i!==null&&this.backend===i,o=this.injector.get(pE,[],r?{self:!0}:void 0),s=Array.from(new Set([...this.injector.get(vN),...o]));this.chain=s.reduceRight((a,l)=>gN(a,l,this.injector),pN)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(xr(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(C(yN),C(Le))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),gE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=C(_N),r},providedIn:"root"})}return t})();function og(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var cg=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof Zo)o=e;else{let l;r.headers instanceof Ji?l=r.headers:l=new Ji(r.headers);let c;r.params&&(r.params instanceof gi?c=r.params:c=new gi({fromObject:r.params})),o=new Zo(e,i,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let s=T(o).pipe(Oi(l=>this.handler.handle(l)));if(e instanceof Zo||r.observe==="events")return s;let a=s.pipe(fe(l=>l instanceof Ua));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(j(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new g(2806,!1);return l.body}));case"blob":return a.pipe(j(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new g(2807,!1);return l.body}));case"text":return a.pipe(j(l=>{if(l.body!==null&&typeof l.body!="string")throw new g(2808,!1);return l.body}));default:return a.pipe(j(l=>l.body))}case"response":return a;default:throw new g(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new gi().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,og(r,i))}post(e,i,r={}){return this.request("POST",e,og(r,i))}put(e,i,r={}){return this.request("PUT",e,og(r,i))}static \u0275fac=function(i){return new(i||t)(C(gE))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var vE=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(C(K))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var dg=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=C(EN),r},providedIn:"root"})}return t})(),EN=(()=>{class t extends dg{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case Se.NONE:return i;case Se.HTML:return ai(i,"HTML")?an(i):lp(this._doc,String(i)).toString();case Se.STYLE:return ai(i,"Style")?an(i):i;case Se.SCRIPT:if(ai(i,"Script"))return an(i);throw new g(5200,!1);case Se.URL:return ai(i,"URL")?an(i):ba(String(i));case Se.RESOURCE_URL:if(ai(i,"ResourceURL"))return an(i);throw new g(5201,!1);default:throw new g(5202,!1)}}bypassSecurityTrustHtml(e){return ip(e)}bypassSecurityTrustStyle(e){return rp(e)}bypassSecurityTrustScript(e){return op(e)}bypassSecurityTrustUrl(e){return sp(e)}bypassSecurityTrustResourceUrl(e){return ap(e)}static \u0275fac=function(i){return new(i||t)(C(K))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var X="primary",Ja=Symbol("RouteTitle"),pg=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Yr(t){return new pg(t)}function ug(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function IE(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let l={},c=t.slice(0,i.length);return ug(i,c,l)?{consumed:c,posParams:l}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),s=i.slice(r+1);if(o.length+s.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let a={};return!ug(o,t.slice(0,o.length),a)||!ug(s,t.slice(t.length-s.length),a)?null:{consumed:t,posParams:a}}function Xd(t){return new Promise((n,e)=>{t.pipe(Xn()).subscribe({next:i=>n(i),error:i=>e(i)})})}function DN(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!Hn(t[e],n[e]))return!1;return!0}function Hn(t,n){let e=t?gg(t):void 0,i=n?gg(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!SE(t[r],n[r]))return!1;return!0}function gg(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function SE(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function xN(t){return t.length>0?t[t.length-1]:null}function Jr(t){return Os(t)?t:di(t)?Ne(Promise.resolve(t)):T(t)}function ME(t){return Os(t)?Xd(t):Promise.resolve(t)}var CN={exact:AE,subset:RE},TE={exact:IN,subset:SN,ignored:()=>!0},kE={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},vg={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function yE(t,n,e){return CN[e.paths](t.root,n.root,e.matrixParams)&&TE[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function IN(t,n){return Hn(t,n)}function AE(t,n,e){if(!Kr(t.segments,n.segments)||!Zd(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!AE(t.children[i],n.children[i],e))return!1;return!0}function SN(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>SE(t[e],n[e]))}function RE(t,n,e){return NE(t,n,n.segments,e)}function NE(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Kr(r,e)||n.hasChildren()||!Zd(r,e,i))}else if(t.segments.length===e.length){if(!Kr(t.segments,e)||!Zd(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!RE(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Kr(t.segments,r)||!Zd(t.segments,r,i)||!t.children[X]?!1:NE(t.children[X],n,o,i)}}function Zd(t,n,e){return n.every((i,r)=>TE[e](t[r].parameters,i.parameters))}var Zt=class{root;queryParams;fragment;_queryParamMap;constructor(n=new Ee([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Yr(this.queryParams),this._queryParamMap}toString(){return kN.serialize(this)}},Ee=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Kd(this)}},er=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=Yr(this.parameters),this._parameterMap}toString(){return FE(this)}};function MN(t,n){return Kr(t,n)&&t.every((e,i)=>Hn(e.parameters,n[i].parameters))}function Kr(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function TN(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===X&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==X&&(e=e.concat(n(r,i)))}),e}var ir=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:()=>new bi,providedIn:"root"})}return t})(),bi=class{parse(n){let e=new yg(n);return new Zt(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Ha(n.root,!0)}`,i=NN(n.queryParams),r=typeof n.fragment=="string"?`#${AN(n.fragment)}`:"";return`${e}${i}${r}`}},kN=new bi;function Kd(t){return t.segments.map(n=>FE(n)).join("/")}function Ha(t,n){if(!t.hasChildren())return Kd(t);if(n){let e=t.children[X]?Ha(t.children[X],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==X&&i.push(`${r}:${Ha(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=TN(t,(i,r)=>r===X?[Ha(t.children[X],!1)]:[`${r}:${Ha(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[X]!=null?`${Kd(t)}/${e[0]}`:`${Kd(t)}/(${e.join("//")})`}}function OE(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function qd(t){return OE(t).replace(/%3B/gi,";")}function AN(t){return encodeURI(t)}function bg(t){return OE(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Yd(t){return decodeURIComponent(t)}function _E(t){return Yd(t.replace(/\+/g,"%20"))}function FE(t){return`${bg(t.path)}${RN(t.parameters)}`}function RN(t){return Object.entries(t).map(([n,e])=>`;${bg(n)}=${bg(e)}`).join("")}function NN(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${qd(e)}=${qd(r)}`).join("&"):`${qd(e)}=${qd(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var ON=/^[^\/()?;#]+/;function fg(t){let n=t.match(ON);return n?n[0]:""}var FN=/^[^\/()?;=#]+/;function PN(t){let n=t.match(FN);return n?n[0]:""}var LN=/^[^=?&#]+/;function VN(t){let n=t.match(LN);return n?n[0]:""}var jN=/^[^&#]+/;function BN(t){let n=t.match(jN);return n?n[0]:""}var yg=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Ee([],{}):new Ee([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new g(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[X]=new Ee(e,i)),r}parseSegment(){let n=fg(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new g(4009,!1);return this.capture(n),new er(Yd(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=PN(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=fg(this.remaining);r&&(i=r,this.capture(i))}n[Yd(e)]=Yd(i)}parseQueryParam(n){let e=VN(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let s=BN(this.remaining);s&&(i=s,this.capture(i))}let r=_E(e),o=_E(i);if(n.hasOwnProperty(r)){let s=n[r];Array.isArray(s)||(s=[s],n[r]=s),s.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=fg(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new g(4010,!1);let s;r.indexOf(":")>-1?(s=r.slice(0,r.indexOf(":")),this.capture(s),this.capture(":")):n&&(s=X);let a=this.parseChildren(e+1);i[s??X]=Object.keys(a).length===1&&a[X]?a[X]:new Ee([],a),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new g(4011,!1)}};function PE(t){return t.segments.length>0?new Ee([],{[X]:t}):t}function LE(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=LE(r);if(i===X&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))n[s]=a;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new Ee(t.segments,n);return UN(e)}function UN(t){if(t.numberOfChildren===1&&t.children[X]){let n=t.children[X];return new Ee(t.segments.concat(n.segments),n.children)}return t}function tr(t){return t instanceof Zt}function VE(t,n,e=null,i=null,r=new bi){let o=jE(t);return BE(o,n,e,i,r)}function jE(t){let n;function e(o){let s={};for(let l of o.children){let c=e(l);s[l.outlet]=c}let a=new Ee(o.url,s);return o===t&&(n=a),a}let i=e(t.root),r=PE(i);return n??r}function BE(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return mg(o,o,o,e,i,r);let s=HN(n);if(s.toRoot())return mg(o,o,new Ee([],{}),e,i,r);let a=zN(s,o,t),l=a.processChildren?$a(a.segmentGroup,a.index,s.commands):HE(a.segmentGroup,a.index,s.commands);return mg(o,a.segmentGroup,l,e,i,r)}function Jd(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Wa(t){return typeof t=="object"&&t!=null&&t.outlets}function wE(t,n,e){t||="\u0275";let i=new Zt;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function mg(t,n,e,i,r,o){let s={};for(let[c,d]of Object.entries(i??{}))s[c]=Array.isArray(d)?d.map(f=>wE(c,f,o)):wE(c,d,o);let a;t===n?a=e:a=UE(t,n,e);let l=PE(LE(a));return new Zt(l,s,r)}function UE(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=UE(o,n,e)}),new Ee(t.segments,i)}var eu=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&Jd(i[0]))throw new g(4003,!1);let r=i.find(Wa);if(r&&r!==xN(i))throw new g(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function HN(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new eu(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:a}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?e=!0:a===".."?n++:a!=""&&r.push(a))}),r):[...r,o]},[]);return new eu(e,n,i)}var Xo=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function zN(t,n,e){if(t.isAbsolute)return new Xo(n,!0,0);if(!e)return new Xo(n,!1,NaN);if(e.parent===null)return new Xo(e,!0,0);let i=Jd(t.commands[0])?0:1,r=e.segments.length-1+i;return $N(e,r,t.numberOfDoubleDots)}function $N(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new g(4005,!1);r=i.segments.length}return new Xo(i,!1,r-o)}function GN(t){return Wa(t[0])?t[0].outlets:{[X]:t}}function HE(t,n,e){if(t??=new Ee([],{}),t.segments.length===0&&t.hasChildren())return $a(t,n,e);let i=WN(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new Ee(t.segments.slice(0,i.pathIndex),{});return o.children[X]=new Ee(t.segments.slice(i.pathIndex),t.children),$a(o,0,r)}else return i.match&&r.length===0?new Ee(t.segments,{}):i.match&&!t.hasChildren()?_g(t,n,e):i.match?$a(t,0,r):_g(t,n,e)}function $a(t,n,e){if(e.length===0)return new Ee(t.segments,{});{let i=GN(e),r={};if(Object.keys(i).some(o=>o!==X)&&t.children[X]&&t.numberOfChildren===1&&t.children[X].segments.length===0){let o=$a(t.children[X],n,e);return new Ee(t.segments,o.children)}return Object.entries(i).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=HE(t.children[o],n,s))}),Object.entries(t.children).forEach(([o,s])=>{i[o]===void 0&&(r[o]=s)}),new Ee(t.segments,r)}}function WN(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let s=t.segments[r],a=e[i];if(Wa(a))break;let l=`${a}`,c=i<e.length-1?e[i+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!DE(l,c,s))return o;i+=2}else{if(!DE(l,{},s))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function _g(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(Wa(o)){let l=qN(o.outlets);return new Ee(i,l)}if(r===0&&Jd(e[0])){let l=t.segments[n];i.push(new er(l.path,EE(e[0]))),r++;continue}let s=Wa(o)?o.outlets[X]:`${o}`,a=r<e.length-1?e[r+1]:null;s&&a&&Jd(a)?(i.push(new er(s,EE(a))),r+=2):(i.push(new er(s,{})),r++)}return new Ee(i,{})}function qN(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=_g(new Ee([],{}),0,i))}),n}function EE(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function DE(t,n,e){return t==e.path&&Hn(n,e.parameters)}var Jo="imperative",rt=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(rt||{}),Kt=class{id;url;constructor(n,e){this.id=n,this.url=e}},nr=class extends Kt{type=rt.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},cn=class extends Kt{urlAfterRedirects;type=rt.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},yt=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(yt||{}),ts=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(ts||{}),ln=class extends Kt{reason;code;type=rt.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function zE(t){return t instanceof ln&&(t.code===yt.Redirect||t.code===yt.SupersededByNewNavigation)}var zn=class extends Kt{reason;code;type=rt.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},Xr=class extends Kt{error;target;type=rt.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},qa=class extends Kt{urlAfterRedirects;state;type=rt.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},tu=class extends Kt{urlAfterRedirects;state;type=rt.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},nu=class extends Kt{urlAfterRedirects;state;shouldActivate;type=rt.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},iu=class extends Kt{urlAfterRedirects;state;type=rt.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ru=class extends Kt{urlAfterRedirects;state;type=rt.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ou=class{route;type=rt.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},su=class{route;type=rt.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},au=class{snapshot;type=rt.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},lu=class{snapshot;type=rt.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},cu=class{snapshot;type=rt.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},du=class{snapshot;type=rt.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ns=class{routerEvent;position;anchor;scrollBehavior;type=rt.Scroll;constructor(n,e,i,r){this.routerEvent=n,this.position=e,this.anchor=i,this.scrollBehavior=r}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}},is=class{},Qa=class{},rs=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function QN(t){return!(t instanceof is)&&!(t instanceof rs)&&!(t instanceof Qa)}var uu=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new eo(this.rootInjector)}},eo=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new uu(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(C(Le))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),fu=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=wg(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=wg(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=Eg(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return Eg(n,this._root).map(e=>e.value)}};function wg(t,n){if(t===n.value)return n;for(let e of n.children){let i=wg(t,e);if(i)return i}return null}function Eg(t,n){if(t===n.value)return[n];for(let e of n.children){let i=Eg(t,e);if(i.length)return i.unshift(n),i}return[]}var Qt=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function Yo(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Za=class extends fu{snapshot;constructor(n,e){super(n),this.snapshot=e,Ag(this,n)}toString(){return this.snapshot.toString()}};function $E(t,n){let e=ZN(t,n),i=new je([new er("",{})]),r=new je({}),o=new je({}),s=new je({}),a=new je(""),l=new yi(i,r,s,a,o,X,t,e.root);return l.snapshot=e.root,new Za(new Qt(l,[]),e)}function ZN(t,n){let e={},i={},r={},s=new os([],e,r,"",i,X,t,null,{},n);return new Ka("",new Qt(s,[]))}var yi=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,s,a,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(j(c=>c[Ja]))??T(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(j(n=>Yr(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(j(n=>Yr(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function kg(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:v(v({},n.params),t.params),data:v(v({},n.data),t.data),resolve:v(v(v(v({},t.data),n.data),r?.data),t._resolvedData)}:i={params:v({},t.params),data:v({},t.data),resolve:v(v({},t.data),t._resolvedData??{})},r&&WE(r)&&(i.resolve[Ja]=r.title),i}var os=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Ja]}constructor(n,e,i,r,o,s,a,l,c,d){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=s,this.component=a,this.routeConfig=l,this._resolve=c,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Yr(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Yr(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},Ka=class extends fu{url;constructor(n,e){super(e),this.url=n,Ag(this,e)}toString(){return GE(this._root)}};function Ag(t,n){n.value._routerState=t,n.children.forEach(e=>Ag(t,e))}function GE(t){let n=t.children.length>0?` { ${t.children.map(GE).join(", ")} } `:"";return`${t.value}${n}`}function hg(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Hn(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Hn(n.params,e.params)||t.paramsSubject.next(e.params),DN(n.url,e.url)||t.urlSubject.next(e.url),Hn(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Dg(t,n){let e=Hn(t.params,n.params)&&MN(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||Dg(t.parent,n.parent))}function WE(t){return typeof t.title=="string"||t.title===null}var qE=new y(""),el=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=X;activateEvents=new ee;deactivateEvents=new ee;attachEvents=new ee;detachEvents=new ee;routerOutletData=Bw();parentContexts=u(eo);location=u(ci);changeDetector=u(Ge);inputBinder=u(tl,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new g(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new g(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new g(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new g(4013,!1);this._activatedRoute=e;let r=this.location,s=e.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new xg(e,a,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Qe]})}return t})(),xg=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===yi?this.route:n===eo?this.childContexts:n===qE?this.outletData:this.parent.get(n,e)}},tl=new y(""),Rg=(()=>{class t{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:i}=e,r=Eo([i.queryParams,i.params,i.data]).pipe(Ve(([o,s,a],l)=>(a=v(v(v({},o),s),a),l===0?T(a):Promise.resolve(a)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(e);return}let s=qw(i.component);if(!s){this.unsubscribeFromRouteData(e);return}for(let{templateName:a}of s.inputs)e.activatedComponentRef.setInput(a,o[a])});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),Ng=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&Me(0,"router-outlet")},dependencies:[el],encapsulation:2})}return t})();function Og(t){let n=t.children&&t.children.map(Og),e=n?Y(v({},t),{children:n}):v({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==X&&(e.component=Ng),e}function KN(t,n,e){let i=Ya(t,n._root,e?e._root:void 0);return new Za(i,n)}function Ya(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=YN(t,n,e);return new Qt(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=n.value,s.children=n.children.map(a=>Ya(t,a)),s}}let i=XN(n.value),r=n.children.map(o=>Ya(t,o));return new Qt(i,r)}}function YN(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return Ya(t,i,r);return Ya(t,i)})}function XN(t){return new yi(new je(t.url),new je(t.params),new je(t.queryParams),new je(t.fragment),new je(t.data),t.outlet,t.component,t)}var ss=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},QE="ngNavigationCancelingError";function mu(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=tr(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=ZE(!1,yt.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function ZE(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[QE]=!0,e.cancellationCode=n,e}function JN(t){return KE(t)&&tr(t.url)}function KE(t){return!!t&&t[QE]}var Cg=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),hg(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=Yo(e);n.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],i),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let s=i.getContext(r.outlet);s&&this.deactivateChildRoutes(n,e,s.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=Yo(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(i&&i.outlet){let s=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:s,route:n,contexts:a})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=Yo(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=Yo(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new du(o.value.snapshot))}),n.children.length&&this.forwardEvent(new lu(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(hg(r),r===o)if(r.component){let s=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,s.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let s=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),hg(a.route.value),this.activateChildRoutes(n,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(n,null,s.children)}else this.activateChildRoutes(n,null,i)}},hu=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},es=class{component;route;constructor(n,e){this.component=n,this.route=e}};function e1(t,n,e){let i=t._root,r=n?n._root:null;return za(i,r,e,[i.value])}function t1(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function ls(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!gm(t)?t:n.get(t):i}function za(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Yo(n);return t.children.forEach(s=>{n1(s,o[s.value.outlet],e,i.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>Ga(a,e.getContext(s),r)),r}function n1(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,s=n?n.value:null,a=e?e.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let l=i1(s,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new hu(i)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?za(t,n,a?a.children:null,i,r):za(t,n,e,i,r),l&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new es(a.outlet.component,s))}else s&&Ga(n,a,r),r.canActivateChecks.push(new hu(i)),o.component?za(t,null,a?a.children:null,i,r):za(t,null,e,i,r);return r}function i1(t,n,e){if(typeof e=="function")return it(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!Kr(t.url,n.url);case"pathParamsOrQueryParamsChange":return!Kr(t.url,n.url)||!Hn(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Dg(t,n)||!Hn(t.queryParams,n.queryParams);default:return!Dg(t,n)}}function Ga(t,n,e){let i=Yo(t),r=t.value;Object.entries(i).forEach(([o,s])=>{r.component?n?Ga(s,n.children.getContext(o),e):Ga(s,null,e):Ga(s,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new es(n.outlet.component,r)):e.canDeactivateChecks.push(new es(null,r)):e.canDeactivateChecks.push(new es(null,r))}function nl(t){return typeof t=="function"}function r1(t){return typeof t=="boolean"}function o1(t){return t&&nl(t.canLoad)}function s1(t){return t&&nl(t.canActivate)}function a1(t){return t&&nl(t.canActivateChild)}function l1(t){return t&&nl(t.canDeactivate)}function c1(t){return t&&nl(t.canMatch)}function YE(t){return t instanceof _r||t?.name==="EmptyError"}var Qd=Symbol("INITIAL_VALUE");function as(){return Ve(t=>Eo(t.map(n=>n.pipe(We(1),Jn(Qd)))).pipe(j(n=>{for(let e of n)if(e!==!0){if(e===Qd)return Qd;if(e===!1||d1(e))return e}return!0}),fe(n=>n!==Qd),We(1)))}function d1(t){return tr(t)||t instanceof ss}function XE(t){return t.aborted?T(void 0).pipe(We(1)):new z(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function JE(t){return Pe(XE(t))}function u1(t){return tt(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?T(Y(v({},n),{guardsResult:!0})):f1(o,e,i).pipe(tt(s=>s&&r1(s)?m1(e,r,t):T(s)),j(s=>Y(v({},n),{guardsResult:s})))})}function f1(t,n,e){return Ne(t).pipe(tt(i=>b1(i.component,i.route,e,n)),Xn(i=>i!==!0,!0))}function m1(t,n,e){return Ne(n).pipe(Oi(i=>Ri(p1(i.route.parent,e),h1(i.route,e),v1(t,i.path),g1(t,i.route))),Xn(i=>i!==!0,!0))}function h1(t,n){return t!==null&&n&&n(new cu(t)),T(!0)}function p1(t,n){return t!==null&&n&&n(new au(t)),T(!0)}function g1(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return T(!0);let i=e.map(r=>Fs(()=>{let o=n._environmentInjector,s=ls(r,o),a=s1(s)?s.canActivate(n,t):it(o,()=>s(n,t));return Jr(a).pipe(Xn())}));return T(i).pipe(as())}function v1(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>t1(o)).filter(o=>o!==null).map(o=>Fs(()=>{let s=o.guards.map(a=>{let l=o.node._environmentInjector,c=ls(a,l),d=a1(c)?c.canActivateChild(e,t):it(l,()=>c(e,t));return Jr(d).pipe(Xn())});return T(s).pipe(as())}));return T(r).pipe(as())}function b1(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return T(!0);let o=r.map(s=>{let a=n._environmentInjector,l=ls(s,a),c=l1(l)?l.canDeactivate(t,n,e,i):it(a,()=>l(t,n,e,i));return Jr(c).pipe(Xn())});return T(o).pipe(as())}function y1(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return T(!0);let s=o.map(a=>{let l=ls(a,t),c=o1(l)?l.canLoad(n,e):it(t,()=>l(n,e)),d=Jr(c);return r?d.pipe(JE(r)):d});return T(s).pipe(as(),eD(i))}function eD(t){return Zf(pt(n=>{if(typeof n!="boolean")throw mu(t,n)}),j(n=>n===!0))}function _1(t,n,e,i,r,o){let s=n.canMatch;if(!s||s.length===0)return T(!0);let a=s.map(l=>{let c=ls(l,t),d=c1(c)?c.canMatch(n,e,r):it(t,()=>c(n,e,r));return Jr(d).pipe(JE(o))});return T(a).pipe(as(),eD(i))}var vi=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},Xa=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function w1(t){throw new g(4e3,!1)}function E1(t){throw ZE(!1,yt.GuardRejected)}var Ig=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}lineralizeSegments(n,e){return Re(this,null,function*(){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[X])throw w1(`${n.redirectTo}`);r=r.children[X]}})}applyRedirectCommands(n,e,i,r,o){return Re(this,null,function*(){let s=yield D1(e,r,o);if(s instanceof Zt)throw new Xa(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),n,i);if(s[0]==="/")throw new Xa(a);return a})}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new Zt(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);i[r]=e[a]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),s={};return Object.entries(e.children).forEach(([a,l])=>{s[a]=this.createSegmentGroup(n,l,i,r)}),new Ee(o,s)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new g(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function D1(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return Xd(Jr(it(e,()=>i(n))))}function x1(t,n){return t.providers&&!t._injector&&(t._injector=Go(t.providers,n,`Route: ${t.path}`)),t._injector??n}function Cn(t){return t.outlet||X}function C1(t,n){let e=t.filter(i=>Cn(i)===n);return e.push(...t.filter(i=>Cn(i)!==n)),e}var Sg={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function tD(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function I1(t,n,e,i,r,o,s){let a=nD(t,n,e);if(!a.matched)return T(a);let l=tD(o(a));return i=x1(n,i),_1(i,n,e,r,l,s).pipe(j(c=>c===!0?a:v({},Sg)))}function nD(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?v({},Sg):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||IE)(e,t,n);if(!r)return v({},Sg);let o={};Object.entries(r.posParams??{}).forEach(([a,l])=>{o[a]=l.path});let s=r.consumed.length>0?v(v({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function xE(t,n,e,i,r){return e.length>0&&T1(t,e,i,r)?{segmentGroup:new Ee(n,M1(i,new Ee(e,t.children))),slicedSegments:[]}:e.length===0&&k1(t,e,i)?{segmentGroup:new Ee(t.segments,S1(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new Ee(t.segments,t.children),slicedSegments:e}}function S1(t,n,e,i){let r={};for(let o of e)if(gu(t,n,o)&&!i[Cn(o)]){let s=new Ee([],{});r[Cn(o)]=s}return v(v({},i),r)}function M1(t,n){let e={};e[X]=n;for(let i of t)if(i.path===""&&Cn(i)!==X){let r=new Ee([],{});e[Cn(i)]=r}return e}function T1(t,n,e,i){return e.some(r=>!gu(t,n,r)||!(Cn(r)!==X)?!1:!(i!==void 0&&Cn(r)===i))}function k1(t,n,e){return e.some(i=>gu(t,n,i))}function gu(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function A1(t,n,e){return n.length===0&&!t.children[e]}var Mg=class{};function R1(t,n,e,i,r,o,s="emptyOnly",a){return Re(this,null,function*(){return new Tg(t,n,e,i,r,s,o,a).recognize()})}var N1=31,Tg=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,s,a,l){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.abortSignal=l,this.applyRedirects=new Ig(this.urlSerializer,this.urlTree)}noMatchError(n){return new g(4002,`'${n.segmentGroup}'`)}recognize(){return Re(this,null,function*(){let n=xE(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=yield this.match(n),r=new Qt(i,e),o=new Ka("",r),s=VE(i,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}})}match(n){return Re(this,null,function*(){let e=new os([],Object.freeze({}),Object.freeze(v({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),X,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,n,X,e),rootSnapshot:e}}catch(i){if(i instanceof Xa)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof vi?this.noMatchError(i):i}})}processSegmentGroup(n,e,i,r,o){return Re(this,null,function*(){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let s=yield this.processSegment(n,e,i,i.segments,r,!0,o);return s instanceof Qt?[s]:[]})}processChildren(n,e,i,r){return Re(this,null,function*(){let o=[];for(let l of Object.keys(i.children))l==="primary"?o.unshift(l):o.push(l);let s=[];for(let l of o){let c=i.children[l],d=C1(e,l),f=yield this.processSegmentGroup(n,d,c,l,r);s.push(...f)}let a=iD(s);return O1(a),a})}processSegment(n,e,i,r,o,s,a){return Re(this,null,function*(){for(let l of e)try{return yield this.processSegmentAgainstRoute(l._injector??n,e,l,i,r,o,s,a)}catch(c){if(c instanceof vi||YE(c))continue;throw c}if(A1(i,r,o))return new Mg;throw new vi(i)})}processSegmentAgainstRoute(n,e,i,r,o,s,a,l){return Re(this,null,function*(){if(Cn(i)!==s&&(s===X||!gu(r,o,i)))throw new vi(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,s,l);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,s,l);throw new vi(r)})}expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,s,a){return Re(this,null,function*(){let{matched:l,parameters:c,consumedSegments:d,positionalParamSegments:f,remainingSegments:h}=nD(e,r,o);if(!l)throw new vi(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>N1&&(this.allowRedirects=!1));let m=this.createSnapshot(n,r,o,c,a);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let p=yield this.applyRedirects.applyRedirectCommands(d,r.redirectTo,f,tD(m),n),b=yield this.applyRedirects.lineralizeSegments(r,p);return this.processSegment(n,i,e,b.concat(h),s,!1,a)})}createSnapshot(n,e,i,r,o){let s=new os(i,r,Object.freeze(v({},this.urlTree.queryParams)),this.urlTree.fragment,P1(e),Cn(e),e.component??e._loadedComponent??null,e,L1(e),n),a=kg(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(a.params),s.data=Object.freeze(a.data),s}matchSegmentAgainstRoute(n,e,i,r,o,s){return Re(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=ue=>this.createSnapshot(n,i,ue.consumedSegments,ue.parameters,s),l=yield Xd(I1(e,i,r,n,this.urlSerializer,a,this.abortSignal));if(i.path==="**"&&(e.children={}),!l?.matched)throw new vi(e);n=i._injector??n;let{routes:c}=yield this.getChildConfig(n,i,r),d=i._loadedInjector??n,{parameters:f,consumedSegments:h,remainingSegments:m}=l,p=this.createSnapshot(n,i,h,f,s),{segmentGroup:b,slicedSegments:w}=xE(e,h,m,c,o);if(w.length===0&&b.hasChildren()){let ue=yield this.processChildren(d,c,b,p);return new Qt(p,ue)}if(c.length===0&&w.length===0)return new Qt(p,[]);let D=Cn(i)===o,U=yield this.processSegment(d,c,b,w,D?X:o,!0,p);return new Qt(p,U instanceof Qt?[U]:[])})}getChildConfig(n,e,i){return Re(this,null,function*(){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield Xd(y1(n,e,i,this.urlSerializer,this.abortSignal))){let o=yield this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw E1(e)}return{routes:[],injector:n}})}};function O1(t){t.sort((n,e)=>n.value.outlet===X?-1:e.value.outlet===X?1:n.value.outlet.localeCompare(e.value.outlet))}function F1(t){let n=t.value.routeConfig;return n&&n.path===""}function iD(t){let n=[],e=new Set;for(let i of t){if(!F1(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=iD(i.children);n.push(new Qt(i.value,r))}return n.filter(i=>!e.has(i))}function P1(t){return t.data||{}}function L1(t){return t.resolve||{}}function V1(t,n,e,i,r,o,s){return tt(a=>Re(null,null,function*(){let{state:l,tree:c}=yield R1(t,n,e,i,a.extractedUrl,r,o,s);return Y(v({},a),{targetSnapshot:l,urlAfterRedirects:c})}))}function j1(t){return tt(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return T(n);let r=new Set(i.map(a=>a.route)),o=new Set;for(let a of r)if(!o.has(a))for(let l of rD(a))o.add(l);let s=0;return Ne(o).pipe(Oi(a=>r.has(a)?B1(a,e,t):(a.data=kg(a,a.parent,t).resolve,T(void 0))),pt(()=>s++),sc(1),tt(a=>s===o.size?T(n):Ke))})}function rD(t){let n=t.children.map(e=>rD(e)).flat();return[t,...n]}function B1(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!WE(i)&&(r[Ja]=i.title),Fs(()=>(t.data=kg(t,t.parent,e).resolve,U1(r,t,n).pipe(j(o=>(t._resolvedData=o,t.data=v(v({},t.data),o),null)))))}function U1(t,n,e){let i=gg(t);if(i.length===0)return T({});let r={};return Ne(i).pipe(tt(o=>H1(t[o],n,e).pipe(Xn(),pt(s=>{if(s instanceof ss)throw mu(new bi,s);r[o]=s}))),sc(1),j(()=>r),Ni(o=>YE(o)?Ke:Ns(o)))}function H1(t,n,e){let i=n._environmentInjector,r=ls(t,i),o=r.resolve?r.resolve(n,e):it(i,()=>r(n,e));return Jr(o)}function CE(t){return Ve(n=>{let e=t(n);return e?Ne(e).pipe(j(()=>n)):T(n)})}var Fg=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===X);return i}getResolvedTitleForRoute(e){return e.data[Ja]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:()=>u(oD),providedIn:"root"})}return t})(),oD=(()=>{class t extends Fg{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(C(vE))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),rr=new y("",{factory:()=>({})}),cs=new y(""),vu=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(Pp);loadComponent(e,i){return Re(this,null,function*(){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=Re(this,null,function*(){try{let o=yield ME(it(e,()=>i.loadComponent())),s=yield lD(aD(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=s,s}finally{this.componentLoaders.delete(i)}});return this.componentLoaders.set(i,r),r})}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=Re(this,null,function*(){try{let o=yield sD(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}});return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function sD(t,n,e,i){return Re(this,null,function*(){let r=yield ME(it(e,()=>t.loadChildren())),o=yield lD(aD(r)),s;o instanceof Dd||Array.isArray(o)?s=o:s=yield n.compileModuleAsync(o),i&&i(t);let a,l,c=!1,d;return Array.isArray(s)?(l=s,c=!0):(a=s.create(e).injector,d=s,l=a.get(cs,[],{optional:!0,self:!0}).flat()),{routes:l.map(Og),injector:a,factory:d}})}function z1(t){return t&&typeof t=="object"&&"default"in t}function aD(t){return z1(t)?t.default:t}function lD(t){return Re(this,null,function*(){return t})}var bu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:()=>u($1),providedIn:"root"})}return t})(),$1=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Pg=new y(""),Lg=new y("");function cD(t,n,e){let i=t.get(Lg),r=t.get(K);if(!r.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(c=>setTimeout(c));let o,s=new Promise(c=>{o=c}),a=r.startViewTransition(()=>(o(),G1(t)));a.updateCallbackDone.catch(c=>{}),a.ready.catch(c=>{}),a.finished.catch(c=>{});let{onViewTransitionCreated:l}=i;return l&&it(t,()=>l({transition:a,from:n,to:e})),s}function G1(t){return new Promise(n=>{En({read:()=>setTimeout(n)},{injector:t})})}var W1=()=>{},Vg=new y(""),yu=(()=>{class t{currentNavigation=oe(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=oe(null);events=new M;transitionAbortWithErrorSubject=new M;configLoader=u(vu);environmentInjector=u(Le);destroyRef=u(vt);urlSerializer=u(ir);rootContexts=u(eo);location=u(Xi);inputBindingEnabled=u(tl,{optional:!0})!==null;titleStrategy=u(Fg);options=u(rr,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=u(bu);createViewTransition=u(Pg,{optional:!0});navigationErrorHandler=u(Vg,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>T(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new ou(r)),i=r=>this.events.next(new su(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;me(()=>{this.transitions?.next(Y(v({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new je(null),this.transitions.pipe(fe(i=>i!==null),Ve(i=>{let r=!1,o=new AbortController,s=()=>!r&&this.currentTransition?.id===i.id;return T(i).pipe(Ve(a=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",yt.SupersededByNewNavigation),Ke;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:l?Y(v({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:a.routesRecognizeHandler,beforeActivateHandler:a.beforeActivateHandler});let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=a.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&d!=="reload")return this.events.next(new zn(a.id,this.urlSerializer.serialize(a.rawUrl),"",ts.IgnoredSameUrlNavigation)),a.resolve(!1),Ke;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return T(a).pipe(Ve(f=>(this.events.next(new nr(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?Ke:Promise.resolve(f))),V1(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),pt(f=>{i.targetSnapshot=f.targetSnapshot,i.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(h=>(h.finalUrl=f.urlAfterRedirects,h)),this.events.next(new Qa)}),Ve(f=>Ne(i.routesRecognizeHandler.deferredHandle??T(void 0)).pipe(j(()=>f))),pt(()=>{let f=new qa(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:f,extractedUrl:h,source:m,restoredState:p,extras:b}=a,w=new nr(f,this.urlSerializer.serialize(h),m,p);this.events.next(w);let D=$E(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=Y(v({},a),{targetSnapshot:D,urlAfterRedirects:h,extras:Y(v({},b),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(U=>(U.finalUrl=h,U)),T(i)}else return this.events.next(new zn(a.id,this.urlSerializer.serialize(a.extractedUrl),"",ts.IgnoredByUrlHandlingStrategy)),a.resolve(!1),Ke}),j(a=>{let l=new tu(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(l),this.currentTransition=i=Y(v({},a),{guards:e1(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),i}),u1(a=>this.events.next(a)),Ve(a=>{if(i.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw mu(this.urlSerializer,a.guardsResult);let l=new nu(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(l),!s())return Ke;if(!a.guardsResult)return this.cancelNavigationTransition(a,"",yt.GuardRejected),Ke;if(a.guards.canActivateChecks.length===0)return T(a);let c=new iu(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(c),!s())return Ke;let d=!1;return T(a).pipe(j1(this.paramsInheritanceStrategy),pt({next:()=>{d=!0;let f=new ru(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)},complete:()=>{d||this.cancelNavigationTransition(a,"",yt.NoDataFromResolver)}}))}),CE(a=>{let l=d=>{let f=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let h=d._environmentInjector;f.push(this.configLoader.loadComponent(h,d.routeConfig).then(m=>{d.component=m}))}for(let h of d.children)f.push(...l(h));return f},c=l(a.targetSnapshot.root);return c.length===0?T(a):Ne(Promise.all(c).then(()=>a))}),CE(()=>this.afterPreactivation()),Ve(()=>{let{currentSnapshot:a,targetSnapshot:l}=i,c=this.createViewTransition?.(this.environmentInjector,a.root,l.root);return c?Ne(c).pipe(j(()=>i)):T(i)}),We(1),Ve(a=>{let l=KN(e.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);this.currentTransition=i=a=Y(v({},a),{targetRouterState:l}),this.currentNavigation.update(d=>(d.targetRouterState=l,d)),this.events.next(new is);let c=i.beforeActivateHandler.deferredHandle;return c?Ne(c.then(()=>a)):T(a)}),pt(a=>{new Cg(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),s()&&(r=!0,this.currentNavigation.update(l=>(l.abort=W1,l)),this.lastSuccessfulNavigation.set(me(this.currentNavigation)),this.events.next(new cn(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0))}),Pe(XE(o.signal).pipe(fe(()=>!r&&!i.targetRouterState),pt(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",yt.Aborted)}))),pt({complete:()=>{r=!0}}),Pe(this.transitionAbortWithErrorSubject.pipe(pt(a=>{throw a}))),xr(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",yt.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Ni(a=>{if(r=!0,this.destroyed)return i.resolve(!1),Ke;if(KE(a))this.events.next(new ln(i.id,this.urlSerializer.serialize(i.extractedUrl),a.message,a.cancellationCode)),JN(a)?this.events.next(new rs(a.url,a.navigationBehaviorOptions)):i.resolve(!1);else{let l=new Xr(i.id,this.urlSerializer.serialize(i.extractedUrl),a,i.targetSnapshot??void 0);try{let c=it(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof ss){let{message:d,cancellationCode:f}=mu(this.urlSerializer,c);this.events.next(new ln(i.id,this.urlSerializer.serialize(i.extractedUrl),d,f)),this.events.next(new rs(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),a}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return Ke}))}))}cancelNavigationTransition(e,i,r){let o=new ln(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=me(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function q1(t){return t!==Jo}var dD=new y("");var uD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:()=>u(Q1),providedIn:"root"})}return t})(),pu=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},Q1=(()=>{class t extends pu{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),_u=(()=>{class t{urlSerializer=u(ir);options=u(rr,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(Xi);urlHandlingStrategy=u(bu);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Zt;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,s=r??o;return s instanceof Zt?this.urlSerializer.serialize(s):s}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=$E(null,u(Le));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:()=>u(Z1),providedIn:"root"})}return t})(),Z1=(()=>{class t extends _u{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof nr?this.updateStateMemento():e instanceof zn?this.commitTransition(i):e instanceof qa?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof is?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof ln&&!zE(e)?this.restoreHistory(i):e instanceof Xr?this.restoreHistory(i,!0):e instanceof cn&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let{extras:r,id:o}=i,{replaceUrl:s,state:a}=r;if(this.location.isCurrentPathEqualTo(e)||s){let l=this.browserPageId,c=v(v({},a),this.generateNgRouterState(o,l,i));this.location.replaceState(e,"",c)}else{let l=v(v({},a),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(e,"",l)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i,r){return this.canceledNavigationResolution==="computed"?v({navigationId:e,\u0275routerPageId:i},this.routerUrlState(r)):v({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function wu(t,n){t.events.pipe(fe(e=>e instanceof cn||e instanceof ln||e instanceof Xr||e instanceof zn),j(e=>e instanceof cn||e instanceof zn?0:(e instanceof ln?e.code===yt.Redirect||e.code===yt.SupersededByNewNavigation:!1)?2:1),fe(e=>e!==2),We(1)).subscribe(()=>{n()})}var $n=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(xd);stateManager=u(_u);options=u(rr,{optional:!0})||{};pendingTasks=u(oi);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u(yu);urlSerializer=u(ir);location=u(Xi);urlHandlingStrategy=u(bu);injector=u(Le);_events=new M;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(uD);injectorCleanup=u(dD,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(cs,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(tl,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Fe;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=me(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof ln&&i.code!==yt.Redirect&&i.code!==yt.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof cn)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof rs){let s=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),l=v({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||q1(r.source)},s);this.scheduleNavigation(a,Jo,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}QN(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Jo,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let s=r?.navigationId?r:null,a=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=Y(v({},o),{browserUrl:e})),r){let c=v({},r);delete c.navigationId,delete c.\u0275routerPageId,delete c.\u0275routerUrl,Object.keys(c).length!==0&&(o.state=c)}let l=this.parseUrl(a);this.scheduleNavigation(l,i,s,o).catch(c=>{this.disposed||this.injector.get($t)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return me(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Og),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:l}=i,c=l?this.currentUrlTree.fragment:s,d=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":d=v(v({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let f;try{let h=r?r.snapshot:this.routerState.snapshot.root;f=jE(h)}catch(h){(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return BE(f,e,d,c??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=tr(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Jo,null,i)}navigate(e,i={skipLocationChange:!1}){return K1(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch(i){return this.console.warn(Ht(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=v({},kE):i===!1?r=v({},vg):r=v(v({},vg),i),tr(e))return yE(this.currentUrlTree,e,r);let o=this.parseUrl(e);return yE(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,s){if(this.disposed)return Promise.resolve(!1);let a,l,c;s?(a=s.resolve,l=s.reject,c=s.promise):c=new Promise((f,h)=>{a=f,l=h});let d=this.pendingTasks.add();return wu(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function K1(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new g(4008,!1)}var X1=(()=>{class t{router=u($n);stateManager=u(_u);fragment=oe("");queryParams=oe({});path=oe("");serializer=u(ir);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof cn&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new Zt(i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Eu=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=u(new Un("href"),{optional:!0});reactiveHref=Lp(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return me(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return me(this._target)}_target=oe(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return me(this._queryParams)}_queryParams=oe(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return me(this._fragment)}_fragment=oe(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return me(this._queryParamsHandling)}_queryParamsHandling=oe(void 0);set state(e){this._state.set(e)}get state(){return me(this._state)}_state=oe(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return me(this._info)}_info=oe(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return me(this._relativeTo)}_relativeTo=oe(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return me(this._preserveFragment)}_preserveFragment=oe(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return me(this._skipLocationChange)}_skipLocationChange=oe(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return me(this._replaceUrl)}_replaceUrl=oe(!1);isAnchorElement;onChanges=new M;applicationErrorHandler=u($t);options=u(rr,{optional:!0});reactiveRouterState=u(X1);constructor(e,i,r,o,s,a){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=s,this.locationStrategy=a;let l=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=oe(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(tr(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,s){let a=this._urlTree();if(a===null||this.isAnchorElement&&(e!==0||i||r||o||s||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(a,l)?.catch(c=>{this.applicationErrorHandler(c)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=Lt(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:tr(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return me(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||t)(ge($n),ge(yi),va("tabindex"),ge(et),ge(W),ge(xn))};static \u0275dir=N({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&te("click",function(s){return r.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),i&2&&ve("href",r.reactiveHref(),cp)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",se],skipLocationChange:[2,"skipLocationChange","skipLocationChange",se],replaceUrl:[2,"replaceUrl","replaceUrl",se],routerLink:"routerLink"},features:[Qe]})}return t})();var il=class{};var fD=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,i,r,o){this.router=e,this.injector=i,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(fe(e=>e instanceof cn),Oi(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,i){let r=[];for(let o of i){o.providers&&!o._injector&&(o._injector=Go(o.providers,e,""));let s=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(s).injector);let a=o._loadedInjector??s;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(s,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(a,o.children??o._loadedRoutes))}return Ne(r).pipe(Ai())}preloadConfig(e,i){return this.preloadingStrategy.preload(i,()=>{if(e.destroyed)return T(null);let r;i.loadChildren&&i.canLoad===void 0?r=Ne(this.loader.loadChildren(e,i)):r=T(null);let o=r.pipe(tt(s=>s===null?T(void 0):(i._loadedRoutes=s.routes,i._loadedInjector=s.injector,i._loadedNgModuleFactory=s.factory,this.processRoutes(s.injector??e,s.routes))));if(i.loadComponent&&!i._loadedComponent){let s=this.loader.loadComponent(e,i);return Ne([o,s]).pipe(Ai())}else return o})}static \u0275fac=function(i){return new(i||t)(C($n),C(Le),C(il),C(vu))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),mD=new y(""),J1=(()=>{class t{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=Jo;restoredId=0;store={};isHydrating=u(np,{optional:!0})??!1;urlSerializer=u(ir);zone=u(R);viewportScroller=u(Yp);transitions=u(yu);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled",this.isHydrating&&u(bt).whenStable().then(()=>{this.isHydrating=!1})}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof nr?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof cn?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof zn&&e.code===ts.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof ns)||e.scrollBehavior==="manual")return;let i={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],i):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,i):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,i){if(this.isHydrating)return;let r=me(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(()=>Re(this,null,function*(){yield new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new ns(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,i,r))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(i){xp()};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})();function eO(){return u($n).routerState.root}function rl(t,n){return{\u0275kind:t,\u0275providers:n}}function tO(){let t=u(de);return n=>{let e=t.get(bt);if(n!==e.components[0])return;let i=t.get($n),r=t.get(hD);t.get(Bg)===1&&i.initialNavigation(),t.get(vD,null,{optional:!0})?.setUpPreloading(),t.get(mD,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var hD=new y("",{factory:()=>new M}),Bg=new y("",{factory:()=>1});function pD(){let t=[{provide:fd,useValue:!0},{provide:Bg,useValue:0},Wo(()=>{let n=u(de);return n.get(zp,Promise.resolve()).then(()=>new Promise(i=>{let r=n.get($n),o=n.get(hD);wu(r,()=>{i(!0)}),n.get(yu).afterPreactivation=()=>(i(!0),o.closed?T(void 0):o),r.initialNavigation()}))})];return rl(2,t)}function gD(){let t=[Wo(()=>{u($n).setUpLocationChangeListener()}),{provide:Bg,useValue:2}];return rl(3,t)}var vD=new y("");function bD(t){return rl(0,[{provide:vD,useExisting:fD},{provide:il,useExisting:t}])}function yD(){return rl(8,[Rg,{provide:tl,useExisting:Rg}])}function _D(t){wn("NgRouterViewTransitions");let n=[{provide:Pg,useValue:cD},{provide:Lg,useValue:v({skipNextTransition:!!t?.skipInitialTransition},t)}];return rl(9,n)}var wD=[Xi,{provide:ir,useClass:bi},$n,eo,{provide:yi,useFactory:eO},vu,[]],Du=(()=>{class t{constructor(){}static forRoot(e,i){return{ngModule:t,providers:[wD,[],{provide:cs,multi:!0,useValue:e},[],i?.errorHandler?{provide:Vg,useValue:i.errorHandler}:[],{provide:rr,useValue:i||{}},i?.useHash?iO():rO(),nO(),i?.preloadingStrategy?bD(i.preloadingStrategy).\u0275providers:[],i?.initialNavigation?oO(i):[],i?.bindToComponentInputs?yD().\u0275providers:[],i?.enableViewTransitions?_D().\u0275providers:[],sO()]}}static forChild(e){return{ngModule:t,providers:[{provide:cs,multi:!0,useValue:e}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=P({})}return t})();function nO(){return{provide:mD,useFactory:()=>{let t=u(Yp),n=u(rr);return n.scrollOffset&&t.setOffset(n.scrollOffset),new J1(n)}}}function iO(){return{provide:xn,useClass:Wp}}function rO(){return{provide:xn,useClass:jd}}function oO(t){return[t.initialNavigation==="disabled"?gD().\u0275providers:[],t.initialNavigation==="enabledBlocking"?pD().\u0275providers:[]]}var jg=new y("");function sO(){return[{provide:jg,useFactory:tO},{provide:Md,multi:!0,useExisting:jg}]}var TD=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(ge(et),ge(W))};static \u0275dir=N({type:t})}return t})(),kD=(()=>{class t extends TD{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275dir=N({type:t,features:[_e]})}return t})(),io=new y("");var aO={provide:io,useExisting:at(()=>Lu),multi:!0};function lO(){let t=qt()?qt().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var cO=new y(""),Lu=(()=>{class t extends TD{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!lO())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(ge(et),ge(W),ge(cO,8))};static \u0275dir=N({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&te("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[Ae([aO]),_e]})}return t})();function zg(t){return t==null||$g(t)===0}function $g(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var ro=new y(""),Gg=new y(""),dO=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Cu=class{static min(n){return AD(n)}static max(n){return RD(n)}static required(n){return uO(n)}static requiredTrue(n){return fO(n)}static email(n){return mO(n)}static minLength(n){return hO(n)}static maxLength(n){return pO(n)}static pattern(n){return gO(n)}static nullValidator(n){return Iu()}static compose(n){return VD(n)}static composeAsync(n){return jD(n)}};function AD(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function RD(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function uO(t){return zg(t.value)?{required:!0}:null}function fO(t){return t.value===!0?null:{required:!0}}function mO(t){return zg(t.value)||dO.test(t.value)?null:{email:!0}}function hO(t){return n=>{let e=n.value?.length??$g(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function pO(t){return n=>{let e=n.value?.length??$g(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function gO(t){if(!t)return Iu;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(zg(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Iu(t){return null}function ND(t){return t!=null}function OD(t){return di(t)?Ne(t):t}function FD(t){let n={};return t.forEach(e=>{n=e!=null?v(v({},n),e):n}),Object.keys(n).length===0?null:n}function PD(t,n){return n.map(e=>e(t))}function vO(t){return!t.validate}function LD(t){return t.map(n=>vO(n)?n:e=>n.validate(e))}function VD(t){if(!t)return null;let n=t.filter(ND);return n.length==0?null:function(e){return FD(PD(e,n))}}function Wg(t){return t!=null?VD(LD(t)):null}function jD(t){if(!t)return null;let n=t.filter(ND);return n.length==0?null:function(e){let i=PD(e,n).map(OD);return Ps(i).pipe(j(FD))}}function qg(t){return t!=null?jD(LD(t)):null}function ED(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function BD(t){return t._rawValidators}function UD(t){return t._rawAsyncValidators}function Ug(t){return t?Array.isArray(t)?t:[t]:[]}function Su(t,n){return Array.isArray(t)?t.includes(n):t===n}function DD(t,n){let e=Ug(n);return Ug(t).forEach(r=>{Su(e,r)||e.push(r)}),e}function xD(t,n){return Ug(n).filter(e=>!Su(t,e))}var Mu=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Wg(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=qg(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},to=class extends Mu{name;get formDirective(){return null}get path(){return null}},no=class extends Mu{_parent=null;name=null;valueAccessor=null},Hg=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var HD=(()=>{class t extends Hg{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(ge(no,2))};static \u0275dir=N({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&V("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[_e]})}return t})();var ol="VALID",xu="INVALID",ds="PENDING",sl="DISABLED",or=class{},Tu=class extends or{value;source;constructor(n,e){super(),this.value=n,this.source=e}},ll=class extends or{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},cl=class extends or{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},us=class extends or{status;source;constructor(n,e){super(),this.status=n,this.source=e}},ku=class extends or{source;constructor(n){super(),this.source=n}},Au=class extends or{source;constructor(n){super(),this.source=n}};function zD(t){return(Vu(t)?t.validators:t)||null}function bO(t){return Array.isArray(t)?Wg(t):t||null}function $D(t,n){return(Vu(n)?n.asyncValidators:t)||null}function yO(t){return Array.isArray(t)?qg(t):t||null}function Vu(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function _O(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new g(1e3,"");if(!i[e])throw new g(1001,"")}function wO(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new g(-1002,"")})}var Ru=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return me(this.statusReactive)}set status(n){me(()=>this.statusReactive.set(n))}_status=Lt(()=>this.statusReactive());statusReactive=oe(void 0);get valid(){return this.status===ol}get invalid(){return this.status===xu}get pending(){return this.status===ds}get disabled(){return this.status===sl}get enabled(){return this.status!==sl}errors;get pristine(){return me(this.pristineReactive)}set pristine(n){me(()=>this.pristineReactive.set(n))}_pristine=Lt(()=>this.pristineReactive());pristineReactive=oe(!0);get dirty(){return!this.pristine}get touched(){return me(this.touchedReactive)}set touched(n){me(()=>this.touchedReactive.set(n))}_touched=Lt(()=>this.touchedReactive());touchedReactive=oe(!1);get untouched(){return!this.touched}_events=new M;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(DD(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(DD(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(xD(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(xD(n,this._rawAsyncValidators))}hasValidator(n){return Su(this._rawValidators,n)}hasAsyncValidator(n){return Su(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(Y(v({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new cl(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new cl(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(Y(v({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new ll(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new ll(!0,i))}markAsPending(n={}){this.status=ds;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new us(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(Y(v({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=sl,this.errors=null,this._forEachChild(r=>{r.disable(Y(v({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Tu(this.value,i)),this._events.next(new us(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Y(v({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=ol,this._forEachChild(i=>{i.enable(Y(v({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(Y(v({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ol||this.status===ds)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Tu(this.value,e)),this._events.next(new us(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(Y(v({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?sl:ol}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=ds,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=OD(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new us(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new ee,this.statusChanges=new ee}_calculateStatus(){return this._allControlsDisabled()?sl:this.errors?xu:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ds)?ds:this._anyControlsHaveStatus(xu)?xu:ol}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new ll(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new cl(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Vu(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=bO(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=yO(this._rawAsyncValidators)}},Nu=class extends Ru{constructor(n,e,i){super(zD(e),$D(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){wO(this,!0,n),Object.keys(n).forEach(i=>{_O(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,Y(v({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Au(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var ju=new y("",{factory:()=>Qg}),Qg="always";function EO(t,n){return[...n.path,t]}function Ou(t,n,e=Qg){Zg(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),xO(t,n),IO(t,n),CO(t,n),DO(t,n)}function CD(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),Pu(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Fu(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function DO(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Zg(t,n){let e=BD(t);n.validator!==null?t.setValidators(ED(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=UD(t);n.asyncValidator!==null?t.setAsyncValidators(ED(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Fu(n._rawValidators,r),Fu(n._rawAsyncValidators,r)}function Pu(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=BD(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=UD(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return Fu(n._rawValidators,i),Fu(n._rawAsyncValidators,i),e}function xO(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&GD(t,n)})}function CO(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&GD(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function GD(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function IO(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function WD(t,n){t==null,Zg(t,n)}function SO(t,n){return Pu(t,n)}function MO(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function TO(t){return Object.getPrototypeOf(t.constructor)===kD}function qD(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function kO(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===Lu?e=o:TO(o)?i=o:r=o}),r||i||e||null}function AO(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var RO={provide:to,useExisting:at(()=>Kg)},al=Promise.resolve(),Kg=(()=>{class t extends to{callSetDisabledState;get submitted(){return me(this.submittedReactive)}_submitted=Lt(()=>this.submittedReactive());submittedReactive=oe(!1);_directives=new Set;form;ngSubmit=new ee;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new Nu({},Wg(e),qg(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){al.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),Ou(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){al.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){al.then(()=>{let i=this._findContainer(e.path),r=new Nu({});WD(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){al.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){al.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),qD(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new ku(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(ge(ro,10),ge(Gg,10),ge(ju,8))};static \u0275dir=N({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&te("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ae([RO]),_e]})}return t})();function ID(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function SD(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var QD=class extends Ru{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(zD(e),$D(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Vu(e)&&(e.nonNullable||e.initialValueIsDefault)&&(SD(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Au(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){ID(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){ID(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){SD(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var NO=t=>t instanceof QD;var OO={provide:no,useExisting:at(()=>Yg)},MD=Promise.resolve(),Yg=(()=>{class t extends no{_changeDetectorRef;callSetDisabledState;control=new QD;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new ee;constructor(e,i,r,o,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=kO(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),MO(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Ou(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){MD.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,r=i!==0&&se(i);MD.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?EO(e,this._parent):[e]}static \u0275fac=function(i){return new(i||t)(ge(to,9),ge(ro,10),ge(Gg,10),ge(io,10),ge(Ge,8),ge(ju,8))};static \u0275dir=N({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Ae([OO]),_e,Qe]})}return t})();var FO={provide:io,useExisting:at(()=>Xg),multi:!0},Xg=(()=>{class t extends kD{writeValue(e){let i=e??"";this.setProperty("value",i)}registerOnChange(e){this.onChange=i=>{e(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275dir=N({type:t,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(i,r){i&1&&te("input",function(s){return r.onChange(s.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[Ae([FO]),_e]})}return t})();var PO=(()=>{class t extends to{callSetDisabledState;get submitted(){return me(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Lt(()=>this._submittedReactive());_submittedReactive=oe(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Pu(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return Ou(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){CD(e.control||null,e,!1),AO(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,qD(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new ku(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(CD(i||null,e),NO(r)&&(Ou(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);WD(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&SO(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Zg(this.form,this),this._oldForm&&Pu(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(ge(ro,10),ge(Gg,10),ge(ju,8))};static \u0275dir=N({type:t,features:[_e,Qe]})}return t})();var LO={provide:to,useExisting:at(()=>Jg)},Jg=(()=>{class t extends PO{form=null;ngSubmit=new ee;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275dir=N({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&te("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ae([LO]),_e]})}return t})();function ZD(t){return typeof t=="number"?t:parseFloat(t)}var KD=(()=>{class t{_validator=Iu;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let i=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):Iu,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,features:[Qe]})}return t})(),VO={provide:ro,useExisting:at(()=>ev),multi:!0},ev=(()=>{class t extends KD{max;inputName="max";normalizeInput=e=>ZD(e);createValidator=e=>RD(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275dir=N({type:t,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&ve("max",r._enabled?r.max:null)},inputs:{max:"max"},standalone:!1,features:[Ae([VO]),_e]})}return t})(),jO={provide:ro,useExisting:at(()=>tv),multi:!0},tv=(()=>{class t extends KD{min;inputName="min";normalizeInput=e=>ZD(e);createValidator=e=>AD(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275dir=N({type:t,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&ve("min",r._enabled?r.min:null)},inputs:{min:"min"},standalone:!1,features:[Ae([jO]),_e]})}return t})();var BO=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=P({})}return t})();var Bu=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:ju,useValue:e.callSetDisabledState??Qg}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=P({imports:[BO]})}return t})();function dl(t){return t.buttons===0||t.detail===0}function ul(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var nv;function YD(){if(nv==null){let t=typeof document<"u"?document.head:null;nv=!!(t&&(t.createShadowRoot||t.attachShadow))}return nv}function iv(t){if(YD()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function In(t){return t.composedPath?t.composedPath()[0]:t.target}var rv;try{rv=typeof Intl<"u"&&Intl.v8BreakIterator}catch(t){rv=!1}var ke=(()=>{class t{_platformId=u(Gr);isBrowser=this._platformId?Xw(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||rv)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var fl;function XD(){if(fl==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>fl=!0}))}finally{fl=fl||!1}return fl}function fs(t){return XD()?t:!!t.capture}function Gn(t,n=0){return JD(t)?Number(t):arguments.length===2?n:0}function JD(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function Mt(t){return t instanceof W?t.nativeElement:t}var ex=new y("cdk-input-modality-detector-options"),tx={ignoreKeys:[18,17,224,91,16]},nx=650,ov={passive:!0,capture:!0},ix=(()=>{class t{_platform=u(ke);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new je(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=In(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<nx||(this._modality.next(dl(e)?"keyboard":"mouse"),this._mostRecentTarget=In(e))};_onTouchstart=e=>{if(ul(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=In(e)};constructor(){let e=u(R),i=u(K),r=u(ex,{optional:!0});if(this._options=v(v({},tx),r),this.modalityDetected=this._modality.pipe(em(1)),this.modalityChanged=this.modalityDetected.pipe(Dr()),this._platform.isBrowser){let o=u(ct).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,ov),o.listen(i,"mousedown",this._onMousedown,ov),o.listen(i,"touchstart",this._onTouchstart,ov)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ml=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(ml||{}),rx=new y("cdk-focus-monitor-default-options"),Uu=fs({passive:!0,capture:!0}),_i=(()=>{class t{_ngZone=u(R);_platform=u(ke);_inputModalityDetector=u(ix);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(K);_stopInputModalityDetector=new M;constructor(){let e=u(rx,{optional:!0});this._detectionMode=e?.detectionMode||ml.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=In(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=Mt(e);if(!this._platform.isBrowser||r.nodeType!==1)return T();let o=iv(r)||this._document,s=this._elementInfo.get(r);if(s)return i&&(s.checkChildren=!0),s.subject;let a={checkChildren:i,subject:new M,rootNode:o};return this._elementInfo.set(r,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(e){let i=Mt(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=Mt(e),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([a,l])=>this._originChanged(a,i,l)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===ml.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===ml.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?nx:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=In(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,Uu),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,Uu)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Pe(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Uu),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Uu),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Hu=new WeakMap,Tt=(()=>{class t{_appRef;_injector=u(de);_environmentInjector=u(Le);load(e){let i=this._appRef=this._appRef||this._injector.get(bt),r=Hu.get(i);r||(r={loaders:new Set,refs:[]},Hu.set(i,r),i.onDestroy(()=>{Hu.get(i)?.refs.forEach(o=>o.destroy()),Hu.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Ww(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ox=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})(),zu;function HO(){if(zu===void 0&&(zu=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(zu=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return zu}function ms(t){return HO()?.createHTML(t)||t}var sx=new Set,oo,hl=(()=>{class t{_platform=u(ke);_nonce=u(Wr,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):$O}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&zO(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function zO(t,n){if(!sx.has(t))try{oo||(oo=document.createElement("style"),n&&oo.setAttribute("nonce",n),oo.setAttribute("type","text/css"),document.head.appendChild(oo)),oo.sheet&&(oo.sheet.insertRule(`@media ${t} {body{ }}`,0),sx.add(t))}catch(e){console.error(e)}}function $O(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}function GO(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var ax=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),WO=(()=>{class t{_mutationObserverFactory=u(ax);_observedElements=new Map;_ngZone=u(R);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=Mt(e);return new z(r=>{let s=this._observeElement(i).pipe(j(a=>a.filter(l=>!GO(l))),fe(a=>!!a.length)).subscribe(a=>{this._ngZone.run(()=>{r.next(a)})});return()=>{s.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new M,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),lx=(()=>{class t{_contentObserver=u(WO);_elementRef=u(W);event=new ee;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Gn(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Vs(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",se],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),$u=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=P({providers:[ax]})}return t})();var Wu=(()=>{class t{_platform=u(ke);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return QO(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=qO(nF(e));if(i&&(cx(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=cx(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!eF(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return tF(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function qO(t){try{return t.frameElement}catch(n){return null}}function QO(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function ZO(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function KO(t){return XO(t)&&t.type=="hidden"}function YO(t){return JO(t)&&t.hasAttribute("href")}function XO(t){return t.nodeName.toLowerCase()=="input"}function JO(t){return t.nodeName.toLowerCase()=="a"}function dx(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function cx(t){if(!dx(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function eF(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function tF(t){return KO(t)?!1:ZO(t)||YO(t)||t.hasAttribute("contenteditable")||dx(t)}function nF(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Gu=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,s){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=s,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?En(n,{injector:this._injector}):setTimeout(n)}},sv=(()=>{class t{_checker=u(Wu);_ngZone=u(R);_document=u(K);_injector=u(de);constructor(){u(Tt).load(ox)}create(e,i=!1){return new Gu(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function qu(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var av={},Yt=class t{_appId=u(Ho);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),av.hasOwnProperty(n)||(av[n]=0),`${n}${e?t._infix+"-":""}${av[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})};var iF=["mat-internal-form-field",""],rF=["*"],ux=(()=>{class t{labelPosition="after";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,r){i&2&&V("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:iF,ngContentSelectors:rF,decls:1,vars:0,template:function(i,r){i&1&&(Te(),$(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})();var oF=new y("MATERIAL_ANIMATIONS"),fx=null;function sF(){return u(oF,{optional:!0})?.animationsDisabled||u(zo,{optional:!0})==="NoopAnimations"?"di-disabled":(fx??=u(hl).matchMedia("(prefers-reduced-motion)").matches,fx?"reduced-motion":"enabled")}function dt(){return sF()!=="enabled"}var sr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Sn=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(Sn||{}),Qu,so;function mx(){if(so==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return so=!1,so;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)so=!0;else{let t=Element.prototype.scrollTo;t?so=!/\{\s*\[native code\]\s*\}/.test(t.toString()):so=!1}}return so}function hs(){if(typeof document!="object"||!document)return Sn.NORMAL;if(Qu==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),Qu=Sn.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,Qu=t.scrollLeft===0?Sn.NEGATED:Sn.INVERTED),t.remove()}return Qu}var ps,hx=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function lv(){if(ps)return ps;if(typeof document!="object"||!document)return ps=new Set(hx),ps;let t=document.createElement("input");return ps=new Set(hx.filter(n=>(t.setAttribute("type",n),t.type===n))),ps}function ot(t){return t!=null&&`${t}`!="false"}var dn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(dn||{}),cv=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=dn.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},px=fs({passive:!0,capture:!0}),dv=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let s=o.get(i);s?s.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,px)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,px)))}_delegateEventHandler=n=>{let e=In(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},pl={enterDuration:225,exitDuration:150},lF=800,gx=fs({passive:!0,capture:!0}),vx=["mousedown","touchstart"],bx=["mouseup","mouseleave","touchend","touchcancel"],cF=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),ao=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new dv;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Mt(i)),o&&o.get(Tt).load(cF)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=v(v({},pl),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let s=i.radius||dF(n,e,r),a=n-r.left,l=e-r.top,c=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${a-s}px`,d.style.top=`${l-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(d);let f=window.getComputedStyle(d),h=f.transitionProperty,m=f.transitionDuration,p=h==="none"||m==="0s"||m==="0s, 0s"||r.width===0&&r.height===0,b=new cv(this,d,i,p);d.style.transform="scale3d(1, 1, 1)",b.state=dn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=b);let w=null;return!p&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let D=()=>{w&&(w.fallbackTimer=null),clearTimeout(ue),this._finishRippleTransition(b)},U=()=>this._destroyRipple(b),ue=setTimeout(U,c+100);d.addEventListener("transitionend",D),d.addEventListener("transitioncancel",U),w={onTransitionEnd:D,onTransitionCancel:U,fallbackTimer:ue}}),this._activeRipples.set(b,w),(p||!c)&&this._finishRippleTransition(b),b}fadeOutRipple(n){if(n.state===dn.FADING_OUT||n.state===dn.HIDDEN)return;let e=n.element,i=v(v({},pl),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=dn.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=Mt(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,vx.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{bx.forEach(e=>{this._triggerElement.addEventListener(e,this,gx)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===dn.FADING_IN?this._startFadeOutTransition(n):n.state===dn.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=dn.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=dn.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=dl(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+lF;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!ul(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===dn.VISIBLE||n.config.terminateOnPointerUp&&n.state===dn.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(vx.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(bx.forEach(e=>n.removeEventListener(e,this,gx)),this._pointerUpEventsRegistered=!1))}};function dF(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var gl=new y("mat-ripple-global-options"),Zu=(()=>{class t{_elementRef=u(W);_animationsDisabled=dt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(R),i=u(ke),r=u(gl,{optional:!0}),o=u(de);this._globalOptions=r||{},this._rippleRenderer=new ao(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:v(v(v({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,v(v({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,v(v({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&V("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var uF=new y("cdk-dir-doc",{providedIn:"root",factory:()=>u(K)}),fF=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function yx(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?fF.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var wi=(()=>{class t{get value(){return this.valueSignal()}valueSignal=oe("ltr");change=new ee;constructor(){let e=u(uF,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(yx(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ue=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=P({})}return t})();var mF=["switch"],hF=["*"];function pF(t,n){t&1&&(E(0,"span",11),ia(),E(1,"svg",13),Me(2,"path",14),x(),E(3,"svg",15),Me(4,"path",16),x()())}var gF=new y("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),Ku=class{source;checked;constructor(n,e){this.source=n,this.checked=e}},uv=(()=>{class t{_elementRef=u(W);_focusMonitor=u(_i);_changeDetectorRef=u(Ge);defaults=u(gF);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Ku(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=dt();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new ee;toggleChange=new ee;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){u(Tt).load(sr);let e=u(new Un("tabindex"),{optional:!0}),i=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=i.color||"accent",this.id=this._uniqueId=u(Yt).getId("mat-mdc-slide-toggle-"),this.hideIcon=i.hideIcon??!1,this.disabledInteractive=i.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Ku(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-slide-toggle"]],viewQuery:function(i,r){if(i&1&&Xe(mF,5),i&2){let o;Q(o=Z())&&(r._switchElement=o.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(i,r){i&2&&(Yi("id",r.id),ve("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),fi(r.color?"mat-"+r.color:""),V("mat-mdc-slide-toggle-focused",r._focused)("mat-mdc-slide-toggle-checked",r.checked)("_mat-animation-noopable",r._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",se],color:"color",disabled:[2,"disabled","disabled",se],disableRipple:[2,"disableRipple","disableRipple",se],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:ka(e)],checked:[2,"checked","checked",se],hideIcon:[2,"hideIcon","hideIcon",se],disabledInteractive:[2,"disabledInteractive","disabledInteractive",se]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[Ae([{provide:io,useExisting:at(()=>t),multi:!0},{provide:ro,useExisting:t,multi:!0}]),Qe],ngContentSelectors:hF,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(i,r){if(i&1&&(Te(),E(0,"div",1)(1,"button",2,0),te("click",function(){return r._handleClick()}),Me(3,"div",3)(4,"span",4),E(5,"span",5)(6,"span",6)(7,"span",7),Me(8,"span",8),x(),E(9,"span",9),Me(10,"span",10),x(),be(11,pF,5,0,"span",11),x()()(),E(12,"label",12),te("click",function(s){return s.stopPropagation()}),$(13),x()()),i&2){let o=Wt(2);we("labelPosition",r.labelPosition),I(),V("mdc-switch--selected",r.checked)("mdc-switch--unselected",!r.checked)("mdc-switch--checked",r.checked)("mdc-switch--disabled",r.disabled)("mat-mdc-slide-toggle-disabled-interactive",r.disabledInteractive),we("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex)("disabled",r.disabled&&!r.disabledInteractive),ve("id",r.buttonId)("name",r.name)("aria-label",r.ariaLabel)("aria-labelledby",r._getAriaLabelledBy())("aria-describedby",r.ariaDescribedby)("aria-required",r.required||null)("aria-checked",r.checked)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),I(9),we("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),I(),ye(r.hideIcon?-1:11),I(),we("for",r.buttonId),ve("id",r._labelId)}},dependencies:[Zu,ux],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return t})(),_x=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=P({imports:[uv,Ue]})}return t})();function vF(t,n){if(t&1){let e=Gt();Ct(0,"td",2),Ia("click",function(){let r=Rt(e).$implicit,o=Ce();return Nt(o.onClick(r))}),le(1),It()}if(t&2){let e=n.$implicit,i=Ce();V("highlight",i.isHighlighted(e)),I(),Pt(i.values[e]||"\xA0")}}function bF(t,n){if(t&1){let e=Gt();Ct(0,"td",2),Ia("click",function(){let r=Rt(e).$implicit,o=Ce();return Nt(o.onClick(r))}),le(1),It()}if(t&2){let e=n.$implicit,i=Ce();V("highlight",i.isHighlighted(e)),I(),Pt(i.values[e]||"\xA0")}}var Yu=(()=>{class t{get highlightIndex(){return this.highlightIndices.length>0?this.highlightIndex[0]:null}set highlightIndex(e){this.highlightIndices=e!=null?[e]:[]}constructor(){this.values=[],this.highlightIndices=[],this.indexClick=new ee,this.firstHalfIndices=[0,1,2,3,4],this.secondHalfIndices=[5,6,7,8,9]}ngOnChanges(e){this.firstHalfIndices=[...this.getFirstHalfIndices()],this.secondHalfIndices=[...this.getSecondHalfIndices()]}onClick(e){this.indexClick.emit(e)}isHighlighted(e){return this.highlightIndices.includes(e)}*getFirstHalfIndices(){let e=this.getHalfSize();for(let i=0;i<e;i++)yield i}*getSecondHalfIndices(){let e=this.getHalfSize();for(let i=0;i<e;i++)yield i+e}getHalfSize(){return Math.max(5,Math.ceil(this.values.length/2))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=k({type:t,selectors:[["app-decimal-grid"]],inputs:{values:"values",highlightIndices:"highlightIndices",highlightIndex:"highlightIndex"},outputs:{indexClick:"indexClick"},features:[Qe],decls:7,vars:0,consts:[[1,"decimal-grid"],[3,"highlight"],[3,"click"]],template:function(i,r){i&1&&(Ct(0,"table",0)(1,"tr"),Zi(2,vF,2,3,"td",1,Qi),It(),Ct(4,"tr"),Zi(5,bF,2,3,"td",1,Qi),It()()),i&2&&(I(2),Ki(r.firstHalfIndices),I(3),Ki(r.secondHalfIndices))},styles:[".decimal-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #9c27b0}.decimal-grid[_ngcontent-%COMP%]   td.highlight[_ngcontent-%COMP%]{background-color:#4caf50}.decimal-grid[_ngcontent-%COMP%]{border-collapse:collapse}.decimal-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:1.8rem;width:1.6em;height:1.6em;padding:.2em;text-align:center;vertical-align:middle;cursor:pointer;-webkit-user-select:none;user-select:none}"]})}}return t})();var yF=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return t})(),_F={passive:!0},wx=(()=>{class t{_platform=u(ke);_ngZone=u(R);_renderer=u(ct).createRenderer(null,null);_styleLoader=u(Tt);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Ke;this._styleLoader.load(yF);let i=Mt(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new M,s="cdk-text-field-autofilled",a=c=>{c.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(s)?(i.classList.add(s),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(s)&&(i.classList.remove(s),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",a,_F)));return this._monitoredElements.set(i,{subject:o,unlisten:l}),o}stopMonitoring(e){let i=Mt(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ex=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=P({})}return t})();var Dx=new y("MAT_INPUT_VALUE_ACCESSOR");var fv=class{_box;_destroyed=new M;_resizeSubject=new M;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new z(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(fe(e=>e.some(i=>i.target===n)),lc({bufferSize:1,refCount:!0}),Pe(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},xx=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(R);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new fv(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var wF=["notch"],EF=["matFormFieldNotchedOutline",""],DF=["*"],Cx=["iconPrefixContainer"],Ix=["textPrefixContainer"],Sx=["iconSuffixContainer"],Mx=["textSuffixContainer"],xF=["textField"],CF=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],IF=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function SF(t,n){t&1&&Me(0,"span",21)}function MF(t,n){if(t&1&&(E(0,"label",20),$(1,1),be(2,SF,1,0,"span",21),x()),t&2){let e=Ce(2);we("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),ve("for",e._control.disableAutomaticLabeling?null:e._control.id),I(2),ye(!e.hideRequiredMarker&&e._control.required?2:-1)}}function TF(t,n){if(t&1&&be(0,MF,3,5,"label",20),t&2){let e=Ce();ye(e._hasFloatingLabel()?0:-1)}}function kF(t,n){t&1&&Me(0,"div",7)}function AF(t,n){}function RF(t,n){if(t&1&&qr(0,AF,0,0,"ng-template",13),t&2){Ce(2);let e=Wt(1);we("ngTemplateOutlet",e)}}function NF(t,n){if(t&1&&(E(0,"div",9),be(1,RF,1,1,null,13),x()),t&2){let e=Ce();we("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),I(),ye(e._forceDisplayInfixLabel()?-1:1)}}function OF(t,n){t&1&&(E(0,"div",10,2),$(2,2),x())}function FF(t,n){t&1&&(E(0,"div",11,3),$(2,3),x())}function PF(t,n){}function LF(t,n){if(t&1&&qr(0,PF,0,0,"ng-template",13),t&2){Ce();let e=Wt(1);we("ngTemplateOutlet",e)}}function VF(t,n){t&1&&(E(0,"div",14,4),$(2,4),x())}function jF(t,n){t&1&&(E(0,"div",15,5),$(2,5),x())}function BF(t,n){t&1&&Me(0,"div",16)}function UF(t,n){t&1&&(E(0,"div",18),$(1,6),x())}function HF(t,n){if(t&1&&(E(0,"mat-hint",22),le(1),x()),t&2){let e=Ce(2);we("id",e._hintLabelId),I(),Pt(e.hintLabel)}}function zF(t,n){if(t&1&&(E(0,"div",19),be(1,HF,2,2,"mat-hint",22),$(2,7),Me(3,"div",23),$(4,8),x()),t&2){let e=Ce();I(),ye(e.hintLabel?1:-1)}}var gs=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["mat-label"]]})}return t})(),$F=new y("MatError");var Ju=(()=>{class t{align="start";id=u(Yt).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(Yi("id",r.id),ve("align",null),V("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),GF=new y("MatPrefix");var Fx=new y("MatSuffix"),ef=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[Ae([{provide:Fx,useExisting:t}])]})}return t})(),Px=new y("FloatingLabelParent"),Tx=(()=>{class t{_elementRef=u(W);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(xx);_ngZone=u(R);_parent=u(Px);_resizeSubscription=new Fe;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return WF(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&V("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function WF(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var kx="mdc-line-ripple--active",Xu="mdc-line-ripple--deactivating",Ax=(()=>{class t{_elementRef=u(W);_cleanupTransitionEnd;constructor(){let e=u(R),i=u(et);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Xu),e.add(kx)}deactivate(){this._elementRef.nativeElement.classList.add(Xu)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Xu);e.propertyName==="opacity"&&r&&i.remove(kx,Xu)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),Rx=(()=>{class t{_elementRef=u(W);_ngZone=u(R);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Xe(wF,5),i&2){let o;Q(o=Z())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&V("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:EF,ngContentSelectors:DF,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(Te(),Ft(0,"div",1),Ct(1,"div",2,0),$(3),It(),Ft(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),mv=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t})}return t})();var hv=new y("MatFormField"),qF=new y("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Nx="fill",QF="auto",Ox="fixed",ZF="translateY(-50%)",Ei=(()=>{class t{_elementRef=u(W);_changeDetectorRef=u(Ge);_platform=u(ke);_idGenerator=u(Yt);_ngZone=u(R);_defaults=u(qF,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Ta("iconPrefixContainer");_textPrefixContainerSignal=Ta("textPrefixContainer");_iconSuffixContainerSignal=Ta("iconSuffixContainer");_textSuffixContainerSignal=Ta("textSuffixContainer");_prefixSuffixContainers=Lt(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Uw(gs);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=ot(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||QF}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||Nx;this._appearanceSignal.set(i)}_appearanceSignal=oe(Nx);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Ox}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Ox}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new M;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=dt();constructor(){let e=this._defaults,i=u(wi);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Vr(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Lt(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(Jn([void 0,void 0]),j(()=>[i.errorState,i.userAriaDescribedBy]),ac(),fe(([[o,s],[a,l]])=>o!==a||s!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Pe(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Er(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Gw({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Lt(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(a=>a.align==="start"):null,s=this._hintChildren?this._hintChildren.find(a=>a.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(s=>s&&!o.includes(s)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=e?.getBoundingClientRect().width??0,a=i?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",f=`${s+a}px`,m=`calc(${d} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,p=`var(--mat-mdc-form-field-label-transform, ${ZF} translateX(${m}))`,b=s+a+l+c;return[p,b]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(Td(o,r._labelChild,gs,5),St(o,mv,5)(o,GF,5)(o,Fx,5)(o,$F,5)(o,Ju,5)),i&2){Ad();let s;Q(s=Z())&&(r._formFieldControl=s.first),Q(s=Z())&&(r._prefixChildren=s),Q(s=Z())&&(r._suffixChildren=s),Q(s=Z())&&(r._errorChildren=s),Q(s=Z())&&(r._hintChildren=s)}},viewQuery:function(i,r){if(i&1&&(kd(r._iconPrefixContainerSignal,Cx,5)(r._textPrefixContainerSignal,Ix,5)(r._iconSuffixContainerSignal,Sx,5)(r._textSuffixContainerSignal,Mx,5),Xe(xF,5)(Cx,5)(Ix,5)(Sx,5)(Mx,5)(Tx,5)(Rx,5)(Ax,5)),i&2){Ad(4);let o;Q(o=Z())&&(r._textField=o.first),Q(o=Z())&&(r._iconPrefixContainer=o.first),Q(o=Z())&&(r._textPrefixContainer=o.first),Q(o=Z())&&(r._iconSuffixContainer=o.first),Q(o=Z())&&(r._textSuffixContainer=o.first),Q(o=Z())&&(r._floatingLabel=o.first),Q(o=Z())&&(r._notchedOutline=o.first),Q(o=Z())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&V("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Ae([{provide:hv,useExisting:t},{provide:Px,useExisting:t}])],ngContentSelectors:IF,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(Te(CF),qr(0,TF,1,1,"ng-template",null,0,Od),E(2,"div",6,1),te("click",function(s){return r._control.onContainerClick(s)}),be(4,kF,1,0,"div",7),E(5,"div",8),be(6,NF,2,2,"div",9),be(7,OF,3,0,"div",10),be(8,FF,3,0,"div",11),E(9,"div",12),be(10,LF,1,1,null,13),$(11),x(),be(12,VF,3,0,"div",14),be(13,jF,3,0,"div",15),x(),be(14,BF,1,0,"div",16),x(),E(15,"div",17),be(16,UF,2,0,"div",18)(17,zF,5,1,"div",19),x()),i&2){let o;I(2),V("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),I(2),ye(!r._hasOutline()&&!r._control.disabled?4:-1),I(2),ye(r._hasOutline()?6:-1),I(),ye(r._hasIconPrefix?7:-1),I(),ye(r._hasTextPrefix?8:-1),I(2),ye(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),I(2),ye(r._hasTextSuffix?12:-1),I(),ye(r._hasIconSuffix?13:-1),I(),ye(r._hasOutline()?-1:14),I(),V("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let s=r._getSubscriptMessageType();I(),ye((o=s)==="error"?16:o==="hint"?17:-1)}},dependencies:[Tx,Rx,qp,Ax,Ju],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return t})();var Lx=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var tf=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var pv=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=P({imports:[$u,Ei,Ue]})}return t})();var XF=["button","checkbox","file","hidden","image","radio","range","reset","submit"],JF=new y("MAT_INPUT_CONFIG"),vs=(()=>{class t{_elementRef=u(W);_platform=u(ke);ngControl=u(no,{optional:!0,self:!0});_autofillMonitor=u(wx);_ngZone=u(R);_formField=u(hv,{optional:!0});_renderer=u(et);_uid=u(Yt).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(JF,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new M;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=ot(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Cu.required)??!1}set required(e){this._required=ot(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&lv().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=ot(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>lv().has(e));constructor(){let e=u(Kg,{optional:!0}),i=u(Jg,{optional:!0}),r=u(Lx),o=u(Dx,{optional:!0,self:!0}),s=this._elementRef.nativeElement,a=s.nodeName.toLowerCase();o?Da(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=s,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(s,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new tf(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=a==="select",this._isTextarea=a==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=s.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Vr(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){XF.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&te("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(Yi("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),ve("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),V("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",se]},exportAs:["matInput"],features:[Ae([{provide:mv,useExisting:t}]),Qe]})}return t})(),Vx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=P({imports:[pv,pv,Ex,Ue]})}return t})();var eP={capture:!0},tP=["focus","mousedown","mouseenter","touchstart"],gv="mat-ripple-loader-uninitialized",vv="mat-ripple-loader-class-name",jx="mat-ripple-loader-centered",nf="mat-ripple-loader-disabled",Bx=(()=>{class t{_document=u(K);_animationsDisabled=dt();_globalRippleOptions=u(gl,{optional:!0});_platform=u(ke);_ngZone=u(R);_injector=u(de);_eventCleanups;_hosts=new Map;constructor(){let e=u(ct).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>tP.map(i=>e.listen(this._document,i,this._onInteraction,eP)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(gv,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(vv))&&e.setAttribute(vv,i.className||""),i.centered&&e.setAttribute(jx,""),i.disabled&&e.setAttribute(nf,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(nf,""):e.removeAttribute(nf)}_onInteraction=e=>{let i=In(e);if(i instanceof HTMLElement){let r=i.closest(`[${gv}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(vv)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??pl.enterDuration,s=this._animationsDisabled?0:r?.animation?.exitDuration??pl.exitDuration,a={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(nf),rippleConfig:{centered:e.hasAttribute(jx),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},l=new ao(a,this._ngZone,i,this._platform,this._injector),c=!a.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:l,hasSetUpEvents:c}),e.removeAttribute(gv)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var nP=["mat-icon-button",""],iP=["*"],rP=new y("MAT_BUTTON_CONFIG");function Ux(t){return t==null?void 0:ka(t)}var bv=(()=>{class t{_elementRef=u(W);_ngZone=u(R);_animationsDisabled=dt();_config=u(rP,{optional:!0});_focusMonitor=u(_i);_cleanupClick;_renderer=u(et);_rippleLoader=u(Bx);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){u(Tt).load(sr);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(ve("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),fi(r.color?"mat-"+r.color:""),V("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",se],disabled:[2,"disabled","disabled",se],ariaDisabled:[2,"aria-disabled","ariaDisabled",se],disabledInteractive:[2,"disabledInteractive","disabledInteractive",se],tabIndex:[2,"tabIndex","tabIndex",Ux],_tabindex:[2,"tabindex","_tabindex",Ux]}})}return t})(),yv=(()=>{class t extends bv{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[_e],attrs:nP,ngContentSelectors:iP,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Te(),Ft(0,"span",0),$(1),Ft(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var bs=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=P({imports:[Ue]})}return t})();var oP=["matButton",""],sP=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],aP=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Hx=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),ys=(()=>{class t extends bv{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=lP(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?Hx.get(this._appearance):null,o=Hx.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[_e],attrs:oP,ngContentSelectors:aP,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Te(sP),Ft(0,"span",0),$(1),Ct(2,"span",1),$(3,1),It(),$(4,2),Ft(5,"span",2)(6,"span",3)),i&2&&V("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function lP(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var zx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=P({imports:[bs,Ue]})}return t})();function cP(t,n){if(t&1&&(E(0,"span",8),le(1),x()),t&2){let e=Ce(2);I(),Pt(e.product)}}function dP(t,n){if(t&1&&(E(0,"div",7),le(1),be(2,cP,2,1,"span",8),x()),t&2){let e=Ce();I(),qo(" ",e.factor1," \xD7 ",e.factor2," = "),I(),ye(e.productVisible?2:-1)}}var $x=(()=>{class t{get product(){return this.factor1*this.factor2}constructor(){this.firstFactorValues=["1","2","3","4","5","6","7","8","9","10","11","12"],this.running=new je(!1),this.speed=new je(8),this.mixAndMatch=!1,this.factors=[1],this.factor1=1,this.factor2=1,this.productVisible=!1,this.disposed=new M}ngOnInit(){Eo([this.speed,this.running]).pipe(Ve(([e,i])=>{let r=(11-e)*1e3;return i?wr(r,r).pipe(Yn(i)):T(!1)}),Pe(this.disposed),fe(e=>e)).subscribe(()=>{this.productVisible&&this.chooseFactors(),this.productVisible=!this.productVisible}),this.running.pipe(Dr(),Pe(this.disposed)).subscribe(e=>{e&&(this.productVisible=!1,this.chooseFactors())})}ngOnDestroy(){this.disposed.next()}factorSelected(e){let i=parseInt(this.firstFactorValues[e]);this.mixAndMatch?this.factors.includes(i)?this.factors=this.factors.filter(r=>r!==i):this.factors.push(i):this.factors=[i]}getHighlightIndices(){return this.factors.map(e=>this.firstFactorValues.indexOf(e.toFixed(0)))}toggleRunning(){this.running.next(!this.running.value)}chooseFactors(){this.factor1=this.factors[Math.floor(Math.random()*this.factors.length)];let e=0;do e=Math.floor(Math.random()*12);while(e===this.factor2);this.factor2=e}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=k({type:t,selectors:[["app-multiplication-facts"]],decls:24,vars:15,consts:[[1,"math-problem"],[1,"settings"],[1,"factor"],[3,"ngModelChange","ngModel"],[3,"indexClick","values","highlightIndices"],["matInput","","type","number","min","1","max","10",3,"ngModelChange","ngModel","disabled"],["matSuffix","","mat-raised-button","","color","primary",1,"start-button",3,"click"],[1,"problem-text"],[1,"answer"]],template:function(i,r){i&1&&(E(0,"div",0)(1,"h2"),le(2,"Multiplication Facts"),x(),E(3,"p"),le(4," Presents multiplication facts and their answers quickly. Try to get the right answer before it appears! "),x(),E(5,"div",1)(6,"div",2)(7,"h3"),le(8,"Select a Factor:"),x(),E(9,"p")(10,"mat-slide-toggle",3),Nd("ngModelChange",function(s){return Fp(r.mixAndMatch,s)||(r.mixAndMatch=s),s}),x(),le(11," Mix & Match \u{1F92A}"),x(),E(12,"app-decimal-grid",4),te("indexClick",function(s){return r.factorSelected(s)}),x()(),E(13,"mat-form-field")(14,"mat-label"),le(15,"Speed (1-10)"),x(),E(16,"input",5),mi(17,"async"),mi(18,"async"),te("ngModelChange",function(s){return r.speed.next(s)}),x()(),E(19,"button",6),te("click",function(){return r.toggleRunning()}),le(20),mi(21,"async"),x()(),be(22,dP,3,3,"div",7),mi(23,"async"),x()),i&2&&(I(10),Rd("ngModel",r.mixAndMatch),I(2),we("values",r.firstFactorValues)("highlightIndices",r.getHighlightIndices()),I(4),we("ngModel",hi(17,7,r.speed))("disabled",hi(18,9,r.running)),I(4),Pt(hi(21,11,r.running)?"Stop":"Start"),I(2),ye(hi(23,13,r.running)?22:-1))},dependencies:[uv,Bu,Lu,Xg,HD,tv,ev,Yg,Yu,Ei,gs,vs,ys,ef,Ra],styles:[".factor[_ngcontent-%COMP%]{margin-bottom:2rem}.problem-text[_ngcontent-%COMP%]{font-size:2.4rem;border-radius:.2rem;padding:.5rem;margin-top:2rem;margin-right:2rem}.answer[_ngcontent-%COMP%]{text-decoration:underline}.start-button[_ngcontent-%COMP%]{margin-left:.6em}"]})}}return t})();function uP(t,n){if(t&1){let e=Gt();E(0,"div",1)(1,"app-decimal-grid",2),te("indexClick",function(r){let o=Rt(e).$implicit,s=Ce();return Nt(s.onClick(r+o*10))}),x()()}if(t&2){let e=n.$implicit,i=Ce();I(),we("values",i.values.slice(e*10,(e+1)*10))}}var Gx=(()=>{class t{constructor(){this.count=2,this.currentValue="\u{1F601}",this.values=[],this.indexes=[]}ngOnChanges(e){let i=this.count*10;this.values.length<i?this.values.fill(null,this.values.length,i-1):this.values.length>i&&(this.values=this.values.slice(0,i-1)),e.count&&(this.indexes=Array.from(new Array(this.count).keys()))}onClick(e){this.values[e]=this.values[e]===this.currentValue?null:this.currentValue}clear(){this.values.fill(null,0,this.values.length)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=k({type:t,selectors:[["app-decimal-grid-set"]],inputs:{count:"count",currentValue:"currentValue"},features:[Qe],decls:3,vars:0,consts:[[1,"decimal-grid-set"],[1,"decimal-grid"],[3,"indexClick","values"]],template:function(i,r){i&1&&(E(0,"div",0),Zi(1,uP,2,1,"div",1,Qi),x()),i&2&&(I(),Ki(r.indexes))},dependencies:[Yu],styles:[".decimal-grid[_ngcontent-%COMP%]{margin-bottom:1em;margin-right:1em;display:inline-block}"]})}}return t})();var fP=["decimalGridSet"],rf=(()=>{class t{constructor(){this.currentEmoji="\u{1F601}",this.pyroVisible=!1}onEmojiChange(e){this.currentEmoji=e}showPyro(){this.pyroVisible=!0,setTimeout(()=>this.pyroVisible=!1,3e3)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=N({type:t,viewQuery:function(i,r){if(i&1&&Xe(fP,5),i&2){let o;Q(o=Z())&&(r.decimalGridSet=o.first)}}})}}return t})();var vl=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new M;constructor(n=!1,e,i=!0,r){this._multiple=n,this._emitChanges=i,this.compareWith=r,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(i=>this._markSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(i=>this._unmarkSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,i=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!i.has(this._getConcreteValue(o,i))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let i of e)if(this.compareWith(n,i))return i;return n}else return n}};var Wx=(()=>{class t{_animationsDisabled=dt();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&V("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return t})();var yP=["button"],_P=["*"];function wP(t,n){if(t&1&&(E(0,"div",2),Me(1,"mat-pseudo-checkbox",6),x()),t&2){let e=Ce();I(),we("disabled",e.disabled)}}var qx=new y("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),Qx=new y("MatButtonToggleGroup"),EP={provide:io,useExisting:at(()=>_v),multi:!0},of=class{source;value;constructor(n,e){this.source=n,this.value=e}},_v=(()=>{class t{_changeDetector=u(Ge);_dir=u(wi,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=u(Yt).getId("mat-button-toggle-group-");vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(i=>i.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new ee;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new ee;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=u(qx,{optional:!0});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new vl(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||qu(e))return;let r=e.target.id,o=this._buttonToggles.toArray().findIndex(a=>a.buttonId===r),s=null;switch(e.keyCode){case 32:case 13:s=this._buttonToggles.get(o)||null;break;case 38:s=this._getNextButton(o,-1);break;case 37:s=this._getNextButton(o,this.dir==="ltr"?-1:1);break;case 40:s=this._getNextButton(o,1);break;case 39:s=this._getNextButton(o,this.dir==="ltr"?1:-1);break;default:return}s&&(e.preventDefault(),s._onButtonClick(),s.focus())}_emitChangeEvent(e){let i=new of(e,this.value);this._rawValue=i.value,this._controlValueAccessorChangeFn(i.value),this.change.emit(i)}_syncButtonToggle(e,i,r=!1,o=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?i?this._selectionModel.select(e):this._selectionModel.deselect(e):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(e,r)):this._updateModelValue(e,r)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(i=>e.value!=null&&i===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let i=this._buttonToggles.get(e);if(!i.disabled){i.tabIndex=0;break}}}_getNextButton(e,i){let r=this._buttonToggles;for(let o=1;o<=r.length;o++){let s=(e+i*o+r.length)%r.length,a=r.get(s);if(a&&!a.disabled)return a}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let i=this._buttonToggles.toArray();if(this.multiple&&e?(Array.isArray(e),this._clearSelection(),e.forEach(r=>this._selectValue(r,i))):(this._clearSelection(),this._selectValue(e,i)),!this.multiple&&i.every(r=>r.tabIndex===-1)){for(let r of i)if(!r.disabled){r.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,i){for(let r of i)if(r.value===e){r.checked=!0,this._selectionModel.select(r),this.multiple||(r.tabIndex=0);break}}_updateModelValue(e,i){i&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["mat-button-toggle-group"]],contentQueries:function(i,r,o){if(i&1&&St(o,sf,5),i&2){let s;Q(s=Z())&&(r._buttonToggles=s)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(i,r){i&1&&te("keydown",function(s){return r._keydown(s)}),i&2&&(ve("role",r.multiple?"group":"radiogroup")("aria-disabled",r.disabled),V("mat-button-toggle-vertical",r.vertical)("mat-button-toggle-group-appearance-standard",r.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",se],value:"value",multiple:[2,"multiple","multiple",se],disabled:[2,"disabled","disabled",se],disabledInteractive:[2,"disabledInteractive","disabledInteractive",se],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",se],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",se]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[Ae([EP,{provide:Qx,useExisting:t}])]})}return t})(),sf=(()=>{class t{_changeDetectorRef=u(Ge);_elementRef=u(W);_focusMonitor=u(_i);_idGenerator=u(Yt);_animationDisabled=dt();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new ee;constructor(){u(Tt).load(sr);let e=u(Qx,{optional:!0}),i=u(new Un("tabindex"),{optional:!0})||"",r=u(qx,{optional:!0});this._tabIndex=oe(parseInt(i)||0),this.buttonToggleGroup=e,this._appearance=r&&r.appearance?r.appearance:"standard",this._disabledInteractive=r?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let i=this.buttonToggleGroup._buttonToggles.find(r=>r.tabIndex===0);i&&(i.tabIndex=-1),this.tabIndex=0}this.change.emit(new of(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-button-toggle"]],viewQuery:function(i,r){if(i&1&&Xe(yP,5),i&2){let o;Q(o=Z())&&(r._buttonElement=o.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(i,r){i&1&&te("focus",function(){return r.focus()}),i&2&&(ve("aria-label",null)("aria-labelledby",null)("id",r.id)("name",null),V("mat-button-toggle-standalone",!r.buttonToggleGroup)("mat-button-toggle-checked",r.checked)("mat-button-toggle-disabled",r.disabled)("mat-button-toggle-disabled-interactive",r.disabledInteractive)("mat-button-toggle-appearance-standard",r.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",se],appearance:"appearance",checked:[2,"checked","checked",se],disabled:[2,"disabled","disabled",se],disabledInteractive:[2,"disabledInteractive","disabledInteractive",se]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:_P,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(i,r){if(i&1&&(Te(),E(0,"button",1,0),te("click",function(){return r._onButtonClick()}),be(2,wP,2,1,"div",2),E(3,"span",3),$(4),x()(),Me(5,"span",4)(6,"span",5)),i&2){let o=Wt(1);we("id",r.buttonId)("disabled",r.disabled&&!r.disabledInteractive||null),ve("role",r.isSingleSelector()?"radio":"button")("tabindex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex)("aria-pressed",r.isSingleSelector()?null:r.checked)("aria-checked",r.isSingleSelector()?r.checked:null)("name",r._getButtonName())("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),I(2),ye(r.buttonToggleGroup&&(!r.buttonToggleGroup.multiple&&!r.buttonToggleGroup.hideSingleSelectionIndicator||r.buttonToggleGroup.multiple&&!r.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),I(4),we("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)}},dependencies:[Zu,Wx],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2,changeDetection:0})}return t})(),Zx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=P({imports:[bs,sf,Ue]})}return t})();function DP(t,n){if(t&1&&(E(0,"mat-button-toggle",1),le(1),x()),t&2){let e=n.$implicit;we("value",e),I(),Sa(" ",e," ")}}var Kx=(()=>{class t{constructor(){this.options=["\u{1F601}","\u{1F47B}","\u{1F47D}","\u{1F916}","\u{1F63A}","\u{1F46E}\u200D\u2640\uFE0F","\u{1F469}\u200D\u{1F680}","\u{1F451}","\u{1F476}\u{1F3FD}","\u{1F430}","\u{1F34F}","\u26BD\uFE0F","\u{1F68C}","\u{1F680}","\u2764\uFE0F"],this.currentValue="\u{1F601}",this.currentValueChange=new ee}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=k({type:t,selectors:[["app-emoji-selector"]],inputs:{currentValue:"currentValue"},outputs:{currentValueChange:"currentValueChange"},decls:5,vars:1,consts:[[1,"emojis",3,"valueChange","value"],[3,"value"]],template:function(i,r){i&1&&(E(0,"p"),le(1,` Pick an emoji!
`),x(),E(2,"mat-button-toggle-group",0),te("valueChange",function(s){return r.currentValueChange.emit(s)}),Zi(3,DP,2,2,"mat-button-toggle",1,Qi),x()),i&2&&(I(2),we("value",r.currentValue),I(),Ki(r.options))},dependencies:[_v,sf],styles:[".mat-button-toggle-appearance-standard.mat-button-toggle[_ngcontent-%COMP%]{background-color:#9c27b0;color:#fff}.mat-button-toggle-appearance-standard.mat-button-toggle-checked[_ngcontent-%COMP%]{background-color:#4caf50;color:#000000de}.emojis[_ngcontent-%COMP%]{margin-bottom:2em}"]})}}return t})();var af=(()=>{class t{constructor(){}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=k({type:t,selectors:[["app-pyro"]],decls:3,vars:0,consts:[[1,"pyro"],[1,"before"],[1,"after"]],template:function(i,r){i&1&&(Ct(0,"div",0),Ft(1,"div",1)(2,"div",2),It())},styles:[".pyro[_ngcontent-%COMP%]{margin:0;padding:0;background:#000;overflow:hidden;position:absolute;left:0;top:0;height:100%;width:100%}.pyro[_ngcontent-%COMP%] > .before[_ngcontent-%COMP%], .pyro[_ngcontent-%COMP%] > .after[_ngcontent-%COMP%]{position:absolute;width:5px;height:5px;border-radius:50%;box-shadow:0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff,0 0 #fff;-moz-animation:1s bang ease-out infinite backwards,1s gravity ease-in infinite backwards,5s position linear infinite backwards;-webkit-animation:1s _ngcontent-%COMP%_bang ease-out infinite backwards,1s _ngcontent-%COMP%_gravity ease-in infinite backwards,5s _ngcontent-%COMP%_position linear infinite backwards;-o-animation:1s bang ease-out infinite backwards,1s gravity ease-in infinite backwards,5s position linear infinite backwards;-ms-animation:1s bang ease-out infinite backwards,1s gravity ease-in infinite backwards,5s position linear infinite backwards;animation:1s _ngcontent-%COMP%_bang ease-out infinite backwards,1s _ngcontent-%COMP%_gravity ease-in infinite backwards,5s _ngcontent-%COMP%_position linear infinite backwards}.pyro[_ngcontent-%COMP%] > .after[_ngcontent-%COMP%]{-moz-animation-delay:1.25s,1.25s,1.25s;-webkit-animation-delay:1.25s,1.25s,1.25s;-o-animation-delay:1.25s,1.25s,1.25s;-ms-animation-delay:1.25s,1.25s,1.25s;animation-delay:1.25s,1.25s,1.25s;-moz-animation-duration:1.25s,1.25s,6.25s;-webkit-animation-duration:1.25s,1.25s,6.25s;-o-animation-duration:1.25s,1.25s,6.25s;-ms-animation-duration:1.25s,1.25s,6.25s;animation-duration:1.25s,1.25s,6.25s}@-webkit-keyframes _ngcontent-%COMP%_bang{to{box-shadow:-119.5px -405px #fff700,-107.5px -55px #60f,-180px -69.1666666667px #ff0095,-14px -180px #ff00a6,-137.5px -157.5px #bf0,-180.5px -120.8333333333px #ffd000,-61.5px -1.6666666667px #00ff7b,-120.5px -51.6666666667px #ea00ff,-143px -292.5px #f03,-96.5px -47.5px #d0f,-177.5px -290px #6e00ff,-86.5px -185px #e6ff00,-83.5px -85.8333333333px #fff700,-127.5px -340.8333333333px #aeff00,-52px -62.5px #ff00d9,-213px -295.8333333333px #04f,-136.5px -151.6666666667px #0f9,-165px -37.5px #62ff00,-131.5px -281.6666666667px #00ff7b,-98px -407.5px #ff4d00,-98.5px -350.8333333333px #00ff95,-208.5px -217.5px #d400ff,-175px -142.5px #00ff4d,-114.5px -13.3333333333px #9500ff,-236.5px -100.8333333333px #0008ff,-95.5px -149.1666666667px #f2ff00,-18.5px -124.1666666667px #00eaff,-209px -118.3333333333px #ffe100,-11.5px -315.8333333333px #0073ff,-239px -134.1666666667px #0095ff,-5.5px -108.3333333333px #fffb00,-106px -114.1666666667px #ff0062,-215px -45.8333333333px #00ffe1,-167px -380px #84ff00,-91.5px -261.6666666667px #ff7b00,-56px -86.6666666667px #0d00ff,-235px -68.3333333333px #006aff,-111.5px -256.6666666667px #5f0,-249px -125.8333333333px #ffc300,-154.5px -142.5px #af0,-40px -192.5px #df0,-32.5px -91.6666666667px #7f00ff,-85.5px -5px #ffb700,-164.5px -364.1666666667px red,-248px -203.3333333333px #d900ff,-220px -320px #0026ff,-89.5px -158.3333333333px #ff001a,-142px -289.1666666667px #00a2ff,-135.5px -126.6666666667px #a6ff00,-193px -408.3333333333px #d4ff00,-75.5px -212.5px #0040ff}}@-moz-keyframes bang{to{box-shadow:-119.5px -405px #fff700,-107.5px -55px #60f,-180px -69.1666666667px #ff0095,-14px -180px #ff00a6,-137.5px -157.5px #bf0,-180.5px -120.8333333333px #ffd000,-61.5px -1.6666666667px #00ff7b,-120.5px -51.6666666667px #ea00ff,-143px -292.5px #f03,-96.5px -47.5px #d0f,-177.5px -290px #6e00ff,-86.5px -185px #e6ff00,-83.5px -85.8333333333px #fff700,-127.5px -340.8333333333px #aeff00,-52px -62.5px #ff00d9,-213px -295.8333333333px #04f,-136.5px -151.6666666667px #0f9,-165px -37.5px #62ff00,-131.5px -281.6666666667px #00ff7b,-98px -407.5px #ff4d00,-98.5px -350.8333333333px #00ff95,-208.5px -217.5px #d400ff,-175px -142.5px #00ff4d,-114.5px -13.3333333333px #9500ff,-236.5px -100.8333333333px #0008ff,-95.5px -149.1666666667px #f2ff00,-18.5px -124.1666666667px #00eaff,-209px -118.3333333333px #ffe100,-11.5px -315.8333333333px #0073ff,-239px -134.1666666667px #0095ff,-5.5px -108.3333333333px #fffb00,-106px -114.1666666667px #ff0062,-215px -45.8333333333px #00ffe1,-167px -380px #84ff00,-91.5px -261.6666666667px #ff7b00,-56px -86.6666666667px #0d00ff,-235px -68.3333333333px #006aff,-111.5px -256.6666666667px #5f0,-249px -125.8333333333px #ffc300,-154.5px -142.5px #af0,-40px -192.5px #df0,-32.5px -91.6666666667px #7f00ff,-85.5px -5px #ffb700,-164.5px -364.1666666667px red,-248px -203.3333333333px #d900ff,-220px -320px #0026ff,-89.5px -158.3333333333px #ff001a,-142px -289.1666666667px #00a2ff,-135.5px -126.6666666667px #a6ff00,-193px -408.3333333333px #d4ff00,-75.5px -212.5px #0040ff}}@-o-keyframes bang{to{box-shadow:-119.5px -405px #fff700,-107.5px -55px #60f,-180px -69.1666666667px #ff0095,-14px -180px #ff00a6,-137.5px -157.5px #bf0,-180.5px -120.8333333333px #ffd000,-61.5px -1.6666666667px #00ff7b,-120.5px -51.6666666667px #ea00ff,-143px -292.5px #f03,-96.5px -47.5px #d0f,-177.5px -290px #6e00ff,-86.5px -185px #e6ff00,-83.5px -85.8333333333px #fff700,-127.5px -340.8333333333px #aeff00,-52px -62.5px #ff00d9,-213px -295.8333333333px #04f,-136.5px -151.6666666667px #0f9,-165px -37.5px #62ff00,-131.5px -281.6666666667px #00ff7b,-98px -407.5px #ff4d00,-98.5px -350.8333333333px #00ff95,-208.5px -217.5px #d400ff,-175px -142.5px #00ff4d,-114.5px -13.3333333333px #9500ff,-236.5px -100.8333333333px #0008ff,-95.5px -149.1666666667px #f2ff00,-18.5px -124.1666666667px #00eaff,-209px -118.3333333333px #ffe100,-11.5px -315.8333333333px #0073ff,-239px -134.1666666667px #0095ff,-5.5px -108.3333333333px #fffb00,-106px -114.1666666667px #ff0062,-215px -45.8333333333px #00ffe1,-167px -380px #84ff00,-91.5px -261.6666666667px #ff7b00,-56px -86.6666666667px #0d00ff,-235px -68.3333333333px #006aff,-111.5px -256.6666666667px #5f0,-249px -125.8333333333px #ffc300,-154.5px -142.5px #af0,-40px -192.5px #df0,-32.5px -91.6666666667px #7f00ff,-85.5px -5px #ffb700,-164.5px -364.1666666667px red,-248px -203.3333333333px #d900ff,-220px -320px #0026ff,-89.5px -158.3333333333px #ff001a,-142px -289.1666666667px #00a2ff,-135.5px -126.6666666667px #a6ff00,-193px -408.3333333333px #d4ff00,-75.5px -212.5px #0040ff}}@-ms-keyframes bang{to{box-shadow:-119.5px -405px #fff700,-107.5px -55px #60f,-180px -69.1666666667px #ff0095,-14px -180px #ff00a6,-137.5px -157.5px #bf0,-180.5px -120.8333333333px #ffd000,-61.5px -1.6666666667px #00ff7b,-120.5px -51.6666666667px #ea00ff,-143px -292.5px #f03,-96.5px -47.5px #d0f,-177.5px -290px #6e00ff,-86.5px -185px #e6ff00,-83.5px -85.8333333333px #fff700,-127.5px -340.8333333333px #aeff00,-52px -62.5px #ff00d9,-213px -295.8333333333px #04f,-136.5px -151.6666666667px #0f9,-165px -37.5px #62ff00,-131.5px -281.6666666667px #00ff7b,-98px -407.5px #ff4d00,-98.5px -350.8333333333px #00ff95,-208.5px -217.5px #d400ff,-175px -142.5px #00ff4d,-114.5px -13.3333333333px #9500ff,-236.5px -100.8333333333px #0008ff,-95.5px -149.1666666667px #f2ff00,-18.5px -124.1666666667px #00eaff,-209px -118.3333333333px #ffe100,-11.5px -315.8333333333px #0073ff,-239px -134.1666666667px #0095ff,-5.5px -108.3333333333px #fffb00,-106px -114.1666666667px #ff0062,-215px -45.8333333333px #00ffe1,-167px -380px #84ff00,-91.5px -261.6666666667px #ff7b00,-56px -86.6666666667px #0d00ff,-235px -68.3333333333px #006aff,-111.5px -256.6666666667px #5f0,-249px -125.8333333333px #ffc300,-154.5px -142.5px #af0,-40px -192.5px #df0,-32.5px -91.6666666667px #7f00ff,-85.5px -5px #ffb700,-164.5px -364.1666666667px red,-248px -203.3333333333px #d900ff,-220px -320px #0026ff,-89.5px -158.3333333333px #ff001a,-142px -289.1666666667px #00a2ff,-135.5px -126.6666666667px #a6ff00,-193px -408.3333333333px #d4ff00,-75.5px -212.5px #0040ff}}@keyframes _ngcontent-%COMP%_bang{to{box-shadow:-119.5px -405px #fff700,-107.5px -55px #60f,-180px -69.1666666667px #ff0095,-14px -180px #ff00a6,-137.5px -157.5px #bf0,-180.5px -120.8333333333px #ffd000,-61.5px -1.6666666667px #00ff7b,-120.5px -51.6666666667px #ea00ff,-143px -292.5px #f03,-96.5px -47.5px #d0f,-177.5px -290px #6e00ff,-86.5px -185px #e6ff00,-83.5px -85.8333333333px #fff700,-127.5px -340.8333333333px #aeff00,-52px -62.5px #ff00d9,-213px -295.8333333333px #04f,-136.5px -151.6666666667px #0f9,-165px -37.5px #62ff00,-131.5px -281.6666666667px #00ff7b,-98px -407.5px #ff4d00,-98.5px -350.8333333333px #00ff95,-208.5px -217.5px #d400ff,-175px -142.5px #00ff4d,-114.5px -13.3333333333px #9500ff,-236.5px -100.8333333333px #0008ff,-95.5px -149.1666666667px #f2ff00,-18.5px -124.1666666667px #00eaff,-209px -118.3333333333px #ffe100,-11.5px -315.8333333333px #0073ff,-239px -134.1666666667px #0095ff,-5.5px -108.3333333333px #fffb00,-106px -114.1666666667px #ff0062,-215px -45.8333333333px #00ffe1,-167px -380px #84ff00,-91.5px -261.6666666667px #ff7b00,-56px -86.6666666667px #0d00ff,-235px -68.3333333333px #006aff,-111.5px -256.6666666667px #5f0,-249px -125.8333333333px #ffc300,-154.5px -142.5px #af0,-40px -192.5px #df0,-32.5px -91.6666666667px #7f00ff,-85.5px -5px #ffb700,-164.5px -364.1666666667px red,-248px -203.3333333333px #d900ff,-220px -320px #0026ff,-89.5px -158.3333333333px #ff001a,-142px -289.1666666667px #00a2ff,-135.5px -126.6666666667px #a6ff00,-193px -408.3333333333px #d4ff00,-75.5px -212.5px #0040ff}}@-webkit-keyframes _ngcontent-%COMP%_gravity{to{transform:translateY(200px);-moz-transform:translateY(200px);-webkit-transform:translateY(200px);-o-transform:translateY(200px);-ms-transform:translateY(200px);opacity:0}}@-moz-keyframes gravity{to{transform:translateY(200px);-moz-transform:translateY(200px);-webkit-transform:translateY(200px);-o-transform:translateY(200px);-ms-transform:translateY(200px);opacity:0}}@-o-keyframes gravity{to{transform:translateY(200px);-moz-transform:translateY(200px);-webkit-transform:translateY(200px);-o-transform:translateY(200px);-ms-transform:translateY(200px);opacity:0}}@-ms-keyframes gravity{to{transform:translateY(200px);-moz-transform:translateY(200px);-webkit-transform:translateY(200px);-o-transform:translateY(200px);-ms-transform:translateY(200px);opacity:0}}@keyframes _ngcontent-%COMP%_gravity{to{transform:translateY(200px);-moz-transform:translateY(200px);-webkit-transform:translateY(200px);-o-transform:translateY(200px);-ms-transform:translateY(200px);opacity:0}}@-webkit-keyframes _ngcontent-%COMP%_position{0%,19.9%{margin-top:10%;margin-left:40%}20%,39.9%{margin-top:40%;margin-left:30%}40%,59.9%{margin-top:20%;margin-left:70%}60%,79.9%{margin-top:30%;margin-left:20%}80%,99.9%{margin-top:30%;margin-left:80%}}@-moz-keyframes position{0%,19.9%{margin-top:10%;margin-left:40%}20%,39.9%{margin-top:40%;margin-left:30%}40%,59.9%{margin-top:20%;margin-left:70%}60%,79.9%{margin-top:30%;margin-left:20%}80%,99.9%{margin-top:30%;margin-left:80%}}@-o-keyframes position{0%,19.9%{margin-top:10%;margin-left:40%}20%,39.9%{margin-top:40%;margin-left:30%}40%,59.9%{margin-top:20%;margin-left:70%}60%,79.9%{margin-top:30%;margin-left:20%}80%,99.9%{margin-top:30%;margin-left:80%}}@-ms-keyframes position{0%,19.9%{margin-top:10%;margin-left:40%}20%,39.9%{margin-top:40%;margin-left:30%}40%,59.9%{margin-top:20%;margin-left:70%}60%,79.9%{margin-top:30%;margin-left:20%}80%,99.9%{margin-top:30%;margin-left:80%}}@keyframes _ngcontent-%COMP%_position{0%,19.9%{margin-top:10%;margin-left:40%}20%,39.9%{margin-top:40%;margin-left:30%}40%,59.9%{margin-top:20%;margin-left:70%}60%,79.9%{margin-top:30%;margin-left:20%}80%,99.9%{margin-top:30%;margin-left:80%}}"]})}}return t})();var xP=["answer"],CP=["grid"];function IP(t,n){t&1&&Me(0,"app-pyro")}var Yx=(()=>{class t extends rf{constructor(){super()}ngOnInit(){this.randomProblem()}randomProblem(){this.operand1=Math.floor(Math.random()*9+1),this.operand2=Math.floor(Math.random()*19/this.operand1+1),this.answer.nativeElement.value=""}check(){try{let e=parseInt(this.answer.nativeElement.value,10),i=this.operand1*this.operand2;console.log({answer:e,operand1:this.operand1,operand2:this.operand2,expected:i,compare:e===i}),e===i?this.right():this.wrong()}catch(e){this.wrong()}}right(){this.showPyro(),this.randomProblem(),this.grid.clear()}wrong(){console.log("wrong")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=k({type:t,selectors:[["app-multiplication"]],viewQuery:function(i,r){if(i&1&&Xe(xP,7)(CP,7),i&2){let o;Q(o=Z())&&(r.answer=o.first),Q(o=Z())&&(r.grid=o.first)}},features:[_e],decls:17,vars:6,consts:[["answer",""],["grid",""],[1,"math-problem"],[1,"problem-text"],[1,"problem-answer"],["matInput","","type","number","value","","placeholder","answer here","min","0"],[3,"currentValueChange","currentValue"],[3,"count","currentValue"],[1,"buttons"],["mat-raised-button","","color","primary",3,"click"]],template:function(i,r){if(i&1){let o=Gt();E(0,"div",2)(1,"h2"),le(2,"Multiplication"),x(),E(3,"div",3),le(4),E(5,"mat-form-field",4),Me(6,"input",5,0),x()(),E(8,"app-emoji-selector",6),te("currentValueChange",function(a){return r.onEmojiChange(a)}),x(),Me(9,"app-decimal-grid-set",7,1),E(11,"p",8)(12,"button",9),te("click",function(){return r.check()}),le(13,"Check My Answer!"),x(),E(14,"button",9),te("click",function(){Rt(o);let a=Wt(10);return Nt(a.clear())}),le(15,"Clear"),x()()(),be(16,IP,1,0,"app-pyro")}i&2&&(I(4),qo(" ",r.operand1," \xD7 ",r.operand2," = "),I(4),we("currentValue",r.currentEmoji),I(),we("count",2)("currentValue",r.currentEmoji),I(7),ye(r.pyroVisible?16:-1))},dependencies:[Ei,vs,Kx,Gx,ys,af],styles:[".problem-text[_ngcontent-%COMP%]{display:inline-block;font-size:1.8rem;border-radius:.2rem;padding:.5rem;margin-right:2rem;border:1px solid #4caf50}.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:1rem}"]})}}return t})();var wv=(t,n)=>Math.floor(Math.random()*(n-t+1)+t);var SP=["answer"];function MP(t,n){if(t&1&&(E(0,"span"),le(1),mi(2,"async"),x()),t&2){let e=Ce();I(),Pt(hi(2,1,e.wrongMessage))}}function TP(t,n){t&1&&Me(0,"app-pyro")}var Xx=(()=>{class t extends rf{constructor(){super(),this.wrongMessage=new je(""),this.isWrong=this.wrongMessage.pipe(Ve(e=>e?T(!0,!1).pipe(oc(i=>Ls(i?0:3e3))):T(!1)))}ngOnInit(){this.randomProblem()}randomProblem(){this.operand1=wv(100,999),this.operand2=wv(0,this.operand1),this.answer.nativeElement.value=""}check(){try{let e=parseInt(this.answer.nativeElement.value,10),i=this.operand1-this.operand2;e===i?this.right():this.wrong(isNaN(e)?"blank":e.toFixed(0))}catch(e){this.wrong("?")}}right(){this.showPyro(),this.randomProblem()}wrong(e){this.wrongMessage.next(`\u2639\uFE0F Sorry, ${e} isn't correct. Try again!`)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=k({type:t,selectors:[["app-three-digit-subtraction"]],viewQuery:function(i,r){if(i&1&&Xe(SP,7),i&2){let o;Q(o=Z())&&(r.answer=o.first)}},features:[_e],decls:23,vars:6,consts:[["answer",""],[1,"math-problem"],[1,"problem-text"],[1,"operand-line"],[1,"operand","operand1"],[1,"operator"],[1,"operand","operand2"],[1,"problem-answer"],["matInput","","type","number","value","","placeholder","answer here","min","0"],[1,"buttons"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","secondary",3,"click"]],template:function(i,r){i&1&&(E(0,"div",1)(1,"h2"),le(2,"Three Digit Subtraction"),x(),E(3,"div",2)(4,"div",3)(5,"span",4),le(6),x()(),E(7,"div",3)(8,"span",5),le(9,"-"),x(),E(10,"span",6),le(11),x()(),E(12,"mat-form-field",7),Me(13,"input",8,0),x()(),E(15,"p",9)(16,"button",10),te("click",function(){return r.check()}),le(17,"Check My Answer!"),x(),E(18,"button",11),te("click",function(){return r.randomProblem()}),le(19,"Too hard, new problem"),x(),be(20,MP,3,3,"span"),mi(21,"async"),x()(),be(22,TP,1,0,"app-pyro")),i&2&&(I(6),Pt(r.operand1),I(5),Pt(r.operand2),I(9),ye(hi(21,4,r.isWrong)?20:-1),I(2),ye(r.pyroVisible?22:-1))},dependencies:[Ei,vs,ys,af,Ra],styles:[".problem-text[_ngcontent-%COMP%]{display:inline-block;font-size:1.8rem;border-radius:.2rem;padding:.5rem;margin-right:2rem;border:1px solid #4caf50}.operand[_ngcontent-%COMP%]{display:inline-block;width:4rem;text-align:right}.operand1[_ngcontent-%COMP%]{margin-left:1rem}.operand2[_ngcontent-%COMP%]{border-bottom:1px solid}.operator[_ngcontent-%COMP%]{display:inline-block;width:1rem;text-align:left}.problem-answer[_ngcontent-%COMP%]{margin-top:2em}.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:1rem}"]})}}return t})();var kP=[{path:"multiplication",component:Yx},{path:"multiplication-facts",component:$x},{path:"three-digit-subtraction",component:Xx},{path:"",redirectTo:"/multiplication",pathMatch:"full"},{path:"**",redirectTo:"/multiplication",pathMatch:"full"}],Jx=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=L({type:t})}static{this.\u0275inj=P({imports:[Du.forRoot(kP,{}),Du]})}}return t})();var ae=(function(t){return t[t.State=0]="State",t[t.Transition=1]="Transition",t[t.Sequence=2]="Sequence",t[t.Group=3]="Group",t[t.Animate=4]="Animate",t[t.Keyframes=5]="Keyframes",t[t.Style=6]="Style",t[t.Trigger=7]="Trigger",t[t.Reference=8]="Reference",t[t.AnimateChild=9]="AnimateChild",t[t.AnimateRef=10]="AnimateRef",t[t.Query=11]="Query",t[t.Stagger=12]="Stagger",t})(ae||{}),Mn="*";function eC(t,n=null){return{type:ae.Sequence,steps:t,options:n}}function Ev(t){return{type:ae.Style,styles:t,offset:null}}var Di=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(n=0,e=0){this.totalTime=n+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}onStart(n){this._originalOnStartFns.push(n),this._onStartFns.push(n)}onDone(n){this._originalOnDoneFns.push(n),this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(n=>n()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(n){this._position=this.totalTime?n*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(n){let e=n=="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},_s=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(n){this.players=n;let e=0,i=0,r=0,o=this.players.length;o==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(s=>{s.onDone(()=>{++e==o&&this._onFinish()}),s.onDestroy(()=>{++i==o&&this._onDestroy()}),s.onStart(()=>{++r==o&&this._onStart()})}),this.totalTime=this.players.reduce((s,a)=>Math.max(s,a.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}init(){this.players.forEach(n=>n.init())}onStart(n){this._onStartFns.push(n)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(n=>n()),this._onStartFns=[])}onDone(n){this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(n=>n.play())}pause(){this.players.forEach(n=>n.pause())}restart(){this.players.forEach(n=>n.restart())}finish(){this._onFinish(),this.players.forEach(n=>n.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(n=>n.destroy()),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}reset(){this.players.forEach(n=>n.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(n){let e=n*this.totalTime;this.players.forEach(i=>{let r=i.totalTime?Math.min(1,e/i.totalTime):1;i.setPosition(r)})}getPosition(){let n=this.players.reduce((e,i)=>e===null||i.totalTime>e.totalTime?i:e,null);return n!=null?n.getPosition():0}beforeDestroy(){this.players.forEach(n=>{n.beforeDestroy&&n.beforeDestroy()})}triggerCallback(n){let e=n=="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},bl="!";function tC(t){return new g(3e3,!1)}function AP(){return new g(3100,!1)}function RP(){return new g(3101,!1)}function NP(t){return new g(3001,!1)}function OP(t){return new g(3003,!1)}function FP(t){return new g(3004,!1)}function iC(t,n){return new g(3005,!1)}function rC(){return new g(3006,!1)}function oC(){return new g(3007,!1)}function sC(t,n){return new g(3008,!1)}function aC(t){return new g(3002,!1)}function lC(t,n,e,i,r){return new g(3010,!1)}function cC(){return new g(3011,!1)}function dC(){return new g(3012,!1)}function uC(){return new g(3200,!1)}function fC(){return new g(3202,!1)}function mC(){return new g(3013,!1)}function hC(t){return new g(3014,!1)}function pC(t){return new g(3015,!1)}function gC(t){return new g(3016,!1)}function vC(t,n){return new g(3404,!1)}function PP(t){return new g(3502,!1)}function bC(t){return new g(3503,!1)}function yC(){return new g(3300,!1)}function _C(t){return new g(3504,!1)}function wC(t){return new g(3301,!1)}function EC(t,n){return new g(3302,!1)}function DC(t){return new g(3303,!1)}function xC(t,n){return new g(3400,!1)}function CC(t){return new g(3401,!1)}function IC(t){return new g(3402,!1)}function SC(t,n){return new g(3505,!1)}function xi(t){switch(t.length){case 0:return new Di;case 1:return t[0];default:return new _s(t)}}function Iv(t,n,e=new Map,i=new Map){let r=[],o=[],s=-1,a=null;if(n.forEach(l=>{let c=l.get("offset"),d=c==s,f=d&&a||new Map;l.forEach((h,m)=>{let p=m,b=h;if(m!=="offset")switch(p=t.normalizePropertyName(p,r),b){case bl:b=e.get(m);break;case Mn:b=i.get(m);break;default:b=t.normalizeStyleValue(m,p,b,r);break}f.set(p,b)}),d||o.push(f),a=f,s=c}),r.length)throw PP(r);return o}function lf(t,n,e,i){switch(n){case"start":t.onStart(()=>i(e&&Dv(e,"start",t)));break;case"done":t.onDone(()=>i(e&&Dv(e,"done",t)));break;case"destroy":t.onDestroy(()=>i(e&&Dv(e,"destroy",t)));break}}function Dv(t,n,e){let i=e.totalTime,r=!!e.disabled,o=cf(t.element,t.triggerName,t.fromState,t.toState,n||t.phaseName,i??t.totalTime,r),s=t._data;return s!=null&&(o._data=s),o}function cf(t,n,e,i,r="",o=0,s){return{element:t,triggerName:n,fromState:e,toState:i,phaseName:r,totalTime:o,disabled:!!s}}function Vt(t,n,e){let i=t.get(n);return i||t.set(n,i=e),i}function Sv(t){let n=t.indexOf(":"),e=t.substring(1,n),i=t.slice(n+1);return[e,i]}var LP=typeof document>"u"?null:document.documentElement;function df(t){let n=t.parentNode||t.host||null;return n===LP?null:n}function VP(t){return t.substring(1,6)=="ebkit"}var lo=null,nC=!1;function MC(t){lo||(lo=jP()||{},nC=lo.style?"WebkitAppearance"in lo.style:!1);let n=!0;return lo.style&&!VP(t)&&(n=t in lo.style,!n&&nC&&(n="Webkit"+t.charAt(0).toUpperCase()+t.slice(1)in lo.style)),n}function jP(){return typeof document<"u"?document.body:null}function Mv(t,n){for(;n;){if(n===t)return!0;n=df(n)}return!1}function Tv(t,n,e){if(e)return Array.from(t.querySelectorAll(n));let i=t.querySelector(n);return i?[i]:[]}var BP=1e3,kv="{{",UP="}}",Av="ng-enter",uf="ng-leave",yl="ng-trigger",_l=".ng-trigger",Rv="ng-animating",ff=".ng-animating";function Wn(t){if(typeof t=="number")return t;let n=t.match(/^(-?[\.\d]+)(m?s)/);return!n||n.length<2?0:xv(parseFloat(n[1]),n[2])}function xv(t,n){return n==="s"?t*BP:t}function wl(t,n,e){return t.hasOwnProperty("duration")?t:zP(t,n,e)}var HP=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;function zP(t,n,e){let i,r=0,o="";if(typeof t=="string"){let s=t.match(HP);if(s===null)return n.push(tC(t)),{duration:0,delay:0,easing:""};i=xv(parseFloat(s[1]),s[2]);let a=s[3];a!=null&&(r=xv(parseFloat(a),s[4]));let l=s[5];l&&(o=l)}else i=t;if(!e){let s=!1,a=n.length;i<0&&(n.push(AP()),s=!0),r<0&&(n.push(RP()),s=!0),s&&n.splice(a,0,tC(t))}return{duration:i,delay:r,easing:o}}function TC(t){return t.length?t[0]instanceof Map?t:t.map(n=>new Map(Object.entries(n))):[]}function Tn(t,n,e){n.forEach((i,r)=>{let o=mf(r);e&&!e.has(r)&&e.set(r,t.style[o]),t.style[o]=i})}function ar(t,n){n.forEach((e,i)=>{let r=mf(i);t.style[r]=""})}function ws(t){return Array.isArray(t)?t.length==1?t[0]:eC(t):t}function kC(t,n,e){let i=n.params||{},r=Nv(t);r.length&&r.forEach(o=>{i.hasOwnProperty(o)||e.push(NP(o))})}var Cv=new RegExp(`${kv}\\s*(.+?)\\s*${UP}`,"g");function Nv(t){let n=[];if(typeof t=="string"){let e;for(;e=Cv.exec(t);)n.push(e[1]);Cv.lastIndex=0}return n}function Es(t,n,e){let i=`${t}`,r=i.replace(Cv,(o,s)=>{let a=n[s];return a==null&&(e.push(OP(s)),a=""),a.toString()});return r==i?t:r}var $P=/-+([a-z0-9])/g;function mf(t){return t.replace($P,(...n)=>n[1].toUpperCase())}function AC(t,n){return t===0||n===0}function RC(t,n,e){if(e.size&&n.length){let i=n[0],r=[];if(e.forEach((o,s)=>{i.has(s)||r.push(s),i.set(s,o)}),r.length)for(let o=1;o<n.length;o++){let s=n[o];r.forEach(a=>s.set(a,hf(t,a)))}}return n}function jt(t,n,e){switch(n.type){case ae.Trigger:return t.visitTrigger(n,e);case ae.State:return t.visitState(n,e);case ae.Transition:return t.visitTransition(n,e);case ae.Sequence:return t.visitSequence(n,e);case ae.Group:return t.visitGroup(n,e);case ae.Animate:return t.visitAnimate(n,e);case ae.Keyframes:return t.visitKeyframes(n,e);case ae.Style:return t.visitStyle(n,e);case ae.Reference:return t.visitReference(n,e);case ae.AnimateChild:return t.visitAnimateChild(n,e);case ae.AnimateRef:return t.visitAnimateRef(n,e);case ae.Query:return t.visitQuery(n,e);case ae.Stagger:return t.visitStagger(n,e);default:throw FP(n.type)}}function hf(t,n){return window.getComputedStyle(t)[n]}var Kv=(()=>{class t{validateStyleProperty(e){return MC(e)}containsElement(e,i){return Mv(e,i)}getParentElement(e){return df(e)}query(e,i,r){return Tv(e,i,r)}computeStyle(e,i,r){return r||""}animate(e,i,r,o,s,a=[],l){return new Di(r,o)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),uo=class{static NOOP=new Kv},fo=class{};var GP=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),yf=class extends fo{normalizePropertyName(n,e){return mf(n)}normalizeStyleValue(n,e,i,r){let o="",s=i.toString().trim();if(GP.has(e)&&i!==0&&i!=="0")if(typeof i=="number")o="px";else{let a=i.match(/^[+-]?[\d\.]+([a-z]*)$/);a&&a[1].length==0&&r.push(iC(n,i))}return s+o}};var _f="*";function WP(t,n){let e=[];return typeof t=="string"?t.split(/\s*,\s*/).forEach(i=>qP(i,e,n)):e.push(t),e}function qP(t,n,e){if(t[0]==":"){let l=QP(t,e);if(typeof l=="function"){n.push(l);return}t=l}let i=t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(i==null||i.length<4)return e.push(pC(t)),n;let r=i[1],o=i[2],s=i[3];n.push(NC(r,s));let a=r==_f&&s==_f;o[0]=="<"&&!a&&n.push(NC(s,r))}function QP(t,n){switch(t){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(e,i)=>parseFloat(i)>parseFloat(e);case":decrement":return(e,i)=>parseFloat(i)<parseFloat(e);default:return n.push(gC(t)),"* => *"}}var pf=new Set(["true","1"]),gf=new Set(["false","0"]);function NC(t,n){let e=pf.has(t)||gf.has(t),i=pf.has(n)||gf.has(n);return(r,o)=>{let s=t==_f||t==r,a=n==_f||n==o;return!s&&e&&typeof r=="boolean"&&(s=r?pf.has(t):gf.has(t)),!a&&i&&typeof o=="boolean"&&(a=o?pf.has(n):gf.has(n)),s&&a}}var zC=":self",ZP=new RegExp(`s*${zC}s*,?`,"g");function $C(t,n,e,i){return new jv(t).build(n,e,i)}var OC="",jv=class{_driver;constructor(n){this._driver=n}build(n,e,i){let r=new Bv(e);return this._resetContextStyleTimingState(r),jt(this,ws(n),r)}_resetContextStyleTimingState(n){n.currentQuerySelector=OC,n.collectedStyles=new Map,n.collectedStyles.set(OC,new Map),n.currentTime=0}visitTrigger(n,e){let i=e.queryCount=0,r=e.depCount=0,o=[],s=[];return n.name.charAt(0)=="@"&&e.errors.push(rC()),n.definitions.forEach(a=>{if(this._resetContextStyleTimingState(e),a.type==ae.State){let l=a,c=l.name;c.toString().split(/\s*,\s*/).forEach(d=>{l.name=d,o.push(this.visitState(l,e))}),l.name=c}else if(a.type==ae.Transition){let l=this.visitTransition(a,e);i+=l.queryCount,r+=l.depCount,s.push(l)}else e.errors.push(oC())}),{type:ae.Trigger,name:n.name,states:o,transitions:s,queryCount:i,depCount:r,options:null}}visitState(n,e){let i=this.visitStyle(n.styles,e),r=n.options&&n.options.params||null;if(i.containsDynamicStyles){let o=new Set,s=r||{};i.styles.forEach(a=>{a instanceof Map&&a.forEach(l=>{Nv(l).forEach(c=>{s.hasOwnProperty(c)||o.add(c)})})}),o.size&&e.errors.push(sC(n.name,[...o.values()]))}return{type:ae.State,name:n.name,style:i,options:r?{params:r}:null}}visitTransition(n,e){e.queryCount=0,e.depCount=0;let i=jt(this,ws(n.animation),e),r=WP(n.expr,e.errors);return{type:ae.Transition,matchers:r,animation:i,queryCount:e.queryCount,depCount:e.depCount,options:co(n.options)}}visitSequence(n,e){return{type:ae.Sequence,steps:n.steps.map(i=>jt(this,i,e)),options:co(n.options)}}visitGroup(n,e){let i=e.currentTime,r=0,o=n.steps.map(s=>{e.currentTime=i;let a=jt(this,s,e);return r=Math.max(r,e.currentTime),a});return e.currentTime=r,{type:ae.Group,steps:o,options:co(n.options)}}visitAnimate(n,e){let i=JP(n.timings,e.errors);e.currentAnimateTimings=i;let r,o=n.styles?n.styles:Ev({});if(o.type==ae.Keyframes)r=this.visitKeyframes(o,e);else{let s=n.styles,a=!1;if(!s){a=!0;let c={};i.easing&&(c.easing=i.easing),s=Ev(c)}e.currentTime+=i.duration+i.delay;let l=this.visitStyle(s,e);l.isEmptyStep=a,r=l}return e.currentAnimateTimings=null,{type:ae.Animate,timings:i,style:r,options:null}}visitStyle(n,e){let i=this._makeStyleAst(n,e);return this._validateStyleAst(i,e),i}_makeStyleAst(n,e){let i=[],r=Array.isArray(n.styles)?n.styles:[n.styles];for(let a of r)typeof a=="string"?a===Mn?i.push(a):e.errors.push(aC(a)):i.push(new Map(Object.entries(a)));let o=!1,s=null;return i.forEach(a=>{if(a instanceof Map&&(a.has("easing")&&(s=a.get("easing"),a.delete("easing")),!o)){for(let l of a.values())if(l.toString().indexOf(kv)>=0){o=!0;break}}}),{type:ae.Style,styles:i,easing:s,offset:n.offset,containsDynamicStyles:o,options:null}}_validateStyleAst(n,e){let i=e.currentAnimateTimings,r=e.currentTime,o=e.currentTime;i&&o>0&&(o-=i.duration+i.delay),n.styles.forEach(s=>{typeof s!="string"&&s.forEach((a,l)=>{let c=e.collectedStyles.get(e.currentQuerySelector),d=c.get(l),f=!0;d&&(o!=r&&o>=d.startTime&&r<=d.endTime&&(e.errors.push(lC(l,d.startTime,d.endTime,o,r)),f=!1),o=d.startTime),f&&c.set(l,{startTime:o,endTime:r}),e.options&&kC(a,e.options,e.errors)})})}visitKeyframes(n,e){let i={type:ae.Keyframes,styles:[],options:null};if(!e.currentAnimateTimings)return e.errors.push(cC()),i;let r=1,o=0,s=[],a=!1,l=!1,c=0,d=n.steps.map(D=>{let U=this._makeStyleAst(D,e),ue=U.offset!=null?U.offset:XP(U.styles),ce=0;return ue!=null&&(o++,ce=U.offset=ue),l=l||ce<0||ce>1,a=a||ce<c,c=ce,s.push(ce),U});l&&e.errors.push(dC()),a&&e.errors.push(uC());let f=n.steps.length,h=0;o>0&&o<f?e.errors.push(fC()):o==0&&(h=r/(f-1));let m=f-1,p=e.currentTime,b=e.currentAnimateTimings,w=b.duration;return d.forEach((D,U)=>{let ue=h>0?U==m?1:h*U:s[U],ce=ue*w;e.currentTime=p+b.delay+ce,b.duration=ce,this._validateStyleAst(D,e),D.offset=ue,i.styles.push(D)}),i}visitReference(n,e){return{type:ae.Reference,animation:jt(this,ws(n.animation),e),options:co(n.options)}}visitAnimateChild(n,e){return e.depCount++,{type:ae.AnimateChild,options:co(n.options)}}visitAnimateRef(n,e){return{type:ae.AnimateRef,animation:this.visitReference(n.animation,e),options:co(n.options)}}visitQuery(n,e){let i=e.currentQuerySelector,r=n.options||{};e.queryCount++,e.currentQuery=n;let[o,s]=KP(n.selector);e.currentQuerySelector=i.length?i+" "+o:o,Vt(e.collectedStyles,e.currentQuerySelector,new Map);let a=jt(this,ws(n.animation),e);return e.currentQuery=null,e.currentQuerySelector=i,{type:ae.Query,selector:o,limit:r.limit||0,optional:!!r.optional,includeSelf:s,animation:a,originalSelector:n.selector,options:co(n.options)}}visitStagger(n,e){e.currentQuery||e.errors.push(mC());let i=n.timings==="full"?{duration:0,delay:0,easing:"full"}:wl(n.timings,e.errors,!0);return{type:ae.Stagger,animation:jt(this,ws(n.animation),e),timings:i,options:null}}};function KP(t){let n=!!t.split(/\s*,\s*/).find(e=>e==zC);return n&&(t=t.replace(ZP,"")),t=t.replace(/@\*/g,_l).replace(/@\w+/g,e=>_l+"-"+e.slice(1)).replace(/:animating/g,ff),[t,n]}function YP(t){return t?v({},t):null}var Bv=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(n){this.errors=n}};function XP(t){if(typeof t=="string")return null;let n=null;if(Array.isArray(t))t.forEach(e=>{if(e instanceof Map&&e.has("offset")){let i=e;n=parseFloat(i.get("offset")),i.delete("offset")}});else if(t instanceof Map&&t.has("offset")){let e=t;n=parseFloat(e.get("offset")),e.delete("offset")}return n}function JP(t,n){if(t.hasOwnProperty("duration"))return t;if(typeof t=="number"){let o=wl(t,n).duration;return Ov(o,0,"")}let e=t;if(e.split(/\s+/).some(o=>o.charAt(0)=="{"&&o.charAt(1)=="{")){let o=Ov(0,0,"");return o.dynamic=!0,o.strValue=e,o}let r=wl(e,n);return Ov(r.duration,r.delay,r.easing)}function co(t){return t?(t=v({},t),t.params&&(t.params=YP(t.params))):t={},t}function Ov(t,n,e){return{duration:t,delay:n,easing:e}}function Yv(t,n,e,i,r,o,s=null,a=!1){return{type:1,element:t,keyframes:n,preStyleProps:e,postStyleProps:i,duration:r,delay:o,totalTime:r+o,easing:s,subTimeline:a}}var Dl=class{_map=new Map;get(n){return this._map.get(n)||[]}append(n,e){let i=this._map.get(n);i||this._map.set(n,i=[]),i.push(...e)}has(n){return this._map.has(n)}clear(){this._map.clear()}},eL=1,tL=":enter",nL=new RegExp(tL,"g"),iL=":leave",rL=new RegExp(iL,"g");function GC(t,n,e,i,r,o=new Map,s=new Map,a,l,c=[]){return new Uv().buildKeyframes(t,n,e,i,r,o,s,a,l,c)}var Uv=class{buildKeyframes(n,e,i,r,o,s,a,l,c,d=[]){c=c||new Dl;let f=new Hv(n,e,c,r,o,d,[]);f.options=l;let h=l.delay?Wn(l.delay):0;f.currentTimeline.delayNextStep(h),f.currentTimeline.setStyles([s],null,f.errors,l),jt(this,i,f);let m=f.timelines.filter(p=>p.containsAnimation());if(m.length&&a.size){let p;for(let b=m.length-1;b>=0;b--){let w=m[b];if(w.element===e){p=w;break}}p&&!p.allowOnlyTimelineStyles()&&p.setStyles([a],null,f.errors,l)}return m.length?m.map(p=>p.buildKeyframes()):[Yv(e,[],[],[],0,h,"",!1)]}visitTrigger(n,e){}visitState(n,e){}visitTransition(n,e){}visitAnimateChild(n,e){let i=e.subInstructions.get(e.element);if(i){let r=e.createSubContext(n.options),o=e.currentTimeline.currentTime,s=this._visitSubInstructions(i,r,r.options);o!=s&&e.transformIntoNewTimeline(s)}e.previousNode=n}visitAnimateRef(n,e){let i=e.createSubContext(n.options);i.transformIntoNewTimeline(),this._applyAnimationRefDelays([n.options,n.animation.options],e,i),this.visitReference(n.animation,i),e.transformIntoNewTimeline(i.currentTimeline.currentTime),e.previousNode=n}_applyAnimationRefDelays(n,e,i){for(let r of n){let o=r?.delay;if(o){let s=typeof o=="number"?o:Wn(Es(o,r?.params??{},e.errors));i.delayNextStep(s)}}}_visitSubInstructions(n,e,i){let o=e.currentTimeline.currentTime,s=i.duration!=null?Wn(i.duration):null,a=i.delay!=null?Wn(i.delay):null;return s!==0&&n.forEach(l=>{let c=e.appendInstructionToTimeline(l,s,a);o=Math.max(o,c.duration+c.delay)}),o}visitReference(n,e){e.updateOptions(n.options,!0),jt(this,n.animation,e),e.previousNode=n}visitSequence(n,e){let i=e.subContextCount,r=e,o=n.options;if(o&&(o.params||o.delay)&&(r=e.createSubContext(o),r.transformIntoNewTimeline(),o.delay!=null)){r.previousNode.type==ae.Style&&(r.currentTimeline.snapshotCurrentStyles(),r.previousNode=wf);let s=Wn(o.delay);r.delayNextStep(s)}n.steps.length&&(n.steps.forEach(s=>jt(this,s,r)),r.currentTimeline.applyStylesToKeyframe(),r.subContextCount>i&&r.transformIntoNewTimeline()),e.previousNode=n}visitGroup(n,e){let i=[],r=e.currentTimeline.currentTime,o=n.options&&n.options.delay?Wn(n.options.delay):0;n.steps.forEach(s=>{let a=e.createSubContext(n.options);o&&a.delayNextStep(o),jt(this,s,a),r=Math.max(r,a.currentTimeline.currentTime),i.push(a.currentTimeline)}),i.forEach(s=>e.currentTimeline.mergeTimelineCollectedStyles(s)),e.transformIntoNewTimeline(r),e.previousNode=n}_visitTiming(n,e){if(n.dynamic){let i=n.strValue,r=e.params?Es(i,e.params,e.errors):i;return wl(r,e.errors)}else return{duration:n.duration,delay:n.delay,easing:n.easing}}visitAnimate(n,e){let i=e.currentAnimateTimings=this._visitTiming(n.timings,e),r=e.currentTimeline;i.delay&&(e.incrementTime(i.delay),r.snapshotCurrentStyles());let o=n.style;o.type==ae.Keyframes?this.visitKeyframes(o,e):(e.incrementTime(i.duration),this.visitStyle(o,e),r.applyStylesToKeyframe()),e.currentAnimateTimings=null,e.previousNode=n}visitStyle(n,e){let i=e.currentTimeline,r=e.currentAnimateTimings;!r&&i.hasCurrentStyleProperties()&&i.forwardFrame();let o=r&&r.easing||n.easing;n.isEmptyStep?i.applyEmptyStep(o):i.setStyles(n.styles,o,e.errors,e.options),e.previousNode=n}visitKeyframes(n,e){let i=e.currentAnimateTimings,r=e.currentTimeline.duration,o=i.duration,a=e.createSubContext().currentTimeline;a.easing=i.easing,n.styles.forEach(l=>{let c=l.offset||0;a.forwardTime(c*o),a.setStyles(l.styles,l.easing,e.errors,e.options),a.applyStylesToKeyframe()}),e.currentTimeline.mergeTimelineCollectedStyles(a),e.transformIntoNewTimeline(r+o),e.previousNode=n}visitQuery(n,e){let i=e.currentTimeline.currentTime,r=n.options||{},o=r.delay?Wn(r.delay):0;o&&(e.previousNode.type===ae.Style||i==0&&e.currentTimeline.hasCurrentStyleProperties())&&(e.currentTimeline.snapshotCurrentStyles(),e.previousNode=wf);let s=i,a=e.invokeQuery(n.selector,n.originalSelector,n.limit,n.includeSelf,!!r.optional,e.errors);e.currentQueryTotal=a.length;let l=null;a.forEach((c,d)=>{e.currentQueryIndex=d;let f=e.createSubContext(n.options,c);o&&f.delayNextStep(o),c===e.element&&(l=f.currentTimeline),jt(this,n.animation,f),f.currentTimeline.applyStylesToKeyframe();let h=f.currentTimeline.currentTime;s=Math.max(s,h)}),e.currentQueryIndex=0,e.currentQueryTotal=0,e.transformIntoNewTimeline(s),l&&(e.currentTimeline.mergeTimelineCollectedStyles(l),e.currentTimeline.snapshotCurrentStyles()),e.previousNode=n}visitStagger(n,e){let i=e.parentContext,r=e.currentTimeline,o=n.timings,s=Math.abs(o.duration),a=s*(e.currentQueryTotal-1),l=s*e.currentQueryIndex;switch(o.duration<0?"reverse":o.easing){case"reverse":l=a-l;break;case"full":l=i.currentStaggerTime;break}let d=e.currentTimeline;l&&d.delayNextStep(l);let f=d.currentTime;jt(this,n.animation,e),e.previousNode=n,i.currentStaggerTime=r.currentTime-f+(r.startTime-i.currentTimeline.startTime)}},wf={},Hv=class t{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=wf;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(n,e,i,r,o,s,a,l){this._driver=n,this.element=e,this.subInstructions=i,this._enterClassName=r,this._leaveClassName=o,this.errors=s,this.timelines=a,this.currentTimeline=l||new Ef(this._driver,e,0),a.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(n,e){if(!n)return;let i=n,r=this.options;i.duration!=null&&(r.duration=Wn(i.duration)),i.delay!=null&&(r.delay=Wn(i.delay));let o=i.params;if(o){let s=r.params;s||(s=this.options.params={}),Object.keys(o).forEach(a=>{(!e||!s.hasOwnProperty(a))&&(s[a]=Es(o[a],s,this.errors))})}}_copyOptions(){let n={};if(this.options){let e=this.options.params;if(e){let i=n.params={};Object.keys(e).forEach(r=>{i[r]=e[r]})}}return n}createSubContext(n=null,e,i){let r=e||this.element,o=new t(this._driver,r,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(r,i||0));return o.previousNode=this.previousNode,o.currentAnimateTimings=this.currentAnimateTimings,o.options=this._copyOptions(),o.updateOptions(n),o.currentQueryIndex=this.currentQueryIndex,o.currentQueryTotal=this.currentQueryTotal,o.parentContext=this,this.subContextCount++,o}transformIntoNewTimeline(n){return this.previousNode=wf,this.currentTimeline=this.currentTimeline.fork(this.element,n),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(n,e,i){let r={duration:e??n.duration,delay:this.currentTimeline.currentTime+(i??0)+n.delay,easing:""},o=new zv(this._driver,n.element,n.keyframes,n.preStyleProps,n.postStyleProps,r,n.stretchStartingKeyframe);return this.timelines.push(o),r}incrementTime(n){this.currentTimeline.forwardTime(this.currentTimeline.duration+n)}delayNextStep(n){n>0&&this.currentTimeline.delayNextStep(n)}invokeQuery(n,e,i,r,o,s){let a=[];if(r&&a.push(this.element),n.length>0){n=n.replace(nL,"."+this._enterClassName),n=n.replace(rL,"."+this._leaveClassName);let l=i!=1,c=this._driver.query(this.element,n,l);i!==0&&(c=i<0?c.slice(c.length+i,c.length):c.slice(0,i)),a.push(...c)}return!o&&a.length==0&&s.push(hC(e)),a}},Ef=class t{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(n,e,i,r){this._driver=n,this.element=e,this.startTime=i,this._elementTimelineStylesLookup=r,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(e),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(e,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(n){let e=this._keyframes.size===1&&this._pendingStyles.size;this.duration||e?(this.forwardTime(this.currentTime+n),e&&this.snapshotCurrentStyles()):this.startTime+=n}fork(n,e){return this.applyStylesToKeyframe(),new t(this._driver,n,e||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=eL,this._loadKeyframe()}forwardTime(n){this.applyStylesToKeyframe(),this.duration=n,this._loadKeyframe()}_updateStyle(n,e){this._localTimelineStyles.set(n,e),this._globalTimelineStyles.set(n,e),this._styleSummary.set(n,{time:this.currentTime,value:e})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(n){n&&this._previousKeyframe.set("easing",n);for(let[e,i]of this._globalTimelineStyles)this._backFill.set(e,i||Mn),this._currentKeyframe.set(e,Mn);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(n,e,i,r){e&&this._previousKeyframe.set("easing",e);let o=r&&r.params||{},s=oL(n,this._globalTimelineStyles);for(let[a,l]of s){let c=Es(l,o,i);this._pendingStyles.set(a,c),this._localTimelineStyles.has(a)||this._backFill.set(a,this._globalTimelineStyles.get(a)??Mn),this._updateStyle(a,c)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((n,e)=>{this._currentKeyframe.set(e,n)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((n,e)=>{this._currentKeyframe.has(e)||this._currentKeyframe.set(e,n)}))}snapshotCurrentStyles(){for(let[n,e]of this._localTimelineStyles)this._pendingStyles.set(n,e),this._updateStyle(n,e)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let n=[];for(let e in this._currentKeyframe)n.push(e);return n}mergeTimelineCollectedStyles(n){n._styleSummary.forEach((e,i)=>{let r=this._styleSummary.get(i);(!r||e.time>r.time)&&this._updateStyle(i,e.value)})}buildKeyframes(){this.applyStylesToKeyframe();let n=new Set,e=new Set,i=this._keyframes.size===1&&this.duration===0,r=[];this._keyframes.forEach((a,l)=>{let c=new Map([...this._backFill,...a]);c.forEach((d,f)=>{d===bl?n.add(f):d===Mn&&e.add(f)}),i||c.set("offset",l/this.duration),r.push(c)});let o=[...n.values()],s=[...e.values()];if(i){let a=r[0],l=new Map(a);a.set("offset",0),l.set("offset",1),r=[a,l]}return Yv(this.element,r,o,s,this.duration,this.startTime,this.easing,!1)}},zv=class extends Ef{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(n,e,i,r,o,s,a=!1){super(n,e,s.delay),this.keyframes=i,this.preStyleProps=r,this.postStyleProps=o,this._stretchStartingKeyframe=a,this.timings={duration:s.duration,delay:s.delay,easing:s.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let n=this.keyframes,{delay:e,duration:i,easing:r}=this.timings;if(this._stretchStartingKeyframe&&e){let o=[],s=i+e,a=e/s,l=new Map(n[0]);l.set("offset",0),o.push(l);let c=new Map(n[0]);c.set("offset",FC(a)),o.push(c);let d=n.length-1;for(let f=1;f<=d;f++){let h=new Map(n[f]),m=h.get("offset"),p=e+m*i;h.set("offset",FC(p/s)),o.push(h)}i=s,e=0,r="",n=o}return Yv(this.element,n,this.preStyleProps,this.postStyleProps,i,e,r,!0)}};function FC(t,n=3){let e=Math.pow(10,n-1);return Math.round(t*e)/e}function oL(t,n){let e=new Map,i;return t.forEach(r=>{if(r==="*"){i??=n.keys();for(let o of i)e.set(o,Mn)}else for(let[o,s]of r)e.set(o,s)}),e}function PC(t,n,e,i,r,o,s,a,l,c,d,f,h){return{type:0,element:t,triggerName:n,isRemovalTransition:r,fromState:e,fromStyles:o,toState:i,toStyles:s,timelines:a,queriedElements:l,preStyleProps:c,postStyleProps:d,totalTime:f,errors:h}}var Fv={},Df=class{_triggerName;ast;_stateStyles;constructor(n,e,i){this._triggerName=n,this.ast=e,this._stateStyles=i}match(n,e,i,r){return sL(this.ast.matchers,n,e,i,r)}buildStyles(n,e,i){let r=this._stateStyles.get("*");return n!==void 0&&(r=this._stateStyles.get(n?.toString())||r),r?r.buildStyles(e,i):new Map}build(n,e,i,r,o,s,a,l,c,d){let f=[],h=this.ast.options&&this.ast.options.params||Fv,m=a&&a.params||Fv,p=this.buildStyles(i,m,f),b=l&&l.params||Fv,w=this.buildStyles(r,b,f),D=new Set,U=new Map,ue=new Map,ce=r==="void",Xt={params:WC(b,h),delay:this.ast.options?.delay},ft=d?[]:GC(n,e,this.ast.animation,o,s,p,w,Xt,c,f),He=0;return ft.forEach(kt=>{He=Math.max(kt.duration+kt.delay,He)}),f.length?PC(e,this._triggerName,i,r,ce,p,w,[],[],U,ue,He,f):(ft.forEach(kt=>{let lr=kt.element,mo=Vt(U,lr,new Set);kt.preStyleProps.forEach(cr=>mo.add(cr));let sb=Vt(ue,lr,new Set);kt.postStyleProps.forEach(cr=>sb.add(cr)),lr!==e&&D.add(lr)}),PC(e,this._triggerName,i,r,ce,p,w,ft,[...D.values()],U,ue,He))}};function sL(t,n,e,i,r){return t.some(o=>o(n,e,i,r))}function WC(t,n){let e=v({},n);return Object.entries(t).forEach(([i,r])=>{r!=null&&(e[i]=r)}),e}var $v=class{styles;defaultParams;normalizer;constructor(n,e,i){this.styles=n,this.defaultParams=e,this.normalizer=i}buildStyles(n,e){let i=new Map,r=WC(n,this.defaultParams);return this.styles.styles.forEach(o=>{typeof o!="string"&&o.forEach((s,a)=>{s&&(s=Es(s,r,e));let l=this.normalizer.normalizePropertyName(a,e);s=this.normalizer.normalizeStyleValue(a,l,s,e),i.set(a,s)})}),i}};function aL(t,n,e){return new Gv(t,n,e)}var Gv=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(n,e,i){this.name=n,this.ast=e,this._normalizer=i,e.states.forEach(r=>{let o=r.options&&r.options.params||{};this.states.set(r.name,new $v(r.style,o,i))}),LC(this.states,"true","1"),LC(this.states,"false","0"),e.transitions.forEach(r=>{this.transitionFactories.push(new Df(n,r,this.states))}),this.fallbackTransition=lL(n,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(n,e,i,r){return this.transitionFactories.find(s=>s.match(n,e,i,r))||null}matchStyles(n,e,i){return this.fallbackTransition.buildStyles(n,e,i)}};function lL(t,n,e){let i=[(s,a)=>!0],r={type:ae.Sequence,steps:[],options:null},o={type:ae.Transition,animation:r,matchers:i,options:null,queryCount:0,depCount:0};return new Df(t,o,n)}function LC(t,n,e){t.has(n)?t.has(e)||t.set(e,t.get(n)):t.has(e)&&t.set(n,t.get(e))}var cL=new Dl,Wv=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(n,e,i){this.bodyNode=n,this._driver=e,this._normalizer=i}register(n,e){let i=[],r=[],o=$C(this._driver,e,i,r);if(i.length)throw bC(i);this._animations.set(n,o)}_buildPlayer(n,e,i){let r=n.element,o=Iv(this._normalizer,n.keyframes,e,i);return this._driver.animate(r,o,n.duration,n.delay,n.easing,[],!0)}create(n,e,i={}){let r=[],o=this._animations.get(n),s,a=new Map;if(o?(s=GC(this._driver,e,o,Av,uf,new Map,new Map,i,cL,r),s.forEach(d=>{let f=Vt(a,d.element,new Map);d.postStyleProps.forEach(h=>f.set(h,null))})):(r.push(yC()),s=[]),r.length)throw _C(r);a.forEach((d,f)=>{d.forEach((h,m)=>{d.set(m,this._driver.computeStyle(f,m,Mn))})});let l=s.map(d=>{let f=a.get(d.element);return this._buildPlayer(d,new Map,f)}),c=xi(l);return this._playersById.set(n,c),c.onDestroy(()=>this.destroy(n)),this.players.push(c),c}destroy(n){let e=this._getPlayer(n);e.destroy(),this._playersById.delete(n);let i=this.players.indexOf(e);i>=0&&this.players.splice(i,1)}_getPlayer(n){let e=this._playersById.get(n);if(!e)throw wC(n);return e}listen(n,e,i,r){let o=cf(e,"","","");return lf(this._getPlayer(n),i,o,r),()=>{}}command(n,e,i,r){if(i=="register"){this.register(n,r[0]);return}if(i=="create"){let s=r[0]||{};this.create(n,e,s);return}let o=this._getPlayer(n);switch(i){case"play":o.play();break;case"pause":o.pause();break;case"reset":o.reset();break;case"restart":o.restart();break;case"finish":o.finish();break;case"init":o.init();break;case"setPosition":o.setPosition(parseFloat(r[0]));break;case"destroy":this.destroy(n);break}}},VC="ng-animate-queued",dL=".ng-animate-queued",Pv="ng-animate-disabled",uL=".ng-animate-disabled",fL="ng-star-inserted",mL=".ng-star-inserted",hL=[],qC={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},pL={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},kn="__ng_removed",xl=class{namespaceId;value;options;get params(){return this.options.params}constructor(n,e=""){this.namespaceId=e;let i=n&&n.hasOwnProperty("value"),r=i?n.value:n;if(this.value=vL(r),i){let o=n,{value:s}=o,a=Ff(o,["value"]);this.options=a}else this.options={};this.options.params||(this.options.params={})}absorbOptions(n){let e=n.params;if(e){let i=this.options.params;Object.keys(e).forEach(r=>{i[r]==null&&(i[r]=e[r])})}}},El="void",Lv=new xl(El),qv=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(n,e,i){this.id=n,this.hostElement=e,this._engine=i,this._hostClassName="ng-tns-"+n,un(e,this._hostClassName)}listen(n,e,i,r){if(!this._triggers.has(e))throw EC(i,e);if(i==null||i.length==0)throw DC(e);if(!bL(i))throw xC(i,e);let o=Vt(this._elementListeners,n,[]),s={name:e,phase:i,callback:r};o.push(s);let a=Vt(this._engine.statesByElement,n,new Map);return a.has(e)||(un(n,yl),un(n,yl+"-"+e),a.set(e,Lv)),()=>{this._engine.afterFlush(()=>{let l=o.indexOf(s);l>=0&&o.splice(l,1),this._triggers.has(e)||a.delete(e)})}}register(n,e){return this._triggers.has(n)?!1:(this._triggers.set(n,e),!0)}_getTrigger(n){let e=this._triggers.get(n);if(!e)throw CC(n);return e}trigger(n,e,i,r=!0){let o=this._getTrigger(e),s=new Cl(this.id,e,n),a=this._engine.statesByElement.get(n);a||(un(n,yl),un(n,yl+"-"+e),this._engine.statesByElement.set(n,a=new Map));let l=a.get(e),c=new xl(i,this.id);if(!(i&&i.hasOwnProperty("value"))&&l&&c.absorbOptions(l.options),a.set(e,c),l||(l=Lv),!(c.value===El)&&l.value===c.value){if(!wL(l.params,c.params)){let b=[],w=o.matchStyles(l.value,l.params,b),D=o.matchStyles(c.value,c.params,b);b.length?this._engine.reportError(b):this._engine.afterFlush(()=>{ar(n,w),Tn(n,D)})}return}let h=Vt(this._engine.playersByElement,n,[]);h.forEach(b=>{b.namespaceId==this.id&&b.triggerName==e&&b.queued&&b.destroy()});let m=o.matchTransition(l.value,c.value,n,c.params),p=!1;if(!m){if(!r)return;m=o.fallbackTransition,p=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:n,triggerName:e,transition:m,fromState:l,toState:c,player:s,isFallbackTransition:p}),p||(un(n,VC),s.onStart(()=>{Ds(n,VC)})),s.onDone(()=>{let b=this.players.indexOf(s);b>=0&&this.players.splice(b,1);let w=this._engine.playersByElement.get(n);if(w){let D=w.indexOf(s);D>=0&&w.splice(D,1)}}),this.players.push(s),h.push(s),s}deregister(n){this._triggers.delete(n),this._engine.statesByElement.forEach(e=>e.delete(n)),this._elementListeners.forEach((e,i)=>{this._elementListeners.set(i,e.filter(r=>r.name!=n))})}clearElementCache(n){this._engine.statesByElement.delete(n),this._elementListeners.delete(n);let e=this._engine.playersByElement.get(n);e&&(e.forEach(i=>i.destroy()),this._engine.playersByElement.delete(n))}_signalRemovalForInnerTriggers(n,e){let i=this._engine.driver.query(n,_l,!0);i.forEach(r=>{if(r[kn])return;let o=this._engine.fetchNamespacesByElement(r);o.size?o.forEach(s=>s.triggerLeaveAnimation(r,e,!1,!0)):this.clearElementCache(r)}),this._engine.afterFlushAnimationsDone(()=>i.forEach(r=>this.clearElementCache(r)))}triggerLeaveAnimation(n,e,i,r){let o=this._engine.statesByElement.get(n),s=new Map;if(o){let a=[];if(o.forEach((l,c)=>{if(s.set(c,l.value),this._triggers.has(c)){let d=this.trigger(n,c,El,r);d&&a.push(d)}}),a.length)return this._engine.markElementAsRemoved(this.id,n,!0,e,s),i&&xi(a).onDone(()=>this._engine.processLeaveNode(n)),!0}return!1}prepareLeaveAnimationListeners(n){let e=this._elementListeners.get(n),i=this._engine.statesByElement.get(n);if(e&&i){let r=new Set;e.forEach(o=>{let s=o.name;if(r.has(s))return;r.add(s);let l=this._triggers.get(s).fallbackTransition,c=i.get(s)||Lv,d=new xl(El),f=new Cl(this.id,s,n);this._engine.totalQueuedPlayers++,this._queue.push({element:n,triggerName:s,transition:l,fromState:c,toState:d,player:f,isFallbackTransition:!0})})}}removeNode(n,e){let i=this._engine;if(n.childElementCount&&this._signalRemovalForInnerTriggers(n,e),this.triggerLeaveAnimation(n,e,!0))return;let r=!1;if(i.totalAnimations){let o=i.players.length?i.playersByQueriedElement.get(n):[];if(o&&o.length)r=!0;else{let s=n;for(;s=s.parentNode;)if(i.statesByElement.get(s)){r=!0;break}}}if(this.prepareLeaveAnimationListeners(n),r)i.markElementAsRemoved(this.id,n,!1,e);else{let o=n[kn];(!o||o===qC)&&(i.afterFlush(()=>this.clearElementCache(n)),i.destroyInnerAnimations(n),i._onRemovalComplete(n,e))}}insertNode(n,e){un(n,this._hostClassName)}drainQueuedTransitions(n){let e=[];return this._queue.forEach(i=>{let r=i.player;if(r.destroyed)return;let o=i.element,s=this._elementListeners.get(o);s&&s.forEach(a=>{if(a.name==i.triggerName){let l=cf(o,i.triggerName,i.fromState.value,i.toState.value);l._data=n,lf(i.player,a.phase,l,a.callback)}}),r.markedForDestroy?this._engine.afterFlush(()=>{r.destroy()}):e.push(i)}),this._queue=[],e.sort((i,r)=>{let o=i.transition.ast.depCount,s=r.transition.ast.depCount;return o==0||s==0?o-s:this._engine.driver.containsElement(i.element,r.element)?1:-1})}destroy(n){this.players.forEach(e=>e.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,n)}},Qv=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(n,e)=>{};_onRemovalComplete(n,e){this.onRemovalComplete(n,e)}constructor(n,e,i){this.bodyNode=n,this.driver=e,this._normalizer=i}get queuedPlayers(){let n=[];return this._namespaceList.forEach(e=>{e.players.forEach(i=>{i.queued&&n.push(i)})}),n}createNamespace(n,e){let i=new qv(n,e,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,e)?this._balanceNamespaceList(i,e):(this.newHostElements.set(e,i),this.collectEnterElement(e)),this._namespaceLookup[n]=i}_balanceNamespaceList(n,e){let i=this._namespaceList,r=this.namespacesByHostElement;if(i.length-1>=0){let s=!1,a=this.driver.getParentElement(e);for(;a;){let l=r.get(a);if(l){let c=i.indexOf(l);i.splice(c+1,0,n),s=!0;break}a=this.driver.getParentElement(a)}s||i.unshift(n)}else i.push(n);return r.set(e,n),n}register(n,e){let i=this._namespaceLookup[n];return i||(i=this.createNamespace(n,e)),i}registerTrigger(n,e,i){let r=this._namespaceLookup[n];r&&r.register(e,i)&&this.totalAnimations++}destroy(n,e){n&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let i=this._fetchNamespace(n);this.namespacesByHostElement.delete(i.hostElement);let r=this._namespaceList.indexOf(i);r>=0&&this._namespaceList.splice(r,1),i.destroy(e),delete this._namespaceLookup[n]}))}_fetchNamespace(n){return this._namespaceLookup[n]}fetchNamespacesByElement(n){let e=new Set,i=this.statesByElement.get(n);if(i){for(let r of i.values())if(r.namespaceId){let o=this._fetchNamespace(r.namespaceId);o&&e.add(o)}}return e}trigger(n,e,i,r){if(vf(e)){let o=this._fetchNamespace(n);if(o)return o.trigger(e,i,r),!0}return!1}insertNode(n,e,i,r){if(!vf(e))return;let o=e[kn];if(o&&o.setForRemoval){o.setForRemoval=!1,o.setForMove=!0;let s=this.collectedLeaveElements.indexOf(e);s>=0&&this.collectedLeaveElements.splice(s,1)}if(n){let s=this._fetchNamespace(n);s&&s.insertNode(e,i)}r&&this.collectEnterElement(e)}collectEnterElement(n){this.collectedEnterElements.push(n)}markElementAsDisabled(n,e){e?this.disabledNodes.has(n)||(this.disabledNodes.add(n),un(n,Pv)):this.disabledNodes.has(n)&&(this.disabledNodes.delete(n),Ds(n,Pv))}removeNode(n,e,i){if(vf(e)){let r=n?this._fetchNamespace(n):null;r?r.removeNode(e,i):this.markElementAsRemoved(n,e,!1,i);let o=this.namespacesByHostElement.get(e);o&&o.id!==n&&o.removeNode(e,i)}else this._onRemovalComplete(e,i)}markElementAsRemoved(n,e,i,r,o){this.collectedLeaveElements.push(e),e[kn]={namespaceId:n,setForRemoval:r,hasAnimation:i,removedBeforeQueried:!1,previousTriggersValues:o}}listen(n,e,i,r,o){return vf(e)?this._fetchNamespace(n).listen(e,i,r,o):()=>{}}_buildInstruction(n,e,i,r,o){return n.transition.build(this.driver,n.element,n.fromState.value,n.toState.value,i,r,n.fromState.options,n.toState.options,e,o)}destroyInnerAnimations(n){let e=this.driver.query(n,_l,!0);e.forEach(i=>this.destroyActiveAnimationsForElement(i)),this.playersByQueriedElement.size!=0&&(e=this.driver.query(n,ff,!0),e.forEach(i=>this.finishActiveQueriedAnimationOnElement(i)))}destroyActiveAnimationsForElement(n){let e=this.playersByElement.get(n);e&&e.forEach(i=>{i.queued?i.markedForDestroy=!0:i.destroy()})}finishActiveQueriedAnimationOnElement(n){let e=this.playersByQueriedElement.get(n);e&&e.forEach(i=>i.finish())}whenRenderingDone(){return new Promise(n=>{if(this.players.length)return xi(this.players).onDone(()=>n());n()})}processLeaveNode(n){let e=n[kn];if(e&&e.setForRemoval){if(n[kn]=qC,e.namespaceId){this.destroyInnerAnimations(n);let i=this._fetchNamespace(e.namespaceId);i&&i.clearElementCache(n)}this._onRemovalComplete(n,e.setForRemoval)}n.classList?.contains(Pv)&&this.markElementAsDisabled(n,!1),this.driver.query(n,uL,!0).forEach(i=>{this.markElementAsDisabled(i,!1)})}flush(n=-1){let e=[];if(this.newHostElements.size&&(this.newHostElements.forEach((i,r)=>this._balanceNamespaceList(i,r)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let i=0;i<this.collectedEnterElements.length;i++){let r=this.collectedEnterElements[i];un(r,fL)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let i=[];try{e=this._flushAnimations(i,n)}finally{for(let r=0;r<i.length;r++)i[r]()}}else for(let i=0;i<this.collectedLeaveElements.length;i++){let r=this.collectedLeaveElements[i];this.processLeaveNode(r)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(i=>i()),this._flushFns=[],this._whenQuietFns.length){let i=this._whenQuietFns;this._whenQuietFns=[],e.length?xi(e).onDone(()=>{i.forEach(r=>r())}):i.forEach(r=>r())}}reportError(n){throw IC(n)}_flushAnimations(n,e){let i=new Dl,r=[],o=new Map,s=[],a=new Map,l=new Map,c=new Map,d=new Set;this.disabledNodes.forEach(S=>{d.add(S);let O=this.driver.query(S,dL,!0);for(let H=0;H<O.length;H++)d.add(O[H])});let f=this.bodyNode,h=Array.from(this.statesByElement.keys()),m=UC(h,this.collectedEnterElements),p=new Map,b=0;m.forEach((S,O)=>{let H=Av+b++;p.set(O,H),S.forEach(he=>un(he,H))});let w=[],D=new Set,U=new Set;for(let S=0;S<this.collectedLeaveElements.length;S++){let O=this.collectedLeaveElements[S],H=O[kn];H&&H.setForRemoval&&(w.push(O),D.add(O),H.hasAnimation?this.driver.query(O,mL,!0).forEach(he=>D.add(he)):U.add(O))}let ue=new Map,ce=UC(h,Array.from(D));ce.forEach((S,O)=>{let H=uf+b++;ue.set(O,H),S.forEach(he=>un(he,H))}),n.push(()=>{m.forEach((S,O)=>{let H=p.get(O);S.forEach(he=>Ds(he,H))}),ce.forEach((S,O)=>{let H=ue.get(O);S.forEach(he=>Ds(he,H))}),w.forEach(S=>{this.processLeaveNode(S)})});let Xt=[],ft=[];for(let S=this._namespaceList.length-1;S>=0;S--)this._namespaceList[S].drainQueuedTransitions(e).forEach(H=>{let he=H.player,st=H.element;if(Xt.push(he),this.collectedEnterElements.length){let mt=st[kn];if(mt&&mt.setForMove){if(mt.previousTriggersValues&&mt.previousTriggersValues.has(H.triggerName)){let dr=mt.previousTriggersValues.get(H.triggerName),Jt=this.statesByElement.get(H.element);if(Jt&&Jt.has(H.triggerName)){let Sl=Jt.get(H.triggerName);Sl.value=dr,Jt.set(H.triggerName,Sl)}}he.destroy();return}}let An=!f||!this.driver.containsElement(f,st),Bt=ue.get(st),Ii=p.get(st),ze=this._buildInstruction(H,i,Ii,Bt,An);if(ze.errors&&ze.errors.length){ft.push(ze);return}if(An){he.onStart(()=>ar(st,ze.fromStyles)),he.onDestroy(()=>Tn(st,ze.toStyles)),r.push(he);return}if(H.isFallbackTransition){he.onStart(()=>ar(st,ze.fromStyles)),he.onDestroy(()=>Tn(st,ze.toStyles)),r.push(he);return}let cb=[];ze.timelines.forEach(mt=>{mt.stretchStartingKeyframe=!0,this.disabledNodes.has(mt.element)||cb.push(mt)}),ze.timelines=cb,i.append(st,ze.timelines);let xI={instruction:ze,player:he,element:st};s.push(xI),ze.queriedElements.forEach(mt=>Vt(a,mt,[]).push(he)),ze.preStyleProps.forEach((mt,dr)=>{if(mt.size){let Jt=l.get(dr);Jt||l.set(dr,Jt=new Set),mt.forEach((Sl,Of)=>Jt.add(Of))}}),ze.postStyleProps.forEach((mt,dr)=>{let Jt=c.get(dr);Jt||c.set(dr,Jt=new Set),mt.forEach((Sl,Of)=>Jt.add(Of))})});if(ft.length){let S=[];ft.forEach(O=>{S.push(SC(O.triggerName,O.errors))}),Xt.forEach(O=>O.destroy()),this.reportError(S)}let He=new Map,kt=new Map;s.forEach(S=>{let O=S.element;i.has(O)&&(kt.set(O,O),this._beforeAnimationBuild(S.player.namespaceId,S.instruction,He))}),r.forEach(S=>{let O=S.element;this._getPreviousPlayers(O,!1,S.namespaceId,S.triggerName,null).forEach(he=>{Vt(He,O,[]).push(he),he.destroy()})});let lr=w.filter(S=>HC(S,l,c)),mo=new Map;BC(mo,this.driver,U,c,Mn).forEach(S=>{HC(S,l,c)&&lr.push(S)});let cr=new Map;m.forEach((S,O)=>{BC(cr,this.driver,new Set(S),l,bl)}),lr.forEach(S=>{let O=mo.get(S),H=cr.get(S);mo.set(S,new Map([...O?.entries()??[],...H?.entries()??[]]))});let Nf=[],ab=[],lb={};s.forEach(S=>{let{element:O,player:H,instruction:he}=S;if(i.has(O)){if(d.has(O)){H.onDestroy(()=>Tn(O,he.toStyles)),H.disabled=!0,H.overrideTotalTime(he.totalTime),r.push(H);return}let st=lb;if(kt.size>1){let Bt=O,Ii=[];for(;Bt=Bt.parentNode;){let ze=kt.get(Bt);if(ze){st=ze;break}Ii.push(Bt)}Ii.forEach(ze=>kt.set(ze,st))}let An=this._buildAnimation(H.namespaceId,he,He,o,cr,mo);if(H.setRealPlayer(An),st===lb)Nf.push(H);else{let Bt=this.playersByElement.get(st);Bt&&Bt.length&&(H.parentPlayer=xi(Bt)),r.push(H)}}else ar(O,he.fromStyles),H.onDestroy(()=>Tn(O,he.toStyles)),ab.push(H),d.has(O)&&r.push(H)}),ab.forEach(S=>{let O=o.get(S.element);if(O&&O.length){let H=xi(O);S.setRealPlayer(H)}}),r.forEach(S=>{S.parentPlayer?S.syncPlayerEvents(S.parentPlayer):S.destroy()});for(let S=0;S<w.length;S++){let O=w[S],H=O[kn];if(Ds(O,uf),H&&H.hasAnimation)continue;let he=[];if(a.size){let An=a.get(O);An&&An.length&&he.push(...An);let Bt=this.driver.query(O,ff,!0);for(let Ii=0;Ii<Bt.length;Ii++){let ze=a.get(Bt[Ii]);ze&&ze.length&&he.push(...ze)}}let st=he.filter(An=>!An.destroyed);st.length?yL(this,O,st):this.processLeaveNode(O)}return w.length=0,Nf.forEach(S=>{this.players.push(S),S.onDone(()=>{S.destroy();let O=this.players.indexOf(S);this.players.splice(O,1)}),S.play()}),Nf}afterFlush(n){this._flushFns.push(n)}afterFlushAnimationsDone(n){this._whenQuietFns.push(n)}_getPreviousPlayers(n,e,i,r,o){let s=[];if(e){let a=this.playersByQueriedElement.get(n);a&&(s=a)}else{let a=this.playersByElement.get(n);if(a){let l=!o||o==El;a.forEach(c=>{c.queued||!l&&c.triggerName!=r||s.push(c)})}}return(i||r)&&(s=s.filter(a=>!(i&&i!=a.namespaceId||r&&r!=a.triggerName))),s}_beforeAnimationBuild(n,e,i){let r=e.triggerName,o=e.element,s=e.isRemovalTransition?void 0:n,a=e.isRemovalTransition?void 0:r;for(let l of e.timelines){let c=l.element,d=c!==o,f=Vt(i,c,[]);this._getPreviousPlayers(c,d,s,a,e.toState).forEach(m=>{let p=m.getRealPlayer();p.beforeDestroy&&p.beforeDestroy(),m.destroy(),f.push(m)})}ar(o,e.fromStyles)}_buildAnimation(n,e,i,r,o,s){let a=e.triggerName,l=e.element,c=[],d=new Set,f=new Set,h=e.timelines.map(p=>{let b=p.element;d.add(b);let w=b[kn];if(w&&w.removedBeforeQueried)return new Di(p.duration,p.delay);let D=b!==l,U=_L((i.get(b)||hL).map(He=>He.getRealPlayer())).filter(He=>{let kt=He;return kt.element?kt.element===b:!1}),ue=o.get(b),ce=s.get(b),Xt=Iv(this._normalizer,p.keyframes,ue,ce),ft=this._buildPlayer(p,Xt,U);if(p.subTimeline&&r&&f.add(b),D){let He=new Cl(n,a,b);He.setRealPlayer(ft),c.push(He)}return ft});c.forEach(p=>{Vt(this.playersByQueriedElement,p.element,[]).push(p),p.onDone(()=>gL(this.playersByQueriedElement,p.element,p))}),d.forEach(p=>un(p,Rv));let m=xi(h);return m.onDestroy(()=>{d.forEach(p=>Ds(p,Rv)),Tn(l,e.toStyles)}),f.forEach(p=>{Vt(r,p,[]).push(m)}),m}_buildPlayer(n,e,i){return e.length>0?this.driver.animate(n.element,e,n.duration,n.delay,n.easing,i):new Di(n.duration,n.delay)}},Cl=class{namespaceId;triggerName;element;_player=new Di;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(n,e,i){this.namespaceId=n,this.triggerName=e,this.element=i}setRealPlayer(n){this._containsRealPlayer||(this._player=n,this._queuedCallbacks.forEach((e,i)=>{e.forEach(r=>lf(n,i,void 0,r))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(n.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(n){this.totalTime=n}syncPlayerEvents(n){let e=this._player;e.triggerCallback&&n.onStart(()=>e.triggerCallback("start")),n.onDone(()=>this.finish()),n.onDestroy(()=>this.destroy())}_queueEvent(n,e){Vt(this._queuedCallbacks,n,[]).push(e)}onDone(n){this.queued&&this._queueEvent("done",n),this._player.onDone(n)}onStart(n){this.queued&&this._queueEvent("start",n),this._player.onStart(n)}onDestroy(n){this.queued&&this._queueEvent("destroy",n),this._player.onDestroy(n)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(n){this.queued||this._player.setPosition(n)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(n){let e=this._player;e.triggerCallback&&e.triggerCallback(n)}};function gL(t,n,e){let i=t.get(n);if(i){if(i.length){let r=i.indexOf(e);i.splice(r,1)}i.length==0&&t.delete(n)}return i}function vL(t){return t??null}function vf(t){return t&&t.nodeType===1}function bL(t){return t=="start"||t=="done"}function jC(t,n){let e=t.style.display;return t.style.display=n??"none",e}function BC(t,n,e,i,r){let o=[];e.forEach(l=>o.push(jC(l)));let s=[];i.forEach((l,c)=>{let d=new Map;l.forEach(f=>{let h=n.computeStyle(c,f,r);d.set(f,h),(!h||h.length==0)&&(c[kn]=pL,s.push(c))}),t.set(c,d)});let a=0;return e.forEach(l=>jC(l,o[a++])),s}function UC(t,n){let e=new Map;if(t.forEach(a=>e.set(a,[])),n.length==0)return e;let i=1,r=new Set(n),o=new Map;function s(a){if(!a)return i;let l=o.get(a);if(l)return l;let c=a.parentNode;return e.has(c)?l=c:r.has(c)?l=i:l=s(c),o.set(a,l),l}return n.forEach(a=>{let l=s(a);l!==i&&e.get(l).push(a)}),e}function un(t,n){t.classList?.add(n)}function Ds(t,n){t.classList?.remove(n)}function yL(t,n,e){xi(e).onDone(()=>t.processLeaveNode(n))}function _L(t){let n=[];return QC(t,n),n}function QC(t,n){for(let e=0;e<t.length;e++){let i=t[e];i instanceof _s?QC(i.players,n):n.push(i)}}function wL(t,n){let e=Object.keys(t),i=Object.keys(n);if(e.length!=i.length)return!1;for(let r=0;r<e.length;r++){let o=e[r];if(!n.hasOwnProperty(o)||t[o]!==n[o])return!1}return!0}function HC(t,n,e){let i=e.get(t);if(!i)return!1;let r=n.get(t);return r?i.forEach(o=>r.add(o)):n.set(t,i),e.delete(t),!0}var xs=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(n,e)=>{};constructor(n,e,i){this._driver=e,this._normalizer=i,this._transitionEngine=new Qv(n.body,e,i),this._timelineEngine=new Wv(n.body,e,i),this._transitionEngine.onRemovalComplete=(r,o)=>this.onRemovalComplete(r,o)}registerTrigger(n,e,i,r,o){let s=n+"-"+r,a=this._triggerCache[s];if(!a){let l=[],c=[],d=$C(this._driver,o,l,c);if(l.length)throw vC(r,l);a=aL(r,d,this._normalizer),this._triggerCache[s]=a}this._transitionEngine.registerTrigger(e,r,a)}register(n,e){this._transitionEngine.register(n,e)}destroy(n,e){this._transitionEngine.destroy(n,e)}onInsert(n,e,i,r){this._transitionEngine.insertNode(n,e,i,r)}onRemove(n,e,i){this._transitionEngine.removeNode(n,e,i)}disableAnimations(n,e){this._transitionEngine.markElementAsDisabled(n,e)}process(n,e,i,r){if(i.charAt(0)=="@"){let[o,s]=Sv(i),a=r;this._timelineEngine.command(o,e,s,a)}else this._transitionEngine.trigger(n,e,i,r)}listen(n,e,i,r,o){if(i.charAt(0)=="@"){let[s,a]=Sv(i);return this._timelineEngine.listen(s,e,a,o)}return this._transitionEngine.listen(n,e,i,r,o)}flush(n=-1){this._transitionEngine.flush(n)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(n){this._transitionEngine.afterFlushAnimationsDone(n)}};function EL(t,n){let e=null,i=null;return Array.isArray(n)&&n.length?(e=Vv(n[0]),n.length>1&&(i=Vv(n[n.length-1]))):n instanceof Map&&(e=Vv(n)),e||i?new DL(t,e,i):null}var DL=(()=>{class t{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(e,i,r){this._element=e,this._startStyles=i,this._endStyles=r;let o=t.initialStylesByElement.get(e);o||t.initialStylesByElement.set(e,o=new Map),this._initialStyles=o}start(){this._state<1&&(this._startStyles&&Tn(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(Tn(this._element,this._initialStyles),this._endStyles&&(Tn(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(t.initialStylesByElement.delete(this._element),this._startStyles&&(ar(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(ar(this._element,this._endStyles),this._endStyles=null),Tn(this._element,this._initialStyles),this._state=3)}}return t})();function Vv(t){let n=null;return t.forEach((e,i)=>{xL(i)&&(n=n||new Map,n.set(i,e))}),n}function xL(t){return t==="display"||t==="position"}var xf=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer=null;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(n,e,i,r){this.element=n,this.keyframes=e,this.options=i,this._specialStyles=r,this._duration=i.duration,this._delay=i.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}init(){this._buildPlayer()&&this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return this.domPlayer;this._initialized=!0;let n=this.keyframes,e=this._triggerWebAnimation(this.element,n,this.options);if(!e)return this._onFinish(),null;this.domPlayer=e,this._finalKeyframe=n.length?n[n.length-1]:new Map;let i=()=>this._onFinish();return e.addEventListener("finish",i),this.onDestroy(()=>{e.removeEventListener("finish",i)}),e}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer?.pause()}_convertKeyframesToObject(n){let e=[];return n.forEach(i=>{e.push(Object.fromEntries(i))}),e}_triggerWebAnimation(n,e,i){let r=this._convertKeyframesToObject(e);try{return n.animate(r,i)}catch(o){return null}}onStart(n){this._originalOnStartFns.push(n),this._onStartFns.push(n)}onDone(n){this._originalOnDoneFns.push(n),this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}play(){let n=this._buildPlayer();n&&(this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),n.play())}pause(){this.init(),this.domPlayer?.pause()}finish(){this.init(),this.domPlayer&&(this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish())}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer?.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}setPosition(n){this.domPlayer||this.init(),this.domPlayer&&(this.domPlayer.currentTime=n*this.time)}getPosition(){return this.domPlayer?+(this.domPlayer.currentTime??0)/this.time:this._initialized?1:0}get totalTime(){return this._delay+this._duration}beforeDestroy(){let n=new Map;this.hasStarted()&&this._finalKeyframe.forEach((i,r)=>{r!=="offset"&&n.set(r,this._finished?i:hf(this.element,r))}),this.currentSnapshot=n}triggerCallback(n){let e=n==="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},Cf=class{validateStyleProperty(n){return!0}validateAnimatableStyleProperty(n){return!0}containsElement(n,e){return Mv(n,e)}getParentElement(n){return df(n)}query(n,e,i){return Tv(n,e,i)}computeStyle(n,e,i){return hf(n,e)}animate(n,e,i,r,o,s=[]){let a=r==0?"both":"forwards",l={duration:i,delay:r,fill:a};o&&(l.easing=o);let c=new Map,d=s.filter(m=>m instanceof xf);AC(i,r)&&d.forEach(m=>{m.currentSnapshot.forEach((p,b)=>c.set(b,p))});let f=TC(e).map(m=>new Map(m));f=RC(n,f,c);let h=EL(n,f);return new xf(n,f,l,h)}};var bf="@",ZC="@.disabled",If=class{namespaceId;delegate;engine;_onDestroy;\u0275type=0;constructor(n,e,i,r){this.namespaceId=n,this.delegate=e,this.engine=i,this._onDestroy=r}get data(){return this.delegate.data}destroyNode(n){this.delegate.destroyNode?.(n)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}appendChild(n,e){this.delegate.appendChild(n,e),this.engine.onInsert(this.namespaceId,e,n,!1)}insertBefore(n,e,i,r=!0){this.delegate.insertBefore(n,e,i),this.engine.onInsert(this.namespaceId,e,n,r)}removeChild(n,e,i,r){if(r){this.delegate.removeChild(n,e,i,r);return}this.parentNode(e)&&this.engine.onRemove(this.namespaceId,e,this.delegate)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,i,r){this.delegate.setAttribute(n,e,i,r)}removeAttribute(n,e,i){this.delegate.removeAttribute(n,e,i)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,i,r){this.delegate.setStyle(n,e,i,r)}removeStyle(n,e,i){this.delegate.removeStyle(n,e,i)}setProperty(n,e,i){e.charAt(0)==bf&&e==ZC?this.disableAnimations(n,!!i):this.delegate.setProperty(n,e,i)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,i,r){return this.delegate.listen(n,e,i,r)}disableAnimations(n,e){this.engine.disableAnimations(n,e)}},Zv=class extends If{factory;constructor(n,e,i,r,o){super(e,i,r,o),this.factory=n,this.namespaceId=e}setProperty(n,e,i){e.charAt(0)==bf?e.charAt(1)=="."&&e==ZC?(i=i===void 0?!0:!!i,this.disableAnimations(n,i)):this.engine.process(this.namespaceId,n,e.slice(1),i):this.delegate.setProperty(n,e,i)}listen(n,e,i,r){if(e.charAt(0)==bf){let o=CL(n),s=e.slice(1),a="";return s.charAt(0)!=bf&&([s,a]=IL(s)),this.engine.listen(this.namespaceId,o,s,a,l=>{let c=l._data||-1;this.factory.scheduleListenerCallback(c,i,l)})}return this.delegate.listen(n,e,i,r)}};function CL(t){switch(t){case"body":return document.body;case"document":return document;case"window":return window;default:return t}}function IL(t){let n=t.indexOf("."),e=t.substring(0,n),i=t.slice(n+1);return[e,i]}var Sf=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(n,e,i){this.delegate=n,this.engine=e,this._zone=i,e.onRemovalComplete=(r,o)=>{o?.removeChild(null,r)}}createRenderer(n,e){let r=this.delegate.createRenderer(n,e);if(!n||!e?.data?.animation){let c=this._rendererCache,d=c.get(r);if(!d){let f=()=>c.delete(r);d=new If("",r,this.engine,f),c.set(r,d)}return d}let o=e.id,s=e.id+"-"+this._currentId;this._currentId++,this.engine.register(s,n);let a=c=>{Array.isArray(c)?c.forEach(a):this.engine.registerTrigger(o,s,n,c.name,c)};return e.data.animation.forEach(a),new Zv(this,s,r,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(n,e,i){if(n>=0&&n<this._microtaskId){this._zone.run(()=>e(i));return}let r=this._animationCallbacksBuffer;r.length==0&&queueMicrotask(()=>{this._zone.run(()=>{r.forEach(o=>{let[s,a]=o;s(a)}),this._animationCallbacksBuffer=[]})}),r.push([e,i])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(n){this.engine.flush(),this.delegate.componentReplaced?.(n)}};var ML=(()=>{class t extends xs{constructor(e,i,r){super(e,i,r)}ngOnDestroy(){this.flush()}static \u0275fac=function(i){return new(i||t)(C(K),C(uo),C(fo))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})();function TL(){return new yf}function kL(){return new Sf(u(La),u(xs),u(R))}var YC=[{provide:fo,useFactory:TL},{provide:xs,useClass:ML},{provide:ct,useFactory:kL}],AL=[{provide:uo,useClass:Kv},{provide:zo,useValue:"NoopAnimations"},...YC],KC=[{provide:uo,useFactory:()=>new Cf},{provide:zo,useFactory:()=>"BrowserAnimations"},...YC],XC=(()=>{class t{static withConfig(e){return{ngModule:t,providers:e.disableAnimations?AL:KC}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=P({providers:KC,imports:[ja]})}return t})();function JC(t){return Error(`Unable to find icon with the name "${t}"`)}function RL(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function eI(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function tI(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var Ci=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},iI=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new Ci(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let s=this._sanitizer.sanitize(Se.HTML,r);if(!s)throw tI(r);let a=ms(s);return this._addSvgIconConfig(e,i,new Ci("",a,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new Ci(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(Se.HTML,i);if(!o)throw tI(i);let s=ms(o);return this._addSvgIconSetConfig(e,new Ci("",s,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(Se.RESOURCE_URL,e);if(!i)throw eI(e);let r=this._cachedIconsByUrl.get(i);return r?T(Mf(r)):this._loadSvgIconFromConfig(new Ci(e,null)).pipe(pt(o=>this._cachedIconsByUrl.set(i,o)),j(o=>Mf(o)))}getNamedSvgIcon(e,i=""){let r=nI(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(i);return s?this._getSvgFromIconSetConfigs(e,s):Ns(JC(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?T(Mf(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(j(i=>Mf(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return T(r);let o=i.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(Ni(a=>{let c=`Loading icon set URL: ${this._sanitizer.sanitize(Se.RESOURCE_URL,s.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(c)),T(null)})));return Ps(o).pipe(j(()=>{let s=this._extractIconWithNameFromAnySet(e,i);if(!s)throw JC(e);return s}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let s=this._svgElementFromConfig(o),a=this._extractSvgIconFromSet(s,e,o.options);if(a)return a}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(pt(i=>e.svgText=i),j(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?T(null):this._fetchIcon(e).pipe(pt(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let s=o.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,r);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),r);let a=this._svgElementFromString(ms("<svg></svg>"));return a.appendChild(s),this._setSvgAttributes(a,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(ms("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:s,value:a}=r[o];s!=="id"&&i.setAttribute(s,a)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw RL();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let s=this._sanitizer.sanitize(Se.RESOURCE_URL,i);if(!s)throw eI(i);let a=this._inProgressUrlFetches.get(s);if(a)return a;let l=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe(j(c=>ms(c)),xr(()=>this._inProgressUrlFetches.delete(s)),js());return this._inProgressUrlFetches.set(s,l),l}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(nI(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return NL(o)?new Ci(o.url,null,o.options):new Ci(o,null)}}static \u0275fac=function(i){return new(i||t)(C(cg,8),C(dg),C(K,8),C(wt))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Mf(t){return t.cloneNode(!0)}function nI(t,n){return t+":"+n}function NL(t){return!!(t.url&&t.options)}var OL=["*"],FL=new y("MAT_ICON_DEFAULT_OPTIONS"),PL=new y("mat-icon-location",{providedIn:"root",factory:()=>{let t=u(K),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),rI=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],LL=rI.map(t=>`[${t}]`).join(", "),VL=/^url\(['"]?#(.*?)['"]?\)$/,oI=(()=>{class t{_elementRef=u(W);_iconRegistry=u(iI);_location=u(PL);_errorHandler=u(wt);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Fe.EMPTY;constructor(){let e=u(new Un("aria-hidden"),{optional:!0}),i=u(FL,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(s=>{o.setAttribute(s.name,`url('${e}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(LL),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)rI.forEach(s=>{let a=i[o],l=a.getAttribute(s),c=l?l.match(VL):null;if(c){let d=r.get(a);d||(d=[],r.set(a,d)),d.push({name:s,value:c[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(We(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(ve("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),fi(r.color?"mat-"+r.color:""),V("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",se],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:OL,decls:1,vars:0,template:function(i,r){i&1&&(Te(),$(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),sI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=P({imports:[Ue]})}return t})();var aI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=P({imports:[Ue]})}return t})();var lI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=P({imports:[Ue]})}return t})();var jL=["*"],BL=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,UL=["unscopedContent"],HL=["text"],zL=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],$L=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var GL=new y("ListOption"),WL=(()=>{class t{_elementRef=u(W);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),qL=(()=>{class t{_elementRef=u(W);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),QL=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),cI=(()=>{class t{_listOption=u(GL,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,hostVars:4,hostBindings:function(i,r){i&2&&V("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),ZL=(()=>{class t extends cI{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275dir=N({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[_e]})}return t})(),KL=(()=>{class t extends cI{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275dir=N({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[_e]})}return t})(),YL=new y("MAT_LIST_CONFIG"),Xv=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=ot(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(ot(e))}_disabled=oe(!1);_defaultOptions=u(YL,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,hostVars:1,hostBindings:function(i,r){i&2&&ve("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),XL=(()=>{class t{_elementRef=u(W);_ngZone=u(R);_listBase=u(Xv,{optional:!0});_platform=u(ke);_hostElement;_isButtonElement;_noopAnimations=dt();_avatars;_icons;set lines(e){this._explicitLines=Gn(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=ot(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(ot(e))}_disabled=oe(!1);_subscriptions=new Fe;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){u(Tt).load(sr);let e=u(gl,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new ao(this,this._ngZone,this._hostElement,this._platform,u(de)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Er(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,contentQueries:function(i,r,o){if(i&1&&St(o,ZL,4)(o,KL,4),i&2){let s;Q(s=Z())&&(r._avatars=s),Q(s=Z())&&(r._icons=s)}},hostVars:4,hostBindings:function(i,r){i&2&&(ve("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),V("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var dI=(()=>{class t extends XL{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=ot(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,o){if(i&1&&St(o,qL,5)(o,WL,5)(o,QL,5),i&2){let s;Q(s=Z())&&(r._lines=s),Q(s=Z())&&(r._titles=s),Q(s=Z())&&(r._meta=s)}},viewQuery:function(i,r){if(i&1&&Xe(UL,5)(HL,5),i&2){let o;Q(o=Z())&&(r._unscopedContent=o.first),Q(o=Z())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(ve("aria-current",r._getAriaCurrent()),V("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[_e],ngContentSelectors:$L,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(Te(zL),$(0),E(1,"span",1),$(2,1),$(3,2),E(4,"span",2,0),te("cdkObserveContent",function(){return r._updateItemLines(!0)}),$(6,3),x()(),$(7,4),$(8,5),Me(9,"div",3))},dependencies:[lx],encapsulation:2,changeDetection:0})}return t})();var uI=(()=>{class t extends Xv{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[Ae([{provide:Xv,useExisting:t}]),_e],ngContentSelectors:jL,decls:1,vars:0,template:function(i,r){i&1&&(Te(),$(0))},styles:[BL],encapsulation:2,changeDetection:0})}return t})();var fI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=P({imports:[$u,bs,lI,Ue,aI]})}return t})();var JL=20,Jv=(()=>{class t{_ngZone=u(R);_platform=u(ke);_renderer=u(ct).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new M;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=JL){return this._platform.isBrowser?new z(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(rc(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):T()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(fe(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=Mt(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Cs=(()=>{class t{elementRef=u(W);scrollDispatcher=u(Jv);ngZone=u(R);dir=u(wi,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new M;_renderer=u(et);_cleanupScroll;_elementScrolled=new M;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&hs()!=Sn.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),hs()==Sn.INVERTED?e.left=e.right:hs()==Sn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;mx()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let s=this.dir&&this.dir.value=="rtl";return e=="start"?e=s?r:i:e=="end"&&(e=s?i:r),s&&hs()==Sn.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:s&&hs()==Sn.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),e2=20,mI=(()=>{class t{_platform=u(ke);_listeners;_viewportSize=null;_change=new M;_document=u(K);constructor(){let e=u(R),i=u(ct).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),s=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,a=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:s,left:a}}change(e=e2){return e>0?this._change.pipe(rc(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var eb=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=P({})}return t})();var Af=["*"],n2=["content"],i2=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],r2=["mat-drawer","mat-drawer-content","*"];function o2(t,n){if(t&1){let e=Gt();E(0,"div",1),te("click",function(){Rt(e);let r=Ce();return Nt(r._onBackdropClicked())}),x()}if(t&2){let e=Ce();V("mat-drawer-shown",e._isShowingBackdrop())}}function s2(t,n){t&1&&(E(0,"mat-drawer-content"),$(1,2),x())}var a2=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],l2=["mat-sidenav","mat-sidenav-content","*"];function c2(t,n){if(t&1){let e=Gt();E(0,"div",1),te("click",function(){Rt(e);let r=Ce();return Nt(r._onBackdropClicked())}),x()}if(t&2){let e=Ce();V("mat-drawer-shown",e._isShowingBackdrop())}}function d2(t,n){t&1&&(E(0,"mat-sidenav-content"),$(1,2),x())}var u2=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var f2=new y("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),ib=new y("MAT_DRAWER_CONTAINER"),Tf=(()=>{class t extends Cs{_platform=u(ke);_changeDetectorRef=u(Ge);_container=u(nb);constructor(){let e=u(W),i=u(Jv),r=u(R);super(e,i,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:i}=this._container;return e!=null&&e.mode!=="over"&&e.opened||i!=null&&i.mode!=="over"&&i.opened}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(i,r){i&2&&(ui("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),V("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[Ae([{provide:Cs,useExisting:t}]),_e],ngContentSelectors:Af,decls:1,vars:0,template:function(i,r){i&1&&(Te(),$(0))},encapsulation:2,changeDetection:0})}return t})(),tb=(()=>{class t{_elementRef=u(W);_focusTrapFactory=u(sv);_focusMonitor=u(_i);_platform=u(ke);_ngZone=u(R);_renderer=u(et);_interactivityChecker=u(Wu);_doc=u(K);_container=u(ib,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=ot(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=ot(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(ot(e))}_opened=oe(!1);_openedVia=null;_animationStarted=new M;_animationEnd=new M;openedChange=new ee(!0);_openedStream=this.openedChange.pipe(fe(e=>e),j(()=>{}));openedStart=this._animationStarted.pipe(fe(()=>this.opened),Yn(void 0));_closedStream=this.openedChange.pipe(fe(e=>!e),j(()=>{}));closedStart=this._animationStarted.pipe(fe(()=>!this.opened),Yn(void 0));_destroyed=new M;onPositionChanged=new ee;_content;_modeChanged=new M;_injector=u(de);_changeDetectorRef=u(Ge);constructor(){this.openedChange.pipe(Pe(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,i=this._elementRef.nativeElement;return[e.listen(i,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!qu(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(i,"transitionend",this._handleTransitionEvent),e.listen(i,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),s(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),s=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":En(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,i){e&&i&&(this._openedVia=i);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,i,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&i&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(We(1)).subscribe(s=>o(s?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,r=i.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,i)),r.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}_handleTransitionEvent=e=>{let i=this._elementRef.nativeElement;e.target===i&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-drawer"]],viewQuery:function(i,r){if(i&1&&Xe(n2,5),i&2){let o;Q(o=Z())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(i,r){i&2&&(ve("align",null)("tabIndex",r.mode!=="side"?"-1":null),ui("visibility",!r._container&&!r.opened?"hidden":null),V("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Af,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(Te(),E(0,"div",1,0),$(2),x())},dependencies:[Cs],encapsulation:2,changeDetection:0})}return t})(),nb=(()=>{class t{_dir=u(wi,{optional:!0});_element=u(W);_ngZone=u(R);_changeDetectorRef=u(Ge);_animationDisabled=dt();_transitionsEnabled=!1;_allDrawers;_drawers=new Lo;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=ot(e)}_autosize=u(f2);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:ot(e)}_backdropOverride=null;backdropClick=new ee;_start=null;_end=null;_left=null;_right=null;_destroyed=new M;_doCheckSubject=new M;_contentMargins={left:null,right:null};_contentMarginChanges=new M;get scrollable(){return this._userContent||this._content}_injector=u(de);constructor(){let e=u(ke),i=u(mI);this._dir?.change.pipe(Pe(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),i.change().pipe(Pe(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Jn(this._allDrawers),Pe(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Jn(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Vs(10),Pe(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,i=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,i-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")i+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();i+=r,e-=r}}e=e||null,i=i||null,(e!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:e,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(Pe(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(Pe(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(Pe(this._drawers.changes)).subscribe(()=>{En({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(Pe(Er(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let i=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?i.add(r):i.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(i,r,o){if(i&1&&St(o,Tf,5)(o,tb,5),i&2){let s;Q(s=Z())&&(r._content=s.first),Q(s=Z())&&(r._allDrawers=s)}},viewQuery:function(i,r){if(i&1&&Xe(Tf,5),i&2){let o;Q(o=Z())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(i,r){i&2&&V("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Ae([{provide:ib,useExisting:t}])],ngContentSelectors:r2,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(Te(i2),be(0,o2,1,2,"div",0),$(1),$(2,1),be(3,s2,2,0,"mat-drawer-content")),i&2&&(ye(r.hasBackdrop?0:-1),I(3),ye(r._content?-1:3))},dependencies:[Tf],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return t})(),kf=(()=>{class t extends Tf{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Ae([{provide:Cs,useExisting:t}]),_e],ngContentSelectors:Af,decls:1,vars:0,template:function(i,r){i&1&&(Te(),$(0))},encapsulation:2,changeDetection:0})}return t})(),rb=(()=>{class t extends tb{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=ot(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=Gn(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=Gn(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(i,r){i&2&&(ve("tabIndex",r.mode!=="side"?"-1":null)("align",null),ui("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),V("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Ae([{provide:tb,useExisting:t}]),_e],ngContentSelectors:Af,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(Te(),E(0,"div",1,0),$(2),x())},dependencies:[Cs],encapsulation:2,changeDetection:0})}return t})(),hI=(()=>{class t extends nb{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(i,r,o){if(i&1&&St(o,kf,5)(o,rb,5),i&2){let s;Q(s=Z())&&(r._content=s.first),Q(s=Z())&&(r._allDrawers=s)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(i,r){i&2&&V("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[Ae([{provide:ib,useExisting:t},{provide:nb,useExisting:t}]),_e],ngContentSelectors:l2,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(Te(a2),be(0,c2,1,2,"div",0),$(1),$(2,1),be(3,d2,2,0,"mat-sidenav-content")),i&2&&(ye(r.hasBackdrop?0:-1),I(3),ye(r._content?-1:3))},dependencies:[kf],styles:[u2],encapsulation:2,changeDetection:0})}return t})(),pI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=P({imports:[eb,Ue,eb]})}return t})();var m2=["*",[["mat-toolbar-row"]]],h2=["*","mat-toolbar-row"],p2=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),gI=(()=>{class t{_elementRef=u(W);_platform=u(ke);_document=u(K);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-toolbar"]],contentQueries:function(i,r,o){if(i&1&&St(o,p2,5),i&2){let s;Q(s=Z())&&(r._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,r){i&2&&(fi(r.color?"mat-"+r.color:""),V("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:h2,decls:2,vars:0,template:function(i,r){i&1&&(Te(m2),$(0),$(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var vI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=P({imports:[Ue]})}return t})();var ob="Service workers are disabled or not supported by this browser",Is=class{serviceWorker;worker;registration;events;constructor(n,e){if(this.serviceWorker=n,!n)this.worker=this.events=this.registration=new z(i=>i.error(new g(5601,!1)));else{let i=null,r=new M;this.worker=new z(c=>(i!==null&&c.next(i),r.subscribe(d=>c.next(d))));let o=()=>{let{controller:c}=n;c!==null&&(i=c,r.next(i))};n.addEventListener("controllerchange",o),o(),this.registration=this.worker.pipe(Ve(()=>n.getRegistration().then(c=>{if(!c)throw new g(5601,!1);return c})));let s=new M;this.events=s.asObservable();let a=c=>{let{data:d}=c;d?.type&&s.next(d)};n.addEventListener("message",a),e?.get(bt,null,{optional:!0})?.onDestroy(()=>{n.removeEventListener("controllerchange",o),n.removeEventListener("message",a)})}}postMessage(n,e){return new Promise(i=>{this.worker.pipe(We(1)).subscribe(r=>{r.postMessage(v({action:n},e)),i()})})}postMessageWithOperation(n,e,i){let r=this.waitForOperationCompleted(i),o=this.postMessage(n,e);return Promise.all([o,r]).then(([,s])=>s)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(n){let e;return typeof n=="string"?e=i=>i.type===n:e=i=>n.includes(i.type),this.events.pipe(fe(e))}nextEventOfType(n){return this.eventsOfType(n).pipe(We(1))}waitForOperationCompleted(n){return new Promise((e,i)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(fe(r=>r.nonce===n),We(1),j(r=>{if(r.result!==void 0)return r.result;throw new Error(r.error)})).subscribe({next:e,error:i})})}get isEnabled(){return!!this.serviceWorker}},yI=(()=>{class t{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new M;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=Kn,this.notificationClicks=Kn,this.notificationCloses=Kn,this.pushSubscriptionChanges=Kn,this.subscription=Kn;return}this.messages=this.sw.eventsOfType("PUSH").pipe(j(r=>r.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(j(r=>r.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(j(r=>r.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(j(r=>r.data)),this.pushManager=this.sw.registration.pipe(j(r=>r.pushManager));let i=this.pushManager.pipe(Ve(r=>r.getSubscription()));this.subscription=new z(r=>{let o=i.subscribe(r),s=this.subscriptionChanges.subscribe(r);return()=>{o.unsubscribe(),s.unsubscribe()}})}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(ob));let i={userVisibleOnly:!0},r=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),o=new Uint8Array(new ArrayBuffer(r.length));for(let s=0;s<r.length;s++)o[s]=r.charCodeAt(s);return i.applicationServerKey=o,new Promise((s,a)=>{this.pushManager.pipe(Ve(l=>l.subscribe(i)),We(1)).subscribe({next:l=>{this.subscriptionChanges.next(l),s(l)},error:a})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(ob));let e=i=>{if(i===null)throw new g(5602,!1);return i.unsubscribe().then(r=>{if(!r)throw new g(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((i,r)=>{this.subscription.pipe(We(1),Ve(e)).subscribe({next:i,error:r})})}decodeBase64(e){return atob(e)}static \u0275fac=function(i){return new(i||t)(C(Is))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),Rf=(()=>{class t{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=Kn,this.unrecoverable=Kn;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(ob));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let e=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new g(5601,!1));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static \u0275fac=function(i){return new(i||t)(C(Is))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),_I=new y("");function g2(){let t=u(Il);if(!("serviceWorker"in navigator&&t.enabled!==!1))return;let n=u(_I),e=u(R),i=u(bt);e.runOutsideAngular(()=>{let r=navigator.serviceWorker,o=()=>r.controller?.postMessage({action:"INITIALIZE"});r.addEventListener("controllerchange",o),i.onDestroy(()=>{r.removeEventListener("controllerchange",o)})}),e.runOutsideAngular(()=>{let r,{registrationStrategy:o}=t;if(typeof o=="function")r=new Promise(s=>o().subscribe(()=>s()));else{let[s,...a]=(o||"registerWhenStable:30000").split(":");switch(s){case"registerImmediately":r=Promise.resolve();break;case"registerWithDelay":r=bI(+a[0]||0);break;case"registerWhenStable":r=Promise.race([i.whenStable(),bI(+a[0])]);break;default:throw new g(5600,!1)}}r.then(()=>{i.destroyed||navigator.serviceWorker.register(n,{scope:t.scope,updateViaCache:t.updateViaCache,type:t.type}).catch(s=>console.error(Ht(5604,!1)))})})}function bI(t){return new Promise(n=>setTimeout(n,t))}function v2(){let t=u(Il),n=u(de),e=!0;return new Is(e&&t.enabled!==!1?navigator.serviceWorker:void 0,n)}var Il=class{enabled;updateViaCache;type;scope;registrationStrategy};function b2(t,n={}){return Bi([yI,Rf,{provide:_I,useValue:t},{provide:Il,useValue:n},{provide:Is,useFactory:v2},Wo(g2)])}var wI=(()=>{class t{static register(e,i={}){return{ngModule:t,providers:[b2(e,i)]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=P({providers:[yI,Rf]})}return t})();var EI=(()=>{class t{constructor(){this.updates=u(Rf)}checkForUpdates(){this.updates.isEnabled&&(this.updateSubscription=Ls(360*60).subscribe(()=>this.updates.checkForUpdate()),this.availableSubscription=this.updates.versionUpdates.subscribe(()=>{this.updates.activateUpdate().then(()=>document.location.reload())}))}ngOnDestroy(){this.updateSubscription?.unsubscribe(),this.updateSubscription=null,this.availableSubscription?.unsubscribe(),this.availableSubscription=null}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var DI=(()=>{class t{constructor(){this.serviceWorker=u(EI);let e=u(Ge),i=u(hl);this.mobileQuery=i.matchMedia("(max-width: 600px)"),this.mobileQueryListener=()=>e.detectChanges(),this.mobileQuery.addListener(this.mobileQueryListener),this.serviceWorker.checkForUpdates()}ngOnDestroy(){this.mobileQuery.removeListener(this.mobileQueryListener),this.serviceWorker.ngOnDestroy()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=k({type:t,selectors:[["app-root"]],decls:19,vars:6,consts:[["snav",""],[1,"app-container"],["color","primary",1,"toolbar"],["mat-icon-button","",3,"click"],[1,"app-name"],[1,"sidenav-container"],["opened","true","fixedTopGap","56",3,"mode","fixedInViewport"],["mat-list-item","","routerLink","multiplication"],["mat-list-item","","routerLink","multiplication-facts"],["mat-list-item","","routerLink","three-digit-subtraction"]],template:function(i,r){if(i&1){let o=Gt();E(0,"div",1)(1,"mat-toolbar",2)(2,"button",3),te("click",function(){Rt(o);let a=Wt(9);return Nt(a.toggle())}),E(3,"mat-icon"),le(4,"menu"),x()(),E(5,"h1",4),le(6,"Math Boxes"),x()(),E(7,"mat-sidenav-container",5)(8,"mat-sidenav",6,0)(10,"mat-nav-list")(11,"a",7),le(12,"Multiplication"),x(),E(13,"a",8),le(14,"Multiplication Facts"),x(),E(15,"a",9),le(16,"Three Digit Subtraction"),x()()(),E(17,"mat-sidenav-content"),Me(18,"router-outlet"),x()()()}i&2&&(V("is-mobile",r.mobileQuery.matches),I(7),ui("margin-top",r.mobileQuery.matches?56:0,"px"),I(),we("mode",r.mobileQuery.matches?"over":"side")("fixedInViewport",r.mobileQuery.matches))},dependencies:[gI,yv,oI,hI,rb,uI,dI,Eu,kf,el],styles:[`.app-container{display:flex;flex-direction:column;position:absolute;inset:0}.is-mobile .toolbar{position:fixed;z-index:2}h1.app-name{margin-left:8px}.sidenav-container{flex:1}.is-mobile .sidenav-container{flex:1 0 auto}.math-problem{margin:1em}
`],encapsulation:2})}}return t})();Ld.production&&void 0;rg(DI,{providers:[Cc(ja,Jx,XC,Bu,zx,Zx,sI,Vx,fI,pI,_x,vI,wI.register("ngsw-worker.js",{enabled:Ld.production,registrationStrategy:"registerWhenStable:30000"})),{provide:Qo,useValue:Ld.baseHref}]}).catch(t=>console.error(t));
