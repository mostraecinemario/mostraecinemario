import { Flex, Image, Link, Stack, Text, Box } from '@chakra-ui/react';
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
          {item.children.map(({isDisabled, label, href}) => (
            <>
              {isDisabled && 
                <Text key={href} color={color} fontSize="18px" fontWeight="bold" textTransform="uppercase" opacity={.5}>
                  {label}
                </Text>
              }

              {!isDisabled && 
                <Link key={href} href={href} color={color} fontSize="18px" fontWeight="bold" textTransform="uppercase">
                  {label}
                </Link>
              }
            </>
          ))}
        </Stack>
      }
    </Stack>
  );
};

export default NavLink;
