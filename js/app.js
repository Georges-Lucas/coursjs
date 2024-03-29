import { User, options, tab, Users } from "./module_js.js";

document.addEventListener("DOMContentLoaded", e => {
    // fonction main js

    /* objets et méthodes déjà dans le langage */
    console.log(e.target.firstElementChild); // document html
    // à afficher dans la console du navigateur 
    console.log(typeof User);
    User.user_print();

    //opérateur
    /* 
    = 
    += ajouter
    -= enlever
    ++ +1
    -- -1
    % modulo
    * mult
    /
    <
    >
    >=
    <=
    &&
    ||
    ? chainage optionnel 
    */

    let nombre = Number(9);
    let nombre_1 = String("9");
    // const version = prompt(parseInt("saisir un chiffre",""))
    nombre === nombre_1 ? console.log(true) : console.log(false);
    console.log(nombre * 2);

    nombre % 2 === 0 ? console.log("chiffre paire") : console.log("chiffre impaire");
    // console.log(version.toFixed(2)) // tofixed permet de fixe combien de nombre après la virgule
    /* afficher un tableau */
    // let i = 0;
    // while(i < tab.length){
    //     console.log(tab[i])
    //     i++;
    // }

    tab.forEach(element => {
        //clée et valeur
        console.log(element);
    });

    for (let index in Users) {
        console.log(index + " " + Users[index]);
    }
    /* Object.keys(Users).forEach((props)=>{
       console.log(props + ': ' + Users[props]);
    }); */

    const element_h1 = document.querySelector("h1");
    //event gestionnaire pour cliquer
    element_h1.addEventListener("click", e => {
        //sweet alert
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });
    });

    const element_h2 = document.querySelector("h2");

    element_h2.addEventListener("click", e => {
        Swal.fire({
            title: "Portfolio",
            text: "Bonjour chez moi.",
            imageUrl: "https://unsplash.it/400/200",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
        });
    });

    const country = {
        drapeau: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAABNCAMAAABAMbBwAAAAKlBMVEX///8AJlTOESZveI/ccXgaMFvRJDQAGk7NABr99/cJJ1VzepHedXzQFyuu4Nf1AAAAUElEQVRoge3aNwHAAADDsHRv/nRLIV97yAREwFmazitHUe5nbcrQtE2pmvexCQqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBT6O/SLd+UF+mYtCmQ0pAIAAAAASUVORK5CYII=",
        Description: String("La France, pays de l'Europe occidentale, compte des villes médiévales, des villages alpins et des plages. Paris, sa capitale, est célèbre pour ses maisons de mode, ses musées d'art classique, dont celui du Louvre, et ses monuments comme la Tour Eiffel."),
        Capitale: String("Paris"),
        Gouvernement: String("État unitaire, Régime semi-présidentiel"),
        Population: String("67,75 millions (2021)"),
        Superficie: String("551 695 km²"),
        Produit_Intérieur_Brut: String("2,958 billions USD (2021)"),
        Indicatif_téléphonique: String("+33"),
        Salaire_minimum: String("1 539,42EUR par mois (juin 2020)")
    };
});