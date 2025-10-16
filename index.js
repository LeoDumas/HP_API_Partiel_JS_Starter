import getCharacters from "./scripts/main.js";

document.addEventListener('DOMContentLoaded', async () => {
    const charactersContainer = document.querySelector('.characters');
    const characters = await getCharacters();
    
    charactersContainer.innerHTML = '';
    
    characters.forEach(character => {
        charactersContainer.innerHTML += `
          <div class="character_box ${character.house ? character.house.toLowerCase() : ''}">
            <a href="./details.html?id=${character.id}">
              <img src="${character.image}" alt="${character.name}-img" />
              <p>${character.name}</p>
            </a>
          </div>
        `;
    });
});