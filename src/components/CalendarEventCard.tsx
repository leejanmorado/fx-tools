import {
  Box,
  CardContent,
  Divider,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import Card from '@mui/material/Card';
import { green, orange, red, yellow } from '@mui/material/colors';
import { CalendarEvent } from '../types/calendarEvent';
import { DateTime } from 'luxon';
import Image from 'next/image';

type Props = {
  event: CalendarEvent;
};

const Importance: Record<number, { label: string; color: string }> = {
  1: { label: 'Low', color: yellow[500] },
  2: { label: 'Medium', color: orange[500] },
  3: { label: 'High', color: red[500] },
};

const CalendarEventCard = ({ event }: Props): JSX.Element => {
  const createDate = (dateString: string): string => {
    return DateTime.fromISO(dateString).toLocaleString(DateTime.DATETIME_MED);
  };

  return (
    <Card
      sx={{
        borderTop: `8px solid ${Importance[event.Importance].color}`,
        borderRadius: 2,
        height: '100%',
      }}
    >
      <CardContent>
        <Stack direction='row' spacing={2} alignItems='center'>
          <Box width={32} height={16}>
            <Image
              src={`https://countryflagsapi.com/png/${event.Country}`}
              width='32'
              height='16'
              layout='responsive'
            />
          </Box>
          <Typography variant='body1' color='text.secondary'>
            {event.Country}
          </Typography>
        </Stack>
        <Typography variant='h5' fontWeight='bold'>
          {event.Event}
        </Typography>
        <Typography variant='body1' color='text.secondary'>
          {createDate(event.Date)}
        </Typography>
        <Link
          href={event.SourceURL}
          variant='body2'
          underline='hover'
          target='_blank'
          rel='noreferrer'
        >
          Source: {event.Source}
        </Link>
        <Stack
          direction='row'
          justifyContent='space-between'
          divider={<Divider orientation='vertical' flexItem />}
          spacing={2}
          mt={4}
        >
          <Box textAlign='center' width='100%'>
            <Typography variant='h6'>Actual</Typography>
            <Typography variant='body1' fontSize={18}>
              {event.Actual}
            </Typography>
          </Box>
          <Box textAlign='center' width='100%'>
            <Typography variant='h6'>Forecast</Typography>
            <Typography variant='body1' fontSize={18}>
              {event.Forecast}
            </Typography>
          </Box>
          <Box textAlign='center' width='100%'>
            <Typography variant='h6'>Previous</Typography>
            <Typography
              variant='body1'
              fontSize={18}
              color={event.Previous.includes('-') ? red[500] : green[500]}
            >
              {event.Previous}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CalendarEventCard;
