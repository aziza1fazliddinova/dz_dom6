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
        alert('Чушпан')
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