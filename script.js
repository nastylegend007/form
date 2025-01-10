const scriptURL = 'https://script.google.com/macros/s/AKfycbxzsgJRSreCwT-7LzIzBsXL_wbDYXQ4cJwLV45P2uJkeDeexIfZ6WPqjJJwRWs7Mr5Q/exec';
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
