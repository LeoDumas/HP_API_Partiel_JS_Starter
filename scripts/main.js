import Character from "./character.js";

const getCharacters = async () => {
    try {
        const resp = await fetch("https://hp-api.onrender.com/api/characters");
        const charactersData = await resp.json();

        // Slice permet de limiet à 12 perso car l'API n'a pas d'enpoint pour limiter
        const characters = charactersData.slice(0,12).map(data => new Character(data));
        return characters;
    } catch (error) {
        console.log(error);
    }
};

export default getCharacters;