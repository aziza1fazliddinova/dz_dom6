let important = document.querySelectorAll('.important input');
let save = document.querySelector('.save');

save.onclick = () => {
    let a = true
    important.forEach((item) => {
        if (item.value === '') {
            item.classList.add('eror')
            a = false
        } else {
            item.classList.remove('eror')
        }
    })
    return a
}