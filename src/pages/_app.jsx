import { ChakraProvider, extendTheme, Flex, Box } from "@chakra-ui/react"
import Header from "../components/Header";
import SocialBar from '../components/SocialBar';
import Footer from "../components/Footer";
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

      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
