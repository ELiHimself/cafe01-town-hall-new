// let randomArr = [11, 'cat', true, 4, 'mouse', 5, 9, 5, 76, false];

// function getArrayByData(array, dataType) {
//     let filteredBasket = [];

//   for (let type of array) {
//     if (typeof type === dataType) {
//         filteredBasket.push(type);
//     }
//   return filteredBasket;                           kazin kodel man neveikia?
//   }                                                o gi todel kad return ne toj vietoj
// }                                                  10 min sedziu ir nesuprantu

// console.log(getArrayByData(randomArr, 'number'));



let randomArr = [11, 'cat', true, 4, 'mouse', 5, 9, 5, 76, false];

function getArrayByData(array, dataType) {
    let filteredBasket = [];

  for (let type of array) {
    if (typeof type === dataType) {
        filteredBasket.push(type);
    }
  }
  return filteredBasket;                               //paziurejau jusu pavyzdi ir 
}                                                      //supratau kur klaida pas mane

console.log(getArrayByData(randomArr, 'number'));


