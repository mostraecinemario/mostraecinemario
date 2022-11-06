import Head from 'next/head'
import { useState } from 'react';
import { Image, Flex, Stack, useDisclosure } from '@chakra-ui/react';

import HeaderImg from "/public/curtas_latinos.png"
import Blocos from '/src/utils/blocos.js';

import MovieModal from '../../components/MovieModal';
import BlockContent from '../../components/BlockContent';

const MostraPrincipal = () => {
  const [currentMovie, setCurrentMovie] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  return(
    <>
      <Stack w="100%" py={10}>
        <Head>
          <title>Curtas Latino-americano | Mostra de Cinema Latino-Americano de Rio Grande...</title>
        </Head>

        <Flex flex={1} align="center" justify="center" mb={5}>
          <Image src={HeaderImg.src} alt="mostra de curtas latino-americanos" maxH="150px" objectFit="contain" />
        </Flex>

        <Stack align="center" px={3} spacing={10}>
          <BlockContent 
            title="bloco 1"
            block={Blocos.curtasLatinoAmericanos.bloco1}
            setCurrentMovie={setCurrentMovie}
            onOpen={onOpen}
          />

          <BlockContent
            title="bloco 2"
            block={Blocos.curtasLatinoAmericanos.bloco2}
            setCurrentMovie={setCurrentMovie}
            onOpen={onOpen}
          />

          <BlockContent
            title="bloco 3"
            block={Blocos.curtasLatinoAmericanos.bloco3}
            setCurrentMovie={setCurrentMovie}
            onOpen={onOpen}
          />
        </Stack>
      </Stack>

      <MovieModal movie={currentMovie} onClose={onClose} isOpen={isOpen} />
    </>
  )
}

export default MostraPrincipal;
