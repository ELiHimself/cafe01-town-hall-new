function getGeneration(num, gender) {
    if (num === 0 && gender === 'm'){
        return "it's a me Mario";
    }else if (num === 1 && gender === 'm'){
        return "Welcome my son!";
    }else if (num === 2 && gender === 'm'){
        return "Im too young to have a grandson";
    }else if (num === 3 && gender === 'm'){
        return "Grandson you are great";
    }else if (num === -1 && gender === 'm'){
        return "No, i am your father";
    }else if (num === -2 && gender === 'm'){
        return "Hello grandfather";
    }else if (num === -3 && gender === 'm'){
        return "Grand grandfather";
    }else if (num === 0 && gender === 'f'){
        return "it's a me Princes Peach";
    }else if (num === 1 && gender === 'f'){
        return "Welcome my daughter!";
    }else if (num === 2 && gender === 'f'){
        return "Im too young to have a granddauther";
    }else if (num === 3 && gender === 'f'){
        return "Granddauhter, you are great";
    }else if (num === -1 && gender === 'f'){
        return "dont talk with your mother like that";
    }else if (num === -2 && gender === 'f'){
        return "Hello grandmother";
    }else if (num === -3 && gender === 'f'){}
        return "Grand grandmother is grand";
}
console.log(getGeneration(3, "f"));
