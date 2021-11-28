import { 
  Flex, 
  Image, 
  Link, 
  Stack,
  Text,
  MenuButton,
  MenuList, 
  MenuItem
} from '@chakra-ui/react';
import Elem31 from '/public/identidade_visual/elementos identidade visual-31.png'
import Elem27 from '/public/identidade_visual/elementos identidade visual-27.png'

const NavBar = ({ item }) => {
  return (
    <Stack key={item.label}>
      <MenuButton>
        <Flex align="center">
            <Image src={Elem27.src} h="35px" pe={2} alt="" />
            {item.children && 
              <Text color="white" fontSize="25px" fontWeight="bold" textTransform="uppercase">
                {item.label}
              </Text>
            }
        </Flex>
      </MenuButton>
      <MenuList>
        {item.children && 
          <Stack spacing="1">
            {item.children.map(({isDisabled, label, href}) => (
              <MenuItem key={href} isDisabled={isDisabled || false} color="brand.amarelo" fontSize="18px" fontWeight="bold" textTransform="uppercase">
                {isDisabled && label }
                {!isDisabled && 
                  <Link href={href} >{label}</Link>
                }
              </MenuItem>
            ))}
          </Stack>
        }
      </MenuList>
    </Stack>
  );
};

export default NavBar;
