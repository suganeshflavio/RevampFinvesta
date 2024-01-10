import React from 'react';
import { Grid, Button, Stack, TextField, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import SubCard from 'ui-component/cards/SubCard';
import IconButton from '@mui/material/IconButton';
import { IconEye } from '@tabler/icons';
import { IconPencil } from '@tabler/icons';
import { IconTrash } from '@tabler/icons'

const AddProduct = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'productName', headerName: 'Product name', width: 130 },
    { field: 'displayName', headerName: 'Display name', width: 130 },
    {
      field: 'action',
      headerName: 'Action',
      type: 'number',
      width: 90,
      padding:"2px",
      renderCell: () => (
        <IconButton
          aria-label="view"
        // {/* onClick={() => handleDelete(params.row.id)} */}
        sx={{padding:"2px"}}
       > <IconPencil
       onClick={() => {

       }}/> <IconEye/> <IconTrash/>
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
    { id: 1, productName: 'Snow', displayName: 'Jon',  },
    { id: 2, productName: 'Lannister', displayName: 'Cersei',  },
    { id: 3, productName: 'Lannister', displayName: 'Jaime',  },
    { id: 4, productName: 'Stark', displayName: 'Arya',  },
    { id: 5, productName: 'Targaryen', displayName: 'Daenerys',  },
    { id: 6, productName: 'Melisandre', displayName: "Stark",  },
    { id: 7, productName: 'Clifford', displayName: 'Ferrara',  },
    { id: 8, productName: 'Frances', displayName: 'Rossini',  },
    { id: 9, productName: 'Roxie', displayName: 'Harvey',  }
  ];

  return (
    <SubCard title="Add Product">
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
              onChange={(e) => handleDataChange('Name', e.target.value, null)}
            />
          </Grid>
            <Grid item xl={6} sx={{ width: { xl: 'fit-content', md: '100%' }, height: { md: '5vh', xl: '10vh', xs: '10vh' } }}>
            <Stack direction="column" justifyContent="flex-end" height="100%">
                <Stack direction="row" justifyContent="flex-end" alignItems="flex-end" spacing={2}>
                  <Button variant="contained" color="secondary">
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
    </SubCard>
  );
};

export default AddProduct;
