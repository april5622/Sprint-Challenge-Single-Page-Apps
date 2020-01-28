import React from "react";
import styled from "styled-components"

const CenterImg = styled.img`
  justifyContent: center;
  alignItems: center;
  display: flex;
  width: 100%;

`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <CenterImg
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
