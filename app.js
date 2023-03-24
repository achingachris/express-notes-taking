const express = require('express')

const app = express()
const notes = [] // In-memory notes storage

app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

// List notes
app.get('/notes', (req, res) => {
  res.json(notes)
})

// Add note
app.post('/notes', (req, res) => {
  const { title, content } = req.body
  const newNote = { id: Date.now(), title, content }
  notes.push(newNote)
  res.status(201).json(newNote)
})

// Edit note
app.put('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    const { title, content } = req.body;
  
    // Find the note in the notes array by its ID
    const noteIndex = notes.findIndex(note => note.id === noteId);
  
    if (noteIndex !== -1) {
      // Update the note
      notes[noteIndex].title = title;
      notes[noteIndex].content = content;
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  });
  

// Delete note
app.delete('/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id)
  const noteIndex = notes.findIndex((note) => note.id === noteId)

  if (noteIndex === -1) {
    res.status(404).json({ error: 'Note not found' })
  } else {
    notes.splice(noteIndex, 1)
    res.status(204).end()
  }
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
