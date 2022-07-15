import { StyledHeaderWrapper } from "./styles/HeaderWrapper.styled";
import Button from "./Button";
import Flex from "./Flex";

export default function HeaderWrapper() {
  return (
    <StyledHeaderWrapper>
      {/* here I will import other components such as Suggestions(), SortBy(), Button() */}
      <Flex align="center" content="space-between">
        Hello World
        <Button color="white" bg="purple">
          Add Feedback
        </Button>
      </Flex>
    </StyledHeaderWrapper>
  );
}
