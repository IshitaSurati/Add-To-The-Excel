document.getElementById('dataForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('https://script.google.com/macros/s/AKfycbzH8SPGI54GE901PoNk9pFKtMxp7SIDoi81YnKDWYjcNZl73SmA2rJfiyvlxJHQMxWCjQ/exec', {
        method: 'POST',
        body: formData
    }).then(response => {
        if (response.ok) {
            console.log('Data submitted successfully!');
            alert('Data submitted successfully!');
        } else {
            console.error('Failed to submit data:', response.status);
            alert('Failed to submit data. Please try again.');
        }
    }).catch(error => {
        console.error('Error submitting data:', error);
        alert('An error occurred. Please try again.');
    });
});
