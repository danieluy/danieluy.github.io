(window.webpackJsonp=window.webpackJsonp||[]).push([[2,3,4,9,10],{116:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),i=a(27),o=a.n(i);t.default=o()(function(e){var t,a,n,i;return{section:{width:"100%"},courseRoot:(t={display:"flex",alignItems:"flex-start",flexShrink:0,backgroundColor:e.elevationColor[1],overflow:"hidden",marginBottom:e.spacing(4),padding:e.spacing(4)},r()(t,e.breakpoints.down("md"),{flexDirection:"column"}),r()(t,e.breakpoints.down("sm"),{padding:e.spacing(2),marginBottom:e.spacing(2)}),t),institutionLogo:r()({display:"flex",justifyContent:"center",backgroundColor:e.elevationColor[4]},e.breakpoints.down("md"),{width:"100%"}),institutionLogoImage:(a={padding:e.spacing(2),width:e.spacing(60)},r()(a,e.breakpoints.down("md"),{padding:e.spacing(4),width:e.spacing(80)}),r()(a,e.breakpoints.down("sm"),{width:"100%"}),a),courseBody:r()({width:"100%",display:"flex",flexDirection:"column",paddingLeft:e.spacing(4)},e.breakpoints.down("md"),{paddingLeft:0}),title:(i={position:"relative",color:e.palette.primary.main,outline:"none",transition:"transform 300ms ease-in-out","&:focus":{transform:"translate(".concat(e.spacing(3),"px)"),"&::after":(n={position:"absolute",content:'""',left:-1*e.spacing(3),top:e.spacing(2),width:0,height:0,display:"inline-block",borderTop:"".concat(e.spacing(2),"px solid transparent"),borderBottom:"".concat(e.spacing(2),"px solid transparent"),borderLeft:"".concat(e.spacing(2),"px solid ").concat(e.palette.primary.main),borderRight:"".concat(e.spacing(2),"px solid transparent")},r()(n,e.breakpoints.down("md"),{top:e.spacing(6),left:-1*e.spacing(3)}),r()(n,e.breakpoints.down("xs"),{top:e.spacing(5),borderTopWidth:e.spacing(1.5),borderBottomWidth:e.spacing(1.5),borderLeftWidth:e.spacing(1.5),borderRightWidth:e.spacing(1.5)}),n)}},r()(i,e.breakpoints.down("md"),{paddingTop:e.spacing(4)}),r()(i,e.breakpoints.down("xs"),{fontSize:e.spacing(4)}),i),scoreRoot:{marginTop:e.spacing(8),marginBottom:e.spacing(5),display:"flex",flexDirection:"column",width:"100%","&:focus":{outline:"none"}},progressBar:{display:"flex",width:"100%",height:e.spacing(.25),backgroundColor:e.elevationColor[2]},scoreValue:{backgroundColor:e.palette.primary.main,lineHeight:"".concat(e.spacing(.25),"px"),color:e.palette.text.primary,position:"relative"},scoreTextValue:{position:"absolute",left:0,bottom:e.spacing()},scoreTextRest:{position:"absolute",left:0,top:e.spacing()},ariaLabel:{position:"absolute",opacity:0},subject:{paddingLeft:"0 !important"},subjectTitle:{marginTop:e.spacing(2)}}})},117:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return i});var n=a(17),s=a.n(n),c=a(0);function i(e,t){var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1,n=Object(c.useState)(e),i=s()(n,2),r=i[0],o=i[1];return Object(c.useEffect)(function(){t<=r?o(t):window.requestAnimationFrame(function(){return o(r+a)})},[r]),r}},118:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(2),i=a.n(n),s=a(116),c=a(117),l=a(114);function d(e){var t=e.score,a=e["aria-label"],n=Object(s.default)(),i=Object(c.default)(0,t,3);return o.a.createElement(r.Fragment,null,o.a.createElement("div",{className:n.scoreRoot,role:"heading","aria-level":"3","aria-label":a,tabIndex:"0"},o.a.createElement("div",{className:n.progressBar},o.a.createElement("span",{style:{width:"".concat(i,"%")},className:n.scoreValue},o.a.createElement(l.a,{component:"p",variant:"h4",color:"textPrimary",className:n.scoreTextValue},i.toFixed(1)),o.a.createElement(l.a,{component:"p",color:"textSecondary",className:n.scoreTextRest},100)))))}d.propTypes={score:i.a.number.isRequired},t.default=d},119:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(2),o=a.n(n),s=a(116),c=a(10),l=a(16),d=a(114);function p(e){var t=e.subject,a=Object(s.default)(),n=Object(c.c)(l.a);return r.a.createElement(i.Fragment,{key:t.name},r.a.createElement(d.a,{component:"h4",color:"textPrimary",variant:"h5",className:a.subjectTitle},t.name),r.a.createElement(d.a,{color:"textPrimary"},"".concat(n.score,": ").concat(t.score)),r.a.createElement(d.a,{color:"textSecondary"},"".concat(n.keywords,": ").concat(t.techs.join(", "))))}p.propTypes={score:o.a.shape({name:o.a.string.isRequired,score:o.a.number.isRequired,techs:o.a.arrayOf(o.a.string).isRequired})},t.default=p},122:function(e,t,a){"use strict";a.r(t);var p=a(0),u=a.n(p),n=a(2),i=a.n(n),m=a(116),g=a(10),f=a(16),b=a(118),h=a(119),x=a(114);function r(e){var t=e.course,a=t.title,n=t.institute,i=(t.status,t.averageScore),r=t.institutionLogo,o=t.subjects,s=e.articleId,c=Object(m.default)(),l=Object(g.c)(f.a),d=Object(p.useMemo)(function(){return o.reduce(function(e,t){return e+t.score},0)/o.length});return u.a.createElement("article",{className:c.courseRoot,id:s},u.a.createElement("figure",{className:c.institutionLogo,"aria-hidden":"true"},u.a.createElement("img",{src:r.src,alt:r.alt,className:c.institutionLogoImage})),u.a.createElement("div",{className:c.courseBody},u.a.createElement(x.a,{component:"h2",variant:"h3",tabIndex:"0",className:c.title},a),u.a.createElement(function(e){var t=e.children;if(t)return u.a.createElement(x.a,{component:"p",variant:"subtitle1",color:"textPrimary",tabIndex:"0"},t)},null,n),u.a.createElement(b.default,{score:d,"aria-label":"".concat(i," ").concat(d)}),u.a.createElement(x.a,{component:"h3",color:"textPrimary",variant:"h4",gutterBottom:!0},l.subjects),o.map(function(e){return u.a.createElement(h.default,{key:e.name,subject:e})})))}r.propTypes={course:i.a.shape({title:i.a.string.isRequired,institute:i.a.string.isRequired,status:i.a.string.isRequired,averageScore:i.a.string.isRequired,institutionLogo:i.a.shape({src:i.a.string.isRequired,alt:i.a.string.isRequired}),subjects:i.a.arrayOf(i.a.shape({name:i.a.string.isRequired,score:i.a.number.isRequired,techs:i.a.arrayOf(i.a.string).isRequired})).isRequired}),articleId:i.a.string.isRequired},t.default=r}}]);