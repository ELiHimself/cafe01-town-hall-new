const styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
styles[1] = 'Classics';
const removedStyle = styles.shift();
console.log(removedStyle);
styles.unshift('Rap', 'Reggae');

console.log(styles);
