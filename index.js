import getCharacters from "./scripts/main.js";

let allCharacters = [];
let currentCharacters = [];

const displayCharacters = (characters) => {
    const charactersContainer = document.querySelector('.characters');
    charactersContainer.innerHTML = '';
    
    characters.forEach(character => {
        const nameParts = character.name.split(' ');
        const firstName = nameParts[0];
        const lastName = nameParts.slice(1).join(' ');
        const formattedName = lastName ? `${firstName}<br>${lastName}` : firstName;
        
        charactersContainer.innerHTML += `
          <div class="character_box ${character.house ? character.house.toLowerCase() : ''}">
            <a href="./details.html?id=${character.id}">
              <img src="${character.image}" alt="${character.name}-img" >
              <p>${formattedName}</p>
            </a>
          </div>
        `;
    });
};

const sortAlphabetically = (characters) => {
    return [...characters].sort((a, b) => a.name.localeCompare(b.name));
};

const filterAlive = (characters, isAlive) => {
    return characters.filter(character => character.alive === isAlive);
};

document.addEventListener('DOMContentLoaded', async () => {
    allCharacters = await getCharacters();
    currentCharacters = [...allCharacters];
    displayCharacters(sortAlphabetically(currentCharacters));
    
    const houseImages = document.querySelectorAll('.houses div img');
    
    houseImages.forEach(img => {
        img.addEventListener('click', async () => {
            const house = img.dataset.house;
            const apiUrl = `https://hp-api.onrender.com/api/characters/house/${house}`;
            currentCharacters = await getCharacters(apiUrl);
            displayCharacters(sortAlphabetically(currentCharacters));
        });
    });
    
    // Filtres
    document.getElementById('sortAlpha').addEventListener('click', () => {
        displayCharacters(sortAlphabetically(currentCharacters));
    });
    
    document.getElementById('filterAlive').addEventListener('click', () => {
        displayCharacters(filterAlive(currentCharacters, true));
    });
    
    document.getElementById('filterDead').addEventListener('click', () => {
        displayCharacters(filterAlive(currentCharacters, false));
    });
    
    document.getElementById('showAll').addEventListener('click', () => {
        displayCharacters(sortAlphabetically(currentCharacters));
    });
});