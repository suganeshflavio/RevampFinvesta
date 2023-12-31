import React, { useState, useRef, useCallback } from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// material-ui
// import { useTheme } from '@mui/material/styles';
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
  // FormControl,
  // FormControlLabel,
  FormHelperText,
  Grid,
  Paper,
  // IconButton,
  // InputAdornment,
  // InputLabel,
  // OutlinedInput,
  TextField,
  // TextField,
  Typography,
  
  // useMediaQuery
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import Webcam from "react-webcam";

// project imports
import useScriptRef from 'hooks/useScriptRef';
import Upload from 'assets/images/Image upload-bro.svg';
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

const FirebaseRegister = ({ ...others }) => {
  // const theme = useTheme();
  const scriptedRef = useScriptRef();
  // const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // setClicked(true)
  };

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    // Trigger the file input when the button is clicked
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    // Handle the selected file here, you can upload it to a server or process it in some way
    const selectedFile = (e.target.files[0]);
    console.log('Selected File:', selectedFile);
    setOpen(false);

  };

// security question
  const status = [
    {
      value: 'all',
      label: 'Questions'
    },
    {
      value: 'new',
      label: 'What is your 1st school name?'
    },
    {
      value: 'unread',
      label: 'What is your pet name?'
    },
    {
      value: 'other',
      label: 'What is your mothers Hometown name?'
    },
    {
      value: 'other',
      label: 'What is your 10th percentage?'
    }
  ];
