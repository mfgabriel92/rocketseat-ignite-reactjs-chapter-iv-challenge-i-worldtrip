import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { City } from "../components/pages/Continent/City";
import { Info } from "../components/pages/Continent/Info";

interface ContinentProps {
  continent: {
    id: string;
    image: string;
    name: string;
    info: string;
    numberOfCountries: string;
    numberOfLanguages: string;
    numberOfCities: string;
    citiesPlus100: {
      name: string;
      image: string;
      country: string;
      code: string;
    }[];
  };
}

function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Flex
        height={["350px", "350px", "400px", "500px"]}
        backgroundImage={`url(/${continent.image})`}
        backgroundSize="cover"
      >
        <Flex flex="1" maxWidth="1192px" paddingBottom="3.6875rem" marginX="auto">
          <Heading
            fontSize={["1.5rem", "2rem", "2.5rem", "3rem"]}
            color="gray.100"
            fontWeight="bold"
            marginTop="auto"
            textTransform="capitalize"
            backgroundColor="rgba(0, 0, 0, 0.7)"
            borderRadius="lg"
            padding={["1rem", "1rem", "2.5rem", "3rem"]}
            marginLeft="2rem"
          >
            {continent?.name}
          </Heading>
        </Flex>
      </Flex>
      <Info continent={continent} />
      <Box flex="1" maxWidth="1192px" marginX="auto" paddingX="2rem">
        <Text fontSize="2.25rem" color="gray.500" fontWeight="medium">
          Cities +100
        </Text>
        <SimpleGrid
          gap="2.8125rem"
          marginTop="2.25rem"
          marginBottom="2.1875rem"
          columns={[1, 1, 2, 3, 4]}
        >
          {continent?.citiesPlus100?.map((city) => (
            <City key={city.name} city={city} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/continents/${params?.continent}`,
    );

    return {
      props: {
        continent: data,
      },
    };
  } catch (error) {
    return {
      props: {},
      notFound: true,
    };
  }
};

export default Continent;
