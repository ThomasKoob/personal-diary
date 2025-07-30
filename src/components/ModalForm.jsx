// 📁 components/ModalForm.jsx
// Modal mit Formular zum Hinzufügen eines neuen Eintrags

import { useState, forwardRef } from "react";

const ModalForm = forwardRef(({ onSave, onClose }, ref) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [imageData, setImageData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !content) {
      alert("Bitte alle Pflichtfelder ausfüllen.");
      return;
    }
    const newEntry = { title, date, imageUrl: imageData, content };
    onSave(newEntry);
    onClose();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setImageData(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <dialog ref={ref} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Neuer Tagebucheintrag</h3>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="text"
            placeholder="Titel"
            className="input input-bordered w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="date"
            className="input input-bordered w-full"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            className="file-input file-input-bordered w-full"
            onChange={handleImageUpload}
          />
          {imageData && (
            <img
              src={imageData}
              alt="Vorschau"
              className="w-full h-48 object-cover rounded"
            />
          )}
          <textarea
            placeholder="Dein Text..."
            className="textarea textarea-bordered w-full"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="modal-action">
            <button type="submit" className="btn btn-success">
              Speichern
            </button>
            <button type="button" className="btn" onClick={onClose}>
              Schließen
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
});

export default ModalForm;
