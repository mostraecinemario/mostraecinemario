import { Flex, Heading, Image, Stack, Text, Divider } from '@chakra-ui/react';

//idealizadores
import Ofcine from '/public/logos/idealizadores/ofcine.png'

//realizadores
import Ifrs from '/public/logos/realizadores/ifrs.png'
import Sesc from '/public/logos/realizadores/sesc.png'
import PrefeituraRG from '/public/logos/realizadores/prefeitura_riogrande.png'

//apoio
import Furg from '/public/logos/apoio/furg.png'
import Ila from '/public/logos/apoio/ila.png'
import Ufpel from '/public/logos/apoio/ufpel.png'
import CinemaUfpel from '/public/logos/apoio/cinema.png'
import MestradoUfpel from '/public/logos/apoio/mestrado.png'
import Fapergs from '/public/logos/apoio/fapergs.png'
import Cnpq from '/public/logos/apoio/cnpq.png'
import IfsulSL from '/public/logos/apoio/ifsul_sl.png'
import PortoRs from '/public/logos/apoio/autoridade_portuaria.png'
import Ministerio from '/public/logos/apoio/ministerio_publico.png'


const Footer = () => {
  return (
    <Stack className="footer" spacing={6} position="relative" bottom={0} align="center" py={4} px={2} w="100%">
      <Divider borderColor="brand.vermelho" />
      <Stack align="center">
        <Heading as="h5" size="md" textTransform="lowercase" color="brand.azul" fontWeight='bold'>idealização</Heading>
        <Image src={Ofcine.src} h={{base:"70px", md: "110px"}} alt="Logotipo ofcine" />
      </Stack>

      <Stack align="center" w="100%">
        <Heading as="h5" size="md" textTransform="lowercase" color="brand.azul" fontWeight='bold'>realização</Heading>
        <Stack direction="row" wrap="wrap" spacing={{base: 6, md: 28}} justify="center" align="center" w="100%">
          <Image src={Ifrs.src} h={{base: "28px", md: "48px"}} alt="Logotipo IFRS" />
          <Image src={PrefeituraRG.src} h={{base:"40px", md: "60px"}} alt="Logotipo Prefeitura de rio grande" />
          <Image src={Sesc.src} h={{base:"40px", md: "60px"}} alt="Logotipo Sesc" />
        </Stack>
      </Stack>

      <Stack align="center" w="100%">
        <Heading as="h5" size="md" textTransform="lowercase" color="brand.azul" fontWeight='bold'>apoio</Heading>
        <Stack spacing={3} w="100%">
          <Stack direction="row" wrap="wrap" spacing={{base: 6, md: 28}} justify="center" align="center" w="100%">
            <Image src={Furg.src} h={{base: "60px", md: "75px"}} alt="Logotipo Furg" />
            <Image src={Ufpel.src} h={{base: "45px", md: "75px"}} alt="Logotipo Ufpel" />
            <Image src={CinemaUfpel.src} h={{base: "20px", md: "35px"}} alt="Logotipo Cinema Ufpel" mb={2} />
            <Image src={MestradoUfpel.src} h={{base: "20px", md: "40px"}} alt="Logotipo Mestrado em Cinema Ufpel" />
            <Image src={Fapergs.src} h={{base:"30px", md: "50px"}} alt="Logotipo Fapergs" />
            <Image src={Cnpq.src} h={{base: "25px", md: "40px"}} alt="Logotipo CNPQ" />
          </Stack>
          <Flex wrap="wrap" justify="space-around" align="center"  w="100%">
            <Image src={Ministerio.src} h={{base: "35px", md: "60px"}} alt="Logotipo Ministério publico" />
          </Flex>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Footer;