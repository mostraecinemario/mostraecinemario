import { Text, Box, Flex, Image, Stack } from "@chakra-ui/react";

import Elem22 from "/public/identidade_visual/elementos identidade visual-22.png";
import Cartaz from "/public/cartazes/responsabilidade-empresarial-papo-de-cinema-cartaz.jpg";

const DriveIn = () => {
  return (
    <Box>
      <Image src={Cartaz.src} alt="Cartaz filme exibido no cine drive-in" />
      <Flex mt={4} align="center">
        <Image src={Elem22.src} alt="Elemento da identidade visual em formato de flor" h="18px" />
        <Text
          ms={2}
          textTransform="uppercase"
          fontWeight="bold"
          color="brand.azul"
          fontSize="20px"
        >
          Responsabilidade empresarial
        </Text>
      </Flex>
      
      <Flex>
        <Text
          ms={2}
          textTransform="uppercase"
          fontWeight="bold"
          color="brand.azul"
          fontSize="20px"
        >
          Ano:
        </Text>
        <Text
          ms={2}
          fontWeight="500"
          color="brand.azul"
          fontSize="20px"
          borderBottom="1px solid"
          borderColor="brand.azul"
          as="u"
        >
          2020
        </Text>
      </Flex>
      
      <Flex>
        <Text
          ms={2}
          textTransform="uppercase"
          fontWeight="bold"
          color="brand.azul"
          fontSize="20px"
        >
          País:
        </Text>
        <Text
          ms={2}
          fontWeight="500"
          color="brand.azul"
          fontSize="20px"
          borderBottom="1px solid"
          borderColor="brand.azul"
          as="u"
        >
          Argentina
        </Text>
      </Flex>
      
      <Flex>
        <Text
          ms={2}
          textTransform="uppercase"
          fontWeight="bold"
          color="brand.azul"
          fontSize="20px"
        >
          Direção:
        </Text>
        <Text
          ms={2}
          fontWeight="500"
          color="brand.azul"
          fontSize="20px"
          borderBottom="1px solid"
          borderColor="brand.azul"
          as="u"
        >
          Jonathan Perel
        </Text>
      </Flex>
      
      <Flex mb={5} direction="column">
        <Text
          ms={2}
          textTransform="uppercase"
          fontWeight="bold"
          color="brand.azul"
          fontSize="20px"
        >
          Sinopse:
        </Text>
        <Text
          ms={2}
          fontWeight="500"
          color="brand.azul"
          fontSize="20px"
          borderBottom="1px solid"
          borderColor="brand.azul"
        >
          Durante a ditadura argentina (1976-1983), vários cúmplices civis contribuíram para a repressão e nunca foram levados à justiça. Em 2015, foi publicado um relatório que comprova a responsabilidade empresarial. Jonathan Perel lê trechos do relatório em frente a muitas fábricas dessas empresas.
        </Text>
      </Flex>

      <Text
        ms={2}
        fontWeight="500"
        color="brand.azul"
        fontSize="20px"
        borderBottom="1px solid"
        borderColor="brand.azul"
      >
        <Text as="span" fontWeight="bold" textTransform="uppercase" me={2}>Data:</Text>
        09 de dezembro de 2021
      </Text>

      <Text
        ms={2}
        fontWeight="500"
        color="brand.azul"
        fontSize="20px"
        borderBottom="1px solid"
        borderColor="brand.azul"
      >
        <Text as="span" fontWeight="bold" textTransform="uppercase" me={2}>Local:</Text>
        Estacionamento do Porto Velho de Rio Grande, entrada pela rua Riachuelo
      </Text>

      <Text
        ms={2}
        fontWeight="500"
        color="brand.azul"
        fontSize="20px"
        borderBottom="1px solid"
        borderColor="brand.azul"
      >
        <Text as="span" fontWeight="bold" textTransform="uppercase" me={2}>Horário:</Text>
        20h30
      </Text>
    </Box>
  );
}

export default DriveIn;
