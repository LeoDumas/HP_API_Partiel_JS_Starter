import getCharacters from "./scripts/main.js";

const displayCharacters = (characters) => {
    const charactersContainer = document.querySelector('.characters');
    charactersContainer.innerHTML = '';
    
    // Ordre alphabétique
    const sortedCharacters = characters.sort((a, b) => a.name.localeCompare(b.name));
    
    sortedCharacters.forEach(character => {
        charactersContainer.innerHTML += `
          <div class="character_box ${character.house ? character.house.toLowerCase() : ''}">
            <a href="./details.html?id=${character.id}">
              <img src="${character.image}" alt="${character.name}-img" />
              <p>${character.name}</p>
            </a>
          </div>
        `;
    });
};

document.addEventListener('DOMContentLoaded', async () => {
    const characters = await getCharacters();
    displayCharacters(characters);
    
    const houseImages = document.querySelectorAll('.houses div img');
    
    houseImages.forEach(img => {
        img.addEventListener('click', async () => {
            const house = img.dataset.house;
            const apiUrl = `https://hp-api.onrender.com/api/characters/house/${house}`;
            const houseCharacters = await getCharacters(apiUrl);
            displayCharacters(houseCharacters);
        });
    });
});