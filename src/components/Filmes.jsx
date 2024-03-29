import { Heading, Text, Flex, Stack, Card, CardBody, Image, AspectRatio} from '@chakra-ui/react';
import { filmes } from '../utils/filmes';

const Filmes = () => {
  return (
    <Stack justify={'center'} w={{base:'100%', md: '70%', lg: '50%', xl: '75%', '2xl': '60%'}} spacing={10}>
      {filmes.map(filme => (
          <Flex direction={'column'} mt={6} key={filme.title}>
          <Flex alignItems={'center'} >
            <Text fontSize={'6xl'} me={10} color='brand.vermelho'>{filme.day}</Text>
            <Text fontSize={'2xl'} fontWeight='bold' color='brand.amarelo'>{filme.date}</Text>
          </Flex>
          <Heading fontSize={'2xl'} mt={2}>{filme.title}</Heading>
          {filme.description ? 
            <Text fontSize='large' className='justify'>{filme.description}</Text>
            : undefined
          }
          <Stack spacing={5}>
            <Card direction={{base: 'column', xl: 'row'}} mt={7} overflow='hidden' variant='outline' h={{base: "auto", xl: '315px'}}>
              <Image
                objectFit='cover'
                src={filme.curta.image}
                alt={`longa - ${filme.curta.name}`}
                style={{
                  aspectRatio: 1 / 1
                }}
              />
              <Stack>
                <CardBody>
                <Text fontSize='md' className='justify'>{filme.curta.min}</Text>
                  <Heading as={'span'} fontWeight='bold' fontSize={'2xl'}>{filme.curta.name}</Heading>
                  <Text fontSize='larger' className='justify'>dirigido por {filme.curta.direcao}</Text>
                  <Text py='2' className='justify'>
                    {filme.curta.sinopse}
                  </Text>
                </CardBody>
              </Stack>
            </Card>
            <Card direction={{base: 'column', xl: 'row'}} mt={7} overflow='hidden' variant='outline' h={{base: "auto", xl: '315px'}}>
              <Stack>
                <CardBody>
                  <Text fontSize='md' className='justify'>{filme.longa.min}</Text>
                  <Heading as={'span'} fontWeight='bold' fontSize={'2xl'}>{filme.longa.name}</Heading>
                  <Text fontSize='larger' className='justify'>dirigido por {filme.longa.direcao}</Text>
                  <Text py='2' className='justify'>
                    {filme.longa.sinopse}
                  </Text>
                </CardBody>
              </Stack>
              <Image
                objectFit='cover'
                src={filme.longa.image}
                alt={`longa - ${filme.longa.name}`}
                style={{
                  aspectRatio: 1 / 1
                }}
              />
            </Card>
          </Stack>
        </Flex>
      ))}
    </Stack>
  )
} 

export default Filmes;