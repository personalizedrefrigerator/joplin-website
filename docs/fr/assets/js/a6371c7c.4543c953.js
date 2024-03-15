"use strict";(self.webpackChunk_joplin_doc_builder=self.webpackChunk_joplin_doc_builder||[]).push([[1996],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:o,s[1]=r;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39971:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return r},toc:function(){return p}});var a=n(87462),o=(n(67294),n(3905));const i={sidebar_label:"Coding style",title:"Coding style",description:"Coding style is mostly enforced by a pre-commit hook that runs eslint. This hook is installed whenever running yarn install on any of the application directory. If for some reason the pre-commit ho..."},s="Coding style",r={unversionedId:"dev/coding_style",id:"dev/coding_style",title:"Coding style",description:"Coding style is mostly enforced by a pre-commit hook that runs eslint. This hook is installed whenever running yarn install on any of the application directory. If for some reason the pre-commit ho...",source:"@site/help/dev/coding_style.md",sourceDirName:"dev",slug:"/dev/coding_style",permalink:"/fr/help/dev/coding_style",draft:!1,editUrl:"https://github.com/laurent22/joplin/tree/dev/readme/dev/coding_style.md",tags:[],version:"current",frontMatter:{sidebar_label:"Coding style",title:"Coding style",description:"Coding style is mostly enforced by a pre-commit hook that runs eslint. This hook is installed whenever running yarn install on any of the application directory. If for some reason the pre-commit ho..."},sidebar:"helpSidebar",previous:{title:"Build troubleshooting",permalink:"/fr/help/dev/build_troubleshooting"},next:{title:"Localisation",permalink:"/fr/help/dev/localisation"}},l={},p=[{value:"Enforcing rules using eslint",id:"enforcing-rules-using-eslint",level:2},{value:"TypeScript rules",id:"typescript-rules",level:2},{value:"Creating a new <code>.ts</code> file",id:"creating-a-new-ts-file",level:3},{value:"Convert existing <code>.js</code> files to TypeScript before modifying",id:"convert-existing-js-files-to-typescript-before-modifying",level:3},{value:"Prefer <code>import</code> to <code>require</code>",id:"prefer-import-to-require",level:3},{value:"Avoid inline types",id:"avoid-inline-types",level:3},{value:"Don&#39;t set the type when it can be inferred",id:"dont-set-the-type-when-it-can-be-inferred",level:3},{value:"Filenames, import and export",id:"filenames-import-and-export",level:2},{value:"Filenames",id:"filenames",level:3},{value:"Use the same case for imported and exported members",id:"use-the-same-case-for-imported-and-exported-members",level:3},{value:"Only import what you need",id:"only-import-what-you-need",level:3},{value:"Variables and functions",id:"variables-and-functions",level:2},{value:"Use <code>camelCase</code> for <code>const</code>ants in new code",id:"use-camelcase-for-constants-in-new-code",level:3},{value:"Declare variables just before their usage",id:"declare-variables-just-before-their-usage",level:3},{value:"Prefer <code>const</code> to <code>let</code> (where possible)",id:"prefer-const-to-let-where-possible",level:3},{value:"Prefer <code>() =&gt; {}</code> to <code>function() { ... }</code>",id:"prefer----to-function---",level:3},{value:"Avoid default and optional parameters",id:"avoid-default-and-optional-parameters",level:3},{value:"Escape variables",id:"escape-variables",level:2},{value:"To insert into a JS script",id:"to-insert-into-a-js-script",level:3},{value:"To insert into an HTML string",id:"to-insert-into-an-html-string",level:3},{value:"To insert into a URL",id:"to-insert-into-a-url",level:3},{value:"To insert into Markdown code",id:"to-insert-into-markdown-code",level:3},{value:"Escape as late as possible",id:"escape-as-late-as-possible",level:3},{value:"Make wrong code look wrong",id:"make-wrong-code-look-wrong",level:3},{value:"React",id:"react",level:2},{value:"Use function components for new code",id:"use-function-components-for-new-code",level:3},{value:"Use react custom hooks to simplify long code",id:"use-react-custom-hooks-to-simplify-long-code",level:3},{value:"Database",id:"database",level:2},{value:"Use snake_case",id:"use-snake_case",level:3},{value:"Everything is NOT NULL",id:"everything-is-not-null",level:3},{value:"Use defaults sparingly",id:"use-defaults-sparingly",level:3},{value:"Use an integer for enum-like values",id:"use-an-integer-for-enum-like-values",level:3},{value:"Prefer using <code>tinyint(1)</code> to <code>bool</code>",id:"prefer-using-tinyint1-to-bool",level:3},{value:"Web requests and API",id:"web-requests-and-api",level:2},{value:"Use <code>snake_case</code>",id:"use-snake_case-1",level:3},{value:"Test units",id:"test-units",level:2},{value:"Avoid mock objects",id:"avoid-mock-objects",level:3},{value:"Avoid spying on method",id:"avoid-spying-on-method",level:3},{value:"See also",id:"see-also",level:2},{value:"<strong>Other</strong> projects&#39; style guides",id:"other-projects-style-guides",level:3},{value:"Posts/resources related to Joplin&#39;s style",id:"postsresources-related-to-joplins-style",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"coding-style"},"Coding style"),(0,o.kt)("div",{className:"donate-links"},(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.paypal.com/donate/?business=E8JMYD2LQ8MMA&no_recurring=0&item_name=I+rely+on+donations+to+maintain+and+improve+the+Joplin+open+source+project.+Thank+you+for+your+help+-+it+makes+a+difference%21&currency_code=EUR"},(0,o.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-PayPal-green.svg",alt:"Donate using PayPal"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sponsors/laurent22/"},(0,o.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/GitHub-Badge.svg",alt:"Sponsor on GitHub"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://www.patreon.com/joplin"},(0,o.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Patreon-Badge.svg",alt:"Become a patron"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://joplinapp.org/donate/#donations"},(0,o.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-IBAN.svg",alt:"Donate using IBAN"})))),(0,o.kt)("p",null,"Coding style is mostly enforced by a pre-commit hook that runs ",(0,o.kt)("inlineCode",{parentName:"p"},"eslint"),". This hook is installed whenever running ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn install")," on any of the application directory. If for some reason the pre-commit hook didn't get installed, you can manually install it by running ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn install")," at the root of the repository."),(0,o.kt)("h2",{id:"enforcing-rules-using-eslint"},"Enforcing rules using eslint"),(0,o.kt)("p",null,"Whenever possible, coding style should be enforced using an eslint rule. To do so, add the relevant rule or plugin to ",(0,o.kt)("inlineCode",{parentName:"p"},"eslintrc.js"),". To manually run the linter, run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn linter ./")," from the root of the project."),(0,o.kt)("p",null,"When adding a rule, you will often find that many files will no longer pass the linter. In that case, you have two options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fix the files one by one. If there aren't too many files, and the changes are simple (they are unlikely to introduce regressions), this is the preferred solution."),(0,o.kt)("li",{parentName:"ul"},"Or use ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn linter-interactive ./")," to disable existing errors. The interactive tool will process all the files and you can then choose to disable any existing error that it finds (by adding a ",(0,o.kt)("inlineCode",{parentName:"li"},"eslint-disable-next-line"),' comment above it). This allows keeping the existing, working codebase as it is, and enforcing that new code follows the rule. When using this method, add the comment "Old code before rule was applied" so that we can easily find back all the lines that have been automatically disabled.')),(0,o.kt)("h2",{id:"typescript-rules"},"TypeScript rules"),(0,o.kt)("h3",{id:"creating-a-new-ts-file"},"Creating a new ",(0,o.kt)("inlineCode",{parentName:"h3"},".ts")," file"),(0,o.kt)("p",null,"Because the TypeScript compiler generates ",(0,o.kt)("inlineCode",{parentName:"p"},".js")," files, be sure to add these new ",(0,o.kt)("inlineCode",{parentName:"p"},".js")," files to ",(0,o.kt)("inlineCode",{parentName:"p"},".eslintignore")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore"),"."),(0,o.kt)("p",null,"To do this,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If the TypeScript compiler has already generated a ",(0,o.kt)("inlineCode",{parentName:"li"},".js")," file for the new ",(0,o.kt)("inlineCode",{parentName:"li"},".ts")," file, delete it."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn updateIgnored")," in the root directory of the project (or ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn postinstall"),")")),(0,o.kt)("h3",{id:"convert-existing-js-files-to-typescript-before-modifying"},"Convert existing ",(0,o.kt)("inlineCode",{parentName:"h3"},".js")," files to TypeScript before modifying"),(0,o.kt)("p",null,"Even if you are ",(0,o.kt)("strong",{parentName:"p"},"modifying")," a file that was originally in JavaScript you should ideally convert it first to TypeScript before modifying it."),(0,o.kt)("p",null,"If this is a large file however please ask first if it needs to be converted. Some very old and large JS files are tricky to convert properly due to poorly defined types, so in some cases it's better to leave that for another day (or another PR)."),(0,o.kt)("h3",{id:"prefer-import-to-require"},"Prefer ",(0,o.kt)("inlineCode",{parentName:"h3"},"import")," to ",(0,o.kt)("inlineCode",{parentName:"h3"},"require")),(0,o.kt)("p",null,"In TypeScript files prefer ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"require")," so that we can benefit from type-checking. If it does not work, you may have to add the type using ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn add @types/NAME_OF_PACKAGE"),". If you are trying to import an old package, it may not have TypeScript types and in this case using ",(0,o.kt)("inlineCode",{parentName:"p"},"require()")," is acceptable."),(0,o.kt)("h3",{id:"avoid-inline-types"},"Avoid inline types"),(0,o.kt)("p",null,"In general please define types separately as it improves readability and it means the type can be re-used."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"BAD:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const config: { [key: string]: Knex.Config } = {\n    // ...\n}   \n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Good:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type Config = Record<string, Knex.Config>;\n\nconst config: Config = {\n    // ...\n}   \n")),(0,o.kt)("h3",{id:"dont-set-the-type-when-it-can-be-inferred"},"Don't set the type when it can be inferred"),(0,o.kt)("p",null,"TypeScript can automatically detect the type so setting it explicitly in many cases is not needed, and makes the code unnecessarily verbose. We already have enabled the eslint rule ",(0,o.kt)("inlineCode",{parentName:"p"},"no-inferable-types"),", however it only applies to simple types such as string, number, etc. but not to function calls."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"BAD:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const getSomething():string => {\n    return 'something';\n}\n\nconst timestamp:number = Date.now();\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Good:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const getSomething() => {\n    return 'something';\n}\n\nconst timestamp = Date.now();\n")),(0,o.kt)("h2",{id:"filenames-import-and-export"},"Filenames, import and export"),(0,o.kt)("h3",{id:"filenames"},"Filenames"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"camelCase.ts"),": Files that export multiple things.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Example: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/laurent22/joplin/blob/dev/packages/app-desktop/checkForUpdates.ts"},(0,o.kt)("inlineCode",{parentName:"a"},"checkForUpdates.ts"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PascalCase.ts"),": ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/laurent22/joplin/pull/6607#discussion_r906847156"},"Only if the file contains a single class, which is the default export.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"types.ts")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"fooTypes.ts"),": ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/laurent22/joplin/pull/6607#discussion_r906847156"},"Shared type definitions"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Example : ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/laurent22/joplin/blob/dev/packages/server/src/utils/types.ts"},(0,o.kt)("inlineCode",{parentName:"a"},"types.ts")))))),(0,o.kt)("h3",{id:"use-the-same-case-for-imported-and-exported-members"},"Use the same case for imported and exported members"),(0,o.kt)("p",null,"If you create a file that exports a single function called ",(0,o.kt)("inlineCode",{parentName:"p"},"processData()"),", the file should be named ",(0,o.kt)("inlineCode",{parentName:"p"},"processData.ts"),". When importing, it should be imported as ",(0,o.kt)("inlineCode",{parentName:"p"},"processData"),", too. Basically, be consistent with naming, even though JS allows things to be named differently."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"BAD:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// ProcessDATA.ts\nexport default const processData = () => {\n    // ...\n};\n\n// foo.ts\nimport doDataProcessing from './ProcessDATA';\n\ndoDataProcessing();\n...\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Good:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// processData.ts\nexport default const processData = () => {\n    // ...\n};\n\n// foo.ts\nimport processData from './processData';\n\nprocessData();\n...\n")),(0,o.kt)("h3",{id:"only-import-what-you-need"},"Only import what you need"),(0,o.kt)("p",null,"Only import what you need so that we can potentially benefit from ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/tree-shaking/"},"tree shaking")," if we ever implement it."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"BAD:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import * as fs from 'fs-extra';\n// ...\nfs.writeFile('example.md', 'example');\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Good:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { writeFile } from 'fs-extra';\n// ...\nwriteFile('example.md', 'example');\n")),(0,o.kt)("h2",{id:"variables-and-functions"},"Variables and functions"),(0,o.kt)("h3",{id:"use-camelcase-for-constants-in-new-code"},"Use ",(0,o.kt)("inlineCode",{parentName:"h3"},"camelCase")," for ",(0,o.kt)("inlineCode",{parentName:"h3"},"const"),"ants in new code"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"BAD:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Bad! Don't use in new code!\nconst GRAVITY_ACCEL = 9.8;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Good:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const gravityAccel = 9.8;\n")),(0,o.kt)("h3",{id:"declare-variables-just-before-their-usage"},"Declare variables just before their usage"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"BAD:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Bad!\nlet foo, bar;\n\nconst doThings = () => {\n    // do things unrelated to foo, bar\n};\n\n// Do things involving foo and bar\nfoo = Math.random();\nbar = foo + Math.random() / 100;\nfoo += Math.sin(bar + Math.tan(foo));\n...\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Good:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"...\nconst doThings = () => {\n    // do things unrelated to foo, bar\n};\n\n// Do things involving foo and bar\nlet foo = Math.random();\nlet bar = foo + Math.random() / 100;\nfoo += Math.sin(bar + Math.tan(foo));\n...\n")),(0,o.kt)("p",null,"Don't allow this to lead to duplicate code, however. If constants are used multiple times, it's okay to declare them at the top of a file or in a separate, imported file."),(0,o.kt)("h3",{id:"prefer-const-to-let-where-possible"},"Prefer ",(0,o.kt)("inlineCode",{parentName:"h3"},"const")," to ",(0,o.kt)("inlineCode",{parentName:"h3"},"let")," (where possible)"),(0,o.kt)("h3",{id:"prefer----to-function---"},"Prefer ",(0,o.kt)("inlineCode",{parentName:"h3"},"() => {}")," to ",(0,o.kt)("inlineCode",{parentName:"h3"},"function() { ... }")),(0,o.kt)("p",null,"Doing this avoids having to deal with the ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," keyword. Not having it makes it easier to refactor class components into React Hooks, because any use of ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," (used in classes) will be correctly detected as invalid by TypeScript."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"BAD:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Bad!\nfunction foo() {\n    ...\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Good:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const foo = () => {\n    ...\n};\n")),(0,o.kt)("p",null,"See also: ",(0,o.kt)("a",{parentName:"p",href:"https://frontarm.com/james-k-nelson/when-to-use-arrow-functions/"},"Frontend Armory \u2014 When should I use arrow functions with React?")),(0,o.kt)("h3",{id:"avoid-default-and-optional-parameters"},"Avoid default and optional parameters"),(0,o.kt)("p",null,"As much as possible, avoid default parameters in ",(0,o.kt)("strong",{parentName:"p"},"function definitions")," and optional fields in ",(0,o.kt)("strong",{parentName:"p"},"interface definitions"),". When all parameters are required, it is much easier to refactor the code because the compiler will automatically catch any missing parameters."),(0,o.kt)("h2",{id:"escape-variables"},"Escape variables"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html"},"XSS")," is one of the most common vulnerabilities in today's code. These vulnerabilities are often difficult to spot because they are not errors, they often won't fail any test units and the program will work just fine with 99% of input. Yet that remaining 1% can be exploited and used to steal user information, crash the app, etc."),(0,o.kt)("p",null,"If you search for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/laurent22/joplin/search?q=xss&type=commits"},'"XSS" in the Joplin git log')," you'll find several security vulnerabilities that have been fixed over the year, and that happened in various places that are hard to predict. So we need to be careful with this and make sure we correctly escape user content."),(0,o.kt)("p",null,"We should do so even if we think we control the input or that it will always have a certain format. That may change in the future, or that could be exploited via another bug."),(0,o.kt)("p",null,"Finally, escaping data is often required to prevent markup code from breaking. For example quotes or angled brackets have to be escaped in HTML or else the markup is likely to break."),(0,o.kt)("p",null,"How you escape the data depends on where you are going to insert it so there's no single function that's going to cover all cases."),(0,o.kt)("h3",{id:"to-insert-into-a-js-script"},"To insert into a JS script"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.stringify()"),". For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const jsCode = `const data = ${JSON.stringify(dynamicallyGeneratedData)};`\n")),(0,o.kt)("h3",{id:"to-insert-into-an-html-string"},"To insert into an HTML string"),(0,o.kt)("p",null,"You need to convert special characters to HTML entities, which we usually do using the ",(0,o.kt)("inlineCode",{parentName:"p"},"html-entities")," package. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Historically we used a conversion of the PHP `htmlentities` function, thus the\n// unusual (non-camelCase) name but since a lot of code use that function we keep\n// it that way.\nimport { htmlentities } from '@joplin/utils/html';\nconst html = `<a href=\"${htmlentities(attributes)}\">${htmlentities(content)}</a>`;\n")),(0,o.kt)("h3",{id:"to-insert-into-a-url"},"To insert into a URL"),(0,o.kt)("p",null,"It depends on what you're trying to do. To insert a query parameter, use ",(0,o.kt)("inlineCode",{parentName:"p"},"encodeURIComponent")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const url = `https://example.com/?page=${encodeURIComponent(page)}`;\n")),(0,o.kt)("p",null,"If you want to encode a full URL, use ",(0,o.kt)("inlineCode",{parentName:"p"},"encodeURI"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"encodeURI('https://domain.com/path to a document.pdf');\n// 'https://domain.com/path%20to%20a%20document.pdf'\n")),(0,o.kt)("h3",{id:"to-insert-into-markdown-code"},"To insert into Markdown code"),(0,o.kt)("p",null,"Use the provided escape functions in ",(0,o.kt)("inlineCode",{parentName:"p"},"lib/markdownUtils"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"escapeTableCell()")," for tables"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"escapeInlineCode()")," for inline code"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"escapeTitleText()"),"and ",(0,o.kt)("inlineCode",{parentName:"li"},"escapeLinkUrl()")," for links:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const markdown = `[${markdownUtils.escapeTitleText(linkTitle)}](${markdownUtils.escapeLinkUrl(linkUrl)})`;\n")),(0,o.kt)("h3",{id:"escape-as-late-as-possible"},"Escape as late as possible"),(0,o.kt)("p",null,"Ideally the application should only deal with raw, unencoded data, so it means data should be decoded and encoded at the application boundaries. Doing so means we avoid accidentally double-escaping data, or having to encode/decode within the app, which is error prone."),(0,o.kt)("p",null,"In practice it means as soon as we get user input, we should decode it to the application-specific format (for example by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.parse")," on the input). And likewise we should only escape the data when it needs to be printed or exported."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"BAD")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let parameters = `id=${encodeURIComponent(id)}&time=${encodeURIComponent(Date.now())}`;\n\n// Clumsy string concatenation because we're dealing with already escaped data.\n// and we have to remember to encode every time:\nparameters += `&other=${encodeURIComponent(otherParam)}`; \n\nconst url = `https://example.com?${parameters}`\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"GOOD")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Keep the data as an object\nconst parameters = {\n    id: id,\n    timestamp: Date.now(),\n};\n\n// Then we can easily add to it without string concatenation:\nparameters.other = otherParam;\n\n// We escape only when it is needed:\nconst url = `https://example.com?${new URLSearchParams(parameters).toString()}`\n")),(0,o.kt)("h3",{id:"make-wrong-code-look-wrong"},"Make wrong code look wrong"),(0,o.kt)("p",null,'To name variables that are already escaped we used the technique described in "',(0,o.kt)("a",{parentName:"p",href:"https://www.joelonsoftware.com/2005/05/11/making-wrong-code-look-wrong/"},"Make wrong code look wrong"),'". We add a suffix to indicate the content of the variable and to make it clear it has already been escaped. It means that the code will look wrong if a variable is inserted in a string and it does not have a suffix. For example:'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"BAD:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const userContent = queryParameters.page;\n\n// ...\n// later:\n// ...\n\nconst html = `<div>${userContent}</div>`\n\n// The above code looks wrong because it appears we're\n// inserting user input as is in the document, and\n// indeed we are. Wrong code looks wrong.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"GOOD:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// Here we escape the data immediately - and we add an\n// "html" prefix to specify that we have escaped the data\n// and that the variable content is actual HTML.\nconst userContentHtml = htmlentities(queryParameters.page);\n\n// ...\n// later:\n// ...\n\nconst html = `<div>${userContentHtml}</div>`\n\n// This is correct and because we\'ve added the "html" suffix\n// we know that this variable can be safely added to an HTML\n// string.\n')),(0,o.kt)("h2",{id:"react"},"React"),(0,o.kt)("h3",{id:"use-function-components-for-new-code"},"Use function components for new code"),(0,o.kt)("p",null,"New code should use ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"React Hooks")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"function")," components, rather than objects that extend ",(0,o.kt)("inlineCode",{parentName:"p"},"Component"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Bad:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// Don't do this in new code!\nclass Example extends React.Component {\n    public constructor(props: { text: string }) {\n        super(props);\n    }\n\n    public render() {\n        return (\n            <div>${text}</div>\n        );\n    }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Good:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const Example = (props: { text: string }) => {\n    return (\n        <div>${text}</div>\n    );\n};\n")),(0,o.kt)("h3",{id:"use-react-custom-hooks-to-simplify-long-code"},"Use react ",(0,o.kt)("a",{parentName:"h3",href:"https://reactjs.org/docs/hooks-custom.html"},"custom hooks")," to simplify long code"),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"eslint")," gives an error about ",(0,o.kt)("inlineCode",{parentName:"p"},"useFoo")," being called outside of a component, be sure ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/55862839"},"the custom hook is titled appropriately"),"."),(0,o.kt)("h2",{id:"database"},"Database"),(0,o.kt)("h3",{id:"use-snake_case"},"Use snake_case"),(0,o.kt)("p",null,"We use ",(0,o.kt)("inlineCode",{parentName:"p"},"snake_case")," for table names and column names."),(0,o.kt)("h3",{id:"everything-is-not-null"},"Everything is NOT NULL"),(0,o.kt)("p",null,"All columns should be defined as ",(0,o.kt)("inlineCode",{parentName:"p"},"NOT NULL"),", possibly with a default value (but see below). This helps keeping queries more simple as we don't have to do check for both ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," or empty string."),(0,o.kt)("h3",{id:"use-defaults-sparingly"},"Use defaults sparingly"),(0,o.kt)("p",null,"Don't automatically give a default value to a column - in many cases it's better to require the user to explicitly set the value, otherwise it will be set to a default they might not know about or want. Exceptions can be less important columns, things like timestamp, or columns that are going to be set by the system."),(0,o.kt)("h3",{id:"use-an-integer-for-enum-like-values"},"Use an integer for enum-like values"),(0,o.kt)("p",null,"If a column can be set to a fixed number of values, please set the type to integer. In code, you would then have a TypeScript enum that defines what each values is for. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export enum Action {\n    Create = 1,\n    Update = 2,\n    Delete = 3,\n}\n")),(0,o.kt)("p",null,"We don't use built-in database enums because they make migrations difficult. They provide added readability when accessing the database directly, but it is not worth the extra trouble."),(0,o.kt)("h3",{id:"prefer-using-tinyint1-to-bool"},"Prefer using ",(0,o.kt)("inlineCode",{parentName:"h3"},"tinyint(1)")," to ",(0,o.kt)("inlineCode",{parentName:"h3"},"bool")),(0,o.kt)("p",null,"Booleans are not a distinct types in many common DBMS, including SQLite (which we use) and MySQL, so prefer using a ",(0,o.kt)("inlineCode",{parentName:"p"},"tinyint(1)")," instead."),(0,o.kt)("h2",{id:"web-requests-and-api"},"Web requests and API"),(0,o.kt)("h3",{id:"use-snake_case-1"},"Use ",(0,o.kt)("inlineCode",{parentName:"h3"},"snake_case")),(0,o.kt)("p",null,"We use ",(0,o.kt)("inlineCode",{parentName:"p"},"snake_case")," for end points and query parameters."),(0,o.kt)("h2",{id:"test-units"},"Test units"),(0,o.kt)("h3",{id:"avoid-mock-objects"},"Avoid mock objects"),(0,o.kt)("p",null,"A tested object might rely on dependencies involving other (complex) objects. To focus solely on the behavior of the object being tested, you substitute these dependencies with mocks, which mimic the behavior of the actual objects."),(0,o.kt)("p",null,"Mocking is useful if the real objects are impractical to incorporate into the unit test."),(0,o.kt)("p",null,"However we should not overuse this pattern because it means real code is not being tested. Instead, when possible try to test the real input and output of the algorithm. Instead of mocking a file write operation for example, create a temp directory and test that the file was actually written to that directory."),(0,o.kt)("p",null,"This is not a hard rule as mocking is sometimes useful, but it should only be used when there's no other option."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Bad:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"jest.spyOn(fs, 'readFile').mockImplementation(() => {\n    return '{ \"version\": 1 }';\n});\n\nconst data = await service.readConfig('/path/to/file.json');\nexpect(data.version).toBe(1);\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Good:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Create the actual file\nawait fs.writeFile('/path/to/file.json', '{ \"version\": 1 }');\n\n// Now you can test the real implementation\nconst data = await service.readConfig('/path/to/file.json');\nexpect(data.version).toBe(1);\n")),(0,o.kt)("h3",{id:"avoid-spying-on-method"},"Avoid spying on method"),(0,o.kt)("p",null,"In unit testing, spying means creating a mock function (a spy) for a specific method of an object."),(0,o.kt)("p",null,"Like mock objects, spies should be avoided whenever possible because they usually test implementation details that may change in the future. And having many spies makes refactoring difficult since we need to update tests that should not have been broken to being with, since the input and output of the algorithm hasn't changed."),(0,o.kt)("p",null,"This is not a hard rule as spies are sometimes useful, but it should only be used when there's no other option."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Bad:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"jest.spyOn(db, 'executeSql').mockReturnValue([\n    [1, 'row 1'],\n    [2, 'row 2'],\n]);\n\nconst rows = await service.fetchAll();\nexpect(rows[0][1]).to('row 1');\nexpect(rows[1][1]).to('row 2');\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Good:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Create the actual rows instead of mocking the data. Of course \n// that requires setting up the database for testing.\nawait service.saveObject('row 1');\nawait service.saveObject('row 2');\n\n// Now you can test the real implementation\nconst rows = await service.fetchAll();\n// ...\n")),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("h3",{id:"other-projects-style-guides"},(0,o.kt)("strong",{parentName:"h3"},"Other")," projects' style guides"),(0,o.kt)("p",null,"We aren't using these guides, but they may still be helpful!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://basarat.gitbook.io/typescript/styleguide"},"TypeScript Deep Dive \u2014 Style Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://google.github.io/styleguide/tsguide.html"},"Google TypeScript style guide"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"See also ",(0,o.kt)("a",{parentName:"li",href:"https://ts.dev/style/#function-expressions"},(0,o.kt)("inlineCode",{parentName:"a"},"ts.dev"),"'s style guide"),", which is based on the Google style guide."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://standardjs.com/rules.html"},"Javascript standardstyle"))),(0,o.kt)("h3",{id:"postsresources-related-to-joplins-style"},"Posts/resources related to Joplin's style"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GSoC: ",(0,o.kt)("a",{parentName:"li",href:"/help/dev/gsoc/gsoc2022/pull_request_guidelines"},"GSoC 2022 pull request guidelines")),(0,o.kt)("li",{parentName:"ul"},"GitHub: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/laurent22/joplin/blob/dev/.eslintrc.js"},(0,o.kt)("inlineCode",{parentName:"a"},".eslintrc.js")))))}u.isMDXComponent=!0}}]);