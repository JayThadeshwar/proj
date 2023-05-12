import './App.css';
import { useLocation } from "react-router-dom";
import App from './App';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";

function UIUX_JD() {
    const location = useLocation();
    const JDInfo = location.state.info;
    console.log(JDInfo);

    const handleApplyNow = () => {
        let userDetails = JSON.parse(localStorage.getItem("userInfo"))
        let base_uri = "http://localhost:8000"

        axios.post(base_uri + "/api/apply_job/", {
            userId: userDetails["userId"],
            jobId: JDInfo["jobId"]
        }).then((resp) => {
            if (resp.status == 201) {
                alert("You have successfully applied for the job.")
            } else {
                alert("Failed to add job, please try again.")
            }
        });
    }

    return (
        <div className="JD">
            <App></App>

            <div class="banner-section spad">
                <div class="container-fluid">
                    <div class="col-lg-12">
                        <div class="section-title">
                            <h2>Business Analyst</h2>
                        </div>
                    </div>
                    <div class="row p-2">

                        <div class="col-lg-8">

                            <Card sx={{ display: 'flex' }}>
                                <CardMedia
                                    component="img"
                                    style={{ border: '2px solid', borderColor: 'gray' }}
                                    sx={{ width: 200 }}
                                    image="assets/img/mesa.png"
                                    alt=""
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h4">
                                            {JDInfo.companyName}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div" style={{ paddingTop: '5px' }}>
                                            <FaMapMarkerAlt /> {JDInfo.location}
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Card>
                            <article style={{ paddingTop: '20px' }} class="inner-text">
                                <h4>Job Description</h4>
                                <p style={{ color: 'black', paddingTop: '10px' }}>
                                    {JDInfo.jobDescription}
                                </p>

                                <h4>Required Knowledge, Skills, and Abilities</h4>
                                <ul style={{ paddingLeft: '30px', paddingTop: '10px', listStyle: 'circle' }}>
                                    <li>System Software Development</li>
                                    <li>Mobile Applicationin iOS/Android/Tizen or other platform</li>
                                    <li>Research and code , libraries, APIs and frameworks</li>
                                    <li>Strong knowledge on software development life cycle</li>
                                    <li>Strong problem solving and debugging skills</li>
                                </ul>
                                <p></p>
                                <h4>Education + Experience</h4>
                                <ul style={{ paddingLeft: '30px', paddingTop: '10px', listStyle: 'circle' }}>
                                    <li>3 or more years of professional design experience</li>
                                    <li>Direct response email experience</li>
                                    <li>Ecommerce website design experience</li>
                                    <li>Familiarity with mobile and web apps preferred</li>
                                    <li>Experience using Invision a plus</li>
                                </ul>
                            </article>
                        </div>

                        <div class="col-lg-4">
                            <article style={{ border: '1px solid', padding: '20px' }} class="inner-text">
                                <h4>Job Overview</h4>
                                <p></p>
                                <ol style={{ listStyle: 'none', paddingInline: '5px', fontSize: '18px' }}>
                                    <li>Posted Date : <span style={{ paddingLeft: '100px' }}> 12 Aug 2020</span></li>
                                    <li>Location : <span style={{ paddingLeft: '130px' }}>{JDInfo.location}</span></li>
                                    <li>Vacancy : <span style={{ paddingLeft: '135px' }}>{Math.floor(Math.random() * (10 - 2 + 1)) + 2}</span></li>
                                    <li>Job Nature : <span style={{ paddingLeft: '110px' }}>{JDInfo.jobNature}</span></li>
                                    <li>Salary : <span style={{ paddingLeft: '150px' }}></span>&#8377; {JDInfo.salary}</li>
                                    <li>Application Date : <span style={{ paddingLeft: '65px' }}>{JDInfo.lastDateOfApplication}</span></li>
                                </ol>
                                <p></p>
                                <button onClick={handleApplyNow} class="primary-btn">Apply Now</button>
                            </article>
                            <article style={{ paddingTop: '20px' }} class="inner-text">
                                <h4>Company Information</h4>
                                <p></p>
                                <h5 style={{ fontWeight: 'bold' }}>MESA</h5>
                                <p style={{ color: 'black', paddingTop: '5px' }}>It is a long established fact that a reader will be distracted by
                                    the readable content of a page when looking at its layout.</p>
                                <ol style={{ listStyle: 'none', fontSize: '18px', fontWeight: 'bold' }}>
                                    <li>Web: mesa.com</li>
                                    <li>Email: mesa@gmail.com</li>
                                </ol>
                                <h5></h5>
                                <h5></h5>
                            </article>
                        </div>
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

export default UIUX_JD;
