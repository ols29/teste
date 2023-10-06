document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const menuDropdown = document.getElementById('menuDropdown');

    menuButton.addEventListener('click', function() {
        menuButton.classList.toggle('active');
        menuDropdown.classList.toggle('active');
    });
});
