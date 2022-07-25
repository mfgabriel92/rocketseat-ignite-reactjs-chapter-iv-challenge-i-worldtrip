import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    yellow: {
      500: "#FFBA08",
    },
    gray: {
      100: "#F5F8FA",
      200: "#DADADA",
      300: "#999999",
      500: "#47585B",
    },
    black: "#000000",
    white: "#FFFFFF",
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
      },
    },
  },
  fonts: {
    heading: "'Poppins'",
    body: "'Poppins'",
  },
  textStyles: {
    title: {
      fontSize: "2.25rem",
      fontWeight: "medium",
      lineHeight: "54px",
    },
  },
});

export default theme;
