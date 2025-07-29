import { useState } from "react";

const ModalForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const entries = { title, text, date, img };
  const storageEntries = JSON.parse(localStorage.getItem("entries")) || [];

  return (
    <div className="">
      <input
        placeholder="Titel"
        type="text"
        name="title"
        id=""
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        name="img"
        id=""
        onChange={(e) => setImg(e.target.files[0])}
      />
      <input
        type="date"
        name="date"
        id=""
        onChange={(e) => setDate(e.target.value)}
      />
      <textarea
        placeholder="Hier könnte dein Text stehen!"
        name="text"
        id=""
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        onClick={() => localStorage.setItem("entries", JSON.stringify(entries))}
      >
        speichern
      </button>
    </div>
  );
};

export default ModalForm;
