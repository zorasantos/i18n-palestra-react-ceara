import React, { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  darkMode?: boolean;
}

const TextField: React.FC<InputFieldProps> = ({ id, label, placeholder, darkMode = false, ...rest }) => {
  const inputClassName = `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
    darkMode
      ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      : ''
  }`;

  return (
    <div>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        type="text"
        id={id}
        className={inputClassName}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default TextField;
