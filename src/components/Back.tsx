import { Box } from "@chakra-ui/react";
import Link from "next/link";

function Back() {
  return (
    <Box cursor="pointer">
      <Link href="/">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 24L12 16L20 8"
            stroke="#47585B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </Box>
  );
}

export default Back;
