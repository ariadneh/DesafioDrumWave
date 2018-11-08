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
mainChart('publisher', 'pie', getFrequency(getData("Publisher")[0])[1], 'Editoras', getFrequency(getData("Publisher")[0])[0], 'Editoras');
// GRÁFICO CREATORS
mainChart('creators', 'pie', getFrequency(getData("Creators")[0])[1], 'Criadores', getFrequency(getData("Creators")[0])[0], 'Criadores');
// GRÁFICO GENDER
mainChart('gender', 'pie', getFrequency(getData("Gender")[0])[1], 'Sexo do personagem', getFrequency(getData("Gender")[0])[0], 'Sexo do personagem');
// GRÁFICO CHARACTER TYPE
mainChart('characterType', 'pie', getFrequency(getData("Character Type")[0])[1], 'Tipo de personagem', getFrequency(getData("Character Type")[0])[0], 'Tipo de personagem');
// GRÁFICO APPEARANCES
mainChart('appearances', 'bar', ['Mínimo', 'Máximo', 'Média'], 'Aparições', numberData(heroisTable[7]), 'Aparições');
// GRÁFICO INTELLIGENCE
mainChart('intelligence', 'bar', ['Mínimo', 'Máximo', 'Média'], 'Taxa de inteligência', numberData(heroisTable[8]), 'Taxa de inteligência');
// GRÁFICO STRENGTH
mainChart('strength', 'bar', ['Mínimo', 'Máximo', 'Média'], 'Taxa de força', numberData(heroisTable[9]), 'Taxa de força');
// GRÁFICO SPEED
mainChart('speed', 'bar', ['Mínimo', 'Máximo', 'Média'], 'Taxa da velocidade', numberData(heroisTable[10]), 'Taxa da velocidade');
// GRÁFICO DURABILITY
mainChart('durability', 'bar', ['Mínimo', 'Máximo', 'Média'], 'Taxa de resistência', numberData(heroisTable[11]), 'Taxa de resistência');
// GRÁFICO POWER
mainChart('power', 'bar', ['Mínimo', 'Máximo', 'Média'], 'Taxa de poder', numberData(heroisTable[12]), 'Taxa de poder');
// GRÁFICO COMBAT
mainChart('combat', 'bar', ['Mínimo', 'Máximo', 'Média'], 'Taxa de combate', numberData(heroisTable[13]), 'Taxa de combate');
// GRÁFICO GOOD OR BAD
mainChart('goodOrBad', 'bar', getFrequency(getData("Good or Bad")[0])[1], 'Índole', getFrequency(getData("Good or Bad")[0]), 'Índole');
// GRÁFICO DESCRIPTION
mainChart('description', 'horizontalBar', ['Mínimo', 'Máximo', 'Média'], 'Texto', textData(heroisTable[15]), 'Texto');