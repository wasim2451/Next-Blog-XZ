"use client";

import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

export default function Home() {
  return (
    <main className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Blog 🚀</h1>

      <LoginLink className="px-4 py-2 bg-blue-600 text-white rounded">
        Log in
      </LoginLink>

      {/* Only show logout if you want, on protected areas */}
      <LogoutLink>Log out</LogoutLink>
    </main>
  );
}