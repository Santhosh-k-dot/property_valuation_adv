import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import { LocationOn } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Adv_Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate(); // React Router hook for navigation

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" style={{ backgroundColor: 'white', color: 'black', boxShadow: 'none', borderBottom: '1px solid #ddd' }}>
            <Toolbar>
                <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <LocationOn style={{ color: 'orangered', fontSize: '30px', marginRight: '8px' }} />
                    <div>
                        <Typography variant="h6" style={{ fontWeight: 'bold', fontSize: '22px' }}>
                            Reecocefe
                        </Typography>
                        <Typography variant="body2" style={{ color: 'grey' }}>
                            Find Your Dream Property
                        </Typography>
                    </div>
                </div>

                <Button
                    color="inherit"
                    style={{ color: 'red', backgroundColor: '#fde4e4', marginRight: 16 }}
                    onClick={handleMenuClick}
                >
                    BUY
                </Button>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                    <MenuItem onClick={() => { handleMenuClose(); navigate('/buy'); }}>Buy Residential</MenuItem>
                    <MenuItem onClick={() => { handleMenuClose(); navigate('/buy'); }}>Buy Commercial</MenuItem>
                </Menu>

                <Button 
                    color="inherit" 
                    style={{ color: 'black', marginRight: 16 }} 
                    onClick={() => navigate('/sell')}
                >
                    SELL
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Adv_Navbar;
