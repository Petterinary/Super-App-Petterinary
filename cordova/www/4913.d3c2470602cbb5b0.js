"use strict";(self.webpackChunkpetterinary=self.webpackChunkpetterinary||[]).push([[4913],{7328:(m,_,i)=>{i.d(_,{W:()=>a});var c=i(5879),d=i(5958);let a=(()=>{class p{constructor(){this.pageTitle=""}back(){window.history.back()}ngOnInit(){}static#n=this.\u0275fac=function(l){return new(l||p)};static#t=this.\u0275cmp=c.Xpm({type:p,selectors:[["app-back-button"]],inputs:{pageTitle:"pageTitle"},decls:9,vars:1,consts:[["mode","md"],["lines","none","mode","md",2,"background","transparent"],[1,"head-cont"],[1,"logo-cont"],["src","assets\\icon\\back.png","alt","Back",3,"click"],[1,"title"]],template:function(l,C){1&l&&(c.TgZ(0,"ion-header",0)(1,"ion-item",1)(2,"div",2)(3,"div",3)(4,"img",4),c.NdJ("click",function(){return C.back()}),c.qZA()(),c.TgZ(5,"div",5)(6,"h1")(7,"h1"),c._uU(8),c.qZA()()()()()()),2&l&&(c.xp6(8),c.Oqu(C.pageTitle))},dependencies:[d.Gu,d.Ie],styles:["ion-header[_ngcontent-%COMP%]{width:100%;overflow:hidden;box-shadow:none;z-index:1000;margin-top:48px}ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .head-cont[_ngcontent-%COMP%]{display:flex;width:100%}ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .head-cont[_ngcontent-%COMP%]   .logo-cont[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:left}ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .head-cont[_ngcontent-%COMP%]   .logo-cont[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:35px}ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .head-cont[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center}ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .head-cont[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;font-size:15px;margin-top:10px;font-weight:700;margin-right:2.5vh}ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .head-cont[_ngcontent-%COMP%]   .side-menu-cont[_ngcontent-%COMP%]   .side-menu-icon[_ngcontent-%COMP%]{font-size:40px;display:flex;top:50%;right:0;transform:translateY(-50%)}"]})}return p})()},4913:(m,_,i)=>{i.r(_),i.d(_,{RekapKonsultasiVvPageModule:()=>v});var c=i(6814),d=i(95),a=i(5958),p=i(5514),n=i(5879),M=i(7328);function l(t,r){if(1&t){const e=n.EpF();n.ynx(0),n.TgZ(1,"ion-item")(2,"ion-label",11),n._uU(3,"Nama Pemohon"),n.qZA(),n.TgZ(4,"ion-input",12),n.NdJ("ngModelChange",function(g){const s=n.CHM(e).$implicit;return n.KtG(s.namaP=g)}),n.qZA()(),n.TgZ(5,"ion-item")(6,"ion-label",11),n._uU(7,"Nomor yang bisa dihubungi"),n.qZA(),n.TgZ(8,"ion-input",12),n.NdJ("ngModelChange",function(g){const s=n.CHM(e).$implicit;return n.KtG(s.noTel=g)}),n.qZA()(),n.TgZ(9,"ion-item")(10,"ion-label",11),n._uU(11,"Deskripsi Keluhan"),n.qZA(),n.TgZ(12,"ion-textarea",12),n.NdJ("ngModelChange",function(g){const s=n.CHM(e).$implicit;return n.KtG(s.deskripsiKeluhan=g)}),n.qZA()(),n.TgZ(13,"ion-item")(14,"ion-label",11),n._uU(15,"Hasil Konsultasi"),n.qZA(),n.TgZ(16,"ion-textarea",12),n.NdJ("ngModelChange",function(g){const s=n.CHM(e).$implicit;return n.KtG(s.hasilKon=g)}),n.qZA()(),n.BQk()}if(2&t){const e=r.$implicit;n.xp6(4),n.Q6J("ngModel",e.namaP),n.xp6(4),n.Q6J("ngModel",e.noTel),n.xp6(4),n.Q6J("ngModel",e.deskripsiKeluhan),n.xp6(4),n.Q6J("ngModel",e.hasilKon)}}function C(t,r){if(1&t&&(n.ynx(0),n.TgZ(1,"ion-text",23),n._uU(2),n.qZA(),n.BQk()),2&t){const e=r.$implicit;n.xp6(2),n.hij("Rp. ",e.totalTagihan,"")}}function O(t,r){if(1&t&&(n.ynx(0),n.TgZ(1,"div",14)(2,"div",15)(3,"div",16)(4,"ion-text",17),n._uU(5,"Dibayar dengan"),n.qZA(),n.TgZ(6,"ion-text",18),n._uU(7),n.qZA()(),n.TgZ(8,"div",19),n._UZ(9,"img",20),n.qZA()(),n.TgZ(10,"div",21)(11,"ion-text",22),n._uU(12,"Total Biaya"),n.qZA(),n.YNc(13,C,3,1,"ng-container",8),n.qZA()(),n.BQk()),2&t){const e=n.oxw().$implicit,o=n.oxw();n.xp6(7),n.Oqu(e.bayarDengan),n.xp6(6),n.Q6J("ngForOf",o.test)}}function x(t,r){if(1&t&&(n.ynx(0),n.YNc(1,O,14,2,"ng-container",13),n.BQk()),2&t){const e=r.$implicit;n.oxw();const o=n.MAs(13);n.xp6(1),n.Q6J("ngIf",1===e.sudahDibayar)("ngIfElse",o)}}function f(t,r){if(1&t&&(n.ynx(0),n.TgZ(1,"ion-text",23),n._uU(2),n.qZA(),n.BQk()),2&t){const e=r.$implicit;n.xp6(2),n.hij("Rp. ",e.totalTagihan,"")}}function u(t,r){if(1&t&&(n.TgZ(0,"div",24)(1,"div",15)(2,"div",16)(3,"ion-text",25),n._uU(4,"Tagihan Belum Dibayar"),n.qZA()()(),n.TgZ(5,"div",21)(6,"ion-text",22),n._uU(7,"Total Biaya"),n.qZA(),n.YNc(8,f,3,1,"ng-container",8),n.qZA()()),2&t){const e=n.oxw();n.xp6(8),n.Q6J("ngForOf",e.test)}}const h=[{path:"",component:(()=>{class t{constructor(){this.test=[{totalTagihan:" 275.000",noTel:"085211798880",namaP:"Ryu",hasilKon:"Kucing terkena mual biasa",deskripsiKeluhan:"Kucing muntah-muntah terus",bayarDengan:"Gopay",sudahDibayar:0}]}ngOnInit(){}static#n=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-rekap-konsultasi-vv"]],decls:15,vars:4,consts:[[1,"white-space",3,"fullscreen"],[1,"contents"],[1,"bb-icon"],[3,"pageTitle"],[1,"form-type"],[1,"form-title"],[1,"form-body"],[1,"input-tile"],[4,"ngFor","ngForOf"],["belumDibayar",""],[1,"bottom-gap"],["position","stacked"],[3,"ngModel","ngModelChange"],[4,"ngIf","ngIfElse"],[1,"total-price"],[1,"paid"],[1,"paid-by"],[1,"text"],[1,"payment-method-text"],[1,"img-cont"],["src","../../../assets/icon/payment/gopay-icon.png",1,"gopay-icon"],[1,"text-container"],[1,"text-price"],[1,"text-prices"],[1,"unpaid-total-price"],[1,"text-blm-bayar"]],template:function(o,g){1&o&&(n.TgZ(0,"ion-content",0)(1,"div",1)(2,"div",2),n._UZ(3,"app-back-button",3),n.qZA(),n.TgZ(4,"div",4)(5,"ion-badge",5)(6,"ion-text"),n._uU(7,"Vet Visit"),n.qZA()()(),n.TgZ(8,"div",6)(9,"div",7),n.YNc(10,l,17,4,"ng-container",8),n.qZA(),n.YNc(11,x,2,2,"ng-container",8),n.YNc(12,u,9,1,"ng-template",null,9,n.W1O),n.qZA(),n._UZ(14,"div",10),n.qZA()()),2&o&&(n.Q6J("fullscreen",!0),n.xp6(3),n.Q6J("pageTitle","Rekap Konsultasi"),n.xp6(7),n.Q6J("ngForOf",g.test),n.xp6(1),n.Q6J("ngForOf",g.test))},dependencies:[c.sg,c.O5,d.JJ,d.On,a.yp,a.W2,a.pK,a.Ie,a.Q$,a.yW,a.g2,a.j9,M.W],styles:["ion-item[_ngcontent-%COMP%]{background:transparent;--inner-padding-end: 0;--inner-border-width: 0;--padding-start: 0px}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-bottom:10px!important;margin-left:3px!important;margin-top:3px!important;font-size:18px;opacity:1!important}ion-item[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%]{--background: #ffffff;border-radius:7px;border:1px solid #dedede;padding:10px;font-size:14px;--padding-top: 0}ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{--background: #ffffff;--border-radius: 7px;--padding-top: 6px !important;--padding-bottom: 6px !important;--padding-end: 8px !important;--padding-start: 8px !important;font-size:14px;border:1px solid #dedede;border-radius:7px}ion-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]{padding-left:8px;background:#fff;border:1px solid #dedede;border-radius:7px;font-weight:500;font-size:14px;color:#000}.btn-aksi[_ngcontent-%COMP%]{padding:10px 20px;width:100px;border-radius:10px;color:#fff}.danger[_ngcontent-%COMP%]{color:var(--ion-color-danger)}ion-content.white-space[_ngcontent-%COMP%]{--color: #000}.contents[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}.contents[_ngcontent-%COMP%]   .form-type[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%}.contents[_ngcontent-%COMP%]   .form-type[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]{--background: #00ffff;padding:5px 10px}.contents[_ngcontent-%COMP%]   .form-type[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{color:#000;font-size:13px}.contents[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;justify-content:space-between;margin-left:10px;margin-right:10px;margin-top:10px;border-radius:20px;border:solid #9c9c9c 1px}.contents[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .input-tile[_ngcontent-%COMP%]{margin:10px}.contents[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .input-tile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#888;margin-bottom:5px}.contents[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .input-tile[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contents[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .input-tile[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;border:solid #9c9c9c 1px;border-radius:5px}.contents[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .input-tile[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .contents[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .input-tile[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder{color:#888;font-style:italic;font-size:1.8vh}.contents[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .input-tile[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{max-width:100%;min-width:100%;max-height:15vh;min-height:5vh}.contents[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .unpaid-total-price[_ngcontent-%COMP%]{display:flex;justify-content:end;align-items:center;width:100%;margin-bottom:10px}.contents[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .unpaid-total-price[_ngcontent-%COMP%]   .paid[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-left:10px}.contents[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .unpaid-total-price[_ngcontent-%COMP%]   .paid[_ngcontent-%COMP%]   .paid-by[_ngcontent-%COMP%]{display:flex;justify-content:start;flex-direction:column;align-items:end;margin-right:10px}.contents[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .unpaid-total-price[_ngcontent-%COMP%]   .paid[_ngcontent-%COMP%]   .paid-by[_ngcontent-%COMP%]   ion-text.text[_ngcontent-%COMP%]{font-size:15px}.contents[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .unpaid-total-price[_ngcontent-%COMP%]   .paid[_ngcontent-%COMP%]   .paid-by[_ngcontent-%COMP%]   ion-text.text-blm-bayar[_ngcontent-%COMP%]{font-size:15px;color:red;font-weight:700}.contents[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .unpaid-total-price[_ngcontent-%COMP%]   .paid[_ngcontent-%COMP%]   .paid-by[_ngcontent-%COMP%]   ion-text.payment-method-text[_ngcontent-%COMP%]{font-size:15px;font-weight:bolder}.contents[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .unpaid-total-price[_ngcontent-%COMP%]   .paid[_ngcontent-%COMP%]   .img-cont[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.contents[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .unpaid-total-price[_ngcontent-%COMP%]   .paid[_ngcontent-%COMP%]   .img-cont[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:35px}.contents[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .unpaid-total-price[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.contents[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .unpaid-total-price[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   ion-text.text-price[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px;text-align:right}.contents[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .unpaid-total-price[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   ion-text.text-prices[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px;text-align:right;font-weight:700}.contents[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .total-price[_ngcontent-%COMP%]{display:flex;justify-content:end;align-items:flex-end;width:100%;margin-bottom:10px}.contents[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .total-price[_ngcontent-%COMP%]   .paid[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-left:10px}.contents[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .total-price[_ngcontent-%COMP%]   .paid[_ngcontent-%COMP%]   .paid-by[_ngcontent-%COMP%]{display:flex;justify-content:start;flex-direction:column;align-items:end;margin-right:10px}.contents[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .total-price[_ngcontent-%COMP%]   .paid[_ngcontent-%COMP%]   .paid-by[_ngcontent-%COMP%]   ion-text.text[_ngcontent-%COMP%]{font-size:15px}.contents[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .total-price[_ngcontent-%COMP%]   .paid[_ngcontent-%COMP%]   .paid-by[_ngcontent-%COMP%]   ion-text.payment-method-text[_ngcontent-%COMP%]{font-size:15px;font-weight:bolder}.contents[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .total-price[_ngcontent-%COMP%]   .paid[_ngcontent-%COMP%]   .img-cont[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.contents[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .total-price[_ngcontent-%COMP%]   .paid[_ngcontent-%COMP%]   .img-cont[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:35px}.contents[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .total-price[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.contents[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .total-price[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   ion-text.text-price[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px;text-align:right}.contents[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .total-price[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   ion-text.text-prices[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px;text-align:right;font-weight:700}.contents[_ngcontent-%COMP%]   .bottom-gap[_ngcontent-%COMP%]{padding:54px 0}"]})}return t})()}];let y=(()=>{class t{static#n=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275mod=n.oAB({type:t});static#e=this.\u0275inj=n.cJS({imports:[p.Bz.forChild(h),p.Bz]})}return t})();var b=i(8339);let v=(()=>{class t{static#n=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275mod=n.oAB({type:t});static#e=this.\u0275inj=n.cJS({imports:[c.ez,d.u5,a.Pc,b.N,y]})}return t})()}}]);