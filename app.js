document.getElementById('walletForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Previene il comportamento di invio standard del modulo

    const walletAddress = document.getElementById('walletAddress').value;
    fetch('http://localhost:3000/tokensOfOwner', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            walletAddress: walletAddress,
        }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').textContent =JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Errore:', error);
        document.getElementById('result').textContent = 'Si è verificato un errore';
    });
});
