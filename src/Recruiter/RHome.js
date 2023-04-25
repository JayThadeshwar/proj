import RHeader from './RHeader';
import {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function RHome() {
    const navigate = useNavigate();
    const navToAddJob = () => {
        navigate('/addjob');
    };
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
        <RHeader/>
       
        <section class="hero-section">
            <div class="hero-items owl-carousel">
                <div class="single-hero-items set-bg" data-setbg="assets/img/recruiterhome.jpg">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-5">
                                {/* <h1>The Easiest Way<br/> to Find New <br/>Applicants. </h1> */}
                                {/* <p>Get explanations directly from the <br/>job recruiters for the selection or rejection of jobs.</p> */}
                                
                            </div>
                        </div>
                        {/* <div class="off-card">
                            <h2>Get <span>Hired</span></h2>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
       
        <div id='bbc' class="banner-section spad">
            <div class="container-fluid">
                <div class="col-lg-12">
                        <div class="section-title">
                            <h2>Easiest Way to Find New Applicants</h2>
                        </div>
                </div>
                <div class="row p-2">
                <div class="col-lg-3"></div>
                    <div class="col-lg-3">
                            <Card sx={{ minWidth: 275, border: '1px solid' }}>
                            <CardContent>
                                <Typography variant="h5" component="div" style={{paddingTop:'15px'}}>
                                    Post A Job
                                </Typography>                                
                            </CardContent>
                            <CardActions>
                                <Button  onClick={navToAddJob} size="medium">Add Job</Button>
                            </CardActions>
                            </Card>
                    </div>
                    <div class="col-lg-3">
                        <Card sx={{ minWidth: 275, border: '1px solid' }}>
                            <CardContent>
                                <Typography variant="h5" component="div" style={{paddingTop:'15px'}}>
                                    My Jobs
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={navToMyJob} size="medium">View All</Button>
                            </CardActions>
                            </Card>
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
                                <li>Get explanations directly from the <br/>job recruiters for the selection or rejection of jobs.</li>
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

export default RHome;
