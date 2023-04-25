import './App.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function JD() {
    const navigate = useNavigate();
    const navToUIUX_JD = () => {
        navigate('/uiux_jd');
    };
    return (
    <div className="JD">
        <header class="header-section">
            <div class="nav-item">
                <div class="container">
		            <div class="nav-depart">
                            <div class="logo">
                            <img src="assets/img/Capture.png" alt="" /><a href="#">
                                    Job Matchers
                                </a>
                            </div>
                    </div> 
                    <nav class="nav-menu mobile-menu">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Job Descriptions</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            {/* <li><a href="#" class="login-panel"><i class="fa fa-user"></i> Login</a> */}
                            {/* </li> */}
                        </ul>
                    </nav>
                    <div id="mobile-menu-wrap"></div>
                </div>
            </div>
        </header>
              
        <div class="banner-section spad">
            <div class="container-fluid">
                <div class="col-lg-12">
                        <div class="section-title">
                            <h2>Business Analyst</h2>
                        </div>
                </div>
                <div class="row p-2">
                    <div class="col-lg-6">                          
                    <Card sx={{ display: 'flex'}}>
                            <CardMedia component="img" style={{border:'2px solid',borderColor:'gray'}} 
                                sx={{ width: 150 }}
                                image="assets/img/mesa.png"
                                alt="" />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h4">
                                        MESA Solutions
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div" style={{paddingTop:'5px'}}>
                                        Technical Business Analyst
                                    </Typography>                                  
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 1,gap:4, justifyContent:'space-between' }}>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        <FaMapMarkerAlt /> Banglore
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Full Time
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                    &#8377;35,000
                                    </Typography>
                                    <Button size="small" variant='outlined' onClick={navToUIUX_JD} color="primary">Apply Now</Button>
                                </Box>
                            </Box>
                        </Card>                   
                    </div>

                    <div class="col-lg-6">
                    <Card sx={{ display: 'flex'}}>
                            <CardMedia component="img" style={{border:'2px solid',borderColor:'gray'}} 
                                sx={{ width: 150 }}
                                image="assets/img/mesa.png"
                                alt="" />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h4">
                                        Hiration
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div" style={{paddingTop:'5px'}}>
                                        Junior Business Analyst
                                    </Typography>                                  
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 1,gap:4, justifyContent:'space-between' }}>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        <FaMapMarkerAlt /> Mumbai
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Full Time
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                    &#8377;25,000
                                    </Typography>
                                    <Button size="small" variant='outlined' onClick={navToUIUX_JD} color="primary">Apply Now</Button>
                                </Box>
                            </Box>
                        </Card>
                    </div>            
                </div>     

                <div class="row p-2">
                    <div class="col-lg-6">                          
                    <Card sx={{ display: 'flex'}}>
                            <CardMedia component="img" style={{border:'2px solid',borderColor:'gray'}} 
                                sx={{ width: 150 }}
                                image="assets/img/mesa.png"
                                alt="" />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h4">
                                        Trustech AV
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div" style={{paddingTop:'5px'}}>
                                        Senior Business Analyst
                                    </Typography>                                  
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 1,gap:4, justifyContent:'space-between' }}>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        <FaMapMarkerAlt /> Pune
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Full Time
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                    &#8377;65,000
                                    </Typography>
                                    <Button size="small" variant='outlined' onClick={navToUIUX_JD} color="primary">Apply Now</Button>
                                </Box>
                            </Box>
                        </Card>
                    </div>

                    <div class="col-lg-6">
                    <Card sx={{ display: 'flex'}}>
                            <CardMedia component="img" style={{border:'2px solid',borderColor:'gray'}} 
                                sx={{ width: 150 }}
                                image="assets/img/mesa.png"
                                alt="" />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h4">
                                        IT Solutions
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div" style={{paddingTop:'5px'}}>
                                        SAP Business Analyst
                                    </Typography>                                  
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 1,gap:4, justifyContent:'space-between' }}>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        <FaMapMarkerAlt /> Mumbai
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Full Time
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                    &#8377;45,000
                                    </Typography>
                                    <Button size="small" variant='outlined' onClick={navToUIUX_JD} color="primary">Apply Now</Button>
                                </Box>
                            </Box>
                        </Card>
                    </div>            
                </div> 

                <div class="row p-2">
                    <div class="col-lg-6">                          
                    <Card sx={{ display: 'flex'}}>
                            <CardMedia component="img" style={{border:'2px solid',borderColor:'gray'}} 
                                sx={{ width: 150 }}
                                image="assets/img/mesa.png"
                                alt="" />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h4">
                                        A&T
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div" style={{paddingTop:'5px'}}>
                                        Junior Business Analyst
                                    </Typography>                                  
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 1,gap:4, justifyContent:'space-between' }}>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        <FaMapMarkerAlt /> Mumbai
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Full Time
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                    &#8377;30,000
                                    </Typography>
                                    <Button size="small" variant='outlined' onClick={navToUIUX_JD} color="primary">Apply Now</Button>
                                </Box>
                            </Box>
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

export default JD;
