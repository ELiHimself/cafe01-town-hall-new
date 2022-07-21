function arKeliamieji(year) {
    if (year % 4 === 0 && year % 100 != 0 || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}


arKeliamieji(2000);
arKeliamieji(2022);



function kiekDienu(year, month) {
    const menesiai = {
        0: 'Sausis',
        1: 'Vasaris',
        2: 'Kovas',
        3: 'Balandis',
        4: 'Gegužė',
        5: 'Birželis',
        6: 'Liepa',
        7: 'Rugpjūtis',
        8: 'Rugsėjis',
        9: 'Spalis',
        10: 'Lapkritis',
        11: 'Gruodis'
    }

    


}

