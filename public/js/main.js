console.log('Connected to main.js');

var navButtons = document.getElementsByClassName("nav__list-item-link");

for (var i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener('click', (e) => {
        console.log(e.target.classList);
    });

}