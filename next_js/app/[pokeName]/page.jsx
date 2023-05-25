"use client";
export default async function PokeInfo() {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokeName);
  const res = await data.json();
  console.log(res);
  return <h1>{pokeName}</h1>;
}
