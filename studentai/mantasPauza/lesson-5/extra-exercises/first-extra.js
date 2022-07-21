function arKeliamieji(year) {
    if (year % 4 === 0 && year % 100 != 0 || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}


arKeliamieji(400);


