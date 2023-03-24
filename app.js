const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());
app.use(express.static('public'));

const NOTES_FILE = 'notes.json';

function readNotes() {
    try {
        return JSON.parse(fs.readFileSync(NOTES_FILE, 'utf8'));
    } catch (err) {
        return [];
    }
}

function writeNotes(notes) {
    fs.writeFileSync(NOTES_FILE, JSON.stringify(notes, null, 2));
}

app.get('/notes', (req, res) => {
    res.json(readNotes());
});

app.post('/notes', (req, res) => {
    const notes = readNotes();
    const newNote = { ...req.body, id: uuidv4() };
    notes.push(newNote);
    writeNotes(notes);
    res.status(201).json(newNote);
});

app.get('/notes/:id', (req, res) => {
    const note = readNotes().find((note) => note.id === req.params.id);
    if (note) {
        res.json(note);
    } else {
        res.status(404).json({ error: 'Note not found' });
    }
});

app.put('/notes/:id', (req, res) => {
    const notes = readNotes();
    const noteIndex = notes.findIndex((note) => note.id === req.params.id);
    if (noteIndex !== -1) {
        notes[noteIndex] = { ...notes[noteIndex], ...req.body };
        writeNotes(notes);
        res.json(notes[noteIndex]);
    } else {
        res.status(404).json({ error: 'Note not found' });
    }
});

app.delete('/notes/:id', (req, res) => {
    const notes = readNotes();
    const noteIndex = notes.findIndex((note) => note.id === req.params.id);
    if (noteIndex !== -1) {
        notes.splice(noteIndex, 1);
        writeNotes(notes);
        res.json({ message: 'Note deleted' });
    } else {
        res.status(404).json({ error: 'Note not found' });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
