export const User = {
    user_print() {
        let el = document.querySelector("h1");
        el.innerText = "Cours javascript moderne version 8";
        let footer = document.querySelector("footer p");
        let dates = new Date().getFullYear();
        let time = new Date().toLocaleDateString('fr-FR');
        const element_time = document.getElementsByTagName("time", options)[0];
        console.log(element_time);
        element_time.setAttribute("datetime", time);
        footer.innerText += dates;
    }
};

export const options = {
    weekday: "long",
    year: "numeric",
    mouth: "long",
    day: "numeric"

    /* tableau */
};export const tab = ["html", "css", true];

export const Users = {
    nom: "Doe",
    prenom: "John",
    ville: "NY",
    age: 25
    // tab_1.shift()//suprime le 1er élément
    // tab_1.pop()//suprime le dernier élément
    // tab_1.push(user);//ajoute un autre élément

};