// components/app-sidebar.tsx
"use client";

export function AppSidebar():RCeact.F {
  return (
    <aside className="w-64 h-screen border-r bg-gray-50 p-4">
      <h2 className="font-bold mb-4">Sidebar</h2>
      <ul className="space-y-2 text-sm">
        <li>Dashboard link 1</li>
        <li>Dashboard link 2</li>
      </ul>
    </aside>
  );
}