"use strict";function _typeof(t){if("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator)_typeof=function(t){return typeof t};else _typeof=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return _typeof(t)}!function(i){function o(t){return i.querySelector(t)}function s(t){return i.querySelectorAll(t)}function c(e){if("string"==typeof e)e=i.querySelector(e);if("object"===_typeof(e))return{insertBefore:function(t){return e.insertAdjacentHTML("beforebegin",t)},insertAfter:function(t){return e.insertAdjacentHTML("afterend",t)},parentsWrap:function(){if(null===e)return null;var t=e.parentNode;if("div"!==t.tagName.toLowerCase()||"p"!==t.tagName.toLowerCase())return t;else return}}}var n,a,e,r,l,t,d;!function(t){t.ready=function(t){if("loading"!==i.readyState)t();else i.addEventListener("DOMContentLoaded",t)};t.jsTag=function(t,e){var n,a,r;if(!i.getElementById(t)){n=i.getElementsByTagName("script")[0];(a=i.createElement("script")).id=t;for(r in e)a[r]=e[r];n.parentNode.insertBefore(a,n)}};t.isMainPage=function(){var t=!document.querySelector("body#article-main"),t=t?"#main.articles ":"#article-content-inner";return t}}(c);n="//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.7&appId=118130718291459",a="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";e='\n      <div style="text-align:center; margin:20px 0;">\n      <ins class="adsbygoogle"\n       style="display:block"\n       data-ad-client="ca-pub-9186479821353585"\n       data-ad-slot="3292176137"\n       data-ad-format="auto"\n       data-full-width-responsive="true"></ins>\n      </div>',r='\n      <div style="text-align:center; margin:20px 0;">\n      <ins class="adsbygoogle"\n        style="display:block"\n        data-ad-client="ca-pub-9186479821353585"\n        data-ad-slot="2299041967"\n        data-ad-format="auto"\n        data-full-width-responsive="true"></ins>\n      </div>',l='\n      <div style="text-align:center; margin:30px 0;">\n        <ins class="adsbygoogle"\n         style="display:inline-block;width:336px;height:280px"\n         data-ad-client="ca-pub-9186479821353585"\n         data-ad-slot="2281162939"></ins>\n      </div>';t={articlePhotos:null,FBLikeBox:function(){var t='\n        <br><br>\n        <style>\n        .artfooter-rwd-img {\n          width: 60%;\n        }\n        .artfooter-rwd-img .ig-img {\n          width: 190px!important;\n        }\n        @media (max-width: 580px) {\n          .artfooter-rwd-img {\n            width: 100%;\n          }\n          .artfooter-rwd-img .ig-img {\n            width: 48%!important;\n          }\n        }\n        </style>\n        <a href="https://www.facebook.com/lyestw" target="_blank">\n          <img src="http://assets.lyes.tw/footerfbimg.png" style="border:0" class="artfooter-rwd-img"/>\n        </a>\n        <div style="padding:0 0 10px 10px;font-size:1.05em;"><span style="font-size:1.5em">👍</span> <a href="https://www.facebook.com/lyestw" target="_blank"><b>涼子是也-美食旅遊</b>粉絲頁</a></div>\n        <div id="fb-root"></div>\n        <div class="fb-page"\n          data-href="https://www.facebook.com/lyestw/"\n          data-width="420"\n          data-small-header="false"\n          data-adapt-container-width="true"\n          data-hide-cover="false"\n          data-show-facepile="true">\n          <blockquote cite="https://www.facebook.com/lyestw/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/lyestw/">涼子是也-美食旅遊</a></blockquote>\n        </div>\n        <div style="padding:15px 0 15px 10px;font-size:1.05em;"><span style="font-size:1.5em">📷 </span> <a href="https://www.instagram.com/lyes.tw/" target="_blank" style="color:#9C39A9;"><b>追蹤涼子是也 Lyes.tw</b> 的 instagram </a></div>\n        <div style="padding-bottom:10px;" class="artfooter-rwd-img">\n          <a href="https://www.instagram.com/lyes.tw/" target="_blank">\n            <img src="http://assets.lyes.tw/lyes.tw-instagram-qr-code.png" class="ig-img" style="border:0;width:190px" />\n          </a>\n          <a href="https://www.instagram.com/lyes.tw/" target="_blank">\n            <img src="http://assets.lyes.tw/lyes.tw-instagram-card.png" class="ig-img" style="border:0;width:190px" />\n          </a>\n        </div>\n      ',e=o("#lyesfb")||o(".article-keyword");c(e).insertBefore(t);c.jsTag("facebook-jssdk",{src:n});return this},AgodaLink:function(){var t,e="https://www.agoda.com/partners/partnersearch.aspx?cid=1779130",n="http://clk.omgt3.com/?AID=1409331&PID=15739&r=https%3a%2f%2fwww.expedia.com.tw%2fHotels",a=function(t){return'<a href="'.concat(t,'" target="_blank" rel="noopener"><img src="http://assets.lyes.tw/search-hotel-link.png" style="border:0; padding: 15px 0;" class="artfooter-rwd-img"/></a>')},r=o(".article-content-inner").innerText,i=0<Math.max(r.indexOf("住宿"),r.indexOf("民宿"),r.indexOf("入住"),r.indexOf("親子"),r.indexOf("飯店"),r.indexOf("旅館"));if(!i)return this;a=0<r.indexOf("理想大地")?a(n):a(e);if(e=s('.article-content-inner img[src*="flickr"], .article-content-inner img[data-original*="flickr"]')[7]){t=c(e).parentsWrap();c(t).insertAfter(a)}t=o("#lyesfb")||o(".article-keyword");c(t).insertBefore(a);return this},AD:function(){var t,e=c.isMainPage();if(o(e)){if(null===(t=c("".concat(e,'.article-content-inner img[src*="flickr"]')).parentsWrap()))t=c("".concat(e,'.article-content-inner img[data-original*="flickr"]')).parentsWrap();c(t).insertAfter(r);c.jsTag("gads",{src:a,async:true});window.adsbygoogle.push({});this.articlePhotos=s('.article-content-inner img[src*="flickr"], .article-content-inner img[data-original*="flickr"]');return this}},AD2:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:13,t=t,t=this.articlePhotos[t];if(void 0===t)t=this.articlePhotos[this.articlePhotos.length-1];t=c(t).parentsWrap();c(t).insertAfter(l);window.adsbygoogle.push({});return this},AD_RWD:function(){var t=this.articlePhotos[7];if(void 0!==t){t=c(t).parentsWrap();c(t).insertAfter(e);window.adsbygoogle.push({})}return this},YPA:function(){c.jsTag("adbot",{src:"//a.breaktime.com.tw/js/au.js?spj=4594K18",charset:"utf-8",async:true});return this}};d=function(){var t=s(".article-content-inner img[data-srcset]");if(t.length)t.forEach(function(t){t.setAttribute("srcset",t.getAttribute("data-srcset"))})};c.ready(function(){window.adsbygoogle=[];t.AgodaLink().FBLikeBox().AD().AD_RWD().AD2().AD2(18).YPA();d()})}(document);