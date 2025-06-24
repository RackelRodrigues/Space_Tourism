import { useState, useEffect } from "react";
import {
  NameProfession,
  Name,
  Bio,
  ImagePerson,
  Pagination,
  Navegation,
  Container,
} from "./styles";

interface Crew {
  name: string;
  images: { png: string; webp: string };
  role: string;
  bio: string;
}

interface Props {
  data?: Crew[];
}

const CardCrew = ({ data }: Props) => {
  const [selectedPerson, setSelectedPerson] = useState<Crew | null>(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedPerson(data[0]);
    }
  }, [data]);

  return (
    <>
      <Container>
        <div className="ContainerDetails">
          <NameProfession>{selectedPerson?.role}</NameProfession>
          <Name>{selectedPerson?.name}</Name>
          <Bio>{selectedPerson?.bio}</Bio>

          <Navegation>
            {data?.map((person) => (
              <Pagination
                key={person.name}
                isActive={selectedPerson?.name === person.name}
                onClick={() => setSelectedPerson(person)}
              />
            ))}
          </Navegation>
        </div>
        <ImagePerson
          name={selectedPerson?.name}
          src={selectedPerson?.images.webp}
          alt={selectedPerson?.name}
        />
      </Container>
    </>
  );
};

export default CardCrew;
