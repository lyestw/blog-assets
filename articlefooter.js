"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){var e,n,a,r,i=function(e){return t.querySelector(e)},s=function(e){return t.querySelectorAll(e)},o=function(e){if("string"==typeof e)e=t.querySelector(e);if("object"===("undefined"==typeof e?"undefined":_typeof(e)))return{insertBefore:function(t){return e.insertAdjacentHTML("beforebegin",t)},insertAfter:function(t){return e.insertAdjacentHTML("afterend",t)},parentsWrap:function(){for(var t=e.parentNode;"div"!==t.tagName.toLowerCase()||"p"!==t.tagName.toLowerCase();)return t}}};!function(e){e.ready=function(e){if("loading"!==t.readyState)e();else t.addEventListener("DOMContentLoaded",e)};e.jsTag=function(e,n){var a,r,i;if(!t.getElementById(e)){a=t.getElementsByTagName("script")[0];r=t.createElement("script");r.id=e;for(i in n)r[i]=n[i];a.parentNode.insertBefore(r,a)}};e.isMainPage=function(){var t=!document.querySelector("body#article-main"),e=t?"#main.articles ":"#article-content-inner";return e}}(o);e={fbsdk:"//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.7&appId=118130718291459",gads:"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"};n={sq:'\n      <div style="text-align:center; margin:30px 0;">\n        <ins class="adsbygoogle"\n          style="display:inline-block;width:336px;height:280px"\n          data-ad-client="ca-pub-9186479821353585"\n          data-ad-slot="8265602531"></ins>\n        </div>',RWD:'\n      <div style="text-align:center; margin:20px 0;">\n      <ins class="adsbygoogle"\n       style="display:block"\n       data-ad-client="ca-pub-9186479821353585"\n       data-ad-slot="3292176137"\n       data-ad-format="auto"\n       data-full-width-responsive="true"></ins>\n      </div>',RWD2:'\n      <div style="text-align:center; margin:20px 0;">\n      <ins class="adsbygoogle"\n        style="display:block"\n        data-ad-client="ca-pub-9186479821353585"\n        data-ad-slot="2299041967"\n        data-ad-format="auto"\n        data-full-width-responsive="true"></ins>\n      </div>',arti1:'\n      <div style="text-align:center; margin:30px 0;">\n        <ins class="adsbygoogle"\n         style="display:inline-block;width:336px;height:280px"\n         data-ad-client="ca-pub-9186479821353585"\n         data-ad-slot="2281162939"></ins>\n      </div>'};a={articlePhotos:null,FBLikeBox:function(){var t='\n        <br><br>\n        <style>\n        .artfooter-rwd-img {\n          width: 60%;\n        }\n        @media (max-width: 580px) {\n          .artfooter-rwd-img {\n            width: 100%;\n          }\n        }\n        </style>\n        <a href="https://www.facebook.com/lyestw" target="_blank">\n          <img src="http://assets.lyes.tw/footerfbimg.png" style="border:0" class="artfooter-rwd-img"/>\n        </a>\n        <div style="padding:0 0 10px 10px;font-size:1.05em;"><span style="font-size:1.5em">👍</span> <a href="https://www.facebook.com/lyestw" target="_blank"><b>涼子是也-美食旅遊</b>粉絲頁</a></div>\n        <div id="fb-root"></div>\n        <div class="fb-page"\n          data-href="https://www.facebook.com/lyestw/"\n          data-width="420"\n          data-small-header="false"\n          data-adapt-container-width="true"\n          data-hide-cover="false"\n          data-show-facepile="true">\n          <blockquote cite="https://www.facebook.com/lyestw/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/lyestw/">涼子是也-美食旅遊</a></blockquote>\n        </div>\n        <div style="padding:15px 0 15px 10px;font-size:1.05em;"><span style="font-size:1.5em">📷 </span> <a href="https://www.instagram.com/lyes.tw/" target="_blank" style="color:#9C39A9;"><b>追蹤涼子是也 Lyes.tw</b> 的 instagram </a></div>\n        <div style="padding-bottom:10px;" class="artfooter-rwd-img">\n          <a href="https://www.instagram.com/lyes.tw/" target="_blank">\n            <img src="http://assets.lyes.tw/lyes.tw-instagram-qr-code.png" style="border:0;width:190px" />\n          </a>\n          <a href="https://www.instagram.com/lyes.tw/" target="_blank">\n            <img src="http://assets.lyes.tw/lyes.tw-instagram-card.png" style="border:0;width:190px" />\n          </a>\n        </div>\n      ',n=i("#lyesfb")||i(".article-keyword");o(n).insertBefore(t);o.jsTag("facebook-jssdk",{src:e.fbsdk});return this},AgodaLink:function(){var t,e,n,a,r="https://www.agoda.com/partners/partnersearch.aspx?cid=1779130",d="http://clk.omgt3.com/?AID=1409331&PID=15739&r=https%3a%2f%2fwww.expedia.com.tw%2fHotels",l=function(t){return'<a href="'+t+'" target="_blank" rel="noopener"><img src="http://assets.lyes.tw/search-hotel-link.png" style="border:0; padding: 15px 0;" class="artfooter-rwd-img"/></a>'},c=i(".article-content-inner").innerText,f=Math.max(c.indexOf("住宿"),c.indexOf("民宿"),c.indexOf("入住"),c.indexOf("親子"),c.indexOf("飯店"),c.indexOf("旅館"))>0;if(!f)return this;t=c.indexOf("理想大地")>0?l(d):l(r);e=s('.article-content-inner img[src*="flickr"]')[7];if(e){n=o(e).parentsWrap();o(n).insertAfter(t)}a=i("#lyesfb")||i(".article-keyword");o(a).insertBefore(t);return this},AD:function(){var t,a=o.isMainPage();if(i(a)){t=o(a+'.article-content-inner img[src*="flickr"]').parentsWrap();o(t).insertAfter(n.RWD2);o.jsTag("gads",{src:e.gads,async:true});window.adsbygoogle.push({});this.articlePhotos=s('.article-content-inner img[src*="flickr"]');return this}},AD2:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12,a=e,r=this.articlePhotos[a];if(void 0===r)r=this.articlePhotos[this.articlePhotos.length-1];t=o(r).parentsWrap();o(t).insertAfter(n.arti1);window.adsbygoogle.push({});return this},AD_RWD:function(){var t,e=6,a=this.articlePhotos[e];if(void 0!==a){t=o(a).parentsWrap();o(t).insertAfter(n.RWD);window.adsbygoogle.push({})}return this},YPA:function(){o.jsTag("adbot",{src:"//a.breaktime.com.tw/js/au.js?spj=4594K18",charset:"utf-8",async:true});return this}};r=function(){var t=s(".article-content-inner img[data-srcset]");if(t.length)t.forEach(function(t){t.setAttribute("srcset",t.getAttribute("data-srcset"))})};o.ready(function(){window.adsbygoogle=[];a.AgodaLink().FBLikeBox().AD().AD_RWD().AD2().AD2(18).YPA();r()})}(document);