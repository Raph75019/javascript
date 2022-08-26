// let h1 = document.querySelector("h1");
// let h1_div = document.getElementById("h1-div");

// console.log(h1.parentNode);
// console.log(h1_div.parentNode);

// let body = document.querySelector("body");
// console.log(body.childNodes);
// console.log(body.children);

// console.log(body.firstChild);
// console.log(body.lastChild);

// console.log(body.firstElementChild);
// console.log(body.lastElementChild);

// let children = body.children;

// console.log(children);

// console.log(children[1].previousElementSibling);

// creation d'element 

let nouveauElement = document.createElement("p");
console.log(nouveauElement);
// Créer l'élément : 

let paragraph1 = document.createElement("p");

// On va écrire à l'intérieur du paragraphe 

paragraph1.innerText = "Bonjour, j'espère que ça va !";

// on va récupérer le body 

// 1ere syntaxe : 

let body = document.querySelector("body");

// 2eme syntaxe : document.body;

// on va placer notre élément dans le body 

body.append(paragraph1);

// faire la même chose pour le deuxième paragraphe et le prepend au body

