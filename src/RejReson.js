import { styled } from '@mui/material/styles';
import App from './App';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: "80%",
    color: theme.palette.text.primary,
}));
function RejReasonExp() {
    return (
        <div className="Home">
            <App></App>
            <StyledPaper
                sx={{
                    my: 2,
                    mx: 'auto',
                    p: 2,
                }}
            >
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <img src="assets/img/barPlotRej.png" alt="Bar Plot"></img>
                    </Grid>
                    <Grid item xs>
                        <Typography>
                            Thank you for applying for the Software Developer role at Google. We appreciate your interest in working with us and taking the time to submit your application.
                            As a software developer at Google, the role requires a certain level of experience and skill set to tackle complex problems and deliver high-quality solutions. While we acknowledge your educational qualifications and potential, we believe that your current experience level may not be sufficient to handle the complexities of the role at this time.
                            We encourage you to continue developing your skills and gaining experience in the field. We suggest that you take on some software development projects, internships, or work on open-source projects to gain practical experience and exposure to real-world software development scenarios.
                            We recommend that you focus on building proficiency in programming languages such as Python, which is widely used for web development, data analysis, and machine learning. Additionally, gaining expertise in web development frameworks such as Django will be beneficial in developing scalable and robust web applications.
                        </Typography>
                    </Grid>
                </Grid>
            </StyledPaper>
        </div>
    );
}

export default RejReasonExp;