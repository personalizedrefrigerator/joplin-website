"use strict";(self.webpackChunk_joplin_doc_builder=self.webpackChunk_joplin_doc_builder||[]).push([[5589],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},736:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_label:"Synchronous Scroll",title:"Synchronous Scroll",description:"Since Joplin 2.6, the synchronous scroll feature (Sync Scroll) for two-pane Markdown Editor is introduced. This document describes its detail. Motivation Joplin has two types of editors, two-pane M...",image:"https://joplinapp.org/images/sync_scroll/abst-wo-sync2.png"},a="Synchronous Scroll",s={unversionedId:"dev/spec/sync_scroll",id:"dev/spec/sync_scroll",title:"Synchronous Scroll",description:"Since Joplin 2.6, the synchronous scroll feature (Sync Scroll) for two-pane Markdown Editor is introduced. This document describes its detail. Motivation Joplin has two types of editors, two-pane M...",source:"@site/help/dev/spec/sync_scroll.md",sourceDirName:"dev/spec",slug:"/dev/spec/sync_scroll",permalink:"/help/dev/spec/sync_scroll",draft:!1,editUrl:"https://github.com/laurent22/joplin/tree/dev/readme/dev/spec/sync_scroll.md",tags:[],version:"current",frontMatter:{sidebar_label:"Synchronous Scroll",title:"Synchronous Scroll",description:"Since Joplin 2.6, the synchronous scroll feature (Sync Scroll) for two-pane Markdown Editor is introduced. This document describes its detail. Motivation Joplin has two types of editors, two-pane M...",image:"https://joplinapp.org/images/sync_scroll/abst-wo-sync2.png"},sidebar:"helpSidebar",previous:{title:"Synchronisation locks",permalink:"/help/dev/spec/sync_lock"},next:{title:"Voice typing",permalink:"/help/dev/spec/voice_typing"}},l={},c=[{value:"Motivation",id:"motivation",level:2},{value:"Feature Specifications",id:"feature-specifications",level:2},{value:"Design",id:"design",level:2},{value:"Abstraction View",id:"abstraction-view",level:3},{value:"Components and Data Interactions",id:"components-and-data-interactions",level:3},{value:"Scroll Position Translation",id:"scroll-position-translation",level:3},{value:"Caching Translation Map",id:"caching-translation-map",level:3},{value:"Implementation Details",id:"implementation-details",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"synchronous-scroll"},"Synchronous Scroll"),(0,o.kt)("div",{className:"donate-links"},(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.paypal.com/donate/?business=E8JMYD2LQ8MMA&no_recurring=0&item_name=I+rely+on+donations+to+maintain+and+improve+the+Joplin+open+source+project.+Thank+you+for+your+help+-+it+makes+a+difference%21&currency_code=EUR"},(0,o.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-PayPal-green.svg",alt:"Donate using PayPal"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sponsors/laurent22/"},(0,o.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/GitHub-Badge.svg",alt:"Sponsor on GitHub"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://www.patreon.com/joplin"},(0,o.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Patreon-Badge.svg",alt:"Become a patron"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://joplinapp.org/donate/#donations"},(0,o.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-IBAN.svg",alt:"Donate using IBAN"})))),(0,o.kt)("p",null,"Since Joplin 2.6, the synchronous scroll feature (Sync Scroll) for two-pane Markdown Editor is introduced. This document describes its detail."),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"Joplin has two types of editors, two-pane Markdown Editor and WYSIWYG Editor. Two-pane Markdown Editor consists of an editor pane displaying a Markdown text (Editor) and a viewer pane displaying the rendered Markdown in HTML (Viewer). Both panes have independent scroll bars, and they were linked and controlled by single scroll position expressed as a relative percentage."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/sync_scroll/abst-wo-sync2.png",alt:"Abstraction View without Sync Scroll"})),(0,o.kt)("p",null,"Since the height of a Markdown text line is not always proportional to the height of the corresponding HTML element, displayed contents in Editor and Viewer are often inconsistent."),(0,o.kt)("p",null,"To keep the consistency of their displayed contents, both scroll bars needed to be controlled separatedly and synchronously."),(0,o.kt)("h2",{id:"feature-specifications"},"Feature Specifications"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Markdown Editor and Viewer scroll synchronously.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you scroll Editor, Viewer is scrolled synchronously. The DOM elements corresponding to Markdown lines you are looking at in Editor's viewport are located in Viewer's viewport as possible."),(0,o.kt)("li",{parentName:"ul"},"The same applies in reverse. (Viewer -",">"," Editor)"),(0,o.kt)("li",{parentName:"ul"},"During and after any operations, the consistency of scroll positions between Editor and Viewer is kept as possible."))),(0,o.kt)("li",{parentName:"ul"},"Performance requirement: Since scrolling is a basic GUI operation, its overhead should be minimized.")),(0,o.kt)("h2",{id:"design"},"Design"),(0,o.kt)("h3",{id:"abstraction-view"},"Abstraction View"),(0,o.kt)("p",null,'The following figure shows the abstraction view of Sync Scroll. To manage scroll positions, the percent of the line number of a Markdown text data ("percent" in the figure) is used. To handle GUI components and events, "percent" is translated from/to "ePercent" for Editor using translation function  E2L() / L2E(). The same is true for Viewer.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/sync_scroll/abst-sync-lp2.png",alt:"Abstraction View with Sync Scroll"})),(0,o.kt)("p",null,'The reasons why "ePercent" is not directly translated from "vPercent" and vice versa are:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Line-based "percent" is good for maintaining, because it is GUI-independent. Both "ePercent" and "vPercent" depend on GUI components and are affected by many factors such as image loading, window resizing, pane hiding/showing.'),(0,o.kt)("li",{parentName:"ul"},"Direct conversion between Editor and Viewer needs both Editor and Viewer are present. If one of them is hidden, the information needed for conversion cannot be acquired."),(0,o.kt)("li",{parentName:"ul"},"Editor and Viewer run in different processes, so separation between them makes things simpler and reduces timing issues.")),(0,o.kt)("h3",{id:"components-and-data-interactions"},"Components and Data Interactions"),(0,o.kt)("p",null,"The next figure shows the components and data interactions related to Markdown Editor and Sync Scroll."),(0,o.kt)("p",null,"First, underlying Markdown Editor is explained. Editor is implemented using ",(0,o.kt)("a",{parentName:"p",href:"https://codemirror.net/"},"CodeMirror"),", and it provides the translation capability between line numbers of Markdown text and their pixel positions in Editor. A Markdown text being edited in Editor is converted to an HTML text using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/markdown-it/markdown-it"},"MarkdownIt"),", and it is rendered by Viewer, which is implemented using ",(0,o.kt)("a",{parentName:"p",href:"https://www.electronjs.org/docs/latest/tutorial/web-embeds#iframes"},"Electron's ",(0,o.kt)("inlineCode",{parentName:"a"},"iframe")),". Editor and Viewer run in different processes, so an HTML text is sent through inter-process communication (ipc). Viewer has the rendered HTML as a DOM and provides the translation capability between DOM elements and their pixel positions in Viewer."),(0,o.kt)("p",null,"New additions for Sync Scroll are shown in the figure as red portions. Since a DOM don't know the mapping between lines and elements, mapping information is embedded into an HTML tag as an additional attribute ",(0,o.kt)("inlineCode",{parentName:"p"},"source-line")," using MarkdownIt. By using the attributes, the translation capability between line numbers and their pixel positions in Viewer can be provided. The information required for the translation is cached in ",(0,o.kt)("inlineCode",{parentName:"p"},"scrollmap")," described later."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/sync_scroll/md-editor-components-pr.png",alt:"Components and Data Interactions"})),(0,o.kt)("h3",{id:"scroll-position-translation"},"Scroll Position Translation"),(0,o.kt)("p",null,'The next figure explains the procedure of the translation from "ePercent" to "percent" and the translation from "percent" to "vPercent". For the translation function E2L(), information acquired from CodeMirror used in Editor is used. For the translation function L2V(), information acquired from HTML DOM which is cached in  ',(0,o.kt)("inlineCode",{parentName:"p"},"scrollmap")," is used."),(0,o.kt)("p",null,"To estimate precise positions between lines/elements, linear interpolation algorithm is used as shown in the figure."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/sync_scroll/trans-e2l-l2v-2.png",alt:"Translation from Editor to Viewer"})),(0,o.kt)("p",null,'Similarly, the next figure explains the procedure of the translation from "vPercent" to "percent" and the translation from "percent" to "ePercent".'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/sync_scroll/trans-v2l-l2e-2.png",alt:"Translation from Viewer to Editor"})),(0,o.kt)("h3",{id:"caching-translation-map"},"Caching Translation Map"),(0,o.kt)("p",null,'The translation from "vPercent" to "percent" is a costly task, because it involves scanning the whole DOM. To keep scrolling as light as possible, the information required for the translation is packed into a translation map named ',(0,o.kt)("inlineCode",{parentName:"p"},"scrollmap")," and is cached for further reuses until outdated."),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"scrollmap")," is already sorted, the binary search algorithm can be employed for querying lines or positions. It's faster than the linear search, and a query needed for one scrolling event/action is very light."),(0,o.kt)("p",null,"For correct operation, the map should be discarded, when it becomes outdated, such as  when a note is switched, when a note is edited, and when the window is resized. Simultaneously, the frequency of recreations should be minimal for users' comfort."),(0,o.kt)("h3",{id:"implementation-details"},"Implementation Details"),(0,o.kt)("p",null,"The implementation details are out of the scope this document and described in the following pull requests."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/laurent22/joplin/pull/5826"},"Desktop: Fix #5708: Scroll positions are remembered/preserved (Line-Percent-based Sync Scroll) by ken1kob - Pull Request #5826 - laurent22/joplin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/laurent22/joplin/pull/5512"},"Desktop: Fix #2242: Sync-Scroll for Markdown Editor and Viewer by ken1kob - Pull Request #5512 - laurent22/joplin"))))}u.isMDXComponent=!0}}]);