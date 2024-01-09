import {  Grid, Button ,Stack} from '@mui/material'
import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SubCard from 'ui-component/cards/SubCard';
import { useNavigate } from 'react-router';


function ProductMaster() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const Navigate=useNavigate()
    
    return (
        <SubCard title='Product Master'>
          
            <Grid container xl={12} >
                <Grid item xl={5}>
                    <FormControl sx={{ m: 2, minWidth: '100%' }} size="large">
                        <InputLabel id="demo-select-small-label">Product Name</InputLabel>
                        <Select
                            labelId="demo-select-label"
                            id="demo-select"
                            value={age}
                            label="Product Name"
                            onChange={handleChange}
                        >

                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 2, minWidth: '100%' }} size="large">
                        <InputLabel id="demo-select-small-label">Product Field</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={age}
                            label="Product Field"
                            onChange={handleChange}
                        >

                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl sx={{ m: 2, minWidth: '100%' }} size="large">
                        <InputLabel id="demo-select-label">Mandatory</InputLabel>
                        <Select
                            labelId="demo-select-label"
                            id="demo-select"
                            value={age}
                            label="Mandatory"
                            onChange={handleChange}
                        >

                            <MenuItem value={10}>Yes</MenuItem>

                            <MenuItem value={30}>No</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xl={6} height='60vh'>
                    <Stack direction='column' justifyContent='flex-end' height='100%'>
                    <Stack direction='row' justifyContent='flex-end' alignItems='flex-end' spacing={2}>
                        <Button variant='outlined' color='secondary' onClick={()=>Navigate('/Admin/AddProduct')}>Add Product</Button>
                        <Button variant='contained' color='secondary'>Submit</Button>
                    </Stack>
                    </Stack>
                </Grid>
            </Grid>

        </SubCard>
    )
}

export default ProductMaster
