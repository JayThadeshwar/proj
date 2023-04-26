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
import { MDBRange, MDBBtn } from 'mdb-react-ui-kit';
import Link from '@mui/material/Link';
import JenilShah1 from "../PDF/JenilShah.pdf";
import { Button } from '@mui/material';

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
    createData('1', 'Jenil Shah', 'View Resume', 'Check reason'),
    createData('2', 'Jay Thadeshwar', 'View Resume', 'NA'),
    createData('3', 'Karan Nandaniya', 'View Resume', 'NA'),
    createData('4', 'Raj Shah', 'View Resume', 'NA'),
    createData('5', 'Depti Patel', 'View Resume', 'NA'),
    createData('6', 'Shreya Sheth', 'View Resume', 'NA'),
];

function FilterCandidate() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [range, setRange] = React.useState(50);
  
    const filterrow = (e) => {
        setRange(e.target.value);
    }
    
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
                id='customRange'
                label='Threshold'
                value={range}
                onChange={filterrow}
            />

            <MDBBtn outline className="ms-1" >Filter</MDBBtn>

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
                                    .slice(0,range)
                                    .map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            {column.id == "resume" && value == "View Resume" ? 
                                                            (
                                                                <Link href={JenilShah1}>
                                                                    {value}
                                                                </Link>                      
                                                            ) 
                                                            : 
                                                            column.id == "reason" && value == "Check reason" ? 
                                                            (
                                                                <Link href="/rejExpl">
                                                                    {value}
                                                                </Link>                      
                                                            ) 
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