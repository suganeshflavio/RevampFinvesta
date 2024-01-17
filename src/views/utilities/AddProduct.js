import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Grid, Button, Stack, TextField, Typography } from '@mui/material';
import { DataGrid, GridCellModes } from '@mui/x-data-grid';
import SubCard from 'ui-component/cards/SubCard';
import IconButton from '@mui/material/IconButton';
import { IconEye, IconPencil, IconTrash } from '@tabler/icons';
import Box from '@mui/material/Box';

import FieldModal from './Components/AddProduct/FieldModal';
import EditModal from './Components/AddProduct/EditModal';

function createData(name, type, required, icon) {
  return { name, type, required, icon };
}

const AddProduct = () => {
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState([]);
  const [TableRows, setTableRows] = useState([]);
  const [selectedCellParams, setSelectedCellParams] = useState(null);
  const [cellModesModel, setCellModesModel] = useState({});
  const [Data, setData] = useState({
    id: '',
    field: '',
    type: '',
    required: ''
  });
  const dataref = useRef();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //   edit Modal
  const [editOpen, setEditOpen] = useState(false);
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
  });

  const handleCellEditStop = React.useCallback((params, event) => {
    event.defaultMuiPrevented = true;
  }, []);

  const handleDataChange = (field, value) => {
    if (field === 'Name') {
      setPostData({ ...PostData, Name: value });
    } else if (field === 'displayName') {
      setPostData({ ...PostData, display_name: value });
    }
  };

  const cellMode = useMemo(() => {
    if (!selectedCellParams) {
      return 'view';
    }
    const { id, field } = selectedCellParams;
    return cellModesModel[id]?.[field]?.mode || 'view';
  }, [cellModesModel, selectedCellParams]);

  const handleCellKeyDown = React.useCallback(
    (params, event) => {
      if (cellMode === 'edit') {
        // Prevents calling event.preventDefault() if Tab is pressed on a cell in edit mode
        event.defaultMuiPrevented = true;
      }
    },
    [cellMode]
  );

  const handleClickedit = () => {
    if (!selectedCellParams) {
      return;
    }
    const { id, field } = selectedCellParams;
    if (cellMode === 'edit') {
      setCellModesModel({
        ...cellModesModel,
        [id]: { ...cellModesModel[id], [field]: { mode: GridCellModes.View } }
      });
    } else {
      setCellModesModel({
        ...cellModesModel,
        [id]: { ...cellModesModel[id], [field]: { mode: GridCellModes.Edit } }
      });
    }
  };

  const handleMouseDown = (event) => {
    // Keep the focus in the cell
    event.preventDefault();
  };

  function createTableData(name, calories, fat) {
    return { name, calories, fat };
  }

  const editrows = [
    createTableData('Text', 'email', ['false', 'true']),
    createTableData('Number', 'number', ['false', 'true']),
    createTableData('Date', 'date', ['false', 'true']),
    createTableData('Email', 'email', ['false', 'true']),
    createTableData('Age', 'number', ['false', 'true'])
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'productName', headerName: 'Product name', width: 230 },
    { field: 'displayName', headerName: 'Display name', width: 230 },
    {
      field: 'edit',
      headerName: '',
      type: 'number',
      editable: 'false',
      width: 30,
      renderCell: () => (
        <IconButton
          aria-label="edit"
          // onClick={handleClickedit}
          color="info"
        >
          {' '}
          <IconPencil />
        </IconButton>
      )
    },
    {
      field: 'view',
      headerName: 'Action',
      type: 'number',
      width: 55,
      renderCell: () => (
        <IconButton aria-label="view" onClick={handleClickOpen} color="success">
          {' '}
          <IconEye />
        </IconButton>
      )
    },
    {
      field: 'delete',
      headerName: '',
      type: 'number',
      width: 30,
      renderCell: () => (
        <IconButton aria-label="delete" onClick={(params) => handleDelete(params.row.id)} color="error">
          {' '}
          <IconTrash />
        </IconButton>
      )
    }
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
    { id: 1, productName: 'Snow', displayName: 'Jon' },
    { id: 2, productName: 'Lannister', displayName: 'Cersei' },
    { id: 3, productName: 'Lannister', displayName: 'Jaime' },
    { id: 4, productName: 'Stark', displayName: 'Arya' },
    { id: 5, productName: 'Targaryen', displayName: 'Daenerys' },
    { id: 6, productName: 'Melisandre', displayName: 'Stark' },
    { id: 7, productName: 'Clifford', displayName: 'Ferrara' },
    { id: 8, productName: 'Frances', displayName: 'Rossini' },
    { id: 9, productName: 'Roxie', displayName: 'Harvey' }
  ];

  const handleChange = (type, value) => {
    if (type === 'field') {
      console.log(value);
      setData({ ...Data, field: value.label, type: value.type, id: value.id });
      console.log(Data);
    } else {
      console.log(value);

      setData({ ...Data, required: value });
      console.log(Data);
    }
  };

  const deleteAddedData = (index) => {
    console.log(index);

    const updatedPost = [...post.slice(0, index), ...post.slice(index + 1)];
    const updatedTable = [...TableRows.slice(0, index), ...TableRows.slice(index + 1)];

    setPost(updatedPost);
    setTableRows(updatedTable);
    setPostData({ ...PostData, fields: post });
    console.log(PostData);
  };

  const handleCellFocus = useCallback((event) => {
    const row = event.currentTarget.parentElement;
    const id = row.dataset.id;
    const field = event.currentTarget.dataset.field;
    setSelectedCellParams({ id, field });
  }, []);

  const handleAddData = (e) => {
    e.preventDefault();
    const updataedData = [...post, Data];

    setTableRows([...TableRows, createData(Data.field, Data.type, Data.required, 'x')]);
    console.log(TableRows);

    setData({ ...Data, field: '', type: '', required: '' });
    dataref.current.value = null;

    setPost(updataedData);

    console.log(post);
  };

  useEffect(() => {
    setPostData({ ...PostData, fields: post });
  }, [PostData, post]);

  return (
    <SubCard title="Add Product">
      {/* Add field modal */}

      <FieldModal
        open={open}
        handleChange={handleChange}
        deleteAddedData={deleteAddedData}
        handleAddData={handleAddData}
        handleClose={handleClose}
        Data={Data}
        setData={setData}
        dataref={dataref}
        TableRows={TableRows}
      />

      {/* End of add field modal */}

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
            <Stack direction="row" justifyContent="flex-end" width="100%">
              <Button sx={{ width: 'fit-content' }} color="secondary" onClick={handleOpen}>
                Add fields
              </Button>
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
        <Typography variant="h4" m={2}>
          Product List
        </Typography>
        <Box p={1}>
          <Button onClick={handleClickedit} onMouseDown={handleMouseDown} disabled={!selectedCellParams} variant="outlined">
            {cellMode === 'edit' ? 'Save' : 'Edit'}
          </Button>
          <Button onClick={handleClose} onMouseDown={handleMouseDown} disabled={cellMode === 'view'} variant="outlined" sx={{ ml: 1 }}>
            Cancel
          </Button>
        </Box>
        <Grid item style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            onCellKeyDown={handleCellKeyDown}
            cellModesModel={cellModesModel}
            onCellEditStop={handleCellEditStop}
            onCellModesModelChange={(model) => setCellModesModel(model)}
            // sx={{height: "92%"}}
            // slots={{
            //   toolbar: EditToolbar,
            // }}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 }
              }
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            slotProps={{
              toolbar: {
                cellMode,
                selectedCellParams,
                setSelectedCellParams,
                cellModesModel,
                setCellModesModel
              },
              cell: {
                onFocus: handleCellFocus
              }
            }}
          />
        </Grid>
      </Grid>

      {/* Edit Modal */}

      <EditModal editOpen={editOpen} handleviewClose={handleviewClose} editrows={editrows} handleOpen={handleOpen} />
    </SubCard>
  );
};

export default AddProduct;
