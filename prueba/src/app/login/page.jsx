"use client";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle } = useAuth();
  const [error, setError] = useState();
  const router = useRouter();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      router.push("/");
    } catch (error) {
      setError();
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="p-10">
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

        <button>Login</button>
      </form>

      <div className="p-10">
        <button onClick={handleGoogleLogin}>
          Ingresa con tu cuenta de Google
        </button>
      </div>

      <div className="p-10">
        <p>No tienes cuenta?</p>
        <Link href="/register">Crear Usuario</Link>
      </div>
    </div>
  );
}
