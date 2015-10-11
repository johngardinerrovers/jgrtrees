/*
 * jQuery UI Touch Punch 0.2.2
 *
 * Copyright 2011, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function(t){function e(t,e){if(!(t.originalEvent.touches.length>1)){t.preventDefault();var n=t.originalEvent.changedTouches[0],i=document.createEvent("MouseEvents");i.initMouseEvent(e,!0,!0,window,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),t.target.dispatchEvent(i)}}if(t.support.touch="ontouchend"in document,t.support.touch){var n,i=t.ui.mouse.prototype,o=i._mouseInit;i._touchStart=function(t){var i=this;!n&&i._mouseCapture(t.originalEvent.changedTouches[0])&&(n=!0,i._touchMoved=!1,e(t,"mouseover"),e(t,"mousemove"),e(t,"mousedown"))},i._touchMove=function(t){n&&(this._touchMoved=!0,e(t,"mousemove"))},i._touchEnd=function(t){n&&(e(t,"mouseup"),e(t,"mouseout"),this._touchMoved||e(t,"click"),n=!1)},i._mouseInit=function(){var e=this;e.element.bind("touchstart",t.proxy(e,"_touchStart")).bind("touchmove",t.proxy(e,"_touchMove")).bind("touchend",t.proxy(e,"_touchEnd")),o.call(e)}}}(jQuery);