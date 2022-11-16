import Head from 'next/head'
import { Stack, AspectRatio, Text } from "@chakra-ui/react";

const CinemaItinerante = () => {
  return (
    <Stack p={3}  justify="space-around" spacing={6} w="100%">
      <Head>
        <title>Cinema Itinerante | Mostra de Cinema Latino-Americano de Rio Grande</title>
      </Head>

      <Text fontWeight="bold" alignSelf={"start"} px="20%" fontSize="4xl" textTransform="uppercase" mb={10}>Exibições</Text>
      <Stack flex='.8'>
        <AspectRatio ratio={{base: 1 / 2, md: 16 / 9}}>
          <iframe src="https://www.google.com/maps/d/embed?mid=1MNCoheTDHkGObLQOq5cOFqn7qv9ePE0&ehbc=2E312F"></iframe>
        </AspectRatio>
      </Stack>

    </Stack>
  )
}

export default CinemaItinerante;
