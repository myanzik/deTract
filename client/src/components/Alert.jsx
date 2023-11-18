import React from "react";

export default function Alert({ title, message }) {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center"
      role="alert"
    >
      <strong className="font-bold">{title}</strong>&nbsp;
      <span className="block sm:inline">{message}</span>
    </div>
  );
}
