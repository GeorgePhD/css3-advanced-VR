document.addEventListener("DOMContentLoaded", () => {
    let switcher = document.querySelector(".switcher__btn");
    let light = document.querySelector(".switcher__icon-light"); // Added dot for class selector
    let dark = document.querySelector(".switcher__icon-dark");   // Added dot for class selector

    if (switcher && light && dark) { // Ensure all elements are found
        switcher.addEventListener("click", () => {
            let head = document.head;

            let link = document.createElement("link");
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = "/01-studies/css3-advanced-VR/01-master-css-advanced/09-maquetacion-web2/assets/styles/dark-mode.css";
            link.id = "theme-dark";

            let theme_dark = document.querySelector("#theme-dark");
            if (theme_dark) {
                head.removeChild(theme_dark);
                light.style.display = "none";
                dark.style.display = "block";
            } else {
                head.appendChild(link);
                light.style.display = "block";
                dark.style.display = "none";
            }
        });
    } else {
        console.error("Switcher button or icon elements not found");
    }
});
