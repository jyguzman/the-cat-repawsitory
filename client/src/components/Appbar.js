import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Appbar = () => {
  return (
    <Box sx={{ 
        flexGrow: 1, 
        paddingBottom: ['18.5%', '10%', '7.5%', '5%'] 
    }}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            The Dog Repawsitory
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Appbar;
