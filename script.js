async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const data = await response.json();
    console.log(data.sprites["front_default"]);

    const pokemonImage = document.getElementById("pokemonImg");
    pokemonImage.src = data.sprites["front_default"];
    pokemonImage.style.display = "block";
  } catch (error) {
    console.log("Error");
  }
}
