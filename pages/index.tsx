import { Box, Button, Container, Input, Paper, Stack, TextField, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>FX Tools</title>
        <meta name='description' content='Tools you need for trading forex' />
      </Head>
      <Box
        sx={{
          height: '100%',
          width: '100%',
          backgroundImage: 'linear-gradient(-20deg, #6e45e2 0%, #88d3ce 100%)',
        }}
      >
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
          }}
        >
          <Paper sx={{ p: 6 }}>
            <Box display='flex' alignItems='baseline'>
              <Typography
                variant='h1'
                fontWeight={600}
                fontStyle='italic'
                sx={{ color: 'primary.main' }}
              >
                FX
              </Typography>
              <Typography variant='h2' fontWeight={600} fontStyle='italic'>
                Tools
              </Typography>
            </Box>
            <Stack spacing={2} marginTop={8}>
              <TextField label='Username' />
              <TextField label='Password' />
            </Stack>
            <Stack spacing={2} direction='row' marginTop={4}>
              <Button variant='contained' fullWidth>
                Login
              </Button>
              <Button variant='contained' color='secondary' fullWidth>
                Sign up
              </Button>
            </Stack>
          </Paper>
        </Container>
      </Box>
    </div>
  );
};

export default Home;
