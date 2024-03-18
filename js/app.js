document.addEventListener("DOMContentLoaded", e => {
    // fonction main js

    /* objets et méthodes déjà dans le langage */
    console.log(e.target); // document html
    // à afficher dans la console du navigateur 
    let el = document.querySelector("h1");
    const title = document.querySelector("html");
    console.log(title.getAttribute("lang"));
    el.innerText = "Cours javascript moderne version 8";
});