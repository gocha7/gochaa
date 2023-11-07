document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navUl = document.getElementById('navbar').querySelector('ul');
    const footer = document.getElementById('footer');
    const navLinks = document.querySelectorAll('.nav-link');

    var profilePopup = document.getElementById('profile-popup');
    var closeBtn = document.getElementsByClassName('close')[0];
    var profileImageLink = document.querySelector('.nav-item.profile a.nav-link');

    profileImageLink.addEventListener('click', function(event) {
        event.preventDefault();
        profilePopup.style.display = "block";
    });

    closeBtn.onclick = function() {
        profilePopup.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == profilePopup) {
            profilePopup.style.display = "none";
        }
    }

    function toggleMobileMenu() {
        if (window.innerWidth < 768) {
            navUl.classList.toggle('show');
            if (navUl.classList.contains('show')) {
                navUl.appendChild(footer);
                footer.classList.add('mobile-footer');
            } else {
                footer.classList.remove('mobile-footer');
            }
        }
    }

    menuIcon.addEventListener('click', function(event) {
        toggleMobileMenu();
        event.stopPropagation();
    });

    document.addEventListener('click', function(event) {
        if (!navUl.contains(event.target) && !menuIcon.contains(event.target) && navUl.classList.contains('show')) {
            toggleMobileMenu();
        }
    });

    navUl.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Removed event.preventDefault() from the forEach loop
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            this.classList.add('active');
            // Allow default action (navigation) if not the profile link
            if (this !== profileImageLink) {
                window.location.href = this.getAttribute('href');
            }
        });
    });

    function adjustFooterDisplay() {
        if (window.innerWidth < 768) {
            footer.classList.remove('mobile-footer');
            if (navUl.classList.contains('show')) {
                navUl.appendChild(footer);
                footer.classList.add('mobile-footer');
            }
        } else {
            document.body.appendChild(footer);
            footer.style.display = 'block';
        }
    }

    window.addEventListener('resize', adjustFooterDisplay);
    adjustFooterDisplay();
});
