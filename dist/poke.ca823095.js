// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"images/buttons/001-pokedex.svg":[function(require,module,exports) {
module.exports = "/001-pokedex.420a92c2.svg";
},{}],"images/buttons/002-lucha.svg":[function(require,module,exports) {
module.exports = "/002-lucha.730c41b6.svg";
},{}],"images/buttons/003-brujula.svg":[function(require,module,exports) {
module.exports = "/003-brujula.bef1a417.svg";
},{}],"images/buttons/004-pokemon.svg":[function(require,module,exports) {
module.exports = "/004-pokemon.009c4f7a.svg";
},{}],"images/buttons/005-pokemon-1.svg":[function(require,module,exports) {
module.exports = "/005-pokemon-1.82089429.svg";
},{}],"images/buttons/006-camara.svg":[function(require,module,exports) {
module.exports = "/006-camara.6f650c32.svg";
},{}],"images/buttons/007-pokemon-2.svg":[function(require,module,exports) {
module.exports = "/007-pokemon-2.736b3bc0.svg";
},{}],"images/buttons/008-tacho-de-reciclaje.svg":[function(require,module,exports) {
module.exports = "/008-tacho-de-reciclaje.74b534ed.svg";
},{}],"images/buttons/buscar.svg":[function(require,module,exports) {
module.exports = "/buscar.9f9b713f.svg";
},{}],"images/buttons/pokemon.svg":[function(require,module,exports) {
module.exports = "/pokemon.0188fe4c.svg";
},{}],"images/buttons/*.svg":[function(require,module,exports) {
module.exports = {
  "001-pokedex": require("./001-pokedex.svg"),
  "002-lucha": require("./002-lucha.svg"),
  "003-brujula": require("./003-brujula.svg"),
  "004-pokemon": require("./004-pokemon.svg"),
  "005-pokemon-1": require("./005-pokemon-1.svg"),
  "006-camara": require("./006-camara.svg"),
  "007-pokemon-2": require("./007-pokemon-2.svg"),
  "008-tacho-de-reciclaje": require("./008-tacho-de-reciclaje.svg"),
  "buscar": require("./buscar.svg"),
  "pokemon": require("./pokemon.svg")
};
},{"./001-pokedex.svg":"images/buttons/001-pokedex.svg","./002-lucha.svg":"images/buttons/002-lucha.svg","./003-brujula.svg":"images/buttons/003-brujula.svg","./004-pokemon.svg":"images/buttons/004-pokemon.svg","./005-pokemon-1.svg":"images/buttons/005-pokemon-1.svg","./006-camara.svg":"images/buttons/006-camara.svg","./007-pokemon-2.svg":"images/buttons/007-pokemon-2.svg","./008-tacho-de-reciclaje.svg":"images/buttons/008-tacho-de-reciclaje.svg","./buscar.svg":"images/buttons/buscar.svg","./pokemon.svg":"images/buttons/pokemon.svg"}],"JavaScript/Selectors.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPokemon = exports.blackDiv = exports.imagesSvg = exports.body = exports.landscape = exports.btn = exports.CajaSeleccionaPokemon = void 0;
const CajaSeleccionaPokemon = document.querySelector('.pokeContainer');
exports.CajaSeleccionaPokemon = CajaSeleccionaPokemon;
const body = document.querySelector('body');
exports.body = body;
const btn = document.querySelector('[name=accion]');
exports.btn = btn;
const landscape = document.querySelector('.landscapeContainer');
exports.landscape = landscape;

const imagesSvg = require('../images/buttons/*.svg');

exports.imagesSvg = imagesSvg;
const blackDiv = document.querySelector('#infoTextContainer');
exports.blackDiv = blackDiv;
const searchPokemon = document.querySelector('#buscarPokemon');
exports.searchPokemon = searchPokemon;
},{"../images/buttons/*.svg":"images/buttons/*.svg"}],"JavaScript/pokeBenchState.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bench = void 0;
// const bench = JSON.parse(localStorage.getItem('professorStorage')) || {};
const bench = {
  bluePrint: JSON.parse(localStorage.getItem('professorStorage')) || {},
  onScreen: {}
};
exports.bench = bench;
},{}],"JavaScript/pokeInfoText.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = textToBlackDiv;

