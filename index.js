const form = document.querySelector('.form')
const username = document.querySelector('.username')
const email = document.querySelector('.email')
const password = document.querySelector('.password')
const password2 = document.querySelector('.password2')
const small = document.querySelector('small')


//Show input error message
function showError(input, message) {
    const formControl = input.parentElement //will get the parent element of this element
    const small = formControl.querySelector('small')
    formControl.classList.add('error')
    small.textContent = message
    // small.style.visibility = 'visible'
}

//Show input success
function showSuccess(input, message) {
    const formControl = input.parentElement //will get the parent element of this element
    formControl.classList.add('success')
}



//Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault()
    if (username.value === '') {
        showError(username, 'Please enter a Username')
        console.log('error')
    } else {
        showSuccess(username, 'Thanks!')
        console.log('success')
    } if (email.value === '') {
        showError(email, 'Please enter an email')
    } else {
        showSuccess(email, 'Thanks!')
        console.log('success')
    } if (password.value === '') {
        showError(password, 'Please enter a password')
    } else {
        showSuccess(password, 'Thanks!')
        console.log('success')
    } if (password2.value === '') {
        showError(password2, 'Please enter a password2')
    } else {
        showSuccess(password2, 'Thanks!')
        console.log('success')
    }
})

