import { Text, Box, Flex, Image, Stack } from '@chakra-ui/react';

import Flower from '/public/identidade_visual/elementos identidade visual-21.png';

const BlockContent = ({title, block, setCurrentMovie, onOpen, wrap= false}) => {
  return (
    <Stack align="center">
      <Text className="movies-title" color="brand.vermelho" ms={3} mb={3} alignSelf="flex-start">
        {title}
      </Text>
      <Stack direction={{base: "column", md:"row" }} align="center" justify="center" wrap={wrap ? 'wrap' : 'nowrap'} className="movies-block">
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
            flex={'20%'}
            justify="center"
          >
            <Image objectFit="contain" maxH={{base: "200px", md: "350px"}} src={movie.img} alt="" />
          </Flex>
        ))}
        {wrap && (
          <Flex
            maxH={{base: "200px", md: "350px"}}
            objectFit="contain"
            flex={'20%'}
            justify="center"
            display={{ base: 'none', md: 'flex' }}
          >
          <Image objectFit="contain" maxH={{base: "200px", md: "350px"}} src={Flower.src} alt="" />
        </Flex>
        )}
      </Stack>
    </Stack>
  )
};

export default BlockContent;