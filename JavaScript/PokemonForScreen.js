import PokemonBluePrint from './PokemonBluePrint';
import { imagesSvg } from './Selectors';
import { bench } from './pokeBenchState';

export default class PokemonForScreen extends PokemonBluePrint {
  constructor(pokemon, uniqueId) {
    super(pokemon);
    this.uniqueId = uniqueId;
    this.state = {
      isPrinted: false,
    };
  }

  static htmlButtonIfNeeded(sprites, buttonName) {
    const buttons = {
      rotate: `<button draggable="false" class="rotate oculto">
        <img class="icon" src=${imagesSvg['003-brujula']} alt="trash">
        </button>`,
      sex: `<button class="sex oculto">
        <img class="icon" src=${imagesSvg['002-lucha']} alt="trash">
      </button>`,
    };
    return (sprites.back_default && buttonName === 'rotate') ||
      (sprites.front_female && buttonName === 'sex')
      ? buttons[buttonName]
      : '';
  }

  static createPokemonHtml(pokemon) {
    const { sprites, actualSprite, uniqueId } = pokemon;
    const pokemonHtml = `
         <img id=${`spriteFor_${uniqueId}`} 
         draggable="false" src="${sprites[actualSprite]}">
         <button draggable="false" class="bye oculto">
           <img class="icon" src=${
             imagesSvg['008-tacho-de-reciclaje']
           } alt="trash">
         </button>
         ${PokemonForScreen.htmlButtonIfNeeded(sprites, 'rotate')} 
         ${PokemonForScreen.htmlButtonIfNeeded(sprites, 'sex')} 
         <button draggable="false" class="color oculto">
            <img class="icon" src=${imagesSvg.pokemon} alt="trash">
         </button>
    
      
      `;
    return pokemonHtml;
  }

  static addButtonListeners(pokemonContainer) {
    const buttons = pokemonContainer.querySelectorAll('button');
    buttons.forEach(button =>
      button.addEventListener('click', PokemonForScreen.pokemonAction)
    );
  }

  static pokemonAction(e) {
    const pokemonButton = e.target;
    const { id } = pokemonButton.parentElement;
    const pokemonObjectRef = bench.onScreen[id];

    const actions = {
      sex: () => pokemonObjectRef.switchSex(),
      color: () => pokemonObjectRef.switchColor(),
      rotate: () => pokemonObjectRef.rotate(),
      bye: () => pokemonButton.parentElement.remove(),
      default: () => console.log(pokemonButton.classList[0]),
    };

    const actionFunc = actions[this.classList[0]] || actions.default;

    return actionFunc();
  }

  printSelf(pokemonContainer) {
    if (this.state.isPrinted) {
      const error = {
        error:
          'this pokemon is already on screen, you should create a new copy from Blueprint',
      };
      throw error;
    }
    pokemonContainer.id = this.uniqueId;
    pokemonContainer.classList.add(this.name);
    const pokemonHtml = PokemonForScreen.createPokemonHtml(this);
    pokemonContainer.innerHTML = pokemonHtml;
    PokemonForScreen.addButtonListeners(pokemonContainer);
    if (pokemonContainer) this.state.isPrinted = true;
    console.log(bench);
  }

  updateSprite(newSpriteKey) {
    if (!this.sprites[newSpriteKey]) {
      const error = {
        error: `this Sprite don't Exist`,
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
    const newSprite = PokemonBluePrint.switchSpriteCaracteristic(
      this.actualSprite
    );
    this.updateSprite(newSprite);
  }

  switchSex() {
    const newSprite = PokemonBluePrint.switchSpriteCaracteristic(
      this.actualSprite,
      'sex'
    );
    this.updateSprite(newSprite);
  }

  rotate() {
    const actualPosition = this.actualSprite.includes('front')
      ? 'front'
      : 'back';
    const Options = {
      front: () => this.actualSprite.replace('front', 'back'),
      back: () => this.actualSprite.replace('back', 'front'),
    };

    this.updateSprite(Options[actualPosition]());
  }
}
