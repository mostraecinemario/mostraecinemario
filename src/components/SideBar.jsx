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
  Stack
} from '@chakra-ui/react';
import { CgClose } from 'react-icons/cg';

import NavLink from './NavLink';

import Elem15 from '/public/identidade_visual/elementos identidade visual-15.png'

import socialMedias from '/src/utils/socialMedias';


const SideBar = ({onClose, isOpen, LinkItems}) => {
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="full" isFullHeight>
      <DrawerOverlay />
      <DrawerContent bgColor="brand.amarelo">
        <DrawerHeader>
          <Flex justify="space-between" align="center">
            <Image maxH="120px" src={Elem15.src} alt="3ª Mostra de Cinema Latino-Americano de Rio Grande"/>
            <Icon as={CgClose} boxSize="40px" color="brand.vermelho" onClick={onClose} />
          </Flex>
        </DrawerHeader>
        <DrawerBody px={10}>
          <Stack spacing="10">
          {
            Object.values(LinkItems).map((item) => {
              return (
                <NavLink key={item.label} item={item} color="brand.azul" subMenu />
              )
            })
          }
          </Stack>
        </DrawerBody>
        <DrawerFooter bgColor="white" px={3} py={5}>
          <Flex justify="space-evenly" w="100%"> 
            {socialMedias.map(({icon, link}) => (
              <Circle key={link} p="2" bgColor="brand.vermelho"> 
                <Link 
                  lineHeight="0"
                  href={link}
                  target="_blank" 
                >
                  <Icon as={icon} boxSize="25px" color="white" />
                </Link>
              </Circle>
            ))} 
          </Flex>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default SideBar;