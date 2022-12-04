import Head from 'next/head'
import { Text, Stack } from '@chakra-ui/react';
import Filmes from '../../components/Filmes';

const MostraPrincipal = () => {
  return (
    <>
      <Stack w="100%" p={6}>
        <Head>
          <title>Filmes | Mostra de Cinema Latino-Americano de Rio Grande...</title>
        </Head>
        <Stack align="center">
          <Text fontWeight="bold" alignSelf={"start"} px="20%" fontSize="4xl" textTransform="uppercase" mb={10}>Filmes</Text>
          <Filmes />
        </Stack>
      </Stack>
    </>
  )
}

export default MostraPrincipal;
