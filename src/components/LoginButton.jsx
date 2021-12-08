import Router from 'next/router'
import { Button } from '@chakra-ui/react';
import { signIn, useSession } from "next-auth/react";

const LoginButton = ({...props}) => {
  const { data: session, status } = useSession();

  const handleClick = () => {
    if(session) {
      return Router.push('/mostra');
    }
    signIn();
  }

  return (
    <Button 
      isLoading={status === "loading"} 
      onClick={handleClick} 
      color="white" 
      bgColor="brand.vermelho" 
      size='lg' 
      me={20}
      transition="all 1s"
      _hover={{
        opacity: .85
      }}
      {...props}
    >
      Assistir já
    </Button>
  )
}

export default LoginButton;