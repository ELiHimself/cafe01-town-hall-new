Boolean(1); //true

Boolean(0); //false

Boolean(-1); //true

Boolean("test"); //true

Boolean(""); //false

Boolean([]); //true

Boolean({}); //true

Boolean(undefined); //false

Boolean(null); //false

Boolean(function() {}); //true

Boolean(Symbol); //true

Boolean(7 === 7); // true

Boolean(7 === 77); //false

Boolean(3 > 1); //true

Boolean(3 < 1); //false

Boolean(1 > 2 && 2 > 1); //false

Boolean(1 > 2 || 2 > 1); //true