//>>built
require({cache:{"url:esriviewer/ui/legend/template/MapLegendtemplate.html":"<div class=\"legendWindowContent\">\r\n    <div class=\"legendWidgetContainer\">\r\n        <div data-dojo-attach-point=\"legendWidgetContents\"></div>\r\n    </div>\r\n</div>"}});define("esriviewer/ui/legend/MapLegendWidget",["dojo/_base/declare","dojo/text!./template/MapLegendtemplate.html","dojo/topic","dojo/_base/lang","dojo/dom-construct","../base/UITemplatedWidget","esri/dijit/Legend"],function(_1,_2,_3,_4,_5,_6,_7){return _1([_6],{startupCalled:false,templateString:_2,initListeners:function(){_3.subscribe(VIEWER_GLOBALS.EVENTS.MAP.LAYERS.REMOVED,_4.hitch(this,this.handleRefreshLegend));_3.subscribe(VIEWER_GLOBALS.EVENTS.MAP.LAYERS.ADDED,_4.hitch(this,this.handleRefreshLegend));this.operationalLayerResponseCallback=_4.hitch(this,this._handleLegendOperationalLayersResponse);},handleRefreshLegend:function(){if(this.legendWidget!=null){if(!this.startupCalled){this.startup();}_3.publish(VIEWER_GLOBALS.EVENTS.MAP.LAYERS.OPERATIONAL.GET,this.operationalLayerResponseCallback);}},_handleLegendOperationalLayersResponse:function(_8){if(_8){var _9=[];for(var _a in _8){_9.push({layer:_8[_a]});}}this.legendWidget.refresh(_9);},postCreate:function(){this.inherited(arguments);var _b=[];_3.publish(VIEWER_GLOBALS.EVENTS.MAP.LAYERS.OPERATIONAL.GET,function(_c){for(var _d in _c){_b.push({layer:_c[_d]});}});var _e;_3.publish(VIEWER_GLOBALS.EVENTS.MAP.GET,function(_f){_e=_f;});var _10={map:_e};if(_b.length>0){_10.layerInfos=_b;}this.legendWidget=new _7(_10,this.legendWidgetContents);},startup:function(){if(!this.startupCalled){try{this.legendWidget.startup();this.startupCalled=true;}catch(err){}}}});});