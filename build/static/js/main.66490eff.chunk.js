(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n(63)},61:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var l=n(1),a=n.n(l),i=n(30),u=n.n(i),c=n(11),r=n(0),m=n(3),d=n(16),o=n.n(d);var s=function(){var e=Object(r.l)(),t=Object(l.useState)([]),n=Object(m.a)(t,2),i=n[0],u=n[1],d=Object(l.useState)({action:"delete"}),s=Object(m.a)(d,2),E=s[0],h=s[1],g=[];Object(l.useEffect)(function(){fetch("api/index.php?action=getProducts").then(function(e){return e.json()}).then(function(e){u(e)}).catch(function(e){console.log("There was a problem with reading data: "+e)})},[]);var y=function(e){var t=JSON.stringify(e.target.value);g.includes(t)?g.splice(g.indexOf(t),1):g.push(t);var n={sku:g};h(Object.assign(E,n))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("main",null,a.a.createElement("h2",null,"Product List"),a.a.createElement("form",{onSubmit:function(t){t.preventDefault(),null!=E.sku&&E.sku.length>0&&(o.a.get("api/index.php?data="+JSON.stringify(E)),setTimeout(e,200,0))}},a.a.createElement("div",{className:"form-btn"},a.a.createElement(c.b,{to:"/add-product"},a.a.createElement("button",{type:"button",className:"custom-btn"},"ADD")),a.a.createElement("button",{type:"submit",id:"delete-product-btn",className:"custom-btn"},"MASS DELETE")),a.a.createElement("div",{className:"form-body"}),i.map(function(e){var t;return null!=e.weight?t="Weight: "+e.weight+"KG":null!=e.size?t="Size: "+e.size+" MB":null!=e.dimensions&&(t="Dimensions: "+e.dimensions),a.a.createElement("div",{className:"item-container",key:e.sku},a.a.createElement("input",{type:"checkbox",className:"delete-checkbox",name:"SKU",value:e.sku,onChange:y}),a.a.createElement("p",null,e.sku),a.a.createElement("p",null,e.name),a.a.createElement("p",null,e.price," $"),a.a.createElement("p",null,t))}))),a.a.createElement("footer",null,a.a.createElement("h6",null,"\xa9 2022 Dominik Molenda")))},E=n(4),h=n(19);var g=function(){var e=Object(r.l)(),t=Object(l.useState)({action:"add",sku:"",name:"",price:"",size:"",height:"",width:"",length:"",weight:"",dimensions:"",type:""}),n=Object(m.a)(t,2),i=n[0],u=n[1],d=Object(l.useState)([]),s=Object(m.a)(d,2),g=s[0],y=s[1];Object(l.useEffect)(function(){fetch("api/index.php?action=getProducts").then(function(e){return e.json()}).then(function(e){y(e)}).catch(function(e){console.log("There was a problem with reading data: "+e)})},[]);var b=function(e){u(Object(h.a)({},i,Object(E.a)({},e.target.name,e.target.value)))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("main",null,a.a.createElement("h2",null,"Product Add"),a.a.createElement("form",{id:"product_form",onSubmit:function(t){var n=!1;t.preventDefault(),g.forEach(function(e){if(i.sku===e.sku)return alert("field SKU must be unique"),void(n=!0)}),""===i.sku&&(alert("field SKU must not be empty"),n=!0),n||(""!==i.height&&""!==i.width&&""!==i.length&&(i.dimensions=i.height+"x"+i.width+"x"+i.length),o.a.get("api/index.php?data="+JSON.stringify(i)),window.setTimeout(e,100,"/"))}},a.a.createElement("div",{className:"form-btn"},a.a.createElement("button",{type:"submit",className:"custom-btn"},"Save"),a.a.createElement(c.b,{to:"/"},a.a.createElement("button",{type:"button",className:"custom-btn"},"Cancel"))),a.a.createElement("div",{className:"form-body"}),a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("label",null,"SKU")),a.a.createElement("td",null,a.a.createElement("input",{type:"text",id:"sku",name:"sku",onChange:b,value:i.sku}))),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("label",null,"Name")),a.a.createElement("td",null,a.a.createElement("input",{type:"text",id:"name",name:"name",onChange:b,value:i.name}))),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("label",null,"Price ($)")),a.a.createElement("td",null,a.a.createElement("input",{type:"text",id:"price",name:"price",onChange:b,value:i.price}))),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("label",null,"Type Switcher")),a.a.createElement("td",{className:"center-input"},a.a.createElement("select",{id:"productType",name:"type",onChange:function(e){switch(u(Object(h.a)({},i,Object(E.a)({},e.target.name,e.target.value))),document.getElementById("productType").value){case"DVD":document.getElementById("DVD").style.visibility="visible",document.getElementById("Book").style.visibility="hidden",document.getElementById("FurnitureH").style.visibility="hidden",document.getElementById("FurnitureW").style.visibility="hidden",document.getElementById("FurnitureL").style.visibility="hidden",i.height="",i.width="",i.length="",i.weight="",document.getElementById("height").value=i.height,document.getElementById("width").value=i.width,document.getElementById("length").value=i.length,document.getElementById("weight").value=i.weight;break;case"Book":document.getElementById("DVD").style.visibility="hidden",document.getElementById("Book").style.visibility="visible",document.getElementById("FurnitureH").style.visibility="hidden",document.getElementById("FurnitureW").style.visibility="hidden",document.getElementById("FurnitureL").style.visibility="hidden",i.height="",i.width="",i.length="",i.size="",document.getElementById("size").value=i.size,document.getElementById("height").value=i.height,document.getElementById("width").value=i.width,document.getElementById("length").value=i.length;break;case"Furniture":document.getElementById("DVD").style.visibility="hidden",document.getElementById("Book").style.visibility="hidden",document.getElementById("FurnitureH").style.visibility="visible",document.getElementById("FurnitureW").style.visibility="visible",document.getElementById("FurnitureL").style.visibility="visible",i.size="",i.weight="",document.getElementById("size").value=i.size,document.getElementById("weight").value=i.weight}},defaultValue:"DEFAULT",required:!0},a.a.createElement("option",{value:"DEFAULT",disabled:!0}),a.a.createElement("option",{value:"DVD"},"DVD"),a.a.createElement("option",{value:"Book"},"Book"),a.a.createElement("option",{value:"Furniture"},"Furniture")))),a.a.createElement("tr",{id:"DVD"},a.a.createElement("td",null,a.a.createElement("label",null,"Size (MB)")),a.a.createElement("td",null,a.a.createElement("input",{type:"text",id:"size",name:"size",onChange:b,value:i.size}))),a.a.createElement("tr",{id:"FurnitureH"},a.a.createElement("td",null,a.a.createElement("label",null,"Height (CM)")),a.a.createElement("td",null,a.a.createElement("input",{type:"text",id:"height",name:"height",onChange:b,value:i.height}))),a.a.createElement("tr",{id:"FurnitureW"},a.a.createElement("td",null,a.a.createElement("label",null,"Width (CM)")),a.a.createElement("td",null,a.a.createElement("input",{type:"text",id:"width",name:"width",onChange:b,value:i.width}))),a.a.createElement("tr",{id:"FurnitureL"},a.a.createElement("td",null,a.a.createElement("label",null,"Length (CM)")),a.a.createElement("td",null,a.a.createElement("input",{type:"text",id:"length",name:"length",onChange:b,value:i.length}))),a.a.createElement("tr",{id:"Book"},a.a.createElement("td",null,a.a.createElement("label",null,"Weight (KG)")),a.a.createElement("td",null,a.a.createElement("input",{type:"text",id:"weight",name:"weight",onChange:b,value:i.weight}))))))),a.a.createElement("footer",null,a.a.createElement("h6",null,"\xa9 2022 Dominik Molenda")))};n(61);var y=function(){return a.a.createElement(c.a,null,a.a.createElement(r.c,null,a.a.createElement(r.a,{path:"/",exact:!0,element:a.a.createElement(s,null)}),a.a.createElement(r.a,{path:"/add-product",element:a.a.createElement(g,null)})))};u.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(y,null)))}},[[31,2,1]]]);
//# sourceMappingURL=main.66490eff.chunk.js.map