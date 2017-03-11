webpackJsonp([2,3],[,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(42),r=n(5),a=n(36),i=n.n(a);o.a.use(r.a),n(4),new o.a({el:"#app",render:function(t){return t(i.a)}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(29),r=n.n(o);r.a.install({onUpdateReady:function(){console.log("update ready"),r.a.applyUpdate()},onUpdated:function(){console.log("updated"),location.reload()}})},function(t,e,n){"use strict";e.a=function(t){t.mixin({created:function(){var t=this,e=this.$options.syncStore;e&&function(){var n=JSON.parse(localStorage.getItem("app:store")||"{}"),o=!0,r=!1,a=void 0;try{for(var i,s=function(){var e=i.value;"undefined"!=typeof n[e]&&(t[e]=n[e]),t.$watch(e,function(t){n[e]=t,localStorage.setItem("app:store",JSON.stringify(n))})},c=e[Symbol.iterator]();!(o=(i=c.next()).done);o=!0)s()}catch(t){r=!0,a=t}finally{try{!o&&c.return&&c.return()}finally{if(r)throw a}}}()}})}},function(t,e,n){"use strict";function o(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function o(r,a){try{var i=e[r](a),s=i.value}catch(t){return void n(t)}return i.done?void t(s):Promise.resolve(s).then(function(t){o("next",t)},function(t){o("throw",t)})}return o("next")})}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),a=n.n(r),i=n(37),s=n.n(i),c=n(38),u=n.n(c),l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.default={name:"app",data:function(){return{source:null}},created:function(){var t=this;return o(a.a.mark(function e(){var o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(0).then(n.bind(null,44));case 2:o=e.sent,t.source=Object.keys(o.lib).map(function(t){return l({},o.lib[t],{name:t})}).filter(function(t){return Boolean(t.char)});case 4:case"end":return e.stop()}},e,t)}))()},components:{EmojiPanel:s.a,Loading:u.a}}},function(t,e,n){"use strict";function o(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function o(r,a){try{var i=e[r](a),s=i.value}catch(t){return void n(t)}return i.done?void t(s):Promise.resolve(s).then(function(t){o("next",t)},function(t){o("throw",t)})}return o("next")})}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(15),a=(n.n(r),n(14)),i=(n.n(a),n(13)),s=n.n(i),c=n(2),u=n.n(c),l=n(24),d=n.n(l),p=n(27),f=n.n(p),h=n(10),v=n.n(h),m=n(28),y=n.n(m),g=n(35),b=n.n(g),_=n(34);e.default={name:"emoji-panel",props:["source"],data:function(){return{keyword:null,category:null,clipboard:null,input:null,useDango:!1,copyEmojiName:!1,result:this.source.slice(0,200),searching:!1}},syncStore:["useDango","copyEmojiName"],created:function(){this.$watch("keyword",this.handleUpdate),this.$watch("category",this.handleUpdate),this.$watch("useDango",this.handleUpdate)},methods:{handleChange:f()(function(){this.keyword=this.input},300),handleUpdate:function(){var t=this;return o(u.a.mark(function e(){var o,r,a,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.searching=!0,o=t.source,t.category&&(o=o.filter(function(e){return e.category===t.category})),!t.keyword){e.next=22;break}if(!t.useDango){e.next=18;break}return e.prev=5,e.next=8,n.i(_.a)("https://emoji.getdango.com/api/emoji?q="+t.keyword).then(function(t){return t.json()});case 8:r=e.sent,a=r.results,o=a.map(function(e){return t.findEmojiByUnicode(e.text)}).filter(function(t){return Boolean(t)}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),y()({message:e.t0.message,type:"error"});case 16:e.next=20;break;case 18:i=new d.a(o,{keys:["name","keywords"],tokenize:!0,shouldSort:!0}),o=i.search(t.keyword).slice(0,20);case 20:e.next=23;break;case 22:t.category||(o=o.slice(0,200));case 23:t.result=o,t.searching=!1;case 25:case"end":return e.stop()}},e,t,[[5,13]])}))()},handleReset:function(){this.input=null,this.keyword=null,this.$refs.input.focus()},initClipboard:function(t){var e=t.currentTarget;this.clipboard=new v.a(e),this.clipboard.on("success",function(t){y()({message:"Copied "+t.text,type:"success"})}),this.clipboard.on("error",function(t){y()({message:"Failed to copy!",type:"error"})})},destroyClipboard:function(){this.clipboard&&(this.clipboard.destroy(),this.clipboard=null)},findEmojiByUnicode:function(t){return this.source.filter(function(e){return e.char===t})[0]}},components:{"github-badge":b.a,"el-switch":s.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{count:1,total:10}},computed:{emoji:function(){return"🔥".repeat(this.count)}},mounted:function(){var t=this;this.timer=setInterval(function(){t.count=++t.count%t.total},200)},beforeDestroy:function(){clearInterval(this.timer)}}},,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,,,,,,,function(t,e,n){n(21),n(22);var o=n(1)(n(6),n(40),"data-v-2fdb2575",null);t.exports=o.exports},function(t,e,n){n(16),n(18),n(19),n(20),n(17);var o=n(1)(n(7),n(39),"data-v-29a5c78c",null);t.exports=o.exports},function(t,e,n){n(23);var o=n(1)(n(8),n(41),"data-v-6c6eede0",null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.source?n("div",{staticClass:"main"},[n("github-badge",{staticClass:"github-icon",attrs:{slug:"egoist/emoji",fill:"#999"}}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"control"},[n("label",{staticClass:"control-block"},[n("el-switch",{model:{value:t.useDango,callback:function(e){t.useDango=e},expression:"useDango"}}),t._v(" Search with "),n("a",{attrs:{target:"_blank",href:"https://getdango.com/"}},[t._v("Dango API")])],1),t._v(" "),n("label",{staticClass:"control-block"},[n("el-switch",{model:{value:t.copyEmojiName,callback:function(e){t.copyEmojiName=e},expression:"copyEmojiName"}}),t._v(" Copy emoji name\n    ")],1)]),t._v(" "),n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],ref:"input",staticClass:"input-search",attrs:{autofocus:"",type:"text",placeholder:"Type to search..."},domProps:{value:t.input},on:{input:[function(e){e.target.composing||(t.input=e.target.value)},t.handleChange]}}),t._v(" "),t.searching?n("button",{staticClass:"button-reset",attrs:{disabled:"",type:"button"}},[n("span",{staticClass:"loading runner"})]):n("button",{staticClass:"button-reset",attrs:{type:"button"},on:{click:t.handleReset}},[t._v("\n        Reset\n      ")])]),t._v(" "),t.result.length?n("div",{staticClass:"emojis"},t._l(t.result,function(e){return n("div",{staticClass:"emoji",attrs:{"data-clipboard-text":t.copyEmojiName?":"+e.name+":":e.char},on:{mouseover:t.initClipboard,mouseout:t.destroyClipboard}},[n("span",{staticClass:"emoji-image"},[t._v("\n        "+t._s(e.char)+"\n      ")]),t._v(" "),n("span",{staticClass:"emoji-description"},[t._v("\n        :"+t._s(e.name)+":\n      ")])])})):t._e()],1):t._e()},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"site-name"},[n("span",[t._v("Emoji Searcher")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.source?n("emoji-panel",{attrs:{source:t.source}}):n("loading")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading-wrapper"},[n("div",{staticClass:"loading"},[t._v("\n    "+t._s(t.emoji)+"\n  ")])])},staticRenderFns:[]}},,function(t,e,n){t.exports=n(3)},,function(t,e,n){t.exports=n.p+"static/element-icons.b02bdc1b.ttf"},function(t,e,n){t.exports=n.p+"static/element-icons.d2f69a92.woff"}],[43]);
//# sourceMappingURL=client.84138770.js.map