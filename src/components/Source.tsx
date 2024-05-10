import React, { useState } from "react";

export const Source: React.FC = () => {
  const [url, setUrl] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., send URL to backend
    console.log("Submitted URL:", url);
  };

  return (
    <div className="bg-white border-gray-100 border-2 rounded-lg px-8 py-5 mr-20 w-full">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
        <div className="flex flex-col md:flex-row items-center md:items-start md:mr-4 w-full">
          <label
            htmlFor="url"
            className="block text-sm font-medium text-gray-700 mr-2 md:mr-0"
          >
            Documentaion URL
          </label>
          <input
            type="text"
            id="url"
            name="url"
            value={url}
            onChange={handleChange}
            className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="Enter URL"
          />
        </div>
        <button
          type="submit"
          className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
