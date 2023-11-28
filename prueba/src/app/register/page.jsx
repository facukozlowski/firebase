"use client";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

export default function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { signup } = useAuth();
  const [error, setError] = useState();
  const router = useRouter();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      router.push("/");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/missing-password") {
        setError("La contraseña debe tener cómo minimo seis caracteres");
      }
      if (error.code === "auth/email-already-in-use") {
        setError("El correo ingresado ya se encuentra registrado");
      } else if (error.code === "auth/invalid-email") {
        setError("El correo ingresado no es válido");
      }
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="correo@gmail.com"
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={handleChange} />

        <label>Nombre de usuario</label>
        <input type="text" name="password" onChange={handleChange} />

        <label>telefono</label>
        <input type="number" name="password" onChange={handleChange} />

        <label>Pasaporte</label>
        <input type="text" name="password" onChange={handleChange} />

        <button>Register</button>
      </form>
    </div>
  );
}
