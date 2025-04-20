'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const pages = ['Homepage', 'About Us', 'Blog'];
const aboutItems = ['Our Team', 'Our Story', 'Careers'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElAbout, setAnchorElAbout] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleAboutOpen = (event) => {
    setAnchorElAbout(event.currentTarget);
  };

  const handleAboutClose = () => {
    setAnchorElAbout(null);
  };

  return (
    <AppBar
      position='fixed'
      elevation={0}
      sx={{
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.47)',
        color: 'var(--grey)',
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* LOGO IMAGE */}
          <Link href='/' passHref>
            <Box component='a' sx={{ display: 'flex', alignItems: 'center' }}>
              <Image src='/assets/MainLogo.webp' alt='Logo' width={120} height={60} priority />
            </Box>
          </Link>

          {/* Center Nav Items for Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, justifyContent: 'center', flexGrow: 1 }}>
            {pages.map((page) => {
              if (page === 'About Us') {
                return (
                  <Box key={page}>
                    <Button
                      onClick={handleAboutOpen}
                      sx={{
                        my: 2,
                        color: 'var(--grey)',
                        display: 'flex',
                        alignItems: 'center',
                        fontWeight: 500,
                      }}
                    >
                      {page}
                      <ArrowDropDownIcon />
                    </Button>
                    <Menu
                      anchorEl={anchorElAbout}
                      open={Boolean(anchorElAbout)}
                      onClose={handleAboutClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                    >
                      {aboutItems.map((item) => (
                        <MenuItem key={item} onClick={handleAboutClose}>
                          <Link href='/' passHref>
                            <Typography textAlign='center' sx={{ color: 'var(--grey)', textDecoration: 'none' }}>
                              {item}
                            </Typography>
                          </Link>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                );
              } else {
                return (
                  <Link key={page} href='/' passHref>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: 'var(--grey)',
                        display: 'block',
                        fontWeight: 500,
                      }}
                    >
                      {page}
                    </Button>
                  </Link>
                );
              }
            })}
          </Box>

          {/* Hamburger Menu for Mobile */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='open navigation menu'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              {/* You can place a menu icon here, like <MenuIcon /> */}
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center' sx={{ color: 'var(--grey)' }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
