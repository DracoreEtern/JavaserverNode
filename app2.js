fetch('http://localhost:3000/tokensOfOwner', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ walletAddress: '0x75cCa65e4caaA2085d5A359f36d467Eab08671b6' }),
})
.then(response => {
    if (!response.ok) {
        throw new Error('La richiesta non ha avuto successo');
    }
    return response.json();
})
.then(data => {
    console.log('Token posseduti:', data.tokens);
    // Qui puoi aggiungere la logica per visualizzare i token nell'interfaccia utente
})
.catch(error => {
    console.error('Errore:', error);
});
