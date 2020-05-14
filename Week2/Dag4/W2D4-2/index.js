// Deel 1 - Elementen toevoegen aan de DOM

const buttonsCollection = document.getElementsByClassName("big-five-button");
const buttons = Array.from(buttonsCollection);
const spottedAnimalList = document.getElementById("spotted-animals-list");

const handleClick = (event) => {
    const addedAnimal = event.target.innerText;
    const newListItem = document.createElement("li");
    newListItem.innerText = addedAnimal;
    spottedAnimalList.appendChild(newListItem);
};

buttons.forEach((button) => {
    button.addEventListener('click', handleClick);
})


// Deel 2 - 1 element verwijderen uit de DOM

const removeFirstButton = document.getElementById("remove-first-item-button");

const removeFirstItem = (event) => {
    const firstItem = spottedAnimalList.getElementsByTagName('li')[0];
    spottedAnimalList.removeChild(firstItem);
}

removeFirstButton.addEventListener('click', removeFirstItem);


// Deel 3 - Meerdere elementen verwijderen uit de DOM

const removeAllButton = document.getElementById("remove-all-button");


const removeAll = () => {
    // spottedAnimalList.innerHTML = "";
    let listItems = Array.from(spottedAnimalList.getElementsByTagName('li'));
    for (var i=0; i < listItems.length; i++) {
        const firstItem = spottedAnimalList.getElementsByTagName('li')[0];
        spottedAnimalList.removeChild(firstItem);        
    }
};

removeAllButton.addEventListener('click', removeAll);