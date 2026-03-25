export function setupNavigation(): void {
  const header = document.getElementById('main-header');
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  let isMenuOpen = false;

  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        header.classList.add('shadow-md', 'dark:shadow-gray-900/50');
        header.classList.remove('border-transparent');
      } else {
        header.classList.remove('shadow-md', 'dark:shadow-gray-900/50');
        header.classList.add('border-transparent');
      }
    });
  }

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    if (mobileMenuButton) {
      mobileMenuButton.setAttribute('aria-expanded', String(isMenuOpen));
    }
    if (mobileMenu) {
      if (isMenuOpen) {
        mobileMenu.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
      }
    }
  };

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', toggleMenu);
  }

  const mobileLinks = document.querySelectorAll('.nav-link-mobile');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isMenuOpen) toggleMenu();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen) {
      toggleMenu();
      mobileMenuButton?.focus();
    }
  });
}
