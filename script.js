const scriptURL = 'https://script.google.com/macros/s/AKfycbwWypRrj67dKGBrrMiIt4L0G2awFAc-KFeUe6duxU_54Uc_4H8QizKLXr6gBcPkqvm4/exec';
const form = document.getElementById('dataForm');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    const formData = new FormData(form);

    fetch(scriptURL, { method: 'POST', body: formData })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(() => alert('Success! Your details have been submitted.'))
        .catch((error) => alert('Error! ' + error.message));
});
