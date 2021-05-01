import React, { useReducer } from "react";
import "./CSS/Form.css";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

export default function Form() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://174.138.103.233/api/employees", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(formData),
    })
      .then(() => window.location.reload())
      .catch((error) => console.log(error));
  };
  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>KULLANICI KAYIT</h1>
        <label>
          <p>ISIM :</p>
          <input
            name="firstName"
            type="text"
            value={this.state.firstName}
            onChange={handleChange}
            placeholder="FirstName..."
          />
        </label>
        <br />
        <label>
          <p>SOYISIM :</p>
          <input
            name="lastName"
            type="text"
            value={this.state.lastName}
            onChange={handleChange}
            placeholder="LastName..."
          />
        </label>
        <br />
        <label>
          <p> CINSIYET :</p>
          <select
            className="cinsiyet"
            onChange={handleChange}
            defaultValue="Select Gender"
          >
            <option defaultValue> Cinsiyet Seç</option>
            <option value="male">Bay</option>
            <option value="female">Bayan</option>
          </select>
        </label>
        <br />
        <label>
          <p>DOĞUM TARIHI :</p>
          <input
            name="birthday"
            type="date"
            value={this.state.password}
            onChange={handleChange}
            placeholder="Password..."
          />
        </label>
        <br />
        <label>
          <p>E-MAIL :</p>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={handleChange}
            placeholder="E-MAIL..."
          />
        </label>
        <br />
        <label>
          <p>SIFRE :</p>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={handleChange}
            placeholder="Password..."
          />
        </label>
        <br />
        <label>
          <p>ABAUT :</p>
          <textarea
            name="abaut"
            onChange={handleChange}
            type="submit"
            value="Submit"
          ></textarea>
        </label>
      </form>
    </div>
  );
}
