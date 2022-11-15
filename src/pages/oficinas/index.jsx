import Head from 'next/head'
import { Link, Heading, Text, Flex, Stack, Card, CardBody, Image } from '@chakra-ui/react';
import { oficinas } from '../../utils/oficinas';

const MostraPrincipal = () => {
  return(
    <>
      <Stack w="100%" p={6}>
        <Head>
          <title>Oficinas | Mostra de Cinema Latino-Americano de Rio Grande...</title>
        </Head>
        <Stack align="center">
          <Text fontWeight="bold" alignSelf={"start"} px="20%" fontSize="4xl" textTransform="uppercase" mb={10}>Oficinas</Text>
          <Stack justify={'center'} w={{base:'100%', md: '60%'}} spacing={10}>
            {oficinas.map(oficina => (
              <Flex direction={'column'} mt={6} key={oficina.title}>
                {oficina.firstTitle.map(title => (
                  <Text fontSize={'lg'} mt={0} fontWeight={600} key={title}>{title}</Text>
                ))}
                <Heading mt={2}>{oficina.title}</Heading>
                <Text mt={3} fontSize='large' className='justify'>{oficina.description}</Text>
                <Link href={oficina.formUrl} target="_blank" _hover={{}} bg="brand.vermelho" p={4} my={3} borderRadius={6} fontWeight="bold" color="white" w="fit-content">
                  Inscreva-se!
                </Link>
                
                <Card direction={{base: 'column', md: 'row'}} mt={7}  overflow='hidden' variant='outline'>
                  <Image
                    objectFit='cover'
                    maxW={{md:'230px'}}
                    src={oficina.ministrante.image}
                    alt={`ministrante - ${oficina.ministrante.nome}`}
                  />
                  <Stack>
                    <CardBody>
                      <Text py='2' className='justify'>
                        <Text as={'span'} fontWeight='bold'>{oficina.ministrante.name}{' '}</Text>
                        {oficina.ministrante.bio}
                      </Text>
                    </CardBody>
                  </Stack>
                </Card>
              </Flex>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

export default MostraPrincipal;
