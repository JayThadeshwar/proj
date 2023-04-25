import './App.css';
import Button from '@mui/material/Button';
import {useRef} from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate();
    const navToLG = () => {
        navigate('/lg');
    };
    const navToProfile = () => {
        navigate('/profile');
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
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Job Descriptions</a></li>
                            {/* <li><a href="#">About</a></li> */}
                            <li><a href="#">Contact</a></li>
                            <li><a onClick={navToProfile}>Profile</a></li>
                            <li><a onClick={navToLG}>Sign Up</a></li>
                        </ul>
                    </nav>
                    <div id="mobile-menu-wrap"></div>
                </div>
            </div>
        </header>
       
            </div>
  );
}

export default App;
