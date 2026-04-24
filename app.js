document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');
    const breadcrumb = document.getElementById('breadcrumb');

    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === sectionId) {
                section.classList.add('active');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-section') === sectionId) {
                item.classList.add('active');
            }
        });

        // Update breadcrumb
        const activeItem = document.querySelector(`.nav-item[data-section="${sectionId}"]`);
        if (activeItem) {
            breadcrumb.textContent = activeItem.textContent;
        }
    }

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = item.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    // Default section
    showSection('payouts');
});
