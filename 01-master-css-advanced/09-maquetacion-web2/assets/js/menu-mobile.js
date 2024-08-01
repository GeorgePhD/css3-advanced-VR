

document.addEventListener('DOMContentLoaded', (e) => {

    //select elements
    let mobile_btn = document.querySelector(".navbar__mobile-btn");
    let mobile_menu = document.querySelector(".menu-mobile");

    //function to show and hide menu
    const toggleMenu = () => {

        let show = document.querySelector(".menu-mobile--show");

        if (show) {
            mobile_menu.classList.remove("menu-mobile--show");
        } else {
            mobile_menu.classList.add("menu-mobile--show");
        }
    }

    //event listeners
    mobile_btn.addEventListener('click', toggleMenu);

    window.addEventListener('resize', () => {
        let window__width = parseInt(document.body.clientWidth);

        if (window__width >= 768) {
            mobile_menu.classList.remove("menu-mobile--show");
        }
    })

    //close menu with X button

    let close = document.querySelector(".menu-mobile__close");
    close.addEventListener('click', toggleMenu);
});










