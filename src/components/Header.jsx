import { Flex, Image, Icon, useDisclosure, Stack, Link, Menu, Button } from '@chakra-ui/react';
import { CgMenuRight } from 'react-icons/cg';

import NavBar from './NavBar';
import SideBar from './SideBar';

import Elem18 from '/public/identidade_visual/elementos identidade visual-18.png'

import Navigation from '/src/utils/navigation.js'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
      <Link href="/">
        <Image maxH="120px" src={Elem18.src} alt="3ª Mostra de Cinema Latino-Americano de Rio Grande"/>
      </Link>

      <Flex display={{base: 'flex', md:'none'}}>
        <Icon as={CgMenuRight} w="40px" h="40px" color="brand.amarelo" onClick={onOpen} />
      </Flex>

      <SideBar onClose={onClose} isOpen={isOpen} LinkItems={Navigation} />

      <Flex display={{base: 'none', md:'flex'}}>
        <Stack spacing="10" direction="row">
            {
              Object.values(Navigation).map((item) => {
                return (
                  <Menu key={item.label}>
                    <NavBar item={item} />
                  </Menu>
                )
              })
            }
            <Flex align="center" justify="center">
              <Button variant="outline" color="brand.amarelo" borderWidth={3} borderColor="brand.amarelo" fontSize="30px" px="2px" py={0} opacity={.5} width="fit-content"disabled >NO AR</Button>
            </Flex>
        </Stack>
      </Flex>
    </Flex>
  );
};



export default Header;