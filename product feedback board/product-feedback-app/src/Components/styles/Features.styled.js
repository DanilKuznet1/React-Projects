import styled from "styled-components";

export const StyledFeatures = styled.div`
  padding: 1.35rem;
  width: 100%;
  background-color: #fff;
  border-radius: 1rem;

  div {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  & > button {
    font-weight: 600;
    margin: 0.45rem;
  }
`;
