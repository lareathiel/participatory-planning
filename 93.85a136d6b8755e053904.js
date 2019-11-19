(function(){(this||window).webpackJsonp.registerAbsMids({"esri/portal/support/layersLoader":1625,"esri/layers/support/lazyLayerLoader":1684,"esri/renderers/support/styleUtils":1701})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1625:function(e,n,r){var t,a;t=[r.dj.c(e.i),n,r(10),r(11),r(44),r(14),r(7),r(1684),r(88),r(706),r(1701)],void 0===(a=function(e,n,r,t,a,i,u,o,c,l,s){function p(e,n){return t(this,void 0,void 0,function(){var t,a,i,u,o,c;return r(this,function(r){switch(r.label){case 0:return t=e.instance,a=t.portalItem,i=a.url,u=a.title,o=l.createForItem(a),"group"===t.type?(t.read({title:u},o),[2,f(t,e)]):(i&&t.read({url:i},o),[4,h(e,n)]);case 1:return(c=r.sent())&&t.read(c,o),t.read({title:u},o),[2,s.loadStyleRenderer(t,o)]}})})}function f(e,n){var r,t,a=e.portalItem.type;switch(a){case"Feature Service":r=o.layerLookupMap.FeatureLayer;break;case"Stream Service":r=o.layerLookupMap.StreamLayer;break;case"Scene Service":r=o.layerLookupMap.SceneLayer;break;case"Feature Collection":r=o.layerLookupMap.FeatureLayer;break;default:throw new i("portal:unsupported-item-type-as-group","The item type '"+a+"' is not supported as a 'GroupLayer'")}return r().then(function(e){return t=e,h(n)}).then(function(r){return r&&Array.isArray(r.layers)?d(e,t,r,n):y(e,t,n)})}function y(e,n,r){if(!e.portalItem.url)return u.resolve();return a(e.portalItem.url,{responseType:"json",query:{f:"json"}}).then(function(t){var a=t.data;if(a&&Array.isArray(a.layers)){var i=a.layers.map(function(e){return{id:e.id,name:e.name}});return d(e,n,{layers:i},r)}})}function d(e,n,r,t){var a=r.showLegend,i=r.layers.slice();i.reverse(),i.forEach(function(r){var t=new n({portalItem:e.portalItem,layerId:r.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){var i={origin:"portal-item",portal:e.portalItem.portal||c.getDefault()};t.read(r,i),null!=a&&t.read({showLegend:a},i)}e.add(t)})}function h(e,n){if(!1===e.supportsData)return u.resolve();var r=e.instance;return r.portalItem.fetchData("json",n).catch(function(){return null}).then(function(e){var n,t=e;if(function(e){return"stream"!==e.type&&"layerId"in e}(r)){var a=!0;if(e&&Array.isArray(t.layers)){null==r.layerId&&(r.layerId=t.layers[0].id);for(var i=0;i<t.layers.length;i++)if(t.layers[i].id===r.layerId){n=t.layers[i];break}n&&(1===t.layers.length&&(a=!1),null!=e.showLegend&&(n.showLegend=e.showLegend))}return a&&"service-name"!==r.sublayerTitleMode&&(r.sublayerTitleMode="item-title-and-service-name"),n}return e})}Object.defineProperty(n,"__esModule",{value:!0}),n.load=function(e,n){return t(this,void 0,void 0,function(){var t;return r(this,function(r){switch(r.label){case 0:return(t=e.instance.portalItem)&&t.id?[4,t.load(n)]:[2,u.resolve()];case 1:return r.sent(),function(e){var n=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(n.type))throw new i("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:n.type,expectedType:e.supportedTypes.join(", ")})}(e),[2,p(e,n)]}})})}}.apply(null,t))||(e.exports=a)},1684:function(e,n,r){var t,a;t=[r.dj.c(e.i),n,r(7)],void 0===(a=function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.layerLookupMap={CSVLayer:function(){return t.create(function(e){return Promise.all([r.e(1),r.e(30)]).then(function(){var n=[r(1585)];e.apply(null,n)}.bind(this)).catch(r.oe)})},ElevationLayer:function(){return t.create(function(e){return Promise.resolve().then(function(){var n=[r(301)];e.apply(null,n)}.bind(this)).catch(r.oe)})},FeatureLayer:function(){return t.create(function(e){return r.e(1).then(function(){var n=[r(637)];e.apply(null,n)}.bind(this)).catch(r.oe)})},GroupLayer:function(){return t.create(function(e){return r.e(16).then(function(){var n=[r(1580)];e.apply(null,n)}.bind(this)).catch(r.oe)})},GeoRSSLayer:function(){return t.create(function(e){return r.e(37).then(function(){var n=[r(1586)];e.apply(null,n)}.bind(this)).catch(r.oe)})},ImageryLayer:function(){return t.create(function(e){return r.e(17).then(function(){var n=[r(1581)];e.apply(null,n)}.bind(this)).catch(r.oe)})},KMLLayer:function(){return t.create(function(e){return r.e(26).then(function(){var n=[r(1588)];e.apply(null,n)}.bind(this)).catch(r.oe)})},MapImageLayer:function(){return t.create(function(e){return r.e(13).then(function(){var n=[r(1579)];e.apply(null,n)}.bind(this)).catch(r.oe)})},MapNotesLayer:function(){return t.create(function(e){return Promise.all([r.e(1),r.e(104)]).then(function(){var n=[r(1775)];e.apply(null,n)}.bind(this)).catch(r.oe)})},OpenStreetMapLayer:function(){return t.create(function(e){return r.e(32).then(function(){var n=[r(1589)];e.apply(null,n)}.bind(this)).catch(r.oe)})},PointCloudLayer:function(){return t.create(function(e){return r.e(18).then(function(){var n=[r(1590)];e.apply(null,n)}.bind(this)).catch(r.oe)})},SceneLayer:function(){return t.create(function(e){return Promise.all([r.e(1),r.e(27)]).then(function(){var n=[r(1582)];e.apply(null,n)}.bind(this)).catch(r.oe)})},BuildingSceneLayer:function(){return t.create(function(e){return r.e(21).then(function(){var n=[r(1584)];e.apply(null,n)}.bind(this)).catch(r.oe)})},IntegratedMeshLayer:function(){return t.create(function(e){return r.e(31).then(function(){var n=[r(1587)];e.apply(null,n)}.bind(this)).catch(r.oe)})},StreamLayer:function(){return t.create(function(e){return Promise.all([r.e(1),r.e(38)]).then(function(){var n=[r(1583)];e.apply(null,n)}.bind(this)).catch(r.oe)})},TileLayer:function(){return t.create(function(e){return Promise.resolve().then(function(){var n=[r(302)];e.apply(null,n)}.bind(this)).catch(r.oe)})},UnknownLayer:function(){return t.create(function(e){return r.e(105).then(function(){var n=[r(1776)];e.apply(null,n)}.bind(this)).catch(r.oe)})},UnsupportedLayer:function(){return t.create(function(e){return r.e(106).then(function(){var n=[r(1777)];e.apply(null,n)}.bind(this)).catch(r.oe)})},VectorTileLayer:function(){return t.create(function(e){return Promise.resolve().then(function(){var n=[r(303)];e.apply(null,n)}.bind(this)).catch(r.oe)})},WebTileLayer:function(){return t.create(function(e){return r.e(33).then(function(){var n=[r(1578)];e.apply(null,n)}.bind(this)).catch(r.oe)})},WMSLayer:function(){return t.create(function(e){return r.e(28).then(function(){var n=[r(1591)];e.apply(null,n)}.bind(this)).catch(r.oe)})},WMTSLayer:function(){return t.create(function(e){return r.e(74).then(function(){var n=[r(1778)];e.apply(null,n)}.bind(this)).catch(r.oe)})},BingMapsLayer:function(){return t.create(function(e){return r.e(7).then(function(){var n=[r(416)];e.apply(null,n)}.bind(this)).catch(r.oe)})}}}.apply(null,t))||(e.exports=a)},1701:function(e,n,r){var t,a;t=[r.dj.c(e.i),n,r(10),r(11),r(58),r(7),r(166)],void 0===(a=function(e,n,r,t,a,i,u){Object.defineProperty(n,"__esModule",{value:!0}),n.loadStyleRenderer=function(e,n,o){return t(this,void 0,void 0,function(){var t,c,l;return r(this,function(r){switch(r.label){case 0:return(t=e&&e.getAtOrigin&&e.getAtOrigin("renderer",n.origin))&&"unique-value"===t.type&&t.styleOrigin?[4,a.result(t.populateFromStyle())]:[3,2];case 1:c=r.sent(),i.throwIfAborted(o),!1===c.ok&&(l=c.error,n&&n.messages&&n.messages.push(new u("renderer:style-reference","Failed to create unique value renderer from style reference: "+l.message,{error:l,context:n})),e.clear("renderer",n.origin)),r.label=2;case 2:return[2]}})})}}.apply(null,t))||(e.exports=a)}}]);