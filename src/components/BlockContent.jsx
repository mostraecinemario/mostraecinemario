import { Text, Box, Flex, Image, Stack } from '@chakra-ui/react';

const BlockContent = ({title, block, setCurrentMovie, onOpen, wrap}) => {
  return (
    <Stack align="center">
      <Text color="brand.vermelho" fontSize="30px" fontWeight="bold">
        {title}
      </Text>
      <Stack maxH={{md: "350px"}} direction={{base: "column", md:"row"}} spaing={5} align="center" wrap={wrap ? 'wrap' : 'nowrap'}>
        {block.map(movie => (
          <Flex
            key={movie.img}
            cursor="pointer"
            transition="all 1s" 
            onClick={(e) => {
              setCurrentMovie(movie);
              onOpen();
            }}
            _hover={{transform: 'scale(1.05)'}}
            maxH={{base: "200px", md:"100%"}}
          >
            <Image objectFit="contain" src={movie.img} alt="" />
          </Flex>
        ))}
      </Stack>
    </Stack>
  )
};

export default BlockContent;