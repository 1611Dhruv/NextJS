import Image from "next/image.js";
export async function Pokemon(name) {
  const { image, types } = await loadPokemon(name);
  return (
    <div className="pokeDisplay">
      <Image
        src={image}
        alt="notLoaded"
        width={100}
        height={100}
        className="image"
      />
      <div className="content">
        {/* {types.map((each) => (
          <p>{each.type.name}</p>
        ))} */}
      </div>
    </div>
  );
}

async function loadPokemon(name) {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
  const content = await data.json();
  return {
    image: content.sprites.front_default,
    types: content.types,
  };
}
