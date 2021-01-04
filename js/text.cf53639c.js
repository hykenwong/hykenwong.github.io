(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["text"],{"0800":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"uistrings browse"},[r("div",{staticClass:"searchbar"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"search",name:"search",autocomplete:"off",placeholder:"Enter search terms"},domProps:{value:t.query},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)},change:t.search,input:[function(e){e.target.composing||(t.query=e.target.value)},t.changed]}}),r("label",{attrs:{for:"search"}},[t._v("Search")])]),r("div",{staticClass:"result-wrapper"},[r("transition",{attrs:{name:"fade"}},[t.loading?r("div",{staticClass:"loading"},[r("div",{staticClass:"loader-box"},[r("div",{staticClass:"loader"}),r("div",{staticClass:"label"},[t._v("Loading")])])]):t._e()]),r("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"results",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"0"}},[t.results.length?r("div",[r("transition",{attrs:{name:"fade-item"}},[t.activeResultId?r("div",{staticClass:"active-result"},[r("div",{staticClass:"container"},[r("h1",[t._v("MID "+t._s(t.activeResultId))]),r("uistring-midresult",{attrs:{result:t.activeResult,mid:t.activeResultId}}),r("router-link",{staticClass:"permalink",attrs:{to:{name:"uistring-midlup",query:{q:t.activeResultId}}}},[r("i",{staticClass:"fa fa-link"}),t._v(" Permalink ")]),r("div",{staticClass:"buttonbox"},[r("button",{on:{click:t.closeActive}},[t._v("Close")])])],1)]):t._e()]),r("div",{staticClass:"count"},[t._v("Found "),r("span",{staticClass:"val"},[t._v(t._s(t._f("thousands")(t.approxResultCount))+" results")])]),t._l(t.results,(function(e){return r("div",{key:e.mid,staticClass:"midresult",attrs:{"data-id":e.id},on:{click:function(e){return e.target!==e.currentTarget?null:t.setActiveResult(e)}}},[r("div",{staticClass:"mid"},[t._v(" "+t._s(e.id)+" ")]),r("div",{staticClass:"text",domProps:{innerHTML:t._s(e.message)}})])})),t.end?r("div",{staticClass:"end-results"},[t._v(" End of results ")]):t._e()],2):r("div",[t.loading?t._e():r("div",{staticClass:"no-results"},[t.error?r("div",{staticClass:"error"},[r("big-error-box",{attrs:{errorTitle:"Error: "+t.error.statusText,errorContent:t.error.bodyText,canRetry:"true",iconClass:"fa-exclamation-triangle"},on:{retry:t.fetchData}})],1):r("div",[r("big-error-box",{attrs:{errorTitle:"No Results",errorContent:"Try searching something different.",canRetry:"true",iconClass:"fa-question-circle"},on:{retry:t.fetchData}})],1)])])])],1)])},a=[],s=(r("ac1f"),r("5319"),r("841c"),r("2909")),n=r("2b0e"),o=r("0968"),c=r("da07"),l=r("487a"),u=r.n(l),d=r("c7b8"),h=r("c717");n["a"].component("big-error-box",c["a"]),n["a"].use(u.a),n["a"].component("uistring-midresult",d["a"]);var f={name:"uistringbrowse",data:function(){return{loadedQuery:"",query:"",results:[],activeResult:null,activeResultId:0,loading:!1,page:0,approxResultCount:0,end:!1,error:null,lastChangeTimer:null}},created:function(){this.query=this.$route.query.q,this.fetchData()},methods:{fetchData:function(){var t=this;this.loading||(clearTimeout(this.lastChangeTimer),this.loading=!0,o["a"].getBulk({page:this.page,size:50,query:this.query},{vue:this,region:this.$store.state.regionCode,format:"html",okcb:function(e){var r;(r=t.results).push.apply(r,Object(s["a"])(e.strings)),t.end=t.results.length>=e.estimatedSize,t.approxResultCount=e.estimatedSize,t.loadedQuery=t.query,t.error=null,setTimeout((function(){return t.loading=!1}),250)},errcb:function(e){console.error(e),e.response?e.response.status>=500?t.error={statusText:"Service error",bodyText:"There was an issue fetching data. Please try again later. "+Object(h["a"])(e)}:t.error={statusText:"Unknown error",bodyText:Object(h["a"])(e)}:t.error=e,t.loading=!1,t.end=!0}}))},changed:function(){clearTimeout(this.lastChangeTimer),this.lastChangeTimer=setTimeout(this.search,1e3)},search:function(){if(clearTimeout(this.lastChangeTimer),this.query!=this.loadedQuery){if(this.page=0,this.results=[],this.end=!1,this.query.length<3&&this.query.length>0)return this.error={statusText:"Query too short",bodyText:"Query must be at least 3 characters (or blank)"},this.loading=!1,void(this.end=!0);this.$router.push({path:"/text/uistring/browse",query:{q:this.query}}),this.fetchData()}},loadMore:function(){this.end||(this.page+=1,this.fetchData())},setActiveResult:function(t){var e=this;this.activeResultId=t.target.dataset.id,this.activeResult=null,o["a"].getVariant(this.activeResultId,{vue:this,param:null,region:this.$store.state.regionCode,okcb:function(t){e.activeResult={html:t.html,raw:t.raw,strip:t.strip.replace(/\n/g,"<br/>")}},errcb:function(t){console.error(t)}})},closeActive:function(){this.activeResultId=0,this.activeResult=null}}},v=f,m=(r("ae31"),r("2877")),g=Object(m["a"])(v,i,a,!1,null,"b57ef698",null);e["default"]=g.exports},"0968":function(t,e,r){"use strict";r("99af");var i=r("acc2"),a=r("27c7");e["a"]={cache:{},getString:function(t,e){var r=this,s=e.region,n=e.param,o=e.format,c=e.okcb,l=e.errcb;s=Object(i["c"])(s),n||(n="");var u="".concat(t,":").concat(btoa(n),"//").concat(o),d=this.cache[s];if(d){var h=d[u];if(h)return void c(h)}a["a"].get("server/".concat(s,"/uistring/").concat(t),{params:{fmt:o,param:n}}).then((function(t){var e=r.cache[s];e||(e=r.cache[s]={}),e[u]=t.data,c(t.data)}),l)},getVariant:function(t,e){var r=e.region,s=e.param,n=e.okcb,o=e.errcb;r=Object(i["c"])(r),a["a"].get("server/".concat(r,"/uistring/").concat(t,"/variant"),{params:{param:s}}).then((function(t){n(t.data)}),o)},getBulk:function(t,e){var r=this,s=t.page,n=t.size,o=t.query,c=e.region,l=e.format,u=e.okcb,d=e.errcb;c=Object(i["c"])(c),o?a["a"].get("server/".concat(c,"/uistring/search"),{params:{fmt:l,p:s,sz:n,q:o}}).then((function(t){var e=r.cache[c];e||(e=r.cache[c]={}),u(t.data)}),d):a["a"].get("server/".concat(c,"/uistring/"),{params:{fmt:l,p:s,sz:n}}).then((function(t){var e=r.cache[c];e||(e=r.cache[c]={}),u(t.data)}),d)}}},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},2909:function(t,e,r){"use strict";var i=r("6b75");function a(t){if(Array.isArray(t))return Object(i["a"])(t)}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("d3b7"),r("3ca3"),r("ddb0");function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var n=r("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||s(t)||Object(n["a"])(t)||o()}r.d(e,"a",(function(){return c}))},"487a":function(t,e,r){(function(e,r){t.exports=r()})(0,(function(){"use strict";var t="@@InfiniteScroll",e=function(t,e){var r,i,a,s,n,o=function(){t.apply(s,n),i=r};return function(){if(s=this,n=arguments,r=Date.now(),a&&(clearTimeout(a),a=null),i){var t=e-(r-i);t<0?o():a=setTimeout((function(){o()}),t)}else o()}},r=function(t){return t===window?Math.max(window.pageYOffset||0,document.documentElement.scrollTop):t.scrollTop},i=document.defaultView.getComputedStyle,a=function(t){var e=t;while(e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType){var r=i(e).overflowY;if("scroll"===r||"auto"===r)return e;e=e.parentNode}return window},s=function(t){return t===window?document.documentElement.clientHeight:t.clientHeight},n=function(t){return t===window?r(window):t.getBoundingClientRect().top+r(window)},o=function(t){var e=t.parentNode;while(e){if("HTML"===e.tagName)return!0;if(11===e.nodeType)return!1;e=e.parentNode}return!1},c=function(){if(!this.binded){this.binded=!0;var t=this,r=t.el,i=r.getAttribute("infinite-scroll-throttle-delay"),s=200;i&&(s=Number(t.vm[i]||i),(isNaN(s)||s<0)&&(s=200)),t.throttleDelay=s,t.scrollEventTarget=a(r),t.scrollListener=e(l.bind(t),t.throttleDelay),t.scrollEventTarget.addEventListener("scroll",t.scrollListener),this.vm.$on("hook:beforeDestroy",(function(){t.scrollEventTarget.removeEventListener("scroll",t.scrollListener)}));var n=r.getAttribute("infinite-scroll-disabled"),o=!1;n&&(this.vm.$watch(n,(function(e){t.disabled=e,!e&&t.immediateCheck&&l.call(t)})),o=Boolean(t.vm[n])),t.disabled=o;var c=r.getAttribute("infinite-scroll-distance"),u=0;c&&(u=Number(t.vm[c]||c),isNaN(u)&&(u=0)),t.distance=u;var d=r.getAttribute("infinite-scroll-immediate-check"),h=!0;d&&(h=Boolean(t.vm[d])),t.immediateCheck=h,h&&l.call(t);var f=r.getAttribute("infinite-scroll-listen-for-event");f&&t.vm.$on(f,(function(){l.call(t)}))}},l=function(t){var e=this.scrollEventTarget,i=this.el,a=this.distance;if(!0===t||!this.disabled){var o=r(e),c=o+s(e),l=!1;if(e===i)l=e.scrollHeight-c<=a;else{var u=n(i)-n(e)+i.offsetHeight+o;l=c+a>=u}l&&this.expression&&this.expression()}},u={bind:function(e,r,i){e[t]={el:e,vm:i.context,expression:r.value};var a=arguments;e[t].vm.$on("hook:mounted",(function(){e[t].vm.$nextTick((function(){o(e)&&c.call(e[t],a),e[t].bindTryCount=0;var r=function r(){e[t].bindTryCount>10||(e[t].bindTryCount++,o(e)?c.call(e[t],a):setTimeout(r,50))};r()}))}))},unbind:function(e){e&&e[t]&&e[t].scrollEventTarget&&e[t].scrollEventTarget.removeEventListener("scroll",e[t].scrollListener)}},d=function(t){t.directive("InfiniteScroll",u)};return window.Vue&&(window.infiniteScroll=u,Vue.use(d)),u.install=d,u}))},"5a8e":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"uistrings"},[r("h1",[t._v("Text")]),r("div",{staticClass:"button-bar"},[r("router-link",{staticClass:"row-button",attrs:{to:"/text/uistring/browse",tag:"div"}},[t._v("Browse")]),r("router-link",{staticClass:"row-button",attrs:{to:"/text/uistring/midlup",tag:"div"}},[t._v("MID Lookup")])],1),r("router-view")],1)},a=[],s=r("2b0e"),n=(r("0968"),r("c7b8"));s["a"].component("uistring-midresult",n["a"]);var o={name:"uistrings",data:function(){return{}},created:function(){this.fetchData()},methods:{fetchData:function(){}}},c=o,l=(r("b46b"),r("2877")),u=Object(l["a"])(c,i,a,!1,null,"5dbba857",null);e["default"]=u.exports},"5b07":function(t,e,r){},"5c71":function(t,e,r){"use strict";r("81f9")},"804c":function(t,e,r){"use strict";r("a0e6")},"81f9":function(t,e,r){},"841c":function(t,e,r){"use strict";var i=r("d784"),a=r("825a"),s=r("1d80"),n=r("129f"),o=r("14c3");i("search",1,(function(t,e,r){return[function(e){var r=s(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,r):new RegExp(e)[t](String(r))},function(t){var i=r(e,t,this);if(i.done)return i.value;var s=a(t),c=String(this),l=s.lastIndex;n(l,0)||(s.lastIndex=0);var u=o(s,c);return n(s.lastIndex,l)||(s.lastIndex=l),null===u?-1:u.index}]}))},a0e6:function(t,e,r){},abf4:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"uistrings midlup"},[r("div",{staticClass:"searchbar"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"search",name:"search",autocomplete:"off",placeholder:"Enter MID and/or parameters"},domProps:{value:t.query},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)},input:function(e){e.target.composing||(t.query=e.target.value)}}}),r("label",{attrs:{for:"search"}},[t._v("MID and/or parameters")])]),r("div",{staticClass:"result-wrapper"},[r("transition",{attrs:{name:"fade"}},[t.loading?r("div",{staticClass:"loading"},[r("div",{staticClass:"loader-box"},[r("div",{staticClass:"loader"}),r("div",{staticClass:"label"},[t._v("Loading")])])]):t._e()]),r("transition",{attrs:{name:"fade-item"}},[t.result?r("div",[r("uistring-midresult",{attrs:{result:t.result,mid:t.mid}})],1):t._e()]),r("transition",{attrs:{name:"fade-item"}},[t.error?r("div",{staticClass:"no-results"},[r("div",{staticClass:"icon"},[r("i",{staticClass:"fa fa-exclamation-triangle"})]),r("div",{staticClass:"head"},[t._v(" Error: "+t._s(t.error.statusText)+" ")]),r("p",[t._v(" "+t._s(t.error.bodyText)+" ")])]):t._e()])],1)])},a=[],s=(r("ac1f"),r("5319"),r("841c"),r("1276"),r("0968")),n="Copy HTML Source",o={name:"uistringmidlup",data:function(){return{loadedQuery:"",query:"",result:null,mid:0,loading:!1,error:null,lastChangeTimer:null,copyText:n}},created:function(){this.query=this.$route.query.q,this.fetchData()},methods:{fetchData:function(){var t=this;if(this.query){clearTimeout(this.lastChangeTimer);var e=0,r="",i=this.query.split(/\s/,2),a=i[0].replace(/(^")|("$)/g,"");e=parseInt(a),isNaN(e)?this.error={statusText:"Invalid Request",bodyText:"Not a valid MID"}:(2==i.length&&(r=i[1].replace(/(^")|("$)/g,"")),this.loading=!0,this.mid=e,s["a"].getVariant(e,{vue:this,region:this.$store.state.regionCode,param:r,format:"html",okcb:function(e){t.result={html:e.html,raw:e.raw,strip:e.strip.replace(/\n/g,"<br/>")},t.loadedQuery=t.query,t.error=null,setTimeout((function(){return t.loading=!1}),250)},errcb:function(e){console.error(e),t.error=e,t.loading=!1,t.end=!0}}))}},changed:function(){clearTimeout(this.lastChangeTimer),this.lastChangeTimer=setTimeout(this.search,1e3)},search:function(){clearTimeout(this.lastChangeTimer),this.query!=this.loadedQuery&&(this.result=null,this.$router.push({path:"/text/uistring/midlup",query:{q:this.query}}),this.fetchData())}}},c=o,l=(r("5c71"),r("2877")),u=Object(l["a"])(c,i,a,!1,null,"2426368c",null);e["default"]=u.exports},ac3c:function(t,e,r){},ae31:function(t,e,r){"use strict";r("ac3c")},b46b:function(t,e,r){"use strict";r("5b07")},c717:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("99af");var i=r("53ca");function a(t){if("object"!==Object(i["a"])(t))return String(t);if(t.response){var e=t,r=e.response,a="HTTP ".concat(r.status," ").concat(r.statusText);return a+=": ".concat(r.data),a}return"请求失败"}},c7b8:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.result?r("div",{staticClass:"results"},[r("div",{staticClass:"col rich"},[r("ui-string",{attrs:{"message-data":t.uiHtmlMsg,format:"html"}}),r("div",{ref:"htmlArea",staticClass:"invisible",domProps:{innerHTML:t._s(t.result.html)}}),r("div",{staticClass:"foot"},[r("span",{on:{click:t.copyHtml}},[t._v(t._s(t.copyText))])]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.result.html,expression:"result.html"}],ref:"htmltext",staticClass:"hidden",domProps:{value:t.result.html},on:{input:function(e){e.target.composing||t.$set(t.result,"html",e.target.value)}}})],1),r("div",{staticClass:"col raw"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.result.raw,expression:"result.raw"}],ref:"rawtext",attrs:{readonly:""},domProps:{value:t.result.raw},on:{click:t.selectText,input:function(e){e.target.composing||t.$set(t.result,"raw",e.target.value)}}})])]):t._e()])},a=[],s=(r("a9e3"),r("2b0e")),n=r("3bbf"),o="Copy HTML Source",c="Copied!",l=s["a"].extend({name:"uistring-midresult",props:{result:{type:Object},mid:{type:Object}},components:{UiString:n["a"]},data:function(){return{copyText:o}},computed:{uiHtmlMsg:function(){var t={id:Number(this.mid),message:String(this.result.html)};return t}},methods:{copyHtml:function(){var t=this;appInsights.trackEvent("interaction.uistrings.result.html.copy",{mid:this.mid,region:this.$store.state.regionCode});var e=this.$refs.htmltext;e.focus(),e.select();var r=document.execCommand("copy");r&&(this.copyText=c,setTimeout((function(){return t.copyText=o}),1e3))},googleTranslate:function(){var t=this.$refs.htmlArea,e=t.textContent,r="https://translate.google.com/#ko/en/".concat(e);window.open(r)},selectText:function(){appInsights.trackEvent("interaction.uistrings.result.raw.select",{mid:this.mid,region:this.$store.state.regionCode});var t=this.$refs.rawtext;t.focus(),t.select()}}}),u=l,d=(r("ce34"),r("2877")),h=Object(d["a"])(u,i,a,!1,null,"777884cc",null);e["a"]=h.exports},ce34:function(t,e,r){"use strict";r("e79f")},da07:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"error"},[r("div",{staticClass:"icon"},[r("i",{class:"fa "+t.iconClass})]),r("div",{staticClass:"head"},[t._v(" "+t._s(t.errorTitle)+" ")]),r("p",[t._v(" "+t._s(t.errorContent)+" ")]),t.secondaryInfo?r("p",{staticClass:"secondary"},[t._v(" "+t._s(t.secondaryInfo)+" ")]):t._e(),t.canRetry?r("button",{staticClass:"retry",on:{click:t.retry}},[t._v("Retry")]):t._e()])},a=[],s={props:["errorTitle","errorContent","iconClass","secondaryInfo","canRetry"],methods:{retry:function(){appInsights.trackEvent("interaction.errorbox.retry",{title:this.errorTitle,content:this.errorContent,secondaryInfo:this.secondaryInfo,displayType:"big",region:this.$store.state.regionCode}),this.$emit("retry")}}},n=s,o=(r("804c"),r("2877")),c=Object(o["a"])(n,i,a,!1,null,"3d92b816",null);e["a"]=c.exports},e79f:function(t,e,r){}}]);
//# sourceMappingURL=text.cf53639c.js.map