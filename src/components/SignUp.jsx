import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const newUser = {
    firstName,
    lastName,
    gender,
    email,
    password,
  };

  function handleSignUp(e) {
    e.preventDefault();

    setErrors({
      firstName: firstName ? "" : "First Name cannot be empty!",
      lastName: lastName ? "" : "Last Name cannot be empty!",
      gender: gender ? "" : "You must select a gender!",
      email: email ? "" : "Email cannot be empty!",
      password: password ? "" : "Password cannot be empty!",
    });

    if (firstName && lastName && gender && email && password) {
      localStorage.setItem("user", JSON.stringify(newUser));
      navigate("/login");
    }
  }

  return (
    <div>
      <form onSubmit={(e) => handleSignUp(e)}>
        <div>
          <label>First Name: </label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="first name"
          />
        </div>
        {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}
        <div>
          <label>Last Name: </label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="last name"
          />
        </div>
        {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
        <div>
          <label>Gender: </label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option>SELECT</option>
            <option value={"MALE"}>MALE</option>
            <option value={"FEMALE"}>FEMALE</option>
          </select>
        </div>
        {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
        <div>
          <label>Email: </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
          />
        </div>
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <div>
          <label>Password: </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
        </div>
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        <button type="submit">Create</button>
      </form>
      <div>
        <Link to="/login">
          <p>Already has an account? Click to create login!</p>
        </Link>
      </div>
    </div>
  );
}
