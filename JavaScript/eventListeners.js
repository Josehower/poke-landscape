import { canvas, btn, body } from './Selectors';
import { rotatePokemon, changeColor, changeSex } from './pokeDomManipulation';
import { printPokemon } from './pokePrinter';
import {
  dragOver,
  dragEnter,
  onDrop,
  dragStart,
  dragEnd,
  mouseIn,
  mouseOut,
} from './dragAndDropHandlers';

function addPokemonListeners(dragables) {
  dragables.forEach(div => {
    div.addEventListener('dragstart', dragStart);
    div.addEventListener('dragend', dragEnd);
    div.addEventListener('mouseenter', mouseIn);
    div.addEventListener('mouseleave', mouseOut);
  });
}

function init() {
  canvas.addEventListener('dragover', dragOver);
  canvas.addEventListener('dragenter', dragEnter);
  canvas.addEventListener('drop', onDrop);

  btn.addEventListener('click', () => {
    printPokemon().then(dragables => {
      addPokemonListeners(dragables);
    });
  });

  body.addEventListener('click', rotatePokemon);
  body.addEventListener('click', changeColor);
  body.addEventListener('click', changeSex);
}

export { init };
