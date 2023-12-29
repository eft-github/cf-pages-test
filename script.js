document.addEventListener('DOMContentLoaded', () => {
    fetch('/api')
        .then(response => response.json())
        .then(data => {
            document.body.innerHTML += `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => console.error('Error:', error));
});