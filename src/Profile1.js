import App from './App';
import { useRef, useEffect, useState } from 'react';
import JenilShah1 from "./PDF/JenilShah.pdf";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import axios from "axios";
import { PDFDocument } from 'pdf-lib'

function Profile1() {
  const inputRef = useRef(null);
  const [userDetails, setUserDetails] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let user_details = localStorage.getItem('userInfo');
    setUserDetails(JSON.parse(user_details));
    setLoading(false)
  }, []);

  const createNewPDF = async (pdfData) => {
    try {
      const pdfDoc = await PDFDocument.load(pdfData);

      // Modify the PDF document as needed
      // For example, add new pages, remove existing pages, update content, etc.

      // Save the modified PDF as a new file
      const modifiedPdfData = await pdfDoc.save();

      // Do something with the modified PDF data
      console.log('Modified PDF:', modifiedPdfData);
    } catch (error) {
      console.error('Error creating new PDF:', error);
    }
  };


  const handleResumeDownload = async () => {
    let base_uri = "http://127.0.0.1:8000"
    const response = await fetch(base_uri + "/api/download_resume/" + userDetails["userId"], {
      method: 'GET',
      headers: {
        'Content-Type': 'application/pdf'
      },
    });
    if (response.ok) {
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = userDetails["resumeLink"].split("/").pop();
      link.click();
      URL.revokeObjectURL(url);
    } else {
      console.error('Error downloading PDF:', response.status);
    }
  }

  return isLoading ? (<div>Loading...</div>) :
    (
      <div className="Home">
        <App></App>

        <section style={{ backgroundColor: '#eee' }}>
          <MDBContainer className="py-5">

            <MDBRow>
              <MDBCol lg="4">
                <MDBCard className="mb-4">
                  <MDBCardBody className="text-center">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: '150px' }}
                      fluid />
                    <p className="text-muted mb-1">Full Stack Developer</p>
                    <div className="d-flex justify-content-center mb-2">
                      <MDBBtn outline className="ms-1" onClick={handleResumeDownload} rel='noreferrer'>View Resume</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol lg="8">
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Full Name</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{userDetails["userName"]}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Email</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{userDetails["emailId"]}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Mobile</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{userDetails["contactNumber"]}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>DOB</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{userDetails["dateOfBirth"]}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Address</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{userDetails["address"]}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>


              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

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

export default Profile1;
