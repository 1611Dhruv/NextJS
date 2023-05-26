export default function Pokemon({ data }) {
  return (
    <div className="pokeDisplay">
      <h1>{data.name.charAt(0).toUpperCase() + data.name.substring(1)}</h1>
      <img src={data.sprites.front_default}></img>
    </div>
  );
}
