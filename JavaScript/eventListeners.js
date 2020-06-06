import { canvas, btn, body } from './Selectors';
import { rotatePokemon, changeColor, changeSex } from './pokeDomManipulation';
import { dragOver, dragEnter, onDrop } from './dragAndDropFunctionality';
import { getPokemonHandler } from './pokemonHandlers';

function init() {
  canvas.addEventListener('dragover', dragOver);
  canvas.addEventListener('dragenter', dragEnter);
  canvas.addEventListener('drop', onDrop);

  btn.addEventListener('click', getPokemonHandler);
  body.addEventListener('click', rotatePokemon);
  body.addEventListener('click', changeColor);
  body.addEventListener('click', changeSex);
}

export { init };
