/*! For license information please see index.bundle.js.LICENSE.txt */
!function(e,r){
"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@alt1/base"),require("@alt1/ocr")):"function"==typeof define&&define.amd?define(["@alt1/base","@alt1/ocr"],r):"object"==typeof exports?exports["@alt1/buffs"]=r(require("@alt1/base"),require("@alt1/ocr")):e.BuffsReader=r(e.A1lib,e.OCR)
}("undefined"!=typeof self?self:this,(function(__WEBPACK_EXTERNAL_MODULE__1__,__WEBPACK_EXTERNAL_MODULE__2__){return(()=>{var __webpack_modules__=[,e=>{"use strict";e.exports=__WEBPACK_EXTERNAL_MODULE__1__},e=>{"use strict"
;e.exports=__WEBPACK_EXTERNAL_MODULE__2__},(e,r,t)=>{
e.exports=t(1).ImageDetect.imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAABCSURBVEhL7daxDQAgDANBwxasxmCsS4jECE8K5JdcX+s219iqKrGTXi+dfs2SjCEZQzKGZAzJGJIxJGNI/2KFj1gK6ntTCO2Nfp8AAAAASUVORK5CYII=")
},(e,r,t)=>{
e.exports=t(1).ImageDetect.imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAABFSURBVEhL7daxDQAgDANBm5XYfwOYyUgoI5gUyFc51bfhAoQmNzYl1v3MJjVqt0jMIjGLxCwSs0jMIjGLxCz+jTV+xMAB3/oJlYh5IBUAAAAASUVORK5CYII=")
},function(module){var factory;"undefined"!=typeof self&&self,factory=function(){return(()=>{var __webpack_modules__={"./src/fontssrc/pixel_digits_8px_shadow.fontmeta.json":module=>{
eval('module.exports = {"chars":[{"width":7,"bonus":120,"chr":"0","pixels":[0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,1,1,255,255,1,3,255,0,1,4,255,0,1,5,255,0,1,6,255,255,2,0,255,255,2,2,255,0,2,7,255,255,3,1,255,255,3,6,255,255,3,8,255,0,4,2,255,255,4,3,255,255,4,4,255,255,4,5,255,255,4,7,255,0,5,3,255,0,5,4,255,0,5,5,255,0,5,6,255,0],"secondary":false},{"width":4,"bonus":95,"chr":"1","pixels":[0,1,255,255,0,7,255,255,1,0,255,255,1,1,255,255,1,2,255,255,1,3,255,255,1,4,255,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,0,2,1,255,0,2,2,255,0,2,3,255,0,2,4,255,0,2,5,255,0,2,6,255,0,2,7,255,255,2,8,255,0],"secondary":false},{"width":7,"bonus":140,"chr":"2","pixels":[0,1,255,255,0,6,255,255,0,7,255,255,1,0,255,255,1,2,255,0,1,5,255,255,1,7,255,255,1,8,255,0,2,0,255,255,2,1,255,0,2,4,255,255,2,6,255,0,2,7,255,255,2,8,255,0,3,0,255,255,3,1,255,0,3,3,255,255,3,5,255,0,3,7,255,255,3,8,255,0,4,1,255,255,4,2,255,255,4,4,255,0,4,7,255,255,4,8,255,0,5,2,255,0,5,3,255,0,5,8,255,0],"secondary":false},{"width":6,"bonus":115,"chr":"3","pixels":[0,1,255,255,0,6,255,255,1,0,255,255,1,2,255,0,1,3,255,255,1,7,255,255,2,0,255,255,2,1,255,0,2,3,255,255,2,4,255,0,2,7,255,255,2,8,255,0,3,1,255,255,3,2,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,8,255,0,4,2,255,0,4,3,255,0,4,5,255,0,4,6,255,0,4,7,255,0],"secondary":false},{"width":5,"bonus":110,"chr":"4","pixels":[0,0,255,255,0,1,255,255,0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,1,1,255,0,1,2,255,0,1,3,255,0,1,4,255,0,1,5,255,255,1,6,255,0,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,3,4,255,0,3,5,255,255,3,6,255,0,3,7,255,0,3,8,255,0],"secondary":false},{"width":6,"bonus":135,"chr":"5","pixels":[0,0,255,255,0,1,255,255,0,2,255,255,0,3,255,255,0,6,255,255,1,0,255,255,1,1,255,0,1,2,255,0,1,3,255,255,1,4,255,0,1,7,255,255,2,0,255,255,2,1,255,0,2,3,255,255,2,4,255,0,2,7,255,255,2,8,255,0,3,0,255,255,3,1,255,0,3,4,255,255,3,5,255,255,3,6,255,255,3,8,255,0,4,1,255,0,4,5,255,0,4,6,255,0,4,7,255,0],"secondary":false},{"width":7,"bonus":160,"chr":"6","pixels":[0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,0,6,255,255,1,1,255,255,1,3,255,0,1,4,255,255,1,5,255,0,1,6,255,0,1,7,255,255,2,0,255,255,2,2,255,0,2,3,255,255,2,5,255,0,2,7,255,255,2,8,255,0,3,0,255,255,3,1,255,0,3,3,255,255,3,4,255,0,3,7,255,255,3,8,255,0,4,1,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,8,255,0,5,2,255,0,5,5,255,0,5,6,255,0,5,7,255,0],"secondary":false},{"width":6,"bonus":105,"chr":"7","pixels":[0,0,255,255,0,6,255,255,0,7,255,255,1,0,255,255,1,1,255,0,1,4,255,255,1,5,255,255,1,7,255,0,1,8,255,0,2,0,255,255,2,1,255,0,2,2,255,255,2,3,255,255,2,5,255,0,2,6,255,0,3,0,255,255,3,1,255,255,3,3,255,0,3,4,255,0,4,1,255,0,4,2,255,0],"secondary":false},{"width":7,"bonus":170,"chr":"8","pixels":[0,1,255,255,0,2,255,255,0,4,255,255,0,5,255,255,0,6,255,255,1,0,255,255,1,2,255,0,1,3,255,255,1,5,255,0,1,6,255,0,1,7,255,255,2,0,255,255,2,1,255,0,2,3,255,255,2,4,255,0,2,7,255,255,2,8,255,0,3,0,255,255,3,1,255,0,3,3,255,255,3,4,255,0,3,7,255,255,3,8,255,0,4,1,255,255,4,2,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,8,255,0,5,2,255,0,5,3,255,0,5,5,255,0,5,6,255,0,5,7,255,0],"secondary":false},{"width":7,"bonus":130,"chr":"9","pixels":[0,1,255,255,0,2,255,255,1,0,255,255,1,2,255,0,1,3,255,255,2,0,255,255,2,1,255,0,2,4,255,255,3,0,255,255,3,1,255,0,3,4,255,255,3,5,255,0,4,1,255,255,4,2,255,255,4,3,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,255,5,2,255,0,5,3,255,0,5,4,255,0,5,5,255,0,5,6,255,0,5,7,255,0,5,8,255,0],"secondary":false},{"width":7,"bonus":130,"chr":"m","pixels":[0,4,255,255,0,5,255,255,0,6,255,255,0,7,255,255,1,3,255,255,1,5,255,0,1,6,255,0,1,7,255,0,1,8,255,0,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,3,3,255,255,3,5,255,0,3,6,255,0,3,7,255,0,3,8,255,0,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,255,5,5,255,0,5,6,255,0,5,7,255,0,5,8,255,0],"secondary":false},{"width":3,"bonus":85,"chr":"(","pixels":[0,1,255,255,0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,0,6,255,255,0,7,255,255,0,8,255,25,1,0,255,255,1,2,255,0,1,3,255,0,1,4,255,0,1,5,255,0,1,6,255,0,1,7,255,0,1,8,255,255,2,1,255,0],"secondary":false},{"width":2,"bonus":70,"chr":")","pixels":[0,1,255,255,0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,0,6,255,255,0,7,255,255,1,2,255,0,1,3,255,0,1,4,255,0,1,5,255,0,1,6,255,0,1,7,255,0,1,8,255,0],"secondary":false}],"width":7,"spacewidth":4,"shadow":true,"height":9,"basey":7}\n\n//# sourceURL=webpack://OCR_pixel_digits_8px_shadow/./src/fontssrc/pixel_digits_8px_shadow.fontmeta.json?')
}},__webpack_module_cache__={};function __nested_webpack_require_6257__(e){var r=__webpack_module_cache__[e];if(void 0!==r)return r.exports;var t=__webpack_module_cache__[e]={exports:{}}
;return __webpack_modules__[e](t,t.exports,__nested_webpack_require_6257__),t.exports}var __webpack_exports__=__nested_webpack_require_6257__("./src/fontssrc/pixel_digits_8px_shadow.fontmeta.json");return __webpack_exports__})()},
module.exports=factory()}],__webpack_module_cache__={};function __webpack_require__(e){var r=__webpack_module_cache__[e];if(void 0!==r)return r.exports;var t=__webpack_module_cache__[e]={exports:{}}
;return __webpack_modules__[e].call(t.exports,t,t.exports,__webpack_require__),t.exports}__webpack_require__.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(r,{a:r}),r},__webpack_require__.d=(e,r)=>{
for(var t in r)__webpack_require__.o(r,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),__webpack_require__.r=e=>{
"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__={};return(()=>{"use strict"
;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Buff:()=>i,default:()=>_,BuffInfo:()=>f});var e=__webpack_require__(1),r=__webpack_require__(2),t=e.ImageDetect.webpackImages({buff:__webpack_require__(3),
debuff:__webpack_require__(4)}),a=__webpack_require__(5);function s(e,r){return(e%r+r)%r}class i{constructor(e,r,t,a){this.buffer=e,this.bufferx=r,this.buffery=t,this.isdebuff=a}readArg(e){
return _.readArg(this.buffer,this.bufferx+2,this.buffery+23,e)}readTime(){return _.readTime(this.buffer,this.bufferx+2,this.buffery+23)}compareBuffer(e){return _.compareBuffer(this.buffer,this.bufferx+1,this.buffery+1,e)}countMatch(e,r){
return _.countMatch(this.buffer,this.bufferx+1,this.buffery+1,e,r)}}class _{constructor(){this.pos=null,this.debuffs=!1}find(r){if(r||(r=e.captureHoldFullRs()),!r)return null;var a=r.findSubimage(this.debuffs?t.debuff:t.buff)
;if(0==a.length)return null;var i=[];for(var f in a){var o=!1;for(var u in i)if(0==s(i[u].x-a[f].x,_.gridsize)&&0==s(i[u].x-a[f].x,_.gridsize)){i[u].x=Math.min(i[u].x,a[f].x),i[u].y=Math.min(i[u].y,a[f].y),i[u].n++,o=!0;break}o||i.push({x:a[f].x,
y:a[f].y,n:1})}var c=0,n=0,d=null;for(var f in i)console.log("buff grid ["+i[f].x+","+i[f].y+"], n:"+i[f].n),i[f].n>c&&(c=i[f].n,d=i[f]),i[f].n>=2&&n++;return n>1&&console.log("Warning, more than one possible buff bar location"),d?(this.pos={x:d.x,
y:d.y,maxhor:5,maxver:1},!0):null}getCaptRect(){return this.pos?new e.Rect(this.pos.x,this.pos.y,(this.pos.maxhor+1)*_.gridsize,(this.pos.maxver+1)*_.gridsize):null}read(r){if(!this.pos)throw new Error("no pos");var a=[],s=this.getCaptRect()
;if(!s)return null;r||(r=e.capture(s.x,s.y,s.width,s.height));for(var f=0,o=0,u=0;u<=this.pos.maxhor;u++)for(var c=0;c<=this.pos.maxver;c++){var n=u*_.gridsize,d=c*_.gridsize;if(!(0==r.pixelCompare(this.debuffs?t.debuff:t.buff,n,d)))break
;a.push(new i(r,n,d,this.debuffs)),f=Math.max(f,u),o=Math.max(o,c)}return this.pos.maxhor=Math.max(5,f+2),this.pos.maxver=Math.max(1,o+1),a}static compareBuffer(e,r,t,a){var s=_.countMatch(e,r,t,a,!0);return!(s.failed>0)&&!(s.tested<50)}
static countMatch(r,t,a,s,i){for(var _={tested:0,failed:0,skipped:0,passed:0},f=r.data,o=s.data,u=0;u<s.height;u++)for(var c=0;c<s.width;c++){var n=r.pixelOffset(t+c,a+u),d=s.pixelOffset(c,u)
;if(255==o[d+3])if(255!=f[n]||255!=f[n+1]||255!=f[n+2])if(0!=f[n]||0!=f[n+1]||0!=f[n+2]){var p=e.ImageDetect.coldif(f[n],f[n+1],f[n+2],o[d],o[d+1],o[d+2],255);if(_.tested++,p>35){if(_.failed++,i)return _}else _.passed++
}else _.skipped++;else _.skipped++;else _.skipped++}return _}static isolateBuffer(r,t,a,s){if(!(_.countMatch(r,t,a,s).passed<50)){for(var i=0,f=r.data,o=s.data,u=0;u<s.height;u++)for(var c=0;c<s.width;c++){
var n=r.pixelOffset(t+c,a+u),d=s.pixelOffset(c,u);if(255==o[d+3])if(!(255==f[n]&&255==f[n+1]&&255==f[n+2]||0==f[n]&&0==f[n+1]&&0==f[n+2]))(255==o[d]&&255==o[d+1]&&255==o[d+2]||0==o[d]&&0==o[d+1]&&0==o[d+2])&&(o[d+0]=f[n+0],o[d+1]=f[n+1],
o[d+2]=f[n+2],o[d+3]=f[n+3],i++),e.ImageDetect.coldif(f[n],f[n+1],f[n+2],o[d],o[d+1],o[d+2],255)>5&&(o[d+0]=o[d+1]=o[d+2]=o[d+3]=0,i++)}i>0&&console.log(i+" pixels remove from buff template image")}}static readArg(e,t,s,i){
for(var _=[],f=-10;f<10;f+=10){var o=r.readLine(e,a,[255,255,255],t,s+f,!0);o.text&&_.push(o.text)}var u={time:0,arg:""};"timearg"==i&&_.length>1&&(u.arg=_.pop());var c,n=_.join("")
;"arg"==i?u.arg=n:(c=n.match(/^(\d+)h$/i))?u.time=60*+c[1]*60:(c=n.match(/^(\d+)m$/i))?u.time=60*+c[1]:(c=n.match(/^(\d+)$/))&&(u.time=+c[1]);return u}static readTime(e,r,t){return this.readArg(e,r,t,"time").time}static matchBuff(e,r){
for(var t in e)if(e[t].compareBuffer(r))return e[t];return null}static matchBuffMulti(e,r){if(r.final)return _.matchBuff(e,r.imgdata);var t=-1,a=0;if(r.imgdata)for(var s=0;s<e.length;s++){
var i=_.countMatch(e[s].buffer,e[s].bufferx+1,e[s].buffery+1,r.imgdata,!1);i.passed>a&&(a=i.passed,t=s)}return a<50?null:(r.canimprove&&_.isolateBuffer(e[t].buffer,e[t].bufferx+1,e[t].buffery+1,r.imgdata),e[t])}}_.buffsize=27,_.gridsize=30;class f{
constructor(e,r,t,a){this.imgdata=e,this.isdebuff=r,this.buffid=t,this.final=!!t&&!a,this.canimprove=a}}})(),__webpack_exports__})()}));
//# sourceMappingURL=index.bundle.js.map