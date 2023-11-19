document.addEventListener("DOMContentLoaded", function () {
    const heroContainer = document.querySelector(".hero-inner-container");
    const logoContainer = document.querySelector(".logo-container");
    const navbarOuter = document.querySelector('.navbar-outer-container')
    const burgerMenu = document.querySelector('.burger-menu')
    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;

        // Adjust the hero container
        if (scrollPosition > 100) {
            heroContainer.classList.add("sticky-hero");
            logoContainer.classList.add("scrolled");
            burgerMenu.classList.add('sticky')
        } else {
            heroContainer.classList.remove("sticky-hero");
            logoContainer.classList.remove("scrolled");
            burgerMenu.classList.remove('sticky')

        }


    });
});

// ---for navigation menu
function toggleNavbar() {
    var navbarResponsive = document.getElementById("navbarResponsive");
    navbarResponsive.classList.toggle("show");
}

// ---for filter toggle in recipies
function toggleFilter() {
    var filterContainer = document.getElementById("filterContainer");
    filterContainer.classList.toggle("show");
}

// ----save recipe to users list--------
function saveRecipe(icon) {
    

    if(icon.classList.contains('fa-regular')){
        icon.classList.remove('fa-regular')
        icon.classList.add('fa-solid')
        // console.log("in fa-regular")
        // console.log(icon)
    }else{
        // console.log("fa-solid")
        icon.classList.remove('fa-solid')
        icon.classList.add('fa-regular')
        // console.log(icon)
    }

    icon.classList.toggle('saved');

    // console.log(icon)
    
    // You can add additional logic here to handle saving the recipe to the user's list
    // For example, you can send an API request to your server to save the recipe.
}

function copyToClipboard() {
    // Get the current URL
    const currentUrl = window.location.href;

    const input = document.createElement('input');
    input.value = currentUrl;
    document.body.appendChild(input);

    // Select the URL in the textarea and copy it to the clipboard
    input.select();
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(input);

    // display the "link copied" message with green color
    const copyStatus = document.getElementById('copyStatus');
    copyStatus.textContent = 'Link copied';
    copyStatus.classList.add('copied');

    // reset the color after a short delay
    setTimeout(() => {
        copyStatus.textContent = '';
        copyStatus.classList.remove('copied');
    }, 2000); 
}


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
