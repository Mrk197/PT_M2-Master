import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css"
import {Link} from "react-router-dom"

export default function Nav({agregar, randomCharacter}) {
    return <div className={styles.divNav}>
        <Link to="/about"><span>About</span></Link>
        <SearchBar
          onSearch={agregar}
        />
        <button onClick={randomCharacter}>Random</button>
    </div>
}