import styled from "styled-components";

export const StyledRoadmapData = styled.div`
  margin-top: 1.5rem;
  // display: flex;
  // justify-content: space-between;
  // aling-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const SpanCircle = styled.span`
  width: 1rem;
  height: 1rem;
  background-color: ${(props) => props.bg};
  display: block;
  border-radius: 50%;
`;
