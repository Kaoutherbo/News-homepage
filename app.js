
// Get references to the necessary elements
const menuIcon = document.querySelector('.menu');
const closeIcon = document.querySelector('.close');
const navLinks = document.querySelector('.nav-links');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const overlay = document.querySelector('.overlay');

// Function to show the navigation sidebar
function showNavSidebar() {
  sidebar.classList.add('show-sidebar');
  container.classList.add('shade'); 
  overlay.style.display = 'block'; 
  closeIcon.style.display = 'block'; 
  menuIcon.style.display = 'none'; 
}

// Function to hide the navigation sidebar
function hideNavSidebar() {
  sidebar.classList.remove('show-sidebar');
  container.classList.remove('shade'); 
  overlay.style.display = 'none'; 
  closeIcon.style.display = 'none'; 
  menuIcon.style.display = 'block'; 
}

menuIcon.addEventListener('click', () => {
  showNavSidebar();
});

closeIcon.addEventListener('click', () => {
  hideNavSidebar();
});
