import { styled } from '@mui/material/styles';
import RHeader from './RHeader';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useParams } from "react-router-dom";

const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: "80%",
    color: theme.palette.text.primary,
}));
function RecruitRej3() {
    return (
        <div className="Home">
            <RHeader></RHeader>
            <StyledPaper
                sx={{
                    my: 2,
                    mx: 'auto',
                    p: 2,
                }}
            >
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <img src="assets/img/LowWEBarGraphFinal.png" alt="Bar Plot"></img>
                    </Grid>
                    <Grid item xs>
                        <img src="assets/img/BadWESummaryPlotFinal.png" alt="Summary Plot"></img>                       
                    </Grid>
                </Grid>
            </StyledPaper>
        </div>
    );
}

export default RecruitRej3;