"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[724],{"./src/components/Switches/LanguageSwitch/LanguageSwitch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,languageSwitch:()=>languageSwitch});const __WEBPACK_DEFAULT_EXPORT__={title:"Компоненты/Switches/LanguageSwitch",component:__webpack_require__("./src/components/Switches/LanguageSwitch/LanguageSwitch.tsx").U,tags:["autodocs"]};var languageSwitch={};languageSwitch.parameters={...languageSwitch.parameters,docs:{...languageSwitch.parameters?.docs,source:{originalSource:"{}",...languageSwitch.parameters?.docs?.source}}};const __namedExportsOrder=["languageSwitch"]},"./src/components/Switches/LanguageSwitch/LanguageSwitch.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>LanguageSwitch_LanguageSwitch_LanguageSwitch});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),i18next=__webpack_require__("./node_modules/i18next/dist/esm/i18next.js"),Locale=function(Locale){return Locale.Ru="Ru",Locale.En="En",Locale}({});i18next.ZP.use(es.Db).init({resources:{Ru:{translation:{account:{title:"Учётная запись",signIn:"Войти",signUp:"Зарегистрироваться"},logo:{title:"Нужные вещи"},search:{placeholder:"Поиск..."},navbar:{home:"Главная",about:"О нас",contact:"Контакты",payment:"Оплата",delivery:"Доставка",catalog:"Каталог",notebook:"Ноутбуки",phone:"Телефоны",accessories:"Аксессуары",power:"Зарядные устройства",cable:"Кабели",cover:"Чехлы",account:"Профиль",cart:"Корзина"},errors:{is_required:"необходимо заполнить",not_same_password:"пароли не совпадают",is_not_valid_email:"Не верный формат email",number_is_lower_then_zero:"Число должно быть больше нуля"},forms:{ProfileForm:{Name:{title:"Псевдоним",placeholder:"Придумайте себе псевдоним"},About:{title:"О себе",placeholder:"Напишите что-нибудь о себе"},Button:{title:"Сохранить"},Title:"Изменить профиль"},ChangePasswordForm:{Button:{title:"Изменить"},Password:{title:"Пароль",placeholder:"Введите пароль"},NewPassword:{title:"Новый пароль",placeholder:"Новый пароль"},RepeatPassword:{title:"Повторите пароль",placeholder:"Повторите пароль"},Title:"Изменить пароль"},LoginForm:{Title:"Войти",Email:{title:"Email",placeholder:"Укажите email"},Password:{title:"Пароль",placeholder:"Введите пароль"},Button:{title:"Войти"}},ProductForm:{Title:"",Name:{title:"Наименование продукта",placeholder:"Наименование продукта"},Price:{title:"Стоимость продукта",placeholder:"Стоимость продукта"},OldPrice:{title:"Старая стоимость продукта",placeholder:"Старая стоимость продукта"},Description:{title:"Описание",placeholder:"Описание"},Photo:{title:"Ссылка на фото",placeholder:"Ссылка на фото"},Category:{title:"Категория",placeholder:"Категория"},Button:{title:"Добавить"}}}}},En:{translation:{account:{title:"Account",signIn:"Sign In",signUp:"Sign Up"},logo:{title:"Vsyakiy hlam"},search:{placeholder:"Search..."},navbar:{home:"Home",about:"About",contact:"Contact",payment:"Payment",delivery:"Delivery",catalog:"Catalog",notebook:"Notebook",phone:"Phone",accessories:"Accessories",power:"Power",cable:"Cable",cover:"Cover",account:"Account",cart:"Cart"},errors:{is_required:"required",not_same_password:"not same password",is_not_valid_email:"Email is not valid",number_is_lower_then_zero:"Number need to be upper then zero"},forms:{ProfileForm:{Name:{title:"Nickname",placeholder:"Come up with a pseudonym for yourself"},About:{title:"About",placeholder:"Write something about yourself"},Button:{title:"Save"},Title:"Change profile"},ChangePasswordForm:{Button:{title:"Change"},Password:{title:"Password",placeholder:"Enter password"},NewPassword:{title:"New password",placeholder:"New password"},RepeatPassword:{title:"Repeat password",placeholder:"Repeat password"},Title:"Change password"},LoginForm:{Title:"Sign in",Email:{title:"Email",placeholder:"Enter email"},Password:{title:"Password",placeholder:"Enter password"},Button:{title:"Sign in"}},ProductForm:{Title:"",Name:{title:"Name",placeholder:"Name"},Price:{title:"Price",placeholder:"Price"},OldPrice:{title:"Old price",placeholder:"Old price"},Description:{title:"Description",placeholder:"Description"},Photo:{title:"Photo url",placeholder:"Photo url"},Category:{title:"Category",placeholder:"Category"},Button:{title:"Add"}}}}}},lng:localStorage.getItem("Lang")||Locale.Ru,interpolation:{escapeValue:!1}});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),LanguageSwitch=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Switches/LanguageSwitch/LanguageSwitch.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(LanguageSwitch.Z,options);LanguageSwitch.Z&&LanguageSwitch.Z.locals&&LanguageSwitch.Z.locals;var LanguageSwitch_LanguageSwitch_LanguageSwitch=function LanguageSwitch(){var i18n=(0,es.$G)().i18n,lang=i18n.language;return react.createElement("div",{className:"lang-switch d-flex justify-content-center"},react.createElement("a",{onClick:function changeLangHandler(){i18n.changeLanguage(lang===Locale.Ru?Locale.En:Locale.Ru)}},react.createElement("i",null,lang)))};try{LanguageSwitch_LanguageSwitch_LanguageSwitch.displayName="LanguageSwitch",LanguageSwitch_LanguageSwitch_LanguageSwitch.__docgenInfo={description:"",displayName:"LanguageSwitch",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Switches/LanguageSwitch/LanguageSwitch.tsx#LanguageSwitch"]={docgenInfo:LanguageSwitch_LanguageSwitch_LanguageSwitch.__docgenInfo,name:"LanguageSwitch",path:"src/components/Switches/LanguageSwitch/LanguageSwitch.tsx#LanguageSwitch"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Switches/LanguageSwitch/LanguageSwitch.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".lang-switch{list-style:none;margin-bottom:0;padding:0;text-transform:uppercase}.lang-switch a{background-color:var(--accent-color);color:var(--contrast-color);width:30px;height:30px;line-height:30px;border-radius:50%;float:left;text-align:center;cursor:pointer}.lang-switch a:hover{background-color:var(--contrast-color);color:var(--accent-color);transition:all .3s}","",{version:3,sources:["webpack://./src/components/Switches/LanguageSwitch/LanguageSwitch.scss"],names:[],mappings:"AAAA,aACE,eAAA,CACA,eAAA,CACA,SAAA,CACA,wBAAA,CAEA,eACE,oCAAA,CACA,2BAAA,CACA,UAAA,CACA,WAAA,CACA,gBAAA,CACA,iBAAA,CACA,UAAA,CACA,iBAAA,CACA,cAAA,CAEA,qBACE,sCAAA,CACA,yBAAA,CACA,kBAAA",sourcesContent:[".lang-switch {\n  list-style: none;\n  margin-bottom: 0;\n  padding: 0;\n  text-transform: uppercase;\n\n  a {\n    background-color: var(--accent-color);\n    color: var(--contrast-color);\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n    border-radius: 50%;\n    float: left;\n    text-align: center;\n    cursor: pointer;\n\n    &:hover {\n      background-color: var(--contrast-color);\n      color: var(--accent-color);\n      transition: all 0.3s;\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);