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
    {
        id: 'reason', label: 'Reason', minWidth: 170,
        format: (value) => value.toFixed(2),
    },
];

function createData(rank, name, resume, reason) {
    return { rank, name, resume, reason };
}

let rows = [
    createData('1', 'Jay Thadeshwar', 'View Resume', 'Check reason'),
    createData('2', 'Karan Nandaniya', 'View Resume', 'Check reason'),
    createData('3', 'Jenil Shah', 'View Resume', 'Check reason'),
    // createData('4', 'Raj Shah', 'View Resume', 'Check reason'),
    // createData('5', 'Depti Patel', 'View Resume', 'Check reason'),
    // createData('6', 'Shreya Sheth', 'View Resume', 'Check reason'),
];

function FilterCandidate() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [range, setRange] = React.useState(50);
    const [rowData, setRowData] = React.useState(rows);

    const filterrow = (e) => {
        setRange(e.target.value);
    }

    const handleFilterChange = () => {
        var topK = Math.round(rowData.length * (range / 100))
        let tempData = rowData.slice(0, topK)
        setRowData(tempData)
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
            <RHeader />

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <MDBRange
                    id='customRange'
                    label='Threshold: '
                    value={range}
                    onChange={filterrow}
                />
                <MDBBtn outline className="ms-1" onClick={handleFilterChange}>Filter</MDBBtn>
            </Box>
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
                                {rowData
                                    .slice(0, range)
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
                                                                        <Link href={`/recuritRej${row.rank}`}>
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
                        count={rowData.length}
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