const getData = (input) => {
 let indexPosition = nomeColunas.findIndex((user, index) => user === input);
 return heroisTable.filter((user, index) => index === indexPosition);
}

var dropHeroMenu1 = document.getElementById("select-hero1");
dropHeroMenu1.addEventListener("change", heroChoosen1);

var dropHeroMenu2 = document.getElementById("select-hero2");
dropHeroMenu2.addEventListener("change", heroChoosen2);

/*console.log(getData("Super Name")[0]);

for(head of getData("Super Name")[0]){
  console.log(head);
}*/

window.onload = loadHeroMenu1();
window.onload = loadHeroMenu2();
window.onload = loadImages();

function loadHeroMenu1() {
  var option = document.createElement("option");
  option.innerHTML = "Herói 1";
  option.value = "none";
  dropHeroMenu1.appendChild(option);
  for(hero1 of getData("Super Name")[0]){
    var optionItem = document.createElement("option");
    optionItem.innerHTML = hero1;
    optionItem.value = hero1;
    dropHeroMenu1.appendChild(optionItem);
  }
}

function loadHeroMenu2() {
  var option = document.createElement("option");
  option.innerHTML = "Herói 2";
  option.value = "none";
  dropHeroMenu1.appendChild(option);
  for(hero2 of getData("Super Name")[0]){
    var optionItem = document.createElement("option");
    optionItem.innerHTML = hero2;
    optionItem.value = hero2;
    dropHeroMenu2.appendChild(optionItem);
  }
}

function heroChoosen1() {
  let hero1 = dropHeroMenu1.value;
  console.log(hero1);

}

function heroChoosen2() {
  let hero2 = dropHeroMenu2.value;
}

function loadImages() {
  let imagesContainer = document.getElementsByClassName("images-container");
  images.forEach((imageURL, index) => {
    let image = $('<img>');
    $('.images-container').append(
      $('<img>')
      .attr('src',imageURL)
      .attr('data-id', index)
      .addClass('image')
    );
    // image.src = imageHero;
    // image.dataId = index;
    // image.addClass = "image";
    //     imagesContainer.appendChild(image);
  });
}

function showRestaurants(found){
  found.forEach(restaurant => {
    var image = $("<img>");
    $('.images-container').append(
      $('<img>')
        .attr('src', restaurant.image)
        .attr('data-toggle', 'modal') 
        .attr('data-target', '#exampleModal')
        .addClass('images') 
        .addClass(restaurant.name)
    );
  });
}