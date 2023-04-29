export default function Node({ value }) {
  function incrementValue(e) {
    e.target.innerHTML = parseInt(e.target.innerHTML) + 1;
  }

  return (
    <div className="node">
      <button onClick={(e) => incrementValue(e)}>{value}</button>
    </div>
  );
}
