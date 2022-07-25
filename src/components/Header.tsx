import { Box, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Back from "./Back";
import Logo from "./Logo";

function Header() {
  const { asPath } = useRouter();

  return (
    <Flex paddingY="1.6875rem" alignItems="center" maxWidth="1192px" margin="auto">
      {asPath !== "/" && (
        <Flex alignItems="flex-start" cursor="pointer">
          <Back />
        </Flex>
      )}
      <Box margin="auto">
        <Logo />
      </Box>
    </Flex>
  );
}

export default Header;
