window.onload = loadImagesModal1();
window.onload = loadImagesModal2();
 
 function heroCharacteristics(indexHero) {
  let dataDescription = ["Super Name", "Real Name", "Character Type", "Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"];
  let heroDescription = [];
  for (i = 0; i < dataDescription.length; i++) {
    heroDescription.push(getData(dataDescription[i])[0][indexHero]);
  }
 return heroDescription;
 }


 function loadImagesModal1() {
  let imagesContainer = document.getElementsByClassName("images-container1");
  images.forEach((imageURL, index) => {
    let div = $('<div>');
    let image = $('<img>');
    $('.images-container1').append(
      $('<div>')
      .addClass('frame')
      .append($('<img>')
        .attr('src',imageURL)
        .attr('data-id', index)
        .addClass('image1'))
    );

  });
   let heroImage1 = document.getElementsByClassName("image1");
   for (let i = 0; i < heroImage1.length; i++) {
     heroImage1[i].addEventListener('click', showHeroes1, false);


   }
 }

function loadImagesModal2() {
  let imagesContainer = document.getElementsByClassName("images-container2");
  images.forEach((imageURL, index) => {
    let div = $('<div>');
    let image = $('<img>');
    $('.images-container2').append(
    $('<div>')
    .addClass('frame')
    .append($('<img>')
    .attr('src', imageURL)
    .attr('data-id', index)
    .addClass('image2'))
    );

  });

  let heroImage2 = document.getElementsByClassName("image2");
  for (let i = 0; i < heroImage2.length; i++) {
    heroImage2[i].addEventListener('click', showHeroes2, false);
   

  }
}

$(".btn-fight").click(function() {
  let hero1 = heroChoosen1();
  let hero2 = heroChoosen2();
  battleResult(hero1, hero2);
});

function battleResult(hero1, hero2){
  let indexHero1 = getData("Super Name")[0].findIndex(nameHero => nameHero === hero1);
  let indexHero2 = getData("Super Name")[0].findIndex(nameHero => nameHero === hero2);

  let averageHero1 = grade(indexHero1);
  let averageHero2 = grade(indexHero2);

  if (averageHero1 > averageHero2) {
    return averageHero1;
  } else {
    return averageHero2;
  }
}

function grade(index){
  let sum = (6*getData('Intelligence')[0][index] +
    2*getData('Strength')[0][index] +
    4*getData('Speed')[0][index] +
    3*getData('Durability')[0][index] +
    5*getData('Power')[0][index] +
    getData('Combat')[0][index])/20;

  if (getData('Character Type')[0][index] === "Mutante") {
    sum+=5;
  } else if (getData('Character Type')[0][index] === "God/Eternal") {
    sum+=10;
  } else if (getData('Character Type')[0][index] === ("Alien" || "Radiation")){
    sum+=3;
  } 
  
  return sum;
}

function showHeroes(event) {
  let index = event.target.dataset.id;
  console.log(heroCharacteristics(index))

}

function showHeroes1(event) {
 
  let index = heroCharacteristics(event.target.dataset.id);
  document.getElementById("name1").textContent = index[0];
  document.getElementById("realName1").textContent = index[1];
  document.getElementById("characterType1").textContent = index[2];
  document.getElementById("intelligence1").textContent = index[3];
  document.getElementById("strength1").textContent = index[4];
  document.getElementById("speed1").textContent = index[5];
  document.getElementById("durability1").textContent = index[6];
  document.getElementById("power1").textContent = index[7];
  document.getElementById("combat1").textContent = index[8];

}


function showHeroes2(event) {

  let index = heroCharacteristics(event.target.dataset.id);
  document.getElementById("name2").textContent = index[0];
  document.getElementById("realName2").textContent = index[1];
  document.getElementById("characterType2").textContent = index[2];
  document.getElementById("intelligence2").textContent = index[3];
  document.getElementById("strength2").textContent = index[4];
  document.getElementById("speed2").textContent = index[5];
  document.getElementById("durability2").textContent = index[6];
  document.getElementById("power2").textContent = index[7];
  document.getElementById("combat2").textContent = index[8];


}