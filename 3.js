(window.webpackJsonp=window.webpackJsonp||[]).push([[3,9,10],{122:function(t,e,n){"use strict";n.r(e);var o=n(4),i=n.n(o),a=n(27),r=n.n(a);e.default=r()(function(t){var e,n,o,a;return{section:{width:"100%"},courseRoot:(e={display:"flex",alignItems:"flex-start",flexShrink:0,backgroundColor:t.elevationColor[1],overflow:"hidden",marginBottom:t.spacing(4),padding:t.spacing(4)},i()(e,t.breakpoints.down("md"),{flexDirection:"column"}),i()(e,t.breakpoints.down("sm"),{padding:t.spacing(2),marginBottom:t.spacing(2)}),e),institutionLogo:i()({display:"flex",justifyContent:"center",backgroundColor:t.elevationColor[4]},t.breakpoints.down("md"),{width:"100%"}),institutionLogoImage:(n={padding:t.spacing(2),width:t.spacing(60)},i()(n,t.breakpoints.down("md"),{padding:t.spacing(4),width:t.spacing(80)}),i()(n,t.breakpoints.down("sm"),{width:"100%"}),n),courseBody:i()({width:"100%",display:"flex",flexDirection:"column",paddingLeft:t.spacing(4)},t.breakpoints.down("md"),{paddingLeft:0}),title:(a={position:"relative",color:t.palette.primary.main,outline:"none",transition:"transform 300ms ease-in-out","&:focus":{transform:"translate(".concat(t.spacing(3),"px)"),"&::after":(o={position:"absolute",content:'""',left:-1*t.spacing(3),top:t.spacing(2),width:0,height:0,display:"inline-block",borderTop:"".concat(t.spacing(2),"px solid transparent"),borderBottom:"".concat(t.spacing(2),"px solid transparent"),borderLeft:"".concat(t.spacing(2),"px solid ").concat(t.palette.primary.main),borderRight:"".concat(t.spacing(2),"px solid transparent")},i()(o,t.breakpoints.down("md"),{top:t.spacing(6),left:-1*t.spacing(3)}),i()(o,t.breakpoints.down("xs"),{top:t.spacing(5),borderTopWidth:t.spacing(1.5),borderBottomWidth:t.spacing(1.5),borderLeftWidth:t.spacing(1.5),borderRightWidth:t.spacing(1.5)}),o)}},i()(a,t.breakpoints.down("md"),{paddingTop:t.spacing(4)}),i()(a,t.breakpoints.down("xs"),{fontSize:t.spacing(4)}),a),scoreRoot:{marginTop:t.spacing(8),marginBottom:t.spacing(5),display:"flex",flexDirection:"column",width:"100%","&:focus":{outline:"none"}},progressBar:{display:"flex",width:"100%",height:t.spacing(.25),backgroundColor:t.elevationColor[2]},scoreValue:{backgroundColor:t.palette.primary.main,lineHeight:"".concat(t.spacing(.25),"px"),color:t.palette.text.primary,position:"relative"},scoreTextValue:{position:"absolute",left:0,bottom:t.spacing()},scoreTextRest:{position:"absolute",left:0,top:t.spacing()},ariaLabel:{position:"absolute",opacity:0},subject:{paddingLeft:"0 !important"},subjectTitle:{marginTop:t.spacing(2)}}})},123:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return a});var o=n(18),s=n.n(o),c=n(0);function a(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1,o=Object(c.useState)(t),a=s()(o,2),i=a[0],r=a[1];return Object(c.useEffect)(function(){e<=i?r(e):window.requestAnimationFrame(function(){return r(i+n)})},[i]),i}},124:function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i),o=n(2),a=n.n(o),s=n(122),c=n(123),p=n(120);function l(t){var e=t.score,n=t["aria-label"],o=Object(s.default)(),a=Object(c.default)(0,e,3);return r.a.createElement(i.Fragment,null,r.a.createElement("div",{className:o.scoreRoot,role:"heading","aria-level":"3","aria-label":n,tabIndex:"0"},r.a.createElement("div",{className:o.progressBar},r.a.createElement("span",{style:{width:"".concat(a,"%")},className:o.scoreValue},r.a.createElement(p.a,{component:"p",variant:"h4",color:"textPrimary",className:o.scoreTextValue},a.toFixed(1)),r.a.createElement(p.a,{component:"p",color:"textSecondary",className:o.scoreTextRest},100)))))}l.propTypes={score:a.a.number.isRequired},e.default=l}}]);