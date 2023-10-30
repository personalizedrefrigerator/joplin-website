"use strict";(self.webpackChunk_joplin_doc_builder=self.webpackChunk_joplin_doc_builder||[]).push([[4585],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7930:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=n(7462),a=(n(7294),n(3905));const o={created:new Date("2020-09-13T16:37:30.000Z"),source_url:"https://www.patreon.com/posts/version-1-1-41561666",sidebar_label:"Version 1.1: Search engine update",date:new Date("2020-09-13T00:00:00.000Z"),title:"Version 1.1: Search engine update",description:"In this series of posts, I will introduce the changes that are coming in version 1.1 (which in fact is already available as a pre-release). For this first feature, I will let Naveen, our GSoC candi..."},i="Version 1.1: Search engine update",s={permalink:"/news/20200913-163730",editUrl:"https://github.com/laurent22/joplin/tree/dev/readme/news/20200913-163730.md",source:"@site/news/20200913-163730.md",title:"Version 1.1: Search engine update",description:"In this series of posts, I will introduce the changes that are coming in version 1.1 (which in fact is already available as a pre-release). For this first feature, I will let Naveen, our GSoC candi...",date:"2020-09-13T00:00:00.000Z",formattedDate:"September 13, 2020",tags:[],readingTime:2.045,hasTruncateMarker:!1,authors:[],frontMatter:{created:"2020-09-13T16:37:30.000Z",source_url:"https://www.patreon.com/posts/version-1-1-41561666",sidebar_label:"Version 1.1: Search engine update",date:"2020-09-13T00:00:00.000Z",title:"Version 1.1: Search engine update",description:"In this series of posts, I will introduce the changes that are coming in version 1.1 (which in fact is already available as a pre-release). For this first feature, I will let Naveen, our GSoC candi..."},prevItem:{title:"Version 1.1: Keyboard shortcut editor",permalink:"/news/20200915-091108"},nextItem:{title:"Improving the sync process in Joplin",permalink:"/news/20200906-172325"}},l={authorsImageUrls:[]},c=[{value:"What got done",id:"what-got-done",level:3},{value:"Code contributions",id:"code-contributions",level:3}],p={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"donate-links"},(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.paypal.com/donate/?business=E8JMYD2LQ8MMA&no_recurring=0&item_name=I+rely+on+donations+to+maintain+and+improve+the+Joplin+open+source+project.+Thank+you+for+your+help+-+it+makes+a+difference%21&currency_code=EUR"},(0,a.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-PayPal-green.svg",alt:"Donate using PayPal"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sponsors/laurent22/"},(0,a.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/GitHub-Badge.svg",alt:"Sponsor on GitHub"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://www.patreon.com/joplin"},(0,a.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Patreon-Badge.svg",alt:"Become a patron"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://joplinapp.org/donate/#donations"},(0,a.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-IBAN.svg",alt:"Donate using IBAN"})))),(0,a.kt)("p",null,"In this series of posts, I will introduce the changes that are coming in version 1.1 (which in fact is already available as a pre-release)."),(0,a.kt)("p",null,"For this first feature, I will let Naveen, our GSoC candidate, present it. Naveen has made an excellent job implementing various search engine features, including advanced filters, support for Okapi BM25 scoring algorithm, and fuzzy search. Here is what he has to say:"),(0,a.kt)("h3",{id:"what-got-done"},"What got done"),(0,a.kt)("p",null,"The project consisted of three parts:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Make search better by introducing additional search filters. (e.g., tags, notebook, type)"),(0,a.kt)("li",{parentName:"ol"},"Make the ranking of search results better by implementing the ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Okapi_BM25"},"Okapi BM25")," relevance function."),(0,a.kt)("li",{parentName:"ol"},"Make fuzzy search possible.")),(0,a.kt)("h3",{id:"code-contributions"},"Code contributions"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/laurent22/joplin/pull/3213"},(0,a.kt)("strong",{parentName:"a"},"All: Add search filters")),"Joplin's search had been using the Full-Text Search(FTS) offered by \xa0SQLite directly. So though it was fast, it was not versatile. For \xa0example, we can't restrict the search scope to a particular notebook or \xa0search based on tags.The current search implementation fixes most of these problems. It \xa0provides a better abstraction over FTS, supporting many new filters. The \xa0documentation for the new search filters can be found ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/laurent22/joplin#searching"},"here.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/laurent22/joplin/pull/3454"},(0,a.kt)("strong",{parentName:"a"},"All: Weigh notes using Okapi BM25 score")),'Joplin used a ranking function based on the number of times the search query occurs in the note and how close they are.But there are better ways to rank notes, considering not just the \xa0number of times a word appears, but how common it is. Words like "the" \xa0is in most notes, while words like "zebra" are not common and should be \xa0considered more relevant.The new search implementation uses ',(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Okapi_BM25"},"Okapi BM25")," \xa0as the ranking function. It ranks a set of documents based on the query \xa0terms appearing in each document, regardless of their proximity."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/laurent22/joplin/pull/3632"},(0,a.kt)("strong",{parentName:"a"},"Desktop: Fuzzy search")),'We\'ve added support for fuzzy search. It doesn\'t replace the need to put \xa0* at the end if you want to do a prefix search. But it does let you be a \xa0bit more relaxed about the exact spelling. Searching for "tomatos" will \xa0also give you results for "tomatoes". (This feature isn\'t released yet, \xa0but will be soon)')),(0,a.kt)("p",null,"It has been a pleasure working with Laurent and Caleb. They did an excellent job as mentors."),(0,a.kt)("p",null,"I hope these new features will be useful to many people. I plan to \xa0continue as a member of the Joplin community and help in whatever way I \xa0can."))}h.isMDXComponent=!0}}]);