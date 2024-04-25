document.addEventListener('DOMContentLoaded', (event) => {
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    if(loggedIn) {
        document.querySelector(".login").classList.add("hide");
        document.querySelector(".logout").classList.remove("hide");
    } else {
        document.querySelector(".login").classList.remove("hide");
        document.querySelector(".logout").classList.add("hide");
    }
});