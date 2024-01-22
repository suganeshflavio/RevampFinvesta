import React from 'react';
import { Stack, Grid, Button, Box } from '@mui/material';
import AnimateButton from 'ui-component/extended/AnimateButton';

const CreditForm = () => {
  return (
    <>
      <Stack direction={{ xs: 'column', xl: 'row', lg: 'row', md: 'row', sm: 'row' }}>
        <Grid item xs={12} sm={12}>
          <p>we will checking your credit score to check your eligibility to become an agent for FINvesta.</p>
          <Button variant="outlined" color="secondary" size="small">
            check
          </Button>
        </Grid>
      </Stack>
      <Grid item sm={12} xs={12}>
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
      </Grid>
    </>
  );
};

export default CreditForm;
