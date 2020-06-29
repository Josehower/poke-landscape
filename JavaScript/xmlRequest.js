export function getPokemonFromApi(pokemonId) {
  return new Promise(resolve => {
    const xml = new XMLHttpRequest();
    xml.onload = ({ currentTarget: { response: pokemon } }) => {
      resolve(pokemon);
    };
    xml.open('GET', `https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    xml.responseType = 'json';
    xml.send();
  });
}
