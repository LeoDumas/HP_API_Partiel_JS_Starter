import Character from "./character.js";

const getCharacters = async (apiUrl = "https://hp-api.onrender.com/api/characters") => {
    try {
        const resp = await fetch(apiUrl);
        const charactersData = await resp.json();

        // Slice permet de limiter à 12 perso car l'API n'a pas d'enpoint pour limiter
        const characters = charactersData.slice(0,12).map(data => new Character(data));
        return characters;
    } catch (error) {
        console.log(error);
    }
};

export default getCharacters;