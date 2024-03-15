"use strict";(self.webpackChunk_joplin_doc_builder=self.webpackChunk_joplin_doc_builder||[]).push([[6299],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,g=d["".concat(o,".").concat(m)]||d[m]||c[m]||a;return t?r.createElement(g,p(p({ref:n},u),{},{components:t})):r.createElement(g,p({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,p=new Array(a);p[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[d]="string"==typeof e?e:i,p[1]=l;for(var s=2;s<a;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},22626:function(e,n,t){t.r(n),t.d(n,{assets:function(){return o},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var r=t(87462),i=(t(67294),t(3905));const a={sidebar_label:"Deploying Joplin apps and scripts",title:"Deploying Joplin apps and scripts",description:"Various scripts are provided to deploy the Joplin applications, scripts and tools. Setting up version numbers Before new releases are created, all version numbers must be updated. This is done usin..."},p="Deploying Joplin apps and scripts",l={unversionedId:"dev/DEPLOY",id:"dev/DEPLOY",title:"Deploying Joplin apps and scripts",description:"Various scripts are provided to deploy the Joplin applications, scripts and tools. Setting up version numbers Before new releases are created, all version numbers must be updated. This is done usin...",source:"@site/help/dev/DEPLOY.md",sourceDirName:"dev",slug:"/dev/DEPLOY",permalink:"/help/dev/DEPLOY",draft:!1,editUrl:"https://github.com/laurent22/joplin/tree/dev/readme/dev/DEPLOY.md",tags:[],version:"current",frontMatter:{sidebar_label:"Deploying Joplin apps and scripts",title:"Deploying Joplin apps and scripts",description:"Various scripts are provided to deploy the Joplin applications, scripts and tools. Setting up version numbers Before new releases are created, all version numbers must be updated. This is done usin..."},sidebar:"helpSidebar",previous:{title:"Building the applications",permalink:"/help/dev/BUILD"},next:{title:"Build troubleshooting",permalink:"/help/dev/build_troubleshooting"}},o={},s=[{value:"Setting up version numbers",id:"setting-up-version-numbers",level:2},{value:"Desktop application",id:"desktop-application",level:2},{value:"Android application",id:"android-application",level:2},{value:"iOS application",id:"ios-application",level:2},{value:"CLI application",id:"cli-application",level:2},{value:"Joplin Server",id:"joplin-server",level:2},{value:"Web clipper",id:"web-clipper",level:2},{value:"Plugin generator",id:"plugin-generator",level:2},{value:"Plugin Repo Cli",id:"plugin-repo-cli",level:2}],u={toc:s},d="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploying-joplin-apps-and-scripts"},"Deploying Joplin apps and scripts"),(0,i.kt)("div",{className:"donate-links"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.paypal.com/donate/?business=E8JMYD2LQ8MMA&no_recurring=0&item_name=I+rely+on+donations+to+maintain+and+improve+the+Joplin+open+source+project.+Thank+you+for+your+help+-+it+makes+a+difference%21&currency_code=EUR"},(0,i.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-PayPal-green.svg",alt:"Donate using PayPal"}))," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sponsors/laurent22/"},(0,i.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/GitHub-Badge.svg",alt:"Sponsor on GitHub"}))," ",(0,i.kt)("a",{parentName:"p",href:"https://www.patreon.com/joplin"},(0,i.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Patreon-Badge.svg",alt:"Become a patron"}))," ",(0,i.kt)("a",{parentName:"p",href:"https://joplinapp.org/donate/#donations"},(0,i.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-IBAN.svg",alt:"Donate using IBAN"})))),(0,i.kt)("p",null,"Various scripts are provided to deploy the Joplin applications, scripts and tools."),(0,i.kt)("h2",{id:"setting-up-version-numbers"},"Setting up version numbers"),(0,i.kt)("p",null,"Before new releases are created, all version numbers must be updated. This is done using the ",(0,i.kt)("inlineCode",{parentName:"p"},"setupNewRelease")," script and passing it the new major.minor version number. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn setupNewRelease 1.8\n")),(0,i.kt)("p",null,"Patch numbers are going to be incremented automatically when releasing each individual package."),(0,i.kt)("h2",{id:"desktop-application"},"Desktop application"),(0,i.kt)("p",null,"The desktop application is built for Windows, macOS and Linux via continuous integration, by pushing a version tag to GitHub. The process is automated using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn releaseDesktop\n")),(0,i.kt)("h2",{id:"android-application"},"Android application"),(0,i.kt)("p",null,"The app is built and upload to GitHub using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn releaseAndroid --type=prerelease\n")),(0,i.kt)("p",null,'The "type" parameter can be either "release" or "prerelease"'),(0,i.kt)("h2",{id:"ios-application"},"iOS application"),(0,i.kt)("p",null,"It must be built and released manually using XCode."),(0,i.kt)("h2",{id:"cli-application"},"CLI application"),(0,i.kt)("p",null,"Unlike the mobile or desktop application, the CLI app doesn't bundle its dependencies and is always installed from source. For that reason, all its ",(0,i.kt)("inlineCode",{parentName:"p"},"@joplin")," dependencies must be deployed publicly first. This is done using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn publishAll\n")),(0,i.kt)("p",null,"This is going to publish all the Joplin libraries, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"@joplin/lib"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@joplin/tools"),", etc."),(0,i.kt)("p",null,"Then in ",(0,i.kt)("inlineCode",{parentName:"p"},"app-cli/package.json"),", all ",(0,i.kt)("inlineCode",{parentName:"p"},"@joplin")," dependencies and devdependencies must be set to the last major/minor version. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"dependencies": {\n    "@joplin/lib": "1.8",\n    "@joplin/renderer": "1.8",\n    "...": "..."\n},\n"devDependencies": {\n    "@joplin/tools": "1.8",\n    "...": "..."\n}\n')),(0,i.kt)("p",null,"Finally, to release the actual app, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn releaseCli\n")),(0,i.kt)("h2",{id:"joplin-server"},"Joplin Server"),(0,i.kt)("p",null,"Run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn releaseServer\n")),(0,i.kt)("h2",{id:"web-clipper"},"Web clipper"),(0,i.kt)("p",null,"Run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn releaseClipper\n")),(0,i.kt)("h2",{id:"plugin-generator"},"Plugin generator"),(0,i.kt)("p",null,"First the types should generally be updated, using ",(0,i.kt)("inlineCode",{parentName:"p"},"./updateTypes.sh"),". Then run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn releasePluginGenerator\n")),(0,i.kt)("h2",{id:"plugin-repo-cli"},"Plugin Repo Cli"),(0,i.kt)("p",null,"This tool is packaged using Webpack so it can be released with a single command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn releasePluginRepoCli\n")))}c.isMDXComponent=!0}}]);