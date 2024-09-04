import styled from "styled-components";
import { Container } from "./Container";

const Wrapper = styled.div`
  padding-block: 2rem;

  @media(min-width: 767px) {
    padding-block: 4rem;
  }
`;

export const Main = ({ children }) => {
  return (
    <Wrapper>
      <Container>
        {children}
      </Container>
    </Wrapper>
  )
}