

UseData.Database={link:function(e){try{var t=e?window.localStorage:window.sessionStorage;if(!t){console.log("Your browser does not support local storage.")}return t}catch(n){}},get:function(e,t,n){try{if((hLink=this.link(n))&&(json=hLink.getItem(e))&&!json.match(/^undefined$/)){var r=JSON.parse(json);return r&&t?r[t]:r}}catch(i){}},set:function(e,t,n){try{if(hLink=this.link(n)){hLink.setItem(e,JSON.stringify(t))}}catch(r){}},del:function(e,t){try{if(hLink=this.link(t)){hLink.removeItem(e)}}catch(n){}}};
UseData.Base64={map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){"use strict";var t="",n=0,r=this.map,i,s,o,u,a,f,l;e=this.utf8.encode(e);while(n<e.length){i=e.charCodeAt(n++);s=e.charCodeAt(n++);o=e.charCodeAt(n++);u=i>>2;a=(i&3)<<4|s>>4;f=isNaN(s)?64:(s&15)<<2|o>>6;l=isNaN(s)||isNaN(o)?64:o&63;t=t+r.charAt(u)+r.charAt(a)+r.charAt(f)+r.charAt(l)}return t},decode:function(e){"use strict";var t="",n=0,r=this.map,i=String.fromCharCode,s,o,u,a,f,l,c;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(n<e.length){s=r.indexOf(e.charAt(n++));o=r.indexOf(e.charAt(n++));u=r.indexOf(e.charAt(n++));a=r.indexOf(e.charAt(n++));f=s<<2|o>>4;l=(o&15)<<4|u>>2;c=(u&3)<<6|a;t=t+(i(f)+(u!=64?i(l):""))+(a!=64?i(c):"")}return this.utf8.decode(t)},utf8:{encode:function(e){"use strict";var t="",n=0,r=String.fromCharCode,i;while(n<e.length){i=e.charCodeAt(n++);t=t+(i<128?r(i):i>127&&i<2048?r(i>>6|192)+r(i&63|128):r(i>>12|224)+r(i>>6&63|128)+r(i&63|128))}return t},decode:function(e){"use strict";var t="",n=0,r=String.fromCharCode,i,s;while(n<e.length){s=e.charCodeAt(n);t=t+(s<128?[r(s),n++][0]:s>191&&s<224?[r((s&31)<<6|(i=e.charCodeAt(n+1))&63),n+=2][0]:[r((s&15)<<12|((i=e.charCodeAt(n+1))&63)<<6|(c3=e.charCodeAt(n+2))&63),n+=3][0])}return t}}};if(typeof JSON!=="object"){JSON={}}(function(){"use strict";function f(e){return e<10?"0"+e:e}function quote(e){escapable.lastIndex=0;return escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t==="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];if(a&&typeof a==="object"&&typeof a.toJSON==="function"){a=a.toJSON(e)}if(typeof rep==="function"){a=rep.call(t,e,a)}switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a){return"null"}gap+=indent;u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1){u[n]=str(n,a)||"null"}i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]";gap=o;return i}if(rep&&typeof rep==="object"){s=rep.length;for(n=0;n<s;n+=1){if(typeof rep[n]==="string"){r=rep[n];i=str(r,a);if(i){u.push(quote(r)+(gap?": ":":")+i)}}}}else{for(r in a){if(Object.prototype.hasOwnProperty.call(a,r)){i=str(r,a);if(i){u.push(quote(r)+(gap?": ":":")+i)}}}}i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}";gap=o;return i}}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;if(typeof JSON.stringify!=="function"){JSON.stringify=function(e,t,n){var r;gap="";indent="";if(typeof n==="number"){for(r=0;r<n;r+=1){indent+=" "}}else if(typeof n==="string"){indent=n}rep=t;if(t&&typeof t!=="function"&&(typeof t!=="object"||typeof t.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":e})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i==="object"){for(n in i){if(Object.prototype.hasOwnProperty.call(i,n)){r=walk(i,n);if(r!==undefined){i[n]=r}else{delete i[n]}}}}return reviver.call(e,t,i)}var j;text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}})();

function UseData(){}
UseData.ok = false;
UseData.callback = [];
UseData.jqr = false;

UseData.def = {
	track_zone: '_usedata_zone',
	track_data: '_usedata_data',
};

UseData.fun = function(name, args){
	var namespaces = name.split(".");
	var func = namespaces.pop();
	var context = window;

	for(var i = 0; i < namespaces.length; i++) {
		context = context[namespaces[i]];
		if(context == null) return;
	}
  
	return (typeof(context[func]) == 'function') ? 
		context[func].apply(context, args) :
		null;
};

