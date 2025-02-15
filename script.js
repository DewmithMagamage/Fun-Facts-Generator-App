
const facts = [
    "Stars are born in nebulae, which are clouds of gas and dust in space.",
    "The closest star to Earth is the Sun.",
    "A star's color indicates its temperature; blue stars are hotter than red stars.",
    "The largest known star is UY Scuti, a red supergiant.",
    "Stars can live for billions of years.",
    "When a star dies, it can become a black hole or a neutron star.",
    "The light from stars takes years to reach Earth, so we see them as they were in the past.",
    "The Milky Way galaxy contains over 100 billion stars.",
    "Stars twinkle due to the Earth's atmosphere distorting their light.",
    "The North Star, Polaris, is not the brightest star in the sky."
];

document.getElementById('generate-fact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact-display').textContent = facts[randomIndex];
});
