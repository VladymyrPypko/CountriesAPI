import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-inline: 2rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 2.5;
  border: none;
  border-radius: var(--radii);
  color: var(--color-text);
  cursor: pointer;
`;