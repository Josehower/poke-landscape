import { bench } from './pokeBenchState';
import { lista } from './Selectors';
import {
  dragStart,
  dragEnd,
  mouseIn,
  mouseOut,
} from './dragAndDropFunctionality';

function printPokemon(pokemonName) {
  let pokeImgHtml = `
      <div draggable="true" class="${pokemonName} pokemon">
      <img src="${bench[pokemonName].sprites.default.male.front}">
      <button class="rotate oculto">rotate</button>
      <button class="color oculto">color</button>`;

  if (bench[pokemonName].state.warning === 'No female') {
    pokeImgHtml += `</div>`;
  } else {
    pokeImgHtml += ` <button class="sex oculto">sex swamp</button></div>`;
  }

  lista.innerHTML += pokeImgHtml;
  const dragables = document.querySelectorAll("[draggable='true']");
  dragables.forEach(div => {
    div.addEventListener('dragstart', dragStart);
    div.addEventListener('dragend', dragEnd);
    div.addEventListener('mouseenter', mouseIn);
    div.addEventListener('mouseleave', mouseOut);
  });
}

function rotatePokemon(e) {
  if (e.target.classList[0] === 'rotate') {
    const pokemonName = e.target.parentElement.classList[0];
    console.log(`${pokemonName} rotate now!`);
    const pokeState = bench[pokemonName].state;
    if (pokeState.position === 'front') {
      e.target.parentElement.firstElementChild.src =
        bench[pokemonName].sprites[pokeState.color][pokeState.sex].back;
      pokeState.position = 'back';
    } else {
      e.target.parentElement.firstElementChild.src =
        bench[pokemonName].sprites[pokeState.color][pokeState.sex].front;
      pokeState.position = 'front';
    }
  }
}

function changeColor(e) {
  if (e.target.classList[0] === 'color') {
    const pokemonName = e.target.parentElement.classList[0];
    const pokeState = bench[pokemonName].state;
    if (pokeState.color === 'shiny') {
      console.log(`${pokemonName} change color!`);
      e.target.parentElement.firstElementChild.src =
        bench[pokemonName].sprites.default[pokeState.sex][pokeState.position];
      pokeState.color = 'default';
    } else {
      console.log(`${pokemonName} shine!`);
      e.target.parentElement.firstElementChild.src =
        bench[pokemonName].sprites.shiny[pokeState.sex][pokeState.position];
      pokeState.color = 'shiny';
    }
  }
}

function changeSex(e) {
  if (e.target.classList[0] === 'sex') {
    const pokemonName = e.target.parentElement.classList[0];
    const pokeState = bench[pokemonName].state;
    if (pokeState.sex === 'female') {
      console.log(`${pokemonName} male version!`);
      e.target.parentElement.firstElementChild.src =
        bench[pokemonName].sprites[pokeState.color].male[pokeState.position];
      pokeState.sex = 'male';
    } else {
      console.log(`${pokemonName} female version!`);
      e.target.parentElement.firstElementChild.src =
        bench[pokemonName].sprites[pokeState.color].female[pokeState.position];
      pokeState.sex = 'female';
    }
  }
}

export { printPokemon, rotatePokemon, changeColor, changeSex };
