function mainChart(chartLocation, chartType, labels, chartLabels, data, display) {
  let ctx = document.getElementById(chartLocation).getContext('2d');
  let chart = new Chart(ctx, {
    type: chartType,
    data: {
      labels: labels,
      datasets: [{
        label: chartLabels, 
        // backgroundColor: ['rgb(255, 99, 132)', 'rgb(173,255,47)', 'rgb(34,139,34)'],
        backgroundColor: ['#ec1d24', '#0c7cec', '#ffe600', '#3d8d41', '#ff6600', '#ff6666', '#660066'],
        borderColor: '#101015',
          data: data,
      }]
    },
    options: {
      legend: {
        display: display,
      }
    }
  })
}
 
let chartNumberLabels = ["Minimum", "Maximum", "Average"];

// GRÁFICO PUBLISHER
mainChart('publisher', 'pie', getFrequency(getData("Publisher")[0])[1], 'Publisher', getFrequency(getData("Publisher")[0])[0], true);
// GRÁFICO CREATORS
mainChart('creators', 'bar', getFrequency(getData("Creators")[0])[1], 'Creators', getFrequency(getData("Creators")[0])[0], false);
// GRÁFICO GENDER
mainChart('gender', 'pie', getFrequency(getData("Gender")[0])[1], 'Gender', getFrequency(getData("Gender")[0])[0], true);
// GRÁFICO CHARACTER TYPE
mainChart('characterType', 'pie', getFrequency(getData("Character Type")[0])[1], 'Character Type', getFrequency(getData("Character Type")[0])[0], true);
// GRÁFICO APPEARANCES
mainChart('appearances', 'bar', chartNumberLabels, 'Appearances', numberData(heroisTable[7]), false);
// GRÁFICO INTELLIGENCE
mainChart('intelligence', 'bar', chartNumberLabels, 'Intelligence', numberData(heroisTable[8]), false);
// GRÁFICO STRENGTH
mainChart('strength', 'bar', chartNumberLabels, 'Strength', numberData(heroisTable[9]), false);
// GRÁFICO SPEED
mainChart('speed', 'bar', chartNumberLabels, 'Speed', numberData(heroisTable[10]), false);
// GRÁFICO DURABILITY
mainChart('durability', 'bar', chartNumberLabels, 'Durability', numberData(heroisTable[11]), false);
// GRÁFICO POWER
mainChart('power', 'bar', chartNumberLabels, 'Power', numberData(heroisTable[12]), false);
// GRÁFICO COMBAT
mainChart('combat', 'bar', chartNumberLabels, 'Combat', numberData(heroisTable[13]), false);
// GRÁFICO GOOD OR BAD
mainChart('goodOrBad', 'pie', getFrequency(getData("Good or Bad")[0])[1], 'Good or Bad', getFrequency(getData("Good or Bad")[0])[0], true);
// GRÁFICO DESCRIPTION
mainChart('description', 'horizontalBar', ['#words', '#characters', 'Most commom word: ' + wordAppearsMoreTimes(separateWordsInDescription(getData(nomeColunas[15])))[1]], 'Description', textData(heroisTable[15]), false);
