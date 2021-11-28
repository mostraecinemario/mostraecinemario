import { Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
import Elem31 from '/public/identidade_visual/elementos identidade visual-31.png'
import Elem27 from '/public/identidade_visual/elementos identidade visual-27.png'

const NavLink = ({ item, subMenu=false, color }) => {
  return (
    <Stack key={item.label}>
      <Flex align="center">
        <Image src={subMenu ? Elem31.src : Elem27.src } h="35px" pe={2} alt="" />
        {item.children && 
          <Text color={color} fontSize="25px" fontWeight="bold" textTransform="uppercase">
            {item.label}
          </Text>
        }
      </Flex>
      {subMenu && item.children && 
        <Stack spacing="1" ps={16}>
          {item.children.map(child => (
            <Link key={child.href} href={child.href} color={color} fontSize="18px" fontWeight="bold" textTransform="uppercase">{child.label}</Link>
          ))}
        </Stack>
      }
    </Stack>
  );
};

export default NavLink;
