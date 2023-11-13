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
