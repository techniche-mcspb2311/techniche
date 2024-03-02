import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CalendarTwo from './Calendar-2';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const listStyle = {
  backgroundColor: 'white',
  padding: '5px 10px',
  borderRadius: '20px',
  margin: '10px 0',
  boxShadow: '2px 3px 10px 0 #000000',
  font: 'bold 15px/30px Arial, sans-serif',
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel"
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
  const handleChange = (event, newValue) => setValue(newValue);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '30px', backgroundColor: '#21282D', color: 'white' }}>Calendar:</h1>
      <Box className="calendarBox" sx={{ width: '100%', height: '30vh', backgroundColor: '#C2BBAB'}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: '#2A343B'}}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
            <Tab sx={{ color: 'white'}} label="Sunday" {...a11yProps(0)} />
            <Tab sx={{ color: 'white'}} label="Monday" {...a11yProps(1)} />
            <Tab sx={{ color: 'white'}} label="Tuesday" {...a11yProps(2)} />
            <Tab sx={{ color: 'white'}} label="Wednesday" {...a11yProps(3)} />
            <Tab sx={{ color: 'white'}} label="Thursday" {...a11yProps(4)} />
            <Tab sx={{ color: 'white'}} label="Friday" {...a11yProps(5)} />
            <Tab sx={{ color: 'white'}} label="Saturday" {...a11yProps(6)} />
          </Tabs>
        </Box>
  
        <CustomTabPanel value={value} index={0}>
          <div style={listStyle}> free day </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div style={listStyle}> work </div>
          <div style={listStyle}> meeting </div>
          <div style={listStyle}> interview </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div style={listStyle}> gym </div>
          <div style={listStyle}> call </div>
          <div style={listStyle}> interview </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <div style={listStyle}> interview </div>
          <div style={listStyle}> screening </div>
          <div style={listStyle}> call </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <div style={listStyle}> network event </div>
          <div style={listStyle}> interview </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          <div style={listStyle}> work </div>
          <div style={listStyle}> meeting </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={6}>
          <div style={listStyle}> free day </div>
        </CustomTabPanel>
        
        <button style={{ backgroundColor: 'grey', color: 'white', borderRadius: '5px', padding: '1px 5px', marginLeft: '25px'}} 
        onClick={handleOpen}>Add Event</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <input type="text" placeholder='Write Subject Here...' style={{ width: '100%', textAlign: 'center', margin: '0 auto', display: 'block' }} />
            <CalendarTwo/>
          </Box>
        </Modal>
      </Box>



    </div>
  );
}