(this["webpackJsonpgk-portfolio"]=this["webpackJsonpgk-portfolio"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},134:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(34),l=a.n(c),o=a(38),s=a(8),i=a(7),m=r.a.createContext();function u(e){var t=e.children,a=Object(n.useState)(!0),c=Object(i.a)(a,2),l=c[0],o=c[1],s=Object(n.useState)(),u=Object(i.a)(s,2),g=u[0],d=u[1],p=Object(n.useState)(),h=Object(i.a)(p,2),f=h[0],b=h[1];return r.a.createElement(m.Provider,{value:{toggleBurgerMenu:l,setToggleBurgerMenu:o,amHome:g,setAmHome:d,amAbout:f,setAmAbout:b}},t)}a(88);var g=a(6);a(89);var d=function(e){var t=e.title,a=e.subTitleOne,c=e.subTitleTwo,l=g.a.timeline(),o=Object(n.useRef)(null),s=Object(n.useRef)(null),i=Object(n.useRef)(null);return Object(n.useEffect)((function(){l.from(o.current,{duration:.7,autoAlpha:0,scale:40,ease:"back.out(1)"}).to(o.current,{duration:1,width:210,borderRadius:0,ease:"back.out(3)"}),l.from(s.current,{duration:1,autoAlpha:0,y:20,ease:"back.out(3)"},"-=1"),l.from(i.current,{duration:1,autoAlpha:0,y:-20,ease:"back.out(3)"},"-=1")}),[l]),r.a.createElement("header",null,r.a.createElement("h1",{className:"g_white-color",ref:s},t),r.a.createElement("hr",{ref:o}),r.a.createElement("div",{ref:i},r.a.createElement("h3",{className:"header__sub-title"},a),r.a.createElement("h3",{className:"header__sub-title"},c)))},p=(a(90),a(18)),h=a(14),f=(a(91),a(10)),b=a(140),v=a(59),y=a(58),E=a(40),_=a(27);function k(e){var t=e.children,a=e.eventKey,c=Object(n.useState)(!1),l=Object(i.a)(c,2),o=l[0],s=l[1],m=Object(E.b)(a,(function(){s(!o)}));return r.a.createElement("button",{onClick:m,className:"g_card-slide ".concat(o?"g_card-slide-up":"")},t)}g.a.registerPlugin(_.a);var j=function(e){var t=e.img,a=e.title,c=e.tech,l=e.deployLink,o=e.repoLink,s=[];c.split(", ").forEach((function(e){s.push(r.a.createElement("h5",{key:Object(b.a)(),className:"dev-project__tech "},e))}));var i=g.a.timeline(),m=Object(n.useRef)(null);return _.a.saveStyles(".g_projects-container"),Object(n.useEffect)((function(){_.a.matchMedia({"(min-width: 768px)":function(){return g.a.from(m.current,{duration:2,opacity:0,y:100,scale:.8,ease:"power4.out",scrollTrigger:{trigger:m.current,start:"top bottom",end:"-=50",scrub:!0,toggleActions:"play none none reverse"}}),function(){i.kill()}},"(max-width: 767px)":function(){return g.a.from(m.current,{delay:1.2,duration:2,opacity:0,y:100,scale:.8,ease:"power4.out"}),function(){i.kill()}}})}),[i]),r.a.createElement("div",{className:"g_projects-container",ref:m},r.a.createElement(v.a,null,r.a.createElement(y.a,null,r.a.createElement("div",{className:"neumorphism"},r.a.createElement(k,{eventKey:"0"},r.a.createElement("img",{src:t,alt:a,className:"g_project-img"}))),r.a.createElement("div",{className:"g_meta-container dev-project__meta-container"},r.a.createElement(v.a.Collapse,{eventKey:"0"},r.a.createElement(y.a.Body,null,r.a.createElement("h4",{className:"dev-project__title"},a),r.a.createElement("div",{className:"dev-project__links"},l?r.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"dev-project__button dev-project__button--half"},r.a.createElement(f.c,null),r.a.createElement("h5",null,"View Deployed")):null,r.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:l?"dev-project__button dev-project__button--half":"dev-project__button dev-project__button--full"},r.a.createElement(f.e,null),r.a.createElement("h5",null,"View Repo"))),r.a.createElement("div",{className:"dev-project__info"},s)))))))},w=a(72);var N=function(){var e=g.a.timeline(),t=Object(n.useRef)(null);return Object(n.useEffect)((function(){e.from(t.current,{duration:1,autoAlpha:0,y:50,ease:"expo.out",delay:1})}),[e]),r.a.createElement("section",null,r.a.createElement(p.a,null,r.a.createElement("h2",{ref:t},"Dev Work"),r.a.createElement(h.a,{className:"justify-content-around g_negative-margin"},w.map((function(e){return r.a.createElement(j,{key:e.id,img:e.img,title:e.title,tech:e.tech,deployLink:e.deployLink,repoLink:e.repoLink})})))))},O=(a(94),a(95),a(73)),A=a.n(O),S=a(74),x=a.n(S),L=a(75),C=a.n(L);g.a.registerPlugin(_.a);var R=function(){var e=g.a.timeline(),t=Object(n.useRef)(null),a=Object(n.useRef)(null);return _.a.saveStyles(".design-project__container"),Object(n.useEffect)((function(){_.a.matchMedia({"(min-width: 768px)":function(){return g.a.from(t.current,{scrollTrigger:{trigger:t.current,toggleActions:"play none none none",start:"top bottom",end:"-=50",scrub:!0},duration:2,autoAlpha:0,y:100,scale:.8,ease:"power4.out"}),g.a.from(a.current,{scrollTrigger:{trigger:a.current,toggleActions:"play none none none",start:"top bottom",end:"-=50",scrub:!0},duration:2,autoAlpha:0,y:100,scale:.8,ease:"power4.out"}),function(){e.kill()}}})}),[e]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"design-project__container",ref:t},r.a.createElement("a",{href:"http://gedalya.myportfolio.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"g__design-project__card-slide"},r.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"design-project__project-img"},r.a.createElement("source",{src:x.a,type:"video/webm"}),r.a.createElement("source",{src:A.a,type:"video/mp4"}))),r.a.createElement("div",{className:"design-project__meta-container"},r.a.createElement("h4",{className:"design-project__text"},"View design projects"),r.a.createElement(f.a,{className:"design-project__icon"})))),r.a.createElement("div",{className:"design-project__container",ref:a},r.a.createElement("a",{href:"https://youtu.be/7nmarPXV2OQ",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"g__design-project__card-slide"},r.a.createElement("img",{src:C.a,alt:"From a Figment to Figma.",className:"design-project__project-img"})),r.a.createElement("div",{className:"design-project__meta-container"},r.a.createElement("h4",{className:"design-project__text"},"Watch my workshop"),r.a.createElement(f.a,{className:"design-project__icon"})))))};var G=function(){var e=Object(n.useRef)(null);return Object(n.useEffect)((function(){g.a.from(e.current,{duration:1,autoAlpha:0,y:-100,scrollTrigger:{trigger:e.current,start:"top bottom",end:"-=50",scrub:!0,toggleActions:"play none none reverse"}})}),[]),r.a.createElement("section",{className:"design-portfolio__section"},r.a.createElement(p.a,null,r.a.createElement("h2",{ref:e},"Design"),r.a.createElement(h.a,{className:"justify-content-around g_negative-margin"},r.a.createElement(R,null))))};var K=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{title:"Hi, I\u2019m Gedalya, a front-end developer and creative.",subTitleOne:"I organize details \u2014 through code, design, motion and photography."}),r.a.createElement(N,null),r.a.createElement(G,null))};a(96);var P=function(){var e=g.a.timeline(),t=Object(n.useRef)(null);return Object(n.useEffect)((function(){e.from(t.current,{duration:1,autoAlpha:0,x:-20,ease:"back.out(2)",delay:1.3})}),[e]),r.a.createElement("div",{className:"githubPin",ref:t},r.a.createElement("a",{href:"https://www.linkedin.com/in/gedalyakrycer/",target:"_blank",rel:"noopener noreferrer",className:"githubPin_link"},r.a.createElement(f.f,null)),r.a.createElement("a",{href:"https://github.com/GedalyaKrycer",target:"_blank",rel:"noopener noreferrer",className:"githubPin_link"},r.a.createElement(f.e,null)),r.a.createElement("a",{href:"https://www.behance.net/gedalyakrycer",target:"_blank",rel:"noopener noreferrer",className:"githubPin_link"},r.a.createElement(f.b,null)))};a(97);var I=function(){var e=g.a.timeline(),t=Object(n.useRef)(null);return Object(n.useEffect)((function(){e.from(t.current,{duration:1,autoAlpha:0,x:20,ease:"back.out(2)",delay:1.3})}),[e]),r.a.createElement("div",{className:"contactPin",ref:t},r.a.createElement("a",{href:"/about#contact",className:"contactPin__link"},"Contact"))},F=(a(98),a(99),a(22));var T=function(){return r.a.createElement("section",null,r.a.createElement(p.a,null,r.a.createElement("h2",null,"Bio"),r.a.createElement(h.a,{className:"justify-content-md-center g_negative-margin"},r.a.createElement(F.a,{className:"g_white-color",lg:8},r.a.createElement("p",{className:"g__body-lg"},"Hi there! I am a Vegas-based front-end developer and creative, who obsesses over the details and loves learning new technologies."),r.a.createElement("p",null,"(I also obsess over movies and enjoy everything from superhero blockbusters to romcoms.)"),r.a.createElement("p",null,"I recently left my agency job as a Digital Design Director to follow my true passion\u2014building websites from the ground up."),r.a.createElement("p",null,"In September of 2020, I earned a certification in Full Stack Development, from the University of Arizona's 6 month coding bootcamp. It's a joy to not only design a great site, but code it into reality as well."),r.a.createElement("p",null,"With this deeper understanding of how to build quality sites, I look forward to changing careers to web development, built on a strong design foundation.")))))},D=a(47);a(100),a(101);var M=function(e){var t=e.name,a=e.link,c=e.svg,l=e.type,o=Object(n.useState)("hello"),s=Object(i.a)(o,2),m=s[0],u=s[1];return Object(n.useEffect)((function(){u("dev"===l?"tech-btn__btn--dev":"design"===l?"tech-btn__btn--design":"tech-btn__btn--learn")}),[l]),r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"tech-btn__btn ".concat(m)},r.a.createElement("img",{src:c,alt:t,className:"tech-btn__icon"}),t)};a(102);var B=function(e){var t=e.handleDevFilter,a=e.handleDesignFilter,n=e.handleLearnFilter,c=e.devFilterActive,l=e.designFilterActive,o=e.learnFilterActive;return r.a.createElement("div",{className:"tech-filter__container"},r.a.createElement("div",{className:"tech-filter__nav"},r.a.createElement("button",{className:"tech-filter__nav-dev ".concat(c?"tech-filter__nav-dev--active":null),onClick:t},"Coding"),r.a.createElement("button",{className:"tech-filter__nav-design ".concat(l?"tech-filter__nav-design--active":null),onClick:a},"Design"),r.a.createElement("button",{className:"tech-filter__nav-learn ".concat(o?"tech-filter__nav-learn--active":null),onClick:n},"Learning")))},V=a(29);var H=function(){var e=Object(n.useState)(V),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(i.a)(l,2),s=o[0],m=o[1],u=Object(n.useState)(!1),g=Object(i.a)(u,2),d=g[0],f=g[1],b=Object(n.useState)(!1),v=Object(i.a)(b,2),y=v[0],E=v[1],_=function(e){switch(e){case"dev":m(!0),f(!1),E(!1);break;case"design":m(!1),f(!0),E(!1);break;case"learn":m(!1),f(!1),E(!0);break;default:m(!1),f(!1),E(!1)}};return r.a.createElement("section",null,r.a.createElement(p.a,{className:"g__about-sections"},r.a.createElement("h2",null,"Skills"),r.a.createElement(h.a,{className:"justify-content-md-center g_negative-margin"},r.a.createElement(F.a,{lg:8},r.a.createElement("p",{className:"skills__intro-text g__body-lg"},"These are some of the tools I use on projects or currently learning."))),r.a.createElement(h.a,{className:"justify-content-md-center"},r.a.createElement(F.a,{lg:12,className:"skills__tech-container"},r.a.createElement(B,{devFilterActive:s,designFilterActive:d,learnFilterActive:y,handleDevFilter:function(){!1===s?(_("dev"),c(Object(D.a)(V).filter((function(e){return e.type.includes("dev")})))):(c(V),m(!1))},handleDesignFilter:function(){!1===d?(_("design"),c(Object(D.a)(V).filter((function(e){return e.type.includes("design")})))):(c(V),f(!1))},handleLearnFilter:function(){!1===y?(_("learn"),c(Object(D.a)(V).filter((function(e){return e.type.includes("learn")})))):(c(V),E(!1))}}),r.a.createElement("div",{className:"skills__tech-btn-container"},a.map((function(e){return r.a.createElement(M,{key:e.id,name:e.name,link:e.link,svg:e.svg,type:e.type})})))))))},J=a(37),z=a.n(J),W=a(48),q=a(53),Q=a(21),Z=a(78),U=a.n(Z),Y=a(79),X=a.n(Y),$=a(80),ee=a.n($);a(125);var te=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(i.a)(l,2),s=o[0],m=o[1],u=Object(n.useState)({}),g=Object(i.a)(u,2),d=g[0],f=g[1],b=Object(n.useState)({}),v=Object(i.a)(b,2),y=v[0],E=v[1],_=Object(n.useState)(!1),k=Object(i.a)(_,2),j=k[0],w=k[1],N=Object(n.useState)(!1),O=Object(i.a)(N,2),A=O[0],S=O[1],x=Object(n.useState)(""),L=Object(i.a)(x,2),C=L[0],R=L[1],G=Object(n.useState)(!1),K=Object(i.a)(G,2),P=K[0],I=K[1],T=Object(n.useState)(""),D=Object(i.a)(T,2),M=D[0],B=D[1],V=Object(n.useState)(!1),H=Object(i.a)(V,2),J=H[0],Z=H[1],Y=Object(n.useRef)(null);Object(n.useEffect)((function(){M&&function(){var e=Object(q.a)(z.a.mark((function e(t,a){var n,r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(W.a)(Object(W.a)({},t),{},{"g-recaptcha-response":a}),r={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:ee.a.stringify(n),url:"/"},e.prev=2,e.next=5,X()(r);case 5:S(!0),y(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),c(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,a){return e.apply(this,arguments)}}()(d,M)}),[y,d,M]);var $=function(){console.log("error..."),R(!0)},te=function(){console.log("expired..."),console.log("resetting..."),re()},ae=function(e){console.log("verified..."),B(e),Z(!0),m(!1)},ne=function(e){C&&R(!1),e&&(S(!1),c(!1),e()),re()},re=function(){var e=Object(q.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("resetting..."),e.next=3,Y.current.reset();case 3:Z(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("section",null,r.a.createElement(p.a,{className:"g__about-sections",id:"contact"},r.a.createElement("h2",null,"Contact"),r.a.createElement(h.a,{className:"justify-content-md-center g_negative-margin"},r.a.createElement(F.a,{className:"white-color",lg:8},r.a.createElement("div",{className:"contact__form-bg"},r.a.createElement(Q.d,{initialValues:{"bot-field":"","form-name":"contact",email:"",name:"",message:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.name||(t.name="Required"),e.message||(t.message="Required"),t},onSubmit:function(e){I(!0),f(Object(W.a)({},e)),m(!0),Y.current.execute()}},(function(e){var t=e.resetForm;return r.a.createElement(Q.c,{"data-netlify":"true","data-netlify-honeypot":"bot-field","data-netlify-recaptcha":"true",className:"d-flex flex-column",name:"contact",noValidate:!0},r.a.createElement(Q.b,{type:"hidden",name:"form-name"}),r.a.createElement(Q.b,{type:"hidden",name:"bot-field"}),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"col-form-label col-form-label-lg",htmlFor:"name"},"Name"),r.a.createElement(Q.b,{className:"form-control form-control-lg",name:"name",type:"text"}),r.a.createElement(Q.a,{className:"invalid-feedback",name:"name",component:"div"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"col-form-label col-form-label-lg",htmlFor:"email"},"Email"),r.a.createElement(Q.b,{className:"form-control form-control-lg",name:"email",type:"email"}),r.a.createElement(Q.a,{className:"invalid-feedback",name:"email",component:"div"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"col-form-label col-form-label-lg",htmlFor:"message"},"Message"),r.a.createElement(Q.b,{className:"form-control form-control-lg",name:"message",component:"textarea"}),r.a.createElement(Q.a,{className:"invalid-feedback",name:"message",component:"div"})),r.a.createElement(U.a,{ref:Y,sitekey:"6LdZTMMZAAAAAGJy0j2AyImgkQ33Mv4juhtQElid","data-netlify-recaptcha":"true",onError:$,onExpire:te,onVerify:ae,onLoad:function(){return function(e){console.log("loaded..."),w(!0),E(e)}((function(){return t}))},size:"invisible"}),r.a.createElement("div",{className:"m-2 col-form-label col-form-label-lg hidden"},r.a.createElement("span",{className:"badge badge-".concat(j?"success":"primary"," mx-2 p-2")},"loaded"),r.a.createElement("span",{className:"badge badge-".concat(J?"success":"primary"," mx-2 p-2")},"verified"),s&&r.a.createElement("span",{className:"badge badge-primary mx-2 p-2"},"executing"),C&&r.a.createElement("span",{className:"badge badge-primary mx-2 p-2"},"error"),C&&r.a.createElement("button",{className:"btn btn-link text-dark",onClick:function(){return ne(t)}},"reset")),function(e,t){return a?r.a.createElement("button",{className:"contact__submit-btn mt-3",type:"submit",disabled:!0},"Error"):A?r.a.createElement("button",{className:"contact__submit-btn mt-3",type:"submit",disabled:!0},"Submitted"):r.a.createElement("button",{className:"contact__submit-btn mt-3",type:"submit",disabled:t||e},"Submit")}(P,s),a?r.a.createElement("div",{className:"text-primary m-1"},a):null,(A||a)&&r.a.createElement("button",{className:"contact__reset-btn",onClick:function(){return ne(t)}},"Send A New Email"))}))))),r.a.createElement("div",{className:"contact__email-container"},r.a.createElement("h2",null,"or"),r.a.createElement("div",{className:"contact__email-txt"},r.a.createElement("p",{className:"g__body-lg"},"You can email me at"),r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:gedalya@krycer.com",className:"g__body-lg"},"gedalya@krycer.com"))))))},ae=(a(126),a(81));var ne=function(){var e=[];return ae.forEach((function(t){e.push(r.a.createElement(F.a,{lg:3,key:t.id},r.a.createElement("div",{className:"fav__card-container"},r.a.createElement("img",{className:"fav__card-img",src:t.img,alt:"".concat(t.name)}),r.a.createElement("h4",{className:"fav__card-title"},t.name),r.a.createElement("div",{className:"fav__hidden-text"},r.a.createElement("p",null,t.things)))))})),r.a.createElement("section",null,r.a.createElement(p.a,null,r.a.createElement("h3",{className:"fav__section-title"},"Things I enjoy when not coding\u2026"),r.a.createElement(h.a,{className:"justify-content-md-center"},e)))};var re=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{title:"About",subTitleOne:"Geh-doll-yuh",subTitleTwo:"Him/He"}),r.a.createElement(T,null),r.a.createElement(ne,null),r.a.createElement(H,null),r.a.createElement(te,null))};a(127);var ce=function(){return r.a.createElement("div",{className:"g__footer-pin"},r.a.createElement(d,{title:"404",subTitleOne:"Oops! Looks like this page does not exist or is under maintenance."}))},le=(a(128),a(31)),oe=a(25),se=a(30),ie=a(82),me=a(44),ue=a.n(me);var ge=function(){var e=Object(n.useContext)(m),t=e.toggleBurgerMenu,a=e.setToggleBurgerMenu,c=function(e){a(!0)},l=g.a.timeline(),o=Object(n.useRef)(null),s=Object(n.useRef)(null),i=Object(n.useRef)(null),u=Object(n.useRef)(null),d=Object(n.useRef)(null);return Object(n.useEffect)((function(){l.from(o.current,{duration:1,autoAlpha:0,y:-20,ease:"back.out(2)"}),l.from(s.current,{duration:1,autoAlpha:0,y:-20,ease:"back.out(2)"},"-=.7"),l.from(i.current,{duration:.5,autoAlpha:0,y:-20,ease:"back.out(2)"},"-=.7"),l.from(u.current,{duration:.5,autoAlpha:0,y:-20,ease:"back.out(2)"},"-=.8"),l.from(d.current,{duration:.5,autoAlpha:0,y:-20,ease:"back.out(2)"},"-=.8")}),[l]),r.a.createElement("div",{className:"sticky-top nav__container",ref:o},r.a.createElement(le.a,{collapseOnSelect:!0,expand:"md"},r.a.createElement(se.LinkContainer,{to:"/",className:"d-md-none"},r.a.createElement(le.a.Brand,null,r.a.createElement("img",{src:"https://raw.githubusercontent.com/GedalyaKrycer/gedalyakrycer.github.io/46e78fe53858d535b8db1d9e7e42455fa0a8b090/gk-portfolio/public/assets/images/img-links/gk-logo-white.svg",alt:"GK Logo",className:"nav__logo-mobile"}))),r.a.createElement(le.a.Toggle,{"aria-controls":"responsive-navbar-nav"},r.a.createElement("div",{onClick:function(){a(!t)},className:"nav__toggle-btn ".concat(t?null:"open")},r.a.createElement("div",{className:"nav__toggle-btn__burger"}))),r.a.createElement(le.a.Collapse,{id:"responsive-navbar-nav",ref:i},r.a.createElement(oe.a,{className:"mr-auto"},r.a.createElement(se.LinkContainer,{to:"/",onClick:c},r.a.createElement(oe.a.Link,null,"Dev")),r.a.createElement(oe.a.Link,{href:"http://gedalya.myportfolio.com/",target:"_blank",rel:"noopener noreferrer"},"Design ",r.a.createElement(ie.a,null)," "),r.a.createElement(se.LinkContainer,{to:"/about",onClick:c},r.a.createElement(oe.a.Link,null,"About")))),r.a.createElement(se.LinkContainer,{to:"/",className:"d-none d-md-block"},r.a.createElement(le.a.Brand,null,r.a.createElement("img",{ref:s,src:"https://raw.githubusercontent.com/GedalyaKrycer/gedalyakrycer.github.io/46e78fe53858d535b8db1d9e7e42455fa0a8b090/gk-portfolio/public/assets/images/img-links/gk-logo-white.svg",alt:"GK Logo",className:"nav__logo-desktop"}))),r.a.createElement(le.a.Collapse,{className:"g_justify-end nav__dropdown-vh"},r.a.createElement(oe.a,{className:"nav__social",ref:d},r.a.createElement("div",{className:"nav__social--display"},r.a.createElement(oe.a.Link,{href:"https://www.linkedin.com/in/gedalyakrycer/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.f,null)),r.a.createElement(oe.a.Link,{href:"https://github.com/GedalyaKrycer",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.e,null)),r.a.createElement(oe.a.Link,{href:"https://www.behance.net/gedalyakrycer",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.b,null)))),r.a.createElement("a",{ref:u,href:ue.a,download:!0,className:"nav__resume"},r.a.createElement("h6",null,"View Resume")))))};a(134);var de=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"footer__content-container"},r.a.createElement(se.LinkContainer,{to:"/"},r.a.createElement("img",{src:"https://raw.githubusercontent.com/GedalyaKrycer/gedalyakrycer.github.io/46e78fe53858d535b8db1d9e7e42455fa0a8b090/gk-portfolio/public/assets/images/img-links/gk-logo.svg",alt:"GK Logo",className:"footer__logo"})),r.a.createElement("a",{href:ue.a,download:!0,className:"footer__resume "},r.a.createElement("h6",null,"View Resume")),r.a.createElement("div",{className:"footer__social-icons-container"},r.a.createElement("a",{href:"https://www.linkedin.com/in/gedalyakrycer/",target:"_blank",rel:"noopener noreferrer",className:"footer__social-icons"},r.a.createElement(f.f,null)),r.a.createElement("a",{href:"https://github.com/GedalyaKrycer",target:"_blank",rel:"noopener noreferrer",className:"footer__social-icons"},r.a.createElement(f.e,null)),r.a.createElement("a",{href:"https://www.behance.net/gedalyakrycer",target:"_blank",rel:"noopener noreferrer",className:"footer__social-icons"},r.a.createElement(f.b,null)))),r.a.createElement("a",{href:"https://github.com/GedalyaKrycer/gedalyakrycer.github.io",target:"_blank",rel:"noopener noreferrer",className:"footer__built-with"},r.a.createElement("h6",null,"Built with ",r.a.createElement("span",{role:"img",className:"footer__emoji","aria-label":"Sparkling Heart"},"\ud83d\udc96")," ",r.a.createElement(f.g,{className:"footer__react"}),r.a.createElement(f.d,{className:"footer__figma"})," ")))},pe=a(57);var he=function(){Object(n.useEffect)((function(){pe.a.initialize("UA-122656834-1"),pe.a.pageview(window.location.pathname+window.location.search)}),[]);var e=g.a.timeline(),t=Object(n.useRef)(null),a=Object(n.useRef)(null);return Object(n.useEffect)((function(){e.from(t.current,{duration:1,autoAlpha:0,x:20,ease:"back.out(2)",delay:1.3}),e.from(a.current,{duration:1,autoAlpha:0,x:-20,ease:"back.out(2)"},"-=1.3")}),[e]),r.a.createElement(o.BrowserRouter,null,r.a.createElement(u,null,r.a.createElement(ge,null),r.a.createElement("main",null,r.a.createElement("div",{className:"g__frame-left",ref:a}),r.a.createElement(P,null),r.a.createElement("div",{className:"g__frame-right",ref:t}),r.a.createElement(I,null),r.a.createElement(s.g,null,r.a.createElement(s.d,{exact:!0,path:"/",component:K}),r.a.createElement(s.d,{exact:!0,path:"/about",component:re}),r.a.createElement(ce,null))),r.a.createElement(de,null)))};a(135),a(136);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(he,null)),document.getElementById("root"))},29:function(e){e.exports=JSON.parse('[{"id":1,"name":"HTML","link":"https://www.trust4leaders.com/","svg":"/assets/images/tech-icons/html-tech-icon.svg","type":"dev"},{"id":2,"name":"CSS","link":"https://github.com/NinaRocket/DRIVERkick","svg":"/assets/images/tech-icons/css-tech-icon.svg","type":"dev"},{"id":3,"name":"Bootstrap","link":"https://www.trust4leaders.com/","svg":"/assets/images/tech-icons/bootstrap-tech-icon.svg","type":"dev"},{"id":4,"name":"Bulma","link":"https://github.com/GedalyaKrycer/weather-forecaster","svg":"/assets/images/tech-icons/bulma-tech-icon.svg","type":"dev"},{"id":5,"name":"SASS","link":"https://www.trust4leaders.com/","svg":"/assets/images/tech-icons/sass-tech-icon.svg","type":"dev"},{"id":6,"name":"React.js","link":"https://github.com/GedalyaKrycer/digibit-employee-directory","svg":"/assets/images/tech-icons/react-tech-icon.svg","type":"dev"},{"id":7,"name":"JavaScript","link":"https://github.com/GedalyaKrycer/hw-10-employee-summary","svg":"/assets/images/tech-icons/js-tech-icon.svg","type":"dev"},{"id":8,"name":"jQuery","link":"https://github.com/dpayton92/Vegg_In_Place_Survival_Kit","svg":"/assets/images/tech-icons/jquery-tech-icon.svg","type":"dev"},{"id":9,"name":"Node.js","link":"https://github.com/GedalyaKrycer/hw-10-employee-summary","svg":"/assets/images/tech-icons/node-tech-icon.svg","type":"dev"},{"id":10,"name":"API","link":"https://github.com/GedalyaKrycer/weather-forecaster","svg":"/assets/images/tech-icons/api-tech-icon.svg","type":"dev"},{"id":11,"name":"Axios","link":"https://github.com/GedalyaKrycer/weather-forecaster","svg":"/assets/images/tech-icons/axios-tech-icon.svg","type":"dev"},{"id":12,"name":"JSON","link":"https://github.com/GedalyaKrycer/digibit-employee-directory","svg":"/assets/images/tech-icons/json-tech-icon.svg","type":"dev"},{"id":13,"name":"Git (GitHub)","link":"https://github.com/GedalyaKrycer","svg":"/assets/images/tech-icons/git-tech-icon.svg","type":"dev"},{"id":14,"name":"Visual Studio Code","link":"https://github.com/GedalyaKrycer","svg":"/assets/images/tech-icons/vs-code-tech-icon.svg","type":"dev"},{"id":15,"name":"Google Search Console","link":"https://github.com/GedalyaKrycer/gedalyakrycer.github.io","svg":"/assets/images/tech-icons/search-console-tech-icon.svg","type":"dev"},{"id":16,"name":"Google Analytics","link":"https://github.com/GedalyaKrycer/gedalyakrycer.github.io","svg":"/assets/images/tech-icons/analytics-tech-icon.svg","type":"dev"},{"id":17,"name":"Netlify","link":"https://github.com/GedalyaKrycer/gedalyakrycer.github.io","svg":"/assets/images/tech-icons/netlify-tech-icon.svg","type":"dev"},{"id":18,"name":"WP Engine","link":"https://github.com/GedalyaKrycer","svg":"/assets/images/tech-icons/wp-engine-tech-icon.svg","type":"dev"},{"id":19,"name":"Trello","link":"https://github.com/GedalyaKrycer","svg":"/assets/images/tech-icons/trello-tech-icon.svg","type":"design"},{"id":20,"name":"Figma","link":"https://www.figma.com/file/EHbfwBaOA1QPQggMB3rZby/A-Team-%E2%80%94-Car-Maintainence-Tracker?node-id=448%3A435","svg":"/assets/images/tech-icons/figma-tech-icon.svg","type":"design"},{"id":21,"name":"Sketch","link":"https://gedalya.myportfolio.com/web-design-variety","svg":"/assets/images/tech-icons/sketch-tech-icon.svg","type":"design"},{"id":22,"name":"Adobe XD","link":"https://gedalya.myportfolio.com/web-design-variety","svg":"/assets/images/tech-icons/xd-tech-icon.svg","type":"design"},{"id":23,"name":"Premier Pro","link":"https://gedalya.myportfolio.com/motion-graphics","svg":"/assets/images/tech-icons/pr-tech-icon.svg","type":"design"},{"id":24,"name":"After Effects","link":"https://gedalya.myportfolio.com/motion-graphics","svg":"/assets/images/tech-icons/ae-tech-icon.svg","type":"design"},{"id":25,"name":"Photoshop","link":"https://gedalya.myportfolio.com/poster-variety","svg":"/assets/images/tech-icons/ps-tech-icon.svg","type":"design"},{"id":26,"name":"Illustrator","link":"https://gedalya.myportfolio.com/logo-variety","svg":"/assets/images/tech-icons/ai-tech-icon.svg","type":"design"},{"id":27,"name":"InDesign","link":"https://gedalya.myportfolio.com/print-variety","svg":"/assets/images/tech-icons/id-tech-icon.svg","type":"design"},{"id":28,"name":"Lightroom","link":"https://gedalya.myportfolio.com/photography","svg":"/assets/images/tech-icons/lr-tech-icon.svg","type":"design"},{"id":29,"name":"Wordpress","link":"https://www.youtube.com/playlist?list=PLriKzYyLb28nUFbe0Y9d-19uVkOnhYxFE","svg":"/assets/images/tech-icons/wp-tech-icon.svg","type":"learning"},{"id":30,"name":"Express","link":"https://www.udemy.com/course/mern-stack-front-to-back/","svg":"/assets/images/tech-icons/code-tech-icon.svg","type":"learning"},{"id":31,"name":"Mongoose","link":"https://www.udemy.com/course/mern-stack-front-to-back/","svg":"/assets/images/tech-icons/code-tech-icon.svg","type":"learning"},{"id":32,"name":"Compass","link":"https://www.udemy.com/course/mern-stack-front-to-back/","svg":"/assets/images/tech-icons/compass-tech-icon.svg","type":"learning"},{"id":33,"name":"MongoDB","link":"https://www.udemy.com/course/mern-stack-front-to-back/","svg":"/assets/images/tech-icons/compass-tech-icon.svg","type":"learning"},{"id":34,"name":"Postman","link":"https://www.udemy.com/course/mern-stack-front-to-back/","svg":"/assets/images/tech-icons/postman-tech-icon.svg","type":"learning"},{"id":35,"name":"Mailchimp","link":"https://www.youtube.com/playlist?list=PLR_ZJO3q73HalAe5sRs7ByjHvptmbflsL","svg":"/assets/images/tech-icons/mailchimp-tech-icon.svg","type":"learning"}]')},44:function(e,t,a){e.exports=a.p+"static/media/gedalya-krycer-resume.a24317c3.pdf"},72:function(e){e.exports=JSON.parse('[{"id":1,"img":"/assets/images/img-links/portfolio/Card/driverkick-thumbnail.jpg","title":"Driver Kick Car Maintenance Tracker","tech":"React.js, Hooks, Figma, MongoDB, Mongoose, Express, Passport, NHTSA Vehical API, axios, react-bootstrap, react-contenteditable, react-ga, react-moment, bcryptjs, Heroku","deployLink":"https://driverkick.herokuapp.com/","repoLink":"https://github.com/NinaRocket/DRIVERkick"},{"id":2,"img":"/assets/images/img-links/portfolio/Card/weather-thumbnail.jpg","title":"Weather Forecaster","tech":"Bulma, OpenWeather.js API, Unsplash API, Axios, JavaScript, HTML, CSS","deployLink":"https://weatherforecastreact.netlify.app","repoLink":"https://github.com/GedalyaKrycer/weather-forecaster"},{"id":3,"img":"/assets/images/img-links/portfolio/Card/directory-thumbnail.jpg","title":"DigiBit Team Directory","tech":"React.js, Hooks, Figma, JSON, react-bootstrap, react-lazyload, react-icons","deployLink":"https://unit-19-react-homework-employee-directory.netlify.app/","repoLink":"https://github.com/GedalyaKrycer/digibit-employee-directory"},{"id":4,"img":"/assets/images/img-links/portfolio/Card/webdev-thumbnail.jpg","title":"WebDev Challenge Quiz","tech":"JavaScript, jQuery, HTML, CSS, Bootstrap","deployLink":"https://gedalyakrycer.github.io/web-dev-challenge-quiz/","repoLink":"https://github.com/GedalyaKrycer/web-dev-challenge-quiz"},{"id":5,"img":"/assets/images/img-links/portfolio/Card/vegg-thumbnail.jpg","title":"Vegg-in-Place","tech":"Bulma, Figma, JavaScript, HTML, CSS, jQuery, Listen Notes API, TMDB API, RAWG API, Official Joke API","deployLink":"https://dpayton92.github.io/Vegg_In_Place_Survival_Kit/","repoLink":"https://github.com/dpayton92/Vegg_In_Place_Survival_Kit"},{"id":6,"img":"/assets/images/img-links/portfolio/Card/cli-thumbnail.jpg","title":"CLI README Generator","tech":"Node.js, OOP, Inquire, JavaScript","deployLink":"","repoLink":"https://github.com/GedalyaKrycer/hw-10-employee-summary"}]')},73:function(e,t,a){e.exports=a.p+"static/media/motion-design-web.ed11b604.mp4"},74:function(e,t,a){e.exports=a.p+"static/media/motion-design-web.ad28a9aa.webp"},75:function(e,t,a){e.exports=a.p+"static/media/figma-thumbnail.e4e4f43b.jpg"},81:function(e){e.exports=JSON.parse('[{"id":1,"name":"Volunteering","img":"/assets/images/fav-imgs/volunteering.jpg","things":"I love serving as both a 12-Step recovery sponsor and a CG Tech for Celebrate Recovery."},{"id":2,"name":"Fitness","img":"/assets/images/fav-imgs/excersize.jpg","things":"Be it an Insanity Max30 session, gym workout or long hike \u2014 the recharge works wonders!"},{"id":3,"name":"Movies","img":"/assets/images/fav-imgs/movies.jpg","things":"Favorite genre? From Saving Private Ryan to Devil Wears Prada to the Avengers\u2026 I enjoy it all!"}]')},83:function(e,t,a){e.exports=a(137)},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.89b46abe.chunk.js.map