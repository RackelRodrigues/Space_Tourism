import { Background } from "./styles";
import Titles from "../../server/Titles.json";
import { Header } from "../../components";
import { NumberTag, TagLabel } from "../../utils/global";
import data from "../../server/data.json";
import CardTechnology from "../../components/CardTechonology";

const Technology = () => {
  return (
    <>
      <Background>
        <Header TitlePage={Titles} />

        <TagLabel>
          <NumberTag>03</NumberTag> SPACE LAUNCH 101
        </TagLabel>

        <CardTechnology data={data.technology} />
      </Background>
    </>
  );
};

export default Technology;
