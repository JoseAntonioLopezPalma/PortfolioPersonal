import './styles/main.css';
import { setupTheme } from './theme/theme';
import { setupNavigation } from './navigation/navbar';
import { setupScrollAnimations } from './utils/animations';
import { setupContactForm } from './features/contact/ContactForm';
import { setupPortfolioData } from './features/portfolio/renderPortfolio';

document.addEventListener('DOMContentLoaded', () => {
    setupPortfolioData(); // Load data first to avoid flickering
    setupTheme();
    setupNavigation();
    setupScrollAnimations();
    setupContactForm();
});
