export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="left-footer-container">
          <div className="left-top-footer-container">
            <h1 className="footer-title">Dental Associations</h1>
          </div>
          <div className="left-bottom-footer-container">
            <div className="left-left-footer-container">
              <a href="https://www.ada.org/" target="_blank" rel="noreferrer" className="anchor-for-dental-logo">
                <img className="dental-association-logo" src="/images/dental-association-logos/ada-logo.svg" alt="ADA Logo" width={100} height={32} loading="lazy" />
              </a>
              <a href="https://www.cda.org/" target="_blank" rel="noreferrer" className="anchor-for-dental-logo">
                <img className="dental-association-logo" src="/images/dental-association-logos/cda-logo.png" alt="CDA Logo" width={90} height={90} loading="lazy" />
              </a>
            </div>
            <div className="left-right-footer-container">
              <a href="https://aacd.com/" target="_blank" rel="noreferrer" className="anchor-for-dental-logo">
                <img className="dental-association-logo" src="/images/dental-association-logos/aacd-logo.png" alt="AACD Logo" width={133} height={36} loading="lazy" />
              </a>
              <a href="https://www.sdds.org/" target="_blank" rel="noreferrer" className="anchor-for-dental-logo">
                <img className="dental-association-logo" src="/images/dental-association-logos/sdds-logo.png" alt="SDDS Logo" width={100} height={58} loading="lazy" />
              </a>
            </div>
          </div>
        </div>
        <div className="right-footer-container">
          <div className="right-left-footer-container">
            <div className="contact-card-no-highlight">
              <h2 className="footer-contact-card-title">Office Hours</h2>
              <div className="footer-contact-card-description">
                <p>Monday through Thursday</p>
                <p>7:30 am to 3:30 pm</p>
              </div>
            </div>
          </div>
          <div className="right-middle-footer-container">
            <a className="contact-link" target="_blank" href="https://www.google.com/maps/place/1791+Oak+Ave,+Davis,+CA+95616/@38.55938,-121.7525384,17z/data=!3m1!4b1!4m5!3m4!1s0x808529ba1e27c131:0x37f355900de729ac!8m2!3d38.55938!4d-121.7525384" rel="noreferrer">
              <div className="footer-contact-card">
                <h2 className="footer-contact-card-title">Address</h2>
                <div className="footer-contact-card-description">
                  <p>On the 2nd floor of</p>
                  <p>1791 Oak Ave Suite D</p>
                  <p>Davis, CA 95616</p>
                </div>
              </div>
            </a>
          </div>
          <div className="right-right-footer-container">
            <a className="contact-link" href="tel:+1-530-758-4900">
              <div className="footer-contact-card">
                <h2 className="footer-contact-card-title">Phone Number</h2>
                <p className="footer-contact-card-description">(530) 758-4900</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright-container">
        <h3 className="footer-copyright-title">© 2022 Elizabeth W. Bingham, DMD, Inc.</h3>
      </div>
    </footer>
  );
}
