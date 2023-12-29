import PropTypes from 'prop-types';

// material-ui
import { styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';

// assets


const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.white,
  color: '#252525',
  overflow: 'hidden',
  position: 'relative',
  display:'flex',
  justifyContent:'center',
  borderRadius: '8px',
  cursor:'pointer',
  aspectRatio: '1',
  '&:hover':{
    border:'2.5px solid #2bb9ed'
  }
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const ServiceCard = ({ item, isLoading }) => {



  return (
    <>
      {isLoading ? (
        <SkeletonEarningCard />
      ) :
        (
          <CardWrapper border={false} content={false}>
            <Box sx={{ width:'fit-content' ,height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}>
              <Grid container direction="column" justifyContent='space-between'>
                <Grid item>
                  <Grid container >
                    <Grid item  sx={{width:'100%',display:'flex',justifyContent:'center'}}>
                      {item.Icon}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container alignItems="center">
                    <Grid item>
                      {item.name}
                    </Grid>
                  </Grid>
                </Grid>

              </Grid>
            </Box>
          </CardWrapper>
        )
      }
    </>
  );
};

ServiceCard.propTypes = {
  isLoading: PropTypes.bool,
  item: PropTypes.any
};

export default ServiceCard;
