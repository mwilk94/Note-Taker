const noteTaking = require("../db/store");

module.exports = app => {

  app.get('/api/notes', (req, res) => {
    noteTaking
      .getAll()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        console.log(err);
        return res.status(500).end();
      });
  })

  app.post('/api/notes', (req, res) => {
    const newNote = req.body;

    const randomNum = Math.floor((Math.random()*1000000) + 1);
    newNote.id = randomNum;

    noteTaking
      .push(newNote)
      .then(() => {
        res.json(newNote);
      })
      .catch(err => {
        console.log(err);
        return res.status(500).end();
      }); 
  })

  app.get('/api/notes/:id', (req, res) => {
    const chosen = req.params.id;
    noteTaking
      .getAll()
      .then(data => {
        res.json(data[chosen]);
      })
      .catch(err => {
        console.log(err);
        return res.status(500).end();
      })
  })
