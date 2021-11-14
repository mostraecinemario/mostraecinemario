import { Flex, Image, Icon, useDisclosure, Stack } from '@chakra-ui/react';
import { CgMenuRight } from 'react-icons/cg';

import NavLink from './NavLink';
import SideBar from './SideBar';

import Elem18 from '/public/identidade_visual/elementos identidade visual-18.png'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const LinkItems = {
    inicio: { label: "Inicio", href: "/" },
    aMostra: {
      label: "A Mostra",
      children: [
        {label: "Sobre", href: '/mostra/sobre'},
        {label: "Ficha Técnica", href: '/mostra/ficha-tecnica'}
      ]
    },
    filmes: {
      label: "Filmes",
      children: [
        {label: "Mostra Principal", href: '/filmes/mostra-principal'},
        {label: "Mostra Paralela", href: '/filmes/mostra-paralela'}
      ]
    },
    atividades: {
      label: "Atividades",
      children: [
        {label: "Cine Debate", href: '/atividades/cine-debate'},
        {label: "Cinema de Rua", href: '/atividades/cinema-de-rua'}
      ]
    }
  };

  return (
    <Flex 
      px="4"
      py="2"
      top="0"
      zIndex="1"
      align="center"
      bg="brand.vermelho"
      justify="space-between"
    >
      <Image maxH="120px" src={Elem18.src} alt="3ª Mostra de Cinema Latino-Americano de Rio Grande"/>

      <Flex display={{base: 'flex', md:'none'}}>
        <Icon as={CgMenuRight} w="40px" h="40px" color="brand.amarelo" onClick={onOpen} />
      </Flex>
      <SideBar onClose={onClose} isOpen={isOpen} LinkItems={LinkItems} />

      <Flex display={{base: 'none', md:'flex'}}>
        <Stack spacing="10" direction="row">
            {
              Object.values(LinkItems).map((item) => {
                return (
                  <NavLink key={item.label} item={item} color="brand.amarelo" />
                )
              })
            }
        </Stack>
      </Flex>
    </Flex>
  );
};



export default Header;