/*! Formstone v0.0.1 [number.js] 2015-01-26 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(){t=b.$body}function e(a){a.min=parseFloat(this.attr("min"))||!1,a.max=parseFloat(this.attr("max"))||!1,a.step=parseFloat(this.attr("step"))||1,a.timer=null,a.digits=m(a.step),a.disabled=this.prop("disabled");var b="";b+='<button class="'+[q.arrow,q.up].join(" ")+'">'+a.labels.up+"</button>",b+='<button class="'+[q.arrow,q.down].join(" ")+'">'+a.labels.down+"</button>",this.wrap('<div class="'+[q.base,a.customClass,a.disabled?q.disabled:""].join(" ")+'"></div>').after(b),a.$container=this.parent(p.base),a.$arrows=a.$container.find(p.arrow),this.on(r.keyPress,p.element,a,i),a.$container.on([r.touchStart,r.mouseDown].join(" "),p.arrow,a,j)}function f(a){a.$arrows.remove(),this.unwrap().off(r.namespace)}function g(a){a.disabled&&(this.prop("disabled",!1),a.$container.removeClass(q.disabled),a.disabled=!1)}function h(a){a.disabled||(this.prop("disabled",!0),a.$container.addClass(q.disabled),a.disabled=!0)}function i(a){var b=a.data;(38===a.keyCode||40===a.keyCode)&&(a.preventDefault(),l(b,38===a.keyCode?b.step:-b.step))}function j(b){s.killEvent(b),k(b);var c=b.data;if(!c.disabled){var d=a(b.target).hasClass(q.up)?c.step:-c.step;c.timer=s.startTimer(c.timer,110,function(){l(c,d,!1)},!0),l(c,d),t.on([r.touchEnd,r.mouseUp].join(" "),c,k)}}function k(a){s.killEvent(a);var b=a.data;s.clearTimer(b.timer,!0),t.off(r.namespace)}function l(a,b){var d=parseFloat(a.$el.val()),e=b;typeof d===c||isNaN(d)?e=a.min!==!1?a.min:0:a.min!==!1&&d<a.min?e=a.min:e+=d;var f=(e-a.min)%a.step;0!==f&&(e-=f),a.min!==!1&&e<a.min&&(e=a.min),a.max!==!1&&e>a.max&&(e-=a.step),e!==d&&(e=n(e,a.digits),a.$el.val(e).trigger(r.raw.change))}function m(a){var b=String(a);return b.indexOf(".")>-1?b.length-b.indexOf(".")-1:0}function n(a,b){var c=Math.pow(10,b);return Math.round(a*c)/c}var o=b.Plugin("number",{widget:!0,defaults:{customClass:"",labels:{up:"Up",down:"Down"}},classes:["arrow","up","down","disabled"],methods:{_setup:d,_construct:e,_destruct:f,enable:g,disable:h},events:{tap:"tap"}}),p=o.classes,q=p.raw,r=o.events,s=o.functions,t=null}(jQuery,Formstone);