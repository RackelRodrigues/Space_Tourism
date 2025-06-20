import { useEffect, useState } from "react";

import {
  Terminology,
  Pagination,
  Name,
  Navegation,
  ImageTechnology,
  Description,
  Card,
  ContainerDetails,
} from "./styles";

interface Technology {
  name: string;
  images: { portrait: string; landscape: string };
  description: string;
}

interface Props {
  data?: Technology[];
}

const CardTechnology = ({ data }: Props) => {
  const [selectedTechnology, setSelectedTechnology] =
    useState<Technology | null>(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedTechnology(data[0]);
    }
  }, [data]);

  return (
    <>
      <Card>
        <Navegation>
          {data?.map((Technology, index) => (
            <Pagination
              key={Technology.name}
              isActive={selectedTechnology?.name === Technology.name}
              onClick={() => setSelectedTechnology(Technology)}
            >
              {index + 1}
            </Pagination>
          ))}
        </Navegation>
        <ContainerDetails>
          <Terminology>THE TERMINOLOGY…</Terminology>
          <Name>{selectedTechnology?.name}</Name>
          <Description>{selectedTechnology?.description}</Description>
        </ContainerDetails>

        <ImageTechnology
          src={selectedTechnology?.images.portrait}
          alt={selectedTechnology?.name}
        />
      </Card>
    </>
  );
};

export default CardTechnology;
