document.addEventListener("DOMContentLoaded", () => {

    const navbar =
        document.querySelector(".navbar");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const navMenu =
        document.querySelector(".nav-menu");


    /* NAVBAR */

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 30) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    window.addEventListener(
        "scroll",
        updateNavbar
    );

    updateNavbar();


    /* MOBILE MENU */

    if (mobileMenu && navMenu) {

        mobileMenu.addEventListener(
            "click",
            () => {

                navMenu.classList.toggle(
                    "open"
                );

            }
        );


        navMenu
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        navMenu.classList.remove(
                            "open"
                        );

                    }
                );

            });

    }


    /* REVEAL */

    const reveal =
        document.querySelectorAll(
            ".reveal"
        );


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: .12
            }
        );


    reveal.forEach(element => {

        observer.observe(element);

    });

});
