const scriptURL = 'https://script.google.com/macros/s/AKfycbyUMs96rezVFzCeAtCUSvZHTm7QLI1Qusn2-SSInGWMg1qrp1qk1EqlNuEXq6BVsTBy/exec'

const form = document.forms['Forms trial']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
