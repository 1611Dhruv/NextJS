export default async function loadPokemon({ name }) {
  const pokeData = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
  const data = pokeData.json();
  return data;
}
