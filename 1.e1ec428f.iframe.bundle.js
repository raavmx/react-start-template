/*! For license information please see 1.e1ec428f.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[1],{"./src/components/Header/Header.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>Header_Header_Header});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Header=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Header/Header.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Header.Z,options);Header.Z&&Header.Z.locals&&Header.Z.locals;var Logo=__webpack_require__("./src/components/Logo/Logo.tsx"),ThemeSwitch=__webpack_require__("./src/components/Switches/ThemeSwitch/ThemeSwitch.tsx"),LanguageSwitch=__webpack_require__("./src/components/Switches/LanguageSwitch/LanguageSwitch.tsx"),Navigation=__webpack_require__("./src/components/Navigation/Navigation.tsx"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js");window.addEventListener("scroll",(function(){document.getElementById("header-nav").classList.toggle("header-scroll",window.scrollY>135),console.log("scroll",this.window.scrollY)}));var Header_Header_Header=function Header(){var t=(0,es.$G)().t;return react.createElement("header",{id:"header-nav",className:"header"},react.createElement("div",{className:"col-3"},react.createElement(Logo.T,{title:t("logo.title")})),react.createElement("div",{className:"col-7 "},react.createElement(Navigation.W,null)),react.createElement("div",{className:"col-2"},react.createElement("div",{className:"d-flex justify-content-end"},react.createElement("div",{className:"btn-group me-2"},react.createElement(ThemeSwitch.R,null)),react.createElement("div",{className:"btn-group me-2"},react.createElement(LanguageSwitch.U,null)))))};try{Header_Header_Header.displayName="Header",Header_Header_Header.__docgenInfo={description:"",displayName:"Header",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Header/Header.tsx#Header"]={docgenInfo:Header_Header_Header.__docgenInfo,name:"Header",path:"src/components/Header/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Logo/Logo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>Logo_Logo_Logo});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Logo=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Logo/Logo.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Logo.Z,options);Logo.Z&&Logo.Z.locals&&Logo.Z.locals;const logo_namespaceObject=__webpack_require__.p+"static/media/logo.9fb982fd.svg";var Logo_Logo_Logo=function Logo(_ref){var _ref$title=_ref.title,title=void 0===_ref$title?"store":_ref$title;return react.createElement("a",{href:"/",className:"logo"},react.createElement("img",{src:logo_namespaceObject}),react.createElement("h2",null,title))};try{Logo_Logo_Logo.displayName="Logo",Logo_Logo_Logo.__docgenInfo={description:"",displayName:"Logo",props:{title:{defaultValue:{value:"store"},description:"",name:"title",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Logo/Logo.tsx#Logo"]={docgenInfo:Logo_Logo_Logo.__docgenInfo,name:"Logo",path:"src/components/Logo/Logo.tsx#Logo"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Navigation/Navigation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>Navigation_Navigation_Navigation});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Navigation=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Navigation/Navigation.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Navigation.Z,options);Navigation.Z&&Navigation.Z.locals&&Navigation.Z.locals;var es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),navItems=[{name:"navbar.home"},{name:"navbar.notebook"},{name:"navbar.phone"},{name:"navbar.accessories"},{name:"navbar.contact"}],Navigation_Navigation_Navigation=function Navigation(){var t=(0,es.$G)().t;return react.createElement("nav",{className:"navbar navbar-expand-lg bg-dark","data-bs-theme":"dark"},react.createElement("div",{className:"container-fluid"},react.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasNavbar"},react.createElement("span",{className:"navbar-toggler-icon"})),react.createElement("div",{className:"offcanvas offcanvas-start",id:"offcanvasNavbar",tabIndex:-1,"aria-labelledby":"offcanvasNavbarLabel"},react.createElement("div",{className:"offcanvas-header"},react.createElement("h5",{className:"offcanvas-title",id:"offcanvasNavbarLabel"},"Menu"),react.createElement("button",{className:"btn-close",type:"button","data-bs-dismiss":"offcanvas"})),react.createElement("div",{className:"offcanvas-body"},react.createElement("ul",{className:"navbar-nav"},navItems.map((function(_ref){var name=_ref.name;return react.createElement("li",{key:name,className:"nav-item"},react.createElement("a",{className:"nav-link"},t(name)))})))))))};try{Navigation_Navigation_Navigation.displayName="Navigation",Navigation_Navigation_Navigation.__docgenInfo={description:"",displayName:"Navigation",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navigation/Navigation.tsx#Navigation"]={docgenInfo:Navigation_Navigation_Navigation.__docgenInfo,name:"Navigation",path:"src/components/Navigation/Navigation.tsx#Navigation"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Switches/LanguageSwitch/LanguageSwitch.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>LanguageSwitch_LanguageSwitch_LanguageSwitch});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),i18next=__webpack_require__("./node_modules/i18next/dist/esm/i18next.js"),Locale=function(Locale){return Locale.Ru="Ru",Locale.En="En",Locale}({});i18next.ZP.use(es.Db).init({resources:{Ru:{translation:{account:{title:"Учётная запись",signIn:"Войти",signUp:"Зарегистрироваться"},logo:{title:"Нужные вещи"},search:{placeholder:"Поиск..."},navbar:{home:"Главная",about:"О нас",contact:"Контакты",payment:"Оплата",delivery:"Доставка",catalog:"Каталог",notebook:"Ноутбуки",phone:"Телефоны",accessories:"Аксессуары",power:"Зарядные устройства",cable:"Кабели",cover:"Чехлы"}}},En:{translation:{account:{title:"Account",signIn:"Sign In",signUp:"Sign Up"},logo:{title:"Vsyakiy hlam"},search:{placeholder:"Search..."},navbar:{home:"Home",about:"About",contact:"Contact",payment:"Payment",delivery:"Delivery",catalog:"Catalog",notebook:"Notebook",phone:"Phone",accessories:"Accessories",power:"Power",cable:"Cable",cover:"Cover"}}}},lng:localStorage.getItem("Lang")||Locale.Ru,interpolation:{escapeValue:!1}});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),LanguageSwitch=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Switches/LanguageSwitch/LanguageSwitch.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(LanguageSwitch.Z,options);LanguageSwitch.Z&&LanguageSwitch.Z.locals&&LanguageSwitch.Z.locals;var LanguageSwitch_LanguageSwitch_LanguageSwitch=function LanguageSwitch(){var i18n=(0,es.$G)().i18n,lang=i18n.language;return react.createElement("div",{className:"lang-switch d-flex justify-content-center"},react.createElement("a",{onClick:function changeLangHandler(){i18n.changeLanguage(lang===Locale.Ru?Locale.En:Locale.Ru)}},react.createElement("i",null,lang)))};try{LanguageSwitch_LanguageSwitch_LanguageSwitch.displayName="LanguageSwitch",LanguageSwitch_LanguageSwitch_LanguageSwitch.__docgenInfo={description:"",displayName:"LanguageSwitch",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Switches/LanguageSwitch/LanguageSwitch.tsx#LanguageSwitch"]={docgenInfo:LanguageSwitch_LanguageSwitch_LanguageSwitch.__docgenInfo,name:"LanguageSwitch",path:"src/components/Switches/LanguageSwitch/LanguageSwitch.tsx#LanguageSwitch"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Switches/ThemeSwitch/ThemeSwitch.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>ThemeSwitch_ThemeSwitch_ThemeSwitch});var react=__webpack_require__("./node_modules/react/index.js"),Theme=function(Theme){return Theme.key="theme",Theme.dark="dark",Theme.light="light",Theme}({});function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function ThemeProvider_slicedToArray(r,e){return function ThemeProvider_arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function ThemeProvider_iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function ThemeProvider_unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return ThemeProvider_arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ThemeProvider_arrayLikeToArray(r,a):void 0}}(r,e)||function ThemeProvider_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ThemeProvider_arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var ThemeContext=(0,react.createContext)([]),ThemeProvider=function ThemeProvider(_ref){var children=_ref.children,_useLocalStorage2=ThemeProvider_slicedToArray(function useLocalStorage(key,value){var _useState2=_slicedToArray((0,react.useState)((function(){return localStorage.getItem(key)||value})),2),state=_useState2[0],setState=_useState2[1];return(0,react.useEffect)((function(){localStorage.setItem(key,state)}),[key,state]),[state,setState]}(Theme.key,Theme.light),2),theme=_useLocalStorage2[0],setTheme=_useLocalStorage2[1];return(0,react.useEffect)((function(){theme===Theme.dark?document.body.classList.add(Theme.dark):document.body.classList.remove(Theme.dark)}),[theme]),react.createElement(ThemeContext.Provider,{value:[theme,setTheme]},children)};try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/helper/ThemeProvider.tsx#ThemeProvider"]={docgenInfo:ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"src/helper/ThemeProvider.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ThemeSwitch=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Switches/ThemeSwitch/ThemeSwitch.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ThemeSwitch.Z,options);ThemeSwitch.Z&&ThemeSwitch.Z.locals&&ThemeSwitch.Z.locals;var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);function ThemeSwitch_slicedToArray(r,e){return function ThemeSwitch_arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function ThemeSwitch_iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function ThemeSwitch_unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return ThemeSwitch_arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ThemeSwitch_arrayLikeToArray(r,a):void 0}}(r,e)||function ThemeSwitch_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ThemeSwitch_arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var ThemeSwitcherElement=function ThemeSwitcherElement(){var _useContext2=ThemeSwitch_slicedToArray((0,react.useContext)(ThemeContext),2),theme=_useContext2[0],setTheme=_useContext2[1];return react.createElement("div",{className:"theme-switch d-flex justify-content-center"},react.createElement("a",{onClick:function changeThemeHandler(){setTheme("light"===theme?"dark":"light")}},react.createElement("i",{className:classnames_default()("fa-regular","".concat("light"===theme?"fa-moon":"fa-sun"))})))},ThemeSwitch_ThemeSwitch_ThemeSwitch=function ThemeSwitch(){return react.createElement(ThemeProvider,null,react.createElement(ThemeSwitcherElement,null))};try{ThemeSwitch_ThemeSwitch_ThemeSwitch.displayName="ThemeSwitch",ThemeSwitch_ThemeSwitch_ThemeSwitch.__docgenInfo={description:"",displayName:"ThemeSwitch",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Switches/ThemeSwitch/ThemeSwitch.tsx#ThemeSwitch"]={docgenInfo:ThemeSwitch_ThemeSwitch_ThemeSwitch.__docgenInfo,name:"ThemeSwitch",path:"src/components/Switches/ThemeSwitch/ThemeSwitch.tsx#ThemeSwitch"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Header/Header.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".header{width:100%;height:100px;position:fixed;top:0;background-color:var(--nav-bg-color);color:var(--nav-color);display:flex;align-items:center;transition:all .3s;z-index:1000}","",{version:3,sources:["webpack://./src/components/Header/Header.scss"],names:[],mappings:"AAAA,QACE,UAAA,CACA,YAAA,CACA,cAAA,CACA,KAAA,CACA,oCAAA,CACA,sBAAA,CACA,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,YAAA",sourcesContent:[".header {\n  width: 100%;\n  height: 100px;\n  position: fixed;\n  top: 0;\n  background-color: var(--nav-bg-color);\n  color: var(--nav-color);\n  display: flex;\n  align-items: center; \n  transition: all .3s;\n  z-index: 1000;\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Logo/Logo.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".logo{width:100%;height:100%;text-decoration:none;text-transform:uppercase;color:#000;display:flex;align-items:center}.logo img{height:40px;width:40px;margin:0 30px}","",{version:3,sources:["webpack://./src/components/Logo/Logo.scss"],names:[],mappings:"AAAA,MACE,UAAA,CACA,WAAA,CACA,oBAAA,CACA,wBAAA,CACA,UAAA,CACA,YAAA,CACA,kBAAA,CAGF,UACE,WAAA,CACA,UAAA,CACA,aAAA",sourcesContent:[".logo {\n  width: 100%;\n  height: 100%;\n  text-decoration: none;\n  text-transform: uppercase;\n  color: #000000;\n  display: flex;\n  align-items: center;\n}\n\n.logo img {\n  height: 40px;\n  width: 40px;\n  margin: 0 30px;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Navigation/Navigation.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".navbar{background-color:var(--bkg-color) !important}.navbar .nav-item .nav-link{color:var(--nav-color);transition:.3s all;letter-spacing:.1rem;cursor:pointer}@media only screen and (min-width: 992px){.navbar .nav-item .nav-link{padding:1rem}}.navbar .nav-item .nav-link:hover{color:var(--accent-color)}.navbar .nav-item .active{color:var(--accent-color)}.navbar .nav-item:first-child .nav-link{padding-left:0}.navbar .nav-item .dropdown-menu{background-color:var(--contrast-color) !important;margin-top:7px}@media only screen and (max-width: 991.98px){.navbar .nav-item .dropdown-menu{padding-left:1rem}}@media only screen and (min-width: 992px){.navbar .nav-item .dropdown-menu-end{margin-left:0;border:0}}.navbar .dropdown{cursor:pointer}","",{version:3,sources:["webpack://./src/components/Navigation/Navigation.scss"],names:[],mappings:"AAAA,QACE,4CAAA,CAGE,4BAKE,sBAAA,CACA,kBAAA,CACA,oBAAA,CACA,cAAA,CAPA,0CADF,4BAEI,YAAA,CAAA,CAQF,kCACE,yBAAA,CAIJ,0BACE,yBAAA,CAIA,wCACE,cAAA,CAIJ,iCACE,iDAAA,CACA,cAAA,CACA,6CAHF,iCAII,iBAAA,CAAA,CAKF,0CADF,qCAEI,aAAA,CACA,QAAA,CAAA,CAKN,kBACE,cAAA",sourcesContent:[".navbar {\n  background-color: var(--bkg-color) !important;\n\n  .nav-item {\n    .nav-link {\n      @media only screen and (min-width: 992px) {\n        padding: 1rem;\n      }\n\n      color:var(--nav-color);\n      transition: 0.3s all;\n      letter-spacing: 0.1rem;\n      cursor: pointer;\n\n      &:hover {\n        color: var(--accent-color);\n      }\n    }\n\n    .active {\n      color: var(--accent-color);\n    }\n\n    &:first-child {\n      .nav-link {\n        padding-left: 0;\n      }\n    }\n\n    .dropdown-menu {\n      background-color: var(--contrast-color) !important;\n      margin-top: 7px;\n      @media only screen and (max-width: 991.98px) {\n        padding-left: 1rem;\n      }\n    }\n\n    .dropdown-menu-end {\n      @media only screen and (min-width: 992px) {\n        margin-left: 0;\n        border: 0;\n      }\n    }\n  }\n\n  .dropdown {\n    cursor: pointer;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Switches/LanguageSwitch/LanguageSwitch.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".lang-switch{list-style:none;margin-bottom:0;padding:0;text-transform:uppercase}.lang-switch a{background-color:var(--accent-color);color:var(--contrast-color);width:30px;height:30px;line-height:30px;border-radius:50%;float:left;text-align:center;cursor:pointer}.lang-switch a:hover{background-color:var(--contrast-color);color:var(--accent-color);transition:all .3s}","",{version:3,sources:["webpack://./src/components/Switches/LanguageSwitch/LanguageSwitch.scss"],names:[],mappings:"AAAA,aACE,eAAA,CACA,eAAA,CACA,SAAA,CACA,wBAAA,CAEA,eACE,oCAAA,CACA,2BAAA,CACA,UAAA,CACA,WAAA,CACA,gBAAA,CACA,iBAAA,CACA,UAAA,CACA,iBAAA,CACA,cAAA,CAEA,qBACE,sCAAA,CACA,yBAAA,CACA,kBAAA",sourcesContent:[".lang-switch {\n  list-style: none;\n  margin-bottom: 0;\n  padding: 0;\n  text-transform: uppercase;\n\n  a {\n    background-color: var(--accent-color);\n    color: var(--contrast-color);\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n    border-radius: 50%;\n    float: left;\n    text-align: center;\n    cursor: pointer;\n\n    &:hover {\n      background-color: var(--contrast-color);\n      color: var(--accent-color);\n      transition: all 0.3s;\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Switches/ThemeSwitch/ThemeSwitch.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".theme-switch{margin-bottom:0;padding:0}.theme-switch a{background-color:var(--accent-color);color:var(--contrast-color);width:30px;height:30px;line-height:30px;border-radius:50%;float:left;text-align:center;cursor:pointer}.theme-switch a:hover{background-color:var(--contrast-color);color:var(--accent-color);transition:all .3s}","",{version:3,sources:["webpack://./src/components/Switches/ThemeSwitch/ThemeSwitch.scss"],names:[],mappings:"AAAA,cACE,eAAA,CACA,SAAA,CAEA,gBACE,oCAAA,CACA,2BAAA,CACA,UAAA,CACA,WAAA,CACA,gBAAA,CACA,iBAAA,CACA,UAAA,CACA,iBAAA,CACA,cAAA,CAEA,sBACE,sCAAA,CACA,yBAAA,CACA,kBAAA",sourcesContent:[".theme-switch {\n  margin-bottom: 0;\n  padding: 0;\n\n  a {\n    background-color: var(--accent-color);\n    color: var(--contrast-color);\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n    border-radius: 50%;\n    float: left;\n    text-align: center;\n    cursor: pointer;\n\n    &:hover {\n      background-color: var(--contrast-color);\n      color: var(--accent-color);\n      transition: all 0.3s;\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);