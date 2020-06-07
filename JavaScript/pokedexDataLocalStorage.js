import { bench, Pokemon } from './pokeBenchState';
import { getPokemon } from './xmlRequest';
import { pokemonById } from './pokeUtils';

// this function sort the data from API for future usage
function sortSprites({ sprites, name }) {
  Object.entries(sprites).forEach(([spriteId, url]) => {
    if (!url) {
      if (spriteId.includes('female')) {
        bench[name].state.warning = 'No female';
      }
      return;
    }
    const param = {};

    // read the spriteID to categorize them
    if (spriteId.includes('shiny')) {
      param.color = 'shiny';
    } else {
      param.color = 'default';
    }
    if (spriteId.includes('female')) {
      param.sex = 'female';
    } else {
      param.sex = 'male';
    }
    if (spriteId.includes('front')) {
      param.position = 'front';
    } else {
      param.position = 'back';
    }

    // Create objects on bench for each sprite when needed
    if (bench[name].sprites[param.color] === undefined) {
      bench[name].sprites[param.color] = {};
    }

    if (bench[name].sprites[param.color][param.sex] === undefined) {
      bench[name].sprites[param.color][param.sex] = {};
    }

    if (
      bench[name].sprites[param.color][param.sex][param.position] === undefined
    ) {
      bench[name].sprites[param.color][param.sex][param.position] = {};
    }

    // set the urls on pokemon object
    bench[name].sprites[param.color][param.sex][param.position] = url;
  });
}

async function catchPokemon(pokemonId) {
  // check the benchState if we have actual pokemon info
  if (
    !Object.entries(bench).some(
      ([name, { id }]) => id === pokemonId || name === pokemonId
    )
  ) {
    // send the request if needed
    console.log('we dont have that pokemon... yet');
    await getPokemon(pokemonId).then(pokemon => {
      bench[pokemon.name] = new Pokemon(pokemon);
      sortSprites(pokemon);
      localStorage.setItem('professorStorage', JSON.stringify(bench));
      console.log(`nice!!! we just catched a ${pokemon.name}`);
    });
  } else {
    // get the info from cache
    console.log(`we already have one ${pokemonById(pokemonId).name}`);
  }
  return pokemonById(pokemonId);
}

export { catchPokemon };
