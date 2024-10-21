import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Button } from '@mui/material';
import './Adv_App.css'; // Custom CSS for styling
import Adv_MainContent from './Adv_MainContent'; // Main content component

import AdvPropertyCardSell from './AdvPropertyCardSell'; // Sell property card
import AdvPropertyCardBuy from './AdvPropertyCardBuy'; // Buy property card
import Adv_Navbar from './Adv_NavBar';

const Adv_Property = () => {
    const [open, setOpen] = useState(false);

    // Open dialog handler
    const handleClickOpen = () => setOpen(true);

    // Close dialog handler
    const handleClose = () => setOpen(false);

    return (
        <div>
            {/* Button to open the property calculator dialog */}
            <Button
                variant="contained"
                onClick={handleClickOpen}
                sx={{ backgroundColor: 'orange', '&:hover': { backgroundColor: 'darkorange' } }}
            >
                Open Adv_Property Calculator
            </Button>

            {/* Fullscreen dialog with close button */}
            <Dialog open={open} onClose={handleClose} fullScreen>
                <DialogTitle>
                    Property Valuations Search
                    <Button 
                        onClick={handleClose} 
                        style={{ float: 'right', color: 'red' }}
                    >
                        Close
                    </Button>
                </DialogTitle>

                <DialogContent>
                    {/* Navbar Component */}
                    <Adv_Navbar />

                    {/* Main Content Component */}
                    <Adv_MainContent />

                    {/* Horizontal Layout for Sell and Buy Cards */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                        <div style={{ flex: 1, marginRight: '10px' }}>
                            <AdvPropertyCardSell />
                        </div>
                        <div style={{ flex: 1, marginLeft: '10px' }}>
                            <AdvPropertyCardBuy />
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Adv_Property;
