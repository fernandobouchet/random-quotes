import styled from "styled-components";
import { ThemeProvider } from "styled-components";

function Cards(props) {
  const { content, author, color } = props;

  return (
    <QuoteContainer>
      <ThemeProvider theme={{ color }}>
        <QuoteContent>"{content}"</QuoteContent>
        <QuoteAuthor> - {author}</QuoteAuthor>
      </ThemeProvider>
    </QuoteContainer>
  );
}

export default Cards;

const QuoteContainer = styled.div`
  border-radius: 5px;
  background-color: white;
  font-size: 0.8rem;
  padding: 1rem;
`;

const QuoteContent = styled.h1`
  color: ${(props) => props.theme.color};
`;
const QuoteAuthor = styled.h2`
  color: ${(props) => props.theme.color};
  float: rigth;
`;
