import Head from 'next/head'
import { useState } from 'react';
import { Text, Box, Flex, Image, Stack, useDisclosure } from '@chakra-ui/react';

import ButtonImg from "/public/drivein/button.png"
import Blocos from '/src/utils/blocos.js';

import MovieModal from '../../components/MovieModal';
import BlockContent from '../../components/BlockContent';

const CinemasInsurgentes = () => {
  const [currentMovie, setCurrentMovie] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return(
    <>
      <Stack w="100%" py={10}>
        <Head>
          <title>Cinemas Insurgentes | Mostra de Cinema Latino-Americano de Rio Grande...</title>
        </Head>

        <Flex direction={{base: 'column', md: 'row'}} flex={1} align="center" justify="space-around">
          <Box alignSelf={{ base: 'flex-end', md: 'center' }}>
            <Image maxH="100px" objectFit="contain" alt="Inscreva-se" src={ButtonImg.src} />
          </Box>

          <Text color="brand.vermelho" fontSize="30px" fontWeight="bold">
            mostra cinemas insurgentes
          </Text>
        </Flex>

        <Stack align="center" px={3} spacing={10}>
          <BlockContent 
            title="Bloco 1"
            block={Blocos.cinemasInsurgentes.bloco1}
            setCurrentMovie={setCurrentMovie}
            onOpen={onOpen}
          />

          <BlockContent
            title="Bloco 2"
            block={Blocos.cinemasInsurgentes.bloco2}
            setCurrentMovie={setCurrentMovie}
            onOpen={onOpen}
          />
        </Stack>
      </Stack>

      <MovieModal movie={currentMovie} onClose={onClose} isOpen={isOpen} />
    </>
  )
}

export default CinemasInsurgentes;
