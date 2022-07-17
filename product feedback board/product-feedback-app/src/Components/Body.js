import { StyledBody } from "./styles/Body.styled";
import BodyLogo from "../assets/suggestions/illustration-empty.svg";
import Button from "./Button";

export default function Body() {
  return (
    <>
      <StyledBody>
        <img src={BodyLogo} alt="" />
        <p>There is no feedback yet.</p>
        <h5>
          Got a suggestion? Found a bug that needs to be squashed? <br /> We
          love hearing about new ideas to improve our app.
        </h5>
        <Button bg="purple" color="white">
          Add Feedback
        </Button>
      </StyledBody>
    </>
  );
}
