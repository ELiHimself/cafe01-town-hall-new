function keliamiejiMetai(year){
    if ((0 == year % 4) && (0 !== year % 100) && (0 == year % 400)){
        console.log(year + " yra keliamieji metai")
    }else{
        console.log(year + " nėra keliamieji metai")
    }
}
keliamiejiMetai(2020);