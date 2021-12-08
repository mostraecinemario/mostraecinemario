import Head from 'next/head'
import { useState } from 'react';
import { Flex, Stack, useDisclosure, Image } from '@chakra-ui/react';

import HeaderImg from "/public/cine_insurgentes.png"
import Blocos from '/src/utils/blocos.js';

import MovieModal from '../../components/MovieModal';
import BlockContent from '../../components/BlockContent';
import LoginButton from '../../components/LoginButton';


const CinemasInsurgentes = () => {
  const [currentMovie, setCurrentMovie] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return(
    <>
      <Stack w="100%" py={10}>
        <Head>
          <title>Cinemas Insurgentes | Mostra de Cinema Latino-Americano de Rio Grande...</title>
        </Head>

        <Flex flex={1} align="center" justify="center" mb={5}>
          <Image src={HeaderImg.src} alt="mostra de curtas latino-americanos" maxH="200px" objectFit="contain" />
        </Flex>

        <Flex flex={1} align="center" justify="flex-end">
          <LoginButton />
        </Flex>

        <Stack align="center" px={3} spacing={10}>
          <BlockContent 
            title="bloco 1"
            block={Blocos.cinemasInsurgentes.bloco1}
            setCurrentMovie={setCurrentMovie}
            onOpen={onOpen}
            wrap
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
