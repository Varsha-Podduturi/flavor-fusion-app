document.addEventListener("DOMContentLoaded", function () {
    const heroContainer = document.querySelector(".hero-inner-container");
    const logoContainer = document.querySelector(".logo-container");
    const navbarOuter = document.querySelector('.navbar-outer-container')

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;

        // Adjust the hero container
        if (scrollPosition > 100) {
            heroContainer.classList.add("sticky-hero");
            logoContainer.classList.add("scrolled");
        } else {
            heroContainer.classList.remove("sticky-hero");
            logoContainer.classList.remove("scrolled");
        }


    });
});


document.addEventListener("DOMContentLoaded", function () {
    
    
    const allDropDowns = document.querySelectorAll(".dropdown-btn")

    allDropDowns.forEach(dropdown => {

        dropdown.addEventListener('click', (e)=>{
            e.preventDefault()
            parentElement = dropdown.parentElement
            console.log(parentElement)
            dropdownOptions = parentElement.nextElementSibling
            dropdownOptions.style.display = "block"
            dropdownOptions.classList.toggle("active")
        })
    })
});
