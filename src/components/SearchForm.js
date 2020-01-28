import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";


export default function SearchForm() {
  const [search, setSearch] = useState("");
  const [filteredcharacters, setFilteredCharacters] = useState([]);
  
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        console.log(res.data.results)
        const characters = res.data.results.filter(character => 
          character.name.toLowerCase().includes(search.toLowerCase())
      );
        setFilteredCharacters(characters);
    })  
      .catch(err => {
        console.log("The data was not returned", err);
      })
    }, [search]);

    // useEffect(() => {
    //   const filtered = characters.filter(character => character.includes(search));
    //   setFilteredCharacters(filtered);
    // }, [search]);


  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value)
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
    <div>
      {/* {filteredcharacters.map(character => {
        <div key={character} style={{color: character}}>
          {character}
        </div>
      })} */}

      {filteredcharacters.map((character, index) => {
        return (
          <CharacterCard character={character} key={character.created}/>
        )
      })}
    </div>
   </section>
  );
}

