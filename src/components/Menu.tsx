export const Menu = () => {
  return (
    <ul class="menu hw-acc active" id="menu-box">
      <button class="menu-hide-btn"></button>

      <div class="select-lang-box"></div>

      <div class="menu-content">
        <div class="menu-image-top">
          <div class="menu-content-logo"></div>
          <div
            class="menu-logo"
            style="background-image: url('/user-data/factories/80/imgs/logo/logo_ver_white.png');"
          ></div>
        </div>

        <li class="menu-btn selected" data-navigation-target="#home">
          <div class="dummy"></div>
          <div class="menu-btn-content offer-icon">
            <span class="description">Produkty</span>
          </div>
        </li>
        <li class="menu-btn" data-navigation-target="#cart">
          <div class="dummy"></div>
          <div class="menu-btn-content cart-icon">
            <span class="description">Košík</span>
          </div>
        </li>
        <li class="menu-btn" data-navigation-target="#reservationSystem-17">
          <div class="dummy"></div>
          <div class="menu-btn-content reservation-icon-tables_form">
            <span class="description">Rezervace stolků</span>
          </div>
        </li>
        <li class="menu-btn" data-navigation-target="#news">
          <div class="dummy"></div>
          <div class="menu-btn-content fire-icon">
            <span class="description">Novinky</span>
          </div>
        </li>
        <li class="menu-btn" data-navigation-target="#contact">
          <div class="dummy"></div>
          <div class="menu-btn-content pointer-icon">
            <span class="description">Kontakt</span>
          </div>
        </li>

        <li class="menu-btn" data-navigation-target="#gallery">
          <div class="dummy"></div>
          <div class="menu-btn-content photo-icon">
            <span class="description">Fotogalerie</span>
          </div>
        </li>

        <li class="menu-btn" data-navigation-target="#alergens-list">
          <div class="dummy"></div>
          <div class="menu-btn-content salad-icon">
            <span class="description">Seznam alergenů</span>
          </div>
        </li>

        <li class="menu-btn" data-navigation-target="#company-terms">
          <div class="dummy"></div>
          <div class="menu-btn-content terms-icon">
            <span class="description">Obchodní podmínky</span>
          </div>
        </li>

        <div class="cleaner"></div>
        <li
          class="menu-btn account-menu gradient-btn"
          data-navigation-target="#account-settings"
        >
          <div class="dummy"></div>
          <div class="menu-btn-content cutomer-icon">
            <span class="description">Účet</span>
          </div>
        </li>
      </div>
      <div
        class="menu-signature"
        style="background-image: url('https://objedname.eu/user-data/factories/80/imgs/logo/logo_sym_white.png')"
      >
        ©2024 Demo Restaurace Objednáme.cz{' '}
      </div>
    </ul>
  );
};
