// 📁 components/EntryDetailModal.jsx
// Vollständige Anzeige + Löschmöglichkeit für einen Eintrag

import { forwardRef } from "react";

const EntryDetailModal = forwardRef(({ entry, onDelete }, ref) => {
  if (!entry) return null;

  return (
    <dialog ref={ref} className="modal">
      <div className="modal-box">
        <h2 className="text-2xl font-bold">{entry.title}</h2>
        <p className="text-sm text-gray-500">{entry.date}</p>
        {entry.imageUrl && (
          <img
            src={entry.imageUrl}
            alt="Eintrag"
            className="w-full my-4 rounded object-cover"
          />
        )}
        <p className="mb-4 whitespace-pre-wrap">{entry.content}</p>
        <div className="modal-action flex justify-between">
          <button
            className="btn btn-error"
            onClick={() => onDelete(entry.date)}
          >
            Löschen
          </button>
          <form method="dialog">
            <button className="btn">Schließen</button>
          </form>
        </div>
      </div>
    </dialog>
  );
});

export default EntryDetailModal;
