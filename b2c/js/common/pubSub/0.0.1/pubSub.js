define("common/pubSub/0.0.1/pubSub",["common/createClass/0.0.1/createClass"],function(a){function b(a,b){var c=this,d=c.getAttr("events");if("string"!=typeof a)throw new Error("方法 bind(eventName, callback) 的参数eventName 必须为字符串");"object"!=typeof d&&(d={}),d[a]instanceof Array||(d[a]=[]),"function"==typeof b&&d[a].push(b),c.setAttr("events",d)}function c(a,b){var c=this,d=c.getAttr("events");if(0===arguments.length)d=null,d={},c.setAttr("events",d);else if(1===arguments.length){if("string"!=typeof a)throw new Error("方法 unbind(eventName, callback) 的参数 eventName 必须为字符串");d&&d[a]instanceof Array&&(d[a].length=0)}else{if("string"!=typeof a)throw new Error("方法 unbind(eventName, callback) 的参数 eventName 必须为字符串");if(d&&d[a]instanceof Array)if("function"==typeof b)for(var e=d[a],f=e.length-1;f>=0;f--)e[f]===b&&e.splice(f,1);else d[a].length=0}return c.setAttr("events",d),c}function d(a){var b=this,c=b.getAttr("events"),d=Array.prototype.slice.apply(arguments);if(a=d.shift(),"string"!=typeof a)throw new Error("方法 trigger(eventName) 的参数eventName 必须为字符串");if(c&&c[a]instanceof Array)for(var e=0,f=c[a].length;f>e;e++)if("function"==typeof c[a][e]){var g=c[a][e].apply(b,d);if(g===!1)break}return b}function e(a,b){if("string"!=typeof a)throw new Error("函数 eachEvents(eventsName) 的参数 eventsName 必须为字符串");a=f(a);for(var c,d=0,e=a.length;e>d;d++)c=a[d],"function"==typeof b&&b(c)}function f(a){return a.split(h)}var g=a("common/createClass/0.0.1/createClass"),h=",",i=g({methods:{bind:function(a,c){{var d=this;d.getAttr("events")}return e(a,function(a){b.apply(d,[a,c])}),d},unbind:function(a){var b=this,d=b.getAttr("events");if(0===arguments.length)d=null,d={},b.setAttr("events",d);else{var f=Array.prototype.slice.apply(arguments);f.shift(),e(a,function(a){var d=f.slice();d.unshift(a),c.apply(b,d)})}return b},trigger:function(a){var b=this,c=Array.prototype.slice.apply(arguments);return 0===arguments.length?b:(a=c.shift(),e(a,function(a){var e=c.slice();e.unshift(a),d.apply(b,e)}),b)},on:function(a,b){var c=this;return 1===arguments.length?c.trigger(a):arguments.length>1&&c.bind(a,b),c},off:function(a,b){var c=this;return c.unbind(a,b),c},once:function(a,b){"function"==typeof b&&this.bind(a,function(){b.apply(this,arguments),this.unbind(a,arguments.callee)})}}});return i});