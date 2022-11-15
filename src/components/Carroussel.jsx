import {Flex, Image, Icon} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'

const Carroussel = ({images}) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1)
  }
  const previousImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1)
  }

  useEffect(() => {
    const timer = setInterval(() => nextImage(), 10000)
    return () => clearInterval(timer);
  }, [currentImage]);
  
  return (
    <Flex flex={1} alignItems='center'>
      <Icon as={IoIosArrowDropleftCircle} onClick={nextImage} cursor='pointer' position='absolute' left={10} fontSize={45} color='brand.vermelho' />
      <Image src={images[currentImage]} w='100%' maxH={600} objectFit='cover' alt='Imagem de mostras passadas' />
      <Icon as={IoIosArrowDroprightCircle} onClick={previousImage} cursor='pointer' position='absolute' right={16} fontSize={45} color='brand.vermelho' />
    </Flex>
  )
} 

export default Carroussel;
