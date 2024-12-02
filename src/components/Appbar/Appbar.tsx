import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Appbar = ({ siteName }: { siteName: string }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setDrawerOpen(false);
  };

  return (
    <>
      {/* Navigation Bar */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'white',
          color: 'green',
          boxShadow: 'none',
          borderBottom: '1px solid #ddd',
        }}
      >
        <Toolbar>
          <IconButton onClick={() => setDrawerOpen(true)} edge="start" sx={{ color: 'green' }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {siteName}
          </Typography>
        </Toolbar>
      </AppBar>
{/* Sidebar */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
        <List sx={{ width: 250, backgroundColor: '#f9f9f9', height: '100%' }}>
          {[
            { label: 'Home', path: '/' },
            { label: 'Dataset', path: '/dataset' },
            { label: 'Model Visualisation', path: '/models' },
            { label: 'Usage Examples', path: '/examples' },
            { label: 'Download', path: '/download' },
            { label: 'Citation', path: '/citation' },
          ].map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton onClick={() => handleNavigation(item.path)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Appbar;
