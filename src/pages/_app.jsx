import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import Header from "../components/Header";
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
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
