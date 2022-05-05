(function(){"use strict";var e={738:function(e,t,n){var i=n(9242),r=n(3766),o=n(3396),a=n(7139);const s={class:"app-view"},l={key:0,class:"app-view__error"},d={class:"app-view__debug"},c={class:"app-view__main"},h={key:1,class:"app-view__loader"};function u(e,t,n,i,r,u){const m=(0,o.up)("Tree");return(0,o.wg)(),(0,o.iD)("div",s,[u.loadingError?((0,o.wg)(),(0,o.iD)("div",l,(0,a.zw)(u.loadingError),1)):(0,o.kq)("",!0),(0,o._)("pre",d,(0,a.zw)(u.debugState),1),(0,o._)("div",c,[(0,o.Wm)(m,{data:u.rootNode,onDeleteItem:u.deleteItem,onChangeItem:u.changeItem},null,8,["data","onDeleteItem","onChangeItem"])]),u.loading?((0,o.wg)(),(0,o.iD)("div",h)):(0,o.kq)("",!0),(0,o._)("button",{class:"app-view__reset",type:"button",onClick:t[0]||(t[0]=(...e)=>u.reset&&u.reset(...e))},"Сбросить")])}n(2801),n(1295);const m=structuredClone||(e=>JSON.parse(JSON.stringify(e))),p=(0,r.Q_)({id:"tree",state:()=>({initialShape:[],itemsById:{},loadingError:"",loading:!1}),getters:{rootNode:e=>{const t=[...e.initialShape];function n(t,i,r){const o=m(e.itemsById[t]);r[i]=o,o.children&&o.children.forEach(n)}return t.forEach(n),t}},actions:{async init(){try{this.loading=!0;const e=await fetch("./data.json");if(!e.ok)throw e;const t=await e.json(),n=m(t);while(n.length>0){const e=n.shift(),t=e.id,i=e.children;i&&(e.children=i.map((e=>e.id)),i.forEach((e=>{e.parentId=t,n.push(e)}))),this.itemsById[e.id]=e}this.initialShape=t.map((e=>e.id))}catch(e){console.log("error while loading tree data: ",e),this.loadingError=e.message||e.statusText}finally{this.loading=!1}},deleteItem(e){const t=this.itemsById[e],n=t.parentId?this.itemsById[t.parentId].children:this.initialShape;n.splice(n.indexOf(e),1),delete this.itemsById[e];const i=[...t.children];while(i.length>0){const e=i.shift(),t=this.itemsById[e].children;t&&i.push(...t),delete this.itemsById[e]}},changeName(e,t){const n=this.itemsById[e];n.name=t}}});var f=n(2512),g={name:"App",components:{Tree:f["default"]},setup(){const e=p();return{treeStore:e}},computed:{rootNode(){return this.treeStore.rootNode},loadingError(){return this.treeStore.loadingError},loading(){return this.treeStore.loading},debugState(){return JSON.stringify(this.rootNode,null,2)}},mounted(){this.treeStore.init()},methods:{deleteItem(e){this.treeStore.deleteItem(e)},changeItem(e,t){this.treeStore.changeName(e,t)},reset(){this.treeStore.init()}}},_=n(89);const v=(0,_.Z)(g,[["render",u]]);var y=v;const I=(0,i.ri)(y);I.use((0,r.WB)()),I.mount("#app")},2512:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var i=n(3396);const r={class:"tree"};function o(e,t,n,o,a,s){const l=(0,i.up)("TreeItem");return(0,i.wg)(),(0,i.iD)("ul",r,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.data,(e=>((0,i.wg)(),(0,i.j4)(l,{data:e,key:e.id,onDeleteItem:s.deleteItem,onChangeItem:s.changeItem},null,8,["data","onDeleteItem","onChangeItem"])))),128))])}var a=n(7139),s=n(9242);const l={class:"tree-item"},d={class:"tree-item__header"},c={key:0,class:"tree-item__icon tree-item__icon_view_folder",viewBox:"0 0 24 24",width:"1em",height:"1em",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h=(0,i._)("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"},null,-1),u=[h],m={key:1,class:"tree-item__icon tree-item__icon_view_file",viewBox:"0 0 24 24",width:"1em",height:"1em",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},p=(0,i._)("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"},null,-1),f=(0,i._)("polyline",{points:"13 2 13 9 20 9"},null,-1),g=[p,f],_=["value"],v={class:"tree-item__actions"},y=(0,i._)("svg",{class:"tree-item__icon",viewBox:"0 0 24 24",width:"1em",height:"1em",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[(0,i._)("path",{d:"M12 20h9"}),(0,i._)("path",{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"})],-1),I=[y],w=(0,i.uE)('<svg class="tree-item__icon" viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>',1),k=[w],b={key:0,class:"tree-item__body"};function E(e,t,n,r,o,h){const p=(0,i.up)("Tree");return(0,i.wg)(),(0,i.iD)("li",l,[(0,i._)("div",d,["directory"===n.data.type?((0,i.wg)(),(0,i.iD)("svg",c,u)):(0,i.kq)("",!0),"file"===n.data.type?((0,i.wg)(),(0,i.iD)("svg",m,g)):(0,i.kq)("",!0),(0,i.wy)((0,i._)("div",{class:"tree-item__name",onDblclick:t[0]||(t[0]=(...e)=>h.enterEdit&&h.enterEdit(...e))},(0,a.zw)(n.data.name),545),[[s.F8,!o.isEdit]]),(0,i.wy)((0,i._)("form",{class:"tree-item__edit-form",onSubmit:t[2]||(t[2]=(0,s.iM)(((...e)=>h.leaveEdit&&h.leaveEdit(...e)),["prevent"]))},[(0,i._)("input",{ref:"input",class:"tree-item__name tree-item__input",value:n.data.name,onInput:t[1]||(t[1]=(...e)=>h.changeItem&&h.changeItem(...e))},null,40,_)],544),[[s.F8,o.isEdit]]),(0,i._)("div",v,[(0,i._)("button",{class:"tree-item__button",type:"button",title:"edit",onClick:t[3]||(t[3]=(...e)=>h.enterEdit&&h.enterEdit(...e))},I),(0,i._)("button",{class:"tree-item__button tree-item__button_type_delete",type:"button",title:"delete",onClick:t[4]||(t[4]=(...e)=>h.deleteItem&&h.deleteItem(...e))},k)])]),h.hasChildren?((0,i.wg)(),(0,i.iD)("div",b,[(0,i.Wm)(p,{data:n.data.children,onDeleteItem:h.forwardDeleteItem,onChangeItem:h.forwardChangeItem},null,8,["data","onDeleteItem","onChangeItem"])])):(0,i.kq)("",!0)])}var C={name:"TreeItemComponent",components:{Tree:(0,i.RC)((()=>Promise.resolve().then(n.bind(n,2512))))},props:{data:{type:Object}},data(){return{isEdit:!1}},computed:{hasChildren(){return this.data.children&&this.data.children.length>0}},methods:{enterEdit(){this.isEdit=!0,this.$nextTick((()=>{this.$refs?.input?.focus()}))},leaveEdit(){this.isEdit=!1},toggleEdit(){console.log(this.isEdit),this.isEdit?this.leaveEdit():this.enterEdit()},changeItem(e){this.$emit("changeItem",this.data.id,e.target.value)},deleteItem(){this.$emit("deleteItem",this.data.id)},forwardDeleteItem(e){this.$emit("deleteItem",e)},forwardChangeItem(e,t){this.$emit("changeItem",e,t)}}},S=n(89);const D=(0,S.Z)(C,[["render",E]]);var O=D,j={name:"TreeComponent",components:{TreeItem:O},props:{data:{type:Array}},methods:{deleteItem(e){this.$emit("deleteItem",e)},changeItem(e,t){this.$emit("changeItem",e,t)}}};const x=(0,S.Z)(j,[["render",o]]);var B=x}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,i,r,o){if(!i){var a=1/0;for(c=0;c<e.length;c++){i=e[c][0],r=e[c][1],o=e[c][2];for(var s=!0,l=0;l<i.length;l++)(!1&o||a>=o)&&Object.keys(n.O).every((function(e){return n.O[e](i[l])}))?i.splice(l--,1):(s=!1,o<a&&(a=o));if(s){e.splice(c--,1);var d=r();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[i,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,o,a=i[0],s=i[1],l=i[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(l)var c=l(n)}for(t&&t(i);d<a.length;d++)o=a[d],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},i=self["webpackChunkvue_folder_tree"]=self["webpackChunkvue_folder_tree"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(738)}));i=n.O(i)})();
//# sourceMappingURL=app.232add57.js.map