import { Flex, Image, Icon, useDisclosure, Stack, Link, Menu, Divider } from '@chakra-ui/react';
import { CgMenuRight } from 'react-icons/cg';

import NavBar from './NavBar';
import SideBar from './SideBar';

import Logotipo from '/public/main_logo.png'

import Navigation from '/src/utils/navigation.js'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Stack>
      <Flex 
        px="4"
        py="2"
        top="0"
        zIndex="1"
        align="center"
        justify="space-between"
        direction={{base:'row', md: 'column' }}
      >
        <Link href="/">
          <Image maxH="150px" src={Logotipo.src} alt="4ª Mostra de Cinema Latino-Americano de Rio Grande"/>
        </Link>

        <Flex display={{base: 'flex', md:'none'}}>
          <Icon as={CgMenuRight}  w="40px" h="40px" color="brand.amarelo" onClick={onOpen} />
        </Flex>

        <SideBar onClose={onClose} isOpen={isOpen} LinkItems={Navigation} />

        <Stack display={{base: 'none', md:'flex'}} align="center" spacing={4} mt={6}>
            <Stack spacing={10} direction="row">
                {
                  Object.values(Navigation).map((item) => {
                    return (
                      <Menu key={item.label}>
                        <NavBar item={item} />
                      </Menu>
                    )
                  })
                }
            </Stack>
        </Stack>
      </Flex>
      <Divider w="100vw" borderColor='brand.vermelho' />
    </Stack>
    );
};



export default Header;