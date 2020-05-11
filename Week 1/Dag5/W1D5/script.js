const menuContainer = document.getElementById('menu-container');
const menuButton = document.getElementById('menu-button');
const menuList = document.getElementById('menu');

const closeMenu = () => {
    menuList.className = "menu-closed";
};
const openMenu = () => {
    menuList.className = "menu-collapsed";
};

// On hover open and close the menu
menuButton.addEventListener('mouseover', openMenu);
menuContainer.addEventListener('mouseleave', closeMenu);

// Get colors and set backgroundcolor to selected color
const colors = document.querySelectorAll('ul li input');
const toggleBackgroundColor = (color) => {
    const lowercaseColor = color.toLowerCase();
    document.body.className = lowercaseColor;
    document.getElementById('color-name').innerHTML = '<h1>' + color + '</h1>';
};

colors.forEach((color) => {
    color.addEventListener("click", () => {
        const colorName = color.parentNode.innerText;
        toggleBackgroundColor(colorName);
        closeMenu();
    })
})

// Handle keypresses
const handleKeypress = (key) => {
    const pressedKey = key.key;
    if (pressedKey == 1) {
        toggleBackgroundColor('home');
        document.getElementById('color-name').innerHTML = '<h1>Home</h1>';
    } else if (pressedKey == 2) {
        toggleBackgroundColor('oceanblue');
        document.getElementById('color-name').innerHTML = '<h1>Oceanblue</h1>';
    } else if (pressedKey == 3) {
        toggleBackgroundColor('blue');
        document.getElementById('color-name').innerHTML = '<h1>Blue</h1>';
    } else if (pressedKey == 4) {
        toggleBackgroundColor('purple');
        document.getElementById('color-name').innerHTML = '<h1>Purple</h1>';
    } else if (pressedKey == 5) {
        toggleBackgroundColor('salmon');
        document.getElementById('color-name').innerHTML = '<h1>Salmon</h1>';
    } else if (pressedKey == 6) {
        toggleBackgroundColor('peach');
        document.getElementById('color-name').innerHTML = '<h1>Peach</h1';
    } else if (pressedKey == 7) {
        toggleBackgroundColor('yellow');
        document.getElementById('color-name').innerHTML = '<h1>Yellow</h1';
    }
};

document.addEventListener("keypress", handleKeypress);

// OLD: on click toggle menu open/close
// const toggleMenu = () => {
//     menuList.classList.toggle("menu-collapsed");
// };
// menuButton.addEventListener('click', toggleMenu);