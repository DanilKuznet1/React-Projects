import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors[props.bg]};
  border: none;
  border-radius: 1rem;
  padding: 1.5rem 2.5rem;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.025rem;
  cursor: pointer;
`;

export const FeaturesButton = styled(StyledButton)`
  padding: 0.55rem 1.05rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors[props.color]};
  border-radius: 0.75rem;
  transition: all 0.15s;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.colors.blue};
    color: #fff;
  }
`;
