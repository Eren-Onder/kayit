import React, { Component } from "react";
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
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(formData),
    });
  };
  const handleChange = (event) => { 
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };
}


    
  firsthandler = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  lasthandler = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  passwordhandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  genderhandler = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };
  birtdayhandler = (event) => {
    this.setState({
      birtday: event.target.value,
    });
  };
  emailhandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  abouthandler = (event) => {
    this.setState({
      about: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(
      `${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`
    );
    console.log(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      gender: "",
      birtday: "",
      email: "",
      password: "",
      about: "",
    });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>KULLANICI KAYIT</h1>
          <label>ISIM :</label>{" "}
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="FirstName..."
          />
          <br />
          <label>SOYISIM :</label>{" "}
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="LastName..."
          />
          <br />
          <label> CINSIYET :</label>
          <select
            className="cinsiyet"
            onChange={this.handleChange}
            defaultValue="Select Gender"
          >
            <option defaultValue> Cinsiyet Seç</option>
            <option value="male">Bay</option>
            <option value="female">Bayan</option>
          </select>
          <br />
          <label>DOĞUM TARIHI :</label>{" "}
          <input
            type="date"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password..."
          />
          <br />
          <label>E-MAIL :</label>{" "}
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="E-MAIL..."
          />
          <br />
          <label>SIFRE :</label>{" "}
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password..."
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
