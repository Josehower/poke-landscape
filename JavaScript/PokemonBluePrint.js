export default class PokemonBluePrint {
  constructor(pokemon) {
    const {
      name: pokemonName,
      id: pokemonIdNumber,
      sprites: pokemonSprites,
    } = pokemon;

    this.name = pokemonName;
    this.id = pokemonIdNumber;
    this.sprites = PokemonBluePrint.excludeEmptySprites(pokemonSprites);
    this.actualSprite = 'front_default';
  }

  static excludeEmptySprites(pokemonSpritesObject) {
    const filteredSpritesList = Object.entries(pokemonSpritesObject)
      .filter(([, spriteUrl]) => spriteUrl)
      .reduce((spritesList, [spriteId, spriteUrl]) => {
        spritesList[spriteId] = spriteUrl;
        return spritesList;
      }, {});
    return filteredSpritesList;
  }

  static switchSpriteCaracteristic(actualSprite, colorOrSex = 'color') {
    // this function switch the text between color or sex of pokemon sprite name.
    const actualPrimaryCaracteristic =
      colorOrSex === 'color' ? 'shiny' : 'female';

    const actualSecondaryCaracteristic =
      actualPrimaryCaracteristic === 'shiny' ? 'female' : 'shiny';

    const toModify = actualSprite.includes(actualPrimaryCaracteristic)
      ? actualPrimaryCaracteristic
      : 'default';

    const toPreserve = actualSprite.includes(actualSecondaryCaracteristic)
      ? actualSecondaryCaracteristic
      : 'default';

    const options = {};
    options[actualPrimaryCaracteristic] = function() {
      return actualSprite.replace('shiny_female', actualSecondaryCaracteristic);
    };
    options.default = function() {
      return actualSprite.replace(actualSecondaryCaracteristic, 'shiny_female');
    };

    const optionsVariation = {};
    optionsVariation[actualPrimaryCaracteristic] = function() {
      return actualSprite.replace(actualPrimaryCaracteristic, 'default');
    };
    optionsVariation.default = function() {
      return actualSprite.replace('default', actualPrimaryCaracteristic);
    };

    return toPreserve === actualSecondaryCaracteristic
      ? options[toModify]()
      : optionsVariation[toModify]();
  }
}
