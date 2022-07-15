import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors[props.bg]};
  border: none;
  border-radius: 1rem;
  padding: 1.25rem 2.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors[props.color]};
  letter-spacing: -0.25px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors[props.bg + "Hover"]};
  }
`;

export const FeaturesButton = styled(StyledButton)`
  padding: 0.55rem 1.05rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.75rem;
  transition: all 0.15s;

  &:focus {
    background-color: ${({ theme }) => theme.colors.blue};
    color: #fff;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.blueHover};
    color: ${({ theme }) => theme.colors.blue};
  }
`;
