

function highlightActiveMenuItem() {
    // Get the current page URL
    const currentPageUrl = window.location.pathname;

    // Select all menu item links
    const menuItems = document.querySelectorAll('.navbar .menu-item');

    // Iterate over each menu item
    menuItems.forEach(item => {
        // Get the pathname part of the href attribute
        const menuItemUrl = new URL(item.href).pathname;

        // Check if the menuItemUrl matches the currentPageUrl
        if (menuItemUrl === currentPageUrl) {
            // Add the active class to highlight it
            item.classList.add('active-menu-item');
        }
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', highlightActiveMenuItem);
