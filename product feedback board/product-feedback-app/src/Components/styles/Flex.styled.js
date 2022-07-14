import styled from "styled-components";

export const StyledFlex = styled.div`
  display: flex;
  align-items: ${({ align }) => align || ""};
  justify-content: ${({ content }) => content || ""};
  flex-direction: ${({ direction }) => direction || "row"};
  gap: ${({ gap }) => gap};
  margin-bottom: 1rem;
`;
