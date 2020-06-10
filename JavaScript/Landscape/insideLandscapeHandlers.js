import { landscape, body } from '../Selectors';
import { landscapeState } from './lanscapeState';

function mouseIsAlive(e) {
  if (landscapeState.myClick) {
    landscapeState.clickTarget.style.left = `${e.clientX -
      landscapeState.offset.x}px`;
    landscapeState.clickTarget.style.top = `${e.clientY -
      landscapeState.offset.y}px`;
  }
}

function landscapeDndActivate() {
  body.addEventListener('mousemove', mouseIsAlive);
  landscape.dataset.notEmpty = true;
}

function mouseUp(e) {
  const bigRect = landscape.getBoundingClientRect();
  const obj = landscapeState.clickTarget;
  const objOffset = landscapeState.offset;
  const objRect = obj.getBoundingClientRect();

  obj.style.left =
    e.clientX - objOffset.x < bigRect.left
      ? `${bigRect.left}px`
      : obj.style.left;

  obj.style.left =
    objRect.right > bigRect.right
      ? `${bigRect.right - objRect.width}px`
      : obj.style.left;

  obj.style.top =
    e.clientY - objOffset.y < bigRect.top 
      ? `${bigRect.top}px` 
      : obj.style.top;

  obj.style.top =
    objRect.bottom > bigRect.bottom
      ? `${bigRect.bottom - objRect.height}px`
      : obj.style.top;

  landscapeState.myClick = false;
}
function mouseDown(e) {
  landscapeState.myClick = e.target.tagName !== 'BUTTON';
  landscapeState.clickTarget = e.currentTarget;
  landscapeState.offset = { x: e.offsetX, y: e.offsetY };
}

function pokemonInside(pokemon) {
  pokemon.style.margin = '0';
  pokemon.style.position = 'absolute';
  pokemon.setAttribute('draggable', 'false');
  pokemon.addEventListener('mousedown', mouseDown);
  pokemon.addEventListener('mouseup', mouseUp);
  landscape.dataset.notEmpty = true && landscapeDndActivate();
}

export { pokemonInside };
