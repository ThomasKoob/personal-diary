// 📁 components/DiaryCard.jsx
// Eine einzelne Eintrags-Karte

const DiaryCard = ({ entry, onClick }) => {
  return (
    <div
      className="card bg-base-100 shadow-md cursor-pointer hover:shadow-lg transition p-4"
      onClick={() => onClick(entry)}
    >
      <h2 className="text-xl font-bold">{entry.title}</h2>
      <p className="text-sm text-gray-600">{entry.date}</p>
      {entry.imageUrl && (
        <img
          src={entry.imageUrl}
          alt="Eintrag"
          className="w-full h-48 object-cover my-2 rounded"
        />
      )}
      <p className="line-clamp-3">{entry.content}</p>
    </div>
  );
};

export default DiaryCard;
