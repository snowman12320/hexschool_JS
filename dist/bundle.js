(()=>{"use strict";var n={443:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"@import url(https://fonts.googleapis.com/earlyaccess/notosanstc.css);"]),a.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Baloo+Tamma+2:600, 700);"]),a.push([n.id,'* {\n  box-sizing: border-box;\n  list-style: none;\n  font-family: "Baloo Tamma 2";\n}\n\nhtml {\n  font-size: 16px;\n  -webkit-tap-highlight-color: transparent;\n}\n\nbody {\n  min-height: 100vh;\n  background: #eee;\n  display: flex;\n  color: #333;\n  background-image: linear-gradient(174deg, #1d4289 2%, #1d4289 46%, #1d4289 46%, #ffffff 100%, #e8e8e8 100%);\n  letter-spacing: 0.07em;\n}\n\nh1 {\n  text-align: center;\n  font-size: 3rem;\n  margin-bottom: 1.5rem;\n  font-family: "Baloo Tamma 2";\n  letter-spacing: 0.5rem;\n  font-weight: bold;\n  color: #efefef;\n}\n@media (max-width: 575px) {\n  h1 {\n    font-size: 2rem;\n    margin-bottom: 1rem;\n  }\n}\n\n.container {\n  margin: 3rem auto 1.5rem auto;\n  padding: 0 12px;\n  width: 500px;\n}\n@media (max-width: 575px) {\n  .container {\n    margin-top: 1.5rem;\n  }\n}\n\n.card {\n  margin-bottom: 0.5rem;\n  max-width: 100%;\n  padding: 1rem;\n  border-radius: 10px;\n  background: #fff;\n  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);\n}\n\ninput[type=text] {\n  width: 100%;\n  border: 0;\n  outline: 0;\n  font-size: 1rem;\n  padding-right: 1rem;\n  color: #333;\n}\ninput[type=text]::-moz-placeholder {\n  color: #9f9a91;\n}\ninput[type=text]:-ms-input-placeholder {\n  color: #9f9a91;\n}\ninput[type=text]::placeholder {\n  color: #9f9a91;\n}\n\n.input {\n  padding: 4px 4px 4px 1rem;\n  display: flex;\n  justify-content: end;\n}\n\n.btn_add {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: #333;\n  color: #fff;\n  font-size: 3rem;\n  text-decoration: none;\n  padding-top: 10px;\n}\n\n.card_list {\n  padding: 0;\n}\n\n.tab {\n  display: flex;\n  text-align: center;\n  color: #9f9a91;\n  font-size: 14px;\n  font-family: "Baloo Tamma 2";\n  cursor: pointer;\n  font-weight: bold;\n  padding-left: 0;\n}\n.tab li {\n  padding: 1rem;\n  width: 100%;\n  border-bottom: 2px solid #efefef;\n}\n.tab li.active {\n  border-bottom: 2px solid #333;\n  color: #333;\n  font-weight: bold;\n}\n.tab li:hover {\n  border-bottom: 2px solid #333;\n  color: #333;\n  font-weight: bold;\n  transition: 0.5s;\n}\n\n.cart_content {\n  padding: 0.5rem 0rem 1rem 0rem;\n  font-family: "Baloo Tamma 2";\n}\n@media (max-width: 575px) {\n  .cart_content {\n    padding: 0.5rem 1rem 0.5rem 0.5rem;\n  }\n}\n\n.list {\n  padding-left: 10px;\n  padding-right: 20px;\n}\n.list li {\n  position: relative;\n  padding-right: 2rem;\n}\n@media (max-width: 575px) {\n  .list li {\n    padding-right: 0;\n  }\n}\n.list li a.delete {\n  position: absolute;\n  opacity: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  text-decoration: none;\n  color: #333;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  background: #fff;\n  font-size: 30px;\n  background-image: url("https://i.imgur.com/7Q4RjFx.jpg");\n  background-size: contain;\n}\n@media (max-width: 575px) {\n  .list li a.delete {\n    opacity: 1;\n    width: 12px;\n    height: 12px;\n  }\n}\n.list li:hover a.delete {\n  opacity: 1;\n}\n\n.list_footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.5rem 2rem 1rem 2rem;\n  font-size: 14px;\n  font-family: "Baloo Tamma 2";\n  font-weight: bold;\n}\n.list_footer a {\n  color: #9f9a91;\n  text-decoration: none;\n}\n@media (max-width: 575px) {\n  .list_footer {\n    padding: 1.5rem 0 1rem 0.5rem;\n  }\n}\n\n.checkbox {\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 100%;\n  display: block;\n  padding-left: 44px;\n  cursor: pointer;\n}\n.checkbox span {\n  display: block;\n  padding: 1rem 0;\n  border-bottom: 1px solid #eee;\n  line-height: 1.5;\n}\n@media (max-width: 575px) {\n  .checkbox span {\n    padding-right: 1rem;\n  }\n}\n.checkbox input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  cursor: pointer;\n  display: block;\n  height: 100%;\n  width: 100%;\n  margin: 0;\n}\n.checkbox span::before {\n  content: "";\n  position: absolute;\n  left: 0.5rem;\n  top: 50%;\n  transform: translateY(-50%) scale(1);\n  height: 20px;\n  width: 20px;\n  border-radius: 5px;\n  border: 1px solid #333;\n  pointer-events: none;\n  transition: 0.3s ease;\n}\n.checkbox span::after {\n  content: "";\n  position: absolute;\n  left: 14px;\n  top: 27%;\n  transform: rotate(45deg);\n  height: 15px;\n  width: 0.5rem;\n  border-radius: 1px;\n  border-bottom: 3px solid #1d4289;\n  border-right: 3px solid #1d4289;\n  pointer-events: none;\n  opacity: 0;\n  transition: 0.3s ease;\n}\n.checkbox input:checked ~ span {\n  color: #9f9a91;\n  text-decoration: line-through;\n}\n.checkbox input:checked ~ span::before {\n  border-color: transparent;\n  transform: translateY(-50%) scale(0);\n}\n.checkbox input:checked ~ span::after {\n  opacity: 1;\n}\n\n.swal2-icon-content {\n  padding-top: 15px;\n}\n\ninput[type=text] {\n  width: 88%;\n}',""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var f=t(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(u);else{var m=r(u,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),c=t(565),s=t.n(c),l=t(216),d=t.n(l),p=t(589),f=t.n(p),u=t(443),m={};m.styleTagTransform=f(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),e()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals;const h=document.querySelector("#input_txt"),g=document.querySelector("#add_btn");let x=[];function b(){let n={content:h.value,id:(new Date).getTime(),checked:""};""!=n.content.trim()?(x.unshift(n),localStorage.setItem("content",x),h.value="",k()):Swal.fire({title:" Please fill in it ! ",icon:"warning",confirmButtonColor:"#1d4289"})}g.addEventListener("click",b),h.addEventListener("keyup",(n=>{"Enter"===n.key&&b()}));const y=document.querySelector("#inner_list");y.addEventListener("click",(n=>{let e=parseInt(n.target.closest("li").dataset.id);if(n.target.classList.contains("delete")){n.preventDefault();let t=n.target.closest("li").querySelector("span").textContent;Swal.fire({title:" Are you sure ",text:` Confirm delete "${t}" ? `,icon:"warning",showCancelButton:!0,confirmButtonColor:"#1d4289",cancelButtonColor:"#c9082a",confirmButtonText:"Yes, delete it!"}).then((n=>{n.isConfirmed&&(x=x.filter((n=>n.id!==e)),Swal.fire("Deleted!","Your item has been deleted.","success"),k())}))}else x.forEach((n=>{n.id===e&&(""===n.checked?n.checked="checked":n.checked="")}));k()}));let v="all";function k(){let n=[];n="all"===v?x:"work"===v?x.filter((n=>""===n.checked)):x.filter((n=>"checked"===n.checked)),document.querySelector("#work_num").textContent=x.filter((n=>""===n.checked)).length,function(n){let e="";n.forEach((n=>{e+=`<li data-id="${n.id}">\n          <label class="checkbox" for="">\n            <input type="checkbox" ${n.checked}/>\n            <span>${n.content}</span>\n          </label>\n          <a href="#" class="delete" id="btn_del"></a>\n     </li>`})),y.innerHTML=e}(n)}tab_list.addEventListener("click",(function(n){v=n.target.dataset.tab,document.querySelectorAll("#tab_list li").forEach((n=>{n.dataset.tab===v?n.classList.add("active"):n.classList.remove("active")})),k()}))})()})();