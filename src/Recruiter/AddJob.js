import React from 'react';
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
    const navToMyJob = () => {
        navigate('/myjob');
    };
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
                <MDBInput wrapperClass='mb-4' label='Position' size='lg' id='form1' type='text'/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Location' size='lg' id='form2' type='text'/>
              </MDBCol>

            </MDBRow>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Job Nature' size='lg' id='form4' type='text'/>
              </MDBCol>

              <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='Salary' size='lg' id='form4' type='text'/>
              </MDBCol>

            </MDBRow>

            <MDBTextArea wrapperClass='mb-4' label='Job Description' size='lg' id='form3' type='text'/>
          </MDBCol>


          <MDBCol md='6' className='bg-indigo p-5'>

            <h3 className="fw-normal mb-5 text-white" style={{color: '#4835d4'}}>Additional Information</h3>
            
            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Education' size='lg' id='form6' type='text'/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Experience' size='lg' id='form7' type='text'/>
              </MDBCol>

            </MDBRow>            

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Skills' size='lg' id='form9' type='text'/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Required Knowledge' size='lg' id='form10' type='text'/>
              </MDBCol>
            </MDBRow>

            <MDBRow>

              <MDBCol md='6'>
            <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Last Date of Application' size='lg' id='form8' type='email'/>
            </MDBCol>
            </MDBRow>
            <MDBBtn color='light' size='lg' onClick={(navToMyJob)}>Submit</MDBBtn>

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