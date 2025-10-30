 // Simple page routing to show the appropriate content based on URL
        document.addEventListener('DOMContentLoaded', function() {
            // Get the current page from URL or default to homepage
            const path = window.location.pathname;
            let page = 'homepage';
            
            if (path.includes('documents.html')) {
                page = 'documents-page';
            } else if (path.includes('interviews.html')) {
                page = 'interviews-page';
            } else if (path.includes('gallery.html')) {
                page = 'gallery-page';
            } else if (path.includes('contact.html')) {
                page = 'contact-page';
            }
            
            // Show the appropriate page content
            document.getElementById(page).classList.remove('d-none');
            
            // Update active nav link
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === path.substring(path.lastIndexOf('/') + 1)) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        });