const styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
styles[1] = 'Classics';
console.log(styles.shift());
styles.unshift('Rap', 'Reggae');

console.log(styles);

// Uzduotis 2 ------------------

let numbersArr = [11, -2, 34, 45, 19, -5, 6];

function getMaxSubSum(arr) {
  let result = 0;
  for (num of arr) {
    if (num > 0) {
      result += num;
    }
  }
  return result;
}

console.log(getMaxSubSum(numbersArr));
