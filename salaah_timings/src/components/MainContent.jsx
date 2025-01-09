import React from 'react'
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Salaah from './Salaah';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MainContent() {
    const handleChange = (event) => {
        console.log(event.target.value);
      };
  return (
    <>
        {/* Top Row */}
        <Grid container>
            <Grid xs={6}>
                <div>
                    <h2>يناير 9 2025 | 4:31</h2>
                    <h1>أسوان</h1>
                </div>
            </Grid>
            <Grid xs={6}>
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
            <Salaah name="الفجر" time="04:10" image="https://prayerinislam.com/wp-content/uploads/2016/01/All-About-Fajr-Prayer.png"/>
            <Salaah name="الظهر" time="12:20" image="https://prayerinislam.com/wp-content/uploads/2016/01/All-About-Fajr-Prayer.png"/>
            <Salaah name="العصر" time="03:00" image="https://prayerinislam.com/wp-content/uploads/2016/01/All-About-Fajr-Prayer.png"/>
            <Salaah name="المغرب" time="04:20" image="https://prayerinislam.com/wp-content/uploads/2016/01/All-About-Fajr-Prayer.png"/>
            <Salaah name="العشاء" time="07:00" image="https://prayerinislam.com/wp-content/uploads/2016/01/All-About-Fajr-Prayer.png"/>
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
            //value={age}
            label="Age"
            onChange={handleChange}
            >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
        </Stack>
        {/*== Select Governorate ==*/}
    </>
  )
}
