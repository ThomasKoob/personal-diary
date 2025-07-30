// 📁 App.jsx
// Hauptkomponente – verwaltet State, localStorage, und die Modale

import { useState, useRef, useEffect } from "react";
import ModalForm from "./components/ModalForm";
import DiaryList from "./components/DiaryList";
import EntryDetailModal from "./components/EntryDetailModal";

const App = () => {
  const [entries, setEntries] = useState([]); // Alle Tagebucheinträge
  const [selectedEntry, setSelectedEntry] = useState(null); // Eintrag zur Detailanzeige
  const modalRef = useRef(); // Modal zum Hinzufügen
  const detailModalRef = useRef(); // Modal zur Anzeige

  // 🚀 Lade beim ersten Start vorhandene Einträge aus localStorage
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("diaryEntries"));
      if (Array.isArray(stored)) setEntries(stored);
    } catch (e) {
      console.error("Fehler beim Parsen von localStorage:", e);
      setEntries([]); // fallback auf leeres Array
    }
  }, []);

  // 💾 Speichere automatisch bei Änderungen
  useEffect(() => {
    localStorage.setItem("diaryEntries", JSON.stringify(entries));
  }, [entries]);

  const openModal = () => {
    setSelectedEntry(null); // neues Formular → leeren Eintrag anzeigen
    modalRef.current?.showModal();
  };

  const closeModal = () => modalRef.current?.close();

  const handlerCardClick = (entry) => {
    setSelectedEntry(entry); // zeigt Eintrag im Detailmodal
    detailModalRef.current?.showModal();
  };

  const handleDeleteEntry = (date) => {
    const updated = entries.filter((e) => e.date !== date);
    setEntries(updated);
    detailModalRef.current?.close();
  };

  const handleSaveEntry = (newEntry) => {
    const exists = entries.some((entry) => entry.date === newEntry.date);
    if (exists) {
      alert("Für dieses Datum existiert bereits ein Eintrag.");
      return;
    }
    setEntries([...entries, newEntry]);
  };

  // 📅 Sortiert nach Datum (neuester zuerst)
  const sortedEntries = [...entries].sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <button className="btn btn-primary mb-4" onClick={openModal}>
        Eintrag hinzufügen
      </button>

      <ModalForm ref={modalRef} onSave={handleSaveEntry} onClose={closeModal} />
      <EntryDetailModal
        ref={detailModalRef}
        entry={selectedEntry}
        onDelete={handleDeleteEntry}
      />
      <DiaryList entries={sortedEntries} onCardClick={handlerCardClick} />
    </div>
  );
};

export default App;
