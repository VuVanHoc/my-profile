import React from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex w-screen">
      <Sidebar />
      {children}
    </div>
  );
}
