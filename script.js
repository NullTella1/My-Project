window.addEventListener("load", function () {
    const modal = document.getElementById("termsModal");
    if (localStorage.getItem("acceptedTerms") === "true") {
        modal.style.display = "none";
    } else {
        modal.style.display = "flex"; 
    }
    const acceptButton = document.getElementById("acceptButton");
    acceptButton.addEventListener("click", function () {
        modal.style.display = "none";
        console.log("User accepted terms and cookies.");
        localStorage.setItem("acceptedTerms", "true");
    });
});

window.onload = () => {
    const introText = document.querySelector('.intro-text');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 2s forwards';
            } else {
                entry.target.style.animation = 'fadeOutDown 2s forwards';
            }
        });
    }, {
        threshold: 0.5
    });
    observer.observe(introText);
};
