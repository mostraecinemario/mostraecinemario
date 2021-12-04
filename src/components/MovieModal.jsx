import { Text, Box, Flex, Image, Stack, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton, } from '@chakra-ui/react';


const MovieModal = ({movie, isOpen, onClose}) => {
  return (
    <Modal size="xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="75%">
        <ModalHeader>{movie.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody p={6}>
          <Stack direction={{base:"column", md: "row"}} spacing={3}>
            <Image src={movie.img} alt={movie.title} maxH="300px" objectFit="contain" />
            <Stack>
              <Text>Titulo: {movie.title}</Text>
              <Text>Ano: {movie.year}</Text>
              <Text>Direção: {movie.direction}</Text>
              <Text>Local: {movie.place}</Text>
              <Text>Sinopse: {movie.synopsis}</Text>
            </Stack>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MovieModal;
