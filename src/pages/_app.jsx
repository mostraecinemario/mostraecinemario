import { ChakraProvider, extendTheme,Flex } from "@chakra-ui/react"
import Header from "../components/Header";
import SocialBar from '../components/SocialBar';
import '../styles/globals.css'

const colors = {
  brand: {
    amarelo: '#f7941d',
    vermelho: '#b72025',
    azul: '#2e3192', 
    rosa: '#f06ba8'
  }
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Header />
      <Flex w="calc(100vw - 50px)" p={3}>
        <Component flex={1} {...pageProps} />
      </Flex>

      <SocialBar />
    </ChakraProvider>
  )
}

export default MyApp
