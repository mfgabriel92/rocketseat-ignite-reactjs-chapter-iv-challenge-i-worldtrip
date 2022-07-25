import { Center, Heading, Text, VStack } from "@chakra-ui/react";

function Custom404() {
  return (
    <Center>
      <VStack>
        <Heading fontSize="8rem" marginTop="5rem">
          Not found
        </Heading>
        <Text fontSize="2rem">The continent you searched for has not yet been formed.</Text>
      </VStack>
    </Center>
  );
}

export default Custom404;
