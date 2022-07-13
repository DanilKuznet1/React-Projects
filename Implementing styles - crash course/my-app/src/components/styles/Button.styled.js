import styled from "styled-components";

export const Button = styled.button`
  border-radius: 5rem;
  border: none;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 1.6rem;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};
  font-weight: 700;
  padding: 1.5rem 6rem;
  transition: all 0.2s ease-in;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
