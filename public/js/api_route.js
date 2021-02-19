// Dependencies

const path = require('path');
const fs = require('fs');
const notes_Json = require('../../db/db.json')

// file path to local database (db.json)

const NOTES_DIR = path.resolve(__dirname, '../db');
const outputPath = path.join(NOTES_DIR, 'db.json');

// notesArr will be an array of the contents in db.json
let notesArr = notes_Json

module.exports = function(app) {

// GET responds with the notes entries array in db.json, converted to JSON format
app.get('/api/notes', function(req, res) {
        res.json(notes_Json);
    });
// POST pushes the new note into the note entries array, then the response is written in JSON format to db.json
app.post('/api/notes', function(req, res) {

    notesArr.push(req.body);

    let noteObj = JSON.stringify(notesArr, null, 2);

    fs.writeFile(outputPath, noteObj, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Success. Note Saved")
        }
            res.json(noteObj);
        });
    });

// DELETE uses a for loop to check if a note matches the search paramater.  If it does, that note is removed from the array.
app.delete('/api/notes/:id', function(req, res) {

    let chosen = req.params.id;
    console.log(chosen);

    for (var i =0; i < notesArr.length; i++) {
        if (chosen === notesArr[i].id) {
            notesArr.splice(i, 1);

        let noteObj = JSON.stringify(notesArr, null, 2);
        fs.writeFile(outputPath, noteObj, function(err) {
            if (err) {
                console.log(err);
            } else {
                res.json(noteObj);
                console.log("Sucess! Note Deleted.")
            }
        })
            }
        }
    })
}



