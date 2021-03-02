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
function showSuccess(input) {
    const formControl = input.parentElement //will get the parent element of this element
    formControl.classList.add('success')
}

//function to check if email is valid
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//function to check the length it will take in a username,minimum length, and maximum length
function checkLength(input, minLength, maxLength) {
    let userInput = input.value
    let length = userInput.length
    if (length < minLength) {
        console.log('not enough chars')
    } else if (length > maxLength) {
        console.log('too many chars')
    }
    console.log('input: ', length)
}

//check required fields
function checkRequired(inputArray) {
    for (let input of inputArray) {
        let inputName = input.className
        if (input.value === '') {
            showError(input, `Please enter a valid ${getFieldName(input)}`)
        } else {
            showSuccess(input)
        }
    }
}

function getFieldName(input) {
    let field = input.className
    let capitalizedWord = field.charAt(0).toUpperCase() + field.slice(1)

    return capitalizedWord

    //if we're not able to make a new string we can edit the existing one like so
    // let fieldSplit = field.split('')
    // let firstLetter = fieldSplit.splice(0, 1)
    // let capitalizedLetter = firstLetter[0].toUpperCase()
    // let addCapLetter = fieldSplit.unshift(capitalizedLetter)
    // let capitalizedWord = fieldSplit.join('')
}

//Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault()
    checkRequired([username, email, password, password2])
})



//This was the code before we refactored to get rid of all the if statements
// form.addEventListener('submit', function (e) {
//     e.preventDefault()
//     if (username.value === '') {
//         showError(username, 'Please enter a Username')
//     } else {
//         showSuccess(username, 'Thanks!')
//         checkLength(username, 3, 8)
//     }

//     if (email.value === '') {
//         showError(email, 'Please enter an email')
//     } else if (!isValidEmail(email)) {
//         showError(email, 'Email is not valid')
//     } else {
//         showSuccess(email, 'Thanks!')
//     }

//     if (password.value === '') {
//         showError(password, 'Please enter a password')
//     } else {
//         showSuccess(password, 'Thanks!')
//     }

//     if (password2.value === '') {
//         showError(password2, 'Please enter a password2')
//     } else {
//         showSuccess(password2, 'Thanks!')
//     }
// })

