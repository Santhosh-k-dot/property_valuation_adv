import React, { useState, useRef } from 'react'; // Corrected the imports here
import { Box, Typography, Button, Card, CardContent, Modal, IconButton } from '@mui/material';
import { FaCheckCircle } from 'react-icons/fa';
import CloseIcon from '@mui/icons-material/Close';
import PopupForm from './DownloadPopupForm'; // Import your PopupForm component

// Styles for the Modal
const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    maxWidth: 800,
    outline: 'none',
};

// Common Styles for Cards
const cardStyles = {
    padding: 2,
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/arches.png")',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    height: '100%',
};

// Reusable Component for Benefit Card
const BenefitCard = ({ title, benefits }) => (
    <Card variant="outlined" sx={cardStyles}>
        <CardContent>
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 'bold',
                    backgroundColor: '#f0f0f0',
                    padding: '8px',
                    borderRadius: '4px',
                }}
            >
                {title}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 2 }}>
                {benefits.map((benefit, index) => (
                    <Typography variant="body1" key={index}>
                        <FaCheckCircle color="#00c6ff" /> {benefit}
                    </Typography>
                ))}
            </Box>
        </CardContent>
    </Card>
);

// Benefits Section Component
const BenefitsSection = () => {
    const buyerBenefits = [
        'Know the real going price for the property you want to buy',
        'Learn the amount of Pre-Approved Home Loan you can avail',
    ];

    const sellerBenefits = [
        'Sell your Property at Maximum Price',
        'Valuation Certificate to negotiate with buyers',
    ];

    return (
        <Box className="row" sx={{ marginTop: 4, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            <Box
                className="col-md-6"
                sx={{
                    flex: '1 1 calc(50% - 16px)',
                    padding: { xs: 1, md: 2 },
                    maxWidth: { xs: '100%', md: 'calc(50% - 16px)' },
                }}
            >
                <BenefitCard title="Benefits for Buyers" benefits={buyerBenefits} />
            </Box>

            <Box
                className="col-md-6"
                sx={{
                    flex: '1 1 calc(50% - 16px)',
                    padding: { xs: 1, md: 2 },
                    maxWidth: { xs: '100%', md: 'calc(50% - 16px)' },
                }}
            >
                <BenefitCard title="Benefits for Sellers" benefits={sellerBenefits} />
            </Box>
        </Box>
    );
};

// Main Component
const PropertyValhome = () => {
    const [openForm, setOpenForm] = useState(false);
    const [openVideo, setOpenVideo] = useState(false);

    // Create refs for the PropertyAdviceForm and valuation section
    const propertyAdviceFormRef = useRef(null);
    const valuationSectionRef = useRef(null); // Ref for the valuation section

    const handleOpenForm = () => setOpenForm(true);
    const handleCloseForm = () => setOpenForm(false);
    const handleOpenVideo = () => setOpenVideo(true);
    const handleCloseVideo = () => setOpenVideo(false);

    // Scroll to the PropertyAdviceForm
    const handleScrollToForm = () => {
        propertyAdviceFormRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Scroll to the valuation section when button is clicked
    const handleScrollToValuation = () => {
        valuationSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const handleFormSubmit = () => {
        // Start PDF download after form submission
        const link = document.createElement('a');
        link.href = 'Property_Valuation_Comprehensive_Report.pdf'; // Update with your actual PDF path
        link.download = 'SampleReport.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Box
            sx={{
                padding: { xs: 2, md: 4 },
                maxWidth: 1200,
                margin: 'auto',
                backgroundColor: 'white',
                backgroundImage: 'url("https://www.transparenttextures.com/patterns/clean-gray-paper.png")',
                borderRadius: '8px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            }}
        >
            {/* Main Layout */}
            <Box
                className="row"
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                {/* Left Content */}
                <Box className="col-md-8" sx={{ flexBasis: '70%' }}>
                    <Box sx={{ textAlign: 'left', paddingLeft: { xs: 0, md: 2 } }}>
                        <Typography
                            variant="h3"
                            component="h1"
                            gutterBottom
                            sx={{
                                backgroundImage:
                                    'linear-gradient(to right, #ff7e5f, #feb47b)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                                fontWeight: 'bold',
                            }}
                        >
                            Property Valuation
                        </Typography>

                        <Typography
                            variant="h6"
                            component="h2"
                            sx={{
                                color: '#555',
                                marginBottom: 2,
                                fontStyle: 'italic',
                            }}
                        >
                            Discover the real value of your property
                        </Typography>
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            sx={{ marginBottom: 4 }}
                        >
                            Get Expert to evaluate it before you{' '}
                            <span
                                style={{
                                    color: '#ff7e5f',
                                    fontWeight: 'bold',
                                }}
                            >
                                Buy
                            </span>{' '}
                            or{' '}
                            <span
                                style={{
                                    color: '#ff7e5f',
                                    fontWeight: 'bold',
                                }}
                            >
                                Sell
                            </span>
                        </Typography>

                        {/* Action Buttons */}
                        <Box sx={{ display: 'flex', gap: 3 }}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundImage:
                                        'linear-gradient(to right, #00c6ff, #0072ff)',
                                    paddingX: 4,
                                    paddingY: 1,
                                    borderRadius: 20,
                                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                                    '&:hover': {
                                        backgroundImage:
                                            'linear-gradient(to right, #0072ff, #00c6ff)',
                                    },
                                }}
                                onClick={handleScrollToValuation} // Scroll to the valuation section when clicked
                            >
                                Request a Valuation Free{' '}
                            </Button>
                            <Button
                                variant="outlined"
                                color="primary"
                                sx={{
                                    borderRadius: 20,
                                    paddingX: 4,
                                    paddingY: 1,
                                    border: '2px solid #0072ff',
                                    '&:hover': {
                                        border: '2px solid #00c6ff',
                                    },
                                }}
                                onClick={handleOpenForm}
                            >
                                Download Sample Report
                            </Button>
                        </Box>

                        {/* Benefits Section */}
                        <BenefitsSection />
                    </Box>
                </Box>

                {/* Right Image Section */}
                <Box
                    className="col-md-4"
                    sx={{
                        flexBasis: '30%',
                        textAlign: 'center',
                        paddingTop: { xs: 3, md: 5 },
                    }}
                >
                    <Box
                        component="img"
                        src="https://www.geeklymedia.com/hs-fs/hubfs/Hand%20press%20play%20button%20sign%20to%20start%20or%20initate%20projetcts%20as%20con.jpg?width=1200&height=1200&name=Hand%20press%20play%20button%20sign%20to%20start%20or%20initate%20projetcts%20as%20con.jpg"
                        alt="Expert Advice on Property Valuation"
                        sx={{
                            borderRadius: 2,
                            width: '100%',
                            maxWidth: '400px',
                            cursor: 'pointer',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                        }}
                        onClick={handleOpenVideo}
                    />
                </Box>
            </Box>
            {/* Valuation Section */}
            <Box ref={valuationSectionRef}>

            </Box>

            {/* Popup Form */}
            <PopupForm
                open={openForm}
                handleClose={handleCloseForm}
                onFormSubmit={handleFormSubmit}
            />

            {/* Modal for YouTube Video */}
            <Modal
                open={openVideo}
                onClose={handleCloseVideo}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={modalStyle}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <IconButton onClick={handleCloseVideo}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ paddingTop: 2 }}>
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/_KyyQMRD3lU?si=yZ94LRfwAzDQFohG"
                            title="YouTube Video"
                            frameBorder="0"
                            allowFullScreen
                        />
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};

export default PropertyValhome;
