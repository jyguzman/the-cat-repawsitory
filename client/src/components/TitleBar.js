import { AppBar, Box, Toolbar, Typography } from '@mui/material';

const TitleBar = () => {
  return (
    <Box sx={{ 
        flexGrow: 1, 
        paddingBottom: ['18.5%', '10%', '7.5%', '5%'] 
    }}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            The Cat Repawsitory
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TitleBar;
