import loadPokemon from "./pokemon.jsx";
export default function Home() {
  const data = loadPokemon({ name: "ditto" });
  const { sprites } = data;

  console.log(data);
  console.log(sprites);
  return (
    <>
      <div className="main">
        <div className="pokeDisplay">
          <img></img>
        </div>
      </div>
    </>
  );
}
