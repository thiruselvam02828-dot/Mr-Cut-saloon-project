document.addEventListener("DOMContentLoaded", function () {
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll(".nav-links a");
    
    navLinks.forEach(link => {
        if (currentLocation.includes(link.getAttribute("href"))) {
            link.classList.add("active");
        }
    });

    // 1. Interactive Heart Click Effect
    const hearts = document.querySelectorAll(".heart-icon");
    hearts.forEach(heart => {
        heart.addEventListener("click", function () {
            this.classList.toggle("liked");
            const icon = this.querySelector("i");
            if (this.classList.contains("liked")) {
                icon.classList.remove("fa-regular");
                icon.classList.add("fa-solid");
            } else {
                icon.classList.remove("fa-solid");
                icon.classList.add("fa-regular");
            }
        });
    });

    // 2. Category Filter Tabs Functionality
    const tabBtns = document.querySelectorAll(".tab-btn");
    const categories = document.querySelectorAll(".category-container");

    tabBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            const filter = this.getAttribute("data-filter");

            categories.forEach(cat => {
                if (filter === "all" || cat.getAttribute("data-category") === filter) {
                    cat.style.display = "block";
                } else {
                    cat.style.display = "none";
                }
            });
        });
    });

    console.log("Mr Cut Saloon Attractive Features Loaded!");
});