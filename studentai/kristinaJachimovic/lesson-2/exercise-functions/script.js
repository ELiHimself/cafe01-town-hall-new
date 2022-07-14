const currentTime = new Date();

function esam() {
  return `Dabar yra ${currentTime.getFullYear()} metai`
};
console.log(esam());

console.log(new Intl.DateTimeFormat('en-US').format(currentTime));