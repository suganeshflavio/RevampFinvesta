import React, { useState, useRef, useCallback } from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  // Checkbox,
  // Divider,
  FormControl,
  // FormControlLabel,
  FormHelperText,
  Grid,
  // Paper,
  // IconButton,
  // InputAdornment,
  InputLabel,
  OutlinedInput
  // TextField,
  // Typography,
  // useMediaQuery
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import Webcam from 'react-webcam';

// project imports
import useScriptRef from 'hooks/useScriptRef';
// import Upload from 'assets/images/Image upload-bro.svg';
// import Google from 'assets/images/icons/social-google.svg';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { Stack } from '@mui/system';
// import { IconUserPlus } from '@tabler/icons';
import { FiUserPlus } from 'react-icons/fi';
// import { Image } from '@mui/icons-material';
// import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

// ===========================|| FIREBASE - REGISTER ||=========================== //

const KycRegister = ({ ...others }) => {
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  // const matchDownSM = useMediaQuery(theme.breakpoints.down('md','sm','lg','xs','xl'));
  // const customization = useSelector((state) => state.customization);
  // const [showPassword, setShowPassword] = useState(false);
  // const [checked, setChecked] = useState(true);

  // security section
  // const [personName, setPersonName] = React.useState([]);

  // const handleChange = (event) => {
  //   if (event?.target.value) setPersonName(event?.target.value);
  //   console.log("dfghjk", personName);
  // };

  // image upload dialog section
  const [open, setOpen] = useState(false);
  // const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
    // setClicked(true)
  };

  // webcam ui
  const [clicked, setClicked] = useState(false);

  const onWebcam = () => {
    setClicked(true);
  };

  const videoConstraints = {
    width: 700,
    height: 1000,
    facingMode: 'environment'
  };

  const webcamRef = useRef(null);
  // const [url, setUrl] = useState(null);

  const capturePhoto = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
    handleClose();
    setClicked(false);
  }, [webcamRef]);

  const onUserMedia = (e) => {
    console.log(e);
    setClicked(true);
  };

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    // Trigger the file input when the button is clicked
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    // Handle the selected file here, you can upload it to a server or process it in some way
    const selectedFile = e.target.files[0];
    console.log('Selected File:', selectedFile);
    setUrl(selectedFile);
    setOpen(false);
  };

  // const [strength, setStrength] = useState(0);
  // const [level, setLevel] = useState();

  // const googleHandler = async () => {
  //   console.error('Register');
  // };

  // const handleClickShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  // const changePassword = (value) => {
  //   const temp = strengthIndicator(value);
  //   setStrength(temp);
  //   setLevel(strengthColor(temp));
  // };

  // useEffect(() => {
  //   changePassword('123456');
  // }, []);

  return (
    <>
      <Formik
        initialValues={{
          address: '',
          pincode: '',
          cityorvillage: '',
          district: '',
          state: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          address: Yup.string().max(255).required('address is required'),
          pincode: Yup.string().max(6).required('pincode is required'),
          cityorvillage: Yup.string().required('cityorvillage is required'),
          district: Yup.string().required('district is required'),
          state: Yup.string().required('state is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            if (scriptedRef.current) {
              setStatus({ success: true });
              setSubmitting(false);
            }
          } catch (err) {
            console.error(err);
            if (scriptedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <Stack direction={{ xs: 'column', xl: 'row', lg: 'row', md: 'row', sm: 'row' }}>
              <Grid item xs={12} sm={12}>
                {/* <Grid container spacing={1}>
                  <Grid item xs={12} lg={12} md={8} sm={8}>
                    <TextField
                      fullWidth
                      label="House Address*"
                      margin="normal"
                      rows={4}
                      name="fname"
                      type="text"
                      defaultValue=""
                      // sx={{ height="50px" }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6} md={4} sm={4}>
                    <TextField
                      fullWidth
                      label="Pincode*"
                      margin="normal"
                      name="mname"
                      type="text"
                      defaultValue=""
                      // sx={{ ...theme.typography.customInput }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6} md={4} sm={4}>
                    <TextField
                      fullWidth
                      label="City/Village"
                      margin="normal"
                      name="fname"
                      type="text"
                      defaultValue=""
                      // sx={{ ...theme.typography.customInput }}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={1}>

                  <Grid item xs={12} lg={6} md={4} sm={4}>
                    <TextField
                      fullWidth
                      label="District"
                      margin="normal"
                      name="mname"
                      type="text"
                      defaultValue=""
                      // sx={{ ...theme.typography.customInput }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6} md={4} sm={4}>
                    <TextField
                      fullWidth
                      label="State*"
                      margin="normal"
                      name="lname"
                      type="text"
                      defaultValue=""
                      // sx={{ ...theme.typography.customInput }}
                    />
                  </Grid>
                </Grid> */}
                {/* Address section end */}
                <Grid container spacing={1}>
                  <Grid item xs={12} lg={12} md={12} sm={12}>
                    <FormControl fullWidth error={Boolean(touched.address && errors.address)} sx={{ ...theme.typography.customInput }}>
                      <InputLabel htmlFor="outlined-adornment-email-register">House Address&#42;</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-email-register"
                        type="text"
                        value={values.address}
                        name="address"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        inputProps={{}}
                      />
                      {touched.address && errors.address && (
                        <FormHelperText error id="standard-weight-helper-text--register">
                          {errors.address}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} lg={6} md={6} sm={6}>
                    <FormControl fullWidth error={Boolean(touched.pincode && errors.pincode)} sx={{ ...theme.typography.customInput }}>
                      <InputLabel htmlFor="outlined-adornment-pincode-register">Pincode&#42;</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-pincode-register"
                        type="number"
                        value={values.pincode}
                        name="pincode"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        inputProps={{}}
                      />
                      {touched.pincode && errors.pincode && (
                        <FormHelperText error id="standard-weight-helper-text--register">
                          {errors.pincode}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} lg={6} md={6} sm={6}>
                    <FormControl
                      fullWidth
                      error={Boolean(touched.cityorvillage && errors.cityorvillage)}
                      sx={{ ...theme.typography.customInput }}
                    >
                      <InputLabel htmlFor="outlined-adornment-cityorvillage-register">City/Village&#42;</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-cityorvillage-register"
                        type="text"
                        value={values.cityorvillage}
                        name="cityorvillage"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        inputProps={{}}
                      />
                      {touched.cityorvillage && errors.cityorvillage && (
                        <FormHelperText error id="standard-weight-helper-text--register">
                          {errors.cityorvillage}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item xs={12} lg={6} md={6} sm={6}>
                    <FormControl fullWidth error={Boolean(touched.district && errors.district)} sx={{ ...theme.typography.customInput }}>
                      <InputLabel htmlFor="outlined-adornment-district-register">District&#42;</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-district-register"
                        type="text"
                        value={values.district}
                        name="district"
                        label="district"
                        onBlur={handleBlur}
                        onChange={(e) => {
                          handleChange(e);
                          changePassword(e.target.value);
                        }}
                        // endAdornment={
                        //   <InputAdornment position="end">
                        //     <IconButton
                        //       aria-label="toggle password visibility"
                        //       onClick={handleClickShowPassword}
                        //       onMouseDown={handleMouseDownPassword}
                        //       edge="end"
                        //       size="large"
                        //     >
                        //       {showPassword ? <Visibility /> : <VisibilityOff />}
                        //     </IconButton>
                        //   </InputAdornment>
                        // }
                        inputProps={{}}
                      />
                      {touched.district && errors.district && (
                        <FormHelperText error id="standard-weight-helper-text-district-register">
                          {errors.district}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} lg={6} md={6} sm={6}>
                    <FormControl fullWidth error={Boolean(touched.state && errors.state)} sx={{ ...theme.typography.customInput }}>
                      <InputLabel htmlFor="outlined-adornment-state-register">State&#42;</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-state-register"
                        type="text"
                        value={values.state}
                        name="state"
                        label="state"
                        onBlur={handleBlur}
                        onChange={(e) => {
                          handleChange(e);
                          changePassword(e.target.value);
                        }}
                        // endAdornment={
                        //   <InputAdornment position="end">
                        //     <IconButton
                        //       aria-label="toggle password visibility"
                        //       onClick={handleClickShowPassword}
                        //       onMouseDown={handleMouseDownPassword}
                        //       edge="end"
                        //       size="large"
                        //     >
                        //       {showPassword ? <Visibility /> : <VisibilityOff />}
                        //     </IconButton>
                        //   </InputAdornment>
                        // }
                        inputProps={{}}
                      />
                      {touched.state && errors.state && (
                        <FormHelperText error id="standard-weight-helper-text-state-register">
                          {errors.state}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
                {/* {strength !== 0 && (
              <FormControl fullWidth>
                <Box sx={{ mb: 2 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Box style={{ backgroundColor: level?.color }} sx={{ width: 85, height: 8, borderRadius: '7px' }} />
                    </Grid>
                    <Grid item>
                      <Typography variant="h4" fontSize="0.75rem">
                        {level?.label}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </FormControl>
            )} */}
                {/* <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} name="checked" color="secondary" />
                  }
                  label={
                    <Typography variant="h4">
                      Agree with &nbsp;
                      <Typography variant="h4" component={Link} to="#">
                        Terms & Condition.
                      </Typography>
                    </Typography>
                  }
                />
              </Grid>
            </Grid> */}
                {errors.submit && (
                  <Box sx={{ mt: 3 }}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Box>
                )}
              </Grid>
            </Stack>
            <Grid item sm={12} xs={12}>
              <Box sx={{ mt: 2 }}>
                <AnimateButton>
                  <Button
                    disableElevation
                    disabled={isSubmitting}
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
          </form>
        )}
      </Formik>
      {/* image upload Dialog start */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
        {clicked ? (
          <>
            <Webcam
              ref={webcamRef}
              audio={true}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              onUserMedia={onUserMedia}
            />
            <Grid item m={2} sx={{ display: 'flex', justifyContent: 'space-around' }}>
              <Button variant="contained" color="secondary" onClick={capturePhoto}>
                Capture
              </Button>
              <Button variant="contained" color="secondary" onClick={() => setUrl(null)}>
                Refresh
              </Button>
            </Grid>
            {/* {url && (
       <div>
         <img src={url} alt="Screenshot" />
       </div>
     )}  */}
          </>
        ) : (
          //  webcam access
          <>
            <DialogTitle id="responsive-dialog-title" sx={{ textAlign: 'center' }}>
              <FiUserPlus style={{ fontSize: '3rem' }} />
            </DialogTitle>
            <DialogContent>
              <DialogContentText sx={{ fontSize: '16px' }}>Supported formats: JPEG, JPG, PDF, Word and Max Size 10MB</DialogContentText>
            </DialogContent>
            <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button autoFocus variant="contained" color="secondary" onClick={handleButtonClick}>
                Upload
              </Button>
              <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
              <Button autoFocus variant="contained" color="secondary" onClick={onWebcam}>
                Capture
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
};

export default KycRegister;