var _Selectors = require("./Selectors");

function textToBlackDiv(text) {
  _Selectors.blackDiv.innerHTML = `<p>${text}</p>`;
}
},{"./Selectors":"JavaScript/Selectors.js"}],"JavaScript/PokemonBluePrint.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class PokemonBluePrint {
  constructor(pokemon) {
    const {
      name: pokemonName,
      id: pokemonIdNumber,
      sprites: pokemonSprites
    } = pokemon;
    this.name = pokemonName;
    this.id = pokemonIdNumber;
    this.sprites = PokemonBluePrint.excludeEmptySprites(pokemonSprites);
    this.actualSprite = 'front_default';
  }

  static excludeEmptySprites(pokemonSpritesObject) {
    const filteredSpritesList = Object.entries(pokemonSpritesObject).filter(([, spriteUrl]) => spriteUrl).reduce((spritesList, [spriteId, spriteUrl]) => {
      spritesList[spriteId] = spriteUrl;
      return spritesList;
    }, {});
    return filteredSpritesList;
  }

  static switchSpriteCaracteristic(actualSprite, colorOrSex = 'color') {
    // this function switch the text between color or sex of pokemon sprite name.
    const actualPrimaryCaracteristic = colorOrSex === 'color' ? 'shiny' : 'female';
    const actualSecondaryCaracteristic = actualPrimaryCaracteristic === 'shiny' ? 'female' : 'shiny';
    const toModify = actualSprite.includes(actualPrimaryCaracteristic) ? actualPrimaryCaracteristic : 'default';
    const toPreserve = actualSprite.includes(actualSecondaryCaracteristic) ? actualSecondaryCaracteristic : 'default';
    const options = {};

    options[actualPrimaryCaracteristic] = function () {
      return actualSprite.replace('shiny_female', actualSecondaryCaracteristic);
    };

    options.default = function () {
      return actualSprite.replace(actualSecondaryCaracteristic, 'shiny_female');
    };

    const optionsVariation = {};

    optionsVariation[actualPrimaryCaracteristic] = function () {
      return actualSprite.replace(actualPrimaryCaracteristic, 'default');
    };

    optionsVariation.default = function () {
      return actualSprite.replace('default', actualPrimaryCaracteristic);
    };

    return toPreserve === actualSecondaryCaracteristic ? options[toModify]() : optionsVariation[toModify]();
  }

}

exports.default = PokemonBluePrint;
},{}],"JavaScript/PokemonForScreen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _PokemonBluePrint = _interopRequireDefault(require("./PokemonBluePrint"));

var _Selectors = require("./Selectors");

var _pokeBenchState = require("./pokeBenchState");

