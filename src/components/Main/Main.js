import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";

function Main() {
  const [quote, setQuote] = useState([]);

  console.log(quote);

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
  }

  return (
    <MainContainer>
      {quote.content && (
        <CardContainer>
          <Cards content={quote.content} author={quote.author}></Cards>
          <ButtonContainer>
            <Button onClick={setNewQuote}>New Quote</Button>
          </ButtonContainer>
        </CardContainer>
      )}
    </MainContainer>
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
  background-color: #0a9396;
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
`;

const Button = styled.button`
  width: 7rem;
  height: 2rem;
  background-color: #005f73;
  font-family: inherit;
  border: none;
  cursor: pointer;
  color: white;
`;

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #005f73;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
