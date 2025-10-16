import Wand from "./wand.js";

class Character {
    constructor({
        id,
        name,
        alternate_names,
        species,
        gender,
        house,
        dateOfBirth,
        yearOfBirth,
        wizard,
        ancestry,
        eyeColour,
        hairColour,
        wand,
        patronus,
        hogwartsStudent,
        hogwartsStaff,
        actor,
        alternate_actors,
        alive,
        image
    }) {
        this.id = id;
        this.name = name;
        this.alternate_names = alternate_names;
        this.species = species;
        this.gender = gender;
        this.house = house;
        this.dateOfBirth = dateOfBirth;
        this.yearOfBirth = yearOfBirth;
        this.wizard = wizard;
        this.ancestry = ancestry;
        this.eyeColour = eyeColour;
        this.hairColour = hairColour;
        this.wand = wand ? new Wand(wand) : null;
        this.patronus = patronus;
        this.hogwartsStudent = hogwartsStudent;
        this.hogwartsStaff = hogwartsStaff;
        this.actor = actor;
        this.alternate_actors = alternate_actors;
        this.alive = alive;
        this.image = image;
    }
}

export default Character;