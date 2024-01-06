let form = document.forms.login
let inp_reqs = form.querySelectorAll('.required input')
let eror = document.querySelector('.Error span')

form.onsubmit = (event) => {
    event.preventDefault();

    let error_count = 0

    inp_reqs.forEach(inp => {
        if (inp.value.length === 0) {
            inp.parentElement.classList.add('error-field')
            error_count++
        } else {
            inp.parentElement.classList.remove('error-field')
        }
    })
    if(error_count > 0) {
        alert('Введите все данные')
    } else {
        submit()
    }
  eror.innerHTML= error_count
}


function submit() {
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}

function validateInput(inputElement, regex) {
    let i = inputElement.value
    let valid = regex.test(i)

    if (!valid) {
        inputElement.style.border = '1px solid red'
    } else {
        inputElement.style.border = ''
    }
}