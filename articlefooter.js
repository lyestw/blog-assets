"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){var e,n,a,r,i=function(e){return t.querySelector(e)},o=function(e){return t.querySelectorAll(e)},s=function(e){if("string"==typeof e)e=t.querySelector(e);if("object"===("undefined"==typeof e?"undefined":_typeof(e)))return{insertBefore:function(t){return e.insertAdjacentHTML("beforebegin",t)},insertAfter:function(t){return e.insertAdjacentHTML("afterend",t)},parentsWrap:function(){for(var t=e.parentNode;"div"!==t.tagName.toLowerCase()||"p"!==t.tagName.toLowerCase();)return t}}};!function(e){e.ready=function(e){if("loading"!==t.readyState)e();else t.addEventListener("DOMContentLoaded",e)};e.jsTag=function(e,n){var a,r,i;if(!t.getElementById(e)){a=t.getElementsByTagName("script")[0];r=t.createElement("script");r.id=e;for(i in n)r[i]=n[i];a.parentNode.insertBefore(r,a)}};e.isMainPage=function(){var t=!document.querySelector("body#article-main"),e=t?"#main.articles ":"#article-content-inner";return e}}(s);e={fbsdk:"//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.7&appId=118130718291459",gads:"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"};n={sq:'\n      <div style="text-align:center; margin:30px 0;">\n        <ins class="adsbygoogle"\n          style="display:inline-block;width:336px;height:280px"\n          data-ad-client="ca-pub-9186479821353585"\n          data-ad-slot="8265602531"></ins>\n        </div>',bottom:'\n      <div style="text-align:center; margin:20px 0;">\n      <ins class="adsbygoogle"\n       style="display:block;width:100%;height:90px"\n       data-ad-client="ca-pub-9186479821353585"\n       data-ad-slot="3292176137"\n       data-ad-format="auto"></ins>\n      </div>',arti1:'\n      <div style="text-align:center; margin:30px 0;">\n        <ins class="adsbygoogle"\n         style="display:inline-block;width:336px;height:280px"\n         data-ad-client="ca-pub-9186479821353585"\n         data-ad-slot="2281162939"></ins>\n      </div>'};a={articlePhotos:null,FBLikeBox:function(){var t='\n        <br><br>\n        <style>\n        .artfooter-rwd-img {\n          width: 60%;\n        }\n        @media (max-width: 580px) {\n          .artfooter-rwd-img {\n            width: 100%;\n          }\n        }\n        </style>\n        <a href="https://www.facebook.com/lyestw" target="_blank"><img src="http://assets.lyes.tw/footerfbimg.png" style="border:0" class="artfooter-rwd-img"/></a>\n        <div style="padding-bottom:10px">👉 <a href="https://www.facebook.com/lyestw" target="_blank">涼子是也-FB粉絲頁</a></div>\n        <div id="fb-root"></div>\n        <div class="fb-page"\n          data-href="https://www.facebook.com/lyestw/"\n          data-width="420"\n          data-small-header="false"\n          data-adapt-container-width="true"\n          data-hide-cover="false"\n          data-show-facepile="true">\n          <blockquote cite="https://www.facebook.com/lyestw/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/lyestw/">涼子是也-美食旅遊</a></blockquote>\n        </div>\n      ',n=i("#lyesfb")||i(".article-keyword");s(n).insertBefore(t);s.jsTag("facebook-jssdk",{src:e.fbsdk});return this},AgodaLink:function(){var t,e,n,a,r="https://www.agoda.com/partners/partnersearch.aspx?cid=1779130",c="http://clk.omgt3.com/?AID=1409331&PID=15739&r=https%3a%2f%2fwww.expedia.com.tw%2fHotels",d=function(t){return'<a href="'+t+'" target="_blank" rel="noopener"><img src="http://assets.lyes.tw/search-hotel-link.png" style="border:0; padding: 15px 0;" class="artfooter-rwd-img"/></a>'},l=i(".article-content-inner").innerText,f=Math.max(l.indexOf("住宿"),l.indexOf("民宿"),l.indexOf("入住"),l.indexOf("親子"),l.indexOf("飯店"),l.indexOf("旅館"))>0;if(!f)return this;t=l.indexOf("理想大地")>0?d(c):d(r);e=o('.article-content-inner img[src*="flickr"]')[7];if(e){n=s(e).parentsWrap();s(n).insertAfter(t)}a=i("#lyesfb")||i(".article-keyword");s(a).insertBefore(t);return this},AD:function(){var t,a=s.isMainPage();if(i(a)){t=s(a+'.article-content-inner img[src*="flickr"]').parentsWrap();s(t).insertAfter(n.sq);s.jsTag("gads",{src:e.gads,async:true});window.adsbygoogle.push({});this.articlePhotos=o('.article-content-inner img[src*="flickr"]');return this}},AD2:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,a=e,r=this.articlePhotos[a];if(void 0===r)r=this.articlePhotos[this.articlePhotos.length-1];t=s(r).parentsWrap();s(t).insertAfter(n.arti1);window.adsbygoogle.push({});return this},AD_RWD:function(){var t,e=18,a=this.articlePhotos[e];if(void 0!==a){t=s(a).parentsWrap();s(t).insertAfter(n.bottom);window.adsbygoogle.push({})}return this},YPA:function(){s.jsTag("adbot",{src:"//a.breaktime.com.tw/js/au.js?spj=4594K18",charset:"utf-8",async:true});return this}};r=function(){var t=o(".article-content-inner img[data-srcset]");if(t.length)t.forEach(function(t){t.setAttribute("srcset",t.getAttribute("data-srcset"))})};s.ready(function(){window.adsbygoogle=[];a.AgodaLink().FBLikeBox().AD().AD2().AD2(12).AD_RWD().YPA();r()})}(document);