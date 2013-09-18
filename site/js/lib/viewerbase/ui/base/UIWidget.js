//>>built
define("esriviewer/ui/base/UIWidget",["dojo/_base/declare","dijit/_Widget","dojo/_base/lang","dojo/_base/connect","dojo/dom-class","dojo/dom-construct","dojo/dom-style","../../base/ConfigurationEntryMixin"],function(_1,_2,_3,_4,_5,_6,_7,_8){return _1([_2,_8],{defaultPositioning:{x:0,y:0},animateOnPlace:true,animate:false,animation:"fadeIn animated",positioningParamName:null,isPositionedByConfig:false,LEFT_LOWER:"left",RIGHT_LOWER:"right",TOP_LOWER:"top",BOTTOM_LOWER:"bottom",constructor:function(){this.creationPositioning=_3.mixin({},this.defaultPositioning);this.connects=[];this.subscribes=[];},postCreate:function(){this.loadViewerConfigurationData();this.initListeners();if(this.isPositionedByConfig){this.positionNode();}},initListeners:function(){},destroy:function(){this.clearSubscribes();this.clearConnects();},placeAt:function(_9){_6.place(this.domNode,_9);if(this.animate&&this.animateOnPlace){this._animateWidget();}return this;},clearSubscribes:function(){if(_3.isArray(this.subscribes)){for(var i=0;i<this.subscribes.length;i++){this.subscribes[i].remove();}}},positionNode:function(){_7.set(this.domNode,"position","absolute");var _a=VIEWER_GLOBALS.windowPositioning[this.positioningParamName];var _b=(_a!=null&&_a.x!=null)?_a.x:this.defaultPositioning.x;var _c=(_a!=null&&_a.y!=null)?_a.y:this.defaultPositioning.y;var _d="left";var _e="top";if(_a){if(_a.alignY!=null&&_3.isString(_a.alignY)){var _f=_a.alignY.toLowerCase();if(_f===this.TOP_LOWER||_f===this.BOTTOM_LOWER){_e=_f;}}if(_a.alignX!=null&&_3.isString(_a.alignX)){var _10=_a.alignX.toLowerCase();if(_10===this.LEFT_LOWER||_10===this.RIGHT_LOWER){_d=_10;}}}_7.set(this.domNode,_d,_b+"px");_7.set(this.domNode,_e,_c+"px");this.creationPositioning={x:_b,y:_c,alignX:_d,alignY:_e};},clearConnects:function(){if(_3.isArray(this.connects)){for(var i=0;i<this.connects.length;i++){if(this.connects[i].remove!=null&&_3.isFunction(this.connects[i].remove)){this.connects[i].remove();}else{_4.disconnect(this.connects[i]);}}}},show:function(){_7.set(this.domNode,"display","block");},hide:function(){_7.set(this.domNode,"display","none");},hidePopups:function(){},_animateWidget:function(){this._removeAnimationClasses();_5.add(this.domNode,this.animation);},_removeAnimationClasses:function(){_5.remove(this.domNode,this.animation);},_handleContentAnimation:function(_11,_12){if(_11){_5.add(_12,VIEWER_GLOBALS.ANIMATIONS.FADE.IN);}else{_5.remove(_12,VIEWER_GLOBALS.ANIMATIONS.FADE.IN);}}});});