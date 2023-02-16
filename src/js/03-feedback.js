
let formData = {};
const form = document.querySelector(".feedback-form");

form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value.trim()
    let email = form.elements.email;
    let message = form.elements.message;
    if (email.value.trim() == '') {
        return
    } else {
        localStorage.setItem('feedback-form-state', JSON.stringify(formData))
    }

    if  (message.value.trim() == '') {
        return
    } else {
        localStorage.setItem('feedback-form-state', JSON.stringify(formData))
    }
})

if (localStorage.getItem('feedback-form-state')) {
    formData = JSON.parse(localStorage.getItem('feedback-form-state'))
    for (let key in formData) {
        form.elements[key].value = formData[key]
    }
}

const btnSubmit = document.querySelector('[type="submit"]');
btnSubmit.addEventListener('click', (event) => {
    event.preventDefault()
    let email = form.elements.email;
    let message = form.elements.message;

    if (email.value.trim() == '' || message.value.trim() == '') {
        alert('Всі поля повинні бути заповнені.')
    } else {
        let feedbackMessage = {
            email: email.value.trim(),
            message: message.value.trim(),
      }
      console.log(feedbackMessage)
      form.reset()
      localStorage.removeItem('feedback-form-state')
    }
});