
// Get references to the necessary elements
const menuIcon = document.querySelector('.menu');
const closeIcon = document.querySelector('.close');
const navLinks = document.querySelector('.nav-links');

// Function to show the navigation sidebar
function showNavSidebar() {
  navLinks.classList.add('show-sidebar');
}

// Function to hide the navigation sidebar
function hideNavSidebar() {
  navLinks.classList.remove('show-sidebar');
}

// Event listener for the menu icon click
menuIcon.addEventListener('click', () => {
  // Show the navigation sidebar
  showNavSidebar();
  // Hide the menu icon
  menuIcon.style.display = 'none';
  // Show the close icon
  closeIcon.style.display = 'block';
});

// Event listener for the close icon click
closeIcon.addEventListener('click', () => {
  // Hide the navigation sidebar
  hideNavSidebar();
  // Hide the close icon
  closeIcon.style.display = 'none';
  // Show the menu icon
  menuIcon.style.display = 'block';
});
