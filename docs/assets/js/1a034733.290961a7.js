"use strict";(self.webpackChunk_joplin_doc_builder=self.webpackChunk_joplin_doc_builder||[]).push([[610],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return u}});var i=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},h=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},v=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),c=d(n),v=s,u=c["".concat(l,".").concat(v)]||c[v]||p[v]||r;return n?i.createElement(u,a(a({ref:t},h),{},{components:n})):i.createElement(u,a({ref:t},h))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,a=new Array(r);a[0]=v;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:s,a[1]=o;for(var d=2;d<r;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}v.displayName="MDXCreateElement"},6225:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return d}});var i=n(7462),s=(n(7294),n(3905));const r={sidebar_label:"Note history",title:"Note history",description:"The note history preserves versions of the notes at regular interval. All the revisions are synced and shared across all devices. Revision format To save space, only the diff of a note is saved: th..."},a="Note history",o={unversionedId:"dev/spec/history",id:"dev/spec/history",title:"Note history",description:"The note history preserves versions of the notes at regular interval. All the revisions are synced and shared across all devices. Revision format To save space, only the diff of a note is saved: th...",source:"@site/help/dev/spec/history.md",sourceDirName:"dev/spec",slug:"/dev/spec/history",permalink:"/help/dev/spec/history",draft:!1,editUrl:"https://github.com/laurent22/joplin/tree/dev/readme/dev/spec/history.md",tags:[],version:"current",frontMatter:{sidebar_label:"Note history",title:"Note history",description:"The note history preserves versions of the notes at regular interval. All the revisions are synced and shared across all devices. Revision format To save space, only the diff of a note is saved: th..."},sidebar:"helpSidebar",previous:{title:"E2EE workflow",permalink:"/help/dev/spec/e2ee/workflow"},next:{title:"Markdown with Front Matter Exporter/Importer",permalink:"/help/dev/spec/interop_with_frontmatter"}},l={},d=[{value:"Revision format",id:"revision-format",level:2},{value:"Revision service",id:"revision-service",level:2},{value:"Revision deletion",id:"revision-deletion",level:2},{value:"Disabling the service",id:"disabling-the-service",level:2},{value:"Revision settings are global",id:"revision-settings-are-global",level:2},{value:"Why is there less than 10 minutes between some revisions?",id:"why-is-there-less-than-10-minutes-between-some-revisions",level:2}],h={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,s.kt)(c,(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"note-history"},"Note history"),(0,s.kt)("div",{className:"donate-links"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.paypal.com/donate/?business=E8JMYD2LQ8MMA&no_recurring=0&item_name=I+rely+on+donations+to+maintain+and+improve+the+Joplin+open+source+project.+Thank+you+for+your+help+-+it+makes+a+difference%21&currency_code=EUR"},(0,s.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-PayPal-green.svg",alt:"Donate using PayPal"}))," ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/sponsors/laurent22/"},(0,s.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/GitHub-Badge.svg",alt:"Sponsor on GitHub"}))," ",(0,s.kt)("a",{parentName:"p",href:"https://www.patreon.com/joplin"},(0,s.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Patreon-Badge.svg",alt:"Become a patron"}))," ",(0,s.kt)("a",{parentName:"p",href:"https://joplinapp.org/donate/#donations"},(0,s.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-IBAN.svg",alt:"Donate using IBAN"})))),(0,s.kt)("p",null,"The note history preserves versions of the notes at regular interval. All the revisions are synced and shared across all devices."),(0,s.kt)("h2",{id:"revision-format"},"Revision format"),(0,s.kt)("p",null,"To save space, only the diff of a note is saved: the title and body are saved as text diff, while the other properties are saved as an object diff (i.e. only the modified properties are saved)."),(0,s.kt)("p",null,"Advantages: it saves space, and writes are fast."),(0,s.kt)("p",null,"Disadvantages: reading a note version back is slower since it needs to be rebuilt, starting from the oldest revision and applying diffs to it one at a time."),(0,s.kt)("h2",{id:"revision-service"},"Revision service"),(0,s.kt)("p",null,"Every time an object is changed in Joplin, some metadata is added to the changed_items table. The revision service uses this to know what notes need a new revision. Specifically it will create a revision under these conditions:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The note hadn't had a revision for more than 10 minutes"),(0,s.kt)("li",{parentName:"ol"},"The note was recently modified, but before that it hadn't had a revision for more than 7 days")),(0,s.kt)("p",null,"Condition 1 saves the current state of the note (i.e. ",(0,s.kt)("strong",{parentName:"p"},"after")," the edit). Condition 2 saves the state has it was ",(0,s.kt)("strong",{parentName:"p"},"before")," the edit."),(0,s.kt)("p",null,"The reason for that is that we save revisions every 10 minutes, but if you make many changes within a few minutes and then stop modifying the note, the final revision will not contain the current content of the note. Basically at one point (let's say at t1) the service will see there's a revision from less than 10 minutes, and will not save a new one."),(0,s.kt)("p",null,"That's why when you change the note again more than 7 days later, we save that revision that wasn't saved at t1. The logic is a bit complicated but the goal is to preserve the last significant state of a note. If you make many changes to a note then stop editing it for several months, the last significant state was at the end of that series of edits, so we need to save that."),(0,s.kt)("p",null,"Additionally, notes that were created before the service existed never had revisions. So the 7 days logic ensure that they get one the first time they are modified."),(0,s.kt)("h2",{id:"revision-deletion"},"Revision deletion"),(0,s.kt)("p",null,"Revisions are deleted once they are older than a given interval as set in ",(0,s.kt)("inlineCode",{parentName:"p"},"revisionService.oldNoteInterval")," (90 days by default)."),(0,s.kt)("h2",{id:"disabling-the-service"},"Disabling the service"),(0,s.kt)("p",null,"When disabled, no new revision is saved, but the existing one remain there, and will only be deleted after the interval specified in ",(0,s.kt)("inlineCode",{parentName:"p"},"revisionService.oldNoteInterval"),"."),(0,s.kt)("h2",{id:"revision-settings-are-global"},"Revision settings are global"),(0,s.kt)("p",null,"Since all the revisions are synced across all devices, it means these settings are kind of global. So for example, if on one device you set it to keep revisions for 30 days, and on another to 100 days, the revisions older than 30 days will be deleted, and then this deletion will be synced. So in practice it means revisions are kept for whatever is the minimum number of days as set on any of the devices. In that particular case, the 100 days setting will be essentially ignored, and only the 30 days one will apply."),(0,s.kt)("h2",{id:"why-is-there-less-than-10-minutes-between-some-revisions"},"Why is there less than 10 minutes between some revisions?"),(0,s.kt)("p",null,"It can happen if a note is changed on two different devices within less than 10 minutes. A revision will be created on each device, then when they are synced it will appear that there's less than 10 min between the revisions."))}p.isMDXComponent=!0}}]);