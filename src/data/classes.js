const Classes = {
    Barbarian: {
        name: "Barbarian",
        proficiencybonus: 2,
        hitdice: "d12",
        savingthrows: "Strength, Constitution",
        armorweapon: "Light armor, Medium armor, Shields, Simple weapons, Martial weapons"
    },
    Bard: {
        name: "Bard",
        proficiencybonus: 2,
        hitdice: "d8",
        savingthrows: "Dexterity, Charisma",
        armorweapon: "Light armor, Simple weapons, Hand crossbows, Longswords, Rapiers, Shortswords"
    },
    Cleric: {
        name: "Cleric",
        proficiencybonus: 2,
        hitdice: "d8",
        savingthrows: "Wisdom, Charisma",
        armorweapon: "Light armor, Medium armor, Shields, Simple weapons"
    },
    Druid: {
        name: "Druid",
        proficiencybonus: 2,
        hitdice: "d8",
        savingthrows: "Intelligence, Wisdom",
        armorweapon: "Light armor, Medium armor, Shields, Clubs, Daggers, Darts, Javelins, Maces, Quarterstaffs, Scimitars, Sickles, Slings, Spears"
    },
    Fighter: {
        name: "Fighter",
        proficiencybonus: 2,
        hitdice: "d10",
        savingthrows: "Strength, Constitution",
        armorweapon: "Light armor, Medium armor, Heavy armor, Shields, Simple weapons, Martial weapons"
    },
    Monk: {
        name: "Monk",
        proficiencybonus: 2,
        hitdice: "d8",
        savingthrows: "Strength, Dexterity",
        armorweapon: "Simple weapons, Shortswords"
    },
    Paladin: {
        name: "Paladin",
        proficiencybonus: 2,
        hitdice: "d10",
        savingthrows: "Wisdom, Charisma",
        armorweapon: "Light armor, Medium armor, Heavy armor, Shields, Simple weapons, Martial weapons"
    },
    Ranger: {
        name: "Ranger",
        proficiencybonus: 2,
        hitdice: "d10",
        savingthrows: "Strength, Dexterity",
        armorweapon: "Light armor, Medium armor, Shields, Simple weapons, Martial weapons"
    },
    Rogue: {
        name: "Rogue",
        proficiencybonus: 2,
        hitdice: "d8",
        savingthrows: "Dexterity, Intelligence",
        armorweapon: "Light armor, Simple weapons, Hand crossbows, Longswords, Rapiers, Shortswords"
    },
    Sorcerer: {
        name: "Sorcerer",
        proficiencybonus: 2,
        hitdice: "d6",
        savingthrows: "Constitution, Charisma",
        armorweapon: "Daggers, Darts, Slings, Quarterstaffs, Light crossbows"
    },
    Warlock: {
        name: "Warlock",
        proficiencybonus: 2,
        hitdice: "d8",
        savingthrows: "Wisdom, Charisma",
        armorweapon: "Light armor, Simple weapons"
    },
    Wizard: {
        name: "Wizard",
        proficiencybonus: 2,
        hitdice: "d6",
        savingthrows: "Intelligence, Wisdom",
        armorweapon: "Daggers, Darts, Slings, Quarterstaffs, Light crossbows"
    },
};

export default Classes;