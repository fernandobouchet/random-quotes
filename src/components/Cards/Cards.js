import styled from "styled-components";

function Cards(props) {
  const { content, author } = props;

  return (
    <QuoteContainer>
      <QuoteContent>"{content}"</QuoteContent>
      <QuoteAuthor> - {author}</QuoteAuthor>
    </QuoteContainer>
  );
}

export default Cards;

const QuoteContainer = styled.div`
  height: auto;
  background-color: #0a9396;
  color: white;
  font-size: 0.8rem;
  padding: 1rem;
`;

const QuoteContent = styled.h1``;
const QuoteAuthor = styled.h2`
  float: rigth;
`;
