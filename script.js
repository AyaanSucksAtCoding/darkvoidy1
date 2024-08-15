document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar ul');

    menuButton.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
