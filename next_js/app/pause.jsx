export default function Pause(props) {
  return (
    <div className="pause">
      <button onClick={props.continue}>Continue</button>
      <button>Click Me</button>
      <button onClick={props.exit}>Exit</button>
    </div>
  );
}
