// Dependencies

const path = require('path');
const fs = require('fs');
const notes_Json = require('.../db.json')

// file path to local database (db.json)

const NOTES_DIR = path.resolve(__dirname, '.../db.json');
const outputPath = path.join(NOTES_DIR, 'db.json');

let notesArr = notes_Json

module.exports = function(app) {

    app.get('/api/notes', function(req, res) {
        res.json(notes_Json);
    });

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

}
