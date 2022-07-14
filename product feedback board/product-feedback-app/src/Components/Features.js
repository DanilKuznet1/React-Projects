import { StyledFeatures } from "./styles/Features.styled";
import Button from "./Button";

export default function Features(props) {
  const featureNames = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  return (
    <>
      <StyledFeatures>
        {featureNames.map((name) => {
          return (
            <Button color="blue" bg="mediumGray">
              {name}
            </Button>
          );
        })}
      </StyledFeatures>
    </>
  );
}
