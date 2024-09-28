import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { BarChart } from '@mui/x-charts/BarChart';
import { useTheme } from '@mui/material/styles';

export default function PageViewsBarChart() {
  const theme = useTheme();
  const colorPalette = [
    '#6096ba', // Light Blue for Current Period
    '#6c757d', // Muted Gray for Previous Period
    '#b3cde0', // Light Variant for Variance
  ];

  return (
    <Card variant="outlined" sx={{ width: '100%', boxShadow: 2, borderRadius: 4, borderColor: '#dee2e6' }}>
      <CardContent>
        <Typography component="h2" variant="subtitle1" gutterBottom sx={{ fontWeight: 'medium', color: '#343a40' }}>
          Financial Metrics Overview
        </Typography>
        <Stack sx={{ justifyContent: 'space-between', mb: 1 }}>
          <Stack
            direction="row"
            sx={{
              alignContent: { xs: 'center', sm: 'flex-start' },
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography variant="h5" component="p" sx={{ color: '#495057' }}>
              Financial Performance
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ ml: 2 }}>
              Current vs Previous Period
            </Typography>
          </Stack>
          <Typography variant="caption" sx={{ color: '#6c757d' }}>
            Comparison of key financial metrics for the current and previous periods.
          </Typography>
        </Stack>
        <BarChart
          borderRadius={4}
          colors={colorPalette}
          xAxis={[
            {
              scaleType: 'band',
              categoryGapRatio: 0.4,
              data: ['Sales Revenue', 'COGS', 'Gross Margin', 'EBITDA'],
              style: { fontSize: 12, fontWeight: 'normal' },
            },
          ]}
          series={[
            {
              id: 'current-period',
              label: 'Current Period',
              data: [12726467, 9023618, 3702849, 1190106],
              stack: 'total',
              borderRadius: 6,
              barWidth: 24,
              gradient: {
                from: '#9ecae1',
                to: '#6096ba',
              },
            },
            {
              id: 'previous-period',
              label: 'Previous Period',
              data: [13745707, 10562854, 3182853, 618369],
              stack: 'total',
              borderRadius: 6,
              barWidth: 24,
              gradient: {
                from: '#b3cde0',
                to: '#6c757d',
              },
            },
            {
              id: 'variance',
              label: 'Variance',
              data: [
                12726467 - 13745707,
                9023618 - 10562854,
                3702849 - 3182853,
                1190106 - 618369,
              ],
              barWidth: 24,
              borderRadius: 6,
              color: '#b3cde0',
            },
          ]}
          barCategoryGap="15%"
          height={300}
          margin={{ left: 50, right: 50, top: 20, bottom: 50 }}
          grid={{ horizontal: true, vertical: false }}
          slotProps={{
            legend: {
              hidden: true,
              position: 'bottom', // Change position to bottom
              orientation: 'horizontal', // Set orientation to horizontal
              sx: { 
                fontSize: 10, // Smaller font size
                fontWeight: 'normal', // Lighter weight
                color: theme.palette.text.secondary, 
                mt: 2, // Margin-top to separate it from the chart
                justifyContent: 'center', // Align center
                alignItems: 'center', 
                display: 'flex', // Flex container for alignment
              },
            },
          }}
          showDataLabels
          dataLabel={{
            position: 'top',
            style: {
              fill: '#495057',
              fontSize: 10,
              fontWeight: '400',
            },
          }}
        />
      </CardContent>
    </Card>
  );
}