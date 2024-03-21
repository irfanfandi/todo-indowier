import { useRef } from "react";

function MyComponent() {
  const inputRef = useRef(null);

  const handleClick = () => {
    // Fokus pada input ketika tombol diklik
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}
