(window.webpackJsonp=window.webpackJsonp||[]).push([[3,5,7,11,12,15,18],{115:function(t,e,n){"use strict";n.r(e);var r=n(10),a=n.n(r),i=n(23),o=n.n(i);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}e.default=o()(function(t){return{title:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){a()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({marginBottom:t.spacing(2),outline:"none",fontSize:t.spacing(4)},(e=t.spacing(4),r=1.732*(n=e/32),{position:"relative",fontWeight:t.typography.fontWeightLight,outline:"none",transition:"transform 300ms ease-in-out","&:focus":{transform:"translate(".concat(t.spacing(3),"px)"),"&::after":{position:"absolute",content:'""',left:-1*t.spacing(3),top:t.spacing(2.5),width:0,height:0,display:"inline-block",borderTop:"".concat(t.spacing(n),"px solid transparent"),borderBottom:"".concat(t.spacing(n),"px solid transparent"),borderLeft:"".concat(t.spacing(r),"px solid ").concat(t.palette.text.primary),borderRight:"".concat(t.spacing(n),"px solid transparent")}}})),title2:{marginBottom:t.spacing(),outline:"none",fontSize:t.spacing(3)},title3:{outline:"none",fontSize:t.spacing(2),fontWeight:t.typography.fontWeightBold},subtitle:{marginBottom:t.spacing(),outline:"none",fontSize:t.spacing(3),color:t.palette.text.secondary},paragraph:{outline:"none",fontSize:t.spacing(2)}};var e,n,r})},117:function(t,e,n){"use strict";n.r(e);var r=n(20),a=n.n(r),i=n(29),o=n.n(i),c=n(0),p=n.n(c),s=n(2),l=n.n(s),u=n(115),f=n(59);function d(t){var e=t.children,n=o()(t,["children"]),r=Object(u.default)();return p.a.createElement(f.a,a()({component:"p",className:r.paragraph},n),e)}d.proptypes={children:l.a.string.isRequired},e.default=d},118:function(t,e,n){"use strict";n.r(e);var r=n(10),a=n.n(r),i=n(23),o=n.n(i);e.default=o()(function(t){var e;return{root:(e={width:600,margin:"0 auto",paddingTop:t.spacing(6),paddingBottom:t.spacing(6),borderBottom:"2px dashed ".concat(t.palette.grey[300])},a()(e,t.breakpoints.down("md"),{paddingLeft:t.spacing(6),paddingRight:t.spacing(6)}),a()(e,t.breakpoints.down("xs"),{width:"100%",paddingLeft:t.spacing(8),paddingRight:t.spacing(2)}),e)}})},119:function(t,e,n){"use strict";n.r(e);var r=n(20),a=n.n(r),i=n(29),o=n.n(i),c=n(0),p=n.n(c),s=n(2),l=n.n(s),u=n(115),f=n(59);function d(t){var e=t.children,n=o()(t,["children"]),r=Object(u.default)();return p.a.createElement(f.a,a()({component:"h2",className:r.title},n),e)}d.proptypes={children:l.a.string.isRequired},e.default=d},120:function(t,e,n){"use strict";n.r(e);var r=n(10),i=n.n(r),a=n(29),o=n.n(a),c=n(0),p=n.n(c),s=n(2),l=n.n(s),u=n(118);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function d(t){var e=t.children,n=t.component,r=o()(t,["children","component"]),a=Object(u.default)();return p.a.createElement(n,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){i()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},r,{className:a.root}),e)}d.proptypes={children:l.a.element.isRequired,component:l.a.string},d.defaultProps={component:"div"},e.default=d},122:function(t,e,n){"use strict";n.r(e);var r=n(23),a=n.n(r);e.default=a()(function(t){return{banner:{width:"100%",marginBottom:t.spacing(4)},paragraph:{fontSize:t.typography.body1.fontSize},link:{color:t.palette.text.primary,fontWeight:"700",textDecoration:"none","&:focus, &:hover":{outlineOffset:4,outlineStyle:"dashed",outlineWidth:t.spacing()/4,outlineColor:t.palette.text.primary}}}})},127:function(t,e,n){"use strict";n.r(e);var r=n(11),m=n.n(r),a=n(0),y=n.n(a),i=n(2),o=n.n(i),c=n(122),p=n(119),s=n(117),l=n(120);function u(t){var e=t.articleId,n=t.title,r=t.banner,a=t.paragraphs,h=Object(c.default)();return y.a.createElement(l.default,{component:"article","aria-label":n,id:e},y.a.createElement("img",{src:r.src,alt:r.alt,className:h.banner}),y.a.createElement(p.default,{tabIndex:"0"},n),a.map(function(t,e){return r=e,a=(n=t).match(/\[([^\]]*)\]\(([^)]+)\)/g),i=function t(e,n,r){if(!n)return[e];var a=n[r];var i=(o=a,c=o.match(/\[(.*)\]\((.+)\)/),p=m()(c,3),p[0],s=p[1],l=p[2],y.a.createElement("a",{href:l,target:"_bank",className:h.link,key:s},s||l));var o,c,p,s,l;var u=e.split(a),f=m()(u,2),d=f[0],g=f[1];if(r<n.length-1){var b=g?t(g,n,r+1):[];return[d,i].concat(b)}return[d,i,g]}(n,a,0),y.a.createElement(s.default,{key:r,"aria-label":"#article body"},i);var n,r,a,i}))}u.proptypes={articleId:o.a.string.isRequired,title:o.a.string.isRequired,banner:o.a.string.isRequired,paragraphs:o.a.arrayOf(o.a.string).isRequired},e.default=u}}]);