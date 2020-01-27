import React, { useState, useEffect } from "react";
import useLocalStorage from 'react-use-localstorage';


export default function SearchForm({characters, setCharacters}) {
  const [search, setSearch] = useLocalStorage('Search', "");
  
  useEffect(() => {
    setCharacters(characters.filter(character => character.name.includes(search))
    )}, [search]);

  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value);
  };
 
  return (
    <section className="search-form">
     <label>
     <input 
        type="text"
        placeholder="Search character"
        onChange={handleChange}
        value={search}
     />
     <button type="submit">Search</button>
     </label>
     
    </section>
  );
}
