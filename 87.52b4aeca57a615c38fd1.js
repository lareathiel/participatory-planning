(function(){(this||window).webpackJsonp.registerAbsMids({"esri/renderers/support/heatmapUtils":1779,"esri/views/2d/layers/features/tileRenderers/BaseTileRenderer":1846,"esri/views/2d/layers/features/tileRenderers/HeatmapTileRenderer":2583,"esri/views/2d/layers/features/tileRenderers/support/HeatmapSource":2584})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1779:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(106),r(13)],void 0===(i=function(e,t,r,n){function i(e,t,r,i,a){for(var o=new Uint32Array(e*e),l=("buffer"in t?t:new Float64Array(t)),s=("buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer)),u=s.length/(a-i),p=0;p<l.length;p++){var d=l[p],c=Math.floor((d-i)*u);o[p]=s[n.clamp(c,0,s.length-1)]}return o.buffer}function a(e){for(var t=Math.round(3*e),r=2*e*e,n=new Float64Array(2*t+1),i=0;i<=n.length;i++)n[i]=Math.exp(-Math.pow(i-t,2)/r)/Math.sqrt(2*Math.PI)*(e/2);return n}function o(e,t){return"function"==typeof e?e:e?"string"==typeof t?function(t){return-1*+t[e]}:function(r){return+r[e]+t}:function(e){return 1}}Object.defineProperty(t,"__esModule",{value:!0}),t.generateGradient=function(){if(!("document"in r))return function(e){return null};var e=document.createElement("canvas"),t=e.getContext("2d");return e.height=512,e.width=1,function(r){t.clearRect(0,0,1,e.height);for(var n=t.createLinearGradient(0,0,0,e.height),i=0,a=r.colorStops;i<a.length;i++){var o=a[i],l=o.ratio,s=o.color;n.addColorStop(Math.max(l,.001),"rgba("+s[0]+", "+s[1]+", "+s[2]+", "+s[3]+")")}return t.fillStyle=n,t.fillRect(0,0,1,e.height),t.getImageData(0,0,1,e.height).data}}(),t.calculateHeatmapIntensityInfo=function(e,t,r,n){for(var i,l=t.blurRadius,s=t.fieldOffset,u=t.field,p=new Float64Array(r*n),d=a(l),c=Math.round(3*l),f=Number.NEGATIVE_INFINITY,y=o(u,s),h=0,g=e;h<g.length;h++)for(var m=g[h],v=m.geometry,w=m.attributes,b=v.x-c,x=v.y-c,I=Math.max(0,b),T=Math.max(0,x),R=Math.min(n,v.y+c),M=Math.min(r,v.x+c),P=+y(w),U=T;U<R;U++)for(var A=d[U-x],V=I;V<M;V++){var C=d[V-b];(i=p[U*r+V]+=A*C*P)>f&&(f=i)}return{matrix:p.buffer,max:f}},t.drawHeatmap=function(e,t,r,n,a,o){e.canvas.width=e.canvas.height=t,e.clearRect(0,0,t,t);var l=e.getImageData(0,0,t,t);r&&n&&l.data.set(new Uint8ClampedArray(i(t,r,n,a,o))),e.putImageData(l,0,0)},t.createHeatmapImageData=i,t.createKernel=a,t.createValueFunction=o}.apply(null,n))||(e.exports=i)},1846:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(2),r(1),r(282),r(0)],void 0===(i=function(e,t,r,n,i,a){Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(t){var r=e.call(this,t)||this;return r.tiles=new Map,r}return r(t,e),t.prototype.destroy=function(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null},Object.defineProperty(t.prototype,"updating",{get:function(){return this.isUpdating()},enumerable:!0,configurable:!0}),t.prototype.acquireTile=function(e){var t=this,r=this.createTile(e);return r.once("isReady",function(){return t.notifyChange("updating")}),this.tiles.set(e.id,r),r},t.prototype.lockAttributeTextureUpload=function(){},t.prototype.unlockAttributeTextureUpload=function(){},t.prototype.forceAttributeTextureUpload=function(){},t.prototype.forEachTile=function(e){this.tiles.forEach(e)},t.prototype.releaseTile=function(e){this.tiles.delete(e.key.id),this.disposeTile(e)},t.prototype.isUpdating=function(){var e=!0;return this.tiles.forEach(function(t){e=e&&t.isReady}),!e},t.prototype.setHighlight=function(e,t){},t.prototype.invalidateLabels=function(){},t.prototype.requestUpdate=function(){this.layerView.requestUpdate()},n([a.property()],t.prototype,"layer",void 0),n([a.property()],t.prototype,"layerView",void 0),n([a.property()],t.prototype,"tileInfoView",void 0),n([a.property()],t.prototype,"updating",null),n([a.subclass("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],t)}(a.declared(i.HandleOwner));t.default=o}.apply(null,n))||(e.exports=i)},2583:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(1),r(2),r(14),r(6),r(7),r(0),r(1779),r(668),r(1846),r(2584)],void 0===(i=function(e,t,r,n,i,a,o,l,s,u,p,d){Object.defineProperty(t,"__esModule",{value:!0});var c=a.getLogger("esri.2d.layers.features.tileRenderers.HeatmapTileRenderer"),f=function(e){function t(t){var r=e.call(this,t)||this;r.featuresView={attributeView:{initialize:function(){},requestUpdate:function(){}}};var n=t.layerView.clips;return r.container=new u.BitmapTileContainer(t.tileInfoView,t.layerView.clips),r.handles.add([n.on("change",function(){return r.container.setClips(n)})]),r}return n(t,e),Object.defineProperty(t.prototype,"gradient",{get:function(){return s.generateGradient(this.renderer.toJSON())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"renderer",{get:function(){var e=this.layer.renderer.type;return"heatmap"!==this.layer.renderer.type?(c.error(new i("mapview-bad-type","Found invalid type "+e+" for renderer")),null):this.layer.renderer},enumerable:!0,configurable:!0}),t.prototype.createTile=function(e){var t=this.container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t},t.prototype.onConfigUpdate=function(){var e=this.renderer,t=e.minPixelIntensity,r=e.maxPixelIntensity,n=this.gradient;this.tiles.forEach(function(e){var i=e.bitmap.source;i&&(i.minPixelIntensity=t,i.maxPixelIntensity=r,i.gradient=n,e.bitmap.invalidateTexture())})},t.prototype.hitTest=function(e,t){return o.resolve([])},t.prototype.install=function(e){e.addChild(this.container)},t.prototype.uninstall=function(e){this.container.removeAllChildren(),e.removeChild(this.container)},t.prototype.disposeTile=function(e){this.container.removeChild(e),e.destroy()},t.prototype.supportsRenderer=function(e){return e&&"heatmap"===e.type},t.prototype.onTileData=function(e){var t=this.tiles.get(e.tileKey);if(t){var r=e.intensityInfo,n=this.renderer,i=n.minPixelIntensity,a=n.maxPixelIntensity,o=t.bitmap.source||new d.HeatmapSource;o.intensities=r&&r.matrix||null,o.minPixelIntensity=i,o.maxPixelIntensity=a,o.gradient=this.gradient,t.bitmap.source=o,this.container.addChild(t),this.requestUpdate()}},t.prototype.onTileError=function(e){console.error(e)},r([l.property({readOnly:!0,dependsOn:["layer.renderer"]})],t.prototype,"gradient",null),r([l.subclass("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],t)}(l.declared(p.default));t.default=f}.apply(null,n))||(e.exports=i)},2584:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(1779)],void 0===(i=function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){this.gradient=null,this.height=512,this.width=512}return e.prototype.render=function(e){r.drawHeatmap(e,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity)},e}();t.HeatmapSource=n}.apply(null,n))||(e.exports=i)}}]);