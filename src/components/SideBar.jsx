import {
  Flex,
  Image,
  Icon,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  Circle,
  Link,
  Stack,
  Button,
  Divider
} from '@chakra-ui/react';
import { CgClose } from 'react-icons/cg';

import NavLink from './NavLink';
import SocialBar from './SocialBar';

import Logotipo from '/public/main_logo.png'

const SideBar = ({onClose, isOpen, LinkItems}) => {
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="full" isFullHeight>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>
          <Flex justify="space-between" align="center">
            <Link href="/">
              <Image maxH="80px" src={Logotipo.src} alt="4ª Mostra de Cinema Latino-Americano de Rio Grande"/>
            </Link>
            <Icon as={CgClose} boxSize="40px" color="brand.amarelo" onClick={onClose} />
          </Flex>
          <Divider mt={5} borderColor='brand.vermelho'/>
        </DrawerHeader>
        <DrawerBody px={3}>
          <Flex flex={1} justify="space-between">
            <Stack spacing="10" w="calc(100vw - 50px)" ps={7}>
              {
                Object.values(LinkItems).map((item) => {
                  return (
                    <NavLink key={item.label} item={item} color="brand.azul" subMenu />
                  )
                })
              }
            </Stack>
          </Flex>
            <SocialBar />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SideBar;