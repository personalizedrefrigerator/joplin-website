"use strict";(self.webpackChunk_joplin_doc_builder=self.webpackChunk_joplin_doc_builder||[]).push([[2728],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||s;return n?i.createElement(m,r(r({ref:t},p),{},{components:n})):i.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,r[1]=o;for(var c=2;c<s;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return c}});var i=n(7462),a=(n(7294),n(3905));const s={sidebar_label:"Joplin synchronisation",title:"Joplin synchronisation",description:"The Joplin applications are offline first - it means that data is saved locally on the device. In order to have the same data on all the user's devices, we use a synchronisation process. In a nutsh..."},r="Joplin synchronisation",o={unversionedId:"dev/spec/sync",id:"dev/spec/sync",title:"Joplin synchronisation",description:"The Joplin applications are offline first - it means that data is saved locally on the device. In order to have the same data on all the user's devices, we use a synchronisation process. In a nutsh...",source:"@site/help/dev/spec/sync.md",sourceDirName:"dev/spec",slug:"/dev/spec/sync",permalink:"/help/dev/spec/sync",draft:!1,editUrl:"https://github.com/laurent22/joplin/tree/dev/readme/dev/spec/sync.md",tags:[],version:"current",frontMatter:{sidebar_label:"Joplin synchronisation",title:"Joplin synchronisation",description:"The Joplin applications are offline first - it means that data is saved locally on the device. In order to have the same data on all the user's devices, we use a synchronisation process. In a nutsh..."},sidebar:"helpSidebar",previous:{title:"Joplin Server user status",permalink:"/help/dev/spec/server_user_status"},next:{title:"Synchronisation locks",permalink:"/help/dev/spec/sync_lock"}},l={},c=[{value:"Vocabulary",id:"vocabulary",level:2},{value:"Clients",id:"clients",level:3},{value:"Sync targets",id:"sync-targets",level:3},{value:"Items",id:"items",level:3},{value:"General process",id:"general-process",level:2},{value:"Code architecture",id:"code-architecture",level:2},{value:"Testing",id:"testing",level:2},{value:"Sync target properties",id:"sync-target-properties",level:2},{value:"See also",id:"see-also",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"joplin-synchronisation"},"Joplin synchronisation"),(0,a.kt)("div",{className:"donate-links"},(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.paypal.com/donate/?business=E8JMYD2LQ8MMA&no_recurring=0&item_name=I+rely+on+donations+to+maintain+and+improve+the+Joplin+open+source+project.+Thank+you+for+your+help+-+it+makes+a+difference%21&currency_code=EUR"},(0,a.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-PayPal-green.svg",alt:"Donate using PayPal"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sponsors/laurent22/"},(0,a.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/GitHub-Badge.svg",alt:"Sponsor on GitHub"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://www.patreon.com/joplin"},(0,a.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Patreon-Badge.svg",alt:"Become a patron"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://joplinapp.org/donate/#donations"},(0,a.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-IBAN.svg",alt:"Donate using IBAN"})))),(0,a.kt)("p",null,"The Joplin applications are offline first - it means that data is saved locally on the device. In order to have the same data on all the user's devices, we use a synchronisation process. In a nutshell, each device uploads its notes, notebooks, tags, etc. to the server, and also downloads any notes they do not have, or any recent changes. If a note is deleted, it is also deleted from the server, and eventually deleted from each device too."),(0,a.kt)("h2",{id:"vocabulary"},"Vocabulary"),(0,a.kt)("h3",{id:"clients"},"Clients"),(0,a.kt)("p",null,"The sync clients are the Joplin applications - the desktop, mobile and terminal applications."),(0,a.kt)("h3",{id:"sync-targets"},"Sync targets"),(0,a.kt)("p",null,"The sync target is the location where the data is going to be saved. It can be for example Joplin Server, a Nextcloud instance, or a WebDAV server."),(0,a.kt)("h3",{id:"items"},"Items"),(0,a.kt)("p",null,'The "items" are the notes, notebooks, tags and resources that need to be synced.'),(0,a.kt)("h2",{id:"general-process"},"General process"),(0,a.kt)("p",null,"Whenever the user makes a change to an item, it is uploaded to the sync target within a few seconds. Uploading items as soon as possible helps limit conflicts. Because that way, any client that connects to the sync target is more likely to get the latest version of the item."),(0,a.kt)("p",null,"Additionally, every few minutes, the client is going to poll the server and download the latest changes, and apply them to the local note collection."),(0,a.kt)("h2",{id:"code-architecture"},"Code architecture"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"packages/lib/Synchronizer.ts"),": This file is responsible for the main synchronisation process. It download changes, upload them, and apply any deletion. The class is relatively generic and receive a ",(0,a.kt)("inlineCode",{parentName:"li"},"SyncTarget")," object that handles sync target-specific operations. The synchroniser is also going encrypt and decrypt items if E2EE is enabled."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"packages/lib/SyncTarget*.ts"),": These files are the entry points for the various sync targets. They expose some metadata such as name, description, what options they support, etc. Some may also implement a function to test whether the configuration is working (used from the configuration screen). Finally, the main role of this class is to initialise an instance of a ",(0,a.kt)("inlineCode",{parentName:"li"},"FileApi"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"packages/lib/file-api-driver-*.ts"),": Those are the file APIs. They must implement generic file-like operations to create, update, delete or list files. This API is in turn used by the synchroniser to created, update or delete items."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"packages/lib/*Api.ts"),": The ",(0,a.kt)("inlineCode",{parentName:"li"},"file-api-driver")," will call some low-level API to perform its operations. For example ",(0,a.kt)("inlineCode",{parentName:"li"},"file-api-driver-local")," will use the ",(0,a.kt)("inlineCode",{parentName:"li"},"fs")," package to read/write files, ",(0,a.kt)("inlineCode",{parentName:"li"},"file-api-driver-amazon-s3")," will use the AWS API to work with S3. In some cases however such a low-level API is not available - in that case, we usually create an ",(0,a.kt)("inlineCode",{parentName:"li"},"*Api.ts")," file, which is used by the file API driver to perform its operations. For example, there is a ",(0,a.kt)("inlineCode",{parentName:"li"},"JoplinServerApi.ts"),", which is used to connect to Joplin Server."),(0,a.kt)("li",{parentName:"ul"},"In general, each object in the database is represented by a ",(0,a.kt)("inlineCode",{parentName:"li"},"BaseModel")," class. Then each object than can be synced is represented by a ",(0,a.kt)("inlineCode",{parentName:"li"},"BaseItem")," class that inherits from ",(0,a.kt)("inlineCode",{parentName:"li"},"BaseModel"),". This class is where many sync-related utilities can be found such as ",(0,a.kt)("inlineCode",{parentName:"li"},"itemsThatNeedSync()")," or methods that encrypt items so that they can be uploaded when E2EE is enabled."),(0,a.kt)("li",{parentName:"ul"},"The state of each item is saved to the ",(0,a.kt)("inlineCode",{parentName:"li"},"sync_items")," table. There is saved in particular the ",(0,a.kt)("inlineCode",{parentName:"li"},"sync_time")," property which tells when the item was last synced. It is then used to decide what needs to be synced or not. Additional sync-related properties include ",(0,a.kt)("inlineCode",{parentName:"li"},"sync_disabled"),', which is used in the rare case an item cannot be synced at all - for example if blocked by Dropbox for being "restricted content" (copyrighted), or is over the limit on Joplin Cloud. Each entry in ',(0,a.kt)("inlineCode",{parentName:"li"},"sync_items")," is scoped to a sync target (",(0,a.kt)("inlineCode",{parentName:"li"},"sync_target")," property), so theoretically it's possible to sync the same items to multiple sync targets.")),(0,a.kt)("h2",{id:"testing"},"Testing"),(0,a.kt)("p",null,"By default, the test units synchronise with an in-memory sync target, which is fast and is usually enough to verify most behaviours. The test units however can be configured to sync with a specific sync target, such as the file system, Nextcloud, Joplin Server, etc. To do so, modify ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/lib/testing/test-utils.ts")," and change ",(0,a.kt)("inlineCode",{parentName:"p"},"setSyncTargetName()")," to the relevant sync target. You may also need to add or modify the relevant files in ",(0,a.kt)("inlineCode",{parentName:"p"},"~/joplin-credentials/*"),". See the ",(0,a.kt)("inlineCode",{parentName:"p"},"initFileApi()")," method in ",(0,a.kt)("inlineCode",{parentName:"p"},"test-utils.ts")," for more details."),(0,a.kt)("h2",{id:"sync-target-properties"},"Sync target properties"),(0,a.kt)("p",null,"The properties specific to the sync target are saved in a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"info.json")," - it is used to ensure all clients work with the same sync settings."),(0,a.kt)("p",null,"Several properties have an associated ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedTime")," property. This is used to resolve conflicts when two clients perform the same action on the same property. In this case heuristics decide which value should be kept. See ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/lib/services/synchronizer/syncInfoUtils.ts")," for all logic related to this ",(0,a.kt)("inlineCode",{parentName:"p"},"info.json")," file."),(0,a.kt)("p",null,"Each client keeps a local version of this sync target info, which is synchronised whenever it is modified."),(0,a.kt)("p",null,"The list of properties is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface SyncTargetInfo {\n    // The sync target version number.\n    version: number; \n\n    // Whether E2EE is enabled on the sync target or not\n    e2ee: {\n        value: boolean;\n        updatedTime: number;\n    }\n\n    // The active encryption key\n    activeMasterKeyId: {\n        value: string;\n        updatedTime: number;\n    }\n\n    // The known encryption/decryption keys\n    masterKeys: Key[];\n\n    // The public/private keys\n    ppk: {\n        value: {\n            id: string;\n            keySize: number;\n            privateKey: Key; // Encrypted using user password\n            publicKey: string; // Plaintext\n            createdTime: number;\n        }\n    }\n\n    // The minimum app version required to sync with this sync target\n    appMinVersion: string;\n}\n")),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/help/dev/spec/sync_lock"},"Synchronisation lock")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/help/dev/spec/e2ee"},"E2EE: Technical spec")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/help/dev/spec/e2ee/workflow"},"E2EE: Workflow"))))}h.isMDXComponent=!0}}]);