import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Grid from '@mui/material/Grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const FPOSection = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography
        variant='h4'
        align='center'
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#6B8E23', position: 'relative' }}
      >
        FPO
      </Typography>

      {/* Row 1: Image Left, Text Right */}
      <Grid container spacing={4} alignItems='center' sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <Box
            component='img'
            src='/assets/SliderImage01.JPG'
            alt='FPO'
            sx={{
              width: '100%',
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <Typography variant='h5' sx={{ fontWeight: 600 }} gutterBottom>
            Farmer Producer Organization
          </Typography>
          <Typography variant='body1' sx={{ lineHeight: 1.8 }}>
            A Farmer Producer Organization (FPO) is{' '}
            <span style={{ color: 'red', fontWeight: 500 }}>a group of farmers who produce agricultural products.</span>{' '}
            The Small Farmers’ Agribusiness Consortium (SFAC) is responsible for supporting state governments in the
            formation of FPOs. The Government of India also launched a scheme in 2020 to promote and form 10,000 FPOs.
          </Typography>
        </Grid>
      </Grid>

      {/* Row 2: Text Left, Image Right */}
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
            src='/assets/SliderImage02.JPG' // Replace with your second image
            alt='Farmers Group'
            sx={{
              width: '100%',
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FPOSection;
