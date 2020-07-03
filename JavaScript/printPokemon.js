import { bench } from './pokeBenchState';
import textToBlackDiv from './pokeInfoText';
import PokemonBluePrint from './PokemonBluePrint';
import PokemonForScreen from './PokemonForScreen';
import { getPokemonFromApi } from './xmlRequest';
import {
  getPokemonBluePrintReference,
  getRandomPokemonNumber,
} from './pokeUtils';

import { CajaSeleccionaPokemon } from './Selectors';

import { dragStart, dragEnd, mouseIn, mouseOut } from './dragAndDropHandlers';

function isFirsTimePokemonRequest(pokemonId) {
  return !Object.entries(bench.bluePrint).some(
    ([name, { id }]) => id === pokemonId || name === pokemonId
  );
}

function createNewUniqueIdentifier(pokemonId) {
  return `pkm${pokemonId}_${new Date().getTime()}`;
}

function createPrintableCopy(pokemonBluePrint) {
  const newUniqueIdentifier = createNewUniqueIdentifier(pokemonBluePrint.id);
  bench.onScreen[newUniqueIdentifier] = new PokemonForScreen(
    pokemonBluePrint,
    newUniqueIdentifier
  );
  return bench.onScreen[newUniqueIdentifier];
}

function UpdateLocalStorage(bluePrintReference) {
  localStorage.setItem('professorStorage', JSON.stringify(bluePrintReference));
}

async function createPokemonBlueprint(pokemonIdOrName) {
  if (isFirsTimePokemonRequest(pokemonIdOrName)) {
    await getPokemonFromApi(pokemonIdOrName)
      .then(apiPokemonData => {
        bench.bluePrint[apiPokemonData.name] = new PokemonBluePrint(
          apiPokemonData
        );
      })
      .catch(response => {
        textToBlackDiv(
          `<strong>Sorry...</strong> try whit a valid pokemon <strong>Name or a number</strong>`
        );
        throw Error(response);
      });
  }

  const bluePrint = getPokemonBluePrintReference(pokemonIdOrName);
  UpdateLocalStorage(bench.bluePrint);
  return bluePrint;
}

function addPokemonDivListeners(div) {
  div.addEventListener('dragstart', dragStart);
  div.addEventListener('dragend', dragEnd);
  div.addEventListener('mouseenter', mouseIn);
  div.addEventListener('mouseleave', mouseOut);
}

async function printPokemon(pokemonId) {
  const id = pokemonId || getRandomPokemonNumber();
  const blueprint = await createPokemonBlueprint(id);
  if (!blueprint) {
    return;
  }
  console.log(blueprint);
  const printableCopy = createPrintableCopy(blueprint);
  CajaSeleccionaPokemon.insertAdjacentHTML(
    'afterbegin',
    `<div draggable="true" class="pokemon"></div>`
  );
  console.log(bench);

  const newPokemonDiv = CajaSeleccionaPokemon.querySelector('.pokemon');
  addPokemonDivListeners(newPokemonDiv);
  printableCopy.printSelf(newPokemonDiv);
  textToBlackDiv(
    `nice! we just catched a <strong>${printableCopy.name}</strong>`
  );
}

export { printPokemon };
