const onlyFirstEvolution = true;

function printPokemon(pokemonItem) {
  let result = '';

  const pokemonId = pokemonItem.id;
  const pokemonName = pokemonItem.name;
  const pokemonWeaknessesLength = pokemonItem.weaknesses.length;
  const weaknessWord = pokemonWeaknessesLength === 1 ? 'weakness' : 'weaknesses';
  let pokemonWeaknesses = pokemonItem.weaknesses;
  const pokemonNextEvolutionArr = pokemonItem.next_evolution;

  if (pokemonWeaknessesLength > 1) {
    let lastWeakness = pokemonWeaknesses.splice(-1);
    pokemonWeaknesses = pokemonWeaknesses.join(', ') + ' and ' + lastWeakness[0];
  }

  result = `(#${pokemonId}) ${pokemonName} has ${pokemonWeaknessesLength} ${weaknessWord}: ${pokemonWeaknesses}. `;

  if ('next_evolution' in pokemonItem) {
    result += 'The next evolution(s) are:';

    for (let i = 0; i < pokemonNextEvolutionArr.length; i++) {
      result += ` #${i + 1} ${pokemonNextEvolutionArr[i].name}`;

      if (i < pokemonNextEvolutionArr.length - 1) {
        result += ',';
      }
    }

    result += '.';
  } else {
    result += 'However, it has no available evolutions.';
  }

  console.log(result);
}

function printPokemons(pokemonList, printCount, offset = 0) {
  const pokemonArr = pokemonList.pokemon;
  let selected = [];

  while (selected.length < printCount) {
    if (onlyFirstEvolution) {
      if (!('prev_evolution' in pokemonArr[offset])) {
        selected.push(pokemonArr[offset]);
      }
    } else {
      selected.push(pokemonArr[offset]);
    }
    offset++;
  }

  selected.forEach((element) => {
    printPokemon(element);
    showPokemon(element);
  });
}

function showPokemon(pokemonItem) {}

printPokemons(pokemons, 5, 0);
console.log('+++++');
printPokemons(pokemons, 5, 3);
