(window.webpackJsonp=window.webpackJsonp||[]).push([[2,7],{101:function(a,n,t){"use strict";t.r(n);var e=t(4),o=t.n(e),i=t(22),r=t.n(i);n.default=r()(function(a){var n,t,e,i,r;return{root:(n={display:"flex",alignItems:"flex-start",flexShrink:0,backgroundColor:a.elevationColor[1],overflow:"hidden",marginBottom:a.spacing(4),padding:a.spacing(4)},o()(n,a.breakpoints.down("md"),{flexDirection:"column"}),o()(n,a.breakpoints.down("sm"),{padding:a.spacing(2),marginBottom:a.spacing(2)}),n),banner:o()({display:"flex",justifyContent:"center",backgroundColor:a.elevationColor[4]},a.breakpoints.down("md"),{width:"100%"}),bannerImage:(t={padding:a.spacing(2),width:a.spacing(60)},o()(t,a.breakpoints.down("md"),{padding:a.spacing(4),width:a.spacing(80)}),o()(t,a.breakpoints.down("sm"),{width:"100%"}),t),title:(i={position:"relative",paddingLeft:a.spacing(4),color:"#9CACFF",outline:"none",transition:"transform 300ms ease-in-out","&:focus":{transform:"translate(".concat(a.spacing(3),"px)"),"&::after":(e={position:"absolute",content:'""',left:a.spacing(),top:a.spacing(2),width:0,height:0,display:"inline-block",borderTop:"".concat(a.spacing(2),"px solid transparent"),borderBottom:"".concat(a.spacing(2),"px solid transparent"),borderLeft:"".concat(a.spacing(2),"px solid #9CACFF"),borderRight:"".concat(a.spacing(2),"px solid transparent")},o()(e,a.breakpoints.down("md"),{top:a.spacing(6),left:-1*a.spacing(3)}),o()(e,a.breakpoints.down("xs"),{top:a.spacing(5),borderTopWidth:a.spacing(1.5),borderBottomWidth:a.spacing(1.5),borderLeftWidth:a.spacing(1.5),borderRightWidth:a.spacing(1.5)}),e)}},o()(i,a.breakpoints.down("md"),{paddingTop:a.spacing(4),paddingLeft:0}),o()(i,a.breakpoints.down("xs"),{fontSize:a.spacing(4)}),i),paragraph:(r={paddingLeft:a.spacing(4),paddingTop:a.spacing(4),fontSize:a.spacing(2.5)},o()(r,a.breakpoints.down("md"),{paddingLeft:0}),o()(r,a.breakpoints.down("xs"),{fontSize:a.spacing(2)}),r),link:{color:a.palette.text.primary,fontWeight:"700",textDecoration:"none","&:focus, &:hover":{outlineOffset:4,outlineStyle:"dashed",outlineWidth:a.spacing()/4,outlineColor:a.palette.text.primary}}}})},103:function(a,n,t){"use strict";t.r(n);var e=t(17),h=t.n(e),i=t(0),w=t.n(i),r=t(2),o=t.n(r),s=t(101),p=t(99);function c(a){var n=a.articleId,t=a.title,e=a.banner,i=a.paragraphs,u=Object(s.default)();return w.a.createElement("article",{className:u.root,"aria-label":t,id:n},w.a.createElement("figure",{className:u.banner},w.a.createElement("img",{"aria-hidden":"true",src:e.src,alt:e.alt,className:u.bannerImage})),w.a.createElement("div",{className:u.body},w.a.createElement(p.a,{component:"h2",variant:"h3",color:"textPrimary",tabIndex:"0",className:u.title},t),i.map(function(a,n){return e=n,i=(t=a).match(/\[([^\]]*)\]\(([^)]+)\)/g),r=function a(n,t,e){if(!t)return[n];var i=t[e];var r=(o=i,s=o.match(/\[(.*)\]\((.+)\)/),p=h()(s,3),p[0],c=p[1],d=p[2],w.a.createElement("a",{href:d,target:"_bank",className:u.link,key:c},c||d));var o,s,p,c,d;var l=n.split(i),g=h()(l,2),m=g[0],f=g[1];if(e<t.length-1){var b=f?a(f,t,e+1):[];return[m,r].concat(b)}return[m,r,f]}(t,i,0),w.a.createElement(p.a,{key:e,component:"p",className:u.paragraph,"aria-label":"#article body",color:"textPrimary"},r);var t,e,i,r})))}c.proptypes={articleId:o.a.string.isRequired,title:o.a.string.isRequired,banner:o.a.string.isRequired,paragraphs:o.a.arrayOf(o.a.string).isRequired},n.default=c}}]);