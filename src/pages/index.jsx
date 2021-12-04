import { Stack, Image } from "@chakra-ui/react";
import Card from '../components/Card';

import BannerMostra from "/public/homepage/banner-mostra.png";
import BannerDrivein from "/public/homepage/banner-drivein.png";
import BarraLateral from "/public/homepage/lateral-02.png";
import BarraLateralH from "/public/homepage/lateral-h-02.png";

const Home = () => {
  return (
    <Stack p={10} direction={{base: 'column', md: 'row'}} justify="space-around" spacing={6} w="100%">
      <Image display={{base: "block", md: "none"}} maxW="100%" objectFit="contain" src={BarraLateralH.src} alt="" />

      <Card img={BannerMostra.src} href="/sobre">
        A Mostra de Cinema Latino-Americano de Rio Grande surge como um  desdobramento da Mostra de Cinema OfCine, criada em 2016, para a exibição dos curtas-metragens...
      </Card>
    
      <Card img={BannerDrivein.src} href="/drive-in">
        Como abertura da 3ª Mostra de Cinema Latino-Americano de Rio Grande, um Cine Drive-in foi pensado para atender o público da cidade do Rio Grande...
      </Card>

      <Image display={{base: "none", md: "block"}} maxW="150px" objectFit="contain" src={BarraLateral.src} alt="" />
    </Stack>
  )
}

export default Home;
