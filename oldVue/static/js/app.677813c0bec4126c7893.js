webpackJsonp([1],{NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("nav",[e("div",{staticClass:"nav-wrapper blue"},[e("div",{staticClass:"container"},[e("router-link",{staticClass:"logo",attrs:{to:"/"}},[this._v("My Dashboard")])],1)])])},staticRenderFns:[]},s={name:"App",components:{Navbar:i("VU/8")(null,n,!1,null,null,null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),this._v(" "),e("div",{staticClass:"container"},[e("router-view")],1)],1)},staticRenderFns:[]};var o=i("VU/8")(s,r,!1,function(t){i("d1VZ")},null,null).exports,c=i("/ocq"),l=i("kxiW"),d=i.n(l),m=(i("881v"),d.a.initializeApp({apiKey:"AIzaSyByuLmshnjYi6hRqS0ka2aPSn9UFdx_-3g",authDomain:"vueproject-v1.firebaseapp.com",databaseURL:"https://vueproject-v1.firebaseio.com",projectId:"vueproject-v1",storageBucket:"vueproject-v1.appspot.com",messagingSenderId:"930226927153",appId:"1:930226927153:web:3a18dd0dd0dc13daadc710",measurementId:"G-30R98Y9BJM"}).firestore()),u={name:"dashboard",data:function(){return{items:[]}},created:function(){var t=this;m.collection("items").orderBy("name").get().then(function(e){return e.forEach(function(e){var i={id:e.id,item_id:e.data().item_id,name:e.data().name,description:e.data().description,price:e.data().price};t.items.push(i)})})}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"dashboard"}},[i("h3",[t._v("Overview")]),t._v(" "),i("ul",{staticClass:"collection with-header"},[t._m(0),t._v(" "),t._l(t.items,function(e){return i("li",{key:e.id,staticClass:"collection-item"},[t._v("\n      "+t._s(e.item_id)+" : "+t._s(e.name)+"\n      "),i("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-item",params:{item_id:e.item_id}}}},[i("i",{staticClass:"fa fa-eye"})])],1)})],2),t._v(" "),i("div",{staticClass:"fixed-action-btn"},[i("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[i("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"collection-header"},[e("h4",[this._v("Items")])])}]},v=i("VU/8")(u,p,!1,null,null,null).exports,_={name:"edit-item",data:function(){return{item_id:null,name:null,description:null,price:null}},beforeRouteEnter:function(t,e,i){m.collection("items").where("item_id","==",t.params.item_id).get().then(function(t){t.forEach(function(t){i(function(e){e.item_id=t.data().item_id,e.name=t.data().name,e.description=t.data().description,e.price=t.data().price})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;m.collection("items").where("item_id","==",this.$route.params.item_id).get().then(function(e){e.forEach(function(e){t.item_id=e.data().item_id,t.name=e.data().name,t.description=e.data().description,t.price=e.data().price})})},updateItem:function(){var t=this;m.collection("items").where("item_id","==",this.$route.params.item_id).get().then(function(e){e.forEach(function(e){e.ref.update({item_id:t.item_id,name:t.name,description:t.description,price:t.price}).then(function(){t.$router.push({name:"view-item",params:{item_id:t.item_id}})})})})}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"edit-item"}},[i("h3",[t._v("Edit Item")]),t._v(" "),i("div",{staticClass:"row"},[i("form",{staticClass:"col s12",on:{submit:function(e){return e.preventDefault(),t.updateItem(e)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.item_id,expression:"item_id"}],attrs:{type:"text",disabled:""},domProps:{value:t.item_id},on:{input:function(e){e.target.composing||(t.item_id=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{type:"text",required:""},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],attrs:{type:"text",required:""},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}})])]),t._v(" "),i("button",{staticClass:"btn green",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),i("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Cancel")])],1)])])},staticRenderFns:[]},h=i("VU/8")(_,f,!1,null,null,null).exports,C={name:"view-item",data:function(){return{item_id:null,name:null,description:null,price:null}},beforeRouteEnter:function(t,e,i){m.collection("items").where("item_id","==",t.params.item_id).get().then(function(t){t.forEach(function(t){i(function(e){e.item_id=t.data().item_id,e.name=t.data().name,e.description=t.data().description,e.price=t.data().price})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;m.collection("items").where("item_id","==",this.$route.params.item_id).get().then(function(e){e.forEach(function(e){t.item_id=e.data().item_id,t.name=e.data().name,t.description=e.data().description,t.price=e.data().price})})},deleteItem:function(){var t=this;confirm("Are you sure?")&&m.collection("items").where("item_id","==",this.$route.params.item_id).get().then(function(e){e.forEach(function(e){e.ref.delete(),t.$router.push("/")})})}}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"view-item"}},[i("h3",[t._v("View Item")]),t._v(" "),i("ul",{staticClass:"collection with-header"},[i("li",{staticClass:"collection-header"},[i("h4",[t._v(t._s(t.name))])]),t._v(" "),i("li",{staticClass:"collection-item"},[t._v("Item ID: "+t._s(t.item_id))]),t._v(" "),i("li",{staticClass:"collection-item"},[t._v("Item Description: "+t._s(t.description))]),t._v(" "),i("li",{staticClass:"collection-item"},[t._v("Item Price: "+t._s(t.price))])]),t._v(" "),i("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Return")]),t._v(" "),i("button",{staticClass:"btn red",on:{click:t.deleteItem}},[t._v("Delete")]),t._v(" "),i("div",{staticClass:"fixed-action-btn"},[i("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"edit-item",params:{item_id:t.item_id}}}},[i("i",{staticClass:"fa fa-pencil"})])],1)],1)},staticRenderFns:[]},w=i("VU/8")(C,g,!1,null,null,null).exports,b={name:"new-item",data:function(){return{item_id:null,name:null,description:null,price:null}},methods:{saveItem:function(){var t=this;m.collection("items").add({item_id:this.item_id,name:this.name,description:this.description,price:this.price}).then(function(e){t.$router.push("/")}).catch(function(t){return console.log(t)})}}},x={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"new-item"}},[i("h3",[t._v("New Item")]),t._v(" "),i("div",{staticClass:"row"},[i("form",{staticClass:"col s12",on:{submit:function(e){return e.preventDefault(),t.saveItem(e)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.item_id,expression:"item_id"}],attrs:{type:"text",required:""},domProps:{value:t.item_id},on:{input:function(e){e.target.composing||(t.item_id=e.target.value)}}}),t._v(" "),i("label",[t._v("Item ID#")])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),i("label",[t._v("Item Name#")])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{type:"text",required:""},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),t._v(" "),i("label",[t._v("Item Descritpion#")])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],attrs:{type:"text",required:""},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}}),t._v(" "),i("label",[t._v("Item Price#")])])]),t._v(" "),i("button",{staticClass:"btn green",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),i("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Cancel")])],1)])])},staticRenderFns:[]},I=i("VU/8")(b,x,!1,null,null,null).exports;a.a.use(c.a);var y=new c.a({routes:[{path:"/",name:"dashboard",component:v},{path:"/new",name:"new-item",component:I},{path:"/edit/:item_id",name:"edit-item",component:h},{path:"/:item_id",name:"view-item",component:w}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:y,components:{App:o},template:"<App/>"})},d1VZ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.677813c0bec4126c7893.js.map