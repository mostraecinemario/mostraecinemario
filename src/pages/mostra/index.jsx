import Head from 'next/head'
import { 
  Flex, 
  Stack, 
  Text, 
  Avatar, 
  Button, 
  useDisclosure, 
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  AspectRatio
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { IoExitOutline } from 'react-icons/io5';
import { getSession, signOut, useSession } from 'next-auth/react';
import { useState } from 'react';

import CinemasInsurgentes from "/public/cine_insurgentes.png"
import CurtasLatinos from "/public/curtas_latinos.png"

import BlockContent from '../../components/BlockContent';
import Blocos from '/src/utils/blocos.js';

const Mostra = ({user}) => {
  const [currentMovie, setCurrentMovie] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Head>
        <title>Curtas Latino-americano | Mostra de Cinema Latino-Americano de Rio Grande...</title>
      </Head>
      <Stack flex={1} mb={10}>
        <Flex flex={1} justify="flex-end" me={20}>
          <Menu>
            <MenuButton as={Button} variant="outline" borderWidth="2px" py={6}>
              <Flex align="center" p={3}>
                {user.name}
                <Avatar ms={1} size='sm' name={user.name} src={user.image} />
                <Icon ps={1} as={BsChevronDown} />
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Button w="100%" onClick={() => signOut()}>
                  <Flex w="100%" align="center" justify="space-around">
                    Sign Out

                    <Icon ps={1} as={IoExitOutline} boxSize="25px" />
                  </Flex>
                </Button>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        <Stack align="flex-start" px={3} spacing={10} flex={1}>
          <Image src={CurtasLatinos.src} alt="mostra de curtas latino-americanos" maxH="150px" objectFit="contain" />
          <Stack>
            <BlockContent 
              title="bloco 3"
              block={Blocos.curtasLatinoAmericanos.bloco3}
              setCurrentMovie={setCurrentMovie}
              onOpen={onOpen}
            />
          </Stack>
        </Stack>

      </Stack>

      <Modal isOpen={isOpen} onClose={onClose} size="full" scrollBehavior="outside" maxH="100vh">
        <ModalOverlay />
        <ModalContent maxH="100vh">
          <ModalHeader>{currentMovie.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody maxH="calc(100vh - 70px)">
            <AspectRatio maxH="calc(100vh - 100px)" pb={6}>
              <iframe 
                src={currentMovie.url}
                title={currentMovie.title}
                allowFullScreen
              />
            </AspectRatio>
          </ModalBody>
        </ModalContent>
      </Modal>

    </>
  );
}

export default Mostra;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/curtas-latino-americanos',
        permanent: false,
      },
    }
  }

  return {
    props: {
      user: session.user,
    }
  }
}
