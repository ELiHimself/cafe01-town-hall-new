# If you plan to use index.html to print values:

```html
<!-- ... -->
    <script src="pokemons.js" type="text/javascript"></script>
    <script src="index.js" type="text/javascript"></script>
</body>
```
By importing pokemons.js file first, and index.js first you will be able to access pokemons constant (since it was declared in global scope). e.g:

```js
// index.js
console.log(pokemons) // <- this will print pokemons list since index.js is able to access global scope. 

```


# If you plan to run Node 
e.g.
`node script.js`

- copy pokemons.js and change `const pokemons = ...` to `module.exports = `
- in your main file import the exported pokemons array by using `const pokemons = require('./pokemons')`

```js
// pokemons.js

module.exports = {
    pokemon: [
        {
            id: 1,
            num: "001",
            name: "Bulbasaur",
            // ...
        }
    ]
};
```

```js
// index.js

const pokemons = require('./pokemons');
```
...and then pokemons constant will contain the list from another file. That is called module importing. IMPORTANT: this will only work when working with `node`. 
