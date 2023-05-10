import React, { useState, useEffect } from 'react';
import data from '../data.json';
import './addjob.css';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBSelect,
  MDBCheckbox,
  MDBRadio,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownToggle,
  MDBTextArea
}
from 'mdb-react-ui-kit';
import RHeader from './RHeader';

function AddJob() {
  const navigate = useNavigate();
  const [pos, setPosition] = useState("");
  const [loc, setLocation] = useState("");
  const [jobnature, setJobNature] = useState("");
  const [sal, setSalary] = useState("");
  const [jobdesc, setjobDesc] = useState("");
  const [edu, setEducation] = useState("");
  const [exp, setExperience] = useState("");
  const [skill, setSkills] = useState("");
  const [reqknow, setReqKnow] = useState("");
  const [ldateapp, setLDateApp] = useState("");
  const [values, setValues] = useState({
    position: "",
    location: "",
    jobNature: "",
    salary: "",
    jobDescription: "",
    education: "",
    experience: "",
    skills: "",
    requiredKnowledge: "",
    lastDateOfApplication: ""
  });
  const handleChangeForm = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handlePositionChange = (event) => {
    setPosition(event.target.value);
    console.log(event.target.value);
  };
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    console.log(event.target.value);
  };
  const handleJobNatureChange = (event) => {
    setJobNature(event.target.value);
    console.log(event.target.value);
  };
  const handleSalaryChange = (event) => {
    setSalary(event.target.value);
    console.log(event.target.value);
  };
  const handleJobDescChange = (event) => {
    setjobDesc(event.target.value);
    console.log(event.target.value);
  };
  const handleEducationChange = (event) => {
    setEducation(event.target.value);
    console.log(event.target.value);
  };
  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
    console.log(event.target.value);
  };
  const handleSkillsChange = (event) => {
    setSkills(event.target.value);
    console.log(event.target.value);
  };
  const handleReqKnowledgeChange = (event) => {
    setReqKnow(event.target.value);
    console.log(event.target.value);
  };
  const handleLastDateAppChange = (event) => {
    setLDateApp(event.target.value);
    console.log(event.target.value);
  };
  const handleSubmitMain = (event) => {
    console.log("HEREEEEe:");
    var requestOptions = {};
      requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          position: pos,
          location: loc,
          jobNature: jobnature,
          salary: sal,
          jobDescription: jobdesc,
          education: edu,
          experience: exp,
          skills: skill,
          requiredKnowledge: reqknow,
          lastDateOfApplication: ldateapp,
        }),
      };
      console.log(requestOptions);
      navigate('/myjob');

    }
    
  return (
    <div className="Home">
        <RHeader/>
    
        
<div style={{background: '#a1c4fd', background: '-webkit-linear-gradient(to right, rgba(161, 196, 253, 1), rgba(194, 233, 251, 1))',background: 'linear-gradient(to right, rgba(161, 196, 253, 1), rgba(194, 233, 251, 1))'}}>
<MDBRow className='d-flex justify-content-center align-items-center h-100 border'>
  <MDBCol col='12' className='m-5'>
    <MDBCard className='card-registration card-registration-2' style={{borderRadius: '15px'}}>

      <MDBCardBody className='p-0'>

        <MDBRow>

          <MDBCol md='6' className='p-5 bg-white'>

            <h3 className="fw-normal mb-5" style={{color: '#4835d4'}}>Basic Infomation</h3>
            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Position' size='lg' id='form1' type='text' onChange={handlePositionChange}/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Location' size='lg' id='form2' type='text' onChange={handleLocationChange}/>
              </MDBCol>

            </MDBRow>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Job Nature' size='lg' id='form4' type='text' onChange={handleJobNatureChange}/>
              </MDBCol>

              <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='Salary' size='lg' id='form4' type='text' onChange={handleSalaryChange}/>
              </MDBCol>

            </MDBRow>

            <MDBTextArea wrapperClass='mb-4' label='Job Description' size='lg' id='form3' type='text' onChange={handleJobDescChange}/>
          </MDBCol>


          <MDBCol md='6' className='bg-indigo p-5'>

            <h3 className="fw-normal mb-5 text-white" style={{color: '#4835d4'}}>Additional Information</h3>
            
            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Education' size='lg' id='form6' type='text' onChange={handleEducationChange}/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Experience' size='lg' id='form7' type='text' onChange={handleExperienceChange}/>
              </MDBCol>

            </MDBRow>            

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Skills' size='lg' id='form9' type='text' onChange={handleSkillsChange}/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Required Knowledge' size='lg' id='form10' type='text' onChange={handleReqKnowledgeChange}/>
              </MDBCol>
            </MDBRow>

            <MDBRow>

              <MDBCol md='6'>
            <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Last Date of Application' size='lg' id='form8' type='email' onChange={handleLastDateAppChange}/>
            </MDBCol>
            </MDBRow>
            <MDBBtn color='light' size='lg' onClick={(handleSubmitMain)}>Submit</MDBBtn>

          </MDBCol>
        </MDBRow>

      </MDBCardBody>

    </MDBCard>
  </MDBCol>
</MDBRow>
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

export default AddJob;