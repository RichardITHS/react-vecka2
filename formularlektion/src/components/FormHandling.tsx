import React, { useState } from "react";

const FormHandling = () => {
  const [namn, setNamn] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    alert(`hej ${namn}`);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNamn(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" value={namn} onChange={(e) => handleChange(e)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormHandling;
