let muzikantai = 0;


if (muzikantai === 0) {
    console.log('Ne grupė');
} else if (muzikantai === 1) {
    console.log('solo');
} else if (muzikantai === 2) {
    console.log('duetas');
} else if (muzikantai === 3) {
    console.log('trio');
} else if (muzikantai === 4) {
    console.log('kvartetas');
} else if (muzikantai > 4) {
    console.log('didelė grupė');
}

muzikantai = 1;

if (muzikantai === 0) {
    console.log('Ne grupė');
} else if (muzikantai === 1) {
    console.log('solo');
} else if (muzikantai === 2) {
    console.log('duetas');
} else if (muzikantai === 3) {
    console.log('trio');
} else if (muzikantai === 4) {
    console.log('kvartetas');
} else if (muzikantai > 4) {
    console.log('didelė grupė');
}

muzikantai = 4;

if (muzikantai === 0) {
    console.log('Ne grupė');
} else if (muzikantai === 1) {
    console.log('solo');
} else if (muzikantai === 2) {
    console.log('duetas');
} else if (muzikantai === 3) {
    console.log('trio');
} else if (muzikantai === 4) {
    console.log('kvartetas');
} else if (muzikantai > 4) {
    console.log('didelė grupė');
}

// *************************************************************************************************************************

function kokiaGrupe(muzikantai) {
    switch (muzikantai) {
        case 0:
            console.log('Ne grupė');
            break;
        case 1:
            console.log('solo');
            break;
        case 2:
            console.log('duetas');
            break;
        case 3:
            console.log('trio');
            break;
        case 4:
            console.log('kvartetas');
            break;
        default:   
            console.log('didelė grupė');
            break;
    }
}

kokiaGrupe(0);
kokiaGrupe(1);
kokiaGrupe(2);
kokiaGrupe(3);
kokiaGrupe(4);
kokiaGrupe(5);
kokiaGrupe(99);

