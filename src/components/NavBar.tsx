import { useState } from 'react';

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header>
        <a href="/" className="logo-anchor-container">
          <div className="logo-image-container">
            <img
              src="/images/logo/logo-owl-bingham.png"
              alt="Elizabeth Bingham & Allison Perry Dentistry Logo"
              width={400}
              height={400}
              loading="eager"
            />
          </div>
          <div className="logo-names-container">
            <h1 className="elizabeth-bingham-navbar">Elizabeth Bingham, DMD</h1>
            <h1 className="allison-perry-navbar">Allison Perry, DMD</h1>
          </div>
        </a>
        <nav>
          <ul className="nav__links">
            <li><a href="/team">Our Team</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </nav>
        <a href="/contact" className="cta">Contact</a>
        <p className="menu cta" onClick={() => setMobileMenuOpen(true)} role="button" tabIndex={0}>Menu</p>
      </header>

      <div id="mobile__menu" className={mobileMenuOpen ? 'overlay overlay--active' : 'overlay'}>
        <a href="/" className="close" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">&times;</a>
        <div className="overlay__content" onClick={() => setMobileMenuOpen(false)} role="presentation">
          <a href="/">Home</a>
          <a href="/team">Our Team</a>
          <a href="/services">Services</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </>
  );
}
