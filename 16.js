(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{134:function(e,t,o){"use strict";o.r(t);var r=o(24),b=o.n(r),n=o(4),d=o.n(n),c=o(17),f=o.n(c),l=o(32),y=o.n(l),a=o(0),g=o.n(a),i=o(2),u=o.n(i),O=o(10),h=o(16),j=o(25),p=o(35),w=o.n(p),m=o(189);function v(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,r)}return o}function s(e){var t=e.color,o=y()(e,["color"]),r=g.a.useMemo(function(){return document.querySelector("head")},[]),n=g.a.useState([]),c=f()(n,2),l=c[0],a=c[1],i=w()(),u=Object(O.b)(),p=Object(O.c)(h.f);function s(){var e;l.length?(l.forEach(function(e){return r.appendChild(e)}),document.body.style.backgroundColor=i.elevationColor[0],a([]),u(Object(j.h)()),console.log("Styles enabled")):((e=Array.from(r.querySelectorAll("style"))).forEach(function(e){var t;(t=e).parentNode.removeChild(t)}),document.body.style.backgroundColor="#FFF",a(e),u(Object(j.g)()),console.log("Styles disabled"))}return Object(O.c)(h.e).styles?g.a.createElement(m.a,b()({focusRipple:!0,onClick:s,color:t,style:function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?v(Object(o),!0).forEach(function(e){d()(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):v(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}({height:i.spacing(6),paddingRight:i.spacing(2),paddingLeft:i.spacing(2),backgroundColor:i.defaultBackgroundColor},i.typography.button)},o),p.label):g.a.createElement("button",{onClick:s},p.label)}s.propTypes={color:u.a.string},s.defaultProps={color:"inherit"},t.default=s}}]);