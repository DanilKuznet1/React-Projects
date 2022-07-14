import { StyledRoadmap } from "./styles/Roadmap.styled";
import Flex from "./Flex";
import RoadmapData from "./RoadmapData";

export default function RoadmapInfo() {
  return (
    <>
      <StyledRoadmap>
        <Flex content="space-between" align="center">
          <p>Roadmap</p>
          <p>View</p>
        </Flex>
        <RoadmapData />
      </StyledRoadmap>
    </>
  );
}
