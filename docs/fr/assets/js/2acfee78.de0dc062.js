"use strict";(self.webpackChunk_joplin_doc_builder=self.webpackChunk_joplin_doc_builder||[]).push([[7527],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,m=h["".concat(p,".").concat(d)]||h[d]||u[d]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[h]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1544:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_label:"Sharing a notebook with E2EE enabled",title:"Sharing a notebook with E2EE enabled",description:"When sharing the notebook, a key (NOTEBOOK_KEY) is automatically generated and encrypted with the sender master password. That key ID is then associated with the notebook When adding a recipient, t..."},o="Sharing a notebook with E2EE enabled",s={unversionedId:"dev/spec/server_sharing_e2ee",id:"dev/spec/server_sharing_e2ee",title:"Sharing a notebook with E2EE enabled",description:"When sharing the notebook, a key (NOTEBOOK_KEY) is automatically generated and encrypted with the sender master password. That key ID is then associated with the notebook When adding a recipient, t...",source:"@site/help/dev/spec/server_sharing_e2ee.md",sourceDirName:"dev/spec",slug:"/dev/spec/server_sharing_e2ee",permalink:"/fr/help/dev/spec/server_sharing_e2ee",draft:!1,editUrl:"https://github.com/laurent22/joplin/tree/dev/readme/dev/spec/server_sharing_e2ee.md",tags:[],version:"current",frontMatter:{sidebar_label:"Sharing a notebook with E2EE enabled",title:"Sharing a notebook with E2EE enabled",description:"When sharing the notebook, a key (NOTEBOOK_KEY) is automatically generated and encrypted with the sender master password. That key ID is then associated with the notebook When adding a recipient, t..."},sidebar:"helpSidebar",previous:{title:"Joplin Server sharing feature",permalink:"/fr/help/dev/spec/server_sharing"},next:{title:"Joplin Server user status",permalink:"/fr/help/dev/spec/server_user_status"}},p={},c=[],l={toc:c},h="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sharing-a-notebook-with-e2ee-enabled"},"Sharing a notebook with E2EE enabled"),(0,a.kt)("div",{className:"donate-links"},(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.paypal.com/donate/?business=E8JMYD2LQ8MMA&no_recurring=0&item_name=I+rely+on+donations+to+maintain+and+improve+the+Joplin+open+source+project.+Thank+you+for+your+help+-+it+makes+a+difference%21&currency_code=EUR"},(0,a.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-PayPal-green.svg",alt:"Donate using PayPal"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sponsors/laurent22/"},(0,a.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/GitHub-Badge.svg",alt:"Sponsor on GitHub"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://www.patreon.com/joplin"},(0,a.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Patreon-Badge.svg",alt:"Become a patron"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://joplinapp.org/donate/#donations"},(0,a.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-IBAN.svg",alt:"Donate using IBAN"})))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When sharing the notebook, a key (NOTEBOOK_KEY) is automatically generated and encrypted with the sender master password.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"That key ID is then associated with the notebook"))),(0,a.kt)("li",{parentName:"ul"},"When adding a recipient, the key is decrypted using the sender master password, and reencrypted using the recipient public key",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"That encrypted key is then attached to the share_user object (the invitation)"))),(0,a.kt)("li",{parentName:"ul"},"When the recipient receives the invitation, the key is retrieved from it, then decrypted using the private key, and reencrypted using the recipient master password.")),(0,a.kt)("p",null,"Once the key exchange is done, each user has their own copy of NOTEBOOK_KEY encrypted with their own master password. Public/Private Keys are only used to transfer NOTEBOOK_KEY."),(0,a.kt)("p",null,"Whenever any item within the notebook is encrypted, it is done with NOTEBOOK_KEY."))}u.isMDXComponent=!0}}]);