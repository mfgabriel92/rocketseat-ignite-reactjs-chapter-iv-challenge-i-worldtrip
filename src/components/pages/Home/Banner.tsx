import { Box, Flex, Image, Text } from "@chakra-ui/react";

function Banner() {
  return (
    <Box
      backgroundImage="url('/banner-bg.png')"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height="20.93rem"
      paddingX="2rem"
    >
      <Flex
        maxWidth="1192px"
        marginX="auto"
        alignItems="center"
        height="100%"
        justifyContent="space-between"
      >
        <Flex
          flex="1"
          flexDirection="column"
          alignItems={["center", "center", "center", "flex-start"]}
          textAlign={["center", "center", "center", "start"]}
          color="gray.100"
        >
          <Text as="h1" textStyle="title">
            5 continents, infinite possibilities
          </Text>
          <Text fontSize="1.125rem" lineHeight="38px" marginTop="1.125rem">
            It is time to take off the drawing board the trip you have always dreamed about
          </Text>
        </Flex>
        <Image
          src="airplane.png"
          alt="Airplane"
          marginTop="100px"
          display={["none", "none", "none", "block"]}
        />
      </Flex>
    </Box>
  );
}

export { Banner };
