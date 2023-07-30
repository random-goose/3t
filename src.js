const app = {
    $: {
        menu: document.querySelector(".menu"),
        menuItems: document.querySelector('.items'),
    },

    init () {
        app.$.menu.addEventListener('click', event => {
            app.$.menuItems.classList.toggle('hidden');
            console.log("menu toggled")
        });
    },
};

console.log("Game Initiated");

window.addEventListener("load", app.init());