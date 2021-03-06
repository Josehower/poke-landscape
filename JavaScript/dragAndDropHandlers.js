import { pokemonInside } from './Landscape/insideLandscapeHandlers';
import textToBlackDiv from './pokeInfoText';

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
  textToBlackDiv(
    `<strong>${pokemonDropped.classList[1]}</strong> i choose you!`
  );
  pokemonInside(pokemonDropped);
}

function mouseIn(e) {
  e.currentTarget
    .querySelectorAll('button')
    .forEach(button => button.classList.remove('oculto'));
}
function mouseOut(e) {
  e.currentTarget
    .querySelectorAll('button')
    .forEach(button => button.classList.add('oculto'));
}

export { dragStart, dragEnd, dragOver, dragEnter, onDrop, mouseIn, mouseOut };
