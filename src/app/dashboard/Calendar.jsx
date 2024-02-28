import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function CustomMonthLayout() {
  return (
    <div className='Calendar-Container' style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div className='Calendar'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={6} />
        </LocalizationProvider>
      </div>
    </div>
  );
}

