import React from 'react'
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
import IconButton from '@mui/material/IconButton';
import {  Button, Stack } from '@mui/material';
import { IconTrash } from '@tabler/icons';



const EditModal=({editOpen,handleviewClose,editrows,handleOpen})=> {
  return (
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
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Field Name</TableCell>
                  <TableCell align="left">Type</TableCell>
                  <TableCell align="left">Required</TableCell>
                  <TableCell align="center">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {editrows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.calories}</TableCell>
                    <TableCell align="left">{row.fat}</TableCell>
                    <TableCell align="center" sx={{ color: '#D84646' }}>{<IconTrash />}</TableCell>
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
  )
}

export default EditModal
