/*!
 * froala_editor v2.7.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2018 Froala Labs
 */


!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c)}:a(window.jQuery)}(function(a){a.FE.URLRegEx="(^| |\\u00A0)("+a.FE.LinkRegEx+"|([a-z0-9+-_.]{1,}@[a-z0-9+-_.]{1,}\\.[a-z0-9+-_]{1,}))$",a.FE.PLUGINS.url=function(b){function c(a,c,d){for(var e="";d.length&&"."==d[d.length-1];)e+=".",d=d.substring(0,d.length-1);var f=d;if(b.opts.linkConvertEmailAddress)b.helpers.isEmail(f)&&!/^mailto:.*/i.test(f)&&(f="mailto:"+f);else if(b.helpers.isEmail(f))return c+d;return/^((http|https|ftp|ftps|mailto|tel|sms|notes|data)\:)/i.test(f)||(f="//"+f),(c?c:"")+"<a"+(b.opts.linkAlwaysBlank?' target="_blank"':"")+(j?' rel="'+j+'"':"")+' data-fr-linked="true" href="'+f+'">'+d.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&amp;/g,"&").replace(/&/g,"&amp;")+"</a>"+e}function d(){return new RegExp(a.FE.URLRegEx,"gi")}function e(a){return b.opts.linkAlwaysNoFollow&&(j="nofollow"),b.opts.linkAlwaysBlank&&(j?j+=" noopener noreferrer":j="noopener noreferrer"),a.replace(d(),c)}function f(a){return a?"A"===a.tagName?!0:a.parentNode&&a.parentNode!=b.el?f(a.parentNode):!1:!1}function g(a){var b=a.split(" ");return b[b.length-1]}function h(){var c=b.selection.ranges(0),h=c.startContainer;if(!h||h.nodeType!==Node.TEXT_NODE)return!1;if(f(h))return!1;if(d().test(g(h.textContent))){a(h).before(e(h.textContent));var i=a(h.parentNode).find("a[data-fr-linked]");i.removeAttr("data-fr-linked"),h.parentNode.removeChild(h),b.events.trigger("url.linked",[i.get(0)])}else if(h.textContent.split(" ").length<=2&&h.previousSibling&&"A"===h.previousSibling.tagName){var j=h.previousSibling.innerText+h.textContent;d().test(g(j))&&(a(h.previousSibling).replaceWith(e(j)),h.parentNode.removeChild(h))}}function i(){b.events.on("keypress",function(c){var d=c.which;!b.selection.isCollapsed()||d!=a.FE.KEYCODE.ENTER&&d!=a.FE.KEYCODE.SPACE&&"."!=c.key&&")"!=c.key&&"("!=c.key||h()},!0)}var j=null;return{_init:i}}});