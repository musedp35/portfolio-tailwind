// Navbar Fixed
window.onscroll = function() {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if(window.scrollY > fixedNav) {
  // if(window.scrollY > fixedNav){
    header.classList.add ('navbar-fixed');
    toTop.classList.remove ('hidden');
    toTop.classList.add ('flex');
  } else {
    header.classList.remove ('navbar-fixed');
    toTop.classList.remove ('flex');
    toTop.classList.add ('hidden');
}
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger

window.addEventListener('click', function(event) {
  if (!event.target.matches('#hamburger') && !event.target.matches('.nav-link')) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Dark mode
const checkbox = document.querySelector('#toggle');
        const html = document.querySelector('html');

        checkbox.addEventListener('click', function()
        {
            checkbox.checked ? html.classList.add('dark') : html.classList.remove('dark');
        });