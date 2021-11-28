import {Stack, Circle, Link, Icon} from '@chakra-ui/react';
import socialMedias from '/src/utils/socialMedias';

const SocialBar = () => {
  return (
    <Stack position="fixed" right="7px" top="250px" zIndex={1}>
      {socialMedias.map(({icon, link}) => (
        <Circle key={link} p="8px" bgColor="brand.vermelho"> 
          <Link 
            lineHeight="0"
            href={link}
            target="_blank" 
          >
            <Icon as={icon} boxSize="25px" color="white" />
          </Link>
        </Circle>
      ))}
    </Stack>
  );
}

export default SocialBar;