"use client";

import { useState } from 'react';
import './globals.css'

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}


export default function Home() {
  const [user, setUser] = useState<User | null>(null);

  const kullaniciYukle = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await res.json();
    setUser(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Kullanıcı Bilgileri</h1>
      
      {user ? (
        <div className="bg-white py-4 px-6 rounded-lg shadow-lg text-center">
          <p className="text-xl font-semibold">{user.name}</p>
          <p className="text-gray-600">{user.username}</p>
          <p className="text-gray-500">{user.email}</p>
        </div>
      ) : (
        <p className="text-lg text-gray-500">Yükleniyor...</p>
      )}

      <button
        onClick={kullaniciYukle}
        className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
      >
        Kullanıcı Getir
      </button>
    </div>
  );
  }
