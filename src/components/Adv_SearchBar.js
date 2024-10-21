import React, { useState } from 'react';
import {
    TextField,
    Button,
    Grid,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
} from '@mui/material';

const Adv_SearchBar = ({ onSearch }) => {
    const [location, setLocation] = useState('BANGALORE');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [pincode, setPincode] = useState('');
    const [category, setCategory] = useState('View All'); // Default to 'View All'
    const [openDialog, setOpenDialog] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        const results = onSearch({ location, minPrice, maxPrice, pincode, category });
        setSearchResults(results || []); 
        setOpenDialog(true); 
    };

    return (
        <Grid container spacing={2} alignItems="center" style={{ padding: '20px' }}>
            {/* Location Input */}
            <Grid item xs={12} sm={6} md={2}>
                <TextField 
                    label="Location" 
                    variant="outlined" 
                    fullWidth 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)} 
                />
            </Grid>

            {/* Pincode Input */}
            <Grid item xs={12} sm={6} md={2}>
                <TextField 
                    label="Pincode" 
                    variant="outlined" 
                    fullWidth 
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)} 
                />
            </Grid>

            {/* Min Price Input */}
            <Grid item xs={12} sm={6} md={2.4}>
                <TextField 
                    label="Min. Price" 
                    variant="outlined" 
                    fullWidth 
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)} 
                />
            </Grid>

            {/* Max Price Input */}
            <Grid item xs={12} sm={6} md={2.4}>
                <TextField 
                    label="Max. Price" 
                    variant="outlined" 
                    fullWidth 
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)} 
                />
            </Grid>

            {/* Dropdown for Category */}
            <Grid item xs={12} sm={6} md={2.2}>
                <FormControl fullWidth variant="outlined">
                    <InputLabel>Category</InputLabel>
                    <Select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        label="Category"
                    >
                        <MenuItem value="View All">View All</MenuItem>
                        <MenuItem value="Residential">Residential</MenuItem>
                        <MenuItem value="Commercial">Commercial</MenuItem>
                        <MenuItem value="Apartments">Apartments</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            {/* Search Button */}
            <Grid item xs={12} sm={6} md={1}>
                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Grid>
        </Grid>
    );
};

export default Adv_SearchBar;
