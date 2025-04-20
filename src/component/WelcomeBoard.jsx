'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import TerrainIcon from '@mui/icons-material/Terrain';
import PublicIcon from '@mui/icons-material/Public';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const statsData = [
  { icon: <GroupsIcon sx={{ fontSize: 40, color: 'white' }} />, number: '7,000+', label: 'Registered Farmers' },
  { icon: <AgricultureIcon sx={{ fontSize: 40, color: 'white' }} />, number: '15,000+', label: 'Acres of land' },
  { icon: <TerrainIcon sx={{ fontSize: 40, color: 'white' }} />, number: '180+', label: 'Villages covered' },
  { icon: <PublicIcon sx={{ fontSize: 40, color: 'white' }} />, number: '15+', label: 'Countries served' },
  { icon: <EmojiPeopleIcon sx={{ fontSize: 40, color: 'white' }} />, number: '100+', label: 'Customers worldwide' },
  { icon: <EventAvailableIcon sx={{ fontSize: 40, color: 'white' }} />, number: '3+', label: 'Years in the industry' },
];

const StatsSection = () => {
  return (
    <Box
      sx={{
        py: 6,
        px: 2,
        textAlign: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant='h4'
        component='h2'
        sx={{
          mb: 4,
          fontWeight: 'bold',
          fontFamily: 'serif',
        }}
      >
        Welcome To TerraGlebe
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Box
          sx={{
            display: 'inline-block',
            width: '60px',
            borderTop: '3px solid #5ca545',
          }}
        />
      </Box>

      <Grid container spacing={4} justifyContent='center'>
        {statsData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: 2,
                  backgroundColor: '#5ca545',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </Box>

              <Typography
                variant='h5'
                sx={{
                  mt: 2,
                  color: '#5ca545',
                  fontWeight: 'bold',
                }}
              >
                {item.number}
              </Typography>

              <Typography
                variant='subtitle1'
                sx={{
                  mt: 1,
                  color: '#000',
                  fontWeight: '600',
                }}
              >
                {item.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsSection;
