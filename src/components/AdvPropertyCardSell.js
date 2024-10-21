import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Button,
    Typography,
    Grid,
    Paper,
    Box,
    Card,
    CardContent,
    CardActions,
    CardMedia,
} from '@mui/material';
import PropertyAdviceForm from './PropertyAdviceForm'; // Adjust path if necessary

const AdvPropertyCardSell = () => {
    const [open, setOpen] = useState(false); // State for the main dialog
    const [formOpen, setFormOpen] = useState(false); // State for the PropertyAdviceForm dialog

    // Handlers for the main dialog
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Handlers for the PropertyAdviceForm dialog
    const handleFormOpen = () => setFormOpen(true);
    const handleFormClose = () => setFormOpen(false);

    return (
        <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
            {/* Fixed-Size Card Component */}
            <Card
                sx={{
                    width: '350px',  // Same fixed width
                    height: '480px', // Same fixed height
                    borderRadius: 5, // Slightly rounded corners
                    boxShadow: 6, // Consistent shadow depth
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    overflow: 'hidden',
                    '&:hover': {
                        transform: 'scale(1.05)', // Hover zoom effect
                        boxShadow: 12, // Stronger shadow on hover
                    },
                }}
            >
                <CardMedia
                    component="img"
                    height="200" // Consistent image height
                    image="https://d32b5joreyushd.cloudfront.net/media/uploads/2019/04/15/sell-property-online.jpg"
                    alt="Sell Your Property"
                    sx={{
                        transition: 'transform 0.5s',
                        '&:hover': { transform: 'scale(1.1)' }, // Zoom-in on image hover
                    }}
                />
                <CardContent sx={{ padding: '16px' }}>
                    <Typography
                        variant="h5"
                        component="div"
                        gutterBottom
                        sx={{ fontWeight: 'bold' }}
                    >
                        Sell Your Property with Guidance from Our Experts
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ marginTop: '8px', lineHeight: 1.5 }}
                    >
                        Reecocefe Experts provide training and tools to help you sell your home,
                        negotiate the best price, and feel great about the sale.
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', paddingBottom: '16px' }}>
                    <Button
                        size="medium"
                        onClick={handleClickOpen}
                        variant="outlined"
                        color="primary"
                        sx={{
                            borderRadius: '20px', // Rounded button for aesthetics
                            textTransform: 'none', // No uppercase transformation
                            padding: '8px 20px',
                            transition: 'background-color 0.3s, color 0.3s',
                            '&:hover': {
                                backgroundColor: '#1976d2',
                                color: '#fff', // White text on hover
                            },
                        }}
                    >
                        Learn More
                    </Button>
                </CardActions>
            </Card>

            {/* Full-screen Dialog Component for Detailed Popup */}
            <Dialog open={open} onClose={handleClose} fullScreen>
                <DialogTitle>
                    Sell Your Property
                    <Button onClick={handleClose} style={{ float: 'right', color: 'red' }}>
                        Close
                    </Button>
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={4} padding={4}>
                        {/* Left Section: Image */}
                        <Grid item xs={12} md={6}>
                            <Paper elevation={3}>
                                <img
                                    src="https://media.istockphoto.com/id/1497684257/photo/real-estate-agent-explain-house-plans-to-view-house-plans-and-sales-contracts-house-purchase.jpg?s=1024x1024&w=is&k=20&c=XyHXhh7Os4rtm0Av8nnBDca2rufPNbONHffvLG-JQGQ="
                                    alt="City Street"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </Paper>
                        </Grid>

                        {/* Right Section: Description and Form Button */}
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" gutterBottom>
                                Sell Your Property with Guidance from Our Experts
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Reecocefe Experts have the experience, training, and advanced tools to help you sell your home,
                                negotiate the best price, and get the professional advice you need to feel great about the sale
                                of your home.
                            </Typography>

                            <Box marginTop={3}>
                                <Typography variant="h6" gutterBottom color="primary">
                                    Are You Selling? Post Your Property Now!!
                                </Typography>
                                <Typography variant="body2" paragraph>
                                    Our objective is to deliver the <strong>best real estate services</strong> with solutions matching
                                    your needs. With the support of dedicated personnel, we offer the best property deals in NCR.
                                </Typography>

                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={handleFormOpen} // Open PropertyAdviceForm dialog
                                    style={{ marginRight: '10px' }}
                                >
                                    Get Free Advice
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>

            {/* Property Advice Form Dialog */}
            <Dialog
                open={formOpen}
                onClose={handleFormClose}
                fullWidth
                maxWidth="lg" // Set maxWidth to 'lg'
                sx={{
                    "& .MuiDialog-paper": {
                        width: "80vw", // Set width to 80% of the viewport width
                        maxWidth: "lg", // Set the maximum width to 'lg'
                        borderRadius: "12px", // Add rounded corners
                        padding: "16px", // Optional padding for better UI
                    },
                }}
            >
                <DialogTitle>
                    Property Advice Form
                    <Button onClick={handleFormClose} style={{ float: 'right', color: 'red' }}>
                        Close
                    </Button>
                </DialogTitle>
                <DialogContent>
                    <PropertyAdviceForm />
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AdvPropertyCardSell;