var _pokeInfoText = _interopRequireDefault(require("./pokeInfoText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PokemonForScreen extends _PokemonBluePrint.default {
  constructor(pokemon, uniqueId) {
    super(pokemon);
    this.uniqueId = uniqueId;
    this.state = {
      isPrinted: false,
      logFunction: _pokeInfoText.default
    };
  }

  static htmlButtonIfNeeded(sprites, buttonName) {
    const buttons = {
      rotate: `<button draggable="false" class="rotate oculto">
        <img class="icon" src=${_Selectors.imagesSvg['003-brujula']} alt="trash">
        </button>`,
      sex: `<button class="sex oculto">
        <img class="icon" src=${_Selectors.imagesSvg['002-lucha']} alt="trash">
      </button>`
    };
    return sprites.back_default && buttonName === 'rotate' || sprites.front_female && buttonName === 'sex' ? buttons[buttonName] : '';
  }

  static createPokemonHtml(pokemon) {
    const {
      sprites,
      actualSprite,
      uniqueId
    } = pokemon;
    const pokemonHtml = `
         <img id=${`spriteFor_${uniqueId}`} 
         draggable="false" src="${sprites[actualSprite]}">
         <button draggable="false" class="bye oculto">
           <img class="icon" src=${_Selectors.imagesSvg['008-tacho-de-reciclaje']} alt="trash">
         </button>
         ${PokemonForScreen.htmlButtonIfNeeded(sprites, 'rotate')} 
         ${PokemonForScreen.htmlButtonIfNeeded(sprites, 'sex')} 
         <button draggable="false" class="color oculto">
            <img class="icon" src=${_Selectors.imagesSvg.pokemon} alt="trash">
         </button>
    
      
      `;
    return pokemonHtml;
  }

  static addButtonListeners(pokemonContainer) {
    const buttons = pokemonContainer.querySelectorAll('button');
    buttons.forEach(button => button.addEventListener('click', PokemonForScreen.pokemonAction));
  }

  static pokemonAction(e) {
    const pokemonButton = e.target;
    const {
      id
    } = pokemonButton.parentElement;
    const pokemonObjectRef = _pokeBenchState.bench.onScreen[id];
    const actions = {
      sex: () => pokemonObjectRef.switchSex(),
      color: () => pokemonObjectRef.switchColor(),
      rotate: () => pokemonObjectRef.rotate(),
      bye: () => pokemonButton.parentElement.remove(),
      default: () => console.log(pokemonButton.classList[0])
    };
    const actionFunc = actions[this.classList[0]] || actions.default;
    return actionFunc();
  }

  printSelf(pokemonContainer) {
    if (this.state.isPrinted) {
      const error = {
        error: 'this pokemon is already on screen, you should create a new copy from Blueprint'
      };
      throw error;
    }

    pokemonContainer.id = this.uniqueId;
    pokemonContainer.classList.add(this.name);
    const pokemonHtml = PokemonForScreen.createPokemonHtml(this);
    pokemonContainer.innerHTML = pokemonHtml;
    PokemonForScreen.addButtonListeners(pokemonContainer);
    if (pokemonContainer) this.state.isPrinted = true;
    console.log(_pokeBenchState.bench);
  }

  updateSprite(newSpriteKey) {
    if (!this.sprites[newSpriteKey]) {
      const error = {
        error: `this Sprite don't Exist`
      };
      throw error;
    }

    if (this.state.isPrinted) {
      const sprite = document.querySelector(`#spriteFor_${this.uniqueId}`);
      sprite.src = this.sprites[newSpriteKey] || sprite.src;
      this.actualSprite = newSpriteKey || this.actualSprite;
    }
  }

  switchColor() {
    const newSprite = _PokemonBluePrint.default.switchSpriteCaracteristic(this.actualSprite);

    this.updateSprite(newSprite);
    this.state.logFunction(`<strong>${this.name}</strong> switch into a new <strong>color</strong>`);
  }

  switchSex() {
    const newSprite = _PokemonBluePrint.default.switchSpriteCaracteristic(this.actualSprite, 'sex');

    this.updateSprite(newSprite);
    this.state.logFunction(`<strong>${this.name}</strong> switch into a new <strong>variation</strong>`);
  }

  rotate() {
    const actualPosition = this.actualSprite.includes('front') ? 'front' : 'back';
    const Options = {
      front: () => this.actualSprite.replace('front', 'back'),
      back: () => this.actualSprite.replace('back', 'front')
    };
    this.updateSprite(Options[actualPosition]());
    this.state.logFunction(`<strong>${this.name}<strong> rotate</strong> now!`);
  }

}

exports.default = PokemonForScreen;
},{"./PokemonBluePrint":"JavaScript/PokemonBluePrint.js","./Selectors":"JavaScript/Selectors.js","./pokeBenchState":"JavaScript/pokeBenchState.js","./pokeInfoText":"JavaScript/pokeInfoText.js"}],"JavaScript/xmlRequest.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPokemonFromApi = getPokemonFromApi;

