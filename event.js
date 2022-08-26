// let bouton = document.getElementById("but1");
// bouton.addEventListener('click', function () {
//     alert("bonjour")
//     document.querySelector("#but1").style.backgroundColor = 'green';
// });
// let boutton = document.getElementById("but2");
// boutton.addEventListener('click', function () {
//     boutton.innerHTML = '<img src="assets/charizad.png">'
// });
// let bouton2 = document.querySelector("#but3");
// bouton2.addEventListener('click', function () {
//     bouton2.outerHTML = '<img src="https://www.gifgratis.net/gifs_animes/titti/56.gif">'
// });



// let refrains = document.querySelectorAll(".refrain");
// let button = document.querySelector("#but1");
// button.addEventListener('click', function () {
//     for (let i = 0; i < refrains.length; i++) {
//         refrains[i].style.backgroundColor = "blue";
//     }

// });

// let bouton = document.getElementById("but2");
// let couplets = document.getElementsByClassName("couplet");
// bouton.addEventListener('click', function () {
//     for (let index = 0; index < couplets.length; index++) {
//         couplets[index].style.backgroundColor = 'red';
//     }
// });


// let btn3 = document.getElementById("but3");

// btn3.addEventListener('click', function () {
//     let cpl = document.getElementsByClassName("couplet");
//     let ref = document.getElementsByClassName("refrain");

//     cpl[1].style.fontFamily = "arial";
//     ref[ref.length - 1].style.fontStyle = "italic";


// })

let utilisateur = new Object;

utilisateur.nom = "N'dri";
utilisateur.prenom = "Raphael";
utilisateur.age = "23 ans";
utilisateur.nom = "developpeur web (presque)";
utilisateur.nom = "manga, football, art martiaux, lecture";

console.log(utilisateur);

function user(nom, prenom, age, statut) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.statut = statut;
}
let compte = new user('Son', 'Goku', '38 ', false);
let compte1 = new user("Zeppeli", "Julio césar", "24", true);
let compte2 = new user('Vegeta', 'Vegeta', '42 ', false)



console.log(compte);
console.log(compte1);
console.log(compte2);