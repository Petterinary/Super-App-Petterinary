"use strict";(self.webpackChunkpetterinary=self.webpackChunkpetterinary||[]).push([[8382],{5584:(j,v,s)=>{s.r(v),s.d(v,{ion_menu:()=>C,ion_menu_button:()=>D,ion_menu_toggle:()=>I});var h=s(5861),i=s(2315),y=s(4510),f=s(117),w=s(4089),_=s(283),u=s(4298),o=s(2186),a=s(4459),d=s(5731),b=s(8240);s(1848),s(2282);const C=class{constructor(e){(0,i.r)(this,e),this.ionWillOpen=(0,i.d)(this,"ionWillOpen",7),this.ionWillClose=(0,i.d)(this,"ionWillClose",7),this.ionDidOpen=(0,i.d)(this,"ionDidOpen",7),this.ionDidClose=(0,i.d)(this,"ionDidClose",7),this.ionMenuChange=(0,i.d)(this,"ionMenuChange",7),this.lastOnEnd=0,this.blocker=w.G.createBlocker({disableScroll:!0}),this.didLoad=!1,this.operationCancelled=!1,this.isAnimating=!1,this._isOpen=!1,this.inheritedAttributes={},this.handleFocus=t=>{const n=(0,f.o)(document);n&&!n.contains(this.el)||this.trapKeyboardFocus(t,document)},this.isPaneVisible=!1,this.isEndSide=!1,this.contentId=void 0,this.menuId=void 0,this.type=void 0,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}typeChanged(e,t){const n=this.contentEl;n&&(void 0!==t&&n.classList.remove(`menu-content-${t}`),n.classList.add(`menu-content-${e}`),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}disabledChanged(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}sideChanged(){this.isEndSide=(0,u.n)(this.side),this.animation=void 0}swipeGestureChanged(){this.updateState()}connectedCallback(){var e=this;return(0,h.Z)(function*(){typeof customElements<"u"&&null!=customElements&&(yield customElements.whenDefined("ion-menu")),void 0===e.type&&(e.type=d.c.get("menuType","overlay"));const t=void 0!==e.contentId?document.getElementById(e.contentId):null;null!==t?(e.el.contains(t)&&console.error('Menu: "contentId" should refer to the main view\'s ion-content, not the ion-content inside of the ion-menu.'),e.contentEl=t,t.classList.add("menu-content"),e.typeChanged(e.type,void 0),e.sideChanged(),o.m._register(e),e.menuChanged(),e.gesture=(yield Promise.resolve().then(s.bind(s,1981))).createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,blurOnStart:!0,canStart:n=>e.canStart(n),onWillStart:()=>e.onWillStart(),onStart:()=>e.onStart(),onMove:n=>e.onMove(n),onEnd:n=>e.onEnd(n)}),e.updateState()):console.error('Menu: must have a "content" element to listen for drag events on.')})()}componentWillLoad(){this.inheritedAttributes=(0,u.i)(this.el)}componentDidLoad(){var e=this;return(0,h.Z)(function*(){e.didLoad=!0;const t=e.el.closest("ion-split-pane");null!==t&&(e.isPaneVisible=yield t.isVisible()),e.menuChanged(),e.updateState()})()}menuChanged(){this.didLoad&&this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}disconnectedCallback(){var e=this;return(0,h.Z)(function*(){yield e.close(!1),e.blocker.destroy(),o.m._unregister(e),e.animation&&e.animation.destroy(),e.gesture&&(e.gesture.destroy(),e.gesture=void 0),e.animation=void 0,e.contentEl=void 0})()}onSplitPaneChanged(e){const t=this.el.closest("ion-split-pane");null!==t&&t===e.target&&(this.isPaneVisible=e.detail.visible,this.updateState())}onBackdropClick(e){this._isOpen&&this.lastOnEnd<e.timeStamp-100&&e.composedPath&&!e.composedPath().includes(this.menuInnerEl)&&(e.preventDefault(),e.stopPropagation(),this.close())}onKeydown(e){"Escape"===e.key&&this.close()}isOpen(){return Promise.resolve(this._isOpen)}isActive(){return Promise.resolve(this._isActive())}open(e=!0){return this.setOpen(!0,e)}close(e=!0){return this.setOpen(!1,e)}toggle(e=!0){return this.setOpen(!this._isOpen,e)}setOpen(e,t=!0){return o.m._setOpen(this,e,t)}trapKeyboardFocus(e,t){const n=e.target;if(n)if(this.el.contains(n))this.lastFocus=n;else{const{el:r}=this;(0,f.n)(r),this.lastFocus===t.activeElement&&(0,f.q)(r)}}_setOpen(e,t=!0){var n=this;return(0,h.Z)(function*(){return!(!n._isActive()||n.isAnimating||e===n._isOpen||(n.beforeAnimation(e),yield n.loadAnimation(),yield n.startAnimation(e,t),n.operationCancelled?(n.operationCancelled=!1,1):(n.afterAnimation(e),0)))})()}loadAnimation(){var e=this;return(0,h.Z)(function*(){const t=e.menuInnerEl.offsetWidth,n=(0,u.n)(e.side);if(t===e.width&&void 0!==e.animation&&n===e.isEndSide)return;e.width=t,e.isEndSide=n,e.animation&&(e.animation.destroy(),e.animation=void 0);const r=e.animation=yield o.m._createAnimation(e.type,e);d.c.getBoolean("animated",!0)||r.duration(0),r.fill("both")})()}startAnimation(e,t){var n=this;return(0,h.Z)(function*(){const r=!e,m=(0,d.b)(n),p="ios"===m?"cubic-bezier(0.32,0.72,0,1)":"cubic-bezier(0.0,0.0,0.2,1)",c="ios"===m?"cubic-bezier(1, 0, 0.68, 0.28)":"cubic-bezier(0.4, 0, 0.6, 1)",l=n.animation.direction(r?"reverse":"normal").easing(r?c:p);t?yield l.play():l.play({sync:!0}),"reverse"===l.getDirection()&&l.direction("normal")})()}_isActive(){return!this.disabled&&!this.isPaneVisible}canSwipe(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}canStart(e){return!(document.querySelector("ion-modal.show-modal")||!this.canSwipe())&&(!!this._isOpen||!o.m._getOpenSync()&&Z(window,e.currentX,this.isEndSide,this.maxEdgeStart))}onWillStart(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}onStart(){this.isAnimating&&this.animation?this.animation.progressStart(!0,this._isOpen?1:0):(0,u.m)(!1,"isAnimating has to be true")}onMove(e){if(!this.isAnimating||!this.animation)return void(0,u.m)(!1,"isAnimating has to be true");const n=O(e.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(this._isOpen?1-n:n)}onEnd(e){if(!this.isAnimating||!this.animation)return void(0,u.m)(!1,"isAnimating has to be true");const t=this._isOpen,n=this.isEndSide,r=O(e.deltaX,t,n),m=this.width,p=r/m,c=e.velocityX,l=m/2,L=c>=0&&(c>.2||e.deltaX>l),z=c<=0&&(c<-.2||e.deltaX<-l),g=t?n?L:z:n?z:L;let W=!t&&g;t&&!g&&(W=!0),this.lastOnEnd=e.currentTime;let E=g?.001:-.001;E+=(0,y.g)([0,0],[.4,0],[.6,1],[1,1],(0,u.j)(0,p<0?.01:p,.9999))[0]||0;const N=this._isOpen?!g:g;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish(()=>this.afterAnimation(W),{oneTimeCallback:!0}).progressEnd(N?1:0,this._isOpen?1-E:E,300)}beforeAnimation(e){(0,u.m)(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(A),this.el.setAttribute("tabindex","0"),this.backdropEl&&this.backdropEl.classList.add(M),this.contentEl&&(this.contentEl.classList.add(P),this.contentEl.setAttribute("aria-hidden","true")),this.blocker.block(),this.isAnimating=!0,e?this.ionWillOpen.emit():this.ionWillClose.emit()}afterAnimation(e){var t;this._isOpen=e,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),e?(this.ionDidOpen.emit(),(null===(t=document.activeElement)||void 0===t?void 0:t.closest("ion-menu"))!==this.el&&this.el.focus(),document.addEventListener("focus",this.handleFocus,!0)):(this.el.classList.remove(A),this.el.removeAttribute("tabindex"),this.contentEl&&(this.contentEl.classList.remove(P),this.contentEl.removeAttribute("aria-hidden")),this.backdropEl&&this.backdropEl.classList.remove(M),this.animation&&this.animation.stop(),this.ionDidClose.emit(),document.removeEventListener("focus",this.handleFocus,!0))}updateState(){const e=this._isActive();this.gesture&&this.gesture.enable(e&&this.swipeGesture),e||(this.isAnimating&&(this.operationCancelled=!0),this.afterAnimation(!1))}render(){const{type:e,disabled:t,el:n,isPaneVisible:r,inheritedAttributes:m,side:p}=this,c=(0,d.b)(this);return(0,i.h)(i.f,{key:"30c0c9bfb8973e4a6feb658f8c4ee8e362f464ed",onKeyDown:(0,_.shouldUseCloseWatcher)()?null:this.onKeydown,role:"navigation","aria-label":m["aria-label"]||"menu",class:{[c]:!0,[`menu-type-${e}`]:!0,"menu-enabled":!t,[`menu-side-${p}`]:!0,"menu-pane-visible":r,"split-pane-side":(0,a.h)("ion-split-pane",n)}},(0,i.h)("div",{key:"34b0e5840906862cf1bc27207e089004b0402c56",class:"menu-inner",part:"container",ref:l=>this.menuInnerEl=l},(0,i.h)("slot",{key:"2cd7e61a8c0987ca4b3f1f8b33cba7152f1275fe"})),(0,i.h)("ion-backdrop",{key:"d190b1f9b66c76e276f27bfe074d3aab796180fb",ref:l=>this.backdropEl=l,class:"menu-backdrop",tappable:!1,stopPropagation:!1,part:"backdrop"}))}get el(){return(0,i.i)(this)}static get watchers(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}}},O=(e,t,n)=>Math.max(0,t!==n?-e:e),Z=(e,t,n,r)=>n?t>=e.innerWidth-r:t<=r,A="show-menu",M="show-backdrop",P="menu-content-open";C.style={ios:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width, var(--width));min-width:var(--side-min-width, var(--min-width));max-width:var(--side-max-width, var(--max-width))}:host(.menu-pane-visible.split-pane-side){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none;box-shadow:none;z-index:0}:host(.menu-pane-visible.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}:host(.menu-pane-visible.split-pane-side){-ms-flex-order:-1;order:-1}:host(.menu-pane-visible.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none;transform:none;-webkit-box-shadow:none;box-shadow:none}:host(.menu-pane-visible) ion-backdrop{display:hidden !important}:host(.menu-pane-visible.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-pane-visible.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}",md:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width, var(--width));min-width:var(--side-min-width, var(--min-width));max-width:var(--side-max-width, var(--max-width))}:host(.menu-pane-visible.split-pane-side){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none;box-shadow:none;z-index:0}:host(.menu-pane-visible.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}:host(.menu-pane-visible.split-pane-side){-ms-flex-order:-1;order:-1}:host(.menu-pane-visible.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none;transform:none;-webkit-box-shadow:none;box-shadow:none}:host(.menu-pane-visible) ion-backdrop{display:hidden !important}:host(.menu-pane-visible.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-pane-visible.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}"};const S=function(){var e=(0,h.Z)(function*(t){const n=yield o.m.get(t);return!(!n||!(yield n.isActive()))});return function(n){return e.apply(this,arguments)}}(),D=class{constructor(e){var t=this;(0,i.r)(this,e),this.inheritedAttributes={},this.onClick=(0,h.Z)(function*(){return o.m.toggle(t.menu)}),this.visible=!1,this.color=void 0,this.disabled=!1,this.menu=void 0,this.autoHide=!0,this.type="button"}componentWillLoad(){this.inheritedAttributes=(0,u.i)(this.el)}componentDidLoad(){this.visibilityChanged()}visibilityChanged(){var e=this;return(0,h.Z)(function*(){e.visible=yield S(e.menu)})()}render(){const{color:e,disabled:t,inheritedAttributes:n}=this,r=(0,d.b)(this),m=d.c.get("menuIcon","ios"===r?b.u:b.v),p=this.autoHide&&!this.visible,c={type:this.type},l=n["aria-label"]||"menu";return(0,i.h)(i.f,{key:"95a8b9f09c7fae9713a8dc003ed277f6f31403da",onClick:this.onClick,"aria-disabled":t?"true":null,"aria-hidden":p?"true":null,class:(0,a.c)(e,{[r]:!0,button:!0,"menu-button-hidden":p,"menu-button-disabled":t,"in-toolbar":(0,a.h)("ion-toolbar",this.el),"in-toolbar-color":(0,a.h)("ion-toolbar[color]",this.el),"ion-activatable":!0,"ion-focusable":!0})},(0,i.h)("button",Object.assign({key:"39f3ce20c400d2fac4890a042e8e44426709fca5"},c,{disabled:t,class:"button-native",part:"native","aria-label":l}),(0,i.h)("span",{key:"310978dc1cdef668de6720cde2a2304253679176",class:"button-inner"},(0,i.h)("slot",{key:"2a2b9de524c1fc3c526fe9559cb077b976852725"},(0,i.h)("ion-icon",{key:"9c22d7ea9fc3d76c32ec1c1b4b13d982c60b8c2d",part:"icon",icon:m,mode:r,lazy:!1,"aria-hidden":"true"}))),"md"===r&&(0,i.h)("ion-ripple-effect",{key:"c58c9e29c763070383472f65a9d322a684bcb564",type:"unbounded"})))}get el(){return(0,i.i)(this)}};D.style={ios:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #0054e9);--padding-start:5px;--padding-end:5px;min-height:32px;font-size:clamp(31px, 1.9375rem, 38.13px)}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}',md:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:3rem;height:3rem;font-size:1.5rem}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}'};const I=class{constructor(e){(0,i.r)(this,e),this.onClick=()=>o.m.toggle(this.menu),this.visible=!1,this.menu=void 0,this.autoHide=!0}connectedCallback(){this.visibilityChanged()}visibilityChanged(){var e=this;return(0,h.Z)(function*(){e.visible=yield S(e.menu)})()}render(){const e=(0,d.b)(this),t=this.autoHide&&!this.visible;return(0,i.h)(i.f,{key:"90e621f09792383f1badcc1b402b1ac7d08c5f98",onClick:this.onClick,"aria-hidden":t?"true":null,class:{[e]:!0,"menu-toggle-hidden":t}},(0,i.h)("slot",{key:"c0abdd1d91e9d80ee3704e3e374ebe1f29078460"}))}};I.style=":host(.menu-toggle-hidden){display:none}"},4459:(j,v,s)=>{s.d(v,{c:()=>y,g:()=>w,h:()=>i,o:()=>u});var h=s(5861);const i=(o,a)=>null!==a.closest(o),y=(o,a)=>"string"==typeof o&&o.length>0?Object.assign({"ion-color":!0,[`ion-color-${o}`]:!0},a):a,w=o=>{const a={};return(o=>void 0!==o?(Array.isArray(o)?o:o.split(" ")).filter(d=>null!=d).map(d=>d.trim()).filter(d=>""!==d):[])(o).forEach(d=>a[d]=!0),a},_=/^[a-z][a-z0-9+\-.]*:/,u=function(){var o=(0,h.Z)(function*(a,d,b,k){if(null!=a&&"#"!==a[0]&&!_.test(a)){const x=document.querySelector("ion-router");if(x)return d?.preventDefault(),x.push(a,b,k)}return!1});return function(d,b,k,x){return o.apply(this,arguments)}}()}}]);