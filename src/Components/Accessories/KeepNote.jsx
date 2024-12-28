
import { useState } from 'react';

const KeepNote = () => {
  // State to store the list of notes
  const [notes, setNotes] = useState([]);
  // State to store the input for new notes
  const [newNote, setNewNote] = useState('');

  // Function to handle adding a new note
  const addNote = () => {
    if (newNote.trim() === '') {
      return; // Prevent adding empty notes
    }

    // Create a new note object with the text and the current time
    const newNoteObj = {
      text: newNote,
      time: new Date().toLocaleString(), // Format the current time
    };

    setNotes([...notes, newNoteObj]);
    setNewNote(''); // Clear the input field after adding the note
  };

  // Function to handle deleting a note
  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div className="container card max-w-68 p-4 bg-gradient-to-r from-red-500 to-green-500">
      <h2 className="text-2xl font-bold text-center mb-4 text-black">Keep Note</h2>
      
      {/* Input for new note */}
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write a new note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button
          onClick={addNote}
          className="mt-2 w-full p-2 bg-blue-800 text-black rounded-lg hover:bg-blue-600"
        >
          Add Note
        </button>
      </div>

      {/* List of notes */}
      <div>
        {notes.length === 0 ? (
          <p className="text-center text-black font-semibold">No notes yet...</p>
        ) : (
          <ul className="space-y-2">
            {notes.map((note, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-2 rounded-lg shadow-sm text-black"
              >
                <div>
                  <span className="text-blue-500 font-bold">{index + 1}) </span>
                  {note.text}
                  <div className="text-gray-500 text-sm">Added: <span className='text-red-800'>{note.time}</span></div>
                </div>
                <button
                  onClick={() => deleteNote(index)}
                  className="hover:text-red-700 bg-red-500 text-black p-1 rounded-3xl"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default KeepNote;
