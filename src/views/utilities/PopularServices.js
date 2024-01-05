// import { styled } from '@mui/material/styles';
import {  Grid, TextField, Button } from '@mui/material';

import { Stack } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from 'react'
// project imports
// import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
// import goldIcon from '../../assets/images/icons/goldIcon.png'
// import fundIcon from '../../assets/images/icons/raise.png'
// import mobileIcon from '../../assets/images/icons/mobile.png'
// import moneyIcon from '../../assets/images/icons/moneyIcon.png'
// import EarningCard from 'ui-component/cards/Skeleton/EarningCard';

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
            type: 'text',
            label: 'Account Number'
        },
        {
            type: 'text',
            label: 'IFSC Code'
        },
        {
            type: 'button',
            label: 'Make Payment'
        },

    ]



    // const BannerStyle = {
    //     backgroundColor: 'red',
    //     paddingBlock: ' 0px',
    //     height: '100%',
    //     width: '50%',
    //     borderRadius: '0px',
    //     display: {
    //         xs: 'none',
    //         sm: 'block',
    //         md: 'block',
    //         lg: 'block',
    //         xl: 'block'
    //     }
    // }

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
       
        marginTop: '0%'
    }

    // const Icons = [
    //     {
    //         name: 'Send Money',
    //         Icon: <img src={moneyIcon} alt='icon' style={{ width: '40px', height: '40px' }} />
    //     },
    //     {
    //         name: 'Recharge',
    //         Icon: <img src={mobileIcon} alt='icon' style={{ width: '40px', height: '40px' }} />
    //     },


    //     {
    //         name: 'Mutual Funds',
    //         Icon: <img src={fundIcon} alt='icon' style={{ width: '40px', height: '40px' }} />
    //     },
    //     {
    //         name: 'Digi gold',
    //         Icon: <img src={goldIcon} alt='icon' style={{ width: '40px', height: '40px' }} />
    //     },
    // ]


    return (
                    <Grid container xl={12} width='100%' height='100%' justifyContent='center' alignItems='center'>
                        <Grid item xl={6} sm={8} xs={12} >
                            <SubCard title="Money Transfer" style={CardStyle}>
                                <Stack direction='column' spacing={4}>
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

                                            : item.type !== "button" ?

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
                                                <Button key={index} variant='contained' >{item.label}</Button>
                                    ))}

                                </Stack>
                            </SubCard>
                        </Grid>
                    </Grid>
                
    );
}


export default PopularServices;
