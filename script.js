const scriptURL = 'https://script.google.com/macros/s/AKfycbyzXJkTF8hqXWa-DSFaXw78j4LEuircR34oNQaFUWTRiTyU15K0r7CREedXkSW7OCak/exec'

const form = document.forms['Forms trial']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
