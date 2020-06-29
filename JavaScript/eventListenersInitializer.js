import { landscape, btn } from './Selectors';

import { printPokemon } from './printPokemon';

import { dragOver, dragEnter, onDrop } from './dragAndDropHandlers';

function init() {
  landscape.addEventListener('dragover', dragOver);
  landscape.addEventListener('dragenter', dragEnter);
  landscape.addEventListener('drop', onDrop);

  btn.addEventListener('click', () => printPokemon());
}

export { init };
