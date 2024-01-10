import React from 'react'
import { Grid, Button, Stack, TextField } from '@mui/material'

import SubCard from 'ui-component/cards/SubCard';

const AddProduct = () => {

    return (
        <SubCard title='Add Product'>

            <Grid container xl={12}  >
                <Grid item xl={6} md={6} xs={12}>
                    <TextField
                        size='large'
                        label='Product Name'
                        fullWidth
                        onChange={(e) => handleDataChange('Name', e.target.value, null)}
                    />
                </Grid>


                <Grid container sx={{ mt: 4 }} xl={12} justifyContent='space-between' >
                    <Grid item xl={6} md={6} xs={12}>
                        <TextField
                            size='large'
                            label='Product display name'
                            fullWidth
                            onChange={(e) => handleDataChange('Name', e.target.value, null)}
                        />

                    </Grid>
                    <Grid item xl={6} sx={{ width: { xl: 'fit-content', md: '100%' }, height: { md: '20vh', xl: '30vh', xs: '10vh' } }} >
                    <Stack direction='column' justifyContent='flex-end' height='100%' >
                        <Stack direction='row' justifyContent='flex-end' alignItems='flex-end' spacing={2} >
                            <Button variant='contained' color='secondary' >Submit</Button>
                        </Stack>
                    </Stack>
                </Grid>

                </Grid>



                
            </Grid>

        </SubCard>
    )
}

export default AddProduct
