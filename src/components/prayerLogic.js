import moment from 'moment';
import axios from 'axios';

export const getTimings = async (city) => {
    const response = await axios.get(`https://api.aladhan.com/v1/timingsByCity?country=EG&city=${city}`);
    return response.data.data.timings;
};

export const calculateNextPrayer = (salaahTimings) => {
    const now = moment();
    const prayerTimes = [
        { name: "الفجر", time: moment(salaahTimings.Fajr, "HH:mm") },
        { name: "الظهر", time: moment(salaahTimings.Dhuhr, "HH:mm") },
        { name: "العصر", time: moment(salaahTimings.Asr, "HH:mm") },
        { name: "المغرب", time: moment(salaahTimings.Maghrib, "HH:mm") },
        { name: "العشاء", time: moment(salaahTimings.Isha, "HH:mm") },
    ];

    const upcomingPrayer = prayerTimes.find(prayer => prayer.time.isAfter(now)) || prayerTimes[0];
    const remainingTime = moment.utc(upcomingPrayer.time.diff(now)).format("HH:mm:ss");

    return { upcomingPrayer, remainingTime };
};