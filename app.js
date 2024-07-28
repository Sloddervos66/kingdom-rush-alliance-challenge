const generateTowersBtn = document.getElementById('generateTowers');
const showGeneratedTowers = document.getElementById('showTowers');

const towerList = [
    'Royal Archers', 'Paladin Covenant', 'Arcane Wizard', 'Tricannon', 'Ballista Outpost', 'Arborean Emissary', 'Demon Pit', 'Battle Brewmasters', 
    'Necromancer', 'Elven Stargazer', 'Dwarven Flamespitter', 'Dune Sentinels', 'Rocket Gunners', 'Eldritch Channeler', 'Grim Wraiths'
];

const heroesList = [
    'Vesper', 'Raelyn', 'Nyru', 'Torres', 'Anya', 'Grimson', 'Broden', 'Therien', 'Onagro', 'Warhead', 'Lumenir', 'Kosmyr'
];

const mapsList = [
    'Sea of Trees', 'The Guardian Gate', 'The Heart of the Forest', 'Emerald Treetops', 'Ravaged Outskirts', 'The Wildbeast Den',
    'Bleak Valley', 'Carmine Mines', 'Wicked Crossing', 'Temple Courtyard', 'Canyon Plateau', 
    'Blighted Farmlands', 'Desecrated Temple', 'Corruption Valley', 'The Eyesore Tower', 'Hunger\'s Peak' 
];

const towerImages = {
    'Royal Archers': 'assets/towers/royal_archers.png',
    'Paladin Covenant': 'assets/towers/paladin_covenant.png',
    'Arcane Wizard': 'assets/towers/arcane_wizard.png',
    'Tricannon': 'assets/towers/tricannon.png',
    'Ballista Outpost': 'assets/towers/ballista_outpost.png',
    'Necromancer': 'assets/towers/necromancer.png',
    'Elven Stargazer': 'assets/towers/elven_stargazer.png',
    'Dwarven Flamespitter': 'assets/towers/dwarven_flamespitter.png',
    'Dune Sentinels': 'assets/towers/dune_sentinels.png',
    'Rocket Gunners': 'assets/towers/rocket_gunners.png',
    'Eldritch Channeler': 'assets/towers/eldritch_channeler.png',
    'Grim Wraiths': 'assets/towers/grim_wraiths.png',
    'Arborean Emissary': 'assets/towers/arborean_emissary.png',
    'Demon Pit': 'assets/towers/demon_pit.png',
    'Battle Brewmasters': 'assets/towers/battle_brewmasters.png'
};

const heroesImages = {
    'Vesper': 'assets/heroes/vesper.png',
    'Raelyn': 'assets/heroes/raelyn.png',
    'Nyru': 'assets/heroes/nyru.png',
    'Torres': 'assets/heroes/torres.png',
    'Anya': 'assets/heroes/anya.png',
    'Grimson': 'assets/heroes/grimson.png',
    'Broden': 'assets/heroes/broden.png',
    'Therien': 'assets/heroes/therien.png',
    'Onagro': 'assets/heroes/onagro.png',
    'Warhead': 'assets/heroes/warhead.png',
    'Lumenir': 'assets/heroes/lumenir.png',
    'Kosmyr': 'assets/heroes/kosmyr.png'
}

generateTowersBtn.addEventListener('click', () => {
    const generatedTowerList = [];
    const generatedHeroesList = [];

    generateRandomList(generatedTowerList, 5, towerList);
    generateRandomList(generatedHeroesList, 2, heroesList);

    showGeneratedTowers.innerHTML = generatedTowerList.map(tower => `
        <div>
            <img src="${towerImages[tower]}" alt="${tower}" />
            <p>${tower}</p>
        </div>
    `).join('');

    showGeneratedTowers.innerHTML += generatedHeroesList.map(hero => `
        <div>
            <img src="${heroesImages[hero]}" alt="${hero}" />
            <p>${hero}</p>
        </div>
    `).join('');
});

const generateRandomList = (generatingList, numberLoop, specificList) => {
    for (let i = 0; i < numberLoop; i++) {
        const randomNumber = Math.floor(Math.random() * specificList.length);

        if (!generatingList.includes(specificList[randomNumber])) {
            generatingList.push(specificList[randomNumber]);
        } else {
            i--;
        }
    }
}