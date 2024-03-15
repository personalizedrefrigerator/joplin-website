"use strict";(self.webpackChunk_joplin_doc_builder=self.webpackChunk_joplin_doc_builder||[]).push([[115],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,d=u["".concat(p,".").concat(m)]||u[m]||h[m]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},71038:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_label:"Clipper authorisation mechanism",title:"Clipper authorisation mechanism",description:"In order to access the clipper API, the client must use a token, which is a random string generated by the application. There are two ways for applications to obtain this token: Get it from the use..."},o="Clipper authorisation mechanism",s={unversionedId:"dev/spec/clipper_auth",id:"dev/spec/clipper_auth",title:"Clipper authorisation mechanism",description:"In order to access the clipper API, the client must use a token, which is a random string generated by the application. There are two ways for applications to obtain this token: Get it from the use...",source:"@site/help/dev/spec/clipper_auth.md",sourceDirName:"dev/spec",slug:"/dev/spec/clipper_auth",permalink:"/fr/help/dev/spec/clipper_auth",draft:!1,editUrl:"https://github.com/laurent22/joplin/tree/dev/readme/dev/spec/clipper_auth.md",tags:[],version:"current",frontMatter:{sidebar_label:"Clipper authorisation mechanism",title:"Clipper authorisation mechanism",description:"In order to access the clipper API, the client must use a token, which is a random string generated by the application. There are two ways for applications to obtain this token: Get it from the use..."},sidebar:"helpSidebar",previous:{title:"Joplin architecture",permalink:"/fr/help/dev/spec/architecture"},next:{title:"How to add a new default plugin",permalink:"/fr/help/dev/spec/default_plugins"}},p={},l=[{value:"Get it from the user",id:"get-it-from-the-user",level:2},{value:"Request it programmatically",id:"request-it-programmatically",level:2}],c={toc:l},u="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"clipper-authorisation-mechanism"},"Clipper authorisation mechanism"),(0,a.kt)("div",{className:"donate-links"},(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.paypal.com/donate/?business=E8JMYD2LQ8MMA&no_recurring=0&item_name=I+rely+on+donations+to+maintain+and+improve+the+Joplin+open+source+project.+Thank+you+for+your+help+-+it+makes+a+difference%21&currency_code=EUR"},(0,a.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-PayPal-green.svg",alt:"Donate using PayPal"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sponsors/laurent22/"},(0,a.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/GitHub-Badge.svg",alt:"Sponsor on GitHub"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://www.patreon.com/joplin"},(0,a.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Patreon-Badge.svg",alt:"Become a patron"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://joplinapp.org/donate/#donations"},(0,a.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-IBAN.svg",alt:"Donate using IBAN"})))),(0,a.kt)("p",null,"In order to access the clipper API, the client must use a token, which is a random string generated by the application."),(0,a.kt)("p",null,"There are two ways for applications to obtain this token:"),(0,a.kt)("h2",{id:"get-it-from-the-user"},"Get it from the user"),(0,a.kt)("p",null,"The user can copy the token in the Clipper configuration page and provide it directly to the application. This is the simplest method."),(0,a.kt)("h2",{id:"request-it-programmatically"},"Request it programmatically"),(0,a.kt)("p",null,"The token can also be requested programmatically, as is done for the web clipper extension. It works as below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The client calls ",(0,a.kt)("inlineCode",{parentName:"li"},"POST /auth"),". The server responds with ",(0,a.kt)("inlineCode",{parentName:"li"},'{ auth_token: "AUTH_TOKEN" }'),". This ",(0,a.kt)("inlineCode",{parentName:"li"},"auth_token")," is different from the regular token - it is just used to authenticate the client."),(0,a.kt)("li",{parentName:"ul"},"The application displays a message asking the user to Accept or Reject the access request."),(0,a.kt)("li",{parentName:"ul"},"The clients calls ",(0,a.kt)("inlineCode",{parentName:"li"},"GET /auth/check?auth_token=AUTH_TOKEN")," at regular intervals. Initially the server responds with ",(0,a.kt)("inlineCode",{parentName:"li"},'{ status: "waiting" }'),", since we are waiting for the user to confirm or reject."),(0,a.kt)("li",{parentName:"ul"},"Once the user accepts the request in the application, the server returns ",(0,a.kt)("inlineCode",{parentName:"li"},'{ status: "accepted", token: "API_TOKEN" }'),"."),(0,a.kt)("li",{parentName:"ul"},"The client can now use this ",(0,a.kt)("inlineCode",{parentName:"li"},"API_TOKEN")," to make requests."),(0,a.kt)("li",{parentName:"ul"},"If the users rejects the request, the server returns ",(0,a.kt)("inlineCode",{parentName:"li"},'{ status: "rejected" }'),", and the client can display an error message.")))}h.isMDXComponent=!0}}]);