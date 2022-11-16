import Head from 'next/head'
import { Stack, AspectRatio, Text } from "@chakra-ui/react";

const CinemaItinerante = () => {
  return (
    <Stack p={3}  justify="space-around" spacing={6} w="100%">
      <Head>
        <title>Cinema Itinerante | Mostra de Cinema Latino-Americano de Rio Grande</title>
      </Head>

      <Text fontWeight="bold" alignSelf={"start"} px="20%" fontSize="4xl" textTransform="uppercase" mb={2}>Exibições</Text>
      <Text px="15%">Para este ano, as exibições dos filmes irão acontecer em um formato itinerante com o CINEMA DE RUA. Iremos levar nosso cinema para diferentes cantos da cidade do Rio Grande. Nossa primeira exibição será no Rincão da Cebola, no Centro da cidade, depois iremos levar nosso cinema até a Orla da Henrique Pancada, seguindo para a Ilha dos Marinheiros e logo para o Taim, encerrando nosso evento no Cassino. Cada exibição irá acontecer em um dia da semana, de segunda a sexta, às 19h. Acompanhe pelo mapa onde será cada exibição para saber qual lugar fica mais próximo de você.</Text>
      <Stack flex='.8' align={"center"}>
        <AspectRatio w="80%" ratio={{base: 1 / 2, md: 16 / 9}}>
          <iframe src="https://www.google.com/maps/d/embed?mid=1MNCoheTDHkGObLQOq5cOFqn7qv9ePE0&ehbc=2E312F"></iframe>
        </AspectRatio>
      </Stack>

    </Stack>
  )
}

export default CinemaItinerante;