UseData.jquery = function(){
	var jqr = (UseData.jqr || jQuery);
	if(arguments.length>0){
		return jqr.apply(undefined, arguments);
	} else {
		return jqr;
	}
};

UseData.message = function(sel, data){
	UseData.jquery(sel).map(function(){
		UseData.jquery(this).get(0).contentWindow.postMessage(data, '*');
	});
};

UseData.iframe = function(div, iframe){
	iframe = UseData.jquery().extend(true, { 
		scrolling	: 'no',
		frameborder	: 0,
		css: {
			border				: '0px none',
		  	'vertical-align'	: 'bottom'
		}
    }, iframe);
    
	div = UseData.jquery().extend(true, {
		css: { 
			position 		: 'fixed', 
			top 			: 'auto', 
			bottom 			: 0,
			right 			: 0, 
			'z-index'		: 2147483647,
			display			: 'none', 
			background		: 'transparent',
			'class'			: 'usedata__widget',
		},
		html: UseData.jquery("<iframe>", iframe)
	}, div);
	
	UseData.jquery('<div>', div).appendTo('body');
 };

UseData.getUseDataQuery = function(dst){
	dst = dst || {};
	var data = window.location.search.match(/usedata\=([^\&]+)/);
	if(data && data[1]) {
		try { 
		  var query = UseData.Base64.decode(data[1]);
		  if (query) {
			var vars = query.split('&');
			for (var i = 0; i < vars.length; i++) {
			    var pair = vars[i].split('=');
			    dst[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
			}
		  }
		} 
		catch(e){}
	}
	
	return dst;
};

UseData.getQuery = function(str){
	var params = {}, queries, bit, i, l;
    queries = str.replace("?", "").split("&");
    for(i = 0, l = queries.length; i < l; i++){
    	bit = queries[i].split('=');
        first = decodeURIComponent(bit[0]);
        if(first.length == 0) continue;
        
        second = decodeURIComponent(bit[1]);
        if(typeof params[first] == "undefined") params[first] = second;
        else if(params[first] instanceof Array) params[first].push(second);
        else params[first] = [params[first], second];
    }
    return params;
};

UseData.makeUrl = function(url, params) {
	var a = document.createElement('a');
	a.href = url;
	
	if(a.search){
		params = UseData.jquery().extend({}, UseData.getQuery(a.search), params);
		a.search = '';
	}
	UseData.jquery().each(params, function(key, value){
		var param = encodeURIComponent(key);
		param += (value ? "=" + encodeURIComponent(value) : ""); 
		a.search += (a.search ? "&" : "") + param;
	});
   
   return a.href;
};

UseData.head = function(src){
   if(src.match(/\.css$/) ){
	   var mn=document.createElement("link");
	   mn.rel  = 'stylesheet';
	   mn.type = 'text/css';
	   mn.href = src;
   } else {
	   var mn=document.createElement('script');
	   mn.async = 1;
	   mn.src   = src;
   }
   
   if (typeof mn != "undefined"){
	   document.getElementsByTagName("head")[0].appendChild(mn);
   }   
};

UseData.insertScript = function(src){
   var s=document.getElementsByTagName('script')[0], 
   mn=document.createElement('script');
   mn.async=1;
   mn.setAttribute('type', 'text/javascript');
   mn.innerHTML=src;
   s.parentNode.insertBefore(mn, s);
};

UseData.session = function(){
	var session_id = UseData.Database.get('_usedata_session_id');
	if(!session_id){
		return '{{SERVER||SESSION}}';
	}	
	return session_id;
};

UseData.post = function(data, fun){
	if(!UseData.api.identity){
		console.log('Please provide a API Key');
	}
	else{
		UseData.jquery().ajax({			
			jsonp: "p",
			cache: false,
			dataType: "jsonp",
			url: UseData.api.track,
			data:{
				api_key: UseData.api.identity,
				usedata: UseData.Base64.encode(JSON.stringify(data))
			},
			success: function(response){
				if(fun && 'function' == typeof(fun)){
					fun.call(this, response);
				}	
			}
		});
	}
};

UseData.replace = function(str, row){
	return str.replace(/{([^}]+)}/g, function( match, key ){
	    return row[ key ] ? row[ key ] : '';
	});
};

UseData.User = {	
	data: function(){
		return {url: location.href};
	},
	
	zone: function(){}
};

function loadScript(url, callback){
	 
    var script = document.createElement("script")
    script.type = "text/javascript";
 
    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }
 
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}



	UseData.getUseDataQuery = function(dst){
	dst = dst || {};
	var data = window.location.search.match(/usedata\=([^\&]+)/);
	if(data && data[1]) {
		try { 
		  var query = UseData.Base64.decode(data[1]);
		  if (query) {
		    dst.data = {};
			var vars = query.split('&');
			for (var i = 0; i < vars.length; i++) {
			    var pair = vars[i].split('=');
			    dst.data[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
			}
		  }
		} 
		catch(e){}
	}
	
	return dst;
};

UseData.track = function($){
	if(UseData.ok)
		return false;
		
	UseData.ok = true;
	
	UseData.Database.set('_usedata_store_dst', UseData.getUseDataQuery(UseData.User.data()));
		
	var zone = UseData.Database.get('_usedata_store_zone');
	var	src = UseData.Database.get('_usedata_store_src');
	if(src && zone){
		src['zone'] = zone['name'];
	}
	
	UseData.post({
		"actor": {
			"action":"view",
			"project":(UseData.api.identity || 0),
			"session":UseData.session(),
			"reqtime":"{{SERVER||TIME}}",
			"cookie":"{{SERVER||COOKIE}}",
			"clientip":"{{REMOTE||ADDRESS}}",
			"newsess":"{{REMOTE||NEWSESSION}}",
			"newcooki":"{{REMOTE||NEWCOOKIE}}"
		},
		"src": (src || {"url":document.referrer}),
		"dst": UseData.Database.get('_usedata_store_dst')
	}, 
	function(response){
		UseData.ok = false;
		if(!UseData.Database.get('_usedata_session_id') && response && response['session_id']){
			UseData.Database.set('_usedata_session_id', response['session_id']);
		}	
	});
		
	UseData.Database.set('_usedata_store_src', UseData.Database.get('_usedata_store_dst'));	
	UseData.Database.del('_usedata_store_zone');	
	UseData.User.zone();
};

UseData.trackEvent = function($, act, fun){	
	if(UseData.ok)
		return false;
		
	UseData.ok = true;
	UseData.Database.set('_usedata_store_dst', UseData.User.data());
	
	if(typeof(fun) == "function"){
		fun.call(this, UseData.Database.get('_usedata_store_dst'), UseData.Database.get('_usedata_store_src'), function(callback){
			var zone = UseData.Database.get('_usedata_store_zone');
			var	src = UseData.Database.get('_usedata_store_src');
			
			if(src && zone){
				src['zone'] = zone['name'];
			}
			
			UseData.post({
				"actor": {
					"action":(act || "view"),
					"project":(UseData.api.identity || 0),
					"session":UseData.session(),
					"reqtime":"{{SERVER||TIME}}",
					"cookie":"{{SERVER||COOKIE}}",
					"clientip":"{{REMOTE||ADDRESS}}",
					"newsess":"{{REMOTE||NEWSESSION}}",
					"newcooki":"{{REMOTE||NEWCOOKIE}}"
				},
				"src": (src || {"url":document.referrer}),
				"dst": UseData.Database.get('_usedata_store_dst')
			}, 
			function(response){
				UseData.ok = false;
				
				if(typeof(callback) == "function"){
					callback.call(this);
				}
			});
		});
	}
};

UseData.Targets = {};

UseData.Targets.update = function($){
	if(UseData.api.target){
		if(window.location.search){
			var params = UseData.getQuery(window.location.search);
			if(params["u"]){
				try {
					var query = UseData.getQuery(UseData.Base64.decode(params["u"]));
					if(query["usedata_cookie_id"]){
						$.ajax({			
							jsonp: "p",
							cache: false,
							dataType: "jsonp",
							url: UseData.api.target,
							data: {'cookieId' : query["usedata_cookie_id"]},
							success: function(response){}
						});
					}
				}
				catch(err) {}
			}
		}
	}
};

UseData.Recommendations = {};

UseData.Recommendations.opts = {};

UseData.Recommendations.replace = function(str, data){
	return str.replace(/{([^}]+)}/g, function(match, key, offset, old){
		return data[key];
	});
};






	UseData.Recommendations.opts = {"data":{"Plugins.YMIRS":{"data":{"pos":"BL","title":"Có thể bạn quan tâm","url":"(products|collections)(/[^/?]+)"}},"SALEMARKETING":{"data":{"address":"102/3 Đường số 21, Phường 8. Quận Gò Vấp. TpHCM","phone":"(+84) 08 2220 2156","twister":"http://twister.com","companyName":"Shop áo thun","facebook":"http://facebook.com","bannerLink":"https://dashboard.usedata.vn/assets/email/E00001/head-banner.jpg","logo":"https://dashboard.usedata.vn/assets/email/E00001/usedata-vn-logo-email.png","linkin":"http://linkin.com","homePage":"http://shop.aothun.vn/","email":"contact@usedata.vn"}},"recommend":{"data":{"enable":true}},"YMIRS":{"data":{"pos":"BL","title":"Có thể bạn quan tâm"}},"RCMRLT":{"data":{"max":6.0}},"target":{"data":{"enable":true}}},"params":{"data":{}}}
	
	UseData.Recommendations.ymirs = UseData.jquery().extend({}, {
	get: function(url, func){
		UseData.jquery().ajax({			
			jsonp: "p",
			cache: false,
			dataType: "jsonp",
			url: url,
			success: function(response){
				if(func && 'function' == typeof(func)){
					func.call(this, response);
				}	
			}
		});
	},
	
	/**
	 * 	display:
	 *		month=1|2|3|4|5|6|7|8|9|10|11|12
	 *		day=mon|tue|wed|thu|fri|sat|sun
	 *		time:start=1:30am&time:end=1:30pm
	 *		on:click=#name
	 *		url=^/collections/
	 *		fn:display_role=test,test
	 *		js=code
	 *
	 */
	exec: function(o){
		var data = o.getData();
		if(data && data.display){
			var ok = (data.display === 'ok') ? true : false;
			if(!ok){
				var params, match, key;
				if(params = UseData.getQuery(data.display)){
					for(key in params){
						if(match = key.match(/^(month|day|time|on|url|fn|js):?(.*)$/)){
							if(!this.display[match[1]].call(o, params[key], match[2])){
								return;
							}
						}
					}
					ok = true;
				}
			}
			
			if(ok){
				o.init();
			}
		}
	},
	
	display: {
		url: function(data, name){
			try {
				var reg = new RegExp(data);
				return reg.test(window.location.pathname);
			} catch(err) {
				console.log('UseData.*.display.url:' + err.message);
			}
			return false;
		},
		on: function(data, name){
			if(data && name){
				var self = this;
				UseData.jquery(data).on(name, function(){
					self.init();
				});
			}
			
			return false;
		},
		month: function(data, name){
			var list = data.split('|');
			var cur  = ((new Date()).getMonth() + 1);
			return (UseData.jquery().inArray(cur.toString(), list) != -1) ? true : false;
		},
		day: function(data, name){
			var days = data.split('|');
			var cur  = (new Date()).getDay();
			var list = {'sun':0, 'mon':1, 'tue':2, 'wed':3, 'thu':4, 'fri':5, 'sat':6};
			
			for(var key in days){
				if(list[days[key]] == cur)
					return true;
			}
			
			return false;
		},
		time: function(data, name){
			var now = (new Date()).getTime();
			var allow = UseData.Recommendations.ymirs.parseTime(data).getTime();
			return (name == 'start') ? (now >= allow) : (now <= allow);
		},
		fn: function(data, name){
			return UseData.fun(name, data.split(','));
		},
		js: function(cmd, name){
			try {
				var fn = new Function(cmd);
	            return fn();
			} catch(err) {
				console.log('UseData.*.display.js:' + err.message);
			}
			return false;
		}
	},
	
	parseTime: function(timeStr, dt) {
	    if (!dt) {
	        dt = new Date();
	    }

	    var time = timeStr.match(/(\d+)(?::(\d\d))?\s*(p?)/i);
	    if (!time) {
	        return NaN;
	    }
	    var hours = parseInt(time[1], 10);
	    if (hours == 12 && !time[3]) {
	        hours = 0;
	    }
	    else {
	        hours += (hours < 12 && time[3]) ? 12 : 0;
	    }

	    dt.setHours(hours);
	    dt.setMinutes(parseInt(time[2], 10) || 0);
	    dt.setSeconds(0, 0);
	    return dt;
	},
	
	post: function(url, data, fun){
		UseData.jquery().ajax({			
			jsonp: "p",
			cache: false,
			dataType: "jsonp",
			url: url,
			data:data,
			success: function(response){
				if(fun && 'function' == typeof(fun)){
					fun.call(this, response);
				}	
			}
		});
	},
	
	listener: function(){
		var receiveMessage = function(evt){
			var data = evt.data;
			if( typeof data == 'object' && data.fun){
				UseData.fun(data.fun, data.args);
			}
		}
		
		if (window['postMessage']) {
            if (window.addEventListener) {
                window.addEventListener("message", receiveMessage, false);
            } else {
                window.attachEvent("onmessage", receiveMessage);
            }
        }
	}

}, (UseData.Recommendations.ymirs || {}));


