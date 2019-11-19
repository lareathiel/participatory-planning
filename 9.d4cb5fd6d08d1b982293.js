(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/2d/layers/TileLayerView2D":1592,"esri/views/layers/LayerView":1633,"esri/views/layers/support/ClipArea":1634,"esri/views/2d/layers/LayerView2D":1647,"esri/views/layers/support/ClipRect":1648,"esri/views/layers/support/Geometry":1649,"esri/views/layers/support/Path":1650,"esri/renderers/support/clickToleranceUtils":1656,"esri/views/2d/layers/support/popupUtils2D":1741,"esri/views/2d/layers/BitmapTileLayerView2D":1825,"esri/views/layers/TileLayerView":1826})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1592:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(1),i(10),i(11),i(14),i(6),i(9),i(7),i(0),i(300),i(1825),i(1647),i(1741),i(646),i(165),i(657),i(658),i(1633),i(640),i(1826)],void 0===(n=function(e,t,i,r,n,o,s,a,l,u,p,c,h,y,d,f,v,m,g,w,b,_){var V=a.getLogger("esri.views.2d.layers.TileLayerView2D"),O=[0,0];return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._tileStrategy=null,t._fetchQueue=null,t.container=new c.Container,t.layer=null,t}return i(t,e),t.prototype.initialize=function(){var e,t=this,i=this.layer.tileInfo,r=i&&i.spatialReference;r||(e=new s("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer})),r.equals(this.view.spatialReference)||(e=new s("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})),this.watch("resampling",function(e){t.refresh()}),e&&this.addResolvingPromise(u.reject(e))},Object.defineProperty(t.prototype,"resampling",{get:function(){return!("resampling"in this.layer)||!1!==this.layer.resampling},enumerable:!0,configurable:!0}),t.prototype.hitTest=function(e,t){return null},t.prototype.update=function(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")},t.prototype.attach=function(){var e=this,t="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new f(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new m({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:function(t,i){return e.fetchTile(t,i)}}),this._tileStrategy=new g({cachePolicy:"keep",resampling:this.resampling,acquireTile:function(t){return e.acquireTile(t)},releaseTile:function(t){return e.releaseTile(t)},tileInfoView:this._tileInfoView}),this.requestUpdate(),this.container.requestRender(),this.inherited(arguments)},t.prototype.detach=function(){this.inherited(arguments),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.createFetchPopupFeaturesQueryGeometry=function(e,t){return d.createQueryGeometry(e,t,this.view)},t.prototype.doRefresh=function(e){return o(this,void 0,void 0,function(){var e=this;return n(this,function(t){return this.updateRequested||this.suspended?[2]:(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(function(t){return e._enqueueTileFetch(t)}),this.notifyChange("updating"),[2])})})},t.prototype.isUpdating=function(){return this._fetchQueue.length>0},t.prototype.acquireTile=function(e){var t,i,r=this._bitmapView.createTile(e),n=r.bitmap;return t=this._tileInfoView.getTileCoords(O,r.key),n.x=t[0],n.y=t[1],n.resolution=this._tileInfoView.getTileResolution(r.key),i=this._tileInfoView.tileInfo.size,n.width=i[0],n.height=i[1],this._enqueueTileFetch(r),this.requestUpdate(),r},t.prototype.releaseTile=function(e){var t=this;this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",function(){e.destroy(),t.requestUpdate()}),this.requestUpdate()},t.prototype.fetchTile=function(e,t){return o(this,void 0,void 0,function(){var i,r,o,s,a,p,c,h,y;return n(this,function(n){switch(n.label){case 0:if(i="tilemapCache"in this.layer?this.layer.tilemapCache:null,r=!l.isNone(t)&&t.signal,i)return[3,4];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,this._fetchImage(e,r)];case 2:return[2,n.sent()];case 3:if(o=n.sent(),!u.isAbortError(o)&&!this.resampling)return[2,this._createBlankImage()];throw o;case 4:s=v.pool.acquire(),n.label=5;case 5:return n.trys.push([5,8,,10]),[4,i.fetchAvailabilityUpsample(e.level,e.row,e.col,s,{signal:r})];case 6:return n.sent(),s.level===e.level||this.resampling?[4,this._fetchImage(s,r)]:[2,this._createBlankImage()];case 7:return a=n.sent(),[3,10];case 8:if(p=n.sent(),u.isAbortError(p))throw v.pool.release(s),p;return[4,this._fetchImage(e,r)];case 9:return a=n.sent(),[3,10];case 10:return c=s.level,h=s.row,y=s.col,v.pool.release(s),this.resampling&&c!==e.level?[2,this._resampleImage(a,c,h,y,e.level,e.row,e.col)]:[2,a]}})})},t.prototype._enqueueTileFetch=function(e){return o(this,void 0,void 0,function(){var t,i,r=this;return n(this,function(n){switch(n.label){case 0:if(this._fetchQueue.has(e.key.id))return[2];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,this._fetchQueue.push(e.key)];case 2:return t=n.sent(),e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",function(){return r.requestUpdate()}),this._bitmapView.addChild(e),[3,4];case 3:return i=n.sent(),u.isAbortError(i)||V.error(i),[3,4];case 4:return this.requestUpdate(),[2]}})})},t.prototype._fetchImage=function(e,t){return o(this,void 0,void 0,function(){return n(this,function(i){return[2,this.layer.fetchTile(e.level,e.row,e.col,{timestamp:this.refreshTimestamp,signal:t})]})})},t.prototype._resampleImage=function(e,t,i,r,n,o,s){var a=this._tileInfoView.tileInfo.size,l=this._tileInfoView.getTileResolution(t),u=this._tileInfoView.getTileResolution(n),p=this._tileInfoView.getLODInfoAt(n),c=p.getXForColumn(s),h=p.getYForRow(o),y=(p=this._tileInfoView.getLODInfoAt(t)).getXForColumn(r),d=p.getYForRow(i),f=Math.round((c-y)/l),v=Math.round(-(h-d)/l),m=Math.round(a[0]*(u/l)),g=Math.round(a[1]*(u/l)),w=this._createBlankImage();return w.getContext("2d").drawImage(e,f,v,m,g,0,0,a[0],a[1]),w},t.prototype._createBlankImage=function(){var e=this._tileInfoView.tileInfo.size,t=document.createElement("canvas");return t.width=e[0],t.height=e[1],t},r([p.property({dependsOn:["layer.resampling?"]})],t.prototype,"resampling",null),r([p.subclass("esri.views.2d.layers.TileLayerView2D")],t)}(p.declared(_.TileLayerView(b.RefreshableLayerView(h.BitmapTileLayerView2D(y.LayerView2D(w))))))}.apply(null,r))||(e.exports=n)},1633:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(1),i(16),i(49),i(282),i(284),i(6),i(225),i(7),i(0)],void 0===(n=function(e,t,i,r,n,o,s,a,l,u,p,c){return function(e){function t(t){var i=e.call(this)||this;return i.layer=null,i.parent=null,i}return i(t,e),t.prototype.initialize=function(){var e=this;this.addResolvingPromise(this.layer),this.when().catch(function(t){if("layerview:create-error"!==t.name){var i=e.layer&&e.layer.id||"no id",r=e.layer&&e.layer.title||"no title";return l.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+r+"', id: '"+i+"')",t),p.reject(t)}})},t.prototype.destroy=function(){this.layer=this.parent=null},Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.isUpdating=function(){return!1},r([c.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),r([c.property()],t.prototype,"layer",void 0),r([c.property()],t.prototype,"parent",void 0),r([c.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended"]})],t.prototype,"suspended",null),r([c.property({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],t.prototype,"updating",null),r([c.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),r([c.subclass("esri.views.layers.LayerView")],t)}(c.declared(s.HandleOwnerMixin(a.IdentifiableMixin(u.EsriPromiseMixin(o.EventedMixin(n))))))}.apply(null,r))||(e.exports=n)},1634:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(1),i(2),i(12),i(0)],void 0===(n=function(e,t,i,r,n,o){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),i([o.subclass("esri.views.layers.support.ClipArea")],t)}(o.declared(n.JSONSupport))}.apply(null,r))||(e.exports=n)},1647:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(1),i(29),i(146),i(25),i(0),i(1634),i(1648),i(1649),i(1650)],void 0===(n=function(e,t,i,r,n,o,s,a,l,u,p,c){Object.defineProperty(t,"__esModule",{value:!0});var h=n.ofType({key:"type",base:l,typeMap:{rect:u,path:c,geometry:p}});t.LayerView2D=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.clips=new h,t.moving=!1,t.attached=!1,t.lastUpdateId=-1,t.updateRequested=!1,t}return i(t,e),t.prototype.initialize=function(){var e=this;this.when(function(){e.requestUpdate()},function(){});var t=function(){return e.notifyChange("rendering")};this.handles.add([s.init(this,"suspended",function(t){e.container&&(e.container.visible=!t),e.view&&!t&&e.updateRequested&&e.view.requestLayerViewUpdate(e)},!0),s.init(this,"fullOpacity",function(t){e.container&&(e.container.opacity=t)},!0),s.on(this,"container","post-render",t),s.on(this,"container","will-render",t)])},t.prototype.destroy=function(){this.attached&&(this.attached=!1,this.detach()),this.handles.remove("initialize"),this.updateRequested=!1,this.layer=null,this.view=null},Object.defineProperty(t.prototype,"rendering",{get:function(){return this.attached&&!this.suspended&&(this.moving||this.container.renderRequested||this.isRendering())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&(!this.attached||this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.isVisibleAtScale=function(e){var t=!0,i=this.layer,r=i.minScale,n=i.maxScale;if(null!=r&&null!=n){var o=!r,s=!n;!o&&e<=r&&(o=!0),!s&&e>=n&&(s=!0),t=o&&s}return t},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestLayerViewUpdate(this))},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return!1},t.prototype.canResume=function(){var e=this.inherited(arguments);return e&&(e=this.isVisibleAtScale(this.view.scale)),e},r([a.property({type:h,set:function(e){var t=o.referenceSetter(e,this._get("clips"),h);this._set("clips",t)}})],t.prototype,"clips",void 0),r([a.property()],t.prototype,"moving",void 0),r([a.property({dependsOn:["attached","suspended","moving"]})],t.prototype,"rendering",null),r([a.property()],t.prototype,"attached",void 0),r([a.property()],t.prototype,"container",void 0),r([a.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),r([a.property({readOnly:!0})],t.prototype,"updateParameters",void 0),r([a.property()],t.prototype,"updateRequested",void 0),r([a.property({dependsOn:["updateRequested","attached","suspended"]})],t.prototype,"updating",null),r([a.property()],t.prototype,"view",void 0),r([a.subclass("esri.views.2d.layers.LayerView2D")],t)}(a.declared(e))}}.apply(null,r))||(e.exports=n)},1648:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(1),i(2),i(0),i(1634)],void 0===(n=function(e,t,i,r,n,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="rect",t.left=null,t.right=null,t.top=null,t.bottom=null,t}var o;return r(t,e),o=t,t.prototype.clone=function(){return new o({left:this.left,right:this.right,top:this.top,bottom:this.bottom})},Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),i([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"left",void 0),i([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"right",void 0),i([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"top",void 0),i([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"bottom",void 0),i([n.property({readOnly:!0,dependsOn:["left","right","top","bottom"]})],t.prototype,"version",null),o=i([n.subclass("esri.views.layers.support.ClipRect")],t)}(n.declared(o))}.apply(null,r))||(e.exports=n)},1649:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(1),i(2),i(36),i(0),i(72),i(57),i(1634)],void 0===(n=function(e,t,i,r,n,o,s,a,l){var u={base:s,key:"type",typeMap:{extent:n.Extent,polygon:n.Polygon}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="geometry",t.geometry=null,t}var n;return r(t,e),n=t,Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new n({geometry:this.geometry.clone()})},i([o.property({types:u,json:{read:a.fromJSON,write:!0}})],t.prototype,"geometry",void 0),i([o.property({readOnly:!0,dependsOn:["geometry"]})],t.prototype,"version",null),n=i([o.subclass("esri.views.layers.support.Geometry")],t)}(o.declared(l))}.apply(null,r))||(e.exports=n)},1650:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(1),i(2),i(0),i(1634)],void 0===(n=function(e,t,i,r,n,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="path",t.path=[],t}return r(t,e),Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),i([n.property({type:[[[Number]]],json:{write:!0}})],t.prototype,"path",void 0),i([n.property({readOnly:!0,dependsOn:["path"]})],t.prototype,"version",null),i([n.subclass("esri.views.layers.support.Path")],t)}(n.declared(o))}.apply(null,r))||(e.exports=n)},1656:function(e,t,i){var r,n;r=[i.dj.c(e.i),t],void 0===(n=function(e,t){function i(e,t){return t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):t&&t.yoffset?Math.max(e,Math.abs(t.yoffset)):e}function r(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){for(var t=0,i=0,r=0;r<e.length;r++){var n=e[r].size;"number"==typeof n&&(t+=n,i++)}return t/i}(e.stops):t}function n(e,t){if(!t)return e;var i=t.filter(function(e){return"size"===e.type}).map(function(t){var i=t.maxSize,n=t.minSize;return(r(i,e)+r(n,e))/2}),n=0,o=i.length;if(0===o)return e;for(var s=0;s<o;s++)n+=i[s];var a=Math.floor(n/o);return Math.max(a,e)}Object.defineProperty(t,"__esModule",{value:!0}),t.calculateTolerance=function(e){if(!e)return 6;var t="visualVariables"in e?n(6,e.visualVariables):6;if("simple"===e.type)return i(t,e.symbol);if("unique-value"===e.type){var r=t;return e.uniqueValueInfos.forEach(function(e){r=i(r,e.symbol)}),r}if("class-breaks"===e.type){var o=t;return e.classBreakInfos.forEach(function(e){o=i(o,e.symbol)}),o}return e.type,t}}.apply(null,r))||(e.exports=n)},1741:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(3),i(1),i(37)],void 0===(n=function(e,t,i,r,n){Object.defineProperty(t,"__esModule",{value:!0}),t.createQueryGeometry=function(e,t,i){var r=i.get("state.resolution"),o=t*("number"==typeof r?r:1),s=e.clone().offset(-o,-o),a=e.clone().offset(o,o),l=i.spatialReference;return new n({xmin:Math.min(s.x,a.x),ymin:Math.min(s.y,a.y),xmax:Math.max(s.x,a.x),ymax:Math.max(s.y,a.y),spatialReference:l})}}.apply(null,r))||(e.exports=n)},1825:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(1),i(2),i(0),i(668),i(300)],void 0===(n=function(e,t,i,r,n,o,s){Object.defineProperty(t,"__esModule",{value:!0}),t.BitmapTileLayerView2D=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.container=new s.Container,t}return r(t,e),t.prototype.attach=function(){var e=this;this.view.timeline.record(this.layer.title+" (BitmapTileLayer) Attach"),this._bitmapView=new o.BitmapTileContainer(this._tileInfoView,this.clips),this.handles.add(this.clips.on("change",function(){return e._bitmapView.setClips(e.clips)})),this.container.addChild(this._bitmapView)},t.prototype.detatch=function(){this.container.removeChild(this._bitmapView),this._bitmapView.removeAllChildren()},i([n.subclass("esri.views.2d.layers.BitmapTileLayerView2D")],t)}(n.declared(e))}}.apply(null,r))||(e.exports=n)},1826:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(1),i(10),i(11),i(14),i(7),i(0),i(1656)],void 0===(n=function(e,t,i,r,n,o,s,a,l,u){Object.defineProperty(t,"__esModule",{value:!0}),t.TileLayerView=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.fetchPopupFeatures=function(e){return o(this,void 0,void 0,function(){var t,i,r,l=this;return n(this,function(p){return t=this.layer,e?"tile"!==t.type?[2,a.reject(new s("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:t.type}))]:(i=this.get("view.scale"),r=t.allSublayers.toArray().filter(function(e){var t=0===e.minScale||i<=e.minScale,r=0===e.maxScale||i>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&t&&r}),[2,a.eachAlways(r.map(function(t){return o(l,void 0,void 0,function(){var i,r,o;return n(this,function(n){switch(n.label){case 0:return i=t.createQuery(),r=u.calculateTolerance(t.renderer),i.geometry=this.createFetchPopupFeaturesQueryGeometry(e,r),o=i,[4,t.popupTemplate.getRequiredFields()];case 1:return o.outFields=n.sent(),[4,t.queryFeatures(i)];case 2:return[2,n.sent().features]}})})})).then(function(e){return[].concat.apply([],e.map(function(e){return e.value}).filter(Boolean))})]):[2,a.reject(new s("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}))]})})},r([l.property()],t.prototype,"layer",void 0),r([l.subclass("esri.layers.mixins.TileLayerView")],t)}(l.declared(e))}}.apply(null,r))||(e.exports=n)}}]);