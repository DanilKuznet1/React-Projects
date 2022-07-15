import { StyledRoadmapData, SpanCircle } from "./styles/RoadmapData.styled";
import Flex from "./Flex";

export default function RoadmapData() {
  const roadmapData = [
    {
      bg: `#F49F85`,
      text: "Planned",
      id: "0",
    },
    {
      bg: `#AD1FEA`,
      text: `In${"\u2011"}Progress`,
      id: "0",
    },
    {
      bg: `#62BCFA`,
      text: "Live",
      id: "0",
    },
  ];

  return (
    <>
      <StyledRoadmapData>
        {roadmapData.map((data, index) => {
          return (
            <Flex key={index} content="space-between" mb=".5rem">
              <div>
                <SpanCircle bg={data.bg}></SpanCircle>
                <h5>{data.text}</h5>
              </div>
              <p>{index}</p>
            </Flex>
          );
        })}
      </StyledRoadmapData>
    </>
  );
}
