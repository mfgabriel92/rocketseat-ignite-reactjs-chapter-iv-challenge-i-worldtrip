import { Box, Flex, Text } from "@chakra-ui/react";
import Flag from "react-world-flags";

interface CityProps {
  city: {
    image: string;
    name: string;
    country: string;
    code: string;
  };
}

function City({ city }: CityProps) {
  return (
    <Box
      height="279px"
      backgroundColor="white"
      borderWidth="1px"
      borderColor="yellow.500"
      borderRadius="8px"
    >
      <Box backgroundImage={`url(/${city.image})`} backgroundSize="cover" height="173px" />
      <Flex flex="1" padding="1.5rem" justifyContent="space-between" alignItems="center">
        <Flex textAlign="start" flexDirection="column" gap="0.875rem">
          <Text fontWeight="semibold" color="gray.500" fontSize="1.125rem">
            {city.name}
          </Text>
          <Text color="gray.300" fontSize="1rem">
            {city.country}
          </Text>
        </Flex>
        <Flag code={city.code} width="42px" />
      </Flex>
    </Box>
  );
}

export { City };
