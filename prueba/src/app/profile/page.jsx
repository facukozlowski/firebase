"use client";
import { UserAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";

export default function Profile() {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="p-80">
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <p>Welcome, {user.displayName} - estas logueado, este es tu perfil</p>
      ) : (
        <p>
          No estas logueado, debes iniciar sesion para acceder a esta pagina
        </p>
      )}
    </div>
  );
}
