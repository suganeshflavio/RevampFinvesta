// import { styled } from '@mui/material/styles';
import { Avatar, Card, Grid, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';

import image from '../../assets/images/logos/boat.png'
import { Stack } from '@mui/system';



// ============================|| MATERIAL ICONS ||============================ //

const ServiceRequest = () => {

    const data = [
        {
            title: 'Bank account opening',
            body: [
                {
                    img:image,
                    name:'Axis Bank'
                }
            ]
        },
        {
            title: 'DMT Services',
            body: [
                {
                    img:image,
                    name:'YES bank DMT'
                },
                {
                    img:image,
                    name:'NSDL DMT'
                },

            ]
        },
        {
            title: 'AEPS Services',
            body: [
                {
                    img:image,
                    name:'AEPS service'
                },
            ]
        },
        {
            title: 'Foreign Remitance',
            body: [
                {
                    img:image,
                    name:'PMT Money Transfer'
                },
                {
                    img:image,
                    name:'IME Money Transfer'
                },
                
            ]
        }
    ]
    return (
        <MainCard title="Service Request" >
            <Card sx={{ overflow: 'hidden' }}>
                <Grid container xl={12} spacing={1}>
                    {data.map((item, index) => (
                        <Grid item xl={6} lg={6} sm={12} key={index}>
                            <SubCard title={item.title}>
                                <Stack direction='row' justifyContent='start' spacing={3}>
                                {item.body.map((sub,subIndex)=>(
                                   
                                    <Stack key={subIndex}  direction='column' spacing={2} justifyContent='center' alignItems='center' sx={{cursor:'pointer',textAlign:'center'}}>
                                        <Avatar sx={{bgcolor:'#dfd8e3'}}/>
                                        <Typography color='#252525' variant='h6' component='div'>{sub.name}</Typography>
                                    </Stack>
                                ))}
                                </Stack>
                            </SubCard>
                        </Grid>
                    ))}

                </Grid>
            </Card>
        </MainCard>
    );
}


export default ServiceRequest;
