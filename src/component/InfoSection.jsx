import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Grid from '@mui/material/Grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const FPOSection = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, mt: 8, mb: 8 }}>
      <Typography
        variant='h4'
        align='center'
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: '#2c3e50',
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
        About Us
      </Typography>

      <Grid container spacing={4} alignItems='center' sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <Box
            component='img'
            src='/assets/SliderImage01.JPG'
            alt='FPO'
            sx={{
              width: '100%',
              height: { xs: '200px', sm: '250px', md: '300px' },
              borderRadius: 2,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
              objectFit: 'cover',
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <Typography variant='h5' sx={{ fontWeight: 600 }} gutterBottom>
            Farmer Producer Organization
          </Typography>
          <Typography variant='body1' sx={{ lineHeight: 1.8 }}>
            A Farmer Producer Organization (FPO) is{' '}
            <span style={{ color: 'green', fontWeight: 500 }}>
              a group of farmers who produce agricultural products.
            </span>{' '}
            The Small Farmers’ Agribusiness Consortium (SFAC) is responsible for supporting state governments in the
            formation of FPOs. The Government of India also launched a scheme in 2020 to promote and form 10,000 FPOs.
            The Small Farmers’ Agribusiness Consortium (SFAC) is responsible for supporting state governments in the
            formation of FPOs. The Government of India also launched a scheme in 2020 to promote and form 10,000 FPOs.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4} alignItems='center'>
        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color='success' />
              </ListItemIcon>
              <ListItemText primary='Spread Awareness in Residue Free farming (IPM)' />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color='success' />
              </ListItemIcon>
              <ListItemText primary='Enhancement in income of the Small Scale Farmers' />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color='success' />
              </ListItemIcon>
              <ListItemText primary='To Make Brand of the Farmers Base Company.' />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color='success' />
              </ListItemIcon>
              <ListItemText primary='Export and Domestic Supply by Farmer Directly.' />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color='success' />
              </ListItemIcon>
              <ListItemText primary='To Make Brand of the Farmers Base Company.' />
            </ListItem>
          </List>
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <Box
            component='img'
            src='/assets/SliderImage02.JPG'
            alt='Farmers Group'
            sx={{
              width: '100%',
              height: { xs: '200px', sm: '250px', md: '300px' },
              borderRadius: 2,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
              objectFit: 'cover',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FPOSection;
