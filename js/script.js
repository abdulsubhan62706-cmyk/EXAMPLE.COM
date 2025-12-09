document.addEventListener("DOMContentLoaded", () => {
    // Search bar focus effect
    const searchBar = document.querySelector('.search-bar');
    searchBar.addEventListener('focus', () => {
        searchBar.style.border = '2px solid #ffcccb';
    });

    searchBar.addEventListener('blur', () => {
        searchBar.style.border = '1px solid #ffcccb';
    });

    // Smooth scrolling to sections on navigation click
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').slice(0, -5);
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }

        });
    });
});
