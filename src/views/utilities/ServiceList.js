import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SavingsIcon from '@mui/icons-material/Savings';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import HotelIcon from '@mui/icons-material/Hotel';
import SubCard from 'ui-component/cards/SubCard';
import ServiceCard from './Components/Servicelist';
import { gridSpacing } from 'store/constant';

const ServiceList = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const Icons = [
    {
      id: 1,
      name: 'Send Money',
      Icon: <LocalAtmIcon sx={{ fontSize: { md: '50px', xs: '30px' } }} />
    },
    {
      id: 2,
      name: 'Recharge',
      Icon: <SmartphoneIcon sx={{ fontSize: { md: '50px', xs: '30px' } }} />
    },

    {
      id: 3,
      name: 'Mutual Funds',
      Icon: <TrendingUpIcon sx={{ fontSize: { md: '50px', xs: '30px' } }} />
    },
    {
      id: 4,
      name: 'Digi gold',
      Icon: <SavingsIcon sx={{ fontSize: { md: '50px', xs: '30px' } }} />
    },
    {
        id: 5,
        name: 'Flight Tickets',
        Icon: <AirplaneTicketIcon sx={{ fontSize: { md: '50px', xs: '30px' } }} />
      },
      {
        id: 6,
        name: 'Bus Tickets',
        Icon: <DirectionsBusIcon sx={{ fontSize: { md: '50px', xs: '30px' } }} />
      },
      {
        id: 7,
        name: 'Hotel Bookings',
        Icon: <HotelIcon sx={{ fontSize: { md: '50px', xs: '30px' } }} />
      }
  ];

  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <SubCard sx={{marginBottom:"10px", fontColor:"#673AB7"}} title="Recharge & Pay Bills on Finvesta.">
            <Grid container spacing={gridSpacing}>
              {Icons.map((item, index) => (
                <Grid item xl={2} lg={2} md={3} sm={4} xs={4} key={index}>
                  {' '}
                  <ServiceCard item={item} isLoading={isLoading} />
                </Grid>
              ))}
            </Grid>
          </SubCard>
          <SubCard title="Book & Buy on Finvesta.">
            <Grid container spacing={gridSpacing}>
              {Icons.map((item, index) => (
                <Grid item xl={2} lg={2} md={3} sm={4} xs={4} key={index}>
                  {' '}
                  <ServiceCard item={item} isLoading={isLoading} />
                </Grid>
              ))}
            </Grid>
          </SubCard>
        </Grid>
      </Grid>
    </>
  );
};

export default ServiceList;
