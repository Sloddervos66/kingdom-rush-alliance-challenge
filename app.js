const generateTowersBtn = document.getElementById('generateTowers');
const showGeneratedTowers = document.getElementById('showTowers');

const towerList = [
    'Royal Archers', 'Paladin Covenant', 'Arcane Wizard', 'Tricannon', 'Ballista Outpost', 'Arborean Emissary', 'Demon Pit', 'Battle Brewmasters', 
    'Necromancer', 'Elven Stargazer', 'Dwarven Flamespitter', 'Dune Sentinels', 'Rocket Gunners', 'Eldritch Channeler', 'Grim Wraiths'
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

const heroesList = [
    'Vesper', 'Raelyn', 'Nyru', 'Torres', 'Anya', 'Grimson', 'Broden', 'Therien', 'Onagro', 'Warhead', 'Lumenir', 'Kosmyr'
];

const mapsList = [
    'Sea of Trees', 'The Guardian Gate', 'The Heart of the Forest', 'Emerald Treetops', 'Ravaged Outskirts', 'The Wildbeast Den',
    'Bleak Valley', 'Carmine Mines', 'Wicked Crossing', 'Temple Courtyard', 'Canyon Plateau', 
    'Blighted Farmlands', 'Desecrated Temple', 'Corruption Valley', 'The Eyesore Tower', 'Hunger\'s Peak' 
];

generateTowersBtn.addEventListener('click', () => {
    const generatedTowerList = [];

    for (let i = 0; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * 15); 
        
        if (!generatedTowerList.includes(towerList[randomNumber])) {
            generatedTowerList.push(towerList[randomNumber]);
        } else {
            i--;
        }
    }
    
    showGeneratedTowers.innerHTML = generatedTowerList.map(tower => `
        <div>
            <img src="${towerImages[tower]}" alt="${tower}" />
            <p>${tower}</p>
        </div>
    `).join('');
});