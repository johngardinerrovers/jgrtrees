/**
 * MODIFIED CAUSE WE NEEDED OUR OWN MARKUP
 * stacktable.js
 * Author & copyright (c) 2012: John Polacek
 * Dual MIT & GPL license
 *
 * Page: http://johnpolacek.github.com/stacktable.js
 * Repo: https://github.com/johnpolacek/stacktable.js/
 *
 * jQuery plugin for stacking tables on small screens
 *
 */
!function(t){t.fn.stacktable=function(e){var n=this,i={id:"stacktable",hideOriginal:!1},o=t.extend({},i,e);return n.each(function(){var e=t('<table class="'+o.id+'"><tbody></tbody></table>');void 0!==typeof o.myClass&&e.addClass(o.myClass);var n="";$table=t(this),$topRow=$table.find("tr").eq(0),$table.find("tr").each(function(e){var i="";i=0===e%2?"even":"odd",n+='<tr class="'+i+'">',t(this).find("td").each(function(e){""!==t(this).html()&&(n+='<tr class="'+i+'">',n+=$topRow.find("td,th").eq(e).html()?"<td>"+$topRow.find("td,th").eq(e).html()+"</td>":"<td></td>",n+="<td>"+t(this).html()+"</td>",n+="</tr>")})}),e.append(t(n)),$table.before(e),o.hideOriginal&&$table.hide()})}}(jQuery);