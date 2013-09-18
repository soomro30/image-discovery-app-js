//>>built
require({cache:{"url:esriviewer/ui/toolbar/base/template/BookmarkListingTemplate.html":"<div class=\"bookmarksToolbarDropdown toolbarDropdownContent\" data-bind=\"visible:visible\">\r\n    <div class=\"createBookmarkIcon commonIcons16 add\" title=\"Create Bookmark\"\r\n         data-bind=\"visible:showCreateBookmarkIcon, click:showCreateBookmark\"></div>\r\n    <div class=\"bookmarksToolbarDropdownBookmarkEntries\" data-bind=\"foreach:_bookmarks\">\r\n        <div class=\"threePixelBorderRadius bookmarkToolbarEntry\" data-bind=\"click: $parent.handleBookmarkClick\">\r\n            <span class=\"bookmarkToolbarEntryText\" data-bind=\"text: $data.label\"></span>\r\n        </div>\r\n    </div>\r\n    <div class=\"bookmarksToolbarDropdownBookmarkRemovableEntries\" data-bind=\"template: {foreach:_removableBookmarks, afterAdd:handleAfterAddBookmark, beforeRemove:handleBeforeRemoveBookmark}\">\r\n        <div class=\"bookmarkToolbarEntryOuter\">\r\n            <div title=\"Remove Bookmark\" class=\"commonIcons16 bookmarkToolbarEntryRemoveIcon remove\"\r\n                 data-bind=\"click: $parent.removeClick\"></div>\r\n            <div class=\"threePixelBorderRadius bookmarkToolbarEntry\" data-bind=\"click: $parent.handleBookmarkClick\">\r\n                <span class=\"bookmarkToolbarEntryText\" data-bind=\"text: $data.label\"></span>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"}});define("esriviewer/ui/toolbar/base/BookmarkListingWidget",["dojo/_base/declare","dojo/text!./template/BookmarkListingTemplate.html","dojo/topic","dojo/_base/lang","dojo/on","../../tooltip/ConfirmTooltip","../../base/UITemplatedWidget","./model/BookmarkListingViewModel","esri/geometry/Point"],function(_1,_2,_3,_4,on,_5,_6,_7,_8){return _1([_6],{allowBookmarkCreation:true,templateString:_2,initListeners:function(){this.inherited(arguments);_3.subscribe(VIEWER_GLOBALS.EVENTS.BOOKMARK.CREATED,_4.hitch(this,this.handleBookmarkCreated));},postCreate:function(){this.inherited(arguments);this.viewModel=new _7();this.viewModel.showCreateBookmarkIcon(this.allowBookmarkCreation);this.viewModel.on(this.viewModel.SHOW_CREATE_BOOKMARK,_4.hitch(this,this.handleShowCreateBookmarkView));this.viewModel.on(this.viewModel.REMOVE_BOOKMARK_REQUEST,_4.hitch(this,this.handleRemoveBookmarkRequest));ko.applyBindings(this.viewModel,this.domNode);},loadViewerConfigurationData:function(){var _9=null;_3.publish(VIEWER_GLOBALS.EVENTS.CONFIGURATION.GET_ENTRY,"bookmarks",function(_a){_9=_a;});if(_9&&_9.allowCreation!=null&&_9.allowCreation==false){this.allowBookmarkCreation=false;}},isVisible:function(){return this.viewModel.visible();},toggle:function(){if(this.viewModel.visible()){this.hide();}else{this.show();}},show:function(){this.viewModel.visible(true);},hide:function(){this.hidePopups();this.viewModel.visible(false);},handleBookmarkCreated:function(_b){this.addBookmarks(_b,true);this.viewModel.sortRemovable();},addStaticBookmarks:function(_c){this.addBookmarks(_c,false);this.viewModel.sortStatic();this.viewModel.ignoreAddAnimation=false;},addBookmarks:function(_d,_e){if(_e==null){_e=false;}var _f;for(var key in _d){_f=_d[key];if(!this.isValidBookmark(_f)){continue;}var _10=_4.mixin({key:key},_f);_10.point=new _8({x:_f.point.x,y:_f.point.y,spatialReference:_f.point.spatialReference});if(_e){this.viewModel.addRemovableBookmark(_10);}else{this.viewModel.addBookmark(_10);}}},isValidBookmark:function(_11){if(_11.label!=null&&_11.label!=""){if(_11.zoomLevel!=null){var pt=_11.point;if(pt.x!=null&&pt.y!=null&&pt.spatialReference!=null&&pt.spatialReference.wkid!=null){return true;}}}return false;},handleRemoveBookmarkRequest:function(_12,evt){if(_12!=null){this.deleteBookmarkConfirmedCallback=_4.hitch(this,function(_13){VIEWER_UTILS.log("Bookmark Deleted: "+_13.label,VIEWER_GLOBALS.LOG_TYPE.INFO);_3.publish(VIEWER_GLOBALS.EVENTS.BOOKMARK.REMOVED,_13.key);this.viewModel.removeBookmark(_13);},_12);this.showDeleteBookmarkTooltip(evt);}},loadCookieBookmarks:function(){_3.publish(VIEWER_GLOBALS.EVENTS.BOOKMARK.STORAGE.GET,_4.hitch(this,this.handleLocalStorageBookmarksLoaded));},handleLocalStorageBookmarksLoaded:function(_14){this.addBookmarks(_14,true);this.viewModel.sortRemovable();},handleShowCreateBookmarkView:function(){_3.publish(VIEWER_GLOBALS.EVENTS.BOOKMARK.CREATE_WINDOW.SHOW);},createConfirmDeleteBookmarkTooltip:function(){this.confirmDeleteBookmarkTooltip=new _5({confirmCallback:_4.hitch(this,this.handleConfirmedBookmarkDelete)});this.confirmDeleteBookmarkTooltip.on("hide",_4.hitch(this,function(){this.deleteBookmarkConfirmedCallback=null;}));},handleConfirmedBookmarkDelete:function(){if(this.deleteBookmarkConfirmedCallback!=null&&_4.isFunction(this.deleteBookmarkConfirmedCallback)){this.deleteBookmarkConfirmedCallback();this.deleteBookmarkConfirmedCallback=null;}},showDeleteBookmarkTooltip:function(evt){if(this.confirmDeleteBookmarkTooltip==null){this.createConfirmDeleteBookmarkTooltip();}if(this.confirmDeleteBookmarkTooltip){this.confirmDeleteBookmarkTooltip.setAtMouseEvent(evt);this.confirmDeleteBookmarkTooltip.show();}},hidePopups:function(){if(this.confirmDeleteBookmarkTooltip){this.confirmDeleteBookmarkTooltip.hide();}}});});