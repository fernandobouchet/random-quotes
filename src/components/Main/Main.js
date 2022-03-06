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
    <>
      <Cards content={quote.content} author={quote.author}></Cards>
      <button onClick={setNewQuote}>New Quote</button>
    </>
  );
}

export default Main;
