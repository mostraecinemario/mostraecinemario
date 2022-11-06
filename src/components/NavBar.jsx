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
import Elem20 from '/public/identidade_visual/elementos identidade visual-20.png'

const NavBar = ({ item }) => {
  return (
    <Stack key={item.label}>
      <MenuButton>
        <Flex align="center">
            <Image src={Elem20.src} h="25px" pe={2} alt="" />
            {item.children && 
              <Text color="brand.vermelho" fontSize="20px" fontWeight="bold" textTransform="uppercase">
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
