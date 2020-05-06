(window.webpackJsonp=window.webpackJsonp||[]).push([[0,2,3,4,9,10,13],{122:function(e,t,a){"use strict";a.r(t);var n=a(4),i=a.n(n),r=a(27),o=a.n(r);t.default=o()(function(e){var t,a,n,r;return{section:{width:"100%"},courseRoot:(t={display:"flex",alignItems:"flex-start",flexShrink:0,backgroundColor:e.elevationColor[1],overflow:"hidden",marginBottom:e.spacing(4),padding:e.spacing(4)},i()(t,e.breakpoints.down("md"),{flexDirection:"column"}),i()(t,e.breakpoints.down("sm"),{padding:e.spacing(2),marginBottom:e.spacing(2)}),t),institutionLogo:i()({display:"flex",justifyContent:"center",backgroundColor:e.elevationColor[4]},e.breakpoints.down("md"),{width:"100%"}),institutionLogoImage:(a={padding:e.spacing(2),width:e.spacing(60)},i()(a,e.breakpoints.down("md"),{padding:e.spacing(4),width:e.spacing(80)}),i()(a,e.breakpoints.down("sm"),{width:"100%"}),a),courseBody:i()({width:"100%",display:"flex",flexDirection:"column",paddingLeft:e.spacing(4)},e.breakpoints.down("md"),{paddingLeft:0}),title:(r={position:"relative",color:e.palette.primary.main,outline:"none",transition:"transform 300ms ease-in-out","&:focus":{transform:"translate(".concat(e.spacing(3),"px)"),"&::after":(n={position:"absolute",content:'""',left:-1*e.spacing(3),top:e.spacing(2),width:0,height:0,display:"inline-block",borderTop:"".concat(e.spacing(2),"px solid transparent"),borderBottom:"".concat(e.spacing(2),"px solid transparent"),borderLeft:"".concat(e.spacing(2),"px solid ").concat(e.palette.primary.main),borderRight:"".concat(e.spacing(2),"px solid transparent")},i()(n,e.breakpoints.down("md"),{top:e.spacing(6),left:-1*e.spacing(3)}),i()(n,e.breakpoints.down("xs"),{top:e.spacing(5),borderTopWidth:e.spacing(1.5),borderBottomWidth:e.spacing(1.5),borderLeftWidth:e.spacing(1.5),borderRightWidth:e.spacing(1.5)}),n)}},i()(r,e.breakpoints.down("md"),{paddingTop:e.spacing(4)}),i()(r,e.breakpoints.down("xs"),{fontSize:e.spacing(4)}),r),scoreRoot:{marginTop:e.spacing(8),marginBottom:e.spacing(5),display:"flex",flexDirection:"column",width:"100%","&:focus":{outline:"none"}},progressBar:{display:"flex",width:"100%",height:e.spacing(.25),backgroundColor:e.elevationColor[2]},scoreValue:{backgroundColor:e.palette.primary.main,lineHeight:"".concat(e.spacing(.25),"px"),color:e.palette.text.primary,position:"relative"},scoreTextValue:{position:"absolute",left:0,bottom:e.spacing()},scoreTextRest:{position:"absolute",left:0,top:e.spacing()},ariaLabel:{position:"absolute",opacity:0},subject:{paddingLeft:"0 !important"},subjectTitle:{marginTop:e.spacing(2)}}})},123:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return r});var n=a(18),c=a.n(n),s=a(0);function r(e,t){var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1,n=Object(s.useState)(e),r=c()(n,2),i=r[0],o=r[1];return Object(s.useEffect)(function(){t<=i?o(t):window.requestAnimationFrame(function(){return o(i+a)})},[i]),i}},124:function(e,t,a){"use strict";a.r(t);var i=a(0),o=a.n(i),n=a(2),r=a.n(n),c=a(122),s=a(123),l=a(120);function u(e){var t=e.score,a=e["aria-label"],n=Object(c.default)(),r=Object(s.default)(0,t,3);return o.a.createElement(i.Fragment,null,o.a.createElement("div",{className:n.scoreRoot,role:"heading","aria-level":"3","aria-label":a,tabIndex:"0"},o.a.createElement("div",{className:n.progressBar},o.a.createElement("span",{style:{width:"".concat(r,"%")},className:n.scoreValue},o.a.createElement(l.a,{component:"p",variant:"h4",color:"textPrimary",className:n.scoreTextValue},r.toFixed(1)),o.a.createElement(l.a,{component:"p",color:"textSecondary",className:n.scoreTextRest},100)))))}u.propTypes={score:r.a.number.isRequired},t.default=u},125:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(2),o=a.n(n),c=a(122),s=a(10),l=a(17),u=a(120);function d(e){var t=e.subject,a=Object(c.default)(),n=Object(s.c)(l.a);return i.a.createElement(r.Fragment,{key:t.name},i.a.createElement(u.a,{component:"h4",color:"textPrimary",variant:"h5",className:a.subjectTitle},t.name),i.a.createElement(u.a,{color:"textPrimary"},"".concat(n.score,": ").concat(t.score)),i.a.createElement(u.a,{color:"textSecondary"},"".concat(n.keywords,": ").concat(t.techs.join(", "))))}d.propTypes={score:o.a.shape({name:o.a.string.isRequired,score:o.a.number.isRequired,techs:o.a.arrayOf(o.a.string).isRequired})},t.default=d},126:function(e,t,a){"use strict";a.r(t);var n=a(24),i=a.n(n),r=a(4),o=a.n(r),c=a(32),s=a.n(c),l=a(0),u=a.n(l),d=a(2),p=a.n(d),m=a(35),g=a.n(m),f=a(195);function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function h(e){var t=e.articleId,a=e.title,n=s()(e,["articleId","title"]),r=g()();return u.a.createElement(f.a,i()({focusRipple:!0,size:"small",component:"a",color:"inherit",href:"#".concat(t),style:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach(function(e){o()(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}({height:r.spacing(6),paddingRight:r.spacing(2),paddingLeft:r.spacing(2),backgroundColor:r.defaultBackgroundColor,textDecoration:"none"},r.typography.button)},n),a)}h.propTypes={articleId:p.a.string.isRequired,title:p.a.string.isRequired},t.default=h},128:function(e,t,a){"use strict";a.r(t);var d=a(0),p=a.n(d),n=a(2),r=a.n(n),m=a(122),g=a(10),f=a(17),b=a(124),h=a(125),y=a(120);function i(e){var t=e.course,a=t.title,n=t.institute,r=(t.status,t.averageScore),i=t.institutionLogo,o=t.subjects,c=e.articleId,s=Object(m.default)(),l=Object(g.c)(f.a),u=Object(d.useMemo)(function(){return o.reduce(function(e,t){return e+t.score},0)/o.length});return p.a.createElement("article",{className:s.courseRoot,id:c},p.a.createElement("figure",{className:s.institutionLogo,"aria-hidden":"true"},p.a.createElement("img",{src:i.src,alt:i.alt,className:s.institutionLogoImage})),p.a.createElement("div",{className:s.courseBody},p.a.createElement(y.a,{component:"h2",variant:"h3",tabIndex:"0",className:s.title},a),p.a.createElement(function(e){var t=e.children;if(t)return p.a.createElement(y.a,{component:"p",variant:"subtitle1",color:"textPrimary",tabIndex:"0"},t)},null,n),p.a.createElement(b.default,{score:u,"aria-label":"".concat(r," ").concat(u)}),p.a.createElement(y.a,{component:"h3",color:"textPrimary",variant:"h4",gutterBottom:!0},l.subjects),o.map(function(e){return p.a.createElement(h.default,{key:e.name,subject:e})})))}i.propTypes={course:r.a.shape({title:r.a.string.isRequired,institute:r.a.string.isRequired,status:r.a.string.isRequired,averageScore:r.a.string.isRequired,institutionLogo:r.a.shape({src:r.a.string.isRequired,alt:r.a.string.isRequired}),subjects:r.a.arrayOf(r.a.shape({name:r.a.string.isRequired,score:r.a.number.isRequired,techs:r.a.arrayOf(r.a.string).isRequired})).isRequired}),articleId:r.a.string.isRequired},t.default=i},136:function(e,t,a){"use strict";a.r(t);var n=a(18),l=a.n(n),r=a(0),u=a.n(r),d=a(122),p=a(10),m=a(17),g=a(48),f=a(128),b=a(126);t.default=function(e){var t=Object(d.default)(),a=Object(p.c)(m.a),n=a.title,r=a.courses,i=a.coursesTitle,o=l()(r,2),c=o[0],s=o[1];return document.title="Daniel Sosa | ".concat(n),u.a.createElement(g.default,{content:u.a.createElement("section",{className:t.section},u.a.createElement(f.default,{articleId:"software-analist",course:c}),u.a.createElement(f.default,{articleId:"web-developer",course:s})),aside:[u.a.createElement(g.Subtitle,null,i),u.a.createElement(b.default,{articleId:"software-analist",title:c.title}),u.a.createElement(b.default,{articleId:"web-developer",title:s.title})]})}}}]);