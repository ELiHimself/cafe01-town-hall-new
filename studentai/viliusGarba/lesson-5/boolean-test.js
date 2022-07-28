Boolean() //false
Boolean(1) //true
Boolean(0) //false
Boolean(-1) //true
Boolean("") //false
Boolean("Hello World") //true
Boolean(["", 1, {}]) //true
Boolean({}) //true
Boolean(undefined) //false
Boolean(null) //false
Boolean(1 === 1) // true
Boolean(1 === 5) //false
Boolean(5 > 6 || 4 > 5) //false
Boolean(Boolean) //true
Boolean(function() {}) //true
Boolean(Symbol) //true

