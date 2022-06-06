var numberSelect = "1";

function writeInfo(number_pokemon){
  // InsertPicture


fetch("https://pokeapi.co/api/v2/pokemon/" + number_pokemon)
	.then(Response => Response.json())
	.then(data => insertPicture(data.sprites.front_default, "pokemon-pic-front"))
	
// InsertPictureBack
fetch("https://pokeapi.co/api/v2/pokemon/" + number_pokemon)
	.then(Response => Response.json())
	.then(data => insertPicture(data.sprites.back_default, "pokemon-pic-back"))

// InsertName
fetch("https://pokeapi.co/api/v2/pokemon/" + number_pokemon)
	.then(Response => Response.json())
	.then(data => insertText("Name: " + data.name, "pokemon-info"))

fetch("https://pokeapi.co/api/v2/pokemon/" + number_pokemon)
	.then(Response => Response.json())
	.then(data => insertText("Weight: " + data.weight , "pokemon-info"))

fetch("https://pokeapi.co/api/v2/pokemon/" + number_pokemon)
	.then(Response => Response.json())
	.then(data => insertText("Height: " + data.height , "pokemon-info"))

fetch("https://pokeapi.co/api/v2/pokemon/" + number_pokemon)
	.then(Response => Response.json())
	.then(data => insertText("Type: " + data.types[0].type.name , "pokemon-info"))

fetch("https://pokeapi.co/api/v2/pokemon/" + number_pokemon)
	.then(Response => Response.json())
	.then(data => insertText("Abilities: " + data.abilities[0].ability.name , "pokemon-info"))

fetch("https://pokeapi.co/api/v2/pokemon/" + number_pokemon)
	.then(Response => Response.json())
	.then(data => insertText("Number pokemon: " + data.id , "pokemon-info"))

}


// funcion para selecionar una numero de 1 al 850 al azar
function randomNumber(){
	numberSelect = Math.floor(Math.random() * 851) + 1;
	writeInfo(numberSelect);
}





function userSelect(){
  document.location.reload(true);
}

function insertText(text, divSelection){
	var node = document.getElementById(divSelection);
  	var newNode = document.createElement('p');
  	newNode.appendChild(document.createTextNode(text));
  	node.appendChild(newNode);
}


function insertPicture(picture, div_selection){
	var img = document.createElement("img");
	img.src = picture;
	var div = document.getElementById(div_selection);
	div.appendChild(img);
	
}

let numberPokemon = prompt("Please enter number pokemon");
if(numberPokemon > 0 && numberPokemon < 851){
	writeInfo(numberPokemon);
} else {
	randomNumber();
}








