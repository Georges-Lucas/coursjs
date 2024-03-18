import { User, options } from "./module_js.js";

document.addEventListener("DOMContentLoaded", e => {
    // fonction main js

    /* objets et méthodes déjà dans le langage */
    console.log(e.target.firstElementChild); // document html
    // à afficher dans la console du navigateur 
    console.log(typeof User);
    User.user_print();
});