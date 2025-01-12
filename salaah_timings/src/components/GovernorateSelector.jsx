import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import governorates from './governorates';

export default function GovernorateSelector({ setSelectedCity }) {
    const handleCityChange = (event) => {
        const selectedGovernorate = governorates.find(gov => gov.apiName === event.target.value);
        if (selectedGovernorate) setSelectedCity(selectedGovernorate.displayName);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
            <InputLabel id="governorate-select-label">
                <span style={{ color: "white" }}>المحافظة</span>
            </InputLabel>
            <Select
                labelId="governorate-select-label"
                id="governorate-select"
                onChange={handleCityChange}
            >
                {governorates.map((gov) => (
                    <MenuItem key={gov.apiName} value={gov.apiName}>
                        {gov.displayName}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}