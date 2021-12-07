import { Text, Box, Flex, Image, Stack } from '@chakra-ui/react';

const BlockContent = ({title, block, setCurrentMovie, onOpen, wrap}) => {
  return (
    <Stack align="center">
      <Text className="movies-title" color="brand.vermelho" ms={3} mb={3} alignSelf="flex-start">
        {title}
      </Text>
      <Stack direction={{base: "column", md:"row"}} spacing={5} align="center" wrap={wrap ? 'wrap' : 'nowrap'}>
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
            maxH={{base: "200px", md: "350px"}}
            objectFit="contain"
            
          >
            <Image objectFit="contain" maxH={{base: "200px", md: "350px"}} src={movie.img} alt="" />
          </Flex>
        ))}
      </Stack>
    </Stack>
  )
};

export default BlockContent;