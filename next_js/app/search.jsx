"use client";
import Image from "next/image";
import searchPic from "../public/search.png";
import styles from "../styles/search.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [value, setValue] = useState("");
  let router = useRouter();
  return (
    <div
      className={styles.searchContainer}
      onMouseEnter={() =>
        (document.getElementById("search").style.width = "175px")
      }
      onMouseLeave={() => {
        var input = document.getElementById("search");
        if (input.value == "") input.style.width = "0";
      }}
    >
      <input
        type="text"
        id="search"
        placeholder="Enter A Pokemon Name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          router.replace("/" + value.toLowerCase());
        }}
      >
        <Image width="20" height="20" src={searchPic} alt=""></Image>
      </button>
    </div>
  );
}
