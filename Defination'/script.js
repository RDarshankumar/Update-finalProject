function fetchDefinition() {
    const word = document.getElementById('wordInput').value.trim();
    if (word === '') {
        alert('Please enter a word!');
        return;
    }

    
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => response.json())
        .then(data => {
            const definitionDiv = document.getElementById('definition');
            if (data.title === "No Definitions Found") {
                definitionDiv.innerHTML = `<p>No definitions found for "${word}". Please try another word.</p>`;
            } else {
                const meanings = data[0].meanings;
                let definitionHTML = `<h2>Definitions for "${word}"</h2>`;
                meanings.forEach(meaning => {
                    definitionHTML += `<p><strong>${meaning.partOfSpeech}:</strong> ${meaning.definitions[0].definition}</p>`;
                });
                definitionDiv.innerHTML = definitionHTML;
            }
        })
        .catch(error => {
            console.error('Error fetching definition:', error);
            alert('An error occurred while fetching the definition. Please try again later.');
        });
}
