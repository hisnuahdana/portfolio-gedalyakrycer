(this["webpackJsonpgk-portfolio"]=this["webpackJsonpgk-portfolio"]||[]).push([[10],{134:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(0),c=a.n(r),i=a(2),l=(a(80),a(21)),o=a(3),s=a(15),u=a(57),m=a(59),p=a.n(m);t.default=function(){var e=Object(r.useState)(),t=Object(n.a)(e,2),a=t[0],m=t[1],g=Object(i.f)(),b=Object(r.useRef)(null);return Object(r.useEffect)((function(){s.a.saveStyles(b.current),o.a.fromTo(b.current,{autoAlpha:0,y:150},{scrollTrigger:{trigger:b.current,start:"top bottom",end:"-=50",scrub:!0},autoAlpha:1,y:0})}),[]),Object(r.useEffect)((function(){return p.a.get("https://dev.to/api/articles?username=gedalyakrycer&per_page=6").then((function(e){m(e.data)})).catch((function(e){console.log(e)})),function(){}}),[]),c.a.createElement("section",{ref:b,className:"articleThumbnailContainer"},c.a.createElement("button",{className:"atc__article-btn",onClick:function(){g.push("/articles")}},c.a.createElement("span",{className:"atc__btn-cta"},"View"),c.a.createElement("span",{className:"atc__btn-article"},"Dev Articles"),c.a.createElement("svg",{className:"atc__btn-icon",viewBox:"0 0 9 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M3.82658 1.04605L4.27251 0.523167C4.46133 0.301767 4.76666 0.301767 4.95347 0.523167L8.85839 5.09957C9.0472 5.32097 9.0472 5.67898 8.85839 5.89802L4.95347 10.4768C4.76465 10.6982 4.45932 10.6982 4.27251 10.4768L3.82658 9.9539C3.63576 9.73014 3.63977 9.36507 3.83462 9.14602L6.25511 6.44211H0.482089C0.214931 6.44211 0 6.19009 0 5.87683L0 5.12312C0 4.80986 0.214931 4.55784 0.482089 4.55784H6.25511L3.83462 1.85393C3.63776 1.63488 3.63375 1.26981 3.82658 1.04605Z"}))),c.a.createElement(l.a,null,c.a.createElement("div",{className:"atc__row"},a&&a.map((function(e){var t=new Date(e.published_at),a=t.getDate(),n=t.getMonth()+1,r=t.getFullYear().toString().split("").slice(2,4).join("");return c.a.createElement(u.a,{key:e.id,url:e.url,img:e.cover_image,title:e.title,reactions:e.positive_reactions_count,tag:e.tag_list.slice(0,1),date:"".concat(n,"/").concat(a,"/").concat(r)})})))))}},57:function(e,t,a){"use strict";var n=a(11),r=a(0),c=a.n(r);a(58);t.a=c.a.memo((function(e){var t=e.url,a=e.img,i=e.title,l=e.reactions,o=e.tag,s=e.date,u=Object(r.useState)(!1),m=Object(n.a)(u,2),p=m[0],g=m[1],b={width:"100%",height:"100%",backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0) 66.51%, rgba(0, 0, 0, 0.31) 100%), url(".concat(a,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",transform:p?"scale(1.1)":"scale(1)",opacity:p?1:0,position:"absolute",top:0,left:0,right:0,zIndex:1,cursor:"pointer",transition:"all 0.5s cubic-bezier(.8,.02,.52,1)"},f={opacity:p?0:1,transform:p?"scale(1.1)":"scale(1)",color:"white",fontWeight:500,lineHeight:"22px",position:"absolute",top:p?20:15,left:18,right:18,zIndex:2,transition:"all 0.5s cubic-bezier(.8,.02,.52,1)"},h={display:"flex",visibility:p?"visible":"hidden",alignItems:"center",position:"absolute",left:12,top:5},d={fontSize:12,color:"var(--nav-filter-links)",margin:0,fontWeight:"bold",opacity:p?0:1,transform:p?"translateX(5px)":"translateX(0)",transition:"all 0.5s cubic-bezier(.8,.02,.52,1)"},v={opacity:p?1:0,transform:p?"translateX(5px)":"translateX(0)",color:"var(--primary-blue)",margin:"0 8px 0 0",lineHeight:"19px",transition:"all 0.5s cubic-bezier(.8,.02,.52,1)"},_={opacity:p?1:0,transform:p?"translateX(5px)":"translateX(0)",width:7,height:6,fill:"var(--primary-blue)",transition:"all 0.7s cubic-bezier(.8,.02,.52,1)"};return c.a.createElement("a",{href:t,onMouseEnter:function(){return g((function(e){return!e}))},onMouseLeave:function(){return g((function(e){return!e}))},className:"articleThumbnail",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("div",{className:"at__main-section"},c.a.createElement("h4",{style:f},i),c.a.createElement("div",{style:b})),c.a.createElement("div",{className:"at__meta-section"},c.a.createElement("div",{className:"at__meta-left-group"},c.a.createElement("p",{style:d},"#",o),c.a.createElement("div",{style:h},c.a.createElement("h5",{style:v},"Read article"),c.a.createElement("svg",{style:_,viewBox:"0 0 7 6",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M0.680062 0.921049L0.637741 0.388228C0.619822 0.162619 0.787741 -0.00530041 1.01225 0.0137238L5.67673 0.383019C5.90234 0.400939 6.09924 0.597834 6.11586 0.822147L6.48645 5.48793C6.50437 5.71354 6.33645 5.88146 6.11195 5.86244L5.57913 5.82012C5.35112 5.80201 5.15255 5.59901 5.13924 5.37139L4.98336 2.55311L1.80836 5.72811C1.66143 5.87503 1.40462 5.85464 1.23234 5.68235L0.817824 5.26784C0.645541 5.09555 0.625143 4.83874 0.772073 4.69181L3.94707 1.51682L1.12879 1.36094C0.900058 1.34873 0.697067 1.15016 0.680062 0.921049Z"})))),c.a.createElement("div",{className:"at__reaction-wrapper"},c.a.createElement("p",{className:"at__reaction-text"},l),c.a.createElement("svg",{className:"at__reaction-icon",viewBox:"0 0 11 11",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M9.84843 1.22128C8.60664 0.136749 6.68808 0.299651 5.5 1.55601C4.31191 0.299651 2.39336 0.134517 1.15156 1.22128C-0.46406 2.63384 -0.227732 4.93678 0.92383 6.15743L4.69219 10.1452C4.90703 10.3728 5.19492 10.5 5.5 10.5C5.80723 10.5 6.09297 10.375 6.30781 10.1474L10.0762 6.15966C11.2256 4.93901 11.4662 2.63607 9.84843 1.22128V1.22128ZM9.3414 5.4054L5.57305 9.39316C5.52148 9.44671 5.47851 9.44671 5.42695 9.39316L1.65859 5.4054C0.874416 4.57527 0.715432 3.00427 1.81543 2.04248C2.65117 1.31277 3.94023 1.42211 4.74805 2.27679L5.5 3.07345L6.25195 2.27679C7.06406 1.41765 8.35312 1.31277 9.18457 2.04025C10.2824 3.00204 10.1191 4.58197 9.3414 5.4054V5.4054Z"}))),c.a.createElement("p",{className:"at__publish-data"},s)))}))},58:function(e,t,a){},80:function(e,t,a){}}]);
//# sourceMappingURL=10.e47156d8.chunk.js.map