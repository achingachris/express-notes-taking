const noteTitleInput = document.getElementById('note-title')
const noteContentInput = document.getElementById('note-content')
const saveNoteButton = document.getElementById('save-note')
const notesList = document.getElementById('notes-list')
let editingNoteId = null

const fetchNotes = async () => {
  try {
    const response = await fetch('/notes')
    const notes = await response.json()
    renderNotes(notes)
  } catch (error) {
    console.error(error)
  }
}

const renderNotes = (notes) => {
  try {
    notesList.innerHTML = notes
      .map(
        (note) => `
              <div class="bg-white p-4 rounded shadow mb-4 px-4">
                  <h2 class="text-xl font-semibold">${note.title}</h2>
                  <p>${note.content.substring(0, 100)}</p>
                  <button onclick="editNote('${
                    note.id
                  }')" class="bg-yellow-500 rounded text-white p-2 mt-2">Edit</button>
                  <button onclick="deleteNote('${
                    note.id
                  }')" class="bg-red-500 rounded text-white p-2 mt-2">Delete</button>
                  <div class="flex space-x-2 mt-2">
                      <button onclick="shareToTwitter('${note.title}', '${
          note.content
        }')" class="bg-blue-500 rounded text-white p-2">Share on Twitter</button>
                      <button onclick="shareToFacebook('${note.title}', '${
          note.content
        }')" class="bg-blue-800 rounded text-white p-2">Share on Facebook</button>
                      <button onclick="shareToLinkedIn('${note.title}', '${
          note.content
        }')" class="bg-blue-300 rounded text-white p-2">Share on LinkedIn</button>
                      <button onclick="shareViaEmail('${note.title}', '${
          note.content
        }')" class="bg-green-500 rounded text-white p-2">Share via Email</button>
                  </div>
              </div>
          `
      )
      .join('')
  } catch (error) {
    console.error(error)
  }
}

const addOrUpdateNote = async () => {
  try {
    const title = noteTitleInput.value
    const content = noteContentInput.value

    if (title.trim() && content.trim()) {
      if (editingNoteId) {
        await fetch(`/notes/${editingNoteId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, content }),
        })
      } else {
        await fetch('/notes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, content }),
        })
      }

      noteTitleInput.value = ''
      noteContentInput.value = ''
      editingNoteId = null
      saveNoteButton.textContent = 'Save Note'
      fetchNotes()
    }
  } catch (error) {
    console.error(error)
  }
}

const editNote = async (id) => {
  try {
    const response = await fetch(`/notes/${id}`)
    const note = await response.json()

    noteTitleInput.value = note.title
    noteContentInput.value = note.content
    editingNoteId = id
    saveNoteButton.textContent = 'Update Note'
  } catch (error) {
    console.error(error)
  }
}

const deleteNote = async (id) => {
  try {
    await fetch(`/notes/${id}`, { method: 'DELETE' })
    fetchNotes()
  } catch (error) {
    console.log(error)
  }
}
const shareToTwitter = (title, content) => {
  try {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      title
    )} - ${encodeURIComponent(content.substring(0, 200))}`
    window.open(url, '_blank')
  } catch (error) {
    console.error(error)
  }
}

const shareToFacebook = (title, content) => {
  try {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      document.location.href
    )}&quote=${encodeURIComponent(title)} - ${encodeURIComponent(
      content.substring(0, 200)
    )}`
    window.open(url, '_blank')
  } catch (error) {
    console.error(error)
  }
}

const shareToLinkedIn = (title, content) => {
  try {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      document.location.href
    )}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(
      content.substring(0, 200)
    )}`
    window.open(url, '_blank')
  } catch (error) {
    console.error(error)
  }
}

const shareViaEmail = (title, content) => {
  try {
    const mailtoLink = `mailto:?subject=${encodeURIComponent(
      title
    )}&body=${encodeURIComponent(content)}`
    window.location.href = mailtoLink
  } catch (error) {
    console.error(error)
  }
}

saveNoteButton.addEventListener('click', addOrUpdateNote)
fetchNotes()
