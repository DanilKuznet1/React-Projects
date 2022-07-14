import styled from "styled-components";

export const StyledPageTitle = styled.div`
  width: 100%;
  // height: 12.5rem;
  border-radius: 1rem;
  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 1rem;
  }

  h3 {
    font-size: 1.6rem;
    padding-top: 3.75rem;
  }

  p {
    margin-top: 0.5rem;
    font-size: 1.4rem;
    opacity: 0.7;
  }
`;
