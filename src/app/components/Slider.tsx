import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
  } from '@chakra-ui/react'



  export default function Testi() {
    return (


<Slider aria-label='slider-ex-4' defaultValue={30}>
  <SliderTrack bg='red.100'>
    <SliderFilledTrack bg='tomato' />
  </SliderTrack>
  <SliderThumb boxSize={6}>
    {/* <Box color='tomato' as={MdGraphicEq} /> */}
  </SliderThumb>
</Slider>
     
    );
  }
  