// webcam ui
  const [clicked, setClicked] = useState(false);

  const onWebcam = () => {
    setClicked(true);

  };

  const videoConstraints = {
    width: 700,
    height:1000,
    facingMode: "environment"
  };
  
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);

  const capturePhoto = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
    handleClose()
    setClicked(false)

  }, [webcamRef]);

  const onUserMedia = (e) => {
    console.log(e);
    setClicked(true)
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
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12} alignItems="center" justifyContent="center">
          <Box sx={{}}>
            <Typography variant="h4">General</Typography>
          </Box>
        </Grid
      </Grid>

      <Formik
        initialValues={{
          email: '',
          phone: '',
          otp:'',
          code:'',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          phone: Yup.string('Must be a number').min(10,'Phone number must have min 10 digit ').max(10,'Phone number must have max 10 digit').required('Phone number is required'),
          otp:Yup.string().required('Otp is required'),
          code:Yup.string().required('Code is required')
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
        {({
          errors,
          // handleBlur, handleChange,
          handleSubmit,
          isSubmitting
          //  touched, values
        }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <Stack direction="row">
              <Grid item xs={8} sm={8}>
                <Grid container spacing={matchDownSM ? 0 : 2}>
                  <Grid item xs={3} sm={4}>
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
                  <Grid item xs={3} sm={4}>
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
                  <Grid item xs={3} sm={4}>
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
                </Grid>
                <Grid container spacing={matchDownSM ? 0 : 2}>
                  <Grid item xs={3} sm={4}>
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
                  <Grid item xs={3} sm={4}>
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
                  <Grid item xs={3} sm={4}>
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
                  {/* <Grid item xs={3} sm={3}>
              <Box
      sx={{
        display: 'flex',
        justifyContent:"space-around",
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={0} sx={{bgcolor:"#AD9FD6"}}>
        sdfghjkl
      </Paper>
    </Box>
              </Grid> */}
                </Grid>
                {/* General section end */}
                <Grid container direction="column" justifyContent="center" spacing={2}>
                  <Grid item xs={12} alignItems="center" justifyContent="center">
                    <Box sx={{}}>
                      <Typography variant="h4">Address</Typography>
                    </Box>
                  </Grid>
                </Grid>

                <Grid container spacing={matchDownSM ? 0 : 2}>
                  <Grid item xs={3} sm={8}>
                    <TextField
                      fullWidth
                      label="House Address*"
                      margin="normal"
                      name="fname"
                      type="text"
                      defaultValue=""
                      // sx={{ ...theme.typography.customInput }}
                    />
                  </Grid>
                  <Grid item xs={3} sm={4}>
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
                </Grid>
                <Grid container spacing={matchDownSM ? 0 : 2}>
                  <Grid item xs={3} sm={4}>
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
                  <Grid item xs={3} sm={4}>
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
                  <Grid item xs={3} sm={4}>
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
                </Grid>
                {/* Address section end */}

                <Grid container direction="column" justifyContent="center" spacing={2}>
                  <Grid item xs={12} alignItems="center" justifyContent="center">
                    <Box sx={{}}>
                      <Typography variant="h4">Identity ID</Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Grid container spacing={matchDownSM ? 0 : 2}>
                  <Grid item xs={5} sm={6}>
                    <TextField
                      fullWidth
                      label="Aadhaar Card Number*"
                      margin="normal"
                      name="fname"
                      type="text"
                      defaultValue=""
                      // sx={{ ...theme.typography.customInput }}
                    />
                    <Button variant="outlined" color="secondary" size="small">
                      Verify
                    </Button>
                  </Grid>
                  <Grid item xs={3} sm={6}>
                    <TextField
                      fullWidth
                      label="Pan Card Number"
                      margin="normal"
                      name="mname"
                      required
                      type="text"
                      defaultValue=""
                      // sx={{ ...theme.typography.customInput }}
                    />
                    <Button variant="outlined" color="secondary" size="small">
                      Verify
                    </Button>
                  </Grid>
                </Grid>
                {/* identity section end */}
                <Grid container direction="column" justifyContent="center" spacing={2}>
                  <Grid item xs={12} alignItems="center" justifyContent="center">
                    <Box sx={{ m: 1 }}>
                      <Typography variant="h4">Select question</Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    id="outlined-select-currency-native"
                    select
                    fullWidth
                    // value={value}
                    // onChange={handleChange}
                    SelectProps={{
                      native: true
                    }}
                  >
                    {status.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                  <TextField
                    fullWidth
                    label="Answer"
                    margin="normal"
                    name="fname"
                    type="text"
                    defaultValue=""
                    // sx={{ ...theme.typography.customInput }}
                  />
                </Grid>
                {/* <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-email-register">Email Address / Username</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-register"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                inputProps={{}}
              />
              {touched.email && errors.email && (
                <FormHelperText error id="standard-weight-helper-text--register">
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>


                  inputProps={{}}
                />
                {touched.otp && errors.otp && (
                  <FormHelperText error id="standard-weight-helper-text-password-register">
                    {errors.otp}
                  </FormHelperText>
                )}
              </FormControl>
              
              <FormControl fullWidth error={Boolean(touched.email && errors.email)} >
                {/* <InputLabel htmlFor="outlined-adornment-password-register">Email</InputLabel> */}
                <TextField
                error={errors.email&&touched.email}
                id="outlined-error"
                  type='email'
                  value={values.email}
                  name="email"
                  size='small'
                  label="Email"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    handleChange(e);
                    changePassword(e.target.value);
                  }}

                  inputProps={{}}
                />
                {touched.email && errors.email && (
                  <FormHelperText error id="standard-weight-helper-text-password-register">
                    {errors.email}
                  </FormHelperText>
                )}
              </FormControl>

              <Stack direction='row'>
                <Box width={{xl:'100%',xs:'30%'}}>

                </Box>
                <Box width={{xl:'100%',xs:'70%'}} display='flex' flexDirection='row' alignItems='end' >
                  <div style={{width:'50%'}}></div>
                    <Button variant='text' size='small' sx={{width:'50%',marginBlock:'3px'}} onClick={()=>handleStateChange('email')}>Send Code</Button>
                </Box>
              </Stack>

              <FormControl fullWidth error={Boolean(touched.code && errors.code)} sx={{display:otpState.email}}>
                <TextField
                  error={errors.code&&touched.code}
                  id="outlined-error"
                  type='text'
                  value={values.code}
                  name="code"
                  size='small'
                  label="code"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    handleChange(e);
                    
                  }}

                  inputProps={{}}
                />
                {touched.code && errors.code && (
                  <FormHelperText error id="standard-weight-helper-text-password-register">
                    {errors.code}
                  </FormHelperText>
                )}
              </FormControl>

            
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
              <Grid item sm={4} xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={3} sm={3}>
                  <Grid container direction="column" spacing={2}>
                    <Box sx={{ m: 1 }}>
                      <Typography variant="h4">Upload Photo</Typography>
                    </Box>
                  </Grid>
                  <Box
                    sx={{
                      // display: 'flex',
                      // justifyContent: 'space-around',
                      cursor:"pointer",
                        width: 128,
                        // height: 128
                      // '& > :not(style)': {
                      //   m: 1,
                      // }
                    }}
                  >
                    <Paper elevation={0} sx={{ bgcolor: url ? '#ffff' : "#AD9FD6", objectFit:"cover", overflow:"hidden"}} onClick={handleClickOpen}>
                      <img id="file-input" alt="ImageUpload" src={url?url:Upload} width="100%"/>
                    </Paper>
                  </Box>
                </Grid>
              </Grid>
            </Stack>
            <Grid item sm={6} xs={6} >
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
                  >
                    Submit
                  </Button>
                </AnimateButton>
              </Box>
            </Grid>
          </form>
        )}
      </Formik>
      {/* image upload Dialog start */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
        {
        clicked ? 
        (
          <>
      <Webcam
       ref={webcamRef}
       audio={true}
       screenshotFormat="image/jpeg"
       videoConstraints={videoConstraints}
       onUserMedia={onUserMedia}
     />
     <Grid item m={2} sx={{ display: 'flex', justifyContent: "space-around" }}>
     <Button variant="contained" color='secondary' onClick={capturePhoto}>Capture</Button>
     <Button variant="contained" color='secondary' onClick={() => setUrl(null)}>Refresh</Button>
     </Grid>
     {/* {url && (
       <div>
         <img src={url} alt="Screenshot" />
       </div>
     )}  */}
     </>
     )
       :
      //  webcam access
       (
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
          <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
          <Button autoFocus variant="contained" color="secondary" onClick={onWebcam}>
            Capture
          </Button>
        </DialogActions>
        </>
        )
     }
      </Dialog>
    </>
  );
};

export default FirebaseRegister;
