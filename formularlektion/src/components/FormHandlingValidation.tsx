import React, { useState } from "react";

const FormHandlingValidation = () => {
  interface Formerrors {
    namn?: string;
    email?: string;
    password?: string;
  }

  const [namn, setNamn] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<Formerrors>({});

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    if (!namn) {
      setErrors({ namn: "please fill in name" });
    }
    if (!email) {
      setErrors({ email: "please fill in email" });
    }
    if (!password) {
      setErrors({ password: "please fill in password" });
    }
    console.log("form is submitted");
  };

  return (
    <div>
      <h3>FormHandlingValidation</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={namn}
            onChange={(e) => setNamn(e.target.value)}
          />
        </label>
        {errors.namn && <span>{errors.namn}</span>}
        <label>
          email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {errors.email && <span>{errors.email}</span>}
        <label>
          password:
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {errors.password && <span>{errors.password}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormHandlingValidation;
