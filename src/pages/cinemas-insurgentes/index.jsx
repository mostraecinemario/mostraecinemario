import Head from 'next/head'
import { useState } from 'react';
import { Flex, Stack, useDisclosure, Heading } from '@chakra-ui/react';

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

        <Flex direction={{base: 'column', md: 'row'}} flex={1} align="center" justify="space-around" mb={5}>
          <Heading className="movies-title" color="brand.vermelho" fontSize="45px">
            mostra cinemas insurgentes
          </Heading>
        </Flex>

        <Stack align="center" px={3} spacing={10}>
          <BlockContent 
            title="bloco 1"
            block={Blocos.cinemasInsurgentes.bloco1}
            setCurrentMovie={setCurrentMovie}
            onOpen={onOpen}
          />

          <BlockContent
            title="bloco 2"
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
