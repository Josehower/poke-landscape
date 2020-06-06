const bench = JSON.parse(localStorage.getItem('professorStorage')) || {};

class Pokemon {
  constructor(pokemon) {
    this.name = pokemon.name;
    this.id = pokemon.id;
    this.sprites = {};
    this.state = {
      color: 'default',
      sex: 'male',
      position: 'front',
    };
  }
}

export { bench, Pokemon };
