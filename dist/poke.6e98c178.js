parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"VQiw":[function(require,module,exports) {
module.exports="/001-pokedex.47c3cd27.svg";
},{}],"tR5B":[function(require,module,exports) {
module.exports="/002-lucha.f40ca861.svg";
},{}],"s39F":[function(require,module,exports) {
module.exports="/003-brujula.ba6d3da3.svg";
},{}],"ED6i":[function(require,module,exports) {
module.exports="/004-pokemon.daf1e068.svg";
},{}],"t8a5":[function(require,module,exports) {
module.exports="/005-pokemon-1.4be504d4.svg";
},{}],"v7Yn":[function(require,module,exports) {
module.exports="/006-camara.34834b1d.svg";
},{}],"Adg4":[function(require,module,exports) {
module.exports="/007-pokemon-2.08f75dd4.svg";
},{}],"BXxM":[function(require,module,exports) {
module.exports="/008-tacho-de-reciclaje.169b79cc.svg";
},{}],"Dy53":[function(require,module,exports) {
module.exports="/pokemon.45c07ecd.svg";
},{}],"vamZ":[function(require,module,exports) {
module.exports={"001-pokedex":require("./001-pokedex.svg"),"002-lucha":require("./002-lucha.svg"),"003-brujula":require("./003-brujula.svg"),"004-pokemon":require("./004-pokemon.svg"),"005-pokemon-1":require("./005-pokemon-1.svg"),"006-camara":require("./006-camara.svg"),"007-pokemon-2":require("./007-pokemon-2.svg"),"008-tacho-de-reciclaje":require("./008-tacho-de-reciclaje.svg"),pokemon:require("./pokemon.svg")};
},{"./001-pokedex.svg":"VQiw","./002-lucha.svg":"tR5B","./003-brujula.svg":"s39F","./004-pokemon.svg":"ED6i","./005-pokemon-1.svg":"t8a5","./006-camara.svg":"v7Yn","./007-pokemon-2.svg":"Adg4","./008-tacho-de-reciclaje.svg":"BXxM","./pokemon.svg":"Dy53"}],"KUgd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.imagesSvg=exports.body=exports.landscape=exports.btn=exports.lista=void 0;const e=document.querySelector(".pokeContainer");exports.lista=e;const t=document.querySelector("[name=accion]");exports.btn=t;const o=document.querySelector(".landscapeContainer");exports.landscape=o;const s=document.querySelector("body");exports.body=s;const r=require("../images/buttons/*.svg");exports.imagesSvg=r;
},{"../images/buttons/*.svg":"vamZ"}],"oCgX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Pokemon=exports.bench=void 0;const e=JSON.parse(localStorage.getItem("professorStorage"))||{};exports.bench=e;class t{constructor(e){this.name=e.name,this.id=e.id,this.sprites={},this.state={color:"default",sex:"male",position:"front"}}}exports.Pokemon=t;
},{}],"mFd3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.rotatePokemon=t,exports.changeColor=s,exports.changeSex=n,exports.bye=o;var e=require("./pokeBenchState");function t(t){if("rotate"===t.target.classList[0]){const s=t.target.parentElement.classList[0];console.log(`${s} rotate now!`);const n=e.bench[s].state;"front"===n.position?(t.target.parentElement.firstElementChild.src=e.bench[s].sprites[n.color][n.sex].back,n.position="back"):(t.target.parentElement.firstElementChild.src=e.bench[s].sprites[n.color][n.sex].front,n.position="front")}}function s(t){if("color"===t.target.classList[0]){const s=t.target.parentElement.classList[0],n=e.bench[s].state;"shiny"===n.color?(console.log(`${s} change color!`),t.target.parentElement.firstElementChild.src=e.bench[s].sprites.default[n.sex][n.position],n.color="default"):(console.log(`${s} shine!`),t.target.parentElement.firstElementChild.src=e.bench[s].sprites.shiny[n.sex][n.position],n.color="shiny")}}function n(t){if("sex"===t.target.classList[0]){const s=t.target.parentElement.classList[0],n=e.bench[s].state;"female"===n.sex?(console.log(`${s} male version!`),t.target.parentElement.firstElementChild.src=e.bench[s].sprites[n.color].male[n.position],n.sex="male"):(console.log(`${s} female version!`),t.target.parentElement.firstElementChild.src=e.bench[s].sprites[n.color].female[n.position],n.sex="female")}}function o(e){"bye"===e.target.classList[0]&&(e.target.parentElement.style.display="none")}
},{"./pokeBenchState":"oCgX"}],"HeVo":[function(require,module,exports) {
"use strict";function e(e){return new Promise(o=>{const t=new XMLHttpRequest;t.onload=(({currentTarget:{response:e}})=>{o(e)}),t.open("GET",`https://pokeapi.co/api/v2/pokemon/${e}`),t.responseType="json",t.send()})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getPokemon=e;
},{}],"ZTJD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.pokemonById=t,exports.getRandomPokemonNumber=r;var e=require("./pokeBenchState.js");function t(t){const r=Object.entries(e.bench).filter(([e,{id:r}])=>r===t||e===t)[0][0];return e.bench[r]}function r(){return Math.floor(806*Math.random()+1)}
},{"./pokeBenchState.js":"oCgX"}],"bgpB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.catchPokemon=t;var e=require("./pokeBenchState"),o=require("./xmlRequest"),n=require("./pokeUtils");function s({sprites:o,name:n}){Object.entries(o).forEach(([o,s])=>{if(!s)return o.includes("female")&&(e.bench[n].state.warning="No female"),void(o.includes("back")&&o.includes("default")&&(e.bench[n].state.warning2="No back"));const t={};o.includes("shiny")?t.color="shiny":t.color="default",o.includes("female")?t.sex="female":t.sex="male",o.includes("front")?t.position="front":t.position="back",void 0===e.bench[n].sprites[t.color]&&(e.bench[n].sprites[t.color]={}),void 0===e.bench[n].sprites[t.color][t.sex]&&(e.bench[n].sprites[t.color][t.sex]={}),void 0===e.bench[n].sprites[t.color][t.sex][t.position]&&(e.bench[n].sprites[t.color][t.sex][t.position]={}),e.bench[n].sprites[t.color][t.sex][t.position]=s})}async function t(t){return Object.entries(e.bench).some(([e,{id:o}])=>o===t||e===t)?console.log(`we already have one ${(0,n.pokemonById)(t).name}`):(console.log("we dont have that pokemon... yet"),await(0,o.getPokemon)(t).then(o=>{e.bench[o.name]=new e.Pokemon(o),s(o),localStorage.setItem("professorStorage",JSON.stringify(e.bench)),console.log(`nice!!! we just catched a ${o.name}`)})),(0,n.pokemonById)(t)}
},{"./pokeBenchState":"oCgX","./xmlRequest":"HeVo","./pokeUtils":"ZTJD"}],"vWIP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.printPokemon=o;var e=require("./pokeBenchState"),a=require("./Selectors"),t=require("./pokedexDataLocalStorage"),n=require("./pokeUtils");async function o(o=!1){const s=o?(await(0,t.catchPokemon)(o)).name:(await(0,t.catchPokemon)((0,n.getRandomPokemonNumber)())).name;let r=`\n      <div draggable="true" class="${s} pokemon">\n      <img draggable="false" src="${e.bench[s].sprites.default.male.front}">\n      <button draggable="false" class="bye oculto">\n       <img class="icon" src=${a.imagesSvg["008-tacho-de-reciclaje"]} alt="trash">  \n      </button>\n      <button draggable="false" class="color oculto">\n       <img class="icon" src=${a.imagesSvg.pokemon} alt="trash">  \n      </button>`;return"No back"!==e.bench[s].state.warning2&&(r+=`<button draggable="false" class="rotate oculto">\n        <img class="icon" src=${a.imagesSvg["003-brujula"]} alt="trash">  \n       </button>`),"No female"===e.bench[s].state.warning?r+="</div>":r+=`\n    <button class="sex oculto">\n       <img class="icon" src=${a.imagesSvg["002-lucha"]} alt="trash"> \n    </button>\n    </div>`,a.lista.innerHTML=r+a.lista.innerHTML,document.querySelectorAll("[draggable='true']")}
},{"./pokeBenchState":"oCgX","./Selectors":"KUgd","./pokedexDataLocalStorage":"bgpB","./pokeUtils":"ZTJD"}],"XUf0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.landscapeState=void 0;const e={myClick:!1,clickTarget:void 0,offset:{}};exports.landscapeState=e;
},{}],"mAel":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.pokemonInside=o;var t=require("../Selectors"),e=require("./lanscapeState");function a(t){e.landscapeState.myClick&&(e.landscapeState.clickTarget.style.left=`${t.clientX-e.landscapeState.offset.x}px`,e.landscapeState.clickTarget.style.top=`${t.clientY-e.landscapeState.offset.y}px`)}function l(){t.body.addEventListener("mousemove",a),t.landscape.dataset.notEmpty=!0}function s(a){const l=t.landscape.getBoundingClientRect(),s=e.landscapeState.clickTarget,n=e.landscapeState.offset,o=s.getBoundingClientRect();s.style.left=a.clientX-n.x<l.left?`${l.left}px`:s.style.left,s.style.left=o.right>l.right?`${l.right-o.width}px`:s.style.left,s.style.top=a.clientY-n.y<l.top?`${l.top}px`:s.style.top,s.style.top=o.bottom>l.bottom?`${l.bottom-o.height}px`:s.style.top,e.landscapeState.myClick=!1}function n(t){e.landscapeState.myClick="BUTTON"!==t.target.tagName,e.landscapeState.clickTarget=t.currentTarget,e.landscapeState.offset={x:t.offsetX,y:t.offsetY}}function o(e){e.style.margin="0",e.style.position="absolute",e.setAttribute("draggable","false"),e.addEventListener("mousedown",n),e.addEventListener("mouseup",s),t.landscape.dataset.notEmpty=l()}
},{"../Selectors":"KUgd","./lanscapeState":"XUf0"}],"sOMZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.dragStart=t,exports.dragEnd=r,exports.dragOver=o,exports.dragEnter=n,exports.onDrop=s,exports.mouseIn=a,exports.mouseOut=c;var e=require("./Landscape/insideLandscapeHandlers");function t(e){e.currentTarget.classList.add("taken")}function r(e){e.currentTarget.classList.remove("taken")}function o(e){e.preventDefault()}function n(e){e.preventDefault()}function s(t){const r=document.querySelector(".taken");this.append(r),console.log(`${r.classList[0]} i choose you!`),(0,e.pokemonInside)(r)}function a(e){e.currentTarget.querySelectorAll("button").forEach(e=>e.classList.remove("oculto"))}function c(e){e.currentTarget.querySelectorAll("button").forEach(e=>e.classList.add("oculto"))}
},{"./Landscape/insideLandscapeHandlers":"mAel"}],"zMGF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=a;var e=require("./Selectors"),r=require("./pokeDomManipulation"),n=require("./pokePrinter"),t=require("./dragAndDropHandlers");function d(e){e.forEach(e=>{e.addEventListener("dragstart",t.dragStart),e.addEventListener("dragend",t.dragEnd),e.addEventListener("mouseenter",t.mouseIn),e.addEventListener("mouseleave",t.mouseOut)})}function a(){e.landscape.addEventListener("dragover",t.dragOver),e.landscape.addEventListener("dragenter",t.dragEnter),e.landscape.addEventListener("drop",t.onDrop),e.btn.addEventListener("click",()=>{(0,n.printPokemon)().then(e=>{d(e)})}),e.body.addEventListener("click",r.rotatePokemon),e.body.addEventListener("click",r.changeColor),e.body.addEventListener("click",r.changeSex),e.body.addEventListener("click",r.bye)}
},{"./Selectors":"KUgd","./pokeDomManipulation":"mFd3","./pokePrinter":"vWIP","./dragAndDropHandlers":"sOMZ"}],"VFgJ":[function(require,module,exports) {
"use strict";var e=require("./JavaScript/eventListeners");(0,e.init)();
},{"./JavaScript/eventListeners":"zMGF"}]},{},["VFgJ"], null)
//# sourceMappingURL=/poke.6e98c178.js.map