import styled from "styled-components";
import { ThemeProvider } from "styled-components";

function Cards(props) {
  const { content, author, color } = props;

  return (
    <QuoteContainer>
      <ThemeProvider theme={{ color }}>
        <QuoteContent>
          <Quote>“ </Quote>
          {content}
          <Quote> ”</Quote>
        </QuoteContent>
        <QuoteAuthor> - {author} - </QuoteAuthor>
      </ThemeProvider>
    </QuoteContainer>
  );
}

export default Cards;

const QuoteContainer = styled.div`
  text-align: center;
  font-size: 1rem;
  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const QuoteContent = styled.h1`
  color: ${(props) => props.theme.color};
  font-weight: 700;
`;

const QuoteAuthor = styled.h2`
  color: ${(props) => props.theme.color};
  font-weight: 400;
`;

const Quote = styled.span`
  font-size: 2rem;
  color: ${(props) => props.theme.color};

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;
