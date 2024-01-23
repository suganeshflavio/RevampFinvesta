import React, { useState } from 'react';
import { Stack, Grid, Button, Box, Typography } from '@mui/material';
import AnimateButton from 'ui-component/extended/AnimateButton';
import Score from 'react-score-indicator';

const CreditForm = () => {
  // const [value, setValue] = useState(300);
  const [cibilScore, setCibilScore] = useState("");
  const [validationError, setValidationError] = useState("");

  const handleCibilScoreChange = () => {
    const value = 400;

    // Validate CIBIL score - assuming a range between 300 and 900
    if (value === "" || (Number(value) >= 300 && Number(value) <= 900)) {
      setCibilScore(value);
      setValidationError("dvdv");
    } else {
      setValidationError("CIBIL score must be between 300 and 900");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if CIBIL score is valid before submitting
    if (!validationError) {
      // Your submission logic here
      setValidationError("CIBIL score submitted:", cibilScore);
    } else {
      setValidationError("Invalid CIBIL score. Please correct the error.");
    }
  };
  // const add = () => {
  //   setValue(value * 100);
  // };
  // console.log("dfvd", add);

  return (
    <>
    {/* <form onSubmit={handleSubmit}> */}
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
        <Score value={cibilScore} maxValue={900} onChange={handleCibilScoreChange} style={{lineHeight:"2em"}} borderWidth={10} gap={10} maxAngle={180} />
      </Box>
      {validationError && <Typography style={{ color: "red" }}>{validationError}</Typography>}
      {/* <Grid item sm={12} xs={12}> */}
      <Box sx={{ mt: 2 }}>
        <AnimateButton>
          <Button
            disableElevation
            // disabled={isSubmitting || !isValid}
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            color="secondary"
            // onSubmit={handleSubmit}
            onClick={handleSubmit}
          >
            Next
          </Button>
        </AnimateButton>
      </Box>
      {/* </form> */}
      {/* </Grid> */}
    </>
  );
};

export default CreditForm;
