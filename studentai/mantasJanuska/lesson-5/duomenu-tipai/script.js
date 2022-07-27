// boolean

Boolean(''); //<--false
Boolean('2') //<--true
Boolean('0') // <--false 
Boolean('-1') // <--true. always asumes it without negative sign.
Boolean("aha") //<--true
Boolean([]) // <-- true
Boolean([], []) // <-- true
Boolean(Symbol()) // <-- true
Boolean(undefined) // <-- false
Boolean(null) // <-- false
Boolean(function(){}) //<--true


