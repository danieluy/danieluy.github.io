(window.webpackJsonp=window.webpackJsonp||[]).push([[0,1,4,5,6,7,8,9,10,11,15,16,18],{114:function(e,t,n){"use strict";n.r(t);var r=n(17),a=n.n(r),i=n(23),o=n.n(i);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}t.default=o()(function(e){return{title:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach(function(e){a()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({marginBottom:e.spacing(2),outline:"none",fontSize:e.spacing(4)},(t=e.spacing(4),r=1.732*(n=t/32),{position:"relative",fontWeight:e.typography.fontWeightLight,outline:"none",transition:"transform 300ms ease-in-out","&:focus":{transform:"translate(".concat(e.spacing(3),"px)"),"&::after":{position:"absolute",content:'""',left:-1*e.spacing(3),top:e.spacing(2.5),width:0,height:0,display:"inline-block",borderTop:"".concat(e.spacing(n),"px solid transparent"),borderBottom:"".concat(e.spacing(n),"px solid transparent"),borderLeft:"".concat(e.spacing(r),"px solid ").concat(e.palette.text.primary),borderRight:"".concat(e.spacing(n),"px solid transparent")}}})),title2:{marginBottom:e.spacing(),outline:"none",fontSize:e.spacing(3)},title3:{outline:"none",fontSize:e.spacing(2),fontWeight:e.typography.fontWeightBold},subtitle:{marginBottom:e.spacing(),outline:"none",fontSize:e.spacing(3),color:e.palette.text.secondary},paragraph:{outline:"none",fontSize:e.spacing(2)}};var t,n,r})},115:function(e,t,n){"use strict";n.r(t);var r=n(23),a=n.n(r);t.default=a()(function(e){return{section:{width:"100%"},institutionLogoImage:{width:"100%",marginBottom:e.spacing(4)},scoreRoot:{marginTop:e.spacing(8),marginBottom:e.spacing(5),display:"flex",flexDirection:"column",width:"100%","&:focus":{outline:"none"}},progressBar:{display:"flex",width:"100%",height:e.spacing(.25),backgroundColor:e.palette.grey[300]},scoreValue:{backgroundColor:e.palette.grey[700],lineHeight:"".concat(e.spacing(.25),"px"),color:e.palette.text.primary,position:"relative"},scoreTextValue:{position:"absolute",right:0,bottom:e.spacing()},scoreTextRest:{position:"absolute",right:0,top:e.spacing()},ariaLabel:{position:"absolute",opacity:0},subject:{paddingLeft:"0 !important"},subjectTitle:{marginTop:e.spacing(2)}}})},116:function(e,t,n){"use strict";n.r(t);var r=n(20),a=n.n(r),i=n(29),o=n.n(i),c=n(0),s=n.n(c),u=n(2),l=n.n(u),p=n(114),d=n(59);function f(e){var t=e.children,n=o()(e,["children"]),r=Object(p.default)();return s.a.createElement(d.a,a()({component:"p",className:r.paragraph},n),t)}f.proptypes={children:l.a.string.isRequired},t.default=f},117:function(e,t,n){"use strict";n.r(t);var r=n(17),a=n.n(r),i=n(23),o=n.n(i);t.default=o()(function(e){var t;return{root:(t={width:600,margin:"0 auto",paddingTop:e.spacing(6),paddingBottom:e.spacing(6),borderBottom:"2px dashed ".concat(e.palette.grey[300])},a()(t,e.breakpoints.down("md"),{paddingLeft:e.spacing(6),paddingRight:e.spacing(6)}),a()(t,e.breakpoints.down("xs"),{width:"100%",paddingRight:e.spacing(2)}),t)}})},118:function(e,t,n){"use strict";n.r(t);var r=n(20),a=n.n(r),i=n(29),o=n.n(i),c=n(0),s=n.n(c),u=n(2),l=n.n(u),p=n(114),d=n(59);function f(e){var t=e.children,n=o()(e,["children"]),r=Object(p.default)();return s.a.createElement(d.a,a()({component:"h2",className:r.title},n),t)}f.proptypes={children:l.a.string.isRequired},t.default=f},119:function(e,t,n){"use strict";n.r(t);var r=n(17),i=n.n(r),a=n(29),o=n.n(a),c=n(0),s=n.n(c),u=n(2),l=n.n(u),p=n(117);function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function f(e){var t=e.children,n=e.component,r=o()(e,["children","component"]),a=Object(p.default)();return s.a.createElement(n,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach(function(e){i()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},r,{className:a.root}),t)}f.proptypes={children:l.a.element.isRequired,component:l.a.string},f.defaultProps={component:"div"},t.default=f},120:function(e,t,n){"use strict";n.r(t);var r=n(20),a=n.n(r),i=n(29),o=n.n(i),c=n(0),s=n.n(c),u=n(2),l=n.n(u),p=n(114),d=n(59);function f(e){var t=e.children,n=o()(e,["children"]),r=Object(p.default)();return s.a.createElement(d.a,a()({component:"h4",className:r.title3},n),t)}f.proptypes={children:l.a.string.isRequired},t.default=f},122:function(e,t,n){"use strict";n.r(t);var r=n(20),a=n.n(r),i=n(29),o=n.n(i),c=n(0),s=n.n(c),u=n(2),l=n.n(u),p=n(114),d=n(59);function f(e){var t=e.children,n=o()(e,["children"]),r=Object(p.default)();return s.a.createElement(d.a,a()({component:"p",className:r.subtitle},n),t)}f.proptypes={children:l.a.string.isRequired},t.default=f},123:function(e,t,n){"use strict";n.r(t);var r=n(20),a=n.n(r),i=n(29),o=n.n(i),c=n(0),s=n.n(c),u=n(2),l=n.n(u),p=n(114),d=n(59);function f(e){var t=e.children,n=o()(e,["children"]),r=Object(p.default)();return s.a.createElement(d.a,a()({component:"h3",className:r.title2},n),t)}f.proptypes={children:l.a.string.isRequired},t.default=f},124:function(e,t,n){"use strict";n.r(t);var r=n(10),s=n.n(r),u=n(0),l=n.n(u),a=n(2),i=n.n(a),p=n(115),d=n(69),f=n(59);function o(e){var t=e.score,n=e["aria-label"],r=Object(p.default)(),a=Object(d.a)(0),i=s()(a,2),o=i[0],c=i[1];return Object(u.useEffect)(function(){c(0,t)},[]),l.a.createElement(u.Fragment,null,l.a.createElement("div",{className:r.scoreRoot,role:"heading","aria-level":"3","aria-label":n,tabIndex:"0"},l.a.createElement("div",{className:r.progressBar},l.a.createElement("span",{style:{width:"".concat(o,"%")},className:r.scoreValue},l.a.createElement(f.a,{component:"p",variant:"h4",color:"textPrimary",className:r.scoreTextValue},o.toFixed(1)),l.a.createElement(f.a,{component:"p",color:"textSecondary",className:r.scoreTextRest},100)))))}o.propTypes={score:i.a.number.isRequired},t.default=o},125:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(2),o=n.n(i),c=n(115),s=n(18),u=n(24),l=n(120),p=n(116);function d(e){var t=e.subject,n=(Object(c.default)(),Object(s.c)(u.a));return a.a.createElement(r.Fragment,{key:t.name},a.a.createElement(l.default,null,t.name),a.a.createElement(p.default,null,"".concat(n.score,": ").concat(t.score)),a.a.createElement(p.default,{color:"textSecondary"},"".concat(n.keywords,": ").concat(t.techs.join(", "))))}d.propTypes={score:o.a.shape({name:o.a.string.isRequired,score:o.a.number.isRequired,techs:o.a.arrayOf(o.a.string).isRequired})},t.default=d},127:function(e,t,n){"use strict";n.r(t);var p=n(0),d=n.n(p),r=n(2),a=n.n(r),f=n(115),g=n(18),m=n(24),b=n(118),h=n(123),y=n(122),O=n(124),j=n(125),v=n(119);function i(e){var t=e.course,n=t.title,r=t.institute,a=(t.status,t.averageScore),i=t.institutionLogo,o=t.subjects,c=e.courseId,s=Object(f.default)(),u=Object(g.c)(m.a),l=Object(p.useMemo)(function(){return o.reduce(function(e,t){return e+t.score},0)/o.length});return d.a.createElement(v.default,{component:"article",id:c},d.a.createElement("img",{src:i.src,alt:i.alt,className:s.institutionLogoImage}),d.a.createElement(b.default,{tabIndex:"0"},n),d.a.createElement(O.default,{score:l,"aria-label":"".concat(a," ").concat(l)}),d.a.createElement(y.default,null,r),d.a.createElement(h.default,null,u.subjects),o.map(function(e){return d.a.createElement(j.default,{key:e.name,subject:e})}))}i.propTypes={course:a.a.shape({title:a.a.string.isRequired,institute:a.a.string.isRequired,status:a.a.string.isRequired,averageScore:a.a.string.isRequired,institutionLogo:a.a.shape({src:a.a.string.isRequired,alt:a.a.string.isRequired}),subjects:a.a.arrayOf(a.a.shape({name:a.a.string.isRequired,score:a.a.number.isRequired,techs:a.a.arrayOf(a.a.string).isRequired})).isRequired}),courseId:a.a.string.isRequired},t.default=i},132:function(e,t,n){"use strict";n.r(t);var r=n(10),u=n.n(r),l=n(0),p=n.n(l),d=n(115),f=n(14),g=n(18),m=n(24),b=n(127);t.default=function(e){var t=Object(d.default)(),n=Object(f.e)().hash,r=Object(g.c)(m.a),a=r.title,i=r.courses,o=(r.coursesTitle,u()(i,2)),c=o[0],s=o[1];return Object(l.useEffect)(function(){if(document.title="Daniel Sosa | ".concat(a),n){var e=document.querySelector(n);e&&window.setTimeout(function(){e.scrollIntoView({behavior:"smooth"})},500)}},[]),p.a.createElement("section",{className:t.section},p.a.createElement(b.default,{courseId:"software-analist",course:c}),p.a.createElement(b.default,{courseId:"web-developer",course:s}))}}}]);