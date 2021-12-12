import { Button } from '@chakra-ui/react';

const LoginButton = ({...props}) => {

  return (
    <Button 
      color="white" 
      bgColor="brand.vermelho" 
      size='lg' 
      me={20}
      transition="all 1s"
      _hover={{
        opacity: .2
      }}
      disabled
      {...props}
    >
      Encerrado
    </Button>
  )
}

export default LoginButton;