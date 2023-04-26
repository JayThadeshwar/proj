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
    const navToMyJob = () => {
        navigate('/myjob');
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
                    <div class="col-lg-4">
                        <Card sx={{ display: 'flex' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h4">
                                        Business Analyst
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div" style={{ paddingTop: '5px' }}>
                                        by Mesa Solutions
                                    </Typography>
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 2, pt: 2, gap: 3, justifyContent: 'space-between' }}>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        <FaMapMarkerAlt /> Mumbai
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Full Time
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        &#8377;35,000
                                    </Typography>
                                    <Button size="small" variant='outlined' onClick={navToMyJob} color="primary">Details</Button>
                                </Box>
                            </Box>
                        </Card>
                    </div>

                    <div class="col-lg-4">
                        <Card sx={{ display: 'flex' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h4">
                                        Software Developer
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div" style={{ paddingTop: '5px' }}>
                                        by India Infoline Limited
                                    </Typography>
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 2, pt: 2, gap: 3, justifyContent: 'space-between' }}>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        <FaMapMarkerAlt /> Mumbai
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Full Time
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        &#8377;70,000
                                    </Typography>
                                    <Button size="small" variant='outlined' onClick={navToMyJob} color="primary">Details</Button>
                                </Box>
                            </Box>
                        </Card>
                    </div>

                    <div class="col-lg-4">
                        <Card sx={{ display: 'flex' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h4">
                                        Junior Analyst
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div" style={{ paddingTop: '5px' }}>
                                        by ZS Associates
                                    </Typography>
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 2, pt: 2, gap: 3, justifyContent: 'space-between' }}>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        <FaMapMarkerAlt /> Pune
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Full Time
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        &#8377;70,000
                                    </Typography>
                                    <Button size="small" variant='outlined' onClick={navToMyJob} color="primary">Details</Button>
                                </Box>
                            </Box>
                        </Card>
                    </div>
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
