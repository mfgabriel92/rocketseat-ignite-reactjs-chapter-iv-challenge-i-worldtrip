import { SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Beach from "./Beach";
import Classic from "./Classic";
import Cocktail from "./Cocktail";
import Modern from "./Modern";
import More from "./More";

function Features() {
  return (
    <SimpleGrid
      paddingX="2rem"
      maxWidth="1192px"
      marginX="auto"
      marginTop="7.125rem"
      columns={[1, 2, 3, 5]}
      gap="2rem"
      textAlign="center"
    >
      <VStack spacing="1.75rem">
        <Cocktail />
        <Text fontSize="1.5rem" color="gray.500" fontWeight="semibold">
          nocturnal life
        </Text>
      </VStack>
      <VStack spacing="1.75rem">
        <Beach />
        <Text fontSize="1.5rem" color="gray.500" fontWeight="semibold">
          beach
        </Text>
      </VStack>
      <VStack spacing="1.75rem">
        <Modern />
        <Text fontSize="1.5rem" color="gray.500" fontWeight="semibold">
          modern
        </Text>
      </VStack>
      <VStack spacing="1.75rem">
        <Classic />
        <Text fontSize="1.5rem" color="gray.500" fontWeight="semibold">
          classic
        </Text>
      </VStack>
      <VStack spacing="1.75rem">
        <More />
        <Text fontSize="1.5rem" color="gray.500" fontWeight="semibold">
          and more...
        </Text>
      </VStack>
    </SimpleGrid>
  );
}

export { Features };
