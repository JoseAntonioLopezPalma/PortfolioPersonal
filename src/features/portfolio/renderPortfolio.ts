import { portfolioData } from '../../data/portfolio';

export function setupPortfolioData(): void {
  // Update texts directly
  setText('hero-name', portfolioData.personal.name);
  setText('hero-role', portfolioData.personal.role);
  setText('hero-tagline', portfolioData.personal.tagline);
  setText('about-description', portfolioData.about.description);

  // Update projects grid
  const projectsContainer = document.getElementById('projects-grid');
  if (projectsContainer) {
    projectsContainer.innerHTML = ''; // Limpiamos contenido estático
    
    portfolioData.projects.forEach((project, i) => {
      const article = document.createElement('article');
      article.className = 'bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow reveal-on-scroll is-visible focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-gray-900 relative';
      
      const techTags = project.tech.map(t => 
        `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 whitespace-nowrap">${t}</span>`
      ).join('');
      
      article.innerHTML = `
        <div class="bg-gray-200 dark:bg-gray-700">
          <img src="${project.image}" alt="Vista previa de ${project.title}" width="800" height="450" class="object-cover w-full h-48" loading="lazy" />
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
            <a href="${project.repo}" target="_blank" rel="noopener noreferrer" class="focus:outline-none before:absolute before:inset-0 before:z-0">
              ${project.title}
            </a>
          </h3>
          <div class="relative z-10 mb-4">
            <p class="text-gray-600 dark:text-gray-300 transition-all duration-300 line-clamp-3 overflow-hidden" id="desc-${i}">
              ${project.description}
            </p>
            <button type="button" class="read-more-btn hidden mt-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 focus:outline-none" data-target="desc-${i}">
              Ver más
            </button>
          </div>
          <div class="flex flex-wrap gap-2 mb-4 relative z-10">
            ${techTags}
          </div>
          <div class="relative z-10 flex gap-4 text-sm font-medium text-blue-600 dark:text-blue-400">
            <a href="${project.repo}" target="_blank" rel="noopener noreferrer" class="hover:underline flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">Repositorio</a>
          </div>
        </div>
      `;
      projectsContainer.appendChild(article);
    });

    // Timeout para que el DOM se procese y calcule alturas
    setTimeout(() => {
      document.querySelectorAll('.read-more-btn').forEach(btn => {
        const targetId = btn.getAttribute('data-target');
        if (!targetId) return;
        
        const targetDesc = document.getElementById(targetId);
        if (targetDesc && targetDesc.scrollHeight > targetDesc.clientHeight) {
          btn.classList.remove('hidden');
          
          btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (targetDesc.classList.contains('line-clamp-3')) {
              targetDesc.classList.remove('line-clamp-3');
              btn.textContent = 'Ver menos';
            } else {
              targetDesc.classList.add('line-clamp-3');
              btn.textContent = 'Ver más';
            }
          });
        }
      });
    }, 50);
  }
}

function setText(id: string, text: string): void {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = text;
  }
}
