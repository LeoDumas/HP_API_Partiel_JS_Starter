import Character from '../scripts/character.js';

const getCharacterById = async (id) => {
    try {
        const resp = await fetch(`https://hp-api.onrender.com/api/character/${id}`);
        const data = await resp.json();
        return new Character(data[0]);
    } catch (error) {
        console.log(error);
    }
};

const displayCharacterDetails = (character) => {
    const titleElement = document.querySelector('section h3');
    const imageElement = document.querySelector('.perso__left img');
    
    if (titleElement) {
        titleElement.textContent = character.name;
    }
    
    if (imageElement) {
        imageElement.src = character.image;
        imageElement.alt = `${character.name}-img`;
    }
};

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const characterId = urlParams.get('id');
    
    if (characterId) {
        const character = await getCharacterById(characterId);
        if (character) {
            displayCharacterDetails(character);
        }
    }
});