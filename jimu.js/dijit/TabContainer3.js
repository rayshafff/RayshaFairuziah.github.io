// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/TabContainer3.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"control-node" data-dojo-attach-point\x3d"controlNode"\x3e\r\n    \x3ctable data-dojo-attach-point\x3d"controlTable" class\x3d"control-table" cellpading\x3d"0"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"tabTr"\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"container-node" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"tab-shelter" data-dojo-attach-point\x3d"shelter"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/keys dojo/Evented dojo/query dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./templates/TabContainer3.html jimu/dijit/ViewStack jimu/utils".split(" "),function(n,g,h,d,k,f,p,m,q,r,t,u,v){return n([q,r,p],{templateString:t,baseClass:"jimu-tab3",declaredClass:"jimu.dijit.TabContainer3",_currentIndex:-1,selected:"",tabs:null,average:!0,postCreate:function(){this.inherited(arguments);this._initSelf();this.selected?
this.selectTab(this.selected):0<this.tabs.length&&this.selectTab(this.tabs[0].title)},selectTab:function(a){h.forEach(this.tabItems,g.hitch(this,function(b,c){d.removeClass(b,"jimu-state-active");d.setAttr(b,"tabindex","-1");b.label===a&&(d.addClass(b,"jimu-state-active"),d.setAttr(b,"tabindex","0"),this._currentIndex=c)}));this.viewStack.switchView(a);this.emit("tabChanged",a)},addTab:function(a){if(!this.average){var b=m("td:last-child",this.tabTr);0<b.length&&d.destroy(b[0])}0<h.filter(this.tabs,
function(c){return c.title===a.title}).length?console.error("tab title conflict: "+a.title):(this.tabs.push(a),this._createTab(a),this.average||this._addEmptyTab())},_addEmptyTab:function(){var a=d.toDom('\x3ctd nowrap class\x3d"tab-item-td tab-item-td-empty" style\x3d"border-bottom:1px solid #ccc;"\x3e\x3cdiv class\x3d"tab-item-div"\x3e\x3c/div\x3e\x3c/td\x3e');d.place(a,this.tabTr)},removeTab:function(a){var b=-1;if(h.some(this.tabs,function(e,l){if(e.title===a)return b=l,!0})){var c=this.tabs.splice(b,
1)[0];h.some(this.tabItems,function(e,l){if(e.label===a)return this.tabItems.splice(l,1),d.destroy(e),!0},this);this.viewStack.removeView(c.content)}},showShelter:function(){d.setStyle(this.shelter,"display","block")},hideShelter:function(){d.setStyle(this.shelter,"display","none")},getSelectedIndex:function(){return this._currentIndex},getSelectedTitle:function(){return this.viewStack.getSelectedLabel()},_initSelf:function(){this.viewStack=new u(null,this.containerNode);this.own(k(this.containerNode,
"keydown",g.hitch(this,function(a){a.keyCode===f.ESCAPE&&(a.stopPropagation(),this.tabItems[this._currentIndex].focus())})));this.tabItems=[];h.forEach(this.tabs,function(a){this._createTab(a)},this);this.own(k(this.tabTr,"keydown",g.hitch(this,function(a){var b=a.target,c;a.keyCode===f.RIGHT_ARROW?c=b.nextElementSibling?!this.average&&d.hasClass(b.nextElementSibling,"tab-item-td-empty")?this.tabItems[0]:b.nextElementSibling:this.tabItems[0]:a.keyCode===f.LEFT_ARROW?c=b.previousElementSibling?b.previousElementSibling:
this.tabItems[this.tabItems.length-1]:a.keyCode===f.HOME?c=this.tabItems[0]:a.keyCode===f.END&&(c=this.tabItems[this.tabItems.length-1]);c&&(b=c,c.focus())})));this.average?(this.controlTable.style.tableLayout="fixed",d.addClass(this.domNode,"average")):this._addEmptyTab()},startup:function(){this.inherited(arguments);this._started=!0},_createTab:function(a){var b=d.toDom('\x3ctd nowrap class\x3d"tab-item-td"\x3e\x3cdiv class\x3d"tab-item-div"\x3e\x3c/div\x3e\x3c/td\x3e');b.label=a.title||"";b.title=
a.title;d.place(b,this.tabTr);var c=m(".tab-item-div",b)[0];c.innerHTML=v.sanitizeHTML(b.label);c.label=b.label;a.content.label=b.label;this.viewStack.addView(a.content);this.own(k(b,"click",g.hitch(this,function(e){this._onSelect(a.title,e)})));this.own(k(b,"keydown",g.hitch(this,function(e){e.keyCode!==f.ENTER&&e.keyCode!==f.SPACE||this._onSelect(a.title,e)})));this.tabItems.push(b)},_onSelect:function(a,b){d.hasClass(b.target,"jimu-state-active")||this.selectTab(a)}})});