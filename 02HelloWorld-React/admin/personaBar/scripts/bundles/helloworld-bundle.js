!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}var t=n(1),o=e(t),r=n(11),u=n(12),l=n(8),i=e(l),a=n(5),c=e(a),f=(0,i["default"])(),d=document.getElementById("helloworld-container");(0,r.render)(o["default"].createElement(u.Provider,{store:f},o["default"].createElement(c["default"],null)),d)}).call(this)}finally{}},function(e,t){e.exports=window.dnn.nodeModules.React},function(e,t){e.exports=window.dnn.nodeModules.Redux},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(1),a=e(i),c=n(10),f=e(c),d=n(9),s=e(d),p=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),l(t,[{key:"render",value:function(){return a["default"].createElement("div",null,a["default"].createElement(s["default"],{isOpen:"true"},a["default"].createElement(f["default"],{title:"Hello World"})))}}]),t}(i.Component);t["default"]=p}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=e(o),u=n(13),l=n(15),i=e(l),a=n(14),c=e(a);t["default"]=(0,u.createDevTools)(r["default"].createElement(c["default"],{toggleVisibilityKey:"ctrl-h",changePositionKey:"ctrl-q"},r["default"].createElement(i["default"],null)))}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";e.exports=n(6)}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(1),a=e(i),c=n(3),f=e(c),d=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),l(t,[{key:"render",value:function(){return a["default"].createElement("div",null,a["default"].createElement(f["default"],null))}}]),t}(i.Component);t["default"]=d}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=n(2),o=(0,e.combineReducers)({});t["default"]=o}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=(0,r.createStore)(f["default"],e,(0,r.compose)((0,r.applyMiddleware)(l["default"],(0,a["default"])()),s["default"].instrument()));return t}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(2),u=n(17),l=e(u),i=n(16),a=e(i),c=n(7),f=e(c),d=n(4),s=e(d)}).call(this)}finally{}},function(e,t){e.exports=window.dnn.nodeModules.CommonComponents.PersonaBarPage},function(e,t){e.exports=window.dnn.nodeModules.CommonComponents.PersonaBarPageHeader},function(e,t){e.exports=window.dnn.nodeModules.ReactDOM},function(e,t){e.exports=window.dnn.nodeModules.ReactRedux},function(e,t){e.exports=window.dnn.nodeModules.ReduxDevTools},function(e,t){e.exports=window.dnn.nodeModules.ReduxDevToolsDockMonitor},function(e,t){e.exports=window.dnn.nodeModules.ReduxDevToolsLogMonitor},function(e,t){e.exports=window.dnn.nodeModules.ReduxImmutableStateInvariant},function(e,t){e.exports=window.dnn.nodeModules.ReduxThunk}]);