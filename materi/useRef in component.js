/* eslint-disable react/display-name */
import React, { useRef } from "react";

function MyComponent() {
  const myComponentRef = useRef(null);

  const handleButtonClick = () => {
    // Memanggil metode kustom pada komponen
    myComponentRef.current.customMethod();
  };

  return (
    <div>
      <ChildComponent ref={myComponentRef} />
      <button onClick={handleButtonClick}>Call Method</button>
    </div>
  );
}

// Definisi komponen anak
const ChildComponent = React.forwardRef((props, ref) => {
  const customMethod = () => {
    console.log("Metode kustom dipanggil!");
  };

  // Menghubungkan ref dengan komponen anak
  React.useImperativeHandle(ref, () => ({
    customMethod,
  }));

  return <div>Komponen Anak</div>;
});
