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
      {item.children ? 
        <>
        <MenuButton>
          <Flex align="center">
            <Text color="brand.vermelho" fontSize="20px" fontWeight="bold" textTransform="uppercase">
              {item.label}
            </Text>
          </Flex>
        </MenuButton>
        <MenuList>
          {item.children && 
            <Stack spacing="1">
              {item.children.map(({label, href}) => (
                <MenuItem key={href} color="brand.amarelo" fontSize="18px" fontWeight="bold" textTransform="uppercase">
                  <Link href={href} >{label}</Link>
                </MenuItem>
              ))}
            </Stack>
          }
        </MenuList>
        </> 
        : 
        <Link href={item.href} _hover={{}} color="brand.vermelho" fontSize="20px" fontWeight="bold" textTransform="uppercase">{item.label}</Link>
      }
    </Stack>
  );
};

export default NavBar;
