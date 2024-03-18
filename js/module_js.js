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
};