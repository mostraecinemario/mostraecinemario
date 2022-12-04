import Head from 'next/head'
import { Text, Box, Flex, Image, Stack } from "@chakra-ui/react";

import Elem22 from "/public/identidade_visual/elementos identidade visual-22.png";

const listContent = [
  {
    title: 'Coordenação:',
    names: ['Raquel Andrade Ferreira']
  },
  {
    title: 'Produção executiva:',
    names: ['Victor Pinheiro']
  },
  {
    title: 'Direção criativa:',
    names: ['Gianluca Cozza']
  },
  {
    title: 'Assistente de Produção:',
    names: ['Alessa Vaz']
  },
  {
    title: 'Identidade Visual:',
    names: ['Jordan Martins']
  },
  {
    title: 'Site:',
    names: ['Cassiana Silveira']
  },
  {
    title: 'Curadoria:',
    names: ['Lucas Honorato', 'André Berzagui', 'Rubens Fabricio Anzolin']
  },
  {
    title: 'Assessoria de imprensa:',
    names: ['Lisandra Miranda', 'Brenda Pacheco', 'Milene Louzada']
  },
  {
    title: 'Social Media:',
    names: ['Gabriele Peres', 'Ana Luiza Souza','Rafaella Cruz', 'Vinícius Barcellos']
  },
  {
    title: 'Colaboradores:',
    names: ['Adryan Copello', 'Jean Amaral', 'Valentina Acosta', 'Angelita Fialho', 'Miguel Albuquerque', 'Aline Dias', 'Matheus Perazo', 'Julia Arocha', 'Cláudia Feltrin', ]
  },
] 

const List = () => {
  return (
    <Stack spacing={5} p={5}>
      <Head>
        <title>Ficha Técnica | Mostra de Cinema Latino-Americano de Rio Grande...</title>
      </Head>
      {listContent.map((item, index) => (
        <Box key={index} >
          <Flex align="center">
            <Text
              ms={2}
              fontWeight="bold"
              color="brand.azul"
              fontSize="20px"
              textTransform="uppercase"
            >
              {item.title}
            </Text>
          </Flex>
            <Stack ms={6}>
              {item.names.map((name) => (
                <Text fontWeight={500} color="brand.azul" key={name} fontSize="18px">
                  {name}
                </Text>
              ))}
            </Stack>
          </Box>
        ))
      }
    </Stack>
  );
};

export default List;
