const styles = ['Jazz', 'Blues'];
console.log(styles);

styles.push('Rock-n-Roll');
console.log(styles);

styles[1] = 'Classics';
console.log(styles);

console.log(styles.shift());

styles.unshift('Rap', 'Reggae');
console.log(styles);
