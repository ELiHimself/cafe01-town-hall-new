function printPokemon(pokemonItem) {
  if ('prev_evolution' in pokemonItem) {
    return;
  }

  let result = '';

  const pokemonId = pokemonItem.id;
  const pokemonName = pokemonItem.name;
  const pokemonWeaknessesLength = pokemonItem.weaknesses.length;
  const weaknessWord = pokemonWeaknessesLength === 1 ? 'weakness' : 'weaknesses';
  const pokemonWeaknesses = pokemonItem.weaknesses;
  const pokemonNextEvolutionArr = pokemonItem.next_evolution;

  result = `(#${pokemonId}) ${pokemonName} has ${pokemonWeaknessesLength} ${weaknessWord}: ${pokemonWeaknesses}. `;

  if ('next_evolution' in pokemonItem) {
    result += 'The next evolution(s) are:';

    for (let i = 0; i < pokemonNextEvolutionArr.length; i++) {
      result += ` #${i + 1} ${pokemonNextEvolutionArr[i].name}`;

      if (i < pokemonNextEvolutionArr.length - 1) {
        result += ',';
      }
    }
  } else {
    result += 'However, it has no available evolutions.';
  }

  console.log(result);
  //   console.log(pokemonItem);
}

// function printPokemons(pokemonList, printCount, offset = 0) {
//   const pokemonArr = pokemonList.pokemon;

//   for (let i = offset; i < printCount + offset; i++) {}
// }

// printPokemons(pokemons, 2, 0);
printPokemon(pokemons.pokemon[0]);
console.log('----------');
printPokemon(pokemons.pokemon[142]);
// console.log(pokemons);