function getPokemonFromApi(pokemonId) {
  return new Promise((resolve, reject) => {
    const xml = new XMLHttpRequest();

    xml.onload = eventObject => {
      const {
        currentTarget: {
          response: pokemon,
          status
        }
      } = eventObject;

      if (status >= 400) {
        reject('this pokemon dont exist');
      } else {
        resolve(pokemon);
      }
    };

    xml.open('GET', `https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    xml.responseType = 'json';
    xml.send(); // xml.onerror = reject(msj => Error(msj));
  });
}
},{}],"JavaScript/pokeUtils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPokemonBluePrintReference = getPokemonBluePrintReference;
exports.getRandomPokemonNumber = getRandomPokemonNumber;

var _pokeBenchState = require("./pokeBenchState");

// recieve a name or id of a pokemon already catched and returns his benchState
function getPokemonBluePrintReference(pokemonIdOrName) {
  if (!Object.entries(_pokeBenchState.bench.bluePrint).filter(([name, {
    id
  }]) => id === pokemonIdOrName || name === pokemonIdOrName)[0]) {
    return;
  }

  const pokemonName = Object.entries(_pokeBenchState.bench.bluePrint).filter(([name, {
    id
  }]) => id === pokemonIdOrName || name === pokemonIdOrName)[0][0];
  return _pokeBenchState.bench.bluePrint[pokemonName];
}

function getRandomPokemonNumber() {
  const randomPokemonId = Math.floor(Math.random() * 806 + 1);
  return randomPokemonId;
}
},{"./pokeBenchState":"JavaScript/pokeBenchState.js"}],"JavaScript/Landscape/lanscapeState.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.landscapeState = void 0;
const landscapeState = {
  myClick: false,
  clickTarget: undefined,
  offset: {}
};
exports.landscapeState = landscapeState;
},{}],"JavaScript/Landscape/insideLandscapeHandlers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pokemonInside = pokemonInside;

var _Selectors = require("../Selectors");

var _lanscapeState = require("./lanscapeState");

function mouseIsAlive(e) {
  if (_lanscapeState.landscapeState.myClick) {
    _lanscapeState.landscapeState.clickTarget.style.left = `${e.clientX - _lanscapeState.landscapeState.offset.x}px`;
    _lanscapeState.landscapeState.clickTarget.style.top = `${e.clientY - _lanscapeState.landscapeState.offset.y}px`;
  }
}

function landscapeDndActivate() {
  _Selectors.body.addEventListener('mousemove', mouseIsAlive);

  _Selectors.landscape.dataset.notEmpty = true;
}

function mouseUp(e) {
  const bigRect = _Selectors.landscape.getBoundingClientRect();

  const obj = _lanscapeState.landscapeState.clickTarget;
  const objOffset = _lanscapeState.landscapeState.offset;
  const objRect = obj.getBoundingClientRect();
  obj.style.left = e.clientX - objOffset.x < bigRect.left ? `${bigRect.left}px` : obj.style.left;
  obj.style.left = objRect.right > bigRect.right ? `${bigRect.right - objRect.width}px` : obj.style.left;
  obj.style.top = e.clientY - objOffset.y < bigRect.top ? `${bigRect.top}px` : obj.style.top;
  obj.style.top = objRect.bottom > bigRect.bottom ? `${bigRect.bottom - objRect.height}px` : obj.style.top;
  _lanscapeState.landscapeState.myClick = false;
}

function mouseDown(e) {
  _lanscapeState.landscapeState.myClick = e.target.tagName !== 'BUTTON';
  _lanscapeState.landscapeState.clickTarget = e.currentTarget;
  _lanscapeState.landscapeState.offset = {
    x: e.offsetX,
    y: e.offsetY
  };
}

function pokemonInside(pokemon) {
  pokemon.style.margin = '0';
  pokemon.style.position = 'absolute';
  pokemon.setAttribute('draggable', 'false');
  pokemon.addEventListener('mousedown', mouseDown);
  pokemon.addEventListener('mouseup', mouseUp);
  _Selectors.landscape.dataset.notEmpty = true && landscapeDndActivate();
}
},{"../Selectors":"JavaScript/Selectors.js","./lanscapeState":"JavaScript/Landscape/lanscapeState.js"}],"JavaScript/dragAndDropHandlers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dragStart = dragStart;
exports.dragEnd = dragEnd;
exports.dragOver = dragOver;
exports.dragEnter = dragEnter;
exports.onDrop = onDrop;
exports.mouseIn = mouseIn;
exports.mouseOut = mouseOut;

var _insideLandscapeHandlers = require("./Landscape/insideLandscapeHandlers");

var _pokeInfoText = _interopRequireDefault(require("./pokeInfoText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dragStart(e) {
  e.currentTarget.classList.add('taken');
}

function dragEnd(e) {
  e.currentTarget.classList.remove('taken');
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function onDrop(e) {
  const pokemonDropped = document.querySelector('.taken');
  this.append(pokemonDropped);
  (0, _pokeInfoText.default)(`<strong>${pokemonDropped.classList[1]}</strong> i choose you!`);
  (0, _insideLandscapeHandlers.pokemonInside)(pokemonDropped);
}

function mouseIn(e) {
  e.currentTarget.querySelectorAll('button').forEach(button => button.classList.remove('oculto'));
}

function mouseOut(e) {
  e.currentTarget.querySelectorAll('button').forEach(button => button.classList.add('oculto'));
}
},{"./Landscape/insideLandscapeHandlers":"JavaScript/Landscape/insideLandscapeHandlers.js","./pokeInfoText":"JavaScript/pokeInfoText.js"}],"JavaScript/printPokemon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printPokemon = printPokemon;

var _pokeBenchState = require("./pokeBenchState");

var _pokeInfoText = _interopRequireDefault(require("./pokeInfoText"));

var _PokemonBluePrint = _interopRequireDefault(require("./PokemonBluePrint"));

var _PokemonForScreen = _interopRequireDefault(require("./PokemonForScreen"));

var _xmlRequest = require("./xmlRequest");

var _pokeUtils = require("./pokeUtils");

var _Selectors = require("./Selectors");

var _dragAndDropHandlers = require("./dragAndDropHandlers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isFirsTimePokemonRequest(pokemonId) {
  return !Object.entries(_pokeBenchState.bench.bluePrint).some(([name, {
    id
  }]) => id === pokemonId || name === pokemonId);
}

function createNewUniqueIdentifier(pokemonId) {
  return `pkm${pokemonId}_${new Date().getTime()}`;
}

function createPrintableCopy(pokemonBluePrint) {
  const newUniqueIdentifier = createNewUniqueIdentifier(pokemonBluePrint.id);
  _pokeBenchState.bench.onScreen[newUniqueIdentifier] = new _PokemonForScreen.default(pokemonBluePrint, newUniqueIdentifier);
  return _pokeBenchState.bench.onScreen[newUniqueIdentifier];
}

function UpdateLocalStorage(bluePrintReference) {
  localStorage.setItem('professorStorage', JSON.stringify(bluePrintReference));
}

async function createPokemonBlueprint(pokemonIdOrName) {
  if (isFirsTimePokemonRequest(pokemonIdOrName)) {
    await (0, _xmlRequest.getPokemonFromApi)(pokemonIdOrName).then(apiPokemonData => {
      _pokeBenchState.bench.bluePrint[apiPokemonData.name] = new _PokemonBluePrint.default(apiPokemonData);
    }).catch(response => {
      (0, _pokeInfoText.default)(`<strong>Sorry...</strong> try whit a valid pokemon <strong>Name or a number</strong>`);
      throw Error(response);
    });
  }

  const bluePrint = (0, _pokeUtils.getPokemonBluePrintReference)(pokemonIdOrName);
  UpdateLocalStorage(_pokeBenchState.bench.bluePrint);
  return bluePrint;
}

function addPokemonDivListeners(div) {
  div.addEventListener('dragstart', _dragAndDropHandlers.dragStart);
  div.addEventListener('dragend', _dragAndDropHandlers.dragEnd);
  div.addEventListener('mouseenter', _dragAndDropHandlers.mouseIn);
  div.addEventListener('mouseleave', _dragAndDropHandlers.mouseOut);
}

async function printPokemon(pokemonId) {
  const id = pokemonId || (0, _pokeUtils.getRandomPokemonNumber)();
  const blueprint = await createPokemonBlueprint(id);

  if (!blueprint) {
    return;
  }

  console.log(blueprint);
  const printableCopy = createPrintableCopy(blueprint);

  _Selectors.CajaSeleccionaPokemon.insertAdjacentHTML('afterbegin', `<div draggable="true" class="pokemon"></div>`);

  console.log(_pokeBenchState.bench);

  const newPokemonDiv = _Selectors.CajaSeleccionaPokemon.querySelector('.pokemon');

  addPokemonDivListeners(newPokemonDiv);
  printableCopy.printSelf(newPokemonDiv);
  (0, _pokeInfoText.default)(`nice! we just catched a <strong>${printableCopy.name}</strong>`);
}
},{"./pokeBenchState":"JavaScript/pokeBenchState.js","./pokeInfoText":"JavaScript/pokeInfoText.js","./PokemonBluePrint":"JavaScript/PokemonBluePrint.js","./PokemonForScreen":"JavaScript/PokemonForScreen.js","./xmlRequest":"JavaScript/xmlRequest.js","./pokeUtils":"JavaScript/pokeUtils.js","./Selectors":"JavaScript/Selectors.js","./dragAndDropHandlers":"JavaScript/dragAndDropHandlers.js"}],"JavaScript/eventListenersInitializer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

var _Selectors = require("./Selectors");

var _printPokemon = require("./printPokemon");

var _dragAndDropHandlers = require("./dragAndDropHandlers");

const test = e => {
  const input = e.currentTarget.firstElementChild; // console.log(input.value);
};

const testClick = e => {
  const input = e.currentTarget.firstElementChild;

  if (e.target.dataset.item !== 'botonHuevo' || input.value === '') {
    return;
  }

  const pokemonIdAuth = isNaN(parseInt(input.value)) ? input.value : parseInt(input.value);
  (0, _printPokemon.printPokemon)(pokemonIdAuth);
};

function init() {
  _Selectors.landscape.addEventListener('dragover', _dragAndDropHandlers.dragOver);

  _Selectors.landscape.addEventListener('dragenter', _dragAndDropHandlers.dragEnter);

  _Selectors.landscape.addEventListener('drop', _dragAndDropHandlers.onDrop);

  _Selectors.btn.addEventListener('click', () => (0, _printPokemon.printPokemon)());

  _Selectors.searchPokemon.addEventListener('keyup', test);

  _Selectors.searchPokemon.addEventListener('click', testClick);
}
},{"./Selectors":"JavaScript/Selectors.js","./printPokemon":"JavaScript/printPokemon.js","./dragAndDropHandlers":"JavaScript/dragAndDropHandlers.js"}],"poke.js":[function(require,module,exports) {
"use strict";

var _eventListenersInitializer = require("./JavaScript/eventListenersInitializer");

(0, _eventListenersInitializer.init)();
},{"./JavaScript/eventListenersInitializer":"JavaScript/eventListenersInitializer.js"}],"../../../../../../../../home/heggart/.nvm/versions/node/v12.16.2/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60409" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../../home/heggart/.nvm/versions/node/v12.16.2/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","poke.js"], null)
//# sourceMappingURL=/poke.ca823095.js.map