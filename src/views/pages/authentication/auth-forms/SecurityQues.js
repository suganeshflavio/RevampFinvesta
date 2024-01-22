import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// material-ui
// import { useTheme } from '@mui/material/styles';
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
  // FormControl,
  // FormControlLabel,
  FormHelperText,
  Grid,
  // Paper,
  // Paper,
  // IconButton,
  // InputAdornment,
  // InputLabel,
  // OutlinedInput,
  TextField
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
import { Stack } from '@mui/system';
// import { IconUserPlus } from '@tabler/icons';
// import { FiUserPlus } from 'react-icons/fi';
// import { Image } from '@mui/icons-material';
// import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

// ===========================|| FIREBASE - REGISTER ||=========================== //

const SecurityQues = ({ ...others }) => {
  // const theme = useTheme();
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

  // }, [webcamRef]);

  //     const onUserMedia = (e) => {
  //       console.log(e);
  //       setClicked(true)
  //     };

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
          email: '',
          password: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('Password is required')
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
            <Stack direction={{ xs: 'column', xl: 'row', lg: 'row', md: 'row', sm: 'row' }}>
              <Grid item xs={12} sm={12}>
                {/* identity section end */}
                <Grid item xs={12} md={8} lg={12} xl={12} sm={12}>
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

            <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-password-register">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-register"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                label="Password"
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                  changePassword(e.target.value);
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                inputProps={{}}
              />
              {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text-password-register">
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>

            {strength !== 0 && (
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
            <Grid item sm={6} xs={6}>
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
                    onClick={() => {
                      window.location.href = 'dashboard/default';
                    }}
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
    </>
  );
};

export default SecurityQues;
