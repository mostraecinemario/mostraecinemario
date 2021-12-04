import { Text, Box, Flex, Image, Stack, Link } from "@chakra-ui/react";

import Cartaz from "/public/drivein/responsabilidad_empresarial.png";
import ButtonImg from "/public/drivein/button.png"
import Date from "/public/drivein/date.png"
import Title from "/public/drivein/title.png"

const DriveIn = () => {
  return (
    <Stack py={5} spacing={5}>
      <Flex direction={{base:"column", md:"row"}} px={{md: 24}} align="center" justify="center">
        <Image h="300px" objectFit="contain" src={Title.src} alt="cine drive-in" />
        <Box className="justify">
          <Text>
            Como abertura da 3ª Mostra de Cinema Latino-Americano de Rio Grande, um Cine Drive-in foi pensado para atender o público da cidade do Rio Grande. Este ano, a atividade irá acontecer no estacionamento do Porto Velho de Rio Grande, com a exibição do filme Responsabilidade Empresarial, do diretor Jonathan Perel. 
          </Text>
          <Text>
            Responsabilidade Empresarial é uma produção argentina, lançada em 2020, com classificação indicativa de 16 anos. O longa-metragem insere o público no contexto da ditadura na Argentina (1976-1983), onde vários cómplices civis contribuíram para a repressão e nunca foram levados à justiça. Em 2015, foi publicado um relatório que comprova a responsabilidade empresarial. Jonathan Perel lê trechos do relatório em frente a muitas fábricas dessas empresas. 
          </Text>
          <Text>
            O Cine Drive-in será gratuito, mas é necessário fazer inscrição para participar, basta clicar no botão logo abaixo que diz “RETIRE SEU TICKET”, preencher o formulário de inscrição, enviar, e, aguardar a confirmação por e-mail. Importante se atentar, o som do filme é disponibilizado através do rádio do carro, que capta uma frequência própria do nosso equipamento.  
          </Text>
        </Box> 
      </Flex>
      <Flex direction={{base:"column", md:"row"}} align="center">
        <Stack>
          <Image maxH="400px" position="relative" right={3} src={Cartaz.src} alt="Cartaz do filme Responsabilidad Empresarial" />
          <Box position={{ lg: "relative"}} top="-160px" right={4} px={3} py={1} color={{ lg: 'brand.amarelo' }}>
              <Box display={{base: 'none', md: 'block'}}>
                <Text fontSize="22px">RESPONSABILIDADE EMPRESARIAL, 2020, AR</Text>
                <Text fontSize="22px">Dirigido por Jonathan Perel</Text>
              </Box>
              <Box display={{base: 'block', md: 'none'}}>
                <Text fontSize="17px" fontWeight="semibold">RESPONSABILIDADE EMPRESARIAL</Text>
                <Text fontSize="15px">2020, AR</Text>
                <Text fontSize="15px">Dirigido por Jonathan Perel</Text>
              </Box>
              <Text className="justify">
                Durante a ditadura argentina (1976-1983), vários cúmplices civis contribuíram para a repressão e nunca foram levados à justiça. Em 2015, foi publicado um relatório que comprova a responsabilidade empresarial. Jonathan Perel lê trechos do relatório em frente a muitas fábricas dessas empresas.
              </Text>
          </Box>
        </Stack>
        <Stack ms={{base: 0, md: 5}} spacing={5}  alignSelf={{base: 'flex-end', md: 'flex-start'}} >
          <Image maxH="200px" objectFit="contain" src={Date.src} alt="9/12 às 20h30 Estacionamento do Porto Velho de Rio Grande" />
    
          <Link href='https://forms.gle/hDcf6sWK1LHuTDEo8' target="_blank">
            <Image maxH="300px" objectFit="contain" alt="Inscreva-se" src={ButtonImg.src} />
          </Link>
        </Stack>
      </Flex>
    </Stack>
  );
}

export default DriveIn;
