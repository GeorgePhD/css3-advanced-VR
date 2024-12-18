document.addEventListener("DOMContentLoaded", (event) => {
    // Toggle mobile menu
    let mobileBtn = document.querySelector(".navbar__mobile-btn");
    let mobileMenu = document.querySelector(".navbar__mobile-list");

    mobileBtn.addEventListener("click", () => {
        console.log("btn clicked");

        // Check if the menu is open
        let isMenuOpen = mobileBtn.classList.contains("menu_open");

        if (!isMenuOpen) {
            mobileBtn.classList.add("menu_open");
            mobileMenu.style.display = "block";
        } else {
            mobileBtn.classList.remove("menu_open");
            mobileMenu.style.display = "none";
        }
    });

    // Submenu toggle function
    const submenu = (button, submenuElement, className) => {
        button.addEventListener("click", () => {
            // Check if the submenu is open
            let isDropdownOpen = submenuElement.classList.contains(className);

            if (!isDropdownOpen) {
                submenuElement.style.display = "block";
                submenuElement.classList.add(className);
            } else {
                submenuElement.style.display = "none";
                submenuElement.classList.remove(className);
            }
        });
    };

    // Select dropdown buttons and submenus
    let dropdown1_btn = document.querySelector("#icon1");
    let dropdown1_submenu = document.querySelector("#submenu1");
    let dropdown2_btn = document.querySelector("#icon2");
    let dropdown2_submenu = document.querySelector("#submenu2");

    // Call the submenu function with appropriate parameters
    submenu(dropdown1_btn, dropdown1_submenu, "drop1");
    submenu(dropdown2_btn, dropdown2_submenu, "drop2");

    /* resize of window for manu responsive */

    window.addEventListener("resize", () => {

        let windowWidth = parseFloat(document.body.clientWidth);

        if (windowWidth >= 965) {
            mobileMenu.style.display = "none";
            mobileBtn.classList.remove("menu_open");
        }


    })
});
