// working with header
const hamburger = document.querySelector(".hamburger i");
const closeMenu = document.querySelector(".close")
const navMobile = document.querySelector("nav.mobile")
hamburger.addEventListener("click", function(){
    navMobile.style.display = "block";
    closeMenu.style.display = "block";
    this.style.display = "none";
});
closeMenu.addEventListener("click", function(){
    navMobile.style.display = "none";
    hamburger.style.display = "block";
    this.style.display = "none";
})


// workinh with pannel
const backButton = document.querySelector(".back-button button");
const parent = document.querySelector(".parent");
const greeding = document.querySelector(".greeding-people");
// get the close icon
const closePannel = document.querySelector(".title-close i");
//get radio buttons
const radioButtons = document.querySelectorAll(".radio input");
// get the form element
const ourFroms = document.forms;
// got it button
const gotIt = document.querySelector(".greeding-people button");
console.log(gotIt)
//working with radio buttons
Array.from(radioButtons).forEach(radio => {
    radio.addEventListener("change", function() {
        let selfclass = radio.getAttribute("name");
        document.querySelector(".give" + "." +selfclass + " .amount-delevered").style.display = "block";
    });
});
backButton.addEventListener("click", function() {
    parent.style.display = "block";
});
closePannel.addEventListener("click", function() {
    parent.style.display = "none";
});
// workink with forms
Array.from(ourFroms).forEach(form => {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        parent.style.display = "none";
        greeding.style.display = "block";
    });
});

// working with the got it button

gotIt.addEventListener("click", function(){
    greeding.style.display = "none";
    window.location.reload();
    
});

