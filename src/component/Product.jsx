import { Card, CardMedia, Typography, Box } from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';

const cardData = [
  {
    title: 'Card 1 Title',
    content: 'This is the content for card 1.',
    backgroundImage: '/assets/Product01.webp',
  },
  {
    title: 'Card 2 Title',
    content: 'This is the content for card 2.',
    backgroundImage: '/assets/Product02.webp',
  },
  {
    title: 'Card 3 Title',
    content: 'This is the content for card 3.',
    backgroundImage: '/assets/Product03.webp',
  },
  {
    title: 'Card 4 Title',
    content: 'This is the content for card 4.',
    backgroundImage: '/assets/Product04.webp',
  },
];

const CardComponent = () => {
  return (
    <Box sx={{ maxWidth: '1200px', width: '100%', margin: '50px auto' }}>
      <Typography
        variant='h4'
        component='h2'
        sx={{
          textAlign: 'center',
          marginBottom: '30px',
          fontWeight: 'bold',
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
        }}
      >
        Our Products
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          },
          gap: 2,
          padding: { xs: 1, sm: 2, md: 3 },
        }}
      >
        {cardData.map((card, index) => (
          <Card
            key={index}
            sx={{
              borderRadius: '10px',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)',
            }}
          >
            <CardMedia
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: '250px', sm: '300px', md: '350px' },
              }}
            >
              <img
                src={card.backgroundImage}
                alt={`Background image ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#fff',
                  padding: 2,
                  textAlign: 'center',
                }}
              >
                <SpaIcon sx={{ fontSize: 40, marginBottom: '10px', color: '#fff' }} />
                <Typography variant='h6' sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}>
                  {card.title}
                </Typography>
                <Typography variant='body2' sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>
                  {card.content}
                </Typography>
              </Box>
            </CardMedia>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default CardComponent;
