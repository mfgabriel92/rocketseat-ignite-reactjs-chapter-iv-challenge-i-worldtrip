import { Box, Text } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";

function Slider() {
  return (
    <>
      <Box
        width="98px"
        height="2px"
        backgroundColor="gray.500"
        marginTop="6.125rem"
        marginBottom="3.25rem"
        marginX="auto"
      />
      <Text color="gray.500" textAlign="center" textStyle="title">
        Ready? <br /> Then choose your continent
      </Text>
      <Box flex="1" marginTop="3.25rem" marginBottom="2.5rem" maxWidth="1192px" marginX="auto">
        <Swiper navigation pagination slidesPerView={1} modules={[Navigation, Pagination]}>
          <SwiperSlide>
            <Slide image="europe" title="Europe" text="The oldest continent" />
          </SwiperSlide>
          <SwiperSlide>
            <Slide image="africa" title="Africa" text="The largest continent" />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              image="south-america"
              title="South America"
              text="Brazil doesn't speak Spanish, FYI"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide image="asia" title="Asia" text="Rich culture" />
          </SwiperSlide>
          <SwiperSlide>
            <Slide image="oceania" title="Oceania" text="Thousands of islands" />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}

export { Slider };
