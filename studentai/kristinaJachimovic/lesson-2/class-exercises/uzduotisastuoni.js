function getGeneration(number, gender){
  if (number === -3 && gender === 'f') {
    console.log('great grandmother');
  } else if (number === -3 && gender != 'f') {
    console.log('great grandfather');
  } else if (number === -2 && gender === 'f') {
    console.log('grandmother');
  } else if (number === -2 && gender != 'f') {
    console.log('grandfather');
  } else if (number === -1 && gender === 'f') {
    console.log('mother');
  } else if (number === 0) {
    console.log('me!');
  } else if (number === 1 && gender === 'f') {
    console.log('daughter');
  } else if (number === 1 && gender != 'f') {
    console.log('son');
  } else if (number === 2 && gender === 'f') {
    console.log('granddaughter')
  } else if (number === 2 && gender != 'f') {
    console.log('grandson');
  } else if (number === 3 && gender === 'f') {
    console.log('great granddaughter');
  } else {
    console.log('grandson');
  }
}
getGeneration(2, "m");