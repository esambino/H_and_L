// =======================================================================================
// 
// My Weather - IP v1
//
// Author: Klerith
// Page: http://codecanyon.net/user/klerith
// Email: fernando.herrera85@gmail.com BUT, first send me a message through codecanyon page.
//        That's because some people stole the code and ask me support when they are not a customer :(
//
// =======================================================================================



(function ($) 
{
	/* Modernizr 2.6.3 (Custom Build) | MIT & BSD
	 * Build: http://modernizr.com/download/#-canvas-shiv-cssclasses-load
	 * I need to check "canvas"
	 */
	;window.Modernizr=function(a,b,c){function u(a){j.cssText=a}function v(a,b){return u(prefixes.join(a+";")+(b||""))}function w(a,b){return typeof a===b}function x(a,b){return!!~(""+a).indexOf(b)}function y(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:w(f,"function")?f.bind(d||b):f}return!1}var d="2.6.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m={},n={},o={},p=[],q=p.slice,r,s={}.hasOwnProperty,t;!w(s,"undefined")&&!w(s.call,"undefined")?t=function(a,b){return s.call(a,b)}:t=function(a,b){return b in a&&w(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=q.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(q.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(q.call(arguments)))};return e}),m.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")};for(var z in m)t(m,z)&&(r=z.toLowerCase(),e[r]=m[z](),p.push((e[r]?"":"no-")+r));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)t(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},u(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+p.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};


var City = "";
var Country = "";
var IP = "";
var Latitude = "";
var Longitude = "";
var Init = false;

