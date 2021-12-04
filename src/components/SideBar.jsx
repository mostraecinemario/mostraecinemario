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
  Button
} from '@chakra-ui/react';
import { CgClose } from 'react-icons/cg';

import NavLink from './NavLink';
import SocialBar from './SocialBar';

import Elem18 from '/public/identidade_visual/elementos identidade visual-18.png'

const SideBar = ({onClose, isOpen, LinkItems}) => {
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="full" isFullHeight>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader  bgColor="brand.vermelho">
          <Flex justify="space-between" align="center">
            <Link href="/">
              <Image maxH="120px" src={Elem18.src} alt="3ª Mostra de Cinema Latino-Americano de Rio Grande"/>
            </Link>
            <Icon as={CgClose} boxSize="40px" color="brand.amarelo" onClick={onClose} />
          </Flex>
        </DrawerHeader>
        <DrawerBody px={3}>
          <Flex flex={1} justify="space-between">
            <Stack spacing="10" w="calc(100vw - 50px)" ps={7}>
              <Flex align="center" justify="center">
                <Button variant="outline" color="brand.vermelho" borderWidth={3} borderColor="brand.vermelho" fontSize="30px" px="2px" py={0} opacity={.25} width="fit-content" disabled>NO AR</Button>
              </Flex>
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