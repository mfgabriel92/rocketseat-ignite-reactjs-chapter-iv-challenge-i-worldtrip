import { Flex, Text, VStack } from "@chakra-ui/react";

interface InfoProps {
  continent: {
    info: string;
    numberOfCountries: string;
    numberOfLanguages: string;
    numberOfCities: string;
  };
}

function Info({ continent }: InfoProps) {
  return (
    <Flex
      justifyContent="space-between"
      flexDirection={["column", "column", "column", "row"]}
      paddingX="2rem"
      maxWidth="1192px"
      margin="5rem auto"
      gap="4.375rem"
      alignItems="center"
    >
      <Text
        flex="1"
        color="gray.500"
        lineHeight={["26px", "31px", "36px"]}
        fontSize={["1.25rem", "1.25rem", "1.5rem"]}
        textAlign="justify"
      >
        {continent?.info}
      </Text>
      <Flex justifyContent="space-between" gap="2.625rem">
        <VStack spacing="1.5rem">
          <Text
            color="yellow.500"
            fontSize={["2rem", "2.25rem", "3rem"]}
            fontWeight="semibold"
            lineHeight="0"
          >
            {continent?.numberOfCountries}
          </Text>
          <Text color="gray.500" fontSize={["1rem", "1.25rem", "1.5rem"]} fontWeight="semibold">
            countries
          </Text>
        </VStack>
        <VStack spacing="1.5rem">
          <Text
            color="yellow.500"
            fontSize={["2rem", "2.25rem", "3rem"]}
            fontWeight="semibold"
            lineHeight="0"
          >
            {continent?.numberOfLanguages}
          </Text>
          <Text color="gray.500" fontSize={["1rem", "1.25rem", "1.5rem"]} fontWeight="semibold">
            languages
          </Text>
        </VStack>
        <VStack spacing="1.5rem">
          <Text
            color="yellow.500"
            fontSize={["2rem", "2.25rem", "3rem"]}
            fontWeight="semibold"
            lineHeight="0"
          >
            {continent?.numberOfCities}
          </Text>
          <Text color="gray.500" fontSize={["1rem", "1.25rem", "1.5rem"]} fontWeight="semibold">
            cities +100
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
}

export { Info };
