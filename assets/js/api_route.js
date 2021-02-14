// app.get('/api/notes', (req, res) => {
//     let json = getJson();
//     console.log(json);
//     res.json(json)
// })

// app.post('/api/notes', (req, res) => {
//     addNoteToJson(req.body)
//     res.json(getJson());
// })

// function getJson() {
//     let data = fs.readFileSync(__dirname + '.../db.json');
//     let json = JSON.parse(data);
//     console.log('data retrieved')
//     return json;
// }

// function createNoteObject(data) {
//     let obj = {title: data.title,
//                text: data.text,
//                complete: false,
//                hidden: false}
//         return obj;
// }

// function addNoteToJson(note) {
//     let json = getJson();
//     let newNote = createNoteObject(note);
//     json.push(newNote);
//     saveJson(json);
// }
  
// function saveJson(jsonData) {
//     let data = JSON.stringify(jsonData);
//     fs.writeFileSync(__dirname + '.../db.json', data)
// }