import { FeaturesButton } from "./styles/Button.styled";

export default function Button({ bg, children, color }) {
  return (
    <FeaturesButton color={color} bg={bg}>
      {children}
    </FeaturesButton>
  );
}
