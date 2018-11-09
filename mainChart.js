function mainChart(chartLocation, chartType, labels, chartLabels, data, display) {
  var ctx = document.getElementById(chartLocation).getContext('2d');
  var chart = new Chart(ctx, {
    type: chartType,
    data: {
      labels: labels,
      datasets: [{
        label: chartLabels, 
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(173,255,47)', 'rgb(34,139,34)'],
        borderColor: 'rgb(255, 99, 132)',
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
mainChart('publisher', 'pie', getFrequency(getData("Publisher")[0])[1], 'Editoras', getFrequency(getData("Publisher")[0])[0], true);
// GRÁFICO CREATORS
mainChart('creators', 'bar', getFrequency(getData("Creators")[0])[1], 'Criadores', getFrequency(getData("Creators")[0])[0], false);
// GRÁFICO GENDER
mainChart('gender', 'pie', getFrequency(getData("Gender")[0])[1], 'Sexo do personagem', getFrequency(getData("Gender")[0])[0], true);
// GRÁFICO CHARACTER TYPE
mainChart('characterType', 'pie', getFrequency(getData("Character Type")[0])[1], 'Tipo de personagem', getFrequency(getData("Character Type")[0])[0], true);
// GRÁFICO APPEARANCES
mainChart('appearances', 'bar', chartNumberLabels, 'Aparições', numberData(heroisTable[7]), false);
// GRÁFICO INTELLIGENCE
mainChart('intelligence', 'bar', chartNumberLabels, 'Taxa de inteligência', numberData(heroisTable[8]), false);
// GRÁFICO STRENGTH
mainChart('strength', 'bar', chartNumberLabels, 'Taxa de força', numberData(heroisTable[9]), false);
// GRÁFICO SPEED
mainChart('speed', 'bar', chartNumberLabels, 'Taxa da velocidade', numberData(heroisTable[10]), false);
// GRÁFICO DURABILITY
mainChart('durability', 'bar', chartNumberLabels, 'Taxa de resistência', numberData(heroisTable[11]), false);
// GRÁFICO POWER
mainChart('power', 'bar', chartNumberLabels, 'Taxa de poder', numberData(heroisTable[12]), false);
// GRÁFICO COMBAT
mainChart('combat', 'bar', chartNumberLabels, 'Taxa de combate', numberData(heroisTable[13]), false);
// GRÁFICO GOOD OR BAD
mainChart('goodOrBad', 'pie', getFrequency(getData("Good or Bad")[0])[1], 'Índole', getFrequency(getData("Good or Bad")[0])[0], true);
// GRÁFICO DESCRIPTION
mainChart('description', 'horizontalBar', ['#words', '#characters', 'Most commom word'], 'Texto', textData(heroisTable[15]), false);