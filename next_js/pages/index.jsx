import Image from "next/image.js";

export default function Home({ image, types }) {
  return (
    <>
      <div className="main">
        <Pokemon image={image} types={types} />
        <Pokemon image={image} types={types} />
        <Pokemon image={image} types={types} />
        <Pokemon image={image} types={types} />
      </div>
    </>
  );
}

export function Pokemon({ image, types }) {
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
        {types.map((each) => (
          <p>{each.type.name}</p>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/gardevoir");
  const content = await data.json();
  return {
    props: { image: content.sprites.front_default, types: content.types },
  };
}
