BizQQWPA.define("util.cookie",function(){var doc=document;return{set:function(name,value,domain,path,expires){if(expires){expires=new Date(+new Date+expires)}var tempcookie=name+"="+escape(value)+(expires?"; expires="+expires.toGMTString():"")+(path?"; path="+path:"")+(domain?"; domain="+domain:"");if(tempcookie.length<4096){doc.cookie=tempcookie}},get:function(name){var carr=doc.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));if(carr!=null){return unescape(carr[2])}return null},del:function(name,domain,path){if(this.get(name)){doc.cookie=name+"="+(path?"; path="+path:"")+(domain?"; domain="+domain:"")+";expires=Thu, 01-Jan-1970 00:00:01 GMT"}},find:function(pattern){return doc.cookie.match(pattern).split(",")}}});