import Head from 'next/head'
import { 
  Stack, 
  Heading
} from '@chakra-ui/react';

const Mostra = ({user}) => {
  return (
    <>
      <Head>
        <title>Curtas Latino-americano | Mostra de Cinema Latino-Americano de Rio Grande...</title>
      </Head>
      <Stack flex={1} mb={10}>
        <Heading>Encerrado!</Heading>
      </Stack>

    </>
  );
}

export default Mostra;

export const getServerSideProps = async (context) => {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
}
