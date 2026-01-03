import { useState, useEffect } from "react";

function GovNotes() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("govNotes")) || [];
    setNotes(saved);
  }, []);

  const addNote = () => {
    if (!text.trim()) return;

    const newNote = {
      message: text,
      date: new Date().toLocaleDateString("en-IN"),
      state: "Maharashtra"
    };

    const updated = [newNote, ...notes];
    setNotes(updated);
    localStorage.setItem("govNotes", JSON.stringify(updated));
    setText("");
  };

  return (
    <div>
      <div className="gov-header">
        <h3>Official Government Updates</h3>
        <span className="badge">Verified</span>
      </div>

      <p className="gov-subtitle">
        Updates shared by authorized state or central government officials.
      </p>

      <div className="gov-form">
        <textarea
          placeholder="Enter official update..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addNote}>Publish Update</button>
      </div>

      <div className="gov-list">
        {notes.length === 0 && (
          <p className="empty">No official updates published yet.</p>
        )}

        {notes.map((note, i) => (
          <div key={i} className="gov-card">
            <div className="gov-card-header">
              <strong>{note.state} Government</strong>
              <span>{note.date}</span>
            </div>
            <p>{note.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GovNotes;
