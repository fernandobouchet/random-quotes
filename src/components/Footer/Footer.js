import styled from "styled-components";
import { ThemeProvider } from "styled-components";

function Footer(props) {
  const { color } = props;

  return (
    <ThemeProvider theme={{ color }}>
      <StyledFooter>© Fernando Bouchet - 2022</StyledFooter>
    </ThemeProvider>
  );
}
export default Footer;

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.color};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 100;
  position: sticky;
  left: 0;
  bottom: 0;
  height: 2rem;
  line-height: 2rem;

  width: 100%;
  font-size: 0.9rem;
  text-align: center;
  position: fixed;
  color: white;

  @media (max-width: 480px) {
    font-size: 0.6rem;
  }
`;
