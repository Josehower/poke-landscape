import { landscape, btn, searchPokemon } from './Selectors';

import { printPokemon } from './printPokemon';

import { dragOver, dragEnter, onDrop } from './dragAndDropHandlers';

const test = e => {
  const input = e.currentTarget.firstElementChild;
  // console.log(input.value);
};

const testClick = e => {
  const input = e.currentTarget.firstElementChild;
  if (e.target.dataset.item !== 'botonHuevo' || input.value === '') {
    return;
  }
  const pokemonIdAuth = isNaN(parseInt(input.value))
    ? input.value
    : parseInt(input.value);
  printPokemon(pokemonIdAuth);
};

function init() {
  landscape.addEventListener('dragover', dragOver);
  landscape.addEventListener('dragenter', dragEnter);
  landscape.addEventListener('drop', onDrop);

  btn.addEventListener('click', () => printPokemon());
  searchPokemon.addEventListener('keyup', test);
  searchPokemon.addEventListener('click', testClick);
}

export { init };
