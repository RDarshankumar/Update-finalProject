// function convert() {
//     const noun = document.getElementById('nounInput').value.trim();
//     if (noun === '') {
//         alert('Please enter a singular noun.');
//         return;
//     }

//     fetch(`/api/convert?noun=${encodeURIComponent(noun)}`)
//         .then(response => response.json())
//         .then(data => {
//             document.getElementById('result').innerText = `Plural: ${data.plural}`;
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// }
const express = require('express');
const pluralize = require('pluralize');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/convert', (req, res) => {
    const singularNoun = req.query.noun;
    const pluralNoun = pluralize(singularNoun);
    res.json({ plural: pluralNoun });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
