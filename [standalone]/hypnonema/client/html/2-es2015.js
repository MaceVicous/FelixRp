(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+0xr":function(t,e,s){"use strict";s.d(e,"a",(function(){return rt})),s.d(e,"b",(function(){return W})),s.d(e,"c",(function(){return st})),s.d(e,"d",(function(){return ot})),s.d(e,"e",(function(){return tt})),s.d(e,"f",(function(){return ht})),s.d(e,"g",(function(){return nt})),s.d(e,"h",(function(){return ut})),s.d(e,"i",(function(){return lt})),s.d(e,"j",(function(){return z})),s.d(e,"k",(function(){return _t}));var i=s("8LU1"),o=s("0EQZ"),r=s("fXoL"),n=s("cH1L"),a=s("nLfN"),l=s("ofXK"),c=s("XNiG"),h=s("2Vo4"),d=s("7+OI"),u=s("LRne"),f=s("1G5W");const _=[[["caption"]]],m=["caption"];function p(t){return class extends t{constructor(...t){super(...t),this._sticky=!1,this._hasStickyChanged=!1}get sticky(){return this._sticky}set sticky(t){const e=this._sticky;this._sticky=Object(i.c)(t),this._hasStickyChanged=e!==this._sticky}hasStickyChanged(){const t=this._hasStickyChanged;return this._hasStickyChanged=!1,t}resetStickyChanged(){this._hasStickyChanged=!1}}}const w=new r.s("CDK_TABLE");let y=(()=>{class t{constructor(t){this.template=t}}return t.\u0275fac=function(e){return new(e||t)(r.Rb(r.N))},t.\u0275dir=r.Mb({type:t,selectors:[["","cdkCellDef",""]]}),t})(),b=(()=>{class t{constructor(t){this.template=t}}return t.\u0275fac=function(e){return new(e||t)(r.Rb(r.N))},t.\u0275dir=r.Mb({type:t,selectors:[["","cdkHeaderCellDef",""]]}),t})(),g=(()=>{class t{constructor(t){this.template=t}}return t.\u0275fac=function(e){return new(e||t)(r.Rb(r.N))},t.\u0275dir=r.Mb({type:t,selectors:[["","cdkFooterCellDef",""]]}),t})();class R{}const D=p(R);let k=(()=>{class t extends D{constructor(t){super(),this._table=t,this._stickyEnd=!1}get name(){return this._name}set name(t){t&&(this._name=t,this.cssClassFriendlyName=t.replace(/[^a-z0-9_-]/gi,"-"))}get stickyEnd(){return this._stickyEnd}set stickyEnd(t){const e=this._stickyEnd;this._stickyEnd=Object(i.c)(t),this._hasStickyChanged=e!==this._stickyEnd}}return t.\u0275fac=function(e){return new(e||t)(r.Rb(w,8))},t.\u0275dir=r.Mb({type:t,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,e,s){var i;1&t&&(r.Kb(s,y,!0),r.Kb(s,b,!0),r.Kb(s,g,!0)),2&t&&(r.qc(i=r.gc())&&(e.cell=i.first),r.qc(i=r.gc())&&(e.headerCell=i.first),r.qc(i=r.gc())&&(e.footerCell=i.first))},inputs:{sticky:"sticky",name:["cdkColumnDef","name"],stickyEnd:"stickyEnd"},features:[r.Db([{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:t}]),r.Bb]}),t})();class v{constructor(t,e){e.nativeElement.classList.add(`cdk-column-${t.cssClassFriendlyName}`)}}let C=(()=>{class t extends v{constructor(t,e){super(t,e)}}return t.\u0275fac=function(e){return new(e||t)(r.Rb(k),r.Rb(r.m))},t.\u0275dir=r.Mb({type:t,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[r.Bb]}),t})(),S=(()=>{class t extends v{constructor(t,e){super(t,e)}}return t.\u0275fac=function(e){return new(e||t)(r.Rb(k),r.Rb(r.m))},t.\u0275dir=r.Mb({type:t,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:["role","gridcell",1,"cdk-cell"],features:[r.Bb]}),t})(),O=(()=>{class t{constructor(t,e){this.template=t,this._differs=e}ngOnChanges(t){if(!this._columnsDiffer){const e=t.columns&&t.columns.currentValue||[];this._columnsDiffer=this._differs.find(e).create(),this._columnsDiffer.diff(e)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(t){return this instanceof E?t.headerCell.template:this instanceof H?t.footerCell.template:t.cell.template}}return t.\u0275fac=function(t){r.ec()},t.\u0275dir=r.Mb({type:t,features:[r.Cb]}),t})();class x extends O{}const T=p(x);let E=(()=>{class t extends T{constructor(t,e,s){super(t,e),this._table=s}ngOnChanges(t){super.ngOnChanges(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Rb(r.N),r.Rb(r.u),r.Rb(w,8))},t.\u0275dir=r.Mb({type:t,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:["cdkHeaderRowDef","columns"],sticky:["cdkHeaderRowDefSticky","sticky"]},features:[r.Bb,r.Cb]}),t})();class I extends O{}const M=p(I);let H=(()=>{class t extends M{constructor(t,e,s){super(t,e),this._table=s}ngOnChanges(t){super.ngOnChanges(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Rb(r.N),r.Rb(r.u),r.Rb(w,8))},t.\u0275dir=r.Mb({type:t,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:["cdkFooterRowDef","columns"],sticky:["cdkFooterRowDefSticky","sticky"]},features:[r.Bb,r.Cb]}),t})(),N=(()=>{class t extends O{constructor(t,e,s){super(t,e),this._table=s}}return t.\u0275fac=function(e){return new(e||t)(r.Rb(r.N),r.Rb(r.u),r.Rb(w,8))},t.\u0275dir=r.Mb({type:t,selectors:[["","cdkRowDef",""]],inputs:{columns:["cdkRowDefColumns","columns"],when:["cdkRowDefWhen","when"]},features:[r.Bb]}),t})(),j=(()=>{class t{constructor(e){this._viewContainer=e,t.mostRecentCellOutlet=this}ngOnDestroy(){t.mostRecentCellOutlet===this&&(t.mostRecentCellOutlet=null)}}return t.\u0275fac=function(e){return new(e||t)(r.Rb(r.Q))},t.\u0275dir=r.Mb({type:t,selectors:[["","cdkCellOutlet",""]]}),t.mostRecentCellOutlet=null,t})(),F=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Lb({type:t,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,e){1&t&&r.Tb(0,0)},directives:[j],encapsulation:2}),t})(),A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Lb({type:t,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,e){1&t&&r.Tb(0,0)},directives:[j],encapsulation:2}),t})();const B=["top","bottom","left","right"];class L{constructor(t,e,s,i=!0){this._isNativeHtmlTable=t,this._stickCellCss=e,this.direction=s,this._isBrowser=i}clearStickyPositioning(t,e){for(const s of t)if(s.nodeType===s.ELEMENT_NODE){this._removeStickyStyle(s,e);for(let t=0;t<s.children.length;t++)this._removeStickyStyle(s.children[t],e)}}updateStickyColumns(t,e,s){const i=e.some(t=>t)||s.some(t=>t);if(!t.length||!i||!this._isBrowser)return;const o=t[0],r=o.children.length,n=this._getCellWidths(o),a=this._getStickyStartColumnPositions(n,e),l=this._getStickyEndColumnPositions(n,s),c="rtl"===this.direction;for(const h of t)for(let t=0;t<r;t++){const i=h.children[t];e[t]&&this._addStickyStyle(i,c?"right":"left",a[t]),s[t]&&this._addStickyStyle(i,c?"left":"right",l[t])}}stickRows(t,e,s){if(!this._isBrowser)return;const i="bottom"===s?t.reverse():t;let o=0;for(let r=0;r<i.length;r++){if(!e[r])continue;const t=i[r];if(this._isNativeHtmlTable)for(let e=0;e<t.children.length;e++)this._addStickyStyle(t.children[e],s,o);else this._addStickyStyle(t,s,o);if(r===i.length-1)return;o+=t.getBoundingClientRect().height}}updateStickyFooterContainer(t,e){if(!this._isNativeHtmlTable)return;const s=t.querySelector("tfoot");e.some(t=>!t)?this._removeStickyStyle(s,["bottom"]):this._addStickyStyle(s,"bottom",0)}_removeStickyStyle(t,e){for(const s of e)t.style[s]="";t.style.zIndex=this._getCalculatedZIndex(t),B.some(e=>!!t.style[e])||(t.style.position="",t.classList.remove(this._stickCellCss))}_addStickyStyle(t,e,s){t.classList.add(this._stickCellCss),t.style[e]=`${s}px`,t.style.cssText+="position: -webkit-sticky; position: sticky; ",t.style.zIndex=this._getCalculatedZIndex(t)}_getCalculatedZIndex(t){const e={top:100,bottom:10,left:1,right:1};let s=0;for(const i of B)t.style[i]&&(s+=e[i]);return s?`${s}`:""}_getCellWidths(t){const e=[],s=t.children;for(let i=0;i<s.length;i++)e.push(s[i].getBoundingClientRect().width);return e}_getStickyStartColumnPositions(t,e){const s=[];let i=0;for(let o=0;o<t.length;o++)e[o]&&(s[o]=i,i+=t[o]);return s}_getStickyEndColumnPositions(t,e){const s=[];let i=0;for(let o=t.length;o>0;o--)e[o]&&(s[o]=i,i+=t[o]);return s}}function P(t){return Error(`Could not find column with id "${t}".`)}let X=(()=>{class t{constructor(t,e){this.viewContainer=t,this.elementRef=e}}return t.\u0275fac=function(e){return new(e||t)(r.Rb(r.Q),r.Rb(r.m))},t.\u0275dir=r.Mb({type:t,selectors:[["","rowOutlet",""]]}),t})(),V=(()=>{class t{constructor(t,e){this.viewContainer=t,this.elementRef=e}}return t.\u0275fac=function(e){return new(e||t)(r.Rb(r.Q),r.Rb(r.m))},t.\u0275dir=r.Mb({type:t,selectors:[["","headerRowOutlet",""]]}),t})(),Z=(()=>{class t{constructor(t,e){this.viewContainer=t,this.elementRef=e}}return t.\u0275fac=function(e){return new(e||t)(r.Rb(r.Q),r.Rb(r.m))},t.\u0275dir=r.Mb({type:t,selectors:[["","footerRowOutlet",""]]}),t})(),G=(()=>{class t{constructor(t,e,s,i,o,r,n){this._differs=t,this._changeDetectorRef=e,this._elementRef=s,this._dir=o,this._platform=n,this._onDestroy=new c.a,this._columnDefsByName=new Map,this._customColumnDefs=new Set,this._customRowDefs=new Set,this._customHeaderRowDefs=new Set,this._customFooterRowDefs=new Set,this._headerRowDefChanged=!0,this._footerRowDefChanged=!0,this._cachedRenderRowsMap=new Map,this.stickyCssClass="cdk-table-sticky",this._multiTemplateDataRows=!1,this.viewChange=new h.a({start:0,end:Number.MAX_VALUE}),i||this._elementRef.nativeElement.setAttribute("role","grid"),this._document=r,this._isNativeHtmlTable="TABLE"===this._elementRef.nativeElement.nodeName}get trackBy(){return this._trackByFn}set trackBy(t){Object(r.Y)()&&null!=t&&"function"!=typeof t&&console&&console.warn&&console.warn(`trackBy must be a function, but received ${JSON.stringify(t)}.`),this._trackByFn=t}get dataSource(){return this._dataSource}set dataSource(t){this._dataSource!==t&&this._switchDataSource(t)}get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(t){this._multiTemplateDataRows=Object(i.c)(t),this._rowOutlet&&this._rowOutlet.viewContainer.length&&this._forceRenderDataRows()}ngOnInit(){this._setupStickyStyler(),this._isNativeHtmlTable&&this._applyNativeTableSections(),this._dataDiffer=this._differs.find([]).create((t,e)=>this.trackBy?this.trackBy(e.dataIndex,e.data):e)}ngAfterContentChecked(){if(this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&!this._rowDefs.length)throw Error("Missing definitions for header, footer, and row; cannot determine which columns should be rendered.");this._renderUpdatedColumns(),this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription&&this._observeRenderChanges(),this._checkStickyStates()}ngOnDestroy(){this._rowOutlet.viewContainer.clear(),this._headerRowOutlet.viewContainer.clear(),this._footerRowOutlet.viewContainer.clear(),this._cachedRenderRowsMap.clear(),this._onDestroy.next(),this._onDestroy.complete(),Object(o.d)(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();const t=this._dataDiffer.diff(this._renderRows);if(!t)return;const e=this._rowOutlet.viewContainer;t.forEachOperation((t,s,i)=>{if(null==t.previousIndex)this._insertRow(t.item,i);else if(null==i)e.remove(s);else{const t=e.get(s);e.move(t,i)}}),this._updateRowIndexContext(),t.forEachIdentityChange(t=>{e.get(t.currentIndex).context.$implicit=t.item.data}),this.updateStickyColumnStyles()}setHeaderRowDef(t){this._customHeaderRowDefs=new Set([t]),this._headerRowDefChanged=!0}setFooterRowDef(t){this._customFooterRowDefs=new Set([t]),this._footerRowDefChanged=!0}addColumnDef(t){this._customColumnDefs.add(t)}removeColumnDef(t){this._customColumnDefs.delete(t)}addRowDef(t){this._customRowDefs.add(t)}removeRowDef(t){this._customRowDefs.delete(t)}addHeaderRowDef(t){this._customHeaderRowDefs.add(t),this._headerRowDefChanged=!0}removeHeaderRowDef(t){this._customHeaderRowDefs.delete(t),this._headerRowDefChanged=!0}addFooterRowDef(t){this._customFooterRowDefs.add(t),this._footerRowDefChanged=!0}removeFooterRowDef(t){this._customFooterRowDefs.delete(t),this._footerRowDefChanged=!0}updateStickyHeaderRowStyles(){const t=this._getRenderedRows(this._headerRowOutlet),e=this._elementRef.nativeElement.querySelector("thead");e&&(e.style.display=t.length?"":"none");const s=this._headerRowDefs.map(t=>t.sticky);this._stickyStyler.clearStickyPositioning(t,["top"]),this._stickyStyler.stickRows(t,s,"top"),this._headerRowDefs.forEach(t=>t.resetStickyChanged())}updateStickyFooterRowStyles(){const t=this._getRenderedRows(this._footerRowOutlet),e=this._elementRef.nativeElement.querySelector("tfoot");e&&(e.style.display=t.length?"":"none");const s=this._footerRowDefs.map(t=>t.sticky);this._stickyStyler.clearStickyPositioning(t,["bottom"]),this._stickyStyler.stickRows(t,s,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,s),this._footerRowDefs.forEach(t=>t.resetStickyChanged())}updateStickyColumnStyles(){const t=this._getRenderedRows(this._headerRowOutlet),e=this._getRenderedRows(this._rowOutlet),s=this._getRenderedRows(this._footerRowOutlet);this._stickyStyler.clearStickyPositioning([...t,...e,...s],["left","right"]),t.forEach((t,e)=>{this._addStickyColumnStyles([t],this._headerRowDefs[e])}),this._rowDefs.forEach(t=>{const s=[];for(let i=0;i<e.length;i++)this._renderRows[i].rowDef===t&&s.push(e[i]);this._addStickyColumnStyles(s,t)}),s.forEach((t,e)=>{this._addStickyColumnStyles([t],this._footerRowDefs[e])}),Array.from(this._columnDefsByName.values()).forEach(t=>t.resetStickyChanged())}_getAllRenderRows(){const t=[],e=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let s=0;s<this._data.length;s++){let i=this._data[s];const o=this._getRenderRowsForData(i,s,e.get(i));this._cachedRenderRowsMap.has(i)||this._cachedRenderRowsMap.set(i,new WeakMap);for(let e=0;e<o.length;e++){let s=o[e];const i=this._cachedRenderRowsMap.get(s.data);i.has(s.rowDef)?i.get(s.rowDef).push(s):i.set(s.rowDef,[s]),t.push(s)}}return t}_getRenderRowsForData(t,e,s){return this._getRowDefs(t,e).map(i=>{const o=s&&s.has(i)?s.get(i):[];if(o.length){const t=o.shift();return t.dataIndex=e,t}return{data:t,rowDef:i,dataIndex:e}})}_cacheColumnDefs(){this._columnDefsByName.clear(),K(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{if(this._columnDefsByName.has(t.name))throw Error(`Duplicate column definition name provided: "${t.name}".`);this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=K(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=K(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=K(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);const t=this._rowDefs.filter(t=>!t.when);if(!this.multiTemplateDataRows&&t.length>1)throw Error("There can only be one default row without a when predicate function.");this._defaultRowDef=t[0]}_renderUpdatedColumns(){const t=(t,e)=>t||!!e.getColumnsDiff();this._rowDefs.reduce(t,!1)&&this._forceRenderDataRows(),this._headerRowDefs.reduce(t,!1)&&this._forceRenderHeaderRows(),this._footerRowDefs.reduce(t,!1)&&this._forceRenderFooterRows()}_switchDataSource(t){this._data=[],Object(o.d)(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),t||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear()),this._dataSource=t}_observeRenderChanges(){if(!this.dataSource)return;let t;if(Object(o.d)(this.dataSource)?t=this.dataSource.connect(this):Object(d.a)(this.dataSource)?t=this.dataSource:Array.isArray(this.dataSource)&&(t=Object(u.a)(this.dataSource)),void 0===t)throw Error("Provided data source did not match an array, Observable, or DataSource");this._renderChangeSubscription=t.pipe(Object(f.a)(this._onDestroy)).subscribe(t=>{this._data=t||[],this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((t,e)=>this._renderRow(this._headerRowOutlet,t,e)),this.updateStickyHeaderRowStyles(),this.updateStickyColumnStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((t,e)=>this._renderRow(this._footerRowOutlet,t,e)),this.updateStickyFooterRowStyles(),this.updateStickyColumnStyles()}_addStickyColumnStyles(t,e){const s=Array.from(e.columns||[]).map(t=>{const e=this._columnDefsByName.get(t);if(!e)throw P(t);return e}),i=s.map(t=>t.sticky),o=s.map(t=>t.stickyEnd);this._stickyStyler.updateStickyColumns(t,i,o)}_getRenderedRows(t){const e=[];for(let s=0;s<t.viewContainer.length;s++){const i=t.viewContainer.get(s);e.push(i.rootNodes[0])}return e}_getRowDefs(t,e){if(1==this._rowDefs.length)return[this._rowDefs[0]];let s=[];if(this.multiTemplateDataRows)s=this._rowDefs.filter(s=>!s.when||s.when(e,t));else{let i=this._rowDefs.find(s=>s.when&&s.when(e,t))||this._defaultRowDef;i&&s.push(i)}if(!s.length)throw function(t){return Error("Could not find a matching row definition for the"+`provided row data: ${JSON.stringify(t)}`)}(t);return s}_insertRow(t,e){this._renderRow(this._rowOutlet,t.rowDef,e,{$implicit:t.data})}_renderRow(t,e,s,i={}){t.viewContainer.createEmbeddedView(e.template,i,s);for(let o of this._getCellTemplates(e))j.mostRecentCellOutlet&&j.mostRecentCellOutlet._viewContainer.createEmbeddedView(o,i);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){const t=this._rowOutlet.viewContainer;for(let e=0,s=t.length;e<s;e++){const i=t.get(e).context;i.count=s,i.first=0===e,i.last=e===s-1,i.even=e%2==0,i.odd=!i.even,this.multiTemplateDataRows?(i.dataIndex=this._renderRows[e].dataIndex,i.renderIndex=e):i.index=this._renderRows[e].dataIndex}}_getCellTemplates(t){return t&&t.columns?Array.from(t.columns,e=>{const s=this._columnDefsByName.get(e);if(!s)throw P(e);return t.extractCellTemplate(s)}):[]}_applyNativeTableSections(){const t=this._document.createDocumentFragment(),e=[{tag:"thead",outlet:this._headerRowOutlet},{tag:"tbody",outlet:this._rowOutlet},{tag:"tfoot",outlet:this._footerRowOutlet}];for(const s of e){const e=this._document.createElement(s.tag);e.setAttribute("role","rowgroup"),e.appendChild(s.outlet.elementRef.nativeElement),t.appendChild(e)}this._elementRef.nativeElement.appendChild(t)}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows(),this.updateStickyColumnStyles()}_checkStickyStates(){const t=(t,e)=>t||e.hasStickyChanged();this._headerRowDefs.reduce(t,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(t,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(t,!1)&&this.updateStickyColumnStyles()}_setupStickyStyler(){this._stickyStyler=new L(this._isNativeHtmlTable,this.stickyCssClass,this._dir?this._dir.value:"ltr",this._platform.isBrowser),(this._dir?this._dir.change:Object(u.a)()).pipe(Object(f.a)(this._onDestroy)).subscribe(t=>{this._stickyStyler.direction=t,this.updateStickyColumnStyles()})}_getOwnDefs(t){return t.filter(t=>!t._table||t._table===this)}}return t.\u0275fac=function(e){return new(e||t)(r.Rb(r.u),r.Rb(r.i),r.Rb(r.m),r.cc("role"),r.Rb(n.b,8),r.Rb(l.d),r.Rb(a.a))},t.\u0275cmp=r.Lb({type:t,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,e,s){var i;1&t&&(r.Kb(s,k,!0),r.Kb(s,N,!0),r.Kb(s,E,!0),r.Kb(s,H,!0)),2&t&&(r.qc(i=r.gc())&&(e._contentColumnDefs=i),r.qc(i=r.gc())&&(e._contentRowDefs=i),r.qc(i=r.gc())&&(e._contentHeaderRowDefs=i),r.qc(i=r.gc())&&(e._contentFooterRowDefs=i))},viewQuery:function(t,e){var s;1&t&&(r.zc(X,!0),r.zc(V,!0),r.zc(Z,!0)),2&t&&(r.qc(s=r.gc())&&(e._rowOutlet=s.first),r.qc(s=r.gc())&&(e._headerRowOutlet=s.first),r.qc(s=r.gc())&&(e._footerRowOutlet=s.first))},hostAttrs:[1,"cdk-table"],inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:"multiTemplateDataRows"},exportAs:["cdkTable"],features:[r.Db([{provide:w,useExisting:t}])],ngContentSelectors:m,decls:4,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["footerRowOutlet",""]],template:function(t,e){1&t&&(r.nc(_),r.mc(0),r.Tb(1,0),r.Tb(2,1),r.Tb(3,2))},directives:[V,X,Z],encapsulation:2}),t})();function K(t,e){return t.concat(Array.from(e))}let q=(()=>{class t{}return t.\u0275mod=r.Pb({type:t}),t.\u0275inj=r.Ob({factory:function(e){return new(e||t)}}),t})();var U=s("FKr1");s("quSY"),s("VRyK"),s("itXk"),s("lJxs");const Y=[[["caption"]]],$=["caption"];let z=(()=>{class t extends G{constructor(){super(...arguments),this.stickyCssClass="mat-table-sticky"}}return t.\u0275fac=function(e){return Q(e||t)},t.\u0275cmp=r.Lb({type:t,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-table"],exportAs:["matTable"],features:[r.Db([{provide:G,useExisting:t},{provide:w,useExisting:t}]),r.Bb],ngContentSelectors:$,decls:4,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["footerRowOutlet",""]],template:function(t,e){1&t&&(r.nc(Y),r.mc(0),r.Tb(1,0),r.Tb(2,1),r.Tb(3,2))},directives:[V,X,Z],styles:['mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:""}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type,[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type,[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}\n'],encapsulation:2}),t})();const Q=r.Zb(z);let W=(()=>{class t extends y{}return t.\u0275fac=function(e){return J(e||t)},t.\u0275dir=r.Mb({type:t,selectors:[["","matCellDef",""]],features:[r.Db([{provide:y,useExisting:t}]),r.Bb]}),t})();const J=r.Zb(W);let tt=(()=>{class t extends b{}return t.\u0275fac=function(e){return et(e||t)},t.\u0275dir=r.Mb({type:t,selectors:[["","matHeaderCellDef",""]],features:[r.Db([{provide:b,useExisting:t}]),r.Bb]}),t})();const et=r.Zb(tt);let st=(()=>{class t extends k{}return t.\u0275fac=function(e){return it(e||t)},t.\u0275dir=r.Mb({type:t,selectors:[["","matColumnDef",""]],inputs:{sticky:"sticky",name:["matColumnDef","name"]},features:[r.Db([{provide:k,useExisting:t},{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:t}]),r.Bb]}),t})();const it=r.Zb(st);let ot=(()=>{class t extends C{constructor(t,e){super(t,e),e.nativeElement.classList.add(`mat-column-${t.cssClassFriendlyName}`)}}return t.\u0275fac=function(e){return new(e||t)(r.Rb(k),r.Rb(r.m))},t.\u0275dir=r.Mb({type:t,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-header-cell"],features:[r.Bb]}),t})(),rt=(()=>{class t extends S{constructor(t,e){super(t,e),e.nativeElement.classList.add(`mat-column-${t.cssClassFriendlyName}`)}}return t.\u0275fac=function(e){return new(e||t)(r.Rb(k),r.Rb(r.m))},t.\u0275dir=r.Mb({type:t,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:["role","gridcell",1,"mat-cell"],features:[r.Bb]}),t})(),nt=(()=>{class t extends E{}return t.\u0275fac=function(e){return at(e||t)},t.\u0275dir=r.Mb({type:t,selectors:[["","matHeaderRowDef",""]],inputs:{columns:["matHeaderRowDef","columns"],sticky:["matHeaderRowDefSticky","sticky"]},features:[r.Db([{provide:E,useExisting:t}]),r.Bb]}),t})();const at=r.Zb(nt);let lt=(()=>{class t extends N{}return t.\u0275fac=function(e){return ct(e||t)},t.\u0275dir=r.Mb({type:t,selectors:[["","matRowDef",""]],inputs:{columns:["matRowDefColumns","columns"],when:["matRowDefWhen","when"]},features:[r.Db([{provide:N,useExisting:t}]),r.Bb]}),t})();const ct=r.Zb(lt);let ht=(()=>{class t extends F{}return t.\u0275fac=function(e){return dt(e||t)},t.\u0275cmp=r.Lb({type:t,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-header-row"],exportAs:["matHeaderRow"],features:[r.Db([{provide:F,useExisting:t}]),r.Bb],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,e){1&t&&r.Tb(0,0)},directives:[j],encapsulation:2}),t})();const dt=r.Zb(ht);let ut=(()=>{class t extends A{}return t.\u0275fac=function(e){return ft(e||t)},t.\u0275cmp=r.Lb({type:t,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-row"],exportAs:["matRow"],features:[r.Db([{provide:A,useExisting:t}]),r.Bb],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,e){1&t&&r.Tb(0,0)},directives:[j],encapsulation:2}),t})();const ft=r.Zb(ut);let _t=(()=>{class t{}return t.\u0275mod=r.Pb({type:t}),t.\u0275inj=r.Ob({factory:function(e){return new(e||t)},imports:[[q,U.e]]}),t})()},Qu3c:function(t,e,s){"use strict";s.d(e,"a",(function(){return C})),s.d(e,"b",(function(){return O}));var i=s("rDax"),o=s("u47x"),r=s("ofXK"),n=s("fXoL"),a=s("FKr1"),l=s("8LU1"),c=s("FtGj"),h=s("0MNC"),d=s("nLfN"),u=s("+rOU"),f=s("XNiG"),_=s("1G5W"),m=s("IzEk"),p=s("R0Ic"),w=s("vxfF"),y=s("cH1L");const b={tooltipState:Object(p.m)("state",[Object(p.j)("initial, void, hidden",Object(p.k)({opacity:0,transform:"scale(0)"})),Object(p.j)("visible",Object(p.k)({transform:"scale(1)"})),Object(p.l)("* => visible",Object(p.e)("200ms cubic-bezier(0, 0, 0.2, 1)",Object(p.g)([Object(p.k)({opacity:0,transform:"scale(0)",offset:0}),Object(p.k)({opacity:.5,transform:"scale(0.99)",offset:.5}),Object(p.k)({opacity:1,transform:"scale(1)",offset:1})]))),Object(p.l)("* => hidden",Object(p.e)("100ms cubic-bezier(0, 0, 0.2, 1)",Object(p.k)({opacity:0})))])},g=Object(d.f)({passive:!0});function R(t){return Error(`Tooltip position "${t}" is invalid.`)}const D=new n.s("mat-tooltip-scroll-strategy"),k={provide:D,deps:[i.c],useFactory:function(t){return()=>t.scrollStrategies.reposition({scrollThrottle:20})}},v=new n.s("mat-tooltip-default-options",{providedIn:"root",factory:function(){return{showDelay:0,hideDelay:0,touchendHideDelay:1500}}});let C=(()=>{class t{constructor(t,e,s,i,o,r,n,a,l,h,d,u){this._overlay=t,this._elementRef=e,this._scrollDispatcher=s,this._viewContainerRef=i,this._ngZone=o,this._platform=r,this._ariaDescriber=n,this._focusMonitor=a,this._dir=h,this._defaultOptions=d,this._position="below",this._disabled=!1,this.showDelay=this._defaultOptions.showDelay,this.hideDelay=this._defaultOptions.hideDelay,this.touchGestures="auto",this._message="",this._passiveListeners=new Map,this._destroyed=new f.a,this._handleKeydown=t=>{this._isTooltipVisible()&&t.keyCode===c.g&&!Object(c.s)(t)&&(t.preventDefault(),t.stopPropagation(),this._ngZone.run(()=>this.hide(0)))},this._scrollStrategy=l,d&&(d.position&&(this.position=d.position),d.touchGestures&&(this.touchGestures=d.touchGestures)),a.monitor(e).pipe(Object(_.a)(this._destroyed)).subscribe(t=>{t?"keyboard"===t&&o.run(()=>this.show()):o.run(()=>this.hide(0))}),o.runOutsideAngular(()=>{e.nativeElement.addEventListener("keydown",this._handleKeydown)})}get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(),this._tooltipInstance&&this._tooltipInstance.show(0),this._overlayRef.updatePosition()))}get disabled(){return this._disabled}set disabled(t){this._disabled=Object(l.c)(t),this._disabled&&this.hide(0)}get message(){return this._message}set message(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this._message),this._message=null!=t?`${t}`.trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._updateTooltipMessage(),this._ngZone.runOutsideAngular(()=>{Promise.resolve().then(()=>{this._ariaDescriber.describe(this._elementRef.nativeElement,this.message)})}))}get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}ngOnInit(){this._setupPointerEvents()}ngOnDestroy(){const t=this._elementRef.nativeElement;clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),t.removeEventListener("keydown",this._handleKeydown),this._passiveListeners.forEach((e,s)=>{t.removeEventListener(s,e,g)}),this._passiveListeners.clear(),this._destroyed.next(),this._destroyed.complete(),this._ariaDescriber.removeDescription(t,this.message),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay){if(this.disabled||!this.message||this._isTooltipVisible()&&!this._tooltipInstance._showTimeoutId&&!this._tooltipInstance._hideTimeoutId)return;const e=this._createOverlay();this._detach(),this._portal=this._portal||new u.c(S,this._viewContainerRef),this._tooltipInstance=e.attach(this._portal).instance,this._tooltipInstance.afterHidden().pipe(Object(_.a)(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),this._tooltipInstance.show(t)}hide(t=this.hideDelay){this._tooltipInstance&&this._tooltipInstance.hide(t)}toggle(){this._isTooltipVisible()?this.hide():this.show()}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(){if(this._overlayRef)return this._overlayRef;const t=this._scrollDispatcher.getAncestorScrollContainers(this._elementRef),e=this._overlay.position().flexibleConnectedTo(this._elementRef).withTransformOriginOn(".mat-tooltip").withFlexibleDimensions(!1).withViewportMargin(8).withScrollableContainers(t);return e.positionChanges.pipe(Object(_.a)(this._destroyed)).subscribe(t=>{this._tooltipInstance&&t.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=this._overlay.create({direction:this._dir,positionStrategy:e,panelClass:"mat-tooltip-panel",scrollStrategy:this._scrollStrategy()}),this._updatePosition(),this._overlayRef.detachments().pipe(Object(_.a)(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(){const t=this._overlayRef.getConfig().positionStrategy,e=this._getOrigin(),s=this._getOverlayPosition();t.withPositions([Object.assign(Object.assign({},e.main),s.main),Object.assign(Object.assign({},e.fallback),s.fallback)])}_getOrigin(){const t=!this._dir||"ltr"==this._dir.value,e=this.position;let s;if("above"==e||"below"==e)s={originX:"center",originY:"above"==e?"top":"bottom"};else if("before"==e||"left"==e&&t||"right"==e&&!t)s={originX:"start",originY:"center"};else{if(!("after"==e||"right"==e&&t||"left"==e&&!t))throw R(e);s={originX:"end",originY:"center"}}const{x:i,y:o}=this._invertPosition(s.originX,s.originY);return{main:s,fallback:{originX:i,originY:o}}}_getOverlayPosition(){const t=!this._dir||"ltr"==this._dir.value,e=this.position;let s;if("above"==e)s={overlayX:"center",overlayY:"bottom"};else if("below"==e)s={overlayX:"center",overlayY:"top"};else if("before"==e||"left"==e&&t||"right"==e&&!t)s={overlayX:"end",overlayY:"center"};else{if(!("after"==e||"right"==e&&t||"left"==e&&!t))throw R(e);s={overlayX:"start",overlayY:"center"}}const{x:i,y:o}=this._invertPosition(s.overlayX,s.overlayY);return{main:s,fallback:{overlayX:i,overlayY:o}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),this._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(m.a)(1),Object(_.a)(this._destroyed)).subscribe(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t,this._tooltipInstance._markForCheck())}_invertPosition(t,e){return"above"===this.position||"below"===this.position?"top"===e?e="bottom":"bottom"===e&&(e="top"):"end"===t?t="start":"start"===t&&(t="end"),{x:t,y:e}}_setupPointerEvents(){if(this._platform.IOS||this._platform.ANDROID){if("off"!==this.touchGestures){this._disableNativeGesturesIfNecessary();const t=()=>{clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions.touchendHideDelay)};this._passiveListeners.set("touchend",t).set("touchcancel",t).set("touchstart",()=>{clearTimeout(this._touchstartTimeout),this._touchstartTimeout=setTimeout(()=>this.show(),500)})}}else this._passiveListeners.set("mouseenter",()=>this.show()).set("mouseleave",()=>this.hide());this._passiveListeners.forEach((t,e)=>{this._elementRef.nativeElement.addEventListener(e,t,g)})}_disableNativeGesturesIfNecessary(){const t=this._elementRef.nativeElement,e=t.style,s=this.touchGestures;"off"!==s&&(("on"===s||"INPUT"!==t.nodeName&&"TEXTAREA"!==t.nodeName)&&(e.userSelect=e.msUserSelect=e.webkitUserSelect=e.MozUserSelect="none"),"on"!==s&&t.draggable||(e.webkitUserDrag="none"),e.touchAction="none",e.webkitTapHighlightColor="transparent")}}return t.\u0275fac=function(e){return new(e||t)(n.Rb(i.c),n.Rb(n.m),n.Rb(w.b),n.Rb(n.Q),n.Rb(n.B),n.Rb(d.a),n.Rb(o.c),n.Rb(o.e),n.Rb(D),n.Rb(y.b,8),n.Rb(v,8),n.Rb(n.m))},t.\u0275dir=n.Mb({type:t,selectors:[["","matTooltip",""]],inputs:{showDelay:["matTooltipShowDelay","showDelay"],hideDelay:["matTooltipHideDelay","hideDelay"],touchGestures:["matTooltipTouchGestures","touchGestures"],position:["matTooltipPosition","position"],disabled:["matTooltipDisabled","disabled"],message:["matTooltip","message"],tooltipClass:["matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]}),t})(),S=(()=>{class t{constructor(t,e){this._changeDetectorRef=t,this._breakpointObserver=e,this._visibility="initial",this._closeOnInteraction=!1,this._onHide=new f.a,this._isHandset=this._breakpointObserver.observe(h.b.Handset)}show(t){this._hideTimeoutId&&(clearTimeout(this._hideTimeoutId),this._hideTimeoutId=null),this._closeOnInteraction=!0,this._showTimeoutId=setTimeout(()=>{this._visibility="visible",this._showTimeoutId=null,this._markForCheck()},t)}hide(t){this._showTimeoutId&&(clearTimeout(this._showTimeoutId),this._showTimeoutId=null),this._hideTimeoutId=setTimeout(()=>{this._visibility="hidden",this._hideTimeoutId=null,this._markForCheck()},t)}afterHidden(){return this._onHide.asObservable()}isVisible(){return"visible"===this._visibility}ngOnDestroy(){this._onHide.complete()}_animationStart(){this._closeOnInteraction=!1}_animationDone(t){const e=t.toState;"hidden"!==e||this.isVisible()||this._onHide.next(),"visible"!==e&&"hidden"!==e||(this._closeOnInteraction=!0)}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}}return t.\u0275fac=function(e){return new(e||t)(n.Rb(n.i),n.Rb(h.a))},t.\u0275cmp=n.Lb({type:t,selectors:[["mat-tooltip-component"]],hostAttrs:["aria-hidden","true"],hostVars:2,hostBindings:function(t,e){1&t&&n.fc("click",(function(){return e._handleBodyInteraction()}),!1,n.sc),2&t&&n.Ac("zoom","visible"===e._visibility?1:null)},decls:3,vars:7,consts:[[1,"mat-tooltip",3,"ngClass"]],template:function(t,e){if(1&t&&(n.Xb(0,"div",0),n.fc("@state.start",(function(){return e._animationStart()}))("@state.done",(function(t){return e._animationDone(t)})),n.kc(1,"async"),n.Dc(2),n.Wb()),2&t){var s;const t=null==(s=n.lc(1,5,e._isHandset))?null:s.matches;n.Ib("mat-tooltip-handset",t),n.oc("ngClass",e.tooltipClass)("@state",e._visibility),n.Eb(2),n.Ec(e.message)}},directives:[r.i],pipes:[r.b],styles:[".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"],encapsulation:2,data:{animation:[b.tooltipState]},changeDetection:0}),t})(),O=(()=>{class t{}return t.\u0275mod=n.Pb({type:t}),t.\u0275inj=n.Ob({factory:function(e){return new(e||t)},providers:[k],imports:[[o.a,r.c,i.f,a.e],a.e]}),t})()}}]);