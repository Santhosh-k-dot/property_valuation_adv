import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const Adv_PropertyCard = ({ image, title, description, details }) => {
    const [open, setOpen] = useState(false);

    // Handlers to open and close the dialog
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Card>
                <CardMedia component="img" height="140" image={image} alt={title} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>

                    <Button 
                        variant="contained" 
                        color="primary" 
                        style={{ marginTop: '10px' }}
                        onClick={handleOpen}  // Open the popup on click
                    >
                        Learn More
                    </Button>
                </CardContent>
            </Card>

            {/* Dialog Component for Popup */}
            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent dividers>
                    <Typography variant="body2" color="text.secondary">
                        {details}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Adv_PropertyCard;
