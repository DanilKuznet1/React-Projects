import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #ebfbff;
  padding: 4rem 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 4rem;
  }
`;

export const Image = styled.img`
  width: 37.5rem;
  margin-left: 4rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 4rem 0 3rem;
  }
`;
