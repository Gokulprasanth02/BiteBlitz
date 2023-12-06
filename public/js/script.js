let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let profilenavbar = document.querySelector('.profilenavbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    if (searchForm) searchForm.classList.remove('active');
    if (profilenavbar) profilenavbar.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () => {
    profilenavbar.classList.toggle('active');
    if (navbar) navbar.classList.remove('active');
};

let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let tittle = document.getElementById("tittle");

signupBtn.onclick = function () {
    nameField.style.maxHeight = "60px";
    tittle.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
    if (profilenavbar) profilenavbar.classList.remove('active');
    document.getElementById('signInDialog').style.display = 'block';
};

signinBtn.onclick = function () {
    nameField.style.maxHeight = "0";
    tittle.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
    if (profilenavbar) profilenavbar.classList.remove('active');
    document.getElementById('signInDialog').style.display = 'block';
};

let innerSignupBtn = document.getElementById("innerSignupBtn");
let innerSigninBtn = document.getElementById("innerSigninBtn");

innerSignupBtn.onclick = function () {
    nameField.style.maxHeight = "60px";
    tittle.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}

innerSigninBtn.onclick = function () {
    nameField.style.maxHeight = "0";
    tittle.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}

var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

function closeSignupModal() {
    document.getElementById('signInDialog').style.display = 'none';
}


