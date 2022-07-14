import { StyledFlex } from "./styles/Flex.styled";

export default function Flex(props) {
  return (
    <>
      <StyledFlex gap={props.gap} direction={props.direction}>
        {props.children}
      </StyledFlex>
    </>
  );
}
