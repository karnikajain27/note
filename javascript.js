document.addEventListener('DOMContentLoaded', () => {
    const saveNoteButton = document.getElementById('saveNote');
    const noteInput = document.getElementById('noteInput');
    const notesList = document.getElementById('notes');

    // Load notes from localStorage
    const loadNotes = () => {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notesList.innerHTML = '';
        notes.forEach(note => {
            const li = document.createElement('li');
            li.textContent = note;
            notesList.appendChild(li);
        });
    };

    // Save note to localStorage
    const saveNote = () => {
        const note = noteInput.value.trim();
        if (note) {
            const notes = JSON.parse(localStorage.getItem('notes')) || [];
            notes.push(note);
            localStorage.setItem('notes', JSON.stringify(notes));
            noteInput.value = '';
            loadNotes();
        }
    };

    // Event listener for the save button
    saveNoteButton.addEventListener('click', saveNote);

    // Load notes on page load
    loadNotes();
});