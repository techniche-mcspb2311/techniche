import React from 'react';
import { useEffect, useState } from 'react';

import { Box } from '@mui/system';
import ListItemText from '@mui/material/ListItemText';

const Notifications = () => {

    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        fetch('/api/notifications')
          .then(response => response.json())
          .then(data => setNotifications(data))
          .catch(error => console.error('Error fetching notifications:', error));
      }, []);

    return (
        <>
            Notifications
            <Box sx={{ position: 'relative', height: '85vh', width: '20vw', top: '0vh', left: '1vw', border: 'thin black dotted', overflowY: 'scroll', borderRadius: '20px' }}>
                {notifications.slice(0).reverse().map((notification, index) => (
                <ListItemText key={index} primary={notification.contents} secondary={notification.date + ' @ ' + notification.time} sx={{ position: 'relative', bgcolor: '#6ccc81', width: '18.5vw', top: '.1vh', left: '.25vw' }} />
                ))}
            </Box> 
        </>
    );
};

export default Notifications;
