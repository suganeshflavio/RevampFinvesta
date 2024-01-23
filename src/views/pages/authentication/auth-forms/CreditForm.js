import React, { useState } from 'react';
import { Stack, Grid, Button, Box, Typography } from '@mui/material';
import AnimateButton from 'ui-component/extended/AnimateButton';
import Score from 'react-score-indicator';

const CreditForm = () => {
  const [value, setValue] = useState(100);

  const add = () => {
    setValue(value * 100);
  };
  console.log("dfvd", add);

  return (
    <>
      <Stack direction={{ xs: 'column', xl: 'row', lg: 'row', md: 'row', sm: 'row' }}>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={10} md={10} sm={10} xl={10}>
            <Typography variant="h5">
              We will checking your credit score to check your eligibility to become an agent for FINvesta.
            </Typography>
          </Grid>
          <Grid item xs={12} lg={2} md={2} sm={2} xl={2}>
            <Button variant="outlined" color="secondary" size="small">
              check
            </Button>
          </Grid>
        </Grid>
      </Stack>
      <Box mt={2} >
        <Score value={value} maxValue={900} style={{lineHeight:"2em"}} borderWidth={10} gap={10} maxAngle={180} />
      </Box>
      {/* <Grid item sm={12} xs={12}> */}
      <Box sx={{ mt: 2 }}>
        <AnimateButton>
          <Button
            disableElevation
            // disabled={isSubmitting}
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            color="secondary"
            // onClick={() =>{
            //   window.location.href="dashboard/default"
            // }}
          >
            Next
          </Button>
        </AnimateButton>
      </Box>
      {/* </Grid> */}
    </>
  );
};

export default CreditForm;
