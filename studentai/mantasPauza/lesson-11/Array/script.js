const styles = ['Jazz', 'Blues'];

console.log(styles);

styles.push('Rock-n-Roll');

console.log(styles);

styles[1] = 'Classics';

console.log(styles);

const firstStyle = styles.shift();

console.log(firstStyle);
console.log(styles);

styles.unshift('Rap', 'Reggae');

console.log(styles);