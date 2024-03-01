import React from 'react';

import { Box } from '@mui/system';
import ListItemText from '@mui/material/ListItemText';

const Notifications = () => {

    const notifications = [
        { contents: "Profile updated", isNew: false, date: "2023-01-15", time: "09:30:00" },
        { contents: "New candidate in, John Geraldine Fromalius Edmund Carter is in the chatroom", isNew: false, date: "2023-02-05", time: "14:45:00" },
        { contents: "Profile updated", isNew: false, date: "2023-03-20", time: "11:00:00" },
        { contents: "New candidate in chatroom", isNew: false, date: "2023-04-10", time: "18:00:00" },
        { contents: "Profile updated", isNew: false, date: "2023-05-02", time: "08:00:00" },
        { contents: "New candidate in chatroom", isNew: false, date: "2023-06-17", time: "16:20:00" },
        { contents: "Profile updated", isNew: false, date: "2023-07-08", time: "12:10:00" },
        { contents: "New candidate in chatroom", isNew: false, date: "2023-08-22", time: "10:05:00" },
        { contents: "Profile updated", isNew: false, date: "2023-09-14", time: "15:30:00" },
        { contents: "New candidate in chatroom", isNew: false, date: "2023-10-30", time: "17:40:00" },
        { contents: "Profile updated", isNew: false, date: "2023-11-25", time: "13:55:00" },
        { contents: "New candidate in chatroom", isNew: false, date: "2023-12-11", time: "09:15:00" },
        { contents: "Profile updated", isNew: false, date: "2024-01-07", time: "14:00:00" },
        { contents: "New candidate in chatroom", isNew: false, date: "2024-02-18", time: "11:25:00" },
        { contents: "Profile updated", isNew: false, date: "2024-03-05", time: "08:45:00" },
        { contents: "New candidate in chatroom", isNew: false, date: "2024-04-19", time: "16:50:00" },
        { contents: "Profile updated", isNew: false, date: "2024-05-30", time: "13:20:00" },
        { contents: "New candidate in chatroom", isNew: false, date: "2024-06-08", time: "10:35:00" },
        { contents: "Profile updated", isNew: false, date: "2024-07-22", time: "09:00:00" },
        { contents: "New candidate in chatroom", isNew: false, date: "2024-08-10", time: "17:15:00" }
    ];

    return (
      <Box sx={{ position:'relative', bgcolor: 'white', height: '85vh', width: '20vw', top: '2.5vh', left: '1vw', border: 'thin black dotted', overflowY: 'scroll', borderRadius: '20px' }}>
            {notifications.map((notification, index) => (
                <ListItemText primary={notification.contents} secondary={notification.date + ' @ ' + notification.time} sx={{ position: 'relative', bgcolor: '#6ccc81', width: '18.5vw', top: '.1vh', left: '.25vw' }} />
            ))}
        </Box>  
    );
};

export default Notifications;