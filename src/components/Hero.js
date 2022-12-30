import styled from "styled-components";

const HeroContainer = styled.div`
  .hero {
    width: 100%;
    height: 400px;
    background: linear-gradient(
      to right,
      #000 0%,
      rgb(185, 185, 185) 50%,
      #000 100%
    );
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: #fff;
  }
  .hero h1 {
    font-size: 36px;
    font-family: "Helvetica Neue", sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  .hero p {
    font-size: 18px;
    font-family: "Helvetica Neue", sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;

function Hero() {
  return (
    <HeroContainer>
      <div className="hero">
        <h1>Il futuro è qui: le notizie tech più interessanti del momento</h1>
        <p>Tieniti aggiornato con il nostro sito web</p>
      </div>
    </HeroContainer>
  );
}

export default Hero;
