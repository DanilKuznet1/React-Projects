import { StyledPageTitle } from "./styles/PageTitle.styled";

export default function PageTitle(props) {
  return (
    <>
      <StyledPageTitle>
        <div>
          <img
            src={require("../assets/suggestions/desktop/background-header.png")}
            alt=""
          />
          <h3>Frontend Mentor</h3>
          <p>Feedback Board</p>
        </div>
      </StyledPageTitle>
    </>
  );
}
