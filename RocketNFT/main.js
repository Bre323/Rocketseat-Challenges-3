function goTop() {
    let footerArrow = document.querySelector('.footer-arrow')

    window.scrollTo(0, 0)
}

function sendEmail() {
    let emailInput = document.getElementById('email').value
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(emailRegex.test(emailInput) === true) {
        alert("EMAIL ENVIADO COM SUCESSO!! \n Email: " + emailInput)
    }
}

const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "20px",
    duration: 600,
    reset: false
});

scrollReveal.reveal(
    `header, main`
    , { interval: 200 }
);
