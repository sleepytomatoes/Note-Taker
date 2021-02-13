const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Routes

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')))
  
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
 
app.get('/api/notes/:note', (req, res) => {
    const chosen = req.params.character;
  
    console.log(chosen);
  
    /* Check each character routeName and see if the same as "chosen"
     If the statement is true, send the character back as JSON,
     otherwise send the boolean value false as JSON */
  
    for (let i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
      }
    }
  
    return res.json(false);
  });
  
  // Create New Characters - takes in JSON input
  app.post('/api/characters', (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const newcharacter = req.body;
  
    console.log(newcharacter);
  
    // We then add the json the user sent to the character array
    characters.push(newcharacter);
  
    // We then display the JSON to the users
    res.json(newcharacter);
  });
  
// starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));