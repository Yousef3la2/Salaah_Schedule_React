import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import SalaahCards from './SalaahCards';
import GovernorateSelector from './GovernorateSelector';
import { getTimings, calculateNextPrayer } from './prayerLogic';
import moment from 'moment';
import "moment/dist/locale/ar-kw";

moment.locale("ar");

export default function MainContent() {
    const [salaahTimings, setTimings] = useState({ Fajr: "", Dhuhr: "", Asr: "", Maghrib: "", Isha: "" });
    const [selectedCity, setSelectedCity] = useState("القاهرة");
    const [today, setToday] = useState("X");
    const [nextPrayer, setNextPrayer] = useState({ name: "", time: "" });
    const [timeRemaining, setTimeRemaining] = useState("");

    useEffect(() => {
        const updateTime = () => {
            setToday(moment().format("MMM Do YYYY | h:mm:ss"));
            const { upcomingPrayer, remainingTime } = calculateNextPrayer(salaahTimings);
            setNextPrayer(upcomingPrayer);
            setTimeRemaining(remainingTime);
        };

        const intervalId = setInterval(updateTime, 1000);
        return () => clearInterval(intervalId);
    }, [salaahTimings]);

    useEffect(() => {
        const fetchTimings = async () => {
            const timings = await getTimings(selectedCity);
            setTimings(timings);
        };
        fetchTimings();
    }, [selectedCity]);

    return (
        <>
            <header>
                <Grid container>
                    <Grid item xs={6}>
                        <div>
                            <h2>{today}</h2>
                            <h1>{selectedCity}</h1>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div>
                            <h2>متبقي حتي صلاة {nextPrayer.name}</h2>
                            <h1>{timeRemaining}</h1>
                        </div>
                    </Grid>
                </Grid>
            </header>

            <Divider style={{ borderColor: "white", opacity: "0.2" }} />

            <SalaahCards salaahTimings={salaahTimings} />

            <Stack direction="row" justifyContent={"center"} style={{ marginTop: 40 }}>
                <GovernorateSelector setSelectedCity={setSelectedCity} />
            </Stack>
        </>
    );
}
