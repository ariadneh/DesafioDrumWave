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

// console.log(getData(nomeColunas[15]));
// console.log(separateWordsInDescription(getData(nomeColunas[15])));
// console.log(countWordsOfDescription(separateWordsInDescription(getData(nomeColunas[15]))));


// ---------------------------------------------------------------------------
// FUNÇÕES PARA COLUNAS DE TEXTO
// Separa as palavras do texto Description e retorna uma array somente com palavras
function separateWordsInDescription(param) {
  let words = [];
  for (i = 0; i < param[0].length; i++) {
    words.push(param[0][i].split(/[ \t\n\r\f\v\,\()\s\n\.\?\#\:]+/));
  }
  let wordsAll = words.reduce((list, sub) => list.concat(sub), []);
  let wordsAllClean = [];
  for (i = 0; i < wordsAll.length; i++) {
    if (wordsAll[i] !== "") {
      wordsAllClean.push(wordsAll[i].toUpperCase());
    }
  }
  return wordsAllClean;
 }
 
//  // Conta o número de palavras do retorno da função separateWordsInDescription
 function countWordsOfDescription(param) {
  let sumArray = 0;
  for (i = 0; i < param.length; i++) {
     sumArray= sumArray + 1;
  }
  return sumArray;
  }
 
//  // Separa e conta o número de caracteres do array na posição Description
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
  

// função que mostra a palavra que mais aparece no retorno da função separateWordsInDescription 
function wordAppearsMoreTimes(param) {

  let counts = {};
  let compare = -1;
  let mostFrequent;
 
  for (i = 0; i < param.length; i++) {
    let word = param[i];

    // let wordsSplit = separateWordsInDescription(param);
    if (counts[word] === undefined) {
      counts[word] = 1;
    } else {
      counts[word] = counts[word] + 1;
    }
    if (counts[word] > compare) {
      compare = counts[word];
      mostFrequent = param[i];
    }
  }
 
  let count = 0;
  for (i = 0; i < param.length; i++ ){
    if (param[i] === mostFrequent) {
      count++;
    }
  }
  
  return [count, mostFrequent];
}

console.log(wordAppearsMoreTimes(separateWordsInDescription(getData(nomeColunas[15]))));

const textData = (array) => {
  return [countWordsOfDescription(separateWordsInDescription(array)), countCharacters(getData(nomeColunas[15])), wordAppearsMoreTimes(separateWordsInDescription(getData(nomeColunas[15])))[0]]
}

console.log(textData(heroisTable[15]));
