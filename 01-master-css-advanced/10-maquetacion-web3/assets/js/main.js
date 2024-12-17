

document.addEventListener('DOMContentLoaded', (event) => {

    const search = document.querySelector('.search__input');
    const btn_search = document.querySelector('.navbar__button');


    console.log(search, btn_search);


    btn_search.addEventListener('click', () => {

        let visible = document.querySelector('.visible');

        if (visible) {
            search.style.width = '0';
            search.style.padding = '0';
            visible.classList.remove('visible');
        } else {
            search.style.width = '15rem';
            search.style.padding = '0.5rem 0 0.5rem 0.5rem';
            search.classList.add('visible')
        }
    })
})

























