'use client';

import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const images = ['/assets/SliderImage01.JPG', '/assets/SliderImage02.JPG', '/assets/SliderImage03.JPG'];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setFade(false);
    }, 600);
  };

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
      setFade(false);
    }, 500);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden', borderRadius: 2 }}>
      <Box
        component='img'
        src={images[current]}
        alt={`slide-${current}`}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />

      {/* Dark fade overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          opacity: fade ? 0.7 : 0,
          transition: 'opacity 0.5s ease-in-out',
          pointerEvents: 'none',
        }}
      />

      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
        }}
      >
        <ArrowBackIos />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default Carousel;
