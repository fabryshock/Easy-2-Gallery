/* Floatbox v4.20 */
fb.extend(fb.proto,{JD:function(){var h=this,c="ie6_"+h.KX+"_css";if(!fb[c]){if(!fb.EK){var f="#fbBox a.fb{zoom:1}",a=null,e,d=h.H.styleSheets.length;while(d--){var k=h.H.styleSheets[d];for(var b=0;b<k.rules.length;b++){if(k.rules[b].selectorText[fb.SW]("DIV#fbBox")>-1){a=k;d=0;break}}}if(!a){return}fb.EK={black:f,white:f,blue:f,yellow:f,red:f,custom:f};for(var d=0;d<a.rules.length;d++){var g=a.rules[d];if((e=/\.fb_(black|white|blue|yellow|red|custom)/.exec(g.selectorText))){fb.EK[e[1]]+=g.selectorText+"{"+g.style.cssText+"}"}}}fb[c]=h.H.createStyleSheet();fb[c].cssText=fb.EK[h.KX][fb.UV](/url\(graphics\//gi,"url("+h.DQ)[fb.UV](/\.png/g,".gif")}},ie6Loaded:true});(function(){if(fb.showIE6EndOfLife&&self===fb.Z&&!fb[fb.PL]){if(!/fbIE6Shown=.+/.test(document.cookie)){var d=fb.KY;var c=/bg|cs|da|de|el|es|et|fi|fr|hr|hu|it|nl|pl|pt|ro|sk|sl|sv/.test(d)?d:"en",b="http://www.browserchoice.eu/BrowserChoice/browserchoice_"+c+".htm",a=/bg|de|el/.test(d)?446:410;fb.start('<div style="padding:10px 20px 0 20px; color:black;"><span style="font-size:20px; font-weight:bold;">Internet Explorer 6 - End of Life<br /></span><span>We notice that you are using Internet Explorer version 6.0. Please be advised that this site and many others will have reduced functionality under this very old browser. There are also security risks involved in continuing to use IE6. To make your browsing experience safer and better, and to help web site developers everywhere, please replace your browser with one of the choices available below. </span></div><iframe src="'+b+'" width="816" height="'+a+'" frameborder="0" scrolling="no"></iframe>',{width:816,enableDragResize:false,controlsPos:"tr",backgroundColor:"#DAF3FD",caption:'<input type="checkbox" id="fbIE6check" /><span id="fbIE6noshow">Do not show this again (requires a permanent cookie)</span>',afterItemStart:function(){if(d!=="en"){fb.translate(null,d)}document.cookie="fbIE6Shown=true; path=/"},beforeItemEnd:function(){if(fb$("fbIE6check").checked){var e=new Date;e.setTime(e.getTime()+75*24*60*60*1000);document.cookie="fbIE6Shown=true; expires="+e.toGMTString()+"; path=/"}}})}}})();