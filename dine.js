var nome = "Super Name";

const indexPosition = nomeColunas.findIndex((user, index, array) => user === nome);
console.log(index)

const indexValues = heroisTable.filter((user, index, array) => index === indexPosition);
console.log(indexValues)

const media = ( array ) => array.reduce((acc, cur) => acc + cur, 0 ) / array.length;

const maxNumber = (array) => {
  let maxNumber = 0;
  array.map((val) => maxNumber = val > maxNumber ? val : maxNumber);
  return maxNumber;
}

const minNumber = (array) => {
  let minNumber = 9999;
  array.map((val) => minNumber = val < minNumber ? val : minNumber);
  return minNumber;
}

console.log('NUMBERS');

console.log(heroisTable[10]);
console.log(media(heroisTable[10]));
console.log(maxNumber(heroisTable[10]));
console.log(minNumber(heroisTable[10]));


const numberOfWords = (string) => {
  let words = string.split(' ');
  return words.length - 1;
}

const numberOfChar = (string) => {
  return string.length;
}

const

console.log('TEXT');

console.log(numberOfWords('um dois tres quatro cinco seis'));
console.log(numberOfChar('um dois tres quatro cinco seis'));
console.log();
