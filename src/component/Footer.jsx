import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import Image from 'next/image';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(/assets/FooterBackground.webp)', // your background image path here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '40px 20px',
        color: 'black',
        width: '100%',
      }}
    >
      <Grid container spacing={4}>
        {/* Column 1: Logo */}
        <Grid size={{ xs: 6, md: 4, lg: 3 }}>
          <Image src='/assets/MainLogo.webp' alt='Logo' width={150} height={50} />
        </Grid>

        {/* Column 2: Links or Info */}
        <Grid size={{ xs: 6, md: 4, lg: 3 }}>
          <Typography variant='h6' sx={{ marginBottom: '10px' }}>
            Quick Links
          </Typography>
          <List>
            <ListItem sx={{ padding: 0, marginBottom: '6px' }}>Home</ListItem>
            <ListItem sx={{ padding: 0, marginBottom: '6px' }}>About Us</ListItem>
            <ListItem sx={{ padding: 0, marginBottom: '6px' }}>Services</ListItem>
            <ListItem sx={{ padding: 0 }}>Contact</ListItem>
          </List>
        </Grid>

        {/* Column 3: More Info */}
        <Grid size={{ xs: 6, md: 4, lg: 3 }}>
          <Typography variant='h6' sx={{ marginBottom: '10px' }}>
            Resources
          </Typography>
          <List>
            <ListItem sx={{ padding: 0, marginBottom: '6px' }}>Blog</ListItem>
           
          </List>
        </Grid>

        {/* Column 4: Support / Contact */}
        <Grid size={{ xs: 6, md: 4, lg: 3 }}>
          <Typography variant='h6' sx={{ marginBottom: '10px' }}>
            Support
          </Typography>
          <List>
            <ListItem sx={{ padding: 0, marginBottom: '6px' }}>Help Center</ListItem>
           
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
