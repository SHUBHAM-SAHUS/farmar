import React from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import Grid from '@mui/material/Grid';

const PillarsSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('/assets/ourPillarBackground.webp')`, //
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        py: 8,
        px: 2,
      }}
    >
      <Typography
        variant='h4'
        align='center'
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: '#fff',
          mb: 5,
          '&::after': {
            content: '""',
            display: 'block',
            width: '60px',
            height: '3px',
            backgroundColor: '#6B8E23',
            margin: '8px auto 0',
          },
        }}
      >
        Our Pillars
      </Typography>

      <Grid container spacing={4}>
        {[
          {
            title: 'Farmers Support',
            desc: 'Farmer support includes resources, training, and assistance to boost productivity and sustainability, offering financial aid, technology, expert advice, and market guidance.',
            icon: '/assets/ourPillar01.webp',
          },
          {
            title: 'Farm-to-fork traceability',
            desc: 'Our farmers see what happens with their produce after it leaves their farm, and our consumers see details about their food, their farmer, and what happens with the money they pay.',
            icon: '/assets/ourPillar02.webp',
          },
          {
            title: 'IPM Farming',
            desc: 'Residue-free products and practices tackle soil, pest, disease, and nutrition issues sustainably, boosting crop productivity and quality without harmful chemicals. This is called integrated pest management.',
            icon: '/assets/ourPillar03.webp',
          },
          {
            title: 'Infrastructure',
            desc: 'Infrastructure support for farmers includes developing essential facilities like irrigation systems, storage units, and transportation networks to improve productivity and efficiency.',
            icon: '/assets/ourPillar04.webp',
          },
        ].map((item, index) => (
          <Grid size={{ xs: 12, md: 4, lg: 3 }} key={index}>
            <Card
              sx={{
                height: '100%',
                borderRadius: 3,
                boxShadow: 3,
                textAlign: 'center',
                p: 2,
              }}
            >
              <CardContent>
                <Box
                  component='img'
                  src={item.icon}
                  alt={item.title}
                  sx={{
                    width: '40px',
                    height: '40px',
                    mb: 2,
                    objectFit: 'contain',
                    display: 'inline-block',
                  }}
                />

                <Typography variant='h6' gutterBottom sx={{ fontWeight: 'bold' }}>
                  {item.title}
                </Typography>
                <Typography variant='body2' sx={{ mb: 3 }}>
                  {item.desc}
                </Typography>

                <Button
                  variant='contained'
                  sx={{
                    backgroundColor: '#6B8E23',
                    textTransform: 'none',
                    borderRadius: 1,
                    '&:hover': { backgroundColor: '#557a1f' },
                  }}
                >
                  Read more
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PillarsSection;
