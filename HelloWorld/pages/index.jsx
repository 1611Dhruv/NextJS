import styles from '../styles/stylesheet.css';

export default function HomePage(){
  return <div> 
    <h1>Home Page</h1>
    <Name />
  </div>
}

function Name(){
  const arr = ['John', 'Jane', 'Mary', 'Mike', 'Bob'];

  return(
    <div>
      <ul>
        {arr.map((name)=>(<li class={styles.style}>{name}</li>))}
      </ul>
    </div>
  )
}
