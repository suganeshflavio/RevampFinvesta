import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  // Dialog,
  // DialogActions,
  // DialogContent,
  // DialogContentText,
  // DialogTitle,
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
  OutlinedInput,
  Stack
  // TextField,
  // Typography,
  // useMediaQuery
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
// import Webcam from "react-webcam";

// project imports
import useScriptRef from 'hooks/useScriptRef';
// import Upload from 'assets/images/Image upload-bro.svg';
// import Google from 'assets/images/icons/social-google.svg';
import AnimateButton from 'ui-component/extended/AnimateButton';
// import { IconUserPlus } from '@tabler/icons';
// import { FiUserPlus } from 'react-icons/fi';
// import { Image } from '@mui/icons-material';
// import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

// ===========================|| FIREBASE - REGISTER ||=========================== //

const Address = ({ ...others }) => {
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
  // const [open, setOpen] = useState(false);
  // const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  //   // setClicked(true)
  // };

  // webcam ui
  // const [clicked, setClicked] = useState(false);

  // const onWebcam = () => {
  //   setClicked(true);

  // };

  // const videoConstraints = {
  //   width: 700,
  //   height:1000,
  //   facingMode: "environment"
  // };

  // const webcamRef = useRef(null);
  // const [url, setUrl] = useState(null);

  // const capturePhoto = useCallback(async () => {
  //   const imageSrc = webcamRef.current.getScreenshot();
  //   setUrl(imageSrc);
  //   handleClose()
  //   setClicked(false)
  //   console.log("dfghjkl",url);

  // }, [webcamRef]);

  // const onUserMedia = (e) => {
  //   console.log(e);
  //   setClicked(true)
  // };

  // const fileInputRef = useRef(null);

  // const handleButtonClick = () => {
  //   // Trigger the file input when the button is clicked
  //   fileInputRef.current.click();
  // };

  // const handleFileChange = (e) => {
  //   // Handle the selected file here, you can upload it to a server or process it in some way
  //   const selectedFile = (e.target.files[0]);
  //   console.log('Selected File:', selectedFile);
  //   setUrl(selectedFile)
  //   setOpen(false);

  // };

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
          fname: '',
          lname: '',
          dob: '',
          gender: '',
          fathername: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          fname: Yup.string().max(255).required('first name is required'),
          lname: Yup.string().max(255).required('last name is required'),
          dob: Yup.string().required('Dob is required'),
          gender: Yup.string().required('gender is required'),
          fathername: Yup.string().required('father name is required')
          // dob: Yup.date()
          // .nullable().required("Dob is required")
          // .test("dob", "Should be greater than 18", function (value) {
          //   return differenceInYears(value, new Date()) >= 18;
          // })
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
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values, isValid  }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <Stack direction={{ xs: 'column', xl: 'row', lg: 'row', md: 'row', sm: 'row' }}>
              <Grid item xs={12} sm={12}>
                {/* <Grid container spacing={1}>
                  <Grid item xs={12} lg={6} md={6} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name*"
                      margin="normal"
                      name="fname"
                      type="text"
                      defaultValue=""
                      // sx={{ ...theme.typography.customInput }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6} md={6} sm={6}>
                    <TextField
                      fullWidth
                      label="Middle Name"
                      margin="normal"
                      name="mname"
                      type="text"
                      defaultValue=""
                      // sx={{ ...theme.typography.customInput }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6} md={6} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name*"
                      margin="normal"
                      name="lname"
                      type="text"
                      defaultValue=""
                      // sx={{ ...theme.typography.customInput }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6} md={6} sm={6}>
                    <TextField
                      fullWidth
                      label="Date of Birth*"
                      margin="normal"
                      name="fname"
                      type="text"
                      defaultValue=""
                      // sx={{ ...theme.typography.customInput }}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item xs={12} lg={6} md={6} sm={6}>
                    <TextField
                      fullWidth
                      label="Gender*"
                      margin="normal"
                      name="mname"
                      type="text"
                      defaultValue=""
                      // sx={{ ...theme.typography.customInput }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6} md={6} sm={6}>
                    <TextField
                      fullWidth
                      label="Father's Name*"
                      margin="normal"
                      name="lname"
                      type="text"
                      defaultValue=""
                      // sx={{ ...theme.typography.customInput }}
                    />
                  </Grid>
                </Grid> */}
                {/* General section end */}
                <Grid container spacing={1}>
                  <Grid item xs={12} lg={6} md={6} sm={6}>
                    <FormControl fullWidth error={Boolean(touched.fname && errors.fname)} sx={{ ...theme.typography.customInput }}>
                      <InputLabel htmlFor="outlined-adornment-fname-register">First Name&#42;</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-fname-register"
                        type="text"
                        value={values.fname}
                        name="fname"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        inputProps={{}}
                      />
                      {touched.fname && errors.fname && (
                        <FormHelperText error id="standard-weight-helper-text--register">
                          {errors.fname}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} lg={6} md={6} sm={6}>
                    <FormControl fullWidth error={Boolean(touched.mname && errors.mname)} sx={{ ...theme.typography.customInput }}>
                      <InputLabel htmlFor="outlined-adornment-mname-register">Middle Name</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-mname-register"
                        type="text"
                        value={values.mname}
                        name="mname"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        inputProps={{}}
                      />
                      {/* {touched.mname && errors.mname && (
                <FormHelperText error id="standard-weight-helper-text--register">
                  {errors.mname}
                </FormHelperText>
              )} */}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} lg={6} md={6} sm={6}>
                    <FormControl fullWidth error={Boolean(touched.lname && errors.lname)} sx={{ ...theme.typography.customInput }}>
                      <InputLabel htmlFor="outlined-adornment-lname-register">Last Name&#42;</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-lname-register"
                        type="text"
                        value={values.lname}
                        name="lname"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        inputProps={{}}
                      />
                      {touched.lname && errors.lname && (
                        <FormHelperText error id="standard-weight-helper-text--register">
                          {errors.lname}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} lg={6} md={6} sm={6}>
                    <FormControl fullWidth error={Boolean(touched.dob && errors.dob)} sx={{ ...theme.typography.customInput }}>
                      <InputLabel htmlFor="outlined-adornment-email-register">Date of Birth&#42;</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-email-register"
                        type="text"
                        value={values.dob}
                        name="dob"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        inputProps={{}}
                      />
                      {touched.dob && errors.dob && (
                        <FormHelperText error id="standard-weight-helper-text--register">
                          {errors.dob}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item xs={12} lg={6} md={6} sm={6}>
                    <FormControl fullWidth error={Boolean(touched.gender && errors.gender)} sx={{ ...theme.typography.customInput }}>
                      <InputLabel htmlFor="outlined-adornment-gender-register">Gender&#42;</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-Gender-register"
                        type="text"
                        value={values.gender}
                        name="gender"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        inputProps={{}}
                      />
                      {touched.gender && errors.gender && (
                        <FormHelperText error id="standard-weight-helper-text--register">
                          {errors.gender}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} lg={6} md={6} sm={6}>
                    <FormControl
                      fullWidth
                      error={Boolean(touched.fathername && errors.fathername)}
                      sx={{ ...theme.typography.customInput }}
                    >
                      <InputLabel htmlFor="outlined-adornment-fathername-register">Father&apos;s Name&#42;</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-fathername-register"
                        type="name"
                        value={values.fathername}
                        name="fathername"
                        label="fathername"
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
                      {touched.fathername && errors.fathername && (
                        <FormHelperText error id="standard-weight-helper-text-fathername-register">
                          {errors.fathername}
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
              {/* <br/> */}
            </Stack>
            <Grid item sm={12} xs={12}>
              <Box sx={{ mt: 2 }}>
                <AnimateButton>
                  <Button
                    disableElevation
                    disabled={isSubmitting || !isValid}
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
    </>
  );
};

export default Address;
