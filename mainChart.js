function mainChart(chartLocation, chartType, labels, chartLabels, data, chartTitle, display) {
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
      title: {
        display: true,
        text: chartTitle
      },
      legend: {
        display: display,
      }
    }
  })
}
 
let chartNumberLabels = ["Mínimo", "Máximo", "Média"];

// GRÁFICO PUBLISHER
mainChart('publisher', 'pie', getFrequency(getData("Publisher")[0])[1], 'Editoras', getFrequency(getData("Publisher")[0])[0], 'Editoras', true);
// GRÁFICO CREATORS
mainChart('creators', 'bar', getFrequency(getData("Creators")[0])[1], 'Criadores', getFrequency(getData("Creators")[0])[0], 'Criadores', true);
// GRÁFICO GENDER
mainChart('gender', 'pie', getFrequency(getData("Gender")[0])[1], 'Sexo do personagem', getFrequency(getData("Gender")[0])[0], 'Sexo do personagem', true);
// GRÁFICO CHARACTER TYPE
mainChart('characterType', 'pie', getFrequency(getData("Character Type")[0])[1], 'Tipo de personagem', getFrequency(getData("Character Type")[0])[0], 'Tipo de personagem', true);
// GRÁFICO APPEARANCES
mainChart('appearances', 'bar', chartNumberLabels, 'Aparições', numberData(heroisTable[7]), 'Aparições', false);
// GRÁFICO INTELLIGENCE
mainChart('intelligence', 'bar', chartNumberLabels, 'Taxa de inteligência', numberData(heroisTable[8]), 'Taxa de inteligência', false);
// GRÁFICO STRENGTH
mainChart('strength', 'bar', chartNumberLabels, 'Taxa de força', numberData(heroisTable[9]), 'Taxa de força', false);
// GRÁFICO SPEED
mainChart('speed', 'bar', chartNumberLabels, 'Taxa da velocidade', numberData(heroisTable[10]), 'Taxa da velocidade', false);
// GRÁFICO DURABILITY
mainChart('durability', 'bar', chartNumberLabels, 'Taxa de resistência', numberData(heroisTable[11]), 'Taxa de resistência', false);
// GRÁFICO POWER
mainChart('power', 'bar', chartNumberLabels, 'Taxa de poder', numberData(heroisTable[12]), 'Taxa de poder', false);
// GRÁFICO COMBAT
mainChart('combat', 'bar', chartNumberLabels, 'Taxa de combate', numberData(heroisTable[13]), 'Taxa de combate', false);
// GRÁFICO GOOD OR BAD
mainChart('goodOrBad', 'pie', getFrequency(getData("Good or Bad")[0])[1], 'Índole', getFrequency(getData("Good or Bad")[0])[0], 'Índole', true);
// GRÁFICO DESCRIPTION
mainChart('description', 'horizontalBar', chartNumberLabels, 'Texto', textData(heroisTable[15]), 'Texto', false);