UseData.callback.push(function(){
	UseData.head(UseData.api.rootUrl + '/plugin/css/general.css');
	UseData.Recommendations.ymirs.listener();
});



	
		UseData.callback.push(function(){
	UseData.Recommendations.ymirs.YMIRS.init();
});

UseData.Recommendations.ymirs.YMIRS = UseData.jquery().extend({}, {
	id: 'usedata-cross-salling',
	elm: function(){
		return UseData.jquery('[_usedata_plugin="' + this.id + '"]');
	},
	init: function(){
		var ymirs = UseData.Recommendations.opts.data['Plugins.YMIRS'];	
		if(ymirs && ymirs.data){
			var title = ymirs.data.title || 'Gợi ý bạn có thể quan tâm';
			var pos = ymirs.data.pos || "BR";
			
			var css = {top:'auto', bottom:0, right:0};
			
			if(pos == 'BL'){
				css = {top:'auto', bottom:0, left:0};
			}
			else if(pos == 'TR'){
				css = {top:0, bottom:'auto', right:0};
			}
			else if(pos == 'TL'){
				css = {top:0, bottom:'auto', left:0};
			}
			
			var url_prefix = ymirs.data.url?new RegExp(ymirs.data.url):/(products)(\/[^\/\?]+)/;
			var url = UseData.Recommendations.ymirs.YMIRS.makeUrl(url_prefix);
			
			if(url){
				
				UseData.iframe(
				 { 
					_usedata_plugin : this.id, 
					css: UseData.jquery().extend(true, { 
						width	: 320,
						height	: 108
					}, css)
				 },
				 { 
					src			: url.html,
					width		: 320,
					height		: 108,
					css: {
					  width		: 320
					}
				  }
			   );
			}
	   	}
	},
	
	makeUrl: function(url_prefix){
		var match = window.location.pathname.match(url_prefix);
		if(UseData.api.recommend && match){
			var params = {name:match[2], type:match[1]};
			params["root_www"] = location.hostname;
			params["root_http"] = UseData.Recommendations.replace("{protocol}//{hostname}", location);
			
			return {
				'json': UseData.makeUrl(UseData.api.recommend, params),
				'html': UseData.makeUrl(UseData.api.recommend + '/html', params)
			};
		}
	},
	
	display: function(){
		var elm = UseData.Recommendations.ymirs.YMIRS.elm();
		
		UseData.jquery(window).scroll(function() {
		   if(UseData.jquery(window).scrollTop() > UseData.jquery(document).height() *1/3) {
			   elm.animate({ opacity: 'show' }, "fast");
		   }
		   else if(UseData.jquery(window).scrollTop() < UseData.jquery(document).height() *1/4) {
			   elm.animate({ opacity: 'hide' }, "slow");
		   }
		});
		
		elm.show();
	}
}, (UseData.Recommendations.ymirs.YMIRS || {}));
	

	

	

	

	

	


