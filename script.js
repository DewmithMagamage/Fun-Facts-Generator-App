// script.js
const facts = {
    Animals: [
        "Cats are crepuscular, which means they are most active during dawn and dusk.",
        "A group of flamingos is called a 'flamboyance'.",
        "Octopuses have three hearts.",
        "Elephants are the only animals that can't jump.",
        "A snail can sleep for three years."
    ],
    Space: [
        "Stars are born in nebulae, which are clouds of gas and dust in space.",
        "The closest star to Earth is the Sun.",
        "A day on Venus is longer than a year on Venus.",
        "There are more stars in the universe than grains of sand on Earth.",
        "Jupiter has the shortest day of all the planets."
    ],
    History: [
        "The shortest war in history lasted 38 minutes.",
        "The Great Pyramid of Giza was the tallest structure in the world for over 3,800 years.",
        "Napoleon was once attacked by a horde of bunnies.",
        "Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid.",
        "The Eiffel Tower can be 15 cm taller during the summer."
    ],
    Technology: [
        "The first computer virus was created in 1983.",
        "The first 1GB hard drive was announced in 1980 and weighed over 500 pounds.",
        "The first email was sent by Ray Tomlinson to himself in 1971.",
        "The first webcam watched a coffee pot at Cambridge University.",
        "There are more than 3.5 billion Google searches per day."
    ],
    Nature: [
        "Bananas are berries, but strawberries aren't.",
        "A single tree can absorb up to 48 pounds of carbon dioxide per year.",
        "The Amazon rainforest produces 20% of the world's oxygen.",
        "A bolt of lightning contains enough energy to toast 100,000 slices of bread.",
        "The world's largest desert is Antarctica."
    ],
    Science: [
        "Water can boil and freeze at the same time, a phenomenon known as the 'triple point'.",
        "A teaspoon of a neutron star would weigh about 6 billion tons.",
        "The speed of light is 299,792,458 meters per second.",
        "Human bones are about five times stronger than steel of the same density.",
        "The DNA in a single human cell contains about 3 billion base pairs."
    ]
};

function getRandomFact(category) {
    const categoryFacts = facts[category];
    const randomIndex = Math.floor(Math.random() * categoryFacts.length);
    return categoryFacts[randomIndex];
}

document.getElementById('generate-fact').addEventListener('click', function() {
    const category = document.getElementById('category-select').value;
    document.getElementById('fact-display').textContent = getRandomFact(category);
});
