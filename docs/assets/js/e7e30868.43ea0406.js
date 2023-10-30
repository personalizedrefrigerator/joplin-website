"use strict";(self.webpackChunk_joplin_doc_builder=self.webpackChunk_joplin_doc_builder||[]).push([[1561],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3400:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return d}});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_label:"Searching",title:"Searching",description:"Joplin implements the SQLite Full Text Search (FTS4) extension. It means the content of all the notes is indexed in real time and search queries return results very fast. Both Simple FTS Queries an..."},o="Searching",i={unversionedId:"apps/search",id:"apps/search",title:"Searching",description:"Joplin implements the SQLite Full Text Search (FTS4) extension. It means the content of all the notes is indexed in real time and search queries return results very fast. Both Simple FTS Queries an...",source:"@site/help/apps/search.md",sourceDirName:"apps",slug:"/apps/search",permalink:"/help/apps/search",draft:!1,editUrl:"https://github.com/laurent22/joplin/tree/dev/readme/apps/search.md",tags:[],version:"current",frontMatter:{sidebar_label:"Searching",title:"Searching",description:"Joplin implements the SQLite Full Text Search (FTS4) extension. It means the content of all the notes is indexed in real time and search queries return results very fast. Both Simple FTS Queries an..."},sidebar:"helpSidebar",previous:{title:"About the Rich Text editor",permalink:"/help/apps/rich_text_editor"},next:{title:"Sharing a notebook with Joplin Cloud",permalink:"/help/apps/share_notebook"}},s={},d=[{value:"Supported queries",id:"supported-queries",level:2},{value:"Search filters",id:"search-filters",level:2},{value:"Search order",id:"search-order",level:2},{value:"Goto Anything",id:"goto-anything",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"searching"},"Searching"),(0,r.kt)("div",{className:"donate-links"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.paypal.com/donate/?business=E8JMYD2LQ8MMA&no_recurring=0&item_name=I+rely+on+donations+to+maintain+and+improve+the+Joplin+open+source+project.+Thank+you+for+your+help+-+it+makes+a+difference%21&currency_code=EUR"},(0,r.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-PayPal-green.svg",alt:"Donate using PayPal"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sponsors/laurent22/"},(0,r.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/GitHub-Badge.svg",alt:"Sponsor on GitHub"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://www.patreon.com/joplin"},(0,r.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Patreon-Badge.svg",alt:"Become a patron"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://joplinapp.org/donate/#donations"},(0,r.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-IBAN.svg",alt:"Donate using IBAN"})))),(0,r.kt)("p",null,"Joplin implements the SQLite Full Text Search (FTS4) extension. It means the content of all the notes is indexed in real time and search queries return results very fast. Both ",(0,r.kt)("a",{parentName:"p",href:"https://www.sqlite.org/fts3.html#simple_fts_queries"},"Simple FTS Queries")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.sqlite.org/fts3.html#full_text_index_queries"},"Full-Text Index Queries")," are supported. See below for the list of supported queries:"),(0,r.kt)("p",null,"One caveat of SQLite FTS is that it does not support languages which do not use Latin word boundaries (spaces, tabs, punctuation). To solve this issue, Joplin has a custom search mode, that does not use FTS, but still has all of its features (multi term search, filters, etc.). One of its drawbacks is that it can get slow on larger note collections. Also, the sorting of the results will be less accurate, as the ranking algorithm (BM25) is, for now, only implemented for FTS. Finally, in this mode there are no restrictions on using the ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," wildcard (",(0,r.kt)("inlineCode",{parentName:"p"},"swim*"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"*swim")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ast*rix")," all work). This search mode is currently enabled if one of the following languages are detected:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chinese"),(0,r.kt)("li",{parentName:"ul"},"Japanese"),(0,r.kt)("li",{parentName:"ul"},"Korean"),(0,r.kt)("li",{parentName:"ul"},"Thai")),(0,r.kt)("h2",{id:"supported-queries"},"Supported queries"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Search type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Single word"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns all the notes that contain this term."),(0,r.kt)("td",{parentName:"tr",align:null},"For example, searching for ",(0,r.kt)("inlineCode",{parentName:"td"},"cat"),' will return all the notes that contain this exact word. Note: it will not return the notes that contain the substring - thus, for "cat", notes that contain "cataclysmic" or "prevaricate" will ',(0,r.kt)("strong",{parentName:"td"},"not")," be returned.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Multiple word"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns all the notes that contain ",(0,r.kt)("strong",{parentName:"td"},"all")," these words, but not necessarily next to each other."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dog cat"),' - will return any notes that contain the words "dog" and "cat" anywhere in the note, no necessarily in that order nor next to each other. It will ',(0,r.kt)("strong",{parentName:"td"},"not"),' return results that contain "dog" or "cat" only.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Phrase"),(0,r.kt)("td",{parentName:"tr",align:null},"Add double quotes to return the notes that contain exactly this phrase."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"shopping list"')," - will return the notes that contain these ",(0,r.kt)("strong",{parentName:"td"},"exact terms")," next to each other and in this order. It will ",(0,r.kt)("strong",{parentName:"td"},"not"),' return for example a note that contains "going shopping with my list".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("td",{parentName:"tr",align:null},"Add a wildcard to return all the notes that contain a term with a specified prefix."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"swim*"),' - will return all the notes that contain eg. "swim", but also "swimming", "swimsuit", etc. IMPORTANT: The wildcard ',(0,r.kt)("strong",{parentName:"td"},"can only be at the end")," - it will be ignored at the beginning of a word (eg. ",(0,r.kt)("inlineCode",{parentName:"td"},"*swim"),") and will be treated as a literal asterisk in the middle of a word (eg. ",(0,r.kt)("inlineCode",{parentName:"td"},"ast*rix"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Switch to basic search"),(0,r.kt)("td",{parentName:"tr",align:null},"One drawback of Full Text Search is that it ignores most non-alphabetical characters. However in some cases you might want to search for this too. To do that, you can use basic search. You switch to this mode by prefixing your search with a slash ",(0,r.kt)("inlineCode",{parentName:"td"},"/"),". This won't provide the benefits of FTS but it will allow searching exactly for what you need. Note that it can also be much slower, even extremely slow, depending on your query."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'/"- [ ]"')," - will return all the notes that contain unchecked checkboxes.")))),(0,r.kt)("h2",{id:"search-filters"},"Search filters"),(0,r.kt)("p",null,"You can also use search filters to further restrict the search."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"-")),(0,r.kt)("td",{parentName:"tr",align:null},"If placed before a text term, it excludes the notes that contain that term. You can also place it before a filter to negate it."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-spam")," searches for all notes without the word ",(0,r.kt)("inlineCode",{parentName:"td"},"spam"),".",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"office -trash")," searches for all notes with the word ",(0,r.kt)("inlineCode",{parentName:"td"},"office")," and without the word ",(0,r.kt)("inlineCode",{parentName:"td"},"trash"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"any:")),(0,r.kt)("td",{parentName:"tr",align:null},"Return notes that satisfy any/all of the required conditions. ",(0,r.kt)("inlineCode",{parentName:"td"},"any:0")," is the default, which means all conditions must be satisfied."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any:1 cat dog")," will return notes that have the word ",(0,r.kt)("inlineCode",{parentName:"td"},"cat")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"dog"),".",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"any:0 cat dog")," will return notes with both the words ",(0,r.kt)("inlineCode",{parentName:"td"},"cat")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"dog"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"title:")," ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"body:")),(0,r.kt)("td",{parentName:"tr",align:null},"Restrict your search to just the title or the body field."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'title:"hello world"')," searches for notes whose title contains ",(0,r.kt)("inlineCode",{parentName:"td"},"hello")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"world"),".",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"title:hello -body:world")," searches for notes whose title contains ",(0,r.kt)("inlineCode",{parentName:"td"},"hello")," and body does not contain ",(0,r.kt)("inlineCode",{parentName:"td"},"world"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"tag:")),(0,r.kt)("td",{parentName:"tr",align:null},"Restrict the search to the notes with the specified tags."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tag:office")," searches for all notes having tag office.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"tag:office tag:important")," searches for all notes having both office and important tags.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"tag:office -tag:spam")," searches for notes having tag ",(0,r.kt)("inlineCode",{parentName:"td"},"office")," which do not have tag ",(0,r.kt)("inlineCode",{parentName:"td"},"spam"),".",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"any:1 tag:office tag:spam")," searches for notes having tag ",(0,r.kt)("inlineCode",{parentName:"td"},"office")," or tag ",(0,r.kt)("inlineCode",{parentName:"td"},"spam"),".",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"tag:be*ful")," does a search with wildcards.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"tag:*")," returns all notes with tags.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-tag:*")," returns all notes without tags.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"notebook:")),(0,r.kt)("td",{parentName:"tr",align:null},"Restrict the search to the specified notebook(s)."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"notebook:books")," limits the search scope within ",(0,r.kt)("inlineCode",{parentName:"td"},"books")," and all its subnotebooks.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"notebook:wheel*time")," does a wildcard search.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"created:")," ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"updated:")," ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"due:")),(0,r.kt)("td",{parentName:"tr",align:null},"Searches for notes created/updated on dates specified using YYYYMMDD format. You can also search relative to the current day, week, month, or year."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"created:20201218")," will return notes created on or after December 18, 2020.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-updated:20201218")," will return notes updated before December 18, 2020.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"created:20200118 -created:20201215")," will return notes created between January 18, 2020, and before December 15, 2020.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"created:202001 -created:202003")," will return notes created on or after January and before March 2020.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"updated:1997 -updated:2020")," will return all notes updated between the years 1997 and 2019.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"created:day-2")," searches for all notes created in the past two days.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"updated:year-0")," searches all notes updated in the current year.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-due:day+7")," will return all todos which are due or will be due in the next seven days.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-due:day-5")," searches all todos that are overdue for more than 5 days.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"type:")),(0,r.kt)("td",{parentName:"tr",align:null},"Restrict the search to either notes or todos."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type:note")," to return all notes",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"type:todo")," to return all todos")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"iscompleted:")),(0,r.kt)("td",{parentName:"tr",align:null},"Restrict the search to either completed or uncompleted todos."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"iscompleted:1")," to return all completed todos",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"iscompleted:0")," to return all uncompleted todos")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"latitude:")," ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"longitude:")," ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"altitude:")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter by location"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"latitude:40 -latitude:50")," to return notes with latitude ",">","= 40 and ","<"," 50")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"resource:")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter by attachment MIME type"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resource:image/jpeg")," to return notes with a jpeg attachment.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-resource:application/pdf")," to return notes without a pdf attachment.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"resource:image/*")," to return notes with any images.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"sourceurl:")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter by source URL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sourceurl:https://www.google.com"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"sourceurl:*joplinapp.org")," to perform a wildcard search.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"id:")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter by note ID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id:9cbc1b4f242043a9b8a50627508bccd5")," return a note with the specified id")))),(0,r.kt)("p",null,"Note: In the CLI client you have to escape the query using ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," when using negated filters.Eg. ",(0,r.kt)("inlineCode",{parentName:"p"},':search -- "-tag:tag1"'),"."),(0,r.kt)("p",null,"The filters are implicitly connected by and/or connectives depending on the following rules:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'By default, all filters are connected by "AND".'),(0,r.kt)("li",{parentName:"ul"},"To override this default behaviour, use the ",(0,r.kt)("inlineCode",{parentName:"li"},"any"),' filter, in which case the search terms will be connected by "OR" instead.'),(0,r.kt)("li",{parentName:"ul"},"There's an exception for the ",(0,r.kt)("inlineCode",{parentName:"li"},"notebook"),' filters which are connected by "OR". The reason being that no note can be in multiple notebooks at once.')),(0,r.kt)("p",null,"Incorrect search filters are interpreted as a phrase search, e.g. misspelled ",(0,r.kt)("inlineCode",{parentName:"p"},"nootebook:Example")," or non-existing ",(0,r.kt)("inlineCode",{parentName:"p"},"https://joplinapp.org"),"."),(0,r.kt)("h2",{id:"search-order"},"Search order"),(0,r.kt)("p",null,'Notes are sorted by "relevance". Currently it means the notes that contain the requested terms the most times are on top. For queries with multiple terms, it also matters how close to each other the terms are. This is a bit experimental so if you notice a search query that returns unexpected results, please report it in the forum, providing as many details as possible to replicate the issue.'),(0,r.kt)("h2",{id:"goto-anything"},"Goto Anything"),(0,r.kt)("p",null,"In the desktop application, press ",(0,r.kt)("kbd",null,"Ctrl+P")," or ",(0,r.kt)("kbd",null,"Cmd+P")," and type a note title or part of its content to jump to it. Or type ",(0,r.kt)("kbd",null,"#")," followed by a tag name, or ",(0,r.kt)("kbd",null,"@")," followed by a notebook name."))}c.isMDXComponent=!0}}]);