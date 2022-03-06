import styled from "styled-components";
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
      <CardContainer>
        <Cards content={quote.content} author={quote.author}></Cards>
        <ButtonContainer>
          <Button onClick={setNewQuote}>New Quote</Button>
        </ButtonContainer>
      </CardContainer>
    </MainContainer>
  );
}

export default Main;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  margin: 1rem;
`;

const Button = styled.button`
  width: 5rem;
  height: 2rem;
  background-color: #0a9396;
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
