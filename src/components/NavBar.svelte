<script lang="ts">
  let mobileMenuClasses = 'overlay';

  function openMobileMenu(e: MouseEvent) {
    e.preventDefault();
    mobileMenuClasses = 'overlay overlay--active';
  }

  function closeMobileMenu(e: MouseEvent) {
    e.preventDefault();
    mobileMenuClasses = 'overlay';
  }
</script>

<header>
  <a href="/" class="logo-anchor-container">
    <div class="logo-image-container">
      <img
        src="/images/logo/logo-owl-bingham.png"
        alt="Elizabeth Bingham & Allison Perry Dentistry Logo"
        width="400"
        height="400"
        loading="eager"
      />
    </div>
    <div class="logo-names-container">
      <h1 class="elizabeth-bingham-navbar">Elizabeth Bingham, DMD</h1>
      <h1 class="allison-perry-navbar">Allison Perry, DMD</h1>
    </div>
  </a>
  <nav>
    <ul class="nav__links">
      <li><a href="/team">Our Team</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/faq">FAQ</a></li>
    </ul>
  </nav>
  <a href="/contact" class="cta">Contact</a>
  <p class="menu cta" onclick={openMobileMenu} role="button" tabindex="0">Menu</p>
</header>

<div id="mobile__menu" class={mobileMenuClasses}>
  <a href="/" class="close" onclick={closeMobileMenu} aria-label="Close menu">&times;</a>
  <div class="overlay__content" onclick={closeMobileMenu} role="presentation">
    <a href="/">Home</a>
    <a href="/team">Our Team</a>
    <a href="/services">Services</a>
    <a href="/faq">FAQ</a>
    <a href="/contact">Contact</a>
  </div>
</div>
