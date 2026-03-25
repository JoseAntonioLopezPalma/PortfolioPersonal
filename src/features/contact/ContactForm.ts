export function setupContactForm(): void {
  const form = document.querySelector<HTMLFormElement>('#contact form');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        const originalText = submitBtn.textContent || 'Enviar mensaje';
        submitBtn.textContent = 'Enviando...';
        submitBtn.setAttribute('disabled', 'true');
        submitBtn.classList.add('opacity-75', 'cursor-not-allowed');
        
        // Simulate API call
        setTimeout(() => {
          submitBtn.textContent = '¡Mensaje Enviado!';
          submitBtn.classList.replace('bg-blue-600', 'bg-green-600');
          submitBtn.classList.replace('hover:bg-blue-700', 'hover:bg-green-700');
          form.reset();
          
          setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.removeAttribute('disabled');
            submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
            submitBtn.classList.replace('bg-green-600', 'bg-blue-600');
            submitBtn.classList.replace('hover:bg-green-700', 'hover:bg-blue-700');
          }, 3000);
        }, 1500);
      }
    });
  }
}
