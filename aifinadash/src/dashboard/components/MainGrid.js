import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Copyright from '../internals/components/Copyright';
import ChartUserByCountry from './ChartUserByCountry';
import CustomizedTreeView from './CustomizedTreeView';
import CustomizedDataGrid from './CustomizedDataGrid';
import HighlightedCard from './HighlightedCard';
import PageViewsBarChart from './PageViewsBarChart';
import SessionsChart from './SessionsChart';
import StatCard from './StatCard';

const data = [
  {
    title: 'Sales Revenue',
    value: '$12,726,467',
    interval: 'Previous: $13,745,707',
    trend: 'down',
    data: [
      13000, 12500, 11800, 11500, 11100, 10800, 10500, 10000, 9800, 9500, 9200, 8700, 8500,
      8100, 7800, 7600, 7200, 6900, 6800, 6400, 6200, 6000, 5700, 5400, 5100, 4900, 4600,
      4300, 4000, 3800,
    ],
  },
  {
    title: 'Cost of Goods Sold (COGS)',
    value: '$9,023,618',
    interval: 'Previous: $10,562,854',
    trend: 'down',
    data: [
      10500, 10000, 9800, 9500, 9100, 8800, 8600, 8200, 7800, 7500, 7100, 6800, 6400,
      6200, 5900, 5600, 5400, 5100, 4800, 4500, 4300, 4000, 3700, 3500, 3200, 2900,
      2600, 2300, 2100, 1800,
    ],
  },
  {
    title: 'Profit',
    value: '$3,702,849',
    interval: 'Previous: $3,182,853',
    trend: 'up',
    data: [
      2800, 3000, 3200, 3400, 3600, 3800, 4000, 4200, 4400, 4600, 4800, 5000, 5200, 5400,
      5600, 5800, 6000, 6200, 6400, 6600, 6800, 7000, 7200, 7400, 7600, 7800, 8000,
      8200, 8400, 8600,
    ],
  },
];


export default function MainGrid() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
      Profit and loss statement
      </Typography>

      <Grid container >
        <Grid >
          <CustomizedDataGrid />
        </Grid>
      </Grid>

      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {data.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
            <StatCard {...card} />
          </Grid>
        ))}
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <HighlightedCard />
        </Grid>
        <Grid size={{ sm: 12, md: 6 }}>
          <SessionsChart />
        </Grid>
        <Grid size={{ sm: 12, md: 6 }}>
          <PageViewsBarChart />
        </Grid>
      </Grid>

    </Box>
  );
}
