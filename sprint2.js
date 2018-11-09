<<<<<<< HEAD
window.onload = loadImages();

function heroChoosen1() {
  let hero1 = dropHeroMenu1.value;
  return hero1;
}

function heroChoosen2() {
  let hero2 = dropHeroMenu2.value;
  return hero2;
}
=======
// const getData = (input) => {
//   let indexPosition = nomeColunas.findIndex((user, index) => user === input);
//   return heroisTable.filter((user, index) => index === indexPosition);
// }

// const dropHeroMenu1 = document.getElementById("select-hero1");
// let hero1 = dropHeroMenu1.addEventListener("change", heroChoosen1);

// const dropHeroMenu2 = document.getElementById("select-hero2");
// let hero2 = dropHeroMenu2.addEventListener("change", heroChoosen2);

// window.onload = loadHeroMenu1();
// window.onload = loadHeroMenu2();
window.onload = loadImages();

// function loadHeroMenu1() {
//   const option = document.createElement("option");
//   option.innerHTML = "Herói 1";
//   option.value = "none";
//   dropHeroMenu1.appendChild(option);
//   for(hero1 of getData("Super Name")[0]){
//     const optionItem = document.createElement("option");
//     optionItem.innerHTML = hero1;
//     optionItem.value = hero1;
//     dropHeroMenu1.appendChild(optionItem);
//   }
// }

// function loadHeroMenu2() {
//   var option = document.createElement("option");
//   option.innerHTML = "Herói 2";
//   option.value = "none";
//   dropHeroMenu1.appendChild(option);
//   for(hero2 of getData("Super Name")[0]){
//     var optionItem = document.createElement("option");
//     optionItem.innerHTML = hero2;
//     optionItem.value = hero2;
//     dropHeroMenu2.appendChild(optionItem);
//   }
// }

// function heroChoosen1() {
//   let hero1 = dropHeroMenu1.value;
//   console.log(hero1);
//   return hero1;
// }

// function heroChoosen2() {
//   let hero2 = dropHeroMenu2.value;
//   console.log(hero2);
//   return hero2;
// }
>>>>>>> e996ee4da39e5819d6a8cdd2cb77733cccf05810

function loadImages() {
  let imagesContainer = document.getElementsByClassName("images-container");
  images.forEach((imageURL, index) => {
    let image = $('<img>');
    $('.images-container').append(
      // $('<img>')
      // .attr('src', imageURL)
      // .attr('data-id', index)
      // .addClass('image')
      `<div class='frame'><img id='index' class='image' src=${imageURL}></div>`
    );
  });

  for (let i = 0; i < imagesContainer.length; i++) {
    imagesContainer[i].addEventListener('click', showHeroes, false);
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


}
