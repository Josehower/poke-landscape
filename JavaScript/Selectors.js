const CajaSeleccionaPokemon = document.querySelector('.pokeContainer');

const body = document.querySelector('body');

const btn = document.querySelector('[name=accion]');

const landscape = document.querySelector('.landscapeContainer');

const imagesSvg = require('../images/buttons/*.svg');

const blackDiv = document.querySelector('#infoTextContainer');

const searchPokemon = document.querySelector('#buscarPokemon');

export {
  CajaSeleccionaPokemon,
  btn,
  landscape,
  body,
  imagesSvg,
  blackDiv,
  searchPokemon,
};
