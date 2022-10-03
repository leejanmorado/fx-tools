import { useEffect, useState } from 'react';
import MainLayout from '../src/layout/MainLayout';
import { Country } from '../src/types/country';
import { NextPageWithLayout } from './_app';
import { TEClient } from '../src/lib/client';
import { CalendarEvent } from '../src/types/calendarEvent';
import CalendarEventCard from '../src/components/CalendarEventCard';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { GetServerSideProps } from 'next';

const getCountries = async (): Promise<Country[]> => {
  const { data } = await TEClient.get<Country[]>(
    'https://api.tradingeconomics.com/country',
  );

  return data;
};

const getCalendar = async (): Promise<CalendarEvent[]> => {
  const { data } = await TEClient.get(
    'https://api.tradingeconomics.com/calendar',
  );

  return data;
};

type Props = {
  initialCountries: Country[];
};

const CalendarPage: NextPageWithLayout<Props> = ({ initialCountries }) => {
  const [countries, setCountries] = useState<Country[]>(initialCountries);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [open, setOpen] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadCalendarEvents = async () => {
      setEvents(await getCalendar())
      setLoading(false)
    }

    loadCalendarEvents()
  }, [])

  return (
    <Box height='100%' width='100%'>
      <Typography variant='h4' component='h1' fontWeight='bold' sx={{ mb: 8 }}>
        Calendar Events
      </Typography>
      {loading ? (
        <Box
          height='100%'
          width='100%'
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Collapse in={open}>
            <Alert
              severity='info'
              action={
                <IconButton
                  aria-label='close'
                  color='inherit'
                  size='small'
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize='inherit' />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              Data is limited due to developer access limits.
            </Alert>
          </Collapse>
          <Grid container pb={4} spacing={4} alignItems='stretch'>
            {events.map((event) => {
              return (
                <Grid key={event.CalendarId} item xs={12} sm={6} md={4}>
                  <CalendarEventCard event={event} />
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
    </Box>
  );
};

CalendarPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let initialCountries: Country[] = [];

  try {
    initialCountries = await getCountries();
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      initialCountries,
    },
  };
};

export default CalendarPage;
