import {
  Background,
  Container,
  Subtitle,
  Title,
  Description,
  ExploreButton,
} from "./styles";
import Header from "../../components/Header";
import Titles from "../../server/Titles.json";

const Home = () => {
  return (
    <Background>
      <Header TitlePage={Titles} />
      <Container>
        <div>
          <Subtitle>SO, YOU WANT TO TRAVEL TO</Subtitle>
          <Title>SPACE</Title>
          <Description>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Description>
        </div>
        <ExploreButton>EXPLORE</ExploreButton>
      </Container>
    </Background>
  );
};

export default Home;
