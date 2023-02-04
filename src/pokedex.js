var numberSelect = "1";

function writeInfo(number_pokemon) {
  // InsertPicture

  fetch("https://pokeapi.co/api/v2/pokemon/" + number_pokemon)
    .then((Response) => Response.json())
    .then((data) =>
      insertPicture(data.sprites.front_default, "pokemon-pic-front")
    );

  // InsertPictureBack
  fetch("https://pokeapi.co/api/v2/pokemon/" + number_pokemon)
    .then((Response) => Response.json())
    .then((data) =>
      insertPicture(data.sprites.back_default, "pokemon-pic-back")
    );

  // InsertName
  fetch("https://pokeapi.co/api/v2/pokemon/" + number_pokemon)
    .then((Response) => Response.json())
    .then((data) => insertText("Name: " + data.name, "pokemon-info"));

  fetch("https://pokeapi.co/api/v2/pokemon/" + number_pokemon)
    .then((Response) => Response.json())
    .then((data) => insertText("Weight: " + data.weight, "pokemon-info"));

  fetch("https://pokeapi.co/api/v2/pokemon/" + number_pokemon)
    .then((Response) => Response.json())
    .then((data) => insertText("Height: " + data.height, "pokemon-info"));

  fetch("https://pokeapi.co/api/v2/pokemon/" + number_pokemon)
    .then((Response) => Response.json())
    .then((data) =>
      insertText("Type: " + data.types[0].type.name, "pokemon-info")
    );

  fetch("https://pokeapi.co/api/v2/pokemon/" + number_pokemon)
    .then((Response) => Response.json())
    .then((data) =>
      insertText("Abilities: " + data.abilities[0].ability.name, "pokemon-info")
    );

  fetch("https://pokeapi.co/api/v2/pokemon/" + number_pokemon)
    .then((Response) => Response.json())
    .then((data) => insertText("Number pokemon: " + data.id, "pokemon-info"));
}

// funcion para selecionar una numero de 1 al 850 al azar
function randomNumber() {
  numberSelect = Math.floor(Math.random() * 851) + 1;
  writeInfo(numberSelect);
}

//Function that cleans the written in dom by javascript
function clean() {}

function userSelect() {
  let numberPokemon = prompt("Please enter number pokemon");
  animationTopLeds();

  //retrasar la ejecucion de la funcion
  setTimeout(function () {
    document.getElementById("pokemon-info").innerHTML = "";
    document.getElementById("pokemon-pic-front").innerHTML = "";
    document.getElementById("pokemon-pic-back").innerHTML = "";

    if (numberPokemon > 0 && numberPokemon < 851) {
      writeInfo(numberPokemon);
    } else {
      randomNumber();
    }
  }, 1000);
}

function insertText(text, divSelection) {
  var node = document.getElementById(divSelection);
  var newNode = document.createElement("p");
  newNode.appendChild(document.createTextNode(text));
  node.appendChild(newNode);
}

function insertPicture(picture, div_selection) {
  var img = document.createElement("img");
  img.src = picture;
  var div = document.getElementById(div_selection);
  div.appendChild(img);
}

function animationButtonSelectPokemon() {
  for (var i = 0; i < 100; i++) {
    setInterval(function () {
      document.getElementById("buttom-endhappy").style.backgroundColor =
        "rgb(63,63, 63)";
    }, 750);
    setInterval(function () {
      document.getElementById("buttom-endhappy").style.backgroundColor =
        "rgb(78, 78, 78)";
    }, 1500);
  }
}

function changeColor01() {
  var button_maquina01 = document.getElementById("ball01");
  button_maquina01.style.backgroundColor = "rgb(255, 89, 89)";
  setTimeout(function () {
    button_maquina01.style.backgroundColor = "red";
  }, 100);
}
function changeColor02() {
  var button_maquina02 = document.getElementById("ball02");
  button_maquina02.style.backgroundColor = "rgb(250, 250, 139)";
  setTimeout(function () {
    button_maquina02.style.backgroundColor = "yellow";
  }, 100);
}
function changeColor03() {
  var button_maquina03 = document.getElementById("ball03");
  button_maquina03.style.backgroundColor = "rgb(78, 245, 78)";
  setTimeout(function () {
    button_maquina03.style.backgroundColor = "green";
  }, 100);
}

function animationTopLeds() {
  var movents = 0;
  interval = setInterval(() => {
    var randomMovent = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    randomMovent = parseInt(randomMovent);
    if (randomMovent == 1) {
      changeColor01();
    } else if (randomMovent == 2) {
      changeColor02();
    } else if (randomMovent == 3) {
      changeColor03();
    }

    movents = movents + 1;

    if (movents >= 10) {
      clearInterval(interval);
    }
  }, 100);
}

animationButtonSelectPokemon();
