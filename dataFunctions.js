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
  return [minNumber(array), maxNumber(array), media(array) ]
}

// ---------------------------------------------------------------------------
// FUNÇÕES PARA COLUNAS CATEGÓRICAS
function getFrequency(array) {
  const uniqueValues = [...new Set(array)];
  const numberUniqueValues = uniqueValues.length; 
  console.log("Valores distintos:" + uniqueValues);
  let numberAppearance = [];

  uniqueValues.forEach((item, index) => {
    if(typeof item === "string"){
      numberAppearance[index] = countInArray(array, item);
    }     
  });
  return [numberAppearance, uniqueValues];
}

function countInArray(array, what) {
  return array.filter(item => item == what).length;
}

function categoryData(array) {
  return [getFrequency()]
}

// ---------------------------------------------------------------------------
// FUNÇÕES PARA COLUNAS DE TEXTO

function separateWordsInDescription(param) {
 let words = [];
 for (i = 0; i < param[0].length; i++) {
   words.push(param[0][i].split(/[ \t\n\r\f\v\,\()\s\n\.\?\#\:]+/));
 }
 return words;
}

function countWordsOfDescription(param) {
 let sumArray = 0;
 for (i = 0; i < param.length; i++) {
   sumArray += param[i].length-1;
 }
 return sumArray;
}

function countCharacters(param) {
 let words = [];
 for (i = 0; i < param[0].length; i++) {
   words.push(param[0][i].split(''));
 }

 let sumCharacters = 0;
 for (i = 0; i < words.length; i++) {
   sumCharacters += words[i].length;
 }
 return sumCharacters;
}

const textData = (array) => {
  return [countWordsOfDescription(separateWordsInDescription(array)), countCharacters(array), 10]
}