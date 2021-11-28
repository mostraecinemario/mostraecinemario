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
    title: 'Identidade Visual:',
    names: ['Jordan Martins']
  },
  {
    title: 'Site:',
    names: ['Cassiana Silveira']
  },
  {
    title: 'Assistentes de produção:',
    names: ['Gabrielle Peres', 'Taís dos Santos']
  },
  {
    title: 'Curadoria:',
    names: ['Jaqueline Nunes', 'Lucas Honorato', 'André Berzagui', 'Marcelo Gobatto']
  },
  {
    title: 'Assessoria de imprensa:',
    names: ['Marislei Ribeiro', 'Maria Rita Rolim', 'Marisa Campos', 'Marianna Bertoldi', 'Leonardo Oliveira', 'Carolina Soares']
  },
  {
    title: 'Social Media:',
    names: ['Carolina Amorim', 'Samantha Beduhn','Eduarda Saraiva']
  },
  {
    title: 'Redação:',
    names: ['Rafaela Stark','Victória Silva','Caroline Quincozes','Alexia Azambuja','Bruna Meotti']
  },
  {
    title: 'Apoio visual:',
    names: ['Julia Vilas Boas','Leticia Vieira','Nadolpho Neto']
  },
  {
    title: 'Colaboradores:',
    names: ['Adryan Copello', 'Jean Amaral', 'Angelita Fialho', 'Miguel Albuquerque', 'Dardo Bornia Jr.']
  },
] 

const List = () => {
  return (
    <Stack spacing={5}>
      {listContent.map((item, index) => (
        <Box key={index} >
          <Flex align="center">
            <Image
              src={Elem22.src}
              alt="Elemento da identidade visual em formato de flor"
              h="18px"
            />
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
