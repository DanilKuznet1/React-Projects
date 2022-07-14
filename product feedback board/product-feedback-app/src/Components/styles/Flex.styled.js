import styled from "styled-components";

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${({ layout }) => layout};
  gap: 2.5rem;
`;
