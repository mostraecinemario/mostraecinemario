import Head from 'next/head'
import { Stack, AspectRatio } from "@chakra-ui/react";
import Carroussel from '../components/Carroussel';

import { carrousselImages } from '../utils/carroussel_images';

const Home = () => {
  return (
    <Stack p={3} direction={{base: 'column', md: 'row'}} justify="space-around" spacing={6} w="100%">
      <Head>
        <title>Mostra de Cinema Latino-Americano de Rio Grande...</title>
      </Head>

      <Stack flex='1'>
        <Carroussel images={carrousselImages} />
      </Stack>

    </Stack>
  )
}

export default Home;
