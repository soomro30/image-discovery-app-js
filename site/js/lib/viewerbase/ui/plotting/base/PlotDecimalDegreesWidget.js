//>>built
require({cache:{"url:esriviewer/ui/plotting/base/templates/PlotDecimalDegreesTemplate.html":"<div>\r\n    <div  class=\"plottingHeader\">Plot by Decimal Degrees</div>\r\n    <span class=\"searchByBoundsInputLbl\">x:</span>\r\n              <span data-dojo-attach-point=\"boundsXInput\"\r\n                    data-dojo-attach-event=\"onKeyUp: handleValueChange\"\r\n                    data-dojo-type=\"dijit/form/NumberTextBox\"\r\n                    style=\"width:${boundsNumberBoxWidth}\"\r\n                    data-dojo-props=\"constraints:{pattern:'##0.#####'}\"></span>\r\n    <span class=\"searchByBoundsInputLbl\">y:</span>\r\n              <span data-dojo-attach-point=\"boundsYInput\"\r\n                    data-dojo-attach-event=\"onKeyUp: handleValueChange\"\r\n                    data-dojo-type=\"dijit/form/NumberTextBox\"\r\n                    style=\"width:${boundsNumberBoxWidth}\"\r\n                    data-dojo-props=\"constraints:{pattern:'##0.#####'}\"></span>\r\n</div>"}});define("esriviewer/ui/plotting/base/PlotDecimalDegreesWidget",["dojo/_base/declare","dojo/text!./templates/PlotDecimalDegreesTemplate.html","dojo/Deferred","./BasePlottingWidget","dijit/form/NumberTextBox","esri/geometry/Point","esri/SpatialReference"],function(_1,_2,_3,_4,_5,_6,_7){return _1([_4],{templateString:_2,handleValueChange:function(){return this.onValuesChanged(this.isValid());},isValid:function(){return this.validateLatDDBounds()&&this.validateLonDDBounds();},validateLatDDBounds:function(){var x=this.boundsXInput.get("value");if(isNaN(x)){return false;}try{var _8=parseFloat(x);return _8<=180&&_8>=-180;}catch(err){return false;}},validateLonDDBounds:function(){var y=this.boundsYInput.get("value");if(isNaN(y)){return false;}try{var _9=parseFloat(y);return _9<=90&&_9>=-90;}catch(err){return false;}},getPoint:function(){var _a=new _3();var x=this.boundsXInput.get("value");var _b=parseFloat(x);var y=this.boundsYInput.get("value");var _c=parseFloat(y);var _d=new _6(_b,_c,new _7({wkid:this.defaultWKID}));_a.resolve(PROJECTION_UTILS.geometryToMapSpatialReference(_d));return _a.promise;}});});