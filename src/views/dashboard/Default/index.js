import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';

import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
// import TotalIncomeDarkCard from './TotalIncomeDarkCard';
// import TotalIncomeLightCard from './TotalIncomeLightCard';
// import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import ServiceCard from './ServiceCard';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SavingsIcon from '@mui/icons-material/Savings';


// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const Icons = [
    {
      id:1,
      name: 'Send Money',
      Icon: <LocalAtmIcon sx={{ fontSize: { md: '50px', xs: '30px' } }} />
    },
    {
      id:2,
      name: 'Recharge',
      Icon: <SmartphoneIcon sx={{ fontSize: { md: '50px', xs: '30px' } }} />
    },


    {
      id:3,
      name: 'Mutual Funds',
      Icon: <TrendingUpIcon sx={{ fontSize: { md: '50px', xs: '30px' } }} />
    },
    {
      id:4,
      name: 'Digi gold',
      Icon: <SavingsIcon sx={{ fontSize: { md: '50px', xs: '30px' } }} />
    },
  ]


  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} />
          </Grid>

          <Grid item lg={6} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard isLoading={isLoading} />
          </Grid>
          {/* <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeDarkCard isLoading={isLoading} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeLightCard isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid> */}
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <SubCard title="Popular Services">
          <Grid container spacing={gridSpacing}>


                  {Icons.map((item, index) => (
                    <Grid item xl={1.5} lg={2} md={3} sm={4} xs={4} key={index}> <ServiceCard item={item} isLoading={isLoading} /></Grid>
                  ))}

          </Grid>
        </SubCard>
      </Grid>



      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            {/* <TotalGrowthBarChart isLoading={isLoading} /> */}
          </Grid>
          <Grid item xs={12} md={12}>
            <PopularCard isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
