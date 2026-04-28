import { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  // Add Note
  const handleAdd = () => {
    if (!title.trim() || !details.trim()) return;

    const newNotes = [...notes];
    newNotes.push({ title, details });
    setNotes(newNotes);

    setTitle("");
    setDetails("");
  };

  // Delete Note
  const handleDelete = (index) => {
    setNotes(notes.filter((note, i) => i !== index));
  };

  return (
    <div className="app">
      <h2>Notes App</h2>

      {/* Inputs */}
      <input type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <br />
      <br />

      <textarea placeholder="Enter Details" value={details} onChange={(e) => setDetails(e.target.value)} />
      <br />
      <br />

      <button onClick={handleAdd}>Add Note</button>

      {/* Notes */}
      <div className="notes">
        {notes.map((note, index) => (
          <div className="note-card" key={index}>
            <h3>{note.title}</h3>
            <p>{note.details}</p>

            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
