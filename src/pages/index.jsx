import Head from 'next/head'
import { Stack, AspectRatio } from "@chakra-ui/react";
import Card from '../components/Card';

import BannerMostra from "/public/homepage/banner-mostra.png";
import BannerDrivein from "/public/homepage/banner-drivein.png";
import BarraLateral from "/public/homepage/lateral-02.png";
import BarraLateralH from "/public/homepage/lateral-h-02.png";

const Home = () => {
  return (
    <Stack p={3} direction={{base: 'column', md: 'row'}} justify="space-around" spacing={6} w="100%">
      <Head>
        <title>Mostra de Cinema Latino-Americano de Rio Grande...</title>
      </Head>

      <Stack flex='.8'>
        <AspectRatio ratio={{base: 1 / 2, md: 16 / 9}}>
          <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1WwbEK1UqypIP20SJb9ro74bMCT8ctnk&ehbc=2E312F"></iframe>
        </AspectRatio>
      </Stack>

    </Stack>
  )
}

export default Home;