var usedataJs = function($){
	UseData.jqr = $;
	$( document ).ready(function() {
          if(UseData){    
            UseData.api = {
              identity: 'b9b372c3-3a8f-4e0d-9c77-1f4a55bcf010',
              track: 'https://api.usedata.vn/analytic/haravanlog',
              rootUrl: 'https://api.usedata.vn'
            };
            
            
                
                    UseData.api.recommend = 'https://api.usedata.vn/analytic/feeds/b9b372c3-3a8f-4e0d-9c77-1f4a55bcf010';
                
            
            
            
                
                    UseData.api.target = 'https://api.usedata.vn/analytic/update/b9b372c3-3a8f-4e0d-9c77-1f4a55bcf010';
                    UseData.callback.push(function(){
                        UseData.Targets.update($);
                    });
    
                
            
            
            
                UseData.track($);
            
            
			if(UseData.callback.length>0){
				for (var i = 0; i < UseData.callback.length; i++) {
					var fun = UseData.callback[i];
					if(fun && 'function' == typeof(fun)){
						fun.call(this);
					}
				}	
			}                    
        }
    });	
};

if ((typeof jQuery === 'undefined') || (parseFloat(jQuery.fn.jquery) < 1.7)) {
 loadScript('//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js',function(){
    jQuery191 = jQuery.noConflict(true);
    usedataJs(jQuery191);
 });
} else {
	usedataJs(jQuery);
}