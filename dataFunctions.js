const getData = (colName) => {
  let indexPosition = nomeColunas.findIndex((user, index) => user === colName);
  return heroisTable.filter((user, index) => index === indexPosition);
}

// ---------------------------------------------------------------------------
// FUNÇÕES PARA COLUNAS NUMÉRICAS
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

const numberData = (array) => {
  return [media(array), maxNumber(array), minNumber(array)]
}
// ---------------------------------------------------------------------------
// FUNÇÕES PARA COLUNAS CATEGÓRICAS


// ---------------------------------------------------------------------------
// FUNÇÕES PARA COLUNAS DE TEXTO

const numberOfWords = (string) => {
  let words = string.split(' ');
  return words.length - 1;
}

const numberOfChar = (string) => {
  return string.length;
}