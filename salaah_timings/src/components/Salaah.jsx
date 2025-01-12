import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SalaahCard({name, time, image}) {
  return (
    <div className="salaah-card">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={image}
          title={`Salaah: ${name}`}
        />
        <CardContent>
          <h2>
            {name}
          </h2>
          <Typography variant="h1" sx={{ color: 'text.secondary' }}>
              {time}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
