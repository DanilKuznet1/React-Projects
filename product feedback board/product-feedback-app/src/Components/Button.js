import { StyledButton } from "./styles/Button.styled";

export default function Button({ bg, children, ...rest }) {
  return <StyledButton bg={bg}>{children}</StyledButton>;
}
