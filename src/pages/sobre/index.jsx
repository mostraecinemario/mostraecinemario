import Head from 'next/head'
import { Text, Box, Flex, Image } from '@chakra-ui/react';

import Cartaz2018 from '/public/cartazes/2018.jpg'
import Cartaz2019 from '/public/cartazes/2019.png'
import Cartaz2020 from '/public/cartazes/2020.png'
import Cartaz2021 from '/public/cartazes/2021.png'

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
        <title>Sobre | Mostra de Cinema Latino-Americano de Rio Grande...</title>
      </Head>

      <Flex align="center">
        <Text ms={2} fontWeight="bold" color="brand.azul" fontSize="22px" textTransform="uppercase">
          Sobre
        </Text>
      </Flex>
      <Text className="justify" py={2}>
        A Mostra de Cinema Latino-Americano de Rio Grande surge como um  desdobramento da Mostra de Cinema OfCine, criada em 2016, para a exibição dos curtas-metragens produzidos nas oficinas do Projeto de extensão “Oficina de Cinema OfCine” do Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul, Campus Rio Grande (IFRS). Sendo seu objetivo,  fomentar produções audiovisuais na cidade de Rio Grande por meio do  fornecimento de bases teóricas e práticas correspondentes a todos os setores da produção fílmica, numa perspectiva crítica frente à linguagem cinematográfica.
      </Text>
      <Format img={Cartaz2018.src}>
      Em 2018, como resultado de dos dois projetos de extensão, “Oficina de Cinema OfCine” e “Cine Clube”, a Mostra integrou às suas atividades a primeira edição do Cinemário – Seminário de Cinema, para a discussão e formação audiovisual. Também realizou sua primeira exibição de filmes ao ar livre, reunindo a comunidade na rua para prestigiar produções regionais e nacionais.
      </Format>

      <Format img={Cartaz2019.src}>
        Em 2019, nosso interesse concentra-se no audiovisual latino-americano sob a perspectiva  decolonial, que tem como marco o manifesto “Hacia un tercer cine”, lançado em 1969, pelos cineastas argentinos Fernando Solanas e Octavio Getino -  no qual, imbuídos das ideias de Franz Fanon, clamavam pela descolonização do olhar de produtores e espectadores cinematográficos latino-americanos, e propunham um enfrentamento estético, narrativo e educativo à linguagem hollywoodiana, partindo de perspectivas nacionais e regionais - que é retomado e reconfigurado na contemporaneidade. O evento manteve o formato que integra Mostra e Seminário, iniciando seu processo de internacionalização, com foco na América Latina. O objetivo é divulgar e discutir o audiovisual latino-americano contemporâneo, por meio da exibição de produções e do intercâmbio com artistas, pesquisadores e realizadores da região.
      </ Format>
      <Format img={Cartaz2020.src}>
        Para que a edição de 2020  pudesse acontecer, muitas mudanças e adaptações precisaram ser feitas devido a necessidade de isolamento social, causado pela pandemia do COVID-19. A Mostra buscou visibilizar as iniciativas cinematográficas (curtas-metragens) potencialmente descolonizadoras de sujeitos e territórios – sobretudo aquelas onde os grupos subalternizados assumem o lugar de enunciação, criando as próprias obras com suas linguagens e problemáticas, agindo de forma a elaborar narrativas contra-hegemônicas em termos de epistemologia territorial e geopolítica do conhecimento (MIGNOLO, 2003). Rastreando intersecções entre as produções cinematográficas latino-americanas recentes, o evento montou sua programação a partir de problematizações contemporâneas apontando caminhos para a sociedade que queremos construir.  
      </ Format>
      <Format img={Cartaz2021.src}>
        Para o ano de 2021 a Mostra, propôs como elemento curatorial a bifurcação entre momentos políticos importantes para a América Latina. A atual crise político-econômica aliada ao pretexto sanitário do COVID-19 nos possibilita enxergar um futuro? Entre distopias e fabulações sobre o que nos espera nos traz um caminho entre a civilização e a barbárie. Em sua 3ª edição, o evento manteve o mesmo formato criado em 2021, com uma mostra de filmes convidados que foi exibida online, composta por 12 curtas-metragens divididas em 3 blocos. Também, como evento de abertura,  se realizou um Cine Drive-in, que conseguia aproximar o público de uma possível retomada das atividades presenciais. A atividade aconteceu na rua Riachuelo, com os pavilhões do Porto Velho do Rio Grande como cenário, despertando nos participantes uma memória afetiva com o espaço. 
      </ Format>
    </Box>
  );
}

export default About;