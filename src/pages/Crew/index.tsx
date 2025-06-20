import { Header } from "../../components";
import { Background } from "./styles";
import Titles from "../../server/Titles.json";
import { TagLabel, NumberTag } from "../../utils/global";
import data from "../../server/data.json";
import CardCrew from "../../components/CardCrew";

const Crew = () => {
  return (
    <>
      <Background>
        <Header TitlePage={Titles} />

        <TagLabel>
          <NumberTag>02</NumberTag> MEET YOUR CREW
        </TagLabel>

        <CardCrew data={data.crew} />
      </Background>
    </>
  );
};

export default Crew;
