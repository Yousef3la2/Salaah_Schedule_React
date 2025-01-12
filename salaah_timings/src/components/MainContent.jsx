import React from 'react'
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Salaah from './Salaah';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";
import { useState, useEffect } from 'react';
import governorates from './governorates';

export default function MainContent() {
    // STATES
    const [timings, setTimings] = useState({
        Fajr: "",
        Dhuhr: "",
        Asr: "",
        Maghrib: "",
        Isha: ""
    });

    const [selectedCity, setSelectedCity] = useState(
        "اسوان"
    );

    const getTimings = async (city) => {
        const response = (await axios.get(`https://api.aladhan.com/v1/timingsByCity?country=EG&city=${city}`)).data.data;
        setTimings(response.timings);
        console.log(response)
    }//setTimings(response.data.data.timings)
    useEffect(() => {
        getTimings(selectedCity);
    },[selectedCity]);
    
    const handleCityChange = (event) => {
        const cityObject = governorates.find((city) => {
            return city.apiName == event.target.value;
        })
        console.log(cityObject.displayName);
        setSelectedCity(cityObject.displayName);
        //getTimings();

      };
  return (
    <>
        {/* Top Row */}
        <Grid container>
            <Grid item xs={6}>
                <div>
                    <h2>يناير 9 2025 | 4:31</h2>
                    <h1>{selectedCity}</h1>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div>
                    <h2>متبقي حتي صلاة المغرب</h2>
                    <h1>2:00:00</h1>
                </div>
            </Grid>
        </Grid>
        {/*== Top Row ==*/}

        <Divider style={{borderColor:"white", opacity: "0.2"}}/>

        {/* Salaah Cards */}
        <Stack direction="row" justifyContent={"space-around"} style={{marginTop: 30}}>
            <Salaah name="الفجر" time={timings.Fajr} image="https://prayerinislam.com/wp-content/uploads/2016/01/All-About-Fajr-Prayer.png"/>
            <Salaah name="الظهر" time={timings.Dhuhr} image="https://prayerinislam.com/wp-content/uploads/2016/01/All-About-Fajr-Prayer.png"/>
            <Salaah name="العصر" time={timings.Asr} image="https://prayerinislam.com/wp-content/uploads/2016/01/All-About-Fajr-Prayer.png"/>
            <Salaah name="المغرب" time={timings.Maghrib} image="https://prayerinislam.com/wp-content/uploads/2016/01/All-About-Fajr-Prayer.png"/>
            <Salaah name="العشاء" time={timings.Isha} image="https://prayerinislam.com/wp-content/uploads/2016/01/All-About-Fajr-Prayer.png"/>
        </Stack>
        {/*== Salaah Cards ==*/}

        {/* Select Governorate */}
        <Stack direction="row" justifyContent={"center"} style={{marginTop: 40}}>
        <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
            <InputLabel id="demo-simple-select-label">
                <span style={{color: "white"}}>المحافظة</span>
            </InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Governorate"
            onChange={handleCityChange}
            >
            {governorates.map((gov) => (
                            <MenuItem key={gov.apiName} value={gov.apiName}>
                                {gov.displayName}
                            </MenuItem>
                        ))}
            </Select>
        </FormControl>
        </Stack>
        {/*== Select Governorate ==*/}
    </>
  )
}
