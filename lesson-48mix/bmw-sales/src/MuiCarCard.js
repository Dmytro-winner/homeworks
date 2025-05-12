import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const MuiCarCard = () => {
    return (
        <Card sx={{ maxWidth: 345, margin: '20px auto' }}>
            <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/featured/?bmw"
                alt="BMW"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    BMW Series
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This is a sample description of a BMW car using Material UI Card.
                </Typography>
            </CardContent>
        </Card>
    );
};

export default MuiCarCard;
