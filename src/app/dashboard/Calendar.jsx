import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Calendar:</h1>
      <Box sx={{ width: '100%', height: '30vh'}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: '#AEB1C1' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
            <Tab label="Sunday" {...a11yProps(0)} />
            <Tab label="Monday" {...a11yProps(1)} />
            <Tab label="Tuesday" {...a11yProps(2)} />
            <Tab label="Wednesday" {...a11yProps(3)} />
            <Tab label="Thursday" {...a11yProps(4)} />
            <Tab label="Friday" {...a11yProps(5)} />
            <Tab label="Saturday" {...a11yProps(6)} />
          </Tabs>
        </Box>
        
        <CustomTabPanel value={value} index={0}>
          Free Day
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <li>Meeting</li>
          <li>Phone Call</li>
          <li>Interview</li>
          <li>Interview</li>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <li>Networking event</li>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <li>hump day</li>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <li>Hump day over with</li>
          <li>Thirsty Thursday</li> 
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          <li>TGIF</li>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={6}>
          Free Day
        </CustomTabPanel>
      </Box>
      <button 
        style={{ backgroundColor: 'lightblue', borderRadius: '5px', padding: '2px 5px' }} 
        onClick={() => console.log('click')}
      >Create Event</button>
    </div>
  );
}