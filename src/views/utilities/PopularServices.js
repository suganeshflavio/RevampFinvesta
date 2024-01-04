// import { styled } from '@mui/material/styles';
import { Card, Grid, Typography, TextField, Button } from '@mui/material';

import { Stack } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from 'react'
// project imports
// import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import goldIcon from '../../assets/images/icons/goldIcon.png'
import fundIcon from '../../assets/images/icons/fund.png'
import mobileIcon from '../../assets/images/icons/mobile.png'
import moneyIcon from '../../assets/images/icons/moneyIcon.png'
// import EarningCard from 'ui-component/cards/Skeleton/EarningCard';
import MainCard from 'ui-component/cards/MainCard';

// ============================|| MATERIAL ICONS ||============================ //

const PopularServices = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const fields = [
        {
            type: 'select',
            label: 'Benifice Bank',
            data: ['Axis Bank', 'HDFC Bank', 'SBI Bank']
        },
        {
            type: 'text',
            label: 'Account Holder Name'
        },
        {
            type: 'number',
            label: 'Account Number'
        },
        {
            type: 'text',
            label: 'IFSC Code'
        },
        {
            type: 'button',
            label: 'Save'
        },

    ]


    const BannerStyle = {
        background: '#264180',
        paddingBlock: '30px',
        paddingBottom: '60px',
        borderRadius:'0px',
        display: {
            xs: 'none',
            sm: 'block',
            md: 'block',
            lg: 'block',
            xl: 'block'
        }
    }

    // const itemStyle={
    //     backgroundColor:'#fff',
    //     padding:'5px',
    //     borderRadius:'5px',
    //     width:'100px',
    // }

    const CardStyle = {
        WebkitBoxShadow: "3px 4px 31px - 11px rgba(0, 0, 0, 0.75)",
        MozBoxShadow: "3px 4px 31px - 11px rgba(0, 0, 0, 0.75)",
        boxShadow: "3px 4px 31px - 11px rgba(0, 0, 0, 0.75)",
        backgroundColor: '#fff',
        zIndex: 2,
        width: '100%',
        margin: '15px',
        marginTop: '-80px'
    }

    const Icons = [
        {
            name: 'Send Money',
            Icon: <img src={moneyIcon} alt='icon' style={{ width: '40px', height: '40px' }} />
        },
        {
            name: 'Recharge',
            Icon: <img src={mobileIcon} alt='icon' style={{ width: '40px', height: '40px' }} />
        },


        {
            name: 'Mutual Funds',
            Icon: <img src={fundIcon} alt='icon' style={{ width: '40px', height: '40px' }} />
        },
        {
            name: 'Digi gold',
            Icon: <img src={goldIcon} alt='icon' style={{ width: '40px', height: '40px' }} />
        },
    ]


    return (
        <Card sx={{backgroundColor:'#dfe6f7',padding:'20px',height:'100vh'}}>
        <Card sx={{ backgroundColor: '#fff', height: '95vh',borderRadius:'20px' }}>
            <MainCard sx={BannerStyle}>
           
                {/* edit */}
                <Grid container xl={12}>
                    {Icons.map((item, index) => (
                        <Grid item key={index} xl={2} lg={3} md={3} sm={3} xs={4} >
                       
                            <Stack justifyContent='center' alignItems='center'>
                                <span style={{ color: '#fff' }}>{item.Icon}</span>
                                <Typography color='#fff'>{item.name}</Typography>
                            </Stack>
                           
                        </Grid>
                    ))}

                </Grid>
            </MainCard>
                <Grid container  xl={12} width='100%' justifyContent='center'>
                    <Grid item xl={4} margin='30px'>
                        <SubCard title="Money Transfer" style={CardStyle} bo>
                            <Stack direction='column' spacing={3}>
                                {fields.map((item, index) => (
                                    item.type === 'select' ?
                                        <FormControl fullWidth key={index} sx={{ m: 1, minWidth: 120 }} size="small">
                                            <InputLabel id="demo-select-small-label">{item.label}</InputLabel>
                                            <Select
                                                labelId="demo-select-small-label"
                                                id="demo-select-small"
                                                value={age}
                                                label={item.label}

                                                onChange={handleChange}
                                            >
                                                {item.data.map((sub, subIndex) => (
                                                    <MenuItem key={subIndex} value={sub}>{sub}</MenuItem>
                                                ))}


                                            </Select>
                                        </FormControl>

                                        :item.type!=="button"?

                                        <TextField

                                            key={index}
                                            id="outlined-error"
                                            type={item.type}
                                            label={item.label}
                                            size='small'
                                            name="phone"
                                            inputProps={{}}

                                        />
                                        :
                                        <Button variant='contained' >{item.label}</Button>
                                ))}

                            </Stack>
                        </SubCard>
                    </Grid>
                </Grid>
        </Card>
        </Card>
    );
}


export default PopularServices;
