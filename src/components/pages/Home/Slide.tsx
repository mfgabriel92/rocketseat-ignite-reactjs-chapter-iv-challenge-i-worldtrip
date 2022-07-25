import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

interface SlideProps {
  image: string;
  title: string;
  text: string;
}

function Slide({ image, title, text }: SlideProps) {
  return (
    <Flex
      flex="1"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      textAlign="center"
      backgroundImage={`url(/${image}.jpg)`}
      backgroundSize="cover"
      height="28.125rem"
    >
      <Link href={image}>
        <a>
          <Box
            backgroundColor="rgba(0, 0, 0, 0.7)"
            borderRadius="lg"
            padding={["1rem", "1rem", "3rem"]}
          >
            <Text as="h1" fontSize={["2rem", "2.5rem", "3rem"]} color="gray.100" fontWeight="bold">
              {title}
            </Text>
            <Text fontSize={["1rem", "1.25rem", "1.5rem"]} color="gray.100" fontWeight="bold">
              {text}
            </Text>
          </Box>
        </a>
      </Link>
    </Flex>
  );
}

export default Slide;
