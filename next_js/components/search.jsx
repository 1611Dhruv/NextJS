import Image from "next/image";
import searchPic from "../public/search.png";
import styles from "../styles/search.module.css";

export default function Search() {
  return (
    <div className={styles.searchContainer}>
      <input type="text" id="search" placeholder="Enter A Pokemon Name" />
      <button onClick={() => console.log("fine")}>
        <Image width="20" height="20" src={searchPic} alt=""></Image>
      </button>
    </div>
  );
}
