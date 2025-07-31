// Zeigt alle Einträge in Form von Karten

import DiaryCard from "./DiaryCard";

const DiaryList = ({ entries, onCardClick }) => {
  return (
    <div className="space-y-4">
      {entries.map((entry) => (
        <DiaryCard key={entry.date} entry={entry} onClick={onCardClick} />
      ))}
    </div>
  );
};

export default DiaryList;
