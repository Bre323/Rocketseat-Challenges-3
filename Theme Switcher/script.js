const body = document.querySelector('body')
const ball = document.querySelector('.ball')

ball.addEventListener('click', function() {
    body.classList.toggle('dark')
})
