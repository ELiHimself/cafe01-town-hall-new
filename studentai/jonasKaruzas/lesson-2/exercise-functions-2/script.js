function printPokemon(pokemonItem) {
  let result = '';
  const pokemonId = pokemonItem.id;
  const pokemonName = pokemonItem.name;
  const pokemonWeaknessesLength = pokemonItem.weaknesses.length;
  const weaknessWord = pokemonWeaknessesLength === 1 ? 'weakness' : 'weaknesses';
  let pokemonWeaknesses = pokemonItem.weaknesses;
  const pokemonNextEvolutionArr = pokemonItem.next_evolution;

  if (pokemonWeaknessesLength > 1) {
    const lastWeakness = pokemonWeaknesses.slice(-1);
    const remainingWeakness = pokemonWeaknesses.slice(0, -1);
    pokemonWeaknesses = remainingWeakness.join(', ') + ' and ' + lastWeakness[0];
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

  showPokemon(pokemonItem, result);
  console.log(result);
}

function printPokemons(pokemonList, printCount, offset = 0) {
  const onlyFirstEvolution = document.getElementById('onlyFirstEvolution').checked;
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
  });
}

function showPokemon(pokemonItem, result) {
  const card = document.createElement('div');
  const card_img = document.createElement('img');
  const card_name = document.createElement('div');
  const card_description = document.createElement('div');

  card.classList.add('card');
  card_img.classList.add('card__img');
  card_name.classList.add('card__name');
  card_description.classList.add('card__description');

  card_description.innerText = result;
  card_img.src = pokemonItem.img;
  card_name.innerText = pokemonItem.name;

  card.appendChild(card_img);
  card.appendChild(card_name);
  card.appendChild(card_description);

  document.querySelector('main').appendChild(card);
}

function getInputNumbersAndShow() {
  const printCountNr = document.getElementById('printCountNr').value;
  const startFromNr = document.getElementById('startFromNr').value;

  deleteAllCards();
  printPokemons(pokemons, printCountNr, startFromNr);
}

function deleteAllCards() {
  const main = document.querySelector('main');
  while (main.lastChild) {
    main.lastChild.remove();
  }
}

document.getElementById('showNow').addEventListener('click', getInputNumbersAndShow);
