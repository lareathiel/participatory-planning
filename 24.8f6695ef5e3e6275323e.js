(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/graphics/sources/support/CSVSourceWorker":1601,"esri/core/libs/quickselect/quickselect":1662,"esri/core/libs/rbush/rbush":1674,"esri/layers/graphics/data/optimizedFeatureQueryEngineAdapter":1675,"esri/layers/graphics/data/FeatureStore":1695,"esri/layers/graphics/sources/support/clientSideDefaults":1817,"dstore/Csv":2444})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1601:function(e,t,i){var n,r;n=[i.dj.c(e.i),t,i(10),i(11),i(449),i(2444),i(36),i(44),i(14),i(18),i(15),i(7),i(31),i(1713),i(90),i(63),i(634),i(404),i(1695),i(1669),i(1679),i(1817),i(638)],void 0===(r=function(e,t,i,n,r,a,o,s,u,l,d,h,f,c,m,p,y,g,v,_,x,F,b){Object.defineProperty(t,"__esModule",{value:!0});var I=F.createDrawingInfo("esriGeometryPoint"),B=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"];t.csvLatitudeFieldNames=["lat","latitude","y","ycenter","latitude83","latdecdeg","point-y"],t.csvLongitudeFieldNames=["lon","lng","long","longitude","x","xcenter","longitude83","longdecdeg","point-x"],t.csvDetectedDelimiters=[","," ",";","|","\t"];var M=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,w=[0,0],N=function(){return function(e,t){this.x=e,this.y=t}}(),E=function(){var e=r._parseInfo(),t=new RegExp("^"+e.regexp+"$"),i=new RegExp("["+e.group+"\\s\\xa0]","g"),n=e.factor;return function(r){var a=t.exec(r);if(e.factor=n,!a)return NaN;var o=a[1];if(!a[1]){if(!a[2])return NaN;o=a[2],e.factor*=-1}return+(o=o.replace(i,"").replace(e.decimal,"."))*e.factor}}(),T="isInteger"in Number?Number.isInteger:function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},Y=function(){function e(){this._fieldsIndex=null,this._queryEngine=null}return e.prototype.destroy=function(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=null,this._fieldsIndex=null},e.prototype.load=function(e,t){return void 0===t&&(t={}),n(this,void 0,void 0,function(){var n,r,a,o,s;return i(this,function(i){switch(i.label){case 0:return[4,h.all([this._fetch(e.url,t),this._checkProjection(t&&e.parsing&&e.parsing.spatialReference)])];case 1:return n=i.sent()[0],r=this._parse(n,e.parsing),this._queryEngine=this._createQueryEngine(n,r),r.layerDefinition.extent=this._queryEngine.fullExtent,r.layerDefinition.timeInfo&&(a=this._queryEngine.timeExtent,o=a.start,s=a.end,r.layerDefinition.timeInfo.timeExtent=[o,s]),[2,r]}})})},e.prototype.applyEdits=function(e){return n(this,void 0,void 0,function(){return i(this,function(e){throw new u("csv-source:editing-not-supported","applyEdits() is not supported on CSVLayer")})})},e.prototype.queryFeatures=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),n(this,void 0,void 0,function(){return i(this,function(i){return[2,this._queryEngine.executeQuery(e,t.signal)]})})},e.prototype.queryFeatureCount=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),n(this,void 0,void 0,function(){return i(this,function(i){return[2,this._queryEngine.executeQueryForCount(e,t.signal)]})})},e.prototype.queryObjectIds=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),n(this,void 0,void 0,function(){return i(this,function(i){return[2,this._queryEngine.executeQueryForIds(e,t.signal)]})})},e.prototype.queryExtent=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),n(this,void 0,void 0,function(){return i(this,function(i){return[2,this._queryEngine.executeQueryForExtent(e,t.signal)]})})},e.prototype._fetch=function(e,t){return n(this,void 0,void 0,function(){var n;return i(this,function(i){switch(i.label){case 0:if(!e)throw new u("csv-source:invalid-source","url not defined");return n=f.urlToObject(e),[4,s(n.path,{query:n.query,responseType:"text",signal:t.signal})];case 1:return[2,i.sent().data]}})})},e.prototype._parse=function(e,t){void 0===t&&(t={});for(var i={columnDelimiter:t.columnDelimiter,layerDefinition:null,locationInfo:{latitudeFieldName:t.latitudeField,longitudeFieldName:t.longitudeField}};e&&"\n"===e[0];)e=e.slice(1);"\n"!==e[e.length-1]&&(e+="\n");var n=this._readFirstLine(e);if(!n)throw new u("csv","CSV is empty",{csv:e});if(!t.columnDelimiter){var r=this._inferDelimiter(n);if(!r)throw new u("csv-source:invalid-delimiter","Unable to detect the delimiter from CSV");i.columnDelimiter=r}var a=n.split(i.columnDelimiter),o=i.layerDefinition={name:"csv",drawingInfo:I,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:t.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:t.spatialReference||{wkid:102100}}};if(!t.latitudeField||!t.longitudeField){var s=this._inferLocationInfo(a);if(!t.longitudeField&&!s.longitudeFieldName||!t.latitudeField&&!s.latitudeFieldName)throw new u("csv","Unable to identify latitudeField and/or longitudeField from CSV");i.locationInfo={longitudeFieldName:t.longitudeField||s.longitudeFieldName,latitudeFieldName:t.latitudeField||s.latitudeFieldName}}var l=this._inferFields(e,i.columnDelimiter,a,i.locationInfo);if(t.fields&&t.fields.length){for(var h=new Map,f=0,c=t.fields;f<c.length;f++){var m=c[f];h.set(m.name.toLowerCase(),m)}for(var p=0,y=l;p<y.length;p++){m=y[p];var g=h.get(m.name.toLowerCase());if(g){var v=m.name;d.mixin(m,g),m.name=v}}}if(o.fields=l,!o.fields.some(function(e){return"esriFieldTypeOID"===e.type&&(o.objectIdField=e.name,!0)})){m={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};o.objectIdField=m.name,o.fields.unshift(m)}if(this._fieldsIndex=new b(o.fields),o.timeInfo){var _=o.timeInfo;if(_.startTimeField){var x=this._fieldsIndex.get(_.startTimeField);x?(_.startTimeField=x.name,x.type="esriFieldTypeDate"):_.startTimeField=null}if(_.endTimeField){var F=this._fieldsIndex.get(_.endTimeField);F?(_.endTimeField=F.name,F.type="esriFieldTypeDate"):_.endTimeField=null}if(_.trackIdField){var B=this._fieldsIndex.get(_.trackIdField);_.trackIdField=B?B.name:null}_.startTimeField||_.endTimeField||(o.timeInfo=null)}return i},e.prototype._inferLocationInfo=function(e){var i=null,n=null;return e.forEach(function(e){var r=e.toLowerCase();-1===t.csvLatitudeFieldNames.indexOf(r)||n||(n=e),-1===t.csvLongitudeFieldNames.indexOf(r)||i||(i=e)}),{longitudeFieldName:i,latitudeFieldName:n}},e.prototype._inferFields=function(e,t,i,n){for(var r=[],a=this._sampleLines(e).map(function(e){return e.split(t).map(function(e){return e.trim()})}),o=this,s=0;s<i.length;s++)!function(e){var t=i[e];if(t===n.longitudeFieldName||t===n.latitudeFieldName)r.push({name:t,type:"esriFieldTypeDouble",alias:t});else{var s=a.map(function(t){return t[e]}),u=o._inferFieldType(s),l={name:t.replace(/[\s\'’‘\.\-\/\(\)]+/g,"_"),type:null,alias:t};switch(u){case"integer":l.type="esriFieldTypeInteger";break;case"double":l.type="esriFieldTypeDouble";break;case"date":l.type="esriFieldTypeDate",l.length=36;break;default:l.type="esriFieldTypeString",l.length=255}r.push(l)}}(s);return r},e.prototype._inferFieldType=function(e){var t=this;if(!e.length)return"string";var i=/[^+-.,0-9]/;return e.map(function(e){var n=!1;if(""===e||i.test(e))n=!0;else{var r=E(e);if(!isNaN(r))return/[.,]/.test(e)?"double":!T(r)||r>214783647||r<-214783648?"double":"integer";if(-1===e.indexOf("E"))n=!0;else{if(r=Number(e),!isNaN(r))return"double";if(-1===e.indexOf(","))n=!0;else{if(e=e.replace(",","."),r=Number(e),!isNaN(r))return"double";n=!0}}}if(n){if(!/^[-]?\d*[.,]?\d*$/.test(e)){var a=new Date(e);return t._isValidDate(a,e)?"date":"string"}return"string"}return"string"}).reduce(function(e,t){return e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0})},e.prototype._isValidDate=function(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;var i=!0;if(l("chrome")&&/\d+\W*$/.test(t)){var n=t.match(/[a-zA-Z]{2,}/);if(n){for(var r=!1,a=0;!r&&a<=n.length;)r=!M.test(n[a]),a++;i=!r}}return i},e.prototype._readFirstLine=function(e){return e.substring(0,e.indexOf("\n")).trim()},e.prototype._sampleLines=function(e,t){void 0===t&&(t=10);for(var i=!1,n=[],r=e.indexOf("\n")+1;!i&&n.length<t;){var a=e.indexOf("\n",r);if(-1!==a){var o;(o=-1===a&&r<e.length-1?e.substring(r).trim():e.substring(r,a).trim())&&n.push(o),r=a+1}else i=!0}return n},e.prototype._inferDelimiter=function(e){var i=0,n="";return t.csvDetectedDelimiters.forEach(function(t){var r=e.split(t).length;r>i&&(i=r,n=t)}),""===n?null:n},e.prototype._createQueryEngine=function(e,t){for(var i,n=t.locationInfo,r=n.latitudeFieldName,s=n.longitudeFieldName,u=t.layerDefinition,l=u.objectIdField,d=u.fields,h=u.extent,f=u.timeInfo,_=[],F=[],b=new Set,I=new Set,M=[],T=0,Y=d;T<Y.length;T++){var D=Y[T],X=D.name,S=D.type;"esriFieldTypeDate"===S?b.add(X):B.indexOf(S)>-1&&I.add(X),X!==l&&M.push(X)}var O=new a;O.delimiter=t.columnDelimiter,O.fieldNames=M,O.newline="\n";var j=O.parse(e),C=0;j.shift();for(var P=0,q=j;P<q.length;P++){var A=q[P],R=this._parseCoordinateValue(A[r]),k=this._parseCoordinateValue(A[s]);if(null!=k&&null!=R&&!isNaN(R)&&!isNaN(k)){for(var L in A[r]=R,A[s]=k,A)if(L!==r&&L!==s)if(b.has(L)){var G=new Date(A[L]);A[L]=this._isValidDate(G,A[L])?G.getTime():null}else if(I.has(L)){var V=E(A[L]);isNaN(V)?A[L]=null:A[L]=V}A[l]=C,C++,_.push(new N(k,R)),F.push(A)}}if(!m.equals({wkid:4326},h.spatialReference))if(m.isWebMercator(h.spatialReference))for(var Q=0,J=_;Q<J.length;Q++){var z=J[Q];i=p.lngLatToXY(z.x,z.y,w),z.x=i[0],z.y=i[1]}else _=c.projectMany(_,o.SpatialReference.WGS84,h.spatialReference,null,!0);for(var Z=new v.default({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1}),W=new x.default({fields:t.layerDefinition.fields,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:f,objectIdField:l,spatialReference:h.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:Z}),$=[],U=0;U<_.length;U++){var H=_[U],K=H.x,ee=H.y,te=F[U];te[l]=U+1,$.push(new y.default(new g.default([],[K,ee]),te,null,te[l]))}return Z.addMany($),W},e.prototype._parseCoordinateValue=function(e){if(null==e||""===e)return null;var t=E(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t},e.prototype._checkProjection=function(e){return n(this,void 0,void 0,function(){return i(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,_.checkProjectionSupport(m.WGS84,e)];case 1:return t.sent(),[3,3];case 2:throw t.sent(),new u("csv-layer","Projection not supported");case 3:return[2]}})})},e}();t.default=Y}.apply(null,n))||(e.exports=r)},1662:function(e,t,i){var n;void 0===(n=function(){"use strict";function e(i,n,r,a,o){for(;a>r;){if(a-r>600){var s=a-r+1,u=n-r+1,l=Math.log(s),d=.5*Math.exp(2*l/3),h=.5*Math.sqrt(l*d*(s-d)/s)*(u-s/2<0?-1:1);e(i,n,Math.max(r,Math.floor(n-u*d/s+h)),Math.min(a,Math.floor(n+(s-u)*d/s+h)),o)}var f=i[n],c=r,m=a;for(t(i,r,n),o(i[a],f)>0&&t(i,r,a);c<m;){for(t(i,c,m),c++,m--;o(i[c],f)<0;)c++;for(;o(i[m],f)>0;)m--}0===o(i[r],f)?t(i,r,m):t(i,++m,a),m<=n&&(r=m+1),n<=m&&(a=m-1)}}function t(e,t,i){var n=e[t];e[t]=e[i],e[i]=n}function i(e,t){return e<t?-1:e>t?1:0}return function(t,n,r,a,o){e(t,n,r||0,a||t.length-1,o||i)}}.apply(null,[]))||(e.exports=n)},1674:function(e,t,i){var n,r;n=[i(1662)],void 0===(r=function(e){"use strict";function t(e,i){if(!(this instanceof t))return new t(e,i);this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&("function"==typeof i?this.toBBox=i:this._initFormat(i)),this.clear()}function i(e,t,i){if(!i)return t.indexOf(e);for(var n=0;n<t.length;n++)if(i(e,t[n]))return n;return-1}function n(e,t){r(e,0,e.children.length,t,e)}function r(e,t,i,n,r){r||(r=m(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(var o,s=t;s<i;s++)o=e.children[s],a(r,e.leaf?n(o):o);return r}function a(e,t){return e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY),e}function o(e,t){return e.minX-t.minX}function s(e,t){return e.minY-t.minY}function u(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function l(e){return e.maxX-e.minX+(e.maxY-e.minY)}function d(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function h(e,t){var i=Math.max(e.minX,t.minX),n=Math.max(e.minY,t.minY),r=Math.min(e.maxX,t.maxX),a=Math.min(e.maxY,t.maxY);return Math.max(0,r-i)*Math.max(0,a-n)}function f(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function c(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function m(e){return{children:e,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function p(t,i,n,r,a){for(var o,s=[i,n];s.length;)(n=s.pop())-(i=s.pop())<=r||(o=i+Math.ceil((n-i)/r/2)*r,e(t,o,i,n,a),s.push(i,o,o,n))}return t.prototype={all:function(){return this._all(this.data,[])},search:function(e){var t=this.data,i=[],n=this.toBBox;if(!c(e,t))return i;for(var r,a,o,s,u=[];t;){for(r=0,a=t.children.length;r<a;r++)o=t.children[r],c(e,s=t.leaf?n(o):o)&&(t.leaf?i.push(o):f(e,s)?this._all(o,i):u.push(o));t=u.pop()}return i},collides:function(e){var t=this.data,i=this.toBBox;if(!c(e,t))return!1;for(var n,r,a,o,s=[];t;){for(n=0,r=t.children.length;n<r;n++)if(a=t.children[n],c(e,o=t.leaf?i(a):a)){if(t.leaf||f(e,o))return!0;s.push(a)}t=s.pop()}return!1},load:function(e){if(!e||!e.length)return this;if(e.length<this._minEntries){for(var t=0,i=e.length;t<i;t++)this.insert(e[t]);return this}var n=this._build(e.slice(),0,e.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){var r=this.data;this.data=n,n=r}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this},insert:function(e){return e&&this._insert(e,this.data.height-1),this},clear:function(){return this.data=m([]),this},remove:function(e,t){if(!e)return this;for(var n,r,a,o,s=this.data,u=this.toBBox(e),l=[],d=[];s||l.length;){if(s||(s=l.pop(),r=l[l.length-1],n=d.pop(),o=!0),s.leaf&&-1!==(a=i(e,s.children,t)))return s.children.splice(a,1),l.push(s),this._condense(l),this;o||s.leaf||!f(s,u)?r?(n++,s=r.children[n],o=!1):s=null:(l.push(s),d.push(n),n=0,r=s,s=s.children[0])}return this},toBBox:function(e){return e},compareMinX:o,compareMinY:s,toJSON:function(){return this.data},fromJSON:function(e){return this.data=e,this},_all:function(e,t){for(var i=[];e;)e.leaf?t.push.apply(t,e.children):i.push.apply(i,e.children),e=i.pop();return t},_build:function(e,t,i,r){var a,o=i-t+1,s=this._maxEntries;if(o<=s)return n(a=m(e.slice(t,i+1)),this.toBBox),a;r||(r=Math.ceil(Math.log(o)/Math.log(s)),s=Math.ceil(o/Math.pow(s,r-1))),(a=m([])).leaf=!1,a.height=r;var u,l,d,h,f=Math.ceil(o/s),c=f*Math.ceil(Math.sqrt(s));for(p(e,t,i,c,this.compareMinX),u=t;u<=i;u+=c)for(p(e,u,d=Math.min(u+c-1,i),f,this.compareMinY),l=u;l<=d;l+=f)h=Math.min(l+f-1,d),a.children.push(this._build(e,l,h,r-1));return n(a,this.toBBox),a},_chooseSubtree:function(e,t,i,n){for(var r,a,o,s,l,h,f,c;n.push(t),!t.leaf&&n.length-1!==i;){for(f=c=1/0,r=0,a=t.children.length;r<a;r++)l=u(o=t.children[r]),(h=d(e,o)-l)<c?(c=h,f=l<f?l:f,s=o):h===c&&l<f&&(f=l,s=o);t=s||t.children[0]}return t},_insert:function(e,t,i){var n=this.toBBox,r=i?e:n(e),o=[],s=this._chooseSubtree(r,this.data,t,o);for(s.children.push(e),a(s,r);t>=0&&o[t].children.length>this._maxEntries;)this._split(o,t),t--;this._adjustParentBBoxes(r,o,t)},_split:function(e,t){var i=e[t],r=i.children.length,a=this._minEntries;this._chooseSplitAxis(i,a,r);var o=this._chooseSplitIndex(i,a,r),s=m(i.children.splice(o,i.children.length-o));s.height=i.height,s.leaf=i.leaf,n(i,this.toBBox),n(s,this.toBBox),t?e[t-1].children.push(s):this._splitRoot(i,s)},_splitRoot:function(e,t){this.data=m([e,t]),this.data.height=e.height+1,this.data.leaf=!1,n(this.data,this.toBBox)},_chooseSplitIndex:function(e,t,i){var n,a,o,s,l,d,f,c;for(d=f=1/0,n=t;n<=i-t;n++)s=h(a=r(e,0,n,this.toBBox),o=r(e,n,i,this.toBBox)),l=u(a)+u(o),s<d?(d=s,c=n,f=l<f?l:f):s===d&&l<f&&(f=l,c=n);return c},_chooseSplitAxis:function(e,t,i){var n=e.leaf?this.compareMinX:o,r=e.leaf?this.compareMinY:s;this._allDistMargin(e,t,i,n)<this._allDistMargin(e,t,i,r)&&e.children.sort(n)},_allDistMargin:function(e,t,i,n){e.children.sort(n);var o,s,u=this.toBBox,d=r(e,0,t,u),h=r(e,i-t,i,u),f=l(d)+l(h);for(o=t;o<i-t;o++)s=e.children[o],a(d,e.leaf?u(s):s),f+=l(d);for(o=i-t-1;o>=t;o--)s=e.children[o],a(h,e.leaf?u(s):s),f+=l(h);return f},_adjustParentBBoxes:function(e,t,i){for(var n=i;n>=0;n--)a(t[n],e)},_condense:function(e){for(var t,i=e.length-1;i>=0;i--)0===e[i].children.length?i>0?(t=e[i-1].children).splice(t.indexOf(e[i]),1):this.clear():n(e[i],this.toBBox)},_initFormat:function(e){var t=["return a"," - b",";"];this.compareMinX=new Function("a","b",t.join(e[0])),this.compareMinY=new Function("a","b",t.join(e[1])),this.toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}},t}.apply(null,n))||(e.exports=r)},1675:function(e,t,i){var n,r;n=[i.dj.c(e.i),t,i(1663),i(634),i(404)],void 0===(r=function(e,t,i,n,r){Object.defineProperty(t,"__esModule",{value:!0}),t.optimizedFeatureQueryEngineAdapter={getObjectId:function(e){return e.objectId},getAttributes:function(e){return e.attributes},getAttribute:function(e,t){return e.attributes[t]},cloneWithGeometry:function(e,t){return new n.default(t,e.attributes,null,e.objectId)},getGeometry:function(e){return e.geometry},getCentroid:function(e,t){return e.centroid||(e.centroid=i.getCentroidOptimizedGeometry(new r.default,e.geometry,t.hasZ,t.hasM)),e.centroid}},t.default=t.optimizedFeatureQueryEngineAdapter}.apply(null,n))||(e.exports=r)},1695:function(e,t,i){var n,r;n=[i.dj.c(e.i),t,i(10),i(11),i(3),i(14),i(49),i(18),i(6),i(9),i(1674),i(45),i(33),i(227),i(1675)],void 0===(r=function(e,t,i,n,r,a,o,s,u,l,d,h,f,c,m){Object.defineProperty(t,"__esModule",{value:!0});var p=[],y=u.getLogger("esri.layers.graphics.data.FeatureStore"),g={minX:0,minY:0,maxX:0,maxY:0},v=function(){function e(e,t,i){this._geometryInfo=e,this._onFeatureAdd=t,this._onFeatureRemove=i,this._featuresById=new Map,this._boundsByFeature=new Map,this._featuresByBounds=new Map,this._index=d(9,s("csp-restrictions")?function(e){return{minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}}:["[0]","[1]","[2]","[3]"]),this.events=new o,this.featureAdapter=m.optimizedFeatureQueryEngineAdapter}return Object.defineProperty(e.prototype,"geometryType",{get:function(){return this._geometryInfo.geometryType},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasM",{get:function(){return this._geometryInfo.hasM},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasZ",{get:function(){return this._geometryInfo.hasZ},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"numFeatures",{get:function(){return this._featuresById.size},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fullBounds",{get:function(){if(!this.numFeatures)return null;var e=f.create(f.NEGATIVE_INFINITY);return this._boundsByFeature.forEach(function(t){t&&(e[0]=Math.min(t[0],e[0]),e[1]=Math.min(t[1],e[1]),e[2]=Math.max(t[2],e[2]),e[3]=Math.max(t[3],e[3]))}),e},enumerable:!0,configurable:!0}),e.prototype.add=function(e){this._add(e,p),this._index.load(p),this._emitChanged(),p.length=0},e.prototype.addMany=function(e){for(var t=0,i=e;t<i.length;t++){var n=i[t];this._add(n,p)}this._index.load(p),this._emitChanged(),p.length=0},e.prototype.clear=function(){this._featuresById.clear(),this._boundsByFeature.clear(),this._featuresByBounds.clear(),this._index.clear(),this._emitChanged()},e.prototype.removeById=function(e){var t=this._featuresById.get(e);if(!t)return null;var i=this._boundsByFeature.get(t);return i&&(this._index.remove(i),this._featuresByBounds.delete(i)),this._boundsByFeature.delete(t),this._featuresById.delete(e),this._emitChanged(),t},e.prototype.removeIf=function(e,t){var i=this;this._featuresById.forEach(function(n,r){t(n)&&(i._remove(n),e.push(n))}),this._emitChanged()},e.prototype.removeManyById=function(e){for(var t=0,i=e;t<i.length;t++){var n=i[t],r=this._featuresById.get(n);if(r){var a=this._boundsByFeature.get(r);a&&(this._index.remove(a),this._featuresByBounds.delete(a)),this._boundsByFeature.delete(r)}this._featuresById.delete(n)}this._emitChanged()},e.prototype.forEachBounds=function(e,t,i){for(var n=0,r=e;n<r.length;n++){var a=r[n],o=this._boundsByFeature.get(a);o&&t(h.fromRect(i,o))}},e.prototype.getFeature=function(e){return this._featuresById.get(e)},e.prototype.has=function(e){return this._featuresById.has(e)},e.prototype.forEach=function(e){this._featuresById.forEach(function(t){return e(t)})},e.prototype.forEachInBounds=function(e,t){for(var i=0,n=function(e,t){return g.minX=t[0],g.minY=t[1],g.maxX=t[2],g.maxY=t[3],e.search(g)}(this._index,e);i<n.length;i++){var r=n[i];t(this._featuresByBounds.get(r))}},e.prototype.transferById=function(e,t){var i=this._featuresById.get(t);i&&(this._remove(i),e.add(i),this._emitChanged())},e.prototype.transferByIds=function(e,t){for(var i=[],n=0,r=t;n<r.length;n++){var a=r[n],o=this._featuresById.get(a);o&&(this._remove(o),i.push(o))}e.addMany(i),this._emitChanged()},e.prototype.transferIdRange=function(e,t,i){for(var n=[],r=t;r<i;r++){var a=this._featuresById.get(r);a&&(this._remove(a),n.push(a))}e.addMany(n),this._emitChanged()},e.prototype.transferIf=function(e,t){var i=this,n=[];this._featuresById.forEach(function(e,r){t(e)&&(i._remove(e),n.push(e))}),e.addMany(n),this._emitChanged()},e.prototype.transferAll=function(e){var t=this,i=[];this._featuresById.forEach(function(e,n){t._remove(e),i.push(e)}),e.addMany(i),this._emitChanged()},e.prototype._emitChanged=function(){this.events.emit("changed",void 0)},e.prototype._add=function(e,t){if(e){var i=e.objectId;if(null==i)return void y.error(new a("featurestore:invalid-feature","feature id is missing",{feature:e}));var n,r=this._featuresById.get(i);if(r?(n=this._boundsByFeature.get(r),e.localId=r.localId,n&&(this._index.remove(n),this._boundsByFeature.delete(r),this._featuresByBounds.delete(n))):l.isSome(this._onFeatureAdd)&&this._onFeatureAdd(e),!e.geometry||!e.geometry.coords||!e.geometry.coords.length)return this._boundsByFeature.set(e,null),void this._featuresById.set(i,e);n=c.getBoundsOptimizedGeometry(n||f.create(),e.geometry,this._geometryInfo.hasZ,this._geometryInfo.hasM),this._boundsByFeature.set(e,n),this._featuresByBounds.set(n,e),this._featuresById.set(i,e),t.push(n)}},e.prototype._remove=function(e){var t;e&&(l.isSome(this._onFeatureRemove)&&this._onFeatureRemove(e),(t=this._boundsByFeature.get(e))&&(this._index.remove(t),this._boundsByFeature.delete(e),this._featuresByBounds.delete(t)),this._featuresById.delete(e.objectId))},e}();t.default=v}.apply(null,n))||(e.exports=r)},1817:function(e,t,i){var n,r;n=[i.dj.c(e.i),t,i(4),i(18),i(15),i(659)],void 0===(r=function(e,t,i,n,r,a){Object.defineProperty(t,"__esModule",{value:!0}),t.createDrawingInfo=function(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?a.defaultPointSymbolJSON:"esriGeometryPolyline"===e?a.defaultPolylineSymbolJSON:a.defaultPolygonSymbolJSON}}},t.createDefaultAttributesFunction=function(e,t){if(n("csp-restrictions"))return function(){var n;return i(((n={})[t]=null,n),e)};try{var r="this."+t+" = null;";for(var a in e)r+="this."+a+" = "+JSON.stringify(e[a])+";";var o=new Function(r);return function(){return new o}}catch(n){return function(){var n;return i(((n={})[t]=null,n),e)}}},t.createDefaultTemplate=function(e){return void 0===e&&(e={}),[{name:"New Feature",description:"",prototype:{attributes:r.clone(e)}}]}}.apply(null,n))||(e.exports=r)},2444:function(e,t,i){var n,r;n=[i(51),i(281)],void 0===(r=function(e,t){var i=/^\s*"([\S\s]*)"\s*$/,n=/""/g,r=/"/g;function a(e,t){var i,n={},r=e.length;for(i=0;i<r;i++)n[e[i]]=t[i];return n}return t(null,{fieldNames:null,delimiter:",",newline:"\r\n",trim:!1,parse:function(t){var r,o,s,u,l,d,h,f,c=[],m=t.split(this.newline),p=this.fieldNames,y=0,g=[],v="",_="";e:for(d=0,s=m.length;d<s;d++)if(e.trim(m[d])){for(h=0,u=(r=m[d].split(this.delimiter)).length;h<u;h++){for(f=-1,v+=_+(o=r[h]),_="";(f=o.indexOf('"',f+1))>=0;)y++;if(y%2==0){if(y>0){if(!(l=i.exec(v))){console.warn("Csv: discarding row with invalid value: "+v),g=[],v="",y=0;continue e}g.push(l[1].replace(n,'"'))}else g.push(this.trim||!p?e.trim(v):v);v="",y=0}else _=this.delimiter}0===y?(p?c.push(a(p,g)):p=this.fieldNames=g,g=[]):_=this.newline}return c},toCsv:function(e){return this.stringify(this.data,e)},stringify:function(e,t){var i,n,a,o,s=(t=t||{}).alwaysQuote,u=this.fieldNames,l=this.delimiter,d=this.newline,h="";for(i=-1;i<e.length;i++)for(i>-1&&(h+=d),n=0;n<u.length;n++)null!==(a=i<0?u[n]:e[i][u[n]])&&void 0!==a||(a=""),"string"!=typeof a&&(a=a.toString()),o=s||a.indexOf('"')>=0||a.indexOf(l)>=0,h+=(n>0?l:"")+(o?'"'+a.replace(r,'""')+'"':a);return t.trailingNewline&&(h+=d),h}})}.apply(null,n))||(e.exports=r)}}]);