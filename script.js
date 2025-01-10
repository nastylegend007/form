const scriptURL = 'https://script.google.com/macros/s/AKfycbzP31w80MK6vNf_TpPel2bnx1Ao8Uqe6d_XmOOzjKWEBAScY9XCi6pOMSkmjpv1qt4_/exec';
const form = document.getElementById('dataForm');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    const formData = new FormData(form);

    fetch(scriptURL, { method: 'POST', body: formData })
        .then((response) => alert('Success! Your details have been submitted.'))
        .catch((error) => alert('Error! ' + error.message));
});
