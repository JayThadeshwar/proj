import data from '../data.json';
import RHeader from './RHeader';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FaMapMarkerAlt } from "react-icons/fa";


function MyJob() {
    const navigate = useNavigate();
    const navToFilter = () => {
        navigate('/filter');
    };
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.click();
    };

    const handleFileChange = event => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
            return;
        }

        event.target.value = null;
    };

    return (
        <div className="Home">
            <RHeader />
            <div class="banner-section spad">

                <div class="row p-2">
                    {data.jobs.map((jobs) => {
                        return(
                            <div class="col-lg-4 p-2">
                            <Card sx={{ display: 'flex' }} id={jobs.id}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h4">
                                        {jobs.position}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div" style={{ paddingTop: '5px' }}>
                                        by {jobs.cmpname}
                                    </Typography>
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 2, pt: 2, gap: 3, justifyContent: 'space-between' }}>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        <FaMapMarkerAlt /> {jobs.location}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        {jobs.jobNature}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        &#8377;{jobs.salary}
                                    </Typography>
                                    <Button size="small" variant='outlined' onClick={navToFilter} color="primary">Filter</Button>
                                </Box>
                            </Box>
                        </Card>
                        </div>
                            )
                    })}                
                </div>
            </div>

            {/* FOOTER SECTION */}
            <footer class="footer-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="footer-left">
                                <div class="footer-logo">
                                    <a href="#">Job Matchers</a>
                                </div>
                                <ul>
                                    <li>Get explanations directly from the <br />job recruiters for the selection or rejection of jobs.</li>
                                </ul>
                                <div class="footer-social">
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-instagram"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="footer-widget">
                                <h5>Contact Information</h5>
                                <div class="footer-left"><ul>
                                    <li>Address: DJ Sanghvi College</li>
                                    <li>Phone: +91 9000990009</li>
                                    <li>Email: jobmatchers@gmail.com</li>
                                </ul></div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="newslatter-item">
                                <h5>Join Our Newsletter Now</h5>
                                <p>Get E-mail updates about our latest shop and special offers.</p>
                                <form action="#" class="subscribe-form">
                                    <input type="text" placeholder="Enter Your Mail" />
                                    <button type="button">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>



        </div>
    );
}

export default MyJob;
