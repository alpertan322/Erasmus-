import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function DefaultFooter() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-bottom text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-1 border-bottom'>
        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <img
                src="/E++-logos_transparent_square.png"
                width="200"
                height="200"
                className="d-inline-block align-center ms-5"
                alt="epp logo"
              />
            </MDBCol>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" />
                Erasmus++
              </h6>
              <p>
                An environment that facilitates process for mobility programs.
              </p>
            </MDBCol>
            <MDBCol md="5" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='https://erasmuspp.mynotice.io/' className='text-reset'>
                  FAQ
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
              <p>
                <MDBIcon icon="home" />
                Instutition Address: <br></br>
                Bilkent University<br></br>
                06800 Bilkent, Ankara<br></br>
                TURKEY<br></br>
              </p>
              <p>
                <MDBIcon icon="envelope" />
                erasmuspp49@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" /> +90 553 385 3012
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold'>
          Erasmus++Team
        </a>
      </div>
    </MDBFooter>
  );
}