$.MyWeather = function(settings,callback){

	settings = $.extend({
			position: "right",
			showpopup: true,
            showinfo: true,
            plain: false,
            plainfolder: "static/img/",
            temperature: "c",
            closeicon: true,
            showicon: true,
            showtemperature: true,
            showlocation: true,
            showip: true,
            size: 64,
            iconcolor: "white",
            fontcolor: "white",
            update: undefined,
            elementid: undefined,
        }, settings);

		CreateMyWeather(true);

		// Timer
		if(settings.update !=undefined){
			setInterval(function(){

				CreateMyWeather(false);

			},(settings.update * 60));

		}

	function CreateMyWeather(New){

		
	if(New == true){
			settings.position    = settings.position.toLowerCase();
			settings.temperature = settings.temperature.toLowerCase();
	
			var PositionClass = "";
			switch(settings.position){
				case "right":
					PositionClass = "weatherInfoRight";
				break;
	
				case "left":
					PositionClass = "weatherInfoLeft";
				break;
				case "bottomright":
					PositionClass = "weatherInfoBottomRight"
				break;
				case "bottomleft":
					PositionClass = "weatherInfoBottomLeft"
				break;
				default:
					PositionClass = "weatherInfoRight";
				break;
			}
	
	
	
			var Content="";
	
				Content += '<div class="MyWeatherDiv '+ PositionClass +'">'

				if(settings.closeicon == true)
					Content += '<span class="MyWeatherClose">X</span>';
	
				if(settings.showicon == true){
					if(Modernizr.canvas == true){
						//Browser support canvas
							Content += 	'<figure id="divMyIcons">';
							Content += 			'<canvas id="clear-day" width="'+ settings.size +'" height="'+ settings.size +'"></canvas>';
							Content += 			'<canvas id="clear-night" width="'+ settings.size +'" height="'+ settings.size +'"></canvas>';
							Content += 			'<canvas id="partly-cloudy-day" width="'+ settings.size +'" height="'+ settings.size +'"></canvas>';
							Content += 			'<canvas id="partly-cloudy-night" width="'+ settings.size +'" height="'+ settings.size +'"></canvas>';
							Content += 			'<canvas id="cloudy" width="'+ settings.size +'" height="'+ settings.size +'"></canvas>';
							Content += 			'<canvas id="rain" width="'+ settings.size +'" height="'+ settings.size +'"></canvas>';
							Content += 			'<canvas id="sleet" width="'+ settings.size +'" height="'+ settings.size +'"></canvas>';
							Content += 			'<canvas id="snow" width="'+ settings.size +'" height="'+ settings.size +'"></canvas>';
							Content += 			'<canvas id="wind" width="'+ settings.size +'" height="'+ settings.size +'"></canvas>';
							Content += 			'<canvas id="fog" width="'+ settings.size +'" height="'+ settings.size +'"></canvas>';
							Content += 	'</figure>';
							Content += '<div id="divMyImage" align="center"><img id="picMW" src="#" style="width:'+ settings.size +'px !important; height:'+ settings.size +'px !important;"></div>';
						}else{
							//Browser do not support canvas
							Content += '<img id="picMW" src="#" style="width:'+ settings.size +'px !important; height:'+ settings.size +'px !important;">';
						}
					}
	
				Content += 	'<div class="MyWeatherInfo">'
	
				if(settings.showtemperature == true)
					Content += 		'<span class="MWTemperature"></span>'
	
				if(settings.showlocation == true)
					Content += 		'<span class="MWPlace"></span>'
	
				if(settings.showip == true)
					Content += 		'<span class="MWIP"></span>'
	
				Content += 	'</div>'
				Content += '</div>'
	
				if(settings.showpopup == true){
					
					if(settings.elementid !=undefined){
						$(settings.elementid).append(Content);
						$(".MyWeatherDiv").removeClass(PositionClass);
						$(".MyWeatherClose").remove();
						
					}
					else
						$("body").append(Content);

					

				}

	}	// End if is New
	else{
		//Is an update
		$("#clear-day").hide();
		$("#clear-night").hide();
		$("#partly-cloudy-day").hide();
		$("#partly-cloudy-night").hide();
		$("#cloudy").hide();
		$("#rain").hide();
		$("#sleet").hide();
		$("#snow").hide();
		$("#wind").hide();
		$("#fog").hide();
	}

			$.ajax({
				type: "GET",
		        dataType:'jsonp',
		        url:   'http://www.geoplugin.net/json.gp?jsoncallback=?',
		        success:  function (Location) {
		                MyLocationWeather(Location);
		        }
			});

	}


	function MyLocationWeather(Location){

		City = Location.geoplugin_city;
		Country = Location.geoplugin_countryName;
		IP = Location.geoplugin_request;
		Latitude  = Location.geoplugin_latitude;
		Longitude = Location.geoplugin_longitude;


		$.ajax({
			type: "GET",
	        dataType:'jsonp',
	        url:   'http://api.openweathermap.org/data/2.5/weather?lat='+ Latitude +'&lon=' + Longitude,
	        success:  function (Weather) {
	                DisplayWeather(Weather);
	        },
			error: function(XMLHttpRequest, textStatus, errorThrown) {
			     if (typeof callback == "function") 
			        {   
			            if(callback) callback(City,Country, IP, Latitude, Longitude, "Try again in 1 minute.","#");
			        }
			}
		});
		
	}


	function DisplayWeather(Weather){


		

		var RealTemp = "";
		var Kelvin = (Weather.main.temp*1);

		switch(settings.temperature){
			case "c":
				RealTemp = Kelvin - 273.15;
				RealTemp = Math.round(RealTemp * 100) / 100;
				RealTemp = RealTemp + "&deg; celsius";
			break;
			case "f":
				RealTemp = ((Kelvin - 273.15) * 1.8000)+32;
				RealTemp = Math.round(RealTemp * 100) / 100;
				RealTemp = RealTemp + "&deg; fahrenheit";
			break;
			case "k":
				RealTemp = Kelvin + "&deg; kelvin";
			break;
		}

		WeatherIcon(Weather.weather[0].id,Weather.weather[0].icon, RealTemp);

		// if (typeof callback == "function") 
  //       {   
  //           if(callback) callback(City,Country, IP, Latitude, Longitude, RealTemp);
  //       }


		$(".MWTemperature").html(RealTemp).css("color",settings.fontcolor);

		if(City.length >2)
			$(".MWPlace").html(City + ", " + Country).css("color",settings.fontcolor);
		else
			$(".MWPlace").html(Country).css("color",settings.fontcolor);

		$(".MWIP").html(IP).css("color",settings.fontcolor);


		$(".MyWeatherDiv").fadeIn();

	}


	if(settings.closeicon == true){
		$("body").on("click",".MyWeatherClose",function(){
			
			$(".MyWeatherDiv").animate({
				opacity: 0,
			},300,function(){
				$(this).remove();
			})

		});
	}

	// Function to show the current Weather Icon
	function WeatherIcon(ID,icon, RealTemp){
		
		var Daylight = true;
		var ImageSRC = "#";

		icon = icon.toLowerCase();
		if(icon.indexOf("n")>0)
			Daylight = false;

		switch(ID){
			//Thunderstorm
			case 200:	 //thunderstorm
				$("#sleet").show();
				ImageSRC = settings.plainfolder+"/sleet.png";
			break;

			case 201:	 //thunderstorm
				$("#sleet").show();
				ImageSRC = settings.plainfolder+"/sleet.png";
			break;

			case 202:	 //thunderstorm
				$("#sleet").show();
				ImageSRC = settings.plainfolder+"/sleet.png";
			break;

			case 210:	 //light
				$("#sleet").show();
				ImageSRC = settings.plainfolder+"/sleet.png";
			break;

			case 211:	 //thunderstorm
				$("#sleet").show();
				ImageSRC = settings.plainfolder+"/sleet.png";
			break;

			case 212:	 //heavy
				$("#sleet").show();
				ImageSRC = settings.plainfolder+"/sleet.png";
			break;

			case 221:	 //ragged
				$("#sleet").show();
				ImageSRC = settings.plainfolder+"/sleet.png";
			break;

			case 230:	 //thunderstorm
				$("#sleet").show();
				ImageSRC = settings.plainfolder+"/sleet.png";
			break;

			case 231:	 //thunderstorm
				$("#sleet").show();
				ImageSRC = settings.plainfolder+"/sleet.png";
			break;

			case 232:	 //thunderstorm
				$("#sleet").show();
				ImageSRC = settings.plainfolder+"/sleet.png";
			break;

			//Drizzle
			case 300:	 //light intensity drizzle
				$("#rain").show();
				ImageSRC = settings.plainfolder+"/rain.png";
			break;

			case 301:	 //drizzle
				$("#rain").show();
				ImageSRC = settings.plainfolder+"/rain.png";
			break;

			case 302:	 //heavy intensity drizzle
				$("#rain").show();
				ImageSRC = settings.plainfolder+"/rain.png";
			break;

			case 310:	 //light intensity drizzle rain
				$("#rain").show();
				ImageSRC = settings.plainfolder+"/rain.png";
			break;

			case 311:	 //drizzle rain
				$("#rain").show();
				ImageSRC = settings.plainfolder+"/rain.png";
			break;

			case 312:	 //heavy intensity drizzle rain
				$("#rain").show();
				ImageSRC = settings.plainfolder+"/rain.png";
			break;

			case 313:	 //shower rain and drizzle
				$("#rain").show();
				ImageSRC = settings.plainfolder+"/rain.png";
			break;

			case 314:	 //heavy shower rain and drizzle
				$("#rain").show();
				ImageSRC = settings.plainfolder+"/rain.png";
			break;

			case 321:	 //shower drizzle
				$("#rain").show();
				ImageSRC = settings.plainfolder+"/rain.png";
			break;

			// RAINS
			case 500:	 //light rain	 [[file:10d.png]]
				$("#rain").show();
				ImageSRC = settings.plainfolder+"/rain.png";
			break;

			case 501:	 //moderate rain	 [[file:10d.png]]
				$("#rain").show();
				ImageSRC = settings.plainfolder+"/rain.png";
			break;

			case 502:	 //heavy intensity rain	 [[file:10d.png]]
				$("#sleet").show();
				ImageSRC = settings.plainfolder+"/sleet.png";
			break;

			case 503:	 //very heavy rain	 [[file:10d.png]]
				$("#sleet").show();
				ImageSRC = settings.plainfolder+"/sleet.png";
			break;

			case 504:	 //extreme rain	 [[file:10d.png]]
				$("#sleet").show();
				ImageSRC = settings.plainfolder+"/sleet.png";
			break;

			case 511:	 //freezing rain	 [[file:13d.png]]
				$("#snow").show();
				ImageSRC = settings.plainfolder+"/snow.png";
			break;

			case 520:	 //light intensity shower rain	 [[file:09d.png]]
				$("#sleet").show();				
				ImageSRC = settings.plainfolder+"/sleet.png";
			break;

			case 521:	 //shower rain	 [[file:09d.png]]
				$("#sleet").show();
				ImageSRC = settings.plainfolder+"/sleet.png";
			break;

			case 522:	 //heavy intensity shower rain	 [[file:09d.png]]
				$("#sleet").show();
				ImageSRC = settings.plainfolder+"/sleet.png";
			break;

			case 531:	 //ragged shower rain	 [[file:09d.png]]
				$("#sleet").show();
				ImageSRC = settings.plainfolder+"/sleet.png";
			break;

			// Snow
			case 600:	 //light snow	 [[file:13d.png]]
				$("#snow").show();
				ImageSRC = settings.plainfolder+"/snow.png";
			break;

			case 601:	 //snow	 [[file:13d.png]]
				$("#snow").show();
				ImageSRC = settings.plainfolder+"/snow.png";
			break;

			case 602:	 //heavy snow	 [[file:13d.png]]
				$("#snow").show();
				ImageSRC = settings.plainfolder+"/snow.png";
			break;

			case 611:	 //sleet	 [[file:13d.png]]
				$("#snow").show();
				ImageSRC = settings.plainfolder+"/snow.png";
			break;

			case 612:	 //shower sleet	 [[file:13d.png]]
				$("#snow").show();
				ImageSRC = settings.plainfolder+"/snow.png";
			break;

			case 615:	 //light rain and snow	 [[file:13d.png]]
				$("#snow").show();
				ImageSRC = settings.plainfolder+"/snow.png";
			break;

			case 616:	 //rain and snow	 [[file:13d.png]]
				$("#snow").show();
				ImageSRC = settings.plainfolder+"/snow.png";
			break;

			case 620:	 //light shower snow	 [[file:13d.png]]
				$("#snow").show();
				ImageSRC = settings.plainfolder+"/snow.png";
			break;

			case 621:	 //shower snow	 [[file:13d.png]]
				$("#snow").show();
				ImageSRC = settings.plainfolder+"/snow.png";
			break;

			case 622:	 //heavy shower snow	 [[file:13d.png]]
				$("#snow").show();
				ImageSRC = settings.plainfolder+"/snow.png";
			break;

			//Atmosphere
			case 701:	 //mist
				$("#fog").show();
				ImageSRC = settings.plainfolder+"/fog.png";
			break;

			case 711:	 //smoke
				$("#fog").show();
				ImageSRC = settings.plainfolder+"/fog.png";
			break;

			case 721:	 //haze
				$("#fog").show();
				ImageSRC = settings.plainfolder+"/fog.png";
			break;

			case 731:	 //Sand/Dust Whirls
				$("#fog").show();
				ImageSRC = settings.plainfolder+"/fog.png";
			break;

			case 741:	 //Fog
				$("#fog").show();
				ImageSRC = settings.plainfolder+"/fog.png";
			break;

			case 751:	 //sand
				$("#fog").show();
				ImageSRC = settings.plainfolder+"/fog.png";
			break;

			case 761:	 //dust
				$("#fog").show();
				ImageSRC = settings.plainfolder+"/fog.png";
			break;

			case 762:	 //VOLCANIC ASH
				$("#fog").show();
				ImageSRC = settings.plainfolder+"/fog.png";
			break;

			case 771:	 //SQUALLS
				$("#fog").show();
				ImageSRC = settings.plainfolder+"/fog.png";
			break;

			case 781:	 //TORNADO
				$("#fog").show();
				ImageSRC = settings.plainfolder+"/fog.png";
			break;

			//Clouds
			case 800:	 //sky is clear	 [[file:01d.png]] [[file:01n.png]]
				if(Daylight){
					$("#clear-day").show();
					ImageSRC = settings.plainfolder+"/clear-day.png";
				}
				else{
					$("#clear-night").show();
					ImageSRC = settings.plainfolder+"/clear-night.png";
				}
			break;

			case 801:	 //few clouds	 [[file:02d.png]] [[file:02n.png]]
				if(Daylight){
					$("#partly-cloudy-day").show();
					ImageSRC = settings.plainfolder+"/partly-cloudy-day.png";
				}
				else{
					$("#partly-cloudy-night").show();
					ImageSRC = settings.plainfolder+"/partly-cloudy-night.png";
				}
			break;

			case 802:	 //scattered clouds	 [[file:03d.png]] [[file:03d.png]]
				$("#cloudy").show();
				ImageSRC = settings.plainfolder+"/cloudy.png";
			break;

			case 803:	 //broken clouds	 [[file:04d.png]] [[file:03d.png]]
				$("#cloudy").show();
				ImageSRC = settings.plainfolder+"/cloudy.png";
			break;

			case 804:	 //overcast clouds	 [[file:04d.png]] [[file:04d.png]]
				$("#cloudy").show();
				ImageSRC = settings.plainfolder+"/cloudy.png";
			break;

			// Extreme
			case 900:	 //tornado
				$("#wind").show();
				ImageSRC = settings.plainfolder+"/wind.png";
			break;

			case 901:	 //tropical storm
				$("#rain").show();
				ImageSRC = settings.plainfolder+"/rain.png";
			break;

			case 902:	 //hurricane
				$("#wind").show();
				ImageSRC = settings.plainfolder+"/wind.png";
			break;

			case 903:	 //cold
				$("#cloudy").show();
				ImageSRC = settings.plainfolder+"/cloudy.png";
			break;

			case 904:	 //hot
				$("#clear-day").show();
				ImageSRC = settings.plainfolder+"/clear-day.png";
			break;

			case 905:	 //windy
				$("#wind").show();
				ImageSRC = settings.plainfolder+"/wind.png";
			break;

			case 906:	 //hail
				$("#snow").show();
				ImageSRC = settings.plainfolder+"/snow.png";
			break;

		}

		$("#picMW").attr("src",ImageSRC);

		if(settings.plain == true){
			$("#divMyIcons").hide();
			$("#divMyImage").show();
		}

		if (typeof callback == "function") 
        {   
            if(callback) callback(City,Country, IP, Latitude, Longitude, RealTemp, ImageSRC);
        }

	}

		var Skycons;

		if(Modernizr.canvas == false){
			return false;
		}

		if(settings.plain == true)
			return false;

		if(Init == true){
			return false;
		}


		(function(global) {
		  "use strict";

		  /* Set up a RequestAnimationFrame shim so we can animate efficiently FOR
		   * GREAT JUSTICE. */
		  var requestInterval, cancelInterval;

		  (function() {
		    var raf = global.requestAnimationFrame       ||
		              global.webkitRequestAnimationFrame ||
		              global.mozRequestAnimationFrame    ||
		              global.oRequestAnimationFrame      ||
		              global.msRequestAnimationFrame     ,
		        caf = global.cancelAnimationFrame        ||
		              global.webkitCancelAnimationFrame  ||
		              global.mozCancelAnimationFrame     ||
		              global.oCancelAnimationFrame       ||
		              global.msCancelAnimationFrame      ;

		    if(raf && caf) {
		      requestInterval = function(fn, delay) {
		        var handle = {value: null};

		        function loop() {
		          handle.value = raf(loop);
		          fn();
		        }

		        loop();
		        return handle;
		      };

		      cancelInterval = function(handle) {
		        caf(handle.value);
		      };
		    }

		    else {
		      requestInterval = setInterval;
		      cancelInterval = clearInterval;
		    }
		  }());

		  /* Catmull-rom spline stuffs. */
		  /*
		  function upsample(n, spline) {
		    var polyline = [],
		        len = spline.length,
		        bx  = spline[0],
		        by  = spline[1],
		        cx  = spline[2],
		        cy  = spline[3],
		        dx  = spline[4],
		        dy  = spline[5],
		        i, j, ax, ay, px, qx, rx, sx, py, qy, ry, sy, t;

		    for(i = 6; i !== spline.length; i += 2) {
		      ax = bx;
		      bx = cx;
		      cx = dx;
		      dx = spline[i    ];
		      px = -0.5 * ax + 1.5 * bx - 1.5 * cx + 0.5 * dx;
		      qx =        ax - 2.5 * bx + 2.0 * cx - 0.5 * dx;
		      rx = -0.5 * ax            + 0.5 * cx           ;
		      sx =                   bx                      ;

		      ay = by;
		      by = cy;
		      cy = dy;
		      dy = spline[i + 1];
		      py = -0.5 * ay + 1.5 * by - 1.5 * cy + 0.5 * dy;
		      qy =        ay - 2.5 * by + 2.0 * cy - 0.5 * dy;
		      ry = -0.5 * ay            + 0.5 * cy           ;
		      sy =                   by                      ;

		      for(j = 0; j !== n; ++j) {
		        t = j / n;

		        polyline.push(
		          ((px * t + qx) * t + rx) * t + sx,
		          ((py * t + qy) * t + ry) * t + sy
		        );
		      }
		    }

		    polyline.push(
		      px + qx + rx + sx,
		      py + qy + ry + sy
		    );

		    return polyline;
		  }

		  function downsample(n, polyline) {
		    var len = 0,
		        i, dx, dy;

		    for(i = 2; i !== polyline.length; i += 2) {
		      dx = polyline[i    ] - polyline[i - 2];
		      dy = polyline[i + 1] - polyline[i - 1];
		      len += Math.sqrt(dx * dx + dy * dy);
		    }

		    len /= n;

		    var small = [],
		        target = len,
		        min = 0,
		        max, t;

		    small.push(polyline[0], polyline[1]);

		    for(i = 2; i !== polyline.length; i += 2) {
		      dx = polyline[i    ] - polyline[i - 2];
		      dy = polyline[i + 1] - polyline[i - 1];
		      max = min + Math.sqrt(dx * dx + dy * dy);

		      if(max > target) {
		        t = (target - min) / (max - min);

		        small.push(
		          polyline[i - 2] + dx * t,
		          polyline[i - 1] + dy * t
		        );

		        target += len;
		      }

		      min = max;
		    }

		    small.push(polyline[polyline.length - 2], polyline[polyline.length - 1]);

		    return small;
		  }
		  */

		  /* Define skycon things. */
		  /* FIXME: I'm *really really* sorry that this code is so gross. Really, I am.
		   * I'll try to clean it up eventually! Promise! */
		  var KEYFRAME = 500,
		      STROKE = 0.08,
		      TWO_PI = 2.0 * Math.PI,
		      TWO_OVER_SQRT_2 = 2.0 / Math.sqrt(2);

		  function circle(ctx, x, y, r) {
		    ctx.beginPath();
		    ctx.arc(x, y, r, 0, TWO_PI, false);
		    ctx.fill();
		  }

		  function line(ctx, ax, ay, bx, by) {
		    ctx.beginPath();
		    ctx.moveTo(ax, ay);
		    ctx.lineTo(bx, by);
		    ctx.stroke();
		  }

		  function puff(ctx, t, cx, cy, rx, ry, rmin, rmax) {
		    var c = Math.cos(t * TWO_PI),
		        s = Math.sin(t * TWO_PI);

		    rmax -= rmin;

		    circle(
		      ctx,
		      cx - s * rx,
		      cy + c * ry + rmax * 0.5,
		      rmin + (1 - c * 0.5) * rmax
		    );
		  }

		  function puffs(ctx, t, cx, cy, rx, ry, rmin, rmax) {
		    var i;

		    for(i = 5; i--; )
		      puff(ctx, t + i / 5, cx, cy, rx, ry, rmin, rmax);
		  }

		  function cloud(ctx, t, cx, cy, cw, s, color) {
		    t /= 30000;

		    var a = cw * 0.21,
		        b = cw * 0.12,
		        c = cw * 0.24,
		        d = cw * 0.28;

		    ctx.fillStyle = color;
		    puffs(ctx, t, cx, cy, a, b, c, d);

		    ctx.globalCompositeOperation = 'destination-out';
		    puffs(ctx, t, cx, cy, a, b, c - s, d - s);
		    ctx.globalCompositeOperation = 'source-over';
		  }

		  function sun(ctx, t, cx, cy, cw, s, color) {
		    t /= 120000;

		    var a = cw * 0.25 - s * 0.5,
		        b = cw * 0.32 + s * 0.5,
		        c = cw * 0.50 - s * 0.5,
		        i, p, cos, sin;

		    ctx.strokeStyle = color;
		    ctx.lineWidth = s;
		    ctx.lineCap = "round";
		    ctx.lineJoin = "round";

		    ctx.beginPath();
		    ctx.arc(cx, cy, a, 0, TWO_PI, false);
		    ctx.stroke();

		    for(i = 8; i--; ) {
		      p = (t + i / 8) * TWO_PI;
		      cos = Math.cos(p);
		      sin = Math.sin(p);
		      line(ctx, cx + cos * b, cy + sin * b, cx + cos * c, cy + sin * c);
		    }
		  }

		  function moon(ctx, t, cx, cy, cw, s, color) {
		    t /= 15000;

		    var a = cw * 0.29 - s * 0.5,
		        b = cw * 0.05,
		        c = Math.cos(t * TWO_PI),
		        p = c * TWO_PI / -16;

		    ctx.strokeStyle = color;
		    ctx.lineWidth = s;
		    ctx.lineCap = "round";
		    ctx.lineJoin = "round";

		    cx += c * b;

		    ctx.beginPath();
		    ctx.arc(cx, cy, a, p + TWO_PI / 8, p + TWO_PI * 7 / 8, false);
		    ctx.arc(cx + Math.cos(p) * a * TWO_OVER_SQRT_2, cy + Math.sin(p) * a * TWO_OVER_SQRT_2, a, p + TWO_PI * 5 / 8, p + TWO_PI * 3 / 8, true);
		    ctx.closePath();
		    ctx.stroke();
		  }

		  function rain(ctx, t, cx, cy, cw, s, color) {
		    t /= 1350;

		    var a = cw * 0.16,
		        b = TWO_PI * 11 / 12,
		        c = TWO_PI *  7 / 12,
		        i, p, x, y;

		    ctx.fillStyle = color;

		    for(i = 4; i--; ) {
		      p = (t + i / 4) % 1;
		      x = cx + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * a;
		      y = cy + p * p * cw;
		      ctx.beginPath();
		      ctx.moveTo(x, y - s * 1.5);
		      ctx.arc(x, y, s * 0.75, b, c, false);
		      ctx.fill();
		    }
		  }

		  function sleet(ctx, t, cx, cy, cw, s, color) {
		    t /= 750;

		    var a = cw * 0.1875,
		        b = TWO_PI * 11 / 12,
		        c = TWO_PI *  7 / 12,
		        i, p, x, y;

		    ctx.strokeStyle = color;
		    ctx.lineWidth = s * 0.5;
		    ctx.lineCap = "round";
		    ctx.lineJoin = "round";

		    for(i = 4; i--; ) {
		      p = (t + i / 4) % 1;
		      x = Math.floor(cx + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * a) + 0.5;
		      y = cy + p * cw;
		      line(ctx, x, y - s * 1.5, x, y + s * 1.5);
		    }
		  }

		  function snow(ctx, t, cx, cy, cw, s, color) {
		    t /= 3000;

		    var a  = cw * 0.16,
		        b  = s * 0.75,
		        u  = t * TWO_PI * 0.7,
		        ux = Math.cos(u) * b,
		        uy = Math.sin(u) * b,
		        v  = u + TWO_PI / 3,
		        vx = Math.cos(v) * b,
		        vy = Math.sin(v) * b,
		        w  = u + TWO_PI * 2 / 3,
		        wx = Math.cos(w) * b,
		        wy = Math.sin(w) * b,
		        i, p, x, y;

		    ctx.strokeStyle = color;
		    ctx.lineWidth = s * 0.5;
		    ctx.lineCap = "round";
		    ctx.lineJoin = "round";

		    for(i = 4; i--; ) {
		      p = (t + i / 4) % 1;
		      x = cx + Math.sin((p + i / 4) * TWO_PI) * a;
		      y = cy + p * cw;

		      line(ctx, x - ux, y - uy, x + ux, y + uy);
		      line(ctx, x - vx, y - vy, x + vx, y + vy);
		      line(ctx, x - wx, y - wy, x + wx, y + wy);
		    }
		  }

		  function fogbank(ctx, t, cx, cy, cw, s, color) {
		    t /= 30000;

		    var a = cw * 0.21,
		        b = cw * 0.06,
		        c = cw * 0.21,
		        d = cw * 0.28;

		    ctx.fillStyle = color;
		    puffs(ctx, t, cx, cy, a, b, c, d);

		    ctx.globalCompositeOperation = 'destination-out';
		    puffs(ctx, t, cx, cy, a, b, c - s, d - s);
		    ctx.globalCompositeOperation = 'source-over';
		  }

		  /*
		  var WIND_PATHS = [
		        downsample(63, upsample(8, [
		          -1.00, -0.28,
		          -0.75, -0.18,
		          -0.50,  0.12,
		          -0.20,  0.12,
		          -0.04, -0.04,
		          -0.07, -0.18,
		          -0.19, -0.18,
		          -0.23, -0.05,
		          -0.12,  0.11,
		           0.02,  0.16,
		           0.20,  0.15,
		           0.50,  0.07,
		           0.75,  0.18,
		           1.00,  0.28
		        ])),
		        downsample(31, upsample(16, [
		          -1.00, -0.10,
		          -0.75,  0.00,
		          -0.50,  0.10,
		          -0.25,  0.14,
		           0.00,  0.10,
		           0.25,  0.00,
		           0.50, -0.10,
		           0.75, -0.14,
		           1.00, -0.10
		        ]))
		      ];
		  */

		  var WIND_PATHS = [
		        [
		          -0.7500, -0.1800, -0.7219, -0.1527, -0.6971, -0.1225,
		          -0.6739, -0.0910, -0.6516, -0.0588, -0.6298, -0.0262,
		          -0.6083,  0.0065, -0.5868,  0.0396, -0.5643,  0.0731,
		          -0.5372,  0.1041, -0.5033,  0.1259, -0.4662,  0.1406,
		          -0.4275,  0.1493, -0.3881,  0.1530, -0.3487,  0.1526,
		          -0.3095,  0.1488, -0.2708,  0.1421, -0.2319,  0.1342,
		          -0.1943,  0.1217, -0.1600,  0.1025, -0.1290,  0.0785,
		          -0.1012,  0.0509, -0.0764,  0.0206, -0.0547, -0.0120,
		          -0.0378, -0.0472, -0.0324, -0.0857, -0.0389, -0.1241,
		          -0.0546, -0.1599, -0.0814, -0.1876, -0.1193, -0.1964,
		          -0.1582, -0.1935, -0.1931, -0.1769, -0.2157, -0.1453,
		          -0.2290, -0.1085, -0.2327, -0.0697, -0.2240, -0.0317,
		          -0.2064,  0.0033, -0.1853,  0.0362, -0.1613,  0.0672,
		          -0.1350,  0.0961, -0.1051,  0.1213, -0.0706,  0.1397,
		          -0.0332,  0.1512,  0.0053,  0.1580,  0.0442,  0.1624,
		           0.0833,  0.1636,  0.1224,  0.1615,  0.1613,  0.1565,
		           0.1999,  0.1500,  0.2378,  0.1402,  0.2749,  0.1279,
		           0.3118,  0.1147,  0.3487,  0.1015,  0.3858,  0.0892,
		           0.4236,  0.0787,  0.4621,  0.0715,  0.5012,  0.0702,
		           0.5398,  0.0766,  0.5768,  0.0890,  0.6123,  0.1055,
		           0.6466,  0.1244,  0.6805,  0.1440,  0.7147,  0.1630,
		           0.7500,  0.1800
		        ],
		        [
		          -0.7500,  0.0000, -0.7033,  0.0195, -0.6569,  0.0399,
		          -0.6104,  0.0600, -0.5634,  0.0789, -0.5155,  0.0954,
		          -0.4667,  0.1089, -0.4174,  0.1206, -0.3676,  0.1299,
		          -0.3174,  0.1365, -0.2669,  0.1398, -0.2162,  0.1391,
		          -0.1658,  0.1347, -0.1157,  0.1271, -0.0661,  0.1169,
		          -0.0170,  0.1046,  0.0316,  0.0903,  0.0791,  0.0728,
		           0.1259,  0.0534,  0.1723,  0.0331,  0.2188,  0.0129,
		           0.2656, -0.0064,  0.3122, -0.0263,  0.3586, -0.0466,
		           0.4052, -0.0665,  0.4525, -0.0847,  0.5007, -0.1002,
		           0.5497, -0.1130,  0.5991, -0.1240,  0.6491, -0.1325,
		           0.6994, -0.1380,  0.7500, -0.1400
		        ]
		      ],
		      WIND_OFFSETS = [
		        {start: 0.36, end: 0.11},
		        {start: 0.56, end: 0.16}
		      ];

		  function leaf(ctx, t, x, y, cw, s, color) {
		    var a = cw / 8,
		        b = a / 3,
		        c = 2 * b,
		        d = (t % 1) * TWO_PI,
		        e = Math.cos(d),
		        f = Math.sin(d);

		    ctx.fillStyle = color;
		    ctx.strokeStyle = color;
		    ctx.lineWidth = s;
		    ctx.lineCap = "round";
		    ctx.lineJoin = "round";

		    ctx.beginPath();
		    ctx.arc(x        , y        , a, d          , d + Math.PI, false);
		    ctx.arc(x - b * e, y - b * f, c, d + Math.PI, d          , false);
		    ctx.arc(x + c * e, y + c * f, b, d + Math.PI, d          , true );
		    ctx.globalCompositeOperation = 'destination-out';
		    ctx.fill();
		    ctx.globalCompositeOperation = 'source-over';
		    ctx.stroke();
		  }

		  function swoosh(ctx, t, cx, cy, cw, s, index, total, color) {
		    t /= 2500;

		    var path = WIND_PATHS[index],
		        a = (t + index - WIND_OFFSETS[index].start) % total,
		        c = (t + index - WIND_OFFSETS[index].end  ) % total,
		        e = (t + index                            ) % total,
		        b, d, f, i;

		    ctx.strokeStyle = color;
		    ctx.lineWidth = s;
		    ctx.lineCap = "round";
		    ctx.lineJoin = "round";

		    if(a < 1) {
		      ctx.beginPath();

		      a *= path.length / 2 - 1;
		      b  = Math.floor(a);
		      a -= b;
		      b *= 2;
		      b += 2;

		      ctx.moveTo(
		        cx + (path[b - 2] * (1 - a) + path[b    ] * a) * cw,
		        cy + (path[b - 1] * (1 - a) + path[b + 1] * a) * cw
		      );

		      if(c < 1) {
		        c *= path.length / 2 - 1;
		        d  = Math.floor(c);
		        c -= d;
		        d *= 2;
		        d += 2;

		        for(i = b; i !== d; i += 2)
		          ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

		        ctx.lineTo(
		          cx + (path[d - 2] * (1 - c) + path[d    ] * c) * cw,
		          cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw
		        );
		      }

		      else
		        for(i = b; i !== path.length; i += 2)
		          ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

		      ctx.stroke();
		    }

		    else if(c < 1) {
		      ctx.beginPath();

		      c *= path.length / 2 - 1;
		      d  = Math.floor(c);
		      c -= d;
		      d *= 2;
		      d += 2;

		      ctx.moveTo(cx + path[0] * cw, cy + path[1] * cw);

		      for(i = 2; i !== d; i += 2)
		        ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

		      ctx.lineTo(
		        cx + (path[d - 2] * (1 - c) + path[d    ] * c) * cw,
		        cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw
		      );

		      ctx.stroke();
		    }

		    if(e < 1) {
		      e *= path.length / 2 - 1;
		      f  = Math.floor(e);
		      e -= f;
		      f *= 2;
		      f += 2;

		      leaf(
		        ctx,
		        t,
		        cx + (path[f - 2] * (1 - e) + path[f    ] * e) * cw,
		        cy + (path[f - 1] * (1 - e) + path[f + 1] * e) * cw,
		        cw,
		        s,
		        color
		      );
		    }
		  }

		  Skycons = function(opts) {
		    this.list        = [];
		    this.interval    = null;
		    this.color       = opts && opts.color ? opts.color : "black";
		    this.resizeClear = !!(opts && opts.resizeClear);
		  };

		  Skycons.CLEAR_DAY = function(ctx, t, color) {
		    var w = ctx.canvas.width,
		        h = ctx.canvas.height,
		        s = Math.min(w, h);

		    sun(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
		  };

		  Skycons.CLEAR_NIGHT = function(ctx, t, color) {
		    var w = ctx.canvas.width,
		        h = ctx.canvas.height,
		        s = Math.min(w, h);

		    moon(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
		  };

		  Skycons.PARTLY_CLOUDY_DAY = function(ctx, t, color) {
		    var w = ctx.canvas.width,
		        h = ctx.canvas.height,
		        s = Math.min(w, h);

		    sun(ctx, t, w * 0.625, h * 0.375, s * 0.75, s * STROKE, color);
		    cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
		  };

		  Skycons.PARTLY_CLOUDY_NIGHT = function(ctx, t, color) {
		    var w = ctx.canvas.width,
		        h = ctx.canvas.height,
		        s = Math.min(w, h);

		    moon(ctx, t, w * 0.667, h * 0.375, s * 0.75, s * STROKE, color);
		    cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
		  };

		  Skycons.CLOUDY = function(ctx, t, color) {
		    var w = ctx.canvas.width,
		        h = ctx.canvas.height,
		        s = Math.min(w, h);

		    cloud(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
		  };

		  Skycons.RAIN = function(ctx, t, color) {
		    var w = ctx.canvas.width,
		        h = ctx.canvas.height,
		        s = Math.min(w, h);

		    rain(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
		    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
		  };

		  Skycons.SLEET = function(ctx, t, color) {
		    var w = ctx.canvas.width,
		        h = ctx.canvas.height,
		        s = Math.min(w, h);

		    sleet(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
		    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
		  };

		  Skycons.SNOW = function(ctx, t, color) {
		    var w = ctx.canvas.width,
		        h = ctx.canvas.height,
		        s = Math.min(w, h);

		    snow(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
		    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
		  };

		  Skycons.WIND = function(ctx, t, color) {
		    var w = ctx.canvas.width,
		        h = ctx.canvas.height,
		        s = Math.min(w, h);

		    swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 0, 2, color);
		    swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 1, 2, color);
		  };

		  Skycons.FOG = function(ctx, t, color) {
		    var w = ctx.canvas.width,
		        h = ctx.canvas.height,
		        s = Math.min(w, h),
		        k = s * STROKE;

		    fogbank(ctx, t, w * 0.5, h * 0.32, s * 0.75, k, color);

		    t /= 5000;

		    var a = Math.cos((t       ) * TWO_PI) * s * 0.02,
		        b = Math.cos((t + 0.25) * TWO_PI) * s * 0.02,
		        c = Math.cos((t + 0.50) * TWO_PI) * s * 0.02,
		        d = Math.cos((t + 0.75) * TWO_PI) * s * 0.02,
		        n = h * 0.936,
		        e = Math.floor(n - k * 0.5) + 0.5,
		        f = Math.floor(n - k * 2.5) + 0.5;

		    ctx.strokeStyle = color;
		    ctx.lineWidth = k;
		    ctx.lineCap = "round";
		    ctx.lineJoin = "round";

		    line(ctx, a + w * 0.2 + k * 0.5, e, b + w * 0.8 - k * 0.5, e);
		    line(ctx, c + w * 0.2 + k * 0.5, f, d + w * 0.8 - k * 0.5, f);
		  };

		  Skycons.prototype = {
		    add: function(el, draw) {
		      var obj;

		      if(typeof el === "string")
		        el = document.getElementById(el);

		      obj = {
		        element: el,
		        context: el.getContext("2d"),
		        drawing: draw
		      };

		      this.list.push(obj);
		      this.draw(obj, KEYFRAME);
		    },
		    set: function(el, draw) {
		      var i;

		      if(typeof el === "string")
		        el = document.getElementById(el);

		      for(i = this.list.length; i--; )
		        if(this.list[i].element === el) {
		          this.list[i].drawing = draw;
		          this.draw(this.list[i], KEYFRAME);
		          return;
		        }

		      this.add(el, draw);
		    },
		    remove: function(el) {
		      var i;

		      if(typeof el === "string")
		        el = document.getElementById(el);

		      for(i = this.list.length; i--; )
		        if(this.list[i].element === el) {
		          this.list.splice(i, 1);
		          return;
		        }
		    },
		    draw: function(obj, time) {
		      var canvas = obj.context.canvas;

		      if(this.resizeClear)
		        canvas.width = canvas.width;

		      else
		        obj.context.clearRect(0, 0, canvas.width, canvas.height);

		      obj.drawing(obj.context, time, this.color);
		    },
		    play: function() {
		      var self = this;

		      this.pause();
		      this.interval = requestInterval(function() {
		        var now = Date.now(),
		            i;

		        for(i = self.list.length; i--; )
		          self.draw(self.list[i], now);
		      }, 1000 / 60);
		    },
		    pause: function() {
		      var i;

		      if(this.interval) {
		        cancelInterval(this.interval);
		        this.interval = null;
		      }
		    }
		  };
		}(this));


		var icons = new Skycons({"color": settings.iconcolor});

		icons.set("clear-day", Skycons.CLEAR_DAY);
		icons.set("clear-night", Skycons.CLEAR_NIGHT);
		icons.set("partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
		icons.set("partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
		icons.set("cloudy", Skycons.CLOUDY);
		icons.set("rain", Skycons.RAIN);
		icons.set("sleet", Skycons.SLEET);
		icons.set("snow", Skycons.SNOW);
		icons.set("wind", Skycons.WIND);
		icons.set("fog", Skycons.FOG);

		icons.play();
}




})(jQuery);
