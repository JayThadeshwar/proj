import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home';
import UIUX_JD from './UIUX_JD';
import JD from './JD';
import Login from './auth/Login';
import CSignUp from './auth/CSignup';
import RSignUp from './auth/RSignup';
import Profile1 from './Profile1';
import ApplicationStat from './Status';
import RejReasonExp from './RejReson';
import RHome from './Recruiter/RHome';
import RProfile from './Recruiter/RProfile';
import AddJob from './Recruiter/AddJob';
import MyJob from './Recruiter/MyJob';
import RecruitRej from './Recruiter/RecruitRej';
import RecruitRej2 from './Recruiter/rr2';
import RecruitRej3 from './Recruiter/rr3';
import FilterCandidate from './Recruiter/Filter';

function Routing(){
    
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/uiux_jd' element={<UIUX_JD/>} />
                <Route path='/jd' element={<JD/>} />
                <Route path='/lg' element={<Login/>} />
                <Route path='/csignup' element={<CSignUp/>} />
                <Route path='/rsignup' element={<RSignUp/>} />
                <Route path='/appStat' element={<ApplicationStat/>} />
                <Route path='/rejExpl' element={<RejReasonExp/>} />
                <Route path='/profile1' element={<Profile1/>} />
                <Route path='/rhome' element={<RHome/>} />
                <Route path='/rprofile' element={<RProfile/>} />
                <Route path='/addjob' element={<AddJob/>} />
                <Route path='/myjob' element={<MyJob/>} />
                <Route path='/filter' element={<FilterCandidate/>} />
                <Route path='/recuritRej1' element={<RecruitRej/>} />
                <Route path='/recuritRej2' element={<RecruitRej2/>} />
                <Route path='/recuritRej3' element={<RecruitRej3/>} />
            </Routes>
        </Router>
    );
}

export default Routing;