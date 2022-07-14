### Javascript functions #2

## challenge 1

create a function, which takes three inputs 
- first: pokemons array
- second: number of pokemons (n) to print out,
- third: offset (o) from which to start printing pokemons

Also create at function, which takes single pokemon 

````js
function printPokemon(pokemonItem) {    
    // <...>
}

````

```js
/**
 * Example:
 */

function printPokemons(pokemonList, printCount, offset) {
    // <...>
    // you need to use printPokemon function when iterating through pokemonList
}

```

*Important! Only print the pokemons that are of their first evolution (e.g don't print Ivysaur and Venusaur)*

And returns the list formatted as such:

`With available evolutions:`

"(#1) Bulbasaur has 4 weaknesses: Fire, Ice, Flying and Psychic. The next evolution(s) are: #1 Ivysaur, #2 Venusaur."

`Without available evolutions:`

"(#143) Snorlax has 1 weakness: Fighting. However, it has no available evolutions."


## Bonus objective (optioinal): 
Create grid of pokemons using the data from pokemon list.