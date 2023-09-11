import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Text, Center } from '@chakra-ui/react'; 
import Slider from 'react-slick';

// Create an array of testimonials
const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    company: 'LinkedIn Company 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam sed magna vehicula scelerisque.',
  },
  // Add more testimonials as needed
];

const TestimonialCarousel2 = () => {
  const settings = {
    dots: true,
    infinite: true, 
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box py={6}>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <Center>
              <Box maxW="lg" p={4}>
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                  {testimonial.name}
                </Text>
                <Text fontSize="sm" fontStyle="italic" mb={2}>
                  {testimonial.company}
                </Text>
                <Text fontSize="md">{testimonial.text}</Text>
              </Box>
            </Center>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default TestimonialCarousel2;
