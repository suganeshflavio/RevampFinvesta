import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Grid } from '@mui/material'
import Swal from 'sweetalert2';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { IconTrash } from '@tabler/icons-react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import SubCard from 'ui-component/cards/SubCard';

const DataPoints = () => {


    const [Selected, setSelected] = useState()


    const [Data, setData] = useState({
        Name: '',
        Displayname: '',
        type: '',
        Regex: '',
        minLength: '',
        maxLength: '',
        minValue: '',
        maxValue: '',
        options: [
            {
                Displayname: '',
                type: '',
            }
        ]
    })

    console.log(Data);

    const dataType = [
        {
            type: 'Text',
            fields: [
                [{
                    id: 'Regex',
                    name: "Regex",
                    type: "text"
                },
                {
                    id: 'minLength',
                    name: "Min Length",
                    type: "number"
                },
                {
                    id: 'maxLength',
                    name: "Max Length",
                    type: "number"
                },]

            ]
        },
        {
            type: 'Number',
            fields: [
                [{
                    id: 'Regex',
                    name: "Regex",
                    type: "text"
                },
                {
                    id: 'minValue',
                    name: "Min Value",
                    type: "number"
                },
                {
                    id: 'maxValue',
                    name: "Max Value",
                    type: "number"
                },]

            ]
        },
        {
            type: 'Yes/No',
            fields: null
        },
        {
            type: 'Option',
            fields: [
                [{
                    id: 'optionDisplayName',
                    name: "Option display name",
                    type: "text"
                },
                {
                    id: 'optionValue',
                    name: "value",
                    type: "text"
                },
                {
                    name: "+",
                    type: "button"
                },]


            ]
        },
        {
            type: 'Select List',
            fields: [
                [{
                    id: 'ListName',
                    name: "Option display name",
                    type: "text"
                },
                {
                    id: 'List Value',
                    name: "value",
                    type: "text"
                },
                {
                    name: "+",
                    type: "button"
                },]


            ]
        },
        {
            type: 'Documents',
            fields: [
                [{
                    id: 'type',
                    name: "Document type",
                    type: "text"
                },
                {
                    id: 'maxSize',
                    name: "Min Size",
                    type: "text"
                },
                {
                    id: 'minSize',
                    name: "Max Size",
                    type: "text"
                },

                
            
            ]


            ]
        },

        {
            type: 'Media(Image/Video/Audio)',
            fields: [
                [{
                    id: 'type',
                    name: "Document type",
                    type: "text"
                },
                {
                    id: 'maxSize',
                    name: "Min Size",
                    type: "text"
                },
                {
                    id: 'minSize',
                    name: "Max Size",
                    type: "text"
                },

                
            
            ]


            ]
        },
    ]


    const handleAdd = () => {
        const obj = [
            {
                id: 'optionDisplayName',
                name: "Option display name",
                type: "text"
            },
            {
                id: 'optionValue',
                name: "value",
                type: "text"
            },
            {
                name: "+",
                type: "button"
            },

        ]
        const dataField = {
            Displayname: '',
            type: '',
        }
        console.log(Selected);

        setSelected([...Selected, obj])

        setData({
            ...Data,
            options: [...Data.options, dataField],
        });
        console.log("Options" + Selected);
        console.log(Data);
    }

    // // delete
    const handleDelete = (index) => {
        let data = [...Selected];
        
        data.splice(index, 1);
        setSelected(data)
        console.log(data);

    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        Swal.fire({
            title: "Field added!",
            icon: "success",
            timer:2000,
            backdrop:false,
            background:'#EDE7F6',
            showConfirmButton:false
          });
    }


    const handleChange = (event) => {
        setSelected(dataType[(event.target.value)].fields);
    };
    console.log(Selected);

    const handleDataChange = (id, data, index) => {
        console.log(index, +" " + id);
        if (id === "Name") {
            setData({ ...Data, Name: data })
        }
        if (id === "Displayname") {
            setData({ ...Data, Displayname: data })
        }
        if (id === "type") {
            setData({ ...Data, type: dataType[data].type })
        }
        if (id === "Regex") {
            setData({ ...Data, Regex: data })
        }
        if (id === "minLength") {
            setData({ ...Data, minLength: data })
        }
        if (id === "maxLength") {
            setData({ ...Data, maxLength: data })
        }
        if (id === "minValue") {
            setData({ ...Data, minValue: data })
        }
        if (id === "maxValue") {
            setData({ ...Data, maxValue: data })
        }
        if (id === "optionDisplayName" && index !== null) {
            console.log(index);
            setData((prevData) => {
                const updatedOptions = [...prevData.options];
                updatedOptions[index] = { ...updatedOptions[index], Displayname: data };
                return { ...prevData, options: updatedOptions };
            });
        }
        if (id === "optionValue" && index !== null) {
            console.log(index);
            setData((prevData) => {
                const updatedOptions = [...prevData.options];
                updatedOptions[index] = { ...updatedOptions[index], type: data };
                return { ...prevData, options: updatedOptions };
            });
        }
        // console.log(Data);
    }
    return (
        <form onSubmit={handleSubmit}>
        <SubCard title='Add data point'>

            <Grid container sx={{ mt: 1 }} xl={12} justifyContent='space-between'>
                <Grid item xl={6} md={6} xs={12}>
                    <TextField
                        size='large'
                        label='Name'
                        fullWidth
                        onChange={(e) => handleDataChange('Name', e.target.value, null)}
                    />
                </Grid>
                
            </Grid>
            <Grid container sx={{ mt: 3 }} xl={12}>
                <Grid item xl={6} md={6} xs={12}>
                    <TextField
                        size='large'
                        label='Display Name'
                        fullWidth
                        onChange={(e) => handleDataChange('Displayname', e.target.value, null)}

                    />
                </Grid>
            </Grid>

            <Grid container sx={{ mt: 3 }} >
                <Grid item xl={4} md={6} xs={12}>
                    <FormControl fullWidth size='large'>
                        <InputLabel id="demo-select-small-label">Type</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            // value=""
                            label="Age"
                            onChange={
                                (e) => {
                                    handleDataChange('type', e.target.value, null);
                                    handleChange(e)
                                }}
                        >
                            {dataType.map((item, index) => (

                                <MenuItem key={index} value={index}>{item.type}</MenuItem>

                            ))}

                        </Select>
                    </FormControl>
                </Grid>

            </Grid>
            <FormControl sx={{mt:3}}>
                <FormLabel id="demo-radio-buttons-group-label">Unique</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="True"
                    name="radio-buttons-group"
                    row
                >
                    <FormControlLabel value="True" control={<Radio />} label="True" />
                    <FormControlLabel value="False" control={<Radio />} label="False" />
                </RadioGroup>
            </FormControl>
            <div style={{ width: '100%' }}>
                {Array.isArray(Selected) && Selected.map((subFields, subIndex) => (
                    <Grid container justifyContent='space-between' xl={12} sx={{ mt: 3 }} key={subIndex}>
                        {subFields.map((subItem, OptionIndex) => (
                            <Grid item xl={3} key={OptionIndex}>
                                <TextField
                                    key={subItem.id}
                                    size='large'
                                    label={subItem.name || ''}
                                    fullWidth
                                    sx={{ display: subItem.type === "button" ? 'none' : 'block' }}
                                    onChange={(e) => handleDataChange(subItem.id, e.target.value, subIndex, OptionIndex)}
                                />

                                <Button onClick={subIndex == Selected.length - 1 ? handleAdd : () => handleDelete(subIndex)} size='small' variant='outlined' sx={{ display: subItem.type !== "button" ? 'none' : 'block' }}
                                >{subIndex == Selected.length - 1 ? subItem.name : <IconTrash />}</Button>

                            </Grid>
                        ))}

                    </Grid>
                ))}
            </div>

            <Grid container xl={12} justifyContent='flex-end' sx={{mt:3}}>
                <Grid item>
                    <Button color='secondary' variant='contained' type='submit'>Submit</Button>
                </Grid>
            </Grid>


        </SubCard>
        </form>
    )
}

export default DataPoints
