import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

export function renderAvatar(params) {
  if (params.value == null) {
    return '';
  }

  return (
    <Avatar
      sx={{
        backgroundColor: params.value.color,
        width: '24px',
        height: '24px',
        fontSize: '0.85rem',
      }}
    >
      {params.value.name.toUpperCase().substring(0, 1)}
    </Avatar>
  );
}

export const columns = [
  { field: 'category', headerName: 'Category', flex: 1.5, minWidth: 200 },
  { field: 'actuals', headerName: 'Actuals', flex: 1, minWidth: 150, align: 'right' },
  { field: 'budget', headerName: 'Budget', flex: 1, minWidth: 150, align: 'right' },
  { field: 'variance', headerName: 'Variance', flex: 1, minWidth: 150, align: 'right' },
  { field: 'previous_period', headerName: 'Previous Period', flex: 1, minWidth: 150, align: 'right' },
  { field: 'variance_previous', headerName: 'Variance with Previous Period', flex: 1, minWidth: 150, align: 'right' },
  { field: 'variance_percentage', headerName: 'Variance %', flex: 1, minWidth: 100, align: 'right' },
];

export const rows = [
  {
    id: 1,
    category: 'Sales Revenue',
    actuals: '$12,726,467.00',
    budget: '12,980,996.34 €',
    variance: '-',
    previous_period: '$13,745,707.00',
    variance_previous: '-1,019,240.00 $',
    variance_percentage: '-7%',
  },
  {
    id: 2,
    category: 'Cost of Goods Sold',
    actuals: '$9,023,618.08',
    budget: '9,384,562.80 €',
    variance: '-',
    previous_period: '$10,562,853.52',
    variance_previous: '-1,539,235.44 $',
    variance_percentage: '-15%',
  },
  {
    id: 3,
    category: 'Gross Margin',
    actuals: '$3,702,848.92',
    budget: '3,596,433.54 $',
    variance: '-',
    previous_period: '$3,182,853.48',
    variance_previous: '519,995.44 $',
    variance_percentage: '16%',
  },
  {
    id: 4,
    category: 'Personnel',
    actuals: '$938,597.00',
    budget: '-',
    variance: '-',
    previous_period: '$991,135.00',
    variance_previous: '-52,538.00 $',
    variance_percentage: '-5%',
  },
  {
    id: 5,
    category: 'Facility',
    actuals: '$783,888.00',
    budget: '-',
    variance: '-',
    previous_period: '$778,137.00',
    variance_previous: '5,751.00 $',
    variance_percentage: '1%',
  },
  {
    id: 6,
    category: 'Administration',
    actuals: '$790,258.00',
    budget: '-',
    variance: '-',
    previous_period: '$795,212.00',
    variance_previous: '-4,954.00 $',
    variance_percentage: '-1%',
  },
  {
    id: 7,
    category: 'EBITDA',
    actuals: '$1,190,105.92',
    budget: '-',
    variance: '-',
    previous_period: '$618,369.48',
    variance_previous: '571,736.44 $',
    variance_percentage: '92%',
  },
  {
    id: 8,
    category: 'Financial Income',
    actuals: '$1,229,651.00',
    budget: '-',
    variance: '-',
    previous_period: '$1,222,608.00',
    variance_previous: '7,043.00 $',
    variance_percentage: '1%',
  },
  {
    id: 9,
    category: 'Financial Cost',
    actuals: '$1,206,806.00',
    budget: '-',
    variance: '-',
    previous_period: '$1,223,814.00',
    variance_previous: '-17,008.00 $',
    variance_percentage: '-1%',
  },
  {
    id: 10,
    category: 'Net Result',
    actuals: '$1,212,950.92',
    budget: '-',
    variance: '-',
    previous_period: '$617,163.48',
    variance_previous: '595,787.44 $',
    variance_percentage: '97%',
  },
];
