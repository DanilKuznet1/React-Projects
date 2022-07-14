import { StyledContainer } from "./styles/Container.styled";

export default function Container({ children }) {
  return (
    <>
      <StyledContainer>{children}</StyledContainer>
    </>
  );
}
