import { Flex, Link, Stack, Text, Box } from '@chakra-ui/react';

const NavLink = ({ item, subMenu=false, color }) => {
  return (
    <Stack key={item.label}>
      <Flex align="center">
        {item.children ? 
          <Text color={color} fontSize="25px" fontWeight="bold" textTransform="uppercase">
            {item.label}
          </Text>
          : 
          <Link href={item.href} color={color} fontSize="25px" fontWeight="bold" textTransform="uppercase">
            {item.label}
          </Link>
        }
      </Flex>
      {subMenu && item.children && 
        <Stack spacing="1" ps={16}>
          {item.children.map(({label, href}) => (
            <Link key={href} href={href} color={color} fontSize="18px" fontWeight="bold" textTransform="uppercase">
              {label}
            </Link>
          ))}
        </Stack>
      }
    </Stack>
  );
};

export default NavLink;
