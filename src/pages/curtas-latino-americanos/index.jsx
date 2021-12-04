import Head from 'next/head'
import { useState } from 'react';
import { Text, Box, Flex, Image, Stack, useDisclosure } from '@chakra-ui/react';

import ButtonImg from "/public/drivein/button.png"
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

        <Flex flex={1} direction={{base: 'column', md: 'row'}} align="center" justify="space-around">
          <Text color="brand.vermelho" fontSize="30px" fontWeight="bold">
            mostra de curtas latino-americanos
          </Text>

          <Box alignSelf={{ base: 'flex-end', md: 'center' }}>
            <Image maxH="100px" objectFit="contain" alt="Inscreva-se" src={ButtonImg.src} />
          </Box>
        </Flex>

        <Stack align="center" px={3} spacing={10}>
          <BlockContent 
            title="Bloco 1"
            block={Blocos.curtasLatinoAmericanos.bloco1}
            setCurrentMovie={setCurrentMovie}
            onOpen={onOpen}
          />

          <BlockContent
            title="Bloco 2"
            block={Blocos.curtasLatinoAmericanos.bloco2}
            setCurrentMovie={setCurrentMovie}
            onOpen={onOpen}
          />

          <BlockContent
            title="Bloco 3"
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
