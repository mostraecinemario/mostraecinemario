import Head from 'next/head'
import { Image, Text, Flex, Stack, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

import { programacao } from '../../utils/programação';

const MostraPrincipal = () => {

  const filteredTabs = programacao.map(item => item.shorTtitle)

  return(
    <>
      <Stack w="100%" py={10}>
        <Head>
          <title>Programação | Mostra de Cinema Latino-Americano de Rio Grande...</title>
        </Head>
        <Flex justify={'center'}>
          <Tabs variant='unstyled' flex={.7} justifyContent='center'>
            <TabList gap={20}>
                {filteredTabs.map(item => (
                  <Tab _selected={{ color: 'white', bg: 'brand.vermelho' }} _focus={{}} fontWeight={600} key={`${item.date - item.weekDay}`}>
                    <Stack >
                      <Text>{item.weekDay}</Text>
                      <Text>{item.date}</Text>
                    </Stack>
                  </Tab>
                ))}
            </TabList>

            <TabPanels display={'flex'} justifyContent='center'>
              {programacao.map(item => (
                <TabPanel key={`${item.title.day - item.title.date}`}>
                  <Stack>
                    <Flex alignItems={'center'} >
                      <Text fontSize={'6xl'} me={10} color='brand.vermelho'>{item.title.day}</Text>
                      <Text fontSize={'2xl'} fontWeight='bold' color='brand.amarelo'>{item.title.date}</Text>
                    </Flex>
                    <Stack spacing={10}>
                      {item.activities.map(activity => (
                        <Stack key={activity.title}>
                          <Text fontSize='md' color='brand.amarelo'>{activity.hour}</Text>
                          <Text fontSize='2xl' fontWeight='bold' color='brand.vermelho'>{activity.title}</Text>
                          {activity.description.map(desc => (
                            <Text key={desc} fontSize='lg'>{desc}</Text>
                          ))}
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
    </>
  )
}

export default MostraPrincipal;
