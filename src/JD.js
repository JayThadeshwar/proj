import './App.css';
import App from './App.js';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import data from './data.json';

function JD() {
    const navigate = useNavigate();
    const navToUIUX_JD = (BA) => {
        console.log("Here");
        navigate("/uiux_jd", { state: { id: BA.jdid} });
        console.log({ state: { id: BA.jdid} });
    };
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
                {data.BAJDs.map((BA) => {
                        return(
                            <div class="col-lg-4 p-2">
                                <Card sx={{ display: 'flex'}} id={BA.id}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h4">
                                        {BA.cmpname}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div" style={{paddingTop:'5px'}}>
                                        {BA.position}
                                    </Typography>                                  
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 1,gap:2, justifyContent:'space-between' }}>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        <FaMapMarkerAlt /> {BA.location}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        {BA.jobNature}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                    &#8377;{BA.salary}
                                    </Typography>
                                    <Button size="small" variant='outlined' onClick={() => navToUIUX_JD(BA)} color="primary">Apply Now</Button>
                                </Box>
                            </Box>
                        </Card>
                    </div>
                            )
                    })}   
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
