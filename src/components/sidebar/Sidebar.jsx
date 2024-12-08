import React, { useState } from 'react';
import {
  Drawer,
  Box,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '../../assets/camera_indoor.svg';
import FolderIcon from '../../assets/Frame 6.svg';
import DeleteIcon from '../../assets/delete.svg';

import LinearProgress from '@mui/material/LinearProgress';
import cloud from '../../assets/cloud.svg';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger icon
import CloseIcon from '@mui/icons-material/Close'; // Close icon for mobile


function Sidebar() {
  const [activeTab, setActiveTab] = useState('My Files');
  const [open, setOpen] = useState(false); // State to toggle the drawer visibility

  const totalStorage = 100; // Total storage in GB
  const usedStorage = 65; // Used storage in GB
  const storagePercentage = (usedStorage / totalStorage) * 100;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const isMobile = useMediaQuery('(max-width:700px)'); // Detect mobile view

  return (
    <Box sx={{ display: 'flex' }}>
       {/* Hamburger menu button for mobile */}
       {isMobile && !open && (
        <IconButton
          sx={{
            position: 'fixed', // Fixed position for the icon
            top: 46,
            left: 16,
            zIndex: 1000,
            backgroundColor: '#fff', // Add a background for better visibility
            borderRadius: '50%',
            padding: 2,
          }}
          onClick={() => setOpen(true)} // Open the drawer
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            border: 'none',
            paddingTop: "4rem",
            bgcolor: '#f4f4f4',
          },
        }}
        variant={isMobile ? 'temporary' : 'permanent'} // Use 'temporary' on mobile
        anchor="left"
        open={open} // Control visibility on mobile
        onClose={() => setOpen(false)} // Close drawer when clicking outside
        ModalProps={{
          keepMounted: true, // Keep drawer mounted for better performance
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            pt: 2,
            marginLeft: "1.6rem",
          }}
        >
           {/* Close button when the sidebar is open */}
      {isMobile && open && (
        <IconButton
          sx={{
            position: 'fixed', // Fixed position for the icon
            top: 67,
            left: 200,
            height:'20px',
            width:'20px',
            zIndex: 1000,
            backgroundColor: '#fff', // Add a background for better visibility
            borderRadius: '50%',
            padding: 2,
          }}
          onClick={() => setOpen(false)} // Close the drawer
        >
          <CloseIcon />
        </IconButton>
      )}

          <Button
            startIcon={<AddIcon />}
            sx={{
              width: '60%',
              bgcolor: '#ffffff',
              color: '#000',
              border: '1px solid #ddd',
              borderRadius: 8,
              textTransform: 'none',
              mb: 2,
              paddingLeft: 1,
              boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
              marginBottom: "1.5rem",
            }}
          >
            Add New
          </Button>

          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              fontSize: "16px",
              marginBottom: "2rem",
              fontWeight: "bold",
              marginLeft: "0.6rem",
            }}
          >
            Jewel Company
          </Typography>

          {/* Home Section */}
          <Button
            onClick={() => handleTabClick('Home')}
            startIcon={<img src={HomeIcon} alt="Home" style={{ width: '15px', height: '15px' }} />}
            sx={{
              width: '87%',
              bgcolor: activeTab === 'Home' ? '#007bff' : 'transparent',
              color: activeTab === 'Home' ? '#fff' : '#000',
              border: activeTab === 'Home' ? '1px solid #ddd' : 'none',
              borderRadius: 4,
              textTransform: 'none',
              mb: 1,
              paddingLeft: '1rem',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              '& .MuiButton-startIcon': {
                marginLeft: 0,
              },
              '&:hover': {
                bgcolor: '#0056b3',
                color: '#fff',
              },
            }}
          >
            Home
          </Button>

          {/* My Files Section */}
          <Button
            onClick={() => handleTabClick('My Files')}
            startIcon={<img src={FolderIcon} alt="Home" style={{ width: '15px', height: '15px' }} />}
            sx={{
              width: '87%',
              bgcolor: activeTab === 'My Files' ? '#007bff' : 'transparent',
              color: activeTab === 'My Files' ? '#fff' : '#000',
              border: activeTab === 'My Files' ? '1px solid #ddd' : 'none',
              borderRadius: 4,
              textTransform: 'none',
              mb: 1,
              paddingLeft: '1rem',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              '& .MuiButton-startIcon': {
                marginLeft: 0,
              },
              '&:hover': {
                bgcolor: '#0056b3',
                color: '#fff',
              },
            }}
          >
            My Files
          </Button>

          {/* Delete Files Section */}
          <Button
            onClick={() => handleTabClick('Delete Files')}
            startIcon={<img src={DeleteIcon} alt="Home" style={{ width: '15px', height: '15px' }} />}
            sx={{
              width: '87%',
              bgcolor: activeTab === 'Delete Files' ? '#007bff' : 'transparent',
              color: activeTab === 'Delete Files' ? '#fff' : '#000',
              border: activeTab === 'Delete Files' ? '1px solid #ddd' : 'none',
              borderRadius: 4,
              textTransform: 'none',
              mb: 1,
              paddingLeft: '1rem',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              '& .MuiButton-startIcon': {
                marginLeft: 0,
              },
              '&:hover': {
                bgcolor: '#0056b3',
                color: '#fff',
              },
            }}
          >
            Delete Files
          </Button>

          <Box
            sx={{
              position: 'absolute',
              bottom: 30,
              width: '80%',
              borderTop: '1px solid #ddd',
              padding: 2,
              bgcolor: '#f4f4f4',
            }}
          >
            {/* Storage Icon and Text */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: 1,
              }}
            >
              <img
                src={cloud}
                alt="Storage Icon"
                style={{
                  width: '24px',
                  height: '24px',
                  marginRight: '8px',
                }}
              />
              <Typography variant="body2" sx={{ color: '#333' }}>
                Storage Available
              </Typography>
            </Box>

            {/* Storage Bar */}
            <LinearProgress
              variant="determinate"
              value={storagePercentage}
              sx={{
                height: 3,
                borderRadius: 5,
                marginTop: 2,
                bgcolor: '#e0e0e0',
                '& .MuiLinearProgress-bar': {
                  bgcolor: '#007bff',
                },
              }}
            />

            {/* Storage Text */}
            <Typography variant="caption" sx={{ color: '#555' }}>
              {usedStorage} GB of {totalStorage} GB used
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
