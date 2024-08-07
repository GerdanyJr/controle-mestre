"use client";
import React, { forwardRef } from "react";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  required?: boolean;
  type?: string;
  invalid?: boolean;
}

export const Input = forwardRef(({ label, id, type, invalid, required, ...props }: InputProps, ref: any) => {
  return (
    <div className="flex flex-col w-full p-2 bg-white rounded-lg">
      <label
        htmlFor={id}
        className={`text-sm text-gray-500 ${invalid && "text-red-600"
          } font-medium w-full`}
      >
        {label}
        <span className="text-red-500">{required && "*"}</span>
      </label>
      <input
        className="text-lg font-bold outline-none"
        name={id}
        id={id}
        type={type ?? "text"}
        ref={ref}
        {...props}
      />
    </div>
  );
})