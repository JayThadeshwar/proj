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
                        <img src="assets/img/LowWEBarGraphFinal.png" alt="Bar Plot"></img>
                    </Grid>
                    <Grid item xs>
                        <Typography>
                            Thank you for your interest in the Business Analyst role at Mesa Solutions. After careful consideration, we have decided to move forward with other candidates who possess more relevant work experience for the position.
                            While we appreciate your enthusiasm and eagerness to join our team, the Business Analyst role at Mesa Solutions requires a high level of expertise and experience due to its complex nature. Our business analysts are responsible for analyzing data, identifying patterns and trends, making strategic recommendations, and providing insights to drive business growth. Given the dynamic and fast-paced nature of our industry, we require candidates who have a proven track record of success in similar roles to ensure effective performance in this position.
                            As you mentioned in your application, you have limited work experience in the field of business analysis. We recognize that everyone has to start somewhere, and we encourage you to continue developing your skills in order to become a strong candidate for future opportunities. 
                            Here are some suggestions to help you enhance your qualifications:
                            Gain practical experience: Look for internships, entry-level positions, or volunteer opportunities that allow you to apply business analysis techniques in real-world scenarios. This will help you gain practical experience and develop a better understanding of the role.
                        </Typography>
                    </Grid>
                </Grid>
            </StyledPaper>
        </div>
    );
}

export default RejReasonExp;