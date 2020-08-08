(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{152:function(t,e,n){"use strict";n.r(e);var _={data:function(){return{title:"Cities Refference",base_url:"https://alamat.thecloudalert.com/api/kabkota/"}},head:function(){return{title:this.title}}},l=n(19),component=Object(l.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section"},[n("div",{staticClass:"container"},[n("nav",{staticClass:"breadcrumb",attrs:{"aria-label":"breadcrumbs"}},[n("ul",{staticClass:"breadcrumbs"},[n("li",{},[n("NuxtLink",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",{},[n("NuxtLink",{attrs:{to:"/api/"}},[t._v("Start using the API")])],1),t._v(" "),n("li",{staticClass:"unavailable"},[t._v("Cities Refference")])])]),t._v(" "),n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("div",{staticClass:"content"},[n("h1",[t._v(t._s(this.title))]),t._v(" "),n("p",[t._v("This is the completed refference for Cities Data.")]),t._v(" "),n("h2",[t._v("Get Cities")]),t._v(" "),n("p",[t._v("API endpoint for generating the list of cities in Indonesia by Province ID.")]),t._v(" "),n("p",[n("code",[t._v(t._s(t.base_url)+"get/?d_provinsi_id=[ID_FROM_PROVINCE_API]")])]),t._v(" "),n("p",[t._v("And the example result is")]),t._v(" "),n("p",[n("code",[t._v(t._s(t.base_url)+"get/?d_provinsi_id=1")])]),t._v(" "),n("pre",[t._v('{\n  "status": 200,\n  "message": "Berhasil",\n  "result": [\n    {\n      "id": "1",\n      "text": "Kabupaten Badung"\n    },\n    {\n      "id": "2",\n      "text": "Kabupaten Bangli"\n    }\n  ]\n}\n            ')]),t._v(" "),n("h2",[t._v("Get Detail")]),t._v(" "),n("p",[t._v("Get detailed information about a city by city ID.")]),t._v(" "),n("p",[n("code",[t._v(t._s(t.base_url)+"detail/?d_kabkota_id=[ID_FROM_CITIES_API]")])]),t._v(" "),n("p",[t._v("And the example result is")]),t._v(" "),n("p",[n("code",[t._v(t._s(t.base_url)+"detail/?d_kabkota_id=1")])]),t._v(" "),n("pre",[t._v('{\n  "status": 200,\n  "message": "Berhasil",\n  "result": {\n    "id": "1",\n    "d_provinsi_id": "1",\n    "nama": "Kabupaten Badung",\n    "latitude": "-8.5819296000000",\n    "longitude": "100.0000000000000"\n  }\n}\n            ')])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);