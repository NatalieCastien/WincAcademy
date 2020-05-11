const button = document.getElementById('mybutton');

button.addEventListener('click', () => {
    alert("button clicked");
});

const changeButton = document.getElementById('change-button');

const toggleColor = () => {
    document.body.classList.toggle("red-background"); 
}

changeButton.addEventListener('click', toggleColor);