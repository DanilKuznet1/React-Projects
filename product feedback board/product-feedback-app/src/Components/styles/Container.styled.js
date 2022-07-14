import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  gap: 2.75rem;

  div:first-child {
    flex-basis: 15%;
  }

  div:first-child + div {
    flex-basis: 85%;
    background-color: green;
  }

  @media (max-width: ${({ theme }) => theme.version.tablet.width}) {
    div:first-child {
      flex-basis: 20%;
    }

    div:first-child + div {
      flex-basis: 80%;
      background-color: green;
    }
  }

  @media (max-width: ${({ theme }) => theme.version.mobile.width}) {
    div:first-child {
      flex-basis: 30%;
    }

    div:first-child + div {
      flex-basis: 70%;
      background-color: green;
    }
  }
`;
