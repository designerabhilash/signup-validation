const submitsignup = document.querySelector('#submitsignup')
const fullname = document.querySelector('#fullname')
const emailaddress = document.querySelector('#emailaddress')
const password = document.querySelector('#password')
const confirmpwd = document.querySelector('#confirmpwd')

submitsignup.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    const nameVal = fullname.value.trim()
    const emailVal = emailaddress.value.trim()
    const passwordVal = password.value.trim()
    const confirmpwdVal = confirmpwd.value.trim()

    // console.log(nameVal)

    if(nameVal === '') {
        setErrorFor(fullname, 'Name cannot be blank')
    } else {
        setSuccessFor(fullname)
    }

    if(emailVal === '') {
        setErrorFor(emailaddress, 'Email cannot be blank')
    } else if(!isEmail(emailVal)) {
        setErrorFor(emailaddress, 'Email is not valid')
    } else {
        setSuccessFor(emailaddress)
    }

    if(passwordVal === '') {
        setErrorFor(password, 'Password cannot be blank')
    } else if(!isPwd(passwordVal)) {
        setErrorFor(password, 'Include 8-15 character Password contain at least 1 lowercase & 1 uppercase letter, one numeric digit, and one special character')
    } else {
        setSuccessFor(password)
    }

    if(confirmpwdVal === '') {
        setErrorFor(confirmpwd, 'Confirm Password cannot be blank')
    } else if(!isPwd(passwordVal)) {
        setErrorFor(password, 'Include 8-15 character Password contain at least 1 lowercase & 1 uppercase letter, one numeric digit, and one special character')
    } else if(passwordVal !== confirmpwdVal) {
        setErrorFor(confirmpwd, 'Password does not match')
    } else {
        setSuccessFor(confirmpwd)
    }
}

function setErrorFor(input, message) {
    const inputgroup = input.parentElement;
    const note = inputgroup.querySelector('.note')
    inputgroup.className = 'inputgroup error'
    note.innerText = message
}

function setSuccessFor(input) {
    const inputgroup = input.parentElement;
    const note = inputgroup.querySelector('.note')
    inputgroup.className = 'inputgroup success'
    note.style.display = 'none' 
}

function isEmail(email) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
}

function isPwd(pwd) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(pwd)
}