import React from 'react';

import MCard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface CardProps {
  card: {
    id: number;
    name: string;
    date: string;
    city: string;
    url: string;
  };
}

const Card = (props: CardProps) => {
  const { card } = props;
  return (
    <MCard
      sx={{ minWidth: 275 }}
      variant='outlined'
      style={{
        alignItems: 'center',
        marginTop: 20,
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {card.date}
        </Typography>
        <Typography variant='h5' component='div'>
          {card.name}
        </Typography>
      </CardContent>
    </MCard>
  );
};

export default Card;
