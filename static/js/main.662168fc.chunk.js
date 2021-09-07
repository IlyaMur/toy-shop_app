(this["webpackJsonpshop-project"]=this["webpackJsonpshop-project"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var r=c(2),n=c.n(r),a=c(6),i=c.n(a),s=c(0);function o(){return Object(s.jsx)("nav",{className:"green darken-1",children:Object(s.jsxs)("div",{className:"nav-wrapper",children:[Object(s.jsx)("a",{href:"#!",className:"brand-logo",children:"Toy-Shop"}),Object(s.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://github.com/IlyaMur/react_shop",target:"_blank",rel:"noreferrer",children:"Repo"})})})]})})}function l(){return Object(s.jsx)("footer",{className:"page-footer green lighten-4",children:Object(s.jsx)("div",{className:"footer-copyright",children:Object(s.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(s.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/IlyaMur/react_shop",target:"_blank",rel:"noreferrer",children:"Repo"})]})})})}var d=c(7),j=c(8),u=c(1);function b(e,t){var c=t.type,r=t.payload;switch(c){case"SET_GOODS":return Object(u.a)(Object(u.a)({},e),{},{goods:r||[],loading:!1});case"INCREASE_AMOUNT":return Object(u.a)(Object(u.a)({},e),{},{order:e.order.map((function(e){if(e.id===r.id){var t=e.quantity+1;return Object(u.a)(Object(u.a)({},e),{},{quantity:t})}return Object(u.a)({},e)}))});case"DECREASE_AMOUNT":return Object(u.a)(Object(u.a)({},e),{},{order:e.order.map((function(e){if(e.id===r.id){var t=e.quantity-1;return Object(u.a)(Object(u.a)({},e),{},{quantity:t>0?t:0})}return Object(u.a)({},e)}))});case"ADD_TO_CART":var n=e.order.findIndex((function(e){return e.id===r.id})),a=null;if(n<0){var i=Object(u.a)(Object(u.a)({},r),{},{quantity:1});a=[].concat(Object(j.a)(e.order),[i])}else a=e.order.map((function(e,t){return t===n?Object(u.a)(Object(u.a)({},e),{},{quantity:++e.quantity}):e}));return Object(u.a)(Object(u.a)({},e),{},{order:a,alertName:r.name});case"HANDLE_CART_SHOW":return Object(u.a)(Object(u.a)({},e),{},{isCartShow:!e.isCartShow});case"REMOVE_FROM_CART":return Object(u.a)(Object(u.a)({},e),{},{order:e.order.filter((function(e){return e.id!==r.id}))});case"CLOSE_ALERT":return Object(u.a)(Object(u.a)({},e),{},{alertName:""});default:return e}}var O=Object(r.createContext)(),h={goods:[],loading:!0,order:[],isCartShow:!1,alertName:""},m=function(e){var t=e.children,c=Object(r.useReducer)(b,h),n=Object(d.a)(c,2),a=n[0],i=n[1];return a.closeAlert=function(){i({type:"CLOSE_ALERT"})},a.removeFromCart=function(e){i({type:"REMOVE_FROM_CART",payload:{id:e}})},a.handleCartShow=function(){i({type:"HANDLE_CART_SHOW"})},a.addToCart=function(e){i({type:"ADD_TO_CART",payload:e})},a.increaseAmount=function(e){i({type:"INCREASE_AMOUNT",payload:{id:e}})},a.decreaseAmount=function(e){i({type:"DECREASE_AMOUNT",payload:{id:e}})},a.setGoods=function(e){i({type:"SET_GOODS",payload:e})},Object(s.jsx)(O.Provider,{value:a,children:t})};function x(){return Object(s.jsx)("div",{className:"progress",children:Object(s.jsx)("div",{className:"indeterminate"})})}function f(e){var t=e.id,c=e.name,n=e.description,a=e.price,i=e.full_background,o=Object(r.useContext)(O).addToCart;return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("div",{className:"card-image",children:Object(s.jsx)("img",{id:"back-img",src:i,alt:c})}),Object(s.jsxs)("div",{className:"card-content",children:[Object(s.jsx)("span",{className:"card-title",children:c}),Object(s.jsx)("p",{children:n})]}),Object(s.jsxs)("div",{className:"card-action",children:[Object(s.jsx)("button",{className:"btn",onClick:function(){return o({id:t,name:c,price:a})},children:"Buy"}),Object(s.jsxs)("span",{className:"right",style:{fontSize:"1.8rem"},children:[a," rub."]})]})]})}function p(){var e=Object(r.useContext)(O).goods,t=void 0===e?[]:e;return t.length?Object(s.jsx)("div",{className:"goods",children:t.map((function(e){return Object(s.jsx)(f,Object(u.a)({},e),e.id)}))}):Object(s.jsx)("h3",{children:"Nothing here"})}function N(){var e=Object(r.useContext)(O),t=e.order,c=e.handleCartShow,n=void 0===c?Function.prototype:c;return Object(s.jsxs)("div",{className:"cart blue darken-4 white-text",onClick:n,children:[Object(s.jsx)("i",{className:"material-icons",children:"shopping_cart"}),t.length?Object(s.jsxs)("span",{className:"cart-quantity",children:[t.length," "]}):null]})}function v(e){var t=e.id,c=e.name,n=e.price,a=e.quantity,i=Object(r.useContext)(O),o=i.removeFromCart,l=i.increaseAmount,d=i.decreaseAmount;return Object(s.jsxs)("li",{className:"collection-item",children:[c,Object(s.jsx)("i",{className:"material-icons cart-quantity",onClick:function(){return d(t)},children:"remove"}),"x",a,Object(s.jsx)("i",{className:"material-icons cart-quantity",onClick:function(){return l(t)},children:"add"}),"= ",n*a," rub.",Object(s.jsx)("span",{className:"secondary-content",onClick:function(){return o(t)},children:Object(s.jsx)("i",{className:"material-icons cart-delete",children:"close"})})]})}function y(){var e=Object(r.useContext)(O),t=e.order,c=void 0===t?[]:t,n=e.handleCartShow,a=void 0===n?Function.prototype:n,i=c.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(s.jsxs)("ul",{className:"collection cart-list",children:[Object(s.jsx)("li",{className:"collection-item active",children:"Cart"}),c.length?c.map((function(e){return Object(s.jsx)(v,Object(u.a)({},e),e.id)})):Object(s.jsx)("li",{className:"collection-item",children:" Cart is empty "}),Object(s.jsxs)("li",{className:"collection-item active",children:["Total price: ",i," rub."]}),Object(s.jsx)("li",{className:"collection-item right",children:Object(s.jsx)("button",{className:"btn",children:" Make order "})}),Object(s.jsx)("i",{className:"material-icons cart-close",onClick:a,children:"close"})]})}function C(){var e=Object(r.useContext)(O),t=e.alertName,c=void 0===t?"":t,n=e.closeAlert,a=void 0===n?Function.prototype:n;return Object(r.useEffect)((function(){var e=setTimeout(a,2e3);return function(){clearTimeout(e)}}),[c]),Object(s.jsx)("div",{id:"toast-container",children:Object(s.jsxs)("div",{className:"toast",children:[c," added to the Cart"]})})}function g(){var e=Object(r.useContext)(O),t=e.alertName,c=e.isCartShow,n=e.order,a=e.loading,i=e.setGoods;return Object(r.useEffect)((function(){fetch("https://fortniteapi.io/v1/shop?lang=en",{headers:{Authorization:"2e665373-0fff14e2-52e5d897-0ff564f0"}}).then((function(e){return e.json()})).then((function(e){i(e.featured)}))}),[]),Object(s.jsxs)("main",{className:"container content",children:[Object(s.jsx)(N,{quantity:n.length}),a?Object(s.jsx)(x,{}):Object(s.jsx)(p,{}),c&&Object(s.jsx)(y,{}),t&&Object(s.jsx)(C,{})]})}var A=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o,{}),Object(s.jsx)(m,{children:Object(s.jsx)(g,{})}),Object(s.jsx)(l,{})]})};c(14);i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(A,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.662168fc.chunk.js.map