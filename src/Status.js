import App from './App';
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
import Link from '@mui/material/Link';

const columns = [
    { id: 'name', label: 'Company Name', minWidth: 170 },
    { id: 'role', label: 'Role', minWidth: 100 },
    {
        id: 'date',
        label: 'Date',
        minWidth: 170,
    },
    {
        id: 'status',
        label: 'Status',
        minWidth: 170,
    },
    {
        id: 'reason',
        label: 'Comment',
        minWidth: 170,
    },
];

function createData(name, role, date, status, reason) {
    return { name, role, date, status, reason };
}

const rows = [
    // createData('Amazon', 'SDE-1', '2023-01-22', 'Rejected', 'Check reason'),
    createData('MESA Solutions', 'Business Analyst', '2023-05-11', 'Rejected', 'Check reason'),
    createData('IIFL', 'Analyst', '2023-03-30', 'Accepted', 'NA'),
];

function ApplicationStat() {
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
        <div className="AppStat">
            <App></App>
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
                                                            {column.id == "reason" && value == "Check reason" ? 
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

export default ApplicationStat;