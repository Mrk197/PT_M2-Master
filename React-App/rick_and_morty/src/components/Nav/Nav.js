import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css"

export default function Nav({agregar, randomCharacter}) {
    return <div className={styles.divNav}>
        <SearchBar
          onSearch={agregar}
        />
        <button onClick={randomCharacter}>Random</button>
    </div>
}