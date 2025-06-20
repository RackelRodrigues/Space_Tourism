import { Header } from "../../components";
import Titles from "../../server/Titles.json";
import { TagLabel, NumberTag } from "../../utils/global";
import data from "../../server/data.json";
import { Background, Container } from "./styles";
import CardPlanet from "../../components/CardPlanets";

interface Props {}

const Destination: React.FC<Props> = () => {
  return (
    <>
      <Background>
        <Header TitlePage={Titles} />
        <TagLabel>
          <NumberTag>01</NumberTag> PICK YOUR DESTINATION
        </TagLabel>

        <Container>
          <CardPlanet data={data.destinations} />
        </Container>
      </Background>
    </>
  );
};

export default Destination;
