import { StyledButton, FeaturesButton } from "./styles/Button.styled";

export default function Button({ bg, children, color, features, ...rest }) {
  if (features) {
    return (
      <FeaturesButton {...rest} color={color} bg={bg}>
        {children}
      </FeaturesButton>
    );
  } else {
    return (
      <StyledButton {...rest} color={color} bg={bg}>
        {children}
      </StyledButton>
    );
  }
}
