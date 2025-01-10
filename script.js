const scriptURL = 'https://script.google.com/macros/s/AKfycbyzXJkTF8hqXWa-DSFaXw78j4LEuircR34oNQaFUWTRiTyU15K0r7CREedXkSW7OCak/exec';
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
