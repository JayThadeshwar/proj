import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home';
import UIUX_JD from './UIUX_JD';
import JD from './JD';
import Login from './Login';
import Profile from './Profile';

function Routing(){
    
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/uiux_jd' element={<UIUX_JD/>} />
                <Route path='/jd' element={<JD/>} />
                <Route path='/lg' element={<Login/>} />
                <Route path='/profile' element={<Profile/>} />
            </Routes>
        </Router>
    );
}

export default Routing;