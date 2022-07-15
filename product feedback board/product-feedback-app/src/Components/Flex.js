import { StyledFlex } from "./styles/Flex.styled";

export default function Flex(props) {
  return (
    <>
      <StyledFlex
        mb={props.mb}
        content={props.content}
        align={props.align}
        gap={props.gap}
        direction={props.direction}
      >
        {props.children}
      </StyledFlex>
    </>
  );
}
