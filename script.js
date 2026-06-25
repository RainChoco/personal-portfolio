// 1. Get the toggle button element using its ID from your HTML
const themeToggleBtn = document.getElementById('theme-toggle');

// 2. Add a click event listener to the button
themeToggleBtn.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body element
    document.body.classList.toggle('dark-mode');
    
    // Find the icon element <i> inside the button
    const icon = themeToggleBtn.querySelector('i');
    
    // 3. Swap the icon class based on whether dark-mode is active
    if (document.body.classList.contains('dark-mode')) {
        // When dark mode is active, show the SUN icon
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        // When light mode is active, revert back to the MOON icon
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});