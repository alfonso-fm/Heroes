"use strict";(self.webpackChunkheroesApp=self.webpackChunkheroesApp||[]).push([[742],{2742:(k,g,r)=>{r.r(g),r.d(g,{HeroesModule:()=>S});var s=r(4755),i=r(4660),e=r(2223),l=r(1728),d=r(430),m=r(3891),h=r(2214),v=r(9383);function T(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"mat-list-item",9),e.NdJ("click",function(){e.CHM(o),e.oxw();const p=e.MAs(2);return e.KtG(p.toggle())}),e.TgZ(1,"mat-icon",10),e._uU(2),e.qZA(),e._uU(3),e.qZA()}if(2&t){const o=n.$implicit;e.Q6J("routerLink",o.url),e.xp6(2),e.Oqu(o.icon),e.xp6(1),e.hij(" ",o.label," ")}}const A=function(){return{width:"250px"}};let y=(()=>{class t{constructor(){this.sidebarItems=[{label:"Listado",icon:"label",url:"./list"},{label:"A\xf1adir",icon:"add",url:"./new-hero"},{label:"Buscar",icon:"search",url:"./search"}]}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["heroes-layout-page"]],decls:21,vars:3,consts:[["fullscreen",""],["mode","push",3,"ngStyle"],["sidenav",""],[1,"spacer"],["mat-icon-button","",3,"click"],[3,"routerLink","click",4,"ngFor","ngForOf"],["color","primary"],["mat-button",""],[1,"container","p-2"],[3,"routerLink","click"],["matListItemIcon",""]],template:function(o,a){if(1&o){const p=e.EpF();e.TgZ(0,"mat-sidenav-container",0)(1,"mat-sidenav",1,2)(3,"mat-toolbar")(4,"span"),e._uU(5,"Men\xfa"),e.qZA(),e._UZ(6,"span",3),e.TgZ(7,"button",4),e.NdJ("click",function(){e.CHM(p);const u=e.MAs(2);return e.KtG(u.toggle())}),e.TgZ(8,"mat-icon"),e._uU(9,"menu"),e.qZA()()(),e.TgZ(10,"mat-nav-list"),e.YNc(11,T,4,3,"mat-list-item",5),e.qZA()(),e.TgZ(12,"mat-toolbar",6)(13,"button",4),e.NdJ("click",function(){e.CHM(p);const u=e.MAs(2);return e.KtG(u.toggle())}),e.TgZ(14,"mat-icon"),e._uU(15,"menu"),e.qZA()(),e._UZ(16,"span",3),e.TgZ(17,"button",7),e._uU(18,"Logout"),e.qZA()(),e.TgZ(19,"div",8),e._UZ(20,"router-outlet"),e.qZA()()}2&o&&(e.xp6(1),e.Q6J("ngStyle",e.DdM(2,A)),e.xp6(10),e.Q6J("ngForOf",a.sidebarItems))},dependencies:[s.sg,s.PC,i.lC,i.rH,l.lW,l.RK,d.Hw,m.Hk,m.Tg,m.Yt,h.JX,h.TM,v.Ye],styles:[".spacer[_ngcontent-%COMP%]{flex:1 1 auto}"]}),t})(),f=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-new-page"]],decls:2,vars:0,template:function(o,a){1&o&&(e.TgZ(0,"p"),e._uU(1,"new-page works!"),e.qZA())},encapsulation:2}),t})(),U=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-search-page"]],decls:2,vars:0,template:function(o,a){1&o&&(e.TgZ(0,"p"),e._uU(1,"search-page works!"),e.qZA())},encapsulation:2}),t})();var H=r(3144);let L=(()=>{class t{constructor(o){this.http=o,this.baseUrl="http://localhost:3000"}getHeroes(){return this.http.get(`${this.baseUrl}/heroes`)}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(H.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var Z=r(3630),c=r(6012),C=r(6996);function F(t,n){if(1&t&&(e.TgZ(0,"mat-chip"),e._uU(1),e.qZA()),2&t){const o=n.$implicit;e.xp6(1),e.hij(" ",o," ")}}const _=function(t){return["/heroes/edit",t]},b=function(t){return["/heroes",t]};let q=(()=>{class t{ngOnInit(){if(!this.hero)throw Error("Hero property is required")}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["heroes-hero-card"]],inputs:{hero:"hero"},decls:28,vars:15,consts:[[1,"mt-2"],[4,"ngFor","ngForOf"],["mat-button","","mat-raised","","color","primary",3,"routerLink"],[1,"spacer"]],template:function(o,a){1&o&&(e.TgZ(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),e._uU(3),e.qZA(),e.TgZ(4,"mat-card-subtitle"),e._uU(5),e.qZA()(),e.TgZ(6,"mat-card-content",0)(7,"h4"),e._uU(8),e.qZA(),e.TgZ(9,"p")(10,"strong"),e._uU(11,"Primera aparici\xf3n"),e.qZA(),e._uU(12),e._UZ(13,"br"),e.TgZ(14,"mat-chip-listbox"),e.YNc(15,F,2,1,"mat-chip",1),e.ALo(16,"slice"),e.qZA()()(),e._UZ(17,"mat-divider"),e.TgZ(18,"mat-card-actions")(19,"button",2)(20,"mat-icon"),e._uU(21,"edit"),e.qZA(),e._uU(22," Editar "),e.qZA(),e._UZ(23,"span",3),e.TgZ(24,"button",2)(25,"mat-icon"),e._uU(26,"more_horiz"),e.qZA(),e._uU(27," M\xe1s "),e.qZA()()()),2&o&&(e.xp6(3),e.Oqu(a.hero.superhero),e.xp6(2),e.Oqu(a.hero.alter_ego),e.xp6(3),e.Oqu(a.hero.publisher),e.xp6(4),e.hij(" ",a.hero.first_appearance," "),e.xp6(3),e.Q6J("ngForOf",e.Dn7(16,7,a.hero.characters.split(","),0,3)),e.xp6(4),e.Q6J("routerLink",e.VKq(11,_,a.hero.id)),e.xp6(5),e.Q6J("routerLink",e.VKq(13,b,a.hero.id)))},dependencies:[s.sg,i.rH,l.lW,c.a8,c.hq,c.dn,c.dk,c.$j,c.n5,C.HS,C.z2,d.Hw,Z.d,s.OU],encapsulation:2}),t})();function M(t,n){if(1&t&&(e.TgZ(0,"div",2),e._UZ(1,"heroes-hero-card",3),e.qZA()),2&t){const o=n.$implicit;e.xp6(1),e.Q6J("hero",o)}}const x=[{path:"",component:y,children:[{path:"new-hero",component:f},{path:"search",component:U},{path:"edit/:id",component:f},{path:"list",component:(()=>{class t{constructor(o){this.heroesService=o,this.heroes=[]}ngOnInit(){this.heroesService.getHeroes().subscribe(o=>this.heroes=o)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(L))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-list-page"]],decls:5,vars:1,consts:[[1,"grid","bm-8","pt-2"],["class","col-12 sm:col-4 md:col-3 xl:col-2",4,"ngFor","ngForOf"],[1,"col-12","sm:col-4","md:col-3","xl:col-2"],[3,"hero"]],template:function(o,a){1&o&&(e.TgZ(0,"h1"),e._uU(1,"Listado de H\xe9roes"),e.qZA(),e._UZ(2,"mat-divider"),e.TgZ(3,"div",0),e.YNc(4,M,2,1,"div",1),e.qZA()),2&o&&(e.xp6(4),e.Q6J("ngForOf",a.heroes))},dependencies:[s.sg,Z.d,q],encapsulation:2}),t})()},{path:":id",component:(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-hero-page"]],decls:2,vars:0,template:function(o,a){1&o&&(e.TgZ(0,"p"),e._uU(1,"hero-page works!"),e.qZA())},encapsulation:2}),t})()},{path:"**",redirectTo:"list"}]}];let J=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[i.Bz.forChild(x),i.Bz]}),t})();var O=r(9065);let S=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.ez,J,O.q]}),t})()}}]);