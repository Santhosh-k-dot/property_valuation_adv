import React from 'react';
import { MenuItem, Select, FormControl } from '@mui/material';

const Adv_Dropdown = () => {
    const [location, setLocation] = React.useState('Bangalore');

    const handleChange = (event) => {
        setLocation(event.target.value);
    };

    return (
        <FormControl fullWidth variant="outlined">
            <Select value={location} onChange={handleChange}>
                <MenuItem value="Ahmedabad">Ahmedabad</MenuItem>
                <MenuItem value="Bangalore">Bangalore</MenuItem>
                <MenuItem value="Amritsar">Amritsar</MenuItem>
            </Select>
        </FormControl>
    );
};

export default Adv_Dropdown;
