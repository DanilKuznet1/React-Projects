import { StyledCard } from "./styles/Card.styled";

export default function Card(props) {
  const { id, title, body, image } = props.item;

  return (
    <StyledCard layout={id % 2 === 0 && "row-reverse"}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </StyledCard>
  );
}
