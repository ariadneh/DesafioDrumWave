function mainChart(chartLocation, chartType, labels, chartLabel, data, chartTitle) {
    var ctx = document.getElementById(chartLocation).getContext('2d');
    var chart = new Chart(ctx, {
      type: chartType,
      data: {
          labels: labels,
          datasets: [{
              label: chartLabel,
              backgroundColor: ['rgb(255, 99, 132)', 'rgb(173,255,47)', 'rgb(34,139,34)'],
              borderColor: 'rgb(255, 99, 132)',
              data: data,
          }]
      },
      options: {
        title: {
            display: true,
            text: chartTitle
        }
    }
  });
  }

// GRÁFICO PUBLISHER
mainChart('publisher', 'pie', ['min', 'max', 'media'], 'indice da velocidade', [minNumber(heroisTable[12]), maxNumber(heroisTable[12]), media(heroisTable[12])], 'velocidade');
// GRÁFICO CREATORS
mainChart('creators', 'pie', ['min', 'max', 'media'], 'indice da velocidade', [minNumber(heroisTable[12]), maxNumber(heroisTable[12]), media(heroisTable[12])], 'velocidade');
// GRÁFICO GENDER
mainChart('gender', 'pie', ['min', 'max', 'media'], 'indice da velocidade', [minNumber(heroisTable[12]), maxNumber(heroisTable[12]), media(heroisTable[12])], 'velocidade');
// GRÁFICO CHARACTER TYPE
mainChart('characterType', 'pie', ['min', 'max', 'media'], 'indice da velocidade', [minNumber(heroisTable[12]), maxNumber(heroisTable[12]), media(heroisTable[12])], 'velocidade');
// GRÁFICO APPEARANCES
mainChart('appearances', 'bar', ['min', 'max', 'media'], 'indice da velocidade', [minNumber(heroisTable[12]), maxNumber(heroisTable[12]), media(heroisTable[12])], 'velocidade');
// GRÁFICO INTELLIGENCE
mainChart('intelligence', 'bar', ['min', 'max', 'media'], 'indice da velocidade', [minNumber(heroisTable[12]), maxNumber(heroisTable[12]), media(heroisTable[12])], 'velocidade');
// GRÁFICO STRENGTH
mainChart('strength', 'bar', ['min', 'max', 'media'], 'indice da velocidade', [minNumber(heroisTable[12]), maxNumber(heroisTable[12]), media(heroisTable[12])], 'velocidade');
// GRÁFICO SPEED
mainChart('speed', 'bar', ['min', 'max', 'media'], 'indice da velocidade', [minNumber(heroisTable[12]), maxNumber(heroisTable[12]), media(heroisTable[12])], 'velocidade');
// GRÁFICO DURABILITY
mainChart('durability', 'bar', ['min', 'max', 'media'], 'indice da velocidade', [minNumber(heroisTable[12]), maxNumber(heroisTable[12]), media(heroisTable[12])], 'velocidade');
// GRÁFICO POWER
mainChart('power', 'bar', ['min', 'max', 'media'], 'indice da velocidade', [minNumber(heroisTable[12]), maxNumber(heroisTable[12]), media(heroisTable[12])], 'velocidade');
// GRÁFICO COMBAT
mainChart('combat', 'bar', ['min', 'max', 'media'], 'indice da velocidade', [minNumber(heroisTable[12]), maxNumber(heroisTable[12]), media(heroisTable[12])], 'velocidade');
// GRÁFICO GOOD OR BAD
mainChart('goodOrBad', 'bar', ['min', 'max', 'media'], 'indice da velocidade', [minNumber(heroisTable[12]), maxNumber(heroisTable[12]), media(heroisTable[12])], 'velocidade');
// GRÁFICO DESCRIPTION
mainChart('description', 'horizontalBar', ['min', 'max', 'media'], 'indice da velocidade', [minNumber(heroisTable[12]), maxNumber(heroisTable[12]), media(heroisTable[12])], 'velocidade');