import Head from 'next/head'
import NextLink from 'next/link'
import { Link, Button, Text, Flex, Stack, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { programacao } from '../../utils/programação';

const MostraPrincipal = () => {

  const filteredTabs = programacao.map(item => item.shorTtitle)

  return(
    <>
      <Stack w="100%" py={6}>
        <Head>
          <title>Programação | Mostra de Cinema Latino-Americano de Rio Grande...</title>
        </Head>
        <Stack align="center">
          <Text fontWeight="bold" alignSelf={"start"} px={{base: '5%', md: "20%"}} fontSize="4xl" textTransform="uppercase" mb={10}>Programação 2022 </Text>
          <Flex justify={'center'}>
            <Tabs variant='unstyled' flex={.7}>
              <TabList gap={{base: 6, md: 20}} justifyContent={{base: 'start' , md: 'center'}} flexWrap={{base: 'wrap', md: 'nowrap'}}>
                  {filteredTabs.map(item => (
                    <Tab _selected={{ color: 'white', bg: 'brand.vermelho' }} _focus={{}} fontWeight={600} key={item.weekDay}>
                      <Stack >
                        <Text>{item.weekDay}</Text>
                        <Text>{item.date}</Text>
                      </Stack>
                    </Tab>
                  ))}
              </TabList>

              <TabPanels display={'flex'} justifyContent='center'>
                {programacao.map(item => (
                  <TabPanel key={item.title.date}>
                    <Stack>
                      <Flex alignItems={'center'} >
                        <Text fontSize={'6xl'} me={10} color='brand.vermelho'>{item.title.day}</Text>
                        <Text fontSize={'2xl'} fontWeight='bold' color='brand.amarelo'>{item.title.date}</Text>
                      </Flex>
                      <Stack spacing={10}>
                        {item.activities.map(activity => (
                          <Stack spacing={4} key={activity.title}>
                            <Text fontSize='md'>{activity.hour}</Text>
                            <Text fontSize='2xl' fontWeight='bold'>{activity.title}</Text>
                            {activity.description.map(desc => (
                              <Text key={desc} fontSize='lg'>{desc}</Text>
                            ))}
                            {activity.link ?
                              (
                                <Link href={activity.link} target="_blank" _hover={{}} bg="brand.vermelho" p={4} borderRadius={6} fontWeight="bold" color="white" w="fit-content">
                                  Inscreva-se!
                                </Link>
                              )
                              : undefined
                            }
                          </Stack>
                        ))}
                      </Stack>
                    </Stack>
                  </TabPanel>
                ))}
              </TabPanels>
            </Tabs>
          </Flex>
        </Stack>
      </Stack>
    </>
  )
}

export default MostraPrincipal;
