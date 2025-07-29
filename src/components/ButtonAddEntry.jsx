import { useState } from "react";

const ButtonAddEntry = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="m-10">
      <button className="btn btn-accent" onClick={() => setIsOpen(true)}>
        Add Entry
      </button>
      {isOpen && <button onClick={() => setIsOpen(false)}>schließen</button>}
    </div>
  );
};

// function ButtonAddEntry({ onClose, onSave }) {
//   const [datum, datumSet] = useState("");
//   const [text, textSet] = useState("");
// }

// const handleSubmit = (e) => {
//   e.preventDefault();
//   onSave({ text, datum });
//   setText("");
//   setDatum("");
//   onClose();
// };
// const ButtonAddEntry = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <button className="bg-amber-500" onClick={() => setCount(count + 1)}>
//       Du hast {count} geklickt!
//     </button>
//   );
// };
export default ButtonAddEntry;
