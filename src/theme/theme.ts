export function setupTheme(): void {
  const toggleBtns = document.querySelectorAll<HTMLButtonElement>('.theme-toggle-btn');
  const lightIcons = document.querySelectorAll('.theme-toggle-light-icon, .theme-toggle-light-icon-mobile');
  const darkIcons = document.querySelectorAll('.theme-toggle-dark-icon, .theme-toggle-dark-icon-mobile');

  const updateIcons = (isDark: boolean) => {
    if (isDark) {
      lightIcons.forEach(el => el.classList.remove('hidden'));
      darkIcons.forEach(el => el.classList.add('hidden'));
    } else {
      lightIcons.forEach(el => el.classList.add('hidden'));
      darkIcons.forEach(el => el.classList.remove('hidden'));
    }
  };

  const setTheme = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    updateIcons(isDark);
  };

  const userTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (userTheme === 'dark' || (!userTheme && systemPrefersDark)) {
    setTheme(true);
  } else {
    setTheme(false);
  }

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDarkNow = document.documentElement.classList.contains('dark');
      setTheme(!isDarkNow);
    });
  });
}
