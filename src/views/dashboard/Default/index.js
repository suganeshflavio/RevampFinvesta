import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
// import TotalIncomeDarkCard from './TotalIncomeDarkCard';
// import TotalIncomeLightCard from './TotalIncomeLightCard';
// import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import ServiceCard from './ServiceCard';

import { IconCash,IconDeviceMobileCharging,IconChartHistogram,IconBusinessplan } from '@tabler/icons-react';


// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const Icons=[
    {
    name:'Send Money',
    Icon:<IconCash size={30}/>
    },
    {
      name:'Recharge',
      Icon:<IconDeviceMobileCharging/>
    },
   
    {
      name:'Mutual Funds',
      Icon:<IconChartHistogram/>
    },
    {
      name:'Digi gold',
      Icon:<IconBusinessplan/>
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
        <Grid container spacing={gridSpacing} justifyContent='space-between'>
          
          
            {Icons.map((item,index)=>(
               <Grid item xl={2} lg={2} md={2} sm={4} xs={4} key={index}> <ServiceCard item={item}/></Grid>
            ))}
          
          
        </Grid>
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
