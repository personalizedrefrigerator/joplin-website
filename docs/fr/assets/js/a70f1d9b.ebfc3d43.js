"use strict";(self.webpackChunk_joplin_doc_builder=self.webpackChunk_joplin_doc_builder||[]).push([[1311],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=s(n),g=r,c=d["".concat(p,".").concat(g)]||d[g]||m[g]||l;return n?a.createElement(c,i(i({ref:e},u),{},{components:n})):a.createElement(c,i({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},377:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s}});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_label:"Plugin Manifest",title:"Plugin Manifest",description:"The manifest file is a JSON file that describes various properties of the plugin. If you use the Yeoman generator, it should be automatically generated based on the answers you've provided. The sup..."},i="Plugin Manifest",o={unversionedId:"api/references/plugin_manifest",id:"api/references/plugin_manifest",title:"Plugin Manifest",description:"The manifest file is a JSON file that describes various properties of the plugin. If you use the Yeoman generator, it should be automatically generated based on the answers you've provided. The sup...",source:"@site/help/api/references/plugin_manifest.md",sourceDirName:"api/references",slug:"/api/references/plugin_manifest",permalink:"/fr/help/api/references/plugin_manifest",draft:!1,editUrl:"https://github.com/laurent22/joplin/tree/dev/readme/api/references/plugin_manifest.md",tags:[],version:"current",frontMatter:{sidebar_label:"Plugin Manifest",title:"Plugin Manifest",description:"The manifest file is a JSON file that describes various properties of the plugin. If you use the Yeoman generator, it should be automatically generated based on the answers you've provided. The sup..."},sidebar:"helpSidebar",previous:{title:"Plugin Loading Rules",permalink:"/fr/help/api/references/plugin_loading_rules"},next:{title:"Plugin theming",permalink:"/fr/help/api/references/plugin_theming"}},p={},s=[{value:"Categories",id:"categories",level:2},{value:"Screenshot",id:"screenshot",level:2},{value:"Icons",id:"icons",level:2},{value:"Manifest example",id:"manifest-example",level:2}],u={toc:s},d="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"plugin-manifest"},"Plugin Manifest"),(0,r.kt)("div",{className:"donate-links"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.paypal.com/donate/?business=E8JMYD2LQ8MMA&no_recurring=0&item_name=I+rely+on+donations+to+maintain+and+improve+the+Joplin+open+source+project.+Thank+you+for+your+help+-+it+makes+a+difference%21&currency_code=EUR"},(0,r.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-PayPal-green.svg",alt:"Donate using PayPal"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sponsors/laurent22/"},(0,r.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/GitHub-Badge.svg",alt:"Sponsor on GitHub"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://www.patreon.com/joplin"},(0,r.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Patreon-Badge.svg",alt:"Become a patron"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://joplinapp.org/donate/#donations"},(0,r.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-IBAN.svg",alt:"Donate using IBAN"})))),(0,r.kt)("p",null,"The manifest file is a JSON file that describes various properties of the plugin. If you use the Yeoman generator, it should be automatically generated based on the answers you've provided. The supported properties are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required?"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manifest_version")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},'For now should always be "1".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the plugin. Should be a user-friendly string, as it will be displayed in the UI.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"version")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},'Version number such as "1.0.0".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app_min_version")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},"Minimum version of Joplin that the plugin is compatible with. In general it should be whatever version you are using to develop the plugin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Detailed description of the plugin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"author")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Plugin author name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"keywords")),(0,r.kt)("td",{parentName:"tr",align:null},"string[]"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Keywords associated with the plugins. They are used in search in particular.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"homepage_url")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Homepage URL of the plugin. It can also be, for example, a link to a GitHub repository.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"repository_url")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Repository URL where the plugin source code is hosted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"categories")),(0,r.kt)("td",{parentName:"tr",align:null},"string[]"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#categories"},"Categories")," that describes the functionality of the plugin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"screenshots")),(0,r.kt)("td",{parentName:"tr",align:null},"Screenshot[]"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#Screenshot"},"Screenshots")," are used for listing on Joplin Plugin website.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"icons")),(0,r.kt)("td",{parentName:"tr",align:null},"Icons"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("a",{parentName:"td",href:"#Icons"},"Icons")," is not supplied, a standard extension icon will be used by default. You should supply at least a main icon, ideally 48x48 px in size. This is the icon that will be used in various plugin pages. You may, however, supply icons of any size and Joplin will attempt to find the best icon to display in different components. Only PNG icons are allowed.")))),(0,r.kt)("h2",{id:"categories"},"Categories"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"appearance"),(0,r.kt)("td",{parentName:"tr",align:null},"dealing with appearance of some element/s of the app. For example line numbers, layout, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"developer tools"),(0,r.kt)("td",{parentName:"tr",align:null},"built for the developers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"editor"),(0,r.kt)("td",{parentName:"tr",align:null},"enhancing note editor.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"files"),(0,r.kt)("td",{parentName:"tr",align:null},"dealing with files. For example import, export, backup, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"integrations"),(0,r.kt)("td",{parentName:"tr",align:null},"integrating third party services or apps.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"personal knowledge management"),(0,r.kt)("td",{parentName:"tr",align:null},"managing and organizing notes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"productivity"),(0,r.kt)("td",{parentName:"tr",align:null},"making Joplin more productive to use.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"search"),(0,r.kt)("td",{parentName:"tr",align:null},"enhancing search inside the app.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tags"),(0,r.kt)("td",{parentName:"tr",align:null},"dealing with note tags.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"themes"),(0,r.kt)("td",{parentName:"tr",align:null},"changing theme of the app.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"viewer"),(0,r.kt)("td",{parentName:"tr",align:null},"enhancing the rendering of a note.")))),(0,r.kt)("h2",{id:"screenshot"},"Screenshot"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"src"),(0,r.kt)("td",{parentName:"tr",align:null},"a relative path to src dir.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"label"),(0,r.kt)("td",{parentName:"tr",align:null},"description of the image.")))),(0,r.kt)("h2",{id:"icons"},"Icons"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"a relative path to a PNG icon.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"32"),(0,r.kt)("td",{parentName:"tr",align:null},"a relative path to a PNG icon.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"48"),(0,r.kt)("td",{parentName:"tr",align:null},"a relative path to a PNG icon.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"128"),(0,r.kt)("td",{parentName:"tr",align:null},"a relative path to a PNG icon.")))),(0,r.kt)("h2",{id:"manifest-example"},"Manifest example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "manifest_version": 1,\n    "name": "Joplin Simple Plugin",\n    "description": "To test loading and running a plugin",\n    "version": "1.0.0",\n    "author": "John Smith",\n    "app_min_version": "1.4",\n    "homepage_url": "https://joplinapp.org",\n    "screenshots": [{\n        "src": "path/to/image.png",\n        "label": "image description"\n    }],\n    "icons": {\n      "16": "path/to/icon16.png",\n      "32": "path/to/icon32.png",\n      "48": "path/to/icon48.png",\n      "128": "path/to/icon128.png"\n    }\n}\n')))}m.isMDXComponent=!0}}]);