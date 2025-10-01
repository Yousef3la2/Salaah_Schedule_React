import React from 'react';
import Stack from '@mui/material/Stack';
import Salaah from './Salaah';

export default function SalaahCards({ salaahTimings }) {
    const salaahData = [
        { name: "الفجر", time: salaahTimings.Fajr, image: "https://prayerinislam.com/wp-content/uploads/2016/01/All-About-Fajr-Prayer.png" },
        { name: "الظهر", time: salaahTimings.Dhuhr, image: "https://prayerinislam.com/wp-content/uploads/2016/01/All-About-Fajr-Prayer.png" },
        { name: "العصر", time: salaahTimings.Asr, image: "https://prayerinislam.com/wp-content/uploads/2016/01/All-About-Fajr-Prayer.png" },
        { name: "المغرب", time: salaahTimings.Maghrib, image: "https://prayerinislam.com/wp-content/uploads/2016/01/All-About-Fajr-Prayer.png" },
        { name: "العشاء", time: salaahTimings.Isha, image: "https://prayerinislam.com/wp-content/uploads/2016/01/All-About-Fajr-Prayer.png" },
    ];

    return (
        <div className="salaah-container">
        
            {salaahData.map((salaah, index) => (
                <Salaah key={index} name={salaah.name} time={salaah.time} image={salaah.image} />
            ))}
        
        </div>
    );
}