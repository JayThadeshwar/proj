import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import RHeader from './RHeader';
import { MDBRange } from 'mdb-react-ui-kit';

const columns = [
    { id: 'rank', label: 'Rank', minWidth: 100 },
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'resume', label: 'Resume', minWidth: 170 },
    { id: 'reason', label: 'Reason', minWidth: 170,
        format: (value) => value.toFixed(2),
    },
];

function createData(rank, name, resume, reason) {    
    return { rank, name, resume, reason};
}

const rows = [
    createData('1', 'Jenil Shah', '', 'NA'),
    createData('2', 'Jay Thadeshwar', '', 'NA'),
    createData('3', 'Karan Nandaniya', '', 'NA'),
    createData('4', 'Raj Shah', '', 'NA'),
    createData('5', 'Depti Patel', '', 'NA'),
    createData('6', 'Shreya Sheth', '', 'NA'),
];

function FilterCandidate() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className="FilterCandi">
            <RHeader/>
            
            <MDBRange
                defaultValue={50}
                id='customRange'
                label='Threshold'
            />

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="90vh"
            >
                <Paper sx={{ width: '80%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            {column.format && typeof value === 'number'
                                                                ? column.format(value)
                                                                : value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </Box>
        </div>
    );
}

export default FilterCandidate;