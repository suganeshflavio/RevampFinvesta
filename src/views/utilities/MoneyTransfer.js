import React,{useState} from 'react'
import MainCard from 'ui-component/cards/MainCard'
import SubCard from 'ui-component/cards/SubCard'
import { Avatar, Grid, Typography, Stack, Divider, TextField, FormControl, InputAdornment, Button } from '@mui/material'
import { BsBank } from "react-icons/bs";
import { useNavigate, useParams } from 'react-router';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import PlanTable from './Components/PlanTable';

const MoneyTransfer = () => {
    const Navigate = useNavigate()
    const id = useParams()
    console.log(id.id);
    const [ServiceSelected, setServiceSelected] = React.useState('');
    const ServiceProvider = ["Airtel", "Jio", "Vodofone"]
    const [TableDisplay,setTableDisplay]=useState('none')

    const handleChange = (e) => {
        setServiceSelected(e);
        console.log("sdfgh",ServiceSelected);
    };


    if (id.id == 1) {
        return (

            <MainCard title='Money Transfer'>
                <Grid container>
                    <Grid item>
                        <SubCard onClick={() => Navigate('MoneyTransfer')}>
                            <Stack directions='column' spacing={1.5} justifyContent='center' alignItems='center' sx={{ cursor: 'pointer' }}>
                                <Avatar sx={{ backgroundColor: '#dedede', marginBottom: '30px' }}>
                                    <BsBank />
                                </Avatar>
                                <Typography fontWeight='500'>To a recipent&rsquo;s bank account</Typography>
                                <Divider variant="middle" component="div" flexItem />
                                <Typography>Pay via bank transfer</Typography>
                            </Stack>
                        </SubCard>
                    </Grid>
                </Grid>
            </MainCard>

        )
    }
    else if (id.id == 2) {
        return (
            <MainCard title='Recharge' sx={{ backgroundColor: 'whitesmoke' ,height:{md:'82vh',sm:'100%',xs:'100%'}}} >
                <Stack direction='row' >
                    <Grid container spacing={2} >
                        <Grid item xl={4} >
                            <MainCard>
                                <Stack direction='column' spacing={2}>
                                    <TextField label="Mobile Number" size='small' fullWidth />
                                    <FormControl size='small' fullWidth>
                                        <InputLabel id="demo-simple-select-label">Service Provider</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={ServiceSelected}
                                            label="Service Provider"
                                            onChange={(e)=>handleChange(e.target.value)}
                                        >
                                            {ServiceProvider.map((item, index) => (
                                                <MenuItem value={item} key={index}>{item}</MenuItem>

                                            ))}

                                        </Select>

                                    </FormControl>

                                    <TextField
                                    label="Amount"
                                    fullWidth
                                    size='small'
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment sx={{ cursor: 'pointer' }} onClick={()=>setTableDisplay('block')}>
                                                    <Typography color='secondary' fontWeight='600'>Browse Plans</Typography>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                    <Button variant='contained' color='secondary'>Proceed</Button>
                                </Stack>
                            </MainCard>
                        </Grid>


                        <Grid item xl={8} sm={12} sx={{display:TableDisplay,overflowX:'scroll'}}>
                            <SubCard title="Browse Plans" sx={{ height: '65vh' }}>
                                <PlanTable />
                            </SubCard>
                        </Grid>
                    </Grid>
                </Stack>
            </MainCard>
        )
    }
    else return 404

}

export default MoneyTransfer
