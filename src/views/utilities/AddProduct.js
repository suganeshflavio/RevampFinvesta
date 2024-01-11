import React, { useState, useEffect, useRef } from 'react';
import { Grid, Button, Stack, TextField, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import SubCard from 'ui-component/cards/SubCard';
import IconButton from '@mui/material/IconButton';
import { IconEye, IconPencil, IconTrash } from '@tabler/icons';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

const top100Films = [
  { label: 'Name', type: 'Text' },
  { label: 'Email', type: 'email' },
  { label: 'Address', type: 'Text' },
  { label: 'Aadhar No', type: 'Text' },
  { label: 'Pan No', type: 'text' },
  { label: "Phone Number", type: 'text' },
  { label: 'Age', type: 'text' },
]

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height: '80%',
  borderRadius: '20px',
  bgcolor: 'whitesmoke',
  border: 'none',
  boxShadow: 24,
  p: 4,
};

function createData(name, type, required, icon) {
  return { name, type, required, icon };
}



const AddProduct = () => {




  const [open, setOpen] = useState(false);
  const [post, setPost] = useState([])
  const [TableRows, setTableRows] = useState([])
  const [Data, setData] = useState({
    field: '',
    type: '',
    required: ''
  })
  const dataref = useRef()
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //   edit Modal
  const [editOpen, setEditOpen] = useState(false)
  const handleClickOpen = () => {
    setEditOpen(true);
  };
  const handleviewClose = () => {
    setEditOpen(false);
  };

  const [PostData, setPostData] = useState({
    Name: '',
    display_name: '',
    fields: ''
  })

  const handleDataChange = (field, value) => {
    if (field === 'Name') {
      setPostData({ ...PostData, Name: value })
    }
    else if (field === 'displayName') {
      setPostData({ ...PostData, display_name: value })
    }
  }

  function createTableData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const editrows = [
    createTableData('Text', 'email', 'true', 24, 4.0),
    createTableData('Number', 'number', 'true', 37, 4.3),
    createTableData('Date', 'date', 'false', 24, 6.0),
    createTableData('Email', 'email', 'true', 67, 4.3),
    createTableData('Age', 'number', 'false', 3.9,),
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'productName', headerName: 'Product name', width: 230 },
    { field: 'displayName', headerName: 'Display name', width: 230 },
    {
      field: 'edit',
      headerName: '',
      type: 'number',
      width: 30,
      renderCell: () => (
        <IconButton
          aria-label="edit"
          onClick={handleClickOpen}
          color="info"
        > <IconPencil />
        </IconButton>
      )
    },
    {
      field: 'view',
      headerName: 'Action',
      type: 'number',
      width: 55,
      renderCell: () => (
        <IconButton
          aria-label="view"
          // {/* onClick={() => handleDelete(params.row.id)} */}
          color="success"
        >  <IconEye />
        </IconButton>
      )
    },
    {
      field: 'delete',
      headerName: '',
      type: 'number',
      width: 30,
      renderCell: () => (
        <IconButton
          aria-label="delete"
          onClick={(params) => handleDelete(params.row.id)}
          color='error'
        >   <IconTrash />
        </IconButton>
      )
    },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`
    // }
  ];

  const rows = [
    { id: 1, productName: 'Snow', displayName: 'Jon', },
    { id: 2, productName: 'Lannister', displayName: 'Cersei', },
    { id: 3, productName: 'Lannister', displayName: 'Jaime', },
    { id: 4, productName: 'Stark', displayName: 'Arya', },
    { id: 5, productName: 'Targaryen', displayName: 'Daenerys', },
    { id: 6, productName: 'Melisandre', displayName: "Stark", },
    { id: 7, productName: 'Clifford', displayName: 'Ferrara', },
    { id: 8, productName: 'Frances', displayName: 'Rossini', },
    { id: 9, productName: 'Roxie', displayName: 'Harvey', }
  ];

  const handleChange = (type, value) => {
    if (type === 'field') {
      console.log(value);
      setData({ ...Data, field: value.label, type: value.type })
      console.log(Data);
    }
    else {
      console.log(value);

      setData({ ...Data, required: value })
      console.log(Data);

    }
  }

  const deleteAddedData = (index) => {
    console.log(index);


    const updatedPost = [...post.slice(0, index), ...post.slice(index + 1)]
    const updatedTable = [...TableRows.slice(0, index), ...TableRows.slice(index + 1)];


    setPost(updatedPost)
    setTableRows(updatedTable)
    setPostData({ ...PostData, fields: post })
    console.log(PostData);
  }

  const handleAddData = (e) => {
    e.preventDefault()
    const updataedData = [...post, Data]

    setTableRows([...TableRows, createData(Data.field, Data.type, Data.required, 'x')])
    console.log(TableRows);

    setData({ ...Data, field: '', type: '', required: '' })
    dataref.current.value = null

    setPost(updataedData)

    console.log(post);
  }

  useEffect(() => {

    setPostData({ ...PostData, fields: post })
  }, [post])


  return (
    <SubCard title="Add Product">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h2">
            Add Fields
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Grid container xl={12} mt={2} justifyContent='space-between'>
            <Grid item xl={4} md={12} xs={12}>
              <Autocomplete
                value={Data.field}
                ref={dataref}
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                renderInput={(params) => <TextField {...params} label="Field" />}
                fullWidth
                onChange={(event, newValue) => {
                  handleChange('field', newValue);
                }} />
              <FormControl sx={{ mt: 2, minWidth: '100%' }} size="large">
                <InputLabel id="demo-select-label">Mandatory</InputLabel>
                <Select
                  value={Data.required}
                  ref={dataref}
                  labelId="demo-select-label"
                  id="demo-select"
                  label="Mandatory"
                  onChange={(e) => handleChange("mandatory", e.target.value)}
                >

                  <MenuItem value={true}>Yes</MenuItem>

                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
              <Button variant='contained' color='secondary' fullWidth sx={{ mt: 2 }} onClick={handleAddData}>Add</Button>
            </Grid>
            <Grid item xl={6} md={12} xs={12} sx={{ mt: { xl: 0, xs: 1 } }}>
              <TableContainer component={Paper} sx={{height:400,overflowY:'scroll'}}>
                <Table sx={{ minWidth: 600}} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Field</TableCell>
                      <TableCell align="right">Type</TableCell>
                      <TableCell align="right">Required</TableCell>
                      <TableCell align="right">Delete</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {TableRows.map((row, index) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.type}</TableCell>
                        <TableCell align="right">{row.required === true ? 'true' : 'false'}</TableCell>
                        <TableCell align="right" onClick={() => deleteAddedData(index)} sx={{ color: 'red' }}>{<IconTrash />}</TableCell>

                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Box>
      </Modal>

      <Grid container xl={12}>
        <Grid item xl={6} md={6} xs={12}>
          <TextField size="large" label="Product Name" fullWidth onChange={(e) => handleDataChange('Name', e.target.value, null)} />
        </Grid>

        <Grid container sx={{ mt: 4 }} xl={12} justifyContent="space-between">
          <Grid item xl={6} md={6} xs={12}>
            <TextField
              size="large"
              label="Product display name"
              fullWidth
              onChange={(e) => handleDataChange('displayName', e.target.value, null)}
            />
            <Stack direction='row' justifyContent='flex-end' width='100%'>
              <Button sx={{ width: 'fit-content' }} onClick={handleOpen}>Add fields</Button>
            </Stack>
          </Grid>
          <Grid item xl={6} sx={{ width: { xl: 'fit-content', md: '100%' }, height: { md: '5vh', xl: '10vh', xs: '10vh' } }}>
            <Stack direction="column" justifyContent="flex-end" height="100%">
              <Stack direction="row" justifyContent="flex-end" alignItems="flex-end" spacing={2}>
                <Button variant="contained" color="secondary" onClick={() => console.log(PostData)}>
                  Submit
                </Button>
              </Stack>
            </Stack>

          </Grid>
        </Grid>
        {/* Product list start */}
        <Typography variant="h4" m={2}>Product List</Typography>
        <Grid item style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 }
              }
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </Grid>
        {/* Product list end */}
      </Grid>
      {/* // dialog start */}
      {/* <BootstrapDialog
    onClose={handleviewClose}
    aria-labelledby="customized-dialog-title"
    open={open}
  > */}
      <Dialog open={editOpen} onClose={handleviewClose}>

        <DialogTitle variant='h3' sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Product title (Product display name)
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleviewClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Stack direction='row' justifyContent='flex-end' width='100%'>
            <Button sx={{ width: 'fit-content' }} onClick={handleOpen}>Add fields</Button>
          </Stack>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Field Name</TableCell>
                  <TableCell align="right">Type</TableCell>
                  <TableCell align="right">Required</TableCell>
                  <TableCell align="right">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {editrows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right" sx={{ color: '#D84646' }}>{<IconTrash />}</TableCell>
                    {/* <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleviewClose}>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
      {/* </BootstrapDialog> */}
      {/* //   Dialog end */}
    </SubCard>
  );
};

export default AddProduct;
