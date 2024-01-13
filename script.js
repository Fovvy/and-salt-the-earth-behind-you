window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.style.boxShadow = '0px 4px 15px rgba(0, 0, 0, ' + (window.scrollY / 100) + ')';
  });