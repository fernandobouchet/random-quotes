import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import randomColor from "../Utils/RandomColors";
import { ThemeProvider } from "styled-components";

function Main() {
  const [quote, setQuote] = useState([]);
  const [color, setRandomColor] = useState(randomColor);

  useEffect(() => {
    QuotesApi();
  }, []);

  async function QuotesApi() {
    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote(data);
    } catch (error) {
      console.log(error);
    }
  }

  function setNewQuote() {
    setQuote(QuotesApi());
    setRandomColor(randomColor);
  }

  return (
    <ThemeProvider theme={{ color }}>
      <MainContainer>
        {quote.content && (
          <CardContainer>
            <Cards
              content={quote.content}
              author={quote.author}
              color={color}
            ></Cards>
            <ButtonContainer>
              <Button onClick={setNewQuote}>New Quote</Button>
            </ButtonContainer>
          </CardContainer>
        )}
      </MainContainer>
    </ThemeProvider>
  );
}

export default Main;

const cardAnimation = keyframes`
 0% { opacity: 0}
 20% { opacity: 0.2}
 40% { opacity: 0.4}
 60% { opacity: 0.6}
 80% { opacity: 0.8}
 100% { opacity: 1 }`;

const CardContainer = styled.div`
  border-radius: 5px;
  background-color: white;
  margin: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation-name: ${cardAnimation};
  animation-duration: 0.5s;
`;

const ButtonContainer = styled.div`
  margin: 1rem;
  padding-bottom: 1rem;
`;

const Button = styled.button`
  border-radius: 5px;
  width: 7rem;
  height: 2rem;
  background-color: ${(props) => props.theme.color};
  font-family: inherit;
  font-size: 1.1rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  color: white;
`;

const MainContainer = styled.div`
  animation-name: ${cardAnimation};
  animation-duration: 0.5s;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
