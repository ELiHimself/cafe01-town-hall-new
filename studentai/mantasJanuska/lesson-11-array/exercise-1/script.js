let styles = ['Jazz', 'Blues'];

styles.push('Rock-n-Roll');

styles[1] = 'Classics';

let newArr = styles.shift();
console.log(newArr);

styles.unshift('Rap', 'Reggea');
console.log(styles);
