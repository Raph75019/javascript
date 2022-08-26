let pokemons = ['bellossom', 'bulbasaur', 'butterfree', 'calyrex', 'charizad', 'glastrier', 'mareep', 'marill', 'regidrago', 'regieleki',
    'squirtle', 'sudowoodo', 'xatu', 'zarude'];
let stories = ['you ran into this weird little creature ... it\'s intrigued by you, maybe she likes you, Oh wait she is about to bite you !!!!! Ruuuuun ... oh No you died :)',
    'once upon a time, an adventurer was on his way to a long lost village, but in their way they stumbled upon what will be one of their best friends, and adorable lowkey creepy creature.'];

// fonction genererNombre(maximum){
function genererNombre(maximum) {
    // première étape : générer un nombre aléatoire entre 0 et 1 en utilisant Math.random()
    let aleatoire = Math.random();
    console.log(aleatoire)
    // deuxième étape : multiplier ce nombre aléatoire par le maximum passé en paramètre 
    aleatoire = aleatoire * maximum;
    console.log(aleatoire)
    // troisième étape : faire Math.floor(résultat de la deuxième étape);
    aleatoire = Math.floor(aleatoire);
    console.log(aleatoire)

    // cette fonction va retourner le résultat de la troisième étape
    return aleatoire;
    // }
}
// pour appeler la fonction gernererNombre() on doit faire : 
// let le_nom_de_ma_variable = genererNombre(passer une valeur en argument, ça sera le maximum);

let test = genererNombre(9);
console.log(test);

let indicePokemon = genererNombre(pokemons.length);
let indiceStory = genererNombre(stories.length);


let nomutilisateur = prompt("Mettre votre nom");
let _username = document.getElementsByClassName("username");
for (let indice = 0; indice < _username.length; indice++) {
    _username[indice].innerText = nomutilisateur;
}
let _pokemonName = document.getElementsByClassName("pokemon-name");
for (let indice = 0; indice < _pokemonName.length; indice++) {
    _pokemonName[indice].innerText = pokemons[indicePokemon];
}
// placer l'histoire dans le div avec l'id story
let elementstories = document.getElementById("story");
elementstories.innerText = stories[indiceStory]
//placer l'image dans le div avec l'id image-spot

// créer le chemin de l'image :
// on remarque dans assets que le nom de l'image c'est le nom du pokemon + .png

let nom_image = pokemons[indicePokemon] + ".png";
console.log(nom_image);

// récupère l'élement qui a l'id image-spot

let imageSpot = document.getElementById("image-spot");
imageSpot.innerHTML = '<img src="assets/' + nom_image + '" />';