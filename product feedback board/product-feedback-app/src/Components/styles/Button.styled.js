import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors[props.bg]};
  border: none;
  border-radius: 1rem;
  padding: 1.5rem 2.5rem;
  margin-top: 10rem;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.025rem;
`;
