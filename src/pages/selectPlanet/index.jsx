import { useState } from 'react';
import Space from "@/components/layout/space/index.jsx";
import * as S from "./style";
import PlanetModal from "./planet";

export default function SelectPlanet() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const PLANETS = [
    {
      name: "핀다",
      img: "/finda.svg",
      margin: "down",
      shadow: "rgba(88, 86, 214, 0.6)",
      bg : "/findaInPlant.svg"
    },
    {
      name: "더스팟",
      img: "/thespot.svg",
      margin: "up",
      shadow: "rgba(255, 45, 85, 0.6)",
      bg : "/thespotInPlant.svg"
    },
    {
      name: "달파",
      img: "/dalpa.svg",
      margin: "down",
      shadow: "rgba(255, 149, 0, 0.6)",
      bg : "/dalpaInPlant.svg"
    }
  ]
  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet);
  };

  const closeModal = () => {
    setSelectedPlanet(null);
  };

  return (
    <Space>
      <S.SelectPlanetContainer>
        <S.HeadText>
          면접을 보고 싶은 행성을 선택해주세요!
        </S.HeadText>
        <S.PlanetBox>
          {PLANETS.map((planet, index) => (
            <S.Planet 
              key={planet.name} 
              $margin={planet.margin}
              onClick={() => handlePlanetClick(planet)}
              $isSelected={selectedPlanet?.name === planet.name}
            >
              <S.PlanetImg 
                src={planet.img} 
                alt={planet.name} 
                $shadow={planet.shadow}
                $index={index}
                $isSelected={selectedPlanet?.name === planet.name}
              />
              <S.NameBox $isSelected={selectedPlanet?.name === planet.name}>
                {planet.name}
              </S.NameBox>
            </S.Planet>
          ))}
        </S.PlanetBox>
      </S.SelectPlanetContainer>
      
      {selectedPlanet && (
        <PlanetModal 
          planet={selectedPlanet} 
          onClose={closeModal} 
          isOpen={!!selectedPlanet}
        />
      )}
    </Space>
  )
}