import App from './App';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { SiJirasoftware } from "react-icons/si";
import { GrUserManager } from "react-icons/gr";
import { IoIosInfinite } from "react-icons/io";
import { MdImportantDevices } from "react-icons/md";
import { TbDeviceAnalytics } from "react-icons/tb";
import { GrShieldSecurity } from "react-icons/gr";

function Home() {
    const navigate = useNavigate();
    const navToJD = () => {
        navigate('/jd');
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
            <App></App>

            <section class="hero-section">
                <div class="hero-items owl-carousel">
                    <div class="single-hero-items set-bg" data-setbg="assets/img/recruitment.jpg">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-5">
                                    <h1>The Easiest Way<br /> to Find New <br />Jobs </h1>
                                    <p>Get explanations directly from the <br />job recruiters for the selection or rejection of jobs.</p>

                                </div>
                            </div>
                            <div class="off-card">
                                <h2>Get <span>Hired</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div id='bbc' class="banner-section spad">
                <div class="container-fluid">
                    <div class="col-lg-12">
                        <div class="section-title">
                            <h2>Browse By Categories</h2>
                        </div>
                    </div>
                    <div class="row p-2">
                        <div class="col-lg-4">
                            <Card sx={{ minWidth: 275, border: '1px solid' }}>
                                <CardContent>
                                    <SiJirasoftware size={'60px'} />
                                    <Typography variant="h5" component="div" style={{ paddingTop: '15px' }}>
                                        Business Analyst
                                    </Typography>
                                    <Typography color="text.secondary">
                                        5 Jobs Available
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={navToJD} size="medium">View All</Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div class="col-lg-4">
                            <Card sx={{ minWidth: 275, border: '1px solid' }}>
                                <CardContent>
                                    <GrUserManager size={'60px'} />
                                    <Typography variant="h5" component="div" style={{ paddingTop: '15px' }}>
                                        Operations Manager
                                    </Typography>
                                    <Typography color="text.secondary">
                                        10 Jobs Available
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={navToJD} size="medium">View All</Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div class="col-lg-4">
                            <Card sx={{ minWidth: 275, border: '1px solid' }}>
                                <CardContent>
                                    <IoIosInfinite size={'60px'} />
                                    <Typography variant="h5" component="div" style={{ paddingTop: '15px' }}>
                                        DevOps Engineer
                                    </Typography>
                                    <Typography color="text.secondary">
                                        3 Jobs Available
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={navToJD} size="medium">View All</Button>
                                </CardActions>
                            </Card>
                        </div>
                    </div>
                    <div class="row p-2">
                        <div class="col-lg-4">
                            <Card sx={{ minWidth: 275, border: '1px solid' }}>
                                <CardContent>
                                    <MdImportantDevices size={'60px'} />
                                    <Typography variant="h5" component="div" style={{ paddingTop: '15px' }}>
                                        UI/UX Developer
                                    </Typography>
                                    <Typography color="text.secondary">
                                        7 Jobs Available
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={navToJD} size="medium">View All</Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div class="col-lg-4">
                            <Card sx={{ minWidth: 275, border: '1px solid' }}>
                                <CardContent>
                                    <TbDeviceAnalytics size={'60px'} />
                                    <Typography variant="h5" component="div" style={{ paddingTop: '15px' }}>
                                        Full Stack Developer
                                    </Typography>
                                    <Typography color="text.secondary">
                                        12 Jobs Available
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={navToJD} size="medium">View All</Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div class="col-lg-4">
                            <Card sx={{ minWidth: 275, border: '1px solid' }}>
                                <CardContent>
                                    <GrShieldSecurity size={'60px'} />
                                    <Typography variant="h5" component="div" style={{ paddingTop: '15px' }}>
                                        Network Security Engineer
                                    </Typography>
                                    <Typography color="text.secondary">
                                        2 Jobs Available
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={navToJD} size="medium">View All</Button>
                                </CardActions>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            {/* UPLOAD RESUME */}
            <section class="deal-of-week set-bg spad" data-setbg="assets/img/try3.jpg">
                <div class="container">
                    <div class="col-lg-12 text-right margin-right">
                        <div class="section-title">
                            <h3>Being different is what makes <br /> you stand out of the world.</h3>
                            <p><br /></p>
                        </div>
                        {/* <a style={{'marginRight':'160px'}} href="#" class="primary-btn">Upload Your CV</a> */}
                        <input style={{ display: 'none' }} ref={inputRef} type="file" onChange={handleFileChange} />
                        <button style={{ 'marginRight': '160px' }} class="primary-btn" onClick={handleClick}>Upload Your CV</button>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section class="latest-blog spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <h2>How It Works</h2>
                            </div>
                        </div>
                    </div>

                    <div class="benefit-items">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="single-benefit">
                                    <div class="sb-icon">
                                        <img src="assets/img/jobsearch1.png" alt="" />
                                    </div>
                                    <div class="sb-text">
                                        <h6><br />Search For Jobs</h6>
                                        <p>Get job descriptions from different recruiters.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="single-benefit">
                                    <div class="sb-icon">
                                        <img src="assets/img/apply.png" alt="" />
                                    </div>
                                    <div class="sb-text">
                                        <h6><br />Apply For Job</h6>
                                        <p>Select the appropriate job and upload your resume.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="single-benefit">
                                    <div class="sb-icon">
                                        <img src="assets/img/selected.png" alt="" />
                                    </div>
                                    <div class="sb-text">
                                        <h6><br />Get Your Job</h6>
                                        <p>Get the best job and explanations if rejected. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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

export default Home;
