import '../App.css';
import Button from '@mui/material/Button';
import {useRef} from 'react';
import { useNavigate } from 'react-router-dom';

function RHeader() {
    const navigate = useNavigate();
    const navToAddJobs = () => {
        navigate('/addjob');
    };
    const navToMyJob = () => {
        navigate('/myjob');
    };
    const navToProfile = () => {
        navigate('/rprofile');
    };
    const navToFilterCandidate = () => {
        navigate('/filter');
    };
    
  return (
    <div className="App">
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
                            <li><a onClick={navToAddJobs}>Post Jobs</a></li>
                            <li><a onClick={navToMyJob}>My Jobs</a></li>
                            <li><a onClick={navToFilterCandidate}>Filter Candidate</a></li>
                            <li><a onClick={navToProfile}>Profile</a></li>
                            {/* <li><a onClick={navToLG}>Sign Up</a></li> */}
                        </ul>
                    </nav>
                    <div id="mobile-menu-wrap"></div>
                </div>
            </div>
        </header>
       
            </div>
  );
}

export default RHeader;
