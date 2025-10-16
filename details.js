import Character from './scripts/character.js';

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
    const persoContainer = document.querySelector('.perso');
    const houseSection = document.querySelector('.house__perso');
    
    if (titleElement) {
        titleElement.textContent = character.name;
    }
    
    if (persoContainer) {
        // Mettre les premiers charactères en majuscule
        const capitalize = (str) => {
            if (!str) return 'Unknown';
            return str.charAt(0).toUpperCase() + str.slice(1);
        };

        const actor = character.actor || 'Unknown';
        const gender = capitalize(character.gender) || 'Unknown';
        const eye = capitalize(character.eyeColour) || 'Unknown';
        const hair = capitalize(character.hairColour) || 'Unknown';
        const dob = capitalize(character.dateOfBirth) || 'Unknown';
        const patronus = capitalize(character.patronus) || 'Unknown';

        persoContainer.innerHTML = `
            <figure class="perso__left">
            <img src="${character.image}" alt="${character.name}-img" />
            <figcaption>${actor}</figcaption>
            </figure>
            <div class="perso__right">
            <div>
                <p>Gender</p>
                <p>Eye</p>
                <p>Hair</p>
                <p>Date of birth</p>
                <p>Patronus</p>
            </div>
            <div>
                <p class="attr">${gender}</p>
                <p class="attr">${eye}</p>
                <p class="attr">${hair}</p>
                <p class="attr">${dob}</p>
                <p class="attr">${patronus}</p>
            </div>
            </div>
        `;
    }
    
    if (houseSection && character.house) {
        houseSection.innerHTML = `
            <img src="./images/logo/${character.house}.png" alt="${character.house}-logo" />
        `;
    } else if (houseSection) {
        houseSection.innerHTML = '';
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