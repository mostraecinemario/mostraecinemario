import { LinkBox, LinkOverlay, Image, Text, Stack } from '@chakra-ui/react';

const Card = ({img, children, href}) => {
  return (
    <LinkBox
      px={3}
      py={5}
      boxShadow='lg' 
      border="1px solid #ddd" 
      borderRadius="5px" 
      transition="all 1s" 
      _hover={{transform: 'scale(1.05)'}}
    >
      <LinkOverlay  href={href}>
        <Stack align="center" maxW="400px" spacing={5}>
          <Image maxW="100%" objectFit="contain" src={img} alt='' />
          <Text px={2} className="justify">
            {children}
          </Text>
        </Stack>
      </LinkOverlay>
    </LinkBox>
  );
}

export default Card;
