import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;

  div:first-child {
    flex-basis: 30%;
    background-color: yellow;
  }

  div:first-child + div {
    flex-basis: 70%;
    background-color: green;
  }
`;
