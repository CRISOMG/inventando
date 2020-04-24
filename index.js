const pokeBar = document.querySelector('#pokeBar');

async function getPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await response.json();
  return pokemon;
}
async function inspectPokemon(id) {
  const pokemon = await getPokemon(id);
  buildPokeCard(pokemon);
}

// pokemon.sprites.front_default es la imagen del pokemon
// pokemon.name es el nombre
function buildPokeCard(pokemon) {
  const {
    name,
    sprites: { front_default },
  } = pokemon;

  const pokeCard_html = document.createElement('div');
  pokeCard_html.id = 'pokeCard';
  pokeCard_html.className = 'poke-card';
  pokeCard_html.title = name;

  const pokeImg_html = new Image();
  pokeImg_html.src = front_default;
  pokeImg_html.className = 'poke-image';

  const pokeName_html = document.createElement('p');
  pokeName_html.className = 'poke-name';
  pokeName_html.textContent = name;

  pokeCard_html.append(pokeImg_html, pokeName_html);

  renderPokemon(pokeCard_html);
}
function renderPokemon(HTMLPokeCardElement) {
  pokeBar.append(HTMLPokeCardElement);
}
// 14 o 15
for (let i = 1; i <= 100; i++) {
  inspectPokemon(i);
}
