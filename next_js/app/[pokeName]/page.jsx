import Pokemon from "./pokemon";
import Link from "next/link";

export default async function PokeInfo({ params }) {
  const data = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + params.pokeName
  );
  const res = await data.json();
  return (
    <>
      <Link href={"/"}>Back</Link>
      <Pokemon data={res} />
    </>
  );
}
