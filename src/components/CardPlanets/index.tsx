import React, { useState, useEffect } from "react";
import {
  CardPlanet,
  Container,
  Navegation,
  NameTag,
  NamePlanet,
  DescriptionPlanet,
  Information,
  Numbers,
  Line,
  ImagePlanet,
  ContainerInfo,
} from "./styles";

interface Planet {
  name: string;
  images: { png: string; webp: string };
  description: string;
  distance: string;
  travel: string;
}

interface Props {
  data?: Planet[];
}

const CardPlanets = ({ data }: Props) => {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedPlanet(data[0]);
    }
  }, [data]);
  return (
    <Container>
      <div className="ContainerImages">
        <ImagePlanet
          src={selectedPlanet?.images.webp}
          alt={selectedPlanet?.name}
        />
      </div>
      <CardPlanet>
        <Navegation>
          {data?.map((planet) => (
            <NameTag
              key={planet.name}
              isActive={selectedPlanet?.name === planet.name}
              onClick={() => setSelectedPlanet(planet)}
            >
              {planet.name}
            </NameTag>
          ))}
        </Navegation>
        <NamePlanet>{selectedPlanet?.name}</NamePlanet>
        <DescriptionPlanet>{selectedPlanet?.description}</DescriptionPlanet>
        <Line />
        <ContainerInfo>
          <div>
            <Information>AVG. DISTANCE</Information>
            <Numbers>{selectedPlanet?.distance}</Numbers>
          </div>
          <div>
            <Information>Est. travel time</Information>
            <Numbers>{selectedPlanet?.travel}</Numbers>
          </div>
        </ContainerInfo>
      </CardPlanet>
    </Container>
  );
};

export default CardPlanets;
