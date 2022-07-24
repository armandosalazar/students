import { Card, CardContent, Typography, Divider } from '@mui/material';
import React from 'react';

export default function CardSummary({ title, value, footer }) {
  return (
    <>
      <Card>
        <CardContent>
          <Typography gutterBottom color="textPrimary">
            {title}
          </Typography>
          <Divider />
          <Typography variant="h3" color="textPrimary">
            {value}
          </Typography>
          <div>{footer}</div>
        </CardContent>
      </Card>
    </>
  );
}
