import { StyledFlex } from "./styles/Flex.styled";

export default function Flex(props) {
  return (
    <>
      <StyledFlex layout="column">{props.children}</StyledFlex>
    </>
  );
}
