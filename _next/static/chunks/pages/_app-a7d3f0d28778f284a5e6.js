(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3398);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},7999:function(e,t,n){"use strict";var r=n(1682);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e,t){var n=i.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=a(a({},r),e));(r=a(a({},r),t)).loadableGenerated&&delete(r=a(a({},r),r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,c(n,r);delete r.ssr}return n(r)};u(n(7294));var i=u(n(7653));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){return delete t.webpack,delete t.modules,e(t)}},2775:function(e,t,n){"use strict";var r=n(1682);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),u=(a=n(3244))&&a.__esModule?a:{default:a},c=n(3398),s=n(1165),l=n(6393);function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?a=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,s=h.length;c<s;c++){var l=h[c];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var f=o.props[l],d=r[l]||new Set;"name"===l&&i||!d.has(f)?(d.add(f),r[l]=d):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return u["data-href"]=u.href,u.href=void 0,u["data-optimized-fonts"]=!0,i.default.cloneElement(e,u)}return i.default.cloneElement(e,{key:a})}))}var y=function(e){var t=e.children,n=(0,i.useContext)(c.AmpStateContext),r=(0,i.useContext)(s.HeadManagerContext);return i.default.createElement(u.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)};t.default=y},519:function(e,t,n){"use strict";var r;t.__esModule=!0,t.LoadableContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},7653:function(e,t,n){"use strict";var r=n(1682),o=n(2553),a=n(2012);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw a}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.__esModule=!0,t.default=void 0;var l,f=(l=n(7294))&&l.__esModule?l:{default:l},d=n(7161),p=n(519);var h=[],m=[],y=!1;function v(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var b=function(){function e(t,n){o(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u(u({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function g(e){return function(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function o(){if(!r){var t=new b(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!y&&"function"===typeof n.webpack){var a=n.webpack();m.push((function(e){var t,n=c(a);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return o()}}catch(i){n.e(i)}finally{n.f()}}))}var i=function(e,t){o();var a=f.default.useContext(p.LoadableContext),i=(0,d.useSubscription)(r);return f.default.useImperativeHandle(t,(function(){return{retry:r.retry}}),[]),a&&Array.isArray(n.modules)&&n.modules.forEach((function(e){a(e)})),f.default.useMemo((function(){return i.loading||i.error?f.default.createElement(n.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:r.retry}):i.loaded?f.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return i.preload=function(){return o()},i.displayName="LoadableComponent",f.default.forwardRef(i)}(v,e)}function j(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return j(e,t)}))}g.preloadAll=function(){return new Promise((function(e,t){j(h).then(e,t)}))},g.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return y=!0,t()};j(m,e).then(n,n)}))},window.__NEXT_PRELOADREADY=g.preloadReady;var O=g;t.default=O},3244:function(e,t,n){"use strict";var r=n(3115),o=n(2553),a=n(2012),i=(n(450),n(9807)),u=n(7690),c=n(9828);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var l=n(7294),f=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},5386:function(e,t,n){"use strict";var r=(0,n(4671).Z)((function(e){return{router:{},dom:null}}));t.Z=r},2855:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{default:function(){return b}});var o=n(5893),a=n(1163),i=n(5386),u=n(7294),c=n(9008),s="The easiest and fastest way to create a 3D website using React Three Fiber and NextJS",l="Author",f=function(e){var t=e.title,n=void 0===t?"React Three Next Starter":t;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(c.default,{children:[(0,o.jsx)("meta",{charSet:"utf-8"}),(0,o.jsx)("meta",{name:"language",content:"english"}),(0,o.jsx)("meta",{httpEquiv:"content-type",content:"text/html"}),(0,o.jsx)("meta",{name:"author",content:l}),(0,o.jsx)("meta",{name:"designer",content:l}),(0,o.jsx)("meta",{name:"publisher",content:l}),(0,o.jsx)("title",{children:n}),(0,o.jsx)("meta",{name:"description",content:s}),(0,o.jsx)("meta",{name:"keywords",content:"Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist"}),(0,o.jsx)("meta",{name:"robots",content:"index,follow"}),(0,o.jsx)("meta",{name:"distribution",content:"web"}),(0,o.jsx)("meta",{name:"og:title",content:n}),(0,o.jsx)("meta",{name:"og:type",content:"site"}),(0,o.jsx)("meta",{name:"og:url",content:"https://react-three-next.vercel.app/"}),(0,o.jsx)("meta",{name:"og:image",content:"/icons/share.png"}),(0,o.jsx)("meta",{name:"og:site_name",content:n}),(0,o.jsx)("meta",{name:"og:description",content:s}),(0,o.jsx)("link",{rel:"apple-touch-icon",href:"/icons/apple-touch-icon.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"16x16",href:"/icons/favicon-16x16.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"32x32",href:"/icons/favicon-32x32.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/icons/apple-touch-icon.png"}),(0,o.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,o.jsx)("link",{rel:"mask-icon",color:"#000000",href:"/icons/safari-pinned-tab.svg"}),(0,o.jsx)("link",{rel:"apple-touch-startup-image",href:"/startup.png"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, minimum-scale=1, initial-scale=1.0"}),(0,o.jsx)("meta",{name:"theme-color",content:"#000"}),(0,o.jsx)("link",{rel:"shortcut icon",href:"/icons/favicon.ico"}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,o.jsx)("meta",{name:"twitter:site",content:"@onirenaud"})]})})},d=n(5152),p=function(e){var t=e.children,n=(0,u.useRef)(null);return i.Z.setState({dom:n}),(0,o.jsx)("div",{className:"absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden dom",ref:n,children:t})};n(7430);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var m=null;function y(e){var t=e.dom;return(0,o.jsx)(o.Fragment,{children:t&&(0,o.jsx)(p,{children:t})})}m=(0,d.default)((function(){return Promise.all([n.e(737),n.e(156),n.e(95)]).then(n.bind(n,4095))}),{ssr:!1,loadableGenerated:{webpack:function(){return[4095]},modules:["_app.jsx -> @/components/layout/canvas"]}});var v=function(e){var t=e.comp,n=e.pageProps,a=[],i=[];try{return u.Children.forEach(t(n).props.children,(function(e){null!==e&&void 0!==e&&e.props&&e.props.r3f?a.push(e):i.push(e)})),(0,o.jsxs)(o.Fragment,{children:[i&&(0,o.jsx)(y,{dom:i}),a&&(0,o.jsx)(m,{children:a})]})}catch(c){return(0,o.jsx)("comp",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n))}};var b=function(e){var t=e.Component,n=e.pageProps,r=void 0===n?{}:n,c=(0,a.useRouter)();return(0,u.useEffect)((function(){i.Z.setState({router:c})}),[c]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f,{title:r.title}),(0,o.jsx)(v,{comp:t,pageProps:r})]})}},71:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2855)}])},7430:function(){},5152:function(e,t,n){e.exports=n(7999)},9008:function(e,t,n){e.exports=n(2775)},8164:function(e,t,n){var r=n(4360);e.exports=function(e){if(Array.isArray(e))return r(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,n){var r=n(8164),o=n(7381),a=n(3585),i=n(5725);e.exports=function(e){return r(e)||o(e)||a(e)||i()}},1163:function(e,t,n){e.exports=n(4651)},4671:function(e,t,n){"use strict";var r=n(7294);function o(e){let t;const n=new Set,r=(e,r)=>{const o="function"===typeof e?e(t):e;if(o!==t){const e=t;t=r?o:Object.assign({},t,o),n.forEach((n=>n(t,e)))}},o=()=>t,a={setState:r,getState:o,subscribe:(e,r,a)=>r||a?((e,r=o,a=Object.is)=>{let i=r(t);function u(){const n=r(t);if(!a(i,n)){const t=i;e(i=n,t)}}return n.add(u),()=>n.delete(u)})(e,r,a):(n.add(e),()=>n.delete(e)),destroy:()=>n.clear()};return t=e(r,o,a),a}const a="undefined"===typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent)?r.useEffect:r.useLayoutEffect;t.Z=function(e){const t="function"===typeof e?o(e):e,n=(e=t.getState,n=Object.is)=>{const[,o]=(0,r.useReducer)((e=>e+1),0),i=t.getState(),u=(0,r.useRef)(i),c=(0,r.useRef)(e),s=(0,r.useRef)(n),l=(0,r.useRef)(!1),f=(0,r.useRef)();let d;void 0===f.current&&(f.current=e(i));let p=!1;(u.current!==i||c.current!==e||s.current!==n||l.current)&&(d=e(i),p=!n(f.current,d)),a((()=>{p&&(f.current=d),u.current=i,c.current=e,s.current=n,l.current=!1}));const h=(0,r.useRef)(i);return a((()=>{const e=()=>{try{const e=t.getState(),n=c.current(e);s.current(f.current,n)||(u.current=e,f.current=n,o())}catch(e){l.current=!0,o()}},n=t.subscribe(e);return t.getState()!==h.current&&e(),n}),[]),p?d:f.current};return Object.assign(n,t),n[Symbol.iterator]=function*(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4"),yield n,yield t},n}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(71),t(4651)}));var n=e.O();_N_E=n}]);