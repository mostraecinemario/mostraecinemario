import Head from 'next/head'
import { Stack, AspectRatio } from "@chakra-ui/react";

const CinemaItinerante = () => {
  return (
    <Stack p={3} direction={{base: 'column', md: 'row'}} justify="space-around" spacing={6} w="100%">
      <Head>
        <title>Cinema Itinerante | Mostra de Cinema Latino-Americano de Rio Grande</title>
      </Head>

      <Stack flex='.8'>
        <AspectRatio ratio={{base: 1 / 2, md: 16 / 9}}>
          <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1WwbEK1UqypIP20SJb9ro74bMCT8ctnk&ehbc=2E312F"></iframe>
        </AspectRatio>
      </Stack>

    </Stack>
  )
}

export default CinemaItinerante;
