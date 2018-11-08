const getData = (input) => {
  let indexPosition = nomeColunas.findIndex((user, index) => user === input);
  return heroisTable.filter((user, index) => index === indexPosition);
}
console.log(getData('Super Name'));


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



console.log('TEXT');

console.log(numberOfWords('um dois tres quatro cinco seis'));
console.log(numberOfChar('um dois tres quatro cinco seis'));


// function mainChart(chartLocation, chartType, labels, chartLabel, data, chartTitle) {
//   var ctx = document.getElementById(chartLocation).getContext('2d');
//   var chart = new Chart(ctx, {
//     type: chartType,
//     data: {
//         labels: labels,
//         datasets: [{
//             label: chartLabel,
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: data,
//         }]
//     },
//     options: {
//       title: {
//           display: true,
//           text: chartTitle
//       }
//   }
// });
// }
