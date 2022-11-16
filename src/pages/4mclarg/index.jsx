import Head from 'next/head'
import { Text, Box, Flex, Image } from '@chakra-ui/react';

const About = () => { 
  const Format = ({children, img}) => {
    return (
      <>
        <Flex py={3} direction={{base: "column", md:"row"}} align="center">
          <Image maxH="400px" w="fit-content" src={img} alt="Cartaz da mostra de 2018" />
          <Text className="justify" py={2} px={{base: 0, md: 4}}>
            {children}
          </Text>
        </Flex>
      </>
    );
  }

  return (
    <Box px={{base: 5, md: 12}}>
      <Head>
        <title>4ª MCLARG | Mostra de Cinema Latino-Americano de Rio Grande...</title>
      </Head>

      <Text fontWeight="bold" alignSelf={"start"}  fontSize="4xl" textTransform="uppercase" mb={10}>4ª MCLARG</Text>
      <Image src="/banner.png" alt="banner" maxH="300px" float={{base: "center", md: "left"}} m={5} />
      <Text className="justify" py={2}>
        <Text as="span" fontWeight="bold">A Mostra de Cinema Latino-Americano de Rio Grande{" "}</Text>
        é um evento que surge a partir de um conjunto de projetos de extensão na área do cinema, vinculados ao Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul, Campus Rio Grande. O evento só ganhou este nome em 2019, com o objetivo de ampliar suas atividades e discussões para o âmbito da America-Latina. Durante essa linha do tempo, de 2016 a 2021, o projeto fomentou na cidade, um importante espaço cultural para discussão e capacitação do fazer cinema e audiovisual, na região sul do estado do Rio Grande do Sul, no Brasil e na América-Latina.  
      </Text>
      <Text className="justify" py={2}>
        Para o ano de 2022, começou-se a explorar elementos que ajudassem a situar a cidade do Rio Grande dentro da America-Latina. Por isso nasce a ideia de trazer como temática principal do evento, o Porto. Sendo assim, a 4º edição da Mostra de Cinema Latino-Americano de Rio Grande tem como temática as intersecções da cultura portuária, buscando relação do povo com as atividades econômicas realizadas em portos, suas especificidades em torno do labor e o conhecimento geracional, que também lida diretamente com as narrativas vindas de um lugar desconhecido - o mar - como o folclore e festas ritualísticas que se vinculam. Com isso, buscamos traçar uma relação de como o desenvolvimento econômico das cidades portuárias influenciam na construção de uma comunidade multicultural, refletindo nas narrativas artísticas do cinema e audiovisual.   
      </Text>
      <Image src="/banner2022.png" alt="banner" maxH="300px" float={{base: "center",md: "right"}} m={5} />
      <Text className="justify" py={2}>
        Sendo assim, a organização do evento propõe em sua programação exibições de longas-metragens a céu aberto, criando uma memória afetiva entre público e cidade, para isso, as exibições aconteceram em locais importantes da cidade do Rio Grande, como por exemplo em 2020, a Mostra trouxe um Cine Drive-in para a  Antiga Estação Férrea da Cidade e, em 2021, a mesma atividade foi realizada na rua Riachuelo em frente a Alfândega e ao Porto Velho da Cidade. Como proposta de formação, este ano teremos 3 oficinas de capacitação, voltadas para a produção audiovisual e 1 mesa de conversa sobre vídeo clipe na cidade. Para isso, iremos contar com a participação de realizadores que já atuam na indústria cinematográfica, oportunizando um panorama geral sobre cinema e audiovisual, possibilitando e instigando novos agentes a virem se tornar realizadores dentro da cidade.
      </Text>
      <Text className="justify" py={2}>
        Por fim, o evento se integrada a Semana Municipal de Cinema (Lei Municipal Nº 8.724), onde a cidade de Rio Grande irá sediar exibições de filmes, mesas de debate e oficinas, proporciona a comunidade não somente uma atividade de lazer, como também um espaço de capacitação, promovendo o acesso à formação para a produção audiovisual e dando visibilidade às produções desenvolvidas de forma independente no âmbito latino-americano, bem como, oportunizando a exibição de produções que dificilmente seriam assistidas pela comunidade.
      </Text>
    </Box>
  );
}

export default About;