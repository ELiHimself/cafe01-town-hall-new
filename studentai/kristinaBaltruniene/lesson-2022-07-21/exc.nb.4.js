function band(group){
    if (group <= 0) {
        return "ne grupe";
    
    } else if(group===1){
        return "solo";
    } else if (group===2){
        return "duetas";
    } else if(group===3){
        return "trio";
    } else if (group===4){
        return "kvartetas";
    } else if(group >4){
        return "didele grupe";
    }
}
console.log(band(10));

