export function getPokemonFromApi(pokemonId) {
  return new Promise((resolve, reject) => {
    const xml = new XMLHttpRequest();
    xml.onload = eventObject => {
      const {
        currentTarget: { response: pokemon, status },
      } = eventObject;
      if (status >= 400) {
        reject('this pokemon dont exist');
      } else {
        resolve(pokemon);
      }
    };
    xml.open('GET', `https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    xml.responseType = 'json';
    xml.send();
    // xml.onerror = reject(msj => Error(msj));
  